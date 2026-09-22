import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import {
  displayFacilityDetailValue,
  displayFacilityName,
  facilityCategoryMap,
  facilityHasCoordinates,
  localizeFacilityZoneLabel,
  type FacilityRecord,
} from "@/lib/facilities";
import { FacilityList } from "@/components/site/FacilityList";
import { FacilityMap } from "@/components/site/FacilityMap";
import { ArrowLeft, ExternalLink, Search, X } from "lucide-react";

const FacilityDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { lang, t, d } = useLang();
  const en = lang === "en";
  const f = t.facilities;
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
      .catch(() => setError(f.loadError))
      .finally(() => setLoading(false));
  }, [category, f.loadError]);

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
        displayFacilityName(item.name, lang, d),
        item.address,
        item.zone,
        localizeFacilityZoneLabel(item.zone, lang, d),
        item.phone,
        ...(item.details ?? []).map((det) => `${det.labelEn} ${det.labelMr} ${det.value}`),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [items, query, lang, d]);

  const selected = useMemo(
    () => items.find((i) => i.id === selectedId) ?? null,
    [items, selectedId],
  );

  const mappedCount = useMemo(() => items.filter(facilityHasCoordinates).length, [items]);
  const isCfcCategory = category?.slug === "cfcs";
  const showMapPanel = !isCfcCategory && mappedCount > 0;
  const fullWidthList = isCfcCategory || mappedCount === 0;

  const selectFacility = (id: string) => {
    setSelectedId(id);
    const nextHash = `#facility-${id}`;
    if (location.hash !== nextHash) {
      window.history.replaceState(null, "", `${location.pathname}${nextHash}`);
    }
  };

  const countLabel = (() => {
    const n = filtered.length;
    const total = items.length;
    const unit = n === 1 ? f.facilityOne : f.facilityMany;
    if (n !== total) {
      return en
        ? `${d(n)} ${f.of} ${d(total)} ${unit}`
        : `${d(n)} ${f.of} ${d(total)} ${unit}`;
    }
    return `${d(n)} ${unit}`;
  })();

  if (!category) {
    return (
      <Layout>
        <section className="py-24 container text-center">
          <h1 className="font-serif text-3xl text-civic-blue font-bold mb-4">{f.notFound}</h1>
          <p className="text-muted-foreground mb-8">{f.notFoundHint}</p>
          <Link
            to="/public-facilities"
            className="inline-flex items-center gap-2 rounded-full border border-civic-blue px-5 py-3 text-sm font-semibold text-civic-blue hover:bg-civic-blue hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {f.back}
          </Link>
        </section>
      </Layout>
    );
  }

  const selectedName = selected ? displayFacilityName(selected.name, lang, d) : "";

  return (
    <Layout>
      <PageHeader
        eyebrow={f.title}
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
              <p className="text-sm text-muted-foreground mt-2">{countLabel}</p>
            )}
          </div>
          <Link
            to="/public-facilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded shrink-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {f.back}
          </Link>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-border bg-white p-8 text-center text-muted-foreground">
            {f.loading}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700">{error}</div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-slate-50 p-10 text-center text-muted-foreground">
            {f.emptyCategory}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <label className="relative flex-1 min-w-0">
                <span className="sr-only">{f.filterSr}</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={f.searchPlaceholder}
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
                  {f.clearSelection}
                </button>
              )}
            </div>

            <div
              className={
                showMapPanel
                  ? "grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]"
                  : "space-y-4"
              }
            >
              <div className="min-w-0 space-y-4">
                {filtered.length === 0 ? (
                  <div className="rounded-3xl border border-border bg-white p-8 text-center text-muted-foreground">
                    {f.noMatch}
                  </div>
                ) : (
                  <FacilityList
                    items={filtered}
                    selectedId={selectedId}
                    onSelect={selectFacility}
                    compact={fullWidthList}
                  />
                )}
              </div>

              {showMapPanel && (
                <aside className="xl:sticky xl:top-28 h-fit space-y-4">
                  <div className="h-[20rem] md:h-[24rem] xl:h-[28rem]">
                    <FacilityMap
                      items={filtered.length ? filtered : items}
                      selectedId={selectedId}
                      onSelect={selectFacility}
                    />
                  </div>

                  {selected && (
                    <div
                      className="rounded-3xl border border-civic-blue/20 bg-white p-5 shadow-sm"
                      role="region"
                      aria-label={f.selectedFacilityAria}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-civic-red mb-2">
                        {f.selectedFacility}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-civic-blue leading-snug break-words">
                        {selectedName}
                      </h3>
                      {selected.address && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed break-words">
                          {d(selected.address)}
                        </p>
                      )}
                      <dl className="mt-4 space-y-2 text-sm">
                        {selected.zone && !/^Ward\s+/i.test(selected.zone.trim()) && (
                          <div>
                            <dt className="font-semibold text-civic-ink/80">{f.zoneWard}</dt>
                            <dd className="text-muted-foreground break-words">
                              {localizeFacilityZoneLabel(selected.zone, lang, d)}
                            </dd>
                          </div>
                        )}
                        {selected.phone && (
                          <div>
                            <dt className="font-semibold text-civic-ink/80">{f.contact}</dt>
                            <dd className="text-muted-foreground break-words">{d(selected.phone)}</dd>
                          </div>
                        )}
                        {selected.timings && (
                          <div>
                            <dt className="font-semibold text-civic-ink/80">{f.timings}</dt>
                            <dd className="text-muted-foreground break-words">{d(selected.timings)}</dd>
                          </div>
                        )}
                        {(selected.details ?? [])
                          .filter((field) => {
                            const label = field.labelEn.toLowerCase();
                            if (label === "ward") return false;
                            if (!selected.zone) return true;
                            return label !== "zone";
                          })
                          .map((field) => (
                            <div key={field.labelEn}>
                              <dt className="font-semibold text-civic-ink/80">
                                {en ? field.labelEn : field.labelMr}
                              </dt>
                              <dd className="text-muted-foreground break-words">
                                {displayFacilityDetailValue(field.value, lang, d)}
                              </dd>
                            </div>
                          ))}
                      </dl>
                      {selected.googleMapsUrl && (
                        <a
                          href={selected.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-civic-blue hover:text-civic-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
                        >
                          {facilityHasCoordinates(selected) ? f.directions : f.searchLocation}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      )}
                    </div>
                  )}
                </aside>
              )}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default FacilityDetails;
