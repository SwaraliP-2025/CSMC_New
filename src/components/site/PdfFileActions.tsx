import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { driveFilePreviewUrl, verifiedDriveFileId } from "@/lib/archiveDocuments";

/** GitHub PDFs open in the in-page viewer. Verified Drive PDFs open in Google's single-file viewer. */
export function PdfFileActions({
  href,
  filename,
  title,
  className = "",
}: {
  href: string;
  filename: string;
  title: string;
  className?: string;
}) {
  const { lang } = useLang();
  const en = lang === "en";
  const viewLabel = en ? "View PDF" : "PDF पहा";
  const downloadLabel = en ? "Download" : "डाउनलोड";
  const button =
    "inline-flex min-h-11 md:min-h-0 items-center gap-1.5 text-xs font-bold rounded-lg px-3 py-2 md:py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue";
  const driveId = verifiedDriveFileId(href);
  const [driveOpen, setDriveOpen] = useState(false);
  const driveTitleId = useId();

  useEffect(() => {
    if (!driveOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDriveOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [driveOpen]);

  if (driveId) {
    const openLabel = en ? "Open PDF" : "PDF उघडा";
    const where = en
      ? "Opens an in-page Google Drive preview. Download stays on Google's preview."
      : "पृष्ठावर Google Drive पूर्वावलोकन उघडते. डाउनलोड Google च्या पूर्वावलोकनावर राहतो.";
    const fallback = en ? "Open in Google Drive" : "Google Drive मध्ये उघडा";
    const closeLabel = en ? "Close preview" : "पूर्वावलोकन बंद करा";
    return (
      <div className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
        <button
          type="button"
          onClick={() => setDriveOpen(true)}
          aria-label={`${openLabel}: ${title}. ${where}`}
          title={where}
          className={`${button} text-civic-blue border border-civic-blue hover:bg-civic-blue hover:text-white`}
        >
          <FileText className="h-3.5 w-3.5" aria-hidden />
          {openLabel}
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fallback}: ${title}`}
          className={`${button} text-civic-ink border border-border hover:border-civic-blue hover:text-civic-blue`}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          {fallback}
        </a>
        {driveOpen ? (
          <div role="dialog" aria-modal="true" aria-labelledby={driveTitleId} className="fixed inset-0 z-[2600] overflow-y-auto bg-white">
            <div className="container py-4">
              <button type="button" onClick={() => setDriveOpen(false)} className="inline-flex items-center gap-1.5 text-sm font-bold text-civic-blue">
                <X className="h-4 w-4" aria-hidden />
                {closeLabel}
              </button>
              <h2 id={driveTitleId} className="mt-3 font-serif text-xl font-bold text-civic-blue">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{where}</p>
              <iframe
                title={en ? `Google Drive preview: ${title}` : `Google Drive पूर्वावलोकन: ${title}`}
                src={driveFilePreviewUrl(driveId)}
                className="mt-4 h-[min(78dvh,920px)] min-h-[22rem] w-full rounded-xl border border-border"
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      <a href={href} aria-label={`${viewLabel}: ${title}`} className={`${button} text-civic-blue border border-civic-blue hover:bg-civic-blue hover:text-white`}>
        <FileText className="h-3.5 w-3.5" aria-hidden />
        {viewLabel}
      </a>
      <a
        href={href}
        download={filename}
        aria-label={`${downloadLabel}: ${title}`}
        className={`${button} text-civic-ink border border-border hover:border-civic-blue hover:text-civic-blue`}
      >
        <Download className="h-3.5 w-3.5" aria-hidden />
        {downloadLabel}
      </a>
    </div>
  );
}
