import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ChevronRight, ExternalLink } from "lucide-react";
import {
  SITE_NAV,
  HEADER_UTILITY_LINKS,
  OTHER_SITE_PAGES,
  CITIZEN_TOOLS_PAGES,
  POLICY_PAGES,
  isExternalHref,
  type NavItem,
} from "@/navigation/siteNav";
import { DEPARTMENTS } from "./DepartmentDetail";
import { facilityCategories } from "@/lib/facilities";
import type { TouristPlaceRecord } from "@/lib/facilities";

const linkCls =
  "flex items-center gap-2 text-sm text-muted-foreground hover:text-civic-blue transition-colors group";

function NavLink({ item, en }: { item: NavItem; en: boolean }) {
  const label = en ? item.labelEn : item.labelMr;
  if (!item.to) {
    return (
      <span className={`${linkCls} cursor-default opacity-70`}>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-civic-gold" />
        <span className="min-w-0">{label}</span>
      </span>
    );
  }
  const to = item.to;
  const external = isExternalHref(item.to, item.external);
  const icon = (
    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-civic-gold group-hover:translate-x-0.5 transition-transform" />
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={linkCls}>
        {icon}
        <span className="min-w-0">{label}</span>
        <ExternalLink className="h-3 w-3 shrink-0 opacity-50" aria-hidden />
      </a>
    );
  }

  return (
    <Link to={to} className={linkCls}>
      {icon}
      <span className="min-w-0">{label}</span>
    </Link>
  );
}

function LinkList({ items, en }: { items: NavItem[]; en: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={`${item.labelEn}-${item.to ?? ""}`}>
          <NavLink item={item} en={en} />
        </li>
      ))}
    </ul>
  );
}

function SiteMapSection({
  title,
  items,
  en,
  className = "",
}: {
  title: string;
  items: NavItem[];
  en: boolean;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <div className={className}>
      <h2 className="font-serif text-lg font-bold text-civic-blue mb-4 pb-2 border-b border-civic-gold/30">
        {title}
      </h2>
      <LinkList items={items} en={en} />
    </div>
  );
}

/**
 * Renders Site Map from the same SITE_NAV tree as the header,
 * so every dropdown item appears under the same menu heading.
 */
const SiteMap = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [touristPlaces, setTouristPlaces] = useState<TouristPlaceRecord[]>([]);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/tourist-places.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data: TouristPlaceRecord[]) => setTouristPlaces(data))
      .catch(() => setTouristPlaces([]));
  }, []);

  const departmentPages: NavItem[] = DEPARTMENTS.map((dept) => ({
    labelEn: dept.nameEn,
    labelMr: dept.nameMr,
    to: `/departments/${dept.slug}`,
  }));

  const facilityPages: NavItem[] = facilityCategories.map((cat) => ({
    labelEn: cat.titleEn,
    labelMr: cat.titleMr,
    to: `/public-facilities/${cat.slug}`,
  }));

  const touristPages: NavItem[] = touristPlaces.map((place) => ({
    labelEn: place.nameEn,
    labelMr: place.nameMr,
    to: `/tourist-attraction/${place.slug}`,
  }));

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Navigation" : "नेव्हिगेशन"}
        title={en ? "Site Map" : "साइटमॅप"}
        subtitle={
          en
            ? "Complete directory of all pages on this website, organised by section."
            : "या संकेतस्थळावरील सर्व पृष्ठांची विभागानुसार संपूर्ण निर्देशिका."
        }
      />
      <section className="py-12 container space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_NAV.map((item) => {
            const title = en ? item.labelEn : item.labelMr;
            const hasGroups = item.children?.some((c) => c.children && c.children.length > 0);

            // Leaf top-level item (Home, RTI, RTS, DP Plan, Site Map)
            if (!item.children?.length) {
              return (
                <div key={item.labelEn}>
                  <h2 className="font-serif text-lg font-bold text-civic-blue mb-4 pb-2 border-b border-civic-gold/30">
                    {title}
                  </h2>
                  <LinkList items={[item]} en={en} />
                </div>
              );
            }

            // Mega-menu parent with named groups (Mahanagarpalika)
            if (hasGroups) {
              return (
                <div key={item.labelEn} className="md:col-span-2 lg:col-span-3">
                  <h2 className="font-serif text-xl font-bold text-civic-blue mb-5 pb-2 border-b border-civic-gold/30">
                    {title}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {item.children!.map((group) => (
                      <div key={group.labelEn}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-civic-gold mb-3">
                          {en ? group.labelEn : group.labelMr}
                        </h3>
                        <LinkList items={group.children ?? []} en={en} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Flat dropdown (Citizen Services, Publications, Contact)
            return (
              <div key={item.labelEn}>
                <h2 className="font-serif text-lg font-bold text-civic-blue mb-4 pb-2 border-b border-civic-gold/30">
                  {title}
                </h2>
                <LinkList items={item.children!} en={en} />
              </div>
            );
          })}
        </div>

        {/* Pages outside the main NAV bar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2 border-t border-border">
          <SiteMapSection
            title={en ? "Header links" : "हेडर दुवे"}
            items={HEADER_UTILITY_LINKS}
            en={en}
          />
          <SiteMapSection
            title={en ? "Citizen tools" : "नागरिक साधने"}
            items={CITIZEN_TOOLS_PAGES}
            en={en}
          />
          <SiteMapSection
            title={en ? "Other pages" : "इतर पृष्ठे"}
            items={OTHER_SITE_PAGES}
            en={en}
          />
          <SiteMapSection
            title={en ? "Policies & legal" : "धोरणे व कायदेशीर"}
            items={POLICY_PAGES}
            en={en}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-2 border-t border-border">
          <SiteMapSection
            title={en ? "Department pages" : "विभाग पृष्ठे"}
            items={departmentPages}
            en={en}
          />
          <SiteMapSection
            title={en ? "Public facility categories" : "सार्वजनिक सुविधा प्रकार"}
            items={facilityPages}
            en={en}
          />
        </div>

        {touristPages.length > 0 && (
          <div className="pt-2 border-t border-border">
            <SiteMapSection
              title={en ? "Tourist attractions" : "पर्यटन आकर्षणे"}
              items={touristPages}
              en={en}
              className="md:max-w-2xl"
            />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SiteMap;
