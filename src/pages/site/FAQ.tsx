import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    q: "How do I pay my property tax online?",
    qMr: "मी माझा मालमत्ता कर ऑनलाइन कसा भरू?",
    a: "Visit the Property Tax section on our website or click 'Pay Property Tax' on the homepage. Enter your property ID and follow the payment steps on the official CSMC tax portal.",
    aMr: "आमच्या वेबसाइटवरील मालमत्ता कर विभागाला भेट द्या किंवा मुख्यपृष्ठावर 'मालमत्ता कर भरा' वर क्लिक करा. अधिकृत CSMC कर पोर्टलवर मालमत्ता आयडी टाका व पेमेंट चरण पूर्ण करा.",
  },
  {
    q: "How can I apply for a birth certificate?",
    qMr: "मी जन्म प्रमाणपत्रासाठी कसा अर्ज करू?",
    a: "Apply online through the RTS Citizen Services portal. You will need the hospital discharge summary and parents' ID proof. Processing follows RTS timelines.",
    aMr: "RTS नागरिक सेवा पोर्टलद्वारे ऑनलाइन अर्ज करा. रुग्णालय डिस्चार्ज सारांश व पालकांचे ओळखपत्र आवश्यक. प्रक्रिया RTS कालमर्यादेनुसार होते.",
  },
  {
    q: "How do I file a complaint about civic issues?",
    qMr: "मी नागरी समस्यांबद्दल तक्रार कशी नोंदवू?",
    a: "Use the official CSMC complaint form, or the Samadhaan / Aaple Sarkar grievance portal for state-level redressal. You will receive a reference ID to track status.",
    aMr: "अधिकृत CSMC तक्रार फॉर्म वापरा, किंवा राज्यस्तरीय निवारणासाठी समाधान / आपले सरकार तक्रार पोर्टल. स्थिती ट्रॅक करण्यासाठी संदर्भ आयडी मिळेल.",
  },
  {
    q: "What are the office hours of CSMC?",
    qMr: "CSMC चे कार्यालयीन वेळ काय आहे?",
    a: "CSMC offices are open Monday to Saturday, 10:00 AM to 6:00 PM. Closed on Sundays and public holidays.",
    aMr: "CSMC कार्यालये सोमवार ते शनिवार, सकाळी १०:०० ते सायंकाळी ६:०० पर्यंत खुली असतात. रविवार आणि सार्वजनिक सुट्ट्यांना बंद.",
  },
  {
    q: "How can I get a trade license?",
    qMr: "मला व्यापार परवाना कसा मिळेल?",
    a: "Apply through the RTS Citizen Services portal with business registration documents, address proof, and Fire NOC if applicable.",
    aMr: "व्यवसाय नोंदणी दस्तऐवज, पत्ता पुरावा आणि लागू असल्यास अग्निशमन NOC सह RTS नागरिक सेवा पोर्टलद्वारे अर्ज करा.",
  },
  {
    q: "How do I check my water bill?",
    qMr: "मी माझे पाणी बिल कसे तपासू?",
    a: "Open Pay Water Tax and enter your consumer number on the official water ledger portal to view and pay.",
    aMr: "पाणी कर भरा उघडा आणि अधिकृत पाणी लेजर पोर्टलवर ग्राहक क्रमांक टाकून बिल पहा व भरा.",
  },
];

const FAQ = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [open, setOpen] = useState<number | null>(null);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return faqs.map((f, i) => ({ f, i }));
    return faqs
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
