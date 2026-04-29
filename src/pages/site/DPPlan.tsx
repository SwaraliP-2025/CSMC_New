import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { useEffect } from "react";

const DPPlan = () => {
  const { lang } = useLang();
  const en = lang === "en";

  useEffect(() => {
    window.location.href = "https://sites.google.com/view/sanctioned-dp-2022-42/home";
  }, []);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Urban Planning" : "नगर नियोजन"}
        title={en ? "Development Plan" : "विकास आराखडा"}
        subtitle={en ? "Redirecting to DP Plan..." : "DP आराखड्याकडे जात आहे..."}
      />
      <section className="py-12 container text-center">
        <p className="text-muted-foreground">
          {en ? "Redirecting to Development Plan..." : "विकास आराखड्याकडे जात आहे..."}
        </p>
      </section>
    </Layout>
  );
};
export default DPPlan;
