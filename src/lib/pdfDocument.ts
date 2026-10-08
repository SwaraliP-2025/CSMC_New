let pdfjsPromise: Promise<typeof import("pdfjs-dist")> | null = null;
const openDocs = new Map<string, Promise<import("pdfjs-dist").PDFDocumentProxy>>();

/** Same document, whether the caller used a relative path or a full URL. */
export function pdfResourceKey(url: string) {
  try {
    const base = typeof window !== "undefined" ? window.location.href : "http://localhost/";
    return decodeURIComponent(new URL(url, base).pathname);
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
