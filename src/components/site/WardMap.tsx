/**
 * WardMap – Interactive ward boundary map for Chhatrapati Sambhajinagar.
 *
 * Workflow:
 *  1. Loads public/data/wards.json (GeoJSON, CRS EPSG:32643 – UTM Zone 43N)
 *  2. Reprojects every coordinate to WGS84 using proj4 (client-side, one time)
 *  3. Renders all ward polygons with Leaflet + react-leaflet
 *  4. Address search via Nominatim → reverse geocode → point-in-polygon highlight
 */

import { useEffect, useRef, useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import proj4 from "proj4";
import "leaflet/dist/leaflet.css";
import { Search, MapPin, X, Loader2, Info } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { fromDevanagariDigits } from "@/i18n/digits";
import { useColorBlind } from "@/i18n/ColorBlindContext";

// ── proj4 definitions ──────────────────────────────────────────────────────────
const UTM43N =
  "+proj=utm +zone=43 +datum=WGS84 +units=m +no_defs +type=crs";
const WGS84 = "+proj=longlat +datum=WGS84 +no_defs +type=crs";

const CITY_SEARCH_TERMS = [
  "Chhatrapati Sambhajinagar",
  "Aurangabad",
];
const NOMINATIM_VIEWBOX = [74.95, 19.6, 75.7, 20.05];

// Convert a single [easting, northing] → [lng, lat]
function utmToWgs84(coord: number[]): [number, number] {
  return proj4(UTM43N, WGS84, [coord[0], coord[1]]) as [number, number];
}

// Deep-reproject a GeoJSON coordinate array (handles Polygon / MultiPolygon rings)
function reprojectCoords(coords: unknown[]): unknown[] {
  if (typeof (coords as number[])[0] === "number") {
    // leaf node – actual coordinate pair
    const [lng, lat] = utmToWgs84(coords as number[]);
    return [lng, lat];
  }
  return (coords as unknown[][]).map(reprojectCoords);
}

// Reproject an entire GeoJSON FeatureCollection in place (mutates a clone)
function reprojectFeatureCollection(
  fc: GeoJSON.FeatureCollection
): GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon> {
  return {
    ...fc,
    features: fc.features.map((f) => {
      const geometry = f.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
      const transformedCoords = reprojectCoords(geometry.coordinates);

      const transformedGeometry =
        geometry.type === "Polygon"
          ? ({
              ...geometry,
              coordinates: transformedCoords as GeoJSON.Polygon["coordinates"],
            } as GeoJSON.Polygon)
          : ({
              ...geometry,
              coordinates: transformedCoords as GeoJSON.MultiPolygon["coordinates"],
            } as GeoJSON.MultiPolygon);

      return {
        ...f,
        geometry: transformedGeometry,
      } as GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
    }),
  };
}

// ── Types ──────────────────────────────────────────────────────────────────────
interface WardProperties {
  name: string;
  ward_name: string;
  ward_no: string;
  zone_no: number;
  zone_name: string;
  zonoffname: string | null;
  zonoffno: string | null;
  wardoffname: string | null;
  wardoffno: string | null;
  wardengineername: string | null;
  wardengineerno: string | null;
  water_lineman_1: string | null;
  water_lineman_1_mobileno: string | null;
  garbagesupervisorname: string | null;
  garbagesupervisormobileno: string | null;
}

interface Prabhag {
  no: string;
  population: number;
  sc: number;
  st: number;
  seats: number;
  localities: string[];
}

// ── Zone definitions with approximate centroids (for distance-based fallback) ──
interface ZoneDefinition {
  zoneNo: number;
  code: string;
  codeMr: string;
  name: string;
  nameMr: string;
  center: L.LatLng;
}

const ZONE_DEFINITIONS: ZoneDefinition[] = [
  { zoneNo: 1, code: "A1", codeMr: "A१", name: "Zone A1 – Town Hall", nameMr: "झोन A१ – टाऊन हॉल", center: L.latLng(19.89408, 75.31156) },
  { zoneNo: 2, code: "G2", codeMr: "G२", name: "Zone G2 – Mondha Naka Sillekhana", nameMr: "झोन G२ – मोंढा नका सिल्लेखाना", center: L.latLng(19.88206, 75.332) },
  { zoneNo: 3, code: "C3", codeMr: "C३", name: "Zone C3 – Central Naka", nameMr: "झोन C३ – सेंट्रल नका", center: L.latLng(19.88958, 75.34745) },
  { zoneNo: 4, code: "H4", codeMr: "H४", name: "Zone H4 – Saubhagya Mangalkaryalya", nameMr: "झोन H४ – सौभाग्य मंगलकार्यालय", center: L.latLng(19.91109, 75.3489) },
  { zoneNo: 5, code: "B5", codeMr: "B५", name: "Zone B5 – Cidco N6", nameMr: "झोन B५ – सिडको N६", center: L.latLng(19.89132, 75.37212) },
  { zoneNo: 6, code: "E6", codeMr: "E६", name: "Zone E6 – Cidco N5", nameMr: "झोन E६ – सिडको N५", center: L.latLng(19.86555, 75.37945) },
  { zoneNo: 7, code: "F7", codeMr: "F७", name: "Zone F7 – Jawahar Colony", nameMr: "झोन F७ – जवाहर कॉलनी", center: L.latLng(19.86512, 75.35166) },
  { zoneNo: 8, code: "I8", codeMr: "I८", name: "Zone I8 – Satara Parisar", nameMr: "झोन I८ – सातारा परिसर", center: L.latLng(19.84612, 75.32003) },
  { zoneNo: 9, code: "D9", codeMr: "D९", name: "Zone D9 – Krantichowk", nameMr: "झोन D९ – क्रांतीचौक", center: L.latLng(19.86771, 75.32885) },
  // J10: official Railway Station zone — pin near CSMC railway-station ward (Hamalwada)
  { zoneNo: 10, code: "J10", codeMr: "J१०", name: "Zone J10 – Railway Station", nameMr: "झोन J१० – रेल्वे स्टेशन परिसर", center: L.latLng(19.8598, 75.3114) },
];

/**
 * Curated landmark pins so searches like "Railway station" land on the real place
 * (Nominatim / ward-name centroid can otherwise place the marker elsewhere).
 */
const KNOWN_LANDMARKS: {
  match: RegExp;
  lat: number;
  lng: number;
  wardNo?: string;
  zoneNo?: number;
  labelEn: string;
  labelMr: string;
}[] = [
  {
    match:
      /railway\s*stati|रेल्वे\s*स्टे|rail\s*way\s*stati|chs\s*rly|aurangabad\s*(jn|junction)|sambhajinagar\s*railway|chhatrapati\s*sambhajinagar\s*railway/i,
    lat: 19.8597998,
    lng: 75.3114008,
    wardNo: "108",
    zoneNo: 10,
    labelEn: "Chhatrapati Sambhajinagar Railway Station",
    labelMr: "छत्रपती संभाजीनगर रेल्वे स्टेशन",
  },
];

/** Map official zone highlight → ward polygons (zone 10 has no zone_no=10 in legacy geo). */
function featureMatchesHighlightedZone(props: WardProperties, zoneNo: number): boolean {
  if (props.zone_no === zoneNo) return true;
  if (zoneNo === 10) {
    return props.ward_no === "108" || /RAILWAY\s*STATION/i.test(props.ward_name || "");
  }
  return false;
}

// ── Colour helpers ─────────────────────────────────────────────────────────────
const ZONE_COLORS: Record<number, string> = {
  1: "#3B82F6",
  2: "#10B981",
  3: "#84CC16",
  4: "#EF4444",
  5: "#8B5CF6",
  6: "#EC4899",
  7: "#14B8A6",
  8: "#F97316",
  9: "#6366F1",
  10: "#0EA5E9",
};

/** Okabe–Ito–inspired palette — distinguishable under red–green CVD */
const ZONE_COLORS_COLORBLIND: Record<number, string> = {
  1: "#0072B2",
  2: "#E69F00",
  3: "#56B4E9",
  4: "#009E73",
  5: "#F0E442",
  6: "#D55E00",
  7: "#CC79A7",
  8: "#332288",
  9: "#88CCEE",
  10: "#44AA99",
};

function wardStyle(
  feature: GeoJSON.Feature | undefined,
  highlighted = false,
  zoneHighlighted = false,
  zoneColors: Record<number, string> = ZONE_COLORS
): L.PathOptions {
  const zoneNo = (feature?.properties as WardProperties)?.zone_no ?? 0;
  const fill = zoneColors[zoneNo] ?? "#94A3B8";
  return {
    color: highlighted ? "#0072B2" : zoneHighlighted ? "#0072B2" : "#1a3a6b",
    weight: highlighted ? 3 : zoneHighlighted ? 2.5 : 1,
    fillColor: highlighted ? "#E69F00" : fill,
    fillOpacity: highlighted ? 0.55 : zoneHighlighted ? 0.65 : 0.25,
    opacity: 1,
  };
}

// ── Point-in-polygon using robust GeoJSON containment rules ────────────────
function isPointInFeature(
  latlng: L.LatLng,
  feature: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>
): boolean {
  const geom = feature.geometry;

  if (geom.type === "Polygon") {
    return isPointInPolygon(latlng, geom.coordinates);
  }

  return geom.coordinates.some((polygon) =>
    isPointInPolygon(latlng, polygon)
  );
}

function isPointInPolygon(
  latlng: L.LatLng,
  coordinates: GeoJSON.Polygon["coordinates"]
): boolean {
  if (!coordinates.length) return false;

  const exterior = coordinates[0];
  if (!pointInRing(latlng, exterior)) return false;

  for (let i = 1; i < coordinates.length; i += 1) {
    if (pointInRing(latlng, coordinates[i])) {
      return false;
    }
  }

  return true;
}

function pointInRing(point: L.LatLng, ring: GeoJSON.Position[]): boolean {
  const px = point.lng;
  const py = point.lat;
  let inside = false;

  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersects =
      (yi > py) !== (yj > py) &&
      px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }

  return inside;
}

