import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const LINKS = [
  {
    nameEn: "Aaple Sarkar",
    nameMr: "आपले सरकार",
    url: "https://aaplesarkar.mahaonline.gov.in",
    placeholder: "AS",
    color: "#FF6B00",
  },
  {
    nameEn: "National Govt Services Portal",
    nameMr: "राष्ट्रीय सरकारी सेवा पोर्टल",
    url: "https://services.india.gov.in",
    placeholder: "NG",
    color: "#1a3a6b",
  },
  {
    nameEn: "GOI Web Directory",
    nameMr: "भारत सरकार वेब निर्देशिका",
    url: "https://goidirectory.nic.in",
    placeholder: "GD",
    color: "#0d6efd",
  },
  {
    nameEn: "Make in India",
    nameMr: "मेक इन इंडिया",
    url: "https://www.makeinindia.com",
    placeholder: "MI",
    color: "#FF9933",
  },
  {
    nameEn: "Incredible India",
    nameMr: "अतुल्य भारत",
    url: "https://www.incredibleindia.org",
    placeholder: "II",
    color: "#138808",
  },
  {
    nameEn: "PM India",
    nameMr: "पंतप्रधान भारत",
    url: "https://www.pmindia.gov.in",
    placeholder: "PM",
    color: "#1a3a6b",
  },
  {
    nameEn: "MyGov",
    nameMr: "माझे सरकार",
    url: "https://www.mygov.in",
    placeholder: "MG",
    color: "#FF6B00",
  },
  {
    nameEn: "PMNRF",
    nameMr: "पंतप्रधान राष्ट्रीय मदत निधी",
    url: "https://pmnrf.gov.in",
    placeholder: "NRF",
    color: "#c0392b",
  },
];

const VISIBLE = 4; // cards visible at once
const INTERVAL = 5000;

export const GovtLinksCarousel = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = LINKS.length;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % total);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  // Build visible indices (wrap around)
  const visibleLinks = Array.from({ length: VISIBLE }, (_, i) => LINKS[(current + i) % total]);

  return (
    <section className="bg-[#fff8f0] border-t border-b border-civic-gold/20 py-8">
      <div className="container">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-civic-red font-bold mb-1">
            {en ? "Related Websites" : "इतर संबंधित संकेतस्थळे"}
          </p>
          <h2 className="font-serif text-xl md:text-2xl text-civic-blue font-bold">
            {en ? "Government Portals" : "शासकीय पोर्टल"}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleLinks.map((link, i) => (
            <a
              key={`${current}-${i}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-white border-2 border-transparent hover:border-civic-gold rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Logo placeholder — replace src with actual logo later */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform"
                style={{ backgroundColor: link.color }}
              >
                {link.placeholder}
              </div>
              <p className="text-xs font-bold text-civic-ink text-center leading-tight group-hover:text-civic-blue transition-colors">
                {en ? link.nameEn : link.nameMr}
              </p>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {LINKS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-civic-gold w-5"
                  : "bg-civic-blue/30 hover:bg-civic-blue/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
