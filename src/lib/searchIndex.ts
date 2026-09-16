/**
 * Central searchable-content index for global website search.
 *
 * Reuses existing structured sources (catalog, facilities, departments,
 * services, stories, alerts, notices, official links) without inventing content.
 */
import { CIVIC_CATALOG } from "@/data/civicCatalog";
import { CITY_ALERTS } from "@/data/cityAlerts";
import { DEPARTMENT_DIRECTORY } from "@/data/departmentDirectory";
import { FACILITY_LOCATION_DATASETS } from "@/data/facilityLocations";
import { OFFICIAL, SERVICE_ENTRIES } from "@/data/officialLinks";
import { SITE_NOTICES } from "@/data/siteNotices";
import { getGalleryStories } from "@/data/visualStories";
import { facilityCategories } from "@/lib/facilities";
import type { CivicRecord } from "@/types/civicCatalog";

const FACILITY_DATASETS = Object.entries(FACILITY_LOCATION_DATASETS).map(([slug, rows]) => ({
  slug,
  rows,
}));

function hrefKey(href: string) {
  try {
    if (href.startsWith("http")) return href.replace(/\/$/, "");
    const path = href.split("?")[0] || href;
    return path.replace(/\/$/, "") || "/";
  } catch {
    return href;
  }
}

