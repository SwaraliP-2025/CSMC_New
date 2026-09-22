import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useLang } from "@/i18n/LanguageContext";
import type { FacilityRecord } from "@/lib/facilities";
import { displayFacilityName, facilityHasCoordinates } from "@/lib/facilities";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const CSMC_CENTER: [number, number] = [19.877, 75.343];

function FlyToSelection({ item }: { item: FacilityRecord | null }) {
  const map = useMap();
  useEffect(() => {
    if (!item || !facilityHasCoordinates(item)) return;
    map.flyTo([Number(item.latitude), Number(item.longitude)], 16, { duration: 0.6 });
  }, [item, map]);
  return null;
}

function FitPoints({ items }: { items: FacilityRecord[] }) {
  const map = useMap();
  useEffect(() => {
    const pts = items
      .filter(facilityHasCoordinates)
      .map((i) => L.latLng(Number(i.latitude), Number(i.longitude)));
    if (pts.length === 0) return;
    if (pts.length === 1) {
      map.setView(pts[0], 15);
      return;
    }
    map.fitBounds(L.latLngBounds(pts).pad(0.15));
  }, [items, map]);
  return null;
}

export function FacilityMap({
  items,
  selectedId,
  onSelect,
}: {
  items: FacilityRecord[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const { lang, t, d } = useLang();
  const mappable = useMemo(() => items.filter(facilityHasCoordinates), [items]);
  const selected = items.find((i) => i.id === selectedId) ?? null;

  if (mappable.length === 0) {
    return (
      <div className="flex h-full min-h-[16rem] items-center justify-center rounded-3xl border border-dashed border-border bg-slate-50 px-6 text-center text-sm text-muted-foreground">
        {t.facilities.mapUnavailable}
      </div>
    );
  }

  return (
    <div className="h-full min-h-[18rem] overflow-hidden rounded-3xl border border-border shadow-sm">
      <MapContainer
        center={CSMC_CENTER}
        zoom={12}
        className="h-full min-h-[18rem] w-full z-0"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitPoints items={mappable} />
        <FlyToSelection item={selected} />
        {mappable.map((item) => (
          <Marker
            key={item.id}
            position={[Number(item.latitude), Number(item.longitude)]}
            eventHandlers={{
              click: () => onSelect(item.id),
            }}
            opacity={selectedId && selectedId !== item.id ? 0.55 : 1}
          >
            <Popup>
              <div className="text-sm font-semibold text-civic-blue max-w-[14rem]">
                {displayFacilityName(item.name, lang, d)}
              </div>
              {item.address && (
                <div className="text-xs text-muted-foreground mt-1">{d(item.address)}</div>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
