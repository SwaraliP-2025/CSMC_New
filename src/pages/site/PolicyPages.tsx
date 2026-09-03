import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

type PolicyKind = "privacy" | "disclaimer" | "terms" | "accessibility" | "policies";

const META: Record<PolicyKind, { en: string; mr: string; eyebrowEn: string; eyebrowMr: string }> = {
  privacy: {
    en: "Privacy Policy",
    mr: "गोपनीयता धोरण",
    eyebrowEn: "Legal",
    eyebrowMr: "कायदेशीर",
  },
  disclaimer: {
    en: "Disclaimer",
    mr: "अस्वीकरण",
    eyebrowEn: "Legal",
    eyebrowMr: "कायदेशीर",
  },
  terms: {
    en: "Copyright & Terms of Use",
    mr: "कॉपीराइट व वापर अटी",
    eyebrowEn: "Legal",
    eyebrowMr: "कायदेशीर",
  },
  accessibility: {
    en: "Accessibility Statement",
    mr: "सुलभता निवेदन",
    eyebrowEn: "Inclusive access",
    eyebrowMr: "समावेशक प्रवेश",
  },
  policies: {
    en: "Website Policies",
    mr: "संकेतस्थळ धोरणे",
    eyebrowEn: "Legal",
    eyebrowMr: "कायदेशीर",
  },
};

