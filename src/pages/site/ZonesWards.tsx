import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Phone, Users } from "lucide-react";

const zones = [
  { no: 1, name: "Zone 1 – Cidco", nameMr: "झोन १ – सिडको", wards: 12, office: "Cidco N-1, Aurangabad", phone: "0240-2481001", population: "1.8L" },
  { no: 2, name: "Zone 2 – Mukundwadi", nameMr: "झोन २ – मुकुंदवाडी", wards: 12, office: "Mukundwadi, Aurangabad", phone: "0240-2482001", population: "1.6L" },
  { no: 3, name: "Zone 3 – Garkheda", nameMr: "झोन ३ – गारखेडा", wards: 12, office: "Garkheda, Aurangabad", phone: "0240-2483001", population: "1.7L" },
  { no: 4, name: "Zone 4 – Cantonment", nameMr: "झोन ४ – कँटोन्मेंट", wards: 12, office: "Cantonment Area", phone: "0240-2484001", population: "1.5L" },
  { no: 5, name: "Zone 5 – City", nameMr: "झोन ५ – शहर", wards: 12, office: "Town Hall, Aurangabad", phone: "0240-2485001", population: "2.0L" },
  { no: 6, name: "Zone 6 – Osmanpura", nameMr: "झोन ६ – उस्मानपुरा", wards: 12, office: "Osmanpura, Aurangabad", phone: "0240-2486001", population: "1.9L" },
  { no: 7, name: "Zone 7 – Satara", nameMr: "झोन ७ – सातारा", wards: 12, office: "Satara Road, Aurangabad", phone: "0240-2487001", population: "1.6L" },
  { no: 8, name: "Zone 8 – Harsul", nameMr: "झोन ८ – हर्सूल", wards: 12, office: "Harsul, Aurangabad", phone: "0240-2488001", population: "1.4L" },
  { no: 9, name: "Zone 9 – Waluj", nameMr: "झोन ९ – वाळूज", wards: 12, office: "Waluj MIDC, Aurangabad", phone: "0240-2489001", population: "1.5L" },
  { no: 10, name: "Zone 10 – Chikalthana", nameMr: "झोन १० – चिकलठाणा", wards: 12, office: "Chikalthana, Aurangabad", phone: "0240-2490001", population: "1.5L" },
];

const ZonesWards = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Administration" : "प्रशासन"} title={en ? "Zones & Wards" : "झोन / प्रभाग"}
        subtitle={en ? "CSMC is divided into 10 administrative zones with 120 wards." : "CSMC १० प्रशासकीय झोन आणि १२० प्रभागांमध्ये विभागली आहे."} />
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-5">
          {zones.map(z => (
            <div key={z.no} className="bg-white border border-border rounded-2xl p-5 hover:shadow-elegant transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-civic-blue text-white flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-civic-gold group-hover:text-civic-ink transition-colors">
                  {z.no}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-civic-blue text-base mb-2">{en ? z.name : z.nameMr}</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {z.wards} {en ? "Wards" : "प्रभाग"}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {z.population} {en ? "Population" : "लोकसंख्या"}</span>
                    <span className="flex items-center gap-1 col-span-2"><MapPin className="h-3 w-3" /> {z.office}</span>
                    <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {z.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default ZonesWards;
