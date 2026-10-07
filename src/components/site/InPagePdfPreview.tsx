import { useEffect, useRef } from "react";
import { Download, X } from "lucide-react";

/**
 * Same-page PDF preview. The file stays in an iframe on the current page.
 * Download uses the file URL directly and does not open a new tab.
 */
export function InPagePdfPreview({
  title,
  fileUrl,
  onClose,
  closeLabel,
  downloadLabel,
}: {
  title: string;
  fileUrl: string;
  onClose: () => void;
  closeLabel: string;
  downloadLabel: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [fileUrl]);

  return (
    <div
      ref={panelRef}
      className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-b border-border bg-civic-blue/[0.04]">
        <p className="font-semibold text-sm text-civic-ink min-w-0">{title}</p>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={fileUrl}
            download
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue/90 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            {downloadLabel}
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            {closeLabel}
          </button>
        </div>
      </div>
      <iframe
        title={title}
        src={fileUrl}
        className="w-full h-[70vh] min-h-[420px] bg-muted/30"
      />
    </div>
  );
}
