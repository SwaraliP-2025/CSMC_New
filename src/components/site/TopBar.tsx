import { useLang } from "@/i18n/LanguageContext";
import { useColorBlind } from "@/i18n/ColorBlindContext";
import { Contrast, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  useWeatherAQI,
  getAQICategory,
  wmoToEmoji,
  wmoLabel,
  rainLabel,
} from "@/hooks/useWeatherAQI";

let _fontSize = 100;

// ── Pulsing coloured dot ──────────────────────────────────────────────────────
const Dot = ({ color }: { color: string }) => (
  <span
    className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
    style={{ background: color, boxShadow: `0 0 5px ${color}` }}
  />
);

// ── Tooltip wrapper ───────────────────────────────────────────────────────────
// Positions BELOW the element (we're in a topbar — space is below).
// Uses a fixed portal so it's never clipped by any ancestor overflow.
const Tip = ({
  tip,
  children,
}: {
  tip: string;
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.bottom + 8 });
    }
    setShow(true);
  };

  return (
    <>
      <div
        ref={ref}
        className="relative flex items-center cursor-default"
        onMouseEnter={handleEnter}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>

      {show && tip && typeof document !== "undefined" &&
        ReactDOM.createPortal(
          <div
            className="pointer-events-none"
            style={{
              position: "fixed",
              left: pos.x,
              top: pos.y,
              transform: "translateX(-50%)",
              zIndex: 99999,
            }}
          >
            <div
              className="bg-[#0f172a] border border-white/15 text-white/90 text-[11px]
                         font-medium rounded-lg px-3 py-2 shadow-2xl leading-snug"
              style={{ maxWidth: 340, width: "max-content" }}
            >
              {/* arrow pointing up */}
              <span
                className="absolute -top-1.5 left-1/2 -translate-x-1/2
                           border-4 border-transparent border-b-[#0f172a]"
              />
              {tip}
            </div>
          </div>,
          document.body
        )
      }
    </>
  );
};

const Sep = () => <span className="text-white/15 select-none mx-1">│</span>;

