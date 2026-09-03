/**
 * Prabhag2025 – Listing page for the new CSMC 2025 delimitation (29 Prabhags)
 * Source: Parishisht-2, Chhatrapati Sambhajinagar Mahangarpalika Sarvatrik Nivadnuk 2025
 */
import { useState, useMemo, useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Search, MapPin, ChevronDown, ChevronUp, Info, Loader2 } from "lucide-react";

interface Prabhag {
  no: string;
  population: number;
  sc: number;
  st: number;
  seats: number;
  localities: string[];
}

interface PrabhagData {
  source: string;
  note: string;
  prabhags: Prabhag[];
}

export default function Prabhag2025() {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [data, setData] = useState<PrabhagData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/CSMC_New/data/prabhag-2025.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() =>
        // fallback: try without basename
        fetch("/data/prabhag-2025.json")
          .then((r) => r.json())
          .then(setData)
      )
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    if (!query.trim()) return data.prabhags;
    const q = query.toLowerCase();
    return data.prabhags.filter(
      (p) =>
        p.no.includes(q) ||
        p.localities.some((l) => l.toLowerCase().includes(q))
    );
  }, [query, data]);

  const totalPop = data?.prabhags.reduce((s, p) => s + p.population, 0) ?? 0;
  const totalSC = data?.prabhags.reduce((s, p) => s + p.sc, 0) ?? 0;
  const totalST = data?.prabhags.reduce((s, p) => s + p.st, 0) ?? 0;

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Elections 2025" : "निवडणूक २०२५"}
        title={en ? "Prabhag List 2025" : "प्रभाग यादी २०२५"}
        subtitle={
          en
            ? "New ward delimitation for CSMC General Elections 2025 — 29 Prabhags, 4 members each."
            : "CSMC सार्वत्रिक निवडणूक २०२५ साठी नवीन प्रभाग रचना — २९ प्रभाग, प्रत्येकी ४ सदस्य."
        }
      />

      <section className="container py-8">
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-civic-blue" />
          </div>
        )}

        {!loading && data && (
          <>
            {/* ── Source notice ── */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6">
              <Info className="h-4 w-4 shrink-0 text-civic-blue mt-0.5" />
              <p>{en ? `Source: ${data.source}. ${data.note}.` : `स्रोत: ${data.source}. ${data.note}.`}</p>
            </div>

            {/* ── Summary stats ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <StatCard label={en ? "Total Prabhags" : "एकूण प्रभाग"} value={d(data.prabhags.length)} />
              <StatCard label={en ? "Total Population" : "एकूण लोकसंख्या"} value={d(totalPop.toLocaleString("en-IN"))} />
              <StatCard label={en ? "SC Population" : "अ.जा. लोकसंख्या"} value={d(totalSC.toLocaleString("en-IN"))} />
              <StatCard label={en ? "ST Population" : "अ.ज. लोकसंख्या"} value={d(totalST.toLocaleString("en-IN"))} />
            </div>

            {/* ── Search ── */}
            <div className="relative mb-6 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={en ? "Search by prabhag number or locality…" : "प्रभाग क्रमांक किंवा परिसर शोधा…"}
                className="w-full pl-9 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/40 bg-white"
              />
            </div>

            {/* ── Prabhag cards ── */}
            <div className="space-y-3">
              {filtered.length === 0 && (
                <p className="text-muted-foreground text-sm py-8 text-center">
                  {en ? "No prabhags found." : "कोणताही प्रभाग सापडला नाही."}
                </p>
              )}
              {filtered.map((p) => {
                const isOpen = expanded === p.no;
                return (
                  <div key={p.no} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpanded(isOpen ? null : p.no)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                    >
                      <span className="w-12 h-12 rounded-xl bg-civic-blue text-white flex items-center justify-center font-bold text-base shrink-0">
                        {d(p.no)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif font-bold text-civic-blue text-sm">
                          {en ? `Prabhag ${p.no}` : `प्रभाग ${d(p.no)}`}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {p.localities.slice(0, 4).join(", ")}
                          {p.localities.length > 4 ? ` +${d(p.localities.length - 4)} more` : ""}
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-6 text-sm shrink-0">
                        <div className="text-center">
                          <p className="font-bold text-civic-blue">{d(p.population.toLocaleString("en-IN"))}</p>
                          <p className="text-xs text-muted-foreground">{en ? "Population" : "लोकसंख्या"}</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold">{d(p.seats)}</p>
                          <p className="text-xs text-muted-foreground">{en ? "Seats" : "जागा"}</p>
                        </div>
                      </div>
                      {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="border-t border-border px-5 py-4 bg-muted/20">
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-4">
                          <MiniStat label={en ? "Population" : "लोकसंख्या"} value={d(p.population.toLocaleString("en-IN"))} />
                          <MiniStat label={en ? "Seats" : "जागा"} value={d(p.seats)} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-2 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {en ? "Important Localities / Colonies" : "महत्त्वाची ठिकाणे / परिसर / नगरे"}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.localities.map((loc) => (
                              <span key={loc} className="text-xs bg-civic-blue/8 border border-civic-blue/20 text-civic-blue rounded-full px-2.5 py-0.5">
                                {loc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-muted-foreground mt-6 text-center">
              {en
                ? `Showing ${filtered.length} of ${data.prabhags.length} prabhags · Source: ${data.source}`
                : `${d(data.prabhags.length)} पैकी ${d(filtered.length)} प्रभाग दाखवत आहे · स्रोत: ${d(data.source)}`}
            </p>
          </>
        )}

        {!loading && !data && (
          <p className="text-center text-muted-foreground py-10">
            {en ? "Failed to load data. Please refresh." : "डेटा लोड करता आला नाही. कृपया रिफ्रेश करा."}
          </p>
        )}
      </section>
    </Layout>
  );
}

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white border border-border rounded-2xl p-4 text-center shadow-sm">
    <p className="font-bold text-xl text-civic-blue">{value}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
  </div>
);

const MiniStat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white rounded-xl border border-border p-2.5 text-center">
    <p className="font-bold text-sm text-civic-blue">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);
