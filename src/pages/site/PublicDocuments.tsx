import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { BUDGET_FOLDER, budgetDocumentsFor, budgetYearFromParam, budgetYearSections, type BudgetYearId } from "@/data/budgetDocuments";
import { standingCommitteeMinutes, standingCommitteeYears } from "@/data/standingCommitteeMinutes";
import { STANDING_COMMITTEE_VOLUME_FOLDER, standingCommitteeVolumeMinutes } from "@/data/reviewedPublicDocuments";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

type DocCategory = "all" | "resolutions" | "minutes" | "rti" | "budget" | "tenders";
type DocType = "agenda" | "minutes" | "attendance";

const CATEGORY_LABELS: Record<DocCategory, string> = {
  all: "All Documents",
  resolutions: "General Body Resolutions",
  minutes: "Standing Committee Minutes",
  rti: "RTI / Proactive Disclosure",
  budget: "Budget Documents",
  tenders: "Tender Notices",
};

const isDocCategory = (v: string | null): v is DocCategory =>
  !!v && ["all", "resolutions", "minutes", "rti", "budget", "tenders"].includes(v);

const PublicDocuments = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<DocCategory>("all");
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState<DocType | null>(null);
  const [budgetYear, setBudgetYear] = useState<BudgetYearId | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    const year = searchParams.get("year");
    const type = searchParams.get("type");
    if (isDocCategory(cat)) setCategory(cat);
    setYearFilter(year && /^\d{4}$/.test(year) ? Number(year) : null);
    setBudgetYear(budgetYearFromParam(year));
    setTypeFilter(type === "agenda" || type === "minutes" || type === "attendance" ? type : null);
  }, [searchParams]);

  const showMinutesArchive = category === "minutes" && (typeFilter === null || typeFilter === "minutes");
  const minutesOnly = typeFilter === "minutes";
  const showBudgetArchive = category === "budget";
  const archiveOnly = minutesOnly || showBudgetArchive;
  const selectedMinuteYear = yearFilter && standingCommitteeYears.includes(yearFilter)
    ? yearFilter
    : standingCommitteeYears[standingCommitteeYears.length - 1];
  const minuteDocuments = showMinutesArchive
    ? standingCommitteeMinutes
        .filter((doc) => doc.year === selectedMinuteYear)
        .map((doc) => ({ id: doc.id, file: doc.file, bytes: doc.bytes, date: doc.date }))
    : [];
  const budgetSection = budgetYearSections.find((section) => section.id === budgetYear) ?? null;
  const budgetView = budgetSection ? budgetDocumentsFor(budgetSection.id) : [];

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
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(Object.keys(CATEGORY_LABELS) as DocCategory[]).map(c => (
              <button key={c} onClick={() => { setCategory(c); setYearFilter(null); setBudgetYear(null); setTypeFilter(null); }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${category === c ? "bg-civic-blue text-white border-civic-blue" : "border-border text-muted-foreground hover:border-civic-blue hover:text-civic-blue"}`}>
                {CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
        </div>

        {showMinutesArchive && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {standingCommitteeYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setYearFilter(year)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${selectedMinuteYear === year ? "bg-civic-blue text-white border-civic-blue" : "border-border text-muted-foreground hover:border-civic-blue hover:text-civic-blue"}`}
                >
                  {d(year)}
                </button>
              ))}
            </div>
            <DocumentArchiveBrowser
              key={selectedMinuteYear}
              documents={minuteDocuments}
              folderSegments={["standing-committee", String(selectedMinuteYear)]}
              initialSort="date-oldest"
            />
            <h3 className="font-serif text-lg font-bold text-civic-blue mt-8 mb-3">
              {en ? "Date-range minute volumes" : "कालावधीनुसार इतिवृत्त खंड"}
            </h3>
            <DocumentArchiveBrowser
              documents={standingCommitteeVolumeMinutes}
              folderSegments={["standing-committee", STANDING_COMMITTEE_VOLUME_FOLDER]}
              initialSort="date-oldest"
            />
          </div>
        )}

        {showBudgetArchive && (
          <div className="mb-8">
            {budgetSection ? (
              <>
                <button
                  type="button"
                  onClick={() => setSearchParams({ category: "budget" })}
                  className="mb-4 text-sm font-medium text-civic-blue underline"
                >
                  {en ? "All budget years" : "सर्व अर्थसंकल्प वर्षे"}
                </button>
                <h2 className="font-serif text-2xl font-bold text-civic-blue mb-4">
                  {en ? budgetSection.titleEn : budgetSection.titleMr}
                </h2>
                <DocumentArchiveBrowser
                  key={budgetSection.id}
                  documents={budgetView}
                  folderSegments={[BUDGET_FOLDER, budgetSection.id]}
                />
              </>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {budgetYearSections.filter((section) => section.featured).map((section) => {
                    const count = budgetDocumentsFor(section.id).length;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setSearchParams({ category: "budget", year: section.id })}
                        className="rounded-2xl border border-border bg-white p-5 text-left hover:border-civic-blue transition-colors"
                      >
                        <h2 className="font-serif text-lg text-civic-blue">{en ? section.titleEn : section.titleMr}</h2>
                        <p className="text-sm text-muted-foreground mt-2">
                          {en ? `${count} ${count === 1 ? "document" : "documents"}` : `${d(count)} दस्तऐवज`}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {budgetYearSections.filter((section) => !section.featured).map((section) => {
                  const count = budgetDocumentsFor(section.id).length;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setSearchParams({ category: "budget", year: section.id })}
                      className="w-full rounded-2xl border border-border bg-white p-5 text-left hover:border-civic-blue transition-colors"
                    >
                      <h2 className="font-serif text-lg text-civic-blue">{en ? section.titleEn : section.titleMr}</h2>
                      <p className="text-sm text-muted-foreground mt-2">
                        {en ? `${count} ${count === 1 ? "document" : "documents"}` : `${d(count)} दस्तऐवज`}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {!archiveOnly && (
          <div className="py-16 text-center text-muted-foreground border border-border rounded-2xl bg-white">
            {en
              ? "No published files are listed in this category. Standing committee minutes and budget documents are available under those categories."
              : "या प्रकारात प्रकाशित फाईल्स नाहीत. स्थायी समितीची इतिवृत्ते आणि अर्थसंकल्प त्या प्रकारांत उपलब्ध आहेत."}
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-4 text-center">
          {en
            ? "Documents are published as per Section 4(1)(b) of the Right to Information Act, 2005."
            : "दस्तऐवज माहितीचा अधिकार अधिनियम, २००५ च्या कलम ४(१)(ब) नुसार प्रकाशित केले जातात."}
        </p>
      </section>
    </Layout>
  );
};

export default PublicDocuments;
