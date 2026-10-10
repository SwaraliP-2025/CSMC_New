import { publishedDocumentUrl } from "@/lib/archiveDocuments";

export type CompletedWork = {
  id: string;
  titleEn: string;
  titleMr: string;
  /** ISO date when the source list recorded one. */
  date?: string;
  file: string;
  bytes: number;
};

const FOLDER = "List of Completed Works";

export function completedWorkUrl(file: string) {
  return publishedDocumentUrl([FOLDER, file]);
}

/**
 * Names and dates from the completed-works list.
 * `List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` is a byte-identical copy of
 * `List_of_Completed_Work_in_Zone_6_17_06_2017.pdf`, so both use that row.
 * The listed file "List of Completed Work Zone 6 13.06.2017" is not in this folder.
 */
export const completedWorks: CompletedWork[] = [
  {
    id: "zone-06-road-works",
    titleEn: "List of Road Work Done in Zone 06",
    titleMr: "झोन 06 मध्ये पूर्ण झालेली रस्ते कामांची यादी",
    file: "Zone_06_Road_Works.pdf",
    bytes: 11518175,
  },
  {
    id: "zone-06-works",
    titleEn: "List of Work Done by Zone 06",
    titleMr: "झोन 06 ने पूर्ण केलेल्या कामांची यादी",
    file: "Zone_6_Works.pdf",
    bytes: 1417660,
  },
  {
    id: "zone-09-road-works",
    titleEn: "List of Road Work Done by Zone 09",
    titleMr: "झोन 09 ने पूर्ण केलेल्या रस्ते कामांची यादी",
    date: "2017-05-16",
    file: "Zone_9_Road_Works_16_05_2017.pdf",
    bytes: 8406643,
  },
  {
    id: "zone-04-photos",
    titleEn: "Photos of Work Done by Zone 04",
    titleMr: "झोन 04 ने पूर्ण केलेल्या कामांचे फोटो",
    date: "2017-06-20",
    file: "Zone_04_20_06_2017.pdf",
    bytes: 443963,
  },
  {
    id: "zone-6-work-done-20-06-2017",
    titleEn: "List of Work Done Zone 6",
    titleMr: "झोन 6 मध्ये पूर्ण झालेल्या कामांची यादी",
    date: "2017-06-20",
    file: "List_of_Work_Done_Zone_6_20_06_2017.pdf",
    bytes: 114227,
  },
  {
    id: "zone-09-development",
    titleEn: "Development Works Under Zone 09",
    titleMr: "झोन 09 अंतर्गत विकास कामे",
    date: "2017-06-29",
    file: "List_of_Completed_Work_by_Zone_9_29_06_2017.pdf",
    bytes: 2383925,
  },
  {
    id: "zone-05-photo-sai",
    titleEn: "List of Work Done by Zone 05 Photo",
    titleMr: "झोन 05 ने पूर्ण केलेल्या कामांची यादी (फोटो)",
    date: "2017-07-13",
    file: "List_of_Completed_Work_by_Zone_5_Drainage_Sai_Constraction.pdf",
    bytes: 11686727,
  },
  {
    id: "zone-05-photo-ghuge",
    titleEn: "List of Work Done by Zone 05 Photo",
    titleMr: "झोन 05 ने पूर्ण केलेल्या कामांची यादी (फोटो)",
    date: "2017-07-13",
    file: "List_of_Completed_Work_by_Zone_5_Drainage_Ghuge_Constraction.pdf",
    bytes: 4763392,
  },
  {
    id: "ward-36-naregaon",
    titleEn: "Completed Work Ward No.36",
    titleMr: "प्रभाग क्र. 36 ची पूर्ण झालेली कामे",
    file: "Ward_No__36_Naregaon.pdf",
    bytes: 11140662,
  },
  {
    id: "zone-6-17-06-2017",
    titleEn: "List of Work Done by Zone 6",
    titleMr: "झोन 6 ने पूर्ण केलेल्या कामांची यादी",
    date: "2017-06-17",
    file: "List_of_Completed_Work_in_Zone_6_17_06_2017.pdf",
    bytes: 1080487,
  },
  {
    id: "zone-6-17-06-20171",
    titleEn: "List of Work Done by Zone 6",
    titleMr: "झोन 6 ने पूर्ण केलेल्या कामांची यादी",
    date: "2017-06-17",
    file: "List_of_Completed_Work_in_Zone_6_17_06_20171.pdf",
    bytes: 1080487,
  },
];
