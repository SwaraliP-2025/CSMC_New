import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowUpDown,
  Building2,
  Clock,
  Download,
  Eye,
  FileText,
  FolderOpen,
  LayoutGrid,
  List,
  Search,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { DocumentListingCard, documentActionClass } from "@/components/site/DocumentListingCard";
import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { AdministrationEstablishmentDocuments } from "@/components/site/AdministrationEstablishmentDocuments";
import { EducationDepartmentDocuments } from "@/components/site/EducationDepartmentDocuments";
import { useLang } from "@/i18n/LanguageContext";
import { ncapFileUrl } from "@/lib/ncap";
import { localizeDigits } from "@/i18n/digits";
import { repositoryShelves } from "@/data/repositoryShelves";
import { archiveNameMatches, type ArchiveFile } from "@/lib/archiveDocuments";
import { REPOSITORY_DOCUMENTS } from "@/data/civicCatalog";
import {
  CATEGORY_LABELS,
  DOCUMENT_STATUS_LABELS,
  LANGUAGE_LABELS,
  REPOSITORY_CATEGORIES,
} from "@/data/civicLabels";
import { downloadCivicRecord, formatCivicDate, openCivicRecordPdf, searchRepository, tryOpenCivicDocument } from "@/lib/unifiedSearch";
import { highlightText, type SearchHit } from "@/lib/semanticSearch";
import type { CivicCategory, CivicLanguage, CivicRecord, DocumentStatus } from "@/types/civicCatalog";

type SortKey = "newest" | "oldest" | "title";

const isRepoCategory = (v: string | null): v is CivicCategory =>
  !!v && (REPOSITORY_CATEGORIES as string[]).includes(v);

