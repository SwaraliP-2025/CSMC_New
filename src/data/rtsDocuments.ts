/**
 * Official RTS documents published on the CSMC RTS page.
 * English and Marathi titles are separate. Dates are taken from the source PDFs.
 */
export type RtsDocument = {
  id: string;
  titleEn: string;
  titleMr: string;
  /** ISO date verified from the file. Omit when no date could be read. */
  date?: string;
  typeEn?: string;
  typeMr?: string;
  /** Path under the Vite public folder, without a leading slash. */
  file: string;
};

const RTS_FILE_BASE = `${import.meta.env.BASE_URL}documents/rts/`;

export function rtsDocumentUrl(file: string) {
  return `${RTS_FILE_BASE}${file}`;
}

export const RTS_DOCUMENTS: RtsDocument[] = [
  {
    id: "rts-adhi-suchana",
    titleEn: "Adhi Suchana",
    titleMr: "आधी सूचना",
    date: "2025-01-30",
    typeEn: "Gazette",
    typeMr: "राजपत्र",
    file: "Adhi-Suchna.pdf",
  },
  {
    id: "rts-gazette-2025-11-20",
    titleEn: "Gazette Dt. 20-11-2025",
    titleMr: "राजपत्र दिनांक २०-११-२०२५",
    date: "2025-11-20",
    typeEn: "Gazette",
    typeMr: "राजपत्र",
    file: "Gazette_Dt_20-11-2025.pdf",
  },
  {
    id: "rts-act-2015",
    titleEn: "Maharashtra Right to Public Services Act, 2015",
    titleMr: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५",
    date: "2015-08-21",
    typeEn: "Act",
    typeMr: "अधिनियम",
    file: "Maharashtra_Right_to_public_services_Act_2015.pdf",
  },
  {
    id: "rts-rules-2016",
    titleEn: "Maharashtra Public Service Right Act Rules Gazette",
    titleMr: "महाराष्ट्र लोकसेवा हक्क नियम, २०१६",
    date: "2016-11-18",
    typeEn: "Rules",
    typeMr: "नियम",
    file: "RTS_Rules_Gazette2.pdf",
  },
  {
    id: "rts-mc-office-order",
    titleEn: "Ch. Sambhajinagar M.C. Office Order",
    titleMr: "छत्रपती संभाजीनगर महानगरपालिका कार्यालयीन आदेश",
    date: "2025-09-15",
    typeEn: "Office order",
    typeMr: "कार्यालयीन आदेश",
    file: "Gazette_2.pdf",
  },
  {
    id: "rts-gazette-2025-08-21",
    titleEn: "Maharashtra Public Service Right Act Rules Gazette 21-08-2025",
    titleMr: "महाराष्ट्र लोकसेवा हक्क नियम राजपत्र २१-०८-२०२५",
    date: "2025-08-21",
    typeEn: "Gazette",
    typeMr: "राजपत्र",
    file: "Maharashtra_Public_Service_Right_Act_Rules_Gazette_21-08-2025.pdf",
  },
];

/** Official list of notified services, as linked from the CSMC RTS page. */
export const RTS_NOTIFIED_SERVICES_URL =
  "https://aaplesarkar.mahaonline.gov.in/en/CommonForm/ViewAllServices";
