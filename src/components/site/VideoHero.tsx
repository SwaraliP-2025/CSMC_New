import { useLang } from "@/i18n/LanguageContext";
import {
  CreditCard,
  Droplets,
  Megaphone,
  Calculator,
  HousePlus,
  Search,
  LayoutGrid,
  Globe2,
  type LucideIcon,
} from "lucide-react";
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

const HeroQuickPanel = ({
  en,
  variant,
}: {
  en: boolean;
  variant: "mobile" | "desktop";
}) => {
  const outerClass =
    variant === "mobile"
      ? "relative z-10 mt-2 w-full max-w-md mx-auto xl:hidden"
      : "absolute right-0 top-0 z-20 hidden xl:flex h-full max-h-full w-max max-w-[min(100%,28rem)] items-start justify-end overflow-y-auto pt-3 pr-4 pb-8 xl:pt-4 xl:pr-6 xl:pb-8";

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
          <ul className="m-0 p-0 list-none w-full grid grid-cols-2 gap-1.5 xl:flex xl:flex-col xl:gap-2">
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
                    className="csmc-hero-quick-link group flex w-full items-center gap-1.5 xl:gap-2.5 rounded-full pl-1.5 pr-2 py-1 xl:pl-3.5 xl:pr-5 xl:py-2"
                  >
                    <span
                      className={`csmc-hero-quick-icon flex h-6 w-6 xl:h-8 xl:w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 ${action.iconClass}`}
                    >
                      <Icon className="h-3.5 w-3.5 xl:h-4 xl:w-4" aria-hidden />
                    </span>
                    <span className="text-[10px] sm:text-[11px] xl:text-sm font-bold leading-snug line-clamp-2 xl:line-clamp-none xl:whitespace-nowrap">
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
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="relative w-full">
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[11/5] w-full">
          <FeaturedStoriesCarousel />
          <HeroQuickPanel en={en} variant="desktop" />
        </div>
        <div className="xl:hidden relative z-10 px-4 pb-5 pt-1 bg-civic-blue">
          <HeroQuickPanel en={en} variant="mobile" />
        </div>
      </section>
    </div>
  );
};
