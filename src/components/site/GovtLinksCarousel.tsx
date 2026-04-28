import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

// Drop logo files in src/assets/govtlinks/ with these exact names
import aapleSarkarLogo from "@/assets/govtlinks/aaple-sarkar.png";
import nationalGovtLogo from "@/assets/govtlinks/national-govt-services.png";
import goiDirectoryLogo from "@/assets/govtlinks/goi-directory.png";
import makeInIndiaLogo from "@/assets/govtlinks/make-in-india.png";
import incredibleIndiaLogo from "@/assets/govtlinks/incredible-india.png";
import pmIndiaLogo from "@/assets/govtlinks/pm-india.png";
import myGovLogo from "@/assets/govtlinks/mygov.png";
import pmnrfLogo from "@/assets/govtlinks/pmnrf.png";

const LINKS = [
  {
    nameEn: "Aaple Sarkar",
    nameMr: "आपले सरकार",
    url: "https://aaplesarkar.mahaonline.gov.in",
    logo: aapleSarkarLogo,
    color: "#FF6B00",
    placeholder: "AS",
  },
  {
    nameEn: "National Govt Services Portal",
    nameMr: "राष्ट्रीय सरकारी सेवा पोर्टल",
    url: "https://services.india.gov.in",
    logo: nationalGovtLogo,
    color: "#1a3a6b",
    placeholder: "NG",
  },
  {
    nameEn: "GOI Web Directory",
    nameMr: "भारत सरकार वेब निर्देशिका",
    url: "https://goidirectory.nic.in",
    logo: goiDirectoryLogo,
    color: "#0d6efd",
    placeholder: "GD",
  },
  {
    nameEn: "Make in India",
    nameMr: "मेक इन इंडिया",
    url: "https://www.makeinindia.com",
    logo: makeInIndiaLogo,
    color: "#FF9933",
    placeholder: "MI",
  },
  {
    nameEn: "Incredible India",
    nameMr: "अतुल्य भारत",
    url: "https://www.incredibleindia.org",
    logo: incredibleIndiaLogo,
    color: "#138808",
    placeholder: "II",
  },
  {
    nameEn: "PM India",
    nameMr: "पंतप्रधान भारत",
    url: "https://www.pmindia.gov.in",
    logo: pmIndiaLogo,
    color: "#1a3a6b",
    placeholder: "PM",
  },
  {
    nameEn: "MyGov",
    nameMr: "माझे सरकार",
    url: "https://www.mygov.in",
    logo: myGovLogo,
    color: "#FF6B00",
    placeholder: "MG",
  },
  {
    nameEn: "PMNRF",
    nameMr: "पंतप्रधान राष्ट्रीय मदत निधी",
    url: "https://pmnrf.gov.in",
    logo: pmnrfLogo,
    color: "#c0392b",
    placeholder: "NRF",
  },
];

const VISIBLE = 4;
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

  const goTo = (i: number) => { setCurrent(i); startTimer(); };

  const visibleLinks = Array.from({ length: VISIBLE }, (_, i) => LINKS[(current + i) % total]);

  return (
    <section className="bg-[#fff8f0] border-t border-b border-civic-gold/20 py-8">
      <div className="container">
        <div className="text-center mb-6">
          <p className="text-xs uppercase text-civic-red font-bold mb-1">
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
            >
              {/* Logo image with colored placeholder fallback */}
              <div className="w-20 h-16 flex items-center justify-center rounded-xl overflow-hidden bg-gray-50">
                <img
                  src={link.logo}
                  alt={link.nameEn}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement!;
                    parent.style.backgroundColor = link.color;
                    parent.innerHTML = `<span style="color:white;font-weight:700;font-size:1.1rem">${link.placeholder}</span>`;
                  }}
                />
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
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "bg-civic-gold w-5" : "bg-civic-blue/30 hover:bg-civic-blue/60 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
