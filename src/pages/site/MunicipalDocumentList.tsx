import { DocumentListingCard } from "@/components/site/DocumentListingCard";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import {
  dastavezDocuments,
  municipalDocumentUrl,
  policyDocuments,
  type MunicipalDocument,
} from "@/data/municipalDocuments";
import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { officialAnnouncementFolder, officialTenderNoticeDocuments } from "@/data/officialPublicAdditions";
import { tenderArchiveGroups } from "@/data/officialLinkedDocuments";
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
          <ul className="flex flex-col gap-3">
            {documents.map((doc, index) => {
              const docTitle = d(en ? doc.titleEn : doc.titleMr);
              const href = municipalDocumentUrl(doc);
              return (
                <li key={doc.id}>
                  <DocumentListingCard
                    title={docTitle}
                    meta={`${sr} ${d(index + 1)}`}
                    actions={<PdfFileActions href={href} filename={doc.file} title={docTitle} />}
                  />
                </li>
              );
            })}
          </ul>
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

export const TenderNoticesPage = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader title={en ? "Tender Notices" : "निविदा सूचना"} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">
          {en ? "Tender Notices" : "निविदा सूचना"}
        </h1>
        <DocumentArchiveBrowser documents={officialTenderNoticeDocuments} folderSegments={[...officialAnnouncementFolder]} />
        {tenderArchiveGroups.map((group) => (
          <div className="min-w-0 mt-10" key={group.headingEn}>
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-3">{en ? group.headingEn : group.headingMr}</h2>
            <DocumentArchiveBrowser documents={group.documents} folderSegments={group.folder} />
          </div>
        ))}
      </section>
    </Layout>
  );
};
