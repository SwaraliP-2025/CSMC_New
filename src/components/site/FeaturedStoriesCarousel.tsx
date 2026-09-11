import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { getHeroStories, storyPath } from "@/data/visualStories";
import { isHeritageStory, type VisualStory } from "@/types/featuredStory";

const SLIDE_MS = 3000;
const TRANSITION_MS = 550;
const NAV_LOCK_MS = 450;
const SWIPE_PX = 48;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const StoryCta = ({ story, en }: { story: VisualStory; en: boolean }) => {
  const label = en ? "Read more" : "अधिक वाचा";
  return (
    <Link
      to={storyPath(story.id)}
      className="mt-3 inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-white hover:text-civic-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors"
    >
      {label} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
    </Link>
  );
};

export const FeaturedStoriesCarousel = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const stories = getHeroStories();
  const count = stories.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const lastNav = useRef(0);
  const pointerX = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const setHoverPaused = (value: boolean) => {
    pausedRef.current = value;
    setPaused(value);
  };

  const current = stories[index] ?? stories[0];
  const heritage = current ? isHeritageStory(current) : false;

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const now = Date.now();
      if (now - lastNav.current < NAV_LOCK_MS) return;
      lastNav.current = now;
      setIndex((next + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (reduced || count <= 1) return;
    const id = window.setInterval(() => {
      if (document.hidden || pausedRef.current) return;
      setIndex((i) => (i + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduced, count]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    pointerX.current = e.clientX;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (pointerX.current == null) return;
    const dx = e.clientX - pointerX.current;
    pointerX.current = null;
    if (Math.abs(dx) < SWIPE_PX) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const fadeMs = reduced ? 0 : TRANSITION_MS;
  const title = current ? (en ? current.titleEn : current.titleMr) : "";
  const liveLabel = en
    ? `Slide ${index + 1} of ${count}: ${title}`
    : `स्लाइड ${index + 1} / ${count}: ${title}`;

  return (
    <div
      className="absolute inset-0 touch-pan-y focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
      role="region"
      aria-roledescription="carousel"
      aria-label={en ? "City photographs" : "शहराची छायाचित्रे"}
      tabIndex={0}
      aria-live="off"
      aria-atomic="false"
      aria-paused={paused || reduced}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        pointerX.current = null;
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-[#122440]">
        {stories.map((story, i) => (
          <img
            key={story.id}
            src={story.image}
            alt={i === index ? (en ? story.altEn : story.altMr) : ""}
            aria-hidden={i !== index}
            draggable={false}
            decoding="async"
            fetchPriority={i === index ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover select-none ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              objectPosition: story.objectPosition ?? "center center",
              transition: `opacity ${fadeMs}ms ease-in-out`,
            }}
          />
        ))}
      </div>

      {heritage ? (
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
          aria-hidden
        />
      ) : (
        <div
          className="absolute inset-x-0 bottom-0 h-40 md:h-48 md:w-[min(36rem,calc(100%-18rem))] bg-gradient-to-t from-black/45 via-black/15 to-transparent pointer-events-none"
          aria-hidden
        />
      )}

      {!heritage && current && (
        <div className="relative h-full container z-10 flex flex-col justify-end md:justify-center py-8 md:py-24 pb-20 md:pb-24">
          <div className="max-w-lg pr-0 md:pr-[280px]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-civic-gold font-bold mb-2 drop-shadow-md">
              {en ? current.categoryEn : current.categoryMr}
            </p>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-white drop-shadow-lg">
              {en ? current.titleEn : current.titleMr}
            </h2>
            <p className="mt-2 text-sm text-white/90 max-w-md leading-relaxed drop-shadow-md">
              {en ? current.shortDescriptionEn : current.shortDescriptionMr}
            </p>
            <span
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
              onFocus={() => setHoverPaused(true)}
              onBlur={() => setHoverPaused(false)}
            >
              <StoryCta story={current} en={en} />
            </span>
          </div>
        </div>
      )}

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {liveLabel}
      </p>

      {count > 1 && (
        <div
          className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:gap-3"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setHoverPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setHoverPaused(false);
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label={en ? "Previous photograph" : "मागील छायाचित्र"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/55 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label={en ? "Hero photographs" : "मुख्य छायाचित्रे"}
          >
            {stories.map((story, i) => (
              <button
                key={story.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={en ? `Photograph ${i + 1}: ${story.titleEn}` : `छायाचित्र ${i + 1}: ${story.titleMr}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  i === index ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label={en ? "Next photograph" : "पुढील छायाचित्र"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/55 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
};
