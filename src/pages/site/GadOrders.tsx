import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { useLang } from "@/i18n/LanguageContext";
import { GAD_ORDERS_FOLDER, gadOrdersDocuments } from "@/data/officialPublicAdditions";

export default function GadOrders() {
  const { lang, d } = useLang();
  const en = lang === "en";
  const title = en ? "GAD Orders and Circulars" : "सामान्य प्रशासन — आदेश व परिपत्रके";

  return (
    <Layout>
      <PageHeader eyebrow={en ? "Publications" : "प्रकाशने"} title={title} />
      <section className="container py-8 md:py-12">
        <h1 className="mb-2 font-serif text-2xl font-bold text-civic-blue md:text-3xl">{title}</h1>
        <p className="mb-6 max-w-3xl text-sm text-muted-foreground">
          {en
            ? "Orders and circulars issued by the General Administration Department of the Chhatrapati Sambhajinagar Municipal Corporation."
            : "छत्रपती संभाजीनगर महानगरपालिकेच्या सामान्य प्रशासन विभागाने जारी केलेले आदेश व परिपत्रके."}
        </p>
        <p className="mb-4 text-sm text-muted-foreground">
          {en ? `${gadOrdersDocuments.length} documents` : `${d(gadOrdersDocuments.length)} दस्तऐवज`}
        </p>
        <DocumentArchiveBrowser documents={gadOrdersDocuments} folderSegments={[...GAD_ORDERS_FOLDER]} />
      </section>
    </Layout>
  );
}
