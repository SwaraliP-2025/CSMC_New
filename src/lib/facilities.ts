import type { LucideIcon } from "lucide-react";
import {
  Hospital,
  ShieldAlert,
  ShieldCheck,
  Building2,
  School,
  Users,
  MapPin,
  Flag,
} from "lucide-react";

/** Curated public-facing extra field (never dump raw GIS columns). */
export interface FacilityDetailField {
  labelEn: string;
  labelMr: string;
  value: string;
}

export interface FacilityRecord {
  id: string;
  name: string;
  address: string;
  zone?: string;
  phone: string;
  timings: string;
  latitude: string;
  longitude: string;
  googleMapsUrl: string;
  details?: FacilityDetailField[];
}

export interface FacilityCategoryDef {
  slug: string;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  dataset: string;
  icon: LucideIcon;
  groupEn: string;
  groupMr: string;
  /** When false, hide from homepage overview slider. */
  showInOverview?: boolean;
}

export const facilityCategories: FacilityCategoryDef[] = [
  {
    slug: "csmc-hospitals",
    titleEn: "Hospitals",
    titleMr: "रुग्णालये",
    descriptionEn: "Hospitals and nursing homes across the city from the CSMC GIS directory.",
    descriptionMr: "CSMC GIS निर्देशिकेतील शहरभरातील रुग्णालये व नर्सींग होम्स.",
    dataset: "csmc-hospitals.json",
    icon: Hospital,
    groupEn: "Health Services",
    groupMr: "आरोग्य सेवा",
  },
  {
    slug: "phcs",
    titleEn: "Primary Health Centres (PHCs)",
    titleMr: "प्राथमिक आरोग्य केंद्रे (PHC)",
    descriptionEn: "Local primary health centres providing outpatient care and essential medicines.",
    descriptionMr: "बाह्यरुग्ण सेवा व आवश्यक औषधे देणारी स्थानिक प्राथमिक आरोग्य केंद्रे.",
    dataset: "phcs.json",
    icon: ShieldAlert,
    groupEn: "Health Services",
    groupMr: "आरोग्य सेवा",
    showInOverview: false,
  },
  {
    slug: "fire-stations",
    titleEn: "Fire Stations",
    titleMr: "अग्निशमन केंद्रे",
    descriptionEn: "Fire response units across the city ready for emergencies and rescue work.",
    descriptionMr: "आपत्कालीन प्रतिसाद व बचाव कार्यासाठी शहरातील अग्निशमन युनिट्स.",
    dataset: "fire-stations.json",
    icon: ShieldCheck,
    groupEn: "Emergency Services",
    groupMr: "आपत्कालीन सेवा",
  },
  {
    slug: "police-stations",
    titleEn: "Police Stations",
    titleMr: "पोलीस ठाणे",
    descriptionEn: "Police stations supporting law, order and public safety across the city.",
    descriptionMr: "शहरभरातील कायदा, सुव्यवस्था व जनसुरक्षितता सुनिश्चित करणारी पोलीस ठाणी.",
    dataset: "police-stations.json",
    icon: Building2,
    groupEn: "Emergency Services",
    groupMr: "आपत्कालीन सेवा",
  },
  {
    slug: "zone-offices",
    titleEn: "Zone Offices",
    titleMr: "झोन कार्यालये",
    descriptionEn: "Administrative zone offices offering citizen support, permissions and enquiries.",
    descriptionMr: "नागरिक सहाय्य, परवानग्या व चौकशीसाठी झोन प्रशासन कार्यालये.",
    dataset: "zone-offices.json",
    icon: MapPin,
    groupEn: "Municipal Offices",
    groupMr: "महापालिका कार्यालये",
  },
  {
    slug: "cfcs",
    titleEn: "Citizen Facilitation Centres (CFCs)",
    titleMr: "नागरिक सुविधा केंद्रे (CFC)",
    descriptionEn: "Citizen facilitation centres operating at CSMC zone offices for municipal services and applications.",
    descriptionMr: "महापालिका सेवा व अर्जांसाठी CSMC झोन कार्यालयांमध्ये कार्यरत नागरिक सुविधा केंद्रे.",
    dataset: "cfcs.json",
    icon: Users,
    groupEn: "Municipal Offices",
    groupMr: "महापालिका कार्यालये",
  },
  {
    slug: "csmc-schools",
    titleEn: "CSMC Schools",
    titleMr: "CSMC शाळा",
    descriptionEn: "Municipal schools providing education services across the city.",
    descriptionMr: "शहरभरातील शैक्षणिक सेवा देणाऱ्या महापालिका शाळा.",
    dataset: "csmc-schools.json",
    icon: School,
    groupEn: "Education",
    groupMr: "शिक्षण",
  },
  {
    slug: "hoardings",
    titleEn: "Hoardings",
    titleMr: "होर्डिंग्ज",
    descriptionEn: "Licensed outdoor advertising hoarding locations managed in the CSMC GIS inventory.",
    descriptionMr: "CSMC GIS यादीतील परवानाधारक बाह्य जाहिरात होर्डिंग ठिकाणे.",
    dataset: "hoardings.json",
    icon: Flag,
    groupEn: "Municipal Infrastructure",
    groupMr: "महापालिका पायाभूत सुविधा",
  },
];

export const facilityCategoryMap = facilityCategories.reduce<Record<string, FacilityCategoryDef>>((map, item) => {
  map[item.slug] = item;
  return map;
}, {});

/** Legacy URL from earlier Banner Locations category. */
const hoardings = facilityCategoryMap.hoardings;
if (hoardings) {
  facilityCategoryMap["banner-locations"] = { ...hoardings, slug: "hoardings" };
}