function getFeatureCentroid(feature: GeoJSON.Feature): L.LatLng {
  const geom = feature.geometry as GeoJSON.MultiPolygon | GeoJSON.Polygon;
  const coords =
    geom.type === "MultiPolygon"
      ? geom.coordinates.flat(2)
      : geom.coordinates.flat(1);

  let sumLat = 0;
  let sumLng = 0;
  let count = 0;
  for (const pos of coords as GeoJSON.Position[]) {
    sumLng += pos[0];
    sumLat += pos[1];
    count += 1;
  }
  return L.latLng(sumLat / count, sumLng / count);
}

function findNearestWard(latlng: L.LatLng, features: GeoJSON.Feature[]): { feature: GeoJSON.Feature; distance: number } | null {
  let best: { feature: GeoJSON.Feature; distance: number } | null = null;
  for (const feature of features) {
    const centroid = getFeatureCentroid(feature);
    const distance = latlng.distanceTo(centroid);
    if (!best || distance < best.distance) {
      best = { feature, distance };
    }
  }
  return best;
}

// ── Find zone containing a point (any ward in that zone) ────────────────────────
function findZoneForPoint(latlng: L.LatLng, features: GeoJSON.Feature[]): { zoneNo: number; zoneName: string } | null {
  const zoneMap: Record<number, boolean> = {};
  
  for (const feature of features) {
    const props = feature.properties as WardProperties;
    if (isPointInFeature(latlng, feature)) {
      return { zoneNo: props.zone_no, zoneName: props.zone_name };
    }
  }
  
  // If no exact match, find nearest and use its zone
  const nearest = findNearestWard(latlng, features);
  if (nearest) {
    const props = nearest.feature.properties as WardProperties;
    return { zoneNo: props.zone_no, zoneName: props.zone_name };
  }
  
  return null;
}

// ── Find nearest zone by distance to zone centroids (distance-based fallback) ─
function findNearestZone(latlng: L.LatLng): { zoneNo: number; zoneName: string } | null {
  let nearest: ZoneDefinition | null = null;
  let minDistance = Infinity;

  for (const zone of ZONE_DEFINITIONS) {
    const distance = latlng.distanceTo(zone.center);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = zone;
    }
  }

  if (nearest) {
    return { zoneNo: nearest.zoneNo, zoneName: nearest.name };
  }

  return null;
}

// ── FlyTo helper component ─────────────────────────────────────────────────────
function FlyToLocation({ latlng, zoom = 16 }: { latlng: L.LatLng | null; zoom?: number }) {
  const map = useMap();
  useEffect(() => {
    if (latlng) map.flyTo(latlng, zoom, { animate: true, duration: 1.2 });
  }, [latlng, map, zoom]);
  return null;
}

// ── Map click handler component ─────────────────────────────────────────────────
interface MapClickHandlerProps {
  geoData: GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon> | null;
  onLocationFound: (ward: WardProperties, latlng: L.LatLng, matchMode: "exact" | "nearest", featureId?: string) => void;
  onZoneFound?: (zone: { zoneNo: number; zoneName: string }, latlng: L.LatLng) => void;
}

