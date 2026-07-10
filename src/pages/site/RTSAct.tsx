import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { CheckCircle2, Clock } from "lucide-react";

const services = [
  { service: "Birth Certificate", serviceMr: "जन्म प्रमाणपत्र", days: 7, fee: "₹50" },
  { service: "Death Certificate", serviceMr: "मृत्यू प्रमाणपत्र", days: 7, fee: "₹50" },
  { service: "Trade License (New)", serviceMr: "व्यापार परवाना (नवीन)", days: 30, fee: "₹500+" },
  { service: "Trade License (Renewal)", serviceMr: "व्यापार परवाना (नूतनीकरण)", days: 15, fee: "₹300+" },
  { service: "Building Permission", serviceMr: "बांधकाम परवानगी", days: 60, fee: "As per area" },
  { service: "Water Connection", serviceMr: "पाणी जोडणी", days: 30, fee: "₹2000+" },
  { service: "Property Tax Assessment", serviceMr: "मालमत्ता कर मूल्यांकन", days: 30, fee: "Free" },
  { service: "Grievance Redressal", serviceMr: "तक्रार निवारण", days: 7, fee: "Free" },
];

const RTSAct = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Citizen Rights" : "नागरिक हक्क"} title={en ? "Right to Services Act" : "लोकसेवा हक्क अधिनियम"}
        subtitle={en ? "Guaranteed timelines for civic services under Maharashtra RTS Act, 2015." : "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ अंतर्गत नागरी सेवांसाठी हमी वेळमर्यादा."} />
      <section className="py-12 container">
        <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-4 mb-8 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-sm text-green-800 font-medium" lang={en ? "en" : "mr"}>
            {en ? "Under the Maharashtra Right to Services Act, 2015, citizens are entitled to receive designated services within the specified time limit. Failure to do so entitles the citizen to compensation."
              : "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ अंतर्गत नागरिकांना निर्धारित वेळमर्यादेत नामनिर्देशित सेवा मिळण्याचा हक्क आहे. असे न झाल्यास नागरिकाला नुकसानभरपाई मिळण्याचा अधिकार आहे."}
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-civic-blue text-white">
              <tr>
                <th className="px-5 py-3 text-left font-bold">{en ? "Service" : "सेवा"}</th>
                <th className="px-5 py-3 text-center font-bold"><Clock className="h-4 w-4 inline mr-1" />{en ? "Time Limit" : "वेळमर्यादा"}</th>
                <th className="px-5 py-3 text-center font-bold">{en ? "Fee" : "शुल्क"}</th>
                <th className="px-5 py-3 text-center font-bold">{en ? "Apply" : "अर्ज"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {services.map((s, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-semibold text-civic-ink">{en ? s.service : s.serviceMr}</td>
                  <td className="px-5 py-3 text-center">
                    <span className="bg-civic-blue/10 text-civic-blue font-bold px-2 py-0.5 rounded text-xs">{s.days} {en ? "days" : "दिवस"}</span>
                  </td>
                  <td className="px-5 py-3 text-center text-muted-foreground">{s.fee}</td>
                  <td className="px-5 py-3 text-center">
                    <a href="https://rts.chhsambhajinagarmc.org/links/dashboard" target="_blank" rel="noopener noreferrer"
                      className="text-xs font-bold text-civic-blue border border-civic-blue px-3 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors">
                      {en ? "Apply" : "अर्ज करा"}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};
export default RTSAct;
