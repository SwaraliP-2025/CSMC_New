import type { ArchiveFile } from "@/lib/archiveDocuments";
import { officialPublicAdditions } from "@/data/officialPublicAdditions";

export type OfficialVerifiedGroup = {
  slug: string;
  folder: string[];
  documents: ArchiveFile[];
};

/** Official CSMC PDFs whose file size matches the local copy and the Drive inventory. */
export function mergedOfficialGroups(): OfficialVerifiedGroup[] {
  const merged = new Map<string, OfficialVerifiedGroup>();
  for (const group of [...officialVerifiedGroups, ...officialPublicAdditions]) {
    const key = `${group.slug}\n${group.folder.join("/")}`;
    const existing = merged.get(key);
    if (existing) existing.documents = [...existing.documents, ...group.documents];
    else merged.set(key, { ...group, documents: [...group.documents] });
  }
  return [...merged.values()];
}

export const officialVerifiedGroups: OfficialVerifiedGroup[] = [
  {
    slug: "city-engineer",
    folder: ["Municipal Document Repository","City Engineer"],
    documents: [
      { id: "official-city-engineer-10-executive-engineer-bot-pdf", file: "10_Executive_Engineer_(BOT).pdf", bytes: 1560169, titleEn: "Executive Engineer (BOT)" },
      { id: "official-city-engineer-city-engineer-department-pdf", file: "City_Engineer_Department.pdf", bytes: 2398198, titleEn: "City Engineer Department" },
      { id: "official-city-engineer-executive-engineer-drainage-pdf", file: "Executive_Engineer_(_Drainage).pdf", bytes: 1240508, titleEn: "Executive Engineer (Drainage)" },
      { id: "official-city-engineer-executive-engineer-electricity-pdf", file: "Executive_Engineer_(Electricity).pdf", bytes: 2854067, titleEn: "Executive Engineer (Electricity)" },
      { id: "official-city-engineer-executive-engineer-roads-pdf", file: "Executive_Engineer_(Roads).pdf", bytes: 1158370, titleEn: "Executive Engineer (Roads)" },
    ],
  },
  {
    slug: "garden",
    folder: ["Municipal Document Repository","Garden Department"],
    documents: [
      { id: "official-garden-childran-park-pdf", file: "Childran_Park.pdf", bytes: 1413823, titleEn: "Childran Park" },
      { id: "official-garden-garden-09-03-17-pdf", file: "Garden_09_03_17.pdf", bytes: 1004087, titleEn: "Garden 09.03.17" },
      { id: "official-garden-garden-611-dt-29-11-2019-pdf", file: "Garden_611_dt__29_11_2019.pdf", bytes: 933196, titleEn: "Garden 611 dt. 29.11.2019" },
    ],
  },
  {
    slug: "health",
    folder: ["Municipal Document Repository","Health Department"],
    documents: [
      { id: "official-health-bio-medical-waste-agreement-pdf", file: "Bio-Medical_Waste_Agreement.pdf", bytes: 1427696, titleEn: "Bio-Medical Waste Agreement" },
      { id: "official-health-dengue-add-pdf", file: "Dengue_Add.pdf", bytes: 1036226, titleEn: "Dengue Add" },
      { id: "official-health-dengue-centers-pdf", file: "Dengue_Centers.pdf", bytes: 237015, titleEn: "Dengue Centers" },
      { id: "official-health-health-1102-dt-24-04-2019-pdf", file: "Health_1102_dt__24_04_2019.pdf", bytes: 93774, titleEn: "Health 1102 dt. 24.04.2019" },
      { id: "official-health-health-887-dt-26-03-2019-pdf", file: "Health_887_dt__26_03_2019.pdf", bytes: 222369, titleEn: "Health 887 dt. 26.03.2019" },
      { id: "official-health-health-893-dt-26-03-2019-pdf", file: "Health_893_dt__26_03_2019.pdf", bytes: 124858, titleEn: "Health 893 dt. 26.03.2019" },
      { id: "official-health-health-nuhm-322-dt-12-08-2024-pdf", file: "Health_NUhm_322_dt__12_08_2024.pdf", bytes: 7168976, titleEn: "Health_NUhm_322_dt_12_08_2024" },
      { id: "official-health-maleriya-pdf", file: "Maleriya.pdf", bytes: 442077, titleEn: "Maleriya" },
      { id: "official-health-mtp-center-list-pdf", file: "MTP_CENTER_LIST.pdf", bytes: 10156975, titleEn: "MTP CENTER LIST" },
      { id: "official-health-nuhm-agreement-pdf", file: "NUHM_Agreement.pdf", bytes: 705167, titleEn: "NUHM Agreement" },
      { id: "official-health-walk-in-interview-date-09-07-2020-pdf", file: "Walk_In_interview_Date_09_07_2020.pdf", bytes: 2131907, titleEn: "Walk In interview Date 09.07.2020" },
    ],
  },
  {
    slug: "labour",
    folder: ["Municipal Document Repository","Labour Department"],
    documents: [
      { id: "official-labour-agreement-1-pdf", file: "Agreement_1.pdf", bytes: 4713325, titleEn: "Agreement 1" },
      { id: "official-labour-agreement-2-pdf", file: "Agreement_2.pdf", bytes: 11578120, titleEn: "Agreement 2" },
      { id: "official-labour-outsourcing-agency-document-pdf", file: "Outsourcing_Agency_Document_.pdf", bytes: 5167887, titleEn: "Outsourcing_Agency_Document_" },
    ],
  },
  {
    slug: "pmay",
    folder: ["Municipal Document Repository","PMAY"],
    documents: [
      { id: "official-pmay-gharkul-section-pdf", file: "Gharkul_Section.pdf", bytes: 3457100, titleEn: "Gharkul Section" },
    ],
  },
  {
    slug: "ramai-housing",
    folder: ["Municipal Document Repository","Ramai Awaas Yojna"],
    documents: [
      { id: "official-ramai-housing-jahir-pragatan1-pdf", file: "Jahir_Pragatan1.pdf", bytes: 281249, titleEn: "Public Notice" },
    ],
  },
  {
    slug: "municipal-secretary-department",
    folder: ["Municipal Document Repository","Secretary Section"],
    documents: [
      { id: "official-municipal-secretary-department-mahapalika-sachiv-section-pdf", file: "Mahapalika_Sachiv_Section.pdf", bytes: 1298729, titleEn: "Secretary" },
    ],
  },
  {
    slug: "solid-waste-management",
    folder: ["Municipal Document Repository","Solid Waste Management Department"],
    documents: [
      { id: "official-solid-waste-management-swm-724-dt-23-11-20221-pdf", file: "swm_724_dt__23_11_20221.pdf", bytes: 239196, titleEn: "swm_724_dt_23_11_20221" },
    ],
  },
  {
    slug: "tax",
    folder: ["Municipal Document Repository","Tax Assessment and Collection"],
    documents: [
      { id: "official-tax-agreement-computer-operator-pdf", file: "Agreement_Computer_Operator.pdf", bytes: 8807851, titleEn: "Agreement Computer Operator" },
      { id: "official-tax-computer-operator-work-orders-pdf", file: "Computer_Operator_Work_Orders.pdf", bytes: 355396, titleEn: "Computer Operator Work Orders" },
      { id: "official-tax-computer-operators-agreement-05-01-2016-pdf", file: "Computer_Operators_Agreement_05_01_2016.pdf", bytes: 360620, titleEn: "Computer Operators Agreement 05.01.2016" },
      { id: "official-tax-dco-report-2016-17-pdf", file: "DCO_Report_2016-17.pdf", bytes: 64982, titleEn: "DCO Report 2016-17" },
      { id: "official-tax-dcoreport-2015-16-pdf", file: "DCOReport_2015-16.pdf", bytes: 63168, titleEn: "DCOReport 2015-16" },
      { id: "official-tax-dy-commi-2-44-dt17-01-2024-pdf", file: "dy_commi_2-44_dt17_01_2024.pdf", bytes: 3011062, titleEn: "dy_commi_2-44_dt17_01_2024" },
      { id: "official-tax-recovery-table-2016-pdf", file: "Recovery_Table_2016.pdf", bytes: 89861, titleEn: "Recovery Table 2016" },
      { id: "official-tax-tax-assessor-web15-16-27-11-2015-pdf", file: "TAX_Assessor_Web15-16_27_11_2015.pdf", bytes: 91525, titleEn: "TAX Assessor Web15-16 27.11.2015" },
      { id: "official-tax-web-letter-tax-pdf", file: "Web_Letter_Tax.pdf", bytes: 60264, titleEn: "Web Letter Tax" },
    ],
  },
  {
    slug: "tourism-development",
    folder: ["Municipal Document Repository","Tourism Department"],
    documents: [
      { id: "official-tourism-development-khidaki-yojana-pdf", file: "khidaki_yojana.pdf", bytes: 1181577, titleEn: "Khidaki Yojana" },
    ],
  },
  {
    slug: "water-supply-distribution",
    folder: ["Municipal Document Repository","Water Supply Department"],
    documents: [
      { id: "official-water-supply-distribution-byelaws-gr-06-02-2014-pdf", file: "Byelaws_GR__06_02_2014.pdf", bytes: 41787, titleEn: "Byelaws GR_ 06.02.2014" },
      { id: "official-water-supply-distribution-list-of-existing-esr-gsr-pdf", file: "List__of_existing_ESR_GSR.pdf", bytes: 37843, titleEn: "List of existing ESR and GSR" },
      { id: "official-water-supply-distribution-sanctioned-byelaws-gazette-published-pdf", file: "Sanctioned_Byelaws_Gazette_published.pdf", bytes: 3881256, titleEn: "Sanctioned Byelaws_Gazette published" },
    ],
  },
];
