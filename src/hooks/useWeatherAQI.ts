/**
 * useWeatherAQI
 *
 * Weather  → Open-Meteo (free, no key)
 *   – current temperature, weather_code
 *   – hourly precipitation_probability for next 3 hrs → max rain chance
 *
 * AQI      → AQICN / waqi.info (optional VITE_AQICN_TOKEN)
 *   – returns aqi directly (already US EPA scale)
 *   – skipped gracefully when token is empty
 *
 * Refreshes every 10 minutes.
 */
import { useEffect, useState } from "react";

// Optional token from env; never hardcode a production/demo secret here.
const AQICN_TOKEN =
  (typeof import.meta !== "undefined" && (import.meta.env?.VITE_AQICN_TOKEN as string | undefined)) ||
  "";

const LAT = 19.877;
const LON = 75.343;
const REFRESH_MS = 10 * 60 * 1000;

// ── AQI category ──────────────────────────────────────────────────────────────
export interface AQICategory {
  labelEn: string;
  labelMr: string;
  descEn: string;
  descMr: string;
  color: string;
  bg: string;
}

export function getAQICategory(aqi: number, colorBlind = false): AQICategory {
  // Okabe–Ito–inspired colours when color-blind mode is on (distinct by hue + lightness)
  if (aqi <= 50)  return {
    labelEn: "Good",             labelMr: "चांगली",
    descEn:  "Air quality is satisfactory. No health risk.",
    descMr:  "हवेची गुणवत्ता समाधानकारक आहे. आरोग्यास धोका नाही.",
    color: colorBlind ? "#0072B2" : "#22c55e",
    bg: colorBlind ? "#0072B228" : "#22c55e28",
  };
  if (aqi <= 100) return {
    labelEn: "Moderate",         labelMr: "मध्यम",
    descEn:  "Acceptable air quality. Sensitive individuals may experience minor effects.",
    descMr:  "स्वीकार्य हवेची गुणवत्ता. संवेदनशील व्यक्तींना किरकोळ त्रास होऊ शकतो.",
    color: colorBlind ? "#E69F00" : "#eab308",
    bg: colorBlind ? "#E69F0028" : "#eab30828",
  };
  if (aqi <= 150) return {
    labelEn: "Unhealthy (Sensitive)", labelMr: "संवेदनशीलांसाठी अस्वास्थ्यकर",
    descEn:  "Sensitive groups may face health issues. General public is unaffected.",
    descMr:  "संवेदनशील गटांना आरोग्य समस्या होऊ शकतात. सर्वसामान्यांवर परिणाम नाही.",
    color: colorBlind ? "#D55E00" : "#f97316",
    bg: colorBlind ? "#D55E0028" : "#f9731628",
  };
  if (aqi <= 200) return {
    labelEn: "Unhealthy",        labelMr: "अस्वास्थ्यकर",
    descEn:  "Everyone may begin to experience health effects.",
    descMr:  "सर्वांना आरोग्यावर परिणाम जाणवू शकतो.",
    color: colorBlind ? "#CC79A7" : "#ef4444",
    bg: colorBlind ? "#CC79A728" : "#ef444428",
  };
  if (aqi <= 300) return {
    labelEn: "Very Unhealthy",   labelMr: "अत्यंत अस्वास्थ्यकर",
    descEn:  "Health alert: everyone may experience serious health effects.",
    descMr:  "आरोग्य सतर्कता: सर्वांना गंभीर त्रास होऊ शकतो.",
    color: colorBlind ? "#56B4E9" : "#a855f7",
    bg: colorBlind ? "#56B4E928" : "#a855f728",
  };
  return {
    labelEn: "Hazardous",        labelMr: "धोकादायक",
    descEn:  "Emergency conditions. The entire population may be affected.",
    descMr:  "आणीबाणीची स्थिती. संपूर्ण लोकसंख्येला धोका.",
    color: colorBlind ? "#000000" : "#dc2626",
    bg: colorBlind ? "#00000028" : "#dc262628",
  };
}

// ── WMO weather code → emoji + bilingual label ────────────────────────────────
export function wmoToEmoji(code: number | null): string {
  if (code === null) return "🌡️";
  if (code === 0)    return "☀️";
  if (code <= 2)     return "🌤️";
  if (code <= 3)     return "☁️";
  if (code <= 49)    return "🌫️";
  if (code <= 55)    return "🌦️";
  if (code <= 67)    return "🌧️";
  if (code <= 77)    return "🌨️";
  if (code <= 82)    return "🌦️";
  if (code <= 99)    return "⛈️";
  return "🌡️";
}

