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
  const sr = en ? "Sr. No." : "अ. क्र.";
  const name = en ? "Name" : "नाव";
  const dateLabel = en ? "Date" : "दिनांक";
  const action = en ? "Action" : "कृती";

  return (
    <Layout>
      <PageHeader title={title} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">{title}</h1>

        <ul className="flex flex-col gap-3 md:hidden">
          {completedWorks.map((doc, index) => {
            const docTitle = d(en ? doc.titleEn : doc.titleMr);
            const href = completedWorkUrl(doc.file);
            const docDate = doc.date ? formatCivicDate(doc.date, en) : "";
            return (
              <li key={doc.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {sr} {d(index + 1)}
                </p>
                <p className="mt-1 font-semibold text-civic-ink leading-snug break-words">{docTitle}</p>
                {docDate && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {dateLabel}: {docDate}
                  </p>
                )}
                <PdfFileActions href={href} filename={doc.file} title={docTitle} className="mt-3" />
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="civic-table w-full text-sm" aria-label={title}>
            <thead className="bg-civic-blue text-white">
              <tr>
                <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{sr}</th>
                <th scope="col" className="px-5 py-3 text-left font-bold">{name}</th>
                <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{dateLabel}</th>
                <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {completedWorks.map((doc, index) => {
                const docTitle = d(en ? doc.titleEn : doc.titleMr);
                const href = completedWorkUrl(doc.file);
                return (
                  <tr key={doc.id} className="hover:bg-muted/30 transition-colors">
                    <td className="col-fit px-4 py-3 text-center text-muted-foreground">{d(index + 1)}</td>
                    <td className="px-5 py-3 font-semibold text-civic-ink">{docTitle}</td>
                    <td className="col-fit px-4 py-3 text-center text-muted-foreground">
                      {doc.date ? formatCivicDate(doc.date, en) : ""}
                    </td>
                    <td className="col-fit px-4 py-3 text-center">
                      <PdfFileActions href={href} filename={doc.file} title={docTitle} className="justify-center" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default CompletedWorks;
