import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { facilityCategoryMap, FacilityRecord } from "@/lib/facilities";
import { FacilityList } from "@/components/site/FacilityList";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FacilityDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, d } = useLang();
  const en = lang === "en";
  const category = slug ? facilityCategoryMap[slug] : undefined;
  const [items, setItems] = useState<FacilityRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}data/${category.dataset}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load facility data");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch(() => setError(en ? "Unable to load facility list." : "सुविधा यादी लोड करणे शक्य नाही."))
      .finally(() => setLoading(false));
  }, [category, en]);

  const groupedBannerLocations = useMemo(() => {
    if (category?.slug !== "banner-locations") return undefined;

    return items.reduce<Record<string, FacilityRecord[]>>((groups, item) => {
      const rawZone = item.zone?.trim() || item.name.match(/Zone\s*\d+/i)?.[0] || (en ? "Other" : "इतर");
      const zone = rawZone.charAt(0).toUpperCase() + rawZone.slice(1);
      groups[zone] = [...(groups[zone] ?? []), item];
      return groups;
    }, {});
  }, [category?.slug, en, items]);

  const bannerZoneKeys = useMemo(() => {
    if (!groupedBannerLocations) return [];
    return Object.keys(groupedBannerLocations).sort((a, b) => {
      const aNum = parseInt(a.replace(/[^0-9]/g, ""), 10);
      const bNum = parseInt(b.replace(/[^0-9]/g, ""), 10);
      if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) return aNum - bNum;
      if (!Number.isNaN(aNum)) return -1;
      if (!Number.isNaN(bNum)) return 1;
      return a.localeCompare(b);
    });
  }, [groupedBannerLocations]);

  if (!category) {
    return (
      <Layout>
        <section className="py-24 container text-center">
          <h1 className="font-serif text-3xl text-civic-blue font-bold mb-4">{en ? "Category not found" : "वर्ग आढळला नाही"}</h1>
          <p className="text-muted-foreground mb-8">
            {en ? "Please return to the Public Facilities page." : "कृपया सार्वजनिक सुविधा पृष्ठावर परत येा."}
          </p>
          <Link to="/public-facilities" className="inline-flex items-center gap-2 rounded-full border border-civic-blue px-5 py-3 text-sm font-semibold text-civic-blue hover:bg-civic-blue hover:text-white transition-all">
            <ArrowLeft className="h-4 w-4" />
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
      <section className="py-16 container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-civic-red font-bold">
              {en ? category.groupEn : category.groupMr}
            </p>
            <h2 className="font-serif text-3xl text-civic-blue font-bold mt-2">
              {en ? category.titleEn : category.titleMr}
            </h2>
          </div>
          <Link to="/public-facilities" className="inline-flex items-center gap-2 text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {en ? "Back to Public Facilities" : "सार्वजनिक सुविधांकडे परत जा"}
          </Link>
        </div>
        {loading ? (
          <div className="rounded-3xl border border-border bg-white p-8 text-center text-muted-foreground">{en ? "Loading facilities..." : "सुविधा लोड करत आहे..."}</div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700">{error}</div>
        ) : category?.slug === "banner-locations" && groupedBannerLocations ? (
          <Accordion type="single" collapsible className="space-y-4">
            {bannerZoneKeys.map((zone) => (
              <AccordionItem value={zone} key={zone} className="overflow-hidden rounded-3xl border border-border bg-white">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center justify-between w-full gap-4 text-left">
                    <span className="font-semibold text-civic-blue">{d(zone)}</span>
                    <span className="text-sm text-muted-foreground">
                      {d(groupedBannerLocations[zone].length)} {en ? "locations" : "ठिकाणे"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 py-4">
                    <ul className="space-y-4">
                      {groupedBannerLocations[zone].map((location) => (
                        <li key={location.id} className="rounded-3xl border border-border bg-slate-50 p-5">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="font-serif text-lg font-semibold text-civic-blue">{location.name}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{d(location.address)}</p>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {location.zone && <p>{d(location.zone)}</p>}
                              {location.phone && <p>{d(location.phone)}</p>}
                            </div>
                          </div>
                          {location.timings && (
                            <p className="mt-4 text-sm text-muted-foreground">{d(location.timings)}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <FacilityList items={items} en={en} hideCoordinatesRow={category?.slug === "police-stations"} />
        )}
      </section>
    </Layout>
  );
};

export default FacilityDetails;
