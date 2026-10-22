import { rtiDocuments, RTI_DEPARTMENT_FOLDER, RTI_FOLDER } from "@/data/rtiDocuments";
import { tenderArchiveGroups } from "@/data/officialLinkedDocuments";
import type { ArchiveFile } from "@/lib/archiveDocuments";

export type InformationTechnologyDocumentGroup = {
  id: string;
  headingEn: string;
  headingMr: string;
  folderSegments: string[];
  documents: ArchiveFile[];
};

const COMPUTER_SECTION_DEPARTMENT_LABELS = new Set([
  "computer",
  "computer section",
  "computer sectiom",
]);

function uniqueDocuments(
  folderSegments: string[],
  documents: ArchiveFile[],
  seenDocuments: Set<string>,
): ArchiveFile[] {
  return documents.filter((document) => {
    const key = [...folderSegments, document.file].join("/").toLocaleLowerCase();
    if (seenDocuments.has(key)) return false;
    seenDocuments.add(key);
    return true;
  });
}

const rtiFolderSegments = [RTI_FOLDER, RTI_DEPARTMENT_FOLDER];
const computerSectionRtiDocuments: ArchiveFile[] = rtiDocuments
  .filter((document) => document.departmentName.trim().toLocaleLowerCase() === "computer section")
  .map((document) => ({
    id: document.id,
    file: document.fileName,
    bytes: document.bytes,
    department: document.departmentName,
  }));

function createInformationTechnologyDocumentGroups(): InformationTechnologyDocumentGroup[] {
  const seenDocuments = new Set<string>();
  const tenderGroups = tenderArchiveGroups.flatMap((group) => {
    const documents = uniqueDocuments(
      group.folder,
      group.documents.filter((document) =>
        COMPUTER_SECTION_DEPARTMENT_LABELS.has(document.department?.trim().toLocaleLowerCase() ?? ""),
      ),
      seenDocuments,
    );
    if (documents.length === 0) return [];
    return [{
      id: group.folder.join("/"),
      headingEn: group.headingEn,
      headingMr: group.headingMr,
      folderSegments: group.folder,
      documents,
    }];
  });
  const rtiGroupDocuments = uniqueDocuments(rtiFolderSegments, computerSectionRtiDocuments, seenDocuments);

  return [
    ...tenderGroups,
    ...(rtiGroupDocuments.length
      ? [{
          id: rtiFolderSegments.join("/"),
          headingEn: "Computer Section RTI documents",
          headingMr: "संगणक विभागाचे माहिती अधिकार दस्तऐवज",
          folderSegments: rtiFolderSegments,
          documents: rtiGroupDocuments,
        }]
      : []),
  ];
}

export const INFORMATION_TECHNOLOGY_DOCUMENT_GROUPS = createInformationTechnologyDocumentGroups();
