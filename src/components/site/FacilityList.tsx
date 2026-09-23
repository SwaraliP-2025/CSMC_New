import { ExternalLink, MapPin, Phone, Clock, Building2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { FacilityRecord } from "@/lib/facilities";
import {
  displayFacilityDetailValue,
  displayFacilityName,
  facilityHasCoordinates,
  localizeFacilityZoneLabel,
} from "@/lib/facilities";

export const FacilityList = ({
  items,
  selectedId,
  onSelect,
  showMapLink = true,
  compact = false,
}: {
  items: FacilityRecord[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  showMapLink?: boolean;
  /** Wider grid when the map panel is hidden (e.g. zone offices / CFCs). */
  compact?: boolean;
}) => {
  const { lang, t, d } = useLang();
  const en = lang === "en";
  const f = t.facilities;

  return (
    <div
      className={`grid gap-4 ${
        compact
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "sm:grid-cols-2 xl:grid-cols-3"
      }`}
    >
      {items.map((item) => {
        const selected = selectedId === item.id;
        const hasCoords = facilityHasCoordinates(item);
        const name = displayFacilityName(item.name, lang, d);
        // Show Zone labels only — hide Ward/प्रभाग (redundant on police/fire cards).
        const isWard = /^Ward\s+/i.test(item.zone?.trim() ?? "");
        const zoneLabel = !isWard
          ? localizeFacilityZoneLabel(item.zone, lang, d)
          : "";
        const details = (item.details ?? [])
          .filter((det) => {
            const label = det.labelEn.toLowerCase();
            if (label === "ward") return false;
            if (!item.zone) return true;
            return label !== "zone";
          })
          .slice(0, 3);

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
              aria-label={`${f.selectAria} ${name}`}
            >
              <div className="mb-3 flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-civic-blue/10 text-civic-blue">
                  <Building2 className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3
                    className="font-serif text-lg font-bold leading-snug text-civic-blue break-words"
                    title={name}
                  >
                    {name}
                  </h3>
                  {zoneLabel ? (
                    <p className="mt-1 text-[11px] font-semibold tracking-wide text-civic-red/90">
                      {zoneLabel}
                    </p>
                  ) : null}
                </div>
              </div>

              {item.address ? (
                <p
                  className="text-sm text-muted-foreground leading-relaxed break-words line-clamp-3 mb-3"
                  title={item.address}
                >
                  <span className="inline-flex items-start gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                    <span>{d(item.address)}</span>
                  </span>
                </p>
              ) : null}

              <dl className="mt-auto grid gap-2 text-sm text-muted-foreground">
                {item.phone ? (
                  <div className="flex items-start gap-2 min-w-0">
                    <Phone className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                    <span className="break-words">{d(item.phone)}</span>
                  </div>
                ) : null}
                {item.timings ? (
                  <div className="flex items-start gap-2 min-w-0">
                    <Clock className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                    <span className="break-words">{d(item.timings)}</span>
                  </div>
                ) : null}
                {hasCoords ? (
                  <div className="flex items-start gap-2 min-w-0">
                    <MapPin className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                    <span className="break-all">{d(`${item.latitude}, ${item.longitude}`)}</span>
                  </div>
                ) : null}
                {details.map((det) => (
                  <div key={det.labelEn} className="text-xs leading-snug min-w-0">
                    <span className="font-semibold text-civic-ink/80">
                      {en ? det.labelEn : det.labelMr}:{" "}
                    </span>
                    <span className="break-words">
                      {displayFacilityDetailValue(det.value, lang, d)}
                    </span>
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
                  {hasCoords ? f.openInMaps : f.searchInMaps}{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
};
