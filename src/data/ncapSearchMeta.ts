import type { ArchiveFile } from "@/lib/archiveDocuments";

/** Titles and short excerpts derived from public/data/ncap-documents.json. Full text stays on the NCAP page. */

export type NcapSearchMeta = {
  id: string;
  title: string;
  fileName: string;
  organisation: string | null;
  year: number | null;
  fileType: "pdf" | "docx";
  bytes: number;
  excerpt: string;
};

export const NCAP_SEARCH_META: NcapSearchMeta[] = [
  {
    "id": "ncap-01",
    "title": "BB6_1_LANDFILL_CSWAP_AUR",
    "fileName": "BB6_1_LANDFILL_CSWAP_AUR.docx",
    "organisation": "Aurangabad Municipal Corporation",
    "year": null,
    "fileType": "docx",
    "bytes": 2582063,
    "excerpt": "ANNEX 2: CITY SOLID WASTE ACTION PLAN (CSWAP)° (As referred in Chapter 2 and 6) ULB’s City Profile: (demographic and waste generation details) 1 Name of ULB : A"
  },
  {
    "id": "ncap-02",
    "title": "VE_9_1_NMT_PLAN_Abad_SMART_CITY_CYCLE_TRACKROUTES__Office_Order",
    "fileName": "VE_9_1_NMT_PLAN_Abad_SMART_CITY_CYCLE_TRACKROUTES__Office_Order.pdf",
    "organisation": "Aurangabad Smart City Development Corporation Ltd.",
    "year": 2020,
    "fileType": "pdf",
    "bytes": 3236603,
    "excerpt": "ffi ASCDCL AuranAabad Smart City Development Corporation ttd. snirmn r.n€ foA We qftRilr fuFrk, CIN No. : U93090MH2019SGC286039 5n. q;. a(rsfim(rfr/ 2020 I z g "
  },
  {
    "id": "ncap-03",
    "title": "CD_1_2__CD_WASTE_TENDER_RFP",
    "fileName": "CD_1_2__CD_WASTE_TENDER_RFP.pdf",
    "organisation": "Aurangabad Municipal Corporation",
    "year": 2021,
    "fileType": "pdf",
    "bytes": 1142599,
    "excerpt": "1 Aurangabad Municipal Corporation, Aurangabad Request for Proposal Tender for Collection of Construction and Demolition Waste generated within AMC Limit and Es"
  },
  {
    "id": "ncap-04",
    "title": "VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022",
    "fileName": "VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf",
    "organisation": "Office of the Assistant Commissioner of Police (Traffic), Aurangabad City",
    "year": null,
    "fileType": "pdf",
    "bytes": 599197,
    "excerpt": "office of the Asistant Commissioner of Police (Trafic), Aurangabad City (FA9M HTS FHNT, HTarATI, TAI Ts, 3MMATE TE) 7. o?¥o-??¥o4 Y6 email- acptraf.abad@mahapol"
  },
  {
    "id": "ncap-05",
    "title": "CSMC_SELF_ASSESSMENT_REPORT_2025",
    "fileName": "CSMC_SELF_ASSESSMENT_REPORT_2025.pdf",
    "organisation": null,
    "year": null,
    "fileType": "pdf",
    "bytes": 3740128,
    "excerpt": ""
  },
  {
    "id": "ncap-06",
    "title": "VE_4_CLEAN_FUEL_FUEL_QUALITY",
    "fileName": "VE_4_CLEAN_FUEL_FUEL_QUALITY.pdf",
    "organisation": null,
    "year": null,
    "fileType": "pdf",
    "bytes": 131979,
    "excerpt": ""
  },
  {
    "id": "ncap-07",
    "title": "VE_8_1_Vehicle_scrapping_CSMC",
    "fileName": "VE_8_1_Vehicle_scrapping_CSMC.pdf",
    "organisation": null,
    "year": null,
    "fileType": "pdf",
    "bytes": 498160,
    "excerpt": ""
  },
  {
    "id": "ncap-08",
    "title": "VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221",
    "fileName": "VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf",
    "organisation": "Office of the Assistant Commissioner of Police (Traffic), Aurangabad City",
    "year": null,
    "fileType": "pdf",
    "bytes": 599197,
    "excerpt": "office of the Asistant Commissioner of Police (Trafic), Aurangabad City (FA9M HTS FHNT, HTarATI, TAI Ts, 3MMATE TE) 7. o?¥o-??¥o4 Y6 email- acptraf.abad@mahapol"
  }
];

export function ncapArchiveDocuments(): ArchiveFile[] {
  return NCAP_SEARCH_META.map((doc) => ({
    id: doc.id,
    file: doc.fileName,
    bytes: doc.bytes,
  }));
}
