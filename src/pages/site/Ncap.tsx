import { useEffect, useMemo, useState } from "react";
import { Download, Eye, FileText, FileType, Search } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLang } from "@/i18n/LanguageContext";
import { ncapFileUrl, ncapMatches, type NcapDocument } from "@/lib/ncap";

const Ncap = () => {
  const { lang, t, d } = useLang();
  const en = lang === "en";
  const n = t.ncap;
  const [docs, setDocs] = useState<NcapDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [active, setActive] = useState<NcapDocument | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.BASE_URL}data/ncap-documents.json`)
      .then((res) => {
        if (!res.ok) throw new Error("load");
        return res.json();
      })
      .then((data: { documents?: NcapDocument[] }) => {
        if (!cancelled) setDocs(Array.isArray(data.documents) ? data.documents : []);
      })
      .catch(() => {
        if (!cancelled) setError(n.loadError);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [n.loadError]);

  const years = useMemo(() => {
    const set = new Set<number>();
    for (const doc of docs) {
      if (doc.year) set.add(doc.year);
    }
    return [...set].sort((a, b) => b - a);
  }, [docs]);

  const filtered = useMemo(
    () => docs.filter((doc) => ncapMatches(doc, query, year)),
    [docs, query, year],
  );

  return (
    <Layout>
      <PageHeader eyebrow="NCAP" title={n.title} />
      <section className="py-8 md:py-12 container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end mb-6">
          <label className="relative flex-1 min-w-0">
            <span className="sr-only">{n.search}</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={n.searchPlaceholder}
              className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm outline-none placeholder:text-muted-foreground/40 focus-visible:ring-2 focus-visible:ring-civic-blue/30"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-semibold text-civic-blue min-w-[10rem]">
            {n.year}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-full border border-border bg-white px-3 py-2.5 text-sm font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-civic-blue/30"
            >
              <option value="">{n.allYears}</option>
              {years.map((y) => (
                <option key={y} value={String(y)}>
                  {d(y)}
                </option>
              ))}
            </select>
          </label>
        </div>

        {loading ? (
          <p className="rounded-2xl border border-border bg-white p-8 text-center text-muted-foreground">{n.loading}</p>
        ) : error ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-700" role="alert">
            {error}
          </p>
        ) : filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border bg-slate-50 p-10 text-center text-muted-foreground">
            {n.noResults}
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {filtered.map((doc) => (
              <li key={doc.id}>
                <NcapRow doc={doc} en={en} onOpen={() => setActive(doc)} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <NcapViewer doc={active} onClose={() => setActive(null)} />
    </Layout>
  );
};

function fileKindLabel(doc: NcapDocument, en: boolean, pdf: string, word: string) {
  return doc.fileType === "pdf" ? pdf : word;
}

function NcapRow({
  doc,
  en,
  onOpen,
}: {
  doc: NcapDocument;
  en: boolean;
  onOpen: () => void;
}) {
  const { t, d } = useLang();
  const n = t.ncap;
  const kind = fileKindLabel(doc, en, n.pdf, n.word);
  const kindEn = doc.fileType === "pdf" ? "PDF" : "Word";
  const url = ncapFileUrl(doc.fileName);
  const meta = [
    doc.organisation,
    doc.year ? d(doc.year) : null,
    kind,
  ].filter(Boolean);

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 sm:flex-row sm:items-center sm:gap-4">
      <button
        type="button"
        onClick={onOpen}
        className="flex min-w-0 flex-1 items-start gap-3 text-left rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
        aria-label={en ? `Preview ${kindEn}: ${doc.title}` : `${kind} पूर्वावलोकन: ${doc.title}`}
      >
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-civic-blue/10 text-civic-blue">
          {doc.fileType === "pdf" ? (
            <FileText className="h-5 w-5" aria-hidden />
          ) : (
            <FileType className="h-5 w-5" aria-hidden />
          )}
        </span>
        <span className="min-w-0">
          <span className="block font-semibold text-civic-blue leading-snug break-words">{doc.title}</span>
          <span className="mt-1 block text-xs text-muted-foreground leading-relaxed break-words">
            {meta.join(" · ")}
          </span>
        </span>
      </button>
      <div className="flex shrink-0 gap-2 sm:flex-col lg:flex-row">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-civic-blue px-3 py-2 text-xs font-semibold text-civic-blue hover:bg-civic-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          aria-label={en ? `Preview ${kindEn}: ${doc.title}` : `${kind} पूर्वावलोकन: ${doc.title}`}
        >
          <Eye className="h-3.5 w-3.5" aria-hidden />
          {n.preview}
        </button>
        <a
          href={url}
          download={doc.fileName}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-civic-blue px-3 py-2 text-xs font-semibold text-white hover:bg-civic-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          aria-label={en ? `Download ${kindEn}: ${doc.title}` : `${kind} डाउनलोड: ${doc.title}`}
        >
          <Download className="h-3.5 w-3.5" aria-hidden />
          {n.download}
        </a>
      </div>
    </article>
  );
}

function NcapViewer({ doc, onClose }: { doc: NcapDocument | null; onClose: () => void }) {
  const { lang, t } = useLang();
  const en = lang === "en";
  const n = t.ncap;
  const url = doc ? ncapFileUrl(doc.fileName) : "";

  return (
    <Dialog open={Boolean(doc)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="flex w-[calc(100%-1rem)] max-w-5xl flex-col gap-3 overflow-y-auto p-4 sm:p-5 max-h-[min(92dvh,960px)]">
        <DialogHeader className="pr-8">
          <DialogTitle className="font-serif text-base sm:text-lg text-civic-blue leading-snug break-words">
            {doc?.title}
          </DialogTitle>
          <DialogDescription className="sr-only">{n.previewOf}</DialogDescription>
        </DialogHeader>
        {doc?.fileType === "pdf" ? (
          <iframe
            title={en ? `Preview PDF: ${doc.title}` : `PDF पूर्वावलोकन: ${doc.title}`}
            src={url}
            className="h-[min(52dvh,640px)] min-h-[12rem] w-full rounded-lg border border-border bg-slate-50"
          />
        ) : doc ? (
          <WordPreview url={url} title={doc.title} fallback={doc.text} failedLabel={n.previewFailed} />
        ) : null}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-civic-blue hover:bg-civic-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          >
            {n.close}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function WordPreview({
  url,
  title,
  fallback,
  failedLabel,
}: {
  url: string;
  title: string;
  fallback: string;
  failedLabel: string;
}) {
  const [html, setHtml] = useState("");
  const [plain, setPlain] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setHtml("");
    setPlain("");
    setFailed(false);
    (async () => {
      try {
        const mammoth = await import("mammoth");
        const buf = await fetch(url).then((res) => {
          if (!res.ok) throw new Error("fetch");
          return res.arrayBuffer();
        });
        const result = await mammoth.convertToHtml({ arrayBuffer: buf });
        if (!cancelled) setHtml(result.value || "");
      } catch {
        if (cancelled) return;
        if (fallback.trim()) setPlain(fallback);
        else setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [url, fallback]);

  if (failed) {
    return <p className="text-sm text-muted-foreground">{failedLabel}</p>;
  }
  if (!html && !plain) {
    return <p className="text-sm text-muted-foreground">…</p>;
  }
  if (plain) {
    return (
      <pre className="max-h-[60vh] overflow-auto whitespace-pre-wrap break-words rounded-lg border border-border bg-slate-50 p-4 text-sm leading-relaxed">
        {plain}
      </pre>
    );
  }
  return (
    <div
      className="max-h-[60vh] overflow-auto rounded-lg border border-border bg-white p-4 text-sm leading-relaxed [&_p]:mb-3 [&_table]:w-full [&_td]:border [&_td]:border-border [&_td]:p-1 [&_th]:border [&_th]:border-border [&_th]:p-1"
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default Ncap;
