export const SEAT_LABEL = {
  en: { A: "A", B: "B", C: "C", D: "D" },
  mr: { A: "अ", B: "ब", C: "क", D: "ड" },
} as const;

/** Convert Western digits to Devanagari (e.g. 02 → ०२). */
export const toDevanagariDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => "०१२३४५६७८९"[Number(d)]);

export const formatNum = (n: number, en: boolean): string => {
  const s = n.toLocaleString("en-IN");
  return en ? s : toDevanagariDigits(s);
};

export const seatLabel = (seat: string, en: boolean): string => {
  const map = en ? SEAT_LABEL.en : SEAT_LABEL.mr;
  return map[seat as keyof typeof map] ?? seat;
};
