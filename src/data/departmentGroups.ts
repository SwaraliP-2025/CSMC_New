import type { DeptInfo } from "@/pages/site/DepartmentDetail";

export type DepartmentGroupId =
  | "commissioner"
  | "ac1"
  | "ac2"
  | "city-engineer"
  | "additional-city-engineer"
  | "cafo"
  | "technical";

export type DepartmentGroupFilter = "all" | DepartmentGroupId;

export type DepartmentGroupMeta = {
  id: DepartmentGroupId;
  titleEn: string;
  titleMr: string;
  shortEn: string;
  shortMr: string;
};

/** Officer profiles shown at the start of their own section, not in a separate senior-officers group. */
const COMMISSIONER_PROFILE_SLUGS = ["municipal-commissioner"] as const;
const AC1_PROFILE_SLUGS = ["additional-commissioner-1"] as const;
const AC2_PROFILE_SLUGS = ["additional-commissioner-2"] as const;
const CITY_ENGINEER_SLUGS = ["city-engineer"] as const;
/** Departments the 03.09.2026 order places under the City Engineer. Order matches the order. */
const CITY_ENGINEER_DEPARTMENT_SLUGS = [
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
] as const;
const ADDITIONAL_CITY_ENGINEER_SLUGS = ["additional-city-engineer"] as const;
const ADDITIONAL_CITY_ENGINEER_DEPARTMENT_SLUGS = ["mechanical-vehicles", "electrical"] as const;
const CAFO_SLUGS = ["chief-accounts-finance-officer"] as const;
const CAFO_DEPARTMENT_SLUGS = ["encroachment", "security"] as const;

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

const TECHNICAL_SLUGS = [] as const;

/** All department page slugs — used by global search without importing the detail page. */
export const ALL_DEPARTMENT_SLUGS: readonly string[] = [
  ...COMMISSIONER_PROFILE_SLUGS,
  ...COMMISSIONER_WING_SLUGS,
  ...AC1_PROFILE_SLUGS,
  ...AC1_SLUGS,
  ...AC2_PROFILE_SLUGS,
  ...AC2_SLUGS,
  ...CITY_ENGINEER_SLUGS,
  ...CITY_ENGINEER_DEPARTMENT_SLUGS,
  ...ADDITIONAL_CITY_ENGINEER_SLUGS,
  ...ADDITIONAL_CITY_ENGINEER_DEPARTMENT_SLUGS,
  ...CAFO_SLUGS,
  ...CAFO_DEPARTMENT_SLUGS,
  ...TECHNICAL_SLUGS,
];

const SLUG_TO_GROUP = new Map<string, DepartmentGroupId>(
  [
    ...COMMISSIONER_PROFILE_SLUGS.map((s) => [s, "commissioner"] as const),
    ...COMMISSIONER_WING_SLUGS.map((s) => [s, "commissioner"] as const),
    ...AC1_PROFILE_SLUGS.map((s) => [s, "ac1"] as const),
    ...AC1_SLUGS.map((s) => [s, "ac1"] as const),
    ...AC2_PROFILE_SLUGS.map((s) => [s, "ac2"] as const),
    ...AC2_SLUGS.map((s) => [s, "ac2"] as const),
    ...CITY_ENGINEER_SLUGS.map((s) => [s, "city-engineer"] as const),
    ...CITY_ENGINEER_DEPARTMENT_SLUGS.map((s) => [s, "city-engineer"] as const),
    ...ADDITIONAL_CITY_ENGINEER_SLUGS.map((s) => [s, "additional-city-engineer"] as const),
    ...ADDITIONAL_CITY_ENGINEER_DEPARTMENT_SLUGS.map((s) => [s, "additional-city-engineer"] as const),
    ...CAFO_SLUGS.map((s) => [s, "cafo"] as const),
    ...CAFO_DEPARTMENT_SLUGS.map((s) => [s, "cafo"] as const),
    ...TECHNICAL_SLUGS.map((s) => [s, "technical"] as const),
  ],
);

