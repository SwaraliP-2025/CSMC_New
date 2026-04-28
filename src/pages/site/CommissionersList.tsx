import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { User } from "lucide-react";
import { useState } from "react";
import { PhotoModal } from "@/components/site/PhotoModal";
import amolImg from "@/assets/leadership/shri_amol_sir.png";

const commissioners = [
  { sr: 1, name: "Shri. Amol Yedage, IAS", nameMr: "श्री. अमोल येडगे, भा.प्र.से.", from: "Apr 2026", to: "Present", cadre: "Maharashtra", cadreMr: "महाराष्ट्र", img: amolImg, current: true },
  { sr: 2, name: "Shri. G Sreekanth, IAS", nameMr: "श्री. जी श्रीकांत, भा.प्र.से.", from: "Mar 2022", to: "Apr 2026", cadre: "Maharashtra", cadreMr: "महाराष्ट्र", img: null, current: false },
  { sr: 3, name: "Shri. Abhijit Chaudhari, IAS", nameMr: "श्री. अभिजित चौधरी, भा.प्र.से.", from: "Jun 2021", to: "Mar 2022", cadre: "Maharashtra", cadreMr: "महाराष्ट्र", img: null, current: false },
  { sr: 4, name: "Shri. Astik Kumar Pandey, IAS", nameMr: "श्री. आस्तिक कुमार पांडेय, भा.प्र.से.", from: "Jan 2019", to: "May 2021", cadre: "Maharashtra", cadreMr: "महाराष्ट्र", img: null, current: false },
  { sr: 5, name: "Shri. D. M. Muglikar, IAS", nameMr: "श्री. डी. एम. मुगळीकर, भा.प्र.से.", from: "Apr 2017", to: "Dec 2018", cadre: "Maharashtra", cadreMr: "महाराष्ट्र", img: null, current: false },
  // { sr: 5, name: "Shri. Omprakash Bakoria, IAS", nameMr: "श्री. ओमप्रकाश बकोरिया, भा.प्र.से.", from: "Jan 2015", to: "Mar 2017", cadre: "Maharashtra", cadreMr: "महाराष्ट्र", img: null, current: false },
];

const Avatar = ({ src, name, size = "md" }: { src: string | null; name: string; size?: "sm" | "md" }) => {
  const cls = size === "sm"
    ? "w-12 h-12 rounded-full object-cover object-top border-2 border-civic-blue/20 shadow"
    : "w-14 h-14 rounded-full object-cover object-top border-2 border-civic-blue/20 mx-auto shadow";
  const ph = size === "sm"
    ? "w-12 h-12 rounded-full bg-civic-blue/10 border-2 border-civic-blue/20 flex items-center justify-center"
    : "w-14 h-14 rounded-full bg-civic-blue/10 border-2 border-civic-blue/20 flex items-center justify-center mx-auto";
  if (src) return <img src={src} alt={name} className={cls} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />;
  return <div className={ph}><User className="h-6 w-6 text-civic-blue/40" /></div>;
};

const CommissionersList = () => {
  const { lang } = useLang();
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

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-civic-blue text-white">
                <th className="px-4 py-4 text-center font-bold w-16">{en ? "Photo" : "फोटो"}</th>
                <th className="px-4 py-4 text-left font-bold w-8">{en ? "Sr." : "क्र."}</th>
                <th className="px-4 py-4 text-left font-bold">{en ? "Name & Designation" : "नाव व पदनाम"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "From" : "पासून"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "To" : "पर्यंत"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "Cadre" : "केडर"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {commissioners.map((c) => (
                <tr key={c.sr} className={`hover:bg-muted/30 transition-colors ${c.current ? "bg-civic-gold/5" : ""}`}>
                  <td className="px-4 py-4 text-center">
                    <div className={c.img ? "cursor-zoom-in" : ""}
                      onClick={() => c.img && setSelected({ src: c.img, name: en ? c.name : c.nameMr, role: `IAS — ${en ? c.cadre : c.cadreMr} Cadre` })}>
                      <Avatar src={c.img} name={en ? c.name : c.nameMr} />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center font-bold text-muted-foreground">{c.sr}</td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-civic-ink">{en ? c.name : c.nameMr}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">IAS — {en ? c.cadre : c.cadreMr} {en ? "Cadre" : "केडर"}</p>
                    {c.current && <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">{en ? "Current Commissioner" : "विद्यमान आयुक्त"}</span>}
                  </td>
                  <td className="px-4 py-4 text-center text-muted-foreground">{c.from}</td>
                  <td className="px-4 py-4 text-center">
                    {c.to === "Present"
                      ? <span className="bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full text-xs">{en ? "Present" : "विद्यमान"}</span>
                      : <span className="text-muted-foreground">{c.to}</span>}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="bg-civic-blue/10 text-civic-blue font-bold px-2.5 py-1 rounded-full text-xs">{en ? c.cadre : c.cadreMr}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {commissioners.map((c) => (
            <div key={c.sr} className={`rounded-2xl border border-border bg-white shadow-sm p-4 flex gap-4 items-start ${c.current ? "border-civic-gold/40 bg-civic-gold/5" : ""}`}>
              {/* Photo */}
              <div className={c.img ? "cursor-zoom-in shrink-0" : "shrink-0"}
                onClick={() => c.img && setSelected({ src: c.img, name: en ? c.name : c.nameMr, role: `IAS — ${en ? c.cadre : c.cadreMr} Cadre` })}>
                <Avatar src={c.img} name={en ? c.name : c.nameMr} size="sm" />
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-civic-ink text-sm leading-snug">{en ? c.name : c.nameMr}</p>
                  <span className="bg-civic-blue/10 text-civic-blue font-bold px-2 py-0.5 rounded-full text-[10px] shrink-0">{en ? c.cadre : c.cadreMr}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">IAS — {en ? c.cadre : c.cadreMr} {en ? "Cadre" : "केडर"}</p>
                {c.current && <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">{en ? "Current Commissioner" : "विद्यमान आयुक्त"}</span>}
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span>#{c.sr}</span>
                  <span>•</span>
                  <span>{c.from}</span>
                  <span>→</span>
                  {c.to === "Present"
                    ? <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">{en ? "Present" : "विद्यमान"}</span>
                    : <span>{c.to}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          {en ? "* Data is indicative. Official records may vary." : "* माहिती सूचक आहे. अधिकृत नोंदी भिन्न असू शकतात."}
        </p>
      </section>

      {selected && <PhotoModal src={selected.src} name={selected.name} role={selected.role} onClose={() => setSelected(null)} />}
    </Layout>
  );
};
export default CommissionersList;
