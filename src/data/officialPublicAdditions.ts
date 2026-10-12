import type { ArchiveFile } from "@/lib/archiveDocuments";

export type OfficialPublicAddition = {
  slug: string;
  folder: string[];
  documents: ArchiveFile[];
};

/** Official PDFs published after the tender hold was lifted. Sizes match the official file and Drive. */
export const officialPublicAdditions: OfficialPublicAddition[] = [
  {
    slug: "electrical",
    folder: ["Municipal Document Repository","Electrical Department"],
    documents: [
      { id: "official-electrical-satara-devlaee-1-pdf", file: "Satara_Devlaee-1.pdf", bytes: 212232, titleEn: "Satara Devlaee-1" },
      { id: "official-electrical-satara-devlaee-2-pdf", file: "Satara_Devlaee-2.pdf", bytes: 167138, titleEn: "Satara Devlaee-2" },
      { id: "official-electrical-ward-a-part-2-pdf", file: "Ward_-_A_part_-2.pdf", bytes: 737626, titleEn: "Ward - A part -2" },
      { id: "official-electrical-ward-a-part-3-pdf", file: "Ward_-_A_part_3.pdf", bytes: 206209, titleEn: "Ward - A part 3" },
      { id: "official-electrical-ward-b-part-1-pdf", file: "Ward_-_B_part_1.pdf", bytes: 470618, titleEn: "Ward - B part 1" },
      { id: "official-electrical-ward-b-part-2-pdf", file: "Ward_-_B_part_2.pdf", bytes: 199119, titleEn: "Ward - B part 2" },
      { id: "official-electrical-ward-b-part-3-pdf", file: "Ward_-_B_part_3.pdf", bytes: 284708, titleEn: "Ward - B part 3" },
      { id: "official-electrical-ward-b-part-4-pdf", file: "Ward_-_B_part_4.pdf", bytes: 199556, titleEn: "Ward - B part 4" },
      { id: "official-electrical-ward-d-part-1-pdf", file: "Ward_-_D_part_1.pdf", bytes: 211561, titleEn: "Ward - D part 1" },
      { id: "official-electrical-ward-d-part-2-pdf", file: "Ward_-_D_part_2.pdf", bytes: 244714, titleEn: "Ward - D part 2" },
      { id: "official-electrical-ward-d-part-3-pdf", file: "Ward_-_D_part_3.pdf", bytes: 271909, titleEn: "Ward - D part 3" },
      { id: "official-electrical-ward-e-part-1-pdf", file: "Ward_-_E_part_1.pdf", bytes: 277109, titleEn: "Ward - E part 1" },
      { id: "official-electrical-ward-e-part-2-pdf", file: "Ward_-_E_part_2.pdf", bytes: 273386, titleEn: "Ward - E part 2" },
      { id: "official-electrical-ward-e-part-3-pdf", file: "Ward_-_E_part_3.pdf", bytes: 210798, titleEn: "Ward - E part 3" },
      { id: "official-electrical-ward-f-part-4-pdf", file: "Ward_-_F_part_-4.pdf", bytes: 285155, titleEn: "Ward - F part -4" },
      { id: "official-electrical-ward-f-part-1-pdf", file: "Ward_-_F_part_1.pdf", bytes: 266651, titleEn: "Ward - F part 1" },
      { id: "official-electrical-ward-f-part-2-pdf", file: "Ward_-_F_part_2.pdf", bytes: 189389, titleEn: "Ward - F part 2" },
      { id: "official-electrical-ward-f-part-3-pdf", file: "Ward_-_F_part_3.pdf", bytes: 197676, titleEn: "Ward - F part 3" },
      { id: "official-electrical-word-a-part-1-pdf", file: "Word_-_A_part-1.pdf", bytes: 192072, titleEn: "Word - A part-1" },
    ],
  },
  {
    slug: "fire-disaster-management",
    folder: ["Municipal Document Repository","Fire Department"],
    documents: [
      { id: "official-fire-disaster-management-agriment-pdf", file: "Agriment.pdf", bytes: 3501324, titleEn: "Agriment" },
    ],
  },
  {
    slug: "garden",
    folder: ["Municipal Document Repository","Garden Department"],
    documents: [
      { id: "official-garden-adventure-park-eoi-pdf", file: "Adventure_Park_EOI.pdf", bytes: 1742473, titleEn: "Adventure_Park_EOI" },
      { id: "official-garden-eoi-garden-english-pdf", file: "EOI_Garden_English.pdf", bytes: 897267, titleEn: "EOI_Garden_English" },
      { id: "official-garden-garden-1040-dt-22-12-2023-pdf", file: "Garden_1040_dt__22_12_2023.pdf", bytes: 71616, titleEn: "Garden_1040_dt__22_12_2023" },
      { id: "official-garden-swarsya-abhivyakti-eoi-englisch-second-time-pdf", file: "Swarsya_Abhivyakti-EOI_Englisch_(Second_Time).pdf", bytes: 2453028, titleEn: "Swarsya_Abhivyakti-EOI_Englisch_(Second_Time)" },
      { id: "official-garden-swarsya-abhivyakti-eoi-marathi-second-time-pdf", file: "Swarsya_Abhivyakti-EOI_Marathi_(Second_Time).pdf", bytes: 3037319, titleEn: "Swarsya_Abhivyakti-EOI_Marathi_(Second_Time)" },
      { id: "official-garden-jahir-lilav-suchana-pdf", file: "Jahir_Lilav_Suchana.pdf", bytes: 937402, titleEn: "Jahir Lilav Suchana" },
    ],
  },
  {
    slug: "labour",
    folder: ["Municipal Document Repository","Labour Department"],
    documents: [
      { id: "official-labour-all-tenders-notices-and-documents-pdf", file: "All_Tenders_Notices_and_Documents.pdf", bytes: 7521784, titleEn: "All Tenders Notices and Documents" },
      { id: "official-labour-labour-section-dt-18-4-2022-pdf", file: "Labour_Section_dt__18_4_2022.pdf", bytes: 2361358, titleEn: "Labour_Section_2022" },
      { id: "official-labour-tender-document-1-pdf", file: "Tender_Document_1.pdf", bytes: 13572818, titleEn: "Tender Document 1" },
      { id: "official-labour-tender-document-pdf", file: "Tender_Document.pdf", bytes: 3176118, titleEn: "Tender Document" },
    ],
  },
  {
    slug: "pmay",
    folder: ["Municipal Document Repository","PMAY"],
    documents: [
      { id: "official-pmay-pmay-ahp-applicant-list-2023-page-1-to-1500-compressed-pdf", file: "PMAY AHP APPLICANT LIST 2023 page 1 to 1500_compressed.pdf", bytes: 8792966, titleEn: "PMAY List 1 To 1500" },
      { id: "official-pmay-pmay-ahp-applicant-list-2023-page-1501-to-3151-compressed-pdf", file: "PMAY AHP APPLICANT LIST 2023 page 1501 to 3151_compressed.pdf", bytes: 9591208, titleEn: "PMAY AHP APPLICANT LIST 2023 page 1501 to 3151_compressed" },
      { id: "official-pmay-pmay-138-beneficiary-list-pdf", file: "PMAY_138_BENEFICIARY_LIST.pdf", bytes: 55434, titleEn: "PMAY_138_BENEFICIARY_LIST" },
      { id: "official-pmay-pmay-u-blc-dpr-2-list-of-116-approved-benificires-pdf", file: "PMAY(U)_BLC_DPR-2_LIST_OF_116_APPROVED_BENIFICIRES.pdf", bytes: 72873, titleEn: "116_APPROVED_BENIFICIRES" },
      { id: "official-pmay-pmay-u-blc-dpr-3-list-of-97-approved-benificires-pdf", file: "PMAY(U)_BLC_DPR-3_LIST_OF_97_APPROVED_BENIFICIRES.pdf", bytes: 159690, titleEn: "97_APPROVED_BENIFICIRES" },
      { id: "official-pmay-pmay-u-blc-dpr-4-list-of-101-approved-benificires-pdf", file: "PMAY(U)_BLC_DPR-4_LIST_OF_101_APPROVED_BENIFICIRES.pdf", bytes: 360915, titleEn: "101_APPROVED_BENIFICIRES" },
      { id: "official-pmay-pmay-u-blc-dpr-5-list-of-214-approved-benificires-pdf", file: "PMAY(U)_BLC_DPR-5_LIST_OF_214_APPROVED_BENIFICIRES.pdf", bytes: 289925, titleEn: "214_APPROVED_BENIFICIRES" },
    ],
  },
  {
    slug: "ramai-housing",
    folder: ["Municipal Document Repository","Ramai Awaas Yojna"],
    documents: [
      { id: "official-ramai-housing-disqualified-applicant-1709-compressed-1-pdf", file: "Disqualified_Applicant_1709_compressed_(1).pdf", bytes: 6214187, titleEn: "Disqualified_Applicant" },
      { id: "official-ramai-housing-qualified-applicant-8741-pdf", file: "Qualified_Applicant_8741.pdf", bytes: 4125661, titleEn: "Qualified_Applicant" },
      { id: "official-ramai-housing-waiting-applicant-3301-pdf", file: "Waiting_Applicant_3301.pdf", bytes: 2626444, titleEn: "Waiting_Applicant" },
    ],
  },
  {
    slug: "social-development",
    folder: ["Municipal Document Repository","Social Welfare Department"],
    documents: [
      { id: "official-social-development-2023-24-data-pdf1-pdf", file: "2023-24_Data_PDF1.pdf", bytes: 6506863, titleEn: "2023-24_Data_PDF1" },
      { id: "official-social-development-2024-25-data-pdf-compressed1-pdf", file: "2024-25_Data_PDF_compressed1.pdf", bytes: 5457060, titleEn: "2024-25_Data" },
      { id: "official-social-development-divyang-list-pdf", file: "Divyang_list.pdf", bytes: 180053, titleEn: "Divyang list" },
      { id: "official-social-development-edu-37-dt-02-06-2021-pdf", file: "edu__37_dt__02_06_2021.pdf", bytes: 320036, titleEn: "edu. 37 dt. 02.06.2021" },
    ],
  },
  {
    slug: "solid-waste-management",
    folder: ["Municipal Document Repository","Solid Waste Management Department"],
    documents: [
      { id: "official-solid-waste-management-eoi-abhiyakti-swarasya1-pdf", file: "EOI_Abhiyakti_Swarasya1.pdf", bytes: 1478462, titleEn: "EOI_Abhiyakti_Swarasya1" },
      { id: "official-solid-waste-management-eoi-swm-pdf", file: "EOI_SWM.pdf", bytes: 753126, titleEn: "EOI SWM" },
    ],
  },
  {
    slug: "tourism-development",
    folder: ["Municipal Document Repository","Tourism Department"],
    documents: [
      { id: "official-tourism-development-bombay-mercantile-co-operation-b-pdf", file: "BOMBAY_MERCANTILE_CO-OPERATION_B.pdf", bytes: 1770883, titleEn: "BOMBAY MERCANTILE CO-OPERATION B" },
      { id: "official-tourism-development-tender-documents-pdf", file: "TENDER_DOCUMENTS.pdf", bytes: 5601870, titleEn: "TENDER DOCUMENTS" },
    ],
  },
  {
    slug: "water-supply-distribution",
    folder: ["Municipal Document Repository","Water Supply Department"],
    documents: [
      { id: "official-water-supply-distribution-amc-reply-to-additional-rfp-pre-bid-queries-nov-03-10-pdf", file: "AMC_Reply_to_Additional_RFP_Pre_Bid_Queries_Nov_03_10.pdf", bytes: 678705, titleEn: "AMC Reply to Additional RFP Pre-Bid Queries, November 2010" },
    ],
  },
];

