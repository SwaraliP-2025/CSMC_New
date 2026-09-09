import type { CivicRecord } from "@/types/civicCatalog";
import { SITE_NAV, type NavItem } from "@/navigation/siteNav";

type FlatNav = { labelEn: string; labelMr: string; to: string; external?: boolean; parents: string[] };

function flattenNav(items: NavItem[], parents: string[] = [], out: FlatNav[] = []): FlatNav[] {
  for (const item of items) {
    const nextParents = [...parents, item.labelEn, item.labelMr];
    if (item.to) {
      out.push({
        labelEn: item.labelEn,
        labelMr: item.labelMr,
        to: item.to,
        external: item.external,
        parents: nextParents,
      });
    }
    if (item.children?.length) flattenNav(item.children, nextParents, out);
  }
  return out;
}

function hrefKey(href: string) {
  try {
    if (href.startsWith("http")) return href.replace(/\/$/, "");
    const path = href.split("?")[0] || href;
    return path.replace(/\/$/, "") || "/";
  } catch {
    return href;
  }
}

/**
 * Merge every primary-nav EN/MR label (including parent section names like
 * महानगरपालिका) into matching catalog records so navigation wording is searchable.
 * Also append stub service records for nav destinations missing from the catalog.
 */
export function enrichCatalogWithSiteNav(catalog: CivicRecord[]): CivicRecord[] {
  const navItems = flattenNav(SITE_NAV);
  const byHref = new Map<string, CivicRecord[]>();
  for (const rec of catalog) {
    if (!rec.href) continue;
    const key = hrefKey(rec.href);
    const list = byHref.get(key) ?? [];
    list.push(rec);
    byHref.set(key, list);
  }

  const next = catalog.map((rec) => {
    if (!rec.href) return rec;
    const matches = navItems.filter((n) => hrefKey(n.to) === hrefKey(rec.href!));
    if (!matches.length) return rec;
    const extra = matches.flatMap((n) => [n.labelEn, n.labelMr, ...n.parents]);
    const keywords = Array.from(new Set([...rec.keywords, ...extra]));
    return { ...rec, keywords };
  });

  const existingIds = new Set(next.map((r) => r.id));
  const stubs: CivicRecord[] = [];

  for (const item of navItems) {
    if (item.external) continue;
    const key = hrefKey(item.to);
    if (byHref.has(key)) continue;
    const id = `nav-${key.replace(/^\//, "").replace(/[/?&=]/g, "-") || "home"}`;
    if (existingIds.has(id)) continue;
    existingIds.add(id);

    const publishedAt = "2026-04-01";
    stubs.push({
      id,
      category: "service",
      titleEn: item.labelEn,
      titleMr: item.labelMr,
      descriptionEn: `Open ${item.labelEn} on the CSMC website.`,
      descriptionMr: `CSMC संकेतस्थळावर ${item.labelMr} उघडा.`,
      previewEn: item.labelEn,
      previewMr: item.labelMr,
      departmentEn: "General Administration",
      departmentMr: "सामान्य प्रशासन",
      publishedAt,
      updatedAt: publishedAt,
      year: 2026,
      language: "both",
      status: "current",
      version: "1.0",
      versions: [{ version: "1.0", publishedAt, status: "current", notesEn: "Navigation", notesMr: "नेव्हिगेशन" }],
      href: item.to,
      keywords: Array.from(
        new Set([
          item.labelEn,
          item.labelMr,
          ...item.parents,
          "महानगरपालिका",
          "महापालिका",
          "municipal corporation",
          "csmc",
          "navigation",
          "मेनू",
        ])
      ),
      relatedIds: [],
      bodyEn: [],
      bodyMr: [],
      summaryEn: item.labelEn,
      summaryMr: item.labelMr,
      highlightsEn: [],
      highlightsMr: [],
      readingMinutes: 1,
      ocrPages: [],
      applicableEn: "",
      applicableMr: "",
      simpleEn: "",
      simpleMr: "",
      aiFaqs: [],
    });
  }

  const CORP_KEYS = [
    "महानगरपालिका",
    "महापालिका",
    "municipal corporation",
    "mahanagarpalika",
    "mahapalika",
    "csmc",
    "corporation",
    "छत्रपती संभाजीनगर महानगरपालिका",
  ];

  return [...next, ...stubs].map((rec) => {
    const isCorpHub =
      rec.id === "svc-about" ||
      rec.id === "svc-contact" ||
      rec.href === "/commissioner" ||
      rec.href === "/organization" ||
      rec.href === "/about" ||
      rec.id.startsWith("nav-commissioner") ||
      rec.id.startsWith("nav-organization");
    if (!isCorpHub) return rec;
    return { ...rec, keywords: Array.from(new Set([...rec.keywords, ...CORP_KEYS])) };
  });
}
