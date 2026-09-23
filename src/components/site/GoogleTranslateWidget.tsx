import { useLang } from "@/i18n/LanguageContext";
import { Globe, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  applyGoogleTranslateTarget,
  mountGoogleTranslateElement,
  readGoogleTranslateTarget,
  refreshGoogleTranslate,
  TOURIST_TRANSLATE_LANGUAGES,
} from "@/components/site/googleTranslate";

/**
 * Free Google Website Translator for inbound tourists (JA, KO, ZH, etc.).
 * Official EN / Marathi copy is controlled separately via LanguageContext.
 */
export const GoogleTranslateWidget = () => {
  const { lang } = useLang();
  const containerId = "google_translate_element";
  const pageLang = lang === "mr" ? "mr" : "en";
  const applyingRef = useRef(false);
  const [selectValue, setSelectValue] = useState(() => readGoogleTranslateTarget() ?? "");

  useEffect(() => {
    setSelectValue(readGoogleTranslateTarget() ?? "");
    void mountGoogleTranslateElement(containerId, pageLang);
  }, [containerId, pageLang]);

  // SPA pages often mount after Google’s first pass — re-apply so the full nav translates.
  useEffect(() => {
    const target = readGoogleTranslateTarget();
    if (!target) return;
    const timer = window.setTimeout(() => {
      void refreshGoogleTranslate(containerId);
    }, 600);
    return () => window.clearTimeout(timer);
  }, [containerId, pageLang]);

  const applyTranslation = (code: string) => {
    if (applyingRef.current) return;
    applyingRef.current = true;
    setSelectValue(code);

    try {
      applyGoogleTranslateTarget(pageLang, code || null);
    } finally {
      applyingRef.current = false;
    }
  };

  const clearLabel =
    lang === "mr" ? "मूळ भाषा (काढा)" : "Original (clear)";

  return (
    <div
      className="google-translate-widget notranslate flex items-center gap-1 shrink-0"
      title="Translate page for international visitors"
    >
      <Globe className="h-3 w-3 opacity-60 shrink-0 text-white/90" aria-hidden />
      <select
        value={selectValue}
        onChange={(e) => applyTranslation(e.target.value)}
        aria-label="Select Language"
        className="csmc-translate-select"
      >
        <option value="">{clearLabel}</option>
        {TOURIST_TRANSLATE_LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      {selectValue ? (
        <button
          type="button"
          onClick={() => applyTranslation("")}
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-white/35 text-white/90 hover:bg-white/15 hover:text-white"
          aria-label={clearLabel}
          title={clearLabel}
        >
          <X className="h-3 w-3" aria-hidden />
        </button>
      ) : null}
      <div
        id={containerId}
        className="google-translate-host"
        aria-hidden="true"
      />
    </div>
  );
};
