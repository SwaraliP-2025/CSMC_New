import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Calendar, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NOTICES } from "@/data/siteNotices";
import { buildSimplePdf, pdfFilename } from "@/lib/simplePdf";
import { openPdfBlob } from "@/lib/unifiedSearch";

const Notices = () => {
  const { t, lang, d } = useLang();
  const en = lang === "en";

  const noticePdf = (n: (typeof SITE_NOTICES)[number], index: number) => {
    const title = en ? n.titleEn : n.titleMr;
    const tag = en ? n.tagEn : n.tagMr;
    const text = [
      "Chhatrapati Sambhajinagar Municipal Corporation",
      "Official notice — prototype sample",
      "",
      title,
      "",
      `Category: ${tag}`,
      `Date: ${n.dateLabel}`,
      "",
      "This PDF is generated for portal preview. Official signed notices are issued through CSMC channels.",
    ].join("\n");
    return {
      blob: buildSimplePdf(text),
      name: pdfFilename(title.slice(0, 48), `notice-${index + 1}`),
    };
  };

  return (
    <Layout>
      <PageHeader eyebrow={en ? "Press & PR" : "प्रसिद्धी"} title={t.notices.title} subtitle={en ? "Official announcements, circulars and notices." : "अधिकृत घोषणा, परिपत्रके व सूचना."} />
      <section className="py-16 container">
        <div className="space-y-6">
          {SITE_NOTICES.map((n, i) => {
            const title = en ? n.titleEn : n.titleMr;
            const tag = en ? n.tagEn : n.tagMr;
            return (
              <article key={n.id} className="group bg-white border border-border rounded-3xl p-6 md:p-8 hover:shadow-elegant hover:border-civic-gold/20 transition-all flex gap-8 items-center">
                <div className="shrink-0 grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm">
                  <Calendar className="h-7 w-7 md:h-9 md:w-9" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-civic-red/10 text-civic-red">{tag}</span>
                    <span className="text-xs font-medium text-muted-foreground">{d(n.dateLabel)}</span>
                  </div>
                  <p className="text-base md:text-xl font-bold text-civic-ink group-hover:text-civic-blue transition-colors leading-tight">{d(title)}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    size="lg"
                    variant="default"
                    className="bg-civic-blue text-white hover:bg-civic-blue/90 px-4 h-12"
                    onClick={() => {
                      const { blob, name } = noticePdf(n, i);
                      openPdfBlob(blob, name);
                    }}
                  >
                    <Eye className="h-5 w-5 md:mr-2" />
                    <span className="hidden md:inline font-bold">{en ? "Preview" : "पहा"}</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-civic-blue hover:bg-civic-blue/5 px-4 h-12"
                    onClick={() => {
                      const { blob, name } = noticePdf(n, i);
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = name;
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <Download className="h-5 w-5 md:mr-2" />
                    <span className="hidden md:inline font-bold">{en ? "Download" : "डाउनलोड"}</span>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Notices;
