import smartNagarikImg from "@/assets/apps/Smart Nagarik App Logo.png";
import sakshamImg from "@/assets/apps/Saksham App Logo.png";
import chaloImg from "@/assets/apps/Chalo Logo.png";
import jalBellImg from "@/assets/apps/Jal Bell App Logo.png";
import mazaImg from "@/assets/apps/Maza Swacchatasathi App Logo.png";
import cleanStreetsImg from "@/assets/apps/cleanStreetsImg.png";
import { useLang } from "@/i18n/LanguageContext";

const APPS = [
  {
    name: "Smart Nagarik",
    img: smartNagarikImg,
    url: "https://play.google.com/store/apps/details?id=vmax.com.smartnagrik&hl=en_IN",
    label: "Google Play",
  },
  {
    name: "Saksham App",
    img: sakshamImg,
    url: "/under-construction",
    label: "APK Download",
  },
  {
    name: "Chalo App",
    img: chaloImg,
    url: "https://play.google.com/store/apps/details?id=app.zophop&hl=en_IN&pli=1",
    label: "Google Play",
  },
  {
    name: "Jal Bell",
    img: jalBellImg,
    url: "https://play.google.com/store/apps/details?id=in.xpica.jalbellv2&hl=en_IN",
    label: "Google Play",
  },
  {
    name: "Maza Swacchhatasathi",
    img: mazaImg,
    url: "https://play.google.com/store/apps/details?id=livetracking.ekatta.in",
    label: "Google Play",
  },
  {
    name: "Clean Streets",
    img: cleanStreetsImg,
    url: "https://play.google.com/store/apps/details?id=com.csamc.clean_streets&hl=en",
    label: "Google Play",
  },
];

export const AppsBar = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
  <div className="bg-civic-ink border-t border-white/10 py-5">
    <div className="container">
      <p className="text-xs uppercase tracking-widest font-bold text-civic-gold mb-4 text-center">
        {en ? "Download Our Apps" : "आमचे अॅप्स डाउनलोड करा"}
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {APPS.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target={app.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-civic-gold/50 rounded-lg px-3 py-2 transition-all group"
          >
            <img src={app.img} alt={app.name} className="w-8 h-8 rounded-md object-contain shrink-0 bg-white p-0.5" />
            <div>
              <p className="text-white font-semibold text-[11px] leading-tight group-hover:text-civic-gold transition-colors whitespace-nowrap">{app.name}</p>
              <p className="text-civic-gold text-[9px] font-bold">{app.label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
  );
};
