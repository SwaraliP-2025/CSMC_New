import { CIVIC_CATALOG } from "@/data/civicCatalog";
import { prepareSearchQuery, SEARCH_ALIAS_GROUPS } from "@/lib/searchAliases";
import type { SearchHit } from "@/lib/semanticSearch";

export type QueryLang = "en" | "mr" | "mixed";

function hasDevanagari(s: string) {
  return /[\u0900-\u097F]/.test(s);
}

/** Detect the language of the user's query — independent of website UI language. */
export function detectQueryLanguage(query: string): QueryLang {
  const q = query.normalize("NFC").trim();
  if (!q) return "mixed";
  const letters = q.replace(/[^\p{L}\p{M}]/gu, "");
  if (!letters) return "mixed";
  let mr = 0;
  let en = 0;
  for (const ch of letters) {
    if (/[\u0900-\u097F]/.test(ch)) mr += 1;
    else if (/[A-Za-z]/.test(ch)) en += 1;
  }
  if (mr > 0 && en === 0) return "mr";
  if (en > 0 && mr === 0) return "en";
  if (mr >= en * 1.2) return "mr";
  if (en >= mr * 1.2) return "en";
  return "mixed";
}

function titleMatchBoost(hit: SearchHit, queryLang: QueryLang, queryNorm: string): number {
  if (queryLang === "mixed" || !queryNorm || queryNorm.length < 3) return 0;
  const titleEn = hit.record.titleEn.toLowerCase();
  const titleMr = hit.record.titleMr;
  if (queryLang === "en") {
    if (titleEn === queryNorm) return 36;
    if (titleEn.startsWith(`${queryNorm} `) || titleEn.endsWith(` ${queryNorm}`)) return 14;
    if (titleEn.includes(queryNorm) && queryNorm.length >= 8) return 6;
    return 0;
  }
  if (titleMr === queryNorm) return 36;
  if (
    (queryNorm === "महानगरपालिका" || queryNorm === "महापालिका") &&
    hit.record.id === "svc-about"
  ) {
    return 40;
  }
  if (titleMr.startsWith(`${queryNorm} `) || titleMr.endsWith(` ${queryNorm}`)) return 8;
  if (titleMr.includes(queryNorm) && queryNorm.length >= 4) return 6;
  return 0;
}

function cloneHit(hit: SearchHit, displayLang: "en" | "mr", opts?: Partial<SearchHit>): SearchHit {
  return {
    ...hit,
    displayLang,
    resultKey: `${hit.record.id}:${displayLang}`,
    isBestAction: opts?.isBestAction ?? false,
    isBilingualTwin: opts?.isBilingualTwin ?? false,
    score: opts?.score ?? hit.score,
  };
}

/**
 * Prefer query-language titles without replacing relevance.
 * Inserts the bilingual equivalent of the top match as #2 when available.
 */
export function applyLanguageAwareRanking(hits: SearchHit[], query: string): SearchHit[] {
  if (!hits.length) return hits;
  const queryLang = detectQueryLanguage(query);
  const queryNorm = query
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\u00A0\u202F\u2007]/g, " ")
    .replace(/[^\p{L}\p{N}\p{M}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  const scored = hits.map((h) => ({
    ...h,
    score: h.score + titleMatchBoost(h, queryLang, queryNorm),
    displayLang: undefined as "en" | "mr" | undefined,
    resultKey: undefined as string | undefined,
    isBilingualTwin: false,
  }));

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      Number(b.record.category === "service") - Number(a.record.category === "service"),
  );

  for (const h of scored) h.isBestAction = false;

  const preferred: "en" | "mr" = queryLang === "mr" ? "mr" : queryLang === "en" ? "en" : "en";
  const other: "en" | "mr" = preferred === "en" ? "mr" : "en";

  if (queryLang === "en" || queryLang === "mr") {
    const exactPreferred = scored.find((h) => {
      const t = queryLang === "en" ? h.record.titleEn.toLowerCase() : h.record.titleMr;
      return t === queryNorm;
    });
    if (exactPreferred) {
      const idx = scored.indexOf(exactPreferred);
      if (idx > 0) {
        scored.splice(idx, 1);
        scored.unshift(exactPreferred);
      }
    }
  }

  const top = scored[0];
  if (!top) return scored;

  const bilingual =
    Boolean(top.record.titleEn.trim()) &&
    Boolean(top.record.titleMr.trim()) &&
    top.record.titleEn.trim().toLowerCase() !== top.record.titleMr.trim().toLowerCase();

  if (queryLang === "mixed" || !bilingual) {
    top.displayLang = preferred;
    top.resultKey = `${top.record.id}:${preferred}`;
    if (top.record.category === "service") top.isBestAction = true;
    return scored.map((h, i) => {
      if (i === 0) return h;
      return {
        ...h,
        displayLang: preferred,
        resultKey: `${h.record.id}:${preferred}`,
      };
    });
  }

  const primary = cloneHit(top, preferred, {
    isBestAction: top.record.category === "service",
    score: top.score + 4,
  });
  const twin = cloneHit(top, other, {
    isBestAction: false,
    isBilingualTwin: true,
    score: top.score - 1,
  });

  const rest = scored.slice(1).map((h) => ({
    ...h,
    displayLang: preferred,
    resultKey: `${h.record.id}:${preferred}`,
    isBestAction: false,
    isBilingualTwin: false,
  }));

  return [primary, twin, ...rest];
}

