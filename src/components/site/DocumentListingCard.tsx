import type { ReactNode } from "react";
import { FileText } from "lucide-react";

/** Shared document row: cream icon panel, amber accent, navy title, actions on the right. */
export function DocumentListingCard({
  title,
  meta,
  description,
  kind = "PDF",
  actions,
  onOpen,
  openLabel,
}: {
  title: string;
  meta?: ReactNode;
  description?: ReactNode;
  kind?: string;
  actions?: ReactNode;
  onOpen?: () => void;
  openLabel?: string;
}) {
  const panel =
    "relative w-14 sm:w-16 shrink-0 self-stretch bg-gradient-to-b from-[#f6f2ea] to-[#eee8dc] border-r border-[#e4dccb] flex flex-col items-center justify-center gap-1";
  const mark = (
    <>
      <span className="absolute left-1.5 top-3 bottom-3 w-0.5 rounded-full bg-civic-gold/80" />
      <FileText className="h-5 w-5 text-civic-blue" />
      <span className="text-[9px] font-bold tracking-[0.14em] text-civic-blue/70">{kind}</span>
    </>
  );

  return (
    <article className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-elegant hover:border-civic-blue/25 transition-all flex">
      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={openLabel ?? title}
          className={`${panel} hover:from-[#efe8dc] hover:to-[#e5dcc8] transition-colors`}
        >
          {mark}
        </button>
      ) : (
        <div className={panel} aria-hidden>
          {mark}
        </div>
      )}
      <div className="flex-1 min-w-0 p-3.5 sm:px-4 sm:py-3.5 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[15px] font-bold text-civic-blue leading-snug break-words">{title}</h3>
          {description ? <div className="text-xs text-muted-foreground mt-1">{description}</div> : null}
          {meta ? <div className="text-[11px] text-muted-foreground mt-1.5 break-words">{meta}</div> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-1.5 lg:shrink-0 lg:justify-end">{actions}</div> : null}
      </div>
    </article>
  );
}

export function fileKindLabel(file: string) {
  const name = file.split("?")[0].split("/").pop() ?? file;
  const ext = name.includes(".") ? name.split(".").pop()?.toLowerCase() ?? "" : "";
  if (ext === "pdf") return "PDF";
  if (ext === "doc" || ext === "docx") return "DOC";
  if (ext === "xls" || ext === "xlsx") return "XLS";
  if (!ext) return "DOC";
  return ext.slice(0, 4).toUpperCase();
}

export const documentActionClass =
  "inline-flex min-h-11 md:min-h-0 items-center gap-1.5 text-xs font-bold rounded-lg px-3 py-2 md:py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue";
