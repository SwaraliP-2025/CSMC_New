import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";
import hero from "@/assets/hero-heritage.jpg";
import taxRebateBanner from "@/assets/banners/tax-rebate-banner.jpg";

// ─── Banner images list ──────────────────────────────────────────────────────
const BANNERS = [
  { id: 1, img: taxRebateBanner, alt: "माझा कर, माझी जबाबदारी — 10% सूट", link: "https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi" },
];

export const VideoHero = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const [tab, setTab] = useState<"hero" | "banners">("hero");
  const [bannerIdx, setBannerIdx] = useState(0);

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
        <section className="relative min-h-[50vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden w-full bg-black">
          {/* Banner image — full hero */}
          <img
            src={BANNERS[bannerIdx].img}
            alt={BANNERS[bannerIdx].alt}
            className="w-full h-full object-contain md:object-cover absolute inset-0"
            style={{ maxHeight: "85vh" }}
          />

          {/* Clickable overlay */}
          {BANNERS[bannerIdx].link && (
            <a
              href={BANNERS[bannerIdx].link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={BANNERS[bannerIdx].alt}
            />
          )}

          {/* Dots — only if multiple banners */}
          {BANNERS.length > 1 && (
            <>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {BANNERS.map((_, i) => (
                  <button key={i} onClick={() => setBannerIdx(i)}
                    className={`transition-all rounded-full ${i === bannerIdx ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"}`} />
                ))}
              </div>
              <button onClick={() => setBannerIdx(i => (i - 1 + BANNERS.length) % BANNERS.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center z-20 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => setBannerIdx(i => (i + 1) % BANNERS.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center z-20 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </>
          )}
        </section>
      )}
    </div>
  );
};
