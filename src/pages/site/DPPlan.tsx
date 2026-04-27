import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Download, MapPin, FileText } from "lucide-react";

const DPPlan = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Urban Planning" : "नगर नियोजन"}
        title={en ? "Development Plan" : "विकास आराखडा"}
        subtitle={en ? "Official Development Plan (DP) for Chhatrapati Sambhajinagar." : "छत्रपती संभाजीनगरसाठी अधिकृत विकास आराखडा (DP)."}
      />
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-civic-blue/5 border border-civic-blue/20 rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-3">{en ? "About Development Plan" : "विकास आराखड्याबद्दल"}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {en
                ? "The Development Plan is a statutory document prepared under the Maharashtra Regional and Town Planning Act, 1966. It guides the future growth and development of the city by designating land use zones, reservations, and road networks."
                : "विकास आराखडा हा महाराष्ट्र प्रादेशिक व नगर रचना अधिनियम, १९६६ अंतर्गत तयार केलेला वैधानिक दस्तऐवज आहे. हे भूमी वापर क्षेत्र, आरक्षणे आणि रस्ते नेटवर्क नियुक्त करून शहराच्या भविष्यातील वाढ आणि विकासाचे मार्गदर्शन करते."}
            </p>
          </div>
          <div className="bg-white border border-border rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-3">{en ? "Key Information" : "मुख्य माहिती"}</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-civic-blue shrink-0" />{en ? "Plan Period: 2015–2035" : "आराखडा कालावधी: २०१५–२०३५"}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-civic-blue shrink-0" />{en ? "Total Area: 138.48 sq.km" : "एकूण क्षेत्र: १३८.४८ चौ.कि.मी."}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-civic-blue shrink-0" />{en ? "Sanctioned by: Govt. of Maharashtra" : "मंजूर: महाराष्ट्र शासन"}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-civic-blue shrink-0" />{en ? "10 Zones, 120 Wards" : "१० झोन, १२० प्रभाग"}</li>
            </ul>
          </div>
        </div>

        <h2 className="font-serif text-xl font-bold text-civic-blue mb-5">{en ? "DP Documents" : "DP दस्तऐवज"}</h2>
        <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
          {[
            { title: "Development Plan Report 2015-35", titleMr: "विकास आराखडा अहवाल २०१५-३५", size: "12.4 MB" },
            { title: "Land Use Map – Zone 1 to 5", titleMr: "भूमी वापर नकाशा – झोन १ ते ५", size: "8.2 MB" },
            { title: "Land Use Map – Zone 6 to 10", titleMr: "भूमी वापर नकाशा – झोन ६ ते १०", size: "7.9 MB" },
            { title: "Road Network Plan", titleMr: "रस्ते नेटवर्क आराखडा", size: "5.1 MB" },
            { title: "Reservation List", titleMr: "आरक्षण यादी", size: "2.3 MB" },
            { title: "DP Amendment Notices", titleMr: "DP सुधारणा सूचना", size: "1.8 MB" },
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-civic-blue/10 flex items-center justify-center shrink-0 group-hover:bg-civic-blue transition-colors">
                <FileText className="h-5 w-5 text-civic-blue group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-civic-ink">{en ? d.title : d.titleMr}</p>
                <p className="text-xs text-muted-foreground">{d.size}</p>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-white hover:bg-civic-blue px-3 py-1.5 rounded-lg border border-civic-blue transition-all shrink-0">
                <Download className="h-3.5 w-3.5" /> PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default DPPlan;
