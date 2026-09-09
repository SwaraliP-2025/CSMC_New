import { useLang } from "@/i18n/LanguageContext";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Droplets,
  Megaphone,
  Calculator,
  HousePlus,
  Search,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import heroEllora from "@/assets/hero-heritage.jpg";
import emblem from "@/assets/cs-emblem.png";
import { HERO_BANNER_SLIDES } from "@/data/heroBanners";

const HERO_QUICK_ACTIONS: {
  labelEn: string;
  labelMr: string;
  href: string;
  icon: LucideIcon;
  iconClass: string;
}[] = [
  {
    labelEn: "Pay Property Tax",
    labelMr: "मालमत्ता कर भरा",
    href: "https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi",
    icon: CreditCard,
    iconClass: "text-emerald-600",
  },
  {
    labelEn: "Pay Water Tax",
    labelMr: "पाणी कर भरा",
    href: "https://chhs.chhsambhajinagarmc.org/Watersupply/pg/ledger/getWaterPgApi.do",
    icon: Droplets,
    iconClass: "text-sky-600",
  },
  {
    labelEn: "Register Your Complaint",
    labelMr: "तक्रार नोंदवा",
    href: "https://aurangabadmahapalika.org/csms/complaint_form.php",
    icon: Megaphone,
    iconClass: "text-orange-600",
  },
  {
    labelEn: "Gunthewari Challan Calculator",
    labelMr: "गुंठेवारी चलन कॅल्क्युलेटर",
    href: "https://rts.chhsambhajinagarmc.org/links/gunthewari_form_codev2",
    icon: Calculator,
    iconClass: "text-violet-600",
  },
  {
    labelEn: "Ramai Awas Yojana",
    labelMr: "रमाई आवास योजना",
    href: "https://chhsambhajinagarmc.org/RAMAI/ws/user/login.do",
    icon: HousePlus,
    iconClass: "text-amber-700",
  },
  {
    labelEn: "Know Your Application Status",
    labelMr: "अर्ज स्थिती जाणून घ्या",
    href: "https://chhsambhajinagarmc.org/csms/check_comp_status.php?id=250",
    icon: Search,
    iconClass: "text-civic-blue",
  },
  {
    labelEn: "All RTS Services",
    labelMr: "सर्व RTS सेवा",
    href: "https://rts.chhsambhajinagarmc.org/links/dashboard",
    icon: LayoutGrid,
    iconClass: "text-rose-600",
  },
];

/** Home-tab background images (auto-rotate + manual controls). */
const HERO_BG_SLIDES: {
  src: string;
  altEn: string;
  altMr: string;
  objectPos: string;
  fit: "cover" | "contain";
}[] = [
  {
    src: heroEllora,
    altEn: "Kailasa Temple, Ellora Caves — Chhatrapati Sambhajinagar",
    altMr: "कैलास मंदिर, वेरूळ लेणी — छत्रपती संभाजीनगर",
    objectPos: "object-[center_22%]",
    fit: "cover",
  },
];

/** Banner auto-advance. */
const BANNER_SLIDE_MS = 5000;
/** Hero background auto-advance. */
const HERO_SLIDE_MS = 5000;

