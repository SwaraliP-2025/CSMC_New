import { useLang } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  applyGoogleTranslateTarget,
  mountGoogleTranslateElement,
  readGoogleTranslateTarget,
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
        <option value="">Translate</option>
        {TOURIST_TRANSLATE_LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <div
        id={containerId}
        className="google-translate-host"
        aria-hidden="true"
      />
    </div>
  );
};
