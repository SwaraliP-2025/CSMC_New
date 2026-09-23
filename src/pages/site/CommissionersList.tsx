import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { User } from "lucide-react";
import { useState } from "react";
import { PhotoModal } from "@/components/site/PhotoModal";
import { COMMISSIONERS } from "@/data/commissioners";

const Avatar = ({ src, name, size = "md" }: { src: string | null; name: string; size?: "sm" | "md" }) => {
  const cls = size === "sm"
    ? "w-12 h-12 rounded-full object-cover object-top border-2 border-civic-blue/20 shadow"
    : "w-14 h-14 rounded-full object-cover object-top border-2 border-civic-blue/20 mx-auto shadow";
  const ph = size === "sm"
    ? "w-12 h-12 rounded-full bg-civic-gold/15 border-2 border-dashed border-civic-blue/25 flex items-center justify-center"
    : "w-14 h-14 rounded-full bg-civic-gold/15 border-2 border-dashed border-civic-blue/25 flex items-center justify-center mx-auto";
  if (src) return <img src={src} alt={name} className={cls} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />;
  return (
    <div className={ph} title="Photo placeholder">
      <User className="h-5 w-5 text-civic-blue/35" aria-hidden />
    </div>
  );
};

const CommissionersList = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [selected, setSelected] = useState<{ src: string; name: string; role: string } | null>(null);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Hon'ble Commissioners' List" : "मा. आयुक्तांची यादी"}
        subtitle={en ? "List of Municipal Commissioners of Chhatrapati Sambhajinagar Municipal Corporation." : "छत्रपती संभाजीनगर महानगरपालिकेच्या महानगरपालिका आयुक्तांची यादी."}
      />
      <section className="py-12 container max-w-5xl">

        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-civic-blue text-white">
                <th className="px-4 py-4 text-center font-bold w-8">{en ? "Sr." : "क्र."}</th>
                <th className="px-4 py-4 text-left font-bold">{en ? "Hon'ble Commissioner" : "मा. आयुक्त"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "Working Period" : "कार्यकाल"}</th>
                <th className="px-4 py-4 text-center font-bold w-20">{en ? "Photo" : "फोटो"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {COMMISSIONERS.map((c) => (
                <tr key={c.sr} className={`hover:bg-muted/30 transition-colors ${c.current ? "bg-civic-gold/5" : ""}`}>
                  <td className="px-4 py-4 text-center font-bold text-muted-foreground">{d(c.sr)}</td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-civic-ink">{en ? c.nameEn : c.nameMr}</p>
                    {c.current && (
                      <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">
                        {en ? "Current Commissioner" : "विद्यमान आयुक्त"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center text-muted-foreground whitespace-nowrap">
                    {d(c.from)} {en ? "to" : "ते"}{" "}
                    {c.to === "Present"
                      ? <span className="bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full text-xs">{en ? "Till Date" : "आजतागायत"}</span>
                      : d(c.to)}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div
                      className={c.img ? "cursor-zoom-in" : ""}
                      onClick={() => c.img && setSelected({
                        src: c.img,
                        name: en ? c.nameEn : c.nameMr,
                        role: en ? "Hon'ble Commissioner" : "मा. आयुक्त",
                      })}
                    >
                      <Avatar src={c.img} name={en ? c.nameEn : c.nameMr} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden flex flex-col gap-3">
          {COMMISSIONERS.map((c) => (
            <div key={c.sr} className={`rounded-2xl border border-border bg-white shadow-sm p-4 flex gap-4 items-start ${c.current ? "border-civic-gold/40 bg-civic-gold/5" : ""}`}>
              <div
                className={c.img ? "cursor-zoom-in shrink-0" : "shrink-0"}
                onClick={() => c.img && setSelected({
                  src: c.img,
                  name: en ? c.nameEn : c.nameMr,
                  role: en ? "Hon'ble Commissioner" : "मा. आयुक्त",
                })}
              >
                <Avatar src={c.img} name={en ? c.nameEn : c.nameMr} size="sm" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-civic-ink text-sm leading-snug">{en ? c.nameEn : c.nameMr}</p>
                  <span className="text-[10px] font-bold text-muted-foreground shrink-0">#{d(c.sr)}</span>
                </div>
                {c.current && (
                  <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">
                    {en ? "Current Commissioner" : "विद्यमान आयुक्त"}
                  </span>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  {d(c.from)} {en ? "to" : "ते"}{" "}
                  {c.to === "Present" ? (en ? "Till Date" : "आजतागायत") : d(c.to)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          {en
            ? "* Photos will be added as official portraits become available. Official records may vary."
            : "* अधिकृत छायाचित्रे उपलब्ध झाल्यावर जोडली जातील. अधिकृत नोंदी भिन्न असू शकतात."}
        </p>
      </section>

      {selected && <PhotoModal src={selected.src} name={selected.name} role={selected.role} onClose={() => setSelected(null)} />}
    </Layout>
  );
};
export default CommissionersList;
