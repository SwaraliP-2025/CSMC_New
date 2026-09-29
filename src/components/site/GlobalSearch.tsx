import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Mic, MicOff, Search, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { localizeDigits } from "@/i18n/digits";
import { CATEGORY_LABELS, SEARCH_GROUP_LABELS } from "@/data/civicLabels";
import { formatCivicDate, groupSearchResults, recordHref, searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";
import { highlightText, type SearchHit } from "@/lib/semanticSearch";
import {
  normalizeVoiceTranscript,
  pickRecognitionLang,
  voiceDebug,
  voiceStatusMessage,
  type VoicePhase,
} from "@/lib/browserVoice";

const MAX_PER_GROUP = 4;

type SpeechAlt = { transcript: string };
type SpeechResult = SpeechAlt[] & { isFinal?: boolean; 0?: SpeechAlt };
type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: { results: ArrayLike<SpeechResult> }) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
  onspeechend: (() => void) | null;
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
  const voiceStatusId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const voiceMountedRef = useRef(true);
  const voiceStopRequestedRef = useRef(false);
  const voiceGotResultRef = useRef(false);
  const voiceErrorRef = useRef("");
  const voiceSnapshotRef = useRef({ query: "", searchQuery: "" });
  const voiceAlternateRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const [voicePhase, setVoicePhase] = useState<VoicePhase>("idle");
  const [voiceNote, setVoiceNote] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const speechAvailable = !!getSpeechRecognitionCtor();
  const voiceBusy = voicePhase === "listening" || voicePhase === "processing";

  const hits = useMemo(() => (searchQuery.trim().length >= 2 ? searchHits(searchQuery) : []), [searchQuery]);
  const didYouMean = useMemo(
    () => (searchQuery.trim().length >= 4 ? suggestDidYouMean(searchQuery) : null),
    [searchQuery],
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

  const showPanel = open && searchQuery.trim().length >= 2;

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
  }, [searchQuery]);

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

  // Website Guide can focus search with an example query after the tour ends.
  useEffect(() => {
    const onTourSearch = (e: Event) => {
      const detail = (e as CustomEvent<{ query?: string }>).detail;
      const q = detail?.query?.trim() ?? "";
      if (q) {
        setQuery(q);
        setSearchQuery(q);
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

  const commitQuery = (value: string) => {
    setQuery(value);
    setSearchQuery(value);
    setOpen(true);
  };

  const applyTranscript = (raw: string) => {
    const transcript = normalizeVoiceTranscript(raw);
    if (!transcript) return false;
    commitQuery(transcript);
    inputRef.current?.focus();
    return true;
  };

  const restoreVoiceSnapshot = () => {
    const snap = voiceSnapshotRef.current;
    setQuery(snap.query);
    setSearchQuery(snap.searchQuery);
    setOpen(snap.searchQuery.trim().length >= 2);
  };

  const releaseRecognition = () => {
    const current = recognitionRef.current;
    recognitionRef.current = null;
    if (!current) return;
    current.onresult = null;
    current.onerror = null;
    current.onend = null;
    current.onspeechend = null;
    try {
      current.stop();
    } catch {
      /* already stopped */
    }
  };

  useEffect(() => {
    voiceMountedRef.current = true;
    return () => {
      voiceMountedRef.current = false;
      releaseRecognition();
    };
  }, []);

  const finishVoice = (phase: VoicePhase, note: string) => {
    if (!voiceMountedRef.current) return;
    setVoicePhase(phase);
    setVoiceNote(note);
  };

  const toggleVoice = () => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      finishVoice("error", voiceStatusMessage("not-supported", en));
      return;
    }

    if (voiceBusy && recognitionRef.current) {
      voiceStopRequestedRef.current = true;
      voiceDebug({ event: "stop-requested" });
      releaseRecognition();
      finishVoice("idle", "");
      return;
    }

    releaseRecognition();
    voiceStopRequestedRef.current = false;
    voiceGotResultRef.current = false;
    voiceErrorRef.current = "";
    voiceSnapshotRef.current = { query, searchQuery };

    const recognitionLang = pickRecognitionLang(
      lang === "en" ? "en" : "mr",
      typeof navigator !== "undefined" ? navigator.languages : [],
      voiceAlternateRef.current,
    );
    const recognition = new Ctor();
    recognition.lang = recognitionLang;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      if (recognitionRef.current !== recognition || !voiceMountedRef.current) return;
      let interim = "";
      let finalText = "";
      const list = event.results;
      for (let i = 0; i < list.length; i++) {
        const row = list[i];
        const said = row?.[0]?.transcript ?? "";
        if (!said) continue;
        if (row?.isFinal) finalText = `${finalText} ${said}`.trim();
        else interim = `${interim} ${said}`.trim();
      }
      const text = finalText || interim;
      voiceDebug({ event: finalText ? "final" : "interim", lang: recognitionLang, transcript: text });
      if (!text) return;
      if (applyTranscript(text)) {
        voiceGotResultRef.current = true;
        if (finalText) {
          voiceAlternateRef.current = false;
          finishVoice("processing", voiceStatusMessage("processing", en));
        }
      }
    };
    recognition.onspeechend = () => {
      if (recognitionRef.current !== recognition || !voiceMountedRef.current) return;
      if (!voiceGotResultRef.current) finishVoice("processing", voiceStatusMessage("processing", en));
      voiceDebug({ event: "speechend", lang: recognitionLang });
    };
    recognition.onerror = (event) => {
      const code = event.error || "unknown";
      voiceErrorRef.current = code;
      voiceDebug({ event: "error", lang: recognitionLang, error: code });
    };
    recognition.onend = () => {
      if (recognitionRef.current !== recognition) return;
      recognitionRef.current = null;
      voiceDebug({
        event: "end",
        lang: recognitionLang,
        searched: voiceGotResultRef.current,
        error: voiceErrorRef.current || null,
      });
      if (!voiceMountedRef.current) return;
      if (voiceStopRequestedRef.current) {
        finishVoice("idle", "");
        return;
      }
      if (voiceGotResultRef.current) {
        finishVoice("idle", "");
        return;
      }
      const code = voiceErrorRef.current || "no-speech";
      if (code === "aborted") {
        finishVoice("idle", "");
        return;
      }
      if (code === "no-speech" || code === "language-not-supported") voiceAlternateRef.current = !voiceAlternateRef.current;
      restoreVoiceSnapshot();
      finishVoice("error", voiceStatusMessage(code, en));
    };
    recognitionRef.current = recognition;
    try {
      recognition.start();
      finishVoice("listening", voiceStatusMessage("listening", en));
      voiceDebug({ event: "start", lang: recognitionLang });
    } catch {
      recognitionRef.current = null;
      finishVoice("error", voiceStatusMessage("unknown", en));
      voiceDebug({ event: "start-failed", lang: recognitionLang });
    }
  };

  return (
    <>
      <div
        ref={wrapRef}
        className={`relative flex items-center gap-2 border border-border rounded-full px-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-civic-blue/30 ${
          compact ? "py-1 flex-1" : "py-1.5"
        }`}
      >
        <Search className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} text-muted-foreground shrink-0`} aria-hidden />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            if (voicePhase === "error") {
              setVoicePhase("idle");
              setVoiceNote("");
            }
            commitQuery(e.target.value);
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
          className={`bg-transparent outline-none placeholder:text-muted-foreground/35 min-w-0 ${
            compact ? "text-xs w-full" : "text-sm w-[220px] lg:w-[280px]"
          }`}
        />
        {query && (
          <button
            type="button"
            aria-label={en ? "Clear search" : "शोध साफ करा"}
            onClick={() => {
              setQuery("");
              setSearchQuery("");
              setActiveIndex(-1);
              inputRef.current?.focus();
            }}
            className="text-muted-foreground hover:text-civic-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded-sm"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        )}
        <button
          type="button"
          aria-label={
            !speechAvailable
              ? voiceStatusMessage("not-supported", en)
              : voiceBusy
                ? en
                  ? "Stop voice search"
                  : "आवाज शोध थांबवा"
                : en
                  ? "Voice search (English or Marathi)"
                  : "आवाजाने शोधा (मराठी किंवा इंग्रजी)"
          }
          aria-pressed={voiceBusy}
          aria-describedby={voiceNote ? voiceStatusId : undefined}
          disabled={!speechAvailable}
          title={voiceNote || (speechAvailable ? undefined : voiceStatusMessage("not-supported", en))}
          onClick={toggleVoice}
          className={`shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue disabled:opacity-40 ${voiceBusy ? "text-muted-foreground hover:text-civic-blue" : "text-civic-red"}`}
        >
          {voiceBusy ? (
            <Mic className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} aria-hidden />
          ) : (
            <MicOff className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} aria-hidden />
          )}
        </button>
        {voiceNote ? (
          <p
            id={voiceStatusId}
            role="status"
            className="absolute left-0 right-0 top-full z-[2060] mt-1 rounded-lg border border-border bg-white px-3 py-1.5 text-[11px] leading-snug text-civic-blue shadow-sm"
          >
            {voiceNote}
          </p>
        ) : null}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {voiceNote ? `${voiceNote} ` : ""}
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
                        commitQuery(didYouMean);
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
                    onClick={() => goToResultsPage(searchQuery)}
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
            {searchQuery.trim().length >= 2 && (
              <div className="border-t border-border px-3 py-2.5 bg-slate-50/80">
                <button
                  type="button"
                  className="w-full text-left text-xs font-bold text-civic-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
                  onClick={() => goToResultsPage(searchQuery)}
                >
                  {en
                    ? `View all results for “${searchQuery.trim()}” →`
                    : `“${searchQuery.trim()}” साठी सर्व निकाल पहा →`}
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
