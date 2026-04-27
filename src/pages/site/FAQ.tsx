import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I pay my property tax online?",
    qMr: "मी माझा मालमत्ता कर ऑनलाइन कसा भरू?",
    a: "Visit the Property Tax section on our website or click 'Pay Property Tax' on the homepage. Enter your property ID and follow the payment steps.",
    aMr: "आमच्या वेबसाइटवरील मालमत्ता कर विभागाला भेट द्या किंवा मुख्यपृष्ठावर 'मालमत्ता कर भरा' वर क्लिक करा. आपला मालमत्ता आयडी प्रविष्ट करा आणि पेमेंट चरणांचे अनुसरण करा.",
  },
  {
    q: "How can I apply for a birth certificate?",
    qMr: "मी जन्म प्रमाणपत्रासाठी कसा अर्ज करू?",
    a: "Apply online through the Citizen Services portal. You will need the hospital discharge summary and parents' ID proof. Processing takes 7 working days.",
    aMr: "नागरिक सेवा पोर्टलद्वारे ऑनलाइन अर्ज करा. आपल्याला रुग्णालयाचा डिस्चार्ज सारांश आणि पालकांचा ओळखपत्र आवश्यक असेल. प्रक्रियेस ७ कामकाजाचे दिवस लागतात.",
  },
  {
    q: "How do I file a complaint about civic issues?",
    qMr: "मी नागरी समस्यांबद्दल तक्रार कशी नोंदवू?",
    a: "Use the Grievance section on our website or call our 24×7 helpline. You will receive a complaint ID to track your complaint status.",
    aMr: "आमच्या वेबसाइटवरील तक्रार विभाग वापरा किंवा आमच्या २४×७ हेल्पलाइनवर कॉल करा. आपल्याला तक्रार स्थिती ट्रॅक करण्यासाठी तक्रार आयडी मिळेल.",
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
    a: "Apply through the Citizen Services portal with your business registration documents, address proof, and NOC from the fire department if applicable.",
    aMr: "आपल्या व्यवसाय नोंदणी दस्तऐवज, पत्ता पुरावा आणि लागू असल्यास अग्निशमन विभागाचे NOC सह नागरिक सेवा पोर्टलद्वारे अर्ज करा.",
  },
  {
    q: "How do I check my water bill?",
    qMr: "मी माझे पाणी बिल कसे तपासू?",
    a: "Visit the Pay Water Tax section and enter your consumer number to view and pay your water bill online.",
    aMr: "पाणी कर भरा विभागाला भेट द्या आणि आपले पाणी बिल ऑनलाइन पाहण्यासाठी आणि भरण्यासाठी आपला ग्राहक क्रमांक प्रविष्ट करा.",
  },
];

const FAQ = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Help" : "मदत"} title={en ? "Frequently Asked Questions" : "वारंवार विचारले जाणारे प्रश्न"}
        subtitle={en ? "Find answers to common questions about CSMC services." : "CSMC सेवांबद्दल सामान्य प्रश्नांची उत्तरे शोधा."} />
      <section className="py-12 container max-w-3xl">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-civic-ink hover:bg-muted/30 transition-colors">
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
        </div>
      </section>
    </Layout>
  );
};
export default FAQ;
