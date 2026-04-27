import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Youtube, Facebook, ChevronRight } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TOTAL_VISITORS = 662770;
const TODAY_VISITORS = 2659;
const LAST_UPDATED = "11-01-2026";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.5-7.8-2.83-2.83-11.66 10.43zm16.7-9.65L16.35 12l3.53-2.11-3.53-2.11L3.18.24C2.83.07 2.49.07 2.18.24L15.88 14 3.18 23.76c.3.17.64.24.99.2l15.71-9.07c.63-.36.63-1.22 0-1.58z"/>
  </svg>
);

const linkCls = "flex items-center gap-1 text-white/65 hover:text-civic-gold transition-colors text-sm py-0.5";

export const Footer = () => {
  const { lang } = useLang();
  const en = lang === "en";

  const othersLinks = [
    { en: "FAQ's", mr: "वारंवार विचारले जाणारे प्रश्न", to: "/under-construction" },
    { en: "Web Site Policies", mr: "संकेतस्थळ धोरणे", to: "/under-construction" },
    { en: "Disclaimer", mr: "अस्वीकरण", to: "/under-construction" },
    { en: "Citizen Feedback", mr: "नागरिक अभिप्राय", to: "/under-construction" },
    { en: "Sitemap", mr: "साइटमॅप", to: "/under-construction" },
    { en: "RTI", mr: "माहिती अधिकार", to: "/under-construction" },
    { en: "Public Documents", mr: "सार्वजनिक दस्तऐवज", to: "/public-documents" },
  ];

  const serviceLinks = [
    { en: "Right To Services (RTS)", mr: "सेवा हक्क (RTS)", to: "/under-construction" },
    { en: "Property Tax", mr: "मालमत्ता कर", to: "/services" },
    { en: "Pay Your Water Charges", mr: "पाणी कर भरा", to: "/services" },
    { en: "RTI", mr: "माहिती अधिकार", to: "/under-construction" },
    { en: "e-Tender", mr: "ई-निविदा", to: "https://mahatenders.gov.in/nicgep/app" },
    { en: "Birth Certificate", mr: "जन्म प्रमाणपत्र", to: "/services" },
    { en: "Death Certificate", mr: "मृत्यू प्रमाणपत्र", to: "/services" },
    { en: "Track Application", mr: "अर्ज स्थिती", to: "/track" },
    { en: "Tax Calculator", mr: "कर कॅल्क्युलेटर", to: "/tax-calculator" },
  ];

  return (
    <footer className="bg-[#1a1a2e] text-white pb-12">
      <div className="container py-12 grid gap-10 md:grid-cols-4">

        {/* Address */}
        <div>
          <h3 className="font-bold text-base mb-5 text-white">{en ? "Address" : "पत्ता"}</h3>
          <p className="text-white/65 text-sm leading-relaxed mb-5">
            {en ? (
              <>Chhatrapati Sambhajinagar Municipal Corporation,<br />Main Building, Town Hall,<br />behind Head Post Office,<br />Chhatrapati SambhajiNagar,<br />Maharashtra, India, 431001</>
            ) : (
              <>छत्रपती संभाजीनगर महानगरपालिका,<br />मुख्य इमारत, टाऊन हॉल,<br />हेड पोस्ट ऑफिसच्या मागे,<br />छत्रपती संभाजीनगर,<br />महाराष्ट्र, भारत, ४३१००१</>
            )}
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="YouTube" className="h-8 w-8 rounded-full bg-white/10 hover:bg-civic-gold hover:text-civic-ink flex items-center justify-center transition-all">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="h-8 w-8 rounded-full bg-white/10 hover:bg-civic-gold hover:text-civic-ink flex items-center justify-center transition-all">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="h-8 w-8 rounded-full bg-white/10 hover:bg-civic-gold hover:text-civic-ink flex items-center justify-center transition-all">
              <XIcon />
            </a>
          </div>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-bold text-base mb-5 text-white">{en ? "Others" : "इतर"}</h3>
          <ul className="space-y-1">
            {othersLinks.map(item => (
              <li key={item.en}>
                <Link to={item.to} className={linkCls}>
                  <ChevronRight className="h-3.5 w-3.5 text-civic-gold shrink-0" />
                  {en ? item.en : item.mr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-base mb-5 text-white">{en ? "Services" : "सेवा"}</h3>
          <ul className="space-y-1">
            {serviceLinks.map(item => (
              <li key={item.en}>
                {item.to.startsWith("http") ? (
                  <a href={item.to} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    <ChevronRight className="h-3.5 w-3.5 text-civic-gold shrink-0" />
                    {en ? item.en : item.mr}
                  </a>
                ) : (
                  <Link to={item.to} className={linkCls}>
                    <ChevronRight className="h-3.5 w-3.5 text-civic-gold shrink-0" />
                    {en ? item.en : item.mr}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Visitors + App + WCAG */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-bold text-white mb-2">{en ? "Total Visitors Count :" : "एकूण भेटी :"}</p>
            <span className="inline-block bg-civic-gold text-civic-ink font-bold text-sm px-3 py-1 rounded">
              {TOTAL_VISITORS.toLocaleString()}
            </span>
          </div>
          <div>
            <div className="flex gap-3 mb-2">
              <a href="/under-construction" className="flex items-center gap-2 bg-black border border-white/20 hover:border-civic-gold rounded-xl px-3 py-2 transition-colors">
                <AppleIcon />
                <div className="leading-tight">
                  <p className="text-[9px] text-white/60">{en ? "Download on the" : "डाउनलोड करा"}</p>
                  <p className="text-xs font-bold text-white">App Store</p>
                </div>
              </a>
              <a href="/under-construction" className="flex items-center gap-2 bg-black border border-white/20 hover:border-civic-gold rounded-xl px-3 py-2 transition-colors">
                <PlayIcon />
                <div className="leading-tight">
                  <p className="text-[9px] text-white/60">{en ? "Get it on" : "मिळवा"}</p>
                  <p className="text-xs font-bold text-white">Google Play</p>
                </div>
              </a>
            </div>
            <p className="text-xs text-white/50">{en ? "Download My Smart Nagarik App" : "माय स्मार्ट नागरिक अॅप डाउनलोड करा"}</p>
          </div>
          <div>
            <a href="https://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 rounded-xl px-3 py-2 hover:border-civic-gold transition-colors">
              <p className="text-[10px] font-bold text-[#005A9C]" style={{ fontFamily: "serif" }}>W3C</p>
              <div className="leading-tight">
                <p className="text-xs font-bold text-white">WAI-A</p>
                <p className="text-[10px] text-white/60">WCAG 2.1</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="container py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/50">
          <span className="font-medium">
            {en ? "Chhatrapati Sambhajinagar Municipal Corporation © 2026" : "छत्रपती संभाजीनगर महानगरपालिका © २०२६"}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              {en ? "Last Updated On:" : "शेवटचे अद्यतन:"}{" "}
              <span className="bg-civic-gold text-civic-ink font-bold px-1.5 py-0.5 rounded text-[10px]">{LAST_UPDATED}</span>
            </span>
            <span>
              {en ? "Total Visitors:" : "एकूण भेटी:"}{" "}
              <span className="bg-civic-gold text-civic-ink font-bold px-1.5 py-0.5 rounded text-[10px]">{TOTAL_VISITORS.toLocaleString()}</span>
            </span>
            <span>
              {en ? "Today Visitors:" : "आजच्या भेटी:"}{" "}
              <span className="bg-civic-gold text-civic-ink font-bold px-1.5 py-0.5 rounded text-[10px]">{TODAY_VISITORS.toLocaleString()}</span>
            </span>
            <span>
              {en ? "Designed & developed by" : "निर्मिती:"}{" "}
              <a href="#" className="text-civic-gold hover:underline font-semibold">Mars Telecom Pvt Ltd</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
