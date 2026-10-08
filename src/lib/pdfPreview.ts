export type InPagePdf = {
  url: string;
  filename: string;
  title: string;
  /** Revoke the object URL when the preview closes. */
  revoke?: boolean;
  /** 1-based page to open in the existing preview. */
  page?: number;
  /** Search term to run in the preview, when the document was opened from a match. */
  query?: string;
};

const EVENT = "csmc-open-pdf";

export function openInPagePdf(doc: InPagePdf) {
  window.dispatchEvent(new CustomEvent<InPagePdf>(EVENT, { detail: doc }));
}

export function onOpenInPagePdf(handler: (doc: InPagePdf) => void) {
  const listener = (event: Event) => {
    const detail = (event as CustomEvent<InPagePdf>).detail;
    if (detail?.url) handler(detail);
  };
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}

/** Same-origin CSMC PDF files. External websites are left unchanged. */
export function isSameOriginPdfHref(href: string) {
  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    const path = decodeURIComponent(url.pathname).toLowerCase();
    return path.endsWith(".pdf");
  } catch {
    return false;
  }
}

export function pdfNameFromHref(href: string) {
  try {
    const url = new URL(href, window.location.href);
    const name = decodeURIComponent(url.pathname.split("/").pop() || "");
    return name.toLowerCase().endsWith(".pdf") ? name : "document.pdf";
  } catch {
    return "document.pdf";
  }
}
