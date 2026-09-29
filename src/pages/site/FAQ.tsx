import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQS } from "@/data/faqs";
import { useLang } from "@/i18n/LanguageContext";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";

const FAQ = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [params] = useSearchParams();
  const [open, setOpen] = useState<number | null>(null);
  const [q, setQ] = useState(() => params.get("q") ?? "");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return FAQS.map((f, i) => ({ f, i }));
    return FAQS
      .map((f, i) => ({ f, i }))
      .filter(({ f }) =>
        [f.q, f.qMr, f.a, f.aMr].join(" ").toLowerCase().includes(s)
      );
  }, [q]);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Help" : "मदत"}
        title={en ? "Frequently Asked Questions" : "वारंवार विचारले जाणारे प्रश्न"}
        subtitle={en ? "Find answers to common questions about CSMC services." : "CSMC सेवांबद्दल सामान्य प्रश्नांची उत्तरे शोधा."}
      />
      <section className="py-12 container max-w-3xl">
        <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white mb-6 focus-within:ring-2 focus-within:ring-civic-blue/30">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={en ? "Search FAQs…" : "प्रश्न शोधा…"}
            className="text-sm bg-transparent outline-none flex-1"
            aria-label={en ? "Search FAQs" : "प्रश्न शोधा"}
          />
        </div>
        <div className="space-y-3">
          {filtered.map(({ f, i }) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-civic-ink hover:bg-muted/30 transition-colors"
                aria-expanded={open === i}
              >
                <span>{en ? f.q : f.qMr}</span>
                <ChevronDown className={`h-4 w-4 text-civic-blue shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-muted/20">
                  <p className="pt-3">{en ? f.a : f.aMr}</p>
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-10">
              {en ? "No matching FAQs." : "जुळणारे प्रश्न नाहीत."}
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};
export default FAQ;
