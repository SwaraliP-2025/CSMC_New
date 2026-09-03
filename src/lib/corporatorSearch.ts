import type {
  Corporator,
  CorporatorSearchResult,
  LocalitySuggestion,
  Prabhag,
} from "@/types/corporator";

const BASE = import.meta.env.BASE_URL;

type WardProperties = { ward_no: string; ward_name: string };

let cache: Promise<{
  prabhags: Prabhag[];
  prabhagByNo: Record<string, Prabhag>;
  corporatorsByPrabhag: Record<string, Corporator[]>;
  localityIndex: LocalitySuggestion[];
  wardNames: WardProperties[];
}> | null = null;

function normalizeText(text: string): string {
  return text
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
  const commonWords = new Set([
    "nagar",
    "colony",
    "society",
    "road",
    "chowk",
    "area",
    "part",
    "gaav",
    "wadi",
  ]);
  const meaningful = qWords.filter((w) => !commonWords.has(w) && w.length >= 3);
  if (
    meaningful.length >= 1 &&
    meaningful.every((w) =>
      cWords.some((cw) => cw === w || (w.length >= 4 && cw.startsWith(w)))
    )
  ) {
    if (meaningful.every((w) => cWords.some((cw) => cw === w))) return 88;
    return 75;
  }
  if (q.length >= 8 && c.includes(q)) return 70;
  if (
    qWords.length === 1 &&
    qWords[0].length >= 6 &&
    !commonWords.has(qWords[0]) &&
    cWords.some((cw) => cw === qWords[0])
  ) {
    return 65;
  }
  return 0;
}

async function loadData() {
  if (!cache) {
    cache = Promise.all([
      fetch(`${BASE}data/prabhag-2025.json`).then((r) => r.json()),
      fetch(`${BASE}data/corporators-by-prabhag.json`).then((r) => r.json()),
      fetch(`${BASE}data/wards.json`).then((r) => r.json()),
    ]).then(([prabhagData, corpData, wardGeo]) => {
      const prabhags: Prabhag[] = prabhagData.prabhags ?? [];
      const prabhagByNo: Record<string, Prabhag> = {};
      const localityIndex: LocalitySuggestion[] = [];

      for (const p of prabhags) {
        prabhagByNo[p.no] = p;
        prabhagByNo[p.no.replace(/^0+/, "")] = p;
        for (const loc of p.localities) {
          localityIndex.push({ name: loc, prabhagNumber: p.no });
        }
      }

      const wardNames: WardProperties[] = (wardGeo.features ?? []).map(
        (f: { properties: WardProperties }) => f.properties
      );

      return {
        prabhags,
        prabhagByNo,
        corporatorsByPrabhag: corpData.byPrabhag ?? {},
        localityIndex,
        wardNames,
      };
    });
  }
  return cache;
}

function resolveWardNumber(
  wardNames: WardProperties[],
  locality: string
): string | null {
  let best: { wardNo: string; score: number } | null = null;
  for (const w of wardNames) {
    const score = scoreNameMatch(locality, w.ward_name);
    if (score >= 70 && (!best || score > best.score)) {
      best = { wardNo: w.ward_no, score };
    }
  }
  return best?.wardNo ?? null;
}

function buildResult(
  prabhag: Prabhag,
  corporatorsByPrabhag: Record<string, Corporator[]>,
  wardNumber: string | null,
  matchedLocality?: string
): CorporatorSearchResult {
  return {
    prabhagNumber: prabhag.no,
    wardNumber,
    population: prabhag.population,
    seats: prabhag.seats,
    matchedLocality,
    corporators: corporatorsByPrabhag[prabhag.no] ?? [],
    localities: prabhag.localities,
    prabhag,
  };
}

/** GET /api/corporators/prabhag/:id */
export async function getCorporatorsByPrabhag(
  prabhagNo: string
): Promise<CorporatorSearchResult | null> {
  const data = await loadData();
  const key = prabhagNo.padStart(2, "0");
  const prabhag =
    data.prabhagByNo[key] ??
    data.prabhagByNo[prabhagNo.replace(/^0+/, "")] ??
    null;
  if (!prabhag) return null;

  const primaryLocality = prabhag.localities[0];
  const wardNumber = primaryLocality
    ? resolveWardNumber(data.wardNames, primaryLocality)
    : null;

  return buildResult(prabhag, data.corporatorsByPrabhag, wardNumber);
}

/** Common Marathi spellings → English locality names in prabhag-2025.json */
const LOCALITY_ALIASES_MR: Record<string, string> = {
  भारतनगर: "Bharatnagar",
  "भारत नगर": "Bharatnagar",
  समर्थनगर: "Samarth Nagar",
  "समर्थ नगर": "Samarth Nagar",
  नागेश्वरवाडी: "Nageshwarwadi",
};

function resolveLocalityQuery(query: string): string {
  const key = query.trim().toLowerCase().replace(/\s+/g, " ");
  for (const [mr, en] of Object.entries(LOCALITY_ALIASES_MR)) {
    if (normalizeText(mr) === normalizeText(key) || mr === query.trim()) return en;
  }
  return query.trim();
}

/** GET /api/corporators/locality?name=… */
export async function getCorporatorsByLocality(
  query: string
): Promise<CorporatorSearchResult | null> {
  const trimmed = resolveLocalityQuery(query);
  if (!trimmed) return null;

  const data = await loadData();
  let best: { prabhag: Prabhag; locality: string; score: number } | null = null;

  for (const prabhag of data.prabhags) {
    for (const locality of prabhag.localities) {
      const score = scoreNameMatch(trimmed, locality);
      if (score >= 65 && (!best || score > best.score)) {
        best = { prabhag, locality, score };
      }
    }
  }

  if (!best) return null;

  const wardNumber = resolveWardNumber(data.wardNames, best.locality);
  return buildResult(
    best.prabhag,
    data.corporatorsByPrabhag,
    wardNumber,
    best.locality
  );
}

/** Fast locality autocomplete suggestions. */
export async function suggestLocalities(
  query: string,
  limit = 12
): Promise<LocalitySuggestion[]> {
  const resolved = resolveLocalityQuery(query);
  const q = normalizeText(resolved);
  if (q.length < 2 && normalizeText(query).length < 2) return [];

  const data = await loadData();
  const searchQ = q.length >= 2 ? resolved : query;
  const scored = data.localityIndex
    .map((item) => ({ ...item, score: scoreNameMatch(searchQ, item.name) }))
    .filter((item) => item.score >= 65)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  const seen = new Set<string>();
  const out: LocalitySuggestion[] = [];
  for (const item of scored) {
    const key = item.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ name: item.name, prabhagNumber: item.prabhagNumber });
    if (out.length >= limit) break;
  }
  return out;
}

export async function listPrabhagNumbers(): Promise<Prabhag[]> {
  const data = await loadData();
  return data.prabhags;
}
