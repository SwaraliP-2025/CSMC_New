import { openPdf } from "@/lib/pdfDocument";

const cache = new Map<string, { text: string; scanned: boolean }>();

export function cachedPdfText(url: string) {
  return cache.get(url);
}

export function rememberPdfText(url: string, text: string, scanned: boolean) {
  const entry = { text, scanned };
  cache.set(url, entry);
  return entry;
}

/** Reads the embedded text layer. A short result means the PDF is likely a scan. */
export async function extractPdfTextLayer(url: string, maxPages = 2) {
  const existing = cache.get(url);
  if (existing) return existing;
  const pdf = await openPdf(url);
  const pages = Math.min(pdf.numPages, maxPages);
  const chunks: string[] = [];
  for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const line = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    chunks.push(line);
  }
  const text = chunks.join("\n").replace(/\s+/g, " ").trim();
  await pdf.destroy();
  return rememberPdfText(url, text, text.length < 40);
}

export function textSnippet(text: string, query: string) {
  const q = query.trim();
  if (!q) return "";
  const index = text.toLowerCase().indexOf(q.toLowerCase());
  if (index < 0) return "";
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + q.length + 80);
  const slice = text.slice(start, end).trim();
  return `${start > 0 ? "…" : ""}${slice}${end < text.length ? "…" : ""}`;
}
