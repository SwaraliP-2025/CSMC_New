import type { CivicCategory } from "@/types/civicCatalog";
import type { ArchiveFile } from "@/lib/archiveDocuments";
import { educationDocuments } from "@/data/educationDocuments";
import { TOWN_PLANNING_DOCUMENTS_FOLDER, townPlanningDocuments } from "@/data/townPlanningDocuments";
import { DRAINAGE_DOCUMENTS_FOLDER, drainageDocuments } from "@/data/drainageDocuments";
import { administrationEstablishmentEntries } from "@/data/administrationEstablishmentDocuments";
import { DISASTER_GUIDELINES_DOCUMENT, SEVEN_STAR_FAQ_DOCUMENT } from "@/data/citizenRepositoryDocuments";
import { dastavezDocuments, municipalArchiveFiles, policyDocuments } from "@/data/municipalDocuments";
import { MUNICIPAL_SECRETARIES_DOCUMENT, SECRETARIES_FOLDER } from "@/data/municipalSecretaries";
import { RTI_DEPARTMENT_FOLDER, RTI_FOLDER, RTI_OFFICERS_FOLDER, RTI_OFFICERS_ORDER, rtiArchiveDocuments } from "@/data/rtiDocuments";
import { rtsArchiveDocuments, RTS_FOLDER } from "@/data/rtsDocuments";
import { chiefAccountsOfficerDocuments, CHIEF_ACCOUNTS_OFFICER_FOLDER } from "@/data/chiefAccountsOfficerDocuments";
import { BUDGET_FOLDER, budgetDocumentsFor, budgetYearSections } from "@/data/budgetDocuments";
import { standingCommitteeMinutes, standingCommitteeYears } from "@/data/standingCommitteeMinutes";
import { ELECTION_INSIGHTS_ROOT, electionInsightCategories } from "@/data/electionInsights";
import { completedWorks } from "@/data/completedWorks";
import { ncapArchiveDocuments } from "@/data/ncapSearchMeta";
import {
  AUDIT_DOCUMENTS_FOLDER,
  ELECTRICAL_DOCUMENTS_FOLDER,
  FIRE_INFORMATION_FOLDER,
  LIBRARY_DOCUMENTS_FOLDER,
  MECHANICAL_DOCUMENTS_FOLDER,
  NULM_DOCUMENTS_FOLDER,
  STANDING_COMMITTEE_VOLUME_FOLDER,
  auditDocuments,
  electricalPublicDocuments,
  fireInformationDocuments,
  libraryDocuments,
  mechanicalPublicDocuments,
  nulmDocuments,
  standingCommitteeVolumeMinutes,
} from "@/data/reviewedPublicDocuments";
import { mergedOfficialGroups } from "@/data/officialVerifiedDocuments";
import { officialLinkedGroups, officialLinkedSections, tenderArchiveGroups } from "@/data/officialLinkedDocuments";
import {
  officialAnnouncementFolder,
  officialSiteNoticeDocuments,
  officialStandingCommitteeDocuments,
  officialStandingCommitteeFolder,
  officialTenderNoticeDocuments,
} from "@/data/officialPublicAdditions";

export type RepositorySection = {
  id: string;
  titleEn: string;
  titleMr: string;
  documents: ArchiveFile[];
  folderSegments?: string[];
  initialSort?: "date-oldest";
  /** Rendered by a dedicated component. The document list is still the source of truth. */
  presentation?: "education" | "administration" | "ncap";
};

export type RepositoryShelf = {
  category: CivicCategory;
  sections: RepositorySection[];
};

const GROUP_CATEGORY: Record<string, CivicCategory> = {
  "city-engineer": "annual-report",
  garden: "annual-report",
  health: "annual-report",
  labour: "annual-report",
  pmay: "development-plan",
  "ramai-housing": "annual-report",
  "municipal-secretary-department": "rti",
  "solid-waste-management": "annual-report",
  tax: "annual-report",
  "tourism-development": "development-plan",
  "water-supply-distribution": "building-bye-laws",
  electrical: "annual-report",
  "fire-disaster-management": "annual-report",
  "social-development": "annual-report",
};

