import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { OFFICIAL } from "@/data/officialLinks";
import { Plane, Train, Bus, MapPin, ExternalLink } from "lucide-react";

const HowToReach = () => {
  const { lang } = useLang();
  const en = lang === "en";

  const modes = [
    {
      icon: Plane,
      titleEn: "By Air",
      titleMr: "विमानाने",
      bodyEn:
        "Chhatrapati Sambhaji Maharaj Airport (Aurangabad) connects the city to major Indian metros. Taxis and app cabs are available from the airport to the city centre (~10 km).",
      bodyMr:
        "छत्रपती संभाजी महाराज विमानतळ (औरंगाबाद) शहराला प्रमुख महानगरांशी जोडतो. विमानतळापासून शहर केंद्रापर्यंत (~१० किमी) टॅक्सी व ॲप कॅब उपलब्ध.",
      href: OFFICIAL.airport,
    },
    {
      icon: Train,
      titleEn: "By Rail",
      titleMr: "रेल्वेने",
      bodyEn:
        "Chhatrapati Sambhajinagar Railway Station is well connected on the South Central / Central Railway network. Local autos and buses serve the station area.",
      bodyMr:
        "छत्रपती संभाजीनगर रेल्वे स्थानक दक्षिण मध्य / मध्य रेल्वे जाळ्याशी जोडलेले आहे. स्थानक परिसरात ऑटो व बस सेवा उपलब्ध.",
      href: OFFICIAL.railway,
    },
    {
      icon: Bus,
      titleEn: "By Road / Bus",
      titleMr: "रस्त्याने / बसने",
      bodyEn:
        "MSRTC and private buses connect the city to Mumbai, Pune, Nashik, Jalgaon and other centres. Within the city, use municipal / Chalo public transport information.",
      bodyMr:
        "एमएसआरटीसी व खाजगी बस मुंबई, पुणे, नाशिक, जळगाव व इतर केंद्रांशी जोडतात. शहरात महापालिका / चलो सार्वजनिक परिवहन माहिती वापरा.",
      href: OFFICIAL.chalo,
    },
    {
      icon: MapPin,
      titleEn: "Municipal Office",
      titleMr: "महापालिका कार्यालय",
      bodyEn:
        "CSMC Main Building, Town Hall, behind Head Post Office, Chhatrapati Sambhajinagar, Maharashtra 431001.",
      bodyMr:
        "CSMC मुख्य इमारत, टाऊन हॉल, हेड पोस्ट ऑफिसच्या मागे, छत्रपती संभाजीनगर, महाराष्ट्र ४३१००१.",
      href: OFFICIAL.cityMaps,
    },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "City guide" : "शहर मार्गदर्शक"}
        title={en ? "How to Reach Chhatrapati Sambhajinagar" : "छत्रपती संभाजीनगर कसे पोहोचावे"}
        subtitle={
          en
            ? "Travel options and municipal location for citizens and visitors."
            : "नागरिक व पर्यटकांसाठी प्रवास पर्याय व महापालिका स्थान."
        }
      />
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-5">
          {modes.map((m) => (
            <a
              key={m.titleEn}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-elegant hover:border-civic-gold/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 rounded-xl bg-civic-blue/10 text-civic-blue grid place-items-center">
                  <m.icon className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-lg font-bold text-civic-blue group-hover:text-civic-red transition-colors">
                  {en ? m.titleEn : m.titleMr}
                </h2>
                <ExternalLink className="h-3.5 w-3.5 ml-auto text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {en ? m.bodyEn : m.bodyMr}
              </p>
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-8">
          {en
            ? "Map links open Google Maps / official transport pages. Always verify live schedules with the operator."
            : "नकाशा दुवे Google Maps / अधिकृत परिवहन पृष्ठे उघडतात. थेट वेळापत्रक ऑपरेटरकडे पडताळा."}
        </p>
      </section>
    </Layout>
  );
};

export default HowToReach;
