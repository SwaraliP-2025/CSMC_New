import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { User } from "lucide-react";
import { useState } from "react";
import { PhotoModal } from "@/components/site/PhotoModal";
import sameerImg from "@/assets/leadership/samir-bhaiya-rajurkar.png";

const mayors = [
  { sr: 1, name: "Shri. Sameer Rajurkar", nameMr: "श्री. समीर राजूरकर", from: "Jan 2022", to: "Present", party: "BJP", partyMr: "भाजप", img: sameerImg, current: true },
  // { sr: 2, name: "Smt. Vijaya Rahangdale", nameMr: "सौ. विजया राहांगडाले", from: "Jan 2020", to: "Dec 2021", party: "BJP", partyMr: "भाजप", img: null, current: false },
  { sr: 2, name: "Shri. Nandkumar Ghodele", nameMr: "श्री. नंदकुमार घोडेले", from: "Jan 2018", to: "Dec 2019", party: "Shiv Sena", partyMr: "शिवसेना", img: null, current: false },
  { sr: 3, name: "Smt. Bhagwat Karad", nameMr: "सौ. भगवत कराड", from: "Jan 2016", to: "Dec 2017", party: "BJP", partyMr: "भाजप", img: null, current: false },
  // { sr: 4, name: "Shri. Tukaram Ugale", nameMr: "श्री. तुकाराम उगले", from: "Jan 2014", to: "Dec 2015", party: "NCP", partyMr: "राष्ट्रवादी", img: null, current: false },
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

const MayorsList = () => {
  const { lang } = useLang();
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

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-civic-blue text-white">
                <th className="px-4 py-4 text-center font-bold w-16">{en ? "Photo" : "फोटो"}</th>
                <th className="px-4 py-4 text-left font-bold w-8">{en ? "Sr." : "क्र."}</th>
                <th className="px-4 py-4 text-left font-bold">{en ? "Name" : "नाव"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "From" : "पासून"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "To" : "पर्यंत"}</th>
                <th className="px-4 py-4 text-center font-bold">{en ? "Party" : "पक्ष"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {mayors.map((m) => (
                <tr key={m.sr} className={`hover:bg-muted/30 transition-colors ${m.current ? "bg-civic-gold/5" : ""}`}>
                  <td className="px-4 py-4 text-center">
                    <div className={m.img ? "cursor-zoom-in" : ""}
                      onClick={() => m.img && setSelected({ src: m.img, name: en ? m.name : m.nameMr, role: en ? `Mayor — ${m.party}` : `महापौर — ${m.partyMr}` })}>
                      <Avatar src={m.img} name={en ? m.name : m.nameMr} />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center font-bold text-muted-foreground">{m.sr}</td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-civic-ink">{en ? m.name : m.nameMr}</p>
                    {m.current && <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">{en ? "Current Mayor" : "विद्यमान महापौर"}</span>}
                  </td>
                  <td className="px-4 py-4 text-center text-muted-foreground">{m.from}</td>
                  <td className="px-4 py-4 text-center">
                    {m.to === "Present"
                      ? <span className="bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full text-xs">{en ? "Present" : "विद्यमान"}</span>
                      : <span className="text-muted-foreground">{m.to}</span>}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="bg-civic-blue/10 text-civic-blue font-bold px-2.5 py-1 rounded-full text-xs">{en ? m.party : m.partyMr}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {mayors.map((m) => (
            <div key={m.sr} className={`rounded-2xl border border-border bg-white shadow-sm p-4 flex gap-4 items-start ${m.current ? "border-civic-gold/40 bg-civic-gold/5" : ""}`}>
              {/* Photo */}
              <div className={m.img ? "cursor-zoom-in shrink-0" : "shrink-0"}
                onClick={() => m.img && setSelected({ src: m.img, name: en ? m.name : m.nameMr, role: en ? `Mayor — ${m.party}` : `महापौर — ${m.partyMr}` })}>
                <Avatar src={m.img} name={en ? m.name : m.nameMr} size="sm" />
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-civic-ink text-sm leading-snug">{en ? m.name : m.nameMr}</p>
                  <span className="bg-civic-blue/10 text-civic-blue font-bold px-2 py-0.5 rounded-full text-[10px] shrink-0">{en ? m.party : m.partyMr}</span>
                </div>
                {m.current && <span className="inline-block mt-1 bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">{en ? "Current Mayor" : "विद्यमान महापौर"}</span>}
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span>#{m.sr}</span>
                  <span>•</span>
                  <span>{m.from}</span>
                  <span>→</span>
                  {m.to === "Present"
                    ? <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">{en ? "Present" : "विद्यमान"}</span>
                    : <span>{m.to}</span>}
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
export default MayorsList;