function normTitle(s: string) {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type StubInput = {
  id: string;
  category: CivicRecord["category"];
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  departmentEn?: string;
  departmentMr?: string;
  href: string;
  external?: boolean;
  keywords?: string[];
  publishedAt?: string;
};

function stub(input: StubInput): CivicRecord {
  const publishedAt = input.publishedAt ?? "2026-04-01";
  const year = Number(publishedAt.slice(0, 4));
  return {
    id: input.id,
    category: input.category,
    titleEn: input.titleEn,
    titleMr: input.titleMr,
    descriptionEn: input.descriptionEn,
    descriptionMr: input.descriptionMr,
    previewEn: input.descriptionEn,
    previewMr: input.descriptionMr,
    departmentEn: input.departmentEn ?? "General Administration",
    departmentMr: input.departmentMr ?? "सामान्य प्रशासन",
    publishedAt,
    updatedAt: publishedAt,
    year,
    language: "both",
    href: input.href,
    external: input.external,
    status: "current",
    version: "1.0",
    versions: [],
    relatedIds: [],
    bodyEn: [input.descriptionEn],
    bodyMr: [input.descriptionMr],
    summaryEn: input.descriptionEn,
    summaryMr: input.descriptionMr,
    highlightsEn: [],
    highlightsMr: [],
    readingMinutes: 1,
    keywords: input.keywords ?? [input.titleEn, input.titleMr],
    ocrPages: [],
    applicableEn: "Citizens of Chhatrapati Sambhajinagar",
    applicableMr: "छत्रपती संभाजीनगरचे नागरिक",
    simpleEn: input.descriptionEn,
    simpleMr: input.descriptionMr,
    aiFaqs: [],
  };
}

/** Map /services catalogue ids → existing civic catalog / hub service ids. */
const SERVICE_ENTRY_TO_CATALOG: Record<string, string> = {
  "property-tax": "svc-property-tax",
  "water-tax": "svc-water-tax",
  birth: "svc-birth",
  death: "svc-death",
  building: "svc-building",
  trade: "svc-trade",
  grievance: "svc-grievance",
  "grievance-official": "svc-grievance",
  "water-connection": "svc-water-tax",
  tenders: "svc-tenders",
  track: "svc-track",
};

function buildSitePageRecords(existingIds: Set<string>): CivicRecord[] {
  const pages: StubInput[] = [
    {
      id: "svc-gis",
      category: "service",
      titleEn: "City GIS Map",
      titleMr: "शहर GIS नकाशा",
      descriptionEn: "Interactive municipal GIS map of Chhatrapati Sambhajinagar.",
      descriptionMr: "छत्रपती संभाजीनगरचा परस्परसंवादी महानगरपालिका GIS नकाशा.",
      href: OFFICIAL.gis,
      external: true,
      keywords: ["gis", "map", "city map", "नकाशा", "जीआयएस", "मॅप", "ASCDL"],
    },
    {
      id: "svc-tenders",
      category: "service",
      titleEn: "e-Tenders (MahaTenders)",
      titleMr: "ई-निविदा (MahaTenders)",
      descriptionEn: "Official CSMC organisation tenders on the Maharashtra e-Procurement portal.",
      descriptionMr: "महाराष्ट्र ई-खरेदी पोर्टलवरील CSMC संघटनेच्या अधिकृत निविदा.",
      href: OFFICIAL.mahatenders,
      external: true,
      keywords: ["tender", "tenders", "e-tender", "निविदा", "ई-निविदा", "टेंडर", "mahatenders"],
    },
    {
      id: "svc-gallery",
      category: "service",
      titleEn: "Photo Gallery",
      titleMr: "छायाचित्र दालन",
      descriptionEn: "Civic programmes, meetings and public activities of CSMC.",
      descriptionMr: "CSMC चे नागरी कार्यक्रम, बैठका व सार्वजनिक उपक्रम.",
      href: "/gallery",
      keywords: ["gallery", "photo", "photos", "छायाचित्र", "दालन", "stories"],
    },
    {
      id: "svc-budget",
      category: "service",
      titleEn: "Municipal Budget",
      titleMr: "महापालिका अर्थसंकल्प",
      descriptionEn: "Approved municipal budgets and related public documents.",
      descriptionMr: "मंजूर महापालिका अर्थसंकल्प व संबंधित सार्वजनिक दस्तऐवज.",
      href: "/public-documents?category=budget",
      keywords: ["budget", "अर्थसंकल्प", "बजेट", "finance", "accounts"],
    },
    {
      id: "svc-ramai",
      category: "service",
      titleEn: "Ramai Awas Yojana",
      titleMr: "रमाई आवास योजना",
      descriptionEn: "Housing scheme login portal for Ramai Awas Yojana.",
      descriptionMr: "रमाई आवास योजनेसाठी गृहनिर्माण योजना लॉगिन पोर्टल.",
      href: OFFICIAL.ramaiAwas,
      external: true,
      keywords: ["ramai", "awas", "housing", "yojana", "रमाई", "आवास", "योजना", "गृहनिर्माण"],
    },
    {
      id: "svc-commissioner",
      category: "service",
      titleEn: "Municipal Commissioner",
      titleMr: "महानगरपालिका आयुक्त",
      descriptionEn: "Profile and information about the Municipal Commissioner.",
      descriptionMr: "महानगरपालिका आयुक्तांची माहिती व प्रोफाइल.",
      href: "/commissioner",
      keywords: ["commissioner", "आयुक्त", "कमिशनर"],
    },
    {
      id: "svc-organization",
      category: "service",
      titleEn: "Organisation Chart",
      titleMr: "संघटना आकृती",
      descriptionEn: "CSMC organisational structure and administration.",
      descriptionMr: "CSMC ची संघटनात्मक रचना व प्रशासन.",
      href: "/organization",
      keywords: ["organogram", "organization", "organisation", "संघटना"],
    },
    {
      id: "svc-mayors-list",
      category: "service",
      titleEn: "Hon'ble Mayors' List",
      titleMr: "मा. महापौरांची यादी",
      descriptionEn: "List of Mayors of Chhatrapati Sambhajinagar Municipal Corporation.",
      descriptionMr: "छत्रपती संभाजीनगर महानगरपालिकेच्या महापौरांची यादी.",
      href: "/mayors-list",
      keywords: ["mayor", "mayors", "महापौर"],
    },
    {
      id: "svc-deputy-mayors-list",
      category: "service",
      titleEn: "Hon'ble Deputy Mayors' List",
      titleMr: "मा. उपमहापौरांची यादी",
      descriptionEn: "List of Deputy Mayors of CSMC.",
      descriptionMr: "CSMC उपमहापौरांची यादी.",
      href: "/deputy-mayors-list",
      keywords: ["deputy mayor", "उपमहापौर"],
    },
    {
      id: "svc-commissioners-list",
      category: "service",
      titleEn: "Commissioners' List",
      titleMr: "आयुक्तांची यादी",
      descriptionEn: "List of Municipal Commissioners.",
      descriptionMr: "महानगरपालिका आयुक्तांची यादी.",
      href: "/commissioners-list",
      keywords: ["commissioners", "आयुक्त यादी"],
    },
    {
      id: "svc-initiatives",
      category: "service",
      titleEn: "Initiatives by CSMC",
      titleMr: "CSMC चे उपक्रम",
      descriptionEn: "Municipal initiatives and civic programmes.",
      descriptionMr: "महापालिकेचे उपक्रम व नागरी कार्यक्रम.",
      href: "/initiatives",
      keywords: ["initiatives", "उपक्रम"],
    },
  ];

  return pages.filter((p) => !existingIds.has(p.id)).map(stub);
}

function buildFacilityCategoryRecords(existingIds: Set<string>): CivicRecord[] {
  return facilityCategories
    .filter((cat) => !existingIds.has(`fac-${cat.slug}`))
    .map((cat) =>
      stub({
        id: `fac-${cat.slug}`,
        category: "facility",
        titleEn: cat.titleEn,
        titleMr: cat.titleMr,
        descriptionEn: cat.descriptionEn,
        descriptionMr: cat.descriptionMr,
        departmentEn: cat.groupEn,
        departmentMr: cat.groupMr,
        href: `/public-facilities/${cat.slug}`,
        keywords: [
          cat.slug,
          cat.titleEn,
          cat.titleMr,
          cat.groupEn,
          cat.groupMr,
          "facility",
          "facilities",
          "सार्वजनिक सुविधा",
          "सुविधा",
          ...(cat.slug === "fire-stations"
            ? ["fire station", "fire stations", "अग्निशमन केंद्र", "फायर स्टेशन"]
            : []),
          ...(cat.slug === "csmc-schools"
            ? ["schools", "school", "csmc schools", "शाळा", "स्कूल"]
            : []),
          ...(cat.slug === "cfcs"
            ? ["cfc", "citizen facilitation", "facilitation centre", "नागरिक सुविधा केंद्र"]
            : []),
          ...(cat.slug === "police-stations" ? ["police", "पोलीस", "ठाणे"] : []),
          ...(cat.slug === "zone-offices" ? ["zone office", "zone offices", "झोन कार्यालय", "Zone 3"] : []),
          ...(cat.slug === "csmc-hospitals" ? ["hospital", "hospitals", "रुग्णालय", "हॉस्पिटल"] : []),
          ...(cat.slug === "phcs" ? ["phc", "primary health", "आरोग्य केंद्र"] : []),
          ...(cat.slug === "hoardings"
            ? ["hoarding", "hoardings", "banner", "banners", "होर्डिंग", "बॅनर"]
            : []),
        ],
      }),
    );
}

/** Individual facility names from existing JSON datasets → category page. */
function buildFacilityItemRecords(existingIds: Set<string>): CivicRecord[] {
  const out: CivicRecord[] = [];
  for (const { slug, rows } of FACILITY_DATASETS) {
    const cat = facilityCategories.find((c) => c.slug === slug);
    if (!cat) continue;
    for (const row of rows) {
      if (!row?.id || !row?.name) continue;
      const id = `fac-item-${slug}-${row.id}`;
      if (existingIds.has(id)) continue;
      out.push(
        stub({
          id,
          category: "facility",
          titleEn: row.name,
          titleMr: row.name,
          descriptionEn: `${cat.titleEn}: ${row.address ?? row.name}`,
          descriptionMr: `${cat.titleMr}: ${row.address ?? row.name}`,
          departmentEn: cat.groupEn,
          departmentMr: cat.groupMr,
          href: `/public-facilities/${slug}#facility-${row.id}`,
          keywords: [
            row.name,
            row.address ?? "",
            row.zone ?? "",
            cat.titleEn,
            cat.titleMr,
            slug,
            "facility",
            "सुविधा",
          ],
        }),
      );
    }
  }
  return out;
}

function buildDepartmentRecords(
  existingIds: Set<string>,
  existingHrefs: Set<string>,
  existingTitles: Set<string>,
): CivicRecord[] {
  return DEPARTMENT_DIRECTORY.filter((d) => {
    const href = `/departments/${d.slug}`;
    const id = `dept-page-${d.slug}`;
    if (existingIds.has(id)) return false;
    if (existingHrefs.has(hrefKey(href))) return false;
    if (existingTitles.has(normTitle(d.nameEn)) || existingTitles.has(normTitle(d.nameMr))) return false;
    return true;
  }).map((d) =>
    stub({
      id: `dept-page-${d.slug}`,
      category: "department",
      titleEn: d.nameEn,
      titleMr: d.nameMr,
      descriptionEn: `Open the ${d.nameEn} page on the CSMC website.`,
      descriptionMr: `CSMC संकेतस्थळावर ${d.nameMr} पृष्ठ उघडा.`,
      departmentEn: d.nameEn,
      departmentMr: d.nameMr,
      href: `/departments/${d.slug}`,
      keywords: [d.slug, d.nameEn, d.nameMr, d.slug.replace(/-/g, " "), "department", "विभाग"],
    }),
  );
}

function buildServiceEntryRecords(existingIds: Set<string>): CivicRecord[] {
  const out: CivicRecord[] = [];
  for (const entry of SERVICE_ENTRIES) {
    const mapped = SERVICE_ENTRY_TO_CATALOG[entry.id];
    if (mapped && existingIds.has(mapped)) continue;
    const id = `svc-entry-${entry.id}`;
    if (existingIds.has(id)) continue;
    out.push(
      stub({
        id,
        category: "service",
        titleEn: entry.titleEn,
        titleMr: entry.titleMr,
        descriptionEn: entry.purposeEn,
        descriptionMr: entry.purposeMr,
        departmentEn: entry.categoryEn,
        departmentMr: entry.categoryMr,
        href: entry.url,
        external: entry.external,
        keywords: [
          entry.id,
          entry.titleEn,
          entry.titleMr,
          entry.categoryEn,
          entry.categoryMr,
          entry.purposeEn,
          entry.purposeMr,
        ],
      }),
    );
  }
  return out;
}

function buildNoticeRecords(existingIds: Set<string>, catalog: CivicRecord[]): CivicRecord[] {
  const catalogTitles = catalog
    .filter((r) => r.category === "news" || r.category === "notification" || r.category === "tender")
    .map((r) => normTitle(`${r.titleEn} ${r.titleMr}`));

  return SITE_NOTICES.filter((n) => {
    if (existingIds.has(n.id)) return false;
    const title = normTitle(`${n.titleEn} ${n.titleMr}`);
    // Skip when the civic catalog already has a close individual record.
    const covered = catalogTitles.some((ct) => {
      if (!ct || !title) return false;
      if (ct.includes(title.slice(0, Math.min(28, title.length)))) return true;
      if (title.includes(ct.slice(0, Math.min(28, ct.length)))) return true;
      const a = new Set(title.split(" ").filter((w) => w.length > 3));
      const b = ct.split(" ").filter((w) => w.length > 3);
      const overlap = b.filter((w) => a.has(w)).length;
      return overlap >= 4;
    });
    return !covered;
  }).map((n) =>
    stub({
      id: n.id,
      category: "news",
      titleEn: n.titleEn,
      titleMr: n.titleMr,
      descriptionEn: `${n.tagEn}: ${n.titleEn}`,
      descriptionMr: `${n.tagMr}: ${n.titleMr}`,
      departmentEn: "Public Relations",
      departmentMr: "जनसंपर्क",
      href: "/notices",
      publishedAt: n.publishedAt,
      keywords: [n.tagEn, n.tagMr, n.titleEn, n.titleMr, "notice", "सूचना", "announcement"],
    }),
  );
}

function buildStoryRecords(existingIds: Set<string>): CivicRecord[] {
  return getGalleryStories()
    .filter((s) => !existingIds.has(`story-${s.id}`))
    .map((s) =>
      stub({
        id: `story-${s.id}`,
        category: "story",
        titleEn: s.titleEn,
        titleMr: s.titleMr,
        descriptionEn: s.shortDescriptionEn,
        descriptionMr: s.shortDescriptionMr,
        departmentEn: s.categoryEn,
        departmentMr: s.categoryMr,
        href: `/stories/${s.id}`,
        keywords: [
          s.id,
          s.titleEn,
          s.titleMr,
          s.categoryEn,
          s.categoryMr,
          s.locationEn ?? "",
          s.locationMr ?? "",
          "gallery",
          "photo",
          "छायाचित्र",
        ],
      }),
    );
}

function buildAlertRecords(existingIds: Set<string>): CivicRecord[] {
  return CITY_ALERTS.filter((a) => !existingIds.has(`alert-${a.id}`)).map((a) =>
    stub({
      id: `alert-${a.id}`,
      category: "news",
      titleEn: a.titleEn,
      titleMr: a.titleMr,
      descriptionEn: a.descriptionEn,
      descriptionMr: a.descriptionMr,
      departmentEn: a.departmentEn,
      departmentMr: a.departmentMr,
      href: "/city-alerts",
      publishedAt: a.publishedAt,
      keywords: [
        a.id,
        a.titleEn,
        a.titleMr,
        a.locationEn,
        a.locationMr,
        a.ward,
        a.wardMr,
        a.category,
        a.status,
        "alert",
        "city alert",
        "इशारा",
      ],
    }),
  );
}

let cachedIndex: CivicRecord[] | null = null;

/**
 * Full searchable corpus for the website.
 * Cached after first build — safe for client-side search at current content volume.
 */
export function getGlobalSearchIndex(): CivicRecord[] {
  if (cachedIndex) return cachedIndex;

  const base = CIVIC_CATALOG;
  const existingIds = new Set(base.map((r) => r.id));
  const existingHrefs = new Set(base.filter((r) => r.href).map((r) => hrefKey(r.href!)));
  const existingTitles = new Set(
    base.flatMap((r) => [normTitle(r.titleEn), normTitle(r.titleMr)].filter(Boolean)),
  );

  const extras: CivicRecord[] = [];
  const pushAll = (rows: CivicRecord[]) => {
    for (const r of rows) {
      if (existingIds.has(r.id)) continue;
      existingIds.add(r.id);
      if (r.href) existingHrefs.add(hrefKey(r.href));
      existingTitles.add(normTitle(r.titleEn));
      existingTitles.add(normTitle(r.titleMr));
      extras.push(r);
    }
  };

  pushAll(buildSitePageRecords(existingIds));
  pushAll(buildFacilityCategoryRecords(existingIds));
  pushAll(buildFacilityItemRecords(existingIds));
  pushAll(buildDepartmentRecords(existingIds, existingHrefs, existingTitles));
  pushAll(buildServiceEntryRecords(existingIds));
  pushAll(buildNoticeRecords(existingIds, base));
  pushAll(buildStoryRecords(existingIds));
  pushAll(buildAlertRecords(existingIds));

  cachedIndex = [...base, ...extras];
  return cachedIndex;
}

/** Lookup a record in the global index (catalog + adapters). */
export function findSearchRecord(id: string) {
  return getGlobalSearchIndex().find((r) => r.id === id);
}

/** Reset cache — useful in tests when data sources change. */
export function resetSearchIndexCache() {
  cachedIndex = null;
}
