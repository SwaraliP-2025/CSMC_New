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
  showInOverview?: boolean;
}

export const facilityCategories: FacilityCategoryDef[] = [
  {
    slug: "phcs",
    titleEn: "Primary Health Centres (PHCs)",
    titleMr: "प्राथमिक आरोग्य केंद्रे (PHC)",
    descriptionEn: "Local primary health centres providing outpatient care and essential medicines.",
    descriptionMr: "बाह्यरुग्ण सेवा व आवश्यक औषधे देणारी स्थानिक प्राथमिक आरोग्य केंद्रे.",
    dataset: "phcs.json",
    icon: Hospital,
    groupEn: "Health Services",
    groupMr: "आरोग्य सेवा",
    showInOverview: false,
  },
  {
    slug: "csmc-hospitals",
    titleEn: "CSMC Hospitals",
    titleMr: "CSMC रुग्णालये",
    descriptionEn: "Municipal hospitals managed by CSMC for specialist and emergency care.",
    descriptionMr: "विशेषज्ञ व आपत्कालीन उपचारासाठी CSMC द्वारे चालवली जाणारी महापालिका रुग्णालये.",
    dataset: "csmc-hospitals.json",
    icon: ShieldAlert,
    groupEn: "Health Services",
    groupMr: "आरोग्य सेवा",
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
    descriptionEn: "Civic protection centres supporting law, order and public safety in every ward.",
    descriptionMr: "प्रत्येक प्रभागातील कायदा, सुव्यवस्था व जनसुरक्षितता सुनिश्चित करणारी केंद्रे.",
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
    slug: "banner-locations",
    titleEn: "Banner Locations",
    titleMr: "बॅनर ठिकाणे",
    descriptionEn: "Municipal banner locations managed by CSMC for public messaging and campaigns.",
    descriptionMr: "जनसंपर्क व मोहिमांसाठी CSMC द्वारे व्यवस्थापित सार्वजनिक बॅनर ठिकाणे.",
    dataset: "banner-locations.json",
    icon: Flag,
    groupEn: "Municipal Infrastructure",
    groupMr: "महापालिका पायाभूत सुविधा",
  },
];

export const facilityCategoryMap = facilityCategories.reduce<Record<string, FacilityCategoryDef>>((map, item) => {
  map[item.slug] = item;
  return map;
}, {});

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
