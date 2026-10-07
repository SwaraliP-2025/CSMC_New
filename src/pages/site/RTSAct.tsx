import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { InPagePdfPreview } from "@/components/site/InPagePdfPreview";
import { useLang } from "@/i18n/LanguageContext";
import { OFFICIAL } from "@/data/officialLinks";
import {
  RTS_DOCUMENTS,
  RTS_NOTIFIED_SERVICES_URL,
  rtsDocumentUrl,
} from "@/data/rtsDocuments";
import { formatCivicDate } from "@/lib/unifiedSearch";
import {
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Scale,
} from "lucide-react";

const services = [
  {
    service: "Birth Certificate",
    serviceMr: "जन्म प्रमाणपत्र",
    days: 7,
    feeEn: "₹70–₹150",
    feeMr: "₹70–₹150",
    feeNoteEn:
      "Within 30 days: ₹70; within 1 year: ₹100; after 1 year: ₹150",
    feeNoteMr:
      "३० दिवसांत: ₹७०; १ वर्षात: ₹१००; १ वर्षानंतर: ₹१५०",
    apply: OFFICIAL.birthCertificate,
  },
  {
    service: "Death Certificate",
    serviceMr: "मृत्यू प्रमाणपत्र",
    days: 7,
    feeEn: "₹70–₹150",
    feeMr: "₹70–₹150",
    feeNoteEn:
      "Within 30 days: ₹70; within 1 year: ₹100; after 1 year: ₹150",
    feeNoteMr:
      "३० दिवसांत: ₹७०; १ वर्षात: ₹१००; १ वर्षानंतर: ₹१५०",
    apply: OFFICIAL.deathCertificate,
  },
  {
    service: "Trade License (New)",
    serviceMr: "व्यापार परवाना (नवीन)",
    days: 30,
    feeEn: "As per trade type",
    feeMr: "व्यापार प्रकारानुसार",
    apply: OFFICIAL.tradeLicenseNew,
  },
  {
    service: "Trade License (Renewal)",
    serviceMr: "व्यापार परवाना (नूतनीकरण)",
    days: 15,
    feeEn: "As per trade type",
    feeMr: "व्यापार प्रकारानुसार",
    apply: OFFICIAL.tradeLicenseRenewal,
  },
  {
    service: "Building Permission",
    serviceMr: "बांधकाम परवानगी",
    days: 60,
    feeEn: "As per area",
    feeMr: "क्षेत्रफळानुसार",
    apply: OFFICIAL.buildingPermissionRts,
  },
  {
    service: "Water Connection",
    serviceMr: "पाणी जोडणी",
    days: 30,
    feeEn: "As applicable",
    feeMr: "लागू शुल्कानुसार",
    apply: OFFICIAL.waterConnectionNew,
  },
  {
    service: "Property Tax Assessment",
    serviceMr: "मालमत्ता कर मूल्यांकन",
    days: 30,
    feeEn: "Free",
    feeMr: "निःशुल्क",
    apply: OFFICIAL.propertyTaxAssessment,
  },
  {
    service: "Grievance Redressal",
    serviceMr: "तक्रार निवारण",
    days: 7,
    feeEn: "Free",
    feeMr: "निःशुल्क",
    apply: OFFICIAL.complaintForm,
  },
];

