import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { mergedOfficialGroups } from "@/data/officialVerifiedDocuments";
import { officialAnnouncementFolder, officialPublicAdditions, officialSiteNoticeDocuments, officialStandingCommitteeDocuments, officialStandingCommitteeFolder, officialTenderNoticeDocuments } from "@/data/officialPublicAdditions";
import { MECHANICAL_DOCUMENTS_FOLDER, mechanicalPublicDocuments } from "@/data/reviewedPublicDocuments";
import { driveHostedPdfIds } from "@/data/driveHostedPdfs";
import { officialLinkedGroups, officialLinkedSections, tenderArchiveGroups } from "@/data/officialLinkedDocuments";
import { repositoryShelves } from "@/data/repositoryShelves";
import { publishedDocumentUrl } from "@/lib/archiveDocuments";
import { DEPARTMENTS } from "@/pages/site/DepartmentDetail";
import { CIVIC_CATALOG, REPOSITORY_DOCUMENTS } from "@/data/civicCatalog";

const FABRICATED_REPOSITORY_IDS = [
  "cir-streetlight",
  "cir-swm",
  "not-dp-revision",
  "not-recruitment",
  "gr-swm",
  "gr-water-reg",
  "gr-bldg-fee",
  "cr-gb-mar",
  "cr-gb-feb",
  "ten-swm",
  "ten-roads",
  "cc-health",
  "cc-revenue",
  "byl-dcr",
  "byl-parking",
  "dp-2025",
  "dp-report",
  "ar-2025",
  "ar-2024",
  "pol-open-data",
  "pol-inclusion",
  "act-rti",
  "act-rts",
  "rti-q4",
  "rti-q3",
  "mm-sc-apr",
  "mm-sc-agenda",
  "bud-2627",
  "bud-2526",
  "bud-2425",
];

const publicRoot = path.resolve("public");

function repositoryListingSource() {
  return [
    readFileSync("src/pages/site/DigitalRepository.tsx", "utf8"),
    readFileSync("src/data/repositoryShelves.ts", "utf8"),
  ].join("\n");
}

