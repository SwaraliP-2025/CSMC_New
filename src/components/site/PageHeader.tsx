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
  commissioner: "Municipal Commissioner",
  "commissioners-list": "Commissioners' List",
  "mayors-list": "Mayors' List",
  organization: "Organogram",
  "zones-wards": "Zones & Wards",
  track: "Track Application",
  "tax-calculator": "Tax Calculator",
  "public-documents": "Public Documents",
  grievance: "Grievance",
  faq: "FAQ",
  "rti-act": "RTI Act",
  "rts-act": "RTS Act",
  recruitment: "Recruitment",
  elections: "Elections",
  "disaster-management": "Disaster Management",
  "govt-orders": "Govt. Orders",
  "site-map": "Site Map",
  "dp-plan": "DP Plan",
  "under-construction": "Under Construction",
};

export const PageHeader = ({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) => {
  const { pathname } = useLocation();
  const { lang } = useLang();
  const en = lang === "en";
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="bg-white border-b border-border px-4 py-2.5">
      <div className="container">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap">
          <Link to="/" className="flex items-center gap-1 hover:text-civic-blue transition-colors font-medium">
            <Home className="h-3 w-3" />
            <span>{en ? "Home" : "मुख्यपृष्ठ"}</span>
          </Link>
          {segments.map((seg, i) => {
            const path = "/" + segments.slice(0, i + 1).join("/");
            const label = routeLabels[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " ");
            const isLast = i === segments.length - 1;
            return (
              <span key={path} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3 opacity-40" />
                {isLast ? (
                  <span className="text-civic-blue font-semibold">{title || label}</span>
                ) : (
                  <Link to={path} className="hover:text-civic-blue transition-colors">{label}</Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
