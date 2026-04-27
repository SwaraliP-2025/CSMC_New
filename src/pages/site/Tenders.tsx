import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Tenders = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const rows = [
    { id: "CSMC/2026/142", title: en ? "Solid Waste Processing Facility — Phase II" : "घनकचरा प्रक्रिया केंद्र — टप्पा २", value: "₹ 84.5 Cr", close: "12 May 2026" },
    { id: "CSMC/2026/138", title: en ? "Smart LED Street Lighting Upgrade" : "स्मार्ट LED पथदिवे श्रेणीसुधारणा", value: "₹ 36.2 Cr", close: "30 Apr 2026" },
    { id: "CSMC/2026/131", title: en ? "Garden Maintenance — Zone 3" : "उद्यान देखभाल — झोन ३", value: "₹ 4.8 Cr", close: "25 Apr 2026" },
    { id: "CSMC/2026/128", title: en ? "City Bus Depot Civil Works" : "शहर बस डेपो नागरी कामे", value: "₹ 12.1 Cr", close: "22 Apr 2026" },
  ];
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Procurement" : "खरेदी"} title={t.nav.tenders} subtitle={en ? "All active e-tenders. Click to view details on the e-procurement portal." : "सर्व सक्रिय ई-निविदा. तपशीलासाठी ई-खरेदी पोर्टलवर पहा."} />
      <section className="py-16 container">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-elegant">
          <table className="w-full text-sm">
            <thead className="bg-gradient-heritage text-white">
              <tr>
                <th className="text-left px-8 py-6 font-bold uppercase tracking-widest text-xs">{en ? "Tender ID" : "निविदा क्र."}</th>
                <th className="text-left px-8 py-6 font-bold uppercase tracking-widest text-xs">{en ? "Title" : "शीर्षक"}</th>
                <th className="text-left px-8 py-6 font-bold uppercase tracking-widest text-xs">{en ? "Value" : "मूल्य"}</th>
                <th className="text-left px-8 py-6 font-bold uppercase tracking-widest text-xs">{en ? "Closes" : "अंतिम दिनांक"}</th>
                <th className="px-8 py-6"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className={`${i % 2 ? "bg-white" : "bg-civic-gold/5"} border-t border-border hover:bg-civic-gold/10 transition-colors group`}>
                  <td className="px-8 py-6 font-mono text-xs font-bold text-civic-blue">{r.id}</td>
                  <td className="px-8 py-6 font-bold text-civic-ink group-hover:text-civic-blue transition-colors">{r.title}</td>
                  <td className="px-8 py-6 text-muted-foreground font-medium">{r.value}</td>
                  <td className="px-8 py-6 text-muted-foreground font-medium">{r.close}</td>
                  <td className="px-8 py-6 text-right">
                    <Button asChild size="sm" variant="ghost" className="text-civic-blue hover:bg-civic-blue hover:text-white px-4 font-bold transition-all">
                      <a href="https://mahatenders.gov.in/nicgep/app" target="_blank" rel="noopener noreferrer">
                        {en ? "View" : "पहा"} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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

export default Tenders;