const RTSAct = () => {
  const { lang, d } = useLang();
  const en = lang === "en";

  const [openDocId, setOpenDocId] = useState<string | null>(null);

  const openDoc =
    RTS_DOCUMENTS.find((doc) => doc.id === openDocId) ?? null;

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Citizen Rights" : "नागरिक हक्क"}
        title={en ? "Right to Service" : "सेवा हक्क"}
        subtitle={
          en
            ? "Notified civic services, prescribed time limits, and the official Right to Public Services documents."
            : "अधिसूचित नागरी सेवा, विहित कालमर्यादा आणि लोकसेवा हक्काची अधिकृत कागदपत्रे."
        }
      />

      <section className="py-10 md:py-12 container space-y-10">

        {/* Citizen entitlement */}
        <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-4 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />

          <p
            className="text-sm text-green-800 font-medium"
            lang={en ? "en" : "mr"}
          >
            {en
              ? "Under the Maharashtra Right to Public Services Act, 2015, citizens are entitled to receive notified services within the prescribed time. If an eligible citizen does not receive a service within the prescribed time or it is denied without proper reasons, the Act provides a mechanism for appeal."
              : "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ अंतर्गत नागरिकांना अधिसूचित सेवा विहित वेळेत मिळण्याचा अधिकार आहे. पात्र नागरिकाला विहित वेळेत सेवा न मिळाल्यास किंवा योग्य कारणाशिवाय सेवा नाकारल्यास या अधिनियमांतर्गत अपील करण्याची तरतूद आहे."}
          </p>
        </div>

        {/* RTS Documents */}
        <div>
          <h2 className="font-serif text-xl font-bold text-civic-blue mb-2">
            {en ? "RTS documents" : "RTS कागदपत्रे"}
          </h2>

          <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
            {en
              ? "Official Act, rules, gazettes and the municipal office order. Open a document here to read it on this page."
              : "अधिकृत अधिनियम, नियम, राजपत्रे आणि महापालिकेचा कार्यालयीन आदेश. कागदपत्र याच पानावर वाचण्यासाठी उघडा."}
          </p>

          {openDoc && (
            <div className="mb-5">
              <InPagePdfPreview
                title={en ? openDoc.titleEn : openDoc.titleMr}
                fileUrl={rtsDocumentUrl(openDoc.file)}
                onClose={() => setOpenDocId(null)}
                closeLabel={en ? "Close" : "बंद करा"}
                downloadLabel={en ? "Download" : "डाउनलोड"}
              />
            </div>
          )}

          <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {RTS_DOCUMENTS.map((doc) => {
              const title = en ? doc.titleEn : doc.titleMr;
              const type = en ? doc.typeEn : doc.typeMr;
              const fileUrl = rtsDocumentUrl(doc.file);

              return (
                <li
                  key={doc.id}
                  className="bg-white border border-border rounded-2xl p-4 flex flex-col gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-civic-blue/10 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-civic-blue" />
                    </div>

                    <div className="min-w-0">
                      <button
                        type="button"
                        onClick={() => setOpenDocId(doc.id)}
                        className="text-left text-sm font-semibold text-civic-ink hover:text-civic-blue transition-colors"
                      >
                        {title}
                      </button>

                      <p className="text-xs text-muted-foreground mt-1 break-all">
                        {doc.file}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {type && (
                          <span className="text-[10px] font-bold uppercase tracking-wide text-civic-blue bg-civic-blue/10 px-2 py-0.5 rounded-full">
                            {type}
                          </span>
                        )}

                        {doc.date && (
                          <span className="text-xs text-muted-foreground">
                            {formatCivicDate(doc.date, en)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setOpenDocId(doc.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue/90 transition-colors"
                    >
                      {en ? "View document" : "कागदपत्र पहा"}
                    </button>

                    <a
                      href={fileUrl}
                      download
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-3 py-1.5 hover:bg-civic-blue hover:text-white transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      {en ? "Download" : "डाउनलोड"}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Act overview */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-xl font-bold text-civic-blue mb-3">
            {en
              ? "Maharashtra Right to Public Services Act"
              : "महाराष्ट्र लोकसेवा हक्क अधिनियम"}
          </h2>

          <p className="text-sm text-foreground/80 leading-relaxed">
            {en
              ? "The Maharashtra Right to Public Services Act, 2015 provides notified services of the Government and public authorities to citizens of Maharashtra in a transparent manner and within the prescribed time. It came into force on 28 April 2015. Its objective is to deliver these services in an easy and time-bound way."
              : "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ अन्वये शासन व सार्वजनिक प्राधिकरणांच्या अधिसूचित सेवा महाराष्ट्र राज्यातील नागरिकांना पारदर्शक पद्धतीने व विहित वेळेत दिल्या जातात. हा अधिनियम २८ एप्रिल २०१५ पासून अंमलात आला आहे. सुलभ व कालबद्ध सेवा देणे हा त्याचा उद्देश आहे."}
          </p>
        </div>

        {/* Commission + appeal mechanism */}
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="h-5 w-5 text-civic-blue" />

              <h2 className="font-serif text-xl font-bold text-civic-blue">
                {en
                  ? "Maharashtra State Right to Public Services Commission"
                  : "महाराष्ट्र राज्य लोकसेवा हक्क आयोग"}
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {en
                ? "The Maharashtra State Right to Public Services Commission is constituted under the Act to monitor whether notified services are being provided, and to coordinate, control and suggest improvements. The Commission has a Chief Commissioner and six Commissioners. Its headquarters is at the New Administrative Building, opposite Mantralaya, Mumbai. The Commissioners’ offices are at the headquarters of the six divisions."
                : "अधिसूचित सेवा दिल्या जात आहेत की नाही याचे परीक्षण करणे, समन्वय, नियंत्रण आणि सुधारणांच्या सूचना देणे यासाठी या अधिनियमाखाली महाराष्ट्र राज्य लोकसेवा हक्क आयोग स्थापन करण्यात आला आहे. आयोगात मुख्य आयुक्त आणि सहा आयुक्त आहेत. आयोगाचे मुख्यालय मंत्रालयासमोरच्या नवीन प्रशासन इमारतीत, मुंबई येथे आहे. आयुक्तांची कार्यालये सहा विभागांच्या मुख्यालयात आहेत."}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {en
                ? "If an eligible citizen does not receive a notified service within the prescribed time, or it is denied without proper reasons, a first appeal and a second appeal may be filed with the concerned superiors. If still not satisfied, a third appeal may be filed with the Commission. A defaulting officer may be fined up to ₹5,000 per case."
                : "पात्र नागरिकाला विहित वेळेत अधिसूचित सेवा न मिळाल्यास, किंवा योग्य कारणाशिवाय सेवा नाकारल्यास, संबंधित वरिष्ठांकडे प्रथम अपील व द्वितीय अपील दाखल करता येते. तरीही समाधान न झाल्यास आयोगाकडे तिसरे अपील दाखल करता येते. दोषी अधिकाऱ्यावर प्रति प्रकरण ₹५,००० पर्यंत दंड होऊ शकतो."}
            </p>
          </div>

          <ol className="lg:col-span-2 grid gap-3 content-start">
            {[
              {
                en: "First appeal",
                mr: "प्रथम अपील",
                dEn: "Before the concerned superior.",
                dMr: "संबंधित वरिष्ठाकडे.",
              },
              {
                en: "Second appeal",
                mr: "द्वितीय अपील",
                dEn: "Before the concerned superiors.",
                dMr: "संबंधित वरिष्ठांकडे.",
              },
              {
                en: "Third appeal",
                mr: "तिसरे अपील",
                dEn: "Before the Commission, if still not satisfied.",
                dMr: "तरीही समाधान न झाल्यास आयोगाकडे.",
              },
            ].map((step, index) => (
              <li
                key={step.en}
                className="bg-civic-blue/[0.04] border border-civic-blue/15 rounded-2xl px-4 py-3"
              >
                <p className="text-[10px] font-bold uppercase tracking-wide text-civic-red">
                  {en ? `Step ${index + 1}` : `टप्पा ${index + 1}`}
                </p>

                <p className="font-semibold text-sm text-civic-ink mt-0.5">
                  {en ? step.en : step.mr}
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                  {en ? step.dEn : step.dMr}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Official RTS links */}
        <div>
          <h2 className="font-serif text-xl font-bold text-civic-blue mb-4">
            {en ? "Official RTS links" : "अधिकृत RTS दुवे"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={OFFICIAL.aapleSarkar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 bg-white border border-border rounded-2xl px-4 py-4 hover:border-civic-blue/40 hover:shadow-sm transition-all"
            >
              <span>
                <span className="block text-sm font-bold text-civic-ink">
                  {en
                    ? "Maharashtra State Right to Service Commission website"
                    : "महाराष्ट्र राज्य सेवा हक्क आयोग संकेतस्थळ"}
                </span>

                <span className="block text-xs text-muted-foreground mt-1 break-all">
                  aaplesarkar.mahaonline.gov.in
                </span>
              </span>

              <ExternalLink className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" />
            </a>

            <a
              href={RTS_NOTIFIED_SERVICES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 bg-white border border-border rounded-2xl px-4 py-4 hover:border-civic-blue/40 hover:shadow-sm transition-all"
            >
              <span>
                <span className="block text-sm font-bold text-civic-ink">
                  {en
                    ? "List of services notified under the Right to Public Services Act"
                    : "लोकसेवा हक्क अधिनियमाखाली अधिसूचित सेवांची यादी"}
                </span>

                <span className="block text-xs text-muted-foreground mt-1">
                  Aaple Sarkar
                </span>
              </span>

              <ExternalLink className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" />
            </a>
          </div>
        </div>

        {/* CSMC notified services */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
            <h2 className="font-serif text-2xl font-bold text-civic-blue">
              {en ? "CSMC notified services" : "CSMC अधिसूचित सेवा"}
            </h2>

            <p className="text-xs text-muted-foreground">
              {en
                ? "Time limit, fee and where to apply."
                : "कालमर्यादा, शुल्क आणि अर्ज कुठे करावा."}
            </p>
          </div>

          <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-civic-blue text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-bold">
                    {en ? "Service" : "सेवा"}
                  </th>

                  <th className="px-5 py-3 text-center font-bold">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {en ? "Time Limit" : "वेळमर्यादा"}
                  </th>

                  <th className="px-5 py-3 text-center font-bold">
                    {en ? "Fee" : "शुल्क"}
                  </th>

                  <th className="px-5 py-3 text-center font-bold">
                    {en ? "Apply" : "अर्ज"}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border bg-white">
                {services.map((s) => (
                  <tr
                    key={s.service}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-5 py-3 font-semibold text-civic-ink">
                      {en ? s.service : s.serviceMr}
                    </td>

                    <td className="px-5 py-3 text-center">
                      <span className="bg-civic-blue/10 text-civic-blue font-bold px-2 py-0.5 rounded text-xs">
                        {d(s.days)} {en ? "days" : "दिवस"}
                      </span>
                    </td>

                    <td className="px-5 py-3 text-center text-muted-foreground">
                      <span title={en ? s.feeNoteEn : s.feeNoteMr}>
                        {d(en ? s.feeEn : s.feeMr)}
                      </span>
                    </td>

                    <td className="px-5 py-3 text-center">
                      <a
                        href={s.apply}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors"
                      >
                        {en ? "Apply" : "अर्ज करा"}
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="md:hidden flex flex-col gap-3">
            {services.map((s) => (
              <li
                key={s.service}
                className="rounded-2xl border border-border bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-civic-ink">
                  {en ? s.service : s.serviceMr}
                </p>

                <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                      {en ? "Time Limit" : "वेळमर्यादा"}
                    </dt>

                    <dd className="mt-1">
                      <span className="bg-civic-blue/10 text-civic-blue font-bold px-2 py-0.5 rounded text-xs">
                        {d(s.days)} {en ? "days" : "दिवस"}
                      </span>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                      {en ? "Fee" : "शुल्क"}
                    </dt>

                    <dd
                      className="mt-1 text-muted-foreground"
                      title={en ? s.feeNoteEn : s.feeNoteMr}
                    >
                      {d(en ? s.feeEn : s.feeMr)}
                    </dd>
                  </div>
                </dl>

                <a
                  href={s.apply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-2 rounded-lg hover:bg-civic-blue hover:text-white transition-colors"
                >
                  {en ? "Apply" : "अर्ज करा"}
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>

          <p
            className="text-xs text-muted-foreground mt-4"
            lang={en ? "en" : "mr"}
          >
            {en
              ? "Birth and death certificates: ₹70 within 30 days, ₹100 within 1 year, ₹150 after 1 year. Trade licence fees vary by business type as per the official RTS rate chart. Apply opens the official CSMC / RTS form."
              : "जन्म व मृत्यू प्रमाणपत्र: ३० दिवसांत ₹७०, १ वर्षात ₹१००, १ वर्षानंतर ₹१५०. व्यापार परवाना शुल्क अधिकृत RTS दर तक्त्यानुसार व्यवसाय प्रकारावर अवलंबून आहे. अर्ज अधिकृत CSMC / RTS फॉर्म उघडतो."}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default RTSAct;
