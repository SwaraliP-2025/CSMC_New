import { Suspense, lazy, useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { PrabhagDetailDialog } from "@/components/site/PrabhagDetailDialog";
import { useLang } from "@/i18n/LanguageContext";
import { formatNum, toDevanagariDigits } from "@/lib/prabhagFormat";
import type { Corporator, Prabhag } from "@/types/corporator";
import { Loader2, MapPin, Phone, Users } from "lucide-react";

// Lazy-load the map so it doesn't block the initial render
const WardMap = lazy(() => import("@/components/site/WardMap"));

const zones = [
  { no: 1, code: "A1", codeMr: "A१", name: "Zone A1 – Town Hall", nameMr: "झोन A१ – टाऊन हॉल", wards: 12, office: "Town Hall, Chhatrapati Sambhajinagar", phone: "0240-2481001", population: "1.8L" },
  { no: 2, code: "G2", codeMr: "G२", name: "Zone G2 – Mondha Naka Sillekhana", nameMr: "झोन G२ – मोंढा नका सिल्लेखाना", wards: 12, office: "Mondha Naka Sillekhana, Chhatrapati Sambhajinagar", phone: "0240-2482001", population: "1.6L" },
  { no: 3, code: "C3", codeMr: "C३", name: "Zone C3 – Central Naka", nameMr: "झोन C३ – सेंट्रल नका", wards: 12, office: "Central Naka, Chhatrapati Sambhajinagar", phone: "0240-2483001", population: "1.7L" },
  { no: 4, code: "H4", codeMr: "H४", name: "Zone H4 – Saubhagya Mangalkaryalya", nameMr: "झोन H४ – सौभाग्य मंगलकार्यालय", wards: 12, office: "Saubhagya Mangalkaryalya, Chhatrapati Sambhajinagar", phone: "0240-2484001", population: "1.5L" },
  { no: 5, code: "B5", codeMr: "B५", name: "Zone B5 – Cidco N6", nameMr: "झोन B५ – सिडको N६", wards: 12, office: "Cidco N6, Chhatrapati Sambhajinagar", phone: "0240-2485001", population: "2.0L" },
  { no: 6, code: "E6", codeMr: "E६", name: "Zone E6 – Cidco N5", nameMr: "झोन E६ – सिडको N५", wards: 12, office: "Cidco N5, Chhatrapati Sambhajinagar", phone: "0240-2486001", population: "1.9L" },
  { no: 7, code: "F7", codeMr: "F७", name: "Zone F7 – Jawahar Colony", nameMr: "झोन F७ – जवाहर कॉलनी", wards: 12, office: "Jawahar Colony, Chhatrapati Sambhajinagar", phone: "0240-2487001", population: "1.6L" },
  { no: 8, code: "I8", codeMr: "I८", name: "Zone I8 – Satara Parisar", nameMr: "झोन I८ – सातारा परिसर", wards: 12, office: "Satara Parisar, Chhatrapati Sambhajinagar", phone: "0240-2488001", population: "1.4L" },
  { no: 9, code: "D9", codeMr: "D९", name: "Zone D9 – Krantichowk", nameMr: "झोन D९ – क्रांतीचौक", wards: 12, office: "Krantichowk, Chhatrapati Sambhajinagar", phone: "0240-2489001", population: "1.5L" },
  { no: 10, code: "J10", codeMr: "J१०", name: "Zone J10 – Railway Station", nameMr: "झोन J१० – रेल्वे स्टेशन परिसर", wards: 12, office: "Railway Station area, Chhatrapati Sambhajinagar", phone: "0240-2490001", population: "1.5L" },
];

const ZonesWards = () => {
  const { lang, setLang } = useLang();
  const en = lang === "en";
  const [prabhags, setPrabhags] = useState<Prabhag[]>([]);
  const [corporatorsByPrabhag, setCorporatorsByPrabhag] = useState<Record<string, Corporator[]>>({});
  const [selectedPrabhag, setSelectedPrabhag] = useState<Prabhag | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/prabhag-2025.json`)
      .then((r) => r.json())
      .then((data: { prabhags: Prabhag[] }) => setPrabhags(data.prabhags))
      .catch(console.error);

    fetch(`${import.meta.env.BASE_URL}data/corporators-by-prabhag.json`)
      .then((r) => r.json())
      .then((data: { byPrabhag: Record<string, Corporator[]> }) => setCorporatorsByPrabhag(data.byPrabhag ?? {}))
      .catch(console.error);
  }, []);

  const selectedCorporators = selectedPrabhag
    ? corporatorsByPrabhag[selectedPrabhag.no] ?? []
    : [];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Know Your Zone/Prabhag" : "झोन/प्रभाग जाणून घ्या"}
        subtitle={
          en
            ? "CSMC is divided into 10 administrative zones with 29 new prabhag delimitations (2025). Search or click on the map to pinpoint your location and discover your prabhag, zone, ward, and administrative details."
            : "CSMC १० प्रशासकीय झोन आणि २९ नव्या प्रभाग सीमांकन (२०२५) मध्ये विभागली आहे. आपले स्थान शोधण्यासाठी नकाशावर शोधा किंवा क्लिक करा आणि आपले प्रभाग, झोन, प्रभाग आणि प्रशासकीय तपशील जाणून घ्या."
        }
      />

      {/* ── Interactive Ward Map ── */}
      <section className="py-10 container">
        <div className="mb-6">
          <h2 className="font-serif text-xl font-bold text-civic-blue mb-1">
            {en
              ? "Get your administrative details by entering a nearby landmark or locality to know your Zone, Prabhag & Ward"
              : "जवळचे खूण किंवा परिसर टाकून आपले झोन, प्रभाग आणि वॉर्ड जाणून घ्या"}
          </h2>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64 rounded-2xl border border-border bg-muted/30">
              <Loader2 className="h-8 w-8 animate-spin text-civic-blue" />
            </div>
          }
        >
          <div className="rounded-2xl border border-border shadow-card-soft bg-white p-4 md:p-5">
            <WardMap />
          </div>
        </Suspense>
      </section>

      {/* ── Zone cards ── */}
      <section className="pb-12 container">
        <h2 className="font-serif text-xl font-bold text-civic-blue mb-6">
          {en ? "Administrative Zones" : "प्रशासकीय झोन"}
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {zones.map((z) => (
            <div
              key={z.no}
              className="bg-white border border-border rounded-2xl p-5 hover:shadow-elegant transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-civic-blue text-white flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-civic-gold group-hover:text-civic-ink transition-colors ${en ? "" : "devanagari"}`}
                >
                  {en ? z.code : z.codeMr}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold text-civic-blue text-base mb-2 ${en ? "font-serif" : "devanagari"}`}
                  >
                    {en ? z.name : z.nameMr}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />{" "}
                      {en ? z.wards : toDevanagariDigits(z.wards)}{" "}
                      {en ? "Wards" : "वॉर्ड"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />{" "}
                      {en ? z.population : toDevanagariDigits(z.population)}{" "}
                      {en ? "Population" : "लोकसंख्या"}
                    </span>
                    <span className="flex items-center gap-1 col-span-2">
                      <MapPin className="h-3 w-3" /> {z.office}
                    </span>
                    <span className="flex items-center gap-1 col-span-2">
                      <Phone className="h-3 w-3" />{" "}
                      {en ? z.phone : toDevanagariDigits(z.phone)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Prabhag list ── */}
      <section className="pb-12 container">
        <div className="mb-6">
          <h2 className="font-serif text-xl font-bold text-civic-blue mb-2">
            {en ? "Prabhag List" : "प्रभाग यादी"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {en
              ? "Click any prabhag card to view all localities and elected corporators (A–D) with contact details."
              : "सर्व परिसर आणि निवडून आलेले नगरसेवक (अ–ड) संपर्क तपशीलांसह पाहण्यासाठी कोणत्याही प्रभाग कार्डावर क्लिक करा."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {prabhags.map((p) => (
            <button
              key={p.no}
              type="button"
              onClick={() => {
                setLang("mr");
                setSelectedPrabhag(p);
              }}
              className="bg-white border border-border rounded-2xl p-5 hover:shadow-elegant hover:border-civic-blue/30 transition-all text-left w-full cursor-pointer group"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-serif font-bold text-civic-blue text-base group-hover:text-civic-red transition-colors">
                    {en ? `Prabhag ${p.no}` : `प्रभाग ${toDevanagariDigits(p.no)}`}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {en
                      ? `${p.seats} Seats · ${p.population.toLocaleString("en-IN")} Population`
                      : `${formatNum(p.seats, false)} आसने · ${formatNum(p.population, false)} लोकसंख्या`}
                  </p>
                </div>
                <div className="text-xs font-semibold text-civic-blue rounded-full border border-civic-blue/25 bg-civic-blue/5 px-2.5 py-1 shrink-0">
                  {formatNum(p.localities.length, en)} {en ? "Localities" : "परिसर"}
                </div>
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                <p className="font-semibold text-civic-blue text-sm mb-2">
                  {en ? "Key Localities" : "मुख्य परिसर"}
                </p>
                {p.localities.slice(0, 6).join(", ")}
                {p.localities.length > 6 && (
                  <span className="text-civic-blue font-semibold">
                    {" "}
                    {en
                      ? `· View all ${p.localities.length}`
                      : `· सर्व ${toDevanagariDigits(p.localities.length)} पहा`}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      <PrabhagDetailDialog
        prabhag={selectedPrabhag}
        corporators={selectedCorporators}
        open={!!selectedPrabhag}
        onOpenChange={(open) => !open && setSelectedPrabhag(null)}
      />
    </Layout>
  );
};

export default ZonesWards;
