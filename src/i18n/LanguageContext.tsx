import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

// Versioned key — changing this clears any old cached language preference
const LANG_KEY = "csmc-lang-v2";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Translations };
const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "mr";
    // Clear old key if present
    localStorage.removeItem("csmc-lang");
    const stored = localStorage.getItem(LANG_KEY) as Lang | null;
    // Default is always Marathi unless user explicitly chose English
    return stored === "en" ? "en" : "mr";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
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
