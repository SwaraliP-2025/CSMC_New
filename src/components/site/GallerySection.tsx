import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { getHomepageGalleryStories, storyPath } from "@/data/visualStories";
import type { VisualStory } from "@/types/featuredStory";

const GalleryCard = ({ story, en }: { story: VisualStory; en: boolean }) => {
  const title = en ? story.titleEn : story.titleMr;
  const category = en ? story.categoryEn : story.categoryMr;

  return (
    <Link
      to={storyPath(story.id)}
      className="group relative shrink-0 w-[220px] sm:w-[240px] md:w-[260px] overflow-hidden bg-white border border-border/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
      aria-label={title}
    >
      <span className="block aspect-[4/3] overflow-hidden bg-civic-blue/10">
        <img
          src={story.image}
          alt={en ? story.altEn : story.altMr}
          className="h-full w-full object-cover transition-[filter] duration-300 group-hover:brightness-105 motion-reduce:transition-none"
          style={{ objectPosition: story.objectPosition ?? "center center" }}
        />
      </span>
      <span className="block px-3 py-2.5">
        <span className="block text-[9px] uppercase tracking-[0.16em] font-bold text-civic-gold">
          {category}
        </span>
        <span className="mt-0.5 block font-serif text-[13px] font-semibold text-civic-blue leading-snug line-clamp-2">
          {title}
        </span>
      </span>
    </Link>
  );
};

export const GallerySection = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const items = getHomepageGalleryStories();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const step = (card?.clientWidth ?? 240) + 12;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section id="photo-gallery" className="py-10 md:py-12 bg-civic-light scroll-mt-28">
      <div className="container">
        <div className="flex items-end justify-between gap-3 mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-civic-red font-bold mb-1">
              {en ? "Photo Gallery" : "छायाचित्र दालन"}
            </p>
            <h2 className="font-serif text-xl md:text-2xl text-civic-blue font-bold">
              {en ? "Civic Life in Pictures" : "नागरी जीवन छायाचित्रांत"}
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-civic-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue whitespace-nowrap"
          >
            {en ? "View All" : "सर्व पहा"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-[38%] -translate-y-1/2 -translate-x-2 z-10 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white border border-border text-civic-blue shadow-sm hover:bg-civic-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
            aria-label={en ? "Previous photographs" : "मागील छायाचित्रे"}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>

          <div
            ref={trackRef}
            className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((story) => (
              <div key={story.id} className="snap-start">
                <GalleryCard story={story} en={en} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-[38%] -translate-y-1/2 translate-x-2 z-10 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white border border-border text-civic-blue shadow-sm hover:bg-civic-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
            aria-label={en ? "Next photographs" : "पुढील छायाचित्रे"}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};
