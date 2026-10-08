import { openPdf } from "@/lib/pdfDocument";
import { rememberPdfText } from "@/lib/pdfTextSearch";

/**
 * On-demand OCR for one PDF. Tesseract and its language data load only when this runs.
 * The first two pages are read so a large scan does not block the page indefinitely.
 */
export async function ocrPdf(url: string, maxPages = 2) {
  const pdf = await openPdf(url);
  const { createWorker } = await import("tesseract.js");
  let worker;
  try {
    worker = await createWorker("eng+mar");
  } catch {
    worker = await createWorker("eng");
  }
  const pages = Math.min(pdf.numPages, maxPages);
  const chunks: string[] = [];
  try {
    for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext("2d");
      if (!context) continue;
      await page.render({ canvasContext: context, viewport }).promise;
      const result = await worker.recognize(canvas);
      if (result.data.text.trim()) chunks.push(result.data.text.trim());
    }
  } finally {
    await worker.terminate();
  }
  const text = chunks.join("\n").replace(/\s+/g, " ").trim();
  return rememberPdfText(url, text, text.length < 40);
}
