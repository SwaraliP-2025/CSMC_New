/**
 * Homepage Banner-tab slides — reuse existing municipal notices / campaign content.
 * Do not invent news; keep titles/links aligned with NoticesPopup / announcements.
 */
import { OFFICIAL } from "@/data/officialLinks";

export type HeroBannerSlide = {
  id: string;
  titleEn: string;
  titleMr: string;
  subtitleEn?: string;
  subtitleMr?: string;
  date?: string;
  categoryEn?: string;
  categoryMr?: string;
  /** Optional campaign / notice artwork */
  img?: string;
  link: string;
  external?: boolean;
};

export const HERO_BANNER_SLIDES: HeroBannerSlide[] = [
  {
    id: "gunthewari",
    titleEn: "Gunthewari Regularisation Scheme — Apply Now",
    titleMr: "गुंठेवारी नियमितीकरण योजना — आता अर्ज करा",
    subtitleEn: "Use the official RTS Gunthewari Challan Calculator to proceed.",
    subtitleMr: "पुढे जाण्यासाठी अधिकृत RTS गुंठेवारी चलन कॅल्क्युलेटर वापरा.",
    date: "15 Mar 2026",
    categoryEn: "Town Planning",
    categoryMr: "नगर रचना",
    link: OFFICIAL.gunthewari,
    external: true,
  },
];
