/**
 * Cross-language search aliases for the CSMC prototype.
 * Each group is English + Marathi + common Devanagari transliterations of English.
 * When any term matches, the whole group is added to the query expansion.
 */
export const SEARCH_ALIAS_GROUPS: string[][] = [
  // Tourism / explore
  [
    "tourism", "tourist", "tourists", "sightseeing", "attractions", "attraction", "heritage", "explore",
    "पर्यटन", "आकर्षणे", "स्थानिक आकर्षणे", "पर्यटन स्थळे", "वारसा", "paryatan",
    "टुरिझम", "टुरिझम्", "टूरिझम", "टूरिस्म", "टुरिस्म", "टुरिस्ट", "हेरिटेज", "एक्सप्लोर",
    "ellora", "ajanta", "maqbara", "daulatabad", "deogiri", "वेरूळ", "अजिंठा", "मकबरा", "देवगिरी",
  ],
  // Property tax
  [
    "property tax", "property", "house tax", "malmatta",
    "मालमत्ता कर", "मालमत्ता",
    "प्रॉपर्टी टॅक्स", "प्रॉपर्टी कर", "प्रॉपर्टी", "हाऊस टॅक्स", "मलमत्ता",
  ],
  // Water tax / supply
  [
    "water tax", "water bill", "water supply", "water",
    "पाणी कर", "पाणी बिल", "पाणी पुरवठा", "पाणी",
    "वॉटर टॅक्स", "वॉटर बिल", "वॉटर",
  ],
  // Birth certificate
  [
    "birth certificate", "birth", "newborn", "janma",
    "जन्म प्रमाणपत्र", "जन्म दाखला", "जन्म",
    "बर्थ सर्टिफिकेट", "बर्थ",
  ],
  // Death certificate
  [
    "death certificate", "death",
    "मृत्यू प्रमाणपत्र", "मृत्यू दाखला", "मृत्यू",
    "डेथ सर्टिफिकेट", "डेथ",
  ],
  // Grievance / complaint
  [
    "grievance", "complaint", "complaints", "takaar", "samadhaan",
    "तक्रार", "समाधान",
    "ग्रिव्हन्स", "कंप्लेंट", "तक्रार नोंदवा", "समधाान",
  ],
  // Building permission
  [
    "building permission", "building plan", "construction", "bye laws", "bye-laws", "dcr",
    "बांधकाम परवानगी", "बांधकाम", "नकाशा",
    "बिल्डिंग परमिशन", "बिल्डिंग", "कन्स्ट्रक्शन",
  ],
  // Trade license
  [
    "trade license", "trade licence", "business license", "licence", "license",
    "व्यापार परवाना", "परवाना",
    "ट्रेड लायसन्स", "बिझनेस लायसन्स",
  ],
  // RTI
  [
    "rti", "right to information",
    "माहिती अधिकार", "आरटीआय",
    "राइट टू इन्फॉर्मेशन",
  ],
  // RTS
  [
    "rts", "right to service", "right to services",
    "सेवा हक्क", "आरटीएस",
    "राइट टू सर्व्हिस",
  ],
  // Solid waste
  [
    "solid waste", "swm", "garbage", "segregation", "waste",
    "घनकचरा", "कचरा",
    "सॉलिड वेस्ट", "गार्बेज",
  ],
  // How to reach / travel
  [
    "how to reach", "reach", "airport", "railway", "station", "directions",
    "कसे पोहोचावे", "पोहोचावे", "विमानतळ", "रेल्वे",
    "एअरपोर्ट", "रेल्वे स्टेशन", "हाउ टू रीच",
  ],
  // Corporator
  [
    "corporator", "councillor", "know your corporator",
    "नगरसेवक", "तुमचा नगरसेवक",
    "कॉर्पोरेटर", "नगर सेवक",
  ],
  // Ward / zone / prabhag
  [
    "ward", "wards", "zone", "zones",
    "वॉर्ड", "झोन",
    "वार्ड",
  ],
  [
    "prabhag", "prabhags",
    "प्रभाग", "प्रभाग २०२५",
  ],
  // City alerts
  [
    "city alerts", "alerts", "advisory", "public advisory",
    "शहर इशारे", "इशारे", "सल्ला",
    "सिटी अलर्ट्स", "अलर्ट",
  ],
  // Facilities
  [
    "public facilities", "facilities", "hospital", "school", "fire station", "police", "cfc",
    "सार्वजनिक सुविधा", "सुविधा", "रुग्णालय", "शाळा", "अग्निशमन",
    "फॅसिलिटीज", "हॉस्पिटल", "स्कूल",
  ],
  // Repository / documents
  [
    "knowledge repository", "repository", "digital repository", "documents", "public documents",
    "ज्ञान भांडार", "दस्तऐवज", "सार्वजनिक दस्तऐवज",
    "रिपॉझिटरी", "डॉक्युमेंट्स",
  ],
  // Notices
  [
    "notices", "notice", "announcement", "announcements",
    "सूचना", "घोषणा",
    "नोटिस",
  ],
  // Tenders
  [
    "tender", "tenders", "e-tender", "etender",
    "निविदा", "ई-निविदा",
    "टेंडर",
  ],
  // Recruitment
  [
    "recruitment", "jobs", "vacancy", "vacancies", "career",
    "भरती", "नोकऱ्या", "रिक्त जागा",
    "रिक्रूटमेंट", "जॉब्स",
  ],
  // Tax calculator
  [
    "tax calculator", "calculator",
    "कर कॅल्क्युलेटर", "कॅल्क्युलेटर",
    "टॅक्स कॅल्क्युलेटर",
  ],
  // Track application
  [
    "track application", "track", "application status", "status",
    "अर्ज स्थिती", "स्थिती",
    "ट्रॅक", "अॅप्लिकेशन स्टेटस",
  ],
  // FAQ
  [
    "faq", "faqs", "frequently asked",
    "सामान्य प्रश्न", "प्रश्न",
    "एफएक्यू",
  ],
  // Departments
  [
    "department", "departments",
    "विभाग",
    "डिपार्टमेंट",
  ],
  // Contact
  [
    "contact", "phone", "helpline", "feedback",
    "संपर्क", "अभिप्राय",
    "कॉन्टॅक्ट", "फीडबॅक",
  ],
  // Disaster / fire / emergency
  [
    "disaster", "emergency", "fire", "disaster management",
    "आपत्कालीन", "अग्निशमन", "आपत्ती व्यवस्थापन",
    "डिझास्टर", "इमर्जन्सी", "फायर",
  ],
  // Elections / voter
  [
    "election", "elections", "voter", "voting",
    "निवडणूक", "मतदार",
    "इलेक्शन", "वोटर",
  ],
  // Budget
  [
    "budget",
    "अर्थसंकल्प",
    "बजेट",
  ],
  // DP plan
  [
    "dp plan", "development plan",
    "डी पी प्लॅन", "विकास आराखडा",
    "डीपी प्लॅन",
  ],
  // User manual
  [
    "user manual", "manual", "help",
    "वापरकर्ता नियमावली", "मार्गदर्शक",
    "युजर मॅन्युअल", "मॅन्युअल",
  ],
  // About / city
  [
    "about", "about csmc", "history",
    "परिचय", "बद्दल",
    "अबाउट",
  ],
  // Commissioner
  [
    "commissioner", "municipal commissioner",
    "आयुक्त", "महानगरपालिका आयुक्त",
    "कमिशनर",
  ],
  // Initiatives
  [
    "initiatives", "let us play", "aamhala khelu dya",
    "उपक्रम", "आम्हाला खेळू द्या",
    "इनिशिएटिव्ह",
  ],
  // Services hub
  [
    "services", "citizen services",
    "सेवा", "नागरिक सेवा",
    "सर्व्हिसेस",
  ],
  // Privacy / policies
  [
    "privacy", "privacy policy", "disclaimer", "terms", "accessibility", "website policies",
    "गोपनीयता", "अस्वीकरण", "अटी", "सुलभता", "धोरणे",
    "प्रायव्हसी", "डिस्क्लेमर",
  ],
  // Gunthewari
  [
    "gunthewari", "gunthewari challan",
    "गुंठेवारी", "गुंठेवारी चलन",
    "गुंठेवारी चालन",
  ],
  // GIS / maps
  [
    "gis", "map", "city map",
    "नकाशा", "जीआयएस",
    "मॅप",
  ],
];

