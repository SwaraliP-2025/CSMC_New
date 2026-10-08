import { Download, FileText } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

/** View opens the in-page preview. Download uses the download attribute so the preview host leaves it alone. */
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
