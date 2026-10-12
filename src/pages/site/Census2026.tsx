import { ExternalLink } from "lucide-react";
import { DocumentListingCard, documentActionClass } from "@/components/site/DocumentListingCard";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { censusItems } from "@/data/census2026";
import { useLang } from "@/i18n/LanguageContext";

const Census2026 = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const title = en ? "Census 2026-27" : "जनगणना २०२६-२७";
  const sr = en ? "Sr.No." : "अ. क्र.";
  const openLabel = en ? "Click here" : "येथे क्लिक करा";

  return (
    <Layout>
      <PageHeader title={title} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">{title}</h1>
        <ul className="flex flex-col gap-3">
          {censusItems.map((item) => {
            const itemName = en ? item.nameEn : item.nameMr;
            return (
              <li key={item.id}>
                <DocumentListingCard
                  title={itemName}
                  kind="DOC"
                  meta={`${sr} ${d(item.id)}`}
                  actions={
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${openLabel}: ${itemName}`}
                      className={`${documentActionClass} text-civic-blue border border-civic-blue hover:bg-civic-blue hover:text-white`}
                    >
                      {openLabel}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  }
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default Census2026;
