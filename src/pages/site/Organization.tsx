import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";

// Save the organogram image as: src/assets/organogram.png
// Then uncomment the import below:
// import organogram from "@/assets/organogram.png";

const Organization = () => {
  const { lang } = useLang();
  const en = lang === "en";

  // Safe URL — won't crash if organogram.png doesn't exist
  let imgSrc = "";
  try {
    imgSrc = new URL("../../assets/organogram.png", import.meta.url).href;
  } catch {
    imgSrc = "";
  }

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "CSMC Organogram" : "CSMC संघटनात्मक रचना"}
        subtitle={en
          ? "Organizational structure of Chhatrapati Sambhajinagar Municipal Corporation."
          : "छत्रपती संभाजीनगर महानगरपालिकेची संघटनात्मक रचना."}
      />
      <section className="py-10 container">
        <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          {/* Header bar */}
          <div className="bg-civic-blue px-6 py-4 flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-white">
              {en ? "CSMC Organogram — Team CSMC" : "CSMC संघटनात्मक रचना — टीम CSMC"}
            </h2>
            <a
              href={imgSrc}
              download="CSMC-Organogram.png"
              className="flex items-center gap-2 text-xs font-bold bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              {en ? "Download" : "डाउनलोड"}
            </a>
          </div>

          {/* Organogram image */}
          <div className="p-2 bg-gray-50 flex items-center justify-center" style={{ maxHeight: "calc(100vh - 220px)" }}>
            <img
              src={imgSrc}
              alt="CSMC Organogram"
              className="rounded-xl shadow-md object-contain"
              style={{ maxHeight: "calc(100vh - 240px)", maxWidth: "100%", width: "auto" }}
              onError={(e) => {
                // Fallback if image not yet added
                (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-20 text-muted-foreground gap-3">
                      <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" class="opacity-30">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                      </svg>
                      <p class="font-semibold text-sm">Please save the organogram image as <code class="bg-muted px-1 rounded">src/assets/organogram.png</code></p>
                    </div>`;
                }
              }}
            />
          </div>
        </div>

        {/* Quick stats below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { v: "1", l: en ? "Municipal Commissioner" : "महानगरपालिका आयुक्त" },
            { v: "2", l: en ? "Additional Commissioners" : "अतिरिक्त आयुक्त" },
            { v: "8+", l: en ? "Deputy Commissioners" : "उपआयुक्त" },
            { v: "12", l: en ? "Departments" : "विभाग" },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-4 text-center hover:shadow-sm transition-shadow">
              <p className="font-serif text-3xl font-bold text-civic-gold">{s.v}</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Organization;
