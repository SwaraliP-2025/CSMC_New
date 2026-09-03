import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FileText, Download, Search, Filter, ExternalLink } from "lucide-react";
import { buildSimplePdf, pdfFilename } from "@/lib/simplePdf";
import { useLang } from "@/i18n/LanguageContext";

type DocCategory = "all" | "resolutions" | "minutes" | "rti" | "budget" | "tenders";
type DocFormat = "pdf" | "excel";
type DocType = "agenda" | "minutes" | "attendance";

interface Doc {
  id: number;
  title: string;
  category: Exclude<DocCategory, "all">;
  date: string;
  size: string;
  year: number; // FY start year for budgets (e.g. 2025 => 2025-26)
  format?: DocFormat;
  type?: DocType;
  /** Optional digital-repository record id for cross-link */
  repoId?: string;
}

const DOCS: Doc[] = [
  { id: 1,  title: "General Body Resolution — March 2026",                  category: "resolutions", date: "28 Mar 2026", size: "1.2 MB", year: 2026 },
  { id: 2,  title: "General Body Resolution — February 2026",               category: "resolutions", date: "25 Feb 2026", size: "980 KB", year: 2026 },
  { id: 3,  title: "Standing Committee Minutes — April 2026",               category: "minutes",     date: "15 Apr 2026", size: "2.1 MB", year: 2026, type: "minutes", repoId: "mm-sc-apr" },
  { id: 4,  title: "Standing Committee Minutes — March 2026",               category: "minutes",     date: "12 Mar 2026", size: "1.8 MB", year: 2026, type: "minutes" },
  { id: 5,  title: "Standing Committee Minutes — February 2026",            category: "minutes",     date: "10 Feb 2026", size: "1.5 MB", year: 2026, type: "minutes" },
  { id: 19, title: "Standing Committee Meeting Agenda — April 2026",        category: "minutes",     date: "14 Apr 2026", size: "820 KB", year: 2026, type: "agenda", repoId: "mm-sc-agenda" },
  { id: 20, title: "Standing Committee Meeting Agenda — March 2026",        category: "minutes",     date: "11 Mar 2026", size: "760 KB", year: 2026, type: "agenda" },
  { id: 21, title: "Standing Committee Meeting Attendance — April 2026",    category: "minutes",     date: "15 Apr 2026", size: "410 KB", year: 2026, type: "attendance" },
  { id: 22, title: "Standing Committee Meeting Attendance — March 2026",    category: "minutes",     date: "12 Mar 2026", size: "390 KB", year: 2026, type: "attendance" },
  { id: 6,  title: "RTI Disclosure — Quarterly Report Q4 2025-26",          category: "rti",         date: "1 Apr 2026",  size: "3.4 MB", year: 2026, repoId: "rti-q4" },
  { id: 7,  title: "RTI Disclosure — Quarterly Report Q3 2025-26",          category: "rti",         date: "1 Jan 2026",  size: "3.1 MB", year: 2026, repoId: "rti-q3" },
  { id: 8,  title: "Annual Budget 2026-27 — Approved",                      category: "budget",      date: "20 Mar 2026", size: "5.6 MB", year: 2026, format: "pdf", repoId: "bud-2627" },
  { id: 9,  title: "Annual Budget 2026-27 — Excel",                         category: "budget",      date: "20 Mar 2026", size: "2.1 MB", year: 2026, format: "excel", repoId: "bud-2627" },
  { id: 10, title: "Annual Budget 2025-26 — Approved",                      category: "budget",      date: "22 Mar 2025", size: "5.2 MB", year: 2025, format: "pdf", repoId: "bud-2526" },
  { id: 11, title: "Annual Budget 2025-26 — Excel",                         category: "budget",      date: "22 Mar 2025", size: "1.9 MB", year: 2025, format: "excel", repoId: "bud-2526" },
  { id: 12, title: "Annual Budget 2024-25 — Approved",                      category: "budget",      date: "25 Mar 2024", size: "4.8 MB", year: 2024, format: "pdf", repoId: "bud-2425" },
  { id: 13, title: "Annual Budget 2024-25 — Excel",                         category: "budget",      date: "25 Mar 2024", size: "1.7 MB", year: 2024, format: "excel", repoId: "bud-2425" },
  { id: 14, title: "Annual Budget 2023-24 — Approved",                      category: "budget",      date: "28 Mar 2023", size: "4.5 MB", year: 2023, format: "pdf" },
  { id: 15, title: "Annual Budget 2023-24 — Excel",                         category: "budget",      date: "28 Mar 2023", size: "1.6 MB", year: 2023, format: "excel" },
  { id: 16, title: "Tender Notice — SWM Phase II (NIT No. CSMC/SWM/2026/01)", category: "tenders",   date: "10 Apr 2026", size: "890 KB", year: 2026 },
  { id: 17, title: "Tender Notice — Road Resurfacing Zone 4-6",             category: "tenders",     date: "5 Apr 2026",  size: "760 KB", year: 2026 },
  { id: 18, title: "General Body Resolution — January 2026",                category: "resolutions", date: "28 Jan 2026", size: "1.1 MB", year: 2026 },
];

const CATEGORY_LABELS: Record<DocCategory, string> = {
  all: "All Documents",
  resolutions: "General Body Resolutions",
  minutes: "Standing Committee Minutes",
  rti: "RTI / Proactive Disclosure",
  budget: "Budget Documents",
  tenders: "Tender Notices",
};