const DigitalRepository = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState<CivicCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [year, setYear] = useState<number | "all">("all");
  const [status, setStatus] = useState<DocumentStatus | "all">("all");
  const [language, setLanguage] = useState<CivicLanguage | "all">("all");
  const [sort, setSort] = useState<SortKey>("newest");
  const [view, setView] = useState<"cards" | "table">("cards");

  useEffect(() => {
    const cat = params.get("category");
    if (isRepoCategory(cat)) setCategory(cat);
    const q = params.get("q");
    if (q) setSearch(q);
  }, [params]);

  const departments = useMemo(
    () => [...new Set(REPOSITORY_DOCUMENTS.map((d) => d.departmentEn))].sort(),
    []
  );
  const years = useMemo(
    () => [...new Set(REPOSITORY_DOCUMENTS.map((d) => d.year))].sort((a, b) => b - a),
    []
  );

  const recent = useMemo(
    () =>
      [...REPOSITORY_DOCUMENTS]
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
        .slice(0, 4),
    []
  );

  const ocrHits = useMemo(() => {
    const q = search.trim();
    if (q.length < 2) return new Map<string, SearchHit>();
    return new Map(searchRepository(q).map((h) => [h.record.id, h]));
  }, [search]);

  const filtered = useMemo(() => {
    const q = search.trim();
    let list = REPOSITORY_DOCUMENTS.filter((d) => {
      if (category !== "all" && d.category !== category) return false;
      if (department !== "all" && d.departmentEn !== department) return false;
      if (year !== "all" && d.year !== year) return false;
      if (status !== "all" && d.status !== status) return false;
      if (language !== "all" && d.language !== language && d.language !== "both") return false;
      if (q.length < 2) return true;
      return ocrHits.has(d.id);
    });
    if (q.length >= 2) {
      list = [...list].sort((a, b) => (ocrHits.get(b.id)?.score ?? 0) - (ocrHits.get(a.id)?.score ?? 0));
    } else {
      list = [...list].sort((a, b) => {
        if (sort === "oldest") return a.publishedAt.localeCompare(b.publishedAt);
        if (sort === "title") {
          return (en ? a.titleEn : a.titleMr).localeCompare(en ? b.titleEn : b.titleMr);
        }
        return b.publishedAt.localeCompare(a.publishedAt);
      });
    }
    return list;
  }, [category, search, department, year, status, language, sort, en, ocrHits]);

  const selectCategory = (c: CivicCategory | "all") => {
    setCategory(c);
    const next = new URLSearchParams(params);
    if (c === "all") next.delete("category");
    else next.set("category", c);
    setParams(next, { replace: true });
  };

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const d of REPOSITORY_DOCUMENTS) {
      map[d.category] = (map[d.category] ?? 0) + 1;
    }
    return map;
  }, []);

  const shelves = useMemo(() => repositoryShelves(), []);
  const archiveCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const shelf of shelves) {
      map[shelf.category] = shelf.sections.reduce((sum, section) => sum + section.documents.length, 0);
    }
    return map;
  }, [shelves]);
  const archiveTotal = useMemo(
    () => Object.values(archiveCounts).reduce((sum, count) => sum + count, 0),
    [archiveCounts],
  );
  const documentsInCategory = (c: CivicCategory) => (counts[c] ?? 0) + (archiveCounts[c] ?? 0);

  const visibleArchive = (documents: ArchiveFile[]) => {
    const q = search.trim();
    if (q.length < 2) return documents;
    return documents.filter((doc) => archiveNameMatches([doc.file, doc.titleEn, doc.titleMr].filter(Boolean).join(" "), q));
  };

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Transparency" : "पारदर्शकता"}
        title={en ? "Municipal Document Repository" : "महापालिका दस्तऐवज भांडार"}
        subtitle={
          en
            ? "Central digital library of all public municipal information."
            : "सर्व सार्वजनिक महापालिका माहितीचे मध्यवर्ती डिजिटल ग्रंथालय."
        }
      />

      <section className="py-10 md:py-14 container">
        <div className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-civic-red mb-2">
            {en ? "Official library" : "अधिकृत ग्रंथालय"}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-civic-blue mb-3 leading-tight">
            {en ? "Municipal Document Repository" : "महापालिका दस्तऐवज भांडार"}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {en
              ? "Search titles, summaries, keywords and OCR text inside circulars, resolutions, budgets, plans, RTI disclosures and other public records. Reading happens on this website; download remains optional."
              : "परिपत्रके, ठराव, अर्थसंकल्प, आराखडे, माहिती अधिकार व इतर सार्वजनिक नोंदींचे शीर्षक, सारांश, कीवर्ड व OCR मजकूर शोधा. वाचन या संकेतस्थळावर होते; डाउनलोड ऐच्छिक आहे."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <SummaryCard
            icon={FileText}
            label={en ? "Total Documents" : "एकूण दस्तऐवज"}
            value={d(REPOSITORY_DOCUMENTS.length + archiveTotal)}
          />
          <SummaryCard
            icon={FolderOpen}
            label={en ? "Categories" : "वर्ग"}
            value={d(REPOSITORY_CATEGORIES.length)}
          />
          <SummaryCard
            icon={Building2}
            label={en ? "Departments" : "विभाग"}
            value={d(departments.length)}
          />
          <SummaryCard
            icon={Sparkles}
            label={en ? "Recently Added" : "अलीकडे जोडले"}
            value={d(recent.length)}
            hint={en ? recent[0]?.titleEn : recent[0]?.titleMr}
          />
        </div>

        <h2 className="font-serif text-xl font-bold text-civic-blue mb-4">
          {en ? "Document Categories" : "दस्तऐवज वर्ग"}
        </h2>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => selectCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
              category === "all"
                ? "bg-civic-blue text-white border-civic-blue"
                : "border-border text-muted-foreground hover:border-civic-blue hover:text-civic-blue"
            }`}
          >
            {en ? "All" : "सर्व"} ({d(REPOSITORY_DOCUMENTS.length + archiveTotal)})
          </button>
          {REPOSITORY_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => selectCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                category === c
                  ? "bg-civic-blue text-white border-civic-blue"
                  : "border-border text-muted-foreground hover:border-civic-blue hover:text-civic-blue"
              }`}
            >
              {en ? CATEGORY_LABELS[c].en : CATEGORY_LABELS[c].mr} ({d(documentsInCategory(c))})
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-3 mb-6">
          <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white flex-1 focus-within:ring-2 focus-within:ring-civic-blue/30">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                en
                  ? "Search titles, OCR text, summaries, keywords…"
                  : "शीर्षक, OCR मजकूर, सारांश, कीवर्ड शोधा…"
              }
              className="text-sm bg-transparent outline-none flex-1"
            />
          </div>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All departments" : "सर्व विभाग"}</option>
            {departments.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <select
            value={String(year)}
            onChange={(e) => setYear(e.target.value === "all" ? "all" : Number(e.target.value))}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All years" : "सर्व वर्षे"}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {d(y)}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as DocumentStatus | "all")}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All statuses" : "सर्व स्थिती"}</option>
            <option value="current">{en ? "Active" : "सक्रिय"}</option>
            <option value="superseded">{en ? "Superseded" : "अतिक्रमित"}</option>
            <option value="archived">{en ? "Archived" : "संग्रहित"}</option>
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as CivicLanguage | "all")}
            className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
          >
            <option value="all">{en ? "All languages" : "सर्व भाषा"}</option>
            <option value="en">English</option>
            <option value="mr">मराठी</option>
            <option value="both">{en ? "Bilingual" : "द्विभाषिक"}</option>
          </select>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="text-sm border border-border rounded-xl px-3 py-2.5 bg-white"
            >
              <option value="newest">{en ? "Newest" : "नवीन प्रथम"}</option>
              <option value="oldest">{en ? "Oldest" : "जुने प्रथम"}</option>
              <option value="title">{en ? "Title A–Z" : "शीर्षक अ–ज्ञ"}</option>
            </select>
            <div className="flex border border-border rounded-xl overflow-hidden">
              <button
                type="button"
                aria-label={en ? "Card view" : "कार्ड दृश्य"}
                onClick={() => setView("cards")}
                className={`p-2 ${view === "cards" ? "bg-civic-blue text-white" : "bg-white text-muted-foreground"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={en ? "Table view" : "तक्ता दृश्य"}
                onClick={() => setView("table")}
                className={`p-2 ${view === "table" ? "bg-civic-blue text-white" : "bg-white text-muted-foreground"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {REPOSITORY_CATEGORIES.filter((item) => category === "all" || category === item).map((item) => {
          const shelf = shelves.find((entry) => entry.category === item);
          const sections = (shelf?.sections ?? []).filter((section) => visibleArchive(section.documents).length > 0);
          const catalog = filtered.filter((doc) => doc.category === item);
          if (!sections.length && !catalog.length) return null;
          return (
            <section key={item} id={`repository-${item}`} className="mb-12 scroll-mt-24">
              <h2 className="font-serif text-2xl font-bold text-civic-blue mb-4">
                {en ? CATEGORY_LABELS[item].en : CATEGORY_LABELS[item].mr}
              </h2>
              {sections.map((section) => {
                const documents = visibleArchive(section.documents);
                if (section.presentation === "education") {
                  return (
                    <div key={section.id} id={section.id} className="min-w-0 mb-8">
                      <EducationDepartmentDocuments query={search} />
                    </div>
                  );
                }
                if (section.presentation === "administration") {
                  return (
                    <div key={section.id} id={section.id} className="min-w-0 mb-8">
                      <AdministrationEstablishmentDocuments query={search} />
                    </div>
                  );
                }
                return (
                  <div key={section.id} id={section.id} className="min-w-0 mb-8">
                    <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
                      {en ? section.titleEn : section.titleMr}
                    </h3>
                    <DocumentArchiveBrowser
                      documents={documents}
                      folderSegments={section.folderSegments}
                      fileUrl={section.presentation === "ncap" ? ncapFileUrl : undefined}
                      initialSort={section.initialSort}
                    />
                  </div>
                );
              })}
              {catalog.length > 0 && view === "cards" ? (
                <div className="grid gap-2.5">
                  {catalog.map((doc) => (
                    <DocCard
                      key={doc.id}
                      doc={doc}
                      en={en}
                      hit={ocrHits.get(doc.id)}
                    />
                  ))}
                </div>
              ) : null}
              {catalog.length > 0 && view === "table" ? (
                <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
                  {catalog.map((doc) => (
                    <TableDocRow
                      key={doc.id}
                      doc={doc}
                      en={en}
                      ocrPage={ocrHits.get(doc.id)?.ocrPage}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
        {REPOSITORY_CATEGORIES.every((item) => {
          if (category !== "all" && category !== item) return true;
          const shelf = shelves.find((entry) => entry.category === item);
          const sections = (shelf?.sections ?? []).filter((section) => visibleArchive(section.documents).length > 0);
          return sections.length === 0 && filtered.every((doc) => doc.category !== item);
        }) ? (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl bg-white">
            <FileText className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-semibold text-civic-ink">
              {en ? "No documents in this collection" : "या संग्रहात दस्तऐवज नाहीत"}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {en ? "Try another category, year or search term." : "दुसरा वर्ग, वर्ष किंवा शोध शब्द वापरा."}
            </p>
          </div>
        ) : null}
      </section>
    </Layout>
  );
};

function TableDocRow({
  doc,
  en,
  ocrPage,
}: {
  doc: CivicRecord;
  en: boolean;
  ocrPage?: number;
}) {
  const navigate = useNavigate();
  const docHref = `/digital-repository/${doc.id}`;

  const openDoc = () => {
    if (!tryOpenCivicDocument(doc)) navigate(docHref);
  };

  return (
    <div className="hover:bg-muted/30 transition-colors">
      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5">
        <button
          type="button"
          onClick={openDoc}
          className="h-10 w-10 rounded-lg bg-[#f4f1ea] border border-[#e6dfd2] flex items-center justify-center shrink-0 hover:bg-[#ebe4d8]"
          aria-label={en ? `Open ${doc.titleEn}` : `${doc.titleMr} उघडा`}
        >
          <FileText className="h-5 w-5 text-civic-blue" />
        </button>
        <div className="flex-1 min-w-0">
          <button
            type="button"
            onClick={openDoc}
            className="font-semibold text-sm text-civic-blue hover:underline underline-offset-2 block truncate text-left w-full"
          >
            {en ? doc.titleEn : doc.titleMr}
          </button>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-muted-foreground">
            <span className="px-2 py-0.5 rounded-full bg-civic-blue/10 text-civic-blue font-bold">
              {en ? CATEGORY_LABELS[doc.category].en : CATEGORY_LABELS[doc.category].mr}
            </span>
            <span>{en ? doc.departmentEn : doc.departmentMr}</span>
            <span>{formatCivicDate(doc.publishedAt, en)}</span>
            {ocrPage ? <span>p.{localizeDigits(ocrPage, en ? "en" : "mr")}</span> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function DocCard({
  doc,
  en,
  hit,
}: {
  doc: CivicRecord;
  en: boolean;
  hit?: SearchHit;
}) {
  const navigate = useNavigate();
  const digits = (value: string | number) => localizeDigits(value, en ? "en" : "mr");
  const snippet = en ? hit?.snippetEn : hit?.snippetMr;
  const docHref = `/digital-repository/${doc.id}`;
  const openDoc = () => {
    if (!tryOpenCivicDocument(doc)) navigate(docHref);
  };

  return (
    <DocumentListingCard
      title={en ? doc.titleEn : doc.titleMr}
      kind={doc.downloadable ? "PDF" : "DOC"}
      onOpen={openDoc}
      openLabel={en ? `Open ${doc.titleEn}` : `${doc.titleMr} उघडा`}
      description={
        <>
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-civic-blue px-1.5 py-0.5 rounded">
              {en ? "Official" : "अधिकृत"}
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                doc.status === "current"
                  ? "bg-green-100 text-green-700"
                  : doc.status === "archived"
                    ? "bg-muted text-muted-foreground"
                    : "bg-amber-100 text-amber-800"
              }`}
            >
              {en ? DOCUMENT_STATUS_LABELS[doc.status].en : DOCUMENT_STATUS_LABELS[doc.status].mr}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wide text-civic-red">
              {en ? CATEGORY_LABELS[doc.category].en : CATEGORY_LABELS[doc.category].mr}
            </span>
          </div>
          {snippet ? (
            <p className="line-clamp-2">
              {highlightText(snippet, hit?.highlight).map((part, i) =>
                part.mark ? (
                  <mark key={i} className="bg-civic-gold/50 text-civic-ink rounded-sm px-0.5">
                    {part.text}
                  </mark>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
              {hit?.ocrPage ? <span className="text-civic-blue font-semibold"> · p.{digits(hit.ocrPage)}</span> : null}
            </p>
          ) : (
            <p className="line-clamp-2">{en ? doc.descriptionEn : doc.descriptionMr}</p>
          )}
        </>
      }
      meta={
        <>
          {en ? doc.departmentEn : doc.departmentMr}
          {" · "}
          {en ? LANGUAGE_LABELS[doc.language].en : LANGUAGE_LABELS[doc.language].mr}
          {doc.fileSize ? ` · ${digits(doc.fileSize)}` : ""}
          {" · "}
          {en ? "Published" : "प्रकाशित"} {formatCivicDate(doc.publishedAt, en)}
          {" · "}
          {en ? "Updated" : "अद्यतन"} {formatCivicDate(doc.updatedAt, en)}
          {" · "}
          <Clock className="inline h-3 w-3 mb-0.5" />{" "}
          {en ? `${digits(doc.readingMinutes)} min` : `${digits(doc.readingMinutes)} मि.`}
        </>
      }
      actions={
        doc.downloadable ? (
          <>
            <button
              type="button"
              onClick={() => openCivicRecordPdf(doc)}
              className={`${documentActionClass} text-civic-blue border border-civic-blue hover:bg-civic-blue hover:text-white`}
            >
              <Eye className="h-3.5 w-3.5" /> {en ? "Preview" : "पहा"}
            </button>
            <button
              type="button"
              onClick={() => downloadCivicRecord(doc)}
              className={`${documentActionClass} text-civic-ink border border-border hover:border-civic-blue hover:text-civic-blue`}
            >
              <Download className="h-3.5 w-3.5" /> {en ? "Download" : "डाउनलोड"}
            </button>
            <Link
              to={docHref}
              className={`${documentActionClass} text-civic-ink border border-border hover:border-civic-blue hover:text-civic-blue`}
            >
              {en ? "Details" : "तपशील"}
            </Link>
          </>
        ) : (
          <Link
            to={docHref}
            className={`${documentActionClass} text-civic-blue border border-civic-blue hover:bg-civic-blue hover:text-white`}
          >
            {en ? "Details" : "तपशील"}
          </Link>
        )
      }
    />
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof FileText;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="bg-white border border-border rounded-2xl p-5 hover:shadow-elegant transition-all">
      <div className="h-11 w-11 grid place-items-center rounded-xl bg-civic-blue/8 text-civic-blue mb-3">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="font-serif text-2xl font-bold text-civic-blue mt-0.5">{value}</p>
      {hint && <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{hint}</p>}
    </div>
  );
}

export default DigitalRepository;

