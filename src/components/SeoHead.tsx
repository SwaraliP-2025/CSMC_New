import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION_EN,
  DEFAULT_DESCRIPTION_MR,
  ROUTE_SEO,
  SITE_ALIASES,
  SITE_KEYWORDS,
  SITE_NAME_EN,
  SITE_NAME_MR,
  SITE_SHORT,
  SITE_URL,
} from "@/seo/siteConfig";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Updates document title, meta tags, canonical URL and JSON-LD on every route / language change.
 */
export const SeoHead = () => {
  const { pathname } = useLocation();
  const { lang } = useLang();
  const en = lang === "en";

  useEffect(() => {
    const page = ROUTE_SEO[pathname];
    const title = en
      ? page?.title ?? `${SITE_SHORT} | ${SITE_NAME_EN}`
      : page?.titleMr ?? page?.title ?? `${SITE_SHORT} | ${SITE_NAME_MR}`;
    const description = en
      ? page?.description ?? DEFAULT_DESCRIPTION_EN
      : page?.descriptionMr ?? page?.description ?? DEFAULT_DESCRIPTION_MR;
    const canonical = absoluteUrl(pathname);

    document.title = title;
    document.documentElement.lang = en ? "en" : "mr";

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", SITE_KEYWORDS);
    upsertMeta("name", "author", SITE_NAME_EN);
    upsertMeta("name", "application-name", `${SITE_SHORT} Official Portal`);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("name", "googlebot", "index, follow");
    upsertMeta("name", "theme-color", "#1a3a6b");

    upsertMeta("property", "og:locale", en ? "en_IN" : "mr_IN");
    upsertMeta("property", "og:locale:alternate", en ? "mr_IN" : "en_IN");
    upsertMeta("property", "og:site_name", `${SITE_SHORT} — ${SITE_NAME_EN}`);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", absoluteUrl("/og-image.png"));

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteUrl("/og-image.png"));

    upsertLink("canonical", canonical);
    upsertLink("alternate", absoluteUrl(pathname), { hreflang: "en" });
    upsertLink("alternate", absoluteUrl(pathname), { hreflang: "mr" });
    upsertLink("alternate", absoluteUrl(pathname), { hreflang: "x-default" });

    upsertJsonLd("seo-org-jsonld", {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME_EN,
      alternateName: SITE_ALIASES,
      legalName: SITE_NAME_EN,
      url: `${SITE_URL}/`,
      logo: absoluteUrl("/og-image.png"),
      image: absoluteUrl("/og-image.png"),
      description: DEFAULT_DESCRIPTION_EN,
      areaServed: {
        "@type": "City",
        name: "Chhatrapati Sambhajinagar",
        alternateName: ["Sambhajinagar", "Aurangabad", "छत्रपती संभाजीनगर", "औरंगाबाद"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Main Building, Town Hall, behind Head Post Office",
        addressLocality: "Chhatrapati Sambhajinagar",
        addressRegion: "Maharashtra",
        postalCode: "431001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://chhsambhajinagarmc.org/",
        "https://www.google.com/maps/place/Chhatrapati+Sambhajinagar,+Maharashtra",
      ],
    });

    upsertJsonLd("seo-website-jsonld", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: `${SITE_SHORT} Official Portal`,
      alternateName: SITE_ALIASES,
      description: DEFAULT_DESCRIPTION_EN,
      inLanguage: ["en", "mr"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "ReadAction",
        target: `${SITE_URL}/`,
      },
    });

    upsertJsonLd("seo-webpage-jsonld", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: en ? "en" : "mr",
    });
  }, [pathname, en]);

  return null;
};
