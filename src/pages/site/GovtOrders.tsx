import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { FileText, Download, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const orders = [
  { no: "GR/2026/001", title: "Property Tax Rebate Scheme 2026-27", titleMr: "मालमत्ता कर सवलत योजना २०२६-२७", date: "1 Apr 2026", dept: "Revenue", deptMr: "महसूल", repoId: "gr-tax-rebate" },
  { no: "GR/2026/002", title: "Solid Waste Management Guidelines", titleMr: "घनकचरा व्यवस्थापन मार्गदर्शक तत्त्वे", date: "15 Mar 2026", dept: "SWM", deptMr: "घनकचरा", repoId: "gr-swm" },
  { no: "GR/2026/003", title: "Water Supply Regulation Order", titleMr: "पाणी पुरवठा नियमन आदेश", date: "10 Mar 2026", dept: "Water Supply", deptMr: "पाणी पुरवठा", repoId: "gr-water-reg" },
  { no: "GR/2026/004", title: "Building Permission Fee Revision", titleMr: "बांधकाम परवानगी शुल्क सुधारणा", date: "1 Mar 2026", dept: "Town Planning", deptMr: "नगर रचना", repoId: "gr-bldg-fee" },
  { no: "GR/2025/045", title: "Street Light Maintenance Circular", titleMr: "पथदिवे देखभाल परिपत्रक", date: "20 Dec 2025", dept: "Electrical", deptMr: "विद्युत", repoId: "cir-streetlight" },
  { no: "GR/2025/044", title: "Health Camp Organization Guidelines", titleMr: "आरोग्य शिबिर आयोजन मार्गदर्शक तत्त्वे", date: "15 Dec 2025", dept: "Health", deptMr: "आरोग्य" },
];

const GovtOrders = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [search, setSearch] = useState("");
  const filtered = orders.filter(o =>
    (en ? o.title : o.titleMr).toLowerCase().includes(search.toLowerCase()) || o.no.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Administration" : "प्रशासन"} title={en ? "Government Resolutions & Circulars" : "शासन निर्णय / परिपत्रके"}
        subtitle={en ? "Official government resolutions and circulars issued by CSMC." : "CSMC द्वारे जारी केलेले अधिकृत शासन निर्णय आणि परिपत्रके."} />
      <section className="py-12 container">
        <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-white mb-6 max-w-md focus-within:ring-2 focus-within:ring-civic-blue/30">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={en ? "Search orders..." : "आदेश शोधा..."}
            className="text-sm bg-transparent outline-none flex-1" />
        </div>
        <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
          {filtered.map((o, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-civic-blue/10 flex items-center justify-center shrink-0 group-hover:bg-civic-blue transition-colors">
                <FileText className="h-5 w-5 text-civic-blue group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-civic-ink">{d(en ? o.title : o.titleMr)}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-mono text-muted-foreground">{d(o.no)}</span>
                  <span className="text-xs bg-civic-blue/10 text-civic-blue font-bold px-2 py-0.5 rounded">{en ? o.dept : o.deptMr}</span>
                  <span className="text-xs text-muted-foreground">{d(o.date)}</span>
                </div>
              </div>
              {"repoId" in o && o.repoId ? (
                <Link
                  to={`/digital-repository/${o.repoId}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-white hover:bg-civic-blue px-3 py-1.5 rounded-lg border border-civic-blue transition-all shrink-0"
                >
                  <Download className="h-3.5 w-3.5" /> {en ? "View" : "पहा"}
                </Link>
              ) : (
                <span
                  className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground px-3 py-1.5 rounded-lg border border-border shrink-0 cursor-not-allowed"
                  title={en ? "Document not available in this prototype" : "या नमुना आवृत्तीत दस्तऐवज उपलब्ध नाही"}
                >
                  {en ? "Unavailable" : "अनुपलब्ध"}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default GovtOrders;
