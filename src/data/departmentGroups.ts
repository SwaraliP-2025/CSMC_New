import type { DeptInfo } from "@/pages/site/DepartmentDetail";

export type DepartmentGroupId =
  | "independent"
  | "commissioner"
  | "ac1"
  | "ac2"
  | "technical";

export type DepartmentGroupFilter = "all" | DepartmentGroupId;

export type DepartmentGroupMeta = {
  id: DepartmentGroupId;
  titleEn: string;
  titleMr: string;
  shortEn: string;
  shortMr: string;
};

/** First six entries — commissionerate & senior officers (independent section). */
const INDEPENDENT_OFFICER_SLUGS = [
  "municipal-commissioner",
  "additional-commissioner-1",
  "additional-commissioner-2",
  "city-engineer",
  "additional-city-engineer",
  "chief-accounts-finance-officer",
] as const;

/** Six wings from Ayukt Karyalay onward — under Hon. Municipal Commissioner. */
const COMMISSIONER_WING_SLUGS = [
  "commissioner-office",
  "accounts-department",
  "town-planning-department",
  "audit-department",
  "municipal-secretary-department",
  "statistics-cell",
] as const;

const AC1_SLUGS = [
  "general-administration",
  "labour",
  "education",
  "tourism-development",
  "cultural",
  "fire-disaster-management",
  "solid-waste-management",
  "environment",
  "garden",
  "kham-sukhna-river",
  "sports-swimming",
] as const;

const AC2_SLUGS = [
  "health",
  "tax",
  "market-license",
  "property-management",
  "bot",
  "animal-veterinary",
  "election-census",
  "legal",
  "social-development",
  "library",
  "nulm",
  "information-technology",
  "information-public-relations",
  "central-stores",
  "pmay",
  "ramai-housing",
] as const;

const TECHNICAL_SLUGS = [
  "roads",
  "ramai-civil",
  "solid-waste-civil",
  "buildings",
  "pmay-civil",
  "garden-civil",
  "drainage",
  "drainage-special-east",
  "drainage-special-central",
  "drainage-special-west",
  "water-supply-distribution",
  "jayakwadi-water-civil",
  "jayakwadi-water-mechanical",
  "city-water-mechanical",
  "mechanical-vehicles",
  "electrical",
  "encroachment",
  "security",
] as const;

const SLUG_TO_GROUP = new Map<string, DepartmentGroupId>(
  [
    ...INDEPENDENT_OFFICER_SLUGS.map((s) => [s, "independent"] as const),
    ...COMMISSIONER_WING_SLUGS.map((s) => [s, "commissioner"] as const),
    ...AC1_SLUGS.map((s) => [s, "ac1"] as const),
    ...AC2_SLUGS.map((s) => [s, "ac2"] as const),
    ...TECHNICAL_SLUGS.map((s) => [s, "technical"] as const),
  ],
);

export const DEPARTMENT_GROUPS: DepartmentGroupMeta[] = [
  {
    id: "independent",
    titleEn: "Commissionerate & senior officers",
    titleMr: "आयुक्त व वरिष्ठ अधिकारी",
    shortEn: "Senior officers",
    shortMr: "वरिष्ठ अधिकारी",
  },
  {
    id: "commissioner",
    titleEn: "Under Hon. Municipal Commissioner",
    titleMr: "मा. महानगरपालिका आयुक्त यांच्या अधिपत्याखालील विभाग",
    shortEn: "Municipal Commissioner",
    shortMr: "महा. आयुक्त",
  },
  {
    id: "ac1",
    titleEn: "Under Additional Commissioner – I",
    titleMr: "अतिरिक्त आयुक्त – १ यांच्या अधिपत्याखालील विभाग",
    shortEn: "Addl. Comm. I",
    shortMr: "अ.आ. १",
  },
  {
    id: "ac2",
    titleEn: "Under Additional Commissioner – II",
    titleMr: "अतिरिक्त आयुक्त – २ यांच्या अधिपत्याखालील विभाग",
    shortEn: "Addl. Comm. II",
    shortMr: "अ.आ. २",
  },
  {
    id: "technical",
    titleEn: "Technical & engineering wings",
    titleMr: "तांत्रिक व अभियांत्रिकी विभाग",
    shortEn: "Technical",
    shortMr: "तांत्रिक",
  },
];

export function getDepartmentGroupId(slug: string): DepartmentGroupId {
  return SLUG_TO_GROUP.get(slug) ?? "technical";
}

function normalizeForSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchesDepartmentSearch(dept: DeptInfo, rawQuery: string): boolean {
  const q = normalizeForSearch(rawQuery);
  if (!q) return true;
  const haystack = normalizeForSearch(
    [
      dept.slug.replace(/-/g, " "),
      dept.nameEn,
      dept.nameMr,
      dept.headEn,
      dept.headMr,
      dept.designationEn,
      dept.designationMr,
    ].join(" "),
  );
  return q.split(" ").every((token) => haystack.includes(token));
}

export function groupDepartmentsBySection(
  departments: DeptInfo[],
): Record<DepartmentGroupId, DeptInfo[]> {
  const buckets: Record<DepartmentGroupId, DeptInfo[]> = {
    independent: [],
    commissioner: [],
    ac1: [],
    ac2: [],
    technical: [],
  };
  for (const dept of departments) {
    buckets[getDepartmentGroupId(dept.slug)].push(dept);
  }
  return buckets;
}
