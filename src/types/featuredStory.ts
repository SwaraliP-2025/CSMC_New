/**
 * Shared visual content for Hero, Photo Gallery and detail pages.
 * Static today; replace this module with a PRO / CMS / API mapper later.
 */
export type VisualStoryType =
  | "heritage"
  | "event"
  | "programme"
  | "civic"
  | "development";

export type VisualStory = {
  id: string;
  type: VisualStoryType;
  titleEn: string;
  titleMr: string;
  shortDescriptionEn: string;
  shortDescriptionMr: string;
  descriptionEn: string;
  descriptionMr: string;
  image: string;
  additionalImages?: string[];
  relatedIds?: string[];
  altEn: string;
  altMr: string;
  date?: string;
  locationEn?: string;
  locationMr?: string;
  categoryEn: string;
  categoryMr: string;
  purposeEn?: string;
  purposeMr?: string;
  highlightsEn?: string[];
  highlightsMr?: string[];
  officialsEn?: string;
  officialsMr?: string;
  showInHero?: boolean;
  showInGallery?: boolean;
  heroOrder?: number;
  galleryOrder?: number;
  objectPosition?: string;
  /** Existing tourist attraction slug, when the item is a known heritage site. */
  touristSlug?: string;
};

export function storyPath(id: string) {
  return `/stories/${id}`;
}

export function isHeritageStory(story: VisualStory) {
  return story.type === "heritage";
}
