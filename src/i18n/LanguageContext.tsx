import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

// Session-only key — resets to Marathi on every new tab/visit
const LANG_KEY = "csmc-lang-session";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Translations };
const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "mr";
    // Clear any old localStorage keys
    localStorage.removeItem("csmc-lang");
    localStorage.removeItem("csmc-lang-v2");
    // Use sessionStorage so each new visit defaults to Marathi
    const stored = sessionStorage.getItem(LANG_KEY) as Lang | null;
    return stored === "en" ? "en" : "mr";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    sessionStorage.setItem(LANG_KEY, l);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
    document.body.style.fontFamily = lang === "mr"
      ? "'Noto Sans Devanagari', 'Inter', sans-serif"
      : "";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
