import { Link } from "react-router-dom";
import { Download, ExternalLink, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CATEGORY_LABELS } from "@/data/civicLabels";
import { localizeDigits } from "@/i18n/digits";
import { downloadCivicRecord, formatCivicDate } from "@/lib/unifiedSearch";
import type { CivicRecord } from "@/types/civicCatalog";

export function CivicRecordPreview({
  record,
  open,
  onOpenChange,
  en,
}: {
  record: CivicRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  en: boolean;
}) {
  if (!record) return null;
  const cat = CATEGORY_LABELS[record.category];
  const related = record.relatedServiceHref;
  const relatedExternal = related?.startsWith("http") || related?.startsWith("tel:");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-civic-red mb-1">
            {en ? cat.en : cat.mr}
          </p>
          <DialogTitle className="font-serif text-xl text-civic-blue leading-snug">
            {en ? record.titleEn : record.titleMr}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 rounded-full bg-civic-blue/10 text-civic-blue font-semibold">
            {en ? record.departmentEn : record.departmentMr}
          </span>
          <span>{formatCivicDate(record.publishedAt, en)}</span>
          {record.fileSize && <span>• {localizeDigits(record.fileSize, en ? "en" : "mr")}</span>}
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {en ? record.descriptionEn : record.descriptionMr}
        </p>
        <div className="rounded-xl bg-muted/40 border border-border p-4 text-sm text-muted-foreground leading-relaxed">
          {en ? record.previewEn : record.previewMr}
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {record.downloadable && (
            <button
              type="button"
              onClick={() => downloadCivicRecord(record)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              {en ? "Download PDF" : "PDF डाउनलोड"}
            </button>
          )}
          {record.href &&
            (record.external ? (
              <a
                href={record.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue/90 transition-all"
              >
                {en ? "Open" : "उघडा"} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <Link
                to={record.href}
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue/90 transition-all"
              >
                {en ? "Open page" : "पृष्ठ उघडा"} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          {related &&
            (relatedExternal ? (
              <a
                href={related}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-all"
              >
                {en
                  ? record.relatedServiceLabelEn ?? "Related service"
                  : record.relatedServiceLabelMr ?? "संबंधित सेवा"}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <Link
                to={related}
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-all"
              >
                {en
                  ? record.relatedServiceLabelEn ?? "Related service"
                  : record.relatedServiceLabelMr ?? "संबंधित सेवा"}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
