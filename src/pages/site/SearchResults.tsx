import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ExternalLink, Search } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { localizeDigits } from "@/i18n/digits";
import { CATEGORY_LABELS, SEARCH_GROUP_LABELS, SEARCH_GROUP_ORDER } from "@/data/civicLabels";
import {
  formatCivicDate,
  groupSearchResults,
  recordHref,
  searchHits,
  suggestDidYouMean,
} from "@/lib/unifiedSearch";
import { highlightText, type SearchHit } from "@/lib/semanticSearch";
import type { SearchGroup } from "@/types/civicCatalog";

const POPULAR = [
  { en: "Property Tax", mr: "मालमत्ता कर", q: "Property Tax" },
  { en: "Water Tax", mr: "पाणी कर", q: "Water Tax" },
  { en: "Birth Certificate", mr: "जन्म प्रमाणपत्र", q: "Birth Certificate" },
  { en: "Fire Stations", mr: "अग्निशमन केंद्रे", q: "Fire Station" },
  { en: "CSMC Schools", mr: "CSMC शाळा", q: "CSMC Schools" },
  { en: "Tenders", mr: "निविदा", q: "Tenders" },
  { en: "RTI", mr: "माहिती अधिकार", q: "RTI" },
  { en: "Budget", mr: "अर्थसंकल्प", q: "Budget" },
  { en: "GIS", mr: "GIS नकाशा", q: "GIS" },
  { en: "Complaints", mr: "तक्रार", q: "Complaints" },
] as const;

