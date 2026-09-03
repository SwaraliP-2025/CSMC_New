/**
 * SEO / branding config for CSMC official portal.
 * Set VITE_SITE_ORIGIN in .env for absolute URLs (sitemap, OG, canonical), e.g.
 *   VITE_SITE_ORIGIN=https://youruser.github.io
 * Paths already use base /CSMC_New/.
 */
export const SITE_BASE_PATH = "/CSMC_New";

export const SITE_ORIGIN =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_ORIGIN) ||
  "https://chhsambhajinagarmc.org";

export const SITE_URL = `${SITE_ORIGIN.replace(/\/$/, "")}${SITE_BASE_PATH}`;

export const SITE_NAME_EN =
  "Chhatrapati Sambhajinagar Municipal Corporation";
export const SITE_NAME_MR = "छत्रपती संभाजीनगर महानगरपालिका";
export const SITE_SHORT = "CSMC";

/** Official + common citizen search names (helps entity matching). */
export const SITE_ALIASES = [
  "CSMC",
  "C.S.M.C.",
  "C S M C",
  "CSMC Official Website",
  "CSMC Portal",
  "Chhatrapati Sambhajinagar Municipal Corporation",
  "Chh. Sambhajinagar Municipal Corporation",
  "Chhatrapati Sambhaji Nagar Municipal Corporation",
  "Sambhajinagar Municipal Corporation",
  "Sambhajinagar Mahanagarpalika",
  "Sambhaji Nagar Mahanagarpalika",
  "Aurangabad Municipal Corporation",
  "AMC Aurangabad",
  "Aurangabad Mahanagarpalika",
  "छत्रपती संभाजीनगर महानगरपालिका",
  "संभाजीनगर महानगरपालिका",
  "औरंगाबाद महानगरपालिका",
];

/** Keywords incl. common spellings / near-misses citizens may type. */
export const SITE_KEYWORDS = [
  "CSMC",
  "csmc",
  "Csmc",
  "CSMC website",
  "CSMC official",
  "CSMC login",
  "CSMC portal",
  "CSMC property tax",
  "CSMC water tax",
  "Chhatrapati Sambhajinagar Municipal Corporation",
  "Chhatrapati Sambhaji Nagar Municipal Corporation",
  "Sambhajinagar Municipal Corporation",
  "Sambhajinagar Mahanagarpalika",
  "Aurangabad Municipal Corporation",
  "Aurangabad MC",
  "AMC Aurangabad",
  "छत्रपती संभाजीनगर महानगरपालिका",
  "संभाजीनगर महानगरपालिका",
  "औरंगाबाद महानगरपालिका",
  // near-miss / alternate spellings (Google still ranks via entity + content)
  "CMSC",
  "CSMC Aurangabad",
  "Chatrapati Sambhajinagar",
  "Chhatrapati Sambaji Nagar",
  "Sambhajinagar corporation",
  "Sambhaji nagar municipal",
  "CSMC citizen services",
  "CSMC RTI",
  "CSMC tender",
  "pay property tax Sambhajinagar",
  "pay water tax Sambhajinagar",
].join(", ");

export const DEFAULT_DESCRIPTION_EN =
  "Official website of Chhatrapati Sambhajinagar Municipal Corporation (CSMC). Pay property tax, water tax, track applications, RTS services, tenders, notices, GIS and citizen services for Sambhajinagar (formerly Aurangabad).";

export const DEFAULT_DESCRIPTION_MR =
  "छत्रपती संभाजीनगर महानगरपालिका (CSMC) अधिकृत संकेतस्थळ. मालमत्ता कर, पाणी कर, अर्ज स्थिती, RTS सेवा, निविदा, सूचना आणि नागरिक सेवा.";

export type PageSeo = {
  title: string;
  titleMr?: string;
  description: string;
  descriptionMr?: string;
  path: string;
};

