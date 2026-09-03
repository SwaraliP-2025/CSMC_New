import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import muncorpPic from "@/assets/muncorp_pic.png";
import { OFFICIAL } from "@/data/officialLinks";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { lang, d } = useLang();
  const en = lang === "en";

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Get in touch" : "संपर्क साधा"}
        title={en ? "Municipal Contact" : "महानगरपालिका संपर्क"}
      />

      <section className="py-10 container max-w-4xl">
        <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm border border-border">
          <img
            src={muncorpPic}
            alt={en ? "Chhatrapati Sambhajinagar Municipal Corporation Building" : "छत्रपती संभाजीनगर महानगरपालिका इमारत"}
            className="w-full h-100 object-cover"
            loading="lazy"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-base font-bold text-civic-ink mb-3">
            {en ? "Contact No" : "संपर्क क्रमांक"}
          </h2>
          <hr className="border-border mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {en
              ? "Thank you for your interest in service of Chhatrapati Sambhajinagar Municipal Corporation. Use the official channels below — this prototype does not host a live message inbox."
              : "छत्रपती संभाजीनगर महानगरपालिकेच्या सेवेत आपल्या स्वारस्याबद्दल धन्यवाद. खालील अधिकृत मार्ग वापरा — या प्रोटोटाइपवर थेट संदेश इनबॉक्स नाही."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <a
            href={OFFICIAL.citizenFeedback}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-civic-blue text-white rounded-lg px-3 py-2"
          >
            {en ? "Official citizen feedback form" : "अधिकृत नागरिक अभिप्राय फॉर्म"}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={OFFICIAL.samadhaan}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold border border-civic-blue text-civic-blue rounded-lg px-3 py-2"
          >
            {en ? "Samadhaan grievance" : "समाधान तक्रार"}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link to="/disaster-management" className="inline-flex items-center gap-1.5 text-xs font-bold border border-border rounded-lg px-3 py-2">
            {en ? "Emergency contacts" : "आपत्कालीन संपर्क"}
          </Link>
          <Link to="/how-to-reach" className="inline-flex items-center gap-1.5 text-xs font-bold border border-border rounded-lg px-3 py-2">
            {en ? "How to reach" : "कसे पोहोचावे"}
          </Link>
        </div>

        <div className="mb-10 border border-border rounded-lg overflow-hidden text-sm">
          <div className="bg-[#D6D8F0] px-4 py-2.5 font-bold text-civic-ink border-b border-border">
            {en ? "Key Contact" : "मुख्य संपर्क"}
          </div>
          <div className="divide-y divide-border bg-white">
            <div className="px-4 py-3">
              <p className="font-semibold text-civic-ink">Chhatrapati Sambhajinagar Municipal Corporation</p>
              <p className="text-muted-foreground mt-1">{en ? "Telephone No.:" : "दूरध्वनी क्र.:"} {d("02402333536")}</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-muted-foreground">{en ? "Mobile No.:" : "मोबाईल क्र.:"} {d("0242333537")}</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-muted-foreground">
                Email ID:{" "}
                <a href="mailto:contact@aurangabadmahapalika.org" className="text-civic-blue hover:underline">
                  contact@aurangabadmahapalika.org
                </a>
                {" / "}
                <a href="mailto:contact@chhsambhajinagarmc.org" className="text-civic-blue hover:underline">
                  contact@chhsambhajinagarmc.org
                </a>
              </p>
            </div>
            <div className="px-4 py-3">
              <p className="text-muted-foreground">
                {en
                  ? "Address: Main Building, Town Hall, behind Post Office, Chhatrapati Sambhajinagar, Maharashtra 431001"
                  : "पत्ता: मुख्य इमारत, टाऊन हॉल, पोस्ट ऑफिसच्या मागे, छत्रपती संभाजीनगर, महाराष्ट्र ४३१००१"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
