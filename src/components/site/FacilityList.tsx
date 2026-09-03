import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { localizeDigits } from "@/i18n/digits";
import type { FacilityRecord } from "@/lib/facilities";

export const FacilityList = ({
  items,
  en,
  itemLabel,
  showMapLink = true,
  hideCoordinatesRow = false,
}: {
  items: FacilityRecord[];
  en: boolean;
  itemLabel?: string;
  showMapLink?: boolean;
  hideCoordinatesRow?: boolean;
}) => (
  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {items.map((item) => (
      <Card key={item.id} className="border-border hover:border-civic-blue/20 hover:shadow-elegant transition-all rounded-3xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-civic-blue mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{localizeDigits(item.address, en ? "en" : "mr")}</p>
            </div>
            {/* Removed the category pill label (e.g. "Public Facilities") */}
          </div>
          <dl className="grid gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-civic-blue" />
              <span>{item.phone ? localizeDigits(item.phone, en ? "en" : "mr") : (en ? "No phone available" : "फोन माहिती नाही")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-civic-blue" />
              <span>{item.timings ? localizeDigits(item.timings, en ? "en" : "mr") : (en ? "Operating hours not listed" : "कार्य वेळा उपलब्ध नाही")}</span>
            </div>
            {!hideCoordinatesRow && item.latitude && item.longitude && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-civic-blue" />
                <span>{localizeDigits(`${item.latitude}, ${item.longitude}`, en ? "en" : "mr")}</span>
              </div>
            )}
          </dl>
        </div>
        <div className="p-6 pt-0 bg-slate-50 flex flex-wrap gap-2">
          {showMapLink !== false && item.googleMapsUrl && (
            <a
              href={item.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors"
            >
              {en ? "Open in Maps" : "नकाशात पहा"} <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </Card>
    ))}
  </div>
);
