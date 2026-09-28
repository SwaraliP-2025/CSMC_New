import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { OrganogramChart } from "@/components/site/OrganogramChart";
import { useLang } from "@/i18n/LanguageContext";
import { getPublishedOrganogram } from "@/lib/organogram";

const Organization = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const people = getPublishedOrganogram();
  const additional = people.filter((person) =>
    /additional commissioner/i.test(person.designation),
  ).length;
  const deputies = people.filter((person) =>
    /deputy municipal commissioner/i.test(person.designation),
  ).length;
  const stats = [
    { v: "1", l: en ? "Municipal Commissioner" : "महानगरपालिका आयुक्त" },
    { v: String(additional), l: en ? "Additional Commissioners" : "अतिरिक्त आयुक्त" },
    { v: String(deputies), l: en ? "Deputy Commissioners" : "उप आयुक्त" },
    { v: String(people.length), l: en ? "Officers shown" : "दर्शविलेले अधिकारी" },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "CSMC Organization Structure" : "महानगरपालिका संघटनात्मक रचना"}
        subtitle={
          en
            ? "Organizational structure of Chhatrapati Sambhajinagar Municipal Corporation."
            : "छत्रपती संभाजीनगर महानगरपालिकेची संघटनात्मक रचना."
        }
      />
      <section className="mx-auto w-full max-w-[1760px] px-4 py-10 sm:px-6" aria-labelledby="organogram-heading">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="bg-civic-blue px-6 py-4">
            <h2 id="organogram-heading" className="font-serif text-lg font-bold text-white">
              {en ? "CSMC Organization Structure" : "महानगरपालिका संघटनात्मक रचना"}
            </h2>
          </div>
          <OrganogramChart />
        </div>

        <ul className="container mt-8 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.l} className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="font-serif text-3xl font-bold text-civic-gold">{d(stat.v)}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{stat.l}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Organization;
