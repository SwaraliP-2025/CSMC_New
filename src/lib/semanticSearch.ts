import { CIVIC_CATALOG } from "@/data/civicCatalog";
import { CATEGORY_LABELS, SEARCH_GROUP_ORDER, searchGroupFor } from "@/data/civicLabels";
import type { CivicRecord, SearchGroup } from "@/types/civicCatalog";

export interface SearchHit {
  record: CivicRecord;
  score: number;
  group: SearchGroup;
  actionLabelEn?: string;
  actionLabelMr?: string;
  snippetEn?: string;
  snippetMr?: string;
  highlight?: string;
  ocrPage?: number;
  isBestAction?: boolean;
}

const STOP = new Set([
  "how", "can", "i", "my", "a", "an", "the", "to", "do", "want", "need", "please", "me", "for",
  "of", "in", "on", "is", "am", "are", "get", "got", "please", "what", "where", "apply",
  "मला", "आहे", "कसा", "कसे", "कशी", "हवा", "हवी", "हवे", "करा", "करायचा", "भरायचा",
  "मी", "माझा", "माझे", "एक", "च्या", "ची", "चे",
]);

const INTENT: {
  phrases: string[];
  actionId: string;
  relatedIds: string[];
  actionEn: string;
  actionMr: string;
}[] = [
  {
    phrases: [
      "property tax", "pay tax", "house tax", "malmatta", "assessment",
      "how can i pay my property tax",
      "मालमत्ता कर", "मालमत्ता कर भरा", "कर भरायचा", "मालमत्ता",
    ],
    actionId: "svc-property-tax",
    relatedIds: ["faq-ptax", "dept-ptax", "not-tax-rebate", "gr-tax-rebate", "cc-revenue"],
    actionEn: "Pay online",
    actionMr: "ऑनलाइन भरा",
  },
  {
    phrases: [
      "birth certificate", "birth cert", "janma", "newborn", "i need a birth certificate",
      "जन्म", "जन्म दाखला", "जन्म प्रमाणपत्र", "मला जन्म दाखला हवा",
    ],
    actionId: "svc-birth",
    relatedIds: ["faq-birth", "dept-health", "act-rts", "cc-health"],
    actionEn: "Apply online",
    actionMr: "ऑनलाइन अर्ज करा",
  },
  {
    phrases: [
      "death certificate", "death cert", "मृत्यू", "मृत्यू प्रमाणपत्र",
    ],
    actionId: "svc-death",
    relatedIds: ["dept-health", "act-rts"],
    actionEn: "Apply online",
    actionMr: "ऑनलाइन अर्ज करा",
  },
  {
    phrases: [
      "complaint", "grievance", "register a complaint", "lodge complaint", "takaar",
      "तक्रार", "तक्रार नोंदवा", "complaint register",
    ],
    actionId: "svc-grievance",
    relatedIds: ["faq-hours", "con-office"],
    actionEn: "Lodge a grievance",
    actionMr: "तक्रार नोंदवा",
  },
  {
    phrases: [
      "building permission", "building plan", "construction permission", "i want building permission",
      "bye law", "bye-laws", "dcr", "बांधकाम परवानगी", "बांधकाम",
    ],
    actionId: "svc-building",
    relatedIds: ["byl-dcr", "dp-2025", "dept-tp", "not-dp-revision", "byl-parking"],
    actionEn: "Apply / track permission",
    actionMr: "परवानगी अर्ज / स्थिती",
  },
  {
    phrases: [
      "water bill", "water tax", "pay water", "water supply", "पाणी कर", "पाणी बिल", "पाणी",
    ],
    actionId: "svc-water-tax",
    relatedIds: ["cir-water-summer", "faq-hours"],
    actionEn: "Pay water tax",
    actionMr: "पाणी कर भरा",
  },
  {
    phrases: [
      "rti", "right to information", "rti application", "माहिती अधिकार", "आरटीआय",
    ],
    actionId: "act-rti",
    relatedIds: ["rti-q4", "pol-open-data", "faq-hours"],
    actionEn: "Citizen guide",
    actionMr: "नागरिक मार्गदर्शक",
  },
  {
    phrases: [
      "trade license", "trade licence", "business license", "व्यापार परवाना",
    ],
    actionId: "svc-trade",
    relatedIds: ["faq-hours"],
    actionEn: "Apply online",
    actionMr: "ऑनलाइन अर्ज करा",
  },
  {
    phrases: ["solid waste", "swm", "garbage", "segregation", "घनकचरा"],
    actionId: "cir-swm",
    relatedIds: ["gr-swm", "ten-swm"],
    actionEn: "Read circular",
    actionMr: "परिपत्रक वाचा",
  },
];