// ── Main TopBar ───────────────────────────────────────────────────────────────
export const TopBar = () => {
  const { lang, setLang } = useLang();
  const { enabled: colorBlind, toggle: toggleColorBlind } = useColorBlind();
  const en = lang === "en";
  const [dateTime, setDateTime] = useState(new Date());
  const [fontSize, setFontSize] = useState(_fontSize);

  const {
    tempC, feelsLike, weatherCode,
    rainPct, humidity,
    aqi, aqiStation, loading,
  } = useWeatherAQI();

  const langSlotRef = useRef<HTMLDivElement>(null);
  const [langSlot, setLangSlot] = useState<{ top: number; left: number } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Keep language switcher clickable above modal overlays (dialog z-[1100]).
  useEffect(() => {
    const sync = () => {
      const el = langSlotRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        setLangSlot({ top: r.top, left: r.left });
      }
      setDialogOpen(!!document.querySelector('[role="dialog"][data-state="open"]'));
    };
    sync();
    window.addEventListener("resize", sync);
    window.addEventListener("scroll", sync, true);
    const mo = new MutationObserver(sync);
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-state"],
    });
    return () => {
      window.removeEventListener("resize", sync);
      window.removeEventListener("scroll", sync, true);
      mo.disconnect();
    };
  }, []);

  const applyFontSize = (size: number) => {
    _fontSize = size;
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
  };

  const formattedDate = dateTime.toLocaleDateString("en-IN", {
    day: "numeric", month: "numeric", year: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });

  // ── Derived display values ──────────────────────────────────────────────────
  const aqiCat     = aqi !== null ? getAQICategory(aqi, colorBlind) : null;
  const rain       = rainPct !== null ? rainLabel(rainPct) : null;
  const weatherEmoji = wmoToEmoji(weatherCode ?? null);
  const weatherLbl  = wmoLabel(weatherCode ?? null);

  // bilingual helpers
  const t = (e: string, m: string) => en ? e : m;

  // ── One-liner tooltip strings (no \n, no ? cursor) ─────────────────────────
  const tempTip = tempC !== null
    ? t(
        `${weatherLbl.en} · Current temperature in Chhatrapati Sambhajinagar is ${tempC}°C`,
        `${weatherLbl.mr} · छत्रपती संभाजीनगरमधील सध्याचे तापमान ${tempC}°C आहे`
      )
    : "";

  const humidTip = humidity !== null
    ? t(
        `Relative humidity is ${humidity}% — higher humidity makes it feel warmer and stickier`,
        `सापेक्ष आर्द्रता ${humidity}% आहे — जास्त आर्द्रतेमुळे उकाडा जास्त जाणवतो`
      )
    : "";

  const rainTip = rain !== null
    ? t(
        `${rainPct}% chance of rain in the next 3 hours — ${rain.en}`,
        `पुढील ३ तासांत ${rainPct}% पावसाची शक्यता — ${rain.mr}`
      )
    : "";

  const aqiTip = aqiCat
    ? t(
        `Air Quality Index is ${aqi} (${aqiCat.labelEn}) — ${aqiCat.descEn}`,
        `वायू गुणवत्ता निर्देशांक ${aqi} (${aqiCat.labelMr}) — ${aqiCat.descMr}`
      )
    : "";

  return (
    <div className="bg-civic-ink text-white/80 text-[11px] font-medium border-b border-white/10">
      <div className="container flex items-center justify-between gap-2 py-2 flex-wrap">

        {/* ── LEFT: Accessibility ── */}
        <div className="flex items-center gap-0.5 whitespace-nowrap">
          <button onClick={() => applyFontSize(Math.max(80, fontSize - 10))}
            title={t("Decrease text size", "अक्षर लहान करा")}
            className="px-1.5 py-0.5 hover:text-civic-gold transition-colors font-bold text-sm leading-none">
            {t("A-", "अ-")}
          </button>
          <span className="text-white/15 mx-0.5">|</span>
          <button onClick={() => applyFontSize(100)}
            title={t("Normal text size", "सामान्य आकार")}
            className={`px-1.5 py-0.5 transition-colors font-bold text-base leading-none ${fontSize === 100 ? "text-civic-gold" : "hover:text-civic-gold"}`}>
            {t("A", "अ")}
          </button>
          <span className="text-white/15 mx-0.5">|</span>
          <button onClick={() => applyFontSize(Math.min(150, fontSize + 10))}
            title={t("Increase text size", "अक्षर मोठे करा")}
            className="px-1.5 py-0.5 hover:text-civic-gold transition-colors font-bold text-lg leading-none">
            {t("A+", "अ+")}
          </button>
          <span className="text-white/15 mx-0.5">|</span>
          <button
            type="button"
            onClick={toggleColorBlind}
            aria-pressed={colorBlind}
            title={t(
              colorBlind ? "Disable color-blind friendly mode" : "Enable color-blind friendly mode",
              colorBlind ? "कलर ब्लाइंड अनुकूल मोड बंद करा " : "कलर ब्लाइंड अनुकूल मोड सुरु करा"            )}
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors leading-none ${
              colorBlind ? "text-civic-gold bg-white/10" : "hover:text-civic-gold"
            }`}
          >
            <Contrast className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wide">
              {t("Color blind", "कलर ब्लाइंड" )}
            </span>
          </button>
        </div>

        {/* ── RIGHT: Live data + lang + time ── */}
        <div className="flex items-center gap-0 whitespace-nowrap">

          {/* Loading shimmer */}
          {loading && (
            <div className="flex items-center gap-2 opacity-40 animate-pulse mr-3 text-[11px]">
              <span>🌡️ —°C</span>
              <span className="text-white/20">│</span>
              <span>AQI —</span>
            </div>
          )}

          {/* ── Temperature ── */}
          {!loading && tempC !== null && (
            <Tip tip={tempTip}>
              <div className="flex items-center gap-1.5 pr-2 text-white/90">
                <span className="text-[13px] leading-none" aria-hidden>{weatherEmoji}</span>
                <span className="font-bold text-white">{tempC}°C</span>
              </div>
            </Tip>
          )}

          {/* ── Humidity ── */}
          {!loading && humidity !== null && (
            <>
              <span className="text-white/20 hidden sm:block">·</span>
              <Tip tip={humidTip}>
                <div className="hidden sm:flex items-center gap-1 px-2 text-white/55">
                  <span>💧</span>
                  <span>{humidity}% {t("humidity", "आर्द्रता")}</span>
                </div>
              </Tip>
            </>
          )}

          {/* ── Rain probability ── */}
          {!loading && rain && rainPct !== null && (
            <>
              <span className="text-white/20 hidden sm:block">·</span>
              <Tip tip={rainTip}>
                <div
                  className="flex items-center gap-1 px-2 font-semibold"
                  style={{ color: rain.color }}
                >
                  {/* raindrop icon */}
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-85 shrink-0">
                    <path fillRule="evenodd" d="M10 1.75a.75.75 0 0 1 .6.3l5.25 7a.75.75 0 0 1-.094 1.001A3.75 3.75 0 1 1 4.244 9.55a.75.75 0 0 1-.094-1L9.4 2.05a.75.75 0 0 1 .6-.3ZM10 15.5a2.25 2.25 0 0 0 1.893-3.462l-1.89.001L8.107 12.038A2.25 2.25 0 0 0 10 15.5Z" clipRule="evenodd" />
                  </svg>
                  <span>{rainPct}%</span>
                  <span className="hidden sm:inline text-white/50 font-normal">
                    {t(rain.en, rain.mr)}
                  </span>
                </div>
              </Tip>
            </>
          )}

          {/* ── AQI ── */}
          {!loading && aqi !== null && aqiCat && (
            <>
              <Sep />
              <Tip tip={aqiTip}>
                <div className="flex items-center gap-1.5 px-1">
                  {/* wind icon */}
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" stroke="currentColor"
                    className="w-3.5 h-3.5 shrink-0" style={{ color: aqiCat.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h11a3 3 0 0 1 0 6H3M3 12h8" />
                  </svg>
                  <span className="font-bold" style={{ color: aqiCat.color }}>
                    {t("AQI", "वायुगुणवत्ता")} {aqi}
                  </span>
                  <Dot color={aqiCat.color} />
                  {/* badge */}
                  <span
                    className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-tight"
                    style={{
                      background: aqiCat.bg,
                      color: aqiCat.color,
                      border: `1px solid ${aqiCat.color}60`,
                    }}
                  >
                    {t(aqiCat.labelEn, aqiCat.labelMr)}
                  </span>
                </div>
              </Tip>
            </>
          )}

          {/* ── Language switcher (portal clone sits above dialogs when open) ── */}
          <div
            ref={langSlotRef}
            data-lang-switcher=""
            className={`flex items-center gap-1 border-l border-white/15 ml-2 pl-3 ${dialogOpen ? "invisible" : ""}`}
          >
            <Globe className="h-3 w-3 opacity-50 shrink-0" />
            <button type="button" onClick={() => setLang("en")}
              className={`px-1.5 py-0.5 rounded transition-all text-[11px] ${lang === "en" ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"}`}>
              EN
            </button>
            <span className="opacity-20">|</span>
            <button type="button" onClick={() => setLang("mr")}
              className={`px-1.5 py-0.5 rounded transition-all text-[11px] ${lang === "mr" ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"}`}>
              मराठी
            </button>
          </div>
          {dialogOpen && langSlot && ReactDOM.createPortal(
            <div
              data-lang-switcher=""
              className="fixed z-[1200] flex items-center gap-1 rounded-md bg-[#0b2d5c] px-2 py-0.5 shadow-lg border border-white/10 text-white"
              style={{ top: langSlot.top, left: langSlot.left }}
            >
              <Globe className="h-3 w-3 opacity-50 shrink-0" />
              <button type="button" onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 rounded transition-all text-[11px] ${lang === "en" ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"}`}>
                EN
              </button>
              <span className="opacity-20">|</span>
              <button type="button" onClick={() => setLang("mr")}
                className={`px-1.5 py-0.5 rounded transition-all text-[11px] ${lang === "mr" ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"}`}>
                मराठी
              </button>
            </div>,
            document.body,
          )}

          {/* ── Date · Time ── */}
          <div className="hidden sm:flex items-center gap-1.5 border-l border-white/15 ml-2 pl-3 opacity-65">
            <span>📅 {formattedDate}</span>
            <span className="text-white/20">·</span>
            <span>🕐 {formattedTime}</span>
          </div>
          <div className="sm:hidden border-l border-white/15 ml-2 pl-3 opacity-65">
            🕐 {formattedTime}
          </div>

        </div>
      </div>
    </div>
  );
};
