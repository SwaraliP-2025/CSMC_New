import type { ArchiveFile } from "@/lib/archiveDocuments";

/** Newly verified public records. Each path is the existing file. Nothing here is copied. */

export const AUDIT_DOCUMENTS_FOLDER = ["Municipal Document Repository", "Audit"] as const;

export const auditDocuments: ArchiveFile[] = [
  { id: "audit-2004-2005", file: "Annual_Audit_Report_of_2004-2005.pdf", bytes: 327268 },
  { id: "audit-2005-2006", file: "Annual_Audit_Report_of_2005-2006.pdf", bytes: 1179504 },
  { id: "audit-2006-2008", file: "Annual_Audit_Report_of_2006-2007-2007-2008.pdf", bytes: 1512779 },
  { id: "audit-2008-2009", file: "Annual_Audit_Report_of_2008-2009.pdf", bytes: 1318088 },
  { id: "audit-2009-2011", file: "annual_audit_report_of_2009-10_2010-11.pdf", bytes: 1285674 },
  { id: "audit-2012-2014-1", file: "Annual_Audit_Report_of_2012-13_13-14-1.pdf", bytes: 2982889 },
  { id: "audit-2012-2014", file: "Annual_Audit_Report_of_2012-13_2013-2014.pdf", bytes: 3169056 },
  { id: "audit-2014-2016", file: "Annual_Audit_Report_of_2014-2015_2015-2016.pdf", bytes: 3263778 },
  { id: "audit-2016-2018-statement", file: "Annual_Audit_Report_of_2016-2017_2017-18_Statement.pdf", bytes: 291365 },
  { id: "audit-2016-2018", file: "Annual_Audit_Report_of_2016-2017_2017-18.pdf", bytes: 1967568 },
  { id: "audit-2018-2019", file: "annual_audit_report_of_2018-2019.pdf", bytes: 1436575 },
  { id: "audit-2020-2021", file: "annual_audit_report_of_2020-2021.pdf", bytes: 617198 },
  { id: "audit-2021-2022", file: "annual_audit_report_of_2021-2022.pdf", bytes: 1894191 },
  { id: "audit-2022-2023", file: "Annual_Audit_Report_of_2022-2023.pdf", bytes: 4241068 },
  { id: "audit-2023-2024", file: "Annual_Audit_Report_of_2023-2024_new.pdf", bytes: 2780870 },
  { id: "audit-2024-2025", file: "Annual Audit Report of  2024-2025.pdf", bytes: 14871634 },
];

export const ELECTRICAL_DOCUMENTS_FOLDER = ["Municipal Document Repository", "Electrical Department"] as const;

/** Rate schedules and the work-done list whose first pages identify them. Scanned ward parts stay off this list. */
export const electricalPublicDocuments: ArchiveFile[] = [
  { id: "electrical-csr-2017-18", file: "CSR_17-18-1.pdf", bytes: 1372000 },
  { id: "electrical-csr-2018-19", file: "PWD_Electrical_csr18-19_14_9_2018.pdf", bytes: 3316692 },
  { id: "electrical-work-done-2009-2015", file: "Work_Done_-_2009_to_2015.pdf", bytes: 159534 },
];

export const LIBRARY_DOCUMENTS_FOLDER = ["Municipal Document Repository", "Library Department"] as const;

export const libraryDocuments: ArchiveFile[] = [
  { id: "library-reading-rooms", file: "library.pdf", bytes: 46890 },
];

export const NULM_DOCUMENTS_FOLDER = ["Municipal Document Repository", "NULM Department"] as const;

/** Blank nomination form. The printed fields are empty. */
export const nulmDocuments: ArchiveFile[] = [
  { id: "nulm-blank-nomination-form", file: "Arja_Namuna_01.pdf", bytes: 102979 },
];

export const FIRE_INFORMATION_FOLDER = ["Municipal Document Repository", "Fire Department"] as const;

export const fireInformationDocuments: ArchiveFile[] = [
  { id: "fire-brigade-information-2025-04-22", file: "Fire_brigade_Information_22_4_2025.pdf", bytes: 1614722 },
];

export const MECHANICAL_DOCUMENTS_FOLDER = ["Municipal Document Repository", "Mechanical Document"] as const;

export const mechanicalPublicDocuments: ArchiveFile[] = [
  { id: "mechanical-279-vehicles-2017-08-01", file: "279_Vehicle.pdf", bytes: 130428 },
  { id: "mechanical-276-vehicles-2017-05-20", file: "List_of_276_Vehicles_Dt__20_5_2017.pdf", bytes: 307409 },
  { id: "mechanical-water-works-2009-2015", file: "Water_Work_Mechanical_2009_to_2015.pdf", bytes: 98947 },
  { id: "mechanical-water-works-2009-10-2015-16", file: "Water_Work_Mechanical_2009-10_To_2015-16.pdf", bytes: 47946 },
];

/**
 * Date-range minute books whose first page is a standing-committee volume.
 * They already live in this folder. The folder name is the on-disk path, not a public heading.
 * The 3-page file dated 16 March 2015 is omitted because a published minute already records that meeting.
 */
export const STANDING_COMMITTEE_VOLUME_FOLDER = "Needs Review";

export const standingCommitteeVolumeMinutes: ArchiveFile[] = [
  { id: "sc-volume-1988-11-24", file: "24-11-88_to_18-1-89.pdf", bytes: 977281, date: "1988-11-24" },
  { id: "sc-volume-1989-11-09", file: "09-11-89_to_30-03-90.pdf", bytes: 1789663, date: "1989-11-09" },
  { id: "sc-volume-1990-11-05", file: "05-11-90_to_30-03-91.pdf", bytes: 1802553, date: "1990-11-05" },
  { id: "sc-volume-1991-12-06", file: "06-12-91_to_04-03-92.pdf", bytes: 925464, date: "1991-12-06" },
  { id: "sc-volume-1992-11-09", file: "09-11-92_to_11-02-93.pdf", bytes: 872766, date: "1992-11-09" },
  { id: "sc-volume-1996-10-09", file: "09-10-96_to_07-01-97.pdf", bytes: 1892105, date: "1996-10-09" },
  { id: "sc-volume-1997-10-16", file: "16-10-97_to_30-3-98.pdf", bytes: 1726997, date: "1997-10-16" },
  { id: "sc-volume-1998-12-07", file: "07-12-98_to_24-03-99.pdf", bytes: 2184894, date: "1998-12-07" },
  { id: "sc-volume-1999-12-03", file: "03-12-99_to_13-3-2000.pdf", bytes: 1464378, date: "1999-12-03" },
  { id: "sc-volume-2000-05-22", file: "22-05-00_to_31-03-01.pdf", bytes: 1553515, date: "2000-05-22" },
  { id: "sc-volume-2001-06-04", file: "04-06-2001_to_30-01-2002.pdf", bytes: 1501600, date: "2001-06-04" },
  { id: "sc-volume-2002-04-05", file: "05-04-02_to_28-02-03.pdf", bytes: 1457347, date: "2002-04-05" },
  { id: "sc-volume-2003-10-03", file: "03-10-03_to_30-1-04.pdf", bytes: 919587, date: "2003-10-03" },
];
