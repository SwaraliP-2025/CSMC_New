import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { administrationEstablishmentCategory, administrationEstablishmentEntries } from "@/data/administrationEstablishmentDocuments";
import { BUDGET_FOLDER, budgetDocuments, budgetDocumentsFor, budgetYearSections } from "@/data/budgetDocuments";
import { chiefAccountsOfficerDocuments, CHIEF_ACCOUNTS_OFFICER_FOLDER } from "@/data/chiefAccountsOfficerDocuments";
import { DISASTER_GUIDELINES_DOCUMENT, SEVEN_STAR_FAQ_DOCUMENT } from "@/data/citizenRepositoryDocuments";
import { completedWorks } from "@/data/completedWorks";
import { ncapArchiveDocuments, NCAP_SEARCH_META } from "@/data/ncapSearchMeta";
import { ncapFileUrl } from "@/lib/ncap";
import { DRAINAGE_DOCUMENTS_FOLDER, drainageDocuments } from "@/data/drainageDocuments";
import { EDUCATION_DOCUMENTS_FOLDER, educationDocuments } from "@/data/educationDocuments";
import { ELECTION_INSIGHTS_ROOT, electionInsightCategories } from "@/data/electionInsights";
import { dastavezDocuments, municipalArchiveFiles, policyDocuments } from "@/data/municipalDocuments";
import { MUNICIPAL_SECRETARIES_DOCUMENT, SECRETARIES_FILE, SECRETARIES_FOLDER } from "@/data/municipalSecretaries";
import { rtsArchiveDocuments, RTS_DOCUMENTS, RTS_FOLDER } from "@/data/rtsDocuments";
import { RTI_DEPARTMENT_FOLDER, RTI_FOLDER, RTI_OFFICERS_FILE, RTI_OFFICERS_FOLDER, RTI_OFFICERS_ORDER, rtiArchiveDocuments, rtiDocuments } from "@/data/rtiDocuments";
import { standingCommitteeMinutes, standingCommitteeYears } from "@/data/standingCommitteeMinutes";
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
import { TOWN_PLANNING_DOCUMENTS_FOLDER, townPlanningDocuments } from "@/data/townPlanningDocuments";
import { publicDocumentUrl } from "@/lib/archiveDocuments";

const publicRoot = path.resolve("public");

function expectPublicFile(segments: string[]) {
  const full = path.join(publicRoot, ...segments);
  expect(existsSync(full), segments.join("/")).toBe(true);
}

