import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Landmark, Target, Eye, Award } from "lucide-react";
import muncorpPic from "@/assets/muncorp_pic.png";

const About = () => {
  const { t, lang } = useLang();
  const en = lang === "en";

  const cards = [
    { Icon: Target, t: en ? "Our Mission" : "आमचे ध्येय", d: en ? "Deliver transparent, citizen-first civic services that improve quality of life every single day." : "पारदर्शक व नागरिक-केंद्रित सेवा देऊन जीवनमान उंचावणे." },
    { Icon: Eye, t: en ? "Our Vision" : "आमचे स्वप्न", d: en ? "A model heritage city — clean, sustainable, inclusive and digitally empowered." : "स्वच्छ, शाश्वत, समावेशक व डिजिटल सक्षम वारसा शहर." },
    { Icon: Award, t: en ? "Our Values" : "आमची मूल्ये", d: en ? "Integrity, accountability, innovation and respect for our shared heritage." : "सचोटी, उत्तरदायित्व, नवोन्मेष आणि वारशाचा आदर." },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Our Story" : "आमच्याविषयी"}
        title={t.nav.about}
        subtitle={en ? "A historic city stewarded by a modern, citizen-first administration." : "आधुनिक, नागरिक-केंद्रित प्रशासनाद्वारे जतन केले जाणारे ऐतिहासिक शहर."}
      />

      {/* Building photo banner */}
      <div className="w-full overflow-hidden" style={{ maxHeight: "260px" }}>
        <img src={muncorpPic} alt="CSMC Main Building" className="w-full object-cover object-center" />
      </div>

      <section className="py-16 container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-civic-red mb-3">
            <Landmark className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold">{en ? "Heritage" : "वारसा"}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-civic-blue font-bold mb-6 leading-tight">{en ? "City of Gates, City of Tomorrow" : "गेट्सचे शहर, उद्याचे शहर"}</h2>
          <div className="h-1.5 w-20 bg-gradient-saffron rounded-full mb-8" />
          <p className="text-foreground/80 leading-relaxed text-lg mb-6">
            {en
              ? "Chhatrapati Sambhajinagar — formerly Aurangabad — is one of Maharashtra's most iconic cities. Renowned for the Bibi Ka Maqbara, the Ajanta and Ellora caves nearby, and 52 historic gates, the city blends Mughal grandeur with Maratha pride."
              : "छत्रपती संभाजीनगर — पूर्वीचे औरंगाबाद — महाराष्ट्रातील एक प्रतिष्ठित शहर. बीबी का मकबरा, अजिंठा-वेरूळ लेणी आणि ५२ ऐतिहासिक दरवाज्यांसाठी प्रसिद्ध हे शहर मुघल वैभव व मराठा अभिमान यांचा संगम आहे."}
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            {en
              ? "Today, the Municipal Corporation governs an urban area of over 17 lakh citizens, balancing conservation with smart-city development across 10 zones."
              : "आज महानगरपालिका १७ लाखांपेक्षा अधिक नागरिकांच्या शहरी क्षेत्राचे, १० प्रभागांत संवर्धन आणि स्मार्ट सिटी विकासाचा समतोल राखत प्रशासन करते."}
          </p>
        </div>
        <div className="grid gap-6">
          {cards.map(({ Icon, t: title, d }, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-8 hover:shadow-elegant transition-all flex gap-6 items-start group">
              <div className="h-14 w-14 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-civic-blue mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City in Numbers */}
      <section className="py-16 bg-gradient-heritage text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 heritage-pattern" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{t.stats.title}</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-civic-gold rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.statsItems.map((s, i) => (
              <div key={i} className="text-center group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <p className="font-serif text-4xl md:text-5xl font-bold text-civic-gold mb-2 tabular-nums">{s.v}</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;