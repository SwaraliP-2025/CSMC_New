import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { Search, CheckCircle2, Clock, Truck, XCircle, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { fromDevanagariDigits } from "@/i18n/digits";
import { OFFICIAL } from "@/data/officialLinks";

type Status = "in_review" | "approved" | "dispatched" | "rejected" | "pending";

interface ApplicationResult {
  id: string;
  typeEn: string;
  typeMr: string;
  applicant: string;
  submitted: string;
  status: Status;
  lastUpdated: string;
  remarksEn: string;
  remarksMr: string;
}

const MOCK_DATA: Record<string, ApplicationResult> = {
  "CSMC-2026-00123": {
    id: "CSMC-2026-00123",
    typeEn: "Birth Certificate",
    typeMr: "जन्म दाखला",
    applicant: "Rahul Sharma",
    submitted: "10 Apr 2026",
    status: "dispatched",
    lastUpdated: "22 Apr 2026",
    remarksEn: "Certificate dispatched via Speed Post. Tracking: SP123456789IN",
    remarksMr: "दाखला स्पीड पोस्टने पाठवण्यात आला आहे. ट्रॅकिंग क्रमांक: SP123456789IN",
  },
  "CSMC-2026-00456": {
    id: "CSMC-2026-00456",
    typeEn: "Building Permission",
    typeMr: "बांधकाम परवानगी",
    applicant: "Priya Patil",
    submitted: "15 Apr 2026",
    status: "in_review",
    lastUpdated: "23 Apr 2026",
    remarksEn: "Under review by Town Planning department. Expected decision within 7 working days.",
    remarksMr: "नगररचना विभाग तपासणी करत आहे. 7 कामकाजाच्या दिवसांत निर्णय अपेक्षित आहे.",
  },
  "CSMC-2026-00789": {
    id: "CSMC-2026-00789",
    typeEn: "Trade License",
    typeMr: "व्यापार परवाना",
    applicant: "Suresh Jadhav",
    submitted: "5 Apr 2026",
    status: "approved",
    lastUpdated: "20 Apr 2026",
    remarksEn: "Approved. Please visit Zone 3 office to collect your license.",
    remarksMr: "मंजूर झाले आहे. परवाना मिळवण्यासाठी झोन 3 कार्यालयात भेट द्या.",
  },
  "CSMC-2026-00321": {
    id: "CSMC-2026-00321",
    typeEn: "Water Connection",
    typeMr: "पाणी जोडणी",
    applicant: "Meena Kulkarni",
    submitted: "18 Apr 2026",
    status: "pending",
    lastUpdated: "18 Apr 2026",
    remarksEn: "Application received. Awaiting field inspection scheduling.",
    remarksMr: "अर्ज प्राप्त झाला आहे. क्षेत्रीय तपासणीची वेळ निश्चित होणे बाकी आहे.",
  },
  "CSMC-2026-00654": {
    id: "CSMC-2026-00654",
    typeEn: "Property Tax Correction",
    typeMr: "मालमत्ता कर दुरुस्ती",
    applicant: "Anil Deshmukh",
    submitted: "2 Apr 2026",
    status: "rejected",
    lastUpdated: "19 Apr 2026",
    remarksEn: "Rejected due to incomplete documentation. Please resubmit with property card copy.",
    remarksMr: "कागदपत्रे अपूर्ण असल्याने अर्ज नामंजूर झाला आहे. मालमत्ता पत्रकाची प्रत जोडून पुन्हा सादर करा.",
  },
};

const statusConfig: Record<Status, { labelEn: string; labelMr: string; color: string; bg: string; Icon: React.ElementType }> = {
  pending:    { labelEn: "Pending",    labelMr: "प्रलंबित",   color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200",  Icon: Clock },
  in_review:  { labelEn: "In Review",  labelMr: "तपासणीत",   color: "text-blue-700",   bg: "bg-blue-50 border-blue-200",      Icon: FileText },
  approved:   { labelEn: "Approved",   labelMr: "मंजूर",     color: "text-green-700",  bg: "bg-green-50 border-green-200",    Icon: CheckCircle2 },
  dispatched: { labelEn: "Dispatched", labelMr: "पाठवले",    color: "text-purple-700", bg: "bg-purple-50 border-purple-200",  Icon: Truck },
  rejected:   { labelEn: "Rejected",   labelMr: "नामंजूर",   color: "text-red-700",    bg: "bg-red-50 border-red-200",        Icon: XCircle },
};

const steps: Status[] = ["pending", "in_review", "approved", "dispatched"];

const TrackApplication = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<ApplicationResult | null | "not_found">(null);

  const handleSearch = () => {
    const found = MOCK_DATA[fromDevanagariDigits(query.trim()).toUpperCase()];
    setResult(found ?? "not_found");
  };

  const cfg = result && result !== "not_found" ? statusConfig[result.status] : null;
  const stepIndex = result && result !== "not_found" ? steps.indexOf(result.status) : -1;

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Prototype demo" : "प्रोटोटाइप डेमो"}
        title={en ? "Track Application (Demo)" : "अर्ज स्थिती (डेमो)"}
        subtitle={
          en
            ? "Sample IDs only. For live status use the official CSMC tracking portal."
            : "केवळ नमुना आयडी. थेट स्थितीसाठी अधिकृत CSMC ट्रॅकिंग पोर्टल वापरा."
        }
      />
      <section className="py-16 container max-w-2xl">
        <div className="rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-sm px-4 py-3 mb-6">
          {en
            ? "This page is a UI prototype with mock data. It is not connected to the live municipal database."
            : "हे पृष्ठ नमुना डेटा असलेले UI प्रोटोटाइप आहे. थेट महापालिका डेटाबेसशी जोडलेले नाही."}
          <a
            href={OFFICIAL.trackComplaint}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 font-bold text-civic-blue hover:underline"
          >
            {en ? "Open official tracker" : "अधिकृत ट्रॅकर उघडा"}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mb-10 flex flex-col gap-3 min-[360px]:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder={en ? "e.g. CSMC-2026-00123" : `उदा. ${d("CSMC-2026-00123")}`}
            className="min-h-11 w-full min-w-0 flex-1 rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 min-[360px]:w-auto"
            aria-label={en ? "Application ID" : "अर्ज आयडी"}
          />
          <Button onClick={handleSearch} className="min-h-11 w-full shrink-0 rounded-xl bg-civic-blue px-6 text-white hover:bg-civic-blue/90 min-[360px]:w-auto">
            <Search className="h-4 w-4 mr-2" /> {en ? "Track" : "शोधा"}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mb-8">
          {en ? "Try sample IDs:" : "नमुना आयडी वापरा:"}{" "}
          <button type="button" className="font-mono text-civic-blue" onClick={() => setQuery("CSMC-2026-00123")}>{d("CSMC-2026-00123")}</button>,{" "}
          <button type="button" className="font-mono text-civic-blue" onClick={() => setQuery("CSMC-2026-00456")}>{d("CSMC-2026-00456")}</button>,{" "}
          <button type="button" className="font-mono text-civic-blue" onClick={() => setQuery("CSMC-2026-00789")}>{d("CSMC-2026-00789")}</button>
        </p>

        {result === "not_found" && (
          <div className="text-center py-12 border border-dashed border-border rounded-2xl">
            <XCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <p className="font-semibold text-civic-ink">{en ? "Sample ID not found" : "नमुना आयडी सापडला नाही"}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {en ? "Use one of the sample IDs, or the official tracker for real applications." : "नमुना आयडी वापरा, किंवा खऱ्या अर्जांसाठी अधिकृत ट्रॅकर."}
            </p>
          </div>
        )}

        {result && result !== "not_found" && cfg && (
          <div className="border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className={`flex items-center gap-3 px-6 py-4 border-b ${cfg.bg}`}>
              <cfg.Icon className={`h-6 w-6 ${cfg.color}`} />
              <div>
                <p className={`font-bold text-base ${cfg.color}`}>{en ? cfg.labelEn : cfg.labelMr}</p>
                <p className="text-xs text-muted-foreground">{en ? "Last updated:" : "शेवटचे अद्यतन:"} {d(result.lastUpdated)}</p>
              </div>
            </div>
            <div className="px-6 py-5 grid grid-cols-2 gap-4 text-sm">
              <div><p className="text-muted-foreground text-xs mb-1">{en ? "Application ID" : "अर्ज आयडी"}</p><p className="font-mono font-bold break-words">{d(result.id)}</p></div>
              <div><p className="text-muted-foreground text-xs mb-1">{en ? "Service Type" : "सेवा प्रकार"}</p><p className="font-semibold break-words">{en ? result.typeEn : result.typeMr}</p></div>
              <div><p className="text-muted-foreground text-xs mb-1">{en ? "Applicant" : "अर्जदार"}</p><p className="font-semibold break-words">{result.applicant}</p></div>
              <div><p className="text-muted-foreground text-xs mb-1">{en ? "Submitted On" : "सादर दिनांक"}</p><p className="font-semibold break-words">{d(result.submitted)}</p></div>
            </div>
            {result.status !== "rejected" && (
              <div className="px-6 pb-5">
                <div className="flex items-center gap-0">
                  {steps.map((s, i) => {
                    const done = i <= stepIndex;
                    const sc = statusConfig[s];
                    return (
                      <div key={s} className="flex items-center flex-1 last:flex-none">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${done ? "bg-civic-blue border-civic-blue text-white" : "border-border text-muted-foreground"}`}>
                            {d(i + 1)}
                          </div>
                          <span className={`text-[10px] mt-1 text-center font-semibold leading-tight ${done ? "text-civic-blue" : "text-muted-foreground"}`}>{en ? sc.labelEn : sc.labelMr}</span>
                        </div>
                        {i < steps.length - 1 && <div className={`flex-1 h-0.5 mb-4 mx-1 ${i < stepIndex ? "bg-civic-blue" : "bg-border"}`} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="px-6 pb-6">
              <p className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wide">{en ? "Remarks" : "शेरा"}</p>
              <p className="text-sm text-foreground/80 bg-muted/40 rounded-lg px-4 py-3 break-words">{d(en ? result.remarksEn : result.remarksMr)}</p>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default TrackApplication;
