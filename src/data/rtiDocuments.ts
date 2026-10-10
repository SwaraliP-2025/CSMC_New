import type { ArchiveFile } from "@/lib/archiveDocuments";

export type RtiDocument = {
  id: string;
  departmentName: string;
  /** English is repeated when the site has no established Marathi name for that unit. */
  departmentNameMr: string;
  /** Omitted when the filename and PDF title do not give a year. */
  year?: string;
  fileName: string;
  bytes: number;
};

export const RTI_FOLDER = "rti";
export const RTI_DEPARTMENT_FOLDER = "Department-wise RTI Documents";
export const RTI_OFFICERS_FOLDER = "List of RTI Officers";
export const RTI_OFFICERS_FILE = "RTI_Order.pdf";

const RTI_BASE = `${import.meta.env.BASE_URL}documents/${encodeURIComponent(RTI_FOLDER)}/${encodeURIComponent(RTI_DEPARTMENT_FOLDER)}/`;

export function rtiDocumentUrl(fileName: string) {
  return `${RTI_BASE}${encodeURIComponent(fileName)}`;
}

function doc(
  id: string,
  departmentName: string,
  departmentNameMr: string,
  fileName: string,
  bytes: number,
  year?: string,
): RtiDocument {
  return { id, departmentName, departmentNameMr, fileName, bytes, ...(year ? { year } : {}) };
}

