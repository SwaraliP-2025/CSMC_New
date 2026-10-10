let pdfjsPromise: Promise<typeof import("pdfjs-dist")> | null = null;
const openDocs = new Map<string, Promise<import("pdfjs-dist").PDFDocumentProxy>>();

/** Same document for equivalent relative and absolute URLs. Query identity is kept; fragments are not. */
export function pdfResourceKey(url: string) {
  try {
    const base = typeof window !== "undefined" ? window.location.href : "http://localhost/";
    const parsed = new URL(url, base);
    const path = decodeURIComponent(parsed.pathname);
    const params = [...parsed.searchParams.entries()].sort((left, right) => {
      const byName = left[0].localeCompare(right[0]);
      return byName === 0 ? left[1].localeCompare(right[1]) : byName;
    });
    if (params.length === 0) return path;
    const query = params
      .map(([name, value]) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
      .join("&");
    return `${path}?${query}`;
  } catch {
    return url.split("#")[0];
  }
}

/** Loads PDF.js only when a preview, text search, or OCR pass needs it. */
export function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = (async () => {
      const pdfjs = await import("pdfjs-dist");
      const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
      return pdfjs;
    })();
  }
  return pdfjsPromise;
}

export async function openPdf(url: string) {
  const key = pdfResourceKey(url);
  let pending = openDocs.get(key);
  if (!pending) {
    const href = url.split("#")[0];
    pending = loadPdfjs().then((pdfjs) => pdfjs.getDocument({ url: href }).promise);
    openDocs.set(key, pending);
    pending.catch(() => {
      if (openDocs.get(key) === pending) openDocs.delete(key);
    });
  }
  return pending;
}
