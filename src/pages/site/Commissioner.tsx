import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Phone, Mail, MapPin, Quote } from "lucide-react";
import amolSir from "@/assets/leadership/shri_amol_sir.png";

const Commissioner = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const t = translations[lang];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Hon'ble Municipal Commissioner" : "मा. महानगरपालिका आयुक्त"}
        subtitle={en ? "From the Desk of the Municipal Commissioner" : "महानगरपालिका आयुक्तांच्या कार्यालयातून"}
      />

      <section className="py-16 container">
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* Profile card */}
          <div className="md:col-span-1">
            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-civic-blue to-civic-blue/80 p-8 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-4">
                  <img src={amolSir} alt="Shri Amol Yedage" className="w-full h-full object-cover" />
                </div>
                <h2 className="font-serif text-xl font-bold text-white mb-1">{en ? t.commissioner.name : t.commissioner.nameMarathi}</h2>
                <p className="text-civic-gold text-sm font-semibold">
                  {en ? "Municipal Commissioner & Administrator" : "महानगरपालिका आयुक्त व प्रशासक"}
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">{en ? "Office Phone" : "कार्यालय दूरध्वनी"}</p>
                    <p className="font-semibold text-civic-ink">0240-2331731</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">{en ? "Email" : "ईमेल"}</p>
                    <p className="font-semibold text-civic-ink break-all">commissioner@csmc.gov.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">{en ? "Office Address" : "कार्यालय पत्ता"}</p>
                    <p className="font-semibold text-civic-ink leading-snug">
                      {en
                        ? "CSMC Main Building, Town Hall, Behind Head Post Office, Chhatrapati Sambhajinagar – 431001"
                        : "छत्रपती संभाजीनगर महानगरपालिका मुख्य इमारत, टाऊन हॉल, हेड पोस्ट ऑफिसच्या मागे, छत्रपती संभाजीनगर – ४३१००१"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-civic-gold/10 text-civic-gold text-xs font-bold uppercase tracking-widest">
              <Quote className="h-3.5 w-3.5" />
              {en ? "Message from the Commissioner" : "आयुक्तांचा संदेश"}
            </div>
            <h3 className="font-serif text-2xl md:text-4xl text-civic-blue font-bold leading-tight">
              {en
                ? "Serving the citizens with transparency, accountability and care"
                : "पारदर्शकता, उत्तरदायित्व आणि आपुलकीने नागरिकांची सेवा"}
            </h3>
            <div className="h-1.5 w-20 bg-gradient-saffron rounded-full" />
            <div className="space-y-4 text-foreground/80 leading-relaxed text-base">
              <p className="pl-6 border-l-4 border-civic-gold/40 italic">
                {en
                  ? "\"Chhatrapati Sambhajinagar is a city where centuries of heritage meet modern aspiration. Our administration is committed to delivering responsive, technology-driven civic services that make daily life simpler for every resident.\""
                  : "\"छत्रपती संभाजीनगर हे शतकानुशतकांचा वारसा आणि आधुनिक आकांक्षा यांचा संगम असलेले शहर आहे. तंत्रज्ञानाधारित, प्रतिसादात्मक नागरी सेवा देण्यासाठी आमचे प्रशासन कटिबद्ध आहे.\""}
              </p>
              <p>
                {en
                  ? "Under the Smart City Mission, we are actively upgrading civic infrastructure — from intelligent traffic management and LED street lighting to digital grievance redressal and real-time project monitoring. Our goal is to make every citizen interaction with the Corporation seamless, transparent and dignified."
                  : "स्मार्ट सिटी मिशन अंतर्गत आम्ही नागरी पायाभूत सुविधांचे सक्रियपणे उन्नयन करत आहोत — बुद्धिमान वाहतूक व्यवस्थापन, एलईडी पथदिवे, डिजिटल तक्रार निवारण आणि रिअल-टाइम प्रकल्प देखरेख. प्रत्येक नागरिकाचा महानगरपालिकेशी संवाद सुलभ, पारदर्शक आणि सन्मानजनक व्हावा हे आमचे ध्येय आहे."}
              </p>
              <p>
                {en
                  ? "I invite every citizen to actively participate in governance — through our grievance portal, public consultations, and the My Smart Nagarik App. Together, we are shaping a model city — clean, inclusive and ready for tomorrow."
                  : "मी प्रत्येक नागरिकाला प्रशासनात सक्रियपणे सहभागी होण्याचे आमंत्रण देतो — आमच्या तक्रार पोर्टल, सार्वजनिक सल्लामसलत आणि माय स्मार्ट नागरिक  ॲपद्वारे. एकत्रितपणे आपण एक आदर्श शहर घडवत आहोत — स्वच्छ, समावेशक आणि उद्यासाठी सज्ज."}
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-serif text-lg font-bold text-civic-blue">{en ? t.commissioner.name : t.commissioner.nameMarathi}</p>
              <p className="text-sm text-muted-foreground font-medium">
                {en ? "Municipal Commissioner, CSMC" : "महानगरपालिका आयुक्त, छत्रपती संभाजीनगर महानगरपालिका"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commissioner;
