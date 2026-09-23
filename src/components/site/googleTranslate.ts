/** Tourist / machine translation via Google Website Translator (client-side). */

/** Dropdown: native name + English — sync codes with `GOOGLE_TRANSLATE_INCLUDED_LANGUAGES`. */
export const TOURIST_TRANSLATE_LANGUAGES = [
  { code: "ar", label: "العربية (Arabic)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "zh-CN", label: "简体中文 (Chinese Simplified)" },
  { code: "zh-TW", label: "繁體中文 (Chinese Traditional)" },
  { code: "nl", label: "Nederlands (Dutch)" },
  { code: "fr", label: "Français (French)" },
  { code: "de", label: "Deutsch (German)" },
  { code: "he", label: "עברית (Hebrew)" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "id", label: "Bahasa Indonesia (Indonesian)" },
  { code: "it", label: "Italiano (Italian)" },
  { code: "ja", label: "日本語 (Japanese)" },
  { code: "ko", label: "한국어 (Korean)" },
  { code: "ms", label: "Bahasa Melayu (Malay)" },
  { code: "no", label: "Norsk (Norwegian)" },
  { code: "fa", label: "فارسی (Persian)" },
  { code: "pl", label: "Polski (Polish)" },
  { code: "pt", label: "Português (Portuguese)" },
  { code: "ru", label: "Русский (Russian)" },
  { code: "es", label: "Español (Spanish)" },
  { code: "sv", label: "Svenska (Swedish)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "th", label: "ไทย (Thai)" },
  { code: "tr", label: "Türkçe (Turkish)" },
  { code: "ur", label: "اردو (Urdu)" },
  { code: "vi", label: "Tiếng Việt (Vietnamese)" },
] as const;

export const GOOGLE_TRANSLATE_INCLUDED_LANGUAGES = [
  "ja",
  "en",
  "mr",
  ...TOURIST_TRANSLATE_LANGUAGES.map((l) => l.code),
]
  .filter((code, i, arr) => arr.indexOf(code) === i)
  .join(",");

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    __csmcGoogleTranslateReady?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number;
              autoDisplay: boolean;
            },
            elementId: string,
          ): void;
          InlineLayout: { HORIZONTAL: number; VERTICAL: number; SIMPLE: number };
        };
      };
    };
  }
}

let scriptLoading: Promise<void> | null = null;
let lastMountedPageLang: string | null = null;

function cookieDomains(): string[] {
  const host = window.location.hostname;
  if (!host || host === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    return [host].filter(Boolean);
  }
  const parts = host.split(".");
  const domains = [host];
  if (parts.length >= 2) {
    domains.push(`.${parts.slice(-2).join(".")}`);
  }
  return domains;
}

export function readGoogleTranslateTarget(): string | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("googtrans="));
  if (!raw) return null;
  const value = decodeURIComponent(raw.split("=")[1] ?? "");
  if (!value || value === "/auto/en" || value === "/auto/mr") return null;
  const segments = value.split("/").filter(Boolean);
  if (segments.length < 2) return null;
  const source = segments[0];
  const target = segments[1];
  if (source === target) return null;
  return target;
}

export function clearGoogleTranslateCookie() {
  if (typeof document === "undefined") return;
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = `googtrans=;${expire};path=/`;
  for (const domain of cookieDomains()) {
    document.cookie = `googtrans=;${expire};path=/;domain=${domain}`;
  }
}

export function setGoogleTranslateTarget(
  pageLanguage: "en" | "mr",
  target: string | null,
) {
  clearGoogleTranslateCookie();
  if (target) {
    const entry = `/${pageLanguage}/${target}`;
    const expire = new Date(Date.now() + 365 * 86400000).toUTCString();
    document.cookie = `googtrans=${entry};expires=${expire};path=/`;
    for (const domain of cookieDomains()) {
      document.cookie = `googtrans=${entry};expires=${expire};path=/;domain=${domain}`;
    }
  }
  window.location.reload();
}

function loadGoogleTranslateScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.translate?.TranslateElement) return Promise.resolve();

  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise((resolve, reject) => {
    window.__csmcGoogleTranslateReady = () => resolve();

    window.googleTranslateElementInit = () => {
      window.__csmcGoogleTranslateReady?.();
    };

    const existing = document.querySelector(
      'script[data-csmc-google-translate="1"]',
    );
    if (existing) {
      const waitForGoogle = () => {
        if (window.google?.translate?.TranslateElement) resolve();
        else setTimeout(waitForGoogle, 50);
      };
      waitForGoogle();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    script.dataset.csmcGoogleTranslate = "1";
    script.onerror = () =>
      reject(new Error("Google Translate script failed to load"));
    document.body.appendChild(script);
  });

  return scriptLoading;
}

export async function mountGoogleTranslateElement(
  containerId: string,
  pageLanguage: "en" | "mr",
) {
  await loadGoogleTranslateScript();
  const container = document.getElementById(containerId);
  if (!container || !window.google?.translate?.TranslateElement) return;

  if (
    lastMountedPageLang === pageLanguage &&
    container.querySelector(".goog-te-combo")
  ) {
    return;
  }

  container.innerHTML = "";
  new window.google.translate.TranslateElement(
    {
      pageLanguage,
      includedLanguages: GOOGLE_TRANSLATE_INCLUDED_LANGUAGES,
      layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      autoDisplay: false,
    },
    containerId,
  );
  lastMountedPageLang = pageLanguage;
}

export function waitForGoogleTranslateCombo(
  containerId: string,
  timeoutMs = 12000,
): Promise<HTMLSelectElement | null> {
  return new Promise((resolve) => {
    const started = Date.now();
    const tick = () => {
      const combo = document.querySelector(
        `#${containerId} .goog-te-combo`,
      ) as HTMLSelectElement | null;
      if (combo) {
        resolve(combo);
        return;
      }
      if (Date.now() - started > timeoutMs) {
        resolve(null);
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

/** Reliable path: Google reads `googtrans` on full page load after init. */
export function applyGoogleTranslateTarget(
  pageLanguage: "en" | "mr",
  target: string | null,
) {
  setGoogleTranslateTarget(pageLanguage, target);
}

/**
 * Re-scan the live DOM after React mounts/updates (navbar leaf links often miss
 * Google’s first pass on SPAs).
 */
export async function refreshGoogleTranslate(
  containerId = "google_translate_element",
) {
  const target = readGoogleTranslateTarget();
  if (!target) return;
  const combo = await waitForGoogleTranslateCombo(containerId);
  if (!combo) return;
  const apply = (value: string) => {
    combo.value = value;
    combo.dispatchEvent(new Event("change"));
  };
  apply("");
  await new Promise<void>((r) => requestAnimationFrame(() => r()));
  apply(target);
}

/** Curated Hindi for top navbar when Translate → Hindi (GT often skips legal EN titles). */
export const NAV_TOP_LABEL_HI: Record<string, string> = {
  Home: "मुख्य पृष्ठ",
  Mahanagarpalika: "नगर निगम",
  "Citizen Services": "नागरिक सेवा",
  Publications: "प्रकाशन",
  Contact: "संपर्क",
  "Right To Information": "सूचना का अधिकार",
  "Right To Service": "सेवा का अधिकार",
  "DP Plan": "विकास योजना",
  "Site Map": "साइट मैप",
};