describe("official document audit listings", () => {
  it("lists every verified official document once, on its section and in the repository", () => {
    const department = readFileSync("src/pages/site/DepartmentDetail.tsx", "utf8");
    const repository = repositoryListingSource();
    const publicPage = readFileSync("src/pages/site/PublicDocuments.tsx", "utf8");
    expect(department).toContain("mergedOfficialGroups");
    expect(repository).toContain("mergedOfficialGroups");
    expect(repository).toContain("officialStandingCommitteeDocuments");
    expect(publicPage).toContain("officialStandingCommitteeDocuments");
    const slugs = new Set(DEPARTMENTS.map((dept) => dept.slug));
    const ids = new Set<string>();
    const paths = new Set<string>();
    for (const group of mergedOfficialGroups()) {
      expect(slugs.has(group.slug), group.slug).toBe(true);
      expect(repository).toContain(group.slug);
      for (const doc of group.documents) {
        expect(ids.has(doc.id), doc.id).toBe(false);
        ids.add(doc.id);
        const segments = [...group.folder, doc.file];
        const logical = ["documents", ...segments].join("/");
        expect(paths.has(logical), logical).toBe(false);
        paths.add(logical);
        expect(driveHostedPdfIds[logical], logical).toBeTruthy();
        expect(existsSync(path.join(publicRoot, ...logical.split("/"))), logical).toBe(true);
        expect(publishedDocumentUrl(segments)).toBe(`https://drive.google.com/file/d/${driveHostedPdfIds[logical]}/view`);
      }
    }
    for (const doc of officialStandingCommitteeDocuments) {
      expect(ids.has(doc.id), doc.id).toBe(false);
      ids.add(doc.id);
      const segments = [...officialStandingCommitteeFolder, doc.file];
      const logical = ["documents", ...segments].join("/");
      expect(driveHostedPdfIds[logical]).toBeTruthy();
      expect(publishedDocumentUrl(segments)).toBe(`https://drive.google.com/file/d/${driveHostedPdfIds[logical]}/view`);
    }
    for (const file of ["Auto_list.pdf", "Mechinical_89_dt_21_02_2025.pdf"]) {
      const logical = ["documents", ...MECHANICAL_DOCUMENTS_FOLDER, file].join("/");
      expect(mechanicalPublicDocuments.some((doc) => doc.file === file)).toBe(true);
      expect(driveHostedPdfIds[logical]).toBeTruthy();
    }
    expect(officialPublicAdditions.reduce((sum, group) => sum + group.documents.length, 0) + officialStandingCommitteeDocuments.length).toBe(50);
    expect(ids.size).toBe(39 + 50);
    const announcements = [...officialTenderNoticeDocuments, ...officialSiteNoticeDocuments];
    expect(announcements).toHaveLength(3);
    for (const doc of announcements) {
      const segments = [...officialAnnouncementFolder, doc.file];
      const logical = ["documents", ...segments].join("/");
      expect(paths.has(logical), logical).toBe(false);
      expect(driveHostedPdfIds[logical], logical).toBeTruthy();
      expect(existsSync(path.join(publicRoot, ...logical.split("/"))), logical).toBe(true);
      expect(publishedDocumentUrl(segments)).toBe(`https://drive.google.com/file/d/${driveHostedPdfIds[logical]}/view`);
    }
    expect(repositoryListingSource()).toContain("official-announcements");
    expect(readFileSync("src/pages/site/Notices.tsx", "utf8")).toContain("officialSiteNoticeDocuments");
    expect(readFileSync("src/pages/site/MunicipalDocumentList.tsx", "utf8")).toContain("officialTenderNoticeDocuments");
  });

  it("links official PDFs that have no local copy to their working official URL", () => {
    const listed = mergedOfficialGroups().flatMap((group) => group.documents.map((doc) => doc.file)).join("\n");
    for (const name of ["ACT_of_LBT", "Medical_Officer_List", "Copy_of_annual_audit_report_of_2018-2019.pdf"]) {
      expect(listed).not.toContain(name);
    }
    expect(driveHostedPdfIds["documents/FAQ_SevenStar.pdf"]).toBeUndefined();

    const slugs = new Set(DEPARTMENTS.map((dept) => dept.slug));
    const linked = [...officialLinkedGroups, ...officialLinkedSections].flatMap((group) => group.documents);
    expect(linked).toHaveLength(397);
    expect(new Set(linked.map((doc) => doc.id)).size).toBe(397);
    expect(new Set(linked.map((doc) => doc.externalUrl)).size).toBe(397);
    for (const group of officialLinkedGroups) expect(slugs.has(group.slug), group.slug).toBe(true);
    for (const doc of linked) {
      expect(doc.externalUrl, doc.externalUrl).toMatch(/^https:\/\/(chhsambhajinagarmc|aurangabadmahapalika)\.org\/assets\//);
      expect(doc.titleEn?.trim()).toBeTruthy();
      expect(doc.titleEn).not.toMatch(/येथे क्लिक करा|click here|&amp;|&nbsp;/i);
    }
    const tax = officialLinkedGroups.filter((group) => group.slug === "tax").flatMap((group) => group.documents);
    expect(tax.map((doc) => doc.file)).toContain("ACT_of_LBT_English_Resize.pdf");
    expect(tax).toHaveLength(7);
    expect(officialLinkedGroups.some((group) => group.slug === "health" && group.documents.some((doc) => doc.file === "Medical_Officer_List.PDF"))).toBe(true);

    const department = readFileSync("src/pages/site/DepartmentDetail.tsx", "utf8");
    const repository = repositoryListingSource();
    expect(department).toContain("officialLinkedGroups");
    expect(repository).toContain("officialLinkedGroups");
    expect(repository).toContain("officialLinkedSections");
    expect(readFileSync("src/pages/site/Notices.tsx", "utf8")).toContain("public-notices");
    expect(readFileSync("src/pages/site/PublicDocuments.tsx", "utf8")).toContain("general-body");
  });

  it("lists one copy of each tender-folder PDF on Tender Notices and in the repository", () => {
    const tenders = tenderArchiveGroups.flatMap((group) => group.documents.map((doc) => ({ group, doc })));
    expect(tenders).toHaveLength(1008);
    expect(new Set(tenders.map(({ doc }) => doc.id)).size).toBe(1008);
    for (const { group, doc } of tenders) {
      const logical = ["documents", ...group.folder, doc.file].join("/");
      expect(driveHostedPdfIds[logical], logical).toBeTruthy();
      expect(publishedDocumentUrl([...group.folder, doc.file])).toBe(`https://drive.google.com/file/d/${driveHostedPdfIds[logical]}/view`);
    }
    expect(readFileSync("src/pages/site/MunicipalDocumentList.tsx", "utf8")).toContain("tenderArchiveGroups");
    expect(repositoryListingSource()).toContain("tenderArchiveGroups");
  });

  it("keeps every repository archive document in exactly one category", () => {
    const ids = repositoryShelves().flatMap((shelf) => shelf.sections.flatMap((section) => section.documents.map((doc) => doc.id)));
    expect(new Set(ids).size).toBe(ids.length);
    const linked = [...officialLinkedGroups, ...officialLinkedSections].flatMap((group) => group.documents.map((doc) => doc.id));
    const tenders = tenderArchiveGroups.flatMap((group) => group.documents.map((doc) => doc.id));
    const official = mergedOfficialGroups().flatMap((group) => group.documents.map((doc) => doc.id));
    for (const id of [...linked, ...tenders, ...official, ...officialSiteNoticeDocuments.map((doc) => doc.id), ...officialTenderNoticeDocuments.map((doc) => doc.id), ...officialStandingCommitteeDocuments.map((doc) => doc.id)]) {
      expect(ids, id).toContain(id);
    }
    expect(ids.filter((id) => tenders.includes(id))).toHaveLength(1008);
    expect(repositoryListingSource()).toContain('id: "tender-archive"');
    expect(repositoryListingSource()).toContain("repository-${item}");
  });

  it("omits fabricated catalog documents from repository listings", () => {
    expect(REPOSITORY_DOCUMENTS).toEqual([]);
    for (const id of FABRICATED_REPOSITORY_IDS) {
      expect(CIVIC_CATALOG.some((record) => record.id === id), id).toBe(false);
    }
    const archiveIds = repositoryShelves().flatMap((shelf) =>
      shelf.sections.flatMap((section) => section.documents.map((doc) => doc.id)),
    );
    for (const id of FABRICATED_REPOSITORY_IDS) expect(archiveIds, id).not.toContain(id);
    expect(new Set(archiveIds).size).toBe(archiveIds.length);
  });
});