function MapClickHandler({ geoData, onLocationFound, onZoneFound }: MapClickHandlerProps) {
  const map = useMap();

  useEffect(() => {
    if (!geoData) return;

    const handleMapClick = (e: L.LeafletMouseEvent) => {
      const latlng = e.latlng;
      let exactMatch: { ward: WardProperties; feature: GeoJSON.Feature } | null = null;

      // Try exact match first
      for (const feature of geoData.features) {
        if (isPointInFeature(latlng, feature)) {
          exactMatch = {
            ward: feature.properties as WardProperties,
            feature,
          };
          break;
        }
      }

      if (exactMatch) {
        onLocationFound(exactMatch.ward, latlng, "exact", exactMatch.feature.id as string);
      } else {
        // Try nearest ward
        const nearest = findNearestWard(latlng, geoData.features);
        if (nearest) {
          onLocationFound(nearest.feature.properties as WardProperties, latlng, "nearest", nearest.feature.id as string);
        } else if (onZoneFound) {
          // If no ward found, try zone-based detection
          const zone = findNearestZone(latlng);
          if (zone) {
            onZoneFound(zone, latlng);
          }
        }
      }
    };

    map.on("click", handleMapClick);
    return () => {
      map.off("click", handleMapClick);
    };
  }, [map, geoData, onLocationFound]);

  return null;
}

// ── Geocoding helper ──────────────────────────────────────────────────────────
type GeocodeResult = {
  latlng: L.LatLng;
  label: string;
  osmClass?: string;
  osmType?: string;
};

