import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { OFFICIAL } from "@/data/officialLinks";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  "Water Supply", "Solid Waste Management", "Roads & Public Works",
  "Electrical & Street Lights", "Health & Sanitation", "Garden & Horticulture",
  "Town Planning", "Tax & Revenue", "Fire & Emergency", "Education", "Other",
];

const Grievance = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [form, setForm] = useState({ name: "", mobile: "", email: "", ward: "", dept: "", subject: "", description: "" });
  const [error, setError] = useState("");
  const [previewId, setPreviewId] = useState<string | null>(null);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.dept || !form.subject || !form.description) {
      setError(en ? "Please fill all required fields." : "कृपया सर्व आवश्यक फील्ड भरा.");
      return;
    }
    setError("");
    // Prototype only — does not submit to a backend.
    setPreviewId(`DEMO-GRV-${Date.now().toString().slice(-6)}`);
  };

  if (previewId) {
    return (
      <Layout>
        <PageHeader eyebrow={en ? "Grievance" : "तक्रार"} title={en ? "Prototype acknowledgement" : "प्रोटोटाइप पावती"} />
        <section className="py-16 container max-w-lg text-center">
          <div className="rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-sm px-4 py-3 mb-6 text-left">
            {en
              ? "This is a prototype demo only. Your complaint was NOT filed with CSMC. Use an official channel below to register a real grievance."
              : "हे केवळ प्रोटोटाइप डेमो आहे. आपली तक्रार CSMC कडे दाखल झाली नाही. खऱ्या तक्रारीसाठी खालील अधिकृत मार्ग वापरा."}
          </div>
          <p className="font-mono text-lg font-bold text-civic-blue bg-civic-blue/5 border border-civic-blue/20 rounded-xl px-6 py-4 mb-6">
            {previewId}
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={OFFICIAL.complaintForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-civic-blue text-white font-bold rounded-xl px-4 py-3 hover:bg-civic-blue/90"
            >
              {en ? "Open official CSMC complaint form" : "अधिकृत CSMC तक्रार फॉर्म उघडा"}
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={OFFICIAL.samadhaan}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-civic-blue text-civic-blue font-bold rounded-xl px-4 py-3 hover:bg-civic-blue hover:text-white"
            >
              {en ? "Samadhaan / Aaple Sarkar grievance" : "समाधान / आपले सरकार तक्रार"}
              <ExternalLink className="h-4 w-4" />
            </a>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setPreviewId(null);
                setForm({ name: "", mobile: "", email: "", ward: "", dept: "", subject: "", description: "" });
              }}
            >
              {en ? "Back to form" : "फॉर्मकडे परत"}
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Public Grievance" : "सार्वजनिक तक्रार"}
        title={en ? "Lodge a Complaint" : "तक्रार नोंदवा"}
        subtitle={
          en
            ? "Prefer the official CSMC or Samadhaan portals for live registration. The form below is a prototype walkthrough only."
            : "थेट नोंदणीसाठी अधिकृत CSMC किंवा समाधान पोर्टल वापरा. खालील फॉर्म केवळ प्रोटोटाइप मार्गदर्शन आहे."
        }
      />
      <section className="py-16 container max-w-2xl">
        <div className="flex flex-wrap gap-2 mb-6">
          <a
            href={OFFICIAL.complaintForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-civic-blue text-white rounded-lg px-3 py-2"
          >
            {en ? "Official CSMC form" : "अधिकृत CSMC फॉर्म"} <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={OFFICIAL.samadhaan}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold border border-civic-blue text-civic-blue rounded-lg px-3 py-2"
          >
            {en ? "Samadhaan portal" : "समाधान पोर्टल"} <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link to="/track" className="inline-flex items-center gap-1.5 text-xs font-bold border border-border text-muted-foreground rounded-lg px-3 py-2">
            {en ? "Prototype track demo" : "प्रोटोटाइप ट्रॅक डेमो"}
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-5">
          <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
            {en
              ? "Prototype form — does not create a real municipal complaint ticket."
              : "प्रोटोटाइप फॉर्म — खरा महापालिका तक्रार तिकीट तयार होत नाही."}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Full Name *" : "पूर्ण नाव *"}</label>
              <input value={form.name} onChange={(e) => set("name", e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Mobile Number *" : "मोबाईल *"}</label>
              <input value={form.mobile} onChange={(e) => set("mobile", e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Email (optional)" : "ईमेल (ऐच्छिक)"}</label>
              <input value={form.email} onChange={(e) => set("email", e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Ward / Zone" : "प्रभाग / झोन"}</label>
              <input value={form.ward} onChange={(e) => set("ward", e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Department *" : "विभाग *"}</label>
            <select value={form.dept} onChange={(e) => set("dept", e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 bg-white">
              <option value="">{en ? "Select department" : "विभाग निवडा"}</option>
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Subject *" : "विषय *"}</label>
            <input value={form.subject} onChange={(e) => set("subject", e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">{en ? "Description *" : "वर्णन *"}</label>
            <textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={4} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 resize-none" />
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle className="h-4 w-4 shrink-0" /> {error}
            </div>
          )}
          <Button type="submit" className="w-full bg-civic-blue text-white hover:bg-civic-blue/90 rounded-xl py-3 font-bold text-base">
            {en ? "Generate prototype acknowledgement" : "प्रोटोटाइप पावती तयार करा"}
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default Grievance;