const GROUP_TITLE: Record<string, { en: string; mr: string }> = {
  "city-engineer": { en: "City Engineer", mr: "शहर अभियंता" },
  garden: { en: "Garden Department", mr: "उद्यान विभाग" },
  health: { en: "Health Department", mr: "आरोग्य विभाग" },
  labour: { en: "Labour Department", mr: "कामगार विभाग" },
  "municipal-secretary-department": { en: "Municipal Secretary", mr: "महानगरपालिका सचिव" },
  pmay: { en: "PMAY", mr: "प्रधानमंत्री आवास योजना" },
  "ramai-housing": { en: "Ramai Awas Yojana", mr: "रमाई आवास योजना" },
  "solid-waste-management": { en: "Solid Waste Management", mr: "घनकचरा व्यवस्थापन" },
  tax: { en: "Tax Assessment and Collection", mr: "कर निर्धारण व संकलन" },
  "tourism-development": { en: "Tourism Department", mr: "पर्यटन विभाग" },
  "water-supply-distribution": { en: "Water Supply", mr: "पाणीपुरवठा" },
  electrical: { en: "Electrical Department", mr: "विद्युत विभाग" },
  "fire-disaster-management": { en: "Fire and emergency services", mr: "अग्निशमन व आणीबाणी सेवा" },
  "social-development": { en: "Social Development", mr: "समाज विकास" },
};

const LINKED_GROUP_CATEGORY: Record<string, CivicCategory> = {
  "Local Body Tax Department (official LBT page)": "acts-rules",
  "General Administration Department": "rti",
  "General Election 2025 – elected members": "notification",
  "Committee chairpersons 2026": "notification",
  "CSMC officer list": "rti",
  "Recruitment results": "notification",
  "General Election 2025 – final ward structure": "notification",
  "Establishment advertisement": "notification",
  "Retired officer recruitment": "notification",
  "Health recruitment": "notification",
  RNTCP: "annual-report",
  "COVID-19 recruitment": "notification",
  "ASCDCL contract recruitment": "notification",
  "Audit Department": "annual-report",
  "UIDSSMT Department": "development-plan",
  "Electrical Department": "annual-report",
  "Hoarding licences": "acts-rules",
  "Garden Department": "annual-report",
  "Town Planning Department": "development-plan",
  "Draft Voter List 2020": "notification",
};

function isTenderDocument(doc: ArchiveFile) {
  return /tender|eoi|\brfp\b|lilav|jahirat/i.test(`${doc.file} ${doc.titleEn ?? ""}`);
}

function add(shelves: Map<CivicCategory, RepositorySection[]>, category: CivicCategory, section: RepositorySection) {
  if (!section.documents.length) return;
  const list = shelves.get(category) ?? [];
  list.push(section);
  shelves.set(category, list);
}

function splitGroup(
  shelves: Map<CivicCategory, RepositorySection[]>,
  category: CivicCategory,
  section: Omit<RepositorySection, "documents"> & { documents: ArchiveFile[] },
) {
  const tenders = section.documents.filter(isTenderDocument);
  const rest = section.documents.filter((doc) => !isTenderDocument(doc));
  add(shelves, "tender", { ...section, id: rest.length ? `${section.id}-tenders` : section.id, documents: tenders });
  add(shelves, category, { ...section, documents: rest });
}

