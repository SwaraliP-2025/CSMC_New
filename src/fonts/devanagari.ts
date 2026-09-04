export const DEVANAGARI_FAMILY = "CSMCDevanagari";

const WEIGHTS = ["400", "500", "600", "700"] as const;

/** Block first paint until bundled Devanagari faces are loaded. */
export async function ensureDevanagariFonts(): Promise<void> {
  const loads = WEIGHTS.map((weight) =>
    document.fonts.load(`${weight} 16px ${DEVANAGARI_FAMILY}`).catch(() => undefined),
  );
  await Promise.all([...loads, document.fonts.ready]);
}
