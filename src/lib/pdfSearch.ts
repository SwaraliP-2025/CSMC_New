import { loadPdfjs, openPdf, pdfResourceKey } from "@/lib/pdfDocument";

/** Rectangle in page space, each edge from 0 to 1. */
export type PdfMatchRect = { x: number; y: number; w: number; h: number };

export type PdfSearchHit = {
  page: number;
  snippet: string;
  count: number;
  /** One entry per occurrence. A phrase can cover more than one rectangle. */
  matches: PdfMatchRect[][];
};

export type PdfSearchProgress = {
  phase: "text" | "ocr";
  page: number;
  pageCount: number;
};

type Part = { text: string; start: number; end: number; rect: PdfMatchRect };
type PageGeometry = { page: number; haystack: string; parts: Part[] };
type CachedDocument = { pages: PageGeometry[]; scanned: boolean; ocr: PageGeometry[] | null };

const pageCache = new Map<string, CachedDocument>();
const SCAN_LETTER_LIMIT = 80;

function clampRect(rect: PdfMatchRect): PdfMatchRect {
  const w = Math.min(1, Math.max(rect.w, 0.004));
  const h = Math.min(1, Math.max(rect.h, 0.004));
  return {
    x: Math.min(Math.max(rect.x, 0), 1 - w),
    y: Math.min(Math.max(rect.y, 0), 1 - h),
    w,
    h,
  };
}

function snippetAround(text: string, query: string) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index < 0) return "";
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + query.length + 80);
  const slice = text.slice(start, end).trim();
  return `${start > 0 ? "…" : ""}${slice}${end < text.length ? "…" : ""}`;
}

function findOccurrences(page: PageGeometry, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [] as PdfMatchRect[][];
  const haystack = page.haystack.toLowerCase();
  const found: PdfMatchRect[][] = [];
  let from = 0;
  while (from < haystack.length) {
    const index = haystack.indexOf(needle, from);
    if (index < 0) break;
    const end = index + needle.length;
    const rects = page.parts
      .filter((part) => part.end > index && part.start < end && part.text.trim())
      .map((part) => {
        const length = part.text.length || 1;
        const localStart = Math.max(0, index - part.start) / length;
        const localEnd = Math.min(length, end - part.start) / length;
        return clampRect({
          x: part.rect.x + part.rect.w * localStart,
          y: part.rect.y,
          w: part.rect.w * Math.max(localEnd - localStart, 0),
          h: part.rect.h,
        });
      })
      .filter((rect) => rect.w > 0 && rect.h > 0);
    if (rects.length) found.push(rects);
    from = end;
  }
  return found;
}

function hitsFromPages(pages: PageGeometry[], query: string): PdfSearchHit[] {
  return pages.flatMap((page) => {
    const matches = findOccurrences(page, query);
    if (!matches.length) return [];
    return [{ page: page.page, snippet: snippetAround(page.haystack, query), count: matches.length, matches }];
  });
}

async function readTextGeometry(url: string, onProgress?: (progress: PdfSearchProgress) => void, signal?: AbortSignal) {
  const cached = pageCache.get(pdfResourceKey(url));
  if (cached) return cached;
  const pdfjs = await loadPdfjs();
  const pdf = await openPdf(url);
  const pages: PageGeometry[] = [];
  let richest = 0;
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    if (signal?.aborted) return { pages, scanned: false, ocr: null };
    onProgress?.({ phase: "text", page: pageNumber, pageCount: pdf.numPages });
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const parts: Part[] = [];
    let haystack = "";
    for (const item of content.items) {
      if (!("str" in item)) continue;
      const text = item.str.replace(/\s+/g, " ").trim();
      if (!text) continue;
      if (haystack) haystack += " ";
      const start = haystack.length;
      haystack += text;
      const tx = pdfjs.Util.transform(viewport.transform, item.transform);
      const fontHeight = Math.hypot(tx[2], tx[3]) || Math.abs(item.height) || 1;
      const width = Math.abs(item.width || 0) * viewport.scale;
      parts.push({
        text,
        start,
        end: haystack.length,
        rect: clampRect({
          x: tx[4] / viewport.width,
          y: (tx[5] - fontHeight) / viewport.height,
          w: width / viewport.width,
          h: fontHeight / viewport.height,
        }),
      });
    }
    richest = Math.max(richest, haystack.replace(/[^0-9A-Za-z\u0900-\u097F]/g, "").length);
    pages.push({ page: pageNumber, haystack, parts });
  }
  const entry = { pages, scanned: richest < SCAN_LETTER_LIMIT, ocr: null };
  if (!signal?.aborted) pageCache.set(pdfResourceKey(url), entry);
  return entry;
}

async function readOcrGeometry(url: string, pageCount: number, onProgress?: (progress: PdfSearchProgress) => void, signal?: AbortSignal) {
  const pdf = await openPdf(url);
  const { createWorker } = await import("tesseract.js");
  let worker;
  try {
    worker = await createWorker("eng+mar");
  } catch {
    worker = await createWorker("eng");
  }
  const pages: PageGeometry[] = [];
  try {
    const total = Math.min(pdf.numPages, pageCount);
    for (let pageNumber = 1; pageNumber <= total; pageNumber += 1) {
      if (signal?.aborted) break;
      onProgress?.({ phase: "ocr", page: pageNumber, pageCount: total });
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext("2d");
      if (!context) continue;
      await page.render({ canvasContext: context, viewport }).promise;
      const result = await worker.recognize(canvas);
      const words = result.data.words ?? [];
      const parts: Part[] = [];
      let haystack = "";
      for (const word of words) {
        const text = (word.text || "").replace(/\s+/g, " ").trim();
        if (!text || !word.bbox) continue;
        if (haystack) haystack += " ";
        const start = haystack.length;
        haystack += text;
        const box = word.bbox;
        parts.push({
          text,
          start,
          end: haystack.length,
          rect: clampRect({
            x: box.x0 / canvas.width,
            y: box.y0 / canvas.height,
            w: (box.x1 - box.x0) / canvas.width,
            h: (box.y1 - box.y0) / canvas.height,
          }),
        });
      }
      pages.push({ page: pageNumber, haystack, parts });
    }
  } finally {
    await worker.terminate();
  }
  return pages;
}

export async function searchPdf(
  url: string,
  query: string,
  options?: { onProgress?: (progress: PdfSearchProgress) => void; signal?: AbortSignal },
) {
  const needle = query.trim();
  if (!needle || options?.signal?.aborted) return { hits: [] as PdfSearchHit[], usedOcr: false };
  const record = await readTextGeometry(url, options?.onProgress, options?.signal);
  if (options?.signal?.aborted) return { hits: [] as PdfSearchHit[], usedOcr: false };
  let usedOcr = false;
  let pages = record.pages;
  if (record.scanned) {
    usedOcr = true;
    if (!record.ocr) {
      const ocr = await readOcrGeometry(url, record.pages.length || 1, options?.onProgress, options?.signal);
      if (options?.signal?.aborted) return { hits: [] as PdfSearchHit[], usedOcr: true };
      record.ocr = ocr;
      pageCache.set(pdfResourceKey(url), record);
    }
    pages = record.ocr ?? pages;
  }
  return { hits: hitsFromPages(pages, needle), usedOcr };
}
