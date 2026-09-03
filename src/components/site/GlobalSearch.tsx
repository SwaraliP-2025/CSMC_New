import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ExternalLink, Mic, MicOff, Search, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { localizeDigits } from "@/i18n/digits";
import { CATEGORY_LABELS, SEARCH_GROUP_LABELS } from "@/data/civicLabels";
import { formatCivicDate, groupSearchResults, recordHref, searchHits } from "@/lib/unifiedSearch";
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

export function GlobalSearch({ compact = false }: { compact?: boolean }) {
  const { lang, d } = useLang();
  const en = lang === "en";
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const [listening, setListening] = useState(false);
  const speechAvailable = !!getSpeechRecognitionCtor();

  const hits = useMemo(() => (query.trim().length >= 2 ? searchHits(query) : []), [query]);
  const best = useMemo(() => hits.find((h) => h.isBestAction) ?? hits[0], [hits]);
  const grouped = useMemo(() => {
    const rest = best ? hits.filter((h) => h.record.id !== best.record.id) : hits;
    return groupSearchResults(rest);
  }, [hits, best]);
  const showPanel = open && query.trim().length >= 2;

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
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
      return;
    }

    const recognition = new Ctor();
    recognition.lang = lang === "mr" ? "mr-IN" : "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const parts: string[] = [];
      const list = event.results;
      for (let i = 0; i < list.length; i++) {
        const said = list[i]?.[0]?.transcript ?? "";
        if (said) parts.push(said);
      }
      const raw = parts.join(" ");
      const transcript = raw
        .normalize("NFC")
        .replace(/[\u00A0\u202F\u2007]/g, " ")
        .replace(/[.,!?;:।]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (transcript) {
        setQuery(transcript);
        setOpen(true);
        inputRef.current?.focus();
      }
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    try {
      recognition.start();
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
        <Search className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} text-muted-foreground shrink-0`} />
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
          placeholder={
            en ? "Search services, notices, documents, departments..." : "सेवा, सूचना, दस्तऐवज, विभाग शोधा..."
          }
          aria-label={en ? "Search the CSMC website" : "CSMC संकेतस्थळ शोधा"}
          aria-expanded={showPanel}
          aria-controls={listId}
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
              inputRef.current?.focus();
            }}
            className="text-muted-foreground hover:text-civic-blue"
          >
            <X className="h-3.5 w-3.5" />
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
                  ? "Voice search"
                  : "आवाजाने शोधा"
            }
            aria-pressed={listening}
            onClick={toggleVoice}
            className={`shrink-0 ${listening ? "text-muted-foreground hover:text-civic-blue" : "text-civic-red"}`}
          >
            {listening ? (
              <Mic className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
            ) : (
              <MicOff className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
            )}
          </button>
        )}
      </div>

      {showPanel &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id={listId}
            role="listbox"
            className="fixed z-[2060] rounded-2xl border border-border bg-white shadow-elegant overflow-hidden"
            style={{ top: pos.top, left: pos.left, width: pos.width, maxHeight: "min(70vh, 520px)" }}
          >
            <div className="overflow-y-auto" style={{ maxHeight: "min(70vh, 520px)" }}>
              {hits.length === 0 ? (
                <p className="py-10 px-5 text-center text-sm text-muted-foreground">
                  {en ? "No matching results." : "जुळणारे निकाल नाहीत."}
                </p>
              ) : (
                <>
                  {best && (
                    <div className="px-3 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-civic-red mb-2">
                        {en ? "Best match" : "सर्वोत्तम जुळणी"}
                      </p>
                      <ul>
                        <ResultRow hit={best} en={en} featured onNavigate={() => setOpen(false)} />
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
                        {items.slice(0, MAX_PER_GROUP).map((hit) => (
                          <ResultRow key={hit.record.id} hit={hit} en={en} onNavigate={() => setOpen(false)} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function ResultRow({
  hit,
  en,
  featured,
  onNavigate,
}: {
  hit: SearchHit;
  en: boolean;
  featured?: boolean;
  onNavigate: () => void;
}) {
  const item = hit.record;
  const dest = recordHref(item);
  const action = en ? hit.actionLabelEn : hit.actionLabelMr;
  const snippet = en ? hit.snippetEn : hit.snippetMr;
  const className = `block rounded-lg px-2 py-2 hover:bg-civic-blue/[0.05] transition-colors ${
    featured ? "bg-civic-gold/10 border border-civic-gold/30" : ""
  }`;
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-civic-blue leading-snug">
          {en ? item.titleEn : item.titleMr}
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
            )
          )}
          {hit.ocrPage ? ` · p.${localizeDigits(hit.ocrPage, en ? "en" : "mr")}` : ""}
        </p>
      )}
      <p className="text-[11px] text-muted-foreground mt-0.5">
        {en ? item.departmentEn : item.departmentMr}
        {" · "}
        {en ? CATEGORY_LABELS[item.category].en : CATEGORY_LABELS[item.category].mr}
        {" · "}
        {formatCivicDate(item.publishedAt, en)}
      </p>
    </>
  );

  if (dest.external) {
    return (
      <li>
        <a href={dest.to} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={className}>
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link to={dest.to} onClick={onNavigate} className={className}>
        {inner}
      </Link>
    </li>
  );
}