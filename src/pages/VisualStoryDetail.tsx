import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, CalendarDays } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { getRelatedStories, getStoryById, storyPath } from "@/data/visualStories";
import { isHeritageStory } from "@/types/featuredStory";
import NotFound from "@/pages/NotFound";

const VisualStoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const en = lang === "en";
  const story = slug ? getStoryById(slug) : undefined;

  if (!story) return <NotFound />;

  const title = en ? story.titleEn : story.titleMr;
  const related = getRelatedStories(story);
  const heritage = isHeritageStory(story);

  return (
    <Layout>
      <PageHeader title={title} eyebrow={en ? story.categoryEn : story.categoryMr} />
      <article className="container py-8 md:py-12">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-civic-blue hover:text-civic-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue mb-6"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {en ? "Back to gallery" : "दालनाकडे परत"}
        </Link>

        <div className="overflow-hidden bg-civic-light border border-border">
          <img
            src={story.image}
            alt={en ? story.altEn : story.altMr}
            className="w-full max-h-[70vh] object-contain bg-civic-ink/5"
          />
        </div>

        <header className="mt-6 md:mt-8 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-civic-gold font-bold mb-2">
            {en ? story.categoryEn : story.categoryMr}
          </p>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-civic-blue leading-tight">
            {title}
          </h1>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
            {story.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-civic-gold" aria-hidden />
                {story.date}
              </span>
            )}
            {(en ? story.locationEn : story.locationMr) && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-civic-gold" aria-hidden />
                {en ? story.locationEn : story.locationMr}
              </span>
            )}
          </div>
        </header>

        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-civic-ink/90">
          <p className="font-medium text-civic-blue">
            {en ? story.shortDescriptionEn : story.shortDescriptionMr}
          </p>
          <p>{en ? story.descriptionEn : story.descriptionMr}</p>
          {(en ? story.purposeEn : story.purposeMr) && (
            <p>
              <span className="font-semibold text-civic-blue">
                {en ? "Purpose. " : "उद्देश. "}
              </span>
              {en ? story.purposeEn : story.purposeMr}
            </p>
          )}
          {(en ? story.officialsEn : story.officialsMr) && (
            <p>
              <span className="font-semibold text-civic-blue">
                {en ? "Officials. " : "अधिकारी. "}
              </span>
              {en ? story.officialsEn : story.officialsMr}
            </p>
          )}
        </div>

        {(en ? story.highlightsEn : story.highlightsMr)?.length ? (
          <ul className="mt-5 max-w-3xl list-disc pl-5 text-[15px] text-civic-ink/90 space-y-1">
            {(en ? story.highlightsEn : story.highlightsMr)!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {heritage && story.touristSlug && (
          <p className="mt-6">
            <Link
              to={`/tourist-attraction/${story.touristSlug}`}
              className="text-sm font-bold text-civic-blue hover:text-civic-red"
            >
              {en ? "Visitor information" : "भेट माहिती"} →
            </Link>
          </p>
        )}

        {related.length > 0 && (
          <section className="mt-12" aria-labelledby="related-photos-heading">
            <h2 id="related-photos-heading" className="font-serif text-xl font-bold text-civic-blue mb-4">
              {en ? "Related photographs" : "संबंधित छायाचित्रे"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={storyPath(item.id)}
                  className="group relative aspect-[4/3] overflow-hidden bg-civic-blue/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
                >
                  <img
                    src={item.image}
                    alt={en ? item.altEn : item.altMr}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.objectPosition ?? "center center" }}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 py-2 text-white text-xs font-semibold">
                    {en ? item.titleEn : item.titleMr}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default VisualStoryDetail;
