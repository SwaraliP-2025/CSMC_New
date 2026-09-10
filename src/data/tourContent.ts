import { OFFICIAL } from "@/data/officialLinks";
import type { TourLang } from "@/lib/tourPersistence";

export type TourStepId =
  | "welcome"
  | "a11y"
  | "nav"
  | "search"
  | "quick"
  | "rts"
  | "notices"
  | "local"
  | "finish";

export type TourTargetId =
  | "a11y"
  | "main-nav"
  | "mobile-menu-btn"
  | "mobile-nav"
  | "global-search"
  | "quick-services"
  | "rts-services"
  | "notices-tab"
  | "whats-new"
  | "user-manual"
  | null;

export type TourStepDef = {
  id: TourStepId;
  /** Prefer spotlight on desktop when target resolves; always centered on mobile or when null. */
  target: TourTargetId;
  /** Alternate target when primary is missing (e.g. mobile). */
  mobileTarget?: TourTargetId;
  title: Record<TourLang, string>;
  body: Record<TourLang, string>;
  note?: Record<TourLang, string>;
  cta?: {
    label: Record<TourLang, string>;
    href: string;
    external?: boolean;
  };
  /** Optional internal links shown in the card (local/help step). */
  links?: {
    label: Record<TourLang, string>;
    to: string;
    external?: boolean;
  }[];
  /** Search demo chips (no navigation away from tour). */
  searchDemo?: {
    query: Record<TourLang, string>;
  };
  layout: "center" | "spotlight";
};

export const TOUR_UI = {
  guideTitle: { mr: "वेबसाइट मार्गदर्शक", en: "Website Guide" } as const,
  skip: { mr: "वगळा", en: "Skip" } as const,
  prev: { mr: "मागे", en: "Back" } as const,
  next: { mr: "पुढे", en: "Next" } as const,
  finish: { mr: "पूर्ण झाले", en: "Done" } as const,
  close: { mr: "बंद करा", en: "Close" } as const,
  langMr: "मराठी",
  langEn: "English",
  stepOf: (n: number, total: number, lang: TourLang) =>
    lang === "mr" ? `पायरी ${n} / ${total}` : `Step ${n} of ${total}`,
  fab: {
    mr: "वेबसाइट मार्गदर्शक",
    en: "Website Guide",
  } as const,
  fabAria: {
    mr: "वेबसाइट मार्गदर्शक पुन्हा सुरू करा",
    en: "Restart the Website Guide",
  } as const,
  searchDemoHeading: {
    mr: "उदाहरण शोध",
    en: "Example search",
  } as const,
  searchTry: {
    mr: "हे शोधा",
    en: "Try this",
  } as const,
  searchResultHint: {
    mr: "शीर्ष परिणाम (फक्त उदाहरण — टूर बंद होणार नाही)",
    en: "Top matches (demo only — tour stays open)",
  } as const,
  wantToDo: {
    mr: "तुम्हाला काय करायचे आहे?",
    en: "What do you want to do?",
  } as const,
  openRts: {
    mr: "सर्व RTS सेवा उघडा",
    en: "Open All RTS Services",
  } as const,
} as const;

