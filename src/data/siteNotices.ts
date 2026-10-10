/**
 * Official notices shown on /notices — shared with global search.
 * Keep titles factual; do not invent unpublished notices.
 */
export type SiteNotice = {
  id: string;
  /** ISO date for sorting / search metadata */
  publishedAt: string;
  /** Display date string used on the Notices page */
  dateLabel: string;
  tagEn: string;
  tagMr: string;
  titleEn: string;
  titleMr: string;
};

/** Add a notice only when it is backed by a published municipal document. */
export const SITE_NOTICES: SiteNotice[] = [];
