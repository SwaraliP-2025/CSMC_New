import type { ArchiveFile } from "@/lib/archiveDocuments";

/** public/documents/Municipal Document Repository/Administration and Establishment Department/General Administration Documents/ */
export const GENERAL_ADMINISTRATION_DOCUMENTS_FOLDER = [
  "Municipal Document Repository",
  "Administration and Establishment Department",
  "General Administration Documents",
] as const;

const DRIVE_1 = "https://drive.google.com/drive/folders/11hVVf940NF4vL0jqGj3iTmvfO5LY_TeG";
const DRIVE_2 = "https://drive.google.com/drive/folders/1kkLnvI_LuSyWXlo4Diz1IcYf3alGbex2";

export const generalAdministrationDocuments: ArchiveFile[] = [
  { id: "gad-santion-roster-1", file: "06_Santion_Roster_1.pdf", bytes: 4753175 },
  { id: "gad-santion-roster-2", file: "06_Santion_Roster_2.pdf", bytes: 3560174 },
  { id: "gad-anukampa-orders", file: "07_Anukampa_Orders_compressed_(1).pdf", bytes: 3007189 },
  { id: "gad-nomination-promotion", file: "4_Nomination_Promotion_Post_Details_1-1-2026.pdf", bytes: 124743 },
  { id: "gad-aakrutiband-2021-02", file: "Aakrutiband_15_02_2021.pdf", bytes: 895384 },
  { id: "gad-akrutibandh-2021-07", file: "Akrutibandh_Dt__23-7-2021.pdf", bytes: 133868 },
  { id: "gad-gazette-august-2026", file: "Gazette_August_2026.pdf", bytes: 126531 },
  { id: "gad-group-c-qualifications", file: "Possessing_the_qualifications_for_a_Group_C_post_for_th.pdf", bytes: 315152 },
  { id: "gad-sevapravesh-2023", file: "Sevapravesh_Niyam_Dt_15-2-2023.pdf", bytes: 320181 },
  { id: "gad-sevapravesh-2021", file: "Sevapravesh_Niyam_Dt__26_08_2021.pdf", bytes: 1026467 },
  { id: "gad-group-d-waiting-list", file: "Waiting_list_for_appointment_to_Group-D_posts_on_compas.pdf", bytes: 328961 },
  {
    id: "gad-google-drive-1",
    file: "General Administration Documents – Google Drive",
    bytes: 0,
    externalUrl: DRIVE_1,
    titleEn: "General Administration Documents – Google Drive",
    titleMr: "सामान्य प्रशासन दस्तऐवज – Google Drive",
  },
  {
    id: "gad-google-drive-2",
    file: "General Administration Documents – Google Drive (2)",
    bytes: 0,
    externalUrl: DRIVE_2,
    titleEn: "General Administration Documents – Google Drive (2)",
    titleMr: "सामान्य प्रशासन दस्तऐवज – Google Drive (2)",
  },
];
