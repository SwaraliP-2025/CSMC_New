import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { facilityCategoryMap, facilityHasCoordinates, type FacilityRecord } from "@/lib/facilities";
import { FacilityList } from "@/components/site/FacilityList";
import { FacilityMap } from "@/components/site/FacilityMap";
import { ArrowLeft, ExternalLink, Search, X } from "lucide-react";
import { localizeDigits } from "@/i18n/digits";

const FacilityDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { lang, d } = useLang();
  const en = lang === "en";
  const category = slug ? facilityCategoryMap[slug] : undefined;
  const [items, setItems] = useState<FacilityRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    setError("");
    setSelectedId(null);
    setQuery("");
    fetch(`${import.meta.env.BASE_URL}data/${category.dataset}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load facility data");
        return res.json();
      })
      .then((data: FacilityRecord[]) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setError(en ? "Unable to load facility list." : "सुविधा यादी लोड करणे शक्य नाही."))
      .finally(() => setLoading(false));
  }, [category, en]);

  // Deep-link from search: /public-facilities/:slug#facility-id or #id
  useEffect(() => {
    if (loading || items.length === 0) return;
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return;
    const id = raw.startsWith("facility-") ? raw.slice("facility-".length) : raw;
    if (items.some((i) => i.id === id)) {
      setSelectedId(id);
      window.requestAnimationFrame(() => {
        document.getElementById(`facility-${id}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  }, [loading, items, location.hash]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const hay = [
        item.name,
        item.address,
        item.zone,
        item.phone,
        ...(item.details ?? []).map((d) => `${d.labelEn} ${d.value}`),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);

  const selected = useMemo(
    () => items.find((i) => i.id === selectedId) ?? null,
    [items, selectedId],
  );

  const mappedCount = useMemo(() => items.filter(facilityHasCoordinates).length, [items]);

  const selectFacility = (id: string) => {
    setSelectedId(id);
    const nextHash = `#facility-${id}`;
    if (location.hash !== nextHash) {
      window.history.replaceState(null, "", `${location.pathname}${nextHash}`);
    }
  };

  if (!category) {
    return (
      <Layout>
        <section className="py-24 container text-center">
          <h1 className="font-serif text-3xl text-civic-blue font-bold mb-4">
            {en ? "Category not found" : "वर्ग आढळला नाही"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {en ? "Please return to the Public Facilities page." : "कृपया सार्वजनिक सुविधा पृष्ठावर परत या."}
          </p>
          <Link
            to="/public-facilities"
            className="inline-flex items-center gap-2 rounded-full border border-civic-blue px-5 py-3 text-sm font-semibold text-civic-blue hover:bg-civic-blue hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {en ? "Back to Public Facilities" : "सार्वजनिक सुविधांकडे परत जा"}
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Public Facilities" : "सार्वजनिक सुविधा"}
        title={en ? category.titleEn : category.titleMr}
        subtitle={en ? category.descriptionEn : category.descriptionMr}
      />
      <section className="py-12 md:py-16 container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.3em] text-civic-red font-bold">
              {en ? category.groupEn : category.groupMr}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-civic-blue font-bold mt-2 break-words">
              {en ? category.titleEn : category.titleMr}
            </h2>
            {!loading && !error && (
              <p className="text-sm text-muted-foreground mt-2">
                {en
                  ? `${d(filtered.length)} of ${d(items.length)} facilities`
                  : `${d(filtered.length)} / ${d(items.length)} सुविधा`}
                {mappedCount > 0
                  ? en
                    ? ` · ${d(mappedCount)} with map coordinates`
                    : ` · ${d(mappedCount)} नकाशा निर्देशांकांसह`
                  : en
                    ? " · map coordinates not in GIS export"
                    : " · GIS निर्यातीत नकाशा निर्देशांक नाहीत"}
              </p>
            )}
          </div>
          <Link
            to="/public-facilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded shrink-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {en ? "Back to Public Facilities" : "सार्वजनिक सुविधांकडे परत जा"}
          </Link>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-border bg-white p-8 text-center text-muted-foreground">
            {en ? "Loading facilities..." : "सुविधा लोड करत आहे..."}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700">{error}</div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-slate-50 p-10 text-center text-muted-foreground">
            {en
              ? "Facility records for this category are not yet available from the GIS export."
              : "या वर्गासाठी GIS निर्यातीतून सुविधा नोंदी अद्याप उपलब्ध नाहीत."}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <label className="relative flex-1 min-w-0">
                <span className="sr-only">{en ? "Filter facilities" : "सुविधा गाळा"}</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    en
                      ? "Filter by name, address, zone, or details…"
                      : "नाव, पत्ता, झोन किंवा तपशीलाने गाळा…"
                  }
                  className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-civic-blue/30"
                />
              </label>
              {selectedId && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedId(null);
                    window.history.replaceState(null, "", location.pathname);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-civic-blue hover:bg-civic-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
                >
                  <X className="h-4 w-4" aria-hidden />
                  {en ? "Clear selection" : "निवड साफ करा"}
                </button>
              )}
            </div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
              <div className="min-w-0 space-y-4">
                {filtered.length === 0 ? (
                  <div className="rounded-3xl border border-border bg-white p-8 text-center text-muted-foreground">
                    {en ? "No facilities match this filter." : "या गाळण्याला जुळणाऱ्या सुविधा नाहीत."}
                  </div>
                ) : (
                  <FacilityList
                    items={filtered}
                    en={en}
                    selectedId={selectedId}
                    onSelect={selectFacility}
                  />
                )}
              </div>

              <aside className="xl:sticky xl:top-28 h-fit space-y-4">
                <div className="h-[20rem] md:h-[24rem] xl:h-[28rem]">
                  <FacilityMap
                    items={filtered.length ? filtered : items}
                    selectedId={selectedId}
                    onSelect={selectFacility}
                    en={en}
                  />
                </div>

                {selected && (
                  <div
                    className="rounded-3xl border border-civic-blue/20 bg-white p-5 shadow-sm"
                    role="region"
                    aria-label={en ? "Selected facility details" : "निवडलेल्या सुविधेचा तपशील"}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-civic-red mb-2">
                      {en ? "Selected facility" : "निवडलेली सुविधा"}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-civic-blue leading-snug break-words">
                      {selected.name}
                    </h3>
                    {selected.address && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed break-words">
                        {localizeDigits(selected.address, en ? "en" : "mr")}
                      </p>
                    )}
                    <dl className="mt-4 space-y-2 text-sm">
                      {selected.zone && (
                        <div>
                          <dt className="font-semibold text-civic-ink/80">{en ? "Zone / ward" : "झोन / प्रभाग"}</dt>
                          <dd className="text-muted-foreground break-words">
                            {localizeDigits(selected.zone, en ? "en" : "mr")}
                          </dd>
                        </div>
                      )}
                      {selected.phone && (
                        <div>
                          <dt className="font-semibold text-civic-ink/80">{en ? "Contact" : "संपर्क"}</dt>
                          <dd className="text-muted-foreground break-words">
                            {localizeDigits(selected.phone, en ? "en" : "mr")}
                          </dd>
                        </div>
                      )}
                      {selected.timings && (
                        <div>
                          <dt className="font-semibold text-civic-ink/80">{en ? "Timings" : "वेळा"}</dt>
                          <dd className="text-muted-foreground break-words">
                            {localizeDigits(selected.timings, en ? "en" : "mr")}
                          </dd>
                        </div>
                      )}
                      {(selected.details ?? []).map((field) => (
                        <div key={field.labelEn}>
                          <dt className="font-semibold text-civic-ink/80">
                            {en ? field.labelEn : field.labelMr}
                          </dt>
                          <dd className="text-muted-foreground break-words">
                            {localizeDigits(field.value, en ? "en" : "mr")}
                          </dd>
                        </div>
                      ))}
                      {!facilityHasCoordinates(selected) && (
                        <p className="text-xs text-muted-foreground pt-1">
                          {en
                            ? "Map pin unavailable — coordinates were not provided in the GIS spreadsheet."
                            : "नकाशा पिन अनुपलब्ध — GIS स्प्रेडशीटमध्ये निर्देशांक दिलेले नाहीत."}
                        </p>
                      )}
                    </dl>
                    {selected.googleMapsUrl && (
                      <a
                        href={selected.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-civic-blue hover:text-civic-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
                      >
                        {facilityHasCoordinates(selected)
                          ? en
                            ? "Directions / Open in Maps"
                            : "दिशा / नकाशात उघडा"
                          : en
                            ? "Search location in Maps"
                            : "नकाशात स्थान शोधा"}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    )}
                  </div>
                )}
              </aside>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default FacilityDetails;
