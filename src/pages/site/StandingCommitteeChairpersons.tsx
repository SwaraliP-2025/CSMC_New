import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { STANDING_COMMITTEE_CHAIRPERSONS } from "@/data/standingCommitteeChairpersons";
import { User } from "lucide-react";

const Avatar = ({ src, name, size = "md" }: { src: string | null; name: string; size?: "sm" | "md" }) => {
  const cls = size === "sm"
    ? "w-12 h-12 rounded-full object-cover object-top border-2 border-civic-blue/20 shadow"
    : "w-14 h-14 rounded-full object-cover object-top border-2 border-civic-blue/20 mx-auto shadow";
  const ph = size === "sm"
    ? "w-12 h-12 rounded-full bg-civic-gold/15 border-2 border-dashed border-civic-blue/25 flex items-center justify-center"
    : "w-14 h-14 rounded-full bg-civic-gold/15 border-2 border-dashed border-civic-blue/25 flex items-center justify-center mx-auto";
  if (src) return <img src={src} alt={name} className={cls} />;
  return (
    <div className={ph} title="Photo placeholder">
      <User className="h-5 w-5 text-civic-blue/35" aria-hidden />
    </div>
  );
};

const StandingCommitteeChairpersons = () => {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Standing Committee" : "स्थायी समिती"}
        title={en ? "Standing Committee Chairpersons" : "स्थायी समिती सभापती"}
      />
      <section className="py-12 container max-w-5xl">
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="civic-table w-full text-sm">
            <thead>
              <tr className="bg-civic-blue text-white">
                <th className="px-4 py-4 text-left font-bold">{en ? "Name" : "नाव"}</th>
                <th className="px-4 py-4 text-left font-bold">{en ? "Committee Name" : "समितीचे नाव"}</th>
                <th className="col-fit px-4 py-4 text-center font-bold">{en ? "Photo" : "फोटो"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {STANDING_COMMITTEE_CHAIRPERSONS.map((person) => {
                const name = en ? person.name : person.nameMr;
                const committee = en ? person.committeeName : person.committeeNameMr;
                return (
                  <tr key={person.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-4 font-bold text-civic-ink">{name}</td>
                    <td className="px-4 py-4 text-muted-foreground">{committee}</td>
                    <td className="col-fit px-4 py-4 text-center">
                      <Avatar src={person.photo} name={name} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="md:hidden flex flex-col gap-3">
          {STANDING_COMMITTEE_CHAIRPERSONS.map((person) => {
            const name = en ? person.name : person.nameMr;
            const committee = en ? person.committeeName : person.committeeNameMr;
            return (
              <li key={person.id} className="rounded-2xl border border-border bg-white shadow-sm p-4 flex gap-4 items-start">
                <Avatar src={person.photo} name={name} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-civic-ink text-sm leading-snug">{name}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                    {en ? "Committee Name" : "समितीचे नाव"}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{committee}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          {en
            ? "* Photos will be added as official portraits become available."
            : "* अधिकृत छायाचित्रे उपलब्ध झाल्यावर जोडली जातील."}
        </p>
      </section>
    </Layout>
  );
};

export default StandingCommitteeChairpersons;
