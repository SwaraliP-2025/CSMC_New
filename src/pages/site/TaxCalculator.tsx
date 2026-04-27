import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZONE_RATES: Record<string, number> = {
  "1": 0.28, "2": 0.26, "3": 0.24, "4": 0.22,
  "5": 0.20, "6": 0.18, "7": 0.16, "8": 0.14, "9": 0.12, "10": 0.10,
};

const TaxCalculator = () => {
  const [area, setArea] = useState("");
  const [ratePerSqft, setRatePerSqft] = useState("");
  const [zone, setZone] = useState("1");
  const [usage, setUsage] = useState("residential");
  const [result, setResult] = useState<null | { base: number; cess: number; swm: number; total: number; breakdown: { label: string; amount: number; note: string }[] }>(null);

  const calculate = () => {
    const a = parseFloat(area);
    const r = parseFloat(ratePerSqft);
    if (!a || !r) return;

    const capitalValue = a * r;
    const zoneRate = ZONE_RATES[zone];
    const usageMultiplier = usage === "commercial" ? 1.5 : usage === "industrial" ? 2.0 : 1.0;

    const base = capitalValue * zoneRate * usageMultiplier * 0.01;
    const cess = base * 0.25;           // 25% education cess
    const swm = base * 0.10;            // 10% SWM cess
    const total = base + cess + swm;

    setResult({
      base, cess, swm, total,
      breakdown: [
        { label: "General Tax", amount: base, note: `Capital Value ₹${capitalValue.toLocaleString()} × Zone ${zone} rate (${(zoneRate * 100).toFixed(0)}%) × Usage factor (${usageMultiplier}x)` },
        { label: "Education Cess", amount: cess, note: "25% of General Tax — as per Maharashtra Municipal Act" },
        { label: "SWM Cess", amount: swm, note: "10% of General Tax — Solid Waste Management levy" },
      ],
    });
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Revenue Department"
        title="Property Tax Calculator"
        subtitle="Estimate your annual property tax based on zone, area, and usage type."
      />
      <section className="py-16 container max-w-2xl">
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Built-up Area (sq.ft)</label>
                <input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="e.g. 1200"
                  className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Ready Reckoner Rate (₹/sq.ft)</label>
                <input type="number" value={ratePerSqft} onChange={e => setRatePerSqft(e.target.value)} placeholder="e.g. 4500"
                  className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Zone</label>
                <select value={zone} onChange={e => setZone(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 bg-white">
                  {Object.keys(ZONE_RATES).map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Usage Type</label>
                <select value={usage} onChange={e => setUsage(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 bg-white">
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial (1.5×)</option>
                  <option value="industrial">Industrial (2×)</option>
                </select>
              </div>
            </div>
            <Button onClick={calculate} className="bg-civic-blue text-white hover:bg-civic-blue/90 rounded-xl py-3 font-bold">
              <Calculator className="h-4 w-4 mr-2" /> Calculate Tax
            </Button>
          </div>
        </div>

        {result && (
          <div className="mt-8 border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-civic-blue text-white px-6 py-4">
              <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Estimated Annual Tax</p>
              <p className="font-serif text-4xl font-bold">₹{result.total.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="divide-y divide-border">
              {result.breakdown.map((b, i) => (
                <div key={i} className="px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm text-civic-ink">{b.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{b.note}</p>
                  </div>
                  <p className="font-bold text-civic-blue whitespace-nowrap">₹{b.amount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 bg-amber-50 border-t border-amber-100">
              <p className="text-xs text-amber-700">* This is an estimate only. Actual tax may vary. Visit the Tax & Revenue department or call the helpline for exact assessment.</p>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default TaxCalculator;
