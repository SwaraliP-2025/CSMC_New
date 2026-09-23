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
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    <section
      className="bg-[#fff8f0] border-2 border-civic-gold/60 py-10 md:py-14 mx-4 md:mx-8 rounded-lg shadow-md mb-6"
      onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
      onMouseLeave={startTimer}
      onFocus={() => { if (timerRef.current) clearInterval(timerRef.current); }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) startTimer();
      }}
    >
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-2">
            {en ? "Related Websites" : "इतर संबंधित संकेतस्थळे"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-civic-blue font-bold">
            {en ? "Government Portals" : "शासकीय पोर्टल"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            {en
              ? "Official gateways to national and state government services."
              : "राष्ट्रीय व राज्य शासकीय सेवांचे अधिकृत प्रवेशद्वार."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {visibleLinks.map((link, i) => (
            <a
              key={`${current}-${i}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-white border-2 border-transparent hover:border-civic-gold rounded-xl px-4 py-5 shadow-sm hover:shadow-md transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
              aria-label={en ? `${link.nameEn} (opens in a new tab)` : `${link.nameMr} (नवीन टॅबमध्ये उघडेल)`}
            >
              <div className="w-24 h-16 flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={link.logo}
                  alt=""
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform motion-reduce:transform-none"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement!;
                    parent.style.backgroundColor = link.color;
                    parent.innerHTML = `<span style="color:white;font-weight:700;font-size:0.9rem">${link.placeholder}</span>`;
                  }}
                />
              </div>
              <p className="text-xs md:text-sm font-bold text-civic-ink text-center leading-tight group-hover:text-civic-blue transition-colors">
                {en ? link.nameEn : link.nameMr}
              </p>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label={en ? "Government portal groups" : "शासकीय पोर्टल गट"}>
          {LINKS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={en ? `Show portal group ${i + 1}` : `पोर्टल गट ${i + 1} दाखवा`}
              aria-selected={i === current}
              role="tab"
              className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue ${
                i === current ? "bg-civic-gold w-6" : "bg-civic-blue/30 hover:bg-civic-blue/60 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