export function facilityHasCoordinates(item: FacilityRecord): boolean {
  const lat = Number(item.latitude);
  const lng = Number(item.longitude);
  return Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) > 0.1 && Math.abs(lng) > 0.1;
}

type DigitFn = (value: string | number | null | undefined) => string;

/**
 * Localize Zone/Ward label prefixes for display. Does not invent place names.
 * "Zone 2" → "झोन २", "Ward 22" → "प्रभाग २२"
 */
export function localizeFacilityZoneLabel(
  zone: string | undefined,
  lang: "en" | "mr",
  d: DigitFn,
): string {
  if (!zone?.trim()) return "";
  const m = zone.trim().match(/^(Zone|Ward)\s*(.+)$/i);
  if (!m) return d(zone);
  const isWard = m[1].toLowerCase() === "ward";
  const prefix =
    lang === "en" ? (isWard ? "Ward" : "Zone") : isWard ? "प्रभाग" : "झोन";
  return `${prefix} ${d(m[2])}`;
}

/** Common GIS enum / type tokens used in facility detail values. */
const DETAIL_VALUE_MR: Record<string, string> = {
  yes: "होय",
  no: "नाही",
  y: "होय",
  n: "नाही",
  private: "खाजगी",
  public: "सार्वजनिक",
  government: "शासकीय",
  govt: "शासकीय",
  municipal: "महापालिका",
  hospital: "रुग्णालय",
  "eye hospital": "नेत्र रुग्णालय",
  "nursing home": "नर्सिंग होम",
  clinic: "क्लिनिक",
  amc: "AMC",
  csmc: "CSMC",
};

/**
 * Display name for facility cards.
 * Rewrites structural facility-type suffixes into Marathi; keeps place /
 * official name stems from GIS unchanged (does not invent Marathi place names).
 *
 * Examples (Marathi):
 * - "Zone Office 2" → "झोन कार्यालय २"
 * - "Padampura Fire Station" → "Padampura अग्निशमन केंद्र"
 * - "City Chowk P.S." → "City Chowk पोलीस ठाणे"
 */
export function displayFacilityName(
  name: string,
  lang: "en" | "mr",
  d: DigitFn,
): string {
  if (!name) return name;
  if (lang === "en") return name;

  const trimmed = name.trim();

  const cfc = trimmed.match(/^CFC\s*[—–-]\s*Zone Office\s*(.+)$/i);
  if (cfc) return `CFC — झोन कार्यालय ${d(cfc[1].trim())}`;

  const zo = trimmed.match(/^Zone Office\s*(.+)$/i);
  if (zo) return `झोन कार्यालय ${d(zo[1].trim())}`;

  const fire = trimmed.match(/^(.*?)\s+Fire\s*Stations?$/i);
  if (fire?.[1]) return `${d(fire[1].trim())} अग्निशमन केंद्र`;

  const policeFull = trimmed.match(/^(.*?)\s+Police\s*Stations?$/i);
  if (policeFull?.[1]) return `${d(policeFull[1].trim())} पोलीस ठाणे`;

  const ps = trimmed.match(/^(.*?)\s+P\.?\s*S\.?$/i);
  if (ps?.[1]) return `${d(ps[1].trim())} पोलीस ठाणे`;

  const nursing = trimmed.match(/^(.*?)\s+Nursing\s*Homes?$/i);
  if (nursing?.[1]) return `${d(nursing[1].trim())} नर्सिंग होम`;

  const hosp = trimmed.match(/^(.*?)\s+Hospitals?$/i);
  if (hosp?.[1]) return `${d(hosp[1].trim())} रुग्णालय`;

  const phcFull = trimmed.match(/^(.*?)\s+Primary\s+Health\s+Centres?$/i);
  if (phcFull?.[1]) return `${d(phcFull[1].trim())} प्राथमिक आरोग्य केंद्र`;

  const phc = trimmed.match(/^(.*?)\s+PHCs?$/i);
  if (phc?.[1]) return `${d(phc[1].trim())} PHC`;

  const school = trimmed.match(/^(.*?)\s+Schools?$/i);
  if (school?.[1]) return `${d(school[1].trim())} शाळा`;

  return d(trimmed);
}

function localizeDetailEnumValue(value: string, lang: "en" | "mr", d: DigitFn): string {
  if (lang === "en" || !value) return d(value);
  const key = value.trim().toLowerCase().replace(/\s+/g, " ");
  const mapped = DETAIL_VALUE_MR[key];
  if (mapped) return d(mapped);
  return d(value);
}

/** Localize structural values inside detail fields (e.g. "Located at: Zone Office 1"). */
export function displayFacilityDetailValue(
  value: string,
  lang: "en" | "mr",
  d: DigitFn,
): string {
  if (!value) return value;
  // Zone/Ward first — avoid digit-only "Zone १" from displayFacilityName.
  if (/^(Zone|Ward)\s+/i.test(value.trim())) {
    return localizeFacilityZoneLabel(value, lang, d);
  }
  const asName = displayFacilityName(value, lang, d);
  if (asName !== value) return asName;
  return localizeDetailEnumValue(value, lang, d);
}

export interface TouristPlaceRecord {
  id: string;
  slug: string;
  nameEn: string;
  nameMr: string;
  descriptionEn: string;
  descriptionMr: string;
  detailsEn: string;
  detailsMr: string;
  howToVisitEn?: string;
  howToVisitMr?: string;
  distanceKm?: string;
  image: string;
  googleMapsUrl: string;
}
