import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Search } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { SERVICE_ENTRIES } from "@/data/officialLinks";

const Services = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return SERVICE_ENTRIES;
    return SERVICE_ENTRIES.filter((item) =>
      [
        item.titleEn,
        item.titleMr,
        item.purposeEn,
        item.purposeMr,
        item.categoryEn,
        item.categoryMr,
      ]
        .join(" ")
        .toLowerCase()
        .includes(s)
    );
  }, [q]);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Online" : "ऑनलाइन"}
        title={en ? "Citizen Services" : "नागरिक सेवा"}
        subtitle={
          en
            ? "Discover services with purpose, eligibility, documents, fees and timelines. Transactions complete on official government portals."
            : "उद्देश, पात्रता, दस्तऐवज, शुल्क व कालमर्यादेसह सेवा शोधा. व्यवहार अधिकृत शासन पोर्टलवर पूर्ण होतात."
        }
      />
      <section className="py-16 container">
        <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white mb-8 max-w-xl focus-within:ring-2 focus-within:ring-civic-blue/30">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={en ? "Search services…" : "सेवा शोधा…"}
            className="text-sm bg-transparent outline-none flex-1"
            aria-label={en ? "Search services" : "सेवा शोधा"}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const open = openId === s.id;
            const ctaClass =
              "self-start inline-flex items-center gap-2 text-xs font-bold text-civic-blue border border-civic-blue rounded-lg px-4 py-2 hover:bg-civic-blue hover:text-white transition-all";
            const ctaLabel = en
              ? s.external
                ? "Open official service"
                : "View information"
              : s.external
                ? "अधिकृत सेवा उघडा"
                : "माहिती पहा";
            return (
              <article
                key={s.id}
                className="bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-elegant hover:border-civic-blue/20 transition-all"
              >
                <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-civic-red/10 text-civic-red self-start mb-3">
                  {en ? s.categoryEn : s.categoryMr}
                </span>
                <h3 className="font-serif text-xl font-bold text-civic-blue mb-2">{en ? s.titleEn : s.titleMr}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1 leading-relaxed">
                  {en ? s.purposeEn : s.purposeMr}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : s.id)}
                  className="text-left text-xs font-bold text-civic-blue mb-3 hover:underline"
                  aria-expanded={open}
                >
                  {open
                    ? en
                      ? "Hide details"
                      : "तपशील लपवा"
                    : en
                      ? "Eligibility, documents, fees & timeline"
                      : "पात्रता, दस्तऐवज, शुल्क व कालमर्यादा"}
                </button>
                {open && (
                  <dl className="text-xs space-y-2 mb-4 border-t border-border pt-3">
                    <div>
                      <dt className="font-bold text-civic-ink uppercase tracking-wide">
                        {en ? "Eligibility" : "पात्रता"}
                      </dt>
                      <dd className="text-muted-foreground mt-0.5">{en ? s.eligibilityEn : s.eligibilityMr}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-civic-ink uppercase tracking-wide">
                        {en ? "Documents" : "दस्तऐवज"}
                      </dt>
                      <dd className="text-muted-foreground mt-0.5">{en ? s.documentsEn : s.documentsMr}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-civic-ink uppercase tracking-wide">{en ? "Fees" : "शुल्क"}</dt>
                      <dd className="text-muted-foreground mt-0.5">{en ? s.feesEn : s.feesMr}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-civic-ink uppercase tracking-wide">
                        {en ? "Timeline" : "कालमर्यादा"}
                      </dt>
                      <dd className="text-muted-foreground mt-0.5">{en ? s.timelineEn : s.timelineMr}</dd>
                    </div>
                  </dl>
                )}
                {s.external ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className={ctaClass}>
                    {ctaLabel} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link to={s.url} className={ctaClass}>
                    {ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-12">
            {en ? "No matching services." : "जुळणाऱ्या सेवा नाहीत."}
          </p>
        )}
      </section>
    </Layout>
  );
};

export default Services;