/** Every departmental PDF in public/documents/rti/Department-wise RTI Documents/. */
export const rtiDocuments: RtiDocument[] = [
  doc("account-2025", "Accounts Department", "लेखा विभाग", "Account_Department_RTI_17_2025.pdf", 695963, "2025"),
  doc("additional-commissioner-1-2025", "Additional Commissioner – I", "अतिरिक्त आयुक्त - 1", "Additional_Commissioner-1_RTI_17_2025.pdf", 1132141, "2025"),
  doc("animal-husbandry-2025", "Animal Husbandry", "Animal Husbandry", "Animal_Husbandry_RTI_17_2025.pdf", 237251, "2025"),
  doc("audit-2025", "Audit Department", "लेखापरीक्षण विभाग", "Audit_Department_RTI_17_2025_1.pdf", 7066201, "2025"),
  doc("central-stores-2025", "Central Stores Department", "मध्यवर्ती भांडार विभाग", "Store_Department_RTI_17_2025.pdf", 860352, "2025"),
  doc("city-water-mechanical", "City Water Supply – Mechanical", "शहर पाणीपुरवठा (यांत्रिकी)", "Water_Supply_City_Mechanical.pdf", 6945245),
  doc("computer-2024", "Computer Section", "संगणक विभाग", "RTI-Computer-2024_.pdf", 169122, "2024"),
  doc("computer-2025", "Computer Section", "संगणक विभाग", "Computer_Section_RTI_17_2025.pdf", 682911, "2025"),
  doc("ddtp-2024", "Deputy Director, Town Planning", "उपसंचालक, नगररचना", "DDTP_2024.pdf", 2560837, "2024"),
  doc("dmc-1-2025", "Deputy Municipal Commissioner-1", "उप आयुक्त-1", "DMC-1_RTI_17_2025.pdf", 5070132, "2025"),
  doc("dmc-2-2025", "Deputy Municipal Commissioner-2", "उप आयुक्त-2", "DMC-2_RTI_17_2025.pdf", 5609569, "2025"),
  doc("dy-engineer-zone-02-2025", "Deputy Engineer, Zone No. 02", "उप अभियंता, झोन क्र. 02", "Dy_Engineer_Zone_No_02_RTI_17_2025.pdf", 711110, "2025"),
  doc("dy-engineer-zone-08-2025", "Deputy Engineer, Zone No. 08", "उप अभियंता, झोन क्र. 08", "Dy_Engineer_Zone_No_08_RTI_17_2025.pdf", 7229356, "2025"),
  doc("dy-engineer-zone-09-2025", "Deputy Engineer, Zone No. 09", "उप अभियंता, झोन क्र. 09", "Dy_Engineer_Zone_No_09_RTI_17_2025_compressed.pdf", 2201567, "2025"),
  doc("education", "Education Department", "शिक्षण विभाग", "Education_Dept_.pdf", 4277938),
  doc("education-2025", "Education Department", "शिक्षण विभाग", "Education_Depatment_RTI_17_2025.pdf", 115375, "2025"),
  doc("election-2025", "Election Department", "निवडणूक व जनगणना विभाग", "Election_Department_RTI_17_2025.pdf", 654731, "2025"),
  doc("electrical-2025", "Electrical Department", "विद्युत विभाग", "Electrical_Department_RTI_17_2025.pdf", 7358471, "2025"),
  doc("establishment-1", "Establishment-1", "Establishment-1", "Establishment-1_Dept_.pdf", 162997),
  doc("establishment-2025", "Establishment Department", "Establishment Department", "Establishment_Department_RTI_17_2025.pdf", 164021, "2025"),
  doc("ee-drainage-garden-2024", "Executive Engineer, Drainage & Garden", "कार्यकारी अभियंता, ड्रेनेज व उद्यान", "Executive_Engineer_Drainage_Garden_2024.pdf", 6565873, "2024"),
  doc("ee-drainage-garden-2025", "Executive Engineer, Drainage & Garden", "कार्यकारी अभियंता, ड्रेनेज व उद्यान", "Executive_Engineer_Drainage_Garden_RTI_17_2025.pdf", 2718546, "2025"),
  doc("fire-2025", "Fire & Disaster Management Department", "अग्निशमन विभाग व आपत्ती व्यवस्थापन विभाग", "Fire_Department_RTI_17_2025.pdf", 174737, "2025"),
  doc("garden", "Garden Department", "उद्यान विभाग", "Garden_Dept.pdf", 670834),
  doc("garden-2025", "Garden Department", "उद्यान विभाग", "RTI_17_Mude_Garden_Section_2025.pdf", 1317811, "2025"),
  doc("disaster-guidelines", "Guidelines for Disaster", "आपत्ती व्यवस्थापन मार्गदर्शक", "Guildelines_For_Disaster.pdf", 2362355),
  doc("health-2025", "Health Department", "आरोग्य विभाग", "Health_Dept__RTI_17_2025.pdf", 889297, "2025"),
  doc("public-relations-2025", "Information & Public Relations Department", "माहिती व जनसंपर्क विभाग", "PRO_RTI_17_2025.pdf", 1093747, "2025"),
  doc("jayakwadi-mechanical-2025", "Jayakwadi Water Supply – Mechanical", "जायकवाडी पाणीपुरवठा (यांत्रिकी)", "Water_Supply_Jaikwadi_Mechanical_RTI_17_2025_.pdf", 2495778, "2025"),
  doc("mechanical-2025", "Mechanical Department", "यांत्रिकी विभाग", "Mechinical_Department_RTI_17_2025.pdf", 2612813, "2025"),
  doc("municipal-secretary", "Municipal Secretary Department", "महापालिका सचिव विभाग", "Municipal_Secretary.pdf", 778674),
  doc("municipal-secretary-2025", "Municipal Secretary Department", "महापालिका सचिव विभाग", "Municipal_Secretary_RTI_17_2025.pdf", 2463675, "2025"),
  doc("security-2025", "Security Department", "सुरक्षा विभाग", "Security_Department_RTI_17_2025.pdf", 262899, "2025"),
  doc("swm", "Solid Waste Management Department", "घनकचरा व्यवस्थापन विभाग", "Solid_Waste_Management.pdf", 166344),
  doc("swm-2025", "Solid Waste Management Department", "घनकचरा व्यवस्थापन विभाग", "SWM_RTI_17_2025.pdf", 4006134, "2025"),
  doc("town-planning-2025", "Town Planning Department", "नगररचना विभाग", "Town_Planning_RTI_17_2025.pdf", 231939, "2025"),
  doc("vigilance-2025", "Vigilance Cell", "Vigilance Cell", "Vigilance_Cell_RTI_17_2025.pdf", 649507, "2025"),
  doc("women-child-2025", "Women and Child Welfare", "समाज विकास विभाग (महिला, बालविकास व दिव्यांग)", "Women_and_Child_Welfare_RTI_17_2025.pdf", 574208, "2025"),
  doc("zone-1-2025", "Zone No. 1", "झोन क्र. 1", "Zone_No_1_RTI_17_2025.pdf", 4309007, "2025"),
  doc("zone-02-2025", "Zone No. 02", "झोन क्र. 02", "Zone_No_02_RTI_17_2025.pdf", 4069905, "2025"),
  doc("zone-4-2025", "Zone No. 4", "झोन क्र. 4", "Zone_No_4_RTI_17_2025.pdf", 1370250, "2025"),
  doc("zone-5-2025", "Zone No. 5", "झोन क्र. 5", "Zone_No_5_RTI_17_2025.pdf", 6600097, "2025"),
  doc("zone-06-2025", "Zone No. 06", "झोन क्र. 06", "Zone_No_06_RTI_17_2025_compressed.pdf", 2727909, "2025"),
  doc("zone-07-2025", "Zone No. 07", "झोन क्र. 07", "Zone_No_07_RTI_17_2025.pdf", 4200060, "2025"),
  doc("zone-08-2025", "Zone No. 08", "झोन क्र. 08", "Zone_No_08_RTI_17_2025.pdf", 354415, "2025"),
  doc("zone-10-2025", "Zone No. 10", "झोन क्र. 10", "Zone_No_10_RTI_17_2025.pdf", 228511, "2025"),
  doc("zone-d-9-2024", "Zone D-9", "झोन D-9", "Zone_D-9_2024.pdf", 231530, "2024"),
  doc("zone-f-7-2024", "Zone F-7", "झोन F-7", "Zone_F-7_2024.pdf", 130749, "2024"),
];

/** The officer-list PDF already linked from /rti-act. This does not copy the file. */
export const RTI_OFFICERS_ORDER: ArchiveFile = {
  id: "rti-officers-order",
  file: RTI_OFFICERS_FILE,
  bytes: 1132898,
  titleEn: "RTI Officers List",
  titleMr: "माहिती अधिकार अधिकारी यादी",
};

export function rtiArchiveDocuments(): ArchiveFile[] {
  return rtiDocuments.map((item) => ({
    id: item.id,
    file: item.fileName,
    bytes: item.bytes,
    titleEn: item.departmentName,
    titleMr: item.departmentNameMr,
  }));
}
