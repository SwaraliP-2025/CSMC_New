import type { ArchiveFile } from "@/lib/archiveDocuments";

export type OfficialLinkedGroup = { slug: string; headingEn: string; headingMr: string; documents: ArchiveFile[] };
export type OfficialLinkedSection = { id: string; headingEn: string; headingMr: string; documents: ArchiveFile[] };
export type TenderArchiveGroup = { folder: string[]; headingEn: string; headingMr: string; documents: ArchiveFile[] };

/** Official CSMC PDFs that have no local copy. Each opens the official URL that returned a PDF. */
export const officialLinkedGroups: OfficialLinkedGroup[] = [
  {
    "slug": "tax",
    "headingEn": "Local Body Tax Department (official LBT page)",
    "headingMr": "स्थानिक संस्था कर विभाग",
    "documents": [
      {
        "id": "official-link-act-of-lbt-english-resize-pdf-10473712",
        "file": "ACT_of_LBT_English_Resize.pdf",
        "bytes": 10473712,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ACT_of_LBT_English_Resize.pdf",
        "titleEn": "ACT of LBT English Resize"
      },
      {
        "id": "official-link-act-of-lbt-marathi-resize-pdf-2548773",
        "file": "ACT_of_LBT_Marathi_Resize.pdf",
        "bytes": 2548773,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ACT_of_LBT_Marathi_Resize.pdf",
        "titleEn": "ACT of LBT Marathi Resize"
      },
      {
        "id": "official-link-annual-return-english-pdf-3058773",
        "file": "Annual_Return_English.pdf",
        "bytes": 3058773,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Annual_Return_English.pdf",
        "titleEn": "Annual Return English"
      },
      {
        "id": "official-link-lbt-schedule-14-8-2014-pdf-5468957",
        "file": "LBT_Schedule-_14_8_2014.pdf",
        "bytes": 5468957,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/LBT_Schedule-_14_8_2014.pdf",
        "titleEn": "LBT Schedule- 14.8.2014"
      },
      {
        "id": "official-link-lbt-tax-shedule-a-english-2011-pdf-3006993",
        "file": "LBT_Tax_Shedule_A_English-2011.pdf",
        "bytes": 3006993,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/LBT_Tax_Shedule_A_English-2011.pdf",
        "titleEn": "LBT Tax Shedule A English-2011"
      },
      {
        "id": "official-link-liquor-gr-24-8-2016-pdf-1079495",
        "file": "Liquor_GR-24_8_2016.pdf",
        "bytes": 1079495,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Liquor_GR-24_8_2016.pdf",
        "titleEn": "Liquor GR-24.8.2016"
      },
      {
        "id": "official-link-new-schedule-scanned-10-9-2013-pdf-1098923",
        "file": "New_Schedule_Scanned-10_9_2013.pdf",
        "bytes": 1098923,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/New_Schedule_Scanned-10_9_2013.pdf",
        "titleEn": "New Schedule Scanned-10.9.2013"
      }
    ]
  },
  {
    "slug": "general-administration",
    "headingEn": "General Administration Department",
    "headingMr": "सामान्य प्रशासन विभाग",
    "documents": [
      {
        "id": "official-link-security-supervisor-pdf-56241",
        "file": "Security_Supervisor.pdf",
        "bytes": 56241,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/03/mediafiles/Security_Supervisor.pdf",
        "titleEn": "Security_Supervisor"
      },
      {
        "id": "official-link-sr-clerk-pdf-4804907",
        "file": "Sr_Clerk.pdf",
        "bytes": 4804907,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Sr_Clerk.pdf",
        "titleEn": "Sr_Clerk"
      }
    ]
  },
  {
    "slug": "municipal-secretary-department",
    "headingEn": "General Election 2025 – elected members",
    "headingMr": "सार्वत्रिक निवडणूक 2025 – निर्वाचित सदस्य",
    "documents": [
      {
        "id": "official-link-corporator-list-2026-pdf-671399",
        "file": "Corporator_list-2026.pdf",
        "bytes": 671399,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/05/mediafiles/Corporator_list-2026.pdf",
        "titleEn": "नगरसेवकांची यादी"
      }
    ]
  },
  {
    "slug": "municipal-secretary-department",
    "headingEn": "Committee chairpersons 2026",
    "headingMr": "समिती सभापती यादी 2026",
    "documents": [
      {
        "id": "official-link-sthayi-samiti-sabhapati-vishayi-samiti-sambhapati-pdf-314036",
        "file": "Sthayi_Samiti_Sabhapati_Vishayi_Samiti_Sambhapati.pdf",
        "bytes": 314036,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/05/mediafiles/Sthayi_Samiti_Sabhapati_Vishayi_Samiti_Sambhapati.pdf",
        "titleEn": "स्थायी सभापती समिती यादी विषय समिती सभापती"
      },
      {
        "id": "official-link-parbhag-samiti-sabhapati-pdf-746974",
        "file": "Parbhag_Samiti_Sabhapati.pdf",
        "bytes": 746974,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Parbhag_Samiti_Sabhapati.pdf",
        "titleEn": "प्रभाग समिती सभापती यादी"
      }
    ]
  },
  {
    "slug": "general-administration",
    "headingEn": "CSMC officer list",
    "headingMr": "मनपा अधिकारी यादी",
    "documents": [
      {
        "id": "official-link-csmc-officer-list-pdf-44007",
        "file": "CSMC_Officer_List.pdf",
        "bytes": 44007,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/CSMC_Officer_List.pdf",
        "titleEn": "CSMC_Officer_List"
      }
    ]
  },
  {
    "slug": "general-administration",
    "headingEn": "Recruitment results",
    "headingMr": "भरती निकाल",
    "documents": [
      {
        "id": "official-link-asst-security-officer-result-pdf-1429054",
        "file": "Asst__Security_Officer-Result.pdf",
        "bytes": 1429054,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Asst__Security_Officer-Result.pdf",
        "titleEn": "Asst__Security_Officer-Result"
      },
      {
        "id": "official-link-dy-fire-station-officer-result-pdf-1926672",
        "file": "Dy_Fire_Station_Officer-Result.pdf",
        "bytes": 1926672,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Dy_Fire_Station_Officer-Result.pdf",
        "titleEn": "Dy_Fire_Station_Officer-Result"
      },
      {
        "id": "official-link-garden-asst-agri-asst-result-pdf-4354716",
        "file": "Garden_Asst_-_Agri_Asst_-Result.pdf",
        "bytes": 4354716,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Garden_Asst_-_Agri_Asst_-Result.pdf",
        "titleEn": "Garden_Asst_-_Agri_Asst_-Result"
      },
      {
        "id": "official-link-livestock-supervisor-result-000-pdf-5869426",
        "file": "Livestock_Supervisor-Result_000.pdf",
        "bytes": 5869426,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Livestock_Supervisor-Result_000.pdf",
        "titleEn": "Livestock_Supervisor-Result_000"
      },
      {
        "id": "official-link-tracer-result-pdf-6554276",
        "file": "Tracer_-_Result.pdf",
        "bytes": 6554276,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Tracer_-_Result.pdf",
        "titleEn": "Tracer_-_Result"
      },
      {
        "id": "official-link-press-note-dated-28-08-2026-pdf-899686",
        "file": "Press_Note_Dated_28_08_2026.pdf",
        "bytes": 899686,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/08/mediafiles/Press_Note_Dated_28_08_2026.pdf",
        "titleEn": "Press_Note_Dated_28_08_2026"
      },
      {
        "id": "official-link-assistant-security-officer-document-vertification-list-pdf-284165",
        "file": "Assistant_Security_Officer-Document_Vertification_List.pdf",
        "bytes": 284165,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Assistant_Security_Officer-Document_Vertification_List.pdf",
        "titleEn": "Assistant_Security_Officer-Document_Vertification_List"
      },
      {
        "id": "official-link-garden-assistant-document-vertification-list-pdf-849134",
        "file": "Garden_Assistant-Document_Vertification_List.pdf",
        "bytes": 849134,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Garden_Assistant-Document_Vertification_List.pdf",
        "titleEn": "Garden_Assistant-Document_Vertification_List"
      },
      {
        "id": "official-link-livestock-supervisor-document-vertification-list-pdf-888262",
        "file": "Livestock_Supervisor-Document_Vertification_List.pdf",
        "bytes": 888262,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Livestock_Supervisor-Document_Vertification_List.pdf",
        "titleEn": "Livestock_Supervisor-Document_Vertification_List"
      },
      {
        "id": "official-link-tracer-document-vertification-list-pdf-1224923",
        "file": "Tracer-Document_Vertification_List.pdf",
        "bytes": 1224923,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Tracer-Document_Vertification_List.pdf",
        "titleEn": "Tracer-Document_Vertification_List"
      },
      {
        "id": "official-link-press-note-for-exam-dated-08-09-07-2026-pdf-211306",
        "file": "Press_Note_for_EXAM_Dated_08_09_07_2026.pdf",
        "bytes": 211306,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/07/mediafiles/Press_Note_for_EXAM_Dated_08_09_07_2026.pdf",
        "titleEn": "Press Note for Exam dated 08-09/07/2026"
      },
      {
        "id": "official-link-ibps-exam-venue-statement-2026-pdf-418895",
        "file": "IBPS_EXAM_VENUE_STATEMENT_-_2026.pdf",
        "bytes": 418895,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/07/mediafiles/IBPS_EXAM_VENUE_STATEMENT_-_2026.pdf",
        "titleEn": "IBPS Exam Venue Statement 2026"
      },
      {
        "id": "official-link-public-notice-pdf-613198",
        "file": "Public_Notice.pdf",
        "bytes": 613198,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/06/mediafiles/Public_Notice.pdf",
        "titleEn": "Public Notice (June 2026)"
      },
      {
        "id": "official-link-new-advertistment-222-post-marathi-pdf-400060",
        "file": "New_Advertistment_222_Post_-_Marathi.pdf",
        "bytes": 400060,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/02/mediafiles/New_Advertistment_222_Post_-_Marathi.pdf",
        "titleEn": "New Advertisement – 222 Posts (Marathi)"
      },
      {
        "id": "official-link-est-378-dt-18-03-2026-pdf-587795",
        "file": "EST_378_dt_18_03_2026.pdf",
        "bytes": 587795,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/03/mediafiles/EST_378_dt_18_03_2026.pdf",
        "titleEn": "पदभरती जाहिरातीबाबत जाहीर प्रगटन"
      },
      {
        "id": "official-link-shrudhipatrak-dt-24-03-2026-pdf-373798",
        "file": "Shrudhipatrak_dt_24_03_2026.pdf",
        "bytes": 373798,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/03/mediafiles/Shrudhipatrak_dt_24_03_2026.pdf",
        "titleEn": "शुद्धीपत्रक दि.२४.०३.२०२६"
      },
      {
        "id": "official-link-document-73-pdf-106052",
        "file": "Document_73.pdf",
        "bytes": 106052,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/02/mediafiles/Document_73.pdf",
        "titleEn": "शुद्धीपत्रक"
      },
      {
        "id": "official-link-total-registration-of-application-for-various-post-upto-31-3-2026-1-pdf-304272",
        "file": "Total_Registration_of_Application_for_Various_Post_upto_31_3_2026_(1).pdf",
        "bytes": 304272,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/04/mediafiles/Total_Registration_of_Application_for_Various_Post_upto_31_3_2026_(1).pdf",
        "titleEn": "विविध पदांसाठी अर्जांची एकूण नोंदणी दिनांक ३१.३.२०२६ पर्यंत"
      },
      {
        "id": "official-link-structure-of-test-pdf-707084",
        "file": "Structure_of_Test.pdf",
        "bytes": 707084,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/04/mediafiles/Structure_of_Test.pdf",
        "titleEn": "Structure_of_Test"
      },
      {
        "id": "official-link-postwise-categorywise-form-details-pdf-423707",
        "file": "Postwise_Categorywise_-_Form_Details.pdf",
        "bytes": 423707,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/05/mediafiles/Postwise_Categorywise_-_Form_Details.pdf",
        "titleEn": "पदनिहाय आणि प्रवर्गनिहाय - अर्जाचा तपशील"
      },
      {
        "id": "official-link-revised-structure-of-test-for-02-posts-pdf-680568",
        "file": "Revised_Structure_of_Test_for_02_Posts.pdf",
        "bytes": 680568,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/06/mediafiles/Revised_Structure_of_Test_for_02_Posts.pdf",
        "titleEn": "Revised_Structure_of_Test_for_02_Posts"
      },
      {
        "id": "official-link-detail-advt-transport-eng-pdf-1084880",
        "file": "Detail_Advt_-Transport_Eng_.pdf",
        "bytes": 1084880,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/03/mediafiles/Detail_Advt_-Transport_Eng_.pdf",
        "titleEn": "वाहतूक अभियंता"
      }
    ]
  },
  {
    "slug": "election-census",
    "headingEn": "General Election 2025 – final ward structure",
    "headingMr": "सार्वत्रिक निवडणूक 2025 – अंतिम प्रभाग रचना",
    "documents": [
      {
        "id": "official-link-annex-2-marathi-pdf-6346438",
        "file": "Annex-2_Marathi_.pdf",
        "bytes": 6346438,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/10/mediafiles/Annex-2_Marathi_.pdf",
        "titleEn": "Annex-2_Marathi"
      },
      {
        "id": "official-link-annex-2a-english-pdf-6235542",
        "file": "Annex-2A_English_.pdf",
        "bytes": 6235542,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/10/mediafiles/Annex-2A_English_.pdf",
        "titleEn": "Annex-2A_English"
      },
      {
        "id": "official-link-gazette-pdf-307624",
        "file": "Gazette.pdf",
        "bytes": 307624,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/10/mediafiles/Gazette.pdf",
        "titleEn": "Gazette"
      },
      {
        "id": "official-link-arakshan-sodat-suchna-pdf-2138480",
        "file": "arakshan_sodat_suchna.pdf",
        "bytes": 2138480,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/11/mediafiles/arakshan_sodat_suchna.pdf",
        "titleEn": "Arakshan_Sodat_Suchna"
      },
      {
        "id": "official-link-jahir-pragatan-pdf-2011942",
        "file": "Jahir_pragatan.pdf",
        "bytes": 2011942,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/11/mediafiles/Jahir_pragatan.pdf",
        "titleEn": "Jahir_Pragatan"
      },
      {
        "id": "official-link-possible-duplicate-name-compressed-pdf-6613664",
        "file": "Possible_Duplicate_Name_compressed.pdf",
        "bytes": 6613664,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Possible_Duplicate_Name_compressed.pdf",
        "titleEn": "Possible_Duplicate_Name_compressed"
      },
      {
        "id": "official-link-aarakshan-pdf-1569918",
        "file": "Aarakshan__.pdf",
        "bytes": 1569918,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Aarakshan__.pdf",
        "titleEn": "Aarakshan"
      },
      {
        "id": "official-link-code-of-conduct-order-04-11-2025-compressed-1-pdf-6895419",
        "file": "Code-of-Conduct-Order-04-11-2025_compressed_(1).pdf",
        "bytes": 6895419,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Code-of-Conduct-Order-04-11-2025_compressed_(1).pdf",
        "titleEn": "Code-of-Conduct-Order-04-11-2025_"
      },
      {
        "id": "official-link-regarding-election-preparations-pdf-3917204",
        "file": "Regarding_Election_Preparations_.pdf",
        "bytes": 3917204,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Regarding_Election_Preparations_.pdf",
        "titleEn": "Regarding_Election_Preparations_"
      },
      {
        "id": "official-link-ward-area-coverage-marathi-pdf-5328489",
        "file": "Ward_Area_Coverage_Marathi_.pdf",
        "bytes": 5328489,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Ward_Area_Coverage_Marathi_.pdf",
        "titleEn": "Ward_Area_Coverage_Marathi"
      },
      {
        "id": "official-link-annex-3-pdf-3565844",
        "file": "Annex_3_.pdf",
        "bytes": 3565844,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/08/mediafiles/Annex_3_.pdf",
        "titleEn": "Annex_3"
      },
      {
        "id": "official-link-gazette-of-election-2025-pdf-207813",
        "file": "Gazette_Of_Election_2025.pdf",
        "bytes": 207813,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Gazette_Of_Election_2025.pdf",
        "titleEn": "Gazette_Of_Election_2025"
      },
      {
        "id": "official-link-gazette-shudhi-patrak-pdf-65482",
        "file": "Gazette_Shudhi_Patrak.pdf",
        "bytes": 65482,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/Gazette_Shudhi_Patrak.pdf",
        "titleEn": "Gazette_Shudhi_Patrak"
      }
    ]
  },
  {
    "slug": "general-administration",
    "headingEn": "Establishment advertisement",
    "headingMr": "आस्थापना जाहिरात",
    "documents": [
      {
        "id": "official-link-project-manager-it-pdf-706439",
        "file": "Project_Manager_(IT).pdf",
        "bytes": 706439,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Project_Manager_(IT).pdf",
        "titleEn": "Project_Manager_(IT)"
      }
    ]
  },
  {
    "slug": "general-administration",
    "headingEn": "Retired officer recruitment",
    "headingMr": "सेवानिवृत्त अधिकारी भरती",
    "documents": [
      {
        "id": "official-link-est-1-1612-dt-15-09-2026-pdf-1144909",
        "file": "EST-1_1612_Dt_15_09_2026.pdf",
        "bytes": 1144909,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/EST-1_1612_Dt_15_09_2026.pdf",
        "titleEn": "EST-1_1612_Dt_15_09_2026"
      },
      {
        "id": "official-link-veterinary-surgeon-officer-detail-advt-pdf-2375476",
        "file": "Veterinary_Surgeon_Officer_Detail_Advt_.pdf",
        "bytes": 2375476,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Veterinary_Surgeon_Officer_Detail_Advt_.pdf",
        "titleEn": "Veterinary_Surgeon_Officer_Detail_Advt_"
      },
      {
        "id": "official-link-est-1210-dt-28-07-2025-pdf-1749921",
        "file": "EST_1210_dt_28_07_2025.pdf",
        "bytes": 1749921,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/07/mediafiles/EST_1210_dt_28_07_2025.pdf",
        "titleEn": "EST_1210_dt_28_07_2025"
      },
      {
        "id": "official-link-est-1-1169-dt-21-07-2025-pdf-2096299",
        "file": "EST_1_1169_dt__21_07_2025.pdf",
        "bytes": 2096299,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/07/mediafiles/EST_1_1169_dt__21_07_2025.pdf",
        "titleEn": "EST_1_1169_dt__21_07_2025"
      },
      {
        "id": "official-link-est-1-2313-dt-08-07-2024-pdf-2760003",
        "file": "EST-1__2313_DT_08_07_2024.pdf",
        "bytes": 2760003,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/07/mediafiles/EST-1__2313_DT_08_07_2024.pdf",
        "titleEn": "EST-1_2313_DT_08_07_2024"
      }
    ]
  },
  {
    "slug": "health",
    "headingEn": "Health recruitment",
    "headingMr": "आरोग्य भरती",
    "documents": [
      {
        "id": "official-link-health-1875-dt-19-09-2019-pdf-96801",
        "file": "Health_1875_dt__19_09_2019.pdf",
        "bytes": 96801,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Health_1875_dt__19_09_2019.pdf",
        "titleEn": "Health 1875 dt. 19.09.2019"
      },
      {
        "id": "official-link-pmo-final-list-pdf-243140",
        "file": "pmo_final_list.pdf",
        "bytes": 243140,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/pmo_final_list.pdf",
        "titleEn": "pmo final list"
      }
    ]
  },
  {
    "slug": "health",
    "headingEn": "RNTCP",
    "headingMr": "RNTCP",
    "documents": [
      {
        "id": "official-link-rntcp-interview-list-pdf-454416",
        "file": "RNTCP_Interview_List.PDF",
        "bytes": 454416,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/RNTCP_Interview_List.PDF",
        "titleEn": "RNTCP मुलाखत यादी"
      },
      {
        "id": "official-link-rntcp-list-pdf-6152008",
        "file": "RNTCP_List.PDF",
        "bytes": 6152008,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/RNTCP_List.PDF",
        "titleEn": "RNTCP List"
      }
    ]
  },
  {
    "slug": "health",
    "headingEn": "COVID-19 recruitment",
    "headingMr": "कोविड-19 भरती",
    "documents": [
      {
        "id": "official-link-health-1005-dt-10-02-2020-pdf-5139618",
        "file": "Health_1005_dt__10_02_2020.pdf",
        "bytes": 5139618,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Health_1005_dt__10_02_2020.pdf",
        "titleEn": "Health 1005 dt. 10.02.2020"
      },
      {
        "id": "official-link-covid-19-recruitment-result-pdf-2846735",
        "file": "Covid_19_Recruitment_Result.pdf",
        "bytes": 2846735,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Covid_19_Recruitment_Result.pdf",
        "titleEn": "Covid 19 Recruitment Result"
      },
      {
        "id": "official-link-order-dt-19-06-2020-pdf-9858326",
        "file": "Order_Dt__19_06_2020.pdf",
        "bytes": 9858326,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Order_Dt__19_06_2020.pdf",
        "titleEn": "Order Dt. 19.06.2020"
      },
      {
        "id": "official-link-medical-officer-list-pdf-763189",
        "file": "Medical_Officer_List.PDF",
        "bytes": 763189,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Medical_Officer_List.PDF",
        "titleEn": "Medical Officer List"
      }
    ]
  },
  {
    "slug": "general-administration",
    "headingEn": "ASCDCL contract recruitment",
    "headingMr": "ASCDCL कंत्राटी भरती",
    "documents": [
      {
        "id": "official-link-ascdcl-03-dt-04-01-2020-pdf-1926119",
        "file": "ASCDCL_03_DT__04_01_2020.pdf",
        "bytes": 1926119,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ASCDCL_03_DT__04_01_2020.pdf",
        "titleEn": "ASCDCL 03 DT. 04.01.2020"
      },
      {
        "id": "official-link-ascdcl-48-dt-03-02-2019-pdf-205304",
        "file": "ASCDCL_48_dt__03_02_2019.pdf",
        "bytes": 205304,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ASCDCL_48_dt__03_02_2019.pdf",
        "titleEn": "ASCDCL 48 DT. 03.02.2019"
      },
      {
        "id": "official-link-positions-in-ascdcl-pdf-6593061",
        "file": "Positions_in_ASCDCL.pdf",
        "bytes": 6593061,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Positions_in_ASCDCL.pdf",
        "titleEn": "ASCDCL.pdf मधील पदे"
      },
      {
        "id": "official-link-ascdcl-103-dt-29-01-2019-pdf-295301",
        "file": "ASCDCL_103_dt__29_01_2019.pdf",
        "bytes": 295301,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ASCDCL_103_dt__29_01_2019.pdf",
        "titleEn": "ASCDCL 103 DT. 29.01.2019"
      },
      {
        "id": "official-link-ascdcl-14-dt-09-05-2019-pdf-157871",
        "file": "ASCDCL-14_dt__09_05_2019.PDF",
        "bytes": 157871,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ASCDCL-14_dt__09_05_2019.PDF",
        "titleEn": "ASCDCL-14 DT. 09.05.2019"
      },
      {
        "id": "official-link-ascdcl-21-dt-15-05-2019-pdf-101034",
        "file": "ASCDCL_21_dt__15_05_2019.PDF",
        "bytes": 101034,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ASCDCL_21_dt__15_05_2019.PDF",
        "titleEn": "ASCDCL 21 दि. 15.05.2019"
      },
      {
        "id": "official-link-interview-assessment-sheet-com-pdf-1076575",
        "file": "Interview_assessment_sheet_CoM.pdf",
        "bytes": 1076575,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Interview_assessment_sheet_CoM.pdf",
        "titleEn": "मुलाखत मूल्यांकन पत्रक_CoM"
      },
      {
        "id": "official-link-senior-consultant-heritage-pdf-29780",
        "file": "Senior_Consultant_(Heritage).pdf",
        "bytes": 29780,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Senior_Consultant_(Heritage).pdf",
        "titleEn": "वरिष्ठ सल्लागार (वारसा)"
      },
      {
        "id": "official-link-interview-assessment-sheet-ao-pdf-478165",
        "file": "Interview_assessment_sheet_AO.pdf",
        "bytes": 478165,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Interview_assessment_sheet_AO.pdf",
        "titleEn": "मुलाखत मूल्यांकन पत्रक_AO"
      },
      {
        "id": "official-link-analyst-advertisement-with-corrigendum-pdf-1730965",
        "file": "Analyst_Advertisement_(with_Corrigendum).pdf",
        "bytes": 1730965,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Analyst_Advertisement_(with_Corrigendum).pdf",
        "titleEn": "विश्लेषक जाहिरात (शुध्दिपत्रासह)"
      },
      {
        "id": "official-link-ams-advertisement-with-corrigendum-pdf-2870649",
        "file": "AMs_Advertisement_(with_Corrigendum).pdf",
        "bytes": 2870649,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/AMs_Advertisement_(with_Corrigendum).pdf",
        "titleEn": "AMs जाहिरात (शुध्दिपत्रासह)"
      },
      {
        "id": "official-link-joint-ceo-interview-assessment-sheet-pdf-267757",
        "file": "Joint_CEO_interview_assessment_sheet.pdf",
        "bytes": 267757,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Joint_CEO_interview_assessment_sheet.pdf",
        "titleEn": "संयुक्त सीईओ मुलाखत मूल्यांकन पत्रक"
      },
      {
        "id": "official-link-cs-interview-assessment-sheet-pdf-41506",
        "file": "CS_interview_assessment_sheet.pdf",
        "bytes": 41506,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/CS_interview_assessment_sheet.pdf",
        "titleEn": "CS मुलाखत मूल्यमापन sheet"
      },
      {
        "id": "official-link-ascdcl-20-06-2018-pdf-3561508",
        "file": "ASCDCL_20_06_2018.PDF",
        "bytes": 3561508,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/ASCDCL_20_06_2018.PDF",
        "titleEn": "ASCDCL 20.06.2018"
      },
      {
        "id": "official-link-cfo-interview-assessment-sheet-pdf-88979",
        "file": "CFO_interview_assessment_sheet.pdf",
        "bytes": 88979,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/CFO_interview_assessment_sheet.pdf",
        "titleEn": "CFO मुलाखत मूल्यांकन पत्रक"
      }
    ]
  },
  {
    "slug": "audit-department",
    "headingEn": "Audit Department",
    "headingMr": "लेखापरीक्षण विभाग",
    "documents": [
      {
        "id": "official-link-annual-audit-report-2022-23-part-2-pdf-1021409",
        "file": "Annual_Audit_Report_2022-23_Part_2_.pdf",
        "bytes": 1021409,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/02/mediafiles/Annual_Audit_Report_2022-23_Part_2_.pdf",
        "titleEn": "Annual_Audit_Report_2022-23_Part_2_"
      }
    ]
  },
  {
    "slug": "drainage",
    "headingEn": "UIDSSMT Department",
    "headingMr": "UIDSSMT विभाग",
    "documents": [
      {
        "id": "official-link-road-4616-070-186-6-pdf-4246284",
        "file": "road_-4616_070_-186_6.pdf",
        "bytes": 4246284,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/road_-4616_070_-186_6.pdf",
        "titleEn": "road -4616 070 -186_6"
      },
      {
        "id": "official-link-sewer-m-4580-019-199-6-pdf-5158824",
        "file": "sewer_m_-4580_019_-199_6.pdf",
        "bytes": 5158824,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/sewer_m_-4580_019_-199_6.pdf",
        "titleEn": "sewer m -4580 019 -199_6"
      }
    ]
  },
  {
    "slug": "electrical",
    "headingEn": "Electrical Department",
    "headingMr": "विद्युत विभाग",
    "documents": [
      {
        "id": "official-link-test-csv-37",
        "file": "test.csv",
        "bytes": 37,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2021/09/mediafiles/test.csv",
        "titleEn": "Comprehensive Work List"
      },
      {
        "id": "official-link-ward-c-part-1-pdf-271042",
        "file": "Ward_-_C_part_1.pdf",
        "bytes": 271042,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Ward_-_C_part_1.pdf",
        "titleEn": "Ward - C part 1"
      },
      {
        "id": "official-link-ward-c-part-2-pdf-316528",
        "file": "Ward_-_C_part_2.pdf",
        "bytes": 316528,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Ward_-_C_part_2.pdf",
        "titleEn": "Ward - C part 2"
      },
      {
        "id": "official-link-ward-c-part-3-pdf-345938",
        "file": "Ward_-_C_part_-3.pdf",
        "bytes": 345938,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Ward_-_C_part_-3.pdf",
        "titleEn": "Ward - C part -3"
      }
    ]
  },
  {
    "slug": "property-management",
    "headingEn": "Hoarding licences",
    "headingMr": "होर्डिंग परवाने",
    "documents": [
      {
        "id": "official-link-test-pdf-pdf-180516",
        "file": "Test_PDF.pdf",
        "bytes": 180516,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2023/02/mediafiles/Test_PDF.pdf",
        "titleEn": "License Copy"
      }
    ]
  },
  {
    "slug": "garden",
    "headingEn": "Garden Department",
    "headingMr": "उद्यान विभाग",
    "documents": [
      {
        "id": "official-link-eoi-garden-marathi-pdf-879983",
        "file": "EOI_Garden_Marathi.pdf",
        "bytes": 879983,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/08/mediafiles/EOI_Garden_Marathi.pdf",
        "titleEn": "EOI_Garden_Marathi"
      }
    ]
  },
  {
    "slug": "town-planning-department",
    "headingEn": "Town Planning Department",
    "headingMr": "नगररचना विभाग",
    "documents": [
      {
        "id": "official-link-adtp-1165-dt-27-04-2021-pdf-11269394",
        "file": "adtp_1165_dt_27_04_2021.pdf",
        "bytes": 11269394,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/adtp_1165_dt_27_04_2021.pdf",
        "titleEn": "adtp 1165 dt.27.04.2021"
      }
    ]
  },
  {
    "slug": "election-census",
    "headingEn": "Draft Voter List 2020",
    "headingMr": "प्रारूप मतदार यादी 2020",
    "documents": [
      {
        "id": "official-link-draftlist-ward-13-pdf-2682858",
        "file": "DraftList_Ward_13.pdf",
        "bytes": 2682858,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/DraftList_Ward_13.pdf",
        "titleEn": "DraftList_Ward_13"
      },
      {
        "id": "official-link-draftlist-ward-28-pdf-2971493",
        "file": "DraftList_Ward_28.pdf",
        "bytes": 2971493,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/DraftList_Ward_28.pdf",
        "titleEn": "DraftList_Ward_28"
      }
    ]
  }
];

export const officialLinkedSections: OfficialLinkedSection[] = [
  {
    "id": "public-notices",
    "headingEn": "Public Notices",
    "headingMr": "जाहीर प्रगटन",
    "documents": [
      {
        "id": "official-link-sop-pdf-546272",
        "file": "SOP.pdf",
        "bytes": 546272,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/07/mediafiles/SOP.pdf",
        "titleEn": "SOP"
      },
      {
        "id": "official-link-estate-dept-237-dt-30-06-2026-pdf-203086",
        "file": "Estate_Dept__237_dt_30_06_2026.pdf",
        "bytes": 203086,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/07/mediafiles/Estate_Dept__237_dt_30_06_2026.pdf",
        "titleEn": "Estate_Dept__237_dt_30_06_2026"
      },
      {
        "id": "official-link-police-letter-pdf-4897924",
        "file": "Police_Letter.pdf",
        "bytes": 4897924,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2026/02/mediafiles/Police_Letter.pdf",
        "titleEn": "Police_Letter"
      },
      {
        "id": "official-link-mbks-63-dt-11-12-2025-pdf-767479",
        "file": "MBKS_63_dt__11_12_2025.pdf",
        "bytes": 767479,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/12/mediafiles/MBKS_63_dt__11_12_2025.pdf",
        "titleEn": "MBKS_63_dt__11_12_2025"
      },
      {
        "id": "official-link-ee-road-63-dt-04-11-2025-pdf-424633",
        "file": "EE_Road_63_dt_04_11_2025.pdf",
        "bytes": 424633,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/11/mediafiles/EE_Road_63_dt_04_11_2025.pdf",
        "titleEn": "EE_Road_63_dt_04_11_2025"
      },
      {
        "id": "official-link-cp-office-letter-16-09-2025-pdf-4790215",
        "file": "CP_Office_Letter-16_09_2025.pdf",
        "bytes": 4790215,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/09/mediafiles/CP_Office_Letter-16_09_2025.pdf",
        "titleEn": "CP_Office_Letter-16_09_2025"
      },
      {
        "id": "official-link-cp-office-letter-pdf-3779483",
        "file": "CP_Office_Letter.pdf",
        "bytes": 3779483,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/08/mediafiles/CP_Office_Letter.pdf",
        "titleEn": "CP_Office_Letter"
      },
      {
        "id": "official-link-adesh-5895-dt-25-12-2024-pdf-1219092",
        "file": "Adesh_5895_dt_25_12_2024.pdf",
        "bytes": 1219092,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/01/mediafiles/Adesh_5895_dt_25_12_2024.pdf",
        "titleEn": "Adesh_5895_dt_25_12_2024"
      },
      {
        "id": "official-link-health-public-notice-pdf-648885",
        "file": "Health_public_notice.pdf",
        "bytes": 648885,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/10/mediafiles/Health_public_notice.pdf",
        "titleEn": "Health_public_notice"
      },
      {
        "id": "official-link-jahir-avhan-pdf-243610",
        "file": "JAHIR_AVHAN.pdf",
        "bytes": 243610,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/09/mediafiles/JAHIR_AVHAN.pdf",
        "titleEn": "JAHIR_AVHAN"
      },
      {
        "id": "official-link-mukhmantri-yuva-karya-prashishan-yojna-pdf-2225975",
        "file": "Mukhmantri_Yuva_Karya_Prashishan_Yojna.pdf",
        "bytes": 2225975,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/08/mediafiles/Mukhmantri_Yuva_Karya_Prashishan_Yojna.pdf",
        "titleEn": "Mukhmantri_Yuva_Karya_Prashishan_Yojna"
      },
      {
        "id": "official-link-water-logging-public-notice-pdf-667870",
        "file": "Water_Logging_Public_Notice.pdf",
        "bytes": 667870,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/Water_Logging_Public_Notice.pdf",
        "titleEn": "Water_Logging_Public_Notice"
      },
      {
        "id": "official-link-public-notice-dmc-2-117-dt-20-02-2024-pdf-3733423",
        "file": "Public_Notice_dmc-2_117_dt__20_02_2024.pdf",
        "bytes": 3733423,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/Public_Notice_dmc-2_117_dt__20_02_2024.pdf",
        "titleEn": "Public_Notice_dmc-2_117_dt__20_02_2024"
      },
      {
        "id": "official-link-est-jahir-pragatan-280-dt-09-02-2024-pdf-53191",
        "file": "EST_Jahir_Pragatan_280_dt_09_02_2024.pdf",
        "bytes": 53191,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/EST_Jahir_Pragatan_280_dt_09_02_2024.pdf",
        "titleEn": "EST_Jahir_Pragatan_280_dt_09_02_2024"
      },
      {
        "id": "official-link-japta-malmatta-pdf-2490084",
        "file": "japta_malmatta.pdf",
        "bytes": 2490084,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/japta_malmatta.pdf",
        "titleEn": "japta_malmatta"
      },
      {
        "id": "official-link-namuna-4-pdf-pdf-1452859",
        "file": "Namuna_4_pdf.pdf",
        "bytes": 1452859,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/Namuna_4_pdf.pdf",
        "titleEn": "Namuna_4_pdf"
      },
      {
        "id": "official-link-gumthewari-pdf-147206",
        "file": "Gumthewari.pdf",
        "bytes": 147206,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/Gumthewari.pdf",
        "titleEn": "Gumthewari"
      },
      {
        "id": "official-link-garden-465-dt-11-01-2024-pdf-100793",
        "file": "Garden_465_dt__11_01_2024.pdf",
        "bytes": 100793,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/Garden_465_dt__11_01_2024.pdf",
        "titleEn": "Garden_465_dt__11_01_2024"
      },
      {
        "id": "official-link-dmc-1-581-dt15-12-2023-pdf-156614",
        "file": "DMC-1_581_dt15_12_2023.pdf",
        "bytes": 156614,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/DMC-1_581_dt15_12_2023.pdf",
        "titleEn": "DMC-1_581_dt15_12_2023"
      },
      {
        "id": "official-link-garden-421-dt-11-12-2023-pdf-98746",
        "file": "Garden_421_dt_11_12_2023.pdf",
        "bytes": 98746,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/06/mediafiles/Garden_421_dt_11_12_2023.pdf",
        "titleEn": "Garden_421_dt_11_12_2023"
      },
      {
        "id": "official-link-health-33-dt-04-01-2024-pdf-370559",
        "file": "Health_33_dt__04_01_2024.pdf",
        "bytes": 370559,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/01/mediafiles/Health_33_dt__04_01_2024.pdf",
        "titleEn": "Health_33_dt_04_01_2024"
      },
      {
        "id": "official-link-health-517-dt-24-02-2024-pdf-62941",
        "file": "Health_517_dt_24_02_2024.pdf",
        "bytes": 62941,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2024/02/mediafiles/Health_517_dt_24_02_2024.pdf",
        "titleEn": "Health_517_dt_24_02_2024"
      },
      {
        "id": "official-link-estate-dept-1710-dt-23-12-2021-pdf-523500",
        "file": "Estate_Dept_1710_dt__23_12_2021.pdf",
        "bytes": 523500,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Estate_Dept_1710_dt__23_12_2021.pdf",
        "titleEn": "Estate Dept 1710 dt. 23.12.2021"
      },
      {
        "id": "official-link-health-725-dt-26-03-2021-pdf-157279",
        "file": "Health_725_dt_26_03_2021.PDF",
        "bytes": 157279,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Health_725_dt_26_03_2021.PDF",
        "titleEn": "Health 725 dt.26.03.2021"
      },
      {
        "id": "official-link-mma-1050-dt-10-12-2020-pdf-107497",
        "file": "mma_1050_dt__10_12_2020.pdf",
        "bytes": 107497,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/mma_1050_dt__10_12_2020.pdf",
        "titleEn": "mma 1050 dt. 10.12.2020"
      },
      {
        "id": "official-link-health-1015-dt-05-04-20191-pdf-916719",
        "file": "health_1015_dt__05_04_20191.pdf",
        "bytes": 916719,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/health_1015_dt__05_04_20191.pdf",
        "titleEn": "health 1015 dt. 05.04.2019"
      },
      {
        "id": "official-link-164-14-08-17-pdf-801315",
        "file": "164_14_08_17.PDF",
        "bytes": 801315,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/164_14_08_17.PDF",
        "titleEn": "164 14.08.17"
      },
      {
        "id": "official-link-corona-virus-pdf-1264169",
        "file": "Corona_Virus.PDF",
        "bytes": 1264169,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/Corona_Virus.PDF",
        "titleEn": "Corona Virus"
      },
      {
        "id": "official-link-pmay-jahir-pragtan-458-pdf-802541",
        "file": "PMAY_Jahir_Pragtan_458.PDF",
        "bytes": 802541,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/03/mediafiles/PMAY_Jahir_Pragtan_458.PDF",
        "titleEn": "PMAY Jahir Pragtan 458"
      },
      {
        "id": "official-link-adtp-175-dt-25-01-2022-pdf-138761",
        "file": "ADTP_175_dt__25_01_2022.pdf",
        "bytes": 138761,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/05/mediafiles/ADTP_175_dt__25_01_2022.pdf",
        "titleEn": "ADTP 175 dt.25.01.2022"
      },
      {
        "id": "official-link-pmay-216-dt-20-12-2022-pdf-85040",
        "file": "PMAY_216_dt__20_12_2022.pdf",
        "bytes": 85040,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/12/mediafiles/PMAY_216_dt__20_12_2022.pdf",
        "titleEn": "PMAY_216_dt__20_12_2022"
      },
      {
        "id": "official-link-addi-comm-2-pa-34-dt-07-02-2023-pdf-119921",
        "file": "Addi_comm_2_PA_34_dt__07_02_2023.pdf",
        "bytes": 119921,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2023/02/mediafiles/Addi_comm_2_PA_34_dt__07_02_2023.pdf",
        "titleEn": "Addi_comm_2_PA_34_dt__07_02_2023"
      },
      {
        "id": "official-link-bombay-nursing-home-act-1949new-registration-and-renewal-pdf-760604",
        "file": "Bombay_Nursing_Home_act_1949New_Registration_and_Renewal.pdf",
        "bytes": 760604,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2023/04/mediafiles/Bombay_Nursing_Home_act_1949New_Registration_and_Renewal.pdf",
        "titleEn": "Bombay_Nursing_Home_act_1949"
      },
      {
        "id": "official-link-estate-325-dt-20-04-2023-pdf-966180",
        "file": "Estate_325_dt__20_04_2023.pdf",
        "bytes": 966180,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2023/04/mediafiles/Estate_325_dt__20_04_2023.pdf",
        "titleEn": "Estate_325_dt__20_04_2023"
      },
      {
        "id": "official-link-swm-432-dt-07-09-2023-pdf-2774812",
        "file": "SWM_432_dt__07_09_2023.pdf",
        "bytes": 2774812,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2023/09/mediafiles/SWM_432_dt__07_09_2023.pdf",
        "titleEn": "SWM_432_dt__07_09_2023"
      },
      {
        "id": "official-link-rts-office-order-pdf-592317",
        "file": "Rts_office_order.pdf",
        "bytes": 592317,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2025/02/mediafiles/Rts_office_order.pdf",
        "titleEn": "छ.संभाजीनगर म.न.पा.कार्यालयीन आदेश"
      },
      {
        "id": "official-link-csmc-cm-100-days-ppt-final-compressed-pdf-1668510",
        "file": "CSMC_CM_100_DAYS_PPT_FINAL_compressed.pdf",
        "bytes": 1668510,
        "externalUrl": "https://aurangabadmahapalika.org/assets/300/2025/04/mediafiles/CSMC_CM_100_DAYS_PPT_FINAL_compressed.pdf",
        "titleEn": "मा. मुख्यमंत्री १००० दिवसांच्या कार्यक्रमाचे सादरीकरण"
      }
    ]
  },
  {
    "id": "general-body",
    "headingEn": "General Body Meetings",
    "headingMr": "सर्वसाधारण सभा",
    "documents": [
      {
        "id": "official-link-19-april-89-to-16-april-90-gb-pdf-1391242",
        "file": "19-April-89_To_16-April-90_GB.pdf",
        "bytes": 1391242,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-April-89_To_16-April-90_GB.pdf",
        "titleEn": "19-April-89 To 16-April-90 GB"
      },
      {
        "id": "official-link-28-oct-91-pdf-247032",
        "file": "28-Oct-91.pdf",
        "bytes": 247032,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/28-Oct-91.pdf",
        "titleEn": "28-Oct-91"
      },
      {
        "id": "official-link-12-20-jan-92to31-mar-92gb-pdf-767459",
        "file": "12-20-Jan-92to31-Mar-92GB.pdf",
        "bytes": 767459,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-20-Jan-92to31-Mar-92GB.pdf",
        "titleEn": "12-20-Jan-92to31-Mar-92GB"
      },
      {
        "id": "official-link-11-18-april-92to18-may-92gb-pdf-482905",
        "file": "11-18-April-92to18-May-92GB.pdf",
        "bytes": 482905,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-18-April-92to18-May-92GB.pdf",
        "titleEn": "11-18-April-92to18-May-92GB"
      },
      {
        "id": "official-link-14-18-may-92to19-nov-92gb-pdf-1382222",
        "file": "14-18-May-92to19-Nov-92GB.pdf",
        "bytes": 1382222,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/14-18-May-92to19-Nov-92GB.pdf",
        "titleEn": "14-18-May-92to19-Nov-92GB"
      },
      {
        "id": "official-link-13-19-dec-92to18-mar-93gb-pdf-856184",
        "file": "13-19-Dec-92to18-Mar-93GB.pdf",
        "bytes": 856184,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-19-Dec-92to18-Mar-93GB.pdf",
        "titleEn": "13-19-Dec-92to18-Mar-93GB"
      },
      {
        "id": "official-link-16-29-mar-93to29-april-93gb-pdf-410953",
        "file": "16-29-Mar-93to29-April-93GB.pdf",
        "bytes": 410953,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-29-Mar-93to29-April-93GB.pdf",
        "titleEn": "16-29-Mar-93to29-April-93GB"
      },
      {
        "id": "official-link-15-21-may-94to30-nov-94gb-pdf-1261759",
        "file": "15-21-May-94to30-Nov-94GB.pdf",
        "bytes": 1261759,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/15-21-May-94to30-Nov-94GB.pdf",
        "titleEn": "15-21-May-94to30-Nov-94GB"
      },
      {
        "id": "official-link-18-29-nov-94to31-dec-94gb-pdf-330313",
        "file": "18-29-Nov-94to31-Dec-94GB.pdf",
        "bytes": 330313,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-29-Nov-94to31-Dec-94GB.pdf",
        "titleEn": "18-29-Nov-94to31-Dec-94GB"
      },
      {
        "id": "official-link-17-04-jan-95to25-april-95gb-pdf-1379704",
        "file": "17-04-Jan-95to25-April-95GB.pdf",
        "bytes": 1379704,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-04-Jan-95to25-April-95GB.pdf",
        "titleEn": "17-04-Jan-95to25-April-95GB"
      },
      {
        "id": "official-link-20-25-april-95toapril-95gb-pdf-618648",
        "file": "20-25-April-95toApril-95GB.pdf",
        "bytes": 618648,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-25-April-95toApril-95GB.pdf",
        "titleEn": "20-25-April-95toApril-95GB"
      },
      {
        "id": "official-link-22-18-04-96to31-12-96-pdf-1366967",
        "file": "22-18-04-96To31-12-96.pdf",
        "bytes": 1366967,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/22-18-04-96To31-12-96.pdf",
        "titleEn": "22-18-04-96To31-12-96"
      },
      {
        "id": "official-link-20-12-04gb-pdf-42495",
        "file": "20-12-04GB.pdf",
        "bytes": 42495,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-12-04GB.pdf",
        "titleEn": "20-12-04GB"
      },
      {
        "id": "official-link-20-11-04gb-pdf-238103",
        "file": "20-11-04GB.pdf",
        "bytes": 238103,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-11-04GB.pdf",
        "titleEn": "20-11-04GB"
      },
      {
        "id": "official-link-20-10-04gb-pdf-48286",
        "file": "20-10-04GB.pdf",
        "bytes": 48286,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-10-04GB.pdf",
        "titleEn": "20-10-04GB"
      },
      {
        "id": "official-link-16-09-04gb-pdf-47162",
        "file": "16-09-04GB.pdf",
        "bytes": 47162,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-09-04GB.pdf",
        "titleEn": "16-09-04GB"
      },
      {
        "id": "official-link-05-08-04gb-pdf-374615",
        "file": "05-08-04GB.pdf",
        "bytes": 374615,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05-08-04GB.pdf",
        "titleEn": "05-08-04GB"
      },
      {
        "id": "official-link-20-07-04gb-pdf-211147",
        "file": "20-07-04GB.pdf",
        "bytes": 211147,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-07-04GB.pdf",
        "titleEn": "20-07-04GB"
      },
      {
        "id": "official-link-18-05-04gb-pdf-141715",
        "file": "18-05-04GB.pdf",
        "bytes": 141715,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-05-04GB.pdf",
        "titleEn": "18-05-04GB"
      },
      {
        "id": "official-link-03-05-04gb-pdf-102732",
        "file": "03-05-04GB.pdf",
        "bytes": 102732,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/03-05-04GB.pdf",
        "titleEn": "03-05-04GB"
      },
      {
        "id": "official-link-06-04-04gb-pdf-56134",
        "file": "06-04-04GB.pdf",
        "bytes": 56134,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/06-04-04GB.pdf",
        "titleEn": "06-04-04GB"
      },
      {
        "id": "official-link-10-04-04gb-pdf-71767",
        "file": "10-04-04GB.pdf",
        "bytes": 71767,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10-04-04GB.pdf",
        "titleEn": "10-04-04GB"
      },
      {
        "id": "official-link-30-08-05gb-pdf-178228",
        "file": "30-08-05GB.pdf",
        "bytes": 178228,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/30-08-05GB.pdf",
        "titleEn": "30-08-05GB"
      },
      {
        "id": "official-link-26-07-05gb-pdf-181220",
        "file": "26-07-05GB.pdf",
        "bytes": 181220,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/26-07-05GB.pdf",
        "titleEn": "26-07-05GB"
      },
      {
        "id": "official-link-07-07-05gb-pdf-291645",
        "file": "07-07-05GB.pdf",
        "bytes": 291645,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/07-07-05GB.pdf",
        "titleEn": "07-07-05GB"
      },
      {
        "id": "official-link-17-06-05gb-pdf-250938",
        "file": "17-06-05GB.pdf",
        "bytes": 250938,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-06-05GB.pdf",
        "titleEn": "17-06-05GB"
      },
      {
        "id": "official-link-09-06-05gb-pdf-111482",
        "file": "09-06-05GB.pdf",
        "bytes": 111482,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/09-06-05GB.pdf",
        "titleEn": "09-06-05GB"
      },
      {
        "id": "official-link-18-08-05gb-pdf-235474",
        "file": "18-08-05GB.pdf",
        "bytes": 235474,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-08-05GB.pdf",
        "titleEn": "18-08-05GB"
      },
      {
        "id": "official-link-29-04-05gb-pdf-179353",
        "file": "29-04-05GB.pdf",
        "bytes": 179353,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29-04-05GB.pdf",
        "titleEn": "29-04-05GB"
      },
      {
        "id": "official-link-18-02-05gb-pdf-67764",
        "file": "18-02-05GB.pdf",
        "bytes": 67764,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-02-05GB.pdf",
        "titleEn": "18-02-05GB"
      },
      {
        "id": "official-link-19-01-05gb-pdf-475209",
        "file": "19-01-05GB.pdf",
        "bytes": 475209,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-01-05GB.pdf",
        "titleEn": "19-01-05GB"
      },
      {
        "id": "official-link-04-01-05gb-pdf-141070",
        "file": "04-01-05GB.pdf",
        "bytes": 141070,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04-01-05GB.pdf",
        "titleEn": "04-01-05GB"
      },
      {
        "id": "official-link-19-05-05gb-pdf-235211",
        "file": "19-05-05GB.pdf",
        "bytes": 235211,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-05-05GB.pdf",
        "titleEn": "19-05-05GB"
      },
      {
        "id": "official-link-31-12-2019-gb-41-pdf-129890",
        "file": "31.12.2019--GB--41.pdf",
        "bytes": 129890,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31.12.2019--GB--41.pdf",
        "titleEn": "31.12.2019--GB--41"
      },
      {
        "id": "official-link-19-12-2019-gb-40-pdf-309519",
        "file": "19.12.2019--GB--40.pdf",
        "bytes": 309519,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19.12.2019--GB--40.pdf",
        "titleEn": "19.12.2019--GB--40"
      },
      {
        "id": "official-link-11-9-2019-35-gb-pdf-776678",
        "file": "11-9-2019-35-GB.pdf",
        "bytes": 776678,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-9-2019-35-GB.pdf",
        "titleEn": "11-9-2019-35-GB"
      },
      {
        "id": "official-link-19-29-04-95to30-03-96-pdf-1779610",
        "file": "19-29-04-95to30-03-96.pdf",
        "bytes": 1779610,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-29-04-95to30-03-96.pdf",
        "titleEn": "19-29-04-95to30-03-96"
      },
      {
        "id": "official-link-21-20-01-97to26-03-97-pdf-569728",
        "file": "21-20-01-97To26-03-97.pdf",
        "bytes": 569728,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/21-20-01-97To26-03-97.pdf",
        "titleEn": "21-20-01-97To26-03-97"
      },
      {
        "id": "official-link-23-07-05-97to10-11-97-pdf-1269104",
        "file": "23-07-05-97To10-11-97.pdf",
        "bytes": 1269104,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/23-07-05-97To10-11-97.pdf",
        "titleEn": "23-07-05-97To10-11-97"
      },
      {
        "id": "official-link-24-04-12-1997to31-01-1998-pdf-907093",
        "file": "24-04-12-1997To31-01-1998.pdf",
        "bytes": 907093,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/24-04-12-1997To31-01-1998.pdf",
        "titleEn": "24-04-12-1997To31-01-1998"
      },
      {
        "id": "official-link-26-20-04-98to05-11-98-pdf-1321075",
        "file": "26-20-04-98To05-11-98.pdf",
        "bytes": 1321075,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/26-20-04-98To05-11-98.pdf",
        "titleEn": "26-20-04-98To05-11-98"
      },
      {
        "id": "official-link-25-07-11-1998to31-03-1999-pdf-1804732",
        "file": "25-07-11-1998To31-03-1999.pdf",
        "bytes": 1804732,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/25-07-11-1998To31-03-1999.pdf",
        "titleEn": "25-07-11-1998To31-03-1999"
      },
      {
        "id": "official-link-28-20-04-99to20-01-2000-pdf-1669632",
        "file": "28-20-04-99to20-01-2000.pdf",
        "bytes": 1669632,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/28-20-04-99to20-01-2000.pdf",
        "titleEn": "28-20-04-99to20-01-2000"
      },
      {
        "id": "official-link-27-25-01-00to20-04-00-pdf-491555",
        "file": "27-25-01-00to20-04-00.pdf",
        "bytes": 491555,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/27-25-01-00to20-04-00.pdf",
        "titleEn": "27-25-01-00to20-04-00"
      },
      {
        "id": "official-link-30-29-4-2000to31-8-2000-pdf-1871148",
        "file": "30-29-4-2000to31-8-2000.pdf",
        "bytes": 1871148,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/30-29-4-2000to31-8-2000.pdf",
        "titleEn": "30-29-4-2000to31-8-2000"
      },
      {
        "id": "official-link-29-20-9-2000to1-3-20001-pdf-2242219",
        "file": "29-20-9-2000to1-3-20001.pdf",
        "bytes": 2242219,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29-20-9-2000to1-3-20001.pdf",
        "titleEn": "29-20-9-2000to1-3-20001"
      },
      {
        "id": "official-link-32-14-03-01to06-07-01-pdf-1702996",
        "file": "32-14-03-01to06-07-01.pdf",
        "bytes": 1702996,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/32-14-03-01to06-07-01.pdf",
        "titleEn": "32-14-03-01to06-07-01"
      },
      {
        "id": "official-link-31-12-07-2001to27-11-2001-pdf-2148904",
        "file": "31-12-07-2001To27-11-2001.pdf",
        "bytes": 2148904,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-12-07-2001To27-11-2001.pdf",
        "titleEn": "31-12-07-2001To27-11-2001"
      },
      {
        "id": "official-link-34-20-12-01to18-4-2002-pdf-2233625",
        "file": "34-20-12-01to18-4-2002.pdf",
        "bytes": 2233625,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/34-20-12-01to18-4-2002.pdf",
        "titleEn": "34-20-12-01to18-4-2002"
      },
      {
        "id": "official-link-33-24-04-2002to18-10-2002-pdf-2180124",
        "file": "33-24-04-2002to18-10-2002.pdf",
        "bytes": 2180124,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/33-24-04-2002to18-10-2002.pdf",
        "titleEn": "33-24-04-2002to18-10-2002"
      },
      {
        "id": "official-link-36-29-10-2002to19-04-2003-pdf-2234713",
        "file": "36-29-10-2002To19-04-2003.pdf",
        "bytes": 2234713,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/36-29-10-2002To19-04-2003.pdf",
        "titleEn": "36-29-10-2002To19-04-2003"
      },
      {
        "id": "official-link-35-06-05-03to20-08-03-pdf-1284937",
        "file": "35-06-05-03to20-08-03.pdf",
        "bytes": 1284937,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/35-06-05-03to20-08-03.pdf",
        "titleEn": "35-06-05-03to20-08-03"
      },
      {
        "id": "official-link-38-19-9-2003to20-11-2003-1-pdf-1013458",
        "file": "38-19-9-2003To20-11-2003-1.pdf",
        "bytes": 1013458,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/38-19-9-2003To20-11-2003-1.pdf",
        "titleEn": "38-19-9-2003To20-11-2003-1"
      },
      {
        "id": "official-link-37-20-12-03to11-02-04-pdf-1757860",
        "file": "37-20-12-03to11-02-04.pdf",
        "bytes": 1757860,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/37-20-12-03to11-02-04.pdf",
        "titleEn": "37-20-12-03to11-02-04"
      },
      {
        "id": "official-link-06-01-04gb-pdf-243722",
        "file": "06-01-04GB.pdf",
        "bytes": 243722,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/06-01-04GB.pdf",
        "titleEn": "06-01-04GB"
      },
      {
        "id": "official-link-12-feb-04gb-pdf-82956",
        "file": "12-Feb-04GB.pdf",
        "bytes": 82956,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-Feb-04GB.pdf",
        "titleEn": "12-Feb-04GB"
      },
      {
        "id": "official-link-20-02-04gb-pdf-140899",
        "file": "20-02-04GB.pdf",
        "bytes": 140899,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-02-04GB.pdf",
        "titleEn": "20-02-04GB"
      },
      {
        "id": "official-link-01-03-04gb-pdf-51018",
        "file": "01-03-04GB.pdf",
        "bytes": 51018,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/01-03-04GB.pdf",
        "titleEn": "01-03-04GB"
      },
      {
        "id": "official-link-31-03-04gb-pdf-82515",
        "file": "31-03-04GB.pdf",
        "bytes": 82515,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-03-04GB.pdf",
        "titleEn": "31-03-04GB"
      },
      {
        "id": "official-link-25-05-04gb-pdf-205786",
        "file": "25-05-04GB.pdf",
        "bytes": 205786,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/25-05-04GB.pdf",
        "titleEn": "25-05-04GB"
      },
      {
        "id": "official-link-26-05-04gb-pdf-75881",
        "file": "26-05-04GB.pdf",
        "bytes": 75881,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/26-05-04GB.pdf",
        "titleEn": "26-05-04GB"
      },
      {
        "id": "official-link-31-05-04gb-pdf-45597",
        "file": "31-05-04GB.pdf",
        "bytes": 45597,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-05-04GB.pdf",
        "titleEn": "31-05-04GB"
      },
      {
        "id": "official-link-19-06-04gb-ii-pdf-190704",
        "file": "19-06-04GB-II.pdf",
        "bytes": 190704,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-06-04GB-II.pdf",
        "titleEn": "19-06-04GB-II"
      },
      {
        "id": "official-link-12-09-06-vishesh-pdf-53120",
        "file": "12-09-06(Vishesh).pdf",
        "bytes": 53120,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-09-06(Vishesh).pdf",
        "titleEn": "12-09-06(Vishesh)"
      },
      {
        "id": "official-link-20-09-06gb-pdf-101442",
        "file": "20-09-06GB.pdf",
        "bytes": 101442,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-09-06GB.pdf",
        "titleEn": "20-09-06GB"
      },
      {
        "id": "official-link-25-09-06gb-tahakub-pdf-501714",
        "file": "25-09-06GB(Tahakub).pdf",
        "bytes": 501714,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/25-09-06GB(Tahakub).pdf",
        "titleEn": "25-09-06GB(Tahakub)"
      },
      {
        "id": "official-link-13-10-06gb-pdf-313321",
        "file": "13-10-06GB.pdf",
        "bytes": 313321,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-10-06GB.pdf",
        "titleEn": "13-10-06GB"
      },
      {
        "id": "official-link-27-10-06gb-pdf-271645",
        "file": "27-10-06GB.pdf",
        "bytes": 271645,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/27-10-06GB.pdf",
        "titleEn": "27-10-06GB"
      },
      {
        "id": "official-link-04-11-06gb-pdf-81278",
        "file": "04-11-06GB.pdf",
        "bytes": 81278,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04-11-06GB.pdf",
        "titleEn": "04-11-06GB"
      },
      {
        "id": "official-link-14-11-06gb-mayoreln-pdf-207590",
        "file": "14-11-06GB(MayorEln).pdf",
        "bytes": 207590,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/14-11-06GB(MayorEln).pdf",
        "titleEn": "14-11-06GB(MayorEln)"
      },
      {
        "id": "official-link-20-11-06gb-pdf-187435",
        "file": "20-11-06GB.pdf",
        "bytes": 187435,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-11-06GB.pdf",
        "titleEn": "20-11-06GB"
      },
      {
        "id": "official-link-15-12-06gb-pudhedhakalne-pdf-347382",
        "file": "15-12-06GB(PudheDhakalne).pdf",
        "bytes": 347382,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/15-12-06GB(PudheDhakalne).pdf",
        "titleEn": "15-12-06GB(PudheDhakalne)"
      },
      {
        "id": "official-link-11-01-07gb-suchana-pdf-284682",
        "file": "11-01-07GB(SUCHANA).pdf",
        "bytes": 284682,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-01-07GB(SUCHANA).pdf",
        "titleEn": "11-01-07GB(SUCHANA)"
      },
      {
        "id": "official-link-11-20-01-07gb-pdf-315263",
        "file": "11-20-01-07GB.pdf",
        "bytes": 315263,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-20-01-07GB.pdf",
        "titleEn": "11-20-01-07GB"
      },
      {
        "id": "official-link-22-01-07gb-pdf-177811",
        "file": "22-01-07GB.pdf",
        "bytes": 177811,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/22-01-07GB.pdf",
        "titleEn": "22-01-07GB"
      },
      {
        "id": "official-link-10-20-02-07gb-pdf-387415",
        "file": "10-20-02-07GB.pdf",
        "bytes": 387415,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10-20-02-07GB.pdf",
        "titleEn": "10-20-02-07GB"
      },
      {
        "id": "official-link-28-02-07gb-pdf-262989",
        "file": "28-02-07GB.pdf",
        "bytes": 262989,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/28-02-07GB.pdf",
        "titleEn": "28-02-07GB"
      },
      {
        "id": "official-link-09-14-03-07gb-pdf-63191",
        "file": "09-14-03-07GB.pdf",
        "bytes": 63191,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/09-14-03-07GB.pdf",
        "titleEn": "09-14-03-07GB"
      },
      {
        "id": "official-link-29-03-07gb-pdf-236400",
        "file": "29-03-07GB.pdf",
        "bytes": 236400,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29-03-07GB.pdf",
        "titleEn": "29-03-07GB"
      },
      {
        "id": "official-link-08-30-03-07gb-budget-pdf-74095",
        "file": "08-30-03-07GB(BUDGET).pdf",
        "bytes": 74095,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/08-30-03-07GB(BUDGET).pdf",
        "titleEn": "08-30-03-07GB(BUDGET)"
      },
      {
        "id": "official-link-20-04-07gb-pdf-93793",
        "file": "20-04-07GB.pdf",
        "bytes": 93793,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-04-07GB.pdf",
        "titleEn": "20-04-07GB"
      },
      {
        "id": "official-link-18-05-07gb-pdf-264814",
        "file": "18-05-07GB.pdf",
        "bytes": 264814,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-05-07GB.pdf",
        "titleEn": "18-05-07GB"
      },
      {
        "id": "official-link-07-18-05-07gb-pdf-264814",
        "file": "07-18-05-07GB.pdf",
        "bytes": 264814,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/07-18-05-07GB.pdf",
        "titleEn": "07-18-05-07GB"
      },
      {
        "id": "official-link-06-30-05-07gb-electionvisheshsamitisabha-pdf-93601",
        "file": "06-30-05-07GB(ElectionVisheshSamitiSabha).pdf",
        "bytes": 93601,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/06-30-05-07GB(ElectionVisheshSamitiSabha).pdf",
        "titleEn": "06-30-05-07GB(ElectionVisheshSamitiSabha)"
      },
      {
        "id": "official-link-17-20-06-07gb-pdf-247502",
        "file": "17-20-06-07GB.pdf",
        "bytes": 247502,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-20-06-07GB.pdf",
        "titleEn": "17-20-06-07GB"
      },
      {
        "id": "official-link-05-18-07-07gb-pdf-562539",
        "file": "05-18-07-07GB.pdf",
        "bytes": 562539,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05-18-07-07GB.pdf",
        "titleEn": "05-18-07-07GB"
      },
      {
        "id": "official-link-02-08-07gb-pdf-474237",
        "file": "02-08-07GB.pdf",
        "bytes": 474237,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/02-08-07GB.pdf",
        "titleEn": "02-08-07GB"
      },
      {
        "id": "official-link-04-20-09-07gb-pdf-525758",
        "file": "04-20-09-07GB.pdf",
        "bytes": 525758,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04-20-09-07GB.pdf",
        "titleEn": "04-20-09-07GB"
      },
      {
        "id": "official-link-15-29-09-07gb-pdf-295892",
        "file": "15-29-09-07GB.pdf",
        "bytes": 295892,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/15-29-09-07GB.pdf",
        "titleEn": "15-29-09-07GB"
      },
      {
        "id": "official-link-03-10-10-07gb-pdf-133014",
        "file": "03-10-10-07GB.pdf",
        "bytes": 133014,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/03-10-10-07GB.pdf",
        "titleEn": "03-10-10-07GB"
      },
      {
        "id": "official-link-02-26-10-2007-pdf-672302",
        "file": "02-26-10-2007.pdf",
        "bytes": 672302,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/02-26-10-2007.pdf",
        "titleEn": "02-26-10-2007"
      },
      {
        "id": "official-link-13-29-10-2007-pdf-151885",
        "file": "13-29-10-2007.pdf",
        "bytes": 151885,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-29-10-2007.pdf",
        "titleEn": "13-29-10-2007"
      },
      {
        "id": "official-link-01-20-11-07gb-pdf-190981",
        "file": "01-20-11-07GB.pdf",
        "bytes": 190981,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/01-20-11-07GB.pdf",
        "titleEn": "01-20-11-07GB"
      },
      {
        "id": "official-link-12-20-12-2007-pdf-392459",
        "file": "12-20-12-2007.pdf",
        "bytes": 392459,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-20-12-2007.pdf",
        "titleEn": "12-20-12-2007"
      },
      {
        "id": "official-link-25-01-10-pdf-778319",
        "file": "25.01.10.pdf",
        "bytes": 778319,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/25.01.10.pdf",
        "titleEn": "25.01.10"
      },
      {
        "id": "official-link-29-04-10-pdf-225031",
        "file": "29.04.10.pdf",
        "bytes": 225031,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29.04.10.pdf",
        "titleEn": "29.04.10"
      },
      {
        "id": "official-link-20-05-10-pdf-219750",
        "file": "20.05.10.pdf",
        "bytes": 219750,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20.05.10.pdf",
        "titleEn": "20.05.10"
      },
      {
        "id": "official-link-19-06-2010-pdf-322520",
        "file": "19-06-2010.pdf",
        "bytes": 322520,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-06-2010.pdf",
        "titleEn": "19-06-2010"
      },
      {
        "id": "official-link-17-07-2010-pdf-571448",
        "file": "17-07-2010.pdf",
        "bytes": 571448,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-07-2010.pdf",
        "titleEn": "17-07-2010"
      },
      {
        "id": "official-link-18-09-2010gb-pdf-448478",
        "file": "18-09-2010GB.pdf",
        "bytes": 448478,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-09-2010GB.pdf",
        "titleEn": "18-09-2010GB"
      },
      {
        "id": "official-link-4-10-2010gb-pdf-69051",
        "file": "4-10-2010GB.pdf",
        "bytes": 69051,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/4-10-2010GB.pdf",
        "titleEn": "4-10-2010GB"
      },
      {
        "id": "official-link-20-11-2010gb-pdf-58746",
        "file": "20-11-2010GB.pdf",
        "bytes": 58746,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-11-2010GB.pdf",
        "titleEn": "20-11-2010GB"
      },
      {
        "id": "official-link-30-4-2011-pdf-168768",
        "file": "30.4.2011.pdf",
        "bytes": 168768,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/30.4.2011.pdf",
        "titleEn": "30.4.2011"
      },
      {
        "id": "official-link-18-5-2011-ii-pdf-273309",
        "file": "18-5-2011-II..pdf",
        "bytes": 273309,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-5-2011-II..pdf",
        "titleEn": "18-5-2011-II."
      },
      {
        "id": "official-link-18-01-08gb-pdf-185076",
        "file": "18-01-08GB.pdf",
        "bytes": 185076,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-01-08GB.pdf",
        "titleEn": "18-01-08GB"
      },
      {
        "id": "official-link-31-01-08gb-tahakub-pdf-417256",
        "file": "31-01-08GB(Tahakub).pdf",
        "bytes": 417256,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-01-08GB(Tahakub).pdf",
        "titleEn": "31-01-08GB(Tahakub)"
      },
      {
        "id": "official-link-16-02-08gb-pdf-485185",
        "file": "16-02-08GB.pdf",
        "bytes": 485185,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-02-08GB.pdf",
        "titleEn": "16-02-08GB"
      },
      {
        "id": "official-link-26-04-10-pdf-181774",
        "file": "26.04.10.pdf",
        "bytes": 181774,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/26.04.10.pdf",
        "titleEn": "26.04.10"
      },
      {
        "id": "official-link-39-02-3-2015-gb-pdf-241376",
        "file": "39-02-3-2015--GB.pdf",
        "bytes": 241376,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/39-02-3-2015--GB.pdf",
        "titleEn": "39-02-3-2015--GB"
      },
      {
        "id": "official-link-38-21-02-15-gb-pdf-428426",
        "file": "38-21-02-15-GB.pdf",
        "bytes": 428426,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/38-21-02-15-GB.pdf",
        "titleEn": "38-21-02-15-GB"
      },
      {
        "id": "official-link-40-23-03-2015-gb-pdf-52674",
        "file": "40-23-03-2015--GB.pdf",
        "bytes": 52674,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/40-23-03-2015--GB.pdf",
        "titleEn": "40-23-03-2015--GB"
      },
      {
        "id": "official-link-02-30-5-2015-gb-0-pdf-142262",
        "file": "02-30-5-2015-GB-0.pdf",
        "bytes": 142262,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/02-30-5-2015-GB-0.pdf",
        "titleEn": "02-30-5-2015-GB-0"
      },
      {
        "id": "official-link-04-13-7-2015-gb-pdf-212694",
        "file": "04--13-7-2015--GB.pdf",
        "bytes": 212694,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04--13-7-2015--GB.pdf",
        "titleEn": "04--13-7-2015--GB"
      },
      {
        "id": "official-link-03-20-6-2015-gb-pdf-227491",
        "file": "03-20-6-2015-GB.pdf",
        "bytes": 227491,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/03-20-6-2015-GB.pdf",
        "titleEn": "03-20-6-2015-GB"
      },
      {
        "id": "official-link-05-20-7-2015-gb-pdf-372088",
        "file": "05--20-7-2015-GB.pdf",
        "bytes": 372088,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05--20-7-2015-GB.pdf",
        "titleEn": "05--20-7-2015-GB"
      },
      {
        "id": "official-link-06-20-8-2015-gb-pdf-854342",
        "file": "06--20-8-2015--GB.pdf",
        "bytes": 854342,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/06--20-8-2015--GB.pdf",
        "titleEn": "06--20-8-2015--GB"
      },
      {
        "id": "official-link-07-14-9-2015-gb-pdf-681348",
        "file": "07--14-9-2015--GB.pdf",
        "bytes": 681348,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/07--14-9-2015--GB.pdf",
        "titleEn": "07--14-9-2015--GB"
      },
      {
        "id": "official-link-08-20-10-2015-pdf-173079",
        "file": "08--20-10-2015.pdf",
        "bytes": 173079,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/08--20-10-2015.pdf",
        "titleEn": "08--20-10-2015"
      },
      {
        "id": "official-link-14-12-2015-gb-11-pdf-358267",
        "file": "14-12-2015--GB--11.pdf",
        "bytes": 358267,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/14-12-2015--GB--11.pdf",
        "titleEn": "14-12-2015--GB--11"
      },
      {
        "id": "official-link-24-07-2015-gb-05-pdf-653878",
        "file": "24.07.2015--GB-05.pdf",
        "bytes": 653878,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/24.07.2015--GB-05.pdf",
        "titleEn": "24.07.2015--GB-05"
      },
      {
        "id": "official-link-10-11-2015-gb-baget-pdf-97988",
        "file": "10-11-2015-gb-Baget.pdf",
        "bytes": 97988,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10-11-2015-gb-Baget.pdf",
        "titleEn": "10-11-2015-gb-Baget"
      },
      {
        "id": "official-link-28-12-2015-12-gb-pdf-136166",
        "file": "28-12-2015-12-GB.pdf",
        "bytes": 136166,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/28-12-2015-12-GB.pdf",
        "titleEn": "28-12-2015-12-GB"
      },
      {
        "id": "official-link-7-1-2016-gb-13-pdf-710125",
        "file": "7-1-2016-GB-13.pdf",
        "bytes": 710125,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/7-1-2016-GB-13.pdf",
        "titleEn": "7-1-2016-GB-13"
      },
      {
        "id": "official-link-28-01-2016-gb-12-pdf-375739",
        "file": "28.01.2016--GB--12.pdf",
        "bytes": 375739,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/28.01.2016--GB--12.pdf",
        "titleEn": "28.01.2016--GB--12"
      },
      {
        "id": "official-link-20-02-2016-gb-sabha-pdf-450985",
        "file": "20-02-2016-GB--sabha-.pdf",
        "bytes": 450985,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-02-2016-GB--sabha-.pdf",
        "titleEn": "20-02-2016-GB--sabha-"
      },
      {
        "id": "official-link-15-3-2016-14-gb-pdf-276413",
        "file": "15-3-2016--14-GB.pdf",
        "bytes": 276413,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/15-3-2016--14-GB.pdf",
        "titleEn": "15-3-2016--14-GB"
      },
      {
        "id": "official-link-20-4-2016-gb-16-pdf-626011",
        "file": "20-4-2016--GB--16.pdf",
        "bytes": 626011,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-4-2016--GB--16.pdf",
        "titleEn": "20-4-2016--GB--16"
      },
      {
        "id": "official-link-10-05-2016-gb-18-pdf-165417",
        "file": "10-05-2016--GB--18.pdf",
        "bytes": 165417,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10-05-2016--GB--18.pdf",
        "titleEn": "10-05-2016--GB--18"
      },
      {
        "id": "official-link-10-05-2016-gb-19-pdf-129656",
        "file": "10.05.2016--GB--19.pdf",
        "bytes": 129656,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10.05.2016--GB--19.pdf",
        "titleEn": "10.05.2016--GB--19"
      },
      {
        "id": "official-link-16-09-05gb-pdf-64794",
        "file": "16-09-05GB.pdf",
        "bytes": 64794,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-09-05GB.pdf",
        "titleEn": "16-09-05GB"
      },
      {
        "id": "official-link-07-10-05gb-pdf-304753",
        "file": "07-10-05GB.pdf",
        "bytes": 304753,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/07-10-05GB.pdf",
        "titleEn": "07-10-05GB"
      },
      {
        "id": "official-link-19-10-05gb-pdf-296759",
        "file": "19-10-05GB.pdf",
        "bytes": 296759,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-10-05GB.pdf",
        "titleEn": "19-10-05GB"
      },
      {
        "id": "official-link-24-11-05gb-pdf-308071",
        "file": "24-11-05GB.pdf",
        "bytes": 308071,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/24-11-05GB.pdf",
        "titleEn": "24-11-05GB"
      },
      {
        "id": "official-link-28-11-05gb-pdf-126041",
        "file": "28-11-05GB.pdf",
        "bytes": 126041,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/28-11-05GB.pdf",
        "titleEn": "28-11-05GB"
      },
      {
        "id": "official-link-19-12-05gb-pdf-299216",
        "file": "19-12-05GB.pdf",
        "bytes": 299216,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-12-05GB.pdf",
        "titleEn": "19-12-05GB"
      },
      {
        "id": "official-link-31-03-06gb-ii-pdf-78746",
        "file": "31-03-06GB-II.pdf",
        "bytes": 78746,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-03-06GB-II.pdf",
        "titleEn": "31-03-06GB-II"
      },
      {
        "id": "official-link-31-03-06gb-i-pdf-92208",
        "file": "31-03-06GB-I.pdf",
        "bytes": 92208,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-03-06GB-I.pdf",
        "titleEn": "31-03-06GB-I"
      },
      {
        "id": "official-link-05-04-06gb-pdf-217844",
        "file": "05-04-06GB.pdf",
        "bytes": 217844,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05-04-06GB.pdf",
        "titleEn": "05-04-06GB"
      },
      {
        "id": "official-link-13-04-06gb-pdf-395314",
        "file": "13-04-06GB.pdf",
        "bytes": 395314,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-04-06GB.pdf",
        "titleEn": "13-04-06GB"
      },
      {
        "id": "official-link-20-05-06gb-pdf-165020",
        "file": "20-05-06GB.pdf",
        "bytes": 165020,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-05-06GB.pdf",
        "titleEn": "20-05-06GB"
      },
      {
        "id": "official-link-22-05-06gb-vishesh-pdf-115533",
        "file": "22-05-06GB(Vishesh).pdf",
        "bytes": 115533,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/22-05-06GB(Vishesh).pdf",
        "titleEn": "22-05-06GB(Vishesh)"
      },
      {
        "id": "official-link-24-05-06gb-tahakub-pdf-266350",
        "file": "24-05-06GB(Tahakub).pdf",
        "bytes": 266350,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/24-05-06GB(Tahakub).pdf",
        "titleEn": "24-05-06GB(Tahakub)"
      },
      {
        "id": "official-link-19-06-06gb-pdf-256376",
        "file": "19-06-06GB.pdf",
        "bytes": 256376,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-06-06GB.pdf",
        "titleEn": "19-06-06GB"
      },
      {
        "id": "official-link-13-07-06gb-vishesh-pdf-195171",
        "file": "13-07-06GB(Vishesh).pdf",
        "bytes": 195171,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-07-06GB(Vishesh).pdf",
        "titleEn": "13-07-06GB(Vishesh)"
      },
      {
        "id": "official-link-20-07-06gb-pdf-47258",
        "file": "20-07-06GB.pdf",
        "bytes": 47258,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-07-06GB.pdf",
        "titleEn": "20-07-06GB"
      },
      {
        "id": "official-link-11-08-06gb-pdf-340467",
        "file": "11-08-06GB.pdf",
        "bytes": 340467,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-08-06GB.pdf",
        "titleEn": "11-08-06GB"
      },
      {
        "id": "official-link-17-08-06gb-tahakub-pdf-336286",
        "file": "17-08-06GB(Tahakub).pdf",
        "bytes": 336286,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-08-06GB(Tahakub).pdf",
        "titleEn": "17-08-06GB(Tahakub)"
      },
      {
        "id": "official-link-16-01-2014-gb-21-pdf-497025",
        "file": "16-01-2014--GB--21.pdf",
        "bytes": 497025,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-01-2014--GB--21.pdf",
        "titleEn": "16-01-2014--GB--21"
      },
      {
        "id": "official-link-20-01-06gb-pdf-359698",
        "file": "20-01-06GB.pdf",
        "bytes": 359698,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-01-06GB.pdf",
        "titleEn": "20-01-06GB"
      },
      {
        "id": "official-link-18-02-06gb-pdf-347019",
        "file": "18-02-06GB.pdf",
        "bytes": 347019,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-02-06GB.pdf",
        "titleEn": "18-02-06GB"
      },
      {
        "id": "official-link-31-20-9-2014-gb-pdf-52245",
        "file": "31-20-9-2014--GB.pdf",
        "bytes": 52245,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-20-9-2014--GB.pdf",
        "titleEn": "31-20-9-2014--GB"
      },
      {
        "id": "official-link-33-11-11-2014-gb-pdf-6210534",
        "file": "33-11-11-2014-GB.pdf",
        "bytes": 6210534,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/33-11-11-2014-GB.pdf",
        "titleEn": "33-11-11-2014-GB"
      },
      {
        "id": "official-link-35-13-01-2015-gb-pdf-282998",
        "file": "35-13-01-2015--GB.pdf",
        "bytes": 282998,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/35-13-01-2015--GB.pdf",
        "titleEn": "35-13-01-2015--GB"
      },
      {
        "id": "official-link-35-14-01-2015-gb-pdf-143739",
        "file": "35-14-01-2015-GB.pdf",
        "bytes": 143739,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/35-14-01-2015-GB.pdf",
        "titleEn": "35-14-01-2015-GB"
      },
      {
        "id": "official-link-37-03-02-2015-gb-pdf-333355",
        "file": "37-03-02-2015-GB.pdf",
        "bytes": 333355,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/37-03-02-2015-GB.pdf",
        "titleEn": "37-03-02-2015-GB"
      },
      {
        "id": "official-link-10-05-2016-gb-20-pdf-441805",
        "file": "10-05-2016--GB-20.pdf",
        "bytes": 441805,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10-05-2016--GB-20.pdf",
        "titleEn": "10-05-2016--GB-20"
      },
      {
        "id": "official-link-14-06-2016-gb-21-pdf-145050",
        "file": "14.06.2016--GB--21.pdf",
        "bytes": 145050,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/14.06.2016--GB--21.pdf",
        "titleEn": "14.06.2016--GB--21"
      },
      {
        "id": "official-link-10-8-2016-gb-25-pdf-505237",
        "file": "10-8-2016-GB-25.pdf",
        "bytes": 505237,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/10-8-2016-GB-25.pdf",
        "titleEn": "10-8-2016-GB-25"
      },
      {
        "id": "official-link-31-08-2016-gb-26-pdf-1320657",
        "file": "31-08-2016--GB--26.pdf",
        "bytes": 1320657,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-08-2016--GB--26.pdf",
        "titleEn": "31-08-2016--GB--26"
      },
      {
        "id": "official-link-06-09-2016-gb-27-pdf-160115",
        "file": "06-09-2016-GB-27.pdf",
        "bytes": 160115,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/06-09-2016-GB-27.pdf",
        "titleEn": "06-09-2016-GB-27"
      },
      {
        "id": "official-link-20-9-2016-gb-28-pdf-542517",
        "file": "20-9-2016--GB-28.pdf",
        "bytes": 542517,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-9-2016--GB-28.pdf",
        "titleEn": "20-9-2016--GB-28"
      },
      {
        "id": "official-link-7-9-2011-gb-11-30-pdf-540934",
        "file": "7-9-2011---GB-11-30.pdf",
        "bytes": 540934,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/7-9-2011---GB-11-30.pdf",
        "titleEn": "7-9-2011---GB-11-30"
      },
      {
        "id": "official-link-19-03-08standing8sadasyaele-pdf-67039",
        "file": "19-03-08Standing8sadasyaele..pdf",
        "bytes": 67039,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-03-08Standing8sadasyaele..pdf",
        "titleEn": "19-03-08Standing8sadasyaele."
      },
      {
        "id": "official-link-19-04-08-pdf-130113",
        "file": "19.04.08.pdf",
        "bytes": 130113,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19.04.08.pdf",
        "titleEn": "19.04.08"
      },
      {
        "id": "official-link-21-04-08to31-03-08tahakubbudget-pdf-111631",
        "file": "21.04.08To31.03.08TahakubBudget.pdf",
        "bytes": 111631,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/21.04.08To31.03.08TahakubBudget.pdf",
        "titleEn": "21.04.08To31.03.08TahakubBudget"
      },
      {
        "id": "official-link-17-05-08-pdf-148592",
        "file": "17-05-08.pdf",
        "bytes": 148592,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-05-08.pdf",
        "titleEn": "17-05-08"
      },
      {
        "id": "official-link-19-06-08-pdf-435170",
        "file": "19.06.08.pdf",
        "bytes": 435170,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19.06.08.pdf",
        "titleEn": "19.06.08"
      },
      {
        "id": "official-link-19-06-08allsamitisadasyaele-pdf-74491",
        "file": "19.06.08AllSamitiSadasyaEle.pdf",
        "bytes": 74491,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19.06.08AllSamitiSadasyaEle.pdf",
        "titleEn": "19.06.08AllSamitiSadasyaEle"
      },
      {
        "id": "official-link-19-07-08-pdf-40583",
        "file": "19-07-08.pdf",
        "bytes": 40583,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-07-08.pdf",
        "titleEn": "19-07-08"
      },
      {
        "id": "official-link-29-07-08to19-07-08tahakub-pdf-46779",
        "file": "29.07.08To19.07.08Tahakub.pdf",
        "bytes": 46779,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29.07.08To19.07.08Tahakub.pdf",
        "titleEn": "29.07.08To19.07.08Tahakub"
      },
      {
        "id": "official-link-20-08-08b-pdf-257010",
        "file": "20-08-08b.pdf",
        "bytes": 257010,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-08-08b.pdf",
        "titleEn": "20-08-08b"
      },
      {
        "id": "official-link-20-08-08-pdf-191836",
        "file": "20-08-08.pdf",
        "bytes": 191836,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-08-08.pdf",
        "titleEn": "20-08-08"
      },
      {
        "id": "official-link-20-09-08-pdf-302122",
        "file": "20-09-08.pdf",
        "bytes": 302122,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-09-08.pdf",
        "titleEn": "20-09-08"
      },
      {
        "id": "official-link-20-10-08-pdf-83426",
        "file": "20-10-08.pdf",
        "bytes": 83426,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-10-08.pdf",
        "titleEn": "20-10-08"
      },
      {
        "id": "official-link-17-31-10-08-pdf-184262",
        "file": "17-31-10-08.pdf",
        "bytes": 184262,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-31-10-08.pdf",
        "titleEn": "17-31-10-08"
      },
      {
        "id": "official-link-18-20-11-08-pdf-148850",
        "file": "18-20-11-08.pdf",
        "bytes": 148850,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-20-11-08.pdf",
        "titleEn": "18-20-11-08"
      },
      {
        "id": "official-link-19-18-11-08-pdf-120896",
        "file": "19-18-11-08.pdf",
        "bytes": 120896,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-18-11-08.pdf",
        "titleEn": "19-18-11-08"
      },
      {
        "id": "official-link-20-19-12-08-pdf-297975",
        "file": "20-19-12-08.pdf",
        "bytes": 297975,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-19-12-08.pdf",
        "titleEn": "20-19-12-08"
      },
      {
        "id": "official-link-21-19-01-09-pdf-74322",
        "file": "21-19-01-09.pdf",
        "bytes": 74322,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/21-19-01-09.pdf",
        "titleEn": "21-19-01-09"
      },
      {
        "id": "official-link-23-02-03-09-pdf-393453",
        "file": "23-02-03-09.pdf",
        "bytes": 393453,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/23-02-03-09.pdf",
        "titleEn": "23-02-03-09"
      },
      {
        "id": "official-link-24-25-03-09-pdf-85696",
        "file": "24-25-03-09.pdf",
        "bytes": 85696,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/24-25-03-09.pdf",
        "titleEn": "24-25-03-09"
      },
      {
        "id": "official-link-25-17-06-09-pdf-80406",
        "file": "25-17-06-09.pdf",
        "bytes": 80406,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/25-17-06-09.pdf",
        "titleEn": "25-17-06-09"
      },
      {
        "id": "official-link-23-06-09-pdf-344972",
        "file": "23-06-09.pdf",
        "bytes": 344972,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/23-06-09.pdf",
        "titleEn": "23-06-09"
      },
      {
        "id": "official-link-16-07-09-pdf-206969",
        "file": "16-07-09.pdf",
        "bytes": 206969,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-07-09.pdf",
        "titleEn": "16-07-09"
      },
      {
        "id": "official-link-31-07-09-pdf-103301",
        "file": "31-07-09.pdf",
        "bytes": 103301,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/31-07-09.pdf",
        "titleEn": "31-07-09"
      },
      {
        "id": "official-link-04-08-09-pdf-109016",
        "file": "04-08-09.pdf",
        "bytes": 109016,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04-08-09.pdf",
        "titleEn": "04-08-09"
      },
      {
        "id": "official-link-13-08-09-pdf-116143",
        "file": "13-08-09.pdf",
        "bytes": 116143,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-08-09.pdf",
        "titleEn": "13-08-09"
      },
      {
        "id": "official-link-18-08-09-13-08-09chitahakub-pdf-259649",
        "file": "18-08-09(13-08-09chiTahakub).pdf",
        "bytes": 259649,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-08-09(13-08-09chiTahakub).pdf",
        "titleEn": "18-08-09(13-08-09chiTahakub)"
      },
      {
        "id": "official-link-4-14-08-2013-gb-16-pdf-70001",
        "file": "4.14-08-2013--GB--16.pdf",
        "bytes": 70001,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/4.14-08-2013--GB--16.pdf",
        "titleEn": "4.14-08-2013--GB--16"
      },
      {
        "id": "official-link-2-21-06-2013-gb-14-pdf-120228",
        "file": "2.21.06.2013--GB--14.pdf",
        "bytes": 120228,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/2.21.06.2013--GB--14.pdf",
        "titleEn": "2.21.06.2013--GB--14"
      },
      {
        "id": "official-link-12-04-2013-gb-10-pdf-196142",
        "file": "12-04-2013--GB--10.pdf",
        "bytes": 196142,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-04-2013--GB--10.pdf",
        "titleEn": "12-04-2013--GB--10"
      },
      {
        "id": "official-link-18-3-2013-gb-08-pdf-515820",
        "file": "18-3-2013--GB--08.pdf",
        "bytes": 515820,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18-3-2013--GB--08.pdf",
        "titleEn": "18-3-2013--GB--08"
      },
      {
        "id": "official-link-05-19-01-2013-gb-pdf-583398",
        "file": "05.19.01.2013.GB.pdf",
        "bytes": 583398,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05.19.01.2013.GB.pdf",
        "titleEn": "05.19.01.2013.GB"
      },
      {
        "id": "official-link-04-17-12-2012-gb-pdf-572149",
        "file": "04.17.12.2012.GB.pdf",
        "bytes": 572149,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04.17.12.2012.GB.pdf",
        "titleEn": "04.17.12.2012.GB"
      },
      {
        "id": "official-link-03-30-11-2012-gb-pdf-108138",
        "file": "03.30-11-2012-GB.pdf",
        "bytes": 108138,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/03.30-11-2012-GB.pdf",
        "titleEn": "03.30-11-2012-GB"
      },
      {
        "id": "official-link-02-30-11-2012-gb-pdf-275906",
        "file": "02.30.11.2012.GB.pdf",
        "bytes": 275906,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/02.30.11.2012.GB.pdf",
        "titleEn": "02.30.11.2012.GB"
      },
      {
        "id": "official-link-48-27-09-2012-gb-pdf-74529",
        "file": "48.27.09.2012.GB.pdf",
        "bytes": 74529,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/48.27.09.2012.GB.pdf",
        "titleEn": "48.27.09.2012.GB"
      },
      {
        "id": "official-link-45-dt-09-08-2012-gb-pdf-381961",
        "file": "45--DT.09-08-2012.GB.pdf",
        "bytes": 381961,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/45--DT.09-08-2012.GB.pdf",
        "titleEn": "45--DT.09-08-2012.GB"
      },
      {
        "id": "official-link-46-09-08-2012-gb-pdf-517211",
        "file": "46.09-08-2012----GB.pdf",
        "bytes": 517211,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/46.09-08-2012----GB.pdf",
        "titleEn": "46.09-08-2012----GB"
      },
      {
        "id": "official-link-45-17-07-2012-gb-pdf-82874",
        "file": "45.17-07-2012-GB.pdf",
        "bytes": 82874,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/45.17-07-2012-GB.pdf",
        "titleEn": "45.17-07-2012-GB"
      },
      {
        "id": "official-link-43-20-6-2012-gb-pdf-272039",
        "file": "43.20-6-2012-GB.pdf",
        "bytes": 272039,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/43.20-6-2012-GB.pdf",
        "titleEn": "43.20-6-2012-GB"
      },
      {
        "id": "official-link-44-20-6-2012-gb-pdf-366497",
        "file": "44.20-6-2012-GB.pdf",
        "bytes": 366497,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/44.20-6-2012-GB.pdf",
        "titleEn": "44.20-6-2012-GB"
      },
      {
        "id": "official-link-40-20-4-2012-gb-pdf-585745",
        "file": "40.20-4-2012-GB.pdf",
        "bytes": 585745,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/40.20-4-2012-GB.pdf",
        "titleEn": "40.20-4-2012-GB"
      },
      {
        "id": "official-link-37-21-03-2012gb-pdf-349749",
        "file": "37.21-03-2012GB.pdf",
        "bytes": 349749,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/37.21-03-2012GB.pdf",
        "titleEn": "37.21-03-2012GB"
      },
      {
        "id": "official-link-37-16-03-2012-gb-pdf-78562",
        "file": "37-16-03-2012-GB.pdf",
        "bytes": 78562,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/37-16-03-2012-GB.pdf",
        "titleEn": "37-16-03-2012-GB"
      },
      {
        "id": "official-link-35-18-02-2012-gb-pdf-504250",
        "file": "35-18-02-2012-GB.pdf",
        "bytes": 504250,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/35-18-02-2012-GB.pdf",
        "titleEn": "35-18-02-2012-GB"
      },
      {
        "id": "official-link-33-11-1-2012gb-pdf-84452",
        "file": "33-11-1-2012GB.pdf",
        "bytes": 84452,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/33-11-1-2012GB.pdf",
        "titleEn": "33-11-1-2012GB"
      },
      {
        "id": "official-link-32-20-12-2011-gb-pdf-666363",
        "file": "32-20-12-2011----GB.pdf",
        "bytes": 666363,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/32-20-12-2011----GB.pdf",
        "titleEn": "32-20-12-2011----GB"
      },
      {
        "id": "official-link-29-18-10-2011-3-30gb-pdf-192978",
        "file": "29-18-10-2011---3-30GB.pdf",
        "bytes": 192978,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29-18-10-2011---3-30GB.pdf",
        "titleEn": "29-18-10-2011---3-30GB"
      },
      {
        "id": "official-link-27-29-9-2011gb-pdf-486000",
        "file": "27-29-9-2011GB.pdf",
        "bytes": 486000,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/27-29-9-2011GB.pdf",
        "titleEn": "27-29-9-2011GB"
      },
      {
        "id": "official-link-18-06-2016-gb-22-pdf-256884",
        "file": "18.06.2016---GB---22.pdf",
        "bytes": 256884,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18.06.2016---GB---22.pdf",
        "titleEn": "18.06.2016---GB---22"
      },
      {
        "id": "official-link-19-11-2016-gb-30-pdf-1228207",
        "file": "19-11-2016-GB---30.pdf",
        "bytes": 1228207,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/19-11-2016-GB---30.pdf",
        "titleEn": "19-11-2016-GB---30"
      },
      {
        "id": "official-link-gb-32-14-12-2016-pdf-172035",
        "file": "GB-32-14-12-2016.pdf",
        "bytes": 172035,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-32-14-12-2016.pdf",
        "titleEn": "GB-32-14-12-2016"
      },
      {
        "id": "official-link-gb-33-29-12-2016-pdf-457471",
        "file": "GB-33-29-12-2016.pdf",
        "bytes": 457471,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-33-29-12-2016.pdf",
        "titleEn": "GB-33-29-12-2016"
      },
      {
        "id": "official-link-gb-34-19-01-2017-pdf-69695",
        "file": "GB-34-19-01-2017.pdf",
        "bytes": 69695,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-34-19-01-2017.pdf",
        "titleEn": "GB-34-19-01-2017"
      },
      {
        "id": "official-link-gb-35-18-02-2017-pdf-578365",
        "file": "GB-35-18-02-2017.pdf",
        "bytes": 578365,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-35-18-02-2017.pdf",
        "titleEn": "GB-35-18-02-2017"
      },
      {
        "id": "official-link-gb-36-27-02-2017-pdf-270455",
        "file": "GB-36-27-02-2017.pdf",
        "bytes": 270455,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-36-27-02-2017.pdf",
        "titleEn": "GB-36-27-02-2017"
      },
      {
        "id": "official-link-gb-37-17-3-2017-pdf-432920",
        "file": "GB-37-17-3-2017.pdf",
        "bytes": 432920,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-37-17-3-2017.pdf",
        "titleEn": "GB-37-17-3-2017"
      },
      {
        "id": "official-link-gb-42-20-5-2017-pdf-733687",
        "file": "GB-42-20-5-2017.pdf",
        "bytes": 733687,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-42-20-5-2017.pdf",
        "titleEn": "GB-42-20-5-2017"
      },
      {
        "id": "official-link-gb-43-a-20-6-2017-tahkub-pdf-70551",
        "file": "GB-43-a-20-6-2017-Tahkub.pdf",
        "bytes": 70551,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-43-a-20-6-2017-Tahkub.pdf",
        "titleEn": "GB-43-a-20-6-2017-Tahkub"
      },
      {
        "id": "official-link-gb-43-b-07-07-2017-sampann-pdf-404220",
        "file": "GB-43-b-07-07-2017-Sampann.pdf",
        "bytes": 404220,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-43-b-07-07-2017-Sampann.pdf",
        "titleEn": "GB-43-b-07-07-2017-Sampann"
      },
      {
        "id": "official-link-gb-46-19-8-2017-pdf-80215",
        "file": "GB-46-19-8-2017.pdf",
        "bytes": 80215,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-46-19-8-2017.pdf",
        "titleEn": "GB-46-19-8-2017"
      },
      {
        "id": "official-link-13-10-2016-gb-29-pdf-874955",
        "file": "13-10-2016--GB--29.pdf",
        "bytes": 874955,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13-10-2016--GB--29.pdf",
        "titleEn": "13-10-2016--GB--29"
      },
      {
        "id": "official-link-gb-38-20-4-2017-pdf-230333",
        "file": "GB-38-20-4-2017.pdf",
        "bytes": 230333,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-38-20-4-2017.pdf",
        "titleEn": "GB-38-20-4-2017"
      },
      {
        "id": "official-link-gb-39-29-04-2017-pdf-140364",
        "file": "GB-39-29-04-2017.pdf",
        "bytes": 140364,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-39-29-04-2017.pdf",
        "titleEn": "GB-39-29-04-2017"
      },
      {
        "id": "official-link-gb-41-12-05-2017-pdf-179059",
        "file": "GB-41-12-05-2017.pdf",
        "bytes": 179059,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-41-12-05-2017.pdf",
        "titleEn": "GB-41-12-05-2017"
      },
      {
        "id": "official-link-gb-47-19-9-2017-pdf-606401",
        "file": "GB-47-19-9-2017.pdf",
        "bytes": 606401,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-47-19-9-2017.pdf",
        "titleEn": "GB-47-19-9-2017"
      },
      {
        "id": "official-link-16-10-2017-48-gb-pdf-401683",
        "file": "16-10-2017-48-GB.pdf",
        "bytes": 401683,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-10-2017-48-GB.pdf",
        "titleEn": "16-10-2017-48-GB"
      },
      {
        "id": "official-link-gb-40-29-4-2017-buget-pdf-108316",
        "file": "GB-40-29-4-2017-Buget.pdf",
        "bytes": 108316,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-40-29-4-2017-Buget.pdf",
        "titleEn": "GB-40-29-4-2017-Buget"
      },
      {
        "id": "official-link-01-gb-29-10-2017-pdf-175098",
        "file": "01--GB--29.10.2017.pdf",
        "bytes": 175098,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/01--GB--29.10.2017.pdf",
        "titleEn": "01--GB--29.10.2017"
      },
      {
        "id": "official-link-02-gb-15-11-2017-pdf-636886",
        "file": "02--GB--15-11-2017.pdf",
        "bytes": 636886,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/02--GB--15-11-2017.pdf",
        "titleEn": "02--GB--15-11-2017"
      },
      {
        "id": "official-link-03-gb-18-12-2017-2-pdf-642700",
        "file": "03--GB---18-12-2017---2.pdf",
        "bytes": 642700,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/03--GB---18-12-2017---2.pdf",
        "titleEn": "03--GB---18-12-2017---2"
      },
      {
        "id": "official-link-05-gb-03-01-2018-pdf-87931",
        "file": "05--GB--03-01-2018.pdf",
        "bytes": 87931,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05--GB--03-01-2018.pdf",
        "titleEn": "05--GB--03-01-2018"
      },
      {
        "id": "official-link-05-gb-06-01-2018-pdf-193527",
        "file": "05--GB--06-01-2018.pdf",
        "bytes": 193527,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05--GB--06-01-2018.pdf",
        "titleEn": "05--GB--06-01-2018"
      },
      {
        "id": "official-link-04-gb-08-01-2018-pdf-296635",
        "file": "04--GB--08.01.2018.pdf",
        "bytes": 296635,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/04--GB--08.01.2018.pdf",
        "titleEn": "04--GB--08.01.2018"
      },
      {
        "id": "official-link-30-1-2018-gb-04-pdf-207035",
        "file": "30-1-2018-GB---04.pdf",
        "bytes": 207035,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/30-1-2018-GB---04.pdf",
        "titleEn": "30-1-2018-GB---04"
      },
      {
        "id": "official-link-07-gb-19-03-2018-pdf-510376",
        "file": "07--GB-19-03-2018.pdf",
        "bytes": 510376,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/07--GB-19-03-2018.pdf",
        "titleEn": "07--GB-19-03-2018"
      },
      {
        "id": "official-link-07-gb-15-2-2018-pdf-249523",
        "file": "07--GB--15-2-2018.pdf",
        "bytes": 249523,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/07--GB--15-2-2018.pdf",
        "titleEn": "07--GB--15-2-2018"
      },
      {
        "id": "official-link-08-gb-07-03-2018-pdf-201878",
        "file": "08--GB-07-03-2018.pdf",
        "bytes": 201878,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/08--GB-07-03-2018.pdf",
        "titleEn": "08--GB-07-03-2018"
      },
      {
        "id": "official-link-09-gb-19-3-2018-pdf-465369",
        "file": "09--GB--19-3-2018.pdf",
        "bytes": 465369,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/09--GB--19-3-2018.pdf",
        "titleEn": "09--GB--19-3-2018"
      },
      {
        "id": "official-link-16-4-2018-gb-10-pdf-343231",
        "file": "16-4-2018--GB-10.pdf",
        "bytes": 343231,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-4-2018--GB-10.pdf",
        "titleEn": "16-4-2018--GB-10"
      },
      {
        "id": "official-link-12-gb-26-4-2018-pdf-131531",
        "file": "12--GB-26-4-2018.pdf",
        "bytes": 131531,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12--GB-26-4-2018.pdf",
        "titleEn": "12--GB-26-4-2018"
      },
      {
        "id": "official-link-29-4-2018-11-gb-pdf-94730",
        "file": "29-4-2018--11-GB.pdf",
        "bytes": 94730,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/29-4-2018--11-GB.pdf",
        "titleEn": "29-4-2018--11-GB"
      },
      {
        "id": "official-link-13-gb-05-05-18-pdf-613800",
        "file": "13--GB--05-05-18.pdf",
        "bytes": 613800,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/13--GB--05-05-18.pdf",
        "titleEn": "13--GB--05-05-18"
      },
      {
        "id": "official-link-14-gb-23-5-2018-pdf-432257",
        "file": "14--GB--23-5-2018.pdf",
        "bytes": 432257,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/14--GB--23-5-2018.pdf",
        "titleEn": "14--GB--23-5-2018"
      },
      {
        "id": "official-link-20-6-2018-gb-15-pdf-243487",
        "file": "20-6-2018-GB-15.pdf",
        "bytes": 243487,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-6-2018-GB-15.pdf",
        "titleEn": "20-6-2018-GB-15"
      },
      {
        "id": "official-link-11-07-2018-gb-16-pdf-517270",
        "file": "11.07.2018--GB--16.pdf",
        "bytes": 517270,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11.07.2018--GB--16.pdf",
        "titleEn": "11.07.2018--GB--16"
      },
      {
        "id": "official-link-24-07-2018-gb-17-pdf-294140",
        "file": "24-07-2018--GB--17.pdf",
        "bytes": 294140,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/24-07-2018--GB--17.pdf",
        "titleEn": "24-07-2018--GB--17"
      },
      {
        "id": "official-link-6-8-2018-17-gb-pdf-107182",
        "file": "6-8-2018--17--GB.pdf",
        "bytes": 107182,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/6-8-2018--17--GB.pdf",
        "titleEn": "6-8-2018--17--GB"
      },
      {
        "id": "official-link-11-8-2018-gb-17-pdf-72495",
        "file": "11-8-2018--GB-17.pdf",
        "bytes": 72495,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-8-2018--GB-17.pdf",
        "titleEn": "11-8-2018--GB-17"
      },
      {
        "id": "official-link-17-8-18-gb-17-pdf-151320",
        "file": "17-8-18-GB-17.pdf",
        "bytes": 151320,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/17-8-18-GB-17.pdf",
        "titleEn": "17-8-18-GB-17"
      },
      {
        "id": "official-link-6-8-2018-gb-18-pdf-525836",
        "file": "6-8-2018-GB-18.pdf",
        "bytes": 525836,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/6-8-2018-GB-18.pdf",
        "titleEn": "6-8-2018-GB-18"
      },
      {
        "id": "official-link-20-10-2018-gb-20-pdf-456869",
        "file": "20-10-2018--GB-20.pdf",
        "bytes": 456869,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-10-2018--GB-20.pdf",
        "titleEn": "20-10-2018--GB-20"
      },
      {
        "id": "official-link-1-11-2018-gb-22-pdf-169512",
        "file": "1-11-2018--GB-22.pdf",
        "bytes": 169512,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/1-11-2018--GB-22.pdf",
        "titleEn": "1-11-2018--GB-22"
      },
      {
        "id": "official-link-11-12-2018-gb-23-pdf-690014",
        "file": "11-12-2018-GB-23.pdf",
        "bytes": 690014,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/11-12-2018-GB-23.pdf",
        "titleEn": "11-12-2018-GB-23"
      },
      {
        "id": "official-link-16-1-2019-gb-24-pdf-689013",
        "file": "16-1-2019--GB-24.pdf",
        "bytes": 689013,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/16-1-2019--GB-24.pdf",
        "titleEn": "16-1-2019--GB-24"
      },
      {
        "id": "official-link-21-1-2019-gb-23-pdf-165441",
        "file": "21-1-2019--GB-23.pdf",
        "bytes": 165441,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/21-1-2019--GB-23.pdf",
        "titleEn": "21-1-2019--GB-23"
      },
      {
        "id": "official-link-6-2-2019-gb-25-pdf-139088",
        "file": "6-2-2019--GB-25.pdf",
        "bytes": 139088,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/6-2-2019--GB-25.pdf",
        "titleEn": "6-2-2019--GB-25"
      },
      {
        "id": "official-link-12-2-2019-gb-25-pdf-913409",
        "file": "12-2-2019-GB-25.pdf",
        "bytes": 913409,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-2-2019-GB-25.pdf",
        "titleEn": "12-2-2019-GB-25"
      },
      {
        "id": "official-link-12-2-2019-gb-23-pdf-183156",
        "file": "12-2-2019-GB-23.pdf",
        "bytes": 183156,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/12-2-2019-GB-23.pdf",
        "titleEn": "12-2-2019-GB-23"
      },
      {
        "id": "official-link-22-02-2019-gb-26-pdf-488016",
        "file": "22.02.2019-GB-26.pdf",
        "bytes": 488016,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/22.02.2019-GB-26.pdf",
        "titleEn": "22.02.2019-GB-26"
      },
      {
        "id": "official-link-20-3-2019-gb-28-pdf-64863",
        "file": "20-3-2019-GB-28.pdf",
        "bytes": 64863,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-3-2019-GB-28.pdf",
        "titleEn": "20-3-2019-GB-28"
      },
      {
        "id": "official-link-26-4-2019-gb-29-pdf-92887",
        "file": "26-4-2019-GB-29.pdf",
        "bytes": 92887,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/26-4-2019-GB-29.pdf",
        "titleEn": "26-4-2019-GB-29"
      },
      {
        "id": "official-link-20-4-2019-gb-30-pdf-57437",
        "file": "20-4-2019-GB--30.pdf",
        "bytes": 57437,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/20-4-2019-GB--30.pdf",
        "titleEn": "20-4-2019-GB--30"
      },
      {
        "id": "official-link-15-05-2018-31-gb-pdf-60646",
        "file": "15.05-2018-31--GB.pdf",
        "bytes": 60646,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/15.05-2018-31--GB.pdf",
        "titleEn": "15.05-2018-31--GB"
      },
      {
        "id": "official-link-9-8-2019-gb-34-pdf-69544",
        "file": "9-8-2019-GB-34.pdf",
        "bytes": 69544,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/9-8-2019-GB-34.pdf",
        "titleEn": "9-8-2019-GB-34"
      },
      {
        "id": "official-link-18-07-2019-32-gb-pdf-269477",
        "file": "18.07.2019--32--GB.pdf",
        "bytes": 269477,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/18.07.2019--32--GB.pdf",
        "titleEn": "18.07.2019--32--GB"
      },
      {
        "id": "official-link-05-10-2019-gb-36-pdf-84761",
        "file": "05.10.2019-GB--36.pdf",
        "bytes": 84761,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/05.10.2019-GB--36.pdf",
        "titleEn": "05.10.2019-GB--36"
      },
      {
        "id": "official-link-gb-28-02-2019-27-pdf-381870",
        "file": "GB--28.02.2019--27.pdf",
        "bytes": 381870,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB--28.02.2019--27.pdf",
        "titleEn": "GB--28.02.2019--27"
      },
      {
        "id": "official-link-30-11-2016-gb-31-pdf-526712",
        "file": "30-11-2016--GB--31.pdf",
        "bytes": 526712,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/30-11-2016--GB--31.pdf",
        "titleEn": "30-11-2016--GB--31"
      },
      {
        "id": "official-link-gb-44-20-7-2017-sabha-pdf-572179",
        "file": "GB-44-20-7-2017-Sabha.pdf",
        "bytes": 572179,
        "externalUrl": "https://chhsambhajinagarmc.org/assets/300/2022/08/generalbodymeeting/GB-44-20-7-2017-Sabha.pdf",
        "titleEn": "GB-44-20-7-2017-Sabha"
      }
    ]
  }
];

/** One copy of each tender-folder PDF. Identical files (same SHA-256) are listed once. */
export const tenderArchiveGroups: TenderArchiveGroup[] = [
  {
    "folder": [
      "Municipal Document Repository",
      "Tenders",
      "tender-notice-2025"
    ],
    "headingEn": "Tender notices 2025",
    "headingMr": "निविदा सूचना 2025",
    "documents": [
      {
        "id": "tender-tender-notice-2025-1-swiming-pool-software-darpatrak-pdf",
        "file": "1_Swiming_Pool_software_Darpatrak.pdf",
        "bytes": 651131,
        "titleEn": "1 Swiming Pool software Darpatrak"
      },
      {
        "id": "tender-tender-notice-2025-2-maharana-pratap-jayant-darpatrak-pdf",
        "file": "2_Maharana_Pratap_Jayant_Darpatrak.pdf",
        "bytes": 462377,
        "titleEn": "2 Maharana Pratap Jayant Darpatrak"
      },
      {
        "id": "tender-tender-notice-2025-bhandar-1-pdf",
        "file": "Bhandar-1.pdf",
        "bytes": 638816,
        "titleEn": "Bhandar-1"
      },
      {
        "id": "tender-tender-notice-2025-bhandar-3-pdf",
        "file": "Bhandar-3.pdf",
        "bytes": 495828,
        "titleEn": "Bhandar-3"
      },
      {
        "id": "tender-tender-notice-2025-bhandr-2-pdf",
        "file": "bhandr-2.pdf",
        "bytes": 1043779,
        "titleEn": "bhandr-2"
      },
      {
        "id": "tender-tender-notice-2025-chh-shivaji-maharaj-puran-vastu-sanghralay-darpatrk-suchna-pdf",
        "file": "Chh_Shivaji_Maharaj_Puran_Vastu_Sanghralay_Darpatrk_Suchna.pdf",
        "bytes": 589366,
        "titleEn": "Chh Shivaji Maharaj Puran Vastu Sanghralay Darpatrk Suchna"
      },
      {
        "id": "tender-tender-notice-2025-city-engineer-dept-394-dt-03-02-2025-pdf",
        "file": "City_Engineer_Dept__394_dt_03_02_2025.pdf",
        "bytes": 701398,
        "titleEn": "City Engineer Dept 394 dt 03 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-cultural-31-dt-27-08-2026-pdf",
        "file": "Cultural_31_dt_27_08_2026.pdf",
        "bytes": 1172039,
        "titleEn": "Cultural 31 dt 27 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-cultural-310-dt-27-08-2026-pdf",
        "file": "Cultural_310_Dt_27_08_2026.pdf",
        "bytes": 1018271,
        "titleEn": "Cultural 310 Dt 27 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-cultural-312-dt-27-08-2026-pdf",
        "file": "Cultural_312_dt_27_08_2026.pdf",
        "bytes": 873418,
        "titleEn": "Cultural 312 dt 27 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-cultural-313-dt-27-08-2026-pdf",
        "file": "Cultural_313_Dt__27_08_2026.pdf",
        "bytes": 664894,
        "titleEn": "Cultural 313 Dt 27 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-cultural-dept-286-dt-05-08-2026-pdf",
        "file": "Cultural_Dept_286_dt_05_08_2026.pdf",
        "bytes": 1076610,
        "titleEn": "Cultural Dept 286 dt 05 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-cultural-dept-287-dt-05-08-2026-pdf",
        "file": "Cultural_Dept_287_dt_05_08_2026.pdf",
        "bytes": 1076616,
        "titleEn": "Cultural Dept 287 dt 05 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-105-dt-24-07-2026-pdf",
        "file": "E-Tender_105_Dt_24_07_2026.pdf",
        "bytes": 572311,
        "titleEn": "E-Tender 105 Dt 24 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-106-dt-30-07-2026-pdf",
        "file": "E-Tender_106_Dt_30_07_2026.pdf",
        "bytes": 816135,
        "titleEn": "E-Tender 106 Dt 30 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-109-dt-16-07-2025-pdf",
        "file": "E-Tender_109_dt_16_07_2025.pdf",
        "bytes": 414059,
        "titleEn": "E-Tender 109 dt 16 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-124-dt-21-07-2025-pdf",
        "file": "E-Tender_124_dt_21_07_2025.pdf",
        "bytes": 551444,
        "titleEn": "E-Tender 124 dt 21 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-131-dt-12-08-2026-pdf",
        "file": "E-Tender_131_Dt_12_08_2026.pdf",
        "bytes": 759690,
        "titleEn": "E-Tender 131 Dt 12 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-131-dt-20-08-2026-pdf",
        "file": "E-Tender_131_dt_20_08_2026.pdf",
        "bytes": 744419,
        "titleEn": "E-Tender 131 dt 20 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-132-dt-27-08-2026-pdf",
        "file": "E-Tender_132_dt__27_08_2026.pdf",
        "bytes": 1201843,
        "titleEn": "E-Tender 132 dt 27 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-133-dt-27-08-2026-pdf",
        "file": "E-Tender_133_dt_27_08_2026.pdf",
        "bytes": 835096,
        "titleEn": "E-Tender 133 dt 27 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-136-dt-07-08-2026-pdf",
        "file": "E-Tender_136_dt__07_08_2026.pdf",
        "bytes": 506664,
        "titleEn": "E-Tender 136 dt 07 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-136-dt-05-09-2026-pdf",
        "file": "E-Tender_136_Dt_05_09_2026.pdf",
        "bytes": 504359,
        "titleEn": "E-Tender 136 Dt 05 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-137-dt-08-09-2026-pdf",
        "file": "E-Tender_137_dt_08_09_2026.pdf",
        "bytes": 2072548,
        "titleEn": "E-Tender 137 dt 08 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-138dt-09-09-2026-pdf",
        "file": "E-Tender_138Dt_09_09_2026.pdf",
        "bytes": 761121,
        "titleEn": "E-Tender 138Dt 09 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-141-dt-18-09-2026-pdf",
        "file": "E-Tender_141_dt_18_09_2026.pdf",
        "bytes": 1366423,
        "titleEn": "E-Tender 141 dt 18 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-148-dt-29-07-2025-pdf",
        "file": "E-Tender_148_dt__29_07_2025.pdf",
        "bytes": 422015,
        "titleEn": "E-Tender 148 dt 29 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-165-dt-04-08-2025-pdf",
        "file": "E-Tender_165_dt_04_08_2025.pdf",
        "bytes": 151966,
        "titleEn": "E-Tender 165 dt 04 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-1679-dt-21-07-2025-pdf",
        "file": "E-Tender_1679_dt_21_07_2025.pdf",
        "bytes": 2312887,
        "titleEn": "E-Tender 1679 dt 21 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-20-dt-20-04-2026-pdf",
        "file": "E-Tender_20_dt_20_04_2026.pdf",
        "bytes": 274847,
        "titleEn": "E-Tender 20 dt 20 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-214-dt-20-08-2025-pdf",
        "file": "E-Tender_214_dt_20_08_2025.pdf",
        "bytes": 621912,
        "titleEn": "E-Tender 214 dt 20 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-220-dt-22-08-2025-pdf",
        "file": "E-Tender_220_dt_22_08_2025.pdf",
        "bytes": 538759,
        "titleEn": "E-Tender 220 dt 22 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-227-dt-26-08-2025-pdf",
        "file": "E-Tender_227_dt_26_08_2025.pdf",
        "bytes": 443340,
        "titleEn": "E-Tender 227 dt 26 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-236-dt-03-09-2025-pdf",
        "file": "E-Tender_236_dt_03_09_2025.pdf",
        "bytes": 480375,
        "titleEn": "E-Tender 236 dt 03 09 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-242-dt-04-09-2025-pdf",
        "file": "E-Tender_242_dt_04_09_2025.pdf",
        "bytes": 494193,
        "titleEn": "E-Tender 242 dt 04 09 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-246-dt-12-09-2025-pdf",
        "file": "E-Tender_246_dt_12_09_2025.pdf",
        "bytes": 743059,
        "titleEn": "E-Tender 246 dt 12 09 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-256-dt-18-09-2025-pdf",
        "file": "E-Tender_256_dt_18_09_2025.pdf",
        "bytes": 1037981,
        "titleEn": "E-Tender 256 dt 18 09 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-29-dt-27-04-2026-pdf",
        "file": "E-Tender_29_dt_27_04_2026.pdf",
        "bytes": 224352,
        "titleEn": "E-Tender 29 dt 27 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-362-dt-07-11-2025-pdf",
        "file": "E-Tender_362_dt_07_11_2025.pdf",
        "bytes": 731180,
        "titleEn": "E-Tender 362 dt 07 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-378-dt-14-11-2025-pdf",
        "file": "E-Tender_378_dt_14_11_2025.pdf",
        "bytes": 617426,
        "titleEn": "E-Tender 378 dt 14 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-413-dt-20-11-2025-pdf",
        "file": "E-Tender_413_dt_20_11_2025.pdf",
        "bytes": 504653,
        "titleEn": "E-Tender 413 dt 20 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-431-dt-28-11-2025-pdf",
        "file": "E-Tender_431_dt_28_11_2025.pdf",
        "bytes": 510009,
        "titleEn": "E-Tender 431 dt 28 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-439-dt-02-12-2025-pdf",
        "file": "E-Tender_439_dt_02_12_2025.pdf",
        "bytes": 434561,
        "titleEn": "E-Tender 439 dt 02 12 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-444-dt-03-01-2025-pdf",
        "file": "E-Tender_444_dt_03_01_2025.pdf",
        "bytes": 140498,
        "titleEn": "E-Tender 444 dt 03 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-463-dt-14-01-2025-pdf",
        "file": "E-Tender_463_dt_14_01_2025.pdf",
        "bytes": 834945,
        "titleEn": "E-Tender 463 dt 14 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-471-dt-24-01-2025-pdf",
        "file": "E-Tender_471_dt_24_01_2025.pdf",
        "bytes": 675977,
        "titleEn": "E-Tender 471 dt 24 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-485-dt-03-02-2025-pdf",
        "file": "E-Tender_485_dt_03_02_2025.pdf",
        "bytes": 507020,
        "titleEn": "E-Tender 485 dt 03 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-493-dt-06-02-2025-pdf",
        "file": "E-Tender_493_dt_06_02_2025.pdf",
        "bytes": 439915,
        "titleEn": "E-Tender 493 dt 06 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-516-dt-14-02-2025-pdf",
        "file": "E-Tender_516_dt_14_02_2025.pdf",
        "bytes": 777725,
        "titleEn": "E-Tender 516 dt 14 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-539-dt-27-02-2026-pdf",
        "file": "E-Tender_539_dt_27_02_2026.pdf",
        "bytes": 533153,
        "titleEn": "E-Tender 539 dt 27 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-541-dt-05-03-2025-pdf",
        "file": "E-Tender_541_dt_05_03_2025.pdf",
        "bytes": 685100,
        "titleEn": "E-Tender 541 dt 05 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-546-06-03-2026-pdf",
        "file": "E-Tender_546_06_03_2026.pdf",
        "bytes": 172603,
        "titleEn": "E-Tender 546 06 03 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-561-dt-18-03-2025-pdf",
        "file": "E-Tender_561_dt__18_03_2025.pdf",
        "bytes": 495465,
        "titleEn": "E-Tender 561 dt 18 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-57-dt-03-06-2025-pdf",
        "file": "E-Tender_57_dt_03_06_2025.pdf",
        "bytes": 255119,
        "titleEn": "E-Tender 57 dt 03 06 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-76-dt-10-07-2026-pdf",
        "file": "E-Tender_76_dt_10_07_2026.pdf",
        "bytes": 583965,
        "titleEn": "E-Tender 76 dt 10 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-78-dt-20-06-2025-pdf",
        "file": "E-Tender_78_dt_20_06_2025.pdf",
        "bytes": 156296,
        "titleEn": "E-Tender 78 dt 20 06 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-79-dt-24-06-2025-pdf",
        "file": "E-Tender_79_dt__24_06_2025.pdf",
        "bytes": 601394,
        "titleEn": "E-Tender 79 dt 24 06 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-89-dt-17-07-2026-pdf",
        "file": "E-Tender_89_dt_17_07_2026.pdf",
        "bytes": 884126,
        "titleEn": "E-Tender 89 dt 17 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-92-dt-03-07-2025-pdf",
        "file": "E-Tender_92_dt_03_07_2025.pdf",
        "bytes": 634989,
        "titleEn": "E-Tender 92 dt 03 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-94-dt-07-07-2025-pdf",
        "file": "E-Tender_94_dt_07_07_2025.pdf",
        "bytes": 321674,
        "titleEn": "E-Tender 94 dt 07 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-e-tender-98-dt-23-07-2026-pdf",
        "file": "E-Tender_98_dt_23_07_2026.pdf",
        "bytes": 802137,
        "titleEn": "E-Tender 98 dt 23 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-ee-road-letter-02-pdf",
        "file": "EE_Road_Letter_02.pdf",
        "bytes": 402415,
        "titleEn": "EE Road Letter 02"
      },
      {
        "id": "tender-tender-notice-2025-executive-engineer-136-dt-17-02-2025-pdf",
        "file": "Executive_Engineer_136_dt__17_02_2025.pdf",
        "bytes": 526506,
        "titleEn": "Executive Engineer 136 dt 17 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-garden-251-dt-14-07-2026-pdf",
        "file": "Garden_251_Dt_14_07_2026.pdf",
        "bytes": 428760,
        "titleEn": "Garden 251 Dt 14 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-garden-311-dt-29-07-2026-pdf",
        "file": "GARDEN_311_Dt_29_07_2026.pdf",
        "bytes": 369152,
        "titleEn": "GARDEN 311 Dt 29 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-garden-478-dt-11-09-2026-pdf",
        "file": "Garden_478_dt_11_09_2026.pdf",
        "bytes": 313822,
        "titleEn": "Garden 478 dt 11 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-garden-479-dt-11-09-2026-pdf",
        "file": "Garden_479_dt_11_09_2026.pdf",
        "bytes": 414144,
        "titleEn": "Garden 479 dt 11 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-garden-715-dt-14-12-2025-pdf",
        "file": "Garden_715_dt_14_12_2025.pdf",
        "bytes": 728941,
        "titleEn": "Garden 715 dt 14 12 2025"
      },
      {
        "id": "tender-tender-notice-2025-garden-716-dt-06-01-2025-pdf",
        "file": "Garden_716_dt_06_01_2025.pdf",
        "bytes": 1231409,
        "titleEn": "Garden 716 dt 06 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-garden-797-dt-27-01-2026-pdf",
        "file": "Garden_797_dt_27_01_2026.pdf",
        "bytes": 751760,
        "titleEn": "Garden 797 dt 27 01 2026"
      },
      {
        "id": "tender-tender-notice-2025-garden-824-dt-05-02-2026-pdf",
        "file": "Garden_824_dt_05_02_2026.pdf",
        "bytes": 279761,
        "titleEn": "Garden 824 dt 05 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-garden-lilav-14-07-2026-pdf",
        "file": "Garden_Lilav-14_07_2026.pdf",
        "bytes": 463707,
        "titleEn": "Garden Lilav-14 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-003-dt-01-01-2025-pdf",
        "file": "Health_003_dt__01_01_2025.pdf",
        "bytes": 2382147,
        "titleEn": "Health 003 dt 01 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-15-dt-08-04-2026-pdf",
        "file": "Health_15_dt_08_04_2026.pdf",
        "bytes": 853193,
        "titleEn": "Health 15 dt 08 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-1576-dt-07-07-2025-pdf",
        "file": "Health_1576_dt_07_07_2025.pdf",
        "bytes": 540709,
        "titleEn": "Health 1576 dt 07 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-1645-dt-14-07-20252-pdf",
        "file": "Health_1645_dt_14_07_20252.pdf",
        "bytes": 2723701,
        "titleEn": "Health 1645 dt 14 07 20252"
      },
      {
        "id": "tender-tender-notice-2025-health-1727-dt-24-07-2025-pdf",
        "file": "Health_1727_dt_24_07_2025.pdf",
        "bytes": 4013779,
        "titleEn": "Health 1727 dt 24 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-1753-dt-29-07-2025-pdf",
        "file": "Health_1753_dt_29_07_2025.pdf",
        "bytes": 762779,
        "titleEn": "Health 1753 dt 29 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-1754-dt-30-07-2025-pdf",
        "file": "Health_1754_dt_30_07_2025.pdf",
        "bytes": 2192845,
        "titleEn": "Health 1754 dt 30 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-179-dt-18-06-2026-pdf",
        "file": "Health_179_dt_18_06_2026.pdf",
        "bytes": 756796,
        "titleEn": "Health 179 dt 18 06 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-180-dt-09-01-2025-pdf",
        "file": "Health_180_dt_09_01_2025.pdf",
        "bytes": 641638,
        "titleEn": "Health 180 dt 09 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-190-dt-15-01-2025-pdf",
        "file": "Health_190_dt_15_01_2025.pdf",
        "bytes": 804423,
        "titleEn": "Health 190 dt 15 01 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-1927-dt-18-08-2028-pdf",
        "file": "Health_1927_dt_18_08_2028.pdf",
        "bytes": 2518542,
        "titleEn": "Health 1927 dt 18 08 2028"
      },
      {
        "id": "tender-tender-notice-2025-health-2212-dt-07-09-2026-pdf",
        "file": "Health_2212_Dt_07_09_2026.pdf",
        "bytes": 727991,
        "titleEn": "Health 2212 Dt 07 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-265-dt-14-02-2025-pdf",
        "file": "Health_265_dt_14_02_2025.pdf",
        "bytes": 1102336,
        "titleEn": "Health 265 dt 14 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-2763-dt-27-11-2025-pdf",
        "file": "Health_2763_dt_27_11_2025.pdf",
        "bytes": 676215,
        "titleEn": "Health 2763 dt 27 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-2917-dt-12-12-2025-pdf",
        "file": "Health_2917_dt_12_12_2025.pdf",
        "bytes": 5144484,
        "titleEn": "Health 2917 dt 12 12 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-293-dt-28-02-2025-pdf",
        "file": "Health_293_dt_28_02_2025.pdf",
        "bytes": 1065730,
        "titleEn": "Health 293 dt 28 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-307-dr-21-07-2025-pdf",
        "file": "Health_307_dr_21_07_2025.pdf",
        "bytes": 291513,
        "titleEn": "Health 307 dr 21 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-315-dt-12-02-2026-pdf",
        "file": "Health_315_dt_12_02_2026.pdf",
        "bytes": 2046098,
        "titleEn": "Health 315 dt 12 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-337-dt-20-07-2026-pdf",
        "file": "Health_337_dt_20_07_2026.pdf",
        "bytes": 523081,
        "titleEn": "Health 337 dt 20 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-350-dt-09-02-2026-pdf",
        "file": "Health_350_dt_09_02_2026.pdf",
        "bytes": 675445,
        "titleEn": "Health 350 dt 09 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-350-dt-28-07-2026-pdf",
        "file": "Health_350_dt_28_07_2026.pdf",
        "bytes": 5557158,
        "titleEn": "Health 350 dt 28 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-373-dt-25-08-2025-pdf",
        "file": "Health_373_dt_25_08_2025.pdf",
        "bytes": 731678,
        "titleEn": "Health 373 dt 25 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-374-dt-25-08-2025-pdf",
        "file": "Health_374_dt_25_08_2025.pdf",
        "bytes": 1230471,
        "titleEn": "Health 374 dt 25 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-422-dt-20-02-2026-pdf",
        "file": "Health_422_dt_20_02_2026.pdf",
        "bytes": 645384,
        "titleEn": "Health 422 dt 20 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-485-dt-27-02-2026-pdf",
        "file": "Health_485_dt_27_02_2026.pdf",
        "bytes": 1130643,
        "titleEn": "Health 485 dt 27 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-50-dt-23-04-20261-pdf",
        "file": "Health_50_dt_23_04_20261.pdf",
        "bytes": 586021,
        "titleEn": "Health 50 dt 23 04 20261"
      },
      {
        "id": "tender-tender-notice-2025-health-521-07-03-2025-pdf",
        "file": "Health_521_07_03_2025.pdf",
        "bytes": 2005009,
        "titleEn": "Health 521 07 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-523-07-03-2025-pdf",
        "file": "Health_523_07_03_2025.pdf",
        "bytes": 3377451,
        "titleEn": "Health 523 07 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-574-dt-13-03-2025-pdf",
        "file": "Health_574_dt_13_03_2025.pdf",
        "bytes": 1886433,
        "titleEn": "Health 574 dt 13 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-675-dt-29-03-2025-pdf",
        "file": "Health_675_dt_29_03_2025.pdf",
        "bytes": 964346,
        "titleEn": "Health 675 dt 29 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-68-dt-24-03-2025-pdf",
        "file": "Health_68_dt_24_03_2025.pdf",
        "bytes": 947677,
        "titleEn": "Health 68 dt 24 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-701-dt-25-03-2025-pdf",
        "file": "Health_701_dt__25_03_2025.pdf",
        "bytes": 3925198,
        "titleEn": "Health 701 dt 25 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-730-dt-26-03-2025-pdf",
        "file": "Health_730_dt_26_03_2025.pdf",
        "bytes": 1411881,
        "titleEn": "Health 730 dt 26 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-health-796-dt-07-04-2026-pdf",
        "file": "Health_796_dt_07_04_2026.pdf",
        "bytes": 3230663,
        "titleEn": "Health 796 dt 07 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-817-dt-29-01-2026-pdf",
        "file": "Health_817_dt_29_01_2026.pdf",
        "bytes": 644383,
        "titleEn": "Health 817 dt 29 01 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-894-dt-23-02-2026-pdf",
        "file": "Health_894_dt_23_02_2026.pdf",
        "bytes": 6194392,
        "titleEn": "Health 894 dt 23 02 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-926-04-03-2026-pdf",
        "file": "Health_926_04_03_2026.pdf",
        "bytes": 199062,
        "titleEn": "Health 926 04 03 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-nuhm-233-dt-09-07-2026-pdf",
        "file": "Health_NUHM_233_Dt_09_07_2026.pdf",
        "bytes": 1090089,
        "titleEn": "Health NUHM 233 Dt 09 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-nuhm-325-dt-15-07-2026-pdf",
        "file": "Health_NUHM_325_Dt_15_07_2026.pdf",
        "bytes": 872455,
        "titleEn": "Health NUHM 325 Dt 15 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-health-pcpndt-2543-dt-30-10-2025-pdf",
        "file": "Health_PCPNDT_2543_dt__30_10_2025.pdf",
        "bytes": 2320392,
        "titleEn": "Health PCPNDT 2543 dt 30 10 2025"
      },
      {
        "id": "tender-tender-notice-2025-krida-sahitya-darpatrak-pdf",
        "file": "krida_sahitya_darpatrak.pdf",
        "bytes": 999100,
        "titleEn": "krida sahitya darpatrak"
      },
      {
        "id": "tender-tender-notice-2025-nit-11-09-2026-pdf",
        "file": "NIT-11_09_2026.pdf",
        "bytes": 1422093,
        "titleEn": "NIT-11 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-quotation-notice-disaster-managemen-unit-csmc-pdf",
        "file": "Quotation_Notice_Disaster_Managemen_Unit_CSMC.pdf",
        "bytes": 211691,
        "titleEn": "Quotation Notice Disaster Managemen Unit CSMC"
      },
      {
        "id": "tender-tender-notice-2025-siddhart-jaltaran-talaw-pdf",
        "file": "siddhart_jaltaran_talaw.pdf",
        "bytes": 1364555,
        "titleEn": "siddhart jaltaran talaw"
      },
      {
        "id": "tender-tender-notice-2025-sidharth-jaltaran-pdf",
        "file": "sidharth_jaltaran.pdf",
        "bytes": 648808,
        "titleEn": "sidharth jaltaran"
      },
      {
        "id": "tender-tender-notice-2025-sport-64-dt-06-7-2026-pdf",
        "file": "Sport_64_Dt_06_7_2026.pdf",
        "bytes": 987198,
        "titleEn": "Sport 64 Dt 06 7 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-01-dt-04-04-2026-pdf",
        "file": "Store_01_Dt_04_04_2026.pdf",
        "bytes": 407232,
        "titleEn": "Store 01 Dt 04 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-02-dt-08-04-2026-pdf",
        "file": "Store_02_Dt_08_04_2026.pdf",
        "bytes": 151343,
        "titleEn": "Store 02 Dt 08 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-03-dt-08-04-2026-pdf",
        "file": "Store_03_dt_08_04_2026.pdf",
        "bytes": 534276,
        "titleEn": "Store 03 dt 08 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-04-dt-08-04-2026-pdf",
        "file": "Store_04_dt_08_04_2026.pdf",
        "bytes": 565137,
        "titleEn": "Store 04 dt 08 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-06-dt-21-04-2026-pdf",
        "file": "Store_06_dt_21_04_2026.pdf",
        "bytes": 5574946,
        "titleEn": "Store 06 dt 21 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-07-dt-21-04-2026-pdf",
        "file": "Store_07_dt_21_04_2026.pdf",
        "bytes": 644139,
        "titleEn": "Store 07 dt 21 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-08-dt-21-04-2026-pdf",
        "file": "Store_08_dt_21_04_2026.pdf",
        "bytes": 624275,
        "titleEn": "Store 08 dt 21 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-09-dt-22-04-2026-pdf",
        "file": "Store_09_dt_22_04_2026.pdf",
        "bytes": 641828,
        "titleEn": "Store 09 dt 22 04 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-126-dt-27-02-2025-pdf",
        "file": "Store_126_dt_27_02_2025.pdf",
        "bytes": 520677,
        "titleEn": "Store 126 dt 27 02 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-136-dt-07-03-2025-pdf",
        "file": "Store_136_dt_07_03_2025.pdf",
        "bytes": 512948,
        "titleEn": "Store 136 dt 07 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-14-dt-13-05-2026-pdf",
        "file": "Store_14_dt_13_05_2026.pdf",
        "bytes": 503168,
        "titleEn": "Store 14 dt 13 05 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-140-dt-12-03-2025-pdf",
        "file": "Store_140_dt_12_03_2025.pdf",
        "bytes": 682132,
        "titleEn": "Store 140 dt 12 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-145-dt-25-03-2025-pdf",
        "file": "Store_145_dt_25_03_2025.pdf",
        "bytes": 387340,
        "titleEn": "Store 145 dt 25 03 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-15-dt-28-05-2025-pdf",
        "file": "Store_15_dt_28_05_2025.pdf",
        "bytes": 122173,
        "titleEn": "Store 15 dt 28 05 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-20-dt-19-06-2025-pdf",
        "file": "store_20_dt_19_06_2025.pdf",
        "bytes": 286545,
        "titleEn": "store 20 dt 19 06 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-29-dt-06-07-2026-pdf",
        "file": "Store_29_Dt_06_07_2026.pdf",
        "bytes": 2065437,
        "titleEn": "Store 29 Dt 06 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-29-dt-23-07-2025-pdf",
        "file": "Store_29_dt_23_07_2025.pdf",
        "bytes": 914178,
        "titleEn": "Store 29 dt 23 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-30-dt-23-07-2025-pdf",
        "file": "Store_30_dt__23_07_2025.pdf",
        "bytes": 914178,
        "titleEn": "Store 30 dt 23 07 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-31-dt-06-07-2026-pdf",
        "file": "Store_31_Dt_06_07_2026.pdf",
        "bytes": 790731,
        "titleEn": "Store 31 Dt 06 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-32-dt-06-07-2026-pdf",
        "file": "Store_32_Dt_06_07_2026.pdf",
        "bytes": 577521,
        "titleEn": "Store 32 Dt 06 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-32-dt-19-08-2025-pdf",
        "file": "Store_32_dt_19_08_2025.pdf",
        "bytes": 587920,
        "titleEn": "Store 32 dt 19 08 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-34-dt-07-07-2026-pdf",
        "file": "Store_34_dt_07_07_2026.pdf",
        "bytes": 375182,
        "titleEn": "Store 34 dt 07 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-35-dt-09-07-2026-pdf",
        "file": "Store_35_dt_09_07_2026.pdf",
        "bytes": 704152,
        "titleEn": "Store 35 dt 09 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-38-dt-10-07-2026-pdf",
        "file": "Store_38_Dt_10_07_2026.pdf",
        "bytes": 288712,
        "titleEn": "Store 38 Dt 10 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-42-dt-08-10-2025-pdf",
        "file": "Store_42_dt_08_10_2025.pdf",
        "bytes": 530252,
        "titleEn": "Store 42 dt 08 10 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-43-dt-09-10-2025-pdf",
        "file": "Store_43_dt_09_10_2025.pdf",
        "bytes": 1901618,
        "titleEn": "Store 43 dt 09 10 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-44-dt-20-07-2026-pdf",
        "file": "Store_44_dt__20_07_2026.pdf",
        "bytes": 713237,
        "titleEn": "Store 44 dt 20 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-44-dt-14-10-2025-pdf",
        "file": "Store_44_dt_14_10_2025.pdf",
        "bytes": 1345824,
        "titleEn": "Store 44 dt 14 10 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-45-dt-21-07-2026-pdf",
        "file": "Store_45_dt_21_07_2026.pdf",
        "bytes": 753500,
        "titleEn": "Store 45 dt 21 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-49-dt-24-07-2026-pdf",
        "file": "Store_49_Dt_24_07_2026.pdf",
        "bytes": 732765,
        "titleEn": "Store 49 Dt 24 07 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-50-dt-24-7-2026-pdf",
        "file": "Store_50_Dt_24_7_2026.pdf",
        "bytes": 578633,
        "titleEn": "Store 50 Dt 24 7 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-51-dt-29-10-2025-pdf",
        "file": "Store_51_dt_29_10_2025.pdf",
        "bytes": 1027875,
        "titleEn": "Store 51 dt 29 10 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-51-dt-30-10-2025-pdf",
        "file": "Store_51_dt_30_10_2025.pdf",
        "bytes": 562280,
        "titleEn": "Store 51 dt 30 10 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-55-dt-04-11-2025-pdf",
        "file": "Store_55_dt_04_11_2025.pdf",
        "bytes": 646748,
        "titleEn": "Store 55 dt 04 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-59-dt-17-08-2026-pdf",
        "file": "Store_59_dt_17_08_2026.pdf",
        "bytes": 647341,
        "titleEn": "Store 59 dt 17 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-61-dt-20-11-2025-pdf",
        "file": "Store_61_dt_20_11_2025.pdf",
        "bytes": 2354089,
        "titleEn": "Store 61 dt 20 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-65-dt-01-09-2026-pdf",
        "file": "Store_65_dt_01_09_2026.pdf",
        "bytes": 585697,
        "titleEn": "Store 65 dt 01 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-65-dt-24-11-2025-pdf",
        "file": "Store_65_dt_24_11_2025.pdf",
        "bytes": 1938673,
        "titleEn": "Store 65 dt 24 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-66-dt-25-11-2025-pdf",
        "file": "Store_66_dt_25_11_2025.pdf",
        "bytes": 2895841,
        "titleEn": "Store 66 dt 25 11 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-68-dt-10-09-2026-pdf",
        "file": "Store_68_dt_10_09_2026.pdf",
        "bytes": 901167,
        "titleEn": "Store 68 dt 10 09 2026"
      },
      {
        "id": "tender-tender-notice-2025-store-69-dt-05-12-2025-pdf",
        "file": "Store_69_dt_05_12_2025.pdf",
        "bytes": 811095,
        "titleEn": "Store 69 dt 05 12 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-72-dt-09-12-2025-pdf",
        "file": "Store_72_dt_09_12_2025.pdf",
        "bytes": 545290,
        "titleEn": "Store 72 dt 09 12 2025"
      },
      {
        "id": "tender-tender-notice-2025-store-75-dt-12-12-2025-pdf",
        "file": "Store_75_dt_12_12_2025.pdf",
        "bytes": 778407,
        "titleEn": "Store 75 dt 12 12 2025"
      },
      {
        "id": "tender-tender-notice-2025-swimming-53-dt-25-06-2026-pdf",
        "file": "Swimming_53_dt_25_06_2026.pdf",
        "bytes": 533294,
        "titleEn": "Swimming 53 dt 25 06 2026"
      },
      {
        "id": "tender-tender-notice-2025-swimming-pool-28-dt-22-05-2026-pdf",
        "file": "Swimming_Pool_28_dt_22_05_2026.pdf",
        "bytes": 772854,
        "titleEn": "Swimming Pool 28 dt 22 05 2026"
      },
      {
        "id": "tender-tender-notice-2025-swimming-pool-software-pdf",
        "file": "swimming_pool_software.pdf",
        "bytes": 582319,
        "titleEn": "swimming pool software"
      },
      {
        "id": "tender-tender-notice-2025-syp-cough-mixture-tender-notice-pdf",
        "file": "Syp_Cough_Mixture_Tender_Notice.pdf",
        "bytes": 902210,
        "titleEn": "Syp Cough Mixture Tender Notice"
      },
      {
        "id": "tender-tender-notice-2025-tourism-104-dt-19-08-2026-pdf",
        "file": "Tourism_104_dt_19_08_2026.pdf",
        "bytes": 226813,
        "titleEn": "Tourism 104 dt 19 08 2026"
      },
      {
        "id": "tender-tender-notice-2025-tourism-84-dt-23-07-2026-pdf",
        "file": "Tourism_84_Dt_23_07_2026.pdf",
        "bytes": 473040,
        "titleEn": "Tourism 84 Dt 23 07 2026"
      }
    ]
  },
  {
    "folder": [
      "Municipal Document Repository",
      "Tenders",
      "tender-notice-2024"
    ],
    "headingEn": "Tender notices 2024",
    "headingMr": "निविदा सूचना 2024",
    "documents": [
      {
        "id": "tender-tender-notice-2024-dmc-6-15-dt-07-03-2024-pdf",
        "file": "DMC-6_15_dt__07_03_2024.pdf",
        "bytes": 51436,
        "titleEn": "DMC-6 15 dt 07 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-dmc-6-16-dt-08-03-2024-pdf",
        "file": "DMC-6_16_DT_08_03_2024.pdf",
        "bytes": 52027,
        "titleEn": "DMC-6 16 DT 08 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-07-dt-21-06-2024-pdf",
        "file": "E-Tender_07_dt__21_06_2024.pdf",
        "bytes": 232696,
        "titleEn": "E-Tender 07 dt 21 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-107-dt-07-08-2024-pdf",
        "file": "E-Tender_107_dt_07_08_2024.pdf",
        "bytes": 197961,
        "titleEn": "E-Tender 107 dt 07 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-110-dt-09-08-2024-pdf",
        "file": "E-Tender_110_dt__09_08_2024.pdf",
        "bytes": 237715,
        "titleEn": "E-Tender 110 dt 09 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-125-dt-16-08-2024-pdf",
        "file": "E-Tender_125_dt_16_08_2024.pdf",
        "bytes": 645284,
        "titleEn": "E-Tender 125 dt 16 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-1323-dt-15-01-2024-pdf",
        "file": "E-Tender_1323_dt__15_01_2024.pdf",
        "bytes": 35886,
        "titleEn": "E-Tender 1323 dt 15 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-1332-dt-19-01-2024-pdf",
        "file": "E-Tender_1332_dt__19_01_2024.pdf",
        "bytes": 58585,
        "titleEn": "E-Tender 1332 dt 19 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-1379-dt-16-02-2024-pdf",
        "file": "E-Tender_1379_dt__16_02_2024.pdf",
        "bytes": 56204,
        "titleEn": "E-Tender 1379 dt 16 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-1383-dt-17-02-2024-pdf",
        "file": "E-Tender_1383_dt__17_02_2024.pdf",
        "bytes": 58859,
        "titleEn": "E-Tender 1383 dt 17 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-1392-dt-26-02-2024-pdf",
        "file": "E-Tender_1392_dt__26_02_2024.pdf",
        "bytes": 69385,
        "titleEn": "E-Tender 1392 dt 26 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-1403-dt-01-03-2024-pdf",
        "file": "E-Tender_1403_dt__01_03_2024.pdf",
        "bytes": 89945,
        "titleEn": "E-Tender 1403 dt 01 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-168-dt-30-08-2024-pdf",
        "file": "E-Tender_168_dt_30_08_2024.pdf",
        "bytes": 441136,
        "titleEn": "E-Tender 168 dt 30 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-17-dt-28-06-2024-pdf",
        "file": "E-Tender_17_dt__28_06_2024.pdf",
        "bytes": 1917182,
        "titleEn": "E-Tender 17 dt 28 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-180-dt-06-09-2024-pdf",
        "file": "E-Tender_180_dt__06_09_2024.pdf",
        "bytes": 1371415,
        "titleEn": "E-Tender 180 dt 06 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-206-dt-24-09-2024-pdf",
        "file": "E-Tender_206_dt_24_09_2024.pdf",
        "bytes": 319899,
        "titleEn": "E-Tender 206 dt 24 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-302-dt-01-10-2024-pdf",
        "file": "E-Tender_302_dt_01_10_2024.pdf",
        "bytes": 230503,
        "titleEn": "E-Tender 302 dt 01 10 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-335-dt-08-10-2024-pdf",
        "file": "E-Tender_335_dt_08_10_2024.pdf",
        "bytes": 1484583,
        "titleEn": "E-Tender 335 dt 08 10 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-340-dt-09-10-2024-pdf",
        "file": "E-Tender_340_dt__09_10_2024.pdf",
        "bytes": 353484,
        "titleEn": "E-Tender 340 dt 09 10 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-36-dt-09-07-2024-pdf",
        "file": "E-Tender_36_dt_09_07_2024.pdf",
        "bytes": 131455,
        "titleEn": "E-Tender 36 dt 09 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-377-dt-04-12-2024-pdf",
        "file": "E-Tender_377_dt_04_12_2024.pdf",
        "bytes": 588762,
        "titleEn": "E-Tender 377 dt 04 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-428-dt-26-12-2024-pdf",
        "file": "E-Tender_428_dt_26_12_2024.pdf",
        "bytes": 463142,
        "titleEn": "E-Tender 428 dt 26 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-45-dt-17-07-2024-pdf",
        "file": "E-Tender_45_dt__17_07_2024.pdf",
        "bytes": 479558,
        "titleEn": "E-Tender 45 dt 17 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-53-dt-09-09-2024-pdf",
        "file": "E-Tender_53_dt_09_09_2024.pdf",
        "bytes": 148577,
        "titleEn": "E-Tender 53 dt 09 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-65-dt-26-07-2024-pdf",
        "file": "E-Tender_65_dt_26_07_2024.pdf",
        "bytes": 264328,
        "titleEn": "E-Tender 65 dt 26 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-e-tender-95-dt-02-08-2024-pdf",
        "file": "E-Tender_95_dt__02_08_2024.pdf",
        "bytes": 722903,
        "titleEn": "E-Tender 95 dt 02 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-ee-mech-135-dt-24-07-2024-pdf",
        "file": "EE_Mech__135_dt_24_07_2024.pdf",
        "bytes": 926485,
        "titleEn": "EE Mech 135 dt 24 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-ee-road-117-dt-26-11-2024-pdf",
        "file": "EE_Road_117_dt_26_11_2024.pdf",
        "bytes": 247501,
        "titleEn": "EE Road 117 dt 26 11 2024"
      },
      {
        "id": "tender-tender-notice-2024-executive-engineer-mechanical-pdf",
        "file": "Executive_Engineer_Mechanical.pdf",
        "bytes": 1696068,
        "titleEn": "Executive Engineer Mechanical"
      },
      {
        "id": "tender-tender-notice-2024-garden-1099-dt-25-01-2024-pdf",
        "file": "Garden_1099_dt__25_01_2024.pdf",
        "bytes": 499271,
        "titleEn": "Garden 1099 dt 25 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-120-dt-12-01-2024-pdf",
        "file": "Health_120_dt__12_01_2024.pdf",
        "bytes": 70972,
        "titleEn": "Health 120 dt 12 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-183-dt-23-01-2024-pdf",
        "file": "Health_183_dt__23_01_2024.pdf",
        "bytes": 66420,
        "titleEn": "Health 183 dt 23 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-1909-dt-23-07-2024-pdf",
        "file": "Health_1909_dt_23_07_2024.pdf",
        "bytes": 719116,
        "titleEn": "Health 1909 dt 23 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-1911-dt-23-07-2024-pdf",
        "file": "Health_1911_dt__23_07_2024.pdf",
        "bytes": 700637,
        "titleEn": "Health 1911 dt 23 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-221-dt-25-01-2024-pdf",
        "file": "Health_221_dt__25_01_2024.pdf",
        "bytes": 425460,
        "titleEn": "Health 221 dt 25 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-229-dt-19-06-2024-pdf",
        "file": "Health_229_dt__19_06_2024.pdf",
        "bytes": 600687,
        "titleEn": "Health 229 dt 19 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-230-dt-19-06-2024-pdf",
        "file": "Health_230_dt_19_06_2024.pdf",
        "bytes": 598891,
        "titleEn": "Health 230 dt 19 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2427-d-t-26-08-2024-pdf",
        "file": "health_2427_d_t_26_08_2024.pdf",
        "bytes": 278028,
        "titleEn": "health 2427 d t 26 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2430-d-t-26-08-2024-pdf",
        "file": "health_2430_d_t_26_08_2024.pdf",
        "bytes": 278169,
        "titleEn": "health 2430 d t 26 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2446-d-t-27-08-2024-pdf",
        "file": "health_2446_d_t_27_08_2024.pdf",
        "bytes": 679149,
        "titleEn": "health 2446 d t 27 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2628-dt-18-09-2024-pdf",
        "file": "Health_2628_dt_18_09_2024.pdf",
        "bytes": 881046,
        "titleEn": "Health 2628 dt 18 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2684-dt-25-09-2024-pdf",
        "file": "Health_2684_dt_25_09_2024.pdf",
        "bytes": 359739,
        "titleEn": "Health 2684 dt 25 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2746-dt-30-09-2024-pdf",
        "file": "Health_2746_dt_30_09_2024.pdf",
        "bytes": 2988466,
        "titleEn": "Health 2746 dt 30 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2765-dt-01-10-2024-pdf",
        "file": "Health_2765_dt_01_10_2024.pdf",
        "bytes": 1385383,
        "titleEn": "Health 2765 dt 01 10 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-281-dt-02-02-2024-pdf",
        "file": "Health_281_dt__02_02_2024.pdf",
        "bytes": 81622,
        "titleEn": "Health 281 dt 02 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2858-dt-09-10-2024-pdf",
        "file": "Health_2858_dt_09_10_2024.pdf",
        "bytes": 1168740,
        "titleEn": "Health 2858 dt 09 10 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-2921-dt-14-10-2024-pdf",
        "file": "Health_2921_dt_14_10_2024.pdf",
        "bytes": 2538073,
        "titleEn": "Health 2921 dt 14 10 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-3272-dt-03-12-2024-pdf",
        "file": "Health_3272_dt_03_12_2024.pdf",
        "bytes": 733446,
        "titleEn": "Health 3272 dt 03 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-3280-dt-03-12-2024-pdf",
        "file": "Health_3280_dt_03_12_2024.pdf",
        "bytes": 1505094,
        "titleEn": "Health 3280 dt 03 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-3404-dt-26-12-2024-pdf",
        "file": "Health_3404_dt_26_12_2024.pdf",
        "bytes": 710422,
        "titleEn": "Health 3404 dt 26 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-378-12-02-2024-pdf",
        "file": "Health_378_12_02_2024.pdf",
        "bytes": 1843080,
        "titleEn": "Health 378 12 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-461-dt-20-02-2024-pdf",
        "file": "Health_461_dt__20_02_2024.pdf",
        "bytes": 6546251,
        "titleEn": "Health 461 dt 20 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-464-dt-20-02-2024-pdf",
        "file": "Health_464_dt__20_02_2024.pdf",
        "bytes": 461160,
        "titleEn": "Health 464 dt 20 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-580-dt-04-03-2024-pdf",
        "file": "Health_580_dt_04_03_2024.pdf",
        "bytes": 78426,
        "titleEn": "Health 580 dt 04 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-81-07-03-2024-pdf",
        "file": "Health_81_07_03_2024.pdf",
        "bytes": 1431954,
        "titleEn": "Health 81 07 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-health-84-dt-09-01-2024-pdf",
        "file": "Health_84_dt__09_01_2024.pdf",
        "bytes": 438254,
        "titleEn": "Health 84 dt 09 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-health168-d-t-19-01-2024-pdf",
        "file": "health168_d_t__19_01_2024.pdf",
        "bytes": 441069,
        "titleEn": "health168 d t 19 01 2024"
      },
      {
        "id": "tender-tender-notice-2024-heath-628-dt-11-03-2024-pdf",
        "file": "Heath_628_dt_11_03_2024.pdf",
        "bytes": 423352,
        "titleEn": "Heath 628 dt 11 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-shuddhipatrak-health-1947-dt-29-07-2024-pdf",
        "file": "Shuddhipatrak_Health_1947_dt_29_07_2024.pdf",
        "bytes": 394190,
        "titleEn": "Shuddhipatrak Health 1947 dt 29 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-105-dt-14-02-2024-pdf",
        "file": "Store_105_dt__14_02_2024.pdf",
        "bytes": 47848,
        "titleEn": "Store 105 dt 14 02 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-105-dt-31-12-2024-pdf",
        "file": "Store_105_dt_31_12_2024.pdf",
        "bytes": 276360,
        "titleEn": "Store 105 dt 31 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-17-dt-07-06-2024-pdf",
        "file": "Store_17_dt_07_06_2024.pdf",
        "bytes": 651864,
        "titleEn": "Store 17 dt 07 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-18-dt-07-06-2024-pdf",
        "file": "Store_18_dt_07_06_2024.pdf",
        "bytes": 652417,
        "titleEn": "Store 18 dt 07 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-21-dt-18-06-2024-pdf",
        "file": "Store_21_dt__18_06_2024.pdf",
        "bytes": 759620,
        "titleEn": "Store 21 dt 18 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-22-dt-25-06-2024-pdf",
        "file": "Store_22_dt__25_06_2024.pdf",
        "bytes": 915539,
        "titleEn": "Store 22 dt 25 06 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-28-dt-04-07-2024-pdf",
        "file": "Store_28_dt_04_07_2024.pdf",
        "bytes": 1268006,
        "titleEn": "Store 28 dt 04 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-32-dt-08-07-2024-pdf",
        "file": "Store_32_dt__08_07_2024.pdf",
        "bytes": 540054,
        "titleEn": "Store 32 dt 08 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-37-dt-22-07-2024-pdf",
        "file": "Store_37_dt_22_07_2024.pdf",
        "bytes": 519634,
        "titleEn": "Store 37 dt 22 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-39-dt-26-07-2024-pdf",
        "file": "Store_39_dt_26_07_2024.pdf",
        "bytes": 384613,
        "titleEn": "Store 39 dt 26 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-42-dt-31-07-2024-pdf",
        "file": "store_42_dt_31_07_2024.pdf",
        "bytes": 475708,
        "titleEn": "store 42 dt 31 07 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-46-dt-05-08-2024-pdf",
        "file": "Store_46_dt_05_08_2024.pdf",
        "bytes": 271505,
        "titleEn": "Store 46 dt 05 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-47-dt-09-08-2024-pdf",
        "file": "Store_47_dt_09_08_2024.pdf",
        "bytes": 852329,
        "titleEn": "Store 47 dt 09 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-48-dt-09-08-2024-pdf",
        "file": "Store_48_dt_09_08_2024.pdf",
        "bytes": 572889,
        "titleEn": "Store 48 dt 09 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-49-dt-09-08-2024-pdf",
        "file": "Store_49_dt_09_08_2024.pdf",
        "bytes": 956613,
        "titleEn": "Store 49 dt 09 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-51-dt-21-08-2024-pdf",
        "file": "Store_51__dt_21_08_2024.pdf",
        "bytes": 1167626,
        "titleEn": "Store 51 dt 21 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-52-d-t-27-08-2024-pdf",
        "file": "STORE_52_D_T_27_08_2024.pdf",
        "bytes": 143980,
        "titleEn": "STORE 52 D T 27 08 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-57-dt-24-09-2024-pdf",
        "file": "Store_57_dt_24_09_2024.pdf",
        "bytes": 353133,
        "titleEn": "Store 57 dt 24 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-62-dt-28-09-2024-pdf",
        "file": "Store_62_dt_28_09_2024.pdf",
        "bytes": 539819,
        "titleEn": "Store 62 dt 28 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-63-dt-28-09-2024-pdf",
        "file": "Store_63_dt_28_09_2024.pdf",
        "bytes": 3253312,
        "titleEn": "Store 63 dt 28 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-64-dt-28-09-2024-pdf",
        "file": "Store_64_dt_28_09_2024.pdf",
        "bytes": 580840,
        "titleEn": "Store 64 dt 28 09 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-89-dt-02-12-2024-pdf",
        "file": "Store_89_dt_02_12_2024.pdf",
        "bytes": 556415,
        "titleEn": "Store 89 dt 02 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-store-98-dt-16-12-2024-pdf",
        "file": "Store_98_dt_16_12_2024.pdf",
        "bytes": 250984,
        "titleEn": "Store 98 dt 16 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-swamming-pool-18-dt-15-03-2024-pdf",
        "file": "Swamming_pool_18_dt_15_03_2024.pdf",
        "bytes": 164603,
        "titleEn": "Swamming pool 18 dt 15 03 2024"
      },
      {
        "id": "tender-tender-notice-2024-swiming-107-dt-11-12-2024-pdf",
        "file": "swiming_107_dt_11_12_2024.pdf",
        "bytes": 433086,
        "titleEn": "swiming 107 dt 11 12 2024"
      },
      {
        "id": "tender-tender-notice-2024-swimming-pool-80-dt-18-09-2024-pdf",
        "file": "Swimming_pool_80_dt_18_09_2024.pdf",
        "bytes": 222840,
        "titleEn": "Swimming pool 80 dt 18 09 2024"
      }
    ]
  },
  {
    "folder": [
      "Municipal Document Repository",
      "Tenders",
      "tender 2023"
    ],
    "headingEn": "Tender notices 2023",
    "headingMr": "निविदा सूचना 2023",
    "documents": [
      {
        "id": "tender-tender-2023-container-library-pdf",
        "file": "container_library.pdf",
        "bytes": 1061214,
        "titleEn": "container library"
      },
      {
        "id": "tender-tender-2023-cremetorium-pdf",
        "file": "cremetorium.pdf",
        "bytes": 2133282,
        "titleEn": "cremetorium"
      },
      {
        "id": "tender-tender-2023-e-tender-10199-dt-13-10-2023-pdf",
        "file": "E-Tender_10199_dt__13_10_2023.pdf",
        "bytes": 57775,
        "titleEn": "E-Tender 10199 dt 13 10 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1047-dt-27-09-2023-pdf",
        "file": "E-Tender_1047_dt__27_09_2023.pdf",
        "bytes": 53292,
        "titleEn": "E-Tender 1047 dt 27 09 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1074-dt-06-10-2023-pdf",
        "file": "E-Tender_1074_dt_06_10_2023.pdf",
        "bytes": 63553,
        "titleEn": "E-Tender 1074 dt 06 10 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1111-dt-17-10-2023-pdf",
        "file": "E-Tender_1111_dt__17_10_2023.pdf",
        "bytes": 57763,
        "titleEn": "E-Tender 1111 dt 17 10 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1153-dt-31-10-2023-pdf",
        "file": "E-Tender_1153_dt__31_10_2023.pdf",
        "bytes": 45679,
        "titleEn": "E-Tender 1153 dt 31 10 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1171-dt-03-11-2023-pdf",
        "file": "E-Tender_1171_dt__03_11_2023.pdf",
        "bytes": 55126,
        "titleEn": "E-Tender 1171 dt 03 11 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1189-dt-09-11-2023-pdf",
        "file": "E-Tender_1189_dt_09_11_2023.pdf",
        "bytes": 50486,
        "titleEn": "E-Tender 1189 dt 09 11 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1191-dt-17-11-2023-pdf",
        "file": "E-Tender_1191_dt__17_11_2023.pdf",
        "bytes": 54410,
        "titleEn": "E-Tender 1191 dt 17 11 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1208-dt-24-11-2023-pdf",
        "file": "E-Tender_1208_dt__24_11_2023.pdf",
        "bytes": 25919,
        "titleEn": "E-Tender 1208 dt 24 11 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-1259-dt-15-12-2023-pdf",
        "file": "E-Tender_1259_dt__15_12_2023.pdf",
        "bytes": 38827,
        "titleEn": "E-Tender 1259 dt 15 12 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-794-dt-11-08-2023-pdf",
        "file": "E-Tender_794_dt__11_08_2023.pdf",
        "bytes": 63381,
        "titleEn": "E-Tender 794 dt 11 08 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-806-dt-14-08-2023-pdf",
        "file": "E-Tender_806_dt_14_08_2023.pdf",
        "bytes": 865777,
        "titleEn": "E-Tender 806 dt 14 08 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-873-dt-23-08-2023-pdf",
        "file": "E-Tender_873_dt__23_08_2023.pdf",
        "bytes": 59797,
        "titleEn": "E-Tender 873 dt 23 08 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-903-dt-29-08-2023-pdf",
        "file": "E-Tender_903_dt__29_08_2023.pdf",
        "bytes": 47156,
        "titleEn": "E-Tender 903 dt 29 08 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-962-dt-08-09-2023-pdf",
        "file": "E-Tender_962_dt__08_09_2023.pdf",
        "bytes": 64872,
        "titleEn": "E-Tender 962 dt 08 09 2023"
      },
      {
        "id": "tender-tender-2023-e-tender-995-dt-14-09-2023-pdf",
        "file": "E-Tender_995_dt__14_09_2023.pdf",
        "bytes": 44795,
        "titleEn": "E-Tender 995 dt 14 09 2023"
      },
      {
        "id": "tender-tender-2023-ee-roads-44-dt-04-09-2023-pdf",
        "file": "EE_Roads_44_dt_04_09_2023.pdf",
        "bytes": 284557,
        "titleEn": "EE Roads 44 dt 04 09 2023"
      },
      {
        "id": "tender-tender-2023-ee-roads-45-dt-04-09-2023-pdf",
        "file": "EE_Roads_45_dt_04_09_2023.pdf",
        "bytes": 313605,
        "titleEn": "EE Roads 45 dt 04 09 2023"
      },
      {
        "id": "tender-tender-2023-ee-roads-46-dt-04-09-2023-pdf",
        "file": "EE_Roads_46_dt_04_09_2023_.pdf",
        "bytes": 308755,
        "titleEn": "EE Roads 46 dt 04 09 2023"
      },
      {
        "id": "tender-tender-2023-expression-of-interest-vehicle-track-1-pdf",
        "file": "Expression_of_Interest_vehicle_track-1.pdf",
        "bytes": 150294,
        "titleEn": "Expression of Interest vehicle track-1"
      },
      {
        "id": "tender-tender-2023-garden-696-dt-31-08-2023-pdf",
        "file": "Garden_696_dt__31_08_2023_.pdf",
        "bytes": 792165,
        "titleEn": "Garden 696 dt 31 08 2023"
      },
      {
        "id": "tender-tender-2023-garden-697-dt-31-08-2023-pdf",
        "file": "Garden_697_dt__31_08_2023.pdf",
        "bytes": 797583,
        "titleEn": "Garden 697 dt 31 08 2023"
      },
      {
        "id": "tender-tender-2023-health-1993-dt-17-082023-pdf",
        "file": "Health_1993_dt_17_082023.pdf",
        "bytes": 1164057,
        "titleEn": "Health 1993 dt 17 082023"
      },
      {
        "id": "tender-tender-2023-health-2082date30-08-2023-pdf",
        "file": "Health_2082date30_08_2023.pdf",
        "bytes": 70542,
        "titleEn": "Health 2082date30 08 2023"
      },
      {
        "id": "tender-tender-2023-health-2321-dt-26-09-2023-pdf",
        "file": "Health_2321_dt__26_09_2023.pdf",
        "bytes": 135526,
        "titleEn": "Health 2321 dt 26 09 2023"
      },
      {
        "id": "tender-tender-2023-health-2323-dt-26-09-2023-pdf",
        "file": "Health_2323_dt__26_09_2023.pdf",
        "bytes": 142473,
        "titleEn": "Health 2323 dt 26 09 2023"
      },
      {
        "id": "tender-tender-2023-health-2332-dt-27-09-2023-pdf",
        "file": "Health_2332_dt__27_09_2023.pdf",
        "bytes": 151447,
        "titleEn": "Health 2332 dt 27 09 2023"
      },
      {
        "id": "tender-tender-2023-health-2413-dt-10-10-2023-pdf",
        "file": "Health_2413_dt__10_10_2023.pdf",
        "bytes": 51962,
        "titleEn": "Health 2413 dt 10 10 2023"
      },
      {
        "id": "tender-tender-2023-health-2824-dt-05-12-2023-pdf",
        "file": "Health_2824_dt_05_12_2023.pdf",
        "bytes": 1609458,
        "titleEn": "Health 2824 dt 05 12 2023"
      },
      {
        "id": "tender-tender-2023-health-2846-dt-07-12-2023-pdf",
        "file": "Health_2846_dt__07_12_2023.pdf",
        "bytes": 74852,
        "titleEn": "Health 2846 dt 07 12 2023"
      },
      {
        "id": "tender-tender-2023-health-425-dt-22-08-2023-pdf",
        "file": "Health_425_dt__22_08_2023.pdf",
        "bytes": 60101,
        "titleEn": "Health 425 dt 22 08 2023"
      },
      {
        "id": "tender-tender-2023-health-469-dt-20-09-2023-pdf",
        "file": "Health_469_dt__20_09_2023.pdf",
        "bytes": 52474,
        "titleEn": "Health 469 dt 20 09 2023"
      },
      {
        "id": "tender-tender-2023-health-540-dt-16-11-2023-pdf",
        "file": "Health_540_dt__16_11_2023.pdf",
        "bytes": 54960,
        "titleEn": "Health 540 dt 16 11 2023"
      },
      {
        "id": "tender-tender-2023-sport-215-dt-08-08-2023-pdf",
        "file": "Sport_215_dt__08_08_2023.pdf",
        "bytes": 212080,
        "titleEn": "Sport 215 dt 08 08 2023"
      },
      {
        "id": "tender-tender-2023-sport-268-dt-15-09-2023-pdf",
        "file": "Sport_268_dt__15_09_2023.pdf",
        "bytes": 291072,
        "titleEn": "Sport 268 dt 15 09 2023"
      },
      {
        "id": "tender-tender-2023-store-47-dt-05-09-2023-pdf",
        "file": "Store_47_dt__05_09_2023.pdf",
        "bytes": 49661,
        "titleEn": "Store 47 dt 05 09 2023"
      },
      {
        "id": "tender-tender-2023-store-48-dt-05-09-2023-pdf",
        "file": "Store_48_dt__05_09_2023.pdf",
        "bytes": 45170,
        "titleEn": "Store 48 dt 05 09 2023"
      },
      {
        "id": "tender-tender-2023-store-50-dt-07-09-2023-pdf",
        "file": "store_50_dt_07_09__2023.pdf",
        "bytes": 240224,
        "titleEn": "store 50 dt 07 09 2023"
      },
      {
        "id": "tender-tender-2023-store-58-dt-26-09-2023-pdf",
        "file": "Store_58_dt__26_09_2023.pdf",
        "bytes": 49081,
        "titleEn": "Store 58 dt 26 09 2023"
      },
      {
        "id": "tender-tender-2023-store-62-dt-06-10-2023-pdf",
        "file": "Store_62_dt__06_10_2023.pdf",
        "bytes": 48185,
        "titleEn": "Store 62 dt 06 10 2023"
      },
      {
        "id": "tender-tender-2023-store-63-dt-06-10-203-pdf",
        "file": "Store_63_dt__06_10_203.pdf",
        "bytes": 48854,
        "titleEn": "Store 63 dt 06 10 203"
      },
      {
        "id": "tender-tender-2023-store-65-dt-11-10-2023-pdf",
        "file": "Store_65_dt__11_10_2023.pdf",
        "bytes": 47773,
        "titleEn": "Store 65 dt 11 10 2023"
      },
      {
        "id": "tender-tender-2023-store-69-dt-23-10-2023-pdf",
        "file": "Store_69_dt__23_10_2023.pdf",
        "bytes": 275873,
        "titleEn": "Store 69 dt 23 10 2023"
      },
      {
        "id": "tender-tender-2023-store-72-dt-16-11-2023-pdf",
        "file": "Store_72_dt__16_11_2023.pdf",
        "bytes": 43988,
        "titleEn": "Store 72 dt 16 11 2023"
      },
      {
        "id": "tender-tender-2023-store-78-dt-24-11-2023-pdf",
        "file": "Store_78_dt__24_11_2023.pdf",
        "bytes": 47403,
        "titleEn": "Store 78 dt 24 11 2023"
      },
      {
        "id": "tender-tender-2023-store-82-dt-13-12-2023-pdf",
        "file": "Store_82_dt__13_12_2023.pdf",
        "bytes": 45709,
        "titleEn": "Store 82 dt 13 12 2023"
      },
      {
        "id": "tender-tender-2023-store-83-dt-13-12-2023-pdf",
        "file": "Store_83_dt__13_12_2023.pdf",
        "bytes": 50584,
        "titleEn": "Store 83 dt 13 12 2023"
      },
      {
        "id": "tender-tender-2023-store-84-dt-15-12-2023-pdf",
        "file": "Store_84_dt__15_12_2023.pdf",
        "bytes": 54856,
        "titleEn": "Store 84 dt 15 12 2023"
      },
      {
        "id": "tender-tender-2023-store-87-dt-01-01-2024-pdf",
        "file": "Store_87_dt__01_01_2024.pdf",
        "bytes": 44343,
        "titleEn": "Store 87 dt 01 01 2024"
      },
      {
        "id": "tender-tender-2023-sudharna-patrak-01-dt-05-09-2023-pdf",
        "file": "Sudharna_Patrak_01_dt__05_09_2023.pdf",
        "bytes": 502227,
        "titleEn": "Sudharna Patrak 01 dt 05 09 2023"
      },
      {
        "id": "tender-tender-2023-sudharna-patrak-02-dt-05-09-2023-pdf",
        "file": "Sudharna_Patrak_02_dt__05_09_2023.pdf",
        "bytes": 441771,
        "titleEn": "Sudharna Patrak 02 dt 05 09 2023"
      },
      {
        "id": "tender-tender-2023-sudharna-patrak-03-dt-05-09-2023-pdf",
        "file": "Sudharna_Patrak_03_dt__05_09_2023.pdf",
        "bytes": 467547,
        "titleEn": "Sudharna Patrak 03 dt 05 09 2023"
      },
      {
        "id": "tender-tender-2023-swm-426-dt-07-09-2023-pdf",
        "file": "swm_426_dt_07_09_2023.pdf",
        "bytes": 1615890,
        "titleEn": "swm 426 dt 07 09 2023"
      },
      {
        "id": "tender-tender-2023-swm-482-dt-04-10-2023-pdf",
        "file": "SWM_482_DT__04_10_2023.pdf",
        "bytes": 250659,
        "titleEn": "SWM 482 DT 04 10 2023"
      },
      {
        "id": "tender-tender-2023-swm-dt-26-09-2023-pdf",
        "file": "SWM_dt_26_09_2023.pdf",
        "bytes": 1297186,
        "titleEn": "SWM dt 26 09 2023"
      }
    ]
  },
  {
    "folder": [
      "Municipal Document Repository",
      "Tenders",
      "2022"
    ],
    "headingEn": "Tender notices 2022",
    "headingMr": "निविदा सूचना 2022",
    "documents": [
      {
        "id": "tender-2022-ce-305-dt-15-12-2022-pdf",
        "file": "CE_305_dt__15_12_2022.pdf",
        "bytes": 186515,
        "titleEn": "CE 305 dt 15 12 2022"
      },
      {
        "id": "tender-2022-dy-engr-zone-07-101-dt-28-06-2022-pdf",
        "file": "Dy_Engr_Zone_07_101_dt__28_06_2022.pdf",
        "bytes": 42355,
        "titleEn": "Dy Engr Zone 07 101 dt 28 06 2022"
      },
      {
        "id": "tender-2022-e-tender-12-dt-11-01-2022-pdf",
        "file": "E-Tender_12_dt__11_01_2022.pdf",
        "bytes": 22847,
        "titleEn": "E-Tender 12 dt 11 01 2022"
      },
      {
        "id": "tender-2022-e-tender-132-dt-07-04-2022-pdf",
        "file": "E-Tender_132_dt__07_04_2022.pdf",
        "bytes": 44762,
        "titleEn": "E-Tender 132 dt 07 04 2022"
      },
      {
        "id": "tender-2022-e-tender-141-dt-13-4-2202-pdf",
        "file": "E-Tender_141_dt__13_4_2202.pdf",
        "bytes": 34341,
        "titleEn": "E-Tender 141 dt 13 4 2202"
      },
      {
        "id": "tender-2022-e-tender-153-dt-06-05-2022-pdf",
        "file": "E-Tender_153_dt__06_05_2022.pdf",
        "bytes": 25138,
        "titleEn": "E-Tender 153 dt 06 05 2022"
      },
      {
        "id": "tender-2022-e-tender-157-dt-12-05-2022-pdf",
        "file": "E-Tender_157_dt__12_05_2022.pdf",
        "bytes": 36225,
        "titleEn": "E-Tender 157 dt 12 05 2022"
      },
      {
        "id": "tender-2022-e-tender-157-dt-22-02-2022-pdf",
        "file": "E-Tender_157_dt__22_02_2022.pdf",
        "bytes": 47804,
        "titleEn": "E-Tender 157 dt 22 02 2022"
      },
      {
        "id": "tender-2022-e-tender-161-dt-20-05-2022-pdf",
        "file": "E-Tender_161_dt__20_05_2022.pdf",
        "bytes": 63639,
        "titleEn": "E-Tender 161 dt 20 05 2022"
      },
      {
        "id": "tender-2022-e-tender-170-dt-27-05-2022-pdf",
        "file": "E-Tender_170_dt__27_05_2022.pdf",
        "bytes": 34932,
        "titleEn": "E-Tender 170 dt 27 05 2022"
      },
      {
        "id": "tender-2022-e-tender-179-dt-03-06-2022-pdf",
        "file": "E-Tender_179_dt__03_06_2022.pdf",
        "bytes": 44167,
        "titleEn": "E-Tender 179 dt 03 06 2022"
      },
      {
        "id": "tender-2022-e-tender-187-dt-14-06-2022-pdf",
        "file": "E-Tender_187_dt__14_06_2022.pdf",
        "bytes": 46089,
        "titleEn": "E-Tender 187 dt 14 06 2022"
      },
      {
        "id": "tender-2022-e-tender-19-dt-14-01-2022-pdf",
        "file": "E-Tender_19_dt__14_01_2022.pdf",
        "bytes": 65610,
        "titleEn": "E-Tender 19 dt 14 01 2022"
      },
      {
        "id": "tender-2022-e-tender-194-dt-17-06-2022-pdf",
        "file": "E-Tender_194_dt__17_06_2022.pdf",
        "bytes": 31535,
        "titleEn": "E-Tender 194 dt 17 06 2022"
      },
      {
        "id": "tender-2022-e-tender-208-dt-24-06-2022-pdf",
        "file": "E-Tender_208_dt__24_06_2022.pdf",
        "bytes": 81522,
        "titleEn": "E-Tender 208 dt 24 06 2022"
      },
      {
        "id": "tender-2022-e-tender-209-dt-27-06-2022-pdf",
        "file": "E-Tender_209_dt__27_06_2022.pdf",
        "bytes": 35818,
        "titleEn": "E-Tender 209 dt 27 06 2022"
      },
      {
        "id": "tender-2022-e-tender-217-dt-01-07-2022-pdf",
        "file": "E-Tender_217_dt__01_07_2022.pdf",
        "bytes": 102829,
        "titleEn": "E-Tender 217 dt 01 07 2022"
      },
      {
        "id": "tender-2022-e-tender-226-dt-05-07-2022-pdf",
        "file": "E-Tender_226_dt__05_07_2022.pdf",
        "bytes": 51321,
        "titleEn": "E-Tender 226 dt 05 07 2022"
      },
      {
        "id": "tender-2022-e-tender-230-dt-28-01-2022-pdf",
        "file": "E-Tender_230_dt__28_01_2022.pdf",
        "bytes": 33088,
        "titleEn": "E-Tender 230 dt 28 01 2022"
      },
      {
        "id": "tender-2022-e-tender-232-dt-08-07-2022-pdf",
        "file": "E-Tender_232_dt__08_07_2022.pdf",
        "bytes": 47968,
        "titleEn": "E-Tender 232 dt 08 07 2022"
      },
      {
        "id": "tender-2022-e-tender-234-dt-12-07-2022-pdf",
        "file": "E-Tender_234_dt__12_07_2022.pdf",
        "bytes": 40747,
        "titleEn": "E-Tender 234 dt 12 07 2022"
      },
      {
        "id": "tender-2022-e-tender-242-dt-15-07-2022-pdf",
        "file": "E-Tender_242_dt__15_07_2022.pdf",
        "bytes": 76836,
        "titleEn": "E-Tender 242 dt 15 07 2022"
      },
      {
        "id": "tender-2022-e-tender-249-dt-19-07-2022-pdf",
        "file": "E-Tender_249_dt__19_07_2022.pdf",
        "bytes": 62439,
        "titleEn": "E-Tender 249 dt 19 07 2022"
      },
      {
        "id": "tender-2022-e-tender-262-dt-22-07-2022-pdf",
        "file": "E-Tender_262_dt__22_07_2022.pdf",
        "bytes": 63700,
        "titleEn": "E-Tender 262 dt 22 07 2022"
      },
      {
        "id": "tender-2022-e-tender-271-dt-26-07-2022-pdf",
        "file": "E-Tender_271_dt__26_07_2022.pdf",
        "bytes": 87465,
        "titleEn": "E-Tender 271 dt 26 07 2022"
      },
      {
        "id": "tender-2022-e-tender-287-dt-29-07-2022-pdf",
        "file": "E-Tender_287_dt_29_07_2022.pdf",
        "bytes": 81269,
        "titleEn": "E-Tender 287 dt 29 07 2022"
      },
      {
        "id": "tender-2022-e-tender-289-dt-02-08-2022-pdf",
        "file": "E-Tender_289_dt__02_08_2022.pdf",
        "bytes": 399252,
        "titleEn": "E-Tender 289 dt 02 08 2022"
      },
      {
        "id": "tender-2022-e-tender-31-dt-25-01-2022-pdf",
        "file": "E-Tender_31_dt__25_01_2022.pdf",
        "bytes": 25447,
        "titleEn": "E-Tender 31 dt 25 01 2022"
      },
      {
        "id": "tender-2022-e-tender-311-dt-05-08-2022-pdf",
        "file": "E-Tender_311_dt__05_08_2022.pdf",
        "bytes": 458449,
        "titleEn": "E-Tender 311 dt 05 08 2022"
      },
      {
        "id": "tender-2022-e-tender-312-dt-08-08-2022-pdf",
        "file": "E-Tender_312_dt__08_08_2022.pdf",
        "bytes": 29362,
        "titleEn": "E-Tender 312 dt 08 08 2022"
      },
      {
        "id": "tender-2022-e-tender-317-dt-12-08-2022-pdf",
        "file": "E-Tender_317_dt__12_08_2022.pdf",
        "bytes": 319779,
        "titleEn": "E-Tender 317 dt 12 08 2022"
      },
      {
        "id": "tender-2022-e-tender-337-dt-18-08-2022-pdf",
        "file": "E-Tender_337_dt__18_08_2022.pdf",
        "bytes": 69665,
        "titleEn": "E-Tender 337 dt 18 08 2022"
      },
      {
        "id": "tender-2022-e-tender-34-dt-28-01-2022-pdf",
        "file": "E-Tender_34_dt__28_01_2022.pdf",
        "bytes": 109985,
        "titleEn": "E-Tender 34 dt 28 01 2022"
      },
      {
        "id": "tender-2022-e-tender-42-dt-04-02-2022-pdf",
        "file": "E-Tender_42_dt__04_02_2022.pdf",
        "bytes": 31291,
        "titleEn": "E-Tender 42 dt 04 02 2022"
      },
      {
        "id": "tender-2022-e-tender-448-dt-02-09-2022-pdf",
        "file": "E-Tender_448_dt__02_09_2022.pdf",
        "bytes": 113185,
        "titleEn": "E-Tender 448 dt 02 09 2022"
      },
      {
        "id": "tender-2022-e-tender-485-dt-07-09-2022-pdf",
        "file": "E-Tender_485_dt__07_09_2022.pdf",
        "bytes": 74403,
        "titleEn": "E-Tender 485 dt 07 09 2022"
      },
      {
        "id": "tender-2022-e-tender-548-dt-16-09-2022-pdf",
        "file": "E-Tender_548_dt__16_09_2022.pdf",
        "bytes": 63689,
        "titleEn": "E-Tender 548 dt 16 09 2022"
      },
      {
        "id": "tender-2022-e-tender-56-dt-11-02-2022-pdf",
        "file": "E-Tender_56_dt__11_02_2022.pdf",
        "bytes": 57847,
        "titleEn": "E-Tender 56 dt 11 02 2022"
      },
      {
        "id": "tender-2022-e-tender-606-dt-23-09-2022-pdf",
        "file": "E-Tender_606_dt__23_09_2022.pdf",
        "bytes": 60913,
        "titleEn": "E-Tender 606 dt 23 09 2022"
      },
      {
        "id": "tender-2022-e-tender-65-dt-18-02-2022-pdf",
        "file": "E-Tender_65_dt__18_02_2022.pdf",
        "bytes": 44333,
        "titleEn": "E-Tender 65 dt 18 02 2022"
      },
      {
        "id": "tender-2022-e-tender-651-dt-30-09-2022-pdf",
        "file": "E-Tender_651_dt__30_09_2022.pdf",
        "bytes": 53248,
        "titleEn": "E-Tender 651 dt 30 09 2022"
      },
      {
        "id": "tender-2022-e-tender-784-dt-21-11-2022-pdf",
        "file": "E-Tender_784_dt__21_11_2022.pdf",
        "bytes": 50339,
        "titleEn": "E-Tender 784 dt 21 11 2022"
      },
      {
        "id": "tender-2022-e-tender-81-dt-25-02-2022-pdf",
        "file": "E-Tender_81_dt__25_02_2022.pdf",
        "bytes": 41872,
        "titleEn": "E-Tender 81 dt 25 02 2022"
      },
      {
        "id": "tender-2022-e-tender-815-dt-28-11-2022-pdf",
        "file": "E-Tender_815_dt__28_11_2022.pdf",
        "bytes": 51631,
        "titleEn": "E-Tender 815 dt 28 11 2022"
      },
      {
        "id": "tender-2022-e-tender-833-dt-02-12-2022-pdf",
        "file": "E-Tender_833_dt__02_12_2022.pdf",
        "bytes": 61387,
        "titleEn": "E-Tender 833 dt 02 12 2022"
      },
      {
        "id": "tender-2022-e-tender-844-dt-07-12-2022-pdf",
        "file": "E-Tender_844_dt__07_12_2022.pdf",
        "bytes": 79245,
        "titleEn": "E-Tender 844 dt 07 12 2022"
      },
      {
        "id": "tender-2022-e-tender-851-dt-09-12-2022-pdf",
        "file": "E-Tender_851_dt__09_12_2022.pdf",
        "bytes": 82949,
        "titleEn": "E-Tender 851 dt 09 12 2022"
      },
      {
        "id": "tender-2022-e-tender-856-dt-13-12-2022-pdf",
        "file": "E-Tender_856_dt__13_12_2022.pdf",
        "bytes": 126819,
        "titleEn": "E-Tender 856 dt 13 12 2022"
      },
      {
        "id": "tender-2022-e-tender-867-dt-16-12-2022-pdf",
        "file": "E-Tender_867_dt__16_12_2022.pdf",
        "bytes": 134763,
        "titleEn": "E-Tender 867 dt 16 12 2022"
      },
      {
        "id": "tender-2022-e-tender-874-dt-19-12-2022-pdf",
        "file": "E-Tender_874_dt__19_12_2022.pdf",
        "bytes": 50651,
        "titleEn": "E-Tender 874 dt 19 12 2022"
      },
      {
        "id": "tender-2022-e-tender-887-dt-21-12-2022-pdf",
        "file": "E-Tender_887_dt__21_12_2022.pdf",
        "bytes": 135844,
        "titleEn": "E-Tender 887 dt 21 12 2022"
      },
      {
        "id": "tender-2022-e-tender-906-dt-26-12-2022-pdf",
        "file": "E-Tender_906_dt__26_12_2022.pdf",
        "bytes": 140669,
        "titleEn": "E-Tender 906 dt 26 12 2022"
      },
      {
        "id": "tender-2022-e-tender-933-dt-29-12-2022-pdf",
        "file": "E-Tender_933_dt__29_12_2022.pdf",
        "bytes": 149140,
        "titleEn": "E-Tender 933 dt 29 12 2022"
      },
      {
        "id": "tender-2022-est-2-650-dt-08-06-2022-pdf",
        "file": "EST-2_650_dt__08_06_2022.pdf",
        "bytes": 308644,
        "titleEn": "EST-2 650 dt 08 06 2022"
      },
      {
        "id": "tender-2022-health-1023-dt-20-04-2022-pdf",
        "file": "Health_1023_dt__20_04_2022.pdf",
        "bytes": 27243,
        "titleEn": "Health 1023 dt 20 04 2022"
      },
      {
        "id": "tender-2022-health-126-dt-14-01-2022-pdf",
        "file": "Health_126_dt__14_01_2022.pdf",
        "bytes": 32712,
        "titleEn": "Health 126 dt 14 01 2022"
      },
      {
        "id": "tender-2022-health-133-dt-14-01-2022-pdf",
        "file": "Health_133_dt__14_01_2022.pdf",
        "bytes": 31782,
        "titleEn": "Health 133 dt 14 01 2022"
      },
      {
        "id": "tender-2022-health-1380-dt-30-05-2022-pdf",
        "file": "Health_1380_dt__30_05_2022.pdf",
        "bytes": 76563,
        "titleEn": "Health 1380 dt 30 05 2022"
      },
      {
        "id": "tender-2022-health-1715-dt-01-07-2022-pdf",
        "file": "Health_1715_dt__01_07_2022.pdf",
        "bytes": 476929,
        "titleEn": "Health 1715 dt 01 07 2022"
      },
      {
        "id": "tender-2022-health-1717-dt-01-07-2022-pdf",
        "file": "Health_1717_dt__01_07_2022.pdf",
        "bytes": 467448,
        "titleEn": "Health 1717 dt 01 07 2022"
      },
      {
        "id": "tender-2022-health-1866-dt-15-07-2022-pdf",
        "file": "Health_1866_dt__15_07_2022.pdf",
        "bytes": 91113,
        "titleEn": "Health 1866 dt 15 07 2022"
      },
      {
        "id": "tender-2022-health-1869-dt-15-07-2022-pdf",
        "file": "Health_1869_dt__15_07_2022.pdf",
        "bytes": 93546,
        "titleEn": "Health 1869 dt 15 07 2022"
      },
      {
        "id": "tender-2022-health-1902-dt-20-07-2022-pdf",
        "file": "Health_1902_dt__20_07_2022.pdf",
        "bytes": 84241,
        "titleEn": "Health 1902 dt 20 07 2022"
      },
      {
        "id": "tender-2022-health-194-dt-25-01-2022-pdf",
        "file": "Health_194_dt__25_01_2022.pdf",
        "bytes": 412817,
        "titleEn": "Health 194 dt 25 01 2022"
      },
      {
        "id": "tender-2022-health-196-dt-25-01-2022-pdf",
        "file": "Health_196_dt__25_01_2022.pdf",
        "bytes": 408575,
        "titleEn": "Health 196 dt 25 01 2022"
      },
      {
        "id": "tender-2022-health-199-dt-25-01-2022-pdf",
        "file": "Health_199_dt__25_01_2022.pdf",
        "bytes": 92161,
        "titleEn": "Health 199 dt 25 01 2022"
      },
      {
        "id": "tender-2022-health-203-dt-21-12-2022-pdf",
        "file": "Health_203_dt__21_12_2022.pdf",
        "bytes": 60187,
        "titleEn": "Health 203 dt 21 12 2022"
      },
      {
        "id": "tender-2022-health-204-dt-21-12-2022-pdf",
        "file": "Health_204_dt__21_12_2022.pdf",
        "bytes": 58774,
        "titleEn": "Health 204 dt 21 12 2022"
      },
      {
        "id": "tender-2022-health-2052-dt-05-08-2022-pdf",
        "file": "Health_2052_dt__05_08_2022.pdf",
        "bytes": 482933,
        "titleEn": "Health 2052 dt 05 08 2022"
      },
      {
        "id": "tender-2022-health-2291-dt-07-09-2022-pdf",
        "file": "Health_2291_dt__07_09_2022.pdf",
        "bytes": 79629,
        "titleEn": "Health 2291 dt 07 09 2022"
      },
      {
        "id": "tender-2022-health-2397-dt-16-09-2022-pdf",
        "file": "Health_2397_dt__16_09_2022.pdf",
        "bytes": 32647,
        "titleEn": "Health 2397 dt 16 09 2022"
      },
      {
        "id": "tender-2022-health-2406-dt-16-09-2022-1-pdf",
        "file": "Health_2406_dt__16_09_2022 (1).pdf",
        "bytes": 221027,
        "titleEn": "Health 2406 dt 16 09 2022 (1)"
      },
      {
        "id": "tender-2022-health-2463-dt-23-09-2022-pdf",
        "file": "Health_2463_dt__23_09_2022.pdf",
        "bytes": 66156,
        "titleEn": "Health 2463 dt 23 09 2022"
      },
      {
        "id": "tender-2022-health-2559-dt-03-10-2022-pdf",
        "file": "Health_2559_dt__03_10_2022.pdf",
        "bytes": 409565,
        "titleEn": "Health 2559 dt 03 10 2022"
      },
      {
        "id": "tender-2022-health-2560-dt-03-10-2022-pdf",
        "file": "Health_2560_dt__03_10_2022.pdf",
        "bytes": 249643,
        "titleEn": "Health 2560 dt 03 10 2022"
      },
      {
        "id": "tender-2022-health-2975-dt-22-11-2022-pdf",
        "file": "Health_2975_dt__22_11_2022.pdf",
        "bytes": 146385,
        "titleEn": "Health 2975 dt 22 11 2022"
      },
      {
        "id": "tender-2022-health-3004-dt-24-11-2022-compressed-1-1-pdf",
        "file": "Health_3004_dt__24_11_2022_compressed_(1)1.pdf",
        "bytes": 5621163,
        "titleEn": "Health 3004 dt 24 11 2022 compressed (1)1"
      },
      {
        "id": "tender-2022-health-3111-dt-07-12-2022-pdf",
        "file": "Health_3111_dt__07_12_2022.pdf",
        "bytes": 216552,
        "titleEn": "Health 3111 dt 07 12 2022"
      },
      {
        "id": "tender-2022-health-3276-dt-27-12-2022-pdf",
        "file": "Health_3276_dt__27_12_2022.pdf",
        "bytes": 79433,
        "titleEn": "Health 3276 dt 27 12 2022"
      },
      {
        "id": "tender-2022-health-341-dt-08-02-2022-pdf",
        "file": "Health_341_dt__08_02_2022.pdf",
        "bytes": 27810,
        "titleEn": "Health 341 dt 08 02 2022"
      },
      {
        "id": "tender-2022-health-3969-dt-15-12-2022-pdf",
        "file": "Health_3969_dt__15_12_2022.pdf",
        "bytes": 152340,
        "titleEn": "Health 3969 dt 15 12 2022"
      },
      {
        "id": "tender-2022-health-89-dt-11-01-2022-pdf",
        "file": "Health_89_dt__11_01_2022.pdf",
        "bytes": 333292,
        "titleEn": "Health 89 dt 11 01 2022"
      },
      {
        "id": "tender-2022-heath-2404-dt-16-09-2022-pdf",
        "file": "Heath_2404_dt__16_09_2022.pdf",
        "bytes": 440103,
        "titleEn": "Heath 2404 dt 16 09 2022"
      },
      {
        "id": "tender-2022-heatlh-2488-dt-26-09-2022-pdf",
        "file": "Heatlh_2488_dt__26_09_2022.pdf",
        "bytes": 654375,
        "titleEn": "Heatlh 2488 dt 26 09 2022"
      },
      {
        "id": "tender-2022-store-114-dt-22-11-2022-pdf",
        "file": "Store_114_dt__22_11_2022.pdf",
        "bytes": 115512,
        "titleEn": "Store 114 dt 22 11 2022"
      },
      {
        "id": "tender-2022-store-118-dt-29-11-2022-pdf",
        "file": "Store_118_dt__29_11_2022.pdf",
        "bytes": 49096,
        "titleEn": "Store 118 dt 29 11 2022"
      },
      {
        "id": "tender-2022-store-119-dt-30-11-2022-pdf",
        "file": "Store_119_dt__30_11_2022.pdf",
        "bytes": 45959,
        "titleEn": "Store 119 dt 30 11 2022"
      },
      {
        "id": "tender-2022-store-120-dt-30-11-2022-pdf",
        "file": "Store_120_dt__30_11_2022.pdf",
        "bytes": 42000,
        "titleEn": "Store 120 dt 30 11 2022"
      },
      {
        "id": "tender-2022-store-121-dt-30-11-2022-pdf",
        "file": "Store_121_dt__30_11_2022.pdf",
        "bytes": 42949,
        "titleEn": "Store 121 dt 30 11 2022"
      },
      {
        "id": "tender-2022-store-122-dt-30-11-2022-pdf",
        "file": "Store_122_dt__30_11_2022.pdf",
        "bytes": 43835,
        "titleEn": "Store 122 dt 30 11 2022"
      },
      {
        "id": "tender-2022-store-123-dt-02-12-2022-pdf",
        "file": "Store_123_dt__02_12_2022.pdf",
        "bytes": 45939,
        "titleEn": "Store 123 dt 02 12 2022"
      },
      {
        "id": "tender-2022-store-124-dt-07-12-2022-pdf",
        "file": "Store_124_dt__07_12_2022.pdf",
        "bytes": 59641,
        "titleEn": "Store 124 dt 07 12 2022"
      },
      {
        "id": "tender-2022-store-14-dt-05-05-2022-pdf",
        "file": "Store_14_dt__05_05_2022.pdf",
        "bytes": 49897,
        "titleEn": "Store 14 dt 05 05 2022"
      },
      {
        "id": "tender-2022-store-146-dt-10-01-2022-pdf",
        "file": "Store_146_dt_10_01_2022.pdf",
        "bytes": 38942,
        "titleEn": "Store 146 dt 10 01 2022"
      },
      {
        "id": "tender-2022-store-15-dt-05-05-2022-pdf",
        "file": "Store_15_dt__05_05_2022.pdf",
        "bytes": 38563,
        "titleEn": "Store 15 dt 05 05 2022"
      },
      {
        "id": "tender-2022-store-161-dt-03-03-2022-pdf",
        "file": "Store_161_dt__03_03_2022.pdf",
        "bytes": 206696,
        "titleEn": "Store 161 dt 03 03 2022"
      },
      {
        "id": "tender-2022-store-162-dt-03-03-2022-pdf",
        "file": "Store_162_dt__03_03_2022.pdf",
        "bytes": 46668,
        "titleEn": "Store 162 dt 03 03 2022"
      },
      {
        "id": "tender-2022-store-32-dt-01-06-2022-pdf",
        "file": "Store_32_dt__01_06_2022.pdf",
        "bytes": 2433599,
        "titleEn": "Store 32 dt 01 06 2022"
      },
      {
        "id": "tender-2022-store-33-dt-14-06-2022-pdf",
        "file": "Store_33_dt__14_06_2022.pdf",
        "bytes": 42561,
        "titleEn": "Store 33 dt 14 06 2022"
      },
      {
        "id": "tender-2022-store-34-dt-14-06-2022-pdf",
        "file": "Store_34_dt__14_06_2022.pdf",
        "bytes": 206327,
        "titleEn": "Store 34 dt 14 06 2022"
      },
      {
        "id": "tender-2022-store-38-dt-17-06-2022-pdf",
        "file": "Store_38_dt__17_06_2022.pdf",
        "bytes": 45248,
        "titleEn": "Store 38 dt 17 06 2022"
      },
      {
        "id": "tender-2022-store-39-dt-17-06-2022-pdf",
        "file": "Store_39_dt__17_06_2022.pdf",
        "bytes": 43533,
        "titleEn": "Store 39 dt 17 06 2022"
      },
      {
        "id": "tender-2022-store-44-dt-29-06-2022-pdf",
        "file": "Store_44_dt__29_06_2022.pdf",
        "bytes": 223188,
        "titleEn": "Store 44 dt 29 06 2022"
      },
      {
        "id": "tender-2022-store-51-dt-14-07-2022-pdf",
        "file": "Store_51_dt__14_07_2022.pdf",
        "bytes": 50094,
        "titleEn": "Store 51 dt 14 07 2022"
      },
      {
        "id": "tender-2022-store-56-dt-26-07-2022-pdf",
        "file": "Store_56_dt__26_07_2022.pdf",
        "bytes": 41421,
        "titleEn": "Store 56 dt 26 07 2022"
      },
      {
        "id": "tender-2022-store-78dt-06-09-2022-pdf",
        "file": "Store_78dt__06_09_2022.pdf",
        "bytes": 406763,
        "titleEn": "Store 78dt 06 09 2022"
      },
      {
        "id": "tender-2022-store-84-dt-16-09-2022-pdf",
        "file": "store_84_dt__16_09_2022.pdf",
        "bytes": 291801,
        "titleEn": "store 84 dt 16 09 2022"
      },
      {
        "id": "tender-2022-store-85-dt-19-09-2022-pdf",
        "file": "Store_85_dt__19_09_2022.pdf",
        "bytes": 45315,
        "titleEn": "Store 85 dt 19 09 2022"
      },
      {
        "id": "tender-2022-store-89-dt-29-09-2022-pdf",
        "file": "Store_89_dt__29_09_2022.pdf",
        "bytes": 47726,
        "titleEn": "Store 89 dt 29 09 2022"
      },
      {
        "id": "tender-2022-strore-62-dt-05-08-2022-pdf",
        "file": "Strore_62_dt__05_08_2022.pdf",
        "bytes": 536794,
        "titleEn": "Strore 62 dt 05 08 2022"
      },
      {
        "id": "tender-2022-strore-7-dt-21-04-2022-pdf",
        "file": "Strore_7_dt__21_04_2022.pdf",
        "bytes": 414174,
        "titleEn": "Strore 7 dt 21 04 2022"
      }
    ]
  },
  {
    "folder": [
      "Municipal Document Repository",
      "Tenders",
      "2020"
    ],
    "headingEn": "Tender notices 2020",
    "headingMr": "निविदा सूचना 2020",
    "documents": [
      {
        "id": "tender-2020-09-16-2020-16-48-01-pdf",
        "file": "09-16-2020_16_48_01.pdf",
        "bytes": 331672,
        "titleEn": "09-16-2020 16 48 01"
      },
      {
        "id": "tender-2020-ce-85-dt-10-06-2020-pdf",
        "file": "CE_85_DT_10_06_2020.pdf",
        "bytes": 509771,
        "titleEn": "CE 85 DT 10 06 2020"
      },
      {
        "id": "tender-2020-comp-147-dt-16-12-2020-pdf",
        "file": "comp__147_dt__16_12_2020.pdf",
        "bytes": 68073,
        "titleEn": "comp 147 dt 16 12 2020"
      },
      {
        "id": "tender-2020-comp-143-dt-10-12-2020-pdf",
        "file": "Comp_143_dt__10_12_2020.pdf",
        "bytes": 72415,
        "titleEn": "Comp 143 dt 10 12 2020"
      },
      {
        "id": "tender-2020-comp-18-dt-22-02-2021-pdf",
        "file": "comp_18_dt__22_02_2021.pdf",
        "bytes": 43232,
        "titleEn": "comp 18 dt 22 02 2021"
      },
      {
        "id": "tender-2020-comp-26-dt-24-01-20201-pdf",
        "file": "Comp_26_dt__24_01_20201.pdf",
        "bytes": 46177,
        "titleEn": "Comp 26 dt 24 01 20201"
      },
      {
        "id": "tender-2020-computer-80-dt-09-03-2020-pdf",
        "file": "Computer_80_Dt__09_03_2020.pdf",
        "bytes": 831103,
        "titleEn": "Computer 80 Dt 09 03 2020"
      },
      {
        "id": "tender-2020-dchc-1743-dt-12-10-2020-pdf",
        "file": "DCHC_1743_DT__12_10_2020.pdf",
        "bytes": 103980,
        "titleEn": "DCHC 1743 DT 12 10 2020"
      },
      {
        "id": "tender-2020-document-139-pdf",
        "file": "Document_139.pdf",
        "bytes": 385593,
        "titleEn": "Document 139"
      },
      {
        "id": "tender-2020-dy-eng-331-dt-05-02-2020-pdf",
        "file": "Dy_Eng_331_dt__05_02_2020.pdf",
        "bytes": 73332,
        "titleEn": "Dy Eng 331 dt 05 02 2020"
      },
      {
        "id": "tender-2020-dy-eng-zone-04-193-dt-09-09-2021-pdf",
        "file": "dy_eng_zone_04-193_dt_09_09_2021.pdf",
        "bytes": 62160,
        "titleEn": "dy eng zone 04-193 dt 09 09 2021"
      },
      {
        "id": "tender-2020-e-tender-06-dt-06-01-2020-pdf",
        "file": "E-Tender_06_dt_06_01_2020.pdf",
        "bytes": 27090,
        "titleEn": "E-Tender 06 dt 06 01 2020"
      },
      {
        "id": "tender-2020-e-tender-107-dt-27-04-2021-pdf",
        "file": "E-Tender_107_dt__27_04_2021.pdf",
        "bytes": 30321,
        "titleEn": "E-Tender 107 dt 27 04 2021"
      },
      {
        "id": "tender-2020-e-tender-109-dt-12-06-2020-pdf",
        "file": "E-TENDER_109_DT_12_06_2020.pdf",
        "bytes": 456557,
        "titleEn": "E-TENDER 109 DT 12 06 2020"
      },
      {
        "id": "tender-2020-e-tender-117-dt-05-05-2021-pdf",
        "file": "E-Tender_117_dt_05_05_2021.pdf",
        "bytes": 31517,
        "titleEn": "E-Tender 117 dt 05 05 2021"
      },
      {
        "id": "tender-2020-e-tender-119-dt-30-06-2020-pdf",
        "file": "E-Tender_119_dt__30_06_2020.pdf",
        "bytes": 34039,
        "titleEn": "E-Tender 119 dt 30 06 2020"
      },
      {
        "id": "tender-2020-e-tender-122-dt-07-07-2020-pdf",
        "file": "E-TENDER_122_DT_07_07_2020.pdf",
        "bytes": 764893,
        "titleEn": "E-TENDER 122 DT 07 07 2020"
      },
      {
        "id": "tender-2020-e-tender-125-dt-17-05-2021-pdf",
        "file": "E-TENDER_125_dt_17_05_2021.pdf",
        "bytes": 25508,
        "titleEn": "E-TENDER 125 dt 17 05 2021"
      },
      {
        "id": "tender-2020-e-tender-131-dt-21-05-2021-pdf",
        "file": "E-Tender_131_dt__21_05_2021.pdf",
        "bytes": 28883,
        "titleEn": "E-Tender 131 dt 21 05 2021"
      },
      {
        "id": "tender-2020-e-tender-132-dt-20-07-2020-pdf",
        "file": "E-Tender_132_Dt_20_07_2020.pdf",
        "bytes": 487330,
        "titleEn": "E-Tender 132 Dt 20 07 2020"
      },
      {
        "id": "tender-2020-e-tender-136-dt-28-05-2021-pdf",
        "file": "E-Tender_136_dt__28_05_2021.pdf",
        "bytes": 30940,
        "titleEn": "E-Tender 136 dt 28 05 2021"
      },
      {
        "id": "tender-2020-e-tender-141-dt-28-07-2020-pdf",
        "file": "E-TENDER_141_DT_28_07_2020.pdf",
        "bytes": 465561,
        "titleEn": "E-TENDER 141 DT 28 07 2020"
      },
      {
        "id": "tender-2020-e-tender-142-dt-04-06-2021-pdf",
        "file": "E-Tender_142_dt__04_06_2021.pdf",
        "bytes": 29512,
        "titleEn": "E-Tender 142 dt 04 06 2021"
      },
      {
        "id": "tender-2020-e-tender-143-dt-31-07-2020-pdf",
        "file": "E-Tender_143_dt_31_07_2020.pdf",
        "bytes": 28177,
        "titleEn": "E-Tender 143 dt 31 07 2020"
      },
      {
        "id": "tender-2020-e-tender-144-dt-11-06-2021-pdf",
        "file": "E-Tender_144_dt__11_06_2021.pdf",
        "bytes": 47925,
        "titleEn": "E-Tender 144 dt 11 06 2021"
      },
      {
        "id": "tender-2020-e-tender-149-dt-05-08-2020-pdf",
        "file": "E-Tender_149_dt__05_08_2020.pdf",
        "bytes": 33810,
        "titleEn": "E-Tender 149 dt 05 08 2020"
      },
      {
        "id": "tender-2020-e-tender-15-dt-14-01-2020-pdf",
        "file": "E-Tender_15_dt__14_01_2020.pdf",
        "bytes": 40846,
        "titleEn": "E-Tender 15 dt 14 01 2020"
      },
      {
        "id": "tender-2020-e-tender-152-dt-19-06-2021-pdf",
        "file": "E-Tender_152_dt_19_06_2021.pdf",
        "bytes": 28937,
        "titleEn": "E-Tender 152 dt 19 06 2021"
      },
      {
        "id": "tender-2020-e-tender-154-dt-07-08-2020-pdf",
        "file": "E-Tender_154_dt__07_08_2020.pdf",
        "bytes": 27199,
        "titleEn": "E-Tender 154 dt 07 08 2020"
      },
      {
        "id": "tender-2020-e-tender-157-dt-12-08-2020-pdf",
        "file": "E-Tender_157_dt__12_08_2020.pdf",
        "bytes": 33125,
        "titleEn": "E-Tender 157 dt 12 08 2020"
      },
      {
        "id": "tender-2020-e-tender-163-dt-25-06-2021-pdf",
        "file": "E-Tender_163_dt__25_06_2021.pdf",
        "bytes": 38241,
        "titleEn": "E-Tender 163 dt 25 06 2021"
      },
      {
        "id": "tender-2020-e-tender-166-dt-29-06-2021-pdf",
        "file": "E-Tender_166_dt_29_06_2021.pdf",
        "bytes": 33969,
        "titleEn": "E-Tender 166 dt 29 06 2021"
      },
      {
        "id": "tender-2020-e-tender-173-dt-02-04-2021-pdf",
        "file": "E-Tender_173_dt_02_04_2021.pdf",
        "bytes": 44294,
        "titleEn": "E-Tender 173 dt 02 04 2021"
      },
      {
        "id": "tender-2020-e-tender-177-dt-25-08-2020-pdf",
        "file": "E-Tender_177_dt__25_08_2020.pdf",
        "bytes": 27903,
        "titleEn": "E-Tender 177 dt 25 08 2020"
      },
      {
        "id": "tender-2020-e-tender-181-dt-28-08-2020-pdf",
        "file": "E-Tender_181_dt__28_08_2020.pdf",
        "bytes": 12792,
        "titleEn": "E-Tender 181 dt 28 08 2020"
      },
      {
        "id": "tender-2020-e-tender-184-dt-12-07-2021-pdf",
        "file": "E-Tender_184_dt_12_07_2021.pdf",
        "bytes": 42217,
        "titleEn": "E-Tender 184 dt 12 07 2021"
      },
      {
        "id": "tender-2020-e-tender-189-dt-04-09-2020-pdf",
        "file": "E-TENDER_189_DT__04_09_2020.pdf",
        "bytes": 36009,
        "titleEn": "E-TENDER 189 DT 04 09 2020"
      },
      {
        "id": "tender-2020-e-tender-19-01-2021-pdf",
        "file": "E-Tender_19_01_2021.pdf",
        "bytes": 28393,
        "titleEn": "E-Tender 19 01 2021"
      },
      {
        "id": "tender-2020-e-tender-192-dt-16-07-2021-pdf",
        "file": "E-Tender_192_dt__16_07_2021.pdf",
        "bytes": 30437,
        "titleEn": "E-Tender 192 dt 16 07 2021"
      },
      {
        "id": "tender-2020-e-tender-202-dt-23-07-2021-pdf",
        "file": "E-Tender_202_dt__23_07_2021.pdf",
        "bytes": 34572,
        "titleEn": "E-Tender 202 dt 23 07 2021"
      },
      {
        "id": "tender-2020-e-tender-211-dt-25-09-2020-pdf",
        "file": "E-Tender_211_dt__25_09_2020.pdf",
        "bytes": 19142,
        "titleEn": "E-Tender 211 dt 25 09 2020"
      },
      {
        "id": "tender-2020-e-tender-215-dt-30-07-2021-pdf",
        "file": "e-Tender_215_dt__30_07_2021.pdf",
        "bytes": 34094,
        "titleEn": "e-Tender 215 dt 30 07 2021"
      },
      {
        "id": "tender-2020-e-tender-228-dt-06-08-2021-pdf",
        "file": "E-Tender_228_dt_06_08_2021.pdf",
        "bytes": 63928,
        "titleEn": "E-Tender 228 dt 06 08 2021"
      },
      {
        "id": "tender-2020-e-tender-234-dt-22-10-2020-pdf",
        "file": "E-Tender_234_dt_22_10_2020.pdf",
        "bytes": 29201,
        "titleEn": "E-Tender 234 dt 22 10 2020"
      },
      {
        "id": "tender-2020-e-tender-237-dt-10-08-2021-pdf",
        "file": "E-Tender_237_dt_10_08_2021.pdf",
        "bytes": 35830,
        "titleEn": "E-Tender 237 dt 10 08 2021"
      },
      {
        "id": "tender-2020-e-tender-238-dt-27-10-2020-pdf",
        "file": "E-Tender_238_dt__27_10_2020.pdf",
        "bytes": 31633,
        "titleEn": "E-Tender 238 dt 27 10 2020"
      },
      {
        "id": "tender-2020-e-tender-248-dt-18-08-2021-pdf",
        "file": "E-Tender_248_dt__18_08_2021.pdf",
        "bytes": 86445,
        "titleEn": "E-Tender 248 dt 18 08 2021"
      },
      {
        "id": "tender-2020-e-tender-25-dt-28-01-2021-pdf",
        "file": "E-Tender_25_dt__28_01_2021.pdf",
        "bytes": 48449,
        "titleEn": "E-Tender 25 dt 28 01 2021"
      },
      {
        "id": "tender-2020-e-tender-250-dt-20-08-2021-pdf",
        "file": "E-Tender_250_dt__20_08_2021.pdf",
        "bytes": 46560,
        "titleEn": "E-Tender 250 dt 20 08 2021"
      },
      {
        "id": "tender-2020-e-tender-261-dt-24-08-2021-pdf",
        "file": "E-Tender_261_dt__24_08_2021.pdf",
        "bytes": 51255,
        "titleEn": "E-Tender 261 dt 24 08 2021"
      },
      {
        "id": "tender-2020-e-tender-265-dt-07-12-2020-pdf",
        "file": "E-Tender_265_dt__07_12_2020.pdf",
        "bytes": 32624,
        "titleEn": "E-Tender 265 dt 07 12 2020"
      },
      {
        "id": "tender-2020-e-tender-268-dt-11-12-2020-pdf",
        "file": "E-Tender_268_dt_11_12_2020.pdf",
        "bytes": 48267,
        "titleEn": "E-Tender 268 dt 11 12 2020"
      },
      {
        "id": "tender-2020-e-tender-280-dt-24-12-2020-pdf",
        "file": "E-Tender_280_dt__24_12_2020.pdf",
        "bytes": 29484,
        "titleEn": "E-Tender 280 dt 24 12 2020"
      },
      {
        "id": "tender-2020-e-tender-287-dt-31-12-2020-pdf",
        "file": "E-Tender_287_dt__31_12_2020.pdf",
        "bytes": 26766,
        "titleEn": "E-Tender 287 dt 31 12 2020"
      },
      {
        "id": "tender-2020-e-tender-305-dt-31-08-2021-pdf",
        "file": "E-Tender_305_dt__31_08_2021.pdf",
        "bytes": 42007,
        "titleEn": "E-Tender 305 dt 31 08 2021"
      },
      {
        "id": "tender-2020-e-tender-314-dt-03-09-2021-pdf",
        "file": "E-Tender_314_dt__03_09_2021.pdf",
        "bytes": 27332,
        "titleEn": "E-Tender 314 dt 03 09 2021"
      },
      {
        "id": "tender-2020-e-tender-332-dt-09-09-2021-pdf",
        "file": "E-Tender_332_dt__09_09_2021.pdf",
        "bytes": 32802,
        "titleEn": "E-Tender 332 dt 09 09 2021"
      },
      {
        "id": "tender-2020-e-tender-354-dt-16-09-2021-pdf",
        "file": "E-Tender_354_dt__16_09_2021.pdf",
        "bytes": 49743,
        "titleEn": "E-Tender 354 dt 16 09 2021"
      },
      {
        "id": "tender-2020-e-tender-36-dt-27-01-2020-pdf",
        "file": "E-Tender_36_dt__27_01_2020.pdf",
        "bytes": 32764,
        "titleEn": "E-Tender 36 dt 27 01 2020"
      },
      {
        "id": "tender-2020-e-tender-365-dt-24-09-2021-pdf",
        "file": "E-Tender_365_dt__24_09_2021.pdf",
        "bytes": 40559,
        "titleEn": "E-Tender 365 dt 24 09 2021"
      },
      {
        "id": "tender-2020-e-tender-372-dt-04-10-2021-pdf",
        "file": "E-tender_372_dt__04_10_2021.pdf",
        "bytes": 63622,
        "titleEn": "E-tender 372 dt 04 10 2021"
      },
      {
        "id": "tender-2020-e-tender-3796-dt-18-11-2021-pdf",
        "file": "E-Tender_3796_dt__18_11_2021.pdf",
        "bytes": 516131,
        "titleEn": "E-Tender 3796 dt 18 11 2021"
      },
      {
        "id": "tender-2020-e-tender-395-dt-13-10-2021-pdf",
        "file": "E-Tender_395_dt__13_10_2021_.pdf",
        "bytes": 47247,
        "titleEn": "E-Tender 395 dt 13 10 2021"
      },
      {
        "id": "tender-2020-e-tender-41-dt-09-02-2021-pdf",
        "file": "E-Tender_41_dt__09_02_2021.pdf",
        "bytes": 27501,
        "titleEn": "E-Tender 41 dt 09 02 2021"
      },
      {
        "id": "tender-2020-e-tender-416-dt-21-10-2021-pdf",
        "file": "E-Tender_416_dt__21_10_2021.pdf",
        "bytes": 29204,
        "titleEn": "E-Tender 416 dt 21 10 2021"
      },
      {
        "id": "tender-2020-e-tender-421-dt-03-11-2021-pdf",
        "file": "E-Tender_421_dt__03_11_2021.pdf",
        "bytes": 32937,
        "titleEn": "E-Tender 421 dt 03 11 2021"
      },
      {
        "id": "tender-2020-e-tender-432-dt-12-11-2021-pdf",
        "file": "E-Tender_432_dt__12_11_2021.pdf",
        "bytes": 41479,
        "titleEn": "E-Tender 432 dt 12 11 2021"
      },
      {
        "id": "tender-2020-e-tender-445-dt-18-11-2021-pdf",
        "file": "E-Tender_445_dt_18_11_2021.pdf",
        "bytes": 42423,
        "titleEn": "E-Tender 445 dt 18 11 2021"
      },
      {
        "id": "tender-2020-e-tender-460-dt-26-11-2021-pdf",
        "file": "E-Tender_460_dt__26_11_2021.pdf",
        "bytes": 31138,
        "titleEn": "E-Tender 460 dt 26 11 2021"
      },
      {
        "id": "tender-2020-e-tender-471-dt-03-12-2021-pdf",
        "file": "E-Tender_471_dt__03_12_2021.pdf",
        "bytes": 30157,
        "titleEn": "E-Tender 471 dt 03 12 2021"
      },
      {
        "id": "tender-2020-e-tender-479-dt-10-12-2021-pdf",
        "file": "E-Tender_479_dt__10_12_2021.pdf",
        "bytes": 42929,
        "titleEn": "E-Tender 479 dt 10 12 2021"
      },
      {
        "id": "tender-2020-e-tender-485-dt-15-12-2021-pdf",
        "file": "E-Tender_485_dt__15_12_2021.pdf",
        "bytes": 88651,
        "titleEn": "E-Tender 485 dt 15 12 2021"
      },
      {
        "id": "tender-2020-e-tender-488-dt-20-12-2021-pdf",
        "file": "E-Tender_488_dt_20_12_2021.pdf",
        "bytes": 49815,
        "titleEn": "E-Tender 488 dt 20 12 2021"
      },
      {
        "id": "tender-2020-e-tender-495-dt-23-12-2021-pdf",
        "file": "E-Tender_495_dt_23_12_2021.pdf",
        "bytes": 24801,
        "titleEn": "E-Tender 495 dt 23 12 2021"
      },
      {
        "id": "tender-2020-e-tender-50-dt-03-02-2020-pdf",
        "file": "E-Tender_50_dt__03_02_2020.pdf",
        "bytes": 35284,
        "titleEn": "E-Tender 50 dt 03 02 2020"
      },
      {
        "id": "tender-2020-e-tender-509-dt-31-12-2021-pdf",
        "file": "E-Tender_509_dt_31_12_2021.pdf",
        "bytes": 29414,
        "titleEn": "E-Tender 509 dt 31 12 2021"
      },
      {
        "id": "tender-2020-e-tender-54-dt-10-02-2020-pdf",
        "file": "E-Tender_54_dt__10_02_2020.pdf",
        "bytes": 21838,
        "titleEn": "E-Tender 54 dt 10 02 2020"
      },
      {
        "id": "tender-2020-e-tender-54-dt-18-02-2021-pdf",
        "file": "E-Tender_54_dt_18_02_2021.pdf",
        "bytes": 34300,
        "titleEn": "E-Tender 54 dt 18 02 2021"
      },
      {
        "id": "tender-2020-e-tender-63-dt-17-02-2020-pdf",
        "file": "E-Tender_63_dt__17_02_2020.pdf",
        "bytes": 22655,
        "titleEn": "E-Tender 63 dt 17 02 2020"
      },
      {
        "id": "tender-2020-e-tender-66-dt-24-02-2020-pdf",
        "file": "E-Tender_66_dt__24_02_2020.pdf",
        "bytes": 21446,
        "titleEn": "E-Tender 66 dt 24 02 2020"
      },
      {
        "id": "tender-2020-e-tender-69-dt-26-02-2020-pdf",
        "file": "E-Tender_69_dt__26_02_2020.pdf",
        "bytes": 47752,
        "titleEn": "E-Tender 69 dt 26 02 2020"
      },
      {
        "id": "tender-2020-e-tender-73-dt-08-03-2021-pdf",
        "file": "E-Tender_73_Dt_08_03_2021.pdf",
        "bytes": 508559,
        "titleEn": "E-Tender 73 Dt 08 03 2021"
      },
      {
        "id": "tender-2020-e-tender-79-dt-09-03-2020-pdf",
        "file": "E-Tender_79_Dt_09_03_2020.pdf",
        "bytes": 590752,
        "titleEn": "E-Tender 79 Dt 09 03 2020"
      },
      {
        "id": "tender-2020-e-tender-82-dt-13-03-2020-pdf",
        "file": "E-tender_82_dt_13_03_2020.pdf",
        "bytes": 19527,
        "titleEn": "E-tender 82 dt 13 03 2020"
      },
      {
        "id": "tender-2020-e-tender-83-dt-17-03-2021-pdf",
        "file": "E-Tender_83_dt__17_03_2021.pdf",
        "bytes": 29931,
        "titleEn": "E-Tender 83 dt 17 03 2021"
      },
      {
        "id": "tender-2020-e-tender-92-dt-13-05-2020-pdf",
        "file": "E-Tender_92_dt__13_05_2020.pdf",
        "bytes": 20102,
        "titleEn": "E-Tender 92 dt 13 05 2020"
      },
      {
        "id": "tender-2020-e-tender-95-dt-20-05-2020-pdf",
        "file": "E-Tender_95_dt_20_05_2020.pdf",
        "bytes": 26341,
        "titleEn": "E-Tender 95 dt 20 05 2020"
      },
      {
        "id": "tender-2020-e-tender-99-dt-12-04-2021-pdf",
        "file": "E-Tender_99_dt__12_04_2021.pdf",
        "bytes": 30093,
        "titleEn": "E-Tender 99 dt 12 04 2021"
      },
      {
        "id": "tender-2020-e-tender-99-dt-28-05-2020-pdf",
        "file": "E-Tender_99_dt__28_05_2020.pdf",
        "bytes": 610457,
        "titleEn": "E-Tender 99 dt 28 05 2020"
      },
      {
        "id": "tender-2020-ee-water-281-dt-20-01-2021-pdf",
        "file": "EE_water_281_dt__20_01_2021.pdf",
        "bytes": 76899,
        "titleEn": "EE water 281 dt 20 01 2021"
      },
      {
        "id": "tender-2020-ee-ww-287-dt-27-01-2021-pdf",
        "file": "EE_WW_287_dt__27_01_2021.pdf",
        "bytes": 76747,
        "titleEn": "EE WW 287 dt 27 01 2021"
      },
      {
        "id": "tender-2020-ee-ww-137-dt-20-10-2020-pdf",
        "file": "EE_WW-137_dt_20_10_2020.pdf",
        "bytes": 94724,
        "titleEn": "EE WW-137 dt 20 10 2020"
      },
      {
        "id": "tender-2020-garden-109-dt-15-02-2020-pdf",
        "file": "GARDEN_109_DT_15_02_2020.pdf",
        "bytes": 550610,
        "titleEn": "GARDEN 109 DT 15 02 2020"
      },
      {
        "id": "tender-2020-health-01-dt-27-01-2020-bhavsingpura-pdf",
        "file": "Health_01_dt__27_01_2020_bhavsingpura.pdf",
        "bytes": 52173,
        "titleEn": "Health 01 dt 27 01 2020 bhavsingpura"
      },
      {
        "id": "tender-2020-health-01-dt-27-01-2020-ganesh-colony-pdf",
        "file": "Health_01_dt__27_01_2020_ganesh_colony.pdf",
        "bytes": 45552,
        "titleEn": "Health 01 dt 27 01 2020 ganesh colony"
      },
      {
        "id": "tender-2020-health-01-dt-27-01-2020-sadat-nagar-pdf",
        "file": "Health_01_dt__27_01_2020_sadat_nagar.pdf",
        "bytes": 47451,
        "titleEn": "Health 01 dt 27 01 2020 sadat nagar"
      },
      {
        "id": "tender-2020-health-07-dt-10-12-2020-pdf",
        "file": "Health_07_dt__10_12_2020.pdf",
        "bytes": 51557,
        "titleEn": "Health 07 dt 10 12 2020"
      },
      {
        "id": "tender-2020-health-1028-dt-15-06-2020-pdf",
        "file": "HEALTH_1028_DT_15_06_2020.pdf",
        "bytes": 590362,
        "titleEn": "HEALTH 1028 DT 15 06 2020"
      },
      {
        "id": "tender-2020-health-1029-dt-15-06-2020-pdf",
        "file": "HEALTH_1029_DT_15_06_2020.pdf",
        "bytes": 556390,
        "titleEn": "HEALTH 1029 DT 15 06 2020"
      },
      {
        "id": "tender-2020-health-1068-dt-24-06-2020-pdf",
        "file": "HEALTH_1068_DT_24_06_2020.pdf",
        "bytes": 651605,
        "titleEn": "HEALTH 1068 DT 24 06 2020"
      },
      {
        "id": "tender-2020-health-1072-dt-24-06-2020-pdf",
        "file": "HEALTH_1072_DT_24_06_2020.pdf",
        "bytes": 591380,
        "titleEn": "HEALTH 1072 DT 24 06 2020"
      },
      {
        "id": "tender-2020-health-1073-dt-24-06-2020-pdf",
        "file": "HEALTH_1073_DT_24_06_2020.pdf",
        "bytes": 617043,
        "titleEn": "HEALTH 1073 DT 24 06 2020"
      },
      {
        "id": "tender-2020-health-1110-dt-01-07-2020-pdf",
        "file": "HEALTH_1110_DT_01_07_2020.pdf",
        "bytes": 630411,
        "titleEn": "HEALTH 1110 DT 01 07 2020"
      },
      {
        "id": "tender-2020-health-1111-dt-01-07-2020-pdf",
        "file": "HEALTH_1111_DT_01_07_2020.pdf",
        "bytes": 628233,
        "titleEn": "HEALTH 1111 DT 01 07 2020"
      },
      {
        "id": "tender-2020-health-1112-dt-01-07-2020-pdf",
        "file": "HEALTH_1112_DT_01_07_2020.pdf",
        "bytes": 614506,
        "titleEn": "HEALTH 1112 DT 01 07 2020"
      },
      {
        "id": "tender-2020-health-1113-dt-01-07-2020-pdf",
        "file": "HEALTH_1113_DT_01_07_2020.pdf",
        "bytes": 611813,
        "titleEn": "HEALTH 1113 DT 01 07 2020"
      },
      {
        "id": "tender-2020-health-1118-dt-02-07-2020-pdf",
        "file": "HEALTH_1118_DT_02_07_2020.pdf",
        "bytes": 570636,
        "titleEn": "HEALTH 1118 DT 02 07 2020"
      },
      {
        "id": "tender-2020-health-1120-dt-02-07-2020-pdf",
        "file": "HEALTH_1120_DT_02_07_2020.pdf",
        "bytes": 554928,
        "titleEn": "HEALTH 1120 DT 02 07 2020"
      },
      {
        "id": "tender-2020-health-1130-dt-03-07-2020-pdf",
        "file": "HEALTH_1130_DT_03_07_2020.pdf",
        "bytes": 605028,
        "titleEn": "HEALTH 1130 DT 03 07 2020"
      },
      {
        "id": "tender-2020-health-115-dt-11-02-2020-pdf",
        "file": "Health_115_dt__11_02_2020.pdf",
        "bytes": 59343,
        "titleEn": "Health 115 dt 11 02 2020"
      },
      {
        "id": "tender-2020-health-116-dt-11-02-2020-pdf",
        "file": "Health_116_dt__11_02_2020.pdf",
        "bytes": 62677,
        "titleEn": "Health 116 dt 11 02 2020"
      },
      {
        "id": "tender-2020-health-1182-dt-13-07-2020-pdf",
        "file": "HEALTH_1182_DT_13_07_2020.pdf",
        "bytes": 569108,
        "titleEn": "HEALTH 1182 DT 13 07 2020"
      },
      {
        "id": "tender-2020-health-1210-dt-16-07-2020-pdf",
        "file": "Health_1210_dt_16_07_2020.pdf",
        "bytes": 37427,
        "titleEn": "Health 1210 dt 16 07 2020"
      },
      {
        "id": "tender-2020-health-1218-dt-20-07-2020-pdf",
        "file": "HEALTH_1218_DT_20_07_2020.pdf",
        "bytes": 49164,
        "titleEn": "HEALTH 1218 DT 20 07 2020"
      },
      {
        "id": "tender-2020-health-1219-dt-20-07-2020-pdf",
        "file": "HEALTH_1219_DT__20_07_2020.pdf",
        "bytes": 49348,
        "titleEn": "HEALTH 1219 DT 20 07 2020"
      },
      {
        "id": "tender-2020-health-1220-dt-20-07-2020-pdf",
        "file": "HEALTH_1220_DT__20_07_2020.pdf",
        "bytes": 52554,
        "titleEn": "HEALTH 1220 DT 20 07 2020"
      },
      {
        "id": "tender-2020-health-1253-dt-24-07-2020-1-pdf",
        "file": "HEALTH_1253_DT_24_07_2020 (1).pdf",
        "bytes": 602729,
        "titleEn": "HEALTH 1253 DT 24 07 2020 (1)"
      },
      {
        "id": "tender-2020-health-1255-dt-24-07-2020-pdf",
        "file": "HEALTH_1255_DT_24_07_2020.pdf",
        "bytes": 708773,
        "titleEn": "HEALTH 1255 DT 24 07 2020"
      },
      {
        "id": "tender-2020-health-1256-dt-24-07-2020-pdf",
        "file": "HEALTH_1256_DT_24_07_2020.pdf",
        "bytes": 1153444,
        "titleEn": "HEALTH 1256 DT 24 07 2020"
      },
      {
        "id": "tender-2020-health-1257-dt-24-07-2020-pdf",
        "file": "HEALTH_1257_DT_24_07_2020.pdf",
        "bytes": 564292,
        "titleEn": "HEALTH 1257 DT 24 07 2020"
      },
      {
        "id": "tender-2020-health-1258-dt-24-07-2020-pdf",
        "file": "HEALTH_1258_DT_24_07_2020.pdf",
        "bytes": 578694,
        "titleEn": "HEALTH 1258 DT 24 07 2020"
      },
      {
        "id": "tender-2020-health-1259-dt-24-07-2020-pdf",
        "file": "HEALTH_1259_DT_24_07_2020.pdf",
        "bytes": 593545,
        "titleEn": "HEALTH 1259 DT 24 07 2020"
      },
      {
        "id": "tender-2020-health-1283-dt-28-07-2020-pdf",
        "file": "Health_1283_dt__28_07_2020.pdf",
        "bytes": 20889,
        "titleEn": "Health 1283 dt 28 07 2020"
      },
      {
        "id": "tender-2020-health-13-dt-17-03-2021-pdf",
        "file": "Health_13_dt__17_03_2021.pdf",
        "bytes": 67116,
        "titleEn": "Health 13 dt 17 03 2021"
      },
      {
        "id": "tender-2020-health-1301-dt-31-07-2020-pdf",
        "file": "Health_1301_dt_31_07_2020.pdf",
        "bytes": 40255,
        "titleEn": "Health 1301 dt 31 07 2020"
      },
      {
        "id": "tender-2020-health-1302-dt-31-07-2020-pdf",
        "file": "Health_1302_dt_31_07_2020.pdf",
        "bytes": 49960,
        "titleEn": "Health 1302 dt 31 07 2020"
      },
      {
        "id": "tender-2020-health-1303-dt-31-07-2020-pdf",
        "file": "Health_1303_dt_31_07_2020.pdf",
        "bytes": 55932,
        "titleEn": "Health 1303 dt 31 07 2020"
      },
      {
        "id": "tender-2020-health-1334-dt-05-08-2020-pdf",
        "file": "Health_1334_dt_05_08_2020.pdf",
        "bytes": 80498,
        "titleEn": "Health 1334 dt 05 08 2020"
      },
      {
        "id": "tender-2020-health-134-dt-15-01-2021-pdf",
        "file": "Health_134_dt__15_01_2021.pdf",
        "bytes": 58757,
        "titleEn": "Health 134 dt 15 01 2021"
      },
      {
        "id": "tender-2020-health-136-dt-15-01-2021-pdf",
        "file": "Health_136_dt__15_01_2021.pdf",
        "bytes": 56250,
        "titleEn": "Health 136 dt 15 01 2021"
      },
      {
        "id": "tender-2020-health-1401-dt-10-08-2020-pdf",
        "file": "Health_1401_dt__10_08_2020.pdf",
        "bytes": 58294,
        "titleEn": "Health 1401 dt 10 08 2020"
      },
      {
        "id": "tender-2020-health-1403-dt-10-08-2020-pdf",
        "file": "health_1403_dt__10_08_2020.pdf",
        "bytes": 53898,
        "titleEn": "health 1403 dt 10 08 2020"
      },
      {
        "id": "tender-2020-health-1418-dt-12-08-2020-pdf",
        "file": "HEALTH_1418_DT_12_08_2020.pdf",
        "bytes": 700271,
        "titleEn": "HEALTH 1418 DT 12 08 2020"
      },
      {
        "id": "tender-2020-health-1419-dt-12-08-2020-pdf",
        "file": "HEALTH_1419_DT_12_08_2020.pdf",
        "bytes": 582050,
        "titleEn": "HEALTH 1419 DT 12 08 2020"
      },
      {
        "id": "tender-2020-health-1421-dt-13-08-2020-pdf",
        "file": "HEALTH_1421_DT_13_08_2020.pdf",
        "bytes": 601540,
        "titleEn": "HEALTH 1421 DT 13 08 2020"
      },
      {
        "id": "tender-2020-health-1429-dt-14-08-2020-pdf",
        "file": "Health_1429_dt__14_08_2020.pdf",
        "bytes": 49744,
        "titleEn": "Health 1429 dt 14 08 2020"
      },
      {
        "id": "tender-2020-health-1448-dt-19-08-2020-pdf",
        "file": "Health_1448_dt__19_08_2020.pdf",
        "bytes": 68724,
        "titleEn": "Health 1448 dt 19 08 2020"
      },
      {
        "id": "tender-2020-health-1449-dt-19-08-2020-pdf",
        "file": "Health_1449_dt__19_08_2020.pdf",
        "bytes": 82135,
        "titleEn": "Health 1449 dt 19 08 2020"
      },
      {
        "id": "tender-2020-health-1500-dt-01-09-2020-pdf",
        "file": "HEALTH_1500_DT_01_09_2020.pdf",
        "bytes": 552970,
        "titleEn": "HEALTH 1500 DT 01 09 2020"
      },
      {
        "id": "tender-2020-health-1501-dt-01-09-2020-pdf",
        "file": "HEALTH_1501_DT_01_09_2020.pdf",
        "bytes": 590348,
        "titleEn": "HEALTH 1501 DT 01 09 2020"
      },
      {
        "id": "tender-2020-health-1506-dt-02-09-2020-pdf",
        "file": "Health_1506_dt__02_09_2020.pdf",
        "bytes": 38234,
        "titleEn": "Health 1506 dt 02 09 2020"
      },
      {
        "id": "tender-2020-health-1507-dt-02-09-2020-pdf",
        "file": "Health_1507_dt__02_09_2020.pdf",
        "bytes": 45089,
        "titleEn": "Health 1507 dt 02 09 2020"
      },
      {
        "id": "tender-2020-health-1508-dt-02-09-2020-pdf",
        "file": "Health_1508_dt__02_09_2020.pdf",
        "bytes": 50438,
        "titleEn": "Health 1508 dt 02 09 2020"
      },
      {
        "id": "tender-2020-health-1541-dt-07-09-2020-pdf",
        "file": "Health_1541_dt__07_09_2020.pdf",
        "bytes": 43572,
        "titleEn": "Health 1541 dt 07 09 2020"
      },
      {
        "id": "tender-2020-health-1558-dt-11092020-pdf",
        "file": "HEALTH_1558_DT_11092020.pdf",
        "bytes": 675755,
        "titleEn": "HEALTH 1558 DT 11092020"
      },
      {
        "id": "tender-2020-health-1566-dt-14-09-2020-pdf",
        "file": "health_1566_dt__14_09_2020.pdf",
        "bytes": 30360,
        "titleEn": "health 1566 dt 14 09 2020"
      },
      {
        "id": "tender-2020-health-1602-dt-21-09-2020-pdf",
        "file": "Health_1602_dt_21_09_2020.pdf",
        "bytes": 52014,
        "titleEn": "Health 1602 dt 21 09 2020"
      },
      {
        "id": "tender-2020-health-1726-dt-08-10-2020-pdf",
        "file": "Health_1726_dt_08_10_2020.pdf",
        "bytes": 46657,
        "titleEn": "Health 1726 dt 08 10 2020"
      },
      {
        "id": "tender-2020-health-1754-dt-13-10-2020-pdf",
        "file": "Health_1754_dt__13_10_2020.pdf",
        "bytes": 52433,
        "titleEn": "Health 1754 dt 13 10 2020"
      },
      {
        "id": "tender-2020-health-1775-dt-19-10-2020-pdf",
        "file": "Health_1775_dt__19_10_2020.pdf",
        "bytes": 64009,
        "titleEn": "Health 1775 dt 19 10 2020"
      },
      {
        "id": "tender-2020-health-1838-dt-28-10-2020-pdf",
        "file": "health_1838_dt_28_10_2020.pdf",
        "bytes": 52140,
        "titleEn": "health 1838 dt 28 10 2020"
      },
      {
        "id": "tender-2020-health-1840-dt-28-10-2020-pdf",
        "file": "Health_1840_dt__28_10_2020.pdf",
        "bytes": 60865,
        "titleEn": "Health 1840 dt 28 10 2020"
      },
      {
        "id": "tender-2020-health-19-dt-27-01-2021-pdf",
        "file": "Health_19_dt__27_01_2021.pdf",
        "bytes": 77450,
        "titleEn": "Health 19 dt 27 01 2021"
      },
      {
        "id": "tender-2020-health-1928-dt-18-11-2020-pdf",
        "file": "Health_1928_dt__18_11_2020.pdf",
        "bytes": 53394,
        "titleEn": "Health 1928 dt 18 11 2020"
      },
      {
        "id": "tender-2020-health-218-dt-01-10-2020-pdf",
        "file": "Health_218_dt__01_10_2020.pdf",
        "bytes": 25628,
        "titleEn": "Health 218 dt 01 10 2020"
      },
      {
        "id": "tender-2020-health-2197-dt-01-06-2021-pdf",
        "file": "Health_2197_dt__01_06_2021.pdf",
        "bytes": 45184,
        "titleEn": "Health 2197 dt 01 06 2021"
      },
      {
        "id": "tender-2020-health-2198-dt-01-06-2021-pdf",
        "file": "Health_2198_dt__01_06_2021.pdf",
        "bytes": 48620,
        "titleEn": "Health 2198 dt 01 06 2021"
      },
      {
        "id": "tender-2020-health-246-dt-25-01-2021-pdf",
        "file": "Health_246_dt__25_01_2021.pdf",
        "bytes": 50540,
        "titleEn": "Health 246 dt 25 01 2021"
      },
      {
        "id": "tender-2020-health-30-dt-02-01-2020-pdf",
        "file": "Health_30_dt__02_01_2020.pdf",
        "bytes": 1073931,
        "titleEn": "Health 30 dt 02 01 2020"
      },
      {
        "id": "tender-2020-health-318-dt-20-02-2020-pdf",
        "file": "Health_318_dt__20_02_2020.pdf",
        "bytes": 28634,
        "titleEn": "Health 318 dt 20 02 2020"
      },
      {
        "id": "tender-2020-health-3392-dt-24-09-2021-pdf",
        "file": "Health_3392_dt__24_09_2021.pdf",
        "bytes": 396785,
        "titleEn": "Health 3392 dt 24 09 2021"
      },
      {
        "id": "tender-2020-health-3396-dt-24-09-2021-pdf",
        "file": "Health_3396_dt__24_09_2021.pdf",
        "bytes": 56072,
        "titleEn": "Health 3396 dt 24 09 2021"
      },
      {
        "id": "tender-2020-health-350-dt-28-02-2020-pdf",
        "file": "Health_350_dt__28_02_2020.pdf",
        "bytes": 41422,
        "titleEn": "Health 350 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-351-dt-28-02-2020-pdf",
        "file": "Health_351_dt__28_02_2020.pdf",
        "bytes": 43943,
        "titleEn": "Health 351 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-352-dt-28-02-2020-pdf",
        "file": "Health_352_dt__28_02_2020.pdf",
        "bytes": 47538,
        "titleEn": "Health 352 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-353-dt-28-02-2020-pdf",
        "file": "Health_353_dt__28_02_2020.pdf",
        "bytes": 45840,
        "titleEn": "Health 353 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-354-dt-28-02-2020-pdf",
        "file": "Health_354_dt__28_02_2020.pdf",
        "bytes": 44243,
        "titleEn": "Health 354 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-355-dt-28-02-2020-pdf",
        "file": "Health_355_dt__28_02_2020.pdf",
        "bytes": 45382,
        "titleEn": "Health 355 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-356-dt-28-02-2020-pdf",
        "file": "Health_356_dt__28_02_2020.pdf",
        "bytes": 38072,
        "titleEn": "Health 356 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-357-dt-28-02-2020-pdf",
        "file": "Health_357_dt__28_02_2020.pdf",
        "bytes": 35679,
        "titleEn": "Health 357 dt 28 02 2020"
      },
      {
        "id": "tender-2020-health-3642-dt-26-10-2021-pdf",
        "file": "Health_3642_dt_26_10_2021.pdf",
        "bytes": 230640,
        "titleEn": "Health 3642 dt 26 10 2021"
      },
      {
        "id": "tender-2020-health-376-dt-03-03-2020-pdf",
        "file": "Health_376_dt__03_03_2020.pdf",
        "bytes": 50233,
        "titleEn": "Health 376 dt 03 03 2020"
      },
      {
        "id": "tender-2020-health-38-dt-15-01-2020-pdf",
        "file": "Health_38_dt__15_01_2020.pdf",
        "bytes": 103659,
        "titleEn": "Health 38 dt 15 01 2020"
      },
      {
        "id": "tender-2020-health-3873-dt-25-11-2021-pdf",
        "file": "Health_3873_dt_25_11_2021.pdf",
        "bytes": 472602,
        "titleEn": "Health 3873 dt 25 11 2021"
      },
      {
        "id": "tender-2020-health-39-dt-09-01-2020-pdf",
        "file": "Health_39_dt__09_01_2020.pdf",
        "bytes": 27001,
        "titleEn": "Health 39 dt 09 01 2020"
      },
      {
        "id": "tender-2020-health-410-dt-09-03-2020-pdf",
        "file": "Health_410_Dt_09_03_2020.pdf",
        "bytes": 658061,
        "titleEn": "Health 410 Dt 09 03 2020"
      },
      {
        "id": "tender-2020-health-411-dt-09-03-2020-pdf",
        "file": "Health_411_Dt_09_03_2020.pdf",
        "bytes": 660321,
        "titleEn": "Health 411 Dt 09 03 2020"
      },
      {
        "id": "tender-2020-health-412-dt-09-03-2020-pdf",
        "file": "Health_412_Dt_09_03_2020.pdf",
        "bytes": 666735,
        "titleEn": "Health 412 Dt 09 03 2020"
      },
      {
        "id": "tender-2020-health-439-dt-22-02-2021-pdf",
        "file": "Health_439_dt__22_02_2021.pdf",
        "bytes": 54367,
        "titleEn": "Health 439 dt 22 02 2021"
      },
      {
        "id": "tender-2020-health-44-dt-31-08-2021-pdf",
        "file": "Health_44_dt__31_08_2021.pdf",
        "bytes": 78854,
        "titleEn": "Health 44 dt 31 08 2021"
      },
      {
        "id": "tender-2020-health-502-dt-26-02-2021-pdf",
        "file": "Health_502_dt__26_02_2021.pdf",
        "bytes": 42908,
        "titleEn": "Health 502 dt 26 02 2021"
      },
      {
        "id": "tender-2020-health-505-dt-26-03-2020-pdf",
        "file": "Health_505_dt__26_03_2020.pdf",
        "bytes": 26269,
        "titleEn": "Health 505 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-506-dt-26-03-2020-pdf",
        "file": "Health_506_dt__26_03_2020.pdf",
        "bytes": 26902,
        "titleEn": "Health 506 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-507-dt-26-03-2020-pdf",
        "file": "Health_507_dt__26_03_2020.pdf",
        "bytes": 23597,
        "titleEn": "Health 507 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-508-dt-26-03-2020-pdf",
        "file": "Health_508_dt__26_03_2020.pdf",
        "bytes": 25233,
        "titleEn": "Health 508 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-509-dt-26-03-2020-pdf",
        "file": "Health_509_dt__26_03_2020.pdf",
        "bytes": 25993,
        "titleEn": "Health 509 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-510-dt-26-03-2020-pdf",
        "file": "Health_510_dt__26_03_2020.pdf",
        "bytes": 29277,
        "titleEn": "Health 510 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-511-dt-26-03-2020-pdf",
        "file": "Health_511_dt__26_03_2020.pdf",
        "bytes": 25677,
        "titleEn": "Health 511 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-512-dt-26-03-2020-pdf",
        "file": "Health_512_dt__26_03_2020.pdf",
        "bytes": 24108,
        "titleEn": "Health 512 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-513-dt-26-03-2020-pdf",
        "file": "Health_513_dt__26_03_2020.pdf",
        "bytes": 25953,
        "titleEn": "Health 513 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-514-dt-26-03-2020-pdf",
        "file": "Health_514_dt__26_03_2020.pdf",
        "bytes": 30054,
        "titleEn": "Health 514 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-515-dt-26-03-2020-pdf",
        "file": "Health_515_dt__26_03_2020.pdf",
        "bytes": 26817,
        "titleEn": "Health 515 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-516-dt-07-02-2020-pdf",
        "file": "Health_516_dt__07_02_2020.pdf",
        "bytes": 42692,
        "titleEn": "Health 516 dt 07 02 2020"
      },
      {
        "id": "tender-2020-health-516-dt-26-03-2020-pdf",
        "file": "Health_516_dt__26_03_2020.pdf",
        "bytes": 28097,
        "titleEn": "Health 516 dt 26 03 2020"
      },
      {
        "id": "tender-2020-health-52-dt-10-01-2020-pdf",
        "file": "Health_52_dt__10_01_2020.pdf",
        "bytes": 33415,
        "titleEn": "Health 52 dt 10 01 2020"
      },
      {
        "id": "tender-2020-health-528-dt-14-01-2020-pdf",
        "file": "Health_528_dt__14_01_2020.pdf",
        "bytes": 80171,
        "titleEn": "Health 528 dt 14 01 2020"
      },
      {
        "id": "tender-2020-health-545-dt-08-03-2021-pdf",
        "file": "Health_545_dt__08_03_2021.pdf",
        "bytes": 59343,
        "titleEn": "Health 545 dt 08 03 2021"
      },
      {
        "id": "tender-2020-health-570-dt-04-02-2020-1-pdf",
        "file": "Health_570_dt__04_02_2020 (1).pdf",
        "bytes": 50186,
        "titleEn": "Health 570 dt 04 02 2020 (1)"
      },
      {
        "id": "tender-2020-health-59-dt-27-01-2020-pdf",
        "file": "Health_59_dt_27_01_2020.pdf",
        "bytes": 40466,
        "titleEn": "Health 59 dt 27 01 2020"
      },
      {
        "id": "tender-2020-health-609-dt-16-03-2021-pdf",
        "file": "Health_609_dt__16_03_2021.pdf",
        "bytes": 50635,
        "titleEn": "Health 609 dt 16 03 2021"
      },
      {
        "id": "tender-2020-health-639-dt-15-04-2020-pdf",
        "file": "HEALTH_639_DT_15_04_2020.pdf",
        "bytes": 1057244,
        "titleEn": "HEALTH 639 DT 15 04 2020"
      },
      {
        "id": "tender-2020-health-64-dt-07-01-2020-pdf",
        "file": "Health_64_dt__07_01_2020.pdf",
        "bytes": 52658,
        "titleEn": "Health 64 dt 07 01 2020"
      },
      {
        "id": "tender-2020-health-640-dt-15-04-2020-pdf",
        "file": "HEALTH_640_DT_15_04_2020.pdf",
        "bytes": 1049515,
        "titleEn": "HEALTH 640 DT 15 04 2020"
      },
      {
        "id": "tender-2020-health-641-dt-15-04-2020-pdf",
        "file": "HEALTH_641_DT_15_04_2020.pdf",
        "bytes": 1122418,
        "titleEn": "HEALTH 641 DT 15 04 2020"
      },
      {
        "id": "tender-2020-health-65-dt-07-01-2020-pdf",
        "file": "Health_65_dt__07_01_2020.pdf",
        "bytes": 54010,
        "titleEn": "Health 65 dt 07 01 2020"
      },
      {
        "id": "tender-2020-health-652-dt-16-04-2020-pdf",
        "file": "HEALTH_652_DT_16_04_2020.pdf",
        "bytes": 1307976,
        "titleEn": "HEALTH 652 DT 16 04 2020"
      },
      {
        "id": "tender-2020-health-654-dt-16-04-2020-pdf",
        "file": "HEALTH_654_DT_16_04_2020.pdf",
        "bytes": 965512,
        "titleEn": "HEALTH 654 DT 16 04 2020"
      },
      {
        "id": "tender-2020-health-66-dt-07-01-2020-pdf",
        "file": "Health_66_dt__07_01_2020.pdf",
        "bytes": 47824,
        "titleEn": "Health 66 dt 07 01 2020"
      },
      {
        "id": "tender-2020-health-665-dt-17-04-2020-pdf",
        "file": "HEALTH_665_DT_17_04_2020.pdf",
        "bytes": 1023506,
        "titleEn": "HEALTH 665 DT 17 04 2020"
      },
      {
        "id": "tender-2020-health-676-dt-22-03-2021-pdf",
        "file": "Health_676_dt__22_03_2021.pdf",
        "bytes": 59422,
        "titleEn": "Health 676 dt 22 03 2021"
      },
      {
        "id": "tender-2020-health-697-dt-21-04-2020-pdf",
        "file": "HEALTH_697_DT_21_04_2020.pdf",
        "bytes": 2119691,
        "titleEn": "HEALTH 697 DT 21 04 2020"
      },
      {
        "id": "tender-2020-health-698-dt-21-04-2020-pdf",
        "file": "HEALTH_698_DT_21_04_2020.pdf",
        "bytes": 1052715,
        "titleEn": "HEALTH 698 DT 21 04 2020"
      },
      {
        "id": "tender-2020-health-699-dt-21-04-2020-pdf",
        "file": "HEALTH_699_DT_21_04_2020.pdf",
        "bytes": 1084030,
        "titleEn": "HEALTH 699 DT 21 04 2020"
      },
      {
        "id": "tender-2020-health-728-dt-26-03-2021-pdf",
        "file": "Health_728_dt__26_03_2021.pdf",
        "bytes": 31157,
        "titleEn": "Health 728 dt 26 03 2021"
      },
      {
        "id": "tender-2020-health-76-dt-27-01-2020-pdf",
        "file": "Health_76_dt__27_01_2020.pdf",
        "bytes": 39245,
        "titleEn": "Health 76 dt 27 01 2020"
      },
      {
        "id": "tender-2020-health-762-dt-29-04-2020-pdf",
        "file": "HEALTH_762_DT_29_04_2020.pdf",
        "bytes": 664256,
        "titleEn": "HEALTH 762 DT 29 04 2020"
      },
      {
        "id": "tender-2020-health-808-dt-04-05-2020-pdf",
        "file": "Health_808_Dt__04_05_2020.pdf",
        "bytes": 563707,
        "titleEn": "Health 808 Dt 04 05 2020"
      },
      {
        "id": "tender-2020-health-809-dt-04-05-2020-pdf",
        "file": "Health_809_Dt__04_05_2020.pdf",
        "bytes": 410119,
        "titleEn": "Health 809 Dt 04 05 2020"
      },
      {
        "id": "tender-2020-health-811-dt-04-05-2020-pdf",
        "file": "Health_811_Dt__04_05_2020.pdf",
        "bytes": 272735,
        "titleEn": "Health 811 Dt 04 05 2020"
      },
      {
        "id": "tender-2020-health-812-dt-11052020-pdf",
        "file": "HEALTH_812_DT_11052020.pdf",
        "bytes": 857727,
        "titleEn": "HEALTH 812 DT 11052020"
      },
      {
        "id": "tender-2020-health-813-dt-11052020-pdf",
        "file": "HEALTH_813_DT_11052020.pdf",
        "bytes": 982490,
        "titleEn": "HEALTH 813 DT 11052020"
      },
      {
        "id": "tender-2020-health-814-dt-11052020-pdf",
        "file": "HEALTH_814_DT_11052020.pdf",
        "bytes": 975099,
        "titleEn": "HEALTH 814 DT 11052020"
      },
      {
        "id": "tender-2020-health-815-dt-11052020-pdf",
        "file": "HEALTH_815_DT_11052020.pdf",
        "bytes": 940161,
        "titleEn": "HEALTH 815 DT 11052020"
      },
      {
        "id": "tender-2020-health-816-dt-12052020-pdf",
        "file": "HEALTH_816_DT_12052020.pdf",
        "bytes": 881519,
        "titleEn": "HEALTH 816 DT 12052020"
      },
      {
        "id": "tender-2020-health-821-dt-05-05-2020-pdf",
        "file": "Health_821_Dt_05_05_2020.pdf",
        "bytes": 591701,
        "titleEn": "Health 821 Dt 05 05 2020"
      },
      {
        "id": "tender-2020-health-822-dt-05-05-2020-pdf",
        "file": "Health_822_Dt_05_05_2020.pdf",
        "bytes": 591500,
        "titleEn": "Health 822 Dt 05 05 2020"
      },
      {
        "id": "tender-2020-health-840-dt-14052020-pdf",
        "file": "HEALTH_840_DT_14052020.pdf",
        "bytes": 830990,
        "titleEn": "HEALTH 840 DT 14052020"
      },
      {
        "id": "tender-2020-health-845-dt-08-05-2020-pdf",
        "file": "Health_845_Dt_08_05_2020.pdf",
        "bytes": 646801,
        "titleEn": "Health 845 Dt 08 05 2020"
      },
      {
        "id": "tender-2020-health-846-dt-15052020-pdf",
        "file": "HEALTH_846_DT_15052020.pdf",
        "bytes": 780600,
        "titleEn": "HEALTH 846 DT 15052020"
      },
      {
        "id": "tender-2020-health-853-dt-08-05-2020-pdf",
        "file": "Health_853_Dt_08_05_2020.pdf",
        "bytes": 613444,
        "titleEn": "Health 853 Dt 08 05 2020"
      },
      {
        "id": "tender-2020-health-855-dt-15052020-pdf",
        "file": "HEALTH_855_DT_15052020.pdf",
        "bytes": 943162,
        "titleEn": "HEALTH 855 DT 15052020"
      },
      {
        "id": "tender-2020-health-857-a-dt-20-04-2021-pdf",
        "file": "Health_857_A_DT_20_04_2021.pdf",
        "bytes": 354267,
        "titleEn": "Health 857 A DT 20 04 2021"
      },
      {
        "id": "tender-2020-health-857-dt-08-05-2020-pdf",
        "file": "Health_857_Dt_08_05_2020.pdf",
        "bytes": 689207,
        "titleEn": "Health 857 Dt 08 05 2020"
      },
      {
        "id": "tender-2020-health-978-dt04062020-pdf",
        "file": "HEALTH_978_DT04062020.pdf",
        "bytes": 666098,
        "titleEn": "HEALTH 978 DT04062020"
      },
      {
        "id": "tender-2020-health-979-dt04062020-pdf",
        "file": "HEALTH_979_DT04062020.pdf",
        "bytes": 595735,
        "titleEn": "HEALTH 979 DT04062020"
      },
      {
        "id": "tender-2020-health-986-dt06062020-pdf",
        "file": "HEALTH_986_DT06062020.pdf",
        "bytes": 721754,
        "titleEn": "HEALTH 986 DT06062020"
      },
      {
        "id": "tender-2020-health967dt03062020-pdf",
        "file": "HEALTH967DT03062020.pdf",
        "bytes": 352228,
        "titleEn": "HEALTH967DT03062020"
      },
      {
        "id": "tender-2020-light-182-dt-06-05-2020-pdf",
        "file": "Light_182_Dt_06_05_2020.pdf",
        "bytes": 334067,
        "titleEn": "Light 182 Dt 06 05 2020"
      },
      {
        "id": "tender-2020-new-doc-2020-04-11-16-36-34-pdf",
        "file": "New_Doc_2020-04-11_16_36_34.pdf",
        "bytes": 967778,
        "titleEn": "New Doc 2020-04-11 16 36 34"
      },
      {
        "id": "tender-2020-pp-1043-dt-27-07-2020-pdf",
        "file": "PP_1043_DT_27_07_2020.pdf",
        "bytes": 1632735,
        "titleEn": "PP 1043 DT 27 07 2020"
      },
      {
        "id": "tender-2020-store-101-dt-26-10-2021-pdf",
        "file": "Store_101_dt__26_10_2021.pdf",
        "bytes": 40850,
        "titleEn": "Store 101 dt 26 10 2021"
      },
      {
        "id": "tender-2020-store-139-dt-30-12-2021-pdf",
        "file": "Store_139_dt__30_12_2021.pdf",
        "bytes": 808506,
        "titleEn": "Store 139 dt 30 12 2021"
      },
      {
        "id": "tender-2020-ward-eng-g-02-dt-05-05-2020-pdf",
        "file": "WARD_ENG_G_02_DT_05_05_2020.pdf",
        "bytes": 3413602,
        "titleEn": "WARD ENG G 02 DT 05 05 2020"
      },
      {
        "id": "tender-2020-water-2-dt-04-08-2020-pdf",
        "file": "water_2_dt__04_08_2020.pdf",
        "bytes": 112185,
        "titleEn": "water 2 dt 04 08 2020"
      },
      {
        "id": "tender-2020-zoo-272-dt-28-04-2020-pdf",
        "file": "ZOO_272_DT_28_04_2020.pdf",
        "bytes": 562821,
        "titleEn": "ZOO 272 DT 28 04 2020"
      }
    ]
  },
  {
    "folder": [
      "Municipal Document Repository",
      "Tenders",
      "Tender 2018-2019"
    ],
    "headingEn": "Tender notices 2018-2019",
    "headingMr": "निविदा सूचना 2018-2019",
    "documents": [
      {
        "id": "tender-tender-2018-2019-115-20-07-2017-pdf",
        "file": "115_20_07_2017.PDF",
        "bytes": 169707,
        "titleEn": "115 20 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-1253-pdf",
        "file": "1253.pdf",
        "bytes": 36394,
        "titleEn": "Tender 1253"
      },
      {
        "id": "tender-tender-2018-2019-213-15-07-2017-pdf",
        "file": "213_15_07_2017.PDF",
        "bytes": 112945,
        "titleEn": "213 15 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-292-27-07-2018-pdf",
        "file": "292_27_07_2018.PDF",
        "bytes": 11395786,
        "titleEn": "292 27 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-346-24-07-2017-pdf",
        "file": "346_24_07_2017.PDF",
        "bytes": 316393,
        "titleEn": "346 24 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-395-21-08-2017-pdf",
        "file": "395_21_08_2017.PDF",
        "bytes": 2401108,
        "titleEn": "395 21 08 2017"
      },
      {
        "id": "tender-tender-2018-2019-448-pdf",
        "file": "448.pdf",
        "bytes": 68538,
        "titleEn": "Tender 448"
      },
      {
        "id": "tender-tender-2018-2019-592-19-12-2017-pdf",
        "file": "592_19_12_2017.PDF",
        "bytes": 1882900,
        "titleEn": "592 19 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-988-14-12-2017-pdf",
        "file": "988_14_12_2017.PDF",
        "bytes": 373592,
        "titleEn": "988 14 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-ascdcl-rfp-for-bus-shelters-vol-i-pdf",
        "file": "ASCDCL_RFP_for_Bus_Shelters_Vol_I.pdf",
        "bytes": 1211158,
        "titleEn": "ASCDCL RFP for Bus Shelters Vol I"
      },
      {
        "id": "tender-tender-2018-2019-ascdcl-rfp-for-bus-shelters-vol-ii-pdf",
        "file": "ASCDCL_RFP_for_Bus_Shelters_Vol_II.pdf",
        "bytes": 1713876,
        "titleEn": "ASCDCL RFP for Bus Shelters Vol II"
      },
      {
        "id": "tender-tender-2018-2019-comp-254-dt-26-12-2019-pdf",
        "file": "comp_254_dt__26_12_2019.pdf",
        "bytes": 63848,
        "titleEn": "comp 254 dt 26 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-comp-53-dt-13-03-2019-pdf",
        "file": "Comp_53_dt__13_03_2019.pdf",
        "bytes": 76955,
        "titleEn": "Comp 53 dt 13 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-comp-54-dt-13-03-2019-pdf",
        "file": "Comp_54_dt__13_03_2019.pdf",
        "bytes": 99349,
        "titleEn": "Comp 54 dt 13 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-computer-104-dt-25-06-2019-pdf",
        "file": "Computer_104_Dt_25_06_2019.PDF",
        "bytes": 49820,
        "titleEn": "Computer 104 Dt 25 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-computer-107-dt-26-06-2019-pdf",
        "file": "Computer_107_Dt__26_06_2019.PDF",
        "bytes": 50762,
        "titleEn": "Computer 107 Dt 26 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-computer-116-dt-06-07-2019-pdf",
        "file": "Computer_116_DT_06_07_2019.PDF",
        "bytes": 838840,
        "titleEn": "Computer 116 DT 06 07 2019"
      },
      {
        "id": "tender-tender-2018-2019-computer-131-02-06-2018-pdf",
        "file": "Computer_131_02_06_2018.PDF",
        "bytes": 1221377,
        "titleEn": "Computer 131 02 06 2018"
      },
      {
        "id": "tender-tender-2018-2019-computer-139-12-06-2018-pdf",
        "file": "Computer_139_12_06_2018_.PDF",
        "bytes": 882468,
        "titleEn": "Computer 139 12 06 2018"
      },
      {
        "id": "tender-tender-2018-2019-computer-148-dt28-08-2018-pdf",
        "file": "Computer_148_dt28_08_2018.pdf",
        "bytes": 167702,
        "titleEn": "Computer 148 dt28 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-computer-166-05-07-2017-pdf",
        "file": "Computer_166_05_07_2017.PDF",
        "bytes": 143104,
        "titleEn": "Computer 166 05 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-computer-207-18-09-17-pdf",
        "file": "Computer_207_18_09_17.pdf",
        "bytes": 702199,
        "titleEn": "Computer 207 18 09 17"
      },
      {
        "id": "tender-tender-2018-2019-computer-215-06-10-2017-pdf",
        "file": "Computer_215_06_10_2017.PDF",
        "bytes": 992632,
        "titleEn": "Computer 215 06 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-computer-223-17-10-2017-pdf",
        "file": "Computer_223_17_10_2017.PDF",
        "bytes": 957896,
        "titleEn": "Computer 223 17 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-computer-257-dt-15-11-2018-pdf",
        "file": "Computer_257_dt__15_11_2018.PDF",
        "bytes": 76967,
        "titleEn": "Computer 257 dt 15 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-computer-92-dt-01-06-2019-pdf",
        "file": "Computer_92_Dt_01_06_2019.pdf",
        "bytes": 1929996,
        "titleEn": "Computer 92 Dt 01 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-dept-eng-425-dt-20-11-2018-pdf",
        "file": "dept_eng_425_dt__20_11_2018.PDF",
        "bytes": 89493,
        "titleEn": "dept eng 425 dt 20 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-dy-eng-161-31-07-2018-pdf",
        "file": "Dy__Eng_161_31_07_2018.PDF",
        "bytes": 1507368,
        "titleEn": "Dy Eng 161 31 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-dy-e-495-09-01-2018-pdf",
        "file": "DY_E_495_09_01_2018.PDF",
        "bytes": 1554333,
        "titleEn": "DY E 495 09 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-dy-eng-432-16-12-2017-pdf",
        "file": "Dy_Eng_432_16_12_2017.PDF",
        "bytes": 1278065,
        "titleEn": "Dy Eng 432 16 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-dy-eng-05-dt-15-07-2019-pdf",
        "file": "dy_eng-05_dt__15_07_2019.pdf",
        "bytes": 64169,
        "titleEn": "dy eng-05 dt 15 07 2019"
      },
      {
        "id": "tender-tender-2018-2019-dye-462-28-12-2017-pdf",
        "file": "DYE_462_28_12_2017.PDF",
        "bytes": 1228697,
        "titleEn": "DYE 462 28 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-08-08-11-2017-pdf",
        "file": "E-Tender_08_08_11_2017.PDF",
        "bytes": 53115,
        "titleEn": "E-Tender 08 08 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-09-08-11-2017-pdf",
        "file": "E-Tender_09_08_11_2017.PDF",
        "bytes": 52244,
        "titleEn": "E-Tender 09 08 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-1-03-11-2017-pdf",
        "file": "E-Tender_1_03_11_2017.PDF",
        "bytes": 435487,
        "titleEn": "E-Tender 1 03 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-10-08-11-2017-pdf",
        "file": "E-Tender_10_08_11_2017.PDF",
        "bytes": 51720,
        "titleEn": "E-Tender 10 08 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-100-08-05-2018-pdf",
        "file": "E-Tender_100_08_05_2018.PDF",
        "bytes": 47196,
        "titleEn": "E-Tender 100 08 05 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-100-14-07-2017-pdf",
        "file": "E-Tender_100_14_07_2017.PDF",
        "bytes": 77376,
        "titleEn": "E-Tender 100 14 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-101-14-07-2017-pdf",
        "file": "E-Tender_101_14_07_2017.PDF",
        "bytes": 68857,
        "titleEn": "E-Tender 101 14 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-101-18-05-2018-pdf",
        "file": "E-Tender_101_18_05_2018.PDF",
        "bytes": 1141046,
        "titleEn": "E-Tender 101 18 05 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-102-22-05-2018-pdf",
        "file": "E-Tender_102_22_05_2018.PDF",
        "bytes": 948970,
        "titleEn": "E-Tender 102 22 05 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-106-14-07-2017-pdf",
        "file": "E-Tender_106_14_07_2017.PDF",
        "bytes": 84596,
        "titleEn": "E-Tender 106 14 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-107-08-06-2018-pdf",
        "file": "E-Tender_107_08_06_2018.PDF",
        "bytes": 1325368,
        "titleEn": "E-Tender 107 08 06 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-11-16-11-2017-pdf",
        "file": "E-Tender_11_16_11_2017.PDF",
        "bytes": 58042,
        "titleEn": "E-Tender 11 16 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-110-02-07-2018-pdf",
        "file": "E-Tender_110_02_07_2018.PDF",
        "bytes": 1027906,
        "titleEn": "E-Tender 110 02 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-115-21-07-2018-pdf",
        "file": "E-Tender_115_21_07_2018.PDF",
        "bytes": 1719320,
        "titleEn": "E-Tender 115 21 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-116-25-07-2018-pdf",
        "file": "E-Tender_116_25_07_2018.PDF",
        "bytes": 800759,
        "titleEn": "E-Tender 116 25 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-118-31-07-2018-pdf",
        "file": "E-Tender_118_31_07_2018.PDF",
        "bytes": 1143195,
        "titleEn": "E-Tender 118 31 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-12-16-11-2017-pdf",
        "file": "E-Tender_12_16_11_2017.PDF",
        "bytes": 59057,
        "titleEn": "E-Tender 12 16 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-121-06-08-2018-pdf",
        "file": "E-Tender_121_06_08_2018.PDF",
        "bytes": 677949,
        "titleEn": "E-Tender 121 06 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-122-09-08-2018-pdf",
        "file": "E-Tender_122_09_08_2018.pdf",
        "bytes": 19313,
        "titleEn": "E-Tender 122 09 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-123-14-08-2018-pdf",
        "file": "E-Tender_123_14_08_2018.PDF",
        "bytes": 929292,
        "titleEn": "E-Tender 123 14 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-124-dt-20-08-2018-pdf",
        "file": "E-Tender_124_dt__20_08_2018.pdf",
        "bytes": 18628,
        "titleEn": "E-Tender 124 dt 20 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-125-dt-28-08-2015-pdf",
        "file": "E-Tender_125_dt_28_08_2015.pdf",
        "bytes": 107790,
        "titleEn": "E-Tender 125 dt 28 08 2015"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-127-dt-06-07-2018-pdf",
        "file": "E-Tender_127_dt_06_07_2018.PDF",
        "bytes": 21468,
        "titleEn": "E-Tender 127 dt 06 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-129-dt-19-09-20181-pdf",
        "file": "E-tender_129_dt_19_09_20181.PDF",
        "bytes": 20512,
        "titleEn": "E-tender 129 dt 19 09 20181"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-13-16-11-2017-pdf",
        "file": "E-Tender_13_16_11_2017.PDF",
        "bytes": 115208,
        "titleEn": "E-Tender 13 16 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-130-dt-18-09-2018-pdf",
        "file": "E-Tender_130_dt__18_09_2018.pdf",
        "bytes": 19966,
        "titleEn": "E-Tender 130 dt 18 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-136-dt-27-09-2018-pdf",
        "file": "E-Tender_136_dt_27_09_2018.PDF",
        "bytes": 26775,
        "titleEn": "E-Tender 136 dt 27 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-137-27-07-2017-pdf",
        "file": "E-Tender_137_27_07_2017.PDF",
        "bytes": 86220,
        "titleEn": "E-Tender 137 27 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-139-dt-20-11-2018-pdf",
        "file": "E-tender_139_dt__20_11_2018.PDF",
        "bytes": 69299,
        "titleEn": "E-tender 139 dt 20 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-140-dt-22-11-2018-pdf",
        "file": "E-Tender_140_dt_22_11_2018.PDF",
        "bytes": 50430,
        "titleEn": "E-Tender 140 dt 22 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-141-dt-29-11-2018-pdf",
        "file": "E-tender_141_dt_29_11_2018.pdf",
        "bytes": 224641,
        "titleEn": "E-tender 141 dt 29 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-145-dt-07-12-2018-pdf",
        "file": "E-Tender_145_dt__07_12_2018.PDF",
        "bytes": 45170,
        "titleEn": "E-Tender 145 dt 07 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-15-18-11-2017-pdf",
        "file": "E-Tender_15__18_11_2017.PDF",
        "bytes": 51662,
        "titleEn": "E-Tender 15 18 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-15-18-11-2017-pdf-2",
        "file": "E-Tender_15_18_11_2017.PDF",
        "bytes": 52741,
        "titleEn": "E-Tender 15 18 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-152-dt-15-12-2018-pdf",
        "file": "E-tender_152_dt__15_12_2018.PDF",
        "bytes": 131064,
        "titleEn": "E-tender 152 dt 15 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-16-21-11-2017-pdf",
        "file": "E-Tender_16_21_11_2017.PDF",
        "bytes": 104619,
        "titleEn": "E-Tender 16 21 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-161-dt-19-12-2018-pdf",
        "file": "E-Tender_161_dt__19_12_2018.PDF",
        "bytes": 97418,
        "titleEn": "E-Tender 161 dt 19 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-166-dt-31-12-2018-pdf",
        "file": "E-Tender_166_dt_31_12_2018.pdf",
        "bytes": 299356,
        "titleEn": "E-Tender 166 dt 31 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-178-dt-05-01-2019-pdf",
        "file": "E-tender_178_dt__05_01_2019.pdf",
        "bytes": 321414,
        "titleEn": "E-tender 178 dt 05 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-18-21-11-2017-pdf",
        "file": "E-Tender_18_21_11_2017.PDF",
        "bytes": 53076,
        "titleEn": "E-Tender 18 21 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-182-02-08-17-pdf",
        "file": "E-Tender_182_02_08_17.PDF",
        "bytes": 706326,
        "titleEn": "E-Tender 182 02 08 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-183-02-08-17-pdf",
        "file": "E-Tender_183_02_08_17.PDF",
        "bytes": 625728,
        "titleEn": "E-Tender 183 02 08 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-184-02-08-17-pdf",
        "file": "E-Tender_184_02_08_17.PDF",
        "bytes": 642349,
        "titleEn": "E-Tender 184 02 08 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-19-21-11-2017-pdf",
        "file": "E-Tender_19_21_11_2017.PDF",
        "bytes": 51087,
        "titleEn": "E-Tender 19 21 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-196-dt-11-01-2019-pdf",
        "file": "E-tender_196_dt__11_01_2019.pdf",
        "bytes": 210586,
        "titleEn": "E-tender 196 dt 11 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-2-03-11-2017-pdf",
        "file": "E-Tender_2_03_11_2017.PDF",
        "bytes": 276161,
        "titleEn": "E-Tender 2 03 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-20-21-11-2017-pdf",
        "file": "E-Tender_20_21_11_2017.PDF",
        "bytes": 57163,
        "titleEn": "E-Tender 20 21 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-201-29-03-17-pdf",
        "file": "E-Tender_201_29_03_17.PDF",
        "bytes": 858953,
        "titleEn": "E-Tender 201 29 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-21-21-11-2017-pdf",
        "file": "E-Tender_21_21_11_2017.PDF",
        "bytes": 53508,
        "titleEn": "E-Tender 21 21 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-220-09-08-17-pdf",
        "file": "E-Tender_220_09_08_17.PDF",
        "bytes": 529865,
        "titleEn": "E-Tender 220 09 08 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-222-dt-23-01-2019-pdf",
        "file": "E-Tender_222_dt__23_01_2019.pdf",
        "bytes": 307592,
        "titleEn": "E-Tender 222 dt 23 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-241-16-08-17-pdf",
        "file": "E-Tender_241_16_08_17.PDF",
        "bytes": 577659,
        "titleEn": "E-Tender 241 16 08 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-250-dt-02-02-2019-pdf",
        "file": "E-Tender_250_dt__02_02_2019.pdf",
        "bytes": 602448,
        "titleEn": "E-Tender 250 dt 02 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-26-06-12-2017-pdf",
        "file": "E-Tender_26_06_12_2017.PDF",
        "bytes": 608772,
        "titleEn": "E-Tender 26 06 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-260-dt-07-02-2019-pdf",
        "file": "E-Tender_260_dt__07_02_2019.pdf",
        "bytes": 445793,
        "titleEn": "E-Tender 260 dt 07 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-261-21-08-2017-pdf",
        "file": "E-Tender_261_21_08_2017.PDF",
        "bytes": 569178,
        "titleEn": "E-Tender 261 21 08 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-262-21-08-2017-pdf",
        "file": "E-Tender_262_21_08_2017.PDF",
        "bytes": 598942,
        "titleEn": "E-Tender 262 21 08 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-263-21-08-2017-pdf",
        "file": "E-Tender_263_21_08_2017.PDF",
        "bytes": 531247,
        "titleEn": "E-Tender 263 21 08 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-264-21-08-2017-pdf",
        "file": "E-Tender_264_21_08_2017.PDF",
        "bytes": 550361,
        "titleEn": "E-Tender 264 21 08 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-273-dt-14-02-2019-pdf",
        "file": "E-Tender_273_dt__14_02_2019.pdf",
        "bytes": 44251,
        "titleEn": "E-Tender 273 dt 14 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-289-dt-20-02-2019-pdf",
        "file": "E-Tender_289_dt__20_02_2019.pdf",
        "bytes": 599057,
        "titleEn": "E-Tender 289 dt 20 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-29-12-12-2017-pdf",
        "file": "E-Tender_29_12_12_2017.PDF",
        "bytes": 595453,
        "titleEn": "E-Tender 29 12 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-3-03-11-2017-pdf",
        "file": "E-Tender_3_03_11_2017.PDF",
        "bytes": 443909,
        "titleEn": "E-Tender 3 03 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-30-12-12-2017-pdf",
        "file": "E-Tender_30_12_12_2017.PDF",
        "bytes": 623770,
        "titleEn": "E-Tender 30 12 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-31-13-12-2017-pdf",
        "file": "E-Tender_31_13_12_2017.PDF",
        "bytes": 650460,
        "titleEn": "E-Tender 31 13 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-316-04-09-17-pdf",
        "file": "E-Tender_316_04_09_17.pdf",
        "bytes": 1485240,
        "titleEn": "E-Tender 316 04 09 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-317-04-09-17-pdf",
        "file": "E-Tender_317_04_09_17.pdf",
        "bytes": 1402190,
        "titleEn": "E-Tender 317 04 09 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-33-14-12-2017-pdf",
        "file": "E-Tender_33_14_12_2017.PDF",
        "bytes": 670300,
        "titleEn": "E-Tender 33 14 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-337-dt-02-03-2019-pdf",
        "file": "E-tender_337_dt__02_03_2019.pdf",
        "bytes": 304434,
        "titleEn": "E-tender 337 dt 02 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-34-19-12-2017-pdf",
        "file": "E-Tender_34_19_12_2017.PDF",
        "bytes": 669827,
        "titleEn": "E-Tender 34 19 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-35-28-12-2017-pdf",
        "file": "E-Tender_35_28_12_2017.PDF",
        "bytes": 560544,
        "titleEn": "E-Tender 35 28 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-357-dt-08-03-2019-pdf",
        "file": "E-Tender_357_dt__08_03_2019.pdf",
        "bytes": 177218,
        "titleEn": "E-Tender 357 dt 08 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-36-28-12-2017-pdf",
        "file": "E-Tender_36_28_12_2017.PDF",
        "bytes": 570294,
        "titleEn": "E-Tender 36 28 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-389-dt-03-06-2019-pdf",
        "file": "E-Tender_389_Dt_03_06_2019.PDF",
        "bytes": 221055,
        "titleEn": "E-Tender 389 Dt 03 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-40-16-01-2018-pdf",
        "file": "E-Tender_40_16_01_2018.PDF",
        "bytes": 612539,
        "titleEn": "E-Tender 40 16 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-403-20-09-2017-pdf",
        "file": "E-Tender_403_20_09_2017.pdf",
        "bytes": 905432,
        "titleEn": "E-Tender 403 20 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-404-dt-18-06-2019-pdf",
        "file": "E-Tender_404_dt__18_06_2019.PDF",
        "bytes": 37793,
        "titleEn": "E-Tender 404 dt 18 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-41-16-01-2018-pdf",
        "file": "E-Tender_41_16_01_2018.PDF",
        "bytes": 656899,
        "titleEn": "E-Tender 41 16 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-415-26-09-2017-pdf",
        "file": "E-Tender_415_26_09_2017.PDF",
        "bytes": 632804,
        "titleEn": "E-Tender 415 26 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-416-29-092017-pdf",
        "file": "E-Tender_416_29_092017.PDF",
        "bytes": 716767,
        "titleEn": "E-Tender 416 29 092017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-417-29-092017-pdf",
        "file": "E-Tender_417_29_092017.PDF",
        "bytes": 755512,
        "titleEn": "E-Tender 417 29 092017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-42-19-01-2018-pdf",
        "file": "E-Tender_42_19_01_2018.PDF",
        "bytes": 787531,
        "titleEn": "E-Tender 42 19 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-421-11-10-2017-pdf",
        "file": "E-Tender_421_11_10_2017.PDF",
        "bytes": 569446,
        "titleEn": "E-Tender 421 11 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-422-11-10-2017-pdf",
        "file": "E-Tender_422_11_10_2017.PDF",
        "bytes": 665384,
        "titleEn": "E-Tender 422 11 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-423-11-10-2017-pdf",
        "file": "E-Tender_423_11_10_2017.PDF",
        "bytes": 553359,
        "titleEn": "E-Tender 423 11 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-424-18-10-2017-pdf",
        "file": "E-Tender_424_18_10_2017.PDF",
        "bytes": 546991,
        "titleEn": "E-Tender 424 18 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-43-19-01-2018-pdf",
        "file": "E-Tender_43_19_01_2018.PDF",
        "bytes": 763125,
        "titleEn": "E-Tender 43 19 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-435-dt-02-07-2019-pdf",
        "file": "E-Tender_435_dt__02_07_2019.pdf",
        "bytes": 48270,
        "titleEn": "E-Tender 435 dt 02 07 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-44-22-02-2017-pdf",
        "file": "E-Tender_44_22_02_2017.PDF",
        "bytes": 1119057,
        "titleEn": "E-Tender 44 22 02 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-44-24-01-2018-pdf",
        "file": "E-Tender_44_24_01_2018.PDF",
        "bytes": 704610,
        "titleEn": "E-Tender 44 24 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-444-dt-09-07-2019-pdf",
        "file": "E-Tender_444_DT_09_07_2019.PDF",
        "bytes": 1430067,
        "titleEn": "E-Tender 444 DT 09 07 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-45-24-01-2018-pdf",
        "file": "E-Tender_45_24_01_2018.PDF",
        "bytes": 708333,
        "titleEn": "E-Tender 45 24 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-46-24-01-2018-pdf",
        "file": "E-Tender_46_24_01_2018.PDF",
        "bytes": 755767,
        "titleEn": "E-Tender 46 24 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-47-01-02-2018-pdf",
        "file": "E-Tender_47_01_02_2018.PDF",
        "bytes": 479732,
        "titleEn": "E-Tender 47 01 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-48-01-02-2018-pdf",
        "file": "E-Tender_48_01_02_2018.PDF",
        "bytes": 432476,
        "titleEn": "E-Tender 48 01 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-482-05-01-2017-pdf",
        "file": "E-Tender_482_05_01_2017.pdf",
        "bytes": 1266970,
        "titleEn": "E-Tender 482 05 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-483-05-01-2017-pdf",
        "file": "E-Tender_483_05_01_2017.pdf",
        "bytes": 1129750,
        "titleEn": "E-Tender 483 05 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-484-05-01-2017-pdf",
        "file": "E-Tender_484_05_01_2017.pdf",
        "bytes": 883035,
        "titleEn": "E-Tender 484 05 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-487-dt-31-08-19-pdf",
        "file": "E-Tender_487_Dt_31_08_19.PDF",
        "bytes": 1482996,
        "titleEn": "E-Tender 487 Dt 31 08 19"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-50-02-02-2018-pdf",
        "file": "E-Tender_50_02_02_2018.PDF",
        "bytes": 379431,
        "titleEn": "E-Tender 50 02 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-51-02-02-2018-pdf",
        "file": "E-Tender_51_02_02_2018.PDF",
        "bytes": 421559,
        "titleEn": "E-Tender 51 02 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-516-18-01-2017-pdf",
        "file": "E-Tender_516_18_01_2017.pdf",
        "bytes": 467316,
        "titleEn": "E-Tender 516 18 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-52-02-02-2018-pdf",
        "file": "E-Tender_52_02_02_2018.PDF",
        "bytes": 366606,
        "titleEn": "E-Tender 52 02 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-527-dt-16-09-2019-pdf",
        "file": "E-Tender_527_dt_16_09_2019.PDF",
        "bytes": 49208,
        "titleEn": "E-Tender 527 dt 16 09 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-54-08-10-2018-pdf",
        "file": "E-Tender_54_08_10_2018.PDF",
        "bytes": 688211,
        "titleEn": "E-Tender 54 08 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-547-30-01-2017-pdf",
        "file": "E-Tender_547_30_01_2017.pdf",
        "bytes": 1742527,
        "titleEn": "E-Tender 547 30 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-548-30-01-2017-pdf",
        "file": "E-Tender_548_30_01_2017.pdf",
        "bytes": 1802796,
        "titleEn": "E-Tender 548 30 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-549-30-01-2017-pdf",
        "file": "E-Tender_549_30_01_2017.pdf",
        "bytes": 1999236,
        "titleEn": "E-Tender 549 30 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-550-30-01-2017-pdf",
        "file": "E-Tender_550_30_01_2017.pdf",
        "bytes": 2106340,
        "titleEn": "E-Tender 550 30 01 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-552-dt-20-09-2019-pdf",
        "file": "E-Tender_552_dt__20_09_2019.pdf",
        "bytes": 39144,
        "titleEn": "E-Tender 552 dt 20 09 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-566-dt-02-11-2019-pdf",
        "file": "E-Tender_566_dt__02_11_2019.pdf",
        "bytes": 125006,
        "titleEn": "E-Tender 566 dt 02 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-58-15-02-2018-pdf",
        "file": "E-Tender_58_15_02_2018.PDF",
        "bytes": 773590,
        "titleEn": "E-Tender 58 15 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-585-dt-08-11-2019-pdf",
        "file": "E-Tender_585_dt__08_11_2019.pdf",
        "bytes": 21341,
        "titleEn": "E-Tender 585 dt 08 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-589-dt-11-11-2019-pdf",
        "file": "E-Tender_589_dt_11_11_2019.pdf",
        "bytes": 19866,
        "titleEn": "E-Tender 589 dt 11 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-59-15-02-2018-pdf",
        "file": "E-Tender_59_15_02_2018.PDF",
        "bytes": 678825,
        "titleEn": "E-Tender 59 15 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-595-dt-16-11-2019-pdf",
        "file": "E-Tender_595_dt_16_11_2019.pdf",
        "bytes": 35053,
        "titleEn": "E-Tender 595 dt 16 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-60-15-02-2018-pdf",
        "file": "E-Tender_60_15_02_2018.PDF",
        "bytes": 744542,
        "titleEn": "E-Tender 60 15 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-61-16-02-2018-pdf",
        "file": "E-Tender_61_16_02_2018.PDF",
        "bytes": 699576,
        "titleEn": "E-Tender 61 16 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-610-dt-22-11-2019-pdf",
        "file": "E-Tender_610_dt__22_11_2019.pdf",
        "bytes": 49644,
        "titleEn": "E-Tender 610 dt 22 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-615-21-02-2017-pdf",
        "file": "E-Tender_615_21_02_2017.PDF",
        "bytes": 956113,
        "titleEn": "E-Tender 615 21 02 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-62-16-02-2018-pdf",
        "file": "E-Tender_62_16_02_2018.PDF",
        "bytes": 706511,
        "titleEn": "E-Tender 62 16 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-628-dt-30-11-2019-pdf",
        "file": "E-Tender_628_dt__30_11_2019.pdf",
        "bytes": 47344,
        "titleEn": "E-Tender 628 dt 30 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-63-16-02-2018-pdf",
        "file": "E-Tender_63_16_02_2018.PDF",
        "bytes": 663989,
        "titleEn": "E-Tender 63 16 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-64-16-02-2018-pdf",
        "file": "E-Tender_64_16_02_2018.PDF",
        "bytes": 697929,
        "titleEn": "E-Tender 64 16 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-641-dt-09-12-2019-pdf",
        "file": "E-tender_641_dt__09_12_2019.pdf",
        "bytes": 49151,
        "titleEn": "E-tender 641 dt 09 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-644-01-03-17-pdf",
        "file": "E-Tender_644_01_03_17.PDF",
        "bytes": 899928,
        "titleEn": "E-Tender 644 01 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-645-01-03-17-pdf",
        "file": "E-Tender_645_01_03_17.PDF",
        "bytes": 825457,
        "titleEn": "E-Tender 645 01 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-647-01-03-17-pdf",
        "file": "E-Tender_647_01_03_17.PDF",
        "bytes": 885387,
        "titleEn": "E-Tender 647 01 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-65-16-02-2018-pdf",
        "file": "E-Tender_65_16_02_2018.PDF",
        "bytes": 720754,
        "titleEn": "E-Tender 65 16 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-65-20-06-2017-pdf",
        "file": "E-Tender_65_20_06_2017.PDF",
        "bytes": 78967,
        "titleEn": "E-Tender 65 20 06 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-655-03-03-17-pdf",
        "file": "E-Tender_655_03_03_17.PDF",
        "bytes": 772913,
        "titleEn": "E-Tender 655 03 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-656-03-03-17-pdf",
        "file": "E-Tender_656_03_03_17.PDF",
        "bytes": 798779,
        "titleEn": "E-Tender 656 03 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-656-dt-16-12-2019-pdf",
        "file": "E-Tender_656_dt__16_12_2019.pdf",
        "bytes": 46245,
        "titleEn": "E-Tender 656 dt 16 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-657-03-03-17-pdf",
        "file": "E-Tender_657_03_03_17.PDF",
        "bytes": 893533,
        "titleEn": "E-Tender 657 03 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-66-19-02-2018-pdf",
        "file": "E-Tender_66_19_02_2018.PDF",
        "bytes": 652767,
        "titleEn": "E-Tender 66 19 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-663-dt-23-12-2019-pdf",
        "file": "E-Tender_663_dt__23_12_2019.pdf",
        "bytes": 73195,
        "titleEn": "E-Tender 663 dt 23 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-67-19-02-2018-pdf",
        "file": "E-Tender_67_19_02_2018.PDF",
        "bytes": 622484,
        "titleEn": "E-Tender 67 19 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-673-dt-30-12-2019-pdf",
        "file": "E-Tender_673_dt__30_12_2019.pdf",
        "bytes": 29343,
        "titleEn": "E-Tender 673 dt 30 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-675-04-03-17-pdf",
        "file": "E-Tender_675_04_03_17.PDF",
        "bytes": 901266,
        "titleEn": "E-Tender 675 04 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-677-23-03-17-pdf",
        "file": "E-Tender_677_23_03_17.PDF",
        "bytes": 527536,
        "titleEn": "E-Tender 677 23 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-68-20-02-2018-pdf",
        "file": "E-Tender_68_20_02_2018.PDF",
        "bytes": 635268,
        "titleEn": "E-Tender 68 20 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-683-06-03-17-pdf",
        "file": "E-Tender_683_06_03_17.PDF",
        "bytes": 781845,
        "titleEn": "E-Tender 683 06 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-69-20-02-2018-pdf",
        "file": "E-Tender_69_20_02_2018.PDF",
        "bytes": 654524,
        "titleEn": "E-Tender 69 20 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-70-20-02-2018-pdf",
        "file": "E-Tender_70_20_02_2018.PDF",
        "bytes": 698390,
        "titleEn": "E-Tender 70 20 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-71-20-02-2018-pdf",
        "file": "E-Tender_71_20_02_2018.PDF",
        "bytes": 722487,
        "titleEn": "E-Tender 71 20 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-72-22-02-2018-pdf",
        "file": "E-Tender_72_22_02_2018.PDF",
        "bytes": 591985,
        "titleEn": "E-Tender 72 22 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-723-27-03-17-pdf",
        "file": "E-Tender_723_27_03_17.PDF",
        "bytes": 674528,
        "titleEn": "E-Tender 723 27 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-724-27-03-17-pdf",
        "file": "E-Tender_724_27_03_17.PDF",
        "bytes": 679844,
        "titleEn": "E-Tender 724 27 03 17"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-73-22-02-2018-pdf",
        "file": "E-Tender_73_22_02_2018.PDF",
        "bytes": 592645,
        "titleEn": "E-Tender 73 22 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-74-22-02-2018-pdf",
        "file": "E-Tender_74_22_02_2018.PDF",
        "bytes": 416446,
        "titleEn": "E-Tender 74 22 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-74-29-06-2017-pdf",
        "file": "E-Tender_74_29_06_2017.PDF",
        "bytes": 77451,
        "titleEn": "E-Tender 74 29 06 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-75-26-02-2018-pdf",
        "file": "E-Tender_75_26_02_2018.PDF",
        "bytes": 726379,
        "titleEn": "E-Tender 75 26 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-75-29-06-2017-pdf",
        "file": "E-Tender_75_29_06_2017.PDF",
        "bytes": 75226,
        "titleEn": "E-Tender 75 29 06 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-76-28-02-2018-pdf",
        "file": "E-Tender_76_28_02_2018.PDF",
        "bytes": 590157,
        "titleEn": "E-Tender 76 28 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-78-01-03-2018-pdf",
        "file": "E-Tender_78_01_03_2018.PDF",
        "bytes": 961893,
        "titleEn": "E-Tender 78 01 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-79-01-07-2017-pdf",
        "file": "E-Tender_79_01_07_2017.PDF",
        "bytes": 136546,
        "titleEn": "E-Tender 79 01 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-79-03-07-2017-pdf",
        "file": "E-Tender_79_03_07_2017.PDF",
        "bytes": 76988,
        "titleEn": "E-Tender 79 03 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-79-12-03-2018-pdf",
        "file": "E-Tender_79_12_03_2018.PDF",
        "bytes": 1172800,
        "titleEn": "E-Tender 79 12 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-80-01-07-2017-pdf",
        "file": "E-Tender_80_01_07_2017.PDF",
        "bytes": 96823,
        "titleEn": "E-Tender 80 01 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-80-14-03-2018-pdf",
        "file": "E-Tender_80_14_03_2018.PDF",
        "bytes": 831589,
        "titleEn": "E-Tender 80 14 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-81-22-03-2018-pdf",
        "file": "E-Tender_81_22_03_2018.PDF",
        "bytes": 582133,
        "titleEn": "E-Tender 81 22 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-83-22-03-2018-pdf",
        "file": "E-Tender_83_22_03_2018.PDF",
        "bytes": 1367291,
        "titleEn": "E-Tender 83 22 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-84-23-03-2018-pdf",
        "file": "E-Tender_84_23_03_2018.PDF",
        "bytes": 788663,
        "titleEn": "E-Tender 84 23 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-85-27-03-2018-pdf",
        "file": "E-Tender_85_27_03_2018.PDF",
        "bytes": 736120,
        "titleEn": "E-Tender 85 27 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-86-02-04-2018-pdf",
        "file": "E-Tender_86_02_04_2018.PDF",
        "bytes": 886046,
        "titleEn": "E-Tender 86 02 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-89-04-04-2018-pdf",
        "file": "E-Tender_89_04_04_2018.PDF",
        "bytes": 718145,
        "titleEn": "E-Tender 89 04 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-91-06-04-2018-pdf",
        "file": "E-Tender_91_06_04_2018.PDF",
        "bytes": 952511,
        "titleEn": "E-Tender 91 06 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-93-11-04-2018-pdf",
        "file": "E-Tender_93_11_04_2018.PDF",
        "bytes": 784383,
        "titleEn": "E-Tender 93 11 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-96-16-004-2018-pdf",
        "file": "E-Tender_96_16_004_2018.PDF",
        "bytes": 835912,
        "titleEn": "E-Tender 96 16 004 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-97-20-04-2018-pdf",
        "file": "E-Tender_97_20_04_2018.PDF",
        "bytes": 714627,
        "titleEn": "E-Tender 97 20 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-98-23-04-2018-pdf",
        "file": "E-Tender_98_23_04_2018.PDF",
        "bytes": 781975,
        "titleEn": "E-Tender 98 23 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-99-27-04-2018-pdf",
        "file": "E-Tender_99_27_04_2018.PDF",
        "bytes": 888846,
        "titleEn": "E-Tender 99 27 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-128-dt-14-09-2018-pdf",
        "file": "E-tender-128_dt_14_09_2018.pdf",
        "bytes": 18211,
        "titleEn": "E-tender-128 dt 14 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tender-2018-134-dt-25-09-2018-pdf",
        "file": "E-Tender-2018-134_dt__25_09_2018.PDF",
        "bytes": 18274,
        "titleEn": "E-Tender-2018-134 dt 25 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tendor138-dt-15-11-2018-pdf",
        "file": "E-Tendor138_DT__15_11_2018.PDF",
        "bytes": 55446,
        "titleEn": "E-Tendor138 DT 15 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-e-tenter-404-18-09-2017-pdf",
        "file": "E-Tenter_404_18_09_2017.pdf",
        "bytes": 490905,
        "titleEn": "E-Tenter 404 18 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tenter-405-18-09-2017-pdf",
        "file": "E-Tenter_405_18_09_2017.pdf",
        "bytes": 267196,
        "titleEn": "E-Tenter 405 18 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tenter-413-25-09-2017-pdf",
        "file": "E-Tenter_413_25_09_2017.PDF",
        "bytes": 777960,
        "titleEn": "E-Tenter 413 25 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-tenter-414-25-09-2017-pdf",
        "file": "E-Tenter_414_25_09_2017.PDF",
        "bytes": 838584,
        "titleEn": "E-Tenter 414 25 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-e-terder-143-dt-03-12-2018-pdf",
        "file": "E-terder_143_dt_03_12_2018.pdf",
        "bytes": 242751,
        "titleEn": "E-terder 143 dt 03 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-ee-406-30-11-2017-pdf",
        "file": "EE_406_30_11_2017.PDF",
        "bytes": 1169920,
        "titleEn": "EE 406 30 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-ee-pp-100-21-06-2017-pdf",
        "file": "EE_PP_100_21_06_2017.PDF",
        "bytes": 355473,
        "titleEn": "EE PP 100 21 06 2017"
      },
      {
        "id": "tender-tender-2018-2019-ee-pp-253-16-10-2017-pdf",
        "file": "EE_PP_253_16_10_2017.PDF",
        "bytes": 1183745,
        "titleEn": "EE PP 253 16 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-ee-pp-289-07-11-2017-pdf",
        "file": "EE_PP_289_07_11_2017.PDF",
        "bytes": 1743726,
        "titleEn": "EE PP 289 07 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-ee-water-354-dt-07-09-2018-pdf",
        "file": "EE_Water_354_dt__07_09_2018.PDF",
        "bytes": 60214,
        "titleEn": "EE Water 354 dt 07 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-ee-water-355-dt-07-09-2018-pdf",
        "file": "EE_Water_355_dt_07_09_2018.PDF",
        "bytes": 59807,
        "titleEn": "EE Water 355 dt 07 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-ee-ww-673-dt-03-01-2019-pdf",
        "file": "EE_WW_673_dt__03_01_2019.pdf",
        "bytes": 185774,
        "titleEn": "EE WW 673 dt 03 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-eeww-431-dt-3-10-2018-pdf",
        "file": "EEww-431_dt__3_10_2018.pdf",
        "bytes": 152924,
        "titleEn": "EEww-431 dt 3 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-est-1-1334-dt-05-10-2018-pdf",
        "file": "EST-1-1334_dt_05_10_2018.PDF",
        "bytes": 25525,
        "titleEn": "EST-1-1334 dt 05 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-estate-240-dt-12-12-2019-pdf",
        "file": "Estate_240_DT__12_12_2019.pdf",
        "bytes": 152767,
        "titleEn": "Estate 240 DT 12 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-09-dt-03-01-2019-pdf",
        "file": "Garden_09_dt_03_01_2019.pdf",
        "bytes": 142057,
        "titleEn": "Garden 09 dt 03 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-33-dt-15-01-2019-pdf",
        "file": "Garden_33_dt__15_01_2019.pdf",
        "bytes": 161601,
        "titleEn": "Garden 33 dt 15 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-540-dt-06-08-2018-pdf",
        "file": "Garden_540_Dt_06_08_2018.pdf",
        "bytes": 645564,
        "titleEn": "Garden 540 Dt 06 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-58-dt-01-02-2019-pdf",
        "file": "Garden_58_Dt__01_02_2019.PDF",
        "bytes": 725125,
        "titleEn": "Garden 58 Dt 01 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-598-28-08-2018-pdf",
        "file": "Garden_598_28_08_2018.pdf",
        "bytes": 65922,
        "titleEn": "Garden 598 28 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-598-dt-26-11-2019-pdf",
        "file": "Garden_598_dt__26_11_2019.pdf",
        "bytes": 56909,
        "titleEn": "Garden 598 dt 26 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-599-dt-28-08-2018-pdf",
        "file": "Garden_599_dt__28_08_2018.pdf",
        "bytes": 46673,
        "titleEn": "Garden 599 dt 28 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-599-dt-26-11-2019-pdf",
        "file": "Garden_599_dt_26_11_2019.pdf",
        "bytes": 58384,
        "titleEn": "Garden 599 dt 26 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-600-dt-26-11-2019-pdf",
        "file": "Garden_600_dt__26_11_2019.pdf",
        "bytes": 60295,
        "titleEn": "Garden 600 dt 26 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-garden-603-dt-30-08-2018-pdf",
        "file": "Garden_603_dt_30_08_2018.pdf",
        "bytes": 35919,
        "titleEn": "Garden 603 dt 30 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-607-dt-31-08-2018-pdf",
        "file": "Garden_607_dt__31_08_2018.pdf",
        "bytes": 152351,
        "titleEn": "Garden 607 dt 31 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-635-dt-07-09-2018-pdf",
        "file": "Garden_635_dt_07_09_2018.PDF",
        "bytes": 43496,
        "titleEn": "Garden 635 dt 07 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-658-dt-15-09-2018-pdf",
        "file": "Garden_658_dt_15_09_2018.pdf",
        "bytes": 54246,
        "titleEn": "Garden 658 dt 15 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-698-dt-28-09-2018-pdf",
        "file": "Garden_698_dt__28_09_2018.PDF",
        "bytes": 51940,
        "titleEn": "Garden 698 dt 28 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-707-dt-029-09-2018-pdf",
        "file": "Garden_707_dt_029_09_2018.PDF",
        "bytes": 48400,
        "titleEn": "Garden 707 dt 029 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-708-dt-29-09-2018-pdf",
        "file": "Garden_708_dt_29_09_2018.PDF",
        "bytes": 49314,
        "titleEn": "Garden 708 dt 29 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-766-dt-20-10-2018-pdf",
        "file": "Garden_766_dt__20_10_2018.PDF",
        "bytes": 46809,
        "titleEn": "Garden 766 dt 20 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-771-dt-23-10-2018-pdf",
        "file": "Garden_771_dt_23_10_2018.PDF",
        "bytes": 48505,
        "titleEn": "Garden 771 dt 23 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-garden-786-dt-31-10-2018-pdf",
        "file": "Garden_786_dt__31_10_2018.PDF",
        "bytes": 41310,
        "titleEn": "Garden 786 dt 31 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1167-dt-10-05-2019-pdf",
        "file": "Health_1167_dt__10_05_2019.PDF",
        "bytes": 90087,
        "titleEn": "Health 1167 dt 10 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1168-dt-10-05-2019-pdf",
        "file": "Health_1168_dt__10_05_2019.PDF",
        "bytes": 59567,
        "titleEn": "Health 1168 dt 10 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1169-dt-10-05-2019-pdf",
        "file": "Health_1169_dt__10_05_2019.PDF",
        "bytes": 58436,
        "titleEn": "Health 1169 dt 10 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1170-dt-10-05-2019-pdf",
        "file": "Health_1170_dt__10_05_2019.PDF",
        "bytes": 54205,
        "titleEn": "Health 1170 dt 10 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1171-dt-10-05-2019-pdf",
        "file": "Health_1171_dt__10_05_2019.PDF",
        "bytes": 68542,
        "titleEn": "Health 1171 dt 10 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1172-dt-10-05-2019-pdf",
        "file": "Health_1172_dt__10_05_2019.PDF",
        "bytes": 69049,
        "titleEn": "Health 1172 dt 10 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1200-dt-14-05-2019-pdf",
        "file": "Health_1200_dt__14_05_2019.PDF",
        "bytes": 71528,
        "titleEn": "Health 1200 dt 14 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1201-dt-14-05-2019-pdf",
        "file": "Health_1201_dt__14_05_2019.PDF",
        "bytes": 52793,
        "titleEn": "Health 1201 dt 14 05 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1257-dt-28-08-2018-pdf",
        "file": "Health_1257_dt_28_08_2018.pdf",
        "bytes": 164719,
        "titleEn": "Health 1257 dt 28 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1316-dt-10-06-2019-pdf",
        "file": "Health_1316_dt__10_06_2019.PDF",
        "bytes": 46560,
        "titleEn": "Health 1316 dt 10 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1332-dt-06-09-2018-pdf",
        "file": "Health_1332_dt__06_09_2018.pdf",
        "bytes": 67917,
        "titleEn": "Health 1332 dt 06 09 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1335-12-09-2017-pdf",
        "file": "Health_1335_12_09_2017.PDF",
        "bytes": 1079117,
        "titleEn": "Health 1335 12 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-1336-12-09-2017-pdf",
        "file": "Health_1336_12_09_2017.PDF",
        "bytes": 951075,
        "titleEn": "Health 1336 12 09 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-1356-dt-15-06-2019-pdf",
        "file": "Health_1356_Dt_15_06_2019.PDF",
        "bytes": 2475893,
        "titleEn": "Health 1356 Dt 15 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-142-dt-29-01-2019-pdf",
        "file": "Health_142_dt__29_01_2019.pdf",
        "bytes": 134286,
        "titleEn": "Health 142 dt 29 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1464-dt-04-07-2019-pdf",
        "file": "Health_1464_dt__04_07_2019.pdf",
        "bytes": 73844,
        "titleEn": "Health 1464 dt 04 07 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-1484-07-10-2017-pdf",
        "file": "Health_1484_07_10_2017.PDF",
        "bytes": 931552,
        "titleEn": "Health 1484 07 10 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-1516-dt-08-10-2018-pdf",
        "file": "health_1516_dt__08_10_2018.PDF",
        "bytes": 48020,
        "titleEn": "health 1516 dt 08 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1662-dt-13-11-2018-pdf",
        "file": "Health_1662_dt_13_11_2018.PDF",
        "bytes": 59616,
        "titleEn": "Health 1662 dt 13 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1663-dt-13-11-2018-pdf",
        "file": "Health_1663_dt_13_11_2018.PDF",
        "bytes": 79298,
        "titleEn": "Health 1663 dt 13 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1684-dt-19-11-2018-pdf",
        "file": "Health_1684_dt__19_11_2018.PDF",
        "bytes": 55866,
        "titleEn": "Health 1684 dt 19 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1687-dt-19-11-2018-pdf",
        "file": "Health_1687_dt__19_11_2018.PDF",
        "bytes": 47646,
        "titleEn": "Health 1687 dt 19 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-1779-dt-29-08-2019-pdf",
        "file": "Health_1779_Dt_29_08_2019.PDF",
        "bytes": 6452298,
        "titleEn": "Health 1779 Dt 29 08 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-251-22-02-2018-pdf",
        "file": "Health_251_22_02_2018.PDF",
        "bytes": 4093905,
        "titleEn": "Health 251 22 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-254-22-02-2018-pdf",
        "file": "Health_254_22_02_2018.PDF",
        "bytes": 1402425,
        "titleEn": "Health 254 22 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-255-22-02-2018-pdf",
        "file": "Health_255_22_02_2018.PDF",
        "bytes": 3923456,
        "titleEn": "Health 255 22 02 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-26-dt-14-12-2018-pdf",
        "file": "Health_26_dt__14_12_2018.PDF",
        "bytes": 184462,
        "titleEn": "Health 26 dt 14 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-276-dt-17-07-2018-pdf",
        "file": "Health_276_Dt_17_07_2018.PDF",
        "bytes": 139154,
        "titleEn": "Health 276 Dt 17 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-29-dt-04-11-2019-pdf",
        "file": "Health_29_dt__04_11_2019.pdf",
        "bytes": 56433,
        "titleEn": "Health 29 dt 04 11 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-3-dt-04-01-2019-pdf",
        "file": "Health_3_dt__04_01_2019.pdf",
        "bytes": 499919,
        "titleEn": "Health 3 dt 04 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-317-dt-21-08-2018-pdf",
        "file": "Health_317_dt_21_08_2018.pdf",
        "bytes": 195455,
        "titleEn": "Health 317 dt 21 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-320-dt-21-08-2018-pdf",
        "file": "Health_320_dt_21_08_2018.pdf",
        "bytes": 170084,
        "titleEn": "Health 320 dt 21 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-322-dt-29-10-2018-pdf",
        "file": "Health_322_dt__29_10_2018.PDF",
        "bytes": 76020,
        "titleEn": "Health 322 dt 29 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-327-dt-05-11-2018-pdf",
        "file": "health_327_dt_05_11_2018.PDF",
        "bytes": 68210,
        "titleEn": "health 327 dt 05 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-328-dt-05-11-2018-pdf",
        "file": "Health_328_dt__05_11_2018.PDF",
        "bytes": 70297,
        "titleEn": "Health 328 dt 05 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-382-20-03-2018-pdf",
        "file": "Health_382_20_03_2018.PDF",
        "bytes": 1023574,
        "titleEn": "Health 382 20 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-427-28-03-2018-pdf",
        "file": "Health_427_28_03_2018.PDF",
        "bytes": 891380,
        "titleEn": "Health 427 28 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-457-03-04-2018-pdf",
        "file": "Health_457_03_04_2018.PDF",
        "bytes": 1279319,
        "titleEn": "Health 457 03 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-465-04-04-2018-pdf",
        "file": "Health_465_04_04_2018.PDF",
        "bytes": 1138644,
        "titleEn": "Health 465 04 04 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-478-dt-07-12-2019-pdf",
        "file": "Health_478_dt__07_12_2019.pdf",
        "bytes": 67364,
        "titleEn": "Health 478 dt 07 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-503-23-06-17-pdf",
        "file": "Health_503_23_06_17.PDF",
        "bytes": 112081,
        "titleEn": "Health 503 23 06 17"
      },
      {
        "id": "tender-tender-2018-2019-health-51-dt-07-03-2019-pdf",
        "file": "Health_51_Dt_07_03_2019.PDF",
        "bytes": 144435,
        "titleEn": "Health 51 Dt 07 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-555-dt-27-12-2019-pdf",
        "file": "Health_555_dt__27_12_2019.pdf",
        "bytes": 61767,
        "titleEn": "Health 555 dt 27 12 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-61-dt-06-03-2019-pdf",
        "file": "Health_61_dt__06_03_2019.pdf",
        "bytes": 56132,
        "titleEn": "Health 61 dt 06 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-63-dt-06-03-2019-pdf",
        "file": "Health_63_dt__06_03_2019.pdf",
        "bytes": 36308,
        "titleEn": "Health 63 dt 06 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-726-18-05-2018-pdf",
        "file": "Health_726_18_05_2018.PDF",
        "bytes": 1008154,
        "titleEn": "Health 726 18 05 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-85-dt-07-03-2019-pdf",
        "file": "Health_85_dt__07_03_2019.pdf",
        "bytes": 90274,
        "titleEn": "Health 85 dt 07 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-9-dt-08-03-2019-pdf",
        "file": "Health_9_dt__08_03_2019.pdf",
        "bytes": 85775,
        "titleEn": "Health 9 dt 08 03 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-903-22-06-2018-pdf",
        "file": "Health_903_22_06_2018.PDF",
        "bytes": 883354,
        "titleEn": "Health 903 22 06 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-92-dt-21-01-2019-pdf",
        "file": "Health_92_dt_21_01_2019.pdf",
        "bytes": 1097575,
        "titleEn": "Health 92 dt 21 01 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-975-27-06-17-pdf",
        "file": "Health_975_27_06_17.PDF",
        "bytes": 112075,
        "titleEn": "Health 975 27 06 17"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-1004-27-12-2017-pdf",
        "file": "Health_NHM_1004_27_12_2017.PDF",
        "bytes": 1979426,
        "titleEn": "Health NHM 1004 27 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-1006-27-12-2017-pdf",
        "file": "Health_NHM_1006_27_12_2017.PDF",
        "bytes": 998402,
        "titleEn": "Health NHM 1006 27 12 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-103-20-03-2018-pdf",
        "file": "Health_NHM_103_20_03_2018.PDF",
        "bytes": 1543056,
        "titleEn": "Health NHM 103 20 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-19-06-01-2018-pdf",
        "file": "HEALTH_NHM_19_06_01_2018.PDF",
        "bytes": 2481325,
        "titleEn": "HEALTH NHM 19 06 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-232-07-06-2018-pdf",
        "file": "Health_NHM_232_07_06_2018.PDF",
        "bytes": 4001260,
        "titleEn": "Health NHM 232 07 06 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-237-06-07-2018-pdf",
        "file": "Health_NHM_237_06_07_2018.PDF",
        "bytes": 5326817,
        "titleEn": "Health NHM 237 06 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-31-12-01-2018-pdf",
        "file": "Health_NHM_31_12_01_2018.PDF",
        "bytes": 6023566,
        "titleEn": "Health NHM 31 12 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-312-13-08-2018-pdf",
        "file": "Health_NHM_312_13_08_2018.pdf",
        "bytes": 224475,
        "titleEn": "Health NHM 312 13 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-517-04-07-2017-pdf",
        "file": "Health_NHM_517_04_07_2017.PDF",
        "bytes": 166595,
        "titleEn": "Health NHM 517 04 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-520-07-07-2017-pdf",
        "file": "Health_NHM_520_07_07_2017.PDF",
        "bytes": 179303,
        "titleEn": "Health NHM 520 07 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-521-07-07-2017-pdf",
        "file": "Health_NHM_521_07_07_2017.PDF",
        "bytes": 179297,
        "titleEn": "Health NHM 521 07 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-534-12-07-2017-pdf",
        "file": "Health_NHM_534_12_07_2017.PDF",
        "bytes": 124388,
        "titleEn": "Health NHM 534 12 07 2017"
      },
      {
        "id": "tender-tender-2018-2019-health-nhm-56-25-01-2018-pdf",
        "file": "Health_NHM_56_25_01_2018.PDF",
        "bytes": 884019,
        "titleEn": "Health NHM 56 25 01 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-10-dt-04-06-2019-pdf",
        "file": "Health_NUHM_10_Dt_04_06_2019.PDF",
        "bytes": 14338988,
        "titleEn": "Health NUHM 10 Dt 04 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-10-dt-06-06-2019-pdf",
        "file": "Health_NUHM_10_Dt_06_06_2019.PDF",
        "bytes": 15567245,
        "titleEn": "Health NUHM 10 Dt 06 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-1163-dt-06-08-2018-pdf",
        "file": "Health_NUHM_1163_Dt_06_08_2018.PDF",
        "bytes": 2069483,
        "titleEn": "Health NUHM 1163 Dt 06 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-161-dt-04-06-2019-pdf",
        "file": "Health_NUHM_161_Dt_04_06_2019.PDF",
        "bytes": 4892027,
        "titleEn": "Health NUHM 161 Dt 04 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-184-20-03-2018-pdf",
        "file": "Health_NUHM_184_20_03_2018.PDF",
        "bytes": 2994456,
        "titleEn": "Health NUHM 184 20 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-185-26-03-2018-pdf",
        "file": "Health_NUHM_185_26_03_2018.PDF",
        "bytes": 2897344,
        "titleEn": "Health NUHM 185 26 03 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-19-dt-30-08-19-pdf",
        "file": "Health_NUHM_19_Dt_30_08_19.pdf",
        "bytes": 3025499,
        "titleEn": "Health NUHM 19 Dt 30 08 19"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-225-18-05-2018-pdf",
        "file": "Health_NUHM_225_18_05_2018.PDF",
        "bytes": 3222760,
        "titleEn": "Health NUHM 225 18 05 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-24-dt-11-02-2019-pdf",
        "file": "Health_NUHM_24_dt__11_02_2019.pdf",
        "bytes": 249996,
        "titleEn": "Health NUHM 24 dt 11 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-26-dt-30-08-19-pdf",
        "file": "Health_NUHM_26_Dt_30_08_19.pdf",
        "bytes": 3005825,
        "titleEn": "Health NUHM 26 Dt 30 08 19"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-297-06-08-2018-pdf",
        "file": "Health_NUHM_297_06_08_2018.PDF",
        "bytes": 3520555,
        "titleEn": "Health NUHM 297 06 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-324-dt-30-10-2018-pdf",
        "file": "Health_NUHM_324_dt_30_10_2018.pdf",
        "bytes": 506059,
        "titleEn": "Health NUHM 324 dt 30 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-356-dt-04-12-2018-pdf",
        "file": "Health_NUHM_356_dt__04_12_2018.PDF",
        "bytes": 87480,
        "titleEn": "Health NUHM 356 dt 04 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-40-dt-30-08-19-pdf",
        "file": "Health_NUHM_40_Dt_30_08_19.pdf",
        "bytes": 2908520,
        "titleEn": "Health NUHM 40 Dt 30 08 19"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-59-dt-06-06-2019-pdf",
        "file": "Health_NUHM_59_Dt_06_06_2019.PDF",
        "bytes": 1399392,
        "titleEn": "Health NUHM 59 Dt 06 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-66-dt-30-08-19-pdf",
        "file": "Health_NUHM_66_Dt_30_08_19.pdf",
        "bytes": 2863736,
        "titleEn": "Health NUHM 66 Dt 30 08 19"
      },
      {
        "id": "tender-tender-2018-2019-health-nuhm-97-dt-30-08-19-pdf",
        "file": "Health_NUHM_97_Dt_30_08_19.pdf",
        "bytes": 3006344,
        "titleEn": "Health NUHM 97 Dt 30 08 19"
      },
      {
        "id": "tender-tender-2018-2019-health-tb-08-dt-04-02-2019-pdf",
        "file": "Health_TB_08_dt__04_02_2019.pdf",
        "bytes": 299073,
        "titleEn": "Health TB 08 dt 04 02 2019"
      },
      {
        "id": "tender-tender-2018-2019-healthnuhm-333-dt-15-11-2018-pdf",
        "file": "HealthNUHM_333_dt_15_11_2018.PDF",
        "bytes": 71955,
        "titleEn": "HealthNUHM 333 dt 15 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-light-531-31-07-2018-pdf",
        "file": "Light_531_31_07_2018.PDF",
        "bytes": 1416273,
        "titleEn": "Light 531 31 07 2018"
      },
      {
        "id": "tender-tender-2018-2019-light-565-13-08-2018-pdf",
        "file": "Light_565_13_08_2018.pdf",
        "bytes": 41992,
        "titleEn": "Light 565 13 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-light-572-14-08-2018-pdf",
        "file": "light-572_14_08_2018.pdf",
        "bytes": 139115,
        "titleEn": "light-572 14 08 2018"
      },
      {
        "id": "tender-tender-2018-2019-mech-2368-dt-10-10-2018-pdf",
        "file": "Mech_2368_dt_10_10_2018.PDF",
        "bytes": 17961,
        "titleEn": "Mech 2368 dt 10 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-nhm-728-01-11-2017-pdf",
        "file": "NHM_728_01_11_2017.PDF",
        "bytes": 1906856,
        "titleEn": "NHM 728 01 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-nhm-956-16-11-2017-pdf",
        "file": "NHM_956_16_11_2017.PDF",
        "bytes": 946154,
        "titleEn": "NHM 956 16 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-nuhm-106-dt-24-11-2018-pdf",
        "file": "NUHM_106_dt__24_11_2018.pdf",
        "bytes": 328353,
        "titleEn": "NUHM 106 dt 24 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-nuhm-15-dt-13-06-2019-pdf",
        "file": "NUHM_15_Dt_13_06_2019.PDF",
        "bytes": 12675370,
        "titleEn": "NUHM 15 Dt 13 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-nuhm-24-3-dt-24-11-2018-pdf",
        "file": "NUHM_24-3_dt__24_11_2018.pdf",
        "bytes": 376248,
        "titleEn": "NUHM 24-3 dt 24 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-nuhm-40-dt-24-11-2018-pdf",
        "file": "NUHM_40_dt__24_11_2018.pdf",
        "bytes": 303436,
        "titleEn": "NUHM 40 dt 24 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-nuhm-8-dt-11-06-2019-pdf",
        "file": "NUHM_8_Dt_11_06_2019.PDF",
        "bytes": 14711094,
        "titleEn": "NUHM 8 Dt 11 06 2019"
      },
      {
        "id": "tender-tender-2018-2019-printing-quotation-115-30-06-17-pdf",
        "file": "PRINTING_QUOTATION_115_30_06_17.pdf",
        "bytes": 2465323,
        "titleEn": "PRINTING QUOTATION 115 30 06 17"
      },
      {
        "id": "tender-tender-2018-2019-quatation-notice-accounts-325-14-08-17-pdf",
        "file": "Quatation_Notice_Accounts_325_14_08_17.PDF",
        "bytes": 844391,
        "titleEn": "Quatation Notice Accounts 325 14 08 17"
      },
      {
        "id": "tender-tender-2018-2019-ratelist-for-lan-port-19-06-2017-pdf",
        "file": "Ratelist_For_Lan_Port_19_06_2017.PDF",
        "bytes": 116776,
        "titleEn": "Ratelist For Lan Port 19 06 2017"
      },
      {
        "id": "tender-tender-2018-2019-smartcity-23-dt-14-11-2018-pdf",
        "file": "SmartCity_23_dt_14_11_2018.PDF",
        "bytes": 162310,
        "titleEn": "SmartCity 23 dt 14 11 2018"
      },
      {
        "id": "tender-tender-2018-2019-ward-a-309-dt-03-12-2018-pdf",
        "file": "Ward-A_309_dt__03_12_2018.PDF",
        "bytes": 157808,
        "titleEn": "Ward-A 309 dt 03 12 2018"
      },
      {
        "id": "tender-tender-2018-2019-ww-zone-1-2-9-429-dt-01-10-2018-pdf",
        "file": "ww_zone_1_2_9_429_dt_01_10_2018.PDF",
        "bytes": 706570,
        "titleEn": "ww zone 1 2 9 429 dt 01 10 2018"
      },
      {
        "id": "tender-tender-2018-2019-zone-4-518-07-11-2017-pdf",
        "file": "Zone_4_518_07_11_2017.PDF",
        "bytes": 2070698,
        "titleEn": "Zone 4 518 07 11 2017"
      },
      {
        "id": "tender-tender-2018-2019-zone-4-480-11-10-2017-pdf",
        "file": "Zone-4_480_11_10_2017.PDF",
        "bytes": 3491257,
        "titleEn": "Zone-4 480 11 10 2017"
      }
    ]
  }
];

/** Census resources whose Drive file opened without sign-in. */
export const verifiedCensusIds: number[] = [];
