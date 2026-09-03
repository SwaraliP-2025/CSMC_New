import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { localizeDigits } from "./digits";
import { translations, type Lang, type Translations } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  /** Convert digits for the active language (Devanagari in Marathi, 0–9 in English). */
  d: (value: string | number | null | undefined) => string;
};
const LanguageContext = createContext<Ctx | undefined>(undefined);

// translations.ts is a data module. Fast Refresh cannot update this file
// (it also exports useLang), so accept those edits and reload the page.
if (import.meta.hot) {
  import.meta.hot.accept("./translations", () => {
    import.meta.hot?.invalidate();
  });
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Always start in Marathi for citizens; preference is kept only while navigating
  // this session after the user explicitly switches language.
  const [lang, setLangState] = useState<Lang>("mr");

  const setLang = (l: Lang) => {
    setLangState(l);
  };

  useEffect(() => {
    // Clear any legacy stored language so EN cannot stick across visits
    try {
      localStorage.removeItem("csmc-lang");
      localStorage.removeItem("csmc-lang-v2");
      sessionStorage.removeItem("csmc-lang-session");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
    document.body.style.fontFamily = lang === "mr"
      ? "'Noto Sans Devanagari', 'Inter', sans-serif"
      : "";
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        d: (value) => localizeDigits(value, lang),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
