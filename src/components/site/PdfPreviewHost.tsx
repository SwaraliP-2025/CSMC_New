import { useEffect, useId, useRef, useState } from "react";
import { Download, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import {
  isSameOriginPdfHref,
  onOpenInPagePdf,
  openInPagePdf,
  pdfNameFromHref,
  type InPagePdf,
} from "@/lib/pdfPreview";

function releaseUrl(url: string) {
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

function looksLikePdf(buffer: ArrayBuffer, contentType: string) {
  if (contentType.toLowerCase().includes("pdf")) return true;
  const head = new TextDecoder().decode(buffer.slice(0, 5));
  return head.startsWith("%PDF");
}

export function PdfPreviewHost() {
  const { lang } = useLang();
  const en = lang === "en";
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [doc, setDoc] = useState<InPagePdf | null>(null);
  const [failed, setFailed] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    return onOpenInPagePdf((next) => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setFailed(false);
      setChecking(true);
      setDoc((prev) => {
        if (prev?.revoke && prev.url !== next.url) releaseUrl(prev.url);
        return next;
      });
    });
  }, []);

  useEffect(() => {
    const openFromLink = (event: MouseEvent) => {
      if (event.button !== 0 && event.type === "click") return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute("download")) return;
      if (!isSameOriginPdfHref(anchor.href)) return;
      event.preventDefault();
      const filename = pdfNameFromHref(anchor.href);
      const label = (anchor.getAttribute("aria-label") || anchor.textContent || filename).replace(/\s+/g, " ").trim();
      openInPagePdf({ url: anchor.href, filename, title: label || filename });
    };
    document.addEventListener("click", openFromLink, true);
    document.addEventListener("auxclick", openFromLink, true);
    return () => {
      document.removeEventListener("click", openFromLink, true);
      document.removeEventListener("auxclick", openFromLink, true);
    };
  }, []);

  useEffect(() => {
    if (!doc) return;
    let cancelled = false;
    setFailed(false);
    setChecking(true);
    (async () => {
      try {
        const res = await fetch(doc.url);
        if (!res.ok) throw new Error("status");
        const type = res.headers.get("content-type") || "";
        const reader = res.body?.getReader();
        const first = reader ? (await reader.read()).value : undefined;
        await reader?.cancel();
        const sample = first ? first.buffer.slice(first.byteOffset, first.byteOffset + first.byteLength) : new ArrayBuffer(0);
        if (!looksLikePdf(sample, type)) throw new Error("type");
        if (!cancelled) setChecking(false);
      } catch {
        if (!cancelled) {
          setChecking(false);
          setFailed(true);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [doc]);

  useEffect(() => {
    if (!doc) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), iframe")].filter(
        (el) => !el.hasAttribute("disabled"),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !panelRef.current.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [doc]);

  const close = () => {
    setDoc((prev) => {
      if (prev?.revoke) releaseUrl(prev.url);
      return null;
    });
    setFailed(false);
    setChecking(false);
    const back = returnFocus.current;
    returnFocus.current = null;
    window.requestAnimationFrame(() => back?.focus());
  };

  if (!doc) return null;

  const downloadLabel = en ? "Download PDF" : "PDF डाउनलोड";
  const closeLabel = en ? "Close preview" : "पूर्वावलोकन बंद करा";
  const unable = en ? "Unable to preview this document." : "हे दस्तऐवज पूर्वावलोकनात दाखवता आले नाही.";

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[2600] overflow-x-hidden overflow-y-auto overscroll-contain bg-white"
    >
      <div className="container py-4 sm:py-6">
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-civic-blue hover:text-civic-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
        >
          <X className="h-4 w-4" aria-hidden />
          {closeLabel}
        </button>
        <h2 id={titleId} className="mt-3 font-serif text-xl font-bold text-civic-blue leading-snug break-words sm:text-2xl">
          {doc.title}
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href={doc.url}
            download={doc.filename}
            className="inline-flex items-center gap-1.5 rounded-lg bg-civic-blue px-4 py-2 text-sm font-bold text-white hover:bg-civic-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-gold"
          >
            <Download className="h-4 w-4" aria-hidden />
            {downloadLabel}
          </a>
        </div>
        {failed ? (
          <p className="mt-6 rounded-2xl border border-dashed border-border bg-slate-50 px-4 py-10 text-center text-sm text-muted-foreground">
            {unable}
          </p>
        ) : checking ? (
          <p className="mt-6 rounded-2xl border border-border bg-slate-50 px-4 py-10 text-center text-sm text-muted-foreground">
            {en ? "Loading document…" : "दस्तऐवज लोड होत आहे…"}
          </p>
        ) : (
          <iframe
            title={en ? `PDF preview: ${doc.title}` : `PDF पूर्वावलोकन: ${doc.title}`}
            src={doc.url}
            className="mt-4 h-[min(78dvh,920px)] min-h-[22rem] w-full max-w-full rounded-xl border border-border bg-slate-50"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
