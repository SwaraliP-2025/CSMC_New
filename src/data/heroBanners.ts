/**
 * Homepage Banner-tab slides — reuse existing municipal notices / campaign content.
 * Do not invent news; keep titles/links aligned with NoticesPopup / announcements.
 */
import taxRebateBanner from "@/assets/banners/tax-rebate-banner.jpg";

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
    id: "tax-rebate",
    titleEn: "Property Tax Rebate — 10% discount till 30 April 2026",
    titleMr: "मालमत्ता कर सवलत — ३० एप्रिल २०२६ पर्यंत १०% सूट",
    subtitleEn: "Pay on time and avail the notified rebate on the official tax portal.",
    subtitleMr: "वेळेत कर भरा आणि अधिकृत कर पोर्टलवर अधिसूचित सूट मिळवा.",
    date: "1 Apr 2026",
    categoryEn: "Revenue",
    categoryMr: "महसूल",
    img: taxRebateBanner,
    link: "https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi",
    external: true,
  },
  {
    id: "gunthewari",
    titleEn: "Gunthewari Regularisation Scheme — Apply Now",
    titleMr: "गुंठेवारी नियमितीकरण योजना — आता अर्ज करा",
    subtitleEn: "Use the official RTS Gunthewari Challan Calculator to proceed.",
    subtitleMr: "पुढे जाण्यासाठी अधिकृत RTS गुंठेवारी चलन कॅल्क्युलेटर वापरा.",
    date: "15 Mar 2026",
    categoryEn: "Town Planning",
    categoryMr: "नगर रचना",
    link: "https://rts.chhsambhajinagarmc.org/links/gunthewari_form_codev2",
    external: true,
  },
  {
    id: "water-shutdown",
    titleEn: "Water Supply Shutdown — Zone 3 & 4 on 28 Apr 2026",
    titleMr: "पाणी पुरवठा बंद — झोन ३ व ४, २८ एप्रिल २०२६",
    subtitleEn: "Plan water storage in advance. Check city alerts for live advisories.",
    subtitleMr: "आगाऊ पाणी साठवण करा. थेट सल्ल्यासाठी शहर इशारे पहा.",
    date: "25 Apr 2026",
    categoryEn: "Water Supply",
    categoryMr: "पाणी पुरवठा",
    link: "/city-alerts",
    external: false,
  },
  {
    id: "swm-tender",
    titleEn: "New e-Tender: SWM Phase II — NIT No. CSMC/SWM/2026/01",
    titleMr: "नवीन ई-निविदा: SWM टप्पा II — NIT क्र. CSMC/SWM/2026/01",
    subtitleEn: "Bid documents are available on the MahaTenders portal.",
    subtitleMr: "निविदा कागदपत्रे MahaTenders पोर्टलवर उपलब्ध आहेत.",
    date: "10 Apr 2026",
    categoryEn: "Tenders",
    categoryMr: "निविदा",
    link: "https://mahatenders.gov.in/nicgep/app",
    external: true,
  },
  {
    id: "recruitment",
    titleEn: "Recruitment Notice — Junior Engineer (Civil) — 12 Posts",
    titleMr: "भरती सूचना — कनिष्ठ अभियंता (स्थापत्य) — १२ जागा",
    subtitleEn: "See the official recruitment page for eligibility and application steps.",
    subtitleMr: "पात्रता व अर्ज प्रक्रिया अधिकृत भरती पृष्ठावर पहा.",
    date: "5 Apr 2026",
    categoryEn: "Recruitment",
    categoryMr: "भरती",
    link: "/recruitment",
    external: false,
  },
];
