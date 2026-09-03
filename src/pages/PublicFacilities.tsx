import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { facilityCategories } from "@/lib/facilities";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Group categories by their groupEn field
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
  const { lang } = useLang();
  const en = lang === "en";

  const allCategories = facilityCategories;
  const groups = groupByCategory(allCategories);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Citizen Services" : "नागरिक सेवा"}
        title={en ? "All Public Facilities" : "सर्व सार्वजनिक सुविधा"}
        subtitle={
          en
            ? "Discover all municipal services and infrastructure across Chhatrapati Sambhajinagar."
            : "छत्रपती संभाजीनगरमधील सर्व महापालिका सेवा व पायाभूत सुविधा शोधा."
        }
      />

      <section className="py-12 container">
        <div className="flex flex-col gap-10">
          {Object.entries(groups).map(([groupEn, items]) => {
            const groupMr = items[0]?.groupMr ?? groupEn;
            return (
              <div key={groupEn}>
                {/* Group heading */}
                <h2 className="font-serif text-xl font-bold text-civic-blue mb-4 pb-2 border-b border-civic-blue/10">
                  {en ? groupEn : groupMr}
                </h2>

                {/* List of facilities in this group */}
                <div className="flex flex-col gap-3">
                  {items.map(category => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.slug}
                        to={`/public-facilities/${category.slug}`}
                        className="group flex items-center gap-4 bg-white border border-border hover:border-civic-blue/30 hover:shadow-md rounded-2xl px-5 py-4 transition-all"
                      >
                        {/* Icon */}
                        <div className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-civic-blue/10 text-civic-blue group-hover:bg-civic-blue group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-civic-blue text-sm group-hover:text-civic-blue transition-colors">
                            {en ? category.titleEn : category.titleMr}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-1">
                            {en ? category.descriptionEn : category.descriptionMr}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-civic-blue transition-colors shrink-0" />
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
