import { formatLocaleNumber } from "@/i18n/digits";

export { fromDevanagariDigits, localizeDigits, toDevanagariDigits } from "@/i18n/digits";

export const SEAT_LABEL = {
  en: { A: "A", B: "B", C: "C", D: "D" },
  mr: { A: "अ", B: "ब", C: "क", D: "ड" },
} as const;

export const formatNum = (n: number, en: boolean): string =>
  formatLocaleNumber(n, en ? "en" : "mr");

export const seatLabel = (seat: string, en: boolean): string => {
  const map = en ? SEAT_LABEL.en : SEAT_LABEL.mr;
  return map[seat as keyof typeof map] ?? seat;
};
