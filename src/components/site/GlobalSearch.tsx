import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Mic, MicOff, Search, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { localizeDigits } from "@/i18n/digits";
import { CATEGORY_LABELS, SEARCH_GROUP_LABELS } from "@/data/civicLabels";
import { formatCivicDate, groupSearchResults, recordHref, searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";
import { highlightText, type SearchHit } from "@/lib/semanticSearch";

const MAX_PER_GROUP = 4;

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult:
    | ((event: {
        results: ArrayLike<ArrayLike<{ transcript: string }> & { 0?: { transcript: string } }>;
      }) => void)
    | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
};

function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null;
  const w = window as Window & {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

function hitKey(hit: SearchHit) {
  return hit.resultKey ?? hit.record.id;
}

export function GlobalSearch({ compact = false }: { compact?: boolean }) {
  const { lang, d } = useLang();
  const en = lang === "en";
  const navigate = useNavigate();
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const voiceAttemptRef = useRef(0);
  const voiceGotResultRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const [listening, setListening] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const speechAvailable = !!getSpeechRecognitionCtor();

  const hits = useMemo(() => (query.trim().length >= 2 ? searchHits(query) : []), [query]);
  const didYouMean = useMemo(
    () => (query.trim().length >= 4 ? suggestDidYouMean(query) : null),
    [query],
  );
  const best = useMemo(() => hits.find((h) => h.isBestAction) ?? hits[0], [hits]);
  const bilingualTwin = useMemo(() => {
    if (!best) return null;
    return (
      hits.find(
        (h) =>
          h.isBilingualTwin &&
          h.record.id === best.record.id &&
          h.displayLang &&
          h.displayLang !== best.displayLang,
      ) ?? null
    );
  }, [hits, best]);
  const grouped = useMemo(() => {
    const skip = new Set<string>();
    if (best) skip.add(hitKey(best));
    if (bilingualTwin) skip.add(hitKey(bilingualTwin));
    const rest = hits.filter((h) => !skip.has(hitKey(h)));
    return groupSearchResults(rest);
  }, [hits, best, bilingualTwin]);

  const flatOptions = useMemo(() => {
    const rows: SearchHit[] = [];
    if (best) rows.push(best);
    if (bilingualTwin) rows.push(bilingualTwin);
    for (const { items } of grouped) {
      for (const hit of items.slice(0, MAX_PER_GROUP)) rows.push(hit);
    }
    return rows;
  }, [best, bilingualTwin, grouped]);

  const showPanel = open && query.trim().length >= 2;

  const resultsStatus =
    showPanel
      ? hits.length === 0
        ? en
          ? "No matching results."
          : "जुळणारे निकाल नाहीत."
        : en
          ? `${hits.length} search ${hits.length === 1 ? "result" : "results"} available. Use arrow keys to review.`
          : `${d(hits.length)} शोध निकाल उपलब्ध. पुनरावलोकनासाठी बाण कळा वापरा.`
      : "";

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const syncPos = () => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const width = Math.min(Math.max(compact ? r.width : 520, r.width), window.innerWidth - 16);
    let left = compact ? r.left : r.right - width;
    left = Math.max(8, Math.min(left, window.innerWidth - width - 8));
    setPos({ top: r.bottom + 8, left, width });
  };

  useEffect(() => {
    if (!showPanel) return;
    syncPos();
    const onScroll = () => syncPos();
    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [showPanel, compact]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t)) return;
      if (document.getElementById(listId)?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, listId]);

  useEffect(() => {
    return () => {
      try {
        recognitionRef.current?.stop();
      } catch {
        /* ignore */
      }
    };
  }, []);

  // Website Guide can focus search with an example query after the tour ends.
  useEffect(() => {
    const onTourSearch = (e: Event) => {
      const detail = (e as CustomEvent<{ query?: string }>).detail;
      const q = detail?.query?.trim() ?? "";
      if (q) {
        setQuery(q);
        setOpen(true);
        requestAnimationFrame(() => {
          syncPos();
          inputRef.current?.focus();
        });
      } else {
        inputRef.current?.focus();
      }
    };
    window.addEventListener("csmc-tour-focus-search", onTourSearch);
    return () => window.removeEventListener("csmc-tour-focus-search", onTourSearch);
  }, []);

  const goToResultsPage = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const activateHit = (hit: SearchHit) => {
    const dest = recordHref(hit.record);
    setOpen(false);
    if (dest.external) {
      window.open(dest.to, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(dest.to);
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && flatOptions[activeIndex]) {
        activateHit(flatOptions[activeIndex]);
        return;
      }
      goToResultsPage(query);
      return;
    }

    if (!showPanel || flatOptions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i + 1) % flatOptions.length);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i <= 0 ? flatOptions.length - 1 : i - 1));
    }
  };

  const applyTranscript = (raw: string) => {
    const transcript = raw
      .normalize("NFC")
      .replace(/[\u00A0\u202F\u2007]/g, " ")
      .replace(/[.,!?;:।]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!transcript) return false;
    setQuery(transcript);
    setOpen(true);
    inputRef.current?.focus();
    return true;
  };

  /** Prefer UI language, then the other (EN ↔ MR) so voice works bilingually. */
  const voiceLangs = lang === "mr" ? (["mr-IN", "en-IN"] as const) : (["en-IN", "mr-IN"] as const);

  const startVoiceAttempt = (Ctor: new () => SpeechRecognitionLike, attempt: number) => {
    const recognition = new Ctor();
    recognition.lang = voiceLangs[attempt] ?? voiceLangs[0];
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const parts: string[] = [];
      const list = event.results;
      for (let i = 0; i < list.length; i++) {
        const said = list[i]?.[0]?.transcript ?? "";
        if (said) parts.push(said);
      }
      if (applyTranscript(parts.join(" "))) {
        voiceGotResultRef.current = true;
      }
    };
    recognition.onerror = () => {
      // Fall through to onend for language retry; text search remains available.
    };
    recognition.onend = () => {
      if (voiceGotResultRef.current) {
        setListening(false);
        recognitionRef.current = null;
        return;
      }
      const next = attempt + 1;
      if (next < voiceLangs.length) {
        voiceAttemptRef.current = next;
        try {
          startVoiceAttempt(Ctor, next);
        } catch {
          setListening(false);
          recognitionRef.current = null;
        }
        return;
      }
      setListening(false);
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  const toggleVoice = () => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) return;

    if (listening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        /* ignore */
      }
      setListening(false);
      recognitionRef.current = null;
      return;
    }

    voiceAttemptRef.current = 0;
    voiceGotResultRef.current = false;
    try {
      startVoiceAttempt(Ctor, 0);
      setListening(true);
    } catch {
      setListening(false);
    }
  };

  return (
    <>
      <div
        ref={wrapRef}
        className={`flex items-center gap-2 border border-border rounded-full px-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-civic-blue/30 ${
          compact ? "py-1 flex-1" : "py-1.5"
        }`}
      >
        <Search className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} text-muted-foreground shrink-0`} aria-hidden />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            syncPos();
          }}
          onKeyDown={onInputKeyDown}
          placeholder={
            en ? "Search services, notices, documents, departments..." : "सेवा, सूचना, दस्तऐवज, विभाग शोधा..."
          }
          aria-label={en ? "Search the CSMC website" : "CSMC संकेतस्थळ शोधा"}
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 && flatOptions[activeIndex]
              ? `${listId}-opt-${hitKey(flatOptions[activeIndex])}`
              : undefined
          }
          role="combobox"
          autoComplete="off"
          className={`bg-transparent outline-none placeholder:text-muted-foreground min-w-0 ${
            compact ? "text-xs w-full" : "text-sm w-[220px] lg:w-[280px]"
          }`}
        />
        {query && (
          <button
            type="button"
            aria-label={en ? "Clear search" : "शोध साफ करा"}
            onClick={() => {
              setQuery("");
              setActiveIndex(-1);
              inputRef.current?.focus();
            }}
            className="text-muted-foreground hover:text-civic-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded-sm"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        )}
        {speechAvailable && (
          <button
            type="button"
            aria-label={
              listening
                ? en
                  ? "Stop voice search"
                  : "आवाज शोध थांबवा"
                : en
                  ? "Voice search (English or Marathi)"
                  : "आवाजाने शोधा (मराठी किंवा इंग्रजी)"
            }
            aria-pressed={listening}
            onClick={toggleVoice}
            className={`shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue ${listening ? "text-muted-foreground hover:text-civic-blue" : "text-civic-red"}`}
          >
            {listening ? (
              <Mic className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} aria-hidden />
            ) : (
              <MicOff className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} aria-hidden />
            )}
          </button>
        )}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {resultsStatus}
      </p>

      {showPanel &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id={listId}
            role="listbox"
            className="fixed z-[2060] rounded-2xl border border-border bg-white shadow-elegant overflow-hidden"
            style={{ top: pos.top, left: pos.left, width: pos.width, maxHeight: "min(70vh, 520px)" }}
          >
            <div className="overflow-y-auto" style={{ maxHeight: "min(70vh, 480px)" }}>
              {didYouMean && (
                <div className="px-4 py-2.5 border-b border-border bg-slate-50/90">
                  <p className="text-xs text-muted-foreground">
                    {en ? "Did you mean" : "तुम्हाला हे म्हणायचे होते का"}{" "}
                    <button
                      type="button"
                      className="font-semibold text-civic-blue underline-offset-2 hover:underline"
                      onClick={() => {
                        setQuery(didYouMean);
                        setOpen(true);
                        inputRef.current?.focus();
                      }}
                    >
                      “{didYouMean}”
                    </button>
                    ?
                  </p>
                </div>
              )}
              {hits.length === 0 ? (
                <div className="py-8 px-5 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    {en ? "No matching results." : "जुळणारे निकाल नाहीत."}
                  </p>
                  <button
                    type="button"
                    className="text-xs font-bold text-civic-blue hover:underline"
                    onClick={() => goToResultsPage(query)}
                  >
                    {en ? "Open full search page" : "पूर्ण शोध पृष्ठ उघडा"}
                  </button>
                </div>
              ) : (
                <>
                  {best && (
                    <div className="px-3 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-civic-red mb-2">
                        {en ? "Best match" : "सर्वोत्तम जुळणी"}
                      </p>
                      <ul className="space-y-1">
                        <ResultRow
                          id={`${listId}-opt-${hitKey(best)}`}
                          hit={best}
                          en={en}
                          featured
                          active={activeIndex === 0}
                          onNavigate={() => setOpen(false)}
                        />
                        {bilingualTwin && (
                          <ResultRow
                            id={`${listId}-opt-${hitKey(bilingualTwin)}`}
                            hit={bilingualTwin}
                            en={en}
                            active={activeIndex === 1}
                            onNavigate={() => setOpen(false)}
                          />
                        )}
                      </ul>
                    </div>
                  )}
                  {grouped.map(({ group, items }) => (
                    <div key={group} className="px-3 py-3 border-t border-border">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-civic-red mb-2">
                        {en ? SEARCH_GROUP_LABELS[group].en : SEARCH_GROUP_LABELS[group].mr}
                        <span className="text-muted-foreground font-medium ml-1">({d(items.length)})</span>
                      </p>
                      <ul className="space-y-1">
                        {items.slice(0, MAX_PER_GROUP).map((hit) => {
                          const idx = flatOptions.findIndex((h) => hitKey(h) === hitKey(hit));
                          return (
                            <ResultRow
                              key={hitKey(hit)}
                              id={`${listId}-opt-${hitKey(hit)}`}
                              hit={hit}
                              en={en}
                              active={idx === activeIndex}
                              onNavigate={() => setOpen(false)}
                            />
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
            {query.trim().length >= 2 && (
              <div className="border-t border-border px-3 py-2.5 bg-slate-50/80">
                <button
                  type="button"
                  className="w-full text-left text-xs font-bold text-civic-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
                  onClick={() => goToResultsPage(query)}
                >
                  {en
                    ? `View all results for “${query.trim()}” →`
                    : `“${query.trim()}” साठी सर्व निकाल पहा →`}
                </button>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}

function ResultRow({
  hit,
  en,
  featured,
  active,
  onNavigate,
  id,
}: {
  hit: SearchHit;
  en: boolean;
  featured?: boolean;
  active?: boolean;
  onNavigate: () => void;
  id: string;
}) {
  const item = hit.record;
  const dest = recordHref(item);
  const showEn = hit.displayLang ? hit.displayLang === "en" : en;
  const action = showEn ? hit.actionLabelEn : hit.actionLabelMr;
  const snippet = showEn ? hit.snippetEn : hit.snippetMr;
  const title = showEn ? item.titleEn : item.titleMr;
  const department = showEn ? item.departmentEn : item.departmentMr;
  const category = showEn ? CATEGORY_LABELS[item.category].en : CATEGORY_LABELS[item.category].mr;
  const className = `block rounded-lg px-2 py-2 hover:bg-civic-blue/[0.05] transition-colors ${
    featured ? "bg-civic-gold/10 border border-civic-gold/30" : ""
  } ${active ? "ring-2 ring-civic-blue/40 bg-civic-blue/[0.06]" : ""}`;
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-civic-blue leading-snug">
          {title}
          {dest.external && <ExternalLink className="inline h-3 w-3 ml-1 opacity-60" />}
        </p>
        {action && (
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-civic-red">
            {action}
          </span>
        )}
      </div>
      {snippet && (
        <p className="text-[11px] text-muted-foreground mt-1 leading-snug line-clamp-2">
          {highlightText(snippet, hit.highlight).map((part, i) =>
            part.mark ? (
              <mark key={i} className="bg-civic-gold/50 text-civic-ink rounded-sm px-0.5">
                {part.text}
              </mark>
            ) : (
              <span key={i}>{part.text}</span>
            ),
          )}
          {hit.ocrPage ? ` · p.${localizeDigits(hit.ocrPage, showEn ? "en" : "mr")}` : ""}
        </p>
      )}
      <p className="text-[11px] text-muted-foreground mt-0.5">
        {department}
        {" · "}
        {category}
        {" · "}
        {formatCivicDate(item.publishedAt, showEn)}
      </p>
    </>
  );

  if (dest.external) {
    return (
      <li role="option" id={id} aria-selected={!!active}>
        <a href={dest.to} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={className}>
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li role="option" id={id} aria-selected={!!active}>
      <Link to={dest.to} onClick={onNavigate} className={className}>
        {inner}
      </Link>
    </li>
  );
}
