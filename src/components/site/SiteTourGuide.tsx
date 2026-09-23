import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ExternalLink, Globe2, X } from "lucide-react";
import {
  TOUR_INTENT_EXAMPLES,
  TOUR_SHORTCUTS,
  TOUR_STEPS,
  TOUR_UI,
  type TourTargetId,
} from "@/data/tourContent";
import {
  markTourFinished,
  readTourLang,
  shouldAutoOpenTour,
  writeTourLang,
  type TourLang,
} from "@/lib/tourPersistence";
import { recordHref, searchHits } from "@/lib/unifiedSearch";

const SPOT_PAD = 6;
const VIEW_PAD = 20;
const CARD_GAP = 14;
const TICKER_SAFE = 52; // keep clear of bottom announcement bar
const MOBILE_MQ = "(max-width: 767px)";

type SpotRect = { top: number; left: number; width: number; height: number };
type CardPlacement = { top: number; left: number; width: number; maxHeight: number };

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia(MOBILE_MQ).matches;
}

function unionRects(els: Element[]): SpotRect | null {
  const boxes = els
    .map((el) => el.getBoundingClientRect())
    .filter((r) => r.width > 2 && r.height > 2);
  if (!boxes.length) return null;
  const left = Math.min(...boxes.map((b) => b.left));
  const top = Math.min(...boxes.map((b) => b.top));
  const right = Math.max(...boxes.map((b) => b.right));
  const bottom = Math.max(...boxes.map((b) => b.bottom));
  return { left, top, width: right - left, height: bottom - top };
}

function resolveTarget(id: TourTargetId): { el: Element | null; rect: SpotRect | null } {
  if (!id) return { el: null, rect: null };
  if (id === "a11y") {
    const nodes = Array.from(
      document.querySelectorAll('[data-tour="a11y"], [data-tour="lang-switch"]'),
    );
    const visible = nodes.filter((n) => {
      const r = n.getBoundingClientRect();
      const style = window.getComputedStyle(n);
      return r.width > 2 && r.height > 2 && style.visibility !== "hidden" && style.display !== "none";
    });
    return { el: visible[0] ?? null, rect: unionRects(visible) };
  }
  const el = document.querySelector(`[data-tour="${id}"]`);
  if (!el) return { el: null, rect: null };
  const r = el.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return { el, rect: null };
  return {
    el,
    rect: { top: r.top, left: r.left, width: r.width, height: r.height },
  };
}

