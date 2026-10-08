import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Search, X, ZoomIn, ZoomOut } from "lucide-react";
import { PdfHighlightedPage } from "@/components/site/PdfHighlightedPage";
import { useLang } from "@/i18n/LanguageContext";
import {
  isSameOriginPdfHref,
  onOpenInPagePdf,
  openInPagePdf,
  pdfNameFromHref,
  type InPagePdf,
} from "@/lib/pdfPreview";
import { searchPdf, type PdfSearchHit, type PdfSearchProgress } from "@/lib/pdfSearch";

function releaseUrl(url: string) {
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

function looksLikePdf(buffer: ArrayBuffer, contentType: string) {
  if (contentType.toLowerCase().includes("pdf")) return true;
  const head = new TextDecoder().decode(buffer.slice(0, 5));
  return head.startsWith("%PDF");
}

export function PdfPreviewHost() {
  const { lang, d } = useLang();
  const en = lang === "en";
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const searchAbort = useRef<AbortController | null>(null);
  const [doc, setDoc] = useState<InPagePdf | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [zoom, setZoom] = useState(1.25);
  const [failed, setFailed] = useState(false);
  const [checking, setChecking] = useState(false);
  const [pdfQuery, setPdfQuery] = useState("");
  const [pdfHits, setPdfHits] = useState<PdfSearchHit[]>([]);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<PdfSearchProgress | null>(null);
  const [searched, setSearched] = useState(false);
  const [highlighting, setHighlighting] = useState(false);
  const [activeLocal, setActiveLocal] = useState(0);

  const clearSearchResults = useCallback(() => {
    searchAbort.current?.abort();
    setPdfHits([]);
    setPdfBusy(false);
    setPdfProgress(null);
    setSearched(false);
    setHighlighting(false);
    setActiveLocal(0);
  }, []);

  const runSearch = useCallback((needle: string, focusPage?: number) => {
    if (!doc) return;
    searchAbort.current?.abort();
    const controller = new AbortController();
    searchAbort.current = controller;
    setPdfBusy(true);
    setSearched(true);
    setPdfHits([]);
    setHighlighting(false);
    setPdfProgress(null);
    void searchPdf(doc.url, needle, { signal: controller.signal, onProgress: setPdfProgress })
      .then((result) => {
        if (controller.signal.aborted) return;
        setPdfHits(result.hits);
        if (focusPage && result.hits.some((hit) => hit.page === focusPage)) {
          setPageNumber(focusPage);
          setActiveLocal(0);
          setHighlighting(true);
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setPdfHits([]);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setPdfBusy(false);
        setPdfProgress(null);
      });
  }, [doc]);

  useEffect(() => {
    return onOpenInPagePdf((next) => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      searchAbort.current?.abort();
      setFailed(false);
      setChecking(true);
      setPageNumber(next.page && next.page > 0 ? next.page : 1);
      setPageCount(0);
      setPdfHits([]);
      setPdfQuery(next.query ?? "");
      setPdfBusy(false);
      setPdfProgress(null);
      setSearched(false);
      setHighlighting(false);
      setActiveLocal(0);
      setDoc((prev) => {
        if (prev?.revoke && prev.url !== next.url) releaseUrl(prev.url);
        return next;
      });
    });
  }, []);

  useEffect(() => {
    if (!doc?.query?.trim()) return;
    runSearch(doc.query, doc.page);
  }, [doc, runSearch]);

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
  }, [doc?.url]);

  const close = () => {
    searchAbort.current?.abort();
    setDoc((prev) => {
      if (prev?.revoke) releaseUrl(prev.url);
      return null;
    });
    setFailed(false);
    setChecking(false);
    clearSearchResults();
    const back = returnFocus.current;
    returnFocus.current = null;
    window.requestAnimationFrame(() => back?.focus());
  };

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
      const items = [...panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input, iframe")].filter(
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

  if (!doc) return null;
  const previewSrc = `${doc.url.split("#")[0]}#page=${pageNumber}`;
  const currentHit = pdfHits.find((hit) => hit.page === pageNumber);
  const matchCount = currentHit?.count ?? 0;
  const focusedMatch = currentHit ? Math.min(activeLocal, matchCount - 1) : -1;
  const firstHit = pdfHits[0];
  const lastHit = pdfHits[pdfHits.length - 1];
  const atFirstMatch = !!firstHit && pageNumber === firstHit.page && focusedMatch <= 0;
  const atLastMatch = !!lastHit && pageNumber === lastHit.page && focusedMatch >= lastHit.count - 1;

  const showMatchPage = (page: number, matchIndex: number) => {
    setPageNumber(page);
    setActiveLocal(matchIndex);
    setHighlighting(true);
  };

  const goToPage = (page: number) => {
    const next = Math.min(Math.max(1, page), pageCount || page);
    setPageNumber(next);
    const hit = pdfHits.find((item) => item.page === next);
    setActiveLocal(hit ? 0 : -1);
  };

  const stepMatch = (direction: 1 | -1) => {
    const pagePos = pdfHits.findIndex((hit) => hit.page === pageNumber);
    if (pagePos < 0) {
      const next = direction > 0 ? firstHit : lastHit;
      if (next) showMatchPage(next.page, direction > 0 ? 0 : next.count - 1);
      return;
    }
    const hit = pdfHits[pagePos];
    const nextIndex = focusedMatch + direction;
    if (nextIndex >= 0 && nextIndex < hit.count) {
      setActiveLocal(nextIndex);
      return;
    }
    const neighbor = pdfHits[pagePos + direction];
    if (neighbor) showMatchPage(neighbor.page, direction > 0 ? 0 : neighbor.count - 1);
  };

  const downloadLabel = en ? "Download PDF" : "PDF डाउनलोड";
  const closeLabel = en ? "Close preview" : "पूर्वावलोकन बंद करा";
  const unable = en ? "Unable to preview this document." : "हे दस्तऐवज पूर्वावलोकनात दाखवता आले नाही.";
  const pageMatchLabel = (hit: PdfSearchHit) =>
    en
      ? `Page ${d(hit.page)} — ${d(hit.count)} ${hit.count === 1 ? "match" : "matches"}`
      : `पृष्ठ ${d(hit.page)} — ${d(hit.count)} जुळण्या`;
  const status = pdfProgress
    ? pdfProgress.phase === "ocr"
      ? en
        ? `Reading scanned document, page ${d(pdfProgress.page)} of ${d(pdfProgress.pageCount)}`
        : `स्कॅन केलेले दस्तऐवज वाचत आहे, पृष्ठ ${d(pdfProgress.page)} / ${d(pdfProgress.pageCount)}`
      : en
        ? `Searching the document, page ${d(pdfProgress.page)} of ${d(pdfProgress.pageCount)}`
        : `दस्तऐवज शोधत आहे, पृष्ठ ${d(pdfProgress.page)} / ${d(pdfProgress.pageCount)}`
    : highlighting && matchCount > 0
      ? en
        ? `Found ${d(matchCount)} ${matchCount === 1 ? "match" : "matches"} on page ${d(pageNumber)}. Match ${d(focusedMatch + 1)} of ${d(matchCount)}.`
        : `पृष्ठ ${d(pageNumber)} वर ${d(matchCount)} जुळण्या सापडल्या. जुळणी ${d(focusedMatch + 1)} / ${d(matchCount)}.`
      : searched && !pdfBusy && pdfHits.length === 0
        ? en
          ? "No matches in this document."
          : "या दस्तऐवजात जुळणी नाही."
        : null;

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
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center"
          onSubmit={(event) => {
            event.preventDefault();
            const needle = pdfQuery.trim();
            if (!needle) {
              clearSearchResults();
              return;
            }
            runSearch(needle);
          }}
        >
          <label className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm">
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
            <span className="sr-only">{en ? "Search / OCR" : "शोध / ओसीआर"}</span>
            <input
              value={pdfQuery}
              onChange={(event) => {
                const value = event.target.value;
                setPdfQuery(value);
                setPdfHits([]);
                setHighlighting(false);
                setSearched(false);
                if (!value.trim()) {
                  searchAbort.current?.abort();
                  setPdfBusy(false);
                  setPdfProgress(null);
                }
              }}
              className="w-full bg-transparent outline-none"
              placeholder={en ? "Search / OCR" : "शोध / ओसीआर"}
            />
          </label>
          <button type="submit" className="rounded-xl bg-civic-blue px-4 py-2 text-sm font-bold text-white disabled:opacity-60" disabled={pdfBusy}>
            {pdfBusy ? (en ? "Searching…" : "शोध सुरू आहे…") : en ? "Search / OCR" : "शोध / ओसीआर"}
          </button>
        </form>
        {status ? <p className="mt-2 text-sm text-civic-ink" aria-live="polite">{status}</p> : null}
        {pdfHits.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {pdfHits.map((hit) => {
              const selected = highlighting && hit.page === pageNumber;
              return (
                <button
                  key={hit.page}
                  type="button"
                  className={`rounded-lg px-2 py-1 text-xs font-bold underline ${selected ? "bg-civic-blue text-white" : "text-civic-blue"}`}
                  onClick={() => showMatchPage(hit.page, 0)}
                >
                  {pageMatchLabel(hit)}
                </button>
              );
            })}
          </div>
        ) : null}
        {highlighting && pdfHits.length > 0 ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-xs font-bold text-civic-blue disabled:opacity-40" onClick={() => stepMatch(-1)} disabled={atFirstMatch}>
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              {en ? "Previous match" : "मागील जुळणी"}
            </button>
            <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-xs font-bold text-civic-blue disabled:opacity-40" onClick={() => stepMatch(1)} disabled={atLastMatch}>
              {en ? "Next match" : "पुढील जुळणी"}
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </button>
            <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-xs font-bold text-civic-blue disabled:opacity-40" onClick={() => goToPage(pageNumber - 1)} disabled={pageNumber <= 1}>
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              {en ? "Previous page" : "मागील पृष्ठ"}
            </button>
            <label className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              {en ? "Page" : "पृष्ठ"}
              <input
                type="number"
                min={1}
                max={pageCount || undefined}
                value={pageNumber}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  if (Number.isFinite(value)) goToPage(value);
                }}
                className="w-16 rounded-lg border border-border bg-white px-2 py-1 text-center text-civic-ink"
              />
              {pageCount ? <span>/ {d(pageCount)}</span> : null}
            </label>
            <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-xs font-bold text-civic-blue disabled:opacity-40" onClick={() => goToPage(pageNumber + 1)} disabled={!pageCount || pageNumber >= pageCount}>
              {en ? "Next page" : "पुढील पृष्ठ"}
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </button>
            <button type="button" className="inline-flex items-center rounded-lg border border-border p-1 text-civic-blue" onClick={() => setZoom((value) => Math.max(0.8, Number((value - 0.2).toFixed(2))))} aria-label={en ? "Zoom out" : "लहान करा"}>
              <ZoomOut className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" className="inline-flex items-center rounded-lg border border-border p-1 text-civic-blue" onClick={() => setZoom((value) => Math.min(2.5, Number((value + 0.2).toFixed(2))))} aria-label={en ? "Zoom in" : "मोठे करा"}>
              <ZoomIn className="h-4 w-4" aria-hidden />
            </button>
          </div>
        ) : null}
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
        ) : highlighting ? (
          <div className="mt-4 h-[min(78dvh,920px)] overflow-auto rounded-xl border border-border bg-slate-100 p-3">
            <PdfHighlightedPage
              url={doc.url}
              page={pageNumber}
              zoom={zoom}
              matches={currentHit?.matches ?? []}
              activeIndex={focusedMatch}
              onPageCount={setPageCount}
              onError={() => setFailed(true)}
            />
          </div>
        ) : checking ? (
          <p className="mt-6 rounded-2xl border border-border bg-slate-50 px-4 py-10 text-center text-sm text-muted-foreground">
            {en ? "Loading document…" : "दस्तऐवज लोड होत आहे…"}
          </p>
        ) : (
          <iframe
            key={previewSrc}
            title={en ? `PDF preview: ${doc.title}` : `PDF पूर्वावलोकन: ${doc.title}`}
            src={previewSrc}
            className="mt-4 h-[min(78dvh,920px)] min-h-[22rem] w-full max-w-full rounded-xl border border-border bg-slate-50"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