export const officialStandingCommitteeFolder = ["standing-committee","Needs Review"];
export const officialStandingCommitteeDocuments: ArchiveFile[] = [
  { id: "official-standing-15-16-03-15-kp-pdf", file: "15-_16_03_15_KP.pdf", bytes: 110710, titleEn: "15- 16 03 15 KP" },
];

/** One copy of each sitewide official notice. Identical files in other folders stay unpublished. */
export const officialAnnouncementFolder = ["Municipal Document Repository", "Tenders", "tender-notice-2025"] as const;

/**
 * Local folder for GAD Orders and Circulars.
 * A PDF placed in this folder is published only after it is added to `gadOrdersDocuments`.
 */
export const GAD_ORDERS_FOLDER = ["GAD Orders and Circulars"] as const;

export const officialTenderNoticeDocuments: ArchiveFile[] = [
  {
    id: "official-tender-project-manager-jahirat-pdf",
    file: "Project_Manager-Jahirat.pdf",
    bytes: 1423860,
    date: "2026-09-02",
    titleEn: "Project Manager Jahirat",
    titleMr: "प्रकल्प व्यवस्थापक जाहिरात",
  },
];

export const officialSiteNoticeDocuments: ArchiveFile[] = [
  {
    id: "official-notice-shree-ganesh-utsav-2026-pdf",
    file: "ShreeGaneshUtsav2026.pdf",
    bytes: 9513364,
    date: "2026-09-02",
    titleEn: "Shree Ganesh Utsav 2026",
    titleMr: "श्री गणेश उत्सव २०२६",
  },
  {
    id: "official-notice-street-vendors-election-suchana-pdf",
    file: "Street_Vendors_Election_Suchana.pdf",
    bytes: 878041,
    date: "2026-06-30",
    titleEn: "Street Vendors Election Suchana",
    titleMr: "पथविक्रेते निवडणूक सूचना",
  },
];

/** Same records as the notices above, listed once under GAD Orders and Circulars. */
export const gadOrdersDocuments: ArchiveFile[] = [
  ...officialTenderNoticeDocuments,
  ...officialSiteNoticeDocuments,
];