function normAlias(s: string) {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\u00A0\u202F\u2007]/g, " ")
    .replace(/[^\p{L}\p{N}\p{M}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Strip speech artifacts and spoken filler so voice queries rank like typed ones. */
export function prepareSearchQuery(query: string): string {
  const original = query.normalize("NFC").replace(/[\u00A0\u202F\u2007]/g, " ").replace(/\s+/g, " ").trim();
  let q = original.replace(/[.,!?;:।]+/g, " ").replace(/\s+/g, " ").trim();
  q = q.replace(
    /^(please\s+)?((i\s+)?(want|need|would like)\s+(to\s+)?)?(search|find|show|open|look)\s+(for\s+|me\s+|up\s+)?/i,
    ""
  );
  q = q.replace(/^(i\s+)?(want|need|would like)\s+(to\s+)?/i, "");
  q = q.replace(/^(मला|आम्हाला)\s+(पाहिजे\s+)?/u, "");
  q = q.replace(/\s+/g, " ").trim();
  return q || original;
}

/** Prefer whole-word match for short Latin abbreviations (avoids "rti" inside "certificate"). */
function containsTerm(hay: string, needle: string) {
  if (!needle || !hay) return false;
  if (hay === needle) return true;
  if (/^[a-z0-9]{1,4}$/i.test(needle)) {
    return hay.split(/\s+/).some((w) => w === needle);
  }
  return hay.includes(needle);
}

/** Expand a citizen query with cross-language synonyms (EN / MR / transliteration). */
export function expandSearchQuery(query: string): { expanded: string; terms: string[] } {
  const raw = normAlias(query);
  if (!raw) return { expanded: "", terms: [] };

  const terms = new Set<string>([raw]);
  for (const t of raw.split(/\s+/).filter((w) => w.length >= 2)) terms.add(t);

  for (const group of SEARCH_ALIAS_GROUPS) {
    const normalized = group.map(normAlias).filter(Boolean);
    const hit = normalized.some((alias) => {
      if (!alias) return false;
      if (raw === alias) return true;
      if (alias.length >= 3 && containsTerm(raw, alias)) return true;
      if (raw.length >= 4 && alias.length >= raw.length && containsTerm(alias, raw)) return true;
      for (const t of terms) {
        if (t.length < 3) continue;
        if (t === alias) return true;
        if (t.length >= 5 && alias.length >= 5 && (alias.startsWith(t) || t.startsWith(alias))) return true;
      }
      return false;
    });
    if (hit) {
      for (const alias of normalized) terms.add(alias);
    }
  }

  return { expanded: [...terms].join(" "), terms: [...terms] };
}
