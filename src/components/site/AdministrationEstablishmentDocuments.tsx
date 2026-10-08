import { DocumentArchiveBrowser } from "@/components/site/DocumentArchiveBrowser";
import { administrationEstablishmentEntries } from "@/data/administrationEstablishmentDocuments";
import { useLang } from "@/i18n/LanguageContext";

export function AdministrationEstablishmentDocuments() {
  const { lang, d } = useLang();
  const en = lang === "en";

  return (
    <div className="min-w-0 space-y-8">
      <h3 className="font-serif text-lg font-bold text-civic-blue">
        {en ? "Administration and Establishment" : "प्रशासन व आस्थापना"}
      </h3>
      {administrationEstablishmentEntries.map((category) => (
        <div key={category.id} id={category.id} className="min-w-0 scroll-mt-24">
          <h4 className="font-serif text-base font-bold text-civic-blue mb-3">
            {category.id === "general-administration-documents"
              ? en
                ? "General Administration Documents"
                : "सामान्य प्रशासन दस्तऐवज"
              : category.folder}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            {en ? `${category.files.length} documents` : `${d(category.files.length)} दस्तऐवज`}
          </p>
          <DocumentArchiveBrowser documents={category.files} folderSegments={category.folderSegments} />
        </div>
      ))}
    </div>
  );
}
