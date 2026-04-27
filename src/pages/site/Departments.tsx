import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import {
  Trash2, Droplets, Lightbulb, TreePine, ShieldPlus, GraduationCap,
  Building2, Receipt, Truck, HeartPulse, Hammer, Bus
} from "lucide-react";

const Departments = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const items = [
    { Icon: Trash2, en: "Solid Waste Management", mr: "घनकचरा व्यवस्थापन" },
    { Icon: Droplets, en: "Water Supply", mr: "पाणी पुरवठा" },
    { Icon: Lightbulb, en: "Electrical & Street Lights", mr: "विद्युत व पथदिवे" },
    { Icon: TreePine, en: "Garden & Horticulture", mr: "उद्यान व उद्यानविद्या" },
    { Icon: ShieldPlus, en: "Fire & Emergency", mr: "अग्निशमन व आपत्कालीन" },
    { Icon: GraduationCap, en: "Education", mr: "शिक्षण" },
    { Icon: Building2, en: "Town Planning", mr: "नगर रचना" },
    { Icon: Receipt, en: "Tax & Revenue", mr: "कर व महसूल" },
    { Icon: Truck, en: "Transport & Roads", mr: "वाहतूक व रस्ते" },
    { Icon: HeartPulse, en: "Health & Sanitation", mr: "आरोग्य व स्वच्छता" },
    { Icon: Hammer, en: "Public Works", mr: "सार्वजनिक बांधकाम" },
    { Icon: Bus, en: "City Bus Service", mr: "शहर बस सेवा" },
  ];
  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Departments" : "विभाग"}
        subtitle={en ? "Our departments work in concert to keep the city clean, safe and progressing." : "स्वच्छ, सुरक्षित आणि प्रगतीशील शहरासाठी आमचे विभाग एकत्रितपणे कार्यरत आहेत."}
      />
      <section className="py-16 container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, en: e, mr }, i) => (
            <article key={i} className="group bg-white border border-border rounded-3xl p-8 hover:shadow-elegant hover:-translate-y-2 hover:border-civic-gold/20 transition-all">
              <div className="h-16 w-16 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold mb-6 group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-civic-blue mb-3">{en ? e : mr}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {en
                  ? "Citizen-facing services, project updates, contact details and grievance routing."
                  : "नागरिकांसाठी सेवा, प्रकल्प माहिती, संपर्क तपशील व तक्रार निवारण."}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Departments;