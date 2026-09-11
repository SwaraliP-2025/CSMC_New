import { HomeLayout } from "@/components/site/Layout";
import { GovtLinksCarousel } from "@/components/site/GovtLinksCarousel";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowRight, Receipt, Droplets, Baby, ScrollText, Store, Building2, MessageSquareWarning, Calculator, HousePlus, LayoutGrid, ChevronLeft, ChevronRight, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { NoticesPopup, BannerPopup, useNoticesPopup } from "@/components/site/NoticesPopup";
import { FacilityCategoryCard } from "@/components/site/FacilityCategoryCard";
import { TouristCard } from "@/components/site/TouristCard";
import { facilityCategories, type TouristPlaceRecord } from "@/lib/facilities";

// Static imports for leadership images — avoids new URL() crashes on GitHub Pages
import presidentImg from "@/assets/leadership/President_of_India_Droupadi_Murmu_official_pic.png";
import modiImg from "@/assets/leadership/narendraji_pic.jpg";
import devendraImg from "@/assets/leadership/devendraji_pic.jpg";
import eknathImg from "@/assets/leadership/eknathji_pic.png";
import suntraImg from "@/assets/leadership/Suntera_mam.jpeg";
import madhuriImg from "@/assets/leadership/madhuri_misal2.jpg";
import sameerImg from "@/assets/leadership/samir-bhaiya-rajurkar.png";
import rajuImg from "@/assets/leadership/raju-bhaiya-janjal1.png";
import amolImg from "@/assets/leadership/shri_amol_sir.png";

/** Two-line posts. Each line is a block so the break is layout, not a `<br>` the build can ignore. */
type Leader = {
  nameEn: string;
  nameMr: string;
  roleEn: readonly [string, string];
  roleMr: readonly [string, string];
  image: string;
  /** Crop percentages of the circular frame (width/height/left/top). */
  photo: { w: string; h: string; l: string; t: string };
};

const leadership: Leader[] = [
  { nameEn: "Smt. Droupadi Murmu", nameMr: "श्रीमती द्रौपदी मुर्मू", roleEn: ["Hon'ble President,", "India"], roleMr: ["मा. राष्ट्रपती,", "भारत"], image: presidentImg, photo: { w: "84%", h: "105%", l: "8%", t: "8%" } },
  { nameEn: "Shri. Narendra Modi", nameMr: "श्री. नरेंद्र मोदी", roleEn: ["Hon'ble Prime Minister,", "India"], roleMr: ["मा. पंतप्रधान,", "भारत"], image: modiImg, photo: { w: "175%", h: "105%", l: "-37.5%", t: "8%" } },
  { nameEn: "Shri. Devendra Fadnavis", nameMr: "श्री. देवेंद्र फडणवीस", roleEn: ["Hon'ble Chief Minister,", "Maharashtra"], roleMr: ["मा. मुख्यमंत्री,", "महाराष्ट्र राज्य"], image: devendraImg, photo: { w: "96.64%", h: "103.51%", l: "6.45%", t: "0.25%" } },
  { nameEn: "Shri. Eknath Shinde", nameMr: "श्री. एकनाथ शिंदे", roleEn: ["Hon'ble Deputy Chief Minister,", "Maharashtra"], roleMr: ["मा. उपमुख्यमंत्री,", "महाराष्ट्र राज्य"], image: eknathImg, photo: { w: "103.52%", h: "93.35%", l: "-4.19%", t: "6.29%" } },
  { nameEn: "Smt. Sunetra A. Pawar", nameMr: "श्रीमती सुनेत्रा अजित पवार", roleEn: ["Hon'ble Deputy Chief Minister,", "Maharashtra"], roleMr: ["मा. उपमुख्यमंत्री,", "महाराष्ट्र राज्य"], image: suntraImg, photo: { w: "96%", h: "106.89%", l: "4.97%", t: "1.45%" } },
  { nameEn: "Smt. Madhuri Misal", nameMr: "श्रीमती माधुरी मिसाळ", roleEn: ["Hon'ble Minister of State,", "Urban Development Department"], roleMr: ["मा. राज्यमंत्री,", "नगरविकास विभाग"], image: madhuriImg, photo: { w: "112.83%", h: "107.12%", l: "-4.76%", t: "-5.77%" } },
  { nameEn: "Shri. Sameer Rajurkar", nameMr: "श्री. समीर राजूरकर", roleEn: ["Hon'ble Mayor,", "Chhatrapati Sambhajinagar"], roleMr: ["मा. महापौर,", "छत्रपती संभाजीनगर"], image: sameerImg, photo: { w: "101.08%", h: "99.68%", l: "2.96%", t: "-2.83%" } },
  { nameEn: "Shri. Rajendra Janjal", nameMr: "श्री. राजेंद्र  जंजाळ", roleEn: ["Hon'ble Deputy Mayor,", "Chhatrapati Sambhajinagar"], roleMr: ["मा. उपमहापौर,", "छत्रपती संभाजीनगर"], image: rajuImg, photo: { w: "96%", h: "90.63%", l: "1.19%", t: "-1.82%" } },
  { nameEn: "Shri. Amol Yedage", nameMr: "श्री. अमोल येडगे", roleEn: ["Hon'ble Municipal Commissioner,", "Chhatrapati Sambhajinagar"], roleMr: ["मा. महानगरपालिका आयुक्त,", "छत्रपती संभाजीनगर"], image: amolImg, photo: { w: "106.49%", h: "96.59%", l: "-2.45%", t: "-0.48%" } },
];


