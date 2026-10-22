import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { useLang } from "@/i18n/LanguageContext";
import { INFORMATION_TECHNOLOGY_DOCUMENT_GROUPS } from "@/data/informationTechnologyDocuments";

export function InformationTechnologyDocuments() {
  const { lang } = useLang();
  const en = lang === "en";

  if (INFORMATION_TECHNOLOGY_DOCUMENT_GROUPS.length === 0) return null;

  return (
    <section aria-labelledby="it-related-documents-heading" className="min-w-0 space-y-8">
      <h2 id="it-related-documents-heading" className="font-serif text-xl md:text-2xl font-bold text-civic-blue">
        {en ? "Related Documents" : "संबंधित दस्तऐवज"}
      </h2>
      {INFORMATION_TECHNOLOGY_DOCUMENT_GROUPS.map((group) => (
        <div key={group.id} className="min-w-0">
          <h3 className="font-serif text-lg font-bold text-civic-blue mb-3 break-words">
            {en ? group.headingEn : group.headingMr}
          </h3>
          <DocumentArchiveBrowser documents={group.documents} folderSegments={group.folderSegments} />
        </div>
      ))}
    </section>
  );
}