/** Every archive currently shown in the repository, grouped by the existing catalog categories. */
export function repositoryShelves(): RepositoryShelf[] {
  const shelves = new Map<CivicCategory, RepositorySection[]>();

  add(shelves, "annual-report", {
    id: "education-department",
    titleEn: "Education Department",
    titleMr: "शिक्षण विभाग",
    documents: educationDocuments.map((doc) => ({ id: doc.id, file: doc.file, bytes: 0 })),
    presentation: "education",
  });
  add(shelves, "development-plan", {
    id: "town-planning-department",
    titleEn: "Town Planning Department",
    titleMr: "नगररचना विभाग",
    documents: townPlanningDocuments,
    folderSegments: [...TOWN_PLANNING_DOCUMENTS_FOLDER],
  });
  add(shelves, "development-plan", {
    id: "drainage-department",
    titleEn: "Drainage Department",
    titleMr: "ड्रेनेज विभाग",
    documents: drainageDocuments,
    folderSegments: [...DRAINAGE_DOCUMENTS_FOLDER],
  });
  add(shelves, "rti", {
    id: "administration-and-establishment",
    titleEn: "Administration and Establishment",
    titleMr: "प्रशासन व आस्थापना",
    documents: administrationEstablishmentEntries.flatMap((entry) => entry.files),
    presentation: "administration",
  });
  add(shelves, "citizen-charter", {
    id: "citizen-services",
    titleEn: "7 Star Citizen FAQs",
    titleMr: "७ स्टार नागरिक प्रश्नोत्तरे",
    documents: [SEVEN_STAR_FAQ_DOCUMENT],
  });
  add(shelves, "policy", {
    id: "guidelines-for-disaster",
    titleEn: "Guidelines for Disaster",
    titleMr: "आपत्ती व्यवस्थापन मार्गदर्शक",
    documents: [DISASTER_GUIDELINES_DOCUMENT],
  });
  add(shelves, "acts-rules", {
    id: "dastavez",
    titleEn: "Dastavez",
    titleMr: "दस्तऐवज",
    documents: municipalArchiveFiles(dastavezDocuments),
    folderSegments: [dastavezDocuments[0].folder],
  });
  add(shelves, "policy", {
    id: "policies-guidelines",
    titleEn: "Policies & Guidelines",
    titleMr: "धोरणे व मार्गदर्शक सूचना",
    documents: municipalArchiveFiles(policyDocuments),
    folderSegments: [policyDocuments[0].folder],
  });
  add(shelves, "rti", {
    id: "municipal-secretaries",
    titleEn: "Municipal Corporation Secretaries",
    titleMr: "महानगरपालिका सचिवांची यादी",
    documents: [MUNICIPAL_SECRETARIES_DOCUMENT],
    folderSegments: [SECRETARIES_FOLDER],
  });
  add(shelves, "citizen-charter", {
    id: "rts",
    titleEn: "Right to Service",
    titleMr: "सेवा हक्क",
    documents: rtsArchiveDocuments,
    folderSegments: [RTS_FOLDER],
  });
  add(shelves, "annual-report", {
    id: "chief-accounts-finance-officer",
    titleEn: "Chief Accounts & Finance Officer",
    titleMr: "मुख्य लेखा व वित्त अधिकारी",
    documents: chiefAccountsOfficerDocuments,
    folderSegments: [CHIEF_ACCOUNTS_OFFICER_FOLDER],
  });
  const [firstBudgetYear, ...laterBudgetYears] = budgetYearSections;
  if (firstBudgetYear) {
    add(shelves, "budget", {
      id: "budget",
      titleEn: firstBudgetYear.titleEn,
      titleMr: firstBudgetYear.titleMr,
      documents: budgetDocumentsFor(firstBudgetYear.id),
      folderSegments: [BUDGET_FOLDER, firstBudgetYear.id],
    });
  }
  for (const year of laterBudgetYears) {
    add(shelves, "budget", {
      id: `budget-${year.id}`,
      titleEn: year.titleEn,
      titleMr: year.titleMr,
      documents: budgetDocumentsFor(year.id),
      folderSegments: [BUDGET_FOLDER, year.id],
    });
  }
  add(shelves, "meeting-minutes", {
    id: "standing-committee-volumes",
    titleEn: "Date-range minute volumes",
    titleMr: "कालावधीनुसार इतिवृत्त खंड",
    documents: standingCommitteeVolumeMinutes,
    folderSegments: ["standing-committee", STANDING_COMMITTEE_VOLUME_FOLDER],
    initialSort: "date-oldest",
  });
  add(shelves, "meeting-minutes", {
    id: "standing-committee-reviewed",
    titleEn: "Reviewed standing committee minute",
    titleMr: "तपासलेले स्थायी समिती इतिवृत्त",
    documents: officialStandingCommitteeDocuments,
    folderSegments: [...officialStandingCommitteeFolder],
    initialSort: "date-oldest",
  });
  const [firstMinuteYear, ...laterMinuteYears] = standingCommitteeYears;
  const minuteSection = (year: number, id: string): RepositorySection => ({
    id,
    titleEn: String(year),
    titleMr: String(year),
    documents: standingCommitteeMinutes
      .filter((doc) => doc.year === year)
      .map((doc) => ({ id: doc.id, file: doc.file, bytes: doc.bytes, date: doc.date })),
    folderSegments: ["standing-committee", String(year)],
    initialSort: "date-oldest",
  });
  if (firstMinuteYear) {
    add(shelves, "meeting-minutes", {
      id: "standing-committee",
      titleEn: String(firstMinuteYear),
      titleMr: String(firstMinuteYear),
      documents: standingCommitteeMinutes
        .filter((doc) => doc.year === firstMinuteYear)
        .map((doc) => ({ id: doc.id, file: doc.file, bytes: doc.bytes, date: doc.date })),
      folderSegments: ["standing-committee", String(firstMinuteYear)],
      initialSort: "date-oldest",
    });
  }
  for (const year of laterMinuteYears) add(shelves, "meeting-minutes", minuteSection(year, `standing-committee-${year}`));
  const electionWithFiles = electionInsightCategories.filter((category) => category.files.length);
  const [firstElection, ...laterElections] = electionWithFiles;
  if (firstElection) {
    add(shelves, "notification", {
      id: "election-insights",
      titleEn: firstElection.titleEn,
      titleMr: firstElection.titleMr,
      documents: firstElection.files,
      folderSegments: [ELECTION_INSIGHTS_ROOT, firstElection.folder],
    });
  }
  for (const category of laterElections) {
    add(shelves, "notification", {
      id: `election-insights-${category.id}`,
      titleEn: category.titleEn,
      titleMr: category.titleMr,
      documents: category.files,
      folderSegments: [ELECTION_INSIGHTS_ROOT, category.folder],
    });
  }
  add(shelves, "rti", {
    id: "rti",
    titleEn: "Department-wise RTI Documents",
    titleMr: "विभागनिहाय माहिती अधिकार दस्तऐवज",
    documents: rtiArchiveDocuments(),
    folderSegments: [RTI_FOLDER, RTI_DEPARTMENT_FOLDER],
  });
  add(shelves, "rti", {
    id: "rti-officers",
    titleEn: "RTI Officers List",
    titleMr: "माहिती अधिकार अधिकारी यादी",
    documents: [RTI_OFFICERS_ORDER],
    folderSegments: [RTI_FOLDER, RTI_OFFICERS_FOLDER],
  });
  add(shelves, "annual-report", {
    id: "completed-works",
    titleEn: "List of Completed Works",
    titleMr: "पूर्ण झालेली कामे",
    documents: completedWorks,
    folderSegments: ["List of Completed Works"],
  });
  add(shelves, "annual-report", {
    id: "audit-department",
    titleEn: "Audit Department",
    titleMr: "लेखापरीक्षण विभाग",
    documents: auditDocuments,
    folderSegments: [...AUDIT_DOCUMENTS_FOLDER],
  });
  add(shelves, "annual-report", {
    id: "electrical-department",
    titleEn: "Electrical Department",
    titleMr: "विद्युत विभाग",
    documents: electricalPublicDocuments,
    folderSegments: [...ELECTRICAL_DOCUMENTS_FOLDER],
  });
  add(shelves, "annual-report", {
    id: "library-department",
    titleEn: "Library",
    titleMr: "वाचनालय",
    documents: libraryDocuments,
    folderSegments: [...LIBRARY_DOCUMENTS_FOLDER],
  });
  add(shelves, "policy", {
    id: "nulm",
    titleEn: "NULM",
    titleMr: "राष्ट्रीय नागरी उपजीविका अभियान",
    documents: nulmDocuments,
    folderSegments: [...NULM_DOCUMENTS_FOLDER],
  });
  add(shelves, "annual-report", {
    id: "fire-brigade-information",
    titleEn: "Fire and emergency services",
    titleMr: "अग्निशमन व आणीबाणी सेवा",
    documents: fireInformationDocuments,
    folderSegments: [...FIRE_INFORMATION_FOLDER],
  });
  add(shelves, "annual-report", {
    id: "mechanical-department",
    titleEn: "Mechanical Department",
    titleMr: "यांत्रिकी विभाग",
    documents: mechanicalPublicDocuments,
    folderSegments: [...MECHANICAL_DOCUMENTS_FOLDER],
  });
  add(shelves, "notification", {
    id: "official-announcements",
    titleEn: "Public notices",
    titleMr: "सार्वजनिक सूचना",
    documents: officialSiteNoticeDocuments,
    folderSegments: [...officialAnnouncementFolder],
  });
  add(shelves, "tender", {
    id: "official-tender-notices",
    titleEn: "Tender notices",
    titleMr: "निविदा सूचना",
    documents: officialTenderNoticeDocuments,
    folderSegments: [...officialAnnouncementFolder],
  });

  for (const group of mergedOfficialGroups()) {
    const category = GROUP_CATEGORY[group.slug];
    const title = GROUP_TITLE[group.slug];
    if (!category || !title) throw new Error(`No repository category for ${group.slug}`);
    splitGroup(shelves, category, {
      id: `official-${group.slug}`,
      titleEn: title.en,
      titleMr: title.mr,
      documents: group.documents,
      folderSegments: group.folder,
    });
  }
  for (const section of officialLinkedSections) {
    const category = section.id === "general-body" ? "meeting-minutes" : section.id === "public-notices" ? "notification" : undefined;
    if (!category) throw new Error(`No repository category for linked section ${section.id}`);
    add(shelves, category, {
      id: `official-linked-${section.id}`,
      titleEn: section.headingEn,
      titleMr: section.headingMr,
      documents: section.documents,
    });
  }
  for (const group of officialLinkedGroups) {
    const category = LINKED_GROUP_CATEGORY[group.headingEn];
    if (!category) throw new Error(`No repository category for ${group.headingEn}`);
    splitGroup(shelves, category, {
      id: `official-linked-${group.slug}-${group.headingEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      titleEn: group.headingEn,
      titleMr: group.headingMr,
      documents: group.documents,
    });
  }
  const [firstTenderGroup, ...laterTenderGroups] = tenderArchiveGroups;
  if (firstTenderGroup) {
    add(shelves, "tender", {
      id: "tender-archive",
      titleEn: firstTenderGroup.headingEn,
      titleMr: firstTenderGroup.headingMr,
      documents: firstTenderGroup.documents,
      folderSegments: firstTenderGroup.folder,
    });
  }
  for (const group of laterTenderGroups) {
    add(shelves, "tender", {
      id: `tender-archive-${group.headingEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      titleEn: group.headingEn,
      titleMr: group.headingMr,
      documents: group.documents,
      folderSegments: group.folder,
    });
  }
  add(shelves, "annual-report", {
    id: "ncap",
    titleEn: "National Clean Air Programme (NCAP)",
    titleMr: "राष्ट्रीय स्वच्छ हवा कार्यक्रम (NCAP)",
    documents: ncapArchiveDocuments(),
    presentation: "ncap",
  });

  return [...shelves.entries()].map(([category, sections]) => ({ category, sections }));
}
