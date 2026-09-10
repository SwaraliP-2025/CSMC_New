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
import { GoogleTranslateWidget } from "@/components/site/GoogleTranslateWidget";
import { clearGoogleTranslateCookie, readGoogleTranslateTarget } from "@/components/site/googleTranslate";

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
              className="bg-[#122440] border border-white/15 text-white/90 text-[11px]
                         font-medium rounded-lg px-3 py-2 shadow-2xl leading-snug"
              style={{ maxWidth: 340, width: "max-content" }}
            >
              {/* arrow pointing up */}
              <span
                className="absolute -top-1.5 left-1/2 -translate-x-1/2
                           border-4 border-transparent border-b-[#122440]"
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
  const { lang, setLang, d } = useLang();
  const { enabled: colorBlind, toggle: toggleColorBlind } = useColorBlind();
  const en = lang === "en";
  const machineTranslationActive = readGoogleTranslateTarget() !== null;
  const enOfficialActive = !machineTranslationActive && lang === "en";
  const mrOfficialActive = !machineTranslationActive && lang === "mr";
  const officialLangBtnClass = (active: boolean) =>
    `px-1 sm:px-1.5 py-0.5 rounded transition-all text-[10px] sm:text-[11px] whitespace-nowrap ${
      active ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"
    }`;
  const officialLangBtnClassPortal = (active: boolean) =>
    `px-1.5 py-0.5 rounded transition-all text-[11px] ${
      active ? "bg-civic-gold text-civic-ink font-bold" : "hover:text-white"
    }`;
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

  const formattedDate = d(
    dateTime.toLocaleDateString(en ? "en-IN" : "mr-IN", {
      day: "numeric", month: "numeric", year: "numeric",
    }),
  );
  const formattedTime = d(
    dateTime.toLocaleTimeString(en ? "en-IN" : "mr-IN", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }),
  );

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
        `${weatherLbl.mr} · छत्रपती संभाजीनगरमधील सध्याचे तापमान ${d(tempC)}°C आहे`
      )
    : "";

  const humidTip = humidity !== null
    ? t(
        `Relative humidity is ${humidity}% — higher humidity makes it feel warmer and stickier`,
        `सापेक्ष आर्द्रता ${d(humidity)}% आहे — जास्त आर्द्रतेमुळे उकाडा जास्त जाणवतो`
      )
    : "";

  const rainTip = rain !== null
    ? t(
        `${rainPct}% chance of rain in the next 3 hours — ${rain.en}`,
        `पुढील ${d(3)} तासांत ${d(rainPct)}% पावसाची शक्यता — ${rain.mr}`
      )
    : "";

  const aqiTip = aqiCat
    ? t(
        `Air Quality Index in ${aqiStation || "Chhatrapati Sambhajinagar"} is ${aqi} (${aqiCat.labelEn}) — ${aqiCat.descEn}`,
        `${aqiStation || "छत्रपती संभाजीनगर"} येथील वायू गुणवत्ता निर्देशांक ${d(aqi)} (${aqiCat.labelMr}) — ${aqiCat.descMr}`
      )
    : "";

  return (
    <div className="bg-civic-ink text-white/80 text-[11px] font-medium border-b border-white/10">
      <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1 py-1.5 sm:py-2 min-w-0">

        {/* Mobile row 1: accessibility + language. Desktop: accessibility left, language/date via order. */}
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 w-full sm:w-auto sm:contents">

          {/* ── LEFT: Accessibility + language (Website Guide spotlight target) ── */}
          <div
            data-tour="a11y"
            className="flex items-center gap-0.5 whitespace-nowrap shrink-0 rounded-md"
          >
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

          {/* ── Language + date (wraps to full width on phones so मराठी stays visible) ── */}
          <div className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 w-full min-w-0 basis-full sm:basis-auto sm:w-auto sm:flex-nowrap sm:shrink-0 sm:order-3 sm:gap-1">
            <div className="flex items-center min-w-0 max-w-[48%] min-[420px]:max-w-[9rem] sm:max-w-none sm:border-l sm:border-white/15 sm:ml-2 sm:pl-3">
              <GoogleTranslateWidget />
            </div>
            <div
              ref={langSlotRef}
              data-lang-switcher=""
              data-tour="lang-switch"
              translate="no"
              className={`notranslate flex items-center gap-0.5 sm:gap-1 shrink-0 sm:border-l sm:border-white/15 sm:ml-2 sm:pl-3 ${dialogOpen ? "invisible" : ""}`}
            >
              <Globe className="h-3 w-3 opacity-50 shrink-0 hidden sm:block" />
              <button type="button" onClick={() => { clearGoogleTranslateCookie(); setLang("en"); }}
                className={officialLangBtnClass(enOfficialActive)}
                aria-pressed={enOfficialActive}>
                ENGLISH
              </button>
              <span className="opacity-20">|</span>
              <button type="button" onClick={() => { clearGoogleTranslateCookie(); setLang("mr"); }}
                className={officialLangBtnClass(mrOfficialActive)}
                aria-pressed={mrOfficialActive}>
                मराठी
              </button>
            </div>
            {dialogOpen && langSlot && ReactDOM.createPortal(
              <div
                data-lang-switcher=""
                translate="no"
                className="notranslate fixed z-[1200] flex items-center gap-1 rounded-md bg-civic-blue px-2 py-0.5 shadow-lg border border-white/10 text-white"
                style={{ top: langSlot.top, left: langSlot.left }}
              >
                <Globe className="h-3 w-3 opacity-50 shrink-0" />
                <button type="button" onClick={() => { clearGoogleTranslateCookie(); setLang("en"); }}
                  className={officialLangBtnClassPortal(enOfficialActive)}
                  aria-pressed={enOfficialActive}>
                  ENGLISH
                </button>
                <span className="opacity-20">|</span>
                <button type="button" onClick={() => { clearGoogleTranslateCookie(); setLang("mr"); }}
                  className={officialLangBtnClassPortal(mrOfficialActive)}
                  aria-pressed={mrOfficialActive}>
                  मराठी
                </button>
              </div>,
              document.body,
            )}
            <div className="hidden sm:flex items-center gap-1.5 border-l border-white/15 ml-2 pl-3 opacity-65">
              <span>📅 {formattedDate}</span>
              <span className="text-white/20">·</span>
              <span>🕐 {formattedTime}</span>
            </div>
          </div>
        </div>

        {/* Mobile row 2: weather + AQI. Desktop: sits between accessibility and language. */}
        <div className="flex items-center justify-center sm:justify-end gap-0 w-full sm:w-auto sm:flex-1 sm:order-2 whitespace-nowrap overflow-x-auto border-t border-white/10 pt-1 sm:border-0 sm:pt-0 sm:overflow-visible">

          {loading && (
            <div className="flex items-center gap-2 opacity-40 animate-pulse text-[11px]">
              <span>🌡️ —°C</span>
              <span className="text-white/20">│</span>
              <span>AQI —</span>
            </div>
          )}

          {!loading && tempC !== null && (
            <Tip tip={tempTip}>
              <div className="flex items-center gap-1.5 px-1.5 sm:pr-2 text-white/90">
                <span className="text-[13px] leading-none" aria-hidden>{weatherEmoji}</span>
                <span className="font-bold text-white">{d(tempC)}°C</span>
              </div>
            </Tip>
          )}

          {!loading && rain && rainPct !== null && (
            <>
              <span className="text-white/20">·</span>
              <Tip tip={rainTip}>
                <div
                  className="flex items-center gap-1 px-1 sm:px-2 font-semibold"
                  style={{ color: rain.color }}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-85 shrink-0">
                    <path fillRule="evenodd" d="M10 1.75a.75.75 0 0 1 .6.3l5.25 7a.75.75 0 0 1-.094 1.001A3.75 3.75 0 1 1 4.244 9.55a.75.75 0 0 1-.094-1L9.4 2.05a.75.75 0 0 1 .6-.3ZM10 15.5a2.25 2.25 0 0 0 1.893-3.462l-1.89.001L8.107 12.038A2.25 2.25 0 0 0 10 15.5Z" clipRule="evenodd" />
                  </svg>
                  <span>{d(rainPct)}%</span>
                  <span className="text-white/50 font-normal sm:hidden">{t("rain", "पाऊस")}</span>
                  <span className="hidden sm:inline text-white/50 font-normal">
                    {t(rain.en, rain.mr)}
                  </span>
                </div>
              </Tip>
            </>
          )}

          {!loading && humidity !== null && (
            <>
              <span className="text-white/20">·</span>
              <Tip tip={humidTip}>
                <div className="flex items-center gap-1 px-1 sm:px-2 text-white/80">
                  <span aria-hidden>💧</span>
                  <span className="font-semibold text-white/90">{d(humidity)}%</span>
                  <span className="text-white/50 font-normal">{t("humidity", "आर्द्रता")}</span>
                </div>
              </Tip>
            </>
          )}

          {!loading && aqi !== null && aqiCat && (
            <>
              <Sep />
              <Tip tip={aqiTip}>
                <div className="flex items-center gap-1.5 px-1">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" stroke="currentColor"
                    className="w-3.5 h-3.5 shrink-0 hidden sm:block" style={{ color: aqiCat.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h11a3 3 0 0 1 0 6H3M3 12h8" />
                  </svg>
                  <span className="font-bold" style={{ color: aqiCat.color }}>
                    <span className="sm:hidden">AQI {d(aqi)}</span>
                    <span className="hidden sm:inline">{t("AQI", "वायुगुणवत्ता")} {d(aqi)}</span>
                  </span>
                  <Dot color={aqiCat.color} />
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
        </div>

      </div>
    </div>
  );
};