const SearchResultsPage = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const qParam = params.get("q") ?? "";
  const [draft, setDraft] = useState(qParam);
  const [filter, setFilter] = useState<SearchGroup | "all">("all");

  useEffect(() => {
    setDraft(qParam);
    setFilter("all");
  }, [qParam]);

  const query = qParam.trim();
  const hits = useMemo(() => (query.length >= 2 ? searchHits(query) : []), [query]);
  const didYouMean = useMemo(
    () => (query.length >= 4 ? suggestDidYouMean(query) : null),
    [query],
  );
  const grouped = useMemo(() => groupSearchResults(hits), [hits]);
  const availableGroups = useMemo(
    () => SEARCH_GROUP_ORDER.filter((g) => grouped.some((row) => row.group === g)),
    [grouped],
  );
  const visible = useMemo(() => {
    if (filter === "all") return grouped;
    return grouped.filter((row) => row.group === filter);
  }, [grouped, filter]);
  const visibleCount = visible.reduce((n, row) => n + row.items.length, 0);

  const runSearch = (next: string) => {
    const trimmed = next.trim();
    if (!trimmed) {
      navigate("/search");
      return;
    }
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    setFilter("all");
  };

  return (
    <Layout>
      <PageHeader
        title={en ? "Search" : "शोध"}
        eyebrow={en ? "CSMC Website" : "CSMC संकेतस्थळ"}
        subtitle={
          query
            ? en
              ? `Results for “${query}”`
              : `“${query}” साठी निकाल`
            : en
              ? "Search services, facilities, notices, documents and more"
              : "सेवा, सुविधा, सूचना, दस्तऐवज आणि अधिक शोधा"
        }
      />

      <section className="container py-6 md:py-10">
        <form
          className="flex flex-col sm:flex-row gap-2 max-w-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            runSearch(draft);
          }}
          role="search"
        >
          <label className="sr-only" htmlFor="global-search-page-input">
            {en ? "Search query" : "शोध शब्द"}
          </label>
          <div className="flex flex-1 items-center gap-2 border border-border rounded-full px-4 py-2.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-civic-blue/30">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden />
            <input
              id="global-search-page-input"
              type="search"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={
                en
                  ? "Search services, notices, documents, departments..."
                  : "सेवा, सूचना, दस्तऐवज, विभाग शोधा..."
              }
              className="bg-transparent outline-none text-sm w-full min-w-0 placeholder:text-muted-foreground"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-civic-blue text-white px-5 py-2.5 text-sm font-bold hover:bg-civic-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          >
            {en ? "Search" : "शोधा"}
          </button>
        </form>

        {query.length > 0 && query.length < 2 && (
          <p className="mt-6 text-sm text-muted-foreground">
            {en ? "Type at least 2 characters to search." : "शोधण्यासाठी किमान २ अक्षरे टाका."}
          </p>
        )}

        {query.length >= 2 && (
          <div className="mt-6">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
              <p className="text-sm text-muted-foreground">
                {en ? (
                  <>
                    <span className="font-semibold text-civic-ink">{d(hits.length)}</span> result
                    {hits.length === 1 ? "" : "s"} for{" "}
                    <span className="font-semibold text-civic-ink">“{query}”</span>
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-civic-ink">“{query}”</span> साठी{" "}
                    <span className="font-semibold text-civic-ink">{d(hits.length)}</span> निकाल
                  </>
                )}
              </p>
              {availableGroups.length > 1 && (
                <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={en ? "Filter by type" : "प्रकारानुसार गाळा"}>
                  <FilterChip
                    active={filter === "all"}
                    label={en ? `All (${d(hits.length)})` : `सर्व (${d(hits.length)})`}
                    onClick={() => setFilter("all")}
                  />
                  {availableGroups.map((g) => {
                    const count = grouped.find((row) => row.group === g)?.items.length ?? 0;
                    return (
                      <FilterChip
                        key={g}
                        active={filter === g}
                        label={`${en ? SEARCH_GROUP_LABELS[g].en : SEARCH_GROUP_LABELS[g].mr} (${d(count)})`}
                        onClick={() => setFilter(g)}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            {didYouMean && (
              <p className="mb-4 text-sm text-muted-foreground">
                {en ? "Did you mean" : "तुम्हाला हे म्हणायचे होते का"}{" "}
                <button
                  type="button"
                  className="font-semibold text-civic-blue underline-offset-2 hover:underline"
                  onClick={() => {
                    setDraft(didYouMean);
                    runSearch(didYouMean);
                  }}
                >
                  “{didYouMean}”
                </button>
                ?
              </p>
            )}

            {hits.length === 0 ? (
              <EmptyState en={en} onPick={(q) => { setDraft(q); runSearch(q); }} />
            ) : visibleCount === 0 ? (
              <p className="py-10 text-sm text-muted-foreground">
                {en ? "No results in this category." : "या प्रकारात निकाल नाहीत."}
              </p>
            ) : (
              <div className="space-y-8">
                {visible.map(({ group, items }) => (
                  <section key={group} aria-labelledby={`search-group-${group}`}>
                    <h2
                      id={`search-group-${group}`}
                      className="text-xs font-bold uppercase tracking-wide text-civic-red mb-3"
                    >
                      {en ? SEARCH_GROUP_LABELS[group].en : SEARCH_GROUP_LABELS[group].mr}
                      <span className="text-muted-foreground font-medium ml-1">({d(items.length)})</span>
                    </h2>
                    <ul className="space-y-2">
                      {items.map((hit) => (
                        <ResultCard key={hit.resultKey ?? hit.record.id} hit={hit} en={en} />
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </div>
        )}

        {!query && <EmptyState en={en} onPick={(q) => { setDraft(q); runSearch(q); }} intro />}
      </section>
    </Layout>
  );
};

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-semibold border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue ${
        active
          ? "bg-civic-blue text-white border-civic-blue"
          : "bg-white text-civic-ink border-border hover:border-civic-blue/40"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState({
  en,
  onPick,
  intro,
}: {
  en: boolean;
  onPick: (q: string) => void;
  intro?: boolean;
}) {
  return (
    <div className={`${intro ? "mt-8" : "mt-2"} rounded-2xl border border-border bg-white p-6 md:p-8`}>
      {!intro && (
        <p className="text-base font-semibold text-civic-blue mb-2">
          {en ? "No results found" : "कोणतेही निकाल सापडले नाहीत"}
        </p>
      )}
      <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
        {intro
          ? en
            ? "Try a service name, facility type, notice topic or document keyword."
            : "सेवेचे नाव, सुविधा प्रकार, सूचना किंवा दस्तऐवज शब्द वापरून पहा."
          : en
            ? "Try another spelling, or start from a popular civic search below."
            : "वेगळी स्पेलिंग वापरून पहा, किंवा खालील लोकप्रिय शोधांपासून सुरू करा."}
      </p>
      <div className="flex flex-wrap gap-2">
        {POPULAR.map((item) => (
          <button
            key={item.q}
            type="button"
            onClick={() => onPick(item.q)}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-civic-blue hover:bg-civic-blue/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          >
            {en ? item.en : item.mr}
          </button>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link to="/services" className="font-semibold text-civic-blue hover:underline">
          {en ? "Citizen Services" : "नागरिक सेवा"}
        </Link>
        <Link to="/public-facilities" className="font-semibold text-civic-blue hover:underline">
          {en ? "Public Facilities" : "सार्वजनिक सुविधा"}
        </Link>
        <Link to="/notices" className="font-semibold text-civic-blue hover:underline">
          {en ? "Notices" : "सूचना"}
        </Link>
        <Link to="/contact" className="font-semibold text-civic-blue hover:underline">
          {en ? "Contact" : "संपर्क"}
        </Link>
        <Link to="/site-map" className="font-semibold text-civic-blue hover:underline">
          {en ? "Site Map" : "साइटमॅप"}
        </Link>
      </div>
    </div>
  );
}

function ResultCard({ hit, en }: { hit: SearchHit; en: boolean }) {
  const item = hit.record;
  const dest = recordHref(item);
  const showEn = hit.displayLang ? hit.displayLang === "en" : en;
  const title = showEn ? item.titleEn : item.titleMr;
  const snippet = showEn ? hit.snippetEn ?? item.descriptionEn : hit.snippetMr ?? item.descriptionMr;
  const action = showEn ? hit.actionLabelEn : hit.actionLabelMr;
  const category = showEn ? CATEGORY_LABELS[item.category].en : CATEGORY_LABELS[item.category].mr;
  const department = showEn ? item.departmentEn : item.departmentMr;

  const className =
    "block rounded-xl border border-border bg-white px-4 py-3 hover:border-civic-blue/40 hover:bg-civic-blue/[0.03] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue";

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-civic-gold mb-1">
            {category}
            {action ? ` · ${action}` : ""}
          </p>
          <h3 className="text-sm md:text-base font-semibold text-civic-blue leading-snug">
            {title}
            {dest.external && <ExternalLink className="inline h-3.5 w-3.5 ml-1 opacity-60" aria-hidden />}
          </h3>
        </div>
      </div>
      {snippet && (
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
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
      <p className="text-[11px] text-muted-foreground mt-1">
        {department}
        {" · "}
        {formatCivicDate(item.publishedAt, showEn)}
      </p>
    </>
  );

  return (
    <li>
      {dest.external ? (
        <a href={dest.to} target="_blank" rel="noopener noreferrer" className={className}>
          {inner}
        </a>
      ) : (
        <Link to={dest.to} className={className}>
          {inner}
        </Link>
      )}
    </li>
  );
}

export default SearchResultsPage;
