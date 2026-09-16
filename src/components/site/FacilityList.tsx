import { ExternalLink, MapPin, Phone, Clock, Building2 } from "lucide-react";
import { localizeDigits } from "@/i18n/digits";
import type { FacilityRecord } from "@/lib/facilities";
import { facilityHasCoordinates } from "@/lib/facilities";

export const FacilityList = ({
  items,
  en,
  selectedId,
  onSelect,
  showMapLink = true,
}: {
  items: FacilityRecord[];
  en: boolean;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  showMapLink?: boolean;
}) => (
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {items.map((item) => {
      const selected = selectedId === item.id;
      const hasCoords = facilityHasCoordinates(item);
      const details = (item.details ?? []).slice(0, 3);
      return (
        <article
          key={item.id}
          id={`facility-${item.id}`}
          className={`group flex h-full flex-col rounded-3xl border bg-white overflow-hidden transition-all ${
            selected
              ? "border-civic-blue shadow-elegant ring-2 ring-civic-blue/25"
              : "border-border hover:border-civic-blue/25 hover:shadow-elegant"
          }`}
        >
          <button
            type="button"
            onClick={() => onSelect?.(item.id)}
            className="flex flex-1 flex-col text-left p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-civic-blue"
            aria-pressed={onSelect ? selected : undefined}
            aria-label={en ? `Select ${item.name}` : `${item.name} निवडा`}
          >
            <div className="mb-3 flex items-start gap-2">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-civic-blue/10 text-civic-blue">
                <Building2 className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className="font-serif text-lg font-bold leading-snug text-civic-blue break-words line-clamp-2"
                  title={item.name}
                >
                  {item.name}
                </h3>
                {item.zone && (
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-civic-red/90">
                    {localizeDigits(item.zone, en ? "en" : "mr")}
                  </p>
                )}
              </div>
            </div>

            {item.address ? (
              <p
                className="text-sm text-muted-foreground leading-relaxed break-words line-clamp-3 mb-4"
                title={item.address}
              >
                {localizeDigits(item.address, en ? "en" : "mr")}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground mb-4">
                {en ? "Address not listed in GIS export" : "GIS निर्यातीत पत्ता उपलब्ध नाही"}
              </p>
            )}

            <dl className="mt-auto grid gap-2 text-sm text-muted-foreground">
              {item.phone ? (
                <div className="flex items-start gap-2 min-w-0">
                  <Phone className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                  <span className="break-words">{localizeDigits(item.phone, en ? "en" : "mr")}</span>
                </div>
              ) : null}
              {item.timings ? (
                <div className="flex items-start gap-2 min-w-0">
                  <Clock className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                  <span className="break-words">{localizeDigits(item.timings, en ? "en" : "mr")}</span>
                </div>
              ) : null}
              {hasCoords ? (
                <div className="flex items-start gap-2 min-w-0">
                  <MapPin className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                  <span className="break-all">
                    {localizeDigits(`${item.latitude}, ${item.longitude}`, en ? "en" : "mr")}
                  </span>
                </div>
              ) : (
                <div className="flex items-start gap-2 min-w-0">
                  <MapPin className="h-4 w-4 text-muted-foreground/70 shrink-0 mt-0.5" aria-hidden />
                  <span className="text-xs">
                    {en ? "Map coordinates unavailable" : "नकाशा निर्देशांक उपलब्ध नाहीत"}
                  </span>
                </div>
              )}
              {details.map((d) => (
                <div key={d.labelEn} className="text-xs leading-snug min-w-0">
                  <span className="font-semibold text-civic-ink/80">
                    {en ? d.labelEn : d.labelMr}:{" "}
                  </span>
                  <span className="break-words">{localizeDigits(d.value, en ? "en" : "mr")}</span>
                </div>
              ))}
            </dl>
          </button>

          <div className="mt-auto border-t border-border/70 bg-slate-50/90 px-5 py-3 flex flex-wrap items-center gap-3">
            {showMapLink && item.googleMapsUrl ? (
              <a
                href={item.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
              >
                {hasCoords
                  ? en
                    ? "Open in Maps"
                    : "नकाशात पहा"
                  : en
                    ? "Search in Maps"
                    : "नकाशात शोधा"}{" "}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">
                {en ? "No map link available" : "नकाशा लिंक उपलब्ध नाही"}
              </span>
            )}
          </div>
        </article>
      );
    })}
  </div>
);