function normPhrase(s: string) {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\u00A0\u202F\u2007]/g, " ")
    .replace(/[^\p{L}\p{N}\p{M}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 3) return 99;
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return dp[m][n];
}

function maxDistanceFor(len: number) {
  if (len <= 4) return 1;
  if (len <= 8) return 2;
  if (len <= 14) return 2;
  return 3;
}

function buildSuggestionCorpus(): { phrase: string; lang: QueryLang }[] {
  const out: { phrase: string; lang: QueryLang }[] = [];
  const seen = new Set<string>();
  const add = (phrase: string) => {
    const p = phrase.trim();
    if (p.length < 4) return;
    const key = normPhrase(p);
    if (!key || seen.has(key)) return;
    seen.add(key);
    const lang = detectQueryLanguage(p);
    out.push({ phrase: p, lang: lang === "mixed" ? (hasDevanagari(p) ? "mr" : "en") : lang });
  };

  for (const group of SEARCH_ALIAS_GROUPS) {
    for (const term of group) add(term);
  }
  for (const r of CIVIC_CATALOG) {
    if (r.category === "service" || r.category === "faq" || r.category === "department") {
      add(r.titleEn);
      add(r.titleMr);
    }
  }
  [
    "Property Tax",
    "Pay Property Tax",
    "Water Tax",
    "Birth Certificate",
    "Death Certificate",
    "मालमत्ता कर",
    "पाणी कर",
    "जन्म प्रमाणपत्र",
    "मृत्यू प्रमाणपत्र",
    "तक्रार नोंदवा",
  ].forEach(add);

  return out;
}

let CORPUS: { phrase: string; lang: QueryLang }[] | null = null;

function getCorpus() {
  if (!CORPUS) CORPUS = buildSuggestionCorpus();
  return CORPUS;
}

/**
 * Conservative client-side typo suggestion. Returns a corrected query string or null.
 * Clicking it should re-run search — never navigate directly.
 */
export function suggestDidYouMean(query: string): string | null {
  const prepared = prepareSearchQuery(query);
  const n = normPhrase(prepared);
  if (n.length < 4) return null;

  const queryLang = detectQueryLanguage(prepared);
  const corpus = getCorpus();

  if (corpus.some((c) => normPhrase(c.phrase) === n)) return null;

  let best: { phrase: string; dist: number; score: number } | null = null;

  for (const cand of corpus) {
    if (queryLang === "en" && cand.lang === "mr") continue;
    if (queryLang === "mr" && cand.lang === "en") continue;

    const cn = normPhrase(cand.phrase);
    if (cn === n) return null;
    if (Math.abs(cn.length - n.length) > 3) continue;

    const dist = levenshtein(n, cn);
    const maxDist = maxDistanceFor(Math.min(n.length, cn.length));
    if (dist === 0 || dist > maxDist) continue;
    if (dist / Math.max(n.length, cn.length) > 0.28) continue;

    const score = dist * 10 + Math.abs(cn.length - n.length);
    if (!best || score < best.score) {
      best = { phrase: cand.phrase, dist, score };
    }
  }

  if (!best || best.dist > 2) return null;

  const suggestion = best.phrase;
  if (normPhrase(suggestion) === n) return null;
  return suggestion;
}
