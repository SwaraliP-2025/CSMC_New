import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { FileText, Download, Search, Filter } from "lucide-react";

type DocCategory = "all" | "resolutions" | "minutes" | "rti" | "budget" | "tenders";

interface Doc {
  id: number;
  title: string;
  category: Exclude<DocCategory, "all">;
  date: string;
  size: string;
  year: number;
}

const DOCS: Doc[] = [
  { id: 1,  title: "General Body Resolution — March 2026",                  category: "resolutions", date: "28 Mar 2026", size: "1.2 MB", year: 2026 },
  { id: 2,  title: "General Body Resolution — February 2026",               category: "resolutions", date: "25 Feb 2026", size: "980 KB", year: 2026 },
  { id: 3,  title: "Standing Committee Minutes — April 2026",               category: "minutes",     date: "15 Apr 2026", size: "2.1 MB", year: 2026 },
  { id: 4,  title: "Standing Committee Minutes — March 2026",               category: "minutes",     date: "12 Mar 2026", size: "1.8 MB", year: 2026 },
  { id: 5,  title: "Standing Committee Minutes — February 2026",            category: "minutes",     date: "10 Feb 2026", size: "1.5 MB", year: 2026 },
  { id: 6,  title: "RTI Disclosure — Quarterly Report Q4 2025-26",          category: "rti",         date: "1 Apr 2026",  size: "3.4 MB", year: 2026 },
  { id: 7,  title: "RTI Disclosure — Quarterly Report Q3 2025-26",          category: "rti",         date: "1 Jan 2026",  size: "3.1 MB", year: 2026 },
  { id: 8,  title: "Annual Budget 2026-27 — Approved",                      category: "budget",      date: "20 Mar 2026", size: "5.6 MB", year: 2026 },
  { id: 9,  title: "Annual Budget 2025-26 — Revised Estimates",             category: "budget",      date: "15 Jan 2026", size: "4.9 MB", year: 2026 },
  { id: 10, title: "Tender Notice — SWM Phase II (NIT No. CSMC/SWM/2026/01)", category: "tenders",   date: "10 Apr 2026", size: "890 KB", year: 2026 },
  { id: 11, title: "Tender Notice — Road Resurfacing Zone 4-6",             category: "tenders",     date: "5 Apr 2026",  size: "760 KB", year: 2026 },
  { id: 12, title: "General Body Resolution — January 2026",                category: "resolutions", date: "28 Jan 2026", size: "1.1 MB", year: 2026 },
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

const PublicDocuments = () => {
  const [category, setCategory] = useState<DocCategory>("all");
  const [search, setSearch] = useState("");

  const filtered = DOCS.filter(d =>
    (category === "all" || d.category === category) &&
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <PageHeader
        eyebrow="Transparency & RTI Vault"
        title="Public Documents"
        subtitle="Proactive disclosure of resolutions, minutes, budgets and RTI documents — open to all citizens."
      />
      <section className="py-16 container">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white flex-1 focus-within:ring-2 focus-within:ring-civic-blue/30">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search documents..." className="text-sm bg-transparent outline-none flex-1" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(Object.keys(CATEGORY_LABELS) as DocCategory[]).map(c => (
              <button key={c} onClick={() => setCategory(c)}
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
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[doc.category]}`}>
                    {CATEGORY_LABELS[doc.category]}
                  </span>
                  <span className="text-xs text-muted-foreground">{doc.date}</span>
                  <span className="text-xs text-muted-foreground">• {doc.size}</span>
                </div>
              </div>
              <a href="/under-construction"
                className="flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-white hover:bg-civic-blue px-3 py-1.5 rounded-lg border border-civic-blue transition-all shrink-0">
                <Download className="h-3.5 w-3.5" /> PDF
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Documents are published as per Section 4(1)(b) of the Right to Information Act, 2005.
        </p>
      </section>
    </Layout>
  );
};

export default PublicDocuments;