describe("document mapping", () => {
  it("resolves published local document paths", () => {
    for (const doc of townPlanningDocuments) {
      if (doc.externalUrl) continue;
      expectPublicFile(["documents", ...TOWN_PLANNING_DOCUMENTS_FOLDER, doc.file]);
    }
    for (const doc of drainageDocuments) expectPublicFile(["documents", ...DRAINAGE_DOCUMENTS_FOLDER, doc.file]);
    for (const doc of educationDocuments) expectPublicFile(["documents", ...EDUCATION_DOCUMENTS_FOLDER, doc.file]);
    for (const category of administrationEstablishmentEntries) {
      for (const doc of category.files) {
        if (doc.externalUrl) continue;
        expectPublicFile(["documents", ...category.folderSegments, doc.file]);
      }
    }
    for (const doc of budgetDocuments) expectPublicFile(["documents", "budget", doc.yearId, doc.file]);
    for (const doc of standingCommitteeMinutes) {
      expectPublicFile(["documents", "standing-committee", String(doc.year), doc.file]);
    }
    for (const doc of rtiDocuments) {
      expectPublicFile(["documents", "rti", "Department-wise RTI Documents", doc.fileName]);
    }
    expectPublicFile(["documents", "rti", "List of RTI Officers", "RTI_Order.pdf"]);
    for (const doc of RTS_DOCUMENTS) expectPublicFile(["documents", "rts", doc.file]);
    for (const doc of dastavezDocuments) expectPublicFile(["documents", doc.folder, doc.file]);
    for (const doc of policyDocuments) expectPublicFile(["documents", doc.folder, doc.file]);
    for (const doc of completedWorks) expectPublicFile(["documents", "List of Completed Works", doc.file]);
    for (const doc of auditDocuments) expectPublicFile(["documents", ...AUDIT_DOCUMENTS_FOLDER, doc.file]);
    for (const doc of electricalPublicDocuments) expectPublicFile(["documents", ...ELECTRICAL_DOCUMENTS_FOLDER, doc.file]);
    for (const doc of libraryDocuments) expectPublicFile(["documents", ...LIBRARY_DOCUMENTS_FOLDER, doc.file]);
    for (const doc of nulmDocuments) expectPublicFile(["documents", ...NULM_DOCUMENTS_FOLDER, doc.file]);
    for (const doc of fireInformationDocuments) expectPublicFile(["documents", ...FIRE_INFORMATION_FOLDER, doc.file]);
    for (const doc of mechanicalPublicDocuments) expectPublicFile(["documents", ...MECHANICAL_DOCUMENTS_FOLDER, doc.file]);
    for (const doc of standingCommitteeVolumeMinutes) {
      expectPublicFile(["documents", "standing-committee", STANDING_COMMITTEE_VOLUME_FOLDER, doc.file]);
    }
    expectPublicFile([
      "documents",
      "List of Municipal Corporation Secretaries",
      "Municipal_Corporation_Secretary_List_2026.pdf",
    ]);
    for (const doc of chiefAccountsOfficerDocuments) {
      expectPublicFile(["documents", CHIEF_ACCOUNTS_OFFICER_FOLDER, doc.file]);
    }
    for (const category of electionInsightCategories) {
      for (const doc of category.files) {
        expectPublicFile(["documents", "Election Insights", category.folder, doc.file]);
      }
    }
    const ncap = JSON.parse(readFileSync(path.join(publicRoot, "data", "ncap-documents.json"), "utf8"));
    const ncapDocs = Array.isArray(ncap) ? ncap : ncap.documents;
    for (const doc of ncapDocs) expectPublicFile(["ncap", "documents", doc.fileName]);
  });

  it("shows Education, Town Planning, Drainage, and Administration in the repository and keeps department listings", () => {
    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository).toContain('id="education-department"');
    expect(repository).toContain('id="town-planning-department"');
    expect(repository).toContain('id="drainage-department"');
    expect(repository).toContain('id="administration-and-establishment"');
    expect(repository).toContain('id="citizen-services"');
    expect(repository).toContain('id="guidelines-for-disaster"');
    expect(repository).toContain("SEVEN_STAR_FAQ_DOCUMENT");
    expect(repository).toContain("DISASTER_GUIDELINES_DOCUMENT");
    expect(repository).toContain("AdministrationEstablishmentDocuments");
    const department = readFileSync("src/pages/site/DepartmentDetail.tsx", "utf8");
    expect(department).toContain('dept.slug === "general-administration"');
    expect(department).toContain('dept.slug === "fire-disaster-management"');
    expect(department).toContain("FireCadreDocuments");
    expect(department).toContain('dept.slug === "education"');
    expect(department).toContain('dept.slug === "drainage"');
    expect(department).toContain('dept.slug === "town-planning-department"');
    expect(department).toContain('slug: "health"');
    expect(department).not.toContain('dept.slug === "health"');
  });

  it("publishes the omitted Draft Voter List wards once each", () => {
    const category = electionInsightCategories.find((item) => item.id === "draft-voter-list-2020");
    expect(category).toBeTruthy();
    for (let ward = 44; ward <= 53; ward += 1) {
      const matches = category!.files.filter((doc) => doc.file === `DraftList_Ward_${ward}.pdf`);
      expect(matches).toHaveLength(1);
    }
  });

  it("keeps review-only copies and tender files unpublished", () => {
    const publishedSources = [
      "src/data/townPlanningDocuments.ts",
      "src/data/drainageDocuments.ts",
      "src/data/educationDocuments.ts",
      "src/data/administrationEstablishmentDocuments.ts",
      "src/data/generalAdministrationDocuments.ts",
      "src/data/budgetDocuments.ts",
      "src/data/completedWorks.ts",
      "src/data/electionInsights.ts",
      "src/data/ncapSearchMeta.ts",
      "src/lib/ncap.ts",
      "src/data/citizenRepositoryDocuments.ts",
      "src/data/municipalSecretaries.ts",
      "src/data/rtsDocuments.ts",
      "src/data/municipalDocuments.ts",
      "src/pages/site/DigitalRepository.tsx",
    ];
    const combined = publishedSources.map((file) => readFileSync(file, "utf8")).join("\n");
    expect(combined).not.toContain("Needs Review");
    expect(standingCommitteeVolumeMinutes.some((doc) => doc.file.includes("15-_16"))).toBe(false);
    expect(standingCommitteeVolumeMinutes).toHaveLength(13);
    expect(combined).not.toContain("Duplicate Review");
    expect(combined).not.toContain("documents/ncap/documents");
    expect(combined).not.toContain("/Tenders/");
    expect(standingCommitteeMinutes.some((doc) => doc.year < 0)).toBe(false);
    expect(completedWorks.every((doc) => !doc.file.includes("/") && !doc.file.includes("\\"))).toBe(true);
  });

  it("cross-lists the FAQ, disaster guidelines, and Fire cadre files without copying them", () => {
    expectPublicFile(["documents", SEVEN_STAR_FAQ_DOCUMENT.file]);
    expectPublicFile(["documents", DISASTER_GUIDELINES_DOCUMENT.file]);
    const navigation = readFileSync("src/navigation/siteNav.ts", "utf8");
    expect(navigation).toContain('publicDocument("FAQ_SevenStar.pdf")');
    expect(navigation).toContain('publicDocument("Guildelines_For_Disaster.pdf")');
    const fire = administrationEstablishmentCategory("fire");
    expect(fire?.files.map((doc) => doc.file)).toEqual([
      "Dy_Fire_Officer.pdf",
      "Fireman.pdf",
      "Leading_Fireman.pdf",
    ]);
    const fireComponent = readFileSync("src/components/site/AdministrationEstablishmentDocuments.tsx", "utf8");
    expect(fireComponent).toContain('administrationEstablishmentCategory("fire")');
    expect(fireComponent.match(/FireCadreDocuments/g)?.length).toBeGreaterThan(0);
    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="citizen-services"/g)).toHaveLength(1);
    expect(repository.match(/id="guidelines-for-disaster"/g)).toHaveLength(1);
    expect(readFileSync("src/data/citizenRepositoryDocuments.ts", "utf8")).not.toContain("/Tenders/");
  });

  it("cross-lists Dastavez, policies, secretaries, RTS, and Chief Accounts without copying them", () => {
    expect(dastavezDocuments.map((doc) => doc.id)).toEqual(["banner-location-list"]);
    expect(policyDocuments.map((doc) => doc.id)).toEqual(["draft-water-policy"]);
    expect(MUNICIPAL_SECRETARIES_DOCUMENT.id).toBe("municipal-corporation-secretaries-2026");
    expect(RTS_DOCUMENTS.map((doc) => doc.id)).toEqual([
      "rts-adhi-suchana",
      "rts-gazette-2025-11-20",
      "rts-act-2015",
      "rts-rules-2016",
      "rts-mc-office-order",
      "rts-gazette-2025-08-21",
    ]);
    expect(chiefAccountsOfficerDocuments.map((doc) => doc.id)).toEqual([
      "cafo-b1-date-wise-contractor",
      "cafo-rtgs-july-aug-2018",
      "cafo-paid-contractor-apr16-jan17",
      "cafo-paid-contractor-jun-2018",
      "cafo-paid-contractor-oct-2018",
    ]);
    expect(rtsArchiveDocuments.map((doc) => doc.file)).toEqual(RTS_DOCUMENTS.map((doc) => doc.file));
    expect(municipalArchiveFiles(dastavezDocuments).map((doc) => doc.file)).toEqual(dastavezDocuments.map((doc) => doc.file));
    expect(municipalArchiveFiles(policyDocuments).map((doc) => doc.file)).toEqual(policyDocuments.map((doc) => doc.file));

    for (const doc of dastavezDocuments) expectPublicFile(["documents", doc.folder, doc.file]);
    for (const doc of policyDocuments) expectPublicFile(["documents", doc.folder, doc.file]);
    for (const doc of RTS_DOCUMENTS) expectPublicFile(["documents", RTS_FOLDER, doc.file]);
    expectPublicFile(["documents", SECRETARIES_FOLDER, SECRETARIES_FILE]);
    for (const doc of chiefAccountsOfficerDocuments) {
      expectPublicFile(["documents", CHIEF_ACCOUNTS_OFFICER_FOLDER, doc.file]);
    }

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    for (const anchor of ["dastavez", "policies-guidelines", "municipal-secretaries", "rts", "chief-accounts-finance-officer"]) {
      expect(repository.match(new RegExp(`id="${anchor}"`, "g"))).toHaveLength(1);
    }
    for (const excluded of ["census-2026-27"]) {
      expect(repository).not.toContain(`id="${excluded}"`);
    }
    expect(repository).toContain("municipalArchiveFiles(dastavezDocuments)");
    expect(repository).toContain("municipalArchiveFiles(policyDocuments)");
    expect(repository).toContain("MUNICIPAL_SECRETARIES_DOCUMENT");
    expect(repository).toContain("rtsArchiveDocuments");
    expect(repository).toContain("chiefAccountsOfficerDocuments");

    const dastavezPage = readFileSync("src/pages/site/MunicipalDocumentList.tsx", "utf8");
    expect(dastavezPage).toContain("documents={dastavezDocuments}");
    expect(dastavezPage).toContain("documents={policyDocuments}");
    const secretariesPage = readFileSync("src/pages/site/MunicipalCorporationSecretaries.tsx", "utf8");
    expect(secretariesPage).toContain("SECRETARIES_FOLDER");
    expect(secretariesPage).toContain("SECRETARIES_FILE");
    expect(readFileSync("src/App.tsx", "utf8")).toContain('path="/municipal-corporation-secretaries"');
    const rtsPage = readFileSync("src/pages/site/RTSAct.tsx", "utf8");
    expect(rtsPage).toContain("RTS_DOCUMENTS");
    expect(rtsPage).toContain("rtsDocumentUrl");
    const department = readFileSync("src/pages/site/DepartmentDetail.tsx", "utf8");
    expect(department).toContain('dept.slug === "chief-accounts-finance-officer"');
    expect(department).toContain("chiefAccountsOfficerDocuments");
    expect(readFileSync("src/lib/searchIndex.ts", "utf8")).toContain('href: "/dastavez"');
  });

  it("cross-lists the 13 budget PDFs by year without copying them", () => {
    expect(budgetDocuments).toHaveLength(13);
    expect(budgetDocumentsFor("2026-27").map((doc) => doc.id)).toEqual(["budget-book-2026-27"]);
    expect(budgetDocumentsFor("2025-26").map((doc) => doc.id)).toEqual(["budget-book-2025-2026"]);
    expect(budgetDocumentsFor("2024-25")).toHaveLength(0);
    expect(budgetDocumentsFor("archive")).toHaveLength(11);
    expect(budgetYearSections.map((section) => section.id)).toEqual(["2026-27", "2025-26", "2024-25", "archive"]);

    for (const doc of budgetDocuments) {
      expectPublicFile(["documents", "budget", doc.yearId, doc.file]);
      const url = publicDocumentUrl([BUDGET_FOLDER, doc.yearId, doc.file]);
      expect(url).toContain(`/documents/${encodeURIComponent(BUDGET_FOLDER)}/${encodeURIComponent(doc.yearId)}/`);
      expect(url).toContain(encodeURIComponent(doc.file));
    }

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="budget"/g)).toHaveLength(1);
    expect(repository).toContain("budgetDocumentsFor(section.id)");
    expect(repository).toContain("folderSegments={[BUDGET_FOLDER, section.id]}");
    const publicPage = readFileSync("src/pages/site/PublicDocuments.tsx", "utf8");
    expect(publicPage).toContain("budgetDocumentsFor(budgetSection.id)");
    expect(publicPage).toContain("folderSegments={[BUDGET_FOLDER, budgetSection.id]}");
    expect(publicPage).toContain('setSearchParams({ category: "budget", year: section.id })');
    const catalog = readFileSync("src/data/civicCatalog.ts", "utf8");
    expect(catalog).toContain('rec("bud-2627"');
    expect(catalog).toContain('fileSize: "5.6 MB"');
    expect(catalog).toContain('rec("bud-2526"');
    expect(catalog).toContain('fileSize: "5.2 MB"');
    expect(catalog).toContain('rec("bud-2425"');
    expect(catalog).toContain('fileSize: "4.8 MB"');
    expect(readFileSync("src/lib/searchIndex.ts", "utf8")).toContain('href: "/public-documents?category=budget"');
  });

  it("cross-lists the 337 public standing committee minutes by year without copying them", () => {
    expect(standingCommitteeMinutes).toHaveLength(337);
    const ids = standingCommitteeMinutes.map((doc) => doc.id);
    expect(new Set(ids).size).toBe(337);
    const covered = standingCommitteeYears.flatMap((year) =>
      standingCommitteeMinutes.filter((doc) => doc.year === year).map((doc) => doc.id),
    );
    expect(covered).toEqual(ids);
    expect(standingCommitteeYears.every((year) => standingCommitteeMinutes.some((doc) => doc.year === year))).toBe(true);

    for (const doc of standingCommitteeMinutes) {
      const full = path.join(publicRoot, "documents", "standing-committee", String(doc.year), doc.file);
      expect(existsSync(full), full).toBe(true);
      expect(statSync(full).size).toBe(doc.bytes);
      expect(doc.file.includes("/") || doc.file.includes("\\")).toBe(false);
    }

    const tenderNamed = [
      { id: "2025-est-12-01-2025-pdf", year: 2025, file: "EST_12_01_2025.pdf" },
      {
        id: "2025-municipal-corporation-improved-voter-list-program-26-11-2025-pdf",
        year: 2025,
        file: "Municipal_Corporation_-_Improved_Voter_List_Program_26-11-2025.pdf",
      },
      { id: "2026-est-1-dt-03-07-2026-pdf", year: 2026, file: "EST-1_Dt_03_07_2026.pdf" },
    ];
    for (const expected of tenderNamed) {
      const doc = standingCommitteeMinutes.find((item) => item.id === expected.id);
      expect(doc?.year).toBe(expected.year);
      expect(doc?.file).toBe(expected.file);
      expectPublicFile(["documents", "standing-committee", String(expected.year), expected.file]);
    }

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="standing-committee"/g)).toHaveLength(1);
    expect(repository).toContain("Standing Committee Minutes");
    expect(repository).toContain("standingCommitteeYears.map((year) => {");
    expect(repository).toContain(".filter((doc) => doc.year === year)");
    expect(repository).toContain('folderSegments={["standing-committee", String(year)]}');
    expect(repository).toContain('initialSort="date-oldest"');
    expect(repository).not.toContain("Needs Review");
    expect(repository).not.toContain("Duplicate Review");
    expect(repository).not.toContain("/Tenders/");
    expect(repository).not.toContain("tender-notice");
    expect(repository).not.toContain("tender notice");

    const publicPage = readFileSync("src/pages/site/PublicDocuments.tsx", "utf8");
    expect(publicPage).toContain("standingCommitteeMinutes");
    expect(publicPage).toContain(".filter((doc) => doc.year === selectedMinuteYear)");
    expect(publicPage).toContain('folderSegments={["standing-committee", String(selectedMinuteYear)]}');
    expect(publicPage).toContain('initialSort="date-oldest"');
    expect(publicPage).not.toContain("Needs Review");
    expect(publicPage).not.toContain("Duplicate Review");
    expect(publicPage).not.toContain("/Tenders/");
  });

  it("cross-lists the 141 election insight records by category without copying them", () => {
    const listed = electionInsightCategories.filter((category) => category.files.length > 0);
    expect(listed.map((category) => [category.id, category.files.length])).toEqual([
      ["election-2019", 6],
      ["amc-election-2020", 14],
      ["draft-voter-list-2020", 113],
      ["amc-election-2022", 8],
    ]);
    expect(electionInsightCategories.find((category) => category.id === "amc-election-2020-final-maps")?.files).toEqual([]);

    const ids = listed.flatMap((category) => category.files.map((doc) => doc.id));
    expect(ids).toHaveLength(141);
    expect(new Set(ids).size).toBe(141);
    expect(electionInsightCategories.flatMap((category) => category.files.map((doc) => doc.id))).toEqual(ids);

    for (const category of listed) {
      for (const doc of category.files) {
        const full = path.join(publicRoot, "documents", ELECTION_INSIGHTS_ROOT, category.folder, doc.file);
        expect(existsSync(full), full).toBe(true);
        expect(statSync(full).size).toBe(doc.bytes);
      }
    }

    const voterList = electionInsightCategories.find((category) => category.id === "draft-voter-list-2020");
    expect(voterList).toBeTruthy();
    for (let ward = 44; ward <= 53; ward += 1) {
      const doc = voterList!.files.find((item) => item.file === `DraftList_Ward_${ward}.pdf`);
      expect(doc?.id).toBe(`draft-voter-list-2020-draftlist-ward-${ward}-pdf`);
      expectPublicFile(["documents", ELECTION_INSIGHTS_ROOT, voterList!.folder, doc!.file]);
    }
    expect(voterList!.files.some((doc) => doc.file === "DraftList_Ward_13.pdf" || doc.file === "DraftList_Ward_28.pdf")).toBe(false);

    const election2019 = electionInsightCategories.find((category) => category.id === "election-2019");
    expect(election2019?.files.map((doc) => doc.file)).toEqual(expect.arrayContaining([
      "Copy_of_All_Sections-1.xls",
      "Election_empl_list_(Ward-B).xls",
      "Election_Format_(Ward-B_Engineers).doc",
    ]));
    const browser = readFileSync("src/components/site/DocumentArchiveBrowser.tsx", "utf8");
    expect(browser).toContain("isPdfFile(doc.file)");
    expect(browser).toContain("<PdfFileActions");
    expect(browser).toContain('download={doc.file}');

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="election-insights"/g)).toHaveLength(1);
    expect(repository).toContain("Election Insights");
    expect(repository).toContain("electionInsightCategories.filter((category) => category.files.length > 0)");
    expect(repository).toContain("documents={category.files}");
    expect(repository).toContain("folderSegments={[ELECTION_INSIGHTS_ROOT, category.folder]}");
    expect(repository.match(/id="standing-committee"/g)).toHaveLength(1);
    expect(standingCommitteeMinutes).toHaveLength(337);
    expect(repository).not.toContain("Needs Review");
    expect(repository).not.toContain("Duplicate Review");
    expect(repository).not.toContain("/Tenders/");

    const electionPage = readFileSync("src/pages/site/ElectionInsights.tsx", "utf8");
    expect(electionPage).toContain("documents={category.files}");
    expect(electionPage).toContain("folderSegments={[ELECTION_INSIGHTS_ROOT, category.folder]}");
    expect(electionPage).toContain("electionInsightCategories.map((item) =>");
    const app = readFileSync("src/App.tsx", "utf8");
    expect(app).toContain('path="/election-insights"');
    expect(app).toContain('path="/election-insights/:categoryId"');
  });

  it("cross-lists the 49 RTI documents in two folders without copying them", () => {
    const departmental = rtiArchiveDocuments();
    expect(departmental).toHaveLength(48);
    expect(departmental.map((doc) => doc.id)).toEqual(rtiDocuments.map((doc) => doc.id));
    expect(RTI_OFFICERS_ORDER.id).toBe("rti-officers-order");
    expect(RTI_OFFICERS_ORDER.file).toBe(RTI_OFFICERS_FILE);
    expect(RTI_OFFICERS_ORDER.bytes).toBe(1132898);
    const ids = [...departmental.map((doc) => doc.id), RTI_OFFICERS_ORDER.id];
    expect(ids).toHaveLength(49);
    expect(new Set(ids).size).toBe(49);

    for (const doc of rtiDocuments) {
      const full = path.join(publicRoot, "documents", RTI_FOLDER, RTI_DEPARTMENT_FOLDER, doc.fileName);
      expect(existsSync(full), full).toBe(true);
      expect(statSync(full).size).toBe(doc.bytes);
      expect(publicDocumentUrl([RTI_FOLDER, RTI_DEPARTMENT_FOLDER, doc.fileName])).toContain(
        `/documents/${encodeURIComponent(RTI_FOLDER)}/${encodeURIComponent(RTI_DEPARTMENT_FOLDER)}/`,
      );
    }
    const officerPath = path.join(publicRoot, "documents", RTI_FOLDER, RTI_OFFICERS_FOLDER, RTI_OFFICERS_ORDER.file);
    expect(statSync(officerPath).size).toBe(RTI_OFFICERS_ORDER.bytes);

    const rtiDisaster = rtiDocuments.find((doc) => doc.id === "disaster-guidelines");
    expect(rtiDisaster?.fileName).toBe("Guildelines_For_Disaster.pdf");
    expect(rtiDisaster?.bytes).toBe(2362355);
    expect(DISASTER_GUIDELINES_DOCUMENT.file).toBe("Guildelines_For_Disaster.pdf");
    expect(DISASTER_GUIDELINES_DOCUMENT.bytes).toBe(759375);
    expect(statSync(path.join(publicRoot, "documents", DISASTER_GUIDELINES_DOCUMENT.file)).size).toBe(759375);

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="rti"/g)).toHaveLength(1);
    expect(repository).toContain("Right to Information");
    expect(repository).toContain("documents={rtiArchiveDocuments()}");
    expect(repository).toContain("documents={[RTI_OFFICERS_ORDER]}");
    expect(repository).toContain("folderSegments={[RTI_FOLDER, RTI_DEPARTMENT_FOLDER]}");
    expect(repository).toContain("folderSegments={[RTI_FOLDER, RTI_OFFICERS_FOLDER]}");
    expect(repository).toContain('id="guidelines-for-disaster"');
    expect(repository).toContain("documents={[DISASTER_GUIDELINES_DOCUMENT]}");
    expect(repository).not.toContain("rti-q3");
    expect(repository).not.toContain("rti-q4");
    expect(repository).not.toContain("Needs Review");
    expect(repository).not.toContain("Duplicate Review");
    expect(repository).not.toContain("/Tenders/");
    expect(repository.match(/id="standing-committee"/g)).toHaveLength(1);
    expect(standingCommitteeMinutes).toHaveLength(337);
    expect(electionInsightCategories.filter((category) => category.files.length > 0).flatMap((category) => category.files)).toHaveLength(141);

    const rtiPage = readFileSync("src/pages/site/RTIAct.tsx", "utf8");
    expect(rtiPage).toContain("rtiDocuments.map");
    expect(rtiPage).toContain('const RTI_OFFICERS_FILE = "RTI_Order.pdf"');
    expect(rtiPage).toContain('encodeURIComponent("rti")');
    expect(rtiPage).toContain('encodeURIComponent("List of RTI Officers")');
    expect(rtiPage).toContain("encodeURIComponent(RTI_OFFICERS_FILE)");
    expect(readFileSync("src/App.tsx", "utf8")).toContain('path="/rti-act"');
    expect(readFileSync("src/data/rtiPublic.ts", "utf8")).not.toContain("rti-officers-order");
  });

  it("cross-lists the 11 completed-works records without copying them", () => {
    expect(completedWorks).toHaveLength(11);
    const ids = completedWorks.map((doc) => doc.id);
    expect(new Set(ids).size).toBe(11);
    expect(ids).toEqual([
      "zone-06-road-works",
      "zone-06-works",
      "zone-09-road-works",
      "zone-04-photos",
      "zone-6-work-done-20-06-2017",
      "zone-09-development",
      "zone-05-photo-sai",
      "zone-05-photo-ghuge",
      "ward-36-naregaon",
      "zone-6-17-06-2017",
      "zone-6-17-06-20171",
    ]);
    const zone6 = completedWorks.filter((doc) => doc.id === "zone-6-17-06-2017" || doc.id === "zone-6-17-06-20171");
    expect(zone6.map((doc) => doc.file)).toEqual([
      "List_of_Completed_Work_in_Zone_6_17_06_2017.pdf",
      "List_of_Completed_Work_in_Zone_6_17_06_20171.pdf",
    ]);

    for (const doc of completedWorks) {
      const full = path.join(publicRoot, "documents", "List of Completed Works", doc.file);
      expect(existsSync(full), full).toBe(true);
      expect(statSync(full).size).toBe(doc.bytes);
    }

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="completed-works"/g)).toHaveLength(1);
    expect(repository).toContain("List of Completed Works");
    expect(repository).toContain("documents={completedWorks}");
    expect(repository).toContain('folderSegments={["List of Completed Works"]}');
    expect(repository).not.toContain("Municipal Document Repository/Works");
    expect(repository).not.toContain("Needs Review");
    expect(repository).not.toContain("Duplicate Review");
    expect(repository).not.toContain("/Tenders/");
    expect(repository.match(/id="standing-committee"/g)).toHaveLength(1);
    expect(standingCommitteeMinutes).toHaveLength(337);
    expect(electionInsightCategories.filter((category) => category.files.length > 0).flatMap((category) => category.files)).toHaveLength(141);
    expect(rtiDocuments).toHaveLength(48);
    expect(RTI_OFFICERS_ORDER.id).toBe("rti-officers-order");

    const page = readFileSync("src/pages/site/CompletedWorks.tsx", "utf8");
    expect(page).toContain("completedWorks.map");
    expect(page).toContain("completedWorkUrl(doc.file)");
    expect(page).toContain("<PdfFileActions");
    expect(readFileSync("src/App.tsx", "utf8")).toContain('path="/completed-works"');
  });

  it("cross-lists the 8 NCAP records on their existing paths", () => {
    expect(NCAP_SEARCH_META.map((doc) => doc.id)).toEqual([
      "ncap-01",
      "ncap-02",
      "ncap-03",
      "ncap-04",
      "ncap-05",
      "ncap-06",
      "ncap-07",
      "ncap-08",
    ]);
    const archive = ncapArchiveDocuments();
    expect(archive.map((doc) => doc.id)).toEqual(NCAP_SEARCH_META.map((doc) => doc.id));
    expect(archive.map((doc) => doc.file)).toEqual(NCAP_SEARCH_META.map((doc) => doc.fileName));
    expect(new Set(archive.map((doc) => doc.id)).size).toBe(8);

    const ncap04 = NCAP_SEARCH_META.find((doc) => doc.id === "ncap-04");
    const ncap08 = NCAP_SEARCH_META.find((doc) => doc.id === "ncap-08");
    expect(ncap04?.fileName).toBe("VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf");
    expect(ncap08?.fileName).toBe("VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf");

    for (const doc of NCAP_SEARCH_META) {
      const full = path.join(publicRoot, "ncap", "documents", doc.fileName);
      expect(existsSync(full), full).toBe(true);
      expect(statSync(full).size).toBe(doc.bytes);
      const url = ncapFileUrl(doc.fileName);
      expect(url).toContain(`/ncap/documents/${encodeURIComponent(doc.fileName)}`);
      expect(url).not.toContain("documents/ncap/documents");
      expect(publicDocumentUrl(["ncap", "documents", doc.fileName])).not.toBe(url);
    }

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    expect(repository.match(/id="ncap"/g)).toHaveLength(1);
    expect(repository).toContain("National Clean Air Programme (NCAP)");
    expect(repository).toContain("राष्ट्रीय स्वच्छ हवा कार्यक्रम (NCAP)");
    expect(repository).toContain("documents={ncapArchiveDocuments()}");
    expect(repository).toContain("fileUrl={ncapFileUrl}");
    expect(repository).not.toContain('folderSegments={["ncap", "documents"]}');
    expect(repository).not.toContain("documents/ncap/documents");
    expect(repository).not.toContain("externalUrl");
    expect(repository).not.toContain("Needs Review");
    expect(repository).not.toContain("Duplicate Review");
    expect(repository).not.toContain("/Tenders/");
    expect(standingCommitteeMinutes).toHaveLength(337);
    expect(electionInsightCategories.filter((category) => category.files.length > 0).flatMap((category) => category.files)).toHaveLength(141);
    expect(rtiDocuments).toHaveLength(48);
    expect(RTI_OFFICERS_ORDER.id).toBe("rti-officers-order");
    expect(completedWorks).toHaveLength(11);

    const browser = readFileSync("src/components/site/DocumentArchiveBrowser.tsx", "utf8");
    expect(browser).toContain("fileUrl?.(file) ?? publicDocumentUrl");
    expect(browser).toContain("<PdfFileActions");
    expect(browser).toContain('download={doc.file}');
    const page = readFileSync("src/pages/site/Ncap.tsx", "utf8");
    expect(page).toContain("data/ncap-documents.json");
    expect(page).toContain("ncapFileUrl(doc.fileName)");
    expect(readFileSync("src/App.tsx", "utf8")).toContain('path="/ncap"');
  });

  it("records review destinations without publishing withheld files", () => {
    function parseCsv(text: string) {
      const rows: string[][] = [];
      let row: string[] = [];
      let cell = "";
      let quoted = false;
      for (let i = 0; i < text.length; i += 1) {
        const char = text[i];
        if (quoted) {
          if (char === '"') {
            if (text[i + 1] === '"') {
              cell += '"';
              i += 1;
            } else quoted = false;
          } else cell += char;
        } else if (char === '"') quoted = true;
        else if (char === ",") {
          row.push(cell);
          cell = "";
        } else if (char === "\n") {
          row.push(cell);
          rows.push(row);
          row = [];
          cell = "";
        } else if (char !== "\r") cell += char;
      }
      if (cell.length || row.length) {
        row.push(cell);
        rows.push(row);
      }
      return rows;
    }

    const draft = readFileSync("document-mapping-draft.csv", "utf8");
    expect(draft).not.toContain("publicationDisposition");
    const table = parseCsv(readFileSync("document-mapping-reconciled-draft.csv", "utf8").replace(/^\uFEFF/, ""));
    const header = table[0];
    const data = table.slice(1).filter((row) => row.some(Boolean));
    const col = Object.fromEntries(header.map((name, position) => [name, position]));
    const value = (row: string[], key: string) => row[col[key]] ?? "";
    expect(data).toHaveLength(2322);
    expect(data.filter((row) => value(row, "reconciliationStatus") === "implemented")).toHaveLength(1033);
    expect(data.filter((row) => value(row, "reconciliationStatus") === "proposed")).toHaveLength(0);
    expect(data.filter((row) => value(row, "publicListingImplemented") === "yes")).toHaveLength(1033);
    expect(data.filter((row) => value(row, "publicationDisposition") === "READY_FOR_CROSS_LISTING")).toHaveLength(0);
    expect(data.filter((row) => value(row, "publicationDisposition") === "MAPPED_PENDING_PUBLICATION_REVIEW")).toHaveLength(72);
    expect(data.filter((row) => value(row, "publicationDisposition") === "HOLD")).toHaveLength(1062);
    expect(data.filter((row) => value(row, "publicationDisposition") === "EXCLUDE")).toHaveLength(150);
    expect(data.filter((row) => value(row, "publicationDisposition") === "NEEDS_HUMAN_REVIEW")).toHaveLength(5);

    const pendingMinutes = data.filter((row) => row[col.localPath]?.includes("/standing-committee/Needs Review/") && value(row, "publicationDisposition") === "MAPPED_PENDING_PUBLICATION_REVIEW");
    expect(pendingMinutes).toHaveLength(1);
    expect(pendingMinutes[0] && value(pendingMinutes[0], "fileName")).toBe("15-_16_03_15_KP.pdf");
    const minutesSource = readFileSync("src/data/standingCommitteeMinutes.ts", "utf8");
    for (const row of pendingMinutes) {
      const full = path.join(publicRoot, ...value(row, "localPath").split("/"));
      expect(statSync(full).size).toBe(Number(value(row, "fileSizeBytes")));
      expect(value(row, "intendedRepositorySection")).toBe("standing-committee");
      expect(value(row, "publicListingImplemented")).toBe("no");
      expect(minutesSource).not.toContain(value(row, "fileName"));
    }
    expect(data.filter((row) => row[col.localPath]?.includes("/standing-committee/Needs Review/") && value(row, "publicationDisposition") === "EXCLUDE")).toHaveLength(7);

    const copy = data.find((row) => value(row, "fileName") === "Copy_of_annual_audit_report_of_2018-2019.pdf");
    const original = data.find((row) => value(row, "fileName") === "annual_audit_report_of_2018-2019.pdf");
    expect(copy && value(copy, "publicationDisposition")).toBe("EXCLUDE");
    expect(original && value(original, "publicationDisposition")).toBe("");
    expect(original && value(original, "reconciliationStatus")).toBe("implemented");
    expect(statSync(path.join(publicRoot, ...value(original!, "localPath").split("/"))).size).toBe(1436575);

    const repository = readFileSync("src/pages/site/DigitalRepository.tsx", "utf8");
    for (const name of ["PMAY AHP APPLICANT", "Divyang_list.pdf", "Qualified_Applicant_8741.pdf", "Disqualified_Applicant", "Waiting_Applicant_3301.pdf", "Satara_Devlaee-1.pdf"]) {
      expect(repository).not.toContain(name);
    }
    expect(data.filter((row) => value(row, "category") === "census-2026-27" && value(row, "publicationDisposition") === "HOLD")).toHaveLength(11);
    expect(repository).not.toContain('id="census-2026-27"');
    expect(data.filter((row) => value(row, "reconciliationStatus") === "held" && value(row, "publicationDisposition") === "HOLD")).toHaveLength(1037);
  });
});