function getFocusable(root: HTMLElement): HTMLElement[] {
  const sel =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  return Array.from(root.querySelectorAll<HTMLElement>(sel)).filter(
    (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true",
  );
}

function rectsOverlap(a: SpotRect, b: SpotRect, pad = 4): boolean {
  return !(
    a.left + a.width + pad <= b.left ||
    b.left + b.width + pad <= a.left ||
    a.top + a.height + pad <= b.top ||
    b.top + b.height + pad <= a.top
  );
}

/** How much of the target sits inside the usable viewport (excluding ticker). */
function targetVisibleRatio(rect: SpotRect): number {
  const vw = window.innerWidth;
  const vh = window.innerHeight - TICKER_SAFE;
  const left = Math.max(rect.left, 0);
  const top = Math.max(rect.top, 0);
  const right = Math.min(rect.left + rect.width, vw);
  const bottom = Math.min(rect.top + rect.height, vh);
  const vis = Math.max(0, right - left) * Math.max(0, bottom - top);
  const area = Math.max(1, rect.width * rect.height);
  return vis / area;
}

function clampCardBox(
  top: number,
  left: number,
  width: number,
  height: number,
): { top: number; left: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxTop = Math.max(VIEW_PAD, vh - TICKER_SAFE - height - VIEW_PAD);
  const maxLeft = Math.max(VIEW_PAD, vw - width - VIEW_PAD);
  return {
    top: Math.min(Math.max(VIEW_PAD, top), maxTop),
    left: Math.min(Math.max(VIEW_PAD, left), maxLeft),
  };
}

/**
 * Viewport-aware placement. Prefers the side with the most free space,
 * with an optional bias to sit LEFT of right-edge targets (Quick Services / RTS).
 * Returns null → caller should use centered modal fallback.
 */
function computeCardPlacement(
  target: SpotRect,
  cardW: number,
  cardH: number,
  preferLeft: boolean,
): CardPlacement | null {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const usableBottom = vh - TICKER_SAFE - VIEW_PAD;
  const maxHeight = Math.min(cardH, usableBottom - VIEW_PAD, Math.floor(vh * 0.88));
  const height = Math.max(180, maxHeight);
  const width = Math.min(cardW, vw - VIEW_PAD * 2);

  if (width < 240 || height < 160) return null;

  const spaceLeft = target.left - VIEW_PAD - CARD_GAP;
  const spaceRight = vw - (target.left + target.width) - VIEW_PAD - CARD_GAP;
  const spaceAbove = target.top - VIEW_PAD - CARD_GAP;
  const spaceBelow = usableBottom - (target.top + target.height) - CARD_GAP;

  type Cand = { top: number; left: number; score: number };
  const cands: Cand[] = [];

  const push = (top: number, left: number, baseScore: number) => {
    const boxed = clampCardBox(top, left, width, height);
    const box: SpotRect = { top: boxed.top, left: boxed.left, width, height };
    let score = baseScore;
    if (rectsOverlap(box, target, 8)) score -= 1200;
    // Prefer keeping card fully on-screen (clamp already applied; reward if little movement)
    score -= Math.abs(boxed.top - top) * 0.4 + Math.abs(boxed.left - left) * 0.4;
    cands.push({ top: boxed.top, left: boxed.left, score });
  };

  // 1) Left of target (best for right-side hero pills)
  if (spaceLeft >= width * 0.72) {
    push(
      target.top + target.height / 2 - height / 2,
      target.left - CARD_GAP - width,
      spaceLeft + (preferLeft ? 500 : 120),
    );
  }

  // 2) Below + left-biased
  if (spaceBelow >= Math.min(height * 0.55, 220)) {
    const leftBias = preferLeft
      ? Math.min(target.left - width * 0.35, target.left + target.width / 2 - width / 2)
      : target.left + target.width / 2 - width / 2;
    push(target.top + target.height + CARD_GAP, leftBias, spaceBelow + (preferLeft ? 160 : 80));
  }

  // 3) Above + left-biased
  if (spaceAbove >= Math.min(height * 0.55, 220)) {
    const leftBias = preferLeft
      ? Math.min(target.left - width * 0.35, target.left + target.width / 2 - width / 2)
      : target.left + target.width / 2 - width / 2;
    push(target.top - CARD_GAP - height, leftBias, spaceAbove + (preferLeft ? 140 : 70));
  }

  // 4) Right of target
  if (spaceRight >= width * 0.72) {
    push(
      target.top + target.height / 2 - height / 2,
      target.left + target.width + CARD_GAP,
      spaceRight + (preferLeft ? 20 : 110),
    );
  }

  // 5) Same vertical band, forced into left half of viewport (right-edge rescue)
  if (preferLeft) {
    push(
      Math.min(target.top, usableBottom - height),
      VIEW_PAD,
      90 + spaceLeft * 0.3,
    );
  }

  cands.sort((a, b) => b.score - a.score);
  const best = cands[0];
  if (!best || best.score < -200) return null;

  return { top: best.top, left: best.left, width, maxHeight: height };
}

function shouldPreferLeft(target: SpotRect, targetId: TourTargetId): boolean {
  if (targetId === "quick-services" || targetId === "rts-services") return true;
  const vw = window.innerWidth;
  return target.left + target.width / 2 > vw * 0.58;
}

function waitFrames(n: number): Promise<void> {
  return new Promise((resolve) => {
    const step = (left: number) => {
      if (left <= 0) resolve();
      else requestAnimationFrame(() => step(left - 1));
    };
    step(n);
  });
}

/**
 * Polished first-visit Website Guide — spotlight on desktop, centered cards on mobile.
 * Marathi default; tour language is independent of the site language.
 */
export const SiteTourGuide = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [tourLang, setTourLang] = useState<TourLang>(() => readTourLang());
  const [spot, setSpot] = useState<SpotRect | null>(null);
  const [useCenter, setUseCenter] = useState(true);
  const [cardPlacement, setCardPlacement] = useState<CardPlacement | null>(null);
  const [demoQuery, setDemoQuery] = useState<string | null>(null);
  const [liveMsg, setLiveMsg] = useState("");
  const activeTargetId = useRef<TourTargetId>(null);

  const titleId = useId();
  const descId = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const total = TOUR_STEPS.length;
  const current = TOUR_STEPS[step] ?? TOUR_STEPS[0];
  const L = tourLang;
  const isFirst = step === 0;
  const isLast = step === total - 1;

  const setLang = (lang: TourLang) => {
    setTourLang(lang);
    writeTourLang(lang);
  };

  const closeMobileNav = () => {
    window.dispatchEvent(new CustomEvent("csmc-tour-close-mobile-nav"));
  };

  const guideTriggerEl = () =>
    (document.getElementById("csmc-tour-trigger-btn") ??
      document.getElementById("csmc-tour-trigger-btn-mobile")) as HTMLElement | null;

  const dismiss = useCallback((skipped: boolean) => {
    markTourFinished({ skipped });
    closeMobileNav();
    setOpen(false);
    setDemoQuery(null);
    const restore = previouslyFocused.current ?? guideTriggerEl();
    requestAnimationFrame(() => restore?.focus());
  }, []);

  const openTour = useCallback(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    setTourLang(readTourLang()); // default mr unless user previously chose en in tour
    setStep(0);
    setDemoQuery(null);
    setOpen(true);
  }, []);

  // Auto-launch first visit / version bump
  useEffect(() => {
    if (!shouldAutoOpenTour()) return;
    let cancelled = false;
    const t = window.setTimeout(() => {
      if (!cancelled && shouldAutoOpenTour()) openTour();
    }, 1300);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [openTour]);

  // Hero / Quick Services Website Guide launcher
  useEffect(() => {
    const onOpen = () => openTour();
    window.addEventListener("csmc-tour-open", onOpen);
    return () => window.removeEventListener("csmc-tour-open", onOpen);
  }, [openTour]);

  // Prepare target, scroll if needed, place card (viewport-aware)
  useLayoutEffect(() => {
    if (!open) return;

    let cancelled = false;

    const applyPlacement = (rect: SpotRect, targetId: TourTargetId, mobile: boolean) => {
      if (mobile) {
        setSpot(rect);
        setUseCenter(true);
        setCardPlacement(null);
        return;
      }

      const preferLeft = shouldPreferLeft(rect, targetId);
      const estimatedW = Math.min(420, window.innerWidth - VIEW_PAD * 2);
      const estimatedH = Math.min(520, window.innerHeight - TICKER_SAFE - VIEW_PAD * 2);
      const place = computeCardPlacement(rect, estimatedW, estimatedH, preferLeft);

      if (!place) {
        setSpot(rect);
        setUseCenter(true);
        setCardPlacement(null);
        return;
      }

      setSpot(rect);
      setUseCenter(false);
      setCardPlacement(place);
    };

    const prepare = async () => {
      const mobile = isMobileViewport();
      const preferCenterLayout = mobile || current.layout === "center" || !current.target;

      if (current.id === "nav" && mobile) {
        window.dispatchEvent(new CustomEvent("csmc-tour-open-mobile-nav"));
        await waitFrames(4);
      } else if (current.id !== "nav") {
        closeMobileNav();
      }

      let targetId: TourTargetId = preferCenterLayout
        ? null
        : mobile && current.mobileTarget
          ? current.mobileTarget
          : current.target;

      if (current.id === "nav" && mobile) {
        const panel = document.querySelector('[data-tour="mobile-nav"]');
        targetId = panel ? "mobile-nav" : "mobile-menu-btn";
      }

      if (current.id === "a11y") {
        targetId = "a11y";
      }

      // Mobile spotlight steps that still need a visible target behind a centered card
      if (mobile && current.layout === "spotlight" && current.target) {
        targetId = current.mobileTarget && document.querySelector(`[data-tour="${current.mobileTarget}"]`)
          ? current.mobileTarget
          : current.target;
      }

      activeTargetId.current = targetId;

      if (!targetId) {
        if (cancelled) return;
        setSpot(null);
        setUseCenter(true);
        setCardPlacement(null);
        return;
      }

      let { el, rect } = resolveTarget(targetId);
      if (!rect && current.mobileTarget && targetId !== current.mobileTarget) {
        const alt = resolveTarget(current.mobileTarget);
        el = alt.el;
        rect = alt.rect;
        if (rect) targetId = current.mobileTarget;
      }

      if (!rect || !el) {
        if (cancelled) return;
        setSpot(null);
        setUseCenter(true);
        setCardPlacement(null);
        return;
      }

      // Scroll only when the target is mostly out of view
      if (targetVisibleRatio(rect) < 0.7) {
        const block: ScrollLogicalPosition =
          targetId === "quick-services" || targetId === "rts-services" ? "nearest" : "center";
        el.scrollIntoView({
          block,
          inline: "nearest",
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
        await waitFrames(prefersReducedMotion() ? 2 : 10);
        const again = resolveTarget(targetId);
        el = again.el ?? el;
        rect = again.rect ?? rect;
      }

      if (cancelled || !rect) return;
      applyPlacement(rect, targetId, mobile);
    };

    void prepare();

    const onRelayout = () => {
      void prepare();
    };
    window.addEventListener("resize", onRelayout);
    window.addEventListener("scroll", onRelayout, true);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", onRelayout);
      window.removeEventListener("scroll", onRelayout, true);
    };
  }, [open, step, current]);

  // After the card paints, re-measure actual height and refine placement (no overlap / no clip)
  useLayoutEffect(() => {
    if (!open || useCenter || !spot || !cardPlacement || !cardRef.current) return;
    const node = cardRef.current;
    const measuredH = Math.ceil(node.getBoundingClientRect().height);
    const measuredW = Math.ceil(node.getBoundingClientRect().width);
    if (measuredH < 80 || measuredW < 80) return;

    const targetId = activeTargetId.current;
    const preferLeft = targetId ? shouldPreferLeft(spot, targetId) : false;
    const refined = computeCardPlacement(spot, measuredW, measuredH, preferLeft);
    if (!refined) {
      setUseCenter(true);
      setCardPlacement(null);
      return;
    }

    const cardBox: SpotRect = {
      top: refined.top,
      left: refined.left,
      width: refined.width,
      height: Math.min(measuredH, refined.maxHeight),
    };
    if (rectsOverlap(cardBox, spot, 10)) {
      if (preferLeft) {
        const forced = clampCardBox(VIEW_PAD + 8, VIEW_PAD, refined.width, cardBox.height);
        const forcedBox: SpotRect = {
          top: forced.top,
          left: forced.left,
          width: refined.width,
          height: cardBox.height,
        };
        if (!rectsOverlap(forcedBox, spot, 10)) {
          const next = {
            top: forced.top,
            left: forced.left,
            width: refined.width,
            maxHeight: refined.maxHeight,
          };
          if (
            Math.abs(next.top - cardPlacement.top) > 2 ||
            Math.abs(next.left - cardPlacement.left) > 2
          ) {
            setCardPlacement(next);
          }
          return;
        }
      }
      setUseCenter(true);
      setCardPlacement(null);
      return;
    }

    if (
      Math.abs(refined.top - cardPlacement.top) > 2 ||
      Math.abs(refined.left - cardPlacement.left) > 2 ||
      Math.abs(refined.maxHeight - cardPlacement.maxHeight) > 2
    ) {
      setCardPlacement(refined);
    }
    // Intentionally omit cardPlacement from deps to avoid refine loops; re-run on step/spot/lang.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- refine once per spot geometry
  }, [open, useCenter, spot, step, tourLang]);

  // Live region + search demo seed
  useEffect(() => {
    if (!open) return;
    setLiveMsg(`${TOUR_UI.stepOf(step + 1, total, L)}. ${current.title[L]}`);
    if (current.searchDemo) {
      setDemoQuery(current.searchDemo.query[L]);
    } else {
      setDemoQuery(null);
    }
  }, [open, step, L, current, total]);

  // Focus trap + Escape (do not lock body scroll — targets may need scrollIntoView)
  useEffect(() => {
    if (!open) return;

    const focusFirst = () => {
      const root = cardRef.current;
      if (!root) return;
      const items = getFocusable(root);
      (items[0] ?? root).focus();
    };
    const t = window.setTimeout(focusFirst, 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss(true);
        return;
      }
      if (e.key !== "Tab" || !cardRef.current) return;
      const items = getFocusable(cardRef.current);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss, step]);

  const demoHits = demoQuery && demoQuery.trim().length >= 2 ? searchHits(demoQuery).slice(0, 3) : [];

  const cardPosStyle = ((): CSSProperties | undefined => {
    if (useCenter || !spot || !cardPlacement) return undefined;
    return {
      position: "fixed",
      top: cardPlacement.top,
      left: cardPlacement.left,
      width: cardPlacement.width,
      maxHeight: cardPlacement.maxHeight,
      zIndex: 3,
    };
  })();

  const spotlightStyle = spot
    ? {
        top: Math.max(0, spot.top - SPOT_PAD),
        left: Math.max(0, spot.left - SPOT_PAD),
        width: Math.min(window.innerWidth - 8, spot.width + SPOT_PAD * 2),
        height: Math.min(window.innerHeight - TICKER_SAFE, spot.height + SPOT_PAD * 2),
      }
    : null;

  const renderBodyExtras = (): ReactNode => (
    <>
      {current.note && (
        <p className="mt-3 text-sm font-semibold text-[#003366]/80">{current.note[L]}</p>
      )}

      {current.searchDemo && (
        <div className="mt-4 rounded-xl border border-[#003366]/15 bg-[#f7f8fa] p-3">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#003366]/60">
            {TOUR_UI.searchDemoHeading[L]}
          </p>
          <button
            type="button"
            className="mt-2 inline-flex min-h-[44px] items-center rounded-lg bg-white px-3 text-sm font-bold text-[#003366] border border-[#003366]/20 hover:bg-[#003366]/5"
            onClick={() => setDemoQuery(current.searchDemo!.query[L])}
          >
            {TOUR_UI.searchTry[L]}: “{current.searchDemo.query[L]}”
          </button>
          {demoHits.length > 0 && (
            <div className="mt-3 space-y-1.5">
              <p className="text-[11px] text-[#003366]/65">{TOUR_UI.searchResultHint[L]}</p>
              {demoHits.map((h) => {
                const title = L === "en" ? h.record.titleEn : h.record.titleMr;
                return (
                  <div
                    key={h.record.id}
                    className="rounded-lg bg-white px-2.5 py-2 text-sm text-[#1a1a1a] border border-[#003366]/10"
                  >
                    {title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {current.cta && (
        <a
          href={current.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#ff9933] px-4 py-2.5 text-sm font-bold text-[#003366] shadow-sm hover:bg-[#ffa94d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
        >
          {current.cta.label[L]}
          <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
        </a>
      )}

      {current.links && current.links.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2">
          {current.links.map((link) => (
            <li key={link.to}>
              {link.external || /^https?:/i.test(link.to) ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-sm font-bold text-[#003366] underline-offset-2 hover:underline"
                >
                  {link.label[L]}
                </a>
              ) : (
                <Link
                  to={link.to}
                  onClick={() => dismiss(false)}
                  className="inline-flex min-h-[44px] items-center text-sm font-bold text-[#003366] underline-offset-2 hover:underline"
                >
                  {link.label[L]}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

      {current.id === "finish" && (
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm font-bold text-[#003366]">{TOUR_UI.wantToDo[L]}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {TOUR_SHORTCUTS.map((s) => {
                if (s.searchQuery) {
                  return (
                    <button
                      key={s.id}
                      type="button"
                      className="min-h-[44px] rounded-full border border-[#003366]/25 bg-white px-3 text-xs font-bold text-[#003366] hover:bg-[#003366]/5"
                      onClick={() => {
                        const q = s.searchQuery![L];
                        dismiss(false);
                        window.setTimeout(() => {
                          window.dispatchEvent(
                            new CustomEvent("csmc-tour-focus-search", { detail: { query: q } }),
                          );
                        }, 50);
                      }}
                    >
                      {s.label[L]}
                    </button>
                  );
                }
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center rounded-full border border-[#003366]/25 bg-white px-3 text-xs font-bold text-[#003366] hover:bg-[#003366]/5"
                  >
                    {s.label[L]}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#003366]/55">
              {L === "mr" ? "बुद्धिमान सेवा शोध (उदाहरणे)" : "Smart service discovery (examples)"}
            </p>
            <ul className="mt-2 space-y-1.5">
              {TOUR_INTENT_EXAMPLES.map((ex) => {
                const hits = searchHits(ex.query[L]).slice(0, 1);
                const top = hits[0];
                const href = top ? recordHref(top.record) : null;
                return (
                  <li key={ex.query.en}>
                    <button
                      type="button"
                      className="w-full min-h-[44px] rounded-lg border border-[#003366]/12 bg-[#f7f8fa] px-3 py-2 text-left text-sm text-[#1a1a1a] hover:border-[#ff9933]"
                      onClick={() => {
                        dismiss(false);
                        window.setTimeout(() => {
                          window.dispatchEvent(
                            new CustomEvent("csmc-tour-focus-search", {
                              detail: { query: ex.query[L] },
                            }),
                          );
                        }, 50);
                      }}
                    >
                      <span className="font-semibold text-[#003366]">{ex.label[L]}</span>
                      {top && (
                        <span className="mt-0.5 block text-[11px] text-[#003366]/65">
                          → {L === "en" ? top.record.titleEn : top.record.titleMr}
                          {href?.external ? " ↗" : ""}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Progress: text + dots */}
      <div className="mt-5 flex flex-col gap-2">
        <p className="text-xs font-semibold text-[#003366]/70" aria-hidden={false}>
          {TOUR_UI.stepOf(step + 1, total, L)}
        </p>
        <div className="flex items-center gap-2" role="presentation">
          {TOUR_STEPS.map((s, i) => (
            <span
              key={s.id}
              className={`h-2 rounded-full transition-all ${
                i === step ? "w-6 bg-[#ff9933]" : i < step ? "w-2 bg-[#003366]/45" : "w-2 bg-[#003366]/20"
              }`}
              title={TOUR_UI.stepOf(i + 1, total, L)}
            />
          ))}
        </div>
      </div>
    </>
  );

  const card = open
    ? createPortal(
        <div
          id="csmc-tour-overlay"
          className="fixed inset-0 z-[10050]"
          aria-hidden={false}
        >
          {/* Dim + optional spotlight cutout */}
          {spotlightStyle ? (
            <>
              <button
                type="button"
                className="absolute inset-0 z-0 cursor-default bg-transparent"
                aria-label={TOUR_UI.skip[L]}
                onClick={() => dismiss(true)}
              />
              <div
                className="pointer-events-none absolute z-[1] rounded-xl ring-2 ring-[#ff9933] bg-transparent"
                style={{
                  ...spotlightStyle,
                  boxShadow: "0 0 0 9999px rgba(0, 51, 102, 0.55)",
                }}
                aria-hidden
              />
            </>
          ) : (
            <button
              type="button"
              className="absolute inset-0 z-0 cursor-default bg-[#003366]/55"
              aria-label={TOUR_UI.skip[L]}
              onClick={() => dismiss(true)}
            />
          )}

          <div
            className={
              useCenter || !spot || !cardPlacement
                ? "absolute inset-0 z-[3] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
                : "absolute inset-0 z-[3] pointer-events-none"
            }
          >
            <div
              ref={cardRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descId}
              tabIndex={-1}
              style={cardPosStyle}
              className={`pointer-events-auto flex w-full max-w-[520px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl outline-none csmc-tour-card ${
                useCenter || !cardPlacement
                  ? "max-h-[min(90vh,640px)]"
                  : ""
              } max-[480px]:max-w-none`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center gap-2 border-b border-[#003366]/15 bg-[#003366] px-4 py-3 text-white sm:px-5">
                <Globe2 className="h-5 w-5 shrink-0 text-[hsl(var(--civic-gold))]" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold tracking-wide">{TOUR_UI.guideTitle[L]}</p>
                  <p className="text-[11px] text-white/75">{TOUR_UI.stepOf(step + 1, total, L)}</p>
                </div>

                <div
                  className="flex shrink-0 rounded-lg border border-white/25 p-0.5 text-[11px] font-bold"
                  role="group"
                  aria-label={L === "mr" ? "मार्गदर्शक भाषा" : "Guide language"}
                >
                  <button
                    type="button"
                    onClick={() => setLang("mr")}
                    aria-pressed={L === "mr"}
                    className={`min-h-[36px] rounded-md px-2.5 py-1.5 transition-colors ${
                      L === "mr" ? "bg-[hsl(var(--civic-gold))] text-[#003366]" : "text-white/90 hover:bg-white/15"
                    }`}
                  >
                    {TOUR_UI.langMr}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    aria-pressed={L === "en"}
                    className={`min-h-[36px] rounded-md px-2.5 py-1.5 transition-colors ${
                      L === "en" ? "bg-[#ff9933] text-[#003366]" : "text-white/90 hover:bg-white/15"
                    }`}
                  >
                    {TOUR_UI.langEn}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => dismiss(true)}
                  aria-label={TOUR_UI.close[L]}
                  className="ml-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9933]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
                <h2
                  id={titleId}
                  className="font-serif text-xl font-bold leading-snug text-[#003366] sm:text-2xl max-[480px]:text-lg"
                >
                  {current.title[L]}
                </h2>
                <p
                  id={descId}
                  className="mt-3 text-base leading-relaxed text-[#1a1a1a]/85 sm:text-[1.05rem]"
                >
                  {current.body[L]}
                </p>
                {renderBodyExtras()}
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2 border-t border-[#003366]/10 bg-[#f7f8fa] px-4 py-3 sm:px-5">
                <button
                  type="button"
                  onClick={() => dismiss(true)}
                  className="min-h-[44px] rounded-lg px-3 text-sm font-semibold text-[#003366]/70 hover:bg-[#003366]/8 hover:text-[#003366]"
                >
                  {TOUR_UI.skip[L]}
                </button>
                <div className="ml-auto flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={isFirst}
                    className="min-h-[44px] rounded-lg border border-[#003366]/25 bg-white px-4 text-sm font-bold text-[#003366] disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:bg-[#003366]/5"
                  >
                    {TOUR_UI.prev[L]}
                  </button>
                  {isLast ? (
                    <button
                      type="button"
                      onClick={() => dismiss(false)}
                      className="min-h-[44px] rounded-lg bg-[#003366] px-4 text-sm font-bold text-white hover:bg-[#00264d]"
                    >
                      {TOUR_UI.finish[L]}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                      className="min-h-[44px] rounded-lg bg-[#003366] px-4 text-sm font-bold text-white hover:bg-[#00264d]"
                    >
                      {TOUR_UI.next[L]}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {liveMsg}
          </div>

          <style>{`
            .csmc-tour-card {
              animation: csmc-tour-pop 0.28s cubic-bezier(0.22, 1, 0.36, 1);
            }
            @keyframes csmc-tour-pop {
              from { opacity: 0; transform: scale(0.96); }
              to { opacity: 1; transform: scale(1); }
            }
            @media (prefers-reduced-motion: reduce) {
              .csmc-tour-card { animation: none; }
            }
          `}</style>
        </div>,
        document.body,
      )
    : null;

  return <>{card}</>;
};