function normalizeText(text: string) {
  return fromDevanagariDigits(text)
    .trim()
    .toLowerCase()
    .replace(/\(part\)/gi, "")
    .replace(/[^a-z0-9\u0900-\u097f\s.-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreNameMatch(query: string, candidate: string): number {
  const q = normalizeText(query);
  const c = normalizeText(candidate);
  if (!q || !c) return 0;
  if (c === q) return 100;
  if (c.startsWith(q) && q.length >= 4) return 90;
  const qWords = q.split(" ").filter((w) => w.length > 1);
  const cWords = c.split(" ").filter((w) => w.length > 1);
  const commonWords = new Set(["nagar", "colony", "society", "road", "chowk", "area", "part", "gaav", "wadi"]);
  const meaningful = qWords.filter((w) => !commonWords.has(w) && w.length >= 3);
  if (
    meaningful.length >= 1 &&
    meaningful.every((w) => cWords.some((cw) => cw === w || (w.length >= 4 && cw.startsWith(w)))) &&
    qWords.filter((w) => commonWords.has(w)).every((w) => cWords.includes(w) || meaningful.length >= 2)
  ) {
    // Prefer matches that share distinctive tokens (e.g. "balaji"), not only "nagar"
    if (meaningful.every((w) => cWords.some((cw) => cw === w))) return 88;
    return 75;
  }
  if (q.length >= 8 && c.includes(q)) return 70;
  if (qWords.length === 1 && qWords[0].length >= 6 && !commonWords.has(qWords[0]) && cWords.some((cw) => cw === qWords[0])) {
    return 65;
  }
  if (c.length >= 8 && q.includes(c)) return 35;
  return 0;
}

function findBestLocalityMatch(
  prabhagMap: Record<string, Prabhag>,
  query: string
): { prabhag: Prabhag; locality: string; score: number } | null {
  let best: { prabhag: Prabhag; locality: string; score: number } | null = null;
  for (const prabhag of Object.values(prabhagMap)) {
    for (const locality of prabhag.localities) {
      const score = scoreNameMatch(query, locality);
      if (score > 0 && (!best || score > best.score)) {
        best = { prabhag, locality, score };
      }
    }
  }
  return best;
}

function findWardFeature(
  features: GeoJSON.Feature[],
  query: string
): { feature: GeoJSON.Feature; score: number } | null {
  const q = normalizeText(query);
  const digits = q.replace(/\D/g, "");
  let best: { feature: GeoJSON.Feature; score: number } | null = null;

  for (const feature of features) {
    const props = feature.properties as WardProperties;
    let score = 0;
    if (digits && (props.ward_no === digits || props.ward_no.replace(/^0+/, "") === digits.replace(/^0+/, ""))) {
      score = 100;
    } else {
      score = Math.max(scoreNameMatch(query, props.ward_name), scoreNameMatch(query, props.name));
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { feature, score };
    }
  }
  return best;
}

function findWardForLocality(
  features: GeoJSON.Feature[],
  locality: string
): GeoJSON.Feature | null {
  const hit = findWardFeature(features, locality);
  if (hit && hit.score >= 60) return hit.feature;
  // Fallback: any ward_name that contains the full locality phrase
  const loc = normalizeText(locality);
  for (const feature of features) {
    const props = feature.properties as WardProperties;
    if (normalizeText(props.ward_name).includes(loc) && loc.length >= 5) {
      return feature;
    }
  }
  // Token / compacted fallback (e.g. "Nageshwarwadi" vs "NAGESHWAR WADI")
  const compact = loc.replace(/\s/g, "");
  const tokens = loc.split(" ").filter((w) => w.length >= 5);
  if (tokens.length || compact.length >= 6) {
    let best: { feature: GeoJSON.Feature; score: number } | null = null;
    for (const feature of features) {
      const props = feature.properties as WardProperties;
      const name = normalizeText(props.ward_name);
      const nameCompact = name.replace(/\s/g, "");
      let score = tokens.reduce(
        (acc, t) =>
          acc +
          (name.includes(t) || nameCompact.includes(t.replace(/\s/g, "")) ? 1 : 0),
        0
      );
      if (compact.length >= 6 && (nameCompact.includes(compact) || compact.includes(nameCompact))) {
        score += 2;
      }
      if (score > 0 && (!best || score > best.score)) best = { feature, score };
    }
    if (best) return best.feature;
  }
  return null;
}

/**
 * Localities often aren't ward names (e.g. Nageshwarwadi). Resolve a ward by
 * matching any locality listed under the same prabhag (e.g. Samarth Nagar → ward 68).
 */
function findWardForPrabhag(
  features: GeoJSON.Feature[],
  prabhag: Prabhag,
  preferredLocality?: string
): GeoJSON.Feature | null {
  if (preferredLocality) {
    const direct = findWardForLocality(features, preferredLocality);
    if (direct) return direct;
  }
  let best: { feature: GeoJSON.Feature; score: number } | null = null;
  for (const loc of prabhag.localities) {
    const hit = findWardFeature(features, loc);
    if (hit && hit.score >= 70 && (!best || hit.score > best.score)) {
      best = hit;
    }
  }
  return best?.feature ?? null;
}

/** Prefer a pin that actually lies inside the ward polygon. */
function safePinForFeature(feature: GeoJSON.Feature): L.LatLng {
  const typed = feature as GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
  const centroid = getFeatureCentroid(feature);
  if (isPointInFeature(centroid, typed)) return centroid;
  const bounds = L.geoJSON(feature).getBounds();
  const center = bounds.getCenter();
  if (isPointInFeature(center, typed)) return center;
  // Sample toward center of bounds until a point is inside
  for (let i = 0; i < 12; i++) {
    const t = (i + 1) / 13;
    const p = L.latLng(
      bounds.getSouth() + (bounds.getNorth() - bounds.getSouth()) * t,
      bounds.getWest() + (bounds.getEast() - bounds.getWest()) * 0.5
    );
    if (isPointInFeature(p, typed)) return p;
  }
  return center;
}

function rankGeocodeResults(results: GeocodeResult[], query: string): GeocodeResult[] {
  const qWords = normalizeText(query).split(" ").filter((w) => w.length > 2);
  const wantsRailway = /railway|रेल्वे|station|स्टेशन/i.test(query);
  return [...results].sort((a, b) => {
    const score = (r: GeocodeResult) => {
      const label = normalizeText(r.label);
      let s = qWords.reduce((acc, w) => acc + (label.includes(w) ? 1 : 0), 0);
      if (
        wantsRailway &&
        (r.osmClass === "railway" ||
          r.osmType === "station" ||
          /railway\s*station/i.test(r.label))
      ) {
        s += 5;
      }
      return s;
    };
    return score(b) - score(a);
  });
}

async function geocodeAddress(address: string): Promise<GeocodeResult[]> {
  const trimmed = address.trim();
  // Free OpenStreetMap Nominatim only (no paid Google API)
  const viewbox = NOMINATIM_VIEWBOX.join(",");
  const lower = trimmed.toLowerCase();
  const isRailway =
    /railway\s*stati|रेल्वे\s*स्टे|aurangabad\s*(jn|junction)|sambhajinagar\s*railway/i.test(
      trimmed
    );
  const queryUrls = [
    ...(isRailway
      ? [
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            `Chhatrapati Sambhajinagar Railway Station, Maharashtra, India`
          )}&format=json&limit=8&countrycodes=in&viewbox=${viewbox}&bounded=1`,
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            `Aurangabad Junction Railway Station, Maharashtra, India`
          )}&format=json&limit=8&countrycodes=in&viewbox=${viewbox}&bounded=1`,
        ]
      : []),
    lower.includes("sillekhana")
      ? `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          `Sillekhana, Aurangabad, Maharashtra, India`
        )}&format=json&limit=8&countrycodes=in&viewbox=${viewbox}&bounded=1`
      : `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          `${trimmed}, Chhatrapati Sambhajinagar, Maharashtra, India`
        )}&format=json&limit=8&countrycodes=in&viewbox=${viewbox}&bounded=1`,
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      `${trimmed}, Aurangabad, Maharashtra, India`
    )}&format=json&limit=8&countrycodes=in&viewbox=${viewbox}&bounded=1`,
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      `${trimmed}, Aurangabad`
    )}&format=json&limit=8&countrycodes=in&viewbox=${viewbox}&bounded=1`,
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(trimmed)}&format=json&limit=5&countrycodes=in&viewbox=${viewbox}&bounded=1`,
  ];

  for (const url of queryUrls) {
    const resp = await fetch(url, {
      headers: { "Accept-Language": "en", "User-Agent": "CSMC-WardMap/1.0" },
    });
    if (!resp.ok) continue;

    const data = await resp.json();
    if (!Array.isArray(data) || !data.length) continue;

    const results = data
      .filter((item: any) => item?.lat && item?.lon)
      .map(
        (item: any) =>
          ({
            latlng: L.latLng(parseFloat(item.lat), parseFloat(item.lon)),
            label: item.display_name ?? trimmed,
            osmClass: item.class,
            osmType: item.type,
          }) as GeocodeResult
      );

    if (results.length) {
      return rankGeocodeResults(results, trimmed);
    }
  }

  return [];
}

// ── Fix Leaflet default marker icon broken by bundlers ─────────────────────────
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ── Main component ─────────────────────────────────────────────────────────────
const CSMC_CENTER: LatLngExpression = [19.877, 75.343];

export const WardMap = () => {
  const { lang, d } = useLang();
  const { enabled: colorBlind } = useColorBlind();
  const en = lang === "en";
  const zoneColors = colorBlind ? ZONE_COLORS_COLORBLIND : ZONE_COLORS;

  const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection<GeoJSON.Polygon | GeoJSON.MultiPolygon> | null>(null);
  const [prabhags, setPrabhags] = useState<Record<string, Prabhag>>({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [markerPos, setMarkerPos] = useState<L.LatLng | null>(null);
  const [selectedWard, setSelectedWard] = useState<WardProperties | null>(null);
  const [selectedPrabhag, setSelectedPrabhag] = useState<Prabhag | null>(null);
  const [matchedLocality, setMatchedLocality] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<{ zoneNo: number; zoneName: string } | null>(null);
  const [wardMatchMode, setWardMatchMode] = useState<"exact" | "nearest" | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [highlightedZoneNo, setHighlightedZoneNo] = useState<number | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);
  const resultCardRef = useRef<HTMLDivElement | null>(null);

  // Scroll details card into view when a ward/prabhag result appears
  useEffect(() => {
    if (selectedWard || selectedPrabhag) {
      resultCardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedWard, selectedPrabhag]);

  // Load and reproject ward data once
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/wards.json`)
      .then((r) => r.json())
      .then((raw: GeoJSON.FeatureCollection) => {
        setGeoData(reprojectFeatureCollection(raw));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Load prabhag data
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/prabhag-2025.json`)
      .then((r) => r.json())
      .then((data: { prabhags: Prabhag[] }) => {
        const map = data.prabhags.reduce((acc, p) => {
          acc[p.no] = p;
          return acc;
        }, {} as Record<string, Prabhag>);
        setPrabhags(map);
      })
      .catch(console.error);
  }, []);

  // Re-style all layers whenever highlight changes
  useEffect(() => {
    if (!geoJsonLayerRef.current) return;
    geoJsonLayerRef.current.eachLayer((layer) => {
      const fl = layer as L.GeoJSON;
      const feature = fl.feature as GeoJSON.Feature;
      const id = feature?.id as string | undefined;
      const props = feature?.properties as WardProperties | undefined;
      const isHighlighted = id === highlightedId;
      const isZoneHighlighted =
        !isHighlighted &&
        highlightedZoneNo !== null &&
        !!props &&
        featureMatchesHighlightedZone(props, highlightedZoneNo);
      const style = wardStyle(feature, isHighlighted, isZoneHighlighted, zoneColors);
      (layer as L.Path).setStyle(style);
    });
  }, [highlightedId, highlightedZoneNo, zoneColors]);

  // Helper to set ward and load its prabhag
  const setWardAndPrabhag = useCallback((ward: WardProperties, latlng: L.LatLng, matchMode: "exact" | "nearest", featureId?: string, overridePrabhag?: Prabhag | null) => {
    setSelectedWard(ward);
    setMarkerPos(latlng);
    setWardMatchMode(matchMode);
    // Use featureId directly if provided, otherwise reconstruct from ward_no
    setHighlightedId(featureId ?? `shp_ward_boundary.${ward.ward_no}`);
    
    // If an override prabhag (from locality match) is provided, prefer it
    if (overridePrabhag !== undefined) {
      setSelectedPrabhag(overridePrabhag);
      return;
    }

    // Try to find corresponding prabhag using ward number
    const prabhagNo = ward.ward_no.padStart(2, "0");
    const prabhag = prabhags[prabhagNo];
    if (prabhag) {
      setSelectedPrabhag(prabhag);
    } else {
      setSelectedPrabhag(null);
    }
  }, [prabhags]);

  const applyLocalityResult = useCallback(
    async (match: { prabhag: Prabhag; locality: string; score: number }) => {
      setSelectedPrabhag(match.prabhag);
      setMatchedLocality(match.locality);
      if (!geoData) return true;

      // Prefer a ward named like this locality; else any ward that matches
      // another locality in the same prabhag (Nageshwarwadi → Samarth Nagar ward).
      let wardFeature = findWardForPrabhag(
        geoData.features,
        match.prabhag,
        match.locality
      );
      let pin: L.LatLng | null = null;

      // Geocode when OSM knows the place — refines pin / containing ward
      try {
        const geoResults = await geocodeAddress(
          `${match.locality}, Chhatrapati Sambhajinagar`
        );
        const ranked = geoResults.length
          ? rankGeocodeResults(geoResults, match.locality)
          : [];
        for (const r of ranked) {
          const containing = geoData.features.find((f) =>
            isPointInFeature(
              r.latlng,
              f as GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>
            )
          );
          if (containing) {
            wardFeature = containing;
            pin = r.latlng;
            break;
          }
        }
        if (!pin && ranked[0]) pin = ranked[0].latlng;
      } catch {
        /* Nominatim optional — still try ward polygon pin below */
      }

      if (wardFeature) {
        if (!pin) pin = safePinForFeature(wardFeature);
        // Keep pin inside ward when geocode landed just outside the boundary
        if (
          pin &&
          !isPointInFeature(
            pin,
            wardFeature as GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>
          )
        ) {
          pin = safePinForFeature(wardFeature);
        }
        setWardAndPrabhag(
          wardFeature.properties as WardProperties,
          pin,
          "exact",
          wardFeature.id as string,
          match.prabhag
        );
        return true;
      }

      if (pin) {
        const nearest = findNearestWard(pin, geoData.features);
        if (nearest) {
          setWardAndPrabhag(
            nearest.feature.properties as WardProperties,
            pin,
            "nearest",
            nearest.feature.id as string,
            match.prabhag
          );
          return true;
        }
        setMarkerPos(pin);
      } else {
        setSelectedWard(null);
        setMarkerPos(null);
        setWardMatchMode(null);
        setHighlightedId(null);
      }
      return true;
    },
    [geoData, setWardAndPrabhag]
  );

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    setSearchError("");
    setWardMatchMode(null);
    setSelectedWard(null);
    setSelectedPrabhag(null);
    setMatchedLocality(null);
    setSelectedZone(null);
    setHighlightedId(null);
    setHighlightedZoneNo(null);

    const query = searchQuery.trim();
    const features = geoData?.features ?? [];

    try {
      // 0) Known city landmarks (e.g. Railway Station → Zone J10 / ward 108)
      const landmark = KNOWN_LANDMARKS.find((l) => l.match.test(query));
      if (landmark && geoData) {
        const latlng = L.latLng(landmark.lat, landmark.lng);
        let feature =
          geoData.features.find((f) =>
            isPointInFeature(latlng, f as GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>)
          ) ?? null;
        if (!feature && landmark.wardNo) {
          feature =
            geoData.features.find(
              (f) => (f.properties as WardProperties).ward_no === landmark.wardNo
            ) ?? null;
        }
        if (feature) {
          const props = feature.properties as WardProperties;
          setMatchedLocality(landmark.labelEn);
          setWardAndPrabhag(props, latlng, "exact", feature.id as string);
          if (landmark.zoneNo != null) setHighlightedZoneNo(landmark.zoneNo);
          return;
        }
        setMarkerPos(latlng);
        if (landmark.zoneNo != null) {
          const zoneDef = ZONE_DEFINITIONS.find((z) => z.zoneNo === landmark.zoneNo);
          setSelectedZone(
            zoneDef
              ? { zoneNo: zoneDef.zoneNo, zoneName: en ? zoneDef.name : zoneDef.nameMr }
              : { zoneNo: landmark.zoneNo, zoneName: landmark.labelEn }
          );
          setHighlightedZoneNo(landmark.zoneNo);
        }
        return;
      }

      // 1) Official locality list first when it is a strong match — so areas like
      // Nageshwarwadi get the same full ward+officer card + map pin as Samarth Nagar,
      // even though they are not themselves a ward polygon name.
      const localityMatch = findBestLocalityMatch(prabhags, query);
      const isGenericLandmarkPhrase =
        /^(railway\s*station|रेल्वे\s*स्टेशन)$/i.test(normalizeText(query));
      if (
        !isGenericLandmarkPhrase &&
        localityMatch &&
        localityMatch.score >= 85
      ) {
        await applyLocalityResult(localityMatch);
        return;
      }

      // 2) Strong ward match (number or name) from CSMC geo data
      const wardHit = isGenericLandmarkPhrase ? null : findWardFeature(features, query);
      if (wardHit && (wardHit.score >= 85 || /^\d+$/.test(normalizeText(query)))) {
        const props = wardHit.feature.properties as WardProperties;
        const pin = safePinForFeature(wardHit.feature);
        const byQuery = findBestLocalityMatch(prabhags, query);
        const byWardName = findBestLocalityMatch(prabhags, props.ward_name);
        const override =
          byQuery && byQuery.score >= 65
            ? byQuery.prabhag
            : byWardName && byWardName.score >= 65
              ? byWardName.prabhag
              : null;
        setMatchedLocality(
          byQuery && byQuery.score >= 65 ? byQuery.locality : props.ward_name
        );
        setWardAndPrabhag(props, pin, "exact", wardHit.feature.id as string, override);
        return;
      }

      // 3) Prabhag number only (e.g. "20", "२०", or "प्रभाग 20")
      if (/^(prabhag|प्रभाग)?\s*#?\s*\d{1,2}$/i.test(fromDevanagariDigits(query.trim()))) {
        const digits = normalizeText(query).replace(/\D/g, "");
        const prabhag =
          prabhags[digits.padStart(2, "0")] ||
          prabhags[digits] ||
          Object.values(prabhags).find((p) => p.no.replace(/^0+/, "") === digits.replace(/^0+/, ""));
        if (prabhag) {
          setSelectedPrabhag(prabhag);
          setSelectedWard(null);
          setMarkerPos(null);
          // Still try to pin a representative ward from this prabhag's localities
          if (geoData) {
            const wardFeature = findWardForPrabhag(geoData.features, prabhag);
            if (wardFeature) {
              const pin = safePinForFeature(wardFeature);
              setWardAndPrabhag(
                wardFeature.properties as WardProperties,
                pin,
                "exact",
                wardFeature.id as string,
                prabhag
              );
            }
          }
          return;
        }
      }

      // 4) Weaker locality match (partial names)
      if (localityMatch && localityMatch.score >= 65) {
        await applyLocalityResult(localityMatch);
        return;
      }

      // 5) Landmark / hotel / address via free OpenStreetMap Nominatim
      const results = await geocodeAddress(query);
      if (!results.length) {
        setSearchError(
          en
            ? "Not found. Try a locality name, landmark (e.g. Shalimar Hotel), ward number, or prabhag number."
            : "सापडले नाही. परिसर नाव, खूण (उदा. शालीमार हॉटेल), वॉर्ड किंवा प्रभाग क्रमांक वापरा."
        );
        return;
      }

      const result = rankGeocodeResults(results, query)[0];
      let exactMatch: { ward: WardProperties; id: string; latlng: L.LatLng } | null = null;
      let bestResult: { ward: WardProperties; id: string; latlng: L.LatLng } | null = null;
      let zoneResult: { zoneNo: number; zoneName: string; latlng: L.LatLng } | null = null;

      if (geoData) {
        for (const feature of geoData.features) {
          if (isPointInFeature(result.latlng, feature)) {
            exactMatch = {
              ward: feature.properties as WardProperties,
              id: feature.id as string,
              latlng: result.latlng,
            };
            break;
          }
        }
        if (!exactMatch) {
          const nearest = findNearestWard(result.latlng, geoData.features);
          if (nearest) {
            bestResult = {
              ward: nearest.feature.properties as WardProperties,
              id: nearest.feature.id as string,
              latlng: result.latlng,
            };
          }
          const zone = findZoneForPoint(result.latlng, geoData.features);
          if (zone) zoneResult = { ...zone, latlng: result.latlng };
        }
      }

      if (exactMatch) {
        setWardAndPrabhag(exactMatch.ward, exactMatch.latlng, "exact", exactMatch.id);
      } else if (bestResult) {
        setWardAndPrabhag(bestResult.ward, bestResult.latlng, "nearest", bestResult.id);
      } else if (zoneResult) {
        setMarkerPos(zoneResult.latlng);
        setSelectedZone(zoneResult);
      } else {
        setMarkerPos(result.latlng);
      }
    } catch {
      setSearchError(en ? "Search failed. Please try again." : "शोध अयशस्वी. पुन्हा प्रयत्न करा.");
    } finally {
      setSearching(false);
    }
  }, [searchQuery, geoData, en, prabhags, setWardAndPrabhag, applyLocalityResult]);

  const clearSearch = () => {
    setSearchQuery("");
    setMarkerPos(null);
    setSelectedWard(null);
    setSelectedPrabhag(null);
    setMatchedLocality(null);
    setSelectedZone(null);
    setWardMatchMode(null);
    setHighlightedId(null);
    setSearchError("");
  };

  const resultTitle =
    matchedLocality?.trim() ||
    selectedWard?.ward_name ||
    (selectedPrabhag ? (en ? `Prabhag ${selectedPrabhag.no}` : `प्रभाग ${d(selectedPrabhag.no)}`) : "");

  return (
    <div className="flex flex-col gap-4">
      {/* ── Search bar ── */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder={
                en
                  ? "Search locality, landmark or address (e.g. Shalimar Hotel)…"
                  : "परिसर, खूण किंवा पत्ता शोधा (उदा. शालीमार हॉटेल)…"
              }
              className="w-full pl-9 pr-10 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/40 bg-white"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        <button
          onClick={handleSearch}
          disabled={searching || !searchQuery.trim() || loading}
          className="flex items-center gap-2 px-5 py-2.5 bg-civic-blue text-white rounded-xl text-sm font-semibold hover:bg-civic-gold hover:text-civic-ink transition-colors disabled:opacity-50"
        >
          {searching ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
          {en ? "Know Your Administrative Area" : "आपले प्रशासकीय क्षेत्र जाणून घ्या"}
        </button>
      </div>

      {searchError && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <Info className="h-4 w-4 shrink-0" /> {searchError}
        </p>
      )}
      {loading && (
        <p className="text-sm text-slate-600 flex items-center gap-1">
          <Info className="h-4 w-4 shrink-0" />
          {en
            ? "Loading ward boundaries... wait a moment before searching."
            : "प्रभाग सीमा लोड करत आहे... कृपया शोधण्यापूर्वी थोडा वेळ थांबा."}
        </p>
      )}

      {/* ── Zone-only result card (when ward cannot be determined) ── */}
      {selectedZone && !selectedWard && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <span className="font-serif font-bold text-blue-700 text-base">
                {en ? "Zone" : "झोन"}{" "}
                {ZONE_DEFINITIONS.find((z) => z.zoneNo === selectedZone.zoneNo)?.[en ? "code" : "codeMr"] ??
                  selectedZone.zoneNo}
              </span>
              <div className="text-xs text-blue-600 mt-1 font-medium">
                {en
                  ? ZONE_DEFINITIONS.find((z) => z.zoneNo === selectedZone.zoneNo)?.name ?? selectedZone.zoneName
                  : ZONE_DEFINITIONS.find((z) => z.zoneNo === selectedZone.zoneNo)?.nameMr ?? selectedZone.zoneName}
              </div>
            </div>
            <button
              onClick={clearSearch}
              className="text-muted-foreground hover:text-foreground shrink-0"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-white/60 rounded-lg p-3 text-xs text-muted-foreground">
            <p className="leading-relaxed">
              {en
                ? "The exact prabhag/ward could not be determined, but the location has been identified to be in this zone. Please search with a more specific address or click on a precise location on the map for more details."
                : "अचूक प्रभाग/वॉर्ड निर्धारित करता आला नाही, परंतु स्थान या झोनमध्ये आहे. अधिक विशिष्ट पत्ता वापरून शोधा किंवा नकाशावर अचूक स्थान क्लिक करा."}
            </p>
          </div>
        </div>
      )}

      {/* ── Prabhag-only card (locality matched, ward boundary not linked) ── */}
      {selectedPrabhag && !selectedWard && !selectedZone && (
        <div
          ref={resultCardRef}
          className="bg-civic-blue/5 border border-civic-blue/20 rounded-2xl p-4 md:p-5 text-sm shadow-sm overflow-visible"
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <span className="font-serif font-bold text-civic-blue text-base uppercase break-words">
              {resultTitle}
            </span>
            <button
              onClick={clearSearch}
              className="text-muted-foreground hover:text-foreground shrink-0"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground">
            <InfoRow
              label={en ? "Prabhag Number" : "प्रभाग क्रमांक"}
              value={d(selectedPrabhag.no)}
            />
            <InfoRow
              label={en ? "Population" : "लोकसंख्या"}
              value={d(selectedPrabhag.population.toLocaleString("en-IN"))}
            />
            <InfoRow
              label={en ? "Seats" : "आसने"}
              value={d(selectedPrabhag.seats)}
            />
            <InfoRow
              label={en ? "Localities" : "परिसर"}
              value={d(selectedPrabhag.localities.length)}
            />
          </div>
        </div>
      )}

      {/* ── Result info card (ward + prabhag + officers) ── */}
      {selectedWard && (
        <div
          ref={resultCardRef}
          className="bg-white border-2 border-civic-blue/25 rounded-2xl p-4 md:p-5 text-sm shadow-sm overflow-visible"
        >
          <div className="flex items-start justify-between gap-2 mb-4">
            <div className="min-w-0">
              <span className="font-serif font-bold text-civic-blue text-lg uppercase break-words">
                {resultTitle}
              </span>
              {matchedLocality &&
                normalizeText(matchedLocality) !== normalizeText(selectedWard.ward_name) && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {en ? "Ward" : "वॉर्ड"}: {selectedWard.ward_name}
                  </p>
                )}
              {wardMatchMode === "nearest" && (
                <span className="inline-block mt-2 rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[11px] font-semibold">
                  {en ? "Closest zone/prabhag" : "जवळची झोन/प्रभाग"}
                </span>
              )}
            </div>
            <button
              onClick={clearSearch}
              className="text-muted-foreground hover:text-foreground shrink-0"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            <InfoRow
              label={en ? "Ward Number" : "वॉर्ड क्रमांक"}
              value={d(selectedWard.ward_no)}
            />
            {selectedPrabhag && (
              <InfoRow
                label={en ? "Prabhag Number" : "प्रभाग क्रमांक"}
                value={d(selectedPrabhag.no)}
              />
            )}
            <InfoRow
              label={en ? "Zone" : "झोन"}
              value={(() => {
                const z = ZONE_DEFINITIONS.find((def) => def.zoneNo === selectedWard.zone_no);
                if (z) {
                  const place = en
                    ? z.name.replace(/^Zone [A-Z]\d+\s*[–—-]\s*/, "")
                    : z.nameMr.replace(/^झोन [A-Z][०-९\d]+\s*[–—-]\s*/, "");
                  return d(en ? `Zone ${z.code} ${place}` : `झोन ${z.codeMr} ${place}`);
                }
                return d(selectedWard.zone_name || String(selectedWard.zone_no));
              })()}
            />
            {selectedPrabhag && (
              <>
                <InfoRow
                  label={en ? "Prabhag Population" : "प्रभाग लोकसंख्या"}
                  value={d(selectedPrabhag.population.toLocaleString("en-IN"))}
                />
                <InfoRow
                  label={en ? "Prabhag Seats" : "प्रभाग आसने"}
                  value={d(selectedPrabhag.seats)}
                />
              </>
            )}
            {selectedWard.wardoffname && (
              <InfoRow
                label={en ? "Ward Officer" : "वॉर्ड अधिकारी"}
                value={selectedWard.wardoffname}
                sub={selectedWard.wardoffno ? d(selectedWard.wardoffno) : undefined}
              />
            )}
            {selectedWard.zonoffname && (
              <InfoRow
                label={en ? "Zone Officer" : "झोन अधिकारी"}
                value={selectedWard.zonoffname}
                sub={selectedWard.zonoffno ? d(selectedWard.zonoffno) : undefined}
              />
            )}
            {selectedWard.wardengineername && (
              <InfoRow
                label={en ? "Ward Engineer" : "वॉर्ड अभियंता"}
                value={selectedWard.wardengineername}
                sub={selectedWard.wardengineerno ? d(selectedWard.wardengineerno) : undefined}
              />
            )}
            {selectedWard.water_lineman_1 && (
              <InfoRow
                label={en ? "Water Lineman" : "पाणी लाइनमन"}
                value={selectedWard.water_lineman_1}
                sub={selectedWard.water_lineman_1_mobileno ? d(selectedWard.water_lineman_1_mobileno) : undefined}
              />
            )}
            {selectedWard.garbagesupervisorname && (
              <InfoRow
                label={en ? "Garbage Supervisor" : "कचरा पर्यवेक्षक"}
                value={selectedWard.garbagesupervisorname}
                sub={selectedWard.garbagesupervisormobileno ? d(selectedWard.garbagesupervisormobileno) : undefined}
              />
            )}
          </div>
        </div>
      )}

      {/* ── Map ── */}
      <div className="ward-map-shell relative rounded-2xl overflow-hidden border border-border shadow-card-soft mt-1">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <Loader2 className="h-8 w-8 animate-spin text-civic-blue" />
          </div>
        )}
        <MapContainer
          center={CSMC_CENTER}
          zoom={12}
          zoomControl={true}
          className="h-[540px] w-full rounded-2xl"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {geoData && (
            <GeoJSON
              key={highlightedId ?? "base"}
              data={geoData}
              ref={geoJsonLayerRef}
              style={(feature) => {
                const props = feature?.properties as WardProperties | undefined;
                const isHighlighted = feature?.id === highlightedId;
                const isZoneHighlighted =
                  !isHighlighted &&
                  highlightedZoneNo !== null &&
                  !!props &&
                  featureMatchesHighlightedZone(props, highlightedZoneNo);
                return wardStyle(feature, isHighlighted, isZoneHighlighted, zoneColors);
              }}
              onEachFeature={(feature, layer) => {
                const p = feature.properties as WardProperties;
                const label = `<strong>${p.name}</strong><br/>${p.ward_name}`;
                layer.bindTooltip(label, {
                  sticky: true,
                  direction: "top",
                  className: "leaflet-ward-tooltip",
                });
                layer.on("click", () => {
                  const centroid = getFeatureCentroid(feature);
                  setMatchedLocality(p.ward_name);
                  setWardAndPrabhag(p, centroid, "exact", feature.id as string);
                  setMarkerPos(null);
                });
              }}
            />
          )}

          {geoData && (
            <MapClickHandler
              geoData={geoData}
              onLocationFound={(ward, latlng, matchMode, featureId) => {
                setMatchedLocality(ward.ward_name);
                setWardAndPrabhag(ward, latlng, matchMode, featureId);
              }}
              onZoneFound={(zone, latlng) => {
                setMarkerPos(latlng);
                setSelectedZone(zone);
                setSelectedWard(null);
                setSelectedPrabhag(null);
                setMatchedLocality(null);
                setWardMatchMode(null);
              }}
            />
          )}

          {markerPos && (
            <Marker position={markerPos}>
              <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={false}>
                <div className="text-sm font-semibold leading-snug break-words">
                  {selectedWard
                    ? `${en ? "Prabhag" : "प्रभाग"} ${d(selectedWard.ward_no)} • ${(
                        matchedLocality || selectedWard.ward_name
                      ).toUpperCase()}`
                    : en
                    ? "Location found"
                    : "स्थान सापडले"}
                </div>
                {selectedWard && (
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">
                    {en ? "Zone" : "झोन"}: {d(selectedWard.zone_name)}
                  </div>
                )}
              </Tooltip>
              <Popup>
                <div className="text-sm font-semibold break-words">
                  {selectedWard
                    ? `${en ? "Prabhag" : "प्रभाग"} ${d(selectedWard.ward_no)} • ${(
                        matchedLocality || selectedWard.ward_name
                      ).toUpperCase()}`
                    : en
                    ? "Location found (outside boundaries)"
                    : "स्थान सापडले (सीमेबाहेर)"}
                </div>
                {selectedWard && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {en ? "Zone" : "झोन"}: {d(selectedWard.zone_name)}
                  </div>
                )}
              </Popup>
            </Marker>
          )}

          <FlyToLocation latlng={markerPos} />
          <FlyToLocation
            zoom={14}
            latlng={
              highlightedZoneNo !== null
                ? (() => {
                    const c = ZONE_DEFINITIONS.find((d) => d.zoneNo === highlightedZoneNo)?.center;
                    return c ? L.latLng(c[0], c[1]) : null;
                  })()
                : null
            }
          />

          {/* ── Zone label marker — centroid computed from actual ward polygons ── */}
          {highlightedZoneNo !== null && geoData && (() => {
            const zoneDef = ZONE_DEFINITIONS.find((d) => d.zoneNo === highlightedZoneNo);
            const zoneFeatures = geoData.features.filter((f) =>
              featureMatchesHighlightedZone(f.properties as WardProperties, highlightedZoneNo)
            );

            let center = zoneDef?.center ?? CSMC_CENTER;
            if (zoneFeatures.length) {
              let sumLat = 0,
                sumLng = 0;
              for (const f of zoneFeatures) {
                const c = getFeatureCentroid(f);
                sumLat += c.lat;
                sumLng += c.lng;
              }
              center = L.latLng(sumLat / zoneFeatures.length, sumLng / zoneFeatures.length);
            }

            const codeLabel = en ? zoneDef?.code ?? `Z${highlightedZoneNo}` : zoneDef?.codeMr ?? `${highlightedZoneNo}`;
            const icon = L.divIcon({
              className: "",
              html: `<div style="
                color: #000;
                font-size: 16px;
                font-weight: 900;
                font-family: "Noto Sans Devanagari", sans-serif;
                white-space: nowrap;
                text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 0 2px 4px rgba(0,0,0,0.2);
                pointer-events: none;
                transform: translate(-50%, -50%);
              ">${en ? `Zone ${codeLabel}` : `झोन ${codeLabel}`}</div>`,
              iconAnchor: [0, 0],
            });
            return (
              <Marker key={`zone-label-${highlightedZoneNo}`} position={center} icon={icon} interactive={false} />
            );
          })()}
        </MapContainer>
      </div>

      {/* ── Zone legend ── */}
      <div className="flex flex-wrap gap-2 text-xs">
        {ZONE_DEFINITIONS.map((zoneDef) => {
          const zoneNum = zoneDef.zoneNo;
          const color = zoneColors[zoneNum] ?? "#94A3B8";
          const isActive = highlightedZoneNo === zoneNum;
          const shortLabel = en
            ? zoneDef.name.replace(/^Zone [A-Z]\d+ –\s*/, "")
            : zoneDef.nameMr.replace(/^झोन [A-Z][०-९\d]+ –\s*/, "");
          const code = en ? zoneDef.code : zoneDef.codeMr;
          return (
            <button
              key={zoneNum}
              onClick={() => setHighlightedZoneNo(isActive ? null : zoneNum)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 border transition-colors ${
                isActive
                  ? "bg-civic-blue text-white border-civic-blue"
                  : "bg-white border-border hover:bg-slate-50"
              }`}
            >
              <span
                className="inline-block w-3 h-3 rounded-full shrink-0"
                style={{ background: color }}
              />
              <span className={en ? undefined : "devanagari"}>
                {en ? `Zone ${code}` : `झोन ${code}`} · {shortLabel}
              </span>
            </button>
          );
        })}
        <span className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1 text-amber-800">
          <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
          {en ? "Selected Ward" : "निवडलेला प्रभाग"}
        </span>
      </div>

      {/* ── Active zone indicator ── */}
      {highlightedZoneNo !== null && (
        <div
          className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-all"
          style={{
            borderColor: zoneColors[highlightedZoneNo] + "60",
            backgroundColor: zoneColors[highlightedZoneNo] + "12",
          }}
        >
          <span
            className="inline-flex items-center justify-center min-w-10 h-8 px-1.5 rounded-full text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: zoneColors[highlightedZoneNo] }}
          >
            {(() => {
              const z = ZONE_DEFINITIONS.find((d) => d.zoneNo === highlightedZoneNo);
              return en ? z?.code ?? highlightedZoneNo : z?.codeMr ?? highlightedZoneNo;
            })()}
          </span>
          <div>
            <p className={`font-bold text-civic-blue text-base leading-tight ${en ? "" : "devanagari"}`}>
              {(() => {
                const z = ZONE_DEFINITIONS.find((d) => d.zoneNo === highlightedZoneNo);
                return en ? z?.name ?? `Zone ${highlightedZoneNo}` : z?.nameMr ?? `झोन ${highlightedZoneNo}`;
              })()}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {en ? "highlighted on map — click the zone button again to deselect" : "नकाशावर ठळक केले — निवड रद्द करण्यासाठी पुन्हा क्लिक करा"}
            </p>
          </div>
          <button
            onClick={() => setHighlightedZoneNo(null)}
            className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear zone selection"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}


    </div>
  );
};

// ── Small helper ───────────────────────────────────────────────────────────────
const InfoRow = ({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) => (
  <div className="min-w-0">
    <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
      {label}
    </span>
    <p className="text-sm text-foreground font-medium leading-snug break-words">{value}</p>
    {sub && <p className="text-xs text-muted-foreground break-words">{sub}</p>}
  </div>
);

export default WardMap;
