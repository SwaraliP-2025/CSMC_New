import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { useLang } from "@/i18n/LanguageContext";
import { ELECTION_INSIGHTS_ROOT, electionInsightCategories, electionInsightCategory } from "@/data/electionInsights";

export default function ElectionInsights() {
  const { categoryId } = useParams();
  const { lang, d } = useLang();
  const en = lang === "en";
  const category = electionInsightCategory(categoryId);

  if (categoryId && !category) return <Navigate to="/election-insights" replace />;

  const title = category ? (en ? category.titleEn : category.titleMr) : en ? "Election Insights" : "निवडणूक माहिती";

  return (
    <Layout>
      <PageHeader eyebrow={en ? "Publications" : "प्रकाशने"} title={title} />
      <section className="container py-8 md:py-12">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-6">
          {category
            ? en
              ? `${category.files.length} documents`
              : `${d(category.files.length)} दस्तऐवज`
            : en
              ? "Election department records, maps, and voter lists"
              : "निवडणूक विभाग, नकाशे आणि मतदार याद्या"}
        </p>
        {category ? (
          <>
            <Link to="/election-insights" className="text-sm font-medium text-civic-blue underline">
              {en ? "All election categories" : "सर्व निवडणूक प्रकार"}
            </Link>
            <div className="mt-4">
              <DocumentArchiveBrowser
                documents={category.files}
                folderSegments={[ELECTION_INSIGHTS_ROOT, category.folder]}
              />
            </div>
          </>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {electionInsightCategories.map((item) => (
              <Link
                key={item.id}
                to={`/election-insights/${item.id}`}
                className="rounded-2xl border border-border bg-white p-5 hover:border-civic-blue transition-colors"
              >
                <h2 className="font-serif text-lg text-civic-blue">{en ? item.titleEn : item.titleMr}</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {en ? `${item.files.length} documents` : `${d(item.files.length)} दस्तऐवज`}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
