import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Online" : "ऑनलाइन"}
        title={t.nav.services}
        subtitle={en ? "Apply, pay and track every civic service from one place." : "एकाच ठिकाणाहून प्रत्येक नागरी सेवा अर्ज करा, भरा व मागोवा घ्या."}
      />
      <section className="py-16 container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.quick.items.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-elegant hover:border-civic-blue/20 hover:-translate-y-1 transition-all group"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-civic-red/10 text-civic-red self-start mb-4">
                {en ? "Online" : "ऑनलाइन"}
              </span>
              <h3 className="font-serif text-xl font-bold text-civic-blue mb-3 group-hover:text-civic-red transition-colors">{s.t}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{s.d}</p>
              <span className="self-start flex items-center gap-2 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-4 py-2 group-hover:bg-civic-blue group-hover:text-white transition-all">
                {en ? "Apply now" : "अर्ज करा"} <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
