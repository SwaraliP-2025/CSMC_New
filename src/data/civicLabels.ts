import type {
  AlertCategory,
  AlertStatus,
  CivicCategory,
  DocumentStatus,
  SearchGroup,
} from "@/types/civicCatalog";

export const CATEGORY_LABELS: Record<CivicCategory, { en: string; mr: string }> = {
  service: { en: "Municipal Services", mr: "नागरी सेवा" },
  circular: { en: "Circulars", mr: "परिपत्रके" },
  notification: { en: "Notifications", mr: "अधिसूचना" },
  "government-resolution": { en: "Government Resolutions", mr: "शासन निर्णय" },
  "corporation-resolution": { en: "Corporation Resolutions", mr: "महापालिका ठराव" },
  tender: { en: "Tenders", mr: "निविदा" },
  "citizen-charter": { en: "Citizen Charters", mr: "नागरिक सनद" },
  "building-bye-laws": { en: "Building Bye-laws", mr: "बांधकाम उपविधी" },
  "development-plan": { en: "Development Plans", mr: "विकास आराखडे" },
  "annual-report": { en: "Annual Reports", mr: "वार्षिक अहवाल" },
  policy: { en: "Policies", mr: "धोरणे" },
  "acts-rules": { en: "Acts & Rules", mr: "अधिनियम व नियम" },
  rti: { en: "RTI Documents", mr: "माहिती अधिकार दस्तऐवज" },
  faq: { en: "FAQs", mr: "सामान्य प्रश्न" },
  news: { en: "News & Announcements", mr: "बातम्या व घोषणा" },
  department: { en: "Departments", mr: "विभाग" },
  contact: { en: "Contact Directory", mr: "संपर्क निर्देशिका" },
  budget: { en: "Budgets", mr: "अर्थसंकल्प" },
  "meeting-minutes": { en: "Meeting Minutes", mr: "बैठक इतिवृत्त" },
};

export const REPOSITORY_CATEGORIES: CivicCategory[] = [
  "circular",
  "notification",
  "government-resolution",
  "corporation-resolution",
  "budget",
  "annual-report",
  "development-plan",
  "building-bye-laws",
  "citizen-charter",
  "policy",
  "acts-rules",
  "rti",
  "meeting-minutes",
  "tender",
];

export const SEARCH_GROUP_LABELS: Record<SearchGroup, { en: string; mr: string }> = {
  services: { en: "Services", mr: "सेवा" },
  documents: { en: "Documents", mr: "दस्तऐवज" },
  notices: { en: "Notices", mr: "सूचना" },
  circulars: { en: "Circulars", mr: "परिपत्रके" },
  departments: { en: "Departments", mr: "विभाग" },
  faqs: { en: "FAQs", mr: "सामान्य प्रश्न" },
};

export const SEARCH_GROUP_ORDER: SearchGroup[] = [
  "services",
  "documents",
  "notices",
  "circulars",
  "departments",
  "faqs",
];

export function searchGroupFor(category: CivicCategory): SearchGroup {
  if (category === "service") return "services";
  if (category === "faq") return "faqs";
  if (category === "circular") return "circulars";
  if (category === "news" || category === "notification") return "notices";
  if (category === "department" || category === "contact") return "departments";
  return "documents";
}

export const DOCUMENT_STATUS_LABELS: Record<DocumentStatus, { en: string; mr: string }> = {
  current: { en: "Active", mr: "सक्रिय" },
  superseded: { en: "Superseded", mr: "अतिक्रमित" },
  archived: { en: "Archived", mr: "संग्रहित" },
};

export const LANGUAGE_LABELS: Record<"en" | "mr" | "both", { en: string; mr: string }> = {
  en: { en: "English", mr: "इंग्रजी" },
  mr: { en: "Marathi", mr: "मराठी" },
  both: { en: "Bilingual", mr: "द्विभाषिक" },
};

export const ALERT_CATEGORY_LABELS: Record<AlertCategory, { en: string; mr: string }> = {
  "road-closure": { en: "Road Closures", mr: "रस्ता बंद" },
  "road-construction": { en: "Road Construction", mr: "रस्ता बांधकाम" },
  "traffic-diversion": { en: "Traffic Diversions", mr: "वाहतूक वळण" },
  "water-supply": { en: "Water Supply Interruptions", mr: "पाणी पुरवठा व्यत्यय" },
  "utility-maintenance": { en: "Utility Maintenance", mr: "उपयोगिता देखभाल" },
  "public-events": { en: "Public Events", mr: "सार्वजनिक कार्यक्रम" },
  "weather-advisories": { en: "Weather Advisories", mr: "हवामान सल्ले" },
  "flood-alerts": { en: "Flood Alerts", mr: "पूर इशारे" },
};

export const ALERT_STATUS_LABELS: Record<AlertStatus, { en: string; mr: string }> = {
  active: { en: "Active", mr: "सक्रिय" },
  upcoming: { en: "Upcoming", mr: "आगामी" },
  completed: { en: "Completed", mr: "पूर्ण" },
};

export function officialDocumentId(id: string, year: number) {
  return `CSMC/${year}/${id.replace(/-/g, "/").toUpperCase()}`;
}
