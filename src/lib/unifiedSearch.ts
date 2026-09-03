import { CIVIC_CATALOG, REPOSITORY_DOCUMENTS } from "@/data/civicCatalog";
import { CATEGORY_LABELS } from "@/data/civicLabels";
import { buildSimplePdf, pdfFilename } from "@/lib/simplePdf";
import { groupHits, smartSearch, type SearchHit } from "@/lib/semanticSearch";
import { prepareSearchQuery } from "@/lib/searchAliases";
import type { CivicRecord } from "@/types/civicCatalog";

export type { SearchHit };

export function searchHits(query: string): SearchHit[] {
  return smartSearch(prepareSearchQuery(query));
}

export function searchCatalog(query: string): CivicRecord[] {
  return smartSearch(query).map((h) => h.record);
}

export function searchRepository(query: string): SearchHit[] {
  const ids = new Set(REPOSITORY_DOCUMENTS.map((d) => d.id));
  return smartSearch(query).filter((h) => ids.has(h.record.id));
}

export function groupSearchResults(hits: SearchHit[]) {
  return groupHits(hits);
}

export function recordHref(record: CivicRecord): { to: string; external: boolean } {
  if ((record.category === "service" || record.category === "department" || record.category === "contact") && record.href) {
    return { to: record.href, external: !!record.external };
  }
  return { to: `/digital-repository/${record.id}`, external: false };
}

export function downloadCivicRecord(record: CivicRecord) {
  const text = [
    "Chhatrapati Sambhajinagar Municipal Corporation",
    "Official public document",
    "",
    record.titleEn,
    "",
    `Department: ${record.departmentEn}`,
    `Category: ${CATEGORY_LABELS[record.category].en}`,
    `Published: ${record.publishedAt}`,
    `Version: ${record.version} (${record.status})`,
    `Document ID: CSMC/${record.year}/${record.id.replace(/-/g, "/").toUpperCase()}`,
    "",
    "Summary",
    record.summaryEn,
    "",
    "Key highlights",
    ...record.highlightsEn.map((h) => `- ${h}`),
    "",
    "Document",
    ...record.bodyEn,
    "",
    "This PDF is generated from the CSMC Municipal Knowledge Repository.",
    `Record ID: ${record.id}`,
  ].join("\n");

  const blob = buildSimplePdf(text);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = pdfFilename(record.titleEn, record.id);
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function formatCivicDate(iso: string, en: boolean) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(en ? "en-IN" : "mr-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function documentPermalink(id: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}/CSMC_New/digital-repository/${id}`;
}

export function catalogById(id: string) {
  return CIVIC_CATALOG.find((r) => r.id === id);
}