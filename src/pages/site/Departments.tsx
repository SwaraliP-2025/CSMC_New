import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "./DepartmentDetail";
import {
  UserCog, Users, HeartPulse, PawPrint, Waves, TreePine,
  Building, Receipt, Droplets, Landmark, Flame, FileCheck,
  Zap, Briefcase, ArrowRight
} from "lucide-react";

const ICONS = [UserCog, Users, Users, HeartPulse, PawPrint, Waves, TreePine, Building, Receipt, Droplets, Landmark, Flame, FileCheck, Zap, Briefcase];

const Departments = () => {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Departments" : "विभाग"}
        subtitle={en ? "Our departments work in concert to keep the city clean, safe and progressing." : "स्वच्छ, सुरक्षित आणि प्रगतशील शहरासाठी आमचे विभाग एकत्रितपणे कार्यरत आहेत."}
      />
      <section className="py-12 md:py-16 container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((dept, i) => {
            const Icon = ICONS[i] ?? UserCog;
            return (
              <Link
                key={dept.slug}
                to={`/departments/${dept.slug}`}
                className="group bg-white border border-border rounded-3xl p-6 md:p-8 hover:shadow-elegant hover:-translate-y-1 hover:border-civic-gold/30 transition-all flex flex-col gap-4"
              >
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-base md:text-lg font-bold text-civic-blue mb-1 group-hover:text-civic-red transition-colors">
                    {en ? dept.nameEn : dept.nameMr}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {en ? dept.designationEn : dept.designationMr}
                  </p>
                </div>
                <div className="flex items-center text-civic-blue font-bold text-xs gap-1 opacity-0 group-hover:opacity-100 transition-all">
                  {en ? "View Department" : "विभाग पहा"} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Departments;
