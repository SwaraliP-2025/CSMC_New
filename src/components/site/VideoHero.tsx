import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";
import hero from "@/assets/hero-heritage.jpg";
import muncorpPic from "@/assets/muncorp_pic.png";

// ─── Banner data ────────────────────────────────────────────────────────────
// Add new banners here. Set `img` to an imported image path when available.
const BANNERS = [
  {
    id: 1,
    title: "माझा कर, माझी जबाबदारी",
    subtitle: "वेळेत कर भरा, 10% सूट मिळवा! शहराच्या विकासात हातभार लावा",
    tag: "विशेष लाभ",
    body: "30 एप्रिल 2026 पूर्वी मालमत्ता कर भरल्यास 10% सूट (Discount) मिळेल",
    bg: "from-orange-600 to-red-700",
    img: null as string | null,
  },
  {
    id: 2,
    title: "मतदान करा — लोकशाही मजबूत करा",
    subtitle: "आपला मतदानाचा हक्क बजावा",
    tag: "महत्त्वाची सूचना",
    body: "प्रत्येक मत महत्त्वाचे आहे. आपल्या मतदान केंद्रावर जा आणि मतदान करा.",
    bg: "from-blue-700 to-indigo-800",
    img: null as string | null,
  },
  {
    id: 3,
    title: "स्वच्छ सर्वेक्षण 2026",
    subtitle: "स्वच्छ शहर — सुंदर शहर",
    tag: "स्वच्छता अभियान",
    body: "आपल्या परिसर स्वच्छ ठेवा. कचरा कचराकुंडीतच टाका.",
    bg: "from-green-700 to-emerald-800",
    img: null as string | null,
  },
];

export const VideoHero = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const [tab, setTab] = useState<"hero" | "banners">("hero");
  const [bannerIdx, setBannerIdx] = useState(0);

  const banner = BANNERS[bannerIdx];

  return (
    <div className="relative w-full">
      {/* Tab switcher */}
      <div className="absolute top-4 right-4 z-20 flex gap-1 bg-black/40 backdrop-blur-sm rounded-full p-1">
        <button
          onClick={() => setTab("hero")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${tab === "hero" ? "bg-white text-civic-ink" : "text-white/80 hover:text-white"}`}
        >
          {en ? "Home" : "मुख्यपृष्ठ"}
        </button>
        <button
          onClick={() => setTab("banners")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${tab === "banners" ? "bg-civic-gold text-civic-ink" : "text-white/80 hover:text-white"}`}
        >
          {en ? "Notices" : "जाहिराती"}
          {BANNERS.length > 0 && (
            <span className="ml-1 bg-red-500 text-white text-[9px] rounded-full px-1">{BANNERS.length}</span>
          )}
        </button>
      </div>

      {/* Hero image tab */}
      {tab === "hero" && (
        <section className="relative min-h-[50vh] md:min-h-[85vh] flex items-center overflow-hidden w-full">
          <div className="absolute inset-0 w-full h-full">
            <img src={hero} alt="Chhatrapati Sambhajinagar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-overlay opacity-80" />
          <div className="relative container py-12 md:py-36 z-10 animate-fade-up">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-civic-gold font-bold mb-3 md:mb-4 drop-shadow-md">
                {t.hero.eyebrow}
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg">
                {t.hero.title}
              </h2>
              {t.hero.subtitle && (
                <p className="text-sm md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
                  {t.hero.subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Banners tab */}
      {tab === "banners" && (
        <section className={`relative min-h-[50vh] md:min-h-[85vh] flex items-center overflow-hidden w-full`}>
          {/* CSMC building as background */}
          <div className="absolute inset-0 w-full h-full">
            <img src={muncorpPic} alt="CSMC Building" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${banner.bg} opacity-80`} />

          <div className="relative container py-16 z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Banner content */}
            <div className="flex-1 text-white">
              <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {banner.tag}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
                {banner.title}
              </h2>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">{banner.subtitle}</p>
              <div className="bg-white/15 border border-white/20 rounded-xl px-5 py-4 text-white/95 text-base font-medium leading-relaxed">
                {banner.body}
              </div>
            </div>

            {/* Banner image placeholder */}
            {banner.img ? (
              <img src={banner.img} alt={banner.title} className="w-72 rounded-2xl shadow-2xl object-cover" />
            ) : (
              <div className="w-64 h-64 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center text-white/40 text-sm font-medium shrink-0">
                Banner Image
              </div>
            )}
          </div>

          {/* Banner navigation dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            {BANNERS.map((_, i) => (
              <button key={i} onClick={() => setBannerIdx(i)}
                className={`transition-all rounded-full ${i === bannerIdx ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`} />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button onClick={() => setBannerIdx(i => (i - 1 + BANNERS.length) % BANNERS.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center z-20 transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={() => setBannerIdx(i => (i + 1) % BANNERS.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center z-20 transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </section>
      )}
    </div>
  );
};
