import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { FileText, Download, User, Phone } from "lucide-react";

const officers = [
  { role: "Public Information Officer (PIO)", roleMr: "जन माहिती अधिकारी (PIO)", name: "Shri. Rajesh Patil", dept: "General Administration", phone: "0240-2331731" },
  { role: "Appellate Authority", roleMr: "अपीलीय प्राधिकरण", name: "Shri. Suresh Deshmukh", dept: "Administration", phone: "0240-2331732" },
];

const RTIAct = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Transparency" : "पारदर्शकता"} title={en ? "Right to Information Act" : "माहिती अधिकार अधिनियम"}
        subtitle={en ? "Information under Section 4(1)(b) of the RTI Act, 2005." : "माहिती अधिकार अधिनियम, २००५ च्या कलम ४(१)(ब) अंतर्गत माहिती."} />
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-civic-blue/5 border border-civic-blue/20 rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-4">{en ? "About RTI Act" : "माहिती अधिकार अधिनियमाबद्दल"}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {en ? "The Right to Information Act, 2005 empowers every citizen to seek information from public authorities. CSMC is committed to proactive disclosure and timely response to RTI applications."
                : "माहिती अधिकार अधिनियम, २००५ प्रत्येक नागरिकाला सार्वजनिक प्राधिकरणांकडून माहिती मागण्याचा अधिकार देतो. CSMC सक्रिय प्रकटीकरण आणि RTI अर्जांना वेळेवर प्रतिसाद देण्यास वचनबद्ध आहे."}
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>{en ? "Application fee: ₹10" : "अर्ज शुल्क: ₹१०"}</li>
              <li>{en ? "Response time: 30 days" : "प्रतिसाद वेळ: ३० दिवस"}</li>
              <li>{en ? "BPL applicants: Free" : "दारिद्र्यरेषेखालील अर्जदार: मोफत"}</li>
            </ul>
          </div>
          <div className="bg-white border border-border rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-civic-blue mb-4">{en ? "How to Apply" : "अर्ज कसा करावा"}</h2>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside leading-relaxed">
              <li>{en ? "Write your application in Hindi, Marathi or English" : "हिंदी, मराठी किंवा इंग्रजीत अर्ज लिहा"}</li>
              <li>{en ? "Pay ₹10 fee via DD/IPO/cash" : "DD/IPO/रोख द्वारे ₹१० शुल्क भरा"}</li>
              <li>{en ? "Submit to the PIO at CSMC main office" : "CSMC मुख्य कार्यालयातील PIO कडे सादर करा"}</li>
              <li>{en ? "Receive acknowledgement with application number" : "अर्ज क्रमांकासह पावती मिळवा"}</li>
              <li>{en ? "Response within 30 days" : "३० दिवसांत प्रतिसाद"}</li>
            </ol>
          </div>
        </div>

        <h2 className="font-serif text-xl font-bold text-civic-blue mb-5">{en ? "RTI Officers" : "RTI अधिकारी"}</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {officers.map((o, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-5 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-civic-blue/10 flex items-center justify-center shrink-0">
                <User className="h-6 w-6 text-civic-blue" />
              </div>
              <div>
                <p className="text-xs font-bold text-civic-red uppercase tracking-wide mb-1">{en ? o.role : o.roleMr}</p>
                <p className="font-bold text-civic-ink">{o.name}</p>
                <p className="text-xs text-muted-foreground">{o.dept}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Phone className="h-3 w-3" />{o.phone}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-xl font-bold text-civic-blue mb-5">{en ? "RTI Documents" : "RTI दस्तऐवज"}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "RTI Application Form", titleMr: "RTI अर्ज नमुना" },
            { title: "First Appeal Form", titleMr: "प्रथम अपील नमुना" },
            { title: "Annual RTI Report 2025-26", titleMr: "वार्षिक RTI अहवाल २०२५-२६" },
          ].map((d, i) => (
            <div key={i} className="flex items-center justify-between bg-white border border-border rounded-xl px-4 py-3 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-civic-blue shrink-0" />
                <span className="text-sm font-semibold text-civic-ink">{en ? d.title : d.titleMr}</span>
              </div>
              <a href="#" className="text-civic-blue hover:text-civic-red transition-colors">
                <Download className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default RTIAct;
