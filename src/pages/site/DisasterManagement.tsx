import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Phone, AlertTriangle, ShieldCheck, MapPin } from "lucide-react";

const contacts = [
  { name: "Fire Brigade Control Room", nameMr: "अग्निशमन नियंत्रण कक्ष", number: "101", available: "24×7" },
  { name: "CSMC Disaster Control Room", nameMr: "CSMC आपत्ती नियंत्रण कक्ष", number: "0240-2331731", available: "24×7" },
  { name: "Police Control Room", nameMr: "पोलीस नियंत्रण कक्ष", number: "100", available: "24×7" },
  { name: "Ambulance", nameMr: "रुग्णवाहिका", number: "108", available: "24×7" },
  { name: "Flood Control Room", nameMr: "पूर नियंत्रण कक्ष", number: "0240-2331733", available: "Monsoon" },
];

const tips = [
  { tip: "Keep emergency numbers saved on your phone.", tipMr: "आपत्कालीन क्रमांक आपल्या फोनवर जतन करा." },
  { tip: "Store 3 days of food and water supply at home.", tipMr: "घरी ३ दिवसांचा अन्न आणि पाण्याचा साठा ठेवा." },
  { tip: "Know your nearest evacuation center.", tipMr: "आपले जवळचे निर्वासन केंद्र जाणून घ्या." },
  { tip: "Do not venture near flooded areas.", tipMr: "पूरग्रस्त भागाजवळ जाऊ नका." },
  { tip: "Follow official CSMC announcements during emergencies.", tipMr: "आपत्कालीन परिस्थितीत CSMC च्या अधिकृत घोषणांचे पालन करा." },
];

const DisasterManagement = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Safety" : "सुरक्षा"} title={en ? "Disaster Management" : "आपत्ती व्यवस्थापन"}
        subtitle={en ? "Emergency contacts, preparedness tips and evacuation information." : "आपत्कालीन संपर्क, तयारीच्या टिप्स आणि निर्वासन माहिती."} />
      <section className="py-12 container">
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-10 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800 font-bold">
            {en ? "In case of emergency, call 101 (Fire) or 108 (Ambulance) immediately." : "आपत्कालीन परिस्थितीत, तत्काळ १०१ (अग्निशमन) किंवा १०८ (रुग्णवाहिका) वर कॉल करा."}
          </p>
        </div>

        <h2 className="font-serif text-xl font-bold text-civic-blue mb-5">{en ? "Emergency Contacts" : "आपत्कालीन संपर्क"}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {contacts.map((c, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-5 flex items-center gap-4 hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="font-bold text-civic-ink text-sm">{en ? c.name : c.nameMr}</p>
                <p className="text-2xl font-bold text-civic-red">{c.number}</p>
                <p className="text-xs text-muted-foreground">{c.available}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" /> {en ? "Preparedness Tips" : "तयारीच्या टिप्स"}
            </h2>
            <ul className="space-y-3">
              {tips.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-civic-blue text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                  {en ? t.tip : t.tipMr}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-5 flex items-center gap-2">
              <MapPin className="h-5 w-5" /> {en ? "Evacuation Centers" : "निर्वासन केंद्रे"}
            </h2>
            <div className="space-y-3">
              {["CSMC Community Hall, Zone 1", "Government School, Zone 3", "Sports Complex, Zone 5", "Municipal School, Zone 7", "Community Center, Zone 9"].map((c, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 text-sm">
                  <MapPin className="h-4 w-4 text-civic-blue shrink-0" />
                  <span className="text-civic-ink font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default DisasterManagement;
