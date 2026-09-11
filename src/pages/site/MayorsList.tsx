import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { User } from "lucide-react";
import { useState } from "react";
import { PhotoModal } from "@/components/site/PhotoModal";
import { MAYORS } from "@/data/mayors";

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

const MayorsList = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [selected, setSelected] = useState<{ src: string; name: string; role: string } | null>(null);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Hon'ble Mayors' List" : "मा. महापौरांची यादी"}
        subtitle={en ? "List of Hon'ble Mayors of Chhatrapati Sambhajinagar Municipal Corporation." : "छत्रपती संभाजीनगर महानगरपालिकेच्या मा. महापौरांची यादी."}
      />
      <section className="py-12 container max-w-5xl">

        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-civic-blue text-white">
                <th className="px-4 py-4 text-center font-bold w-8">{en ? "Sr." : "क्र."}</th>
                <th className="px-4 py-4 text-left font-bold">{en ? "Hon'ble Mayor" : "मा. महापौर"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "Working Period" : "कार्यकाल"}</th>
                <th className="px-4 py-4 text-center font-bold w-20">{en ? "Photo" : "फोटो"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {MAYORS.map((m) => (
                <tr key={m.sr} className={`hover:bg-muted/30 transition-colors ${m.current ? "bg-civic-gold/5" : ""}`}>
                  <td className="px-4 py-4 text-center font-bold text-muted-foreground">{d(m.sr)}</td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-civic-ink">{en ? m.nameEn : m.nameMr}</p>
                    {m.current && (
                      <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">
                        {en ? "Current Mayor" : "विद्यमान महापौर"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center text-muted-foreground whitespace-nowrap">
                    {d(m.from)} {en ? "to" : "ते"}{" "}
                    {m.to === "Present"
                      ? <span className="bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full text-xs">{en ? "Till Date" : "आजतागायत"}</span>
                      : d(m.to)}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div
                      className={m.img ? "cursor-zoom-in" : ""}
                      onClick={() => m.img && setSelected({
                        src: m.img,
                        name: en ? m.nameEn : m.nameMr,
                        role: en ? "Hon'ble Mayor" : "मा. महापौर",
                      })}
                    >
                      <Avatar src={m.img} name={en ? m.nameEn : m.nameMr} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden flex flex-col gap-3">
          {MAYORS.map((m) => (
            <div key={m.sr} className={`rounded-2xl border border-border bg-white shadow-sm p-4 flex gap-4 items-start ${m.current ? "border-civic-gold/40 bg-civic-gold/5" : ""}`}>
              <div
                className={m.img ? "cursor-zoom-in shrink-0" : "shrink-0"}
                onClick={() => m.img && setSelected({
                  src: m.img,
                  name: en ? m.nameEn : m.nameMr,
                  role: en ? "Hon'ble Mayor" : "मा. महापौर",
                })}
              >
                <Avatar src={m.img} name={en ? m.nameEn : m.nameMr} size="sm" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-civic-ink text-sm leading-snug">{en ? m.nameEn : m.nameMr}</p>
                  <span className="text-[10px] font-bold text-muted-foreground shrink-0">#{d(m.sr)}</span>
                </div>
                {m.current && (
                  <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">
                    {en ? "Current Mayor" : "विद्यमान महापौर"}
                  </span>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  {d(m.from)} {en ? "to" : "ते"}{" "}
                  {m.to === "Present" ? (en ? "Till Date" : "आजतागायत") : d(m.to)}
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
export default MayorsList;
