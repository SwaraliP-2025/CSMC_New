/** localStorage helpers for the Website Guide (SiteTourGuide). */

export const TOUR_VERSION = "2";

export const TOUR_KEYS = {
  completed: "csmc_tour_completed",
  skipped: "csmc_tour_skipped",
  lang: "csmc_tour_lang",
  version: "csmc_tour_version",
} as const;

export type TourLang = "mr" | "en";

function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore quota / private mode */
  }
}

export function readTourLang(): TourLang {
  const v = safeGet(TOUR_KEYS.lang);
  return v === "en" ? "en" : "mr";
}

export function writeTourLang(lang: TourLang) {
  safeSet(TOUR_KEYS.lang, lang);
}

export function readTourVersion(): string | null {
  return safeGet(TOUR_KEYS.version);
}

export function isTourDismissed(): boolean {
  return safeGet(TOUR_KEYS.completed) === "true" || safeGet(TOUR_KEYS.skipped) === "true";
}

/** Auto-open for first visit, or once when tour content version advances. */
export function shouldAutoOpenTour(): boolean {
  const storedVersion = readTourVersion();
  if (storedVersion !== TOUR_VERSION) return true;
  return !isTourDismissed();
}

export function markTourFinished(opts: { skipped: boolean }) {
  safeSet(TOUR_KEYS.completed, "true");
  if (opts.skipped) {
    safeSet(TOUR_KEYS.skipped, "true");
  } else {
    safeSet(TOUR_KEYS.skipped, "false");
  }
  safeSet(TOUR_KEYS.version, TOUR_VERSION);
}

/** Banner / promo popups should wait until the guide is done for this version. */
export function isTourDoneForPromos(): boolean {
  if (readTourVersion() !== TOUR_VERSION) return false;
  return isTourDismissed();
}
