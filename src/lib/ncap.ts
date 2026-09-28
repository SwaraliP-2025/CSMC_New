/** NCAP document library model. Records live in public/data/ncap-documents.json. */

export type NcapFileType = "pdf" | "docx";
export type NcapIndexStatus = "extracted" | "unindexed-scanned";

export interface NcapDocument {
  id: string;
  /** Supplied filename without extension. Not a rewritten title. */
  title: string;
  fileName: string;
  organisation: string | null;
  year: number | null;
  fileType: NcapFileType;
  /** Pre-extracted text for client search. Empty when the file could not be indexed. */
  text: string;
  indexStatus: NcapIndexStatus;
}

export function ncapFileUrl(fileName: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}ncap/documents/${encodeURIComponent(fileName)}`;
}

export function ncapMatches(doc: NcapDocument, query: string, year: string): boolean {
  if (year && String(doc.year ?? "") !== year) return false;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = [doc.title, doc.fileName, doc.organisation ?? "", doc.year ?? "", doc.text]
    .join("\n")
    .toLowerCase();
  return hay.includes(q);
}
