import type { ArchiveFile } from "@/lib/archiveDocuments";

/** Existing files at public/documents/. These records do not copy the files. */
export const SEVEN_STAR_FAQ_DOCUMENT: ArchiveFile = {
  id: "faq-seven-star",
  file: "FAQ_SevenStar.pdf",
  bytes: 67011,
  titleEn: "7 Star Citizen FAQs",
  titleMr: "७ स्टार नागरिक प्रश्नोत्तरे",
};

export const DISASTER_GUIDELINES_DOCUMENT: ArchiveFile = {
  id: "guidelines-for-disaster",
  file: "Guildelines_For_Disaster.pdf",
  bytes: 759375,
  titleEn: "Guidelines for Disaster",
  titleMr: "आपत्ती व्यवस्थापन मार्गदर्शक",
};

export const citizenRepositoryDocuments: ArchiveFile[] = [
  SEVEN_STAR_FAQ_DOCUMENT,
  DISASTER_GUIDELINES_DOCUMENT,
];
