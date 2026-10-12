import { tenderArchiveGroups, type TenderArchiveGroup } from "@/data/officialLinkedDocuments";

export type TenderNoticeFolder = TenderArchiveGroup & {
  slug: string;
  sortYear: number;
};

/** Year token from a heading such as "Tender notices 2025" or "Tender notices 2018-2019". */
export function tenderNoticeSlug(headingEn: string): string {
  const range = headingEn.match(/(\d{4}-\d{4})/);
  if (range) return range[1];
  const year = headingEn.match(/(\d{4})/);
  return year ? year[1] : headingEn.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/** Newest year in the heading, so 2018-2019 sorts as 2019. */
export function tenderNoticeSortYear(headingEn: string): number {
  const years = [...headingEn.matchAll(/\d{4}/g)].map((match) => Number(match[0]));
  return years.length ? Math.max(...years) : 0;
}

/** Published year folders only, newest first. Empty years are not added. */
export function tenderNoticeFolders(): TenderNoticeFolder[] {
  return tenderArchiveGroups
    .filter((group) => group.documents.length > 0)
    .map((group) => ({
      ...group,
      slug: tenderNoticeSlug(group.headingEn),
      sortYear: tenderNoticeSortYear(group.headingEn),
    }))
    .sort((a, b) => b.sortYear - a.sortYear || b.slug.localeCompare(a.slug));
}

export function tenderNoticeFolder(slug: string): TenderNoticeFolder | undefined {
  return tenderNoticeFolders().find((folder) => folder.slug === slug);
}
