export type CivicCategory =
  | "service"
  | "circular"
  | "notification"
  | "government-resolution"
  | "corporation-resolution"
  | "tender"
  | "citizen-charter"
  | "building-bye-laws"
  | "development-plan"
  | "annual-report"
  | "policy"
  | "acts-rules"
  | "rti"
  | "faq"
  | "news"
  | "department"
  | "contact"
  | "budget"
  | "meeting-minutes";

export type CivicLanguage = "en" | "mr" | "both";

export type DocumentStatus = "current" | "superseded" | "archived";

export type SearchGroup =
  | "services"
  | "documents"
  | "notices"
  | "circulars"
  | "departments"
  | "faqs";

export interface DocumentVersion {
  version: string;
  publishedAt: string;
  status: DocumentStatus;
  notesEn: string;
  notesMr: string;
}

export interface OcrPage {
  page: number;
  textEn: string;
  textMr: string;
}

export interface AiFaq {
  qEn: string;
  aEn: string;
  qMr: string;
  aMr: string;
}

export interface CivicRecord {
  id: string;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  previewEn: string;
  previewMr: string;
  departmentEn: string;
  departmentMr: string;
  category: CivicCategory;
  publishedAt: string;
  updatedAt: string;
  year: number;
  language: CivicLanguage;
  href?: string;
  external?: boolean;
  downloadable?: boolean;
  fileSize?: string;
  relatedServiceHref?: string;
  relatedServiceLabelEn?: string;
  relatedServiceLabelMr?: string;
  status: DocumentStatus;
  version: string;
  versions: DocumentVersion[];
  relatedIds: string[];
  bodyEn: string[];
  bodyMr: string[];
  summaryEn: string;
  summaryMr: string;
  highlightsEn: string[];
  highlightsMr: string[];
  readingMinutes: number;
  keywords: string[];
  ocrPages: OcrPage[];
  applicableEn: string;
  applicableMr: string;
  simpleEn: string;
  simpleMr: string;
  aiFaqs: AiFaq[];
}

export type AlertStatus = "active" | "upcoming" | "completed";

export type AlertCategory =
  | "road-closure"
  | "road-construction"
  | "traffic-diversion"
  | "water-supply"
  | "utility-maintenance"
  | "public-events"
  | "weather-advisories"
  | "flood-alerts";

export interface CityAlert {
  id: string;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  locationEn: string;
  locationMr: string;
  departmentEn: string;
  departmentMr: string;
  category: AlertCategory;
  status: AlertStatus;
  ward: string;
  wardMr: string;
  expectedCompletion: string;
  publishedAt: string;
  relatedNoticeId?: string;
  relatedNoticeHref?: string;
  relatedNoticeLabelEn?: string;
  relatedNoticeLabelMr?: string;
}
