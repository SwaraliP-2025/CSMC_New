import type { ArchiveFile } from "@/lib/archiveDocuments";

/** public/documents/Municipal Document Repository/Town Planning Department/ */
export const TOWN_PLANNING_DOCUMENTS_FOLDER = [
  "Municipal Document Repository",
  "Town Planning Department",
] as const;

const AMC_LAYOUT = "https://drive.google.com/drive/folders/14tBeN4zCtY7yptkOEaeSRlR7K9ckod-V";
const MRTP_26 = "https://drive.google.com/drive/folders/1KN8OJQ1HGUm9JVFNxyvrsY2Fm6x50PJT";
const MRTP_28 = "https://drive.google.com/drive/folders/1n8DktI0ukzsg8CxjLvtbZaUmWLUqiR99";

const townPlanningPdfFiles: ArchiveFile[] = [
  { id: "tp-2010-11-bp", file: "2010-11_B_P_.pdf", bytes: 689125 },
  { id: "tp-2010-11-oc", file: "2010-11_O_C_.pdf", bytes: 239604 },
  { id: "tp-2011-12-bp", file: "2011-12_B_P_.pdf", bytes: 629275 },
  { id: "tp-2011-12-oc", file: "2011-12_O_C.pdf", bytes: 228882 },
  { id: "tp-2012-13-bp", file: "2012-13_B_P_.pdf", bytes: 539957 },
  { id: "tp-2012-13-oc", file: "2012-13_O_C.pdf", bytes: 190817 },
  { id: "tp-2013-114-bp", file: "2013-114_B_P_1.pdf", bytes: 386869 },
  { id: "tp-2014-15-bp", file: "2014-15_B_P_.pdf", bytes: 366249 },
  { id: "tp-2015-16-bp", file: "2015-16_B_P_1.pdf", bytes: 320673 },
  { id: "tp-2015-16-oc", file: "2015-16_O_C_.pdf", bytes: 150730 },
  { id: "tp-2016-171", file: "2016-171.pdf", bytes: 393164 },
  { id: "tp-2017-18-bp", file: "2017-18_B_P1.pdf", bytes: 269954 },
  { id: "tp-2017-18-oc", file: "2017-18_O_C_.pdf", bytes: 156173 },
  { id: "tp-adtp-1134", file: "adtp_1134_dt_22_04_2021.pdf", bytes: 4266368 },
  { id: "tp-adtp-1150", file: "ADTP_1150_DT__26_04_2021.pdf", bytes: 7666871 },
  { id: "tp-adtp-1202", file: "adtp_1202_dt_04_05_2021.pdf", bytes: 15644168 },
  { id: "tp-adtp-1479", file: "adtp_1479_dt__18_05_2021.pdf", bytes: 1589976 },
  { id: "tp-adtp-2688", file: "adtp_2688_dt__19_07_2021.pdf", bytes: 5575403 },
  { id: "tp-adtp-605", file: "ADTP_605_dt__05_03_2020.pdf", bytes: 148043 },
  { id: "tp-adtp-657", file: "ADTP_657_dt__19_03_2021.pdf", bytes: 3801922 },
  { id: "tp-building-permission-2019-20", file: "Building_Permission_2019-20.pdf", bytes: 113232 },
  { id: "tp-building-permission-2020-21", file: "Building_Permission_2020-21.pdf", bytes: 35459 },
  { id: "tp-building-permit-2025-26", file: "Building_Permit_2025-26.pdf", bytes: 4314891 },
  { id: "tp-d-class-gazette", file: "D-CLASS_FINAL_GAZZETTE_NOTIFICATION.pdf", bytes: 2399521 },
  { id: "tp-gunthewari-2021-2022", file: "Gunthewari_Certificate_2021-2022.pdf", bytes: 1493151 },
  { id: "tp-gunthewari-2022-2023", file: "Gunthewari_Certificate_2022-2023.pdf", bytes: 326463 },
  { id: "tp-layout-2023-26", file: "lay_out-2023-24_to_2025-26.pdf", bytes: 1574654 },
  { id: "tp-mrtp-compounded-2017", file: "Notification_for_MRTP_Compounded_Structures_Rules_2017.pdf", bytes: 15135586 },
  { id: "tp-occupancy-2019-20", file: "Occupancy_Certificate_2019-20.pdf", bytes: 142838 },
  { id: "tp-occupancy-2020-21", file: "Occupancy_Certificate_2020-21.pdf", bytes: 38611 },
  { id: "tp-occupancy-2025-26", file: "Occupancy_Certificate_2025-26_commm-compressed.pdf", bytes: 3979190 },
  { id: "tp-outword-bp-2018-19", file: "Out_word_B_P__2018-19.pdf", bytes: 318863 },
  { id: "tp-outword-bp-2019-20", file: "Out_word_B_P__2019-20.pdf", bytes: 60218 },
  { id: "tp-outword-oc-2018-19", file: "Out_word_O_C__2018-19.pdf", bytes: 206577 },
  { id: "tp-outword-oc-2019-20", file: "Out_word_O_C__2019-20.pdf", bytes: 79483 },
  { id: "tp-oc-2014-15", file: "O_C_2014-15.pdf", bytes: 139996 },
  { id: "tp-oc-ism-2013-14", file: "O_C_ISM_-2013-14.pdf", bytes: 129965 },
  { id: "tp-oc-16-17", file: "O_C__16-17.pdf", bytes: 162790 },
  { id: "tp-regarding-approvals", file: "Regarding_approvals_of_Building.pdf", bytes: 4935544 },
  { id: "tp-rejected-2021-2022", file: "REJECTED_FILES_2021-2022.pdf", bytes: 68770 },
  { id: "tp-rejected-2022-2023", file: "REJECTED_Files_2022-2023.pdf", bytes: 32921 },
  { id: "tp-sector-1", file: "Sector-1_Existing_Land_Use.pdf", bytes: 1844712 },
  { id: "tp-sector-2", file: "Sector-2_Existing_Land_Use.pdf", bytes: 2669247 },
  { id: "tp-sector-3", file: "Sector-3_Existing_Land_Use.pdf", bytes: 1751119 },
  { id: "tp-sector-4", file: "Sector-4_Existing_Land_Use.pdf", bytes: 3482407 },
  { id: "tp-sector-5", file: "Sector-5_Existing_Land_Use.pdf", bytes: 1802949 },
  { id: "tp-shivajinagar", file: "Shivajinagar_Bhusampadan_railway_bhuyari_marg.pdf", bytes: 2709134 },
  { id: "tp-tdr-1-compressed", file: "TDR-1_compressed.pdf", bytes: 6979889 },
  { id: "tp-tdr-2-2025-26", file: "TDR-2-2025-26-compressed.pdf", bytes: 6289254 },
  { id: "tp-tdr-2", file: "TDR-2.pdf", bytes: 5348346 },
  { id: "tp-tdr-1-2025-26", file: "TDR_-1_-_2025-26_commm.pdf", bytes: 3264785 },
  { id: "tp-tdr-1-compressed-alt", file: "TDR_-1_compressed.pdf", bytes: 6825741 },
  { id: "tp-tdr-outword", file: "TDR_Out_word.pdf", bytes: 176260 },
  { id: "tp-tdr-outword-new", file: "TDR_Out_word_New.pdf", bytes: 130956 },
  { id: "tp-1441", file: "TP_1441_DT_11_07_2019.pdf", bytes: 3900338 },
  { id: "tp-tdr-2019-20", file: "T_D_R_2019-20.pdf", bytes: 63369 },
  { id: "tp-tdr-outword-1", file: "T_D_R__out_word1.pdf", bytes: 297516 },
];

export const townPlanningDriveDocuments: ArchiveFile[] = [
  {
    id: "tp-drive-amc-layout",
    file: "AMC LAYOUT 250226",
    bytes: 0,
    externalUrl: AMC_LAYOUT,
    titleEn: "AMC LAYOUT 250226",
    titleMr: "AMC LAYOUT 250226",
  },
  {
    id: "tp-drive-mrtp-26",
    file: "draft Development plan published under MRTP section 26.(4)",
    bytes: 0,
    externalUrl: MRTP_26,
    titleEn: "draft Development plan published under MRTP section 26.(4)",
    titleMr: "draft Development plan published under MRTP section 26.(4)",
  },
  {
    id: "tp-drive-mrtp-28",
    file: "draft development plan published under MRTP section 28(4)",
    bytes: 0,
    externalUrl: MRTP_28,
    titleEn: "draft development plan published under MRTP section 28(4)",
    titleMr: "draft development plan published under MRTP section 28(4)",
  },
];

export const townPlanningDocuments: ArchiveFile[] = [
  ...townPlanningPdfFiles,
  ...townPlanningDriveDocuments,
];
