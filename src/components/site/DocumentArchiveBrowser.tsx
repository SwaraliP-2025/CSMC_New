import { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { useLang } from "@/i18n/LanguageContext";
import { openInPagePdf } from "@/lib/pdfPreview";
import { formatCivicDate } from "@/lib/unifiedSearch";
import {
  archiveDisplayName,
  archiveNameMatches,
  formatArchiveBytes,
  isPdfFile,
  publicDocumentUrl,
  sortArchiveFiles,
  type ArchiveFile,
  type ArchiveSortKey,
} from "@/lib/archiveDocuments";
import { searchPdf, type PdfSearchHit, type PdfSearchProgress } from "@/lib/pdfSearch";

type Props = {
  documents: ArchiveFile[];
  /** Folder segments under public/documents, without the file name. */
  folderSegments: string[];
  initialSort?: ArchiveSortKey;
};

const SORTS: { key: ArchiveSortKey; en: string; mr: string }[] = [
  { key: "name-asc", en: "Name A–Z", mr: "नाव अ–ज्ञ" },
  { key: "name-desc", en: "Name Z–A", mr: "नाव ज्ञ–अ" },
  { key: "date-newest", en: "Date newest–oldest", mr: "दिनांक नवीन–जुने" },
  { key: "date-oldest", en: "Date oldest–newest", mr: "दिनांक जुने–नवीन" },
  { key: "size-largest", en: "File size largest–smallest", mr: "आकार मोठा–लहान" },
  { key: "size-smallest", en: "File size smallest–largest", mr: "आकार लहान–मोठा" },
];

export function DocumentArchiveBrowser({ documents, folderSegments, initialSort = "name-asc" }: Props) {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [sort, setSort] = useState<ArchiveSortKey>(initialSort);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [progress, setProgress] = useState<PdfSearchProgress & { file?: string; index: number; total: number } | null>(null);
  const [hits, setHits] = useState<Record<string, PdfSearchHit[]>>({});
  const [searched, setSearched] = useState(false);
  const stopRef = useRef<AbortController | null>(null);

  const sorted = useMemo(() => sortArchiveFiles(documents, sort), [documents, sort]);
  const hrefFor = (file: string) => publicDocumentUrl([...folderSegments, file]);

  const nameHaystack = (doc: ArchiveFile) => [doc.file, doc.titleEn, doc.titleMr].filter(Boolean).join(" ");
  const visible = sorted.filter((doc) => {
    if (!searched) return archiveNameMatches(nameHaystack(doc), query);
    if (archiveNameMatches(nameHaystack(doc), query)) return true;
    return (hits[doc.id]?.length ?? 0) > 0;
  });

  const runSearch = async () => {
    const needle = query.trim();
    if (!needle) return;
    stopRef.current?.abort();
    const controller = new AbortController();
    stopRef.current = controller;
    setSearching(true);
    setSearched(true);
    setHits({});
    const pdfs = sorted.filter((doc) => isPdfFile(doc.file));
    const next: Record<string, PdfSearchHit[]> = {};
    for (let index = 0; index < pdfs.length; index += 1) {
      if (controller.signal.aborted) break;
      const doc = pdfs[index];
      try {
        const result = await searchPdf(hrefFor(doc.file), needle, {
          signal: controller.signal,
          onProgress: (state) => setProgress({ ...state, file: doc.file, index: index + 1, total: pdfs.length }),
        });
        if (result.hits.length) next[doc.id] = result.hits;
        setHits({ ...next });
      } catch {
        /* keep going; this file stays searchable by name */
      }
    }
    if (!controller.signal.aborted) setSearching(false);
    setProgress(null);
  };

  const status = progress
    ? progress.phase === "ocr"
      ? en
        ? `Reading scan, page ${d(progress.page)} of ${d(progress.pageCount)} (${d(progress.index)}/${d(progress.total)})`
        : `स्कॅन वाचत आहे, पृष्ठ ${d(progress.page)} / ${d(progress.pageCount)} (${d(progress.index)}/${d(progress.total)})`
      : en
        ? `Reading text, page ${d(progress.page)} of ${d(progress.pageCount)} (${d(progress.index)}/${d(progress.total)})`
        : `मजकूर वाचत आहे, पृष्ठ ${d(progress.page)} / ${d(progress.pageCount)} (${d(progress.index)}/${d(progress.total)})`
    : en
      ? "Search checks the PDF text first. A scanned PDF is read only when you search it."
      : "शोध आधी PDF मधील मजकूर तपासतो. स्कॅन केलेली PDF तुम्ही शोधल्यावरच वाचली जाते.";

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end mb-4">
        <label className="flex-1 text-sm">
          <span className="block text-muted-foreground mb-1">{en ? "Search / OCR" : "शोध / ओसीआर"}</span>
          <span className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSearched(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  void runSearch();
                }
              }}
              className="w-full bg-transparent outline-none"
              placeholder={en ? "Name or keyword" : "नाव किंवा शब्द"}
            />
          </span>
        </label>
        <label className="text-sm">
          <span className="block text-muted-foreground mb-1">{en ? "Sort" : "क्रम"}</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as ArchiveSortKey)}
            className="w-full rounded-xl border border-border bg-white px-3 py-2"
          >
            {SORTS.map((option) => (
              <option key={option.key} value={option.key}>
                {en ? option.en : option.mr}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="rounded-xl bg-civic-blue text-white px-4 py-2 text-sm font-medium"
          onClick={() => {
            if (searching) {
              stopRef.current?.abort();
              setSearching(false);
              setProgress(null);
              return;
            }
            void runSearch();
          }}
        >
          {searching ? (en ? "Stop" : "थांबवा") : en ? "Search / OCR" : "शोध / ओसीआर"}
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-4">{status}</p>
      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground rounded-2xl border border-border bg-white p-6">
          {documents.length === 0
            ? en
              ? "No documents in this category."
              : "या प्रकारात दस्तऐवज नाहीत."
            : en
              ? "No documents match this search."
              : "या शोधाशी जुळणारे दस्तऐवज नाहीत."}
        </p>
      ) : (
        <ul className="space-y-3">
          {visible.map((doc) => {
            const url = doc.externalUrl ?? hrefFor(doc.file);
            const pdf = !doc.externalUrl && isPdfFile(doc.file);
            const label = doc.externalUrl
              ? en
                ? doc.titleEn ?? archiveDisplayName(doc.file)
                : doc.titleMr ?? doc.titleEn ?? archiveDisplayName(doc.file)
              : archiveDisplayName(doc.file);
            const matches = hits[doc.id] ?? [];
            return (
              <li key={doc.id} className="rounded-2xl border border-border bg-white p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <p className="font-medium text-civic-ink break-words">{label}</p>
                    {doc.externalUrl ? null : (
                      <p className="text-xs text-muted-foreground mt-1 break-all">{doc.file}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {doc.externalUrl
                        ? "Google Drive"
                        : doc.date
                          ? formatCivicDate(doc.date, en)
                          : en
                            ? "Date not stated"
                            : "दिनांक दिलेला नाही"}
                      {doc.externalUrl ? "" : ` · ${d(formatArchiveBytes(doc.bytes))}`}
                    </p>
                    {matches.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {matches.map((hit) => (
                          <button
                            key={hit.page}
                            type="button"
                            className="text-xs font-bold text-civic-blue underline"
                            onClick={() => openInPagePdf({ url, filename: doc.file, title: label, page: hit.page, query: query.trim() })}
                          >
                            {en
                              ? `Page ${d(hit.page)} — ${d(hit.count)} ${hit.count === 1 ? "match" : "matches"}`
                              : `पृष्ठ ${d(hit.page)} — ${d(hit.count)} जुळण्या`}
                          </button>
                        ))}
                      </div>
                    ) : null}
                    {matches[0]?.snippet ? <p className="text-sm text-civic-ink/80 mt-2">{matches[0].snippet}</p> : null}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {doc.externalUrl ? (
                      <a
                        href={doc.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-civic-blue underline"
                      >
                        {en ? "Open" : "उघडा"}
                      </a>
                    ) : pdf ? (
                      <PdfFileActions href={url} filename={doc.file} title={label} />
                    ) : (
                      <a href={url} download={doc.file} className="text-sm font-medium text-civic-blue underline">
                        {en ? "Download" : "डाउनलोड"}
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
