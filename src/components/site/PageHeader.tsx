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
  "user-manual": "User Manual",
};

export const PageHeader = ({
  title,
  subtitle,
  eyebrow,
  variant = "default",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  variant?: "default" | "dark";
}) => {
  const { pathname } = useLocation();
  const { lang } = useLang();
  const en = lang === "en";
  const dark = variant === "dark";
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div
      className={
        dark
          ? "bg-civic-blue text-white px-4 py-3"
          : "bg-white border-b border-border px-4 py-2.5"
      }
    >
      <div className="container">
        <nav
          aria-label="Breadcrumb"
          className={`flex items-center gap-1 text-xs flex-wrap ${dark ? "text-white/80" : "text-muted-foreground"}`}
        >
          <Link
            to="/"
            className={`flex items-center gap-1 transition-colors font-medium ${
              dark ? "hover:text-white" : "hover:text-civic-blue"
            }`}
          >
            <Home className="h-3 w-3" />
            <span>{en ? "Home" : "मुख्यपृष्ठ"}</span>
          </Link>
          {segments.map((seg, i) => {
            const path = "/" + segments.slice(0, i + 1).join("/");
            const label = routeLabels[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " ");
            const isLast = i === segments.length - 1;
            return (
              <span key={path} className="flex items-center gap-1">
                <ChevronRight className={`h-3 w-3 ${dark ? "opacity-60" : "opacity-40"}`} />
                {isLast ? (
                  <span className={`font-semibold ${dark ? "text-civic-gold" : "text-civic-blue"}`}>
                    {title || label}
                  </span>
                ) : (
                  <Link
                    to={path}
                    className={`transition-colors ${dark ? "hover:text-white" : "hover:text-civic-blue"}`}
                  >
                    {label}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
