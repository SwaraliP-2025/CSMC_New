import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { facilityCategories } from "@/lib/facilities";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function groupByCategory(categories: typeof facilityCategories) {
  const groups: Record<string, typeof facilityCategories> = {};
  for (const cat of categories) {
    const key = cat.groupEn;
    if (!groups[key]) groups[key] = [];
    groups[key].push(cat);
  }
  return groups;
}

const PublicFacilities = () => {
  const { lang, t } = useLang();
  const en = lang === "en";
  const f = t.facilities;

  const allCategories = facilityCategories;
  const groups = groupByCategory(allCategories);

  return (
    <Layout>
      <PageHeader
        eyebrow={f.eyebrow}
        title={f.allTitle}
        subtitle={f.hubSubtitle}
      />

      <section className="py-12 container">
        <div className="flex flex-col gap-10">
          {Object.entries(groups).map(([groupEn, items]) => {
            const groupMr = items[0]?.groupMr ?? groupEn;
            return (
              <div key={groupEn}>
                <h2 className="font-serif text-xl font-bold text-civic-blue mb-4 pb-2 border-b border-civic-blue/10">
                  {en ? groupEn : groupMr}
                </h2>

                <div className="flex flex-col gap-3">
                  {items.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.slug}
                        to={`/public-facilities/${category.slug}`}
                        className="group flex items-center gap-4 bg-white border border-border hover:border-civic-blue/30 hover:shadow-md rounded-2xl px-5 py-4 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
                      >
                        <div className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-civic-blue/10 text-civic-blue group-hover:bg-civic-blue group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-civic-blue text-sm group-hover:text-civic-blue transition-colors break-words">
                            {en ? category.titleEn : category.titleMr}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-2 break-words">
                            {en ? category.descriptionEn : category.descriptionMr}
                          </p>
                        </div>

                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-civic-blue transition-colors shrink-0" aria-hidden />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default PublicFacilities;
