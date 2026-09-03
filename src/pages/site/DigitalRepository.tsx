import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowUpDown,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Building2,
  Check,
  Clock,
  Copy,
  Download,
  FileText,
  FolderOpen,
  LayoutGrid,
  List,
  Loader2,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { localizeDigits } from "@/i18n/digits";
import { REPOSITORY_DOCUMENTS } from "@/data/civicCatalog";
import {
  CATEGORY_LABELS,
  DOCUMENT_STATUS_LABELS,
  LANGUAGE_LABELS,
  REPOSITORY_CATEGORIES,
} from "@/data/civicLabels";
import { documentPermalink, downloadCivicRecord, formatCivicDate, searchRepository } from "@/lib/unifiedSearch";
import { copyLink, getBookmarks, shareLink, toggleBookmark } from "@/lib/bookmarks";
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
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState<string[]>(() => getBookmarks());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const cat = params.get("category");
    if (isRepoCategory(cat)) setCategory(cat);
    const q = params.get("q");
    if (q) setSearch(q);
  }, [params]);

  useEffect(() => {
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 280);
    return () => window.clearTimeout(t);
  }, [category, search, department, year, status, language, sort]);

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

  const onCopy = async (id: string) => {
    await copyLink(documentPermalink(id));
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1600);
  };

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Transparency" : "पारदर्शकता"}
        title={en ? "Municipal Knowledge Repository" : "महापालिका ज्ञान भांडार"}
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
            {en ? "Municipal Knowledge Repository" : "महापालिका ज्ञान भांडार"}
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
            value={d(REPOSITORY_DOCUMENTS.length)}
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
            {en ? "All" : "सर्व"} ({d(REPOSITORY_DOCUMENTS.length)})
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
              {en ? CATEGORY_LABELS[c].en : CATEGORY_LABELS[c].mr} ({d(counts[c] ?? 0)})
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
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
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

        {loading ? (
          <div className="py-20 text-center text-muted-foreground flex flex-col items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-civic-blue" />
            <span className="text-sm">{en ? "Loading documents…" : "दस्तऐवज लोड होत आहेत…"}</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl bg-white">
            <FileText className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-semibold text-civic-ink">
              {en ? "No documents in this collection" : "या संग्रहात दस्तऐवज नाहीत"}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {en ? "Try another category, year or search term." : "दुसरा वर्ग, वर्ष किंवा शोध शब्द वापरा."}
            </p>
          </div>
        ) : view === "cards" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc) => (
              <DocCard
                key={doc.id}
                doc={doc}
                en={en}
                hit={ocrHits.get(doc.id)}
                bookmarked={bookmarks.includes(doc.id)}
                copied={copiedId === doc.id}
                onBookmark={() => setBookmarks(toggleBookmark(doc.id))}
                onCopy={() => onCopy(doc.id)}
              />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
            {filtered.map((doc) => (
              <div key={doc.id} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-civic-blue/10 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-civic-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-civic-ink truncate">
                    {en ? doc.titleEn : doc.titleMr}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-civic-blue/10 text-civic-blue font-bold">
                      {en ? CATEGORY_LABELS[doc.category].en : CATEGORY_LABELS[doc.category].mr}
                    </span>
                    <span>{en ? doc.departmentEn : doc.departmentMr}</span>
                    <span>{formatCivicDate(doc.publishedAt, en)}</span>
                    {ocrHits.get(doc.id)?.ocrPage ? <span>p.{d(ocrHits.get(doc.id)?.ocrPage)}</span> : null}
                  </div>
                </div>
                <Link
                  to={`/digital-repository/${doc.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-white bg-civic-blue hover:bg-civic-blue/90 px-3 py-1.5 rounded-lg transition-all shrink-0"
                >
                  <BookOpen className="h-3.5 w-3.5" /> {en ? "Read online" : "ऑनलाइन वाचा"}
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

function DocCard({
  doc,
  en,
  hit,
  bookmarked,
  copied,
  onBookmark,
  onCopy,
}: {
  doc: CivicRecord;
  en: boolean;
  hit?: SearchHit;
  bookmarked: boolean;
  copied: boolean;
  onBookmark: () => void;
  onCopy: () => void;
}) {
  const digits = (value: string | number) => localizeDigits(value, en ? "en" : "mr");
  const snippet = en ? hit?.snippetEn : hit?.snippetMr;
  return (
    <article className="bg-white border border-border rounded-2xl p-5 hover:shadow-elegant hover:border-civic-gold/30 transition-all flex flex-col">
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-civic-blue px-1.5 py-0.5 rounded">
          {en ? "Official" : "अधिकृत"}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-civic-blue bg-civic-blue/10 px-1.5 py-0.5 rounded">
          v{digits(doc.version)}
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
      <h3 className="font-serif text-base font-bold text-civic-blue mb-2 leading-snug">
        {en ? doc.titleEn : doc.titleMr}
      </h3>
      {snippet ? (
        <p className="text-xs text-muted-foreground mb-3 line-clamp-3 flex-1">
          {highlightText(snippet, hit?.highlight).map((part, i) =>
            part.mark ? (
              <mark key={i} className="bg-civic-gold/50 text-civic-ink rounded-sm px-0.5">
                {part.text}
              </mark>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
          {hit?.ocrPage ? <span className="text-civic-blue font-semibold"> · p.{digits(hit.ocrPage)}</span> : null}
        </p>
      ) : (
        <p className="text-xs text-muted-foreground mb-3 line-clamp-3 flex-1">
          {en ? doc.descriptionEn : doc.descriptionMr}
        </p>
      )}
      <p className="text-[11px] text-muted-foreground mb-3">
        {en ? doc.departmentEn : doc.departmentMr}
        {" · "}
        {en ? LANGUAGE_LABELS[doc.language].en : LANGUAGE_LABELS[doc.language].mr}
        {doc.fileSize ? ` · ${digits(doc.fileSize)}` : ""}
        {" · "}
        {en ? "Published" : "प्रकाशित"} {formatCivicDate(doc.publishedAt, en)}
        {" · "}
        {en ? "Updated" : "अद्यतन"} {formatCivicDate(doc.updatedAt, en)}
        {" · "}
        <Clock className="inline h-3 w-3 mb-0.5" /> {en ? `${digits(doc.readingMinutes)} min` : `${digits(doc.readingMinutes)} मि.`}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        <Link
          to={`/digital-repository/${doc.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-white bg-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue/90"
        >
          <BookOpen className="h-3.5 w-3.5" /> {en ? "Read online" : "ऑनलाइन वाचा"}
        </Link>
        {doc.downloadable && (
          <button
            type="button"
            onClick={() => downloadCivicRecord(doc)}
            className="inline-flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-2.5 py-1.5 hover:bg-civic-blue hover:text-white"
          >
            <Download className="h-3.5 w-3.5" /> {en ? "Download" : "डाउनलोड"}
          </button>
        )}
        <button
          type="button"
          aria-label={en ? "Share" : "शेअर"}
          onClick={() => shareLink(en ? doc.titleEn : doc.titleMr, documentPermalink(doc.id))}
          className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-civic-blue hover:border-civic-blue"
        >
          <Share2 className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          aria-label={en ? "Copy link" : "दुवा कॉपी करा"}
          onClick={onCopy}
          className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-civic-blue hover:border-civic-blue"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
        <button
          type="button"
          aria-label={en ? "Bookmark" : "साठवा"}
          onClick={onBookmark}
          className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-civic-blue hover:border-civic-blue"
        >
          {bookmarked ? <BookmarkCheck className="h-3.5 w-3.5 text-civic-blue" /> : <Bookmark className="h-3.5 w-3.5" />}
        </button>
      </div>
    </article>
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
