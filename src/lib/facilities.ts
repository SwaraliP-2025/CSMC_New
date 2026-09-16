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
    descriptionEn: "Dedicated centres that help citizens with municipal services and applications.",
    descriptionMr: "नागरिकांच्या सेवा व अर्ज प्रक्रियेतील मदत करणारी समर्पित केंद्रे.",
    dataset: "cfcs.json",
    icon: Users,
    groupEn: "Municipal Offices",
    groupMr: "महापालिका कार्यालये",
    showInOverview: false,
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