/** Per-route SEO defaults (path without basename). */
export const ROUTE_SEO: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "CSMC — Chhatrapati Sambhajinagar Municipal Corporation Official Website",
    titleMr: "CSMC — छत्रपती संभाजीनगर महानगरपालिका अधिकृत संकेतस्थळ",
    description: DEFAULT_DESCRIPTION_EN,
    descriptionMr: DEFAULT_DESCRIPTION_MR,
  },
  "/about": {
    path: "/about",
    title: "About CSMC & Chhatrapati Sambhajinagar | CSMC",
    description:
      "About Chhatrapati Sambhajinagar Municipal Corporation (CSMC), city heritage, mission, vision and civic administration.",
  },
  "/services": {
    path: "/services",
    title: "Citizen Services | CSMC Official Portal",
    description:
      "All CSMC citizen services — property tax, water tax, certificates, RTS services and online applications.",
  },
  "/contact": {
    path: "/contact",
    title: "Contact CSMC | Chhatrapati Sambhajinagar Municipal Corporation",
    description:
      "Contact Chhatrapati Sambhajinagar Municipal Corporation — address, helpline and citizen feedback.",
  },
  "/notices": {
    path: "/notices",
    title: "Notices & Announcements | CSMC",
    description: "Latest official notices and announcements from CSMC.",
  },
  "/tenders": {
    path: "/tenders",
    title: "Tenders | CSMC",
    description: "Active e-tenders and procurement notices of CSMC.",
  },
  "/public-documents": {
    path: "/public-documents",
    title: "Public Documents, Budget & Minutes | CSMC",
    description:
      "CSMC public documents — budgets, standing committee minutes, agendas and RTI disclosures.",
  },
  "/zones-wards": {
    path: "/zones-wards",
    title: "Know Your Zone, Prabhag & Ward | CSMC",
    description:
      "Find your CSMC zone, prabhag and ward in Chhatrapati Sambhajinagar.",
  },
  "/know-your-corporator": {
    path: "/know-your-corporator",
    title: "Know Your Corporator | CSMC",
    description:
      "Find elected corporators in Chhatrapati Sambhajinagar by prabhag number or locality name.",
  },
  "/faq": {
    path: "/faq",
    title: "FAQ | CSMC Official Website",
    description: "Frequently asked questions about CSMC citizen services.",
  },
  "/departments": {
    path: "/departments",
    title: "Departments | CSMC",
    description: "Administrative departments of Chhatrapati Sambhajinagar Municipal Corporation (CSMC).",
  },
  "/commissioner": {
    path: "/commissioner",
    title: "Municipal Commissioner | CSMC",
    description: "Hon'ble Municipal Commissioner of Chhatrapati Sambhajinagar Municipal Corporation (CSMC).",
  },
  "/organization": {
    path: "/organization",
    title: "Organogram / Organizational Structure | CSMC",
    description: "Organizational structure of CSMC — Chhatrapati Sambhajinagar Municipal Corporation.",
  },
  "/initiatives": {
    path: "/initiatives",
    title: "Initiatives by CSMC | Aamhala Khelu Dya",
    description: "Citizen-centric initiatives of Chhatrapati Sambhajinagar Municipal Corporation (CSMC).",
  },
  "/rti-act": {
    path: "/rti-act",
    title: "Right to Information (RTI) | CSMC",
    description: "Right to Information Act information for CSMC — Chhatrapati Sambhajinagar Municipal Corporation.",
  },
  "/rts-act": {
    path: "/rts-act",
    title: "Right to Service (RTS) | CSMC",
    description: "Maharashtra Right to Service timelines for CSMC civic services.",
  },
  "/recruitment": {
    path: "/recruitment",
    title: "Recruitment / Jobs | CSMC",
    description: "Current job openings and recruitment at Chhatrapati Sambhajinagar Municipal Corporation (CSMC).",
  },
  "/govt-orders": {
    path: "/govt-orders",
    title: "Government Orders | CSMC",
    description: "Government orders and circulars related to CSMC.",
  },
  "/disaster-management": {
    path: "/disaster-management",
    title: "Emergency Contact — Fire & Disaster | CSMC",
    description: "Fire and disaster emergency contacts for Chhatrapati Sambhajinagar Municipal Corporation.",
  },
  "/public-facilities": {
    path: "/public-facilities",
    title: "Public Facilities | CSMC",
    description: "Public facilities in Chhatrapati Sambhajinagar — parks, hospitals, schools and more (CSMC).",
  },
  "/explore": {
    path: "/explore",
    title: "Explore Sambhajinagar | CSMC",
    description: "Tourist places and heritage landmarks in Chhatrapati Sambhajinagar.",
  },
  "/mayors-list": {
    path: "/mayors-list",
    title: "Hon'ble Mayors' List | CSMC",
    description: "List of Hon'ble Mayors of Chhatrapati Sambhajinagar Municipal Corporation.",
  },
  "/commissioners-list": {
    path: "/commissioners-list",
    title: "Hon'ble Commissioners' List | CSMC",
    description: "List of Municipal Commissioners of CSMC.",
  },
  "/dp-plan": {
    path: "/dp-plan",
    title: "DP Plan | CSMC",
    description: "Development Plan (DP) of Chhatrapati Sambhajinagar Municipal Corporation.",
  },
  "/user-manual": {
    path: "/user-manual",
    title: "User Manual | CSMC Portal",
    description: "How to use the official CSMC website and citizen services.",
  },
  "/site-map": {
    path: "/site-map",
    title: "Site Map | CSMC",
    description: "Site map of the official CSMC municipal corporation portal.",
  },
  "/digital-repository": {
    path: "/digital-repository",
    title: "Municipal Knowledge Repository | CSMC",
    titleMr: "महापालिका ज्ञान भांडार | CSMC",
    description:
      "Official knowledge library of CSMC circulars, resolutions, budgets, development plans, RTI documents and public records.",
  },
  "/city-alerts": {
    path: "/city-alerts",
    title: "Live City Alerts & Public Advisory | CSMC",
    titleMr: "थेट शहर इशारे व सार्वजनिक सल्ला | CSMC",
    description:
      "Live municipal alerts for road closures, utility works, emergencies and public advisories in Chhatrapati Sambhajinagar.",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | CSMC",
    titleMr: "गोपनीयता धोरण | CSMC",
    description: "Privacy policy for the Chhatrapati Sambhajinagar Municipal Corporation digital portal.",
  },
  "/disclaimer": {
    path: "/disclaimer",
    title: "Disclaimer | CSMC",
    titleMr: "अस्वीकरण | CSMC",
    description: "Legal disclaimer for content published on the CSMC official website prototype.",
  },
  "/terms": {
    path: "/terms",
    title: "Copyright & Terms of Use | CSMC",
    titleMr: "कॉपीराइट व वापर अटी | CSMC",
    description: "Copyright and terms of use for the CSMC municipal corporation portal.",
  },
  "/accessibility-statement": {
    path: "/accessibility-statement",
    title: "Accessibility Statement | CSMC",
    titleMr: "सुलभता निवेदन | CSMC",
    description: "Accessibility statement for inclusive access to CSMC digital services.",
  },
  "/website-policies": {
    path: "/website-policies",
    title: "Website Policies | CSMC",
    titleMr: "संकेतस्थळ धोरणे | CSMC",
    description: "Index of website policies for the CSMC official portal.",
  },
  "/how-to-reach": {
    path: "/how-to-reach",
    title: "How to Reach | CSMC",
    titleMr: "कसे पोहोचावे | CSMC",
    description:
      "How to reach Chhatrapati Sambhajinagar and the CSMC main office by air, rail and road.",
  },
};

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "/" : clean}`;
}