export const VideoHero = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const [tab, setTab] = useState<"hero" | "banners">("hero");
  const [bannerIdx, setBannerIdx] = useState(0);
  const [heroIdx, setHeroIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [heroPaused, setHeroPaused] = useState(false);

  const slides = HERO_BANNER_SLIDES;
  const slide = slides[bannerIdx] ?? slides[0];
  const slideCount = slides.length;
  const heroCount = HERO_BG_SLIDES.length;
  const heroSlide = HERO_BG_SLIDES[heroIdx] ?? HERO_BG_SLIDES[0];

  const goPrev = useCallback(() => {
    setBannerIdx((i) => (i - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goNext = useCallback(() => {
    setBannerIdx((i) => (i + 1) % slideCount);
  }, [slideCount]);

  const goHeroPrev = useCallback(() => {
    setHeroIdx((i) => (i - 1 + heroCount) % heroCount);
  }, [heroCount]);

  const goHeroNext = useCallback(() => {
    setHeroIdx((i) => (i + 1) % heroCount);
  }, [heroCount]);

  // Banner tab: auto-slide every ~6.5s
  useEffect(() => {
    if (tab !== "banners" || paused || slideCount <= 1) return;
    const id = window.setInterval(goNext, BANNER_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [tab, paused, slideCount, goNext]);

  // Hero tab: auto-slide backgrounds every ~6s
  useEffect(() => {
    if (tab !== "hero" || heroPaused || heroCount <= 1) return;
    const id = window.setInterval(goHeroNext, HERO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [tab, heroPaused, heroCount, goHeroNext]);

  useEffect(() => {
    if (tab !== "banners") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab, goPrev, goNext]);

  useEffect(() => {
    if (tab !== "hero") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goHeroPrev();
      if (e.key === "ArrowRight") goHeroNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab, goHeroPrev, goHeroNext]);

  const title = en ? slide.titleEn : slide.titleMr;
  const subtitle = en ? slide.subtitleEn : slide.subtitleMr;
  const category = en ? slide.categoryEn : slide.categoryMr;
  const ctaLabel = en ? "Read more" : "अधिक वाचा";

  const slideBody = (
    <div className="relative z-10 flex h-full w-full flex-col md:flex-row items-center justify-center gap-4 md:gap-10 px-4 md:px-16 py-14 md:py-16">
      {slide.img ? (
        <div className="relative w-full max-w-xl md:max-w-2xl shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-black/20">
          <img
            src={slide.img}
            alt={title}
            className="w-full h-auto max-h-[38vh] md:max-h-[56vh] object-contain mx-auto"
          />
        </div>
      ) : null}

      <div className={`max-w-xl text-center ${slide.img ? "md:text-left" : "md:text-center"} text-white`}>
        {(category || slide.date) && (
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-civic-gold mb-2 md:mb-3">
            {[category, slide.date].filter(Boolean).join(" · ")}
          </p>
        )}
        <h2 className={`font-serif font-bold leading-snug drop-shadow-lg ${slide.img ? "text-lg sm:text-2xl md:text-3xl" : "text-xl sm:text-3xl md:text-4xl"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed drop-shadow-md line-clamp-4">
            {subtitle}
          </p>
        )}
        <span className="mt-5 inline-flex items-center rounded-full bg-civic-gold px-5 py-2 text-xs md:text-sm font-bold text-civic-ink shadow-lg">
          {ctaLabel} →
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      {/* Tab switcher */}
      <div className="absolute top-4 right-4 z-30 flex gap-1 bg-black/40 backdrop-blur-sm rounded-full p-1">
        <button
          type="button"
          onClick={() => setTab("hero")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${tab === "hero" ? "bg-white text-civic-ink" : "text-white/80 hover:text-white"}`}
        >
          {t.hero.tabHome}
        </button>
        <button
          type="button"
          onClick={() => setTab("banners")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${tab === "banners" ? "bg-civic-gold text-civic-ink" : "text-white/80 hover:text-white"}`}
        >
          {t.hero.tabNotices}
          {slideCount > 0 && (
            <span className="ml-1 bg-civic-red text-white text-[9px] rounded-full px-1">{slideCount}</span>
          )}
        </button>
      </div>

      {/* Hero image tab */}
      {tab === "hero" && (
        <section
          className="relative min-h-[52vh] md:min-h-[75vh] flex items-center overflow-hidden w-full"
          aria-roledescription="carousel"
          aria-label={en ? "Heritage hero images" : "वारसा मुख्य प्रतिमा"}
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocusCapture={() => setHeroPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeroPaused(false);
          }}
        >
          <div className="absolute inset-0 w-full h-full bg-[#0b1f3a]">
            {HERO_BG_SLIDES.map((bg, i) => (
              <img
                key={bg.src}
                src={bg.src}
                alt={i === heroIdx ? (en ? bg.altEn : bg.altMr) : ""}
                aria-hidden={i !== heroIdx}
                className={`absolute inset-0 w-full h-full ${bg.fit === "contain" ? "object-contain" : "object-cover"} ${bg.objectPos} transition-opacity duration-700 ease-in-out ${
                  i === heroIdx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-overlay opacity-80" />
          <div className="relative container py-10 md:py-24 z-10 animate-fade-up">
            <div className="max-w-3xl pr-[min(48%,11.25rem)] md:pr-[280px]">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-civic-gold font-bold mb-3 md:mb-4 drop-shadow-md">
                {t.hero.eyebrow}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg whitespace-pre-line">
                {t.hero.title}
              </h2>
              {t.hero.subtitle && (
                <p className="text-sm md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
                  {t.hero.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Quick actions: right side; raised on mobile so they stay inside the hero */}
          <div className="absolute right-2 sm:right-3 md:right-6 top-[4.5rem] md:top-1/2 md:-translate-y-1/2 z-20 w-max max-w-[min(60vw,14rem)] md:max-w-none flex flex-col items-stretch gap-0.5 md:gap-2">
            {HERO_QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              const label = en ? action.labelEn : action.labelMr;
              return (
                <a
                  key={action.labelEn}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-1.5 md:gap-2.5 bg-white/95 text-civic-ink rounded-full pl-1.5 pr-2 py-0.5 md:pl-3.5 md:pr-5 md:py-2 shadow-md md:shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all border border-white/80"
                >
                  <span className={`flex h-5 w-5 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 ${action.iconClass}`}>
                    <Icon className="h-3 w-3 md:h-4 md:w-4" aria-hidden />
                  </span>
                  <span className="text-[9px] sm:text-[10px] md:text-sm font-bold leading-snug whitespace-nowrap">{label}</span>
                </a>
              );
            })}
          </div>

          {heroCount > 1 && (
            <>
              <button
                type="button"
                onClick={goHeroPrev}
                aria-label={en ? "Previous hero image" : "मागील मुख्य प्रतिमा"}
                className="absolute left-2 md:left-4 bottom-16 md:bottom-20 z-20 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/25 text-white/90 backdrop-blur-sm hover:bg-black/45 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={goHeroNext}
                aria-label={en ? "Next hero image" : "पुढील मुख्य प्रतिमा"}
                className="absolute right-2 md:right-4 bottom-16 md:bottom-20 z-20 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/25 text-white/90 backdrop-blur-sm hover:bg-black/45 transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>

              <div
                className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
                role="tablist"
                aria-label={en ? "Hero images" : "मुख्य प्रतिमा"}
              >
                {HERO_BG_SLIDES.map((bg, i) => (
                  <button
                    key={bg.src}
                    type="button"
                    role="tab"
                    aria-selected={i === heroIdx}
                    aria-label={en ? `Image ${i + 1}: ${bg.altEn}` : `प्रतिमा ${i + 1}: ${bg.altMr}`}
                    onClick={() => setHeroIdx(i)}
                    className={`rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      i === heroIdx ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/45 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* Banner / updates slider tab */}
      {tab === "banners" && (
        <section
          className="relative min-h-[52vh] md:min-h-[75vh] w-full overflow-hidden"
          aria-roledescription="carousel"
          aria-label={en ? "Municipal updates and notices" : "महापालिका अद्यतने व सूचना"}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
        >
          {/* CSMC-style fill behind variable-size artwork */}
          <div className="absolute inset-0 bg-gradient-to-br from-civic-blue via-[#123a6b] to-civic-ink" aria-hidden />
          <div className="absolute inset-0 heritage-pattern opacity-40" aria-hidden />
          <img
            src={emblem}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70%,28rem)] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.08] object-contain select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" aria-hidden />

          {slide.external ? (
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-civic-gold"
              aria-label={title}
            >
              {slideBody}
            </a>
          ) : (
            <Link
              to={slide.link}
              className="absolute inset-0 z-10 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-civic-gold"
              aria-label={title}
            >
              {slideBody}
            </Link>
          )}

          {slideCount > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label={en ? "Previous update" : "मागील अद्यतन"}
                className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/25 text-white/90 backdrop-blur-sm hover:bg-black/45 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={en ? "Next update" : "पुढील अद्यतन"}
                className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/25 text-white/90 backdrop-blur-sm hover:bg-black/45 transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>

              <div
                className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
                role="tablist"
                aria-label={en ? "Banner slides" : "बॅनर स्लाइड्स"}
              >
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === bannerIdx}
                    aria-label={en ? `Slide ${i + 1}: ${s.titleEn}` : `स्लाइड ${i + 1}: ${s.titleMr}`}
                    onClick={() => setBannerIdx(i)}
                    className={`rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      i === bannerIdx ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/45 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
};
