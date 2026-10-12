import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { DocumentListingCard } from "@/components/site/DocumentListingCard";
import { InPagePdfPreview } from "@/components/site/InPagePdfPreview";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { OFFICIAL } from "@/data/officialLinks";
import { RTI_OFFICERS_FOLDER, RTI_FOLDER, rtiDocumentUrl, rtiDocuments } from "@/data/rtiDocuments";
import { publishedDocumentUrl, verifiedDriveFileId } from "@/lib/archiveDocuments";
import { useLang } from "@/i18n/LanguageContext";
import { ExternalLink, FileText } from "lucide-react";

const RTI_OFFICERS_FILE = "RTI_Order.pdf";
const RTI_OFFICERS_URL = publishedDocumentUrl([RTI_FOLDER, RTI_OFFICERS_FOLDER, RTI_OFFICERS_FILE]);

const RTIAct = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [officersOpen, setOfficersOpen] = useState(false);
  const officersTitle = en ? "RTI Officers List" : "माहिती अधिकार अधिकारी यादी";
  const yearLabel = en ? "Year" : "वर्ष";
  const documentsLabel = en ? "Department-wise RTI Documents" : "विभागनिहाय माहिती अधिकार दस्तऐवज";

  return (
    <Layout>
      <PageHeader title={en ? "Right to Information Act" : "माहिती अधिकार अधिनियम"} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">
          {en ? "Right to Information Act" : "माहिती अधिकार अधिनियम"}
        </h1>

        <div className="mb-10">
          <a
            href={OFFICIAL.onlineRti}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-civic-blue text-white text-sm font-bold hover:bg-civic-blue/90 transition-colors"
          >
            {en ? "Apply for RTI" : "RTI साठी अर्ज करा"}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mb-10">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-civic-blue mb-4">{officersTitle}</h2>
          <DocumentListingCard
            title={officersTitle}
            actions={
              verifiedDriveFileId(RTI_OFFICERS_URL) ? (
                <PdfFileActions href={RTI_OFFICERS_URL} filename={RTI_OFFICERS_FILE} title={officersTitle} />
              ) : (
                <button
                  type="button"
                  onClick={() => setOfficersOpen(true)}
                  className="inline-flex min-h-11 md:min-h-0 items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-2 md:py-1.5 hover:bg-civic-blue hover:text-white transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden />
                  {en ? "View PDF" : "PDF पहा"}
                </button>
              )
            }
          />
          {!verifiedDriveFileId(RTI_OFFICERS_URL) && officersOpen && (
            <div className="mt-4">
              <InPagePdfPreview
                title={officersTitle}
                fileUrl={RTI_OFFICERS_URL}
                onClose={() => setOfficersOpen(false)}
                closeLabel={en ? "Close" : "बंद करा"}
                downloadLabel={en ? "Download" : "डाउनलोड"}
              />
            </div>
          )}
        </div>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-civic-blue mb-5">{documentsLabel}</h2>

        <ul className="flex flex-col gap-3">
          {rtiDocuments.map((doc) => {
            const name = d(en ? doc.departmentName : doc.departmentNameMr);
            const year = doc.year ? d(doc.year) : "—";
            return (
              <li key={doc.id}>
                <DocumentListingCard
                  title={name}
                  meta={`${yearLabel}: ${year}`}
                  actions={<PdfFileActions href={rtiDocumentUrl(doc.fileName)} filename={doc.fileName} title={name} />}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default RTIAct;
