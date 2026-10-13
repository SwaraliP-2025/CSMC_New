import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Download, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

type RecruitmentPost = {
  post: string;
  postMr: string;
  vacancies: number;
  lastDate: string;
  status: "Open" | "Closed";
  statusMr: string;
  repoId?: string;
};

const posts: RecruitmentPost[] = [];

const Recruitment = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Career" : "नोकरी"} title={en ? "Recruitment" : "भरती"}
        subtitle={en ? "Current job openings at Chhatrapati Sambhajinagar Municipal Corporation." : "छत्रपती संभाजीनगर महानगरपालिकेतील सध्याच्या रिक्त जागा."} />
      <section className="py-12 container">
        <ul className="flex flex-col gap-3 md:hidden">
          {posts.length === 0 ? (
            <li className="rounded-2xl border border-border bg-white p-4 text-center text-sm text-muted-foreground">
              {en ? "No openings are listed." : "सध्या कोणतीही रिक्त जागा यादीत नाही."}
            </li>
          ) : null}
          {posts.map((p) => (
            <li key={p.post} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <div className="flex items-start gap-2">
                <Briefcase className="h-4 w-4 text-civic-blue shrink-0 mt-0.5" aria-hidden />
                <p className="font-semibold text-civic-ink">{en ? p.post : p.postMr}</p>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{en ? "Vacancies" : "रिक्त जागा"}</dt>
                  <dd className="mt-1 font-bold text-civic-blue">{d(p.vacancies)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{en ? "Last Date" : "अंतिम तारीख"}</dt>
                  <dd className="mt-1 text-muted-foreground">{d(p.lastDate)}</dd>
                </div>
              </dl>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${p.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {en ? p.status : p.statusMr}
                </span>
                {p.status === "Open" ? (
                  "repoId" in p && p.repoId ? (
                    <Link
                      to={`/digital-repository/${p.repoId}`}
                      className="inline-flex min-h-11 items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-2 rounded-lg hover:bg-civic-blue hover:text-white transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" /> {en ? "View notice" : "सूचना पहा"}
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground">{en ? "Apply (unavailable)" : "अर्ज (अनुपलब्ध)"}</span>
                  )
                ) : (
                  <span className="text-xs text-muted-foreground">{en ? "Closed" : "बंद"}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="civic-table w-full text-sm">
            <thead className="bg-civic-blue text-white">
              <tr>
                <th className="px-5 py-3 text-left font-bold">{en ? "Post" : "पद"}</th>
                <th className="col-fit px-4 py-3 text-center font-bold">{en ? "Vacancies" : "रिक्त जागा"}</th>
                <th className="col-fit px-4 py-3 text-center font-bold">{en ? "Last Date" : "अंतिम तारीख"}</th>
                <th className="col-fit px-4 py-3 text-center font-bold">{en ? "Status" : "स्थिती"}</th>
                <th className="col-fit px-4 py-3 text-center font-bold">{en ? "Apply" : "अर्ज"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-muted-foreground">
                    {en ? "No openings are listed." : "सध्या कोणतीही रिक्त जागा यादीत नाही."}
                  </td>
                </tr>
              ) : null}
              {posts.map((p, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4 font-semibold text-civic-ink">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-civic-blue shrink-0" />
                      {en ? p.post : p.postMr}
                    </span>
                  </td>
                  <td className="col-fit px-4 py-4 text-center font-bold text-civic-blue">{d(p.vacancies)}</td>
                  <td className="col-fit px-4 py-4 text-center text-muted-foreground">{d(p.lastDate)}</td>
                  <td className="col-fit px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${p.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {en ? p.status : p.statusMr}
                    </span>
                  </td>
                  <td className="col-fit px-4 py-4 text-center">
                    {p.status === "Open" ? (
                      "repoId" in p && p.repoId ? (
                        <Link
                          to={`/digital-repository/${p.repoId}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-3 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors"
                        >
                          <Download className="h-3.5 w-3.5" /> {en ? "View notice" : "सूचना पहा"}
                        </Link>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground border border-border px-3 py-1.5 rounded-lg cursor-not-allowed"
                          title={en ? "Official apply link not available in this prototype" : "या नमुना आवृत्तीत अधिकृत अर्ज दुवा उपलब्ध नाही"}
                        >
                          {en ? "Apply (unavailable)" : "अर्ज (अनुपलब्ध)"}
                        </span>
                      )
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
