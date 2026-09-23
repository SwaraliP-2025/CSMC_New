import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { OFFICIAL } from "@/data/officialLinks";

const Tenders = () => {
  const { t, lang } = useLang();
  const en = lang === "en";

  useEffect(() => {
    window.location.replace(OFFICIAL.mahatenders);
  }, []);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Procurement" : "खरेदी"}
        title={t.nav.tenders}
        subtitle={
          en
            ? "Redirecting to the official MahaTenders portal for CSMC e-tenders…"
            : "CSMC ई-निविदांसाठी अधिकृत MahaTenders पोर्टलवर पुनर्निर्देशित करत आहे…"
        }
      />
      <section className="py-16 container text-center text-muted-foreground">
        <p>
          {en ? "If you are not redirected, " : "पुनर्निर्देशन झाले नसेल, तर "}
          <a
            href={OFFICIAL.mahatenders}
            target="_blank"
            rel="noopener noreferrer"
            className="text-civic-blue font-semibold underline"
          >
            {en ? "open MahaTenders" : "MahaTenders उघडा"}
          </a>
          .
        </p>
      </section>
    </Layout>
  );
};

export default Tenders;
