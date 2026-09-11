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
  Globe2,
  type LucideIcon,
} from "lucide-react";
import emblem from "@/assets/cs-emblem.png";
import { HERO_BANNER_SLIDES } from "@/data/heroBanners";
import { TOUR_UI } from "@/data/tourContent";
import { FeaturedStoriesCarousel } from "@/components/site/FeaturedStoriesCarousel";

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

/** Banner auto-advance. */
const BANNER_SLIDE_MS = 5000;

const HeroQuickPanel = ({
  en,
  variant,
}: {
  en: boolean;
  variant: "mobile" | "desktop";
}) => {
  const outerClass =
    variant === "mobile"
      ? "relative z-10 mt-2 w-full max-w-md mx-auto md:hidden"
      : "absolute z-20 right-2 sm:right-3 md:right-6 top-24 bottom-14 hidden md:flex items-center justify-end max-w-[calc(100%-0.75rem)]";

  return (
    <div className={outerClass}>
      <div className="w-full md:w-max flex flex-col gap-1.5 md:gap-2">
        <button
          type="button"
          id={variant === "mobile" ? "csmc-tour-trigger-btn-mobile" : "csmc-tour-trigger-btn"}
          onClick={() => window.dispatchEvent(new CustomEvent("csmc-tour-open"))}
          aria-label={TOUR_UI.fabAria[en ? "en" : "mr"]}
          className="flex w-full max-w-full items-center gap-1.5 md:gap-2 rounded-full border border-[hsl(var(--civic-gold))] bg-[#003366] pl-1.5 pr-2.5 py-1 md:pl-3 md:pr-4 md:py-1.5 text-white shadow-md hover:bg-[#00264d] hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--civic-gold))]"
        >
          <span className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--civic-gold)/0.22)] text-[hsl(var(--civic-gold))]">
            <Globe2 className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden />
          </span>
          <span className="text-[10px] sm:text-[11px] md:text-xs font-bold leading-snug whitespace-nowrap truncate">
            {en ? TOUR_UI.fab.en : TOUR_UI.fab.mr}
          </span>
        </button>

        <nav
          data-tour="quick-services"
          aria-label={en ? "Quick citizen services" : "जलद नागरिक सेवा"}
        >
          <ul className="m-0 p-0 list-none w-full grid grid-cols-2 gap-1.5 md:flex md:flex-col md:gap-2">
            {HERO_QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              const label = en ? action.labelEn : action.labelMr;
              const isRts = action.labelEn === "All RTS Services";
              return (
                <li key={action.labelEn} className="min-w-0">
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(isRts ? { "data-tour": "rts-services" as const } : {})}
                    className="flex w-full items-center gap-1.5 md:gap-2.5 bg-white/95 text-civic-ink rounded-full pl-1.5 pr-2 py-1 md:pl-3.5 md:pr-5 md:py-2 shadow-md md:shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all border border-white/80"
                  >
                    <span className={`flex h-6 w-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 ${action.iconClass}`}>
                      <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden />
                    </span>
                    <span className="text-[10px] sm:text-[11px] md:text-sm font-bold leading-snug line-clamp-2 md:line-clamp-none md:whitespace-nowrap">
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export const VideoHero = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const [tab, setTab] = useState<"hero" | "banners">("hero");
  const [bannerIdx, setBannerIdx] = useState(0);

  const slides = HERO_BANNER_SLIDES;
  const slide = slides[bannerIdx] ?? slides[0];
  const slideCount = slides.length;

  const goPrev = useCallback(() => {
    setBannerIdx((i) => (i - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goNext = useCallback(() => {
    setBannerIdx((i) => (i + 1) % slideCount);
  }, [slideCount]);

  // Banner notices: always auto-advance every 5s while tab is active
  useEffect(() => {
    if (tab !== "banners" || slideCount <= 1) return;
    const id = window.setInterval(() => {
      setBannerIdx((i) => (i + 1) % slideCount);
    }, BANNER_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [tab, slideCount]);

  useEffect(() => {
    if (tab !== "banners") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab, goPrev, goNext]);

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
          data-tour="notices-tab"
          onClick={() => setTab("banners")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${tab === "banners" ? "bg-civic-gold text-civic-ink" : "text-white/80 hover:text-white"}`}
        >
          {t.hero.tabNotices}
          {slideCount > 0 && (
            <span className="ml-1 bg-civic-red text-white text-[9px] rounded-full px-1">{slideCount}</span>
          )}
        </button>
      </div>

      {/* Featured stories / heritage hero */}
      {tab === "hero" && (
        <section className="relative w-full overflow-hidden">
          <div className="relative min-h-[28rem] sm:min-h-[34rem] md:min-h-[max(75vh,40rem)]">
            <FeaturedStoriesCarousel />
            <HeroQuickPanel en={en} variant="desktop" />
          </div>
          <div className="md:hidden relative z-10 px-4 pb-5 pt-1 bg-civic-blue">
            <HeroQuickPanel en={en} variant="mobile" />
          </div>
        </section>
      )}

      {/* Banner / updates slider tab */}
      {tab === "banners" && (
        <section
          className="relative min-h-[52vh] md:min-h-[75vh] w-full overflow-hidden"
          aria-roledescription="carousel"
          aria-label={en ? "Municipal updates and notices" : "महापालिका अद्यतने व सूचना"}
        >
          {/* CSMC-style fill behind variable-size artwork */}
          <div className="absolute inset-0 bg-gradient-to-br from-civic-blue via-primary-glow to-civic-ink" aria-hidden />
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
