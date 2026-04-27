import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const routeLabels: Record<string, string> = {
  about: "About",
  departments: "Departments",
  services: "Citizen Services",
  notices: "Notices",
  tenders: "Tenders",
  contact: "Contact",
  "under-construction": "Under Construction",
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs font-semibold flex-wrap">
      <Link to="/" className="flex items-center gap-1 text-white/70 hover:text-civic-gold transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>
      {segments.map((seg, i) => {
        const path = "/" + segments.slice(0, i + 1).join("/");
        const label = routeLabels[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1);
        const isLast = i === segments.length - 1;
        return (
          <span key={path} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3 text-white/30" />
            {isLast ? (
              <span className="text-civic-gold">{label}</span>
            ) : (
              <Link to={path} className="text-white/70 hover:text-civic-gold transition-colors">{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export const PageHeader = ({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) => (
  <section className="bg-gradient-heritage text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 heritage-pattern" />
    <div className="container py-12 md:py-16 relative z-10">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-civic-gold mb-3 font-bold">{eyebrow}</p>
      )}
      <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3 tracking-tight">{title}</h1>
      {subtitle && <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed mb-4">{subtitle}</p>}
      <div className="mt-4 pt-4 border-t border-white/10">
        <Breadcrumb />
      </div>
    </div>
  </section>
);