export function wmoLabel(code: number | null): { en: string; mr: string } {
  if (code === null) return { en: "Temperature",   mr: "तापमान" };
  if (code === 0)    return { en: "Clear sky",     mr: "स्वच्छ आकाश" };
  if (code <= 2)     return { en: "Partly cloudy", mr: "अंशतः ढगाळ" };
  if (code <= 3)     return { en: "Overcast",      mr: "संपूर्ण ढगाळ" };
  if (code <= 49)    return { en: "Foggy / Haze",  mr: "धुके / धुरके" };
  if (code <= 55)    return { en: "Drizzle",       mr: "रिमझिम पाऊस" };
  if (code <= 67)    return { en: "Rain",          mr: "पाऊस" };
  if (code <= 77)    return { en: "Snow",          mr: "हिमवर्षाव" };
  if (code <= 82)    return { en: "Rain showers",  mr: "पावसाचे सरी" };
  if (code <= 99)    return { en: "Thunderstorm",  mr: "वादळी पाऊस" };
  return { en: "Weather", mr: "हवामान" };
}

// ── Rain probability label ─────────────────────────────────────────────────────
export function rainLabel(pct: number): { en: string; mr: string; color: string } {
  if (pct < 20)  return { en: "No rain expected",  mr: "पाऊस नाही",          color: "#94a3b8" };
  if (pct < 50)  return { en: "Slight chance",     mr: "थोडी शक्यता",        color: "#60a5fa" };
  if (pct < 70)  return { en: "Likely rain",       mr: "पाऊस होण्याची शक्यता",  color: "#3b82f6" };
  return               { en: "Rain expected",      mr: "पाऊस अपेक्षित",      color: "#1d4ed8" };
}

// ── State type ────────────────────────────────────────────────────────────────
export interface WeatherAQIState {
  tempC: number | null;
  feelsLike: number | null;
  weatherCode: number | null;
  rainPct: number | null;       // 0-100, max of next 3 hrs
  humidity: number | null;
  aqi: number | null;
  aqiStation: string;
  loading: boolean;
  error: boolean;
}

export function useWeatherAQI(): WeatherAQIState {
  const [state, setState] = useState<WeatherAQIState>({
    tempC: null, feelsLike: null, weatherCode: null,
    rainPct: null, humidity: null,
    aqi: null, aqiStation: "",
    loading: true, error: false,
  });

  const fetchAll = async () => {
    try {
      // ── 1. Open-Meteo weather ──────────────────────────────────────────────
      const now = new Date();
      // We need the current hour index to extract rain probability
      const weatherUrl =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${LAT}&longitude=${LON}` +
        `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code` +
        `&hourly=precipitation_probability` +
        `&forecast_hours=6` +
        `&timezone=Asia%2FKolkata`;

      const weatherRes = await fetch(weatherUrl);
      const weather = await weatherRes.json();

      // ── Parse weather ──────────────────────────────────────────────────────
      const tempC      = Math.round(weather?.current?.temperature_2m ?? 0);
      const feelsLike  = Math.round(weather?.current?.apparent_temperature ?? tempC);
      const humidity   = Math.round(weather?.current?.relative_humidity_2m ?? 0);
      const weatherCode = weather?.current?.weather_code ?? null;

      // precipitation_probability: hourly array — pick max of next 3 hours
      const hourlyTimes: string[] = weather?.hourly?.time ?? [];
      const hourlyRain: number[]  = weather?.hourly?.precipitation_probability ?? [];
      const nowHour = now.getHours();
      let rainPct = 0;
      hourlyTimes.forEach((t, i) => {
        const h = new Date(t).getHours();
        if (h >= nowHour && h < nowHour + 3) {
          rainPct = Math.max(rainPct, hourlyRain[i] ?? 0);
        }
      });

      // ── Parse AQI (optional token) ─────────────────────────────────────────
      let aqi: number | null = null;
      let aqiStation = "Aurangabad";
      if (AQICN_TOKEN) {
        try {
          const aqiUrl =
            `https://api.waqi.info/feed/geo:${LAT};${LON}/?token=${encodeURIComponent(AQICN_TOKEN)}`;
          const aqiRes = await fetch(aqiUrl);
          const aqiData = await aqiRes.json();
          if (aqiData?.status === "ok") {
            aqi = typeof aqiData.data?.aqi === "number" ? aqiData.data.aqi : null;
            aqiStation = aqiData.data?.city?.name ?? "Aurangabad";
          }
        } catch {
          /* keep weather; AQI stays null */
        }
      }

      setState({
        tempC, feelsLike, weatherCode,
        rainPct, humidity,
        aqi, aqiStation,
        loading: false, error: false,
      });
    } catch {
      setState((s) => ({ ...s, loading: false, error: true }));
    }
  };

  useEffect(() => {
    fetchAll();
    const id = setInterval(fetchAll, REFRESH_MS);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
