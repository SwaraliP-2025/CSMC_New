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

export const SITE_NOTICES: SiteNotice[] = [
  {
    id: "site-notice-tax-rebate",
    publishedAt: "2026-04-22",
    dateLabel: "22 Apr 2026",
    tagEn: "Notice",
    tagMr: "सूचना",
    titleEn: "Property tax 10% rebate window extended till 30 May 2026.",
    titleMr: "मालमत्ता कर १०% सवलत ३० मे २०२६ पर्यंत वाढवली.",
  },
  {
    id: "site-notice-swm-tender",
    publishedAt: "2026-04-18",
    dateLabel: "18 Apr 2026",
    tagEn: "Tender",
    tagMr: "निविदा",
    titleEn: "E-tender invited for SWM Phase II processing facility.",
    titleMr: "घनकचरा प्रकल्प टप्पा-२ साठी ई-निविदा.",
  },
  {
    id: "site-notice-plantation",
    publishedAt: "2026-04-12",
    dateLabel: "12 Apr 2026",
    tagEn: "Event",
    tagMr: "कार्यक्रम",
    titleEn: "City-wide tree plantation drive on World Environment Day.",
    titleMr: "जागतिक पर्यावरण दिनी शहर वृक्षारोपण मोहीम.",
  },
  {
    id: "site-notice-trade-portal",
    publishedAt: "2026-04-05",
    dateLabel: "05 Apr 2026",
    tagEn: "Update",
    tagMr: "अद्यतन",
    titleEn: "New trade licence renewal portal goes live.",
    titleMr: "नवीन व्यापार परवाना नूतनीकरण पोर्टल कार्यान्वित.",
  },
  {
    id: "site-notice-recruitment",
    publishedAt: "2026-03-29",
    dateLabel: "29 Mar 2026",
    tagEn: "Recruitment",
    tagMr: "भरती",
    titleEn: "Engagement of 240 sanitation supervisors — applications open.",
    titleMr: "२४० स्वच्छता पर्यवेक्षकांच्या नियुक्तीसाठी अर्ज खुले.",
  },
  {
    id: "site-notice-water-schedule",
    publishedAt: "2026-03-20",
    dateLabel: "20 Mar 2026",
    tagEn: "Notice",
    tagMr: "सूचना",
    titleEn: "Ward-wise water supply schedule for summer 2026 published.",
    titleMr: "उन्हाळा २०२६ साठी प्रभागनिहाय पाणी पुरवठा वेळापत्रक.",
  },
];