function PolicyBody({ kind, en }: { kind: PolicyKind; en: boolean }) {
  const updated = en ? "03 September 2026" : "०३ सप्टेंबर २०२६";

  if (kind === "policies") {
    return (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          {en
            ? "This page links the principal website policies of the CSMC digital portal prototype."
            : "हे पृष्ठ CSMC डिजिटल पोर्टल प्रोटोटाइपच्या मुख्य संकेतस्थळ धोरणांचे दुवे देते."}
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <Link className="text-civic-blue font-semibold hover:underline" to="/privacy-policy">
              {en ? "Privacy Policy" : "गोपनीयता धोरण"}
            </Link>
          </li>
          <li>
            <Link className="text-civic-blue font-semibold hover:underline" to="/disclaimer">
              {en ? "Disclaimer" : "अस्वीकरण"}
            </Link>
          </li>
          <li>
            <Link className="text-civic-blue font-semibold hover:underline" to="/terms">
              {en ? "Copyright & Terms" : "कॉपीराइट व अटी"}
            </Link>
          </li>
          <li>
            <Link className="text-civic-blue font-semibold hover:underline" to="/accessibility-statement">
              {en ? "Accessibility Statement" : "सुलभता निवेदन"}
            </Link>
          </li>
        </ul>
        <p className="text-xs">
          {en ? "Last updated:" : "शेवटचे अद्यतन:"} {updated}
        </p>
      </div>
    );
  }

  if (kind === "privacy") {
    return (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          {en
            ? "Chhatrapati Sambhajinagar Municipal Corporation (CSMC) respects citizen privacy. Personal information submitted through official CSMC or State Government portals is processed only for civic service delivery, grievance redressal and statutory purposes."
            : "छत्रपती संभाजीनगर महानगरपालिका (CSMC) नागरिकांच्या गोपनीयतेचा आदर करते. अधिकृत CSMC किंवा राज्य शासन पोर्टलवर सादर केलेली वैयक्तिक माहिती केवळ नागरी सेवा, तक्रार निवारण व वैधानिक हेतूंसाठी वापरली जाते."}
        </p>
        <p>
          {en
            ? "This prototype website does not operate a live personal-data backend for contact or grievance forms. For transactions that require personal data, citizens are redirected to official CSMC / Maharashtra Government platforms."
            : "या प्रोटोटाइप संकेतस्थळावर संपर्क किंवा तक्रार फॉर्मसाठी थेट वैयक्तिक-डेटा बॅकएंड नाही. वैयक्तिक डेटा आवश्यक असलेल्या व्यवहारासाठी नागरिकांना अधिकृत CSMC / महाराष्ट्र शासन प्लॅटफॉर्मकडे वळवले जाते."}
        </p>
        <p>
          {en
            ? "Cookies or local storage may be used only for language preference, accessibility settings and similar UX preferences on this site."
            : "या संकेतस्थळावर भाषा प्राधान्य, सुलभता सेटिंग्ज व तत्सम UX प्राधान्यांसाठीच कुकीज किंवा लोकल स्टोरेज वापरले जाऊ शकते."}
        </p>
        <p className="text-xs">
          {en ? "Last updated:" : "शेवटचे अद्यतन:"} {updated}
        </p>
      </div>
    );
  }

  if (kind === "disclaimer") {
    return (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          {en
            ? "Information on this portal is published for citizen convenience. While every effort is made to keep content accurate, CSMC does not warrant completeness of prototype/sample documents or third-party feeds (weather, social embeds, maps)."
            : "या पोर्टलवरील माहिती नागरिकांच्या सोयीसाठी प्रकाशित आहे. अचूकता राखण्याचा प्रयत्न केला जातो, तरी प्रोटोटाइप/नमुना दस्तऐवज किंवा तृतीय-पक्षीय फीड (हवामान, सोशल एम्बेड, नकाशे) पूर्णतेची हमी CSMC देत नाही."}
        </p>
        <p>
          {en
            ? "Online payments, certificates, licences and grievances are completed only on the linked official government platforms. In case of conflict, the official portal / Gazette / municipal order prevails."
            : "ऑनलाइन पेमेंट, प्रमाणपत्रे, परवाने व तक्रारी केवळ जोडलेल्या अधिकृत शासन प्लॅटफॉर्मवर पूर्ण होतात. विरोधाभास असल्यास अधिकृत पोर्टल / राजपत्र / महापालिका आदेश अभिभावी राहील."}
        </p>
        <p className="text-xs">
          {en ? "Last updated:" : "शेवटचे अद्यतन:"} {updated}
        </p>
      </div>
    );
  }

  if (kind === "terms") {
    return (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          {en
            ? "Unless otherwise stated, content published by CSMC on this website is protected by applicable copyright and may be reused for non-commercial citizen information with attribution to CSMC."
            : "अन्यथा नमूद केल्याशिवाय, या संकेतस्थळावरील CSMC सामग्री लागू कॉपीराइट अंतर्गत संरक्षित आहे आणि CSMC श्रेय देऊन गैर-व्यावसायिक नागरिक माहितीसाठी वापरता येते."}
        </p>
        <p>
          {en
            ? "Users must not misuse forms, attempt unauthorised access, or scrape the site in a manner that degrades service. External links open third-party sites governed by their own terms."
            : "वापरकर्त्यांनी फॉर्मचा गैरवापर, अनधिकृत प्रवेश किंवा सेवा खराब करणारे स्क्रॅपिंग करू नये. बाह्य दुवे त्यांच्या स्वतःच्या अटींनुसार चालणाऱ्या तृतीय-पक्षीय साइट उघडतात."}
        </p>
        <p className="text-xs">
          {en ? "Last updated:" : "शेवटचे अद्यतन:"} {updated}
        </p>
      </div>
    );
  }

  // accessibility
  return (
    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
      <p>
        {en
          ? "CSMC aims for an inclusive citizen experience aligned with WCAG 2.2 Level AA and applicable GIGW / UX4G guidance. This prototype provides text resize, colour-blind friendly mode, bilingual content, skip-to-main-content, and keyboard-focusable controls."
          : "CSMC WCAG 2.2 Level AA व लागू GIGW / UX4G मार्गदर्शनाशी जुळणारा समावेशक नागरिक अनुभव लक्ष्य करते. या प्रोटोटाइपमध्ये अक्षर आकार, रंगांधळेपणा अनुकूल मोड, द्विभाषिक मजकूर, मुख्य मजकुरावर जा दुवा व कीबोर्ड-फोकस नियंत्रणे उपलब्ध आहेत."}
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>{en ? "Skip to main content (keyboard: Tab on page load)" : "मुख्य मजकुरावर जा (कीबोर्ड: पृष्ठ लोड झाल्यावर Tab)"}</li>
        <li>{en ? "Font size controls (A− / A / A+) in the top bar" : "टॉप बारमधील अक्षर आकार नियंत्रणे (A− / A / A+)"}</li>
        <li>{en ? "Colour-blind friendly palette toggle" : "रंगांधळेपणा अनुकूल पॅलेट टॉगल"}</li>
        <li>{en ? "Marathi / English language switch" : "मराठी / इंग्रजी भाषा स्विच"}</li>
        <li>{en ? "Voice-to-text in global search where the browser supports it" : "ब्राउझर समर्थन असल्यास जागतिक शोधात आवाज-ते-मजकूर"}</li>
      </ul>
      <p>
        {en
          ? "Known limitations of this prototype: some third-party embeds and sample documents may not meet full AA criteria; continuous improvement is planned for implementation."
          : "या प्रोटोटाइपच्या ज्ञात मर्यादा: काही तृतीय-पक्षीय एम्बेड व नमुना दस्तऐवज पूर्ण AA निकष पूर्ण करू शकत नाहीत; अंमलबजावणी टप्प्यात सुधारणा नियोजित आहे."}
      </p>
      <p className="text-xs">
        {en ? "Last updated:" : "शेवटचे अद्यतन:"} {updated}
      </p>
    </div>
  );
}

export function PolicyPage({ kind }: { kind: PolicyKind }) {
  const { lang } = useLang();
  const en = lang === "en";
  const meta = META[kind];
  return (
    <Layout>
      <PageHeader eyebrow={en ? meta.eyebrowEn : meta.eyebrowMr} title={en ? meta.en : meta.mr} />
      <section className="py-12 container max-w-3xl">
        <article className="bg-white border border-border rounded-2xl p-6 md:p-8">
          <PolicyBody kind={kind} en={en} />
        </article>
      </section>
    </Layout>
  );
}

export const PrivacyPolicy = () => <PolicyPage kind="privacy" />;
export const DisclaimerPage = () => <PolicyPage kind="disclaimer" />;
export const TermsPage = () => <PolicyPage kind="terms" />;
export const AccessibilityStatement = () => <PolicyPage kind="accessibility" />;
export const WebsitePolicies = () => <PolicyPage kind="policies" />;
