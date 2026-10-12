import { DocumentListingCard } from "@/components/site/DocumentListingCard";
import { PdfFileActions } from "@/components/site/PdfFileActions";
import { EDUCATION_DOCUMENTS_FOLDER, educationDocuments } from "@/data/educationDocuments";
import { useLang } from "@/i18n/LanguageContext";
import { archiveNameMatches, publishedDocumentUrl } from "@/lib/archiveDocuments";

export function EducationDepartmentDocuments({ query = "" }: { query?: string }) {
  const { lang, d } = useLang();
  const en = lang === "en";
  const yearLabel = en ? "Year" : "वर्ष";
  const title = en ? "Education Department" : "शिक्षण विभाग";
  const documents = educationDocuments.filter((doc) => archiveNameMatches(doc.file, query));
  if (!documents.length) return null;

  return (
    <div className="min-w-0">
      <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">{title}</h3>
      <ul className="flex flex-col gap-3">
        {documents.map((doc) => {
          const href = publishedDocumentUrl([...EDUCATION_DOCUMENTS_FOLDER, doc.file]);
          return (
            <li key={doc.id}>
              <DocumentListingCard
                title={doc.file}
                meta={`${yearLabel}: ${doc.year ? d(doc.year) : "—"}`}
                actions={<PdfFileActions href={href} filename={doc.file} title={doc.file} />}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