export const TOUR_STEPS: TourStepDef[] = [
  {
    id: "welcome",
    target: null,
    layout: "center",
    title: {
      mr: "छत्रपती संभाजीनगर मनपा पोर्टलमध्ये आपले स्वागत आहे!",
      en: "Welcome to the CSMC Website",
    },
    body: {
      mr: "या संक्षिप्त मार्गदर्शकातून वेबसाइटवरील सेवा, शोध, सुलभता आणि महत्त्वाची माहिती कशी वापरायची ते जाणून घ्या.",
      en: "Take a quick tour to learn how to find services, search information, use accessibility options and discover important civic information.",
    },
    note: {
      mr: "आपण हा मार्गदर्शक कधीही वगळू शकता.",
      en: "Skip the guide anytime.",
    },
  },
  {
    id: "a11y",
    target: "a11y",
    layout: "spotlight",
    title: {
      mr: "भाषा व सुलभता",
      en: "Language & accessibility",
    },
    body: {
      mr: "तुमच्या सोयीप्रमाणे वेबसाइट वापरा. मराठी किंवा English निवडा, अक्षरांचा आकार (A− / A / A+) बदला आणि रंग-सुलभता (Color blind) पर्याय वापरा.",
      en: "Customize your experience. Switch between Marathi and English, adjust text size (A− / A / A+) and use the colour-accessibility (Color blind) option.",
    },
  },
  {
    id: "nav",
    target: "main-nav",
    mobileTarget: "mobile-menu-btn",
    layout: "spotlight",
    title: {
      mr: "मुख्य मेनू",
      en: "Main navigation",
    },
    body: {
      mr: "महानगरपालिका, नागरिक सेवा, प्रकाशने आणि इतर महत्त्वाच्या विभागांपर्यंत मुख्य मेनूमधून पोहोचा.",
      en: "Use the main menu to explore the Corporation, Citizen Services, Publications and other important sections.",
    },
  },
  {
    id: "search",
    target: "global-search",
    layout: "spotlight",
    title: {
      mr: "शोध",
      en: "Search",
    },
    body: {
      mr: "सेवा, सूचना, दस्तऐवज किंवा विभाग शोधण्यासाठी येथे शब्द टाइप करा. मायक्रोफोन वापरून आवाजानेही शोधू शकता. योग्य परिणाम थेट संबंधित सेवा/पृष्ठाकडे नेऊ शकतात.",
      en: "Search for services, notices, documents or departments. You can also use the microphone for voice search. Results can take you directly to the right service or page.",
    },
    searchDemo: {
      query: { mr: "मालमत्ता कर", en: "birth certificate" },
    },
  },
  {
    id: "quick",
    target: "quick-services",
    layout: "spotlight",
    title: {
      mr: "जलद नागरिक सेवा",
      en: "Quick citizen services",
    },
    body: {
      mr: "महत्त्वाच्या नागरिक सेवा थेट येथे उपलब्ध आहेत — कर भरणा, तक्रार नोंदणी, गुंठेवारी, रमाई आवास योजना आणि अर्जाची स्थिती यांसारख्या सेवांसाठी या जलद दुव्यांचा वापर करा.",
      en: "Frequently used citizen services are available directly here, including tax payment, complaints, Gunthewari, Ramai Awas Yojana and application status.",
    },
  },
  {
    id: "rts",
    target: "rts-services",
    layout: "spotlight",
    title: {
      mr: "सर्व RTS सेवा",
      en: "All RTS Services",
    },
    body: {
      mr: "CSMC च्या विविध ऑनलाइन नागरिक सेवांची संपूर्ण यादी पाहण्यासाठी 'सर्व RTS सेवा' निवडा. अधिकृत RTS डॅशबोर्डवर कर, प्रमाणपत्रे, परवाने आणि इतर ऑनलाइन सेवा उपलब्ध आहेत (सध्या सुमारे ७८ सेवांची यादी).",
      en: "Use 'All RTS Services' to explore the complete online citizen-service catalogue on the official RTS dashboard — taxes, certificates, licences and other services (about 78 services listed there today).",
    },
    cta: {
      label: {
        mr: "सर्व RTS सेवा उघडा",
        en: "Open All RTS Services",
      },
      href: OFFICIAL.rtsDashboard,
      external: true,
    },
  },
  {
    id: "notices",
    target: "notices-tab",
    mobileTarget: "whats-new",
    layout: "spotlight",
    title: {
      mr: "सूचना व अद्यतने",
      en: "Notices & updates",
    },
    body: {
      mr: "महत्त्वाच्या सूचना, घोषणा, निविदा आणि इतर अद्यतने पाहण्यासाठी सूचना व What's New विभाग तपासा. तातडीच्या स्थानिक सूचनांसाठी शहर इशारे (City Alerts) देखील पहा.",
      en: "Check Notices and What's New for important announcements, tenders and updates. For urgent local advisories, also see City Alerts.",
    },
    links: [
      {
        label: { mr: "शहर इशारे", en: "City Alerts" },
        to: "/city-alerts",
      },
    ],
  },
  {
    id: "local",
    target: "user-manual",
    layout: "spotlight",
    title: {
      mr: "प्रभाग, मदत व मार्गदर्शक",
      en: "Ward help & guide",
    },
    body: {
      mr: "आपल्या प्रभागाची आणि स्थानिक प्रतिनिधींची माहिती जाणून घ्या. वेबसाइट कशी वापरायची यासाठी User Manual पाहा. मार्गदर्शक पुन्हा सुरू करण्यासाठी वेबसाइट मार्गदर्शक बटण वापरा.",
      en: "Explore your ward and local representative information. Use the User Manual for detailed help, and restart this guide anytime from the Website Guide button.",
    },
    links: [
      {
        label: { mr: "झोन / प्रभाग / वॉर्ड", en: "Zones / Prabhag / Ward" },
        to: "/zones-wards",
      },
      {
        label: { mr: "तुमचा नगरसेवक", en: "Know Your Corporator" },
        to: "/know-your-corporator",
      },
      {
        label: { mr: "वापरकर्ता नियमावली", en: "User Manual" },
        to: "/user-manual",
      },
    ],
  },
  {
    id: "finish",
    target: null,
    layout: "center",
    title: {
      mr: "आपण तयार आहात!",
      en: "You're all set!",
    },
    body: {
      mr: "आता तुम्ही CSMC वेबसाइटवर सेवा, माहिती आणि नागरिक सुविधा सहज शोधू शकता.",
      en: "You can now find services, information and civic facilities on the CSMC website with confidence.",
    },
  },
];