function norm(s: string) {
  return s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}

function tokens(s: string) {
  return norm(s).split(" ").filter((t) => t.length >= 2 && !STOP.has(t));
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 9;
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
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[m][n];
}

function fuzzyIncludes(hay: string, needle: string) {
  if (!needle) return false;
  if (hay.includes(needle)) return true;
  if (needle.length >= 3 && [...hay.split(" ")].some((w) => w.startsWith(needle) || needle.startsWith(w))) {
    return true;
  }
  if (needle.length >= 4) {
    return hay.split(" ").some((w) => w.length >= 4 && levenshtein(w, needle) <= 1);
  }
  return false;
}

function highlightSnippet(text: string, queryTokens: string[], max = 180) {
  const lower = text.toLowerCase();
  let idx = -1;
  let hit = "";
  for (const t of queryTokens) {
    const i = lower.indexOf(t);
    if (i >= 0) {
      idx = i;
      hit = t;
      break;
    }
  }
  if (idx < 0) return { snippet: text.slice(0, max), highlight: queryTokens[0] };
  const start = Math.max(0, idx - 50);
  const end = Math.min(text.length, idx + hit.length + 90);
  const snippet = `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
  return { snippet, highlight: hit };
}

function detectIntent(q: string) {
  const n = norm(q);
  const isProperty = n.includes("property") || n.includes("मालमत्ता") || n.includes("house tax");
  const isWater = n.includes("water") || n.includes("पाणी");
  let best: (typeof INTENT)[number] | null = null;
  let bestScore = 0;
  for (const intent of INTENT) {
    if (intent.actionId === "svc-water-tax" && isProperty && !isWater) continue;
    if (intent.actionId === "svc-property-tax" && isWater && !isProperty) continue;
    let s = 0;
    for (const p of intent.phrases) {
      if (n.includes(p) || (p.length >= 8 && p.includes(n))) s = Math.max(s, p.length);
      else if (tokens(p).every((t) => fuzzyIncludes(n, t))) s = Math.max(s, 8);
    }
    if (s > bestScore) {
      bestScore = s;
      best = intent;
    }
  }
  return bestScore >= 6 ? best : null;
}

function haystack(r: CivicRecord) {
  return [
    r.titleEn,
    r.titleMr,
    r.descriptionEn,
    r.descriptionMr,
    r.summaryEn,
    r.summaryMr,
    r.keywords.join(" "),
    r.departmentEn,
    r.departmentMr,
    CATEGORY_LABELS[r.category].en,
    ...r.ocrPages.map((p) => p.textEn + " " + p.textMr),
  ]
    .join(" ")
    .toLowerCase();
}

function actionLabel(r: CivicRecord): { en?: string; mr?: string } {
  if (r.category === "service") {
    if (/pay|tax|भरा/i.test(r.titleEn)) return { en: "Pay online", mr: "ऑनलाइन भरा" };
    return { en: "Apply now", mr: "आता अर्ज करा" };
  }
  if (r.category === "faq") return { en: "FAQs", mr: "सामान्य प्रश्न" };
  if (r.category === "department") return { en: "Department", mr: "विभाग" };
  if (r.category === "circular") return { en: "Related circular", mr: "संबंधित परिपत्रक" };
  if (r.category === "citizen-charter") return { en: "Citizen guide", mr: "नागरिक मार्गदर्शक" };
  return {};
}

export function smartSearch(query: string): SearchHit[] {
  const q = norm(query);
  if (q.length < 2) return [];
  const qTokens = tokens(query);
  const intent = detectIntent(query);
  const scores = new Map<string, SearchHit>();

  const bump = (record: CivicRecord, add: number, extra: Partial<SearchHit> = {}) => {
    const prev = scores.get(record.id);
    const group = searchGroupFor(record.category);
    const labels = actionLabel(record);
    const next: SearchHit = {
      record,
      group,
      score: (prev?.score ?? 0) + add,
      actionLabelEn: extra.actionLabelEn ?? prev?.actionLabelEn ?? labels.en,
      actionLabelMr: extra.actionLabelMr ?? prev?.actionLabelMr ?? labels.mr,
      snippetEn: extra.snippetEn ?? prev?.snippetEn,
      snippetMr: extra.snippetMr ?? prev?.snippetMr,
      highlight: extra.highlight ?? prev?.highlight,
      ocrPage: extra.ocrPage ?? prev?.ocrPage,
      isBestAction: extra.isBestAction ?? prev?.isBestAction,
    };
    scores.set(record.id, next);
  };

  if (intent) {
    const action = CIVIC_CATALOG.find((r) => r.id === intent.actionId);
    if (action) bump(action, 220, { isBestAction: true, actionLabelEn: intent.actionEn, actionLabelMr: intent.actionMr });
    for (const id of intent.relatedIds) {
      const rec = CIVIC_CATALOG.find((r) => r.id === id);
      if (rec) bump(rec, rec.category === "service" ? 90 : rec.category === "faq" ? 80 : 55);
    }
  }

  for (const r of CIVIC_CATALOG) {
    const title = norm(r.titleEn + " " + r.titleMr);
    const hay = haystack(r);
    let s = 0;
    if (title === q) s += 120;
    else if (title.includes(q) || qTokens.every((t) => fuzzyIncludes(title, t))) s += 70;

    for (const t of qTokens) {
      if (fuzzyIncludes(title, t)) s += 18;
      else if (r.keywords.some((k) => fuzzyIncludes(k, t))) s += 12;
      else if (fuzzyIncludes(hay, t)) s += 6;
    }

    let ocrHit: { page: number; textEn: string; textMr: string } | undefined;
    for (const page of r.ocrPages) {
      const blob = (page.textEn + " " + page.textMr).toLowerCase();
      if (qTokens.some((t) => t.length >= 4 && blob.includes(t)) || blob.includes(q)) {
        ocrHit = page;
        s += 40;
        break;
      }
    }

    if (r.category === "service") s *= 1.35;
    else if (r.category === "faq") s *= 1.15;
    else if (r.downloadable && !intent) s *= 0.82;

    if (s > 0 || scores.has(r.id)) {
      const extra: Partial<SearchHit> = {};
      if (ocrHit) {
        const h = highlightSnippet(ocrHit.textEn, qTokens.length ? qTokens : [q]);
        extra.ocrPage = ocrHit.page;
        extra.snippetEn = h.snippet;
        extra.snippetMr = highlightSnippet(ocrHit.textMr, qTokens.length ? qTokens : [q]).snippet;
        extra.highlight = h.highlight;
      } else if (s > 0) {
        extra.snippetEn = r.descriptionEn;
        extra.snippetMr = r.descriptionMr;
      }
      bump(r, s, extra);
    }
  }

  const ranked = [...scores.values()]
    .filter((h) => h.score > 8)
    .sort((a, b) => b.score - a.score || Number(b.record.category === "service") - Number(a.record.category === "service"));

  if (ranked[0] && ranked[0].record.category === "service") ranked[0].isBestAction = true;
  return ranked;
}

export function groupHits(hits: SearchHit[]): { group: SearchGroup; items: SearchHit[] }[] {
  const map = new Map<SearchGroup, SearchHit[]>();
  for (const h of hits) {
    const arr = map.get(h.group) ?? [];
    arr.push(h);
    map.set(h.group, arr);
  }
  return SEARCH_GROUP_ORDER.filter((g) => map.has(g)).map((g) => ({ group: g, items: map.get(g)! }));
}

export function highlightText(text: string, highlight?: string) {
  if (!highlight) return [{ text, mark: false }];
  const i = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (i < 0) return [{ text, mark: false }];
  return [
    { text: text.slice(0, i), mark: false },
    { text: text.slice(i, i + highlight.length), mark: true },
    { text: text.slice(i + highlight.length), mark: false },
  ].filter((p) => p.text);
}
