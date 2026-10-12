import { Link, Navigate, useParams } from "react-router-dom";
import { FolderOpen } from "lucide-react";
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
import { tenderNoticeFolder, tenderNoticeFolders } from "@/data/tenderNoticeFolders";
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

const folderLinkClass =
  "flex w-full min-w-0 items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4 text-left transition-colors hover:border-civic-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue sm:gap-4 sm:px-5";

export const TenderNoticesPage = () => {
  const { year } = useParams();
  const { lang, d } = useLang();
  const en = lang === "en";
  const folders = tenderNoticeFolders();
  const selected = year ? tenderNoticeFolder(year) : undefined;

  if (year && !selected) return <Navigate to="/tender-notices" replace />;

  const title = selected
    ? en
      ? selected.headingEn
      : selected.headingMr
    : en
      ? "Tender Notices"
      : "निविदा सूचना";

  return (
    <Layout>
      <PageHeader title={title} />
      <section className="container py-8 md:py-12">
        <h1 className="mb-6 font-serif text-2xl font-bold text-civic-blue md:text-3xl">{title}</h1>
        {selected ? (
          <>
            <Link to="/tender-notices" className="mb-6 inline-flex text-sm font-semibold text-civic-blue underline">
              {en ? "All tender notices" : "सर्व निविदा सूचना"}
            </Link>
            <DocumentArchiveBrowser documents={selected.documents} folderSegments={selected.folder} />
          </>
        ) : (
          <div className="flex flex-col gap-3">
            {folders.map((folder) => {
              const label = en ? folder.headingEn : folder.headingMr;
              const count = en
                ? `${folder.documents.length} documents`
                : `${d(folder.documents.length)} दस्तऐवज`;
              return (
                <Link key={folder.slug} to={`/tender-notices/${folder.slug}`} className={folderLinkClass}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-civic-blue/8 text-civic-blue">
                    <FolderOpen className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg font-bold leading-snug text-civic-blue">{label}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{count}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};