export type TourShortcut = {
  id: string;
  label: Record<TourLang, string>;
  href: string;
  external?: boolean;
  /** Optional search query demo (stays on site; focuses search). */
  searchQuery?: Record<TourLang, string>;
};

export const TOUR_SHORTCUTS: TourShortcut[] = [
  {
    id: "property-tax",
    label: { mr: "मालमत्ता कर", en: "Property tax" },
    href: OFFICIAL.propertyTax,
    external: true,
  },
  {
    id: "water-tax",
    label: { mr: "पाणीपट्टी", en: "Water charges" },
    href: OFFICIAL.waterTax,
    external: true,
  },
  {
    id: "complaint",
    label: { mr: "तक्रार नोंदवा", en: "Register complaint" },
    href: OFFICIAL.samadhaan,
    external: true,
  },
  {
    id: "status",
    label: { mr: "अर्जाची स्थिती", en: "Application status" },
    href: OFFICIAL.trackComplaint,
    external: true,
  },
  {
    id: "rts",
    label: { mr: "सर्व RTS सेवा", en: "All RTS Services" },
    href: OFFICIAL.rtsDashboard,
    external: true,
  },
  {
    id: "search",
    label: { mr: "वेबसाइटवर शोधा", en: "Search the website" },
    href: "#",
    searchQuery: {
      mr: "मला मालमत्ता कर भरायचा आहे",
      en: "I want to renew my trade licence",
    },
  },
];

/** Intent-style example prompts for finish-step discovery (routes via existing search). */
export const TOUR_INTENT_EXAMPLES: {
  label: Record<TourLang, string>;
  query: Record<TourLang, string>;
}[] = [
  {
    label: { mr: "मला मालमत्ता कर भरायचा आहे", en: "I want to pay property tax" },
    query: { mr: "मालमत्ता कर", en: "property tax" },
  },
  {
    label: { mr: "मला जन्म प्रमाणपत्र हवे आहे", en: "I need a birth certificate" },
    query: { mr: "जन्म प्रमाणपत्र", en: "birth certificate" },
  },
  {
    label: { mr: "मला व्यापार परवाना हवा आहे", en: "I need a trade licence" },
    query: { mr: "व्यापार परवाना", en: "trade licence" },
  },
  {
    label: { mr: "मला तक्रार नोंदवायची आहे", en: "I want to register a complaint" },
    query: { mr: "तक्रार नोंदवा", en: "register complaint" },
  },
  {
    label: { mr: "मला अर्जाची स्थिती तपासायची आहे", en: "I want to check application status" },
    query: { mr: "अर्ज स्थिती", en: "application status" },
  },
];
