import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Vote, Users, FileText, ExternalLink } from "lucide-react";

const Elections = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Democracy" : "लोकशाही"} title={en ? "Elections" : "निवडणूक"}
        subtitle={en ? "Voter registration, ward information and election notices." : "मतदार नोंदणी, प्रभाग माहिती आणि निवडणूक सूचना."} />
      <section className="py-12 container">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { Icon: Vote, title: en ? "Check Voter List" : "मतदार यादी तपासा", desc: en ? "Search your name in the electoral roll" : "मतदार यादीत आपले नाव शोधा", link: "https://electoralsearch.eci.gov.in/", label: en ? "Search Now" : "शोधा" },
            { Icon: Users, title: en ? "Voter Registration" : "मतदार नोंदणी", desc: en ? "Register as a new voter or update details" : "नवीन मतदार म्हणून नोंदणी करा किंवा तपशील अद्यतनित करा", link: "https://voters.eci.gov.in/", label: en ? "Register" : "नोंदणी करा" },
            { Icon: FileText, title: en ? "Election Notices" : "निवडणूक सूचना", desc: en ? "Official notices and schedules" : "अधिकृत सूचना आणि वेळापत्रक", link: "#", label: en ? "View" : "पहा" },
          ].map(({ Icon, title, desc, link, label }, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-6 hover:shadow-elegant transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-civic-blue/10 flex items-center justify-center mb-4 group-hover:bg-civic-blue transition-colors">
                <Icon className="h-7 w-7 text-civic-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-civic-blue mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <a href={link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-civic-blue border border-civic-blue px-4 py-2 rounded-lg hover:bg-civic-blue hover:text-white transition-colors">
                {label} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-civic-blue/5 border border-civic-blue/20 rounded-2xl p-6">
          <h2 className="font-serif text-xl font-bold text-civic-blue mb-4">{en ? "Ward Information" : "प्रभाग माहिती"}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {en ? "Chhatrapati Sambhajinagar Municipal Corporation is divided into 10 zones with 120 wards. Each ward has an elected corporator who represents the citizens."
              : "छत्रपती संभाजीनगर महानगरपालिका १० झोन आणि १२० प्रभागांमध्ये विभागली आहे. प्रत्येक प्रभागात एक निवडून आलेला नगरसेवक असतो जो नागरिकांचे प्रतिनिधित्व करतो."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-white border border-border rounded-xl px-4 py-3 text-center">
                <p className="font-bold text-civic-blue text-lg">{en ? `Zone ${i + 1}` : `झोन ${i + 1}`}</p>
                <p className="text-xs text-muted-foreground">{en ? "12 Wards" : "१२ प्रभाग"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Elections;
