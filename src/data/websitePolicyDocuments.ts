import type { ArchiveFile } from "@/lib/archiveDocuments";

/**
 * CSMC website policy PDFs. Five are individual Google Drive files.
 * The Website Security Policy has no working URL: the official CSMC file returns 404.
 * Sizes are not listed because the files are not stored on this site.
 */
export const websitePolicyDocuments: ArchiveFile[] = [
  {
    id: "website-policy-cmap",
    file: "CSMC_CMAP Policy.pdf",
    bytes: 0,
    externalUrl: "https://drive.google.com/file/d/1KWiaj8ClpUFQsOi9A0C9C5YKQiAhVLj5/view",
    titleEn: "CSMC CMAP Policy",
    titleMr: "CSMC CMAP धोरण",
  },
  {
    id: "website-policy-copyright",
    file: "CSMC_Copyright_Policy_1.pdf",
    bytes: 0,
    externalUrl: "https://drive.google.com/file/d/1qIQKRSzweZeWc-pIDZR9JdRUvlwWzAEc/view",
    titleEn: "CSMC Copyright Policy",
    titleMr: "CSMC कॉपीराइट धोरण",
  },
  {
    id: "website-policy-data-privacy",
    file: "CSMC_Data_Privacy_Policy_v2.pdf",
    bytes: 0,
    externalUrl: "https://drive.google.com/file/d/1WSrtLiBHrzZuUBfwKM5DvM_ucENbBVOj/view",
    titleEn: "CSMC Data Privacy Policy",
    titleMr: "CSMC डेटा गोपनीयता धोरण",
  },
  {
    id: "website-policy-hyperlinking",
    file: "CSMC_Hyperlinking_Policy.pdf",
    bytes: 0,
    externalUrl: "https://drive.google.com/file/d/1Gme7Zi6dUOTNZ-8PEiQMKjNa9EP68Aho/view",
    titleEn: "CSMC Hyperlinking Policy",
    titleMr: "CSMC हायपरलिंकिंग धोरण",
  },
  {
    id: "website-policy-terms-of-use",
    file: "CSMC_Terms_of_Use_Policy_1.pdf",
    bytes: 0,
    externalUrl: "https://drive.google.com/file/d/1FVbsJc4m2rZGLaBAY2GiGIuVOxwhblRf/view",
    titleEn: "CSMC Terms of Use Policy",
    titleMr: "CSMC वापराच्या अटी धोरण",
  },
  {
    id: "website-policy-website-security",
    file: "CSMC_Website_Security_Policy.pdf",
    bytes: 0,
    linkUnavailable: true,
    titleEn: "CSMC Website Security Policy",
    titleMr: "CSMC संकेतस्थळ सुरक्षा धोरण",
  },
];
