import type { Lang } from "./translations";

const DEVA = "०१२३४५६७८९";

/** Convert Western digits to Devanagari (e.g. 2026 → २०२६). */
export function toDevanagariDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => DEVA[Number(d)]);
}

/** Convert Devanagari digits to Western (e.g. २०२६ → 2026). */
export function fromDevanagariDigits(value: string): string {
  return String(value).replace(/[०-९]/g, (ch) => String(DEVA.indexOf(ch)));
}

/** Show Devanagari digits in Marathi, Western digits in English. */
export function localizeDigits(value: string | number | null | undefined, lang: Lang): string {
  if (value == null) return "";
  return lang === "mr" ? toDevanagariDigits(value) : String(value);
}

export function formatLocaleNumber(
  n: number,
  lang: Lang,
  options?: Intl.NumberFormatOptions,
): string {
  return localizeDigits(n.toLocaleString("en-IN", options), lang);
}
