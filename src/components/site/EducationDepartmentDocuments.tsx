import { PdfFileActions } from "@/components/site/PdfFileActions";
import { EDUCATION_DOCUMENTS_FOLDER, educationDocuments } from "@/data/educationDocuments";
import { useLang } from "@/i18n/LanguageContext";
import { publicDocumentUrl } from "@/lib/archiveDocuments";

export function EducationDepartmentDocuments() {
  const { lang, d } = useLang();
  const en = lang === "en";
  const nameLabel = en ? "Name" : "नाव";
  const yearLabel = en ? "Year" : "वर्ष";
  const pdfLabel = "PDF";
  const title = en ? "Education Department" : "शिक्षण विभाग";

  return (
    <div className="min-w-0">
      <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">{title}</h3>
      <ul className="flex flex-col gap-3 md:hidden">
        {educationDocuments.map((doc) => {
          const href = publicDocumentUrl([...EDUCATION_DOCUMENTS_FOLDER, doc.file]);
          return (
            <li key={doc.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <p className="font-semibold text-civic-ink leading-snug break-words">{doc.file}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {yearLabel}: {doc.year ? d(doc.year) : "—"}
              </p>
              <PdfFileActions href={href} filename={doc.file} title={doc.file} className="mt-3" />
            </li>
          );
        })}
      </ul>
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="civic-table w-full text-sm" aria-label={title}>
          <thead className="bg-civic-blue text-white">
            <tr>
              <th scope="col" className="px-5 py-3 text-left font-bold">{nameLabel}</th>
              <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{yearLabel}</th>
              <th scope="col" className="col-fit px-4 py-3 text-center font-bold">{pdfLabel}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {educationDocuments.map((doc) => {
              const href = publicDocumentUrl([...EDUCATION_DOCUMENTS_FOLDER, doc.file]);
              return (
                <tr key={doc.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-semibold text-civic-ink break-words">{doc.file}</td>
                  <td className="col-fit px-4 py-3 text-center text-muted-foreground">
                    {doc.year ? d(doc.year) : "—"}
                  </td>
                  <td className="col-fit px-4 py-3 text-center">
                    <PdfFileActions href={href} filename={doc.file} title={doc.file} className="justify-center" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
