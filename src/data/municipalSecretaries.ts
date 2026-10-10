import type { ArchiveFile } from "@/lib/archiveDocuments";

/** Folder under public/documents/. The page route is /municipal-corporation-secretaries. */
export const SECRETARIES_FOLDER = "List of Municipal Corporation Secretaries";
export const SECRETARIES_FILE = "Municipal_Corporation_Secretary_List_2026.pdf";

export const MUNICIPAL_SECRETARIES_DOCUMENT: ArchiveFile = {
  id: "municipal-corporation-secretaries-2026",
  file: SECRETARIES_FILE,
  bytes: 591240,
  titleEn: "Municipal Corporation Secretaries",
  titleMr: "महानगरपालिका सचिवांची यादी",
};