export const DEPARTMENT_GROUPS: DepartmentGroupMeta[] = [
  {
    id: "commissioner",
    titleEn: "Hon. Municipal Commissioner",
    titleMr: "मा. महानगरपालिका आयुक्त",
    shortEn: "Municipal Commissioner",
    shortMr: "महा. आयुक्त",
  },
  {
    id: "ac1",
    titleEn: "Additional Commissioner 1",
    titleMr: "अतिरिक्त आयुक्त - 1",
    shortEn: "Addl. Comm. I",
    shortMr: "अ.आ. १",
  },
  {
    id: "ac2",
    titleEn: "Additional Commissioner 2",
    titleMr: "अतिरिक्त आयुक्त - 2",
    shortEn: "Addl. Comm. II",
    shortMr: "अ.आ. २",
  },
  {
    id: "city-engineer",
    titleEn: "City Engineer",
    titleMr: "शहर अभियंता",
    shortEn: "City Engineer",
    shortMr: "शहर अभियंता",
  },
  {
    id: "additional-city-engineer",
    titleEn: "Additional City Engineer",
    titleMr: "अतिरिक्त शहर अभियंता",
    shortEn: "Addl. City Engineer",
    shortMr: "अ. शहर अभियंता",
  },
  {
    id: "cafo",
    titleEn: "Chief Accounts & Finance Officer",
    titleMr: "मुख्य लेखा व वित्त अधिकारी",
    shortEn: "Chief Accounts",
    shortMr: "मुख्य लेखा",
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
    commissioner: [],
    ac1: [],
    ac2: [],
    "city-engineer": [],
    "additional-city-engineer": [],
    cafo: [],
    technical: [],
  };
  for (const dept of departments) {
    buckets[getDepartmentGroupId(dept.slug)].push(dept);
  }
  return buckets;
}

/** Department head (विभाग प्रमुख) from the 03.09.2026 order. `null` means that cell is blank. */
export type ListedDepartmentHod = {
  nameEn: string;
  nameMr: string;
  designationEn: string;
  designationMr: string;
} | null;

const executiveEngineer = {
  designationEn: "Executive Engineer",
  designationMr: "कार्यकारी अभियंता",
} as const;

const inChargeExecutiveEngineer = {
  designationEn: "In-charge Executive Engineer",
  designationMr: "प्र. कार्यकारी अभियंता",
} as const;

const deputyMunicipalCommissioner = {
  designationEn: "Deputy Municipal Commissioner",
  designationMr: "उप आयुक्त",
} as const;

const kombde: ListedDepartmentHod = {
  nameEn: "Shri Sanjay Kombde",
  nameMr: "श्री संजय कोंबडे",
  ...executiveEngineer,
};
const chamle: ListedDepartmentHod = {
  nameEn: "Shri Sanjay Chamle",
  nameMr: "श्री संजय चामले",
  ...inChargeExecutiveEngineer,
};
const waikar: ListedDepartmentHod = {
  nameEn: "Shri Sachin Waikar",
  nameMr: "श्री सचिन वाईकर",
  ...executiveEngineer,
};
const sonawane: ListedDepartmentHod = {
  nameEn: "Smt. Savita Sonawane",
  nameMr: "श्रीमती सविता सोनवणे",
  ...deputyMunicipalCommissioner,
};

const LISTED_DEPARTMENT_HOD: Record<string, ListedDepartmentHod> = {
  roads: {
    nameEn: "Shri Balasaheb Shirsat",
    nameMr: "श्री बाळासाहेब शिरसाट",
    ...executiveEngineer,
  },
  "ramai-civil": null,
  "solid-waste-civil": kombde,
  buildings: kombde,
  "pmay-civil": kombde,
  "garden-civil": kombde,
  drainage: chamle,
  "drainage-special-east": chamle,
  "drainage-special-central": chamle,
  "drainage-special-west": chamle,
  "water-supply-distribution": {
    nameEn: "Shri D. P. Gaikwad",
    nameMr: "श्री डी. पी. गायकवाड",
    ...inChargeExecutiveEngineer,
  },
  "jayakwadi-water-civil": null,
  "jayakwadi-water-mechanical": waikar,
  "city-water-mechanical": waikar,
  "mechanical-vehicles": {
    nameEn: "Shri Amol Kulkarni",
    nameMr: "श्री अमोल कुलकर्णी",
    ...executiveEngineer,
  },
  electrical: {
    nameEn: "Smt. Mohini Warbhuvan",
    nameMr: "श्रीमती मोहिनी वारभुवन",
    ...inChargeExecutiveEngineer,
  },
  encroachment: sonawane,
  security: sonawane,
};

export function listedDepartmentHod(slug: string): ListedDepartmentHod | undefined {
  if (Object.prototype.hasOwnProperty.call(LISTED_DEPARTMENT_HOD, slug)) {
    return LISTED_DEPARTMENT_HOD[slug];
  }
  return undefined;
}
