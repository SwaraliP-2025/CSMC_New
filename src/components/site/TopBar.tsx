import { useLang } from "@/i18n/LanguageContext";
import { Globe, Eye, Map, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

let _fontSize = 100;

export const TopBar = () => {
  const { lang, setLang } = useLang();
  const [dateTime, setDateTime] = useState(new Date());
  const [fontSize, setFontSize] = useState(_fontSize);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const applyFontSize = (size: number) => {
    _fontSize = size;
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
  };

  const toggleContrast = () => {
    setHighContrast(h => {
      const next = !h;
      document.documentElement.classList.toggle("high-contrast", next);
      return next;
    });
  };

  const formattedDate = dateTime.toLocaleDateString("en-IN", { day: "numeric", month: "numeric", year: "numeric" });
  const formattedTime = dateTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="bg-civic-ink text-white/85 text-[11px] font-medium border-b border-white/10">
      <div className="container flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5">

        {/* Left: Accessibility — hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center gap-0.5 whitespace-nowrap">
          <button onClick={() => applyFontSize(Math.max(80, fontSize - 10))} title="Decrease text size"
            className="px-1.5 py-0.5 hover:text-civic-gold transition-colors font-bold text-sm leading-none">A-</button>
          <span className="text-white/20 mx-0.5">|</span>
          <button onClick={() => applyFontSize(100)} title="Normal text size"
            className={`px-1.5 py-0.5 transition-colors font-bold text-base leading-none ${fontSize === 100 ? "text-civic-gold" : "hover:text-civic-gold"}`}>A</button>
          <span className="text-white/20 mx-0.5">|</span>
          <button onClick={() => applyFontSize(Math.min(150, fontSize + 10))} title="Increase text size"
            className="px-1.5 py-0.5 hover:text-civic-gold transition-colors font-bold text-lg leading-none">A+</button>
          <span className="text-white/20 mx-0.5">|</span>
          <button onClick={toggleContrast}
            className={`px-2 py-0.5 rounded transition-colors font-bold text-[11px] ${highContrast ? "bg-white text-civic-ink" : "hover:text-civic-gold"}`}>
            ◑ {highContrast ? "Normal" : "Contrast"}
          </button>
          <span className="text-white/20 mx-0.5 hidden lg:inline">|</span>
          <a href="https://www.nvaccess.org/download/" target="_blank" rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 px-1.5 py-0.5 hover:text-civic-gold transition-colors">
            <Eye className="h-3 w-3" /> Screen Reader
          </a>
          <span className="text-white/20 mx-0.5 hidden lg:inline">|</span>
          <a href="/site-map" className="hidden lg:flex items-center gap-1 px-1.5 py-0.5 hover:text-civic-gold transition-colors">
            <Map className="h-3 w-3" /> Sitemap
          </a>
          <span className="text-white/20 mx-0.5 hidden lg:inline">|</span>
          <a href="/faq" className="hidden lg:flex items-center gap-1 px-1.5 py-0.5 hover:text-civic-gold transition-colors">
            <HelpCircle className="h-3 w-3" /> Help
          </a>
        </div>

        {/* Right: Language + Date/Time — always visible */}
        <div className="flex items-center gap-2 ml-auto whitespace-nowrap">
          <div className="flex items-center gap-1">
            <Globe className="h-3 w-3 opacity-60" />
            <button onClick={() => setLang("en")}
              className={`px-1.5 py-0.5 rounded transition-all ${lang === "en" ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"}`}>
              English
            </button>
            <span className="opacity-20">|</span>
            <button onClick={() => setLang("mr")}
              className={`px-1.5 py-0.5 rounded transition-all ${lang === "mr" ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"}`}>
              मराठी
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 border-l border-white/20 pl-2 opacity-80">
            <span>📅 {formattedDate}</span>
            <span className="hidden md:inline">🕐 {formattedTime}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
