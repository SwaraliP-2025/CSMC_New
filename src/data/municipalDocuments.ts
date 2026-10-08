export type MunicipalDocument = {
  id: string;
  titleEn: string;
  titleMr: string;
  folder: string;
  file: string;
};

export function municipalDocumentUrl(doc: Pick<MunicipalDocument, "folder" | "file">) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}documents/${encodeURIComponent(doc.folder)}/${encodeURIComponent(doc.file)}`;
}

/** public/documents/municipal-documents/ */
export const dastavezDocuments: MunicipalDocument[] = [
  {
    id: "banner-location-list",
    titleEn: "Banner Location List",
    titleMr: "बॅनर स्थळांची यादी",
    folder: "municipal-documents",
    file: "Banner_location.pdf",
  },
];

/** public/documents/policies/ */
export const policyDocuments: MunicipalDocument[] = [
  {
    id: "draft-water-policy",
    titleEn: "Draft Water Policy",
    titleMr: "मसुदा जल धोरण",
    folder: "policies",
    file: "Draft Water Policy_CS.pdf",
  },
];
