import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLang } from "@/i18n/LanguageContext";
import type { FacilityCategoryDef } from "@/lib/facilities";

export const FacilityCategoryCard = ({ category }: { category: FacilityCategoryDef }) => {
  const { lang, t } = useLang();
  const en = lang === "en";
  const Icon = category.icon;

  return (
    <Card className="group border-border hover:border-civic-blue/20 hover:shadow-elegant transition-all rounded-3xl overflow-hidden">
      <div className="p-6 bg-white">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-civic-blue/10 text-civic-blue mb-5 transition-colors group-hover:bg-civic-blue group-hover:text-white">
          <Icon className="h-7 w-7" aria-hidden />
        </div>
        <h3 className="font-serif text-xl font-bold text-civic-blue mb-3">
          {en ? category.titleEn : category.titleMr}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {en ? category.descriptionEn : category.descriptionMr}
        </p>
      </div>
      <div className="p-6 pt-0 bg-slate-50">
        <Link
          to={`/public-facilities/${category.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
        >
          {t.facilities.viewAll} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Card>
  );
};
