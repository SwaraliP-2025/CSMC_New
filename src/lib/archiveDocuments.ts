export type ArchiveSortKey =
  | "name-asc"
  | "name-desc"
  | "date-newest"
  | "date-oldest"
  | "size-largest"
  | "size-smallest";

export type ArchiveFile = {
  id: string;
  file: string;
  bytes: number;
  /** ISO date only when a reliable date is known. */
  date?: string;
  /** External resource. The file is not stored in this site. */
  externalUrl?: string;
  titleEn?: string;
  titleMr?: string;
};

export function isPdfFile(file: string) {
  return file.toLowerCase().endsWith(".pdf");
}

export function archiveDisplayName(file: string) {
  return file.replace(/\.[^.]+$/, "").replace(/[_]+/g, " ");
}

export function publicDocumentUrl(segments: string[]) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}documents/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

export function formatArchiveBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function sortArchiveFiles<T extends ArchiveFile>(files: T[], sort: ArchiveSortKey): T[] {
  const copy = [...files];
  const byName = (a: T, b: T) => a.file.localeCompare(b.file, undefined, { numeric: true, sensitivity: "base" });
  copy.sort((a, b) => {
    if (sort === "name-asc") return byName(a, b);
    if (sort === "name-desc") return byName(b, a);
    if (sort === "size-largest") return b.bytes - a.bytes || byName(a, b);
    if (sort === "size-smallest") return a.bytes - b.bytes || byName(a, b);
    if (a.date && b.date && a.date !== b.date) {
      return sort === "date-newest" ? (a.date < b.date ? 1 : -1) : a.date < b.date ? -1 : 1;
    }
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return byName(a, b);
  });
  return copy;
}

export function archiveNameMatches(file: string, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return file.toLowerCase().includes(q) || archiveDisplayName(file).toLowerCase().includes(q);
}
