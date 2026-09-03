/**
 * Single source of truth for primary site navigation.
 * Used by Header and Site Map so both stay aligned.
 */
import { OFFICIAL } from "@/data/officialLinks";

export interface NavItem {
  labelEn: string;
  labelMr: string;
  to?: string;
  external?: boolean;
  children?: NavItem[];
}

export const SITE_NAV: NavItem[] = [
  { labelEn: "Home", labelMr: "मुख्यपृष्ठ", to: "/" },
  {
    labelEn: "Mahangarpalika",
    labelMr: "महानगरपालिका",
    children: [
      {
        labelEn: "About & Administration",
        labelMr: "परिचय व प्रशासन",
        children: [
          {
            labelEn: "About CSMC & Chhatrapati Sambhajinagar",
            labelMr: "CSMC व छत्रपती संभाजीनगर बद्दल",
            to: "/about",
          },
          { labelEn: "How to Reach", labelMr: "कसे पोहोचावे", to: "/how-to-reach" },
          { labelEn: "Aamhala Khelu Dya", labelMr: "आम्हाला खेळू द्या", to: "/initiatives" },
          {
            labelEn: "Hon'ble Municipal Commissioner",
            labelMr: "मा. महानगरपालिका आयुक्त",
            to: "/commissioner",
          },
          {
            labelEn: "Organogram / Organizational Structure",
            labelMr: "प्रशासकीय रचना",
            to: "/organization",
          },
          { labelEn: "Departments", labelMr: "विभाग", to: "/departments" },
          {
            labelEn: "Minutes of General Body Meeting",
            labelMr: "सर्वसाधारण सभेचे इतिवृत्त",
            to: "/public-documents",
          },
          { labelEn: "Hon'ble Mayors' List", labelMr: "मा. महापौरांची यादी", to: "/mayors-list" },
          {
            labelEn: "Hon'ble Commissioners' List",
            labelMr: "मा. आयुक्तांची यादी",
            to: "/commissioners-list",
          },
        ],
      },
      {
        labelEn: "Maps & Digital Systems",
        labelMr: "नकाशे व डिजिटल प्रणाली",
        children: [
          {
            labelEn: "Map of City",
            labelMr: "शहराचा नकाशा",
            to: "https://gis.chhsambhajinagarmc.org/ascdlcitygis/map/all",
            external: true,
          },
          {
            labelEn: "GIS",
            labelMr: "जीआयएस",
            to: "https://gis.chhsambhajinagarmc.org/ascdlcitygis/",
            external: true,
          },
          {
            labelEn: "I-MEGS",
            labelMr: "आय-एमईजीएस",
            to: "https://chhsambhajinagarmc.org/dashboard/",
            external: true,
          },
        ],
      },
      {
        labelEn: "Standing Committee",
        labelMr: "स्थायी समिती",
        children: [
          {
            labelEn: "Standing Committee Meeting Agenda",
            labelMr: "स्थायी समिती बैठक अजेंडा",
            to: "/public-documents?category=minutes&type=agenda",
          },
          {
            labelEn: "Standing Committee Meeting Minutes",
            labelMr: "स्थायी समिती बैठक इतिवृत्त",
            to: "/public-documents?category=minutes&type=minutes",
          },
          {
            labelEn: "Standing Committee Meeting Attendance",
            labelMr: "स्थायी समिती बैठक उपस्थिती",
            to: "/public-documents?category=minutes&type=attendance",
          },
        ],
      },
      {
        labelEn: "Budget",
        labelMr: "अर्थसंकल्प",
        children: [
          {
            labelEn: "Budget Availability",
            labelMr: "अर्थसंकल्प उपलब्धता",
            to: "/public-documents?category=budget",
          },
          {
            labelEn: "Budget in Excel Format",
            labelMr: "एक्सेल स्वरूपात अर्थसंकल्प",
            to: "/public-documents?category=budget&format=excel",
          },
          {
            labelEn: "Budget 2025-26",
            labelMr: "अर्थसंकल्प २०२५-२६",
            to: "/public-documents?category=budget&year=2025",
          },
          {
            labelEn: "Budget 2024-25",
            labelMr: "अर्थसंकल्प २०२४-२५",
            to: "/public-documents?category=budget&year=2024",
          },
          {
            labelEn: "Budget 2023-24",
            labelMr: "अर्थसंकल्प २०२३-२४",
            to: "/public-documents?category=budget&year=2023",
          },
        ],
      },
    ],
  },
  {
    labelEn: "Citizen Services",
    labelMr: "नागरिक सेवा",
    children: [
      { labelEn: "All Services", labelMr: "सर्व सेवा", to: "/services" },
      { labelEn: "Public Facilities", labelMr: "सार्वजनिक सुविधा", to: "/public-facilities" },
      {
        labelEn: "Know Your Zone / Prabhag / Ward",
        labelMr: "तुमचा झोन / प्रभाग / वॉर्ड जाणून घ्या",
        to: "/zones-wards",
      },
      {
        labelEn: "Know Your Corporator",
        labelMr: "तुमचा नगरसेवक जाणून घ्या",
        to: "/know-your-corporator",
      },
      {
        labelEn: "Pay Property Tax",
        labelMr: "मालमत्ता कर भरा",
        to: "https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi",
        external: true,
      },
      {
        labelEn: "Pay Water Tax",
        labelMr: "पाणी कर भरा",
        to: "https://chhs.chhsambhajinagarmc.org/Watersupply/pg/ledger/getWaterPgApi.do",
        external: true,
      },
      {
        labelEn: "Birth Certificate",
        labelMr: "जन्म प्रमाणपत्र",
        to: "https://rts.chhsambhajinagarmc.org/links/dashboard",
        external: true,
      },
      {
        labelEn: "Death Certificate",
        labelMr: "मृत्यू प्रमाणपत्र",
        to: "https://rts.chhsambhajinagarmc.org/links/dashboard",
        external: true,
      },
      {
        labelEn: "Track Application",
        labelMr: "अर्ज स्थिती",
        to: "https://chhsambhajinagarmc.org/csms/check_comp_status.php?id=250",
        external: true,
      },
      {
        labelEn: "Gunthewari Challan",
        labelMr: "गुंठेवारी चलन",
        to: "https://rts.chhsambhajinagarmc.org/links/gunthewari_form_codev2",
        external: true,
      },
      {
        labelEn: "Public Transport Information (Chalo)",
        labelMr: "सार्वजनिक परिवहन माहिती (चलो)",
        to: OFFICIAL.chalo,
        external: true,
      },
      {
        labelEn: "Samadhaan",
        labelMr: "समाधान",
        to: OFFICIAL.samadhaan,
        external: true,
      },
      {
        labelEn: "Aaple Sarkar",
        labelMr: "आपले सरकार",
        to: OFFICIAL.onlineRti,
        external: true,
      },
    ],
  },
  {
    labelEn: "Publications",
    labelMr: "प्रकाशने",
    children: [
      {
        labelEn: "Tenders",
        labelMr: "निविदा",
        to: "https://mahatenders.gov.in/nicgep/app",
        external: true,
      },
      { labelEn: "Notices", labelMr: "सूचना", to: "/notices" },
      { labelEn: "Govt. Orders", labelMr: "शासन निर्णय", to: "/govt-orders" },
      {
        labelEn: "Municipal Knowledge Repository",
        labelMr: "महापालिका ज्ञान भांडार",
        to: "/digital-repository",
      },
      { labelEn: "Recruitment", labelMr: "भरती", to: "/recruitment" },
      {
        labelEn: "Contractor Registration",
        labelMr: "कंत्राटदार नोंदणी",
        to: OFFICIAL.contractorRegistration,
        external: true,
      },
    ],
  },
  {
    labelEn: "Contact",
    labelMr: "संपर्क",
    children: [
      {
        labelEn: "Live City Alerts & Public Advisory",
        labelMr: "थेट शहर इशारे व सार्वजनिक सल्ला",
        to: "/city-alerts",
      },
      {
        labelEn: "Emergency Contact (Fire & Disaster)",
        labelMr: "आपत्कालीन संपर्क",
        to: "/disaster-management",
      },
      { labelEn: "Municipal Contact", labelMr: "महानगरपालिका संपर्क", to: "/contact" },
      { labelEn: "How to Reach", labelMr: "कसे पोहोचावे", to: "/how-to-reach" },
      {
        labelEn: "Citizen Feedback",
        labelMr: "नागरिक अभिप्राय",
        to: OFFICIAL.citizenFeedback,
        external: true,
      },
    ],
  },
  { labelEn: "Right To Information", labelMr: "माहिती अधिकार कायदा", to: "/rti-act" },
  { labelEn: "Right To Service", labelMr: "सेवा हक्क कायदा", to: "/rts-act" },
  { labelEn: "DP Plan", labelMr: "डी पी प्लॅन", to: "/dp-plan" },
  { labelEn: "Site Map", labelMr: "साईट मॅप", to: "/site-map" },
];

/** Header chrome links that sit outside the main NAV bar. */
export const HEADER_UTILITY_LINKS: NavItem[] = [
  { labelEn: "User Manual", labelMr: "वापरकर्ता मार्गदर्शक", to: "/user-manual" },
];

/** Extra live pages reachable from content/footer but not listed in the main NAV. */
export const OTHER_SITE_PAGES: NavItem[] = [
  { labelEn: "Explore Sambhajinagar", labelMr: "संभाजीनगर शोधा", to: "/explore" },
  { labelEn: "FAQ", labelMr: "सामान्य प्रश्न", to: "/faq" },
  { labelEn: "Elections", labelMr: "निवडणूक", to: "/elections" },
  { labelEn: "Prabhag 2025", labelMr: "प्रभाग २०२५", to: "/prabhag-2025" },
];

export function isExternalHref(to?: string, external?: boolean): boolean {
  if (external) return true;
  if (!to) return false;
  return /^https?:\/\//i.test(to);
}
