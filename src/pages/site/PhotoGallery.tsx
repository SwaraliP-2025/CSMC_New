import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { getGalleryStories, storyPath } from "@/data/visualStories";

const PhotoGallery = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const items = getGalleryStories();

  return (
    <Layout>
      <PageHeader
        title={en ? "Photo Gallery" : "छायाचित्र दालन"}
        eyebrow={en ? "CSMC" : "छ.सं.म.न.पा."}
      />
      <section className="container py-8 md:py-12">
        <p className="text-sm text-muted-foreground max-w-2xl mb-8">
          {en
            ? "Civic programmes, meetings and public activities of Chhatrapati Sambhajinagar Municipal Corporation."
            : "छत्रपती संभाजीनगर महानगरपालिकेचे नागरी कार्यक्रम, बैठका व सार्वजनिक उपक्रम."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((story) => {
            const title = en ? story.titleEn : story.titleMr;
            return (
              <Link
                key={story.id}
                to={storyPath(story.id)}
                className="group block overflow-hidden bg-white border border-border/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
                aria-label={title}
              >
                <span className="block aspect-[4/3] overflow-hidden bg-civic-blue/10">
                  <img
                    src={story.image}
                    alt={en ? story.altEn : story.altMr}
                    className="h-full w-full object-cover group-hover:brightness-105 transition-[filter] duration-300 motion-reduce:transition-none"
                    style={{ objectPosition: story.objectPosition ?? "center center" }}
                  />
                </span>
                <span className="block px-3 py-2.5">
                  <span className="block text-[9px] uppercase tracking-[0.16em] font-bold text-civic-gold">
                    {en ? story.categoryEn : story.categoryMr}
                  </span>
                  <span className="mt-0.5 block font-serif text-sm font-semibold text-civic-blue leading-snug line-clamp-2">
                    {title}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default PhotoGallery;
