import smartNagarikImg from "@/assets/apps/Smart Nagarik App Logo.png";
import sakshamImg from "@/assets/apps/Saksham App Logo.png";
import chaloImg from "@/assets/apps/Chalo Logo.png";
import jalBellImg from "@/assets/apps/Jal Bell App Logo.png";
import mazaImg from "@/assets/apps/Maza Swacchatasathi App Logo.png";
import cleanStreetsImg from "@/assets/apps/cleanStreetsImg.png";
import { useLang } from "@/i18n/LanguageContext";

const APPS = [
  { name: "Smart Nagarik", nameMr: "स्मार्ट नागरिक", img: smartNagarikImg, url: "https://play.google.com/store/apps/details?id=vmax.com.smartnagrik&hl=en_IN" },
  { name: "Saksham", nameMr: "सक्षम", img: sakshamImg, url: "/under-construction" },
  { name: "Chalo", nameMr: "चलो", img: chaloImg, url: "https://play.google.com/store/apps/details?id=app.zophop&hl=en_IN&pli=1" },
  { name: "Jal Bell", nameMr: "जल बेल", img: jalBellImg, url: "https://play.google.com/store/apps/details?id=in.xpica.jalbellv2&hl=en_IN" },
  { name: "Swacchhatasathi", nameMr: "स्वच्छतासाठी", img: mazaImg, url: "https://play.google.com/store/apps/details?id=livetracking.ekatta.in" },
  { name: "Clean Streets", nameMr: "क्लीन स्ट्रीट्स", img: cleanStreetsImg, url: "https://play.google.com/store/apps/details?id=com.csamc.clean_streets&hl=en" },
];

export const AppsBar = () => {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="bg-civic-ink border-t border-white/10 py-4">
      <div className="container">
        <p className="text-xs uppercase tracking-widest font-bold text-civic-gold mb-3 text-center">
          {en ? "Download Our Apps" : "आमचे अॅप्स डाउनलोड करा"}
        </p>

        {/* Mobile: 3-column icon grid */}
        <div className="grid grid-cols-3 gap-2 md:hidden">
          {APPS.map((app) => (
            <a key={app.name} href={app.url}
              target={app.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-civic-gold/50 rounded-xl p-2.5 transition-all group">
              <img src={app.img} alt={app.name} className="w-10 h-10 rounded-lg object-contain bg-white p-0.5" />
              <p className="text-white text-[10px] font-semibold text-center leading-tight group-hover:text-civic-gold transition-colors">
                {en ? app.name : app.nameMr}
              </p>
            </a>
          ))}
        </div>

        {/* Desktop: single row */}
        <div className="hidden md:flex flex-nowrap justify-center gap-2">
          {APPS.map((app) => (
            <a key={app.name} href={app.url}
              target={app.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-civic-gold/50 rounded-lg px-3 py-2 transition-all group">
              <img src={app.img} alt={app.name} className="w-8 h-8 rounded-md object-contain shrink-0 bg-white p-0.5" />
              <div>
                <p className="text-white font-semibold text-[11px] leading-tight group-hover:text-civic-gold transition-colors whitespace-nowrap">
                  {en ? app.name : app.nameMr}
                </p>
                <p className="text-civic-gold text-[9px] font-bold">Google Play</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
