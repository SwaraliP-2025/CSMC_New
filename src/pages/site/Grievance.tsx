import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

const DEPARTMENTS = [
  "Water Supply", "Solid Waste Management", "Roads & Public Works",
  "Electrical & Street Lights", "Health & Sanitation", "Garden & Horticulture",
  "Town Planning", "Tax & Revenue", "Fire & Emergency", "Education", "Other",
];

const Grievance = () => {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", ward: "", dept: "", subject: "", description: "" });
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.dept || !form.subject || !form.description) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    const id = `CSMC-GRV-${Date.now().toString().slice(-6)}`;
    setSubmitted(id);
  };

  if (submitted) return (
    <Layout>
      <PageHeader eyebrow="Grievance" title="Complaint Registered" />
      <section className="py-20 container max-w-lg text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-civic-blue mb-3">Your complaint has been registered</h2>
        <p className="text-muted-foreground mb-6">Your Grievance ID is:</p>
        <p className="font-mono text-2xl font-bold text-civic-blue bg-civic-blue/5 border border-civic-blue/20 rounded-xl px-6 py-4 mb-6">{submitted}</p>
        <p className="text-sm text-muted-foreground mb-8">Please save this ID to track your complaint status at <strong>/track</strong>. You will receive updates on your registered mobile number.</p>
        <Button onClick={() => { setSubmitted(null); setForm({ name: "", mobile: "", email: "", ward: "", dept: "", subject: "", description: "" }); }}
          variant="outline" className="border-civic-blue text-civic-blue hover:bg-civic-blue hover:text-white">
          Submit Another Complaint
        </Button>
      </section>
    </Layout>
  );

  return (
    <Layout>
      <PageHeader
        eyebrow="Public Grievance System"
        title="Lodge a Complaint"
        subtitle="Register your civic complaint and track it in real-time. We aim to resolve all complaints within 7 working days."
      />
      <section className="py-16 container max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Full Name *</label>
              <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your full name"
                className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Mobile Number *</label>
              <input value={form.mobile} onChange={e => set("mobile", e.target.value)} placeholder="10-digit mobile"
                className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Email (optional)</label>
              <input value={form.email} onChange={e => set("email", e.target.value)} placeholder="your@email.com"
                className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Ward / Zone</label>
              <input value={form.ward} onChange={e => set("ward", e.target.value)} placeholder="e.g. Ward 12, Zone 3"
                className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Department *</label>
            <select value={form.dept} onChange={e => set("dept", e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 bg-white">
              <option value="">Select department</option>
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Subject *</label>
            <input value={form.subject} onChange={e => set("subject", e.target.value)} placeholder="Brief subject of complaint"
              className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30" />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Description *</label>
            <textarea value={form.description} onChange={e => set("description", e.target.value)} rows={4}
              placeholder="Describe your complaint in detail including location, date, and any relevant information..."
              className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 resize-none" />
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle className="h-4 w-4 shrink-0" /> {error}
            </div>
          )}
          <Button type="submit" className="w-full bg-civic-blue text-white hover:bg-civic-blue/90 rounded-xl py-3 font-bold text-base">
            Submit Complaint
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default Grievance;
