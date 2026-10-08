import { PdfFileActions } from "@/components/site/PdfFileActions";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import {
  dastavezDocuments,
  municipalDocumentUrl,
  policyDocuments,
  type MunicipalDocument,
} from "@/data/municipalDocuments";
import { useLang } from "@/i18n/LanguageContext";

function DocumentListPage({
  titleEn,
  titleMr,
  documents,
}: {
  titleEn: string;
  titleMr: string;
  documents: MunicipalDocument[];
}) {
  const { lang, d } = useLang();
  const en = lang === "en";
  const title = en ? titleEn : titleMr;
  const sr = en ? "Sr. No." : "अ. क्र.";
  const name = en ? "Name" : "नाव";
  const action = en ? "Action" : "कृती";
  const empty = en
    ? "No documents have been published in this section yet."
    : "या विभागात अद्याप कोणतेही दस्तऐवज प्रकाशित झालेले नाहीत.";

  return (
    <Layout>
      <PageHeader title={title} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">{title}</h1>
        {documents.length === 0 && (
          <p className="rounded-2xl border border-dashed border-border bg-white px-5 py-10 text-sm text-muted-foreground">{empty}</p>
        )}
        {documents.length > 0 && (
        <>
        <ul className="flex flex-col gap-3 md:hidden">
          {documents.map((doc, index) => {
            const docTitle = d(en ? doc.titleEn : doc.titleMr);
            const href = municipalDocumentUrl(doc);
            return (
              <li key={doc.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {sr} {d(index + 1)}
                </p>
                <p className="mt-1 font-semibold text-civic-ink leading-snug break-words">{docTitle}</p>
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
                <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {documents.map((doc, index) => {
                const docTitle = d(en ? doc.titleEn : doc.titleMr);
                const href = municipalDocumentUrl(doc);
                return (
                  <tr key={doc.id} className="hover:bg-muted/30 transition-colors">
                    <td className="col-fit px-4 py-3 text-center text-muted-foreground">{d(index + 1)}</td>
                    <td className="px-5 py-3 font-semibold text-civic-ink">{docTitle}</td>
                    <td className="col-fit px-4 py-3 text-center">
                      <PdfFileActions href={href} filename={doc.file} title={docTitle} className="justify-center" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </>
        )}
      </section>
    </Layout>
  );
}

export const DastavezPage = () => (
  <DocumentListPage titleEn="Dastavez" titleMr="दस्तऐवज" documents={dastavezDocuments} />
);

export const PoliciesGuidelinesPage = () => (
  <DocumentListPage
    titleEn="Policies & Guidelines"
    titleMr="धोरणे व मार्गदर्शक सूचना"
    documents={policyDocuments}
  />
);

export const PatrikaPage = () => (
  <DocumentListPage titleEn="Patrika" titleMr="पत्रिका" documents={[]} />
);

export const SamvaadPage = () => (
  <DocumentListPage titleEn="Samvaad" titleMr="संवाद" documents={[]} />
);

export const TenderNoticesPage = () => (
  <DocumentListPage titleEn="Tender Notices" titleMr="निविदा सूचना" documents={[]} />
);
