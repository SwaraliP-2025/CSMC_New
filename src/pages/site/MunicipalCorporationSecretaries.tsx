import { useState } from "react";
import { FileText } from "lucide-react";
import { InPagePdfPreview } from "@/components/site/InPagePdfPreview";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { SECRETARIES_FILE, SECRETARIES_FOLDER } from "@/data/municipalSecretaries";
import { publishedDocumentUrl, verifiedDriveFileId } from "@/lib/archiveDocuments";

const SECRETARIES_URL = publishedDocumentUrl([SECRETARIES_FOLDER, SECRETARIES_FILE]);

const MunicipalCorporationSecretaries = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [open, setOpen] = useState(true);
  const title = en ? "Municipal Corporation Secretaries" : "महानगरपालिका सचिवांची यादी";

  return (
    <Layout>
      <PageHeader eyebrow={en ? "About Us" : "आमच्याबद्दल"} title={title} />
      <section className="py-8 md:py-12 container">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-6">{title}</h1>
        {verifiedDriveFileId(SECRETARIES_URL) ? (
          <PdfFileActions href={SECRETARIES_URL} filename={SECRETARIES_FILE} title={title} />
        ) : open && (
          <div className="mb-4">
            <InPagePdfPreview
              title={title}
              fileUrl={SECRETARIES_URL}
              onClose={() => setOpen(false)}
              closeLabel={en ? "Close" : "बंद करा"}
              downloadLabel={en ? "Download" : "डाउनलोड"}
            />
          </div>
        )}
        {!verifiedDriveFileId(SECRETARIES_URL) && !open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-2 hover:bg-civic-blue hover:text-white transition-colors"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden />
            {en ? "View PDF" : "PDF पहा"}
          </button>
        )}
      </section>
    </Layout>
  );
};

export default MunicipalCorporationSecretaries;
