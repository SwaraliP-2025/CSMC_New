import { ExternalLink } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { censusItems } from "@/data/census2026";
import { useLang } from "@/i18n/LanguageContext";

const Census2026 = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const title = en ? "Census 2026-27" : "जनगणना २०२६-२७";
  const sr = en ? "Sr.No." : "अ. क्र.";
  const name = en ? "Name" : "नाव";
  const file = en ? "File" : "फाईल";
  const openLabel = en ? "Click here" : "येथे क्लिक करा";

  return (
    <Layout>
      <PageHeader title={title} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">{title}</h1>

        <ul className="flex flex-col gap-3 md:hidden">
          {censusItems.map((item) => {
            const itemName = en ? item.nameEn : item.nameMr;
            return (
              <li key={item.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {sr} {d(item.id)}
                </p>
                <p className="mt-1 font-semibold text-civic-ink leading-snug" lang={en ? "en" : "mr"}>
                  {itemName}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${openLabel}: ${itemName}`}
                  className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-2 rounded-lg hover:bg-civic-blue hover:text-white transition-colors"
                >
                  {openLabel}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
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
                <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{file}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {censusItems.map((item) => {
                const itemName = en ? item.nameEn : item.nameMr;
                return (
                  <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                    <td className="col-fit px-4 py-3 text-center text-muted-foreground">{d(item.id)}</td>
                    <td className="px-5 py-3 font-semibold text-civic-ink" lang={en ? "en" : "mr"}>{itemName}</td>
                    <td className="col-fit px-4 py-3 text-center">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${openLabel}: ${itemName}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors"
                      >
                        {openLabel}
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
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

export default Census2026;
