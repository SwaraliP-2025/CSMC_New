import { DocumentListingCard } from "@/components/site/DocumentListingCard";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { completedWorks, completedWorkUrl } from "@/data/completedWorks";
import { useLang } from "@/i18n/LanguageContext";
import { formatCivicDate } from "@/lib/unifiedSearch";

const CompletedWorks = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const title = en ? "List of Completed Works" : "पूर्ण झालेली कामे";
  const dateLabel = en ? "Date" : "दिनांक";

  return (
    <Layout>
      <PageHeader title={title} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">{title}</h1>
        <ul className="flex flex-col gap-3">
          {completedWorks.map((doc) => {
            const docTitle = d(en ? doc.titleEn : doc.titleMr);
            const href = completedWorkUrl(doc.file);
            return (
              <li key={doc.id}>
                <DocumentListingCard
                  title={docTitle}
                  meta={doc.date ? `${dateLabel}: ${formatCivicDate(doc.date, en)}` : undefined}
                  actions={<PdfFileActions href={href} filename={doc.file} title={docTitle} />}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default CompletedWorks;
