import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Notices = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const list = [
    { date: "22 Apr 2026", tag: en ? "Notice" : "सूचना", title: en ? "Property tax 10% rebate window extended till 30 May 2026." : "मालमत्ता कर १०% सवलत ३० मे २०२६ पर्यंत वाढवली." },
    { date: "18 Apr 2026", tag: en ? "Tender" : "निविदा", title: en ? "E-tender invited for SWM Phase II processing facility." : "घनकचरा प्रकल्प टप्पा-२ साठी ई-निविदा." },
    { date: "12 Apr 2026", tag: en ? "Event" : "कार्यक्रम", title: en ? "City-wide tree plantation drive on World Environment Day." : "जागतिक पर्यावरण दिनी शहर वृक्षारोपण मोहीम." },
    { date: "05 Apr 2026", tag: en ? "Update" : "अद्यतन", title: en ? "New trade licence renewal portal goes live." : "नवीन व्यापार परवाना नूतनीकरण पोर्टल कार्यान्वित." },
    { date: "29 Mar 2026", tag: en ? "Recruitment" : "भरती", title: en ? "Engagement of 240 sanitation supervisors — applications open." : "२४० स्वच्छता पर्यवेक्षकांच्या नियुक्तीसाठी अर्ज खुले." },
    { date: "20 Mar 2026", tag: en ? "Notice" : "सूचना", title: en ? "Ward-wise water supply schedule for summer 2026 published." : "उन्हाळा २०२६ साठी प्रभागनिहाय पाणी पुरवठा वेळापत्रक." },
  ];
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Press & PR" : "प्रसिद्धी"} title={t.notices.title} subtitle={en ? "Official announcements, circulars and notices." : "अधिकृत घोषणा, परिपत्रके व सूचना."} />
      <section className="py-16 container">
        <div className="space-y-6">
          {list.map((n, i) => (
            <article key={i} className="group bg-white border border-border rounded-3xl p-6 md:p-8 hover:shadow-elegant hover:border-civic-gold/20 transition-all flex gap-8 items-center">
              <div className="shrink-0 grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm">
                <Calendar className="h-7 w-7 md:h-9 md:w-9" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-civic-red/10 text-civic-red">{n.tag}</span>
                  <span className="text-xs font-medium text-muted-foreground">{n.date}</span>
                </div>
                <p className="text-base md:text-xl font-bold text-civic-ink group-hover:text-civic-blue transition-colors leading-tight">{n.title}</p>
              </div>
              <Button size="lg" variant="ghost" className="shrink-0 text-civic-blue hover:bg-civic-blue/5 px-4 h-12">
                <Download className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline font-bold">Download PDF</span>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Notices;