const CATEGORY_COLORS: Record<Exclude<DocCategory, "all">, string> = {
  resolutions: "bg-blue-100 text-blue-700",
  minutes:     "bg-purple-100 text-purple-700",
  rti:         "bg-green-100 text-green-700",
  budget:      "bg-amber-100 text-amber-700",
  tenders:     "bg-red-100 text-red-700",
};

const isDocCategory = (v: string | null): v is DocCategory =>
  !!v && ["all", "resolutions", "minutes", "rti", "budget", "tenders"].includes(v);

function downloadPrototypePdf(doc: Doc) {
  const text = [
    "Chhatrapati Sambhajinagar Municipal Corporation",
    "Prototype sample PDF — not an official gazette copy",
    "",
    doc.title,
    "",
    `Category: ${CATEGORY_LABELS[doc.category]}`,
    `Listed date: ${doc.date}`,
    `Listed size: ${doc.size}`,
    `Year: ${doc.year}`,
    doc.format ? `Format label: ${doc.format}` : "",
    doc.type ? `Type: ${doc.type}` : "",
    "",
    "This file is generated in-browser for portal prototype demonstration only.",
    "Official signed copies are published through CSMC channels when available.",
  ]
    .filter(Boolean)
    .join("\n");

  const blob = buildSimplePdf(text);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = pdfFilename(doc.title, `pub-doc-${doc.id}`);
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const PublicDocuments = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState<DocCategory>("all");
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [formatFilter, setFormatFilter] = useState<DocFormat | null>(null);
  const [typeFilter, setTypeFilter] = useState<DocType | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    const year = searchParams.get("year");
    const format = searchParams.get("format");
    const type = searchParams.get("type");
    if (isDocCategory(cat)) setCategory(cat);
    setYearFilter(year ? Number(year) : null);
    setFormatFilter(format === "excel" || format === "pdf" ? format : null);
    setTypeFilter(type === "agenda" || type === "minutes" || type === "attendance" ? type : null);
  }, [searchParams]);

  const filtered = DOCS.filter(d =>
    (category === "all" || d.category === category) &&
    (yearFilter === null || d.year === yearFilter) &&
    (formatFilter === null || d.format === formatFilter) &&
    (typeFilter === null || d.type === typeFilter) &&
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Transparency & RTI Vault" : "पारदर्शकता व माहिती अधिकार"}
        title={en ? "Public Documents" : "सार्वजनिक दस्तऐवज"}
        subtitle={
          en
            ? "Proactive disclosure of resolutions, minutes, budgets and RTI documents — open to all citizens."
            : "ठराव, इतिवृत्त, अर्थसंकल्प व माहिती अधिकार दस्तऐवजांचे सक्रिय प्रकटीकरण — सर्व नागरिकांसाठी खुले."
        }
      />
      <section className="py-16 container">
        <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-6">
          {en ? (
            <>
              Files listed here are <strong>prototype samples</strong> for demonstration. Download generates a labelled
              &quot;Prototype sample PDF&quot;. Where a matching record exists, use the repository link for the knowledge vault entry.
            </>
          ) : (
            <>
              येथे सूचीबद्ध फाईल्स <strong>नमुना आवृत्तीसाठी</strong> आहेत. डाउनलोड केल्यास &quot;Prototype sample PDF&quot; तयार होते.
              जुळणारी नोंद असल्यास ज्ञान भांडार दुवा वापरा.
            </>
          )}
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white flex-1 focus-within:ring-2 focus-within:ring-civic-blue/30">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder={en ? "Search documents..." : "दस्तऐवज शोधा..."} className="text-sm bg-transparent outline-none flex-1" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(Object.keys(CATEGORY_LABELS) as DocCategory[]).map(c => (
              <button key={c} onClick={() => { setCategory(c); setYearFilter(null); setFormatFilter(null); setTypeFilter(null); }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${category === c ? "bg-civic-blue text-white border-civic-blue" : "border-border text-muted-foreground hover:border-civic-blue hover:text-civic-blue"}`}>
                {CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Document list */}
        <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
          {filtered.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">No documents found.</div>
          )}
          {filtered.map(doc => (
            <div key={doc.id} className="flex items-center gap-4 px-6 py-4 hover:bg-muted/30 transition-colors group">
              <div className="h-10 w-10 rounded-xl bg-civic-blue/10 flex items-center justify-center shrink-0 group-hover:bg-civic-blue group-hover:text-white transition-all">
                <FileText className="h-5 w-5 text-civic-blue group-hover:text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-civic-ink truncate">{doc.title}</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[doc.category]}`}>
                    {CATEGORY_LABELS[doc.category]}
                  </span>
                  <span className="text-xs text-muted-foreground">{doc.date}</span>
                  <span className="text-xs text-muted-foreground">• {doc.size}</span>
                  {doc.repoId && (
                    <Link
                      to={`/digital-repository/${doc.repoId}`}
                      className="text-[10px] font-bold text-civic-blue hover:underline inline-flex items-center gap-0.5"
                    >
                      Repository <ExternalLink className="h-2.5 w-2.5" />
                    </Link>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => downloadPrototypePdf(doc)}
                title="Prototype sample PDF"
                className="flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-white hover:bg-civic-blue px-3 py-1.5 rounded-lg border border-civic-blue transition-all shrink-0"
              >
                <Download className="h-3.5 w-3.5" /> {doc.format === "excel" ? "Excel sample" : "PDF sample"}
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Documents are published as per Section 4(1)(b) of the Right to Information Act, 2005.
          {" "}Prototype sample downloads are for demonstration only.
        </p>
      </section>
    </Layout>
  );
};

export default PublicDocuments;