const topRowLeaders = leadership.slice(0, -3);
const bottomRowLeaders = leadership.slice(-3);

const RoleLines = ({ lines, isMr }: { lines: readonly string[]; isMr: boolean }) => (
  <>
    {lines.map((line) => (
      <span
        key={line}
        className="block"
        lang={isMr ? "mr" : "en"}
        style={{ overflowWrap: "normal", wordBreak: "keep-all" }}
      >
        {line}
      </span>
    ))}
  </>
);


const LeaderCard = ({
  person,
  index,
  isVisible,
  en,
  onSelect,
}: {
  person: Leader;
  index: number;
  isVisible: boolean;
  en: boolean;
  onSelect: (person: Leader) => void;
}) => (
  <div
    className="group flex flex-col items-center text-center w-60 md:w-[calc(100%/6-0.5rem)] md:min-w-[110px] md:max-w-[160px] cursor-pointer"
    onClick={() => onSelect(person)}
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(24px)",
      transition: isVisible
        ? `opacity 300ms ease ${index * 70}ms, transform 300ms cubic-bezier(0.34,1.4,0.64,1) ${index * 70}ms`
        : "none",
    }}
  >
    <div className="relative w-[9.25rem] h-[9.25rem] md:w-32 md:h-32 mb-3 rounded-full overflow-hidden border-[5px] md:border-4 border-white bg-white shadow-lg group-hover:border-civic-gold group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
      {person.image ? (
        <img
          src={person.image}
          alt={en ? person.nameEn : ""}
          className="absolute max-w-none"
          style={{
            width: person.photo.w,
            height: person.photo.h,
            left: person.photo.l,
            top: person.photo.t,
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-civic-blue/10 text-civic-blue font-serif text-2xl font-bold">
          {person.nameEn.split(" ").map((n) => n[0]).join("")}
        </div>
      )}
    </div>
    <div className="w-8 h-0.5 bg-civic-gold rounded-full mb-2 group-hover:w-14 transition-all duration-200" />
    <h3 className="text-lg md:text-xs font-bold text-civic-blue group-hover:text-civic-red transition-colors duration-150 px-1 w-full text-center h-9 md:h-5 leading-9 md:leading-5 overflow-hidden whitespace-nowrap">
      {en ? person.nameEn : person.nameMr}
    </h3>
    <p className={`text-sm md:text-[11px] text-muted-foreground font-medium leading-snug md:leading-tight px-1 w-full text-center mt-1 whitespace-normal min-h-[4rem] md:min-h-[3rem] ${en ? "" : "devanagari"}`} lang={en ? "en" : "mr"}>
      <RoleLines lines={en ? person.roleEn : person.roleMr} isMr={!en} />
    </p>
  </div>
);

// Icons mapped to each quick service in order:
// Property Tax, Pay Water Tax, Birth Certificate, Death Certificate,
// Trade License, Building Permission, Grievance,
// Gunthewari Challan, Ramai Awas Yojana, All Services
const icons = [
  Receipt,           // Property Tax
  Droplets,          // Pay Water Tax
  Baby,              // Birth Certificate
  ScrollText,        // Death Certificate
  Store,             // Trade License
  Building2,         // Building Permission
  MessageSquareWarning, // Grievance
  Calculator,        // Gunthewari Challan
  HousePlus,         // Ramai Awas Yojana
  LayoutGrid,        // All Services
];

const SocialMediaSection = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const embedRef = useRef<HTMLDivElement>(null);
  const igFrameRef = useRef<HTMLDivElement>(null);
  const [embedWidth, setEmbedWidth] = useState(500);
  const [igLoaded, setIgLoaded] = useState(false);

  const FB_URL = "https://www.facebook.com/SmarterAurangabad";
  const IG_URL = "https://www.instagram.com/csmc_municipalcommissioner/";
  const IG_HANDLE = "csmc_municipalcommissioner";
  const EMBED_H = 460;

  useEffect(() => {
    const el = embedRef.current;
    if (!el) return;
    const apply = () => {
      const w = Math.floor(el.getBoundingClientRect().width);
      if (w > 0) setEmbedWidth(Math.max(280, Math.min(500, w)));
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const processIg = () => {
      const instgrm = (window as unknown as { instgrm?: { Embeds?: { process?: () => void } } }).instgrm;
      instgrm?.Embeds?.process?.();
    };
    processIg();
    const t = window.setTimeout(processIg, 600);
    return () => window.clearTimeout(t);
  }, [embedWidth]);

  useEffect(() => {
    const root = igFrameRef.current;
    if (!root) return;

    const markLoaded = () => {
      if (root.querySelector("iframe")) setIgLoaded(true);
    };

    markLoaded();
    const observer = new MutationObserver(markLoaded);
    observer.observe(root, { childList: true, subtree: true });
    const t1 = window.setTimeout(markLoaded, 1200);
    const t2 = window.setTimeout(markLoaded, 3500);
    return () => {
      observer.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const followLabel = en ? "Follow" : "फॉलो करा";
  const viewFb = en ? "View on Facebook" : "फेसबुकवर पहा";
  const viewIg = en ? "View on Instagram" : "इंस्टाग्रामवर पहा";

  return (
    <section
      className="py-16 md:py-20 bg-civic-blue/5 relative border-t border-border/60"
      aria-labelledby="stay-connected-heading"
    >
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-3">
            {en ? "Social Media" : "सोशल मीडिया"}
          </p>
          <h2
            id="stay-connected-heading"
            className="font-serif text-3xl md:text-5xl text-civic-blue font-bold mb-4"
          >
            {en ? "Stay Connected with CSMC" : "CSMC शी जोडलेले राहा"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {en
              ? "Get the latest updates, announcements and civic initiatives from Chhatrapati Sambhajinagar Municipal Corporation."
              : "छत्रपती संभाजीनगर महानगरपालिकेकडून अद्यतने, सूचना आणि नागरी उपक्रमांची माहिती मिळवा."}
          </p>
          <div className="mx-auto mt-6 h-1.5 w-24 bg-gradient-heritage rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto min-w-0">
          {/* Facebook */}
          <article className="social-embed-card border border-border rounded-3xl overflow-hidden bg-white flex flex-col shadow-sm hover:shadow-elegant transition-shadow min-w-0">
            <header className="flex items-center gap-2.5 px-4 py-3 bg-[#1877F2] text-white text-sm font-semibold shrink-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20" aria-hidden>
                <Facebook className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              </span>
              <span className="min-w-0 truncate">CSMC — Facebook</span>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto shrink-0 inline-flex items-center gap-1 text-xs font-bold bg-white text-[#1877F2] hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white px-3 py-1.5 rounded-full transition-colors"
                aria-label={en ? "Follow CSMC on Facebook (opens in a new tab)" : "CSMC फेसबुक फॉलो करा (नवीन टॅबमध्ये उघडेल)"}
              >
                {followLabel}
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </header>
            <div ref={embedRef} className="social-embed-frame min-w-0">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_URL)}&tabs=timeline&width=${embedWidth}&height=${EMBED_H}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                width={embedWidth}
                height={EMBED_H}
                style={{ border: "none", display: "block", width: "100%", height: `${EMBED_H}px` }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={en ? "CSMC Facebook timeline" : "CSMC फेसबुक टाइमलाइन"}
                loading="lazy"
              />
            </div>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 text-[#1877F2] text-sm font-bold border-t border-border hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1877F2] transition-colors shrink-0"
              aria-label={en ? "View CSMC Facebook page (opens in a new tab)" : "CSMC फेसबुक पृष्ठ पहा (नवीन टॅबमध्ये उघडेल)"}
            >
              <Facebook className="h-4 w-4" fill="currentColor" strokeWidth={0} aria-hidden />
              {viewFb}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </article>

          {/* Instagram */}
          <article className="social-embed-card border border-border rounded-3xl overflow-hidden bg-white flex flex-col shadow-sm hover:shadow-elegant transition-shadow min-w-0">
            <header
              className="flex items-center gap-2.5 px-4 py-3 text-white text-sm font-semibold shrink-0"
              style={{ background: "linear-gradient(90deg,#f09433,#dc2743,#bc1888)" }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20" aria-hidden>
                <Instagram className="h-4 w-4" />
              </span>
              <span className="min-w-0 truncate">@{IG_HANDLE}</span>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto shrink-0 inline-flex items-center gap-1 text-xs font-bold bg-white text-[#bc1888] hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white px-3 py-1.5 rounded-full transition-colors"
                aria-label={en ? "Follow @csmc_municipalcommissioner on Instagram (opens in a new tab)" : "@csmc_municipalcommissioner इंस्टाग्राम फॉलो करा (नवीन टॅबमध्ये उघडेल)"}
              >
                {followLabel}
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </header>
            <div ref={igFrameRef} className="social-embed-frame social-embed-ig relative min-w-0">
              {/* Polished fallback when Instagram embed is blocked / slow / unavailable */}
              <div
                className={`absolute inset-0 z-0 flex flex-col items-center justify-center gap-4 px-6 text-center transition-opacity ${
                  igLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                style={{ background: "linear-gradient(160deg, #fff7ed 0%, #fdf2f8 45%, #faf5ff 100%)" }}
                aria-hidden={igLoaded}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md"
                  style={{ background: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)" }}
                >
                  <Instagram className="h-8 w-8" aria-hidden />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-civic-ink">@{IG_HANDLE}</p>
                  <p className="mt-1 text-sm text-muted-foreground max-w-xs mx-auto">
                    {en
                      ? "Follow the Municipal Commissioner’s official Instagram for civic updates and city highlights."
                      : "नागरी अद्यतने व शहराच्या घडामोडींसाठी आयुक्त यांच्या अधिकृत इंस्टाग्रामला फॉलो करा."}
                  </p>
                </div>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc1888] transition-opacity"
                  style={{ background: "linear-gradient(90deg,#f09433,#dc2743,#bc1888)" }}
                  tabIndex={igLoaded ? -1 : 0}
                  aria-label={en ? "Open Instagram profile @csmc_municipalcommissioner (opens in a new tab)" : "@csmc_municipalcommissioner इंस्टाग्राम प्रोफाइल उघडा (नवीन टॅबमध्ये उघडेल)"}
                >
                  {en ? "Open Instagram" : "इंस्टाग्राम उघडा"}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
              <blockquote
                className="instagram-media relative z-[1]"
                data-instgrm-permalink={`${IG_URL}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
              >
                <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                  {en ? `View @${IG_HANDLE} on Instagram` : `@${IG_HANDLE} इंस्टाग्रामवर पहा`}
                </a>
              </blockquote>
            </div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold border-t border-border hover:bg-pink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#bc1888] transition-colors shrink-0"
              style={{ color: "#bc1888" }}
              aria-label={en ? "View CSMC Instagram profile (opens in a new tab)" : "CSMC इंस्टाग्राम प्रोफाइल पहा (नवीन टॅबमध्ये उघडेल)"}
            >
              <Instagram className="h-4 w-4" aria-hidden />
              {viewIg}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

// ── Public Facilities Slider ───────────────────────────────────────────────────
const PublicFacilitiesSlider = ({ en }: { en: boolean }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const items = facilityCategories.filter(c => c.showInOverview !== false);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.querySelector("a")?.offsetWidth ?? 300;
    sliderRef.current.scrollBy({ left: dir === "left" ? -(cardWidth + 16) : (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Prev button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-border shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-civic-blue hover:text-white hover:border-civic-blue transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Slider track */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map(category => {
          const Icon = category.icon;
          return (
            <Link
              key={category.slug}
              to={`/public-facilities/${category.slug}`}
              className="group flex-shrink-0 w-[260px] bg-white border border-border hover:border-civic-blue/30 hover:shadow-elegant rounded-2xl p-5 transition-all flex flex-col gap-3"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-civic-blue/10 text-civic-blue group-hover:bg-civic-blue group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-civic-blue text-base mb-1">
                  {en ? category.titleEn : category.titleMr}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {en ? category.descriptionEn : category.descriptionMr}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-civic-blue group-hover:text-civic-red transition-colors">
                {en ? "View All" : "सर्व पहा"} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Next button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-border shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-civic-blue hover:text-white hover:border-civic-blue transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const Index = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const leadershipRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollGallery = (dir: "left" | "right") => {
    if (galleryRef.current) galleryRef.current.scrollBy({ left: dir === "left" ? -440 : 440, behavior: "smooth" });
  };
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [touristPlaces, setTouristPlaces] = useState<TouristPlaceRecord[]>([]);
  const [featuredTouristPlaces, setFeaturedTouristPlaces] = useState<TouristPlaceRecord[]>([]);
  const notices = useNoticesPopup();

  const featuredPlaces = featuredTouristPlaces.length > 0 ? featuredTouristPlaces : touristPlaces.slice(0, 4);

  useEffect(() => {
    // Use Vite's base URL so the fetch works when the app is served from a subpath
    const url = `${import.meta.env.BASE_URL}data/tourist-places.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data: TouristPlaceRecord[]) => setTouristPlaces(data))
      .catch((err) => console.error("Failed to load tourist places:", err));
  }, []);

  useEffect(() => {
    const featuredOrder = [
      "ellora-caves",
      "ajanta-caves",
      "daulatabad-fort",
      "bibi-ka-maqbara",
    ];

    setFeaturedTouristPlaces(
      featuredOrder
        .map((slug) => touristPlaces.find((place) => place.slug === slug))
        .filter((place): place is TouristPlaceRecord => Boolean(place))
    );
  }, [touristPlaces]);

  // Also open notices popup when Notices is clicked in navbar
  useEffect(() => {
    const handler = () => notices.showNotices();
    window.addEventListener("open-notices-popup", handler);
    return () => window.removeEventListener("open-notices-popup", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (leadershipRef.current) observer.observe(leadershipRef.current);
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedLeader(null); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);


  return (
    <HomeLayout>
      {/* Stay Connected — social feeds */}
      <SocialMediaSection />

      {/* Leadership / Dignitaries — directly below Stay Connected */}
      <section ref={leadershipRef} className="py-16 bg-white">
        <div className="container">
          {/* Top row: President, PM, and state leadership */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:flex-nowrap md:items-start md:justify-center md:gap-4 lg:gap-5 pb-2 px-2">
            {topRowLeaders.map((person, i) => (
              <LeaderCard
                key={person.nameEn}
                person={person}
                index={i}
                isVisible={isVisible}
                en={en}
                onSelect={setSelectedLeader}
              />
            ))}
          </div>
          {/* Last three (Mayor, Deputy Mayor, Commissioner) centered below */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:flex-nowrap md:items-start md:justify-center md:gap-4 lg:gap-5 pb-2 px-2 mt-6">
            {bottomRowLeaders.map((person, i) => (
              <LeaderCard
                key={person.nameEn}
                person={person}
                index={topRowLeaders.length + i}
                isVisible={isVisible}
                en={en}
                onSelect={setSelectedLeader}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick services — clean separation from hero (no negative margin overlap) */}
      <section className="py-16 md:py-20 bg-white relative border-t border-border/60">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-3">{t.quick.title}</p>
            <h2 className="font-serif text-3xl md:text-5xl text-civic-blue font-bold mb-4">{en ? "Seamless Citizen Services" : "नागरिक सेवा"}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.quick.subtitle}</p>
            <div className="mx-auto mt-6 h-1.5 w-24 bg-gradient-heritage rounded-full" />
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {t.quick.items.map((item, i) => {
              const Icon = icons[i] ?? icons[0];
              const cls =
                "group bg-white border border-border rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant hover:border-orange-300 hover:bg-gradient-to-br hover:from-amber-200 hover:via-orange-300 hover:to-orange-400";
              const content = (
                <>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-civic-gold/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-white/20 transition-colors duration-300" />
                  <div className="relative z-[1] h-16 w-16 grid place-items-center rounded-2xl bg-civic-blue/10 text-civic-blue mb-6 group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="relative z-[1] font-serif text-xl font-bold text-civic-ink mb-3 group-hover:text-civic-ink transition-colors duration-300">{item.t}</h3>
                  <p className="relative z-[1] text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-civic-ink/80 transition-colors duration-300">{item.d}</p>
                  <div className="relative z-[1] mt-6 flex items-center text-civic-red font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-civic-blue transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {en ? "Access Service" : "सेवा मिळवा"} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </div>
                </>
              );
              return (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-civic-blue/5">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-3">{en ? "Public Facilities" : "सार्वजनिक सुविधा"}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold">{en ? "Explore Public Facilities" : "सार्वजनिक सुविधांचा शोध घ्या"}</h2>
            </div>
            <Link to="/public-facilities" className="text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors whitespace-nowrap">
              {en ? "Explore all public facilities" : "सर्व सार्वजनिक सुविधा पहा"} <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>
          <PublicFacilitiesSlider en={en} />
        </div>
      </section>

      {/* Quick Tools Strip */}
      {/* <section className="py-8 bg-civic-blue/5 border-y border-civic-blue/10">
        <div className="container flex flex-wrap justify-center gap-4">
          {[
            { to: "/track", label: "Track Application", icon: "🔍", desc: "Check real-time status" },
            { to: "/tax-calculator", label: "Tax Calculator", icon: "🧮", desc: "Estimate property tax" },
            { to: "/public-documents", label: "Public Documents", icon: "📄", desc: "RTI & resolutions" },
            { to: "/grievance", label: "Lodge Complaint", icon: "📝", desc: "Register grievance" },
          ].map(item => (
            <Link key={item.to} to={item.to}
              className="flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3 hover:shadow-elegant hover:border-civic-blue/30 hover:-translate-y-0.5 transition-all group">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-sm text-civic-blue group-hover:text-civic-red transition-colors">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* Stats — moved to About CSMC page */}
      {/* <section className="py-24 bg-gradient-heritage text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 heritage-pattern" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">{t.stats.title}</h2>
            <div className="mx-auto mt-6 h-1.5 w-20 bg-civic-gold rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.statsItems.map((s, i) => (
              <div key={i} className="text-center group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                <p className="font-serif text-4xl md:text-6xl font-bold text-civic-gold mb-3 tabular-nums">{s.v}</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-12 bg-civic-light">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-1">{en ? "Photo Gallery" : "छायाचित्र दालन"}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-civic-blue font-bold">{en ? "Corporation in Pictures" : "महानगरपालिका छायाचित्रांत"}</h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => scrollGallery("left")}
                className="w-9 h-9 rounded-full bg-civic-blue text-white flex items-center justify-center hover:bg-civic-gold hover:text-civic-ink transition-colors shadow-md">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => scrollGallery("right")}
                className="w-9 h-9 rounded-full bg-civic-blue text-white flex items-center justify-center hover:bg-civic-gold hover:text-civic-ink transition-colors shadow-md">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              <Link to="/explore"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-civic-blue text-civic-blue font-bold text-xs hover:bg-civic-blue hover:text-white transition-all">
                {en ? "View All" : "सर्व पहा"} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div ref={galleryRef} className="flex gap-4 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}>
            {[
              { label: en ? "General Body Meeting" : "सर्वसाधारण सभा", bg: "from-civic-blue to-blue-800" },
              { label: en ? "Road Work Inauguration" : "रस्ते कामाचे उद्घाटन", bg: "from-amber-700 to-amber-500" },
              { label: en ? "Swachh Bharat Drive" : "स्वच्छ भारत अभियान", bg: "from-green-700 to-green-500" },
              { label: en ? "Water Supply Project" : "पाणी पुरवठा प्रकल्प", bg: "from-cyan-700 to-cyan-500" },
              { label: en ? "Tree Plantation Drive" : "वृक्षारोपण अभियान", bg: "from-emerald-700 to-emerald-500" },
              { label: en ? "Health Camp" : "आरोग्य शिबिर", bg: "from-red-700 to-red-500" },
              { label: en ? "Smart City ICCC Launch" : "स्मार्ट सिटी ICCC उद्घाटन", bg: "from-purple-700 to-purple-500" },
              { label: en ? "Cleanliness Drive" : "स्वच्छता मोहीम", bg: "from-orange-700 to-orange-500" },
              { label: en ? "Award Ceremony" : "पुरस्कार सोहळा", bg: "from-yellow-700 to-yellow-500" },
            ].map((item, i) => (
              <div key={i}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} group cursor-pointer shrink-0`}
                style={{ width: "200px", height: "200px" }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "10px 10px" }} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-white font-bold text-xs drop-shadow-md bg-black/30 px-2 py-1 rounded-lg">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-2 md:px-0" onClick={() => setSelectedLeader(null)}>
          <div className="bg-white rounded-2xl max-w-xs w-full shadow-2xl relative top-8 p-0" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-civic-blue hover:text-civic-red transition-colors z-10" onClick={() => setSelectedLeader(null)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="w-full flex items-center justify-center bg-civic-blue/10 pt-4 pb-2 px-2 rounded-t-2xl">
              <img
                src={selectedLeader.image}
                alt={en ? selectedLeader.nameEn : ''}
                className="max-h-48 max-w-full rounded-xl shadow border-2 border-white"
                style={{ objectFit: 'contain', background: '#fff' }}
              />
            </div>
            {/* Info */}
            <div className="px-3 pb-4 pt-2 text-center">
              <div className="w-8 h-0.5 bg-civic-gold rounded-full mx-auto mb-2" />
              <h3 className="font-serif text-base font-bold text-civic-blue mb-1 leading-tight">{en ? selectedLeader.nameEn : selectedLeader.nameMr}</h3>
              <p className={`text-xs text-muted-foreground font-medium leading-tight whitespace-normal ${en ? "" : "devanagari"}`}>
                <RoleLines lines={en ? selectedLeader.roleEn : selectedLeader.roleMr} isMr={!en} />
              </p>
            </div>
          </div>
        </div>
      )}

      <BannerPopup open={notices.bannerOpen} onClose={notices.hideBanner} />
      <NoticesPopup open={notices.noticesOpen} onClose={notices.hideNotices} />
      <GovtLinksCarousel />

      {/* Nearby Tourist Spots (moved below government portal) */}
      <section className="pt-12 pb-4 bg-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-3">{en ? "Nearby Tourist Spots" : "जवळची पर्यटन स्थळे"}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold">{en ? "Discover Local Attractions" : "स्थानिक आकर्षणे शोधा"}</h2>
            </div>
            <Link to="/explore" className="text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors">
              {en ? "View all attractions" : "सर्व आकर्षणे पहा"} <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPlaces.map((place) => (
              <TouristCard key={place.id} place={place} en={en} />
            ))}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Index;
