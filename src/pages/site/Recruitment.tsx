import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Download, Calendar, Briefcase } from "lucide-react";

const posts = [
  { post: "Junior Engineer (Civil)", postMr: "कनिष्ठ अभियंता (स्थापत्य)", vacancies: 12, lastDate: "30 May 2026", status: "Open", statusMr: "खुली" },
  { post: "Health Inspector", postMr: "आरोग्य निरीक्षक", vacancies: 8, lastDate: "25 May 2026", status: "Open", statusMr: "खुली" },
  { post: "Tax Inspector", postMr: "कर निरीक्षक", vacancies: 15, lastDate: "20 May 2026", status: "Closed", statusMr: "बंद" },
  { post: "Clerk (Grade III)", postMr: "लिपिक (श्रेणी III)", vacancies: 30, lastDate: "15 Jun 2026", status: "Open", statusMr: "खुली" },
  { post: "Electrician", postMr: "विद्युत तंत्रज्ञ", vacancies: 6, lastDate: "10 Jun 2026", status: "Open", statusMr: "खुली" },
  { post: "Sanitation Worker", postMr: "स्वच्छता कर्मचारी", vacancies: 50, lastDate: "5 Jun 2026", status: "Open", statusMr: "खुली" },
];

const Recruitment = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Career" : "करिअर"} title={en ? "Recruitment" : "भरती पृष्ठ"}
        subtitle={en ? "Current job openings at Chhatrapati Sambhajinagar Municipal Corporation." : "छत्रपती संभाजीनगर महानगरपालिकेतील सध्याच्या रिक्त जागा."} />
      <section className="py-12 container">
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 flex items-start gap-3">
          <Calendar className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 font-medium">
            {en ? "All applications must be submitted online through the official portal. Physical applications will not be accepted." : "सर्व अर्ज अधिकृत पोर्टलद्वारे ऑनलाइन सादर करणे आवश्यक आहे. प्रत्यक्ष अर्ज स्वीकारले जाणार नाहीत."}
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-civic-blue text-white">
              <tr>
                <th className="px-5 py-3 text-left font-bold">{en ? "Post" : "पद"}</th>
                <th className="px-5 py-3 text-center font-bold">{en ? "Vacancies" : "रिक्त जागा"}</th>
                <th className="px-5 py-3 text-center font-bold">{en ? "Last Date" : "अंतिम तारीख"}</th>
                <th className="px-5 py-3 text-center font-bold">{en ? "Status" : "स्थिती"}</th>
                <th className="px-5 py-3 text-center font-bold">{en ? "Apply" : "अर्ज"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {posts.map((p, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4 font-semibold text-civic-ink flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-civic-blue shrink-0" />
                    {en ? p.post : p.postMr}
                  </td>
                  <td className="px-5 py-4 text-center font-bold text-civic-blue">{p.vacancies}</td>
                  <td className="px-5 py-4 text-center text-muted-foreground">{p.lastDate}</td>
                  <td className="px-5 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${p.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {en ? p.status : p.statusMr}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    {p.status === "Open" ? (
                      <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors">
                        <Download className="h-3.5 w-3.5" /> {en ? "Apply" : "अर्ज करा"}
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground">{en ? "Closed" : "बंद"}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};
export default Recruitment;
