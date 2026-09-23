import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { facilityCategoryMap } from "@/lib/facilities";

const routeLabels: Record<string, { en: string; mr: string }> = {
  about: { en: "About", mr: "आमच्याबद्दल" },
  initiatives: { en: "Initiatives by CSMC", mr: "CSMC चे उपक्रम" },
  departments: { en: "Departments", mr: "विभाग" },
  services: { en: "Citizen Services", mr: "नागरिक सेवा" },
  notices: { en: "Notices", mr: "सूचना" },
  tenders: { en: "Tenders", mr: "निविदा" },
  contact: { en: "Contact", mr: "संपर्क" },
  commissioner: { en: "Municipal Commissioner", mr: "महापालिका आयुक्त" },
  "commissioners-list": { en: "Commissioners' List", mr: "आयुक्तांची यादी" },
  "mayors-list": { en: "Mayors' List", mr: "महापौरांची यादी" },
  "deputy-mayors-list": { en: "Deputy Mayors' List", mr: "उपमहापौरांची यादी" },
  organization: { en: "Organogram", mr: "संघटना आकृती" },
  "zones-wards": { en: "Zones & Wards", mr: "झोन व प्रभाग" },
  "know-your-corporator": { en: "Know Your Corporator", mr: "आपला नगरसेवक" },
  track: { en: "Track Application", mr: "अर्ज स्थिती" },
  "tax-calculator": { en: "Tax Calculator", mr: "कर कॅल्क्युलेटर" },
  "public-documents": { en: "Public Documents", mr: "सार्वजनिक दस्तऐवज" },
  grievance: { en: "Grievance", mr: "तक्रार" },
  faq: { en: "FAQ", mr: "सामान्य प्रश्न" },
  "rti-act": { en: "RTI Act", mr: "माहिती अधिकार" },
  "rts-act": { en: "RTS Act", mr: "सेवा हक्क" },
  recruitment: { en: "Recruitment", mr: "भरती" },
  elections: { en: "Elections", mr: "निवडणुका" },
  "disaster-management": { en: "Disaster Management", mr: "आपत्ती व्यवस्थापन" },
  "govt-orders": { en: "Govt. Orders", mr: "शासन निर्णय" },
  "site-map": { en: "Site Map", mr: "साइटमॅप" },
  "dp-plan": { en: "DP Plan", mr: "विकास आराखडा" },
  "under-construction": { en: "Under Construction", mr: "कार्यप्रगतीत" },
  "user-manual": { en: "User Manual", mr: "वापरकर्ता नियमावली" },
  "digital-repository": { en: "Municipal Knowledge Repository", mr: "ज्ञान भांडार" },
  "city-alerts": { en: "Live City Alerts", mr: "शहर इशारे" },
  "privacy-policy": { en: "Privacy Policy", mr: "गोपनीयता धोरण" },
  disclaimer: { en: "Disclaimer", mr: "अस्वीकरण" },
  terms: { en: "Copyright & Terms", mr: "अटी व शर्ती" },
  "accessibility-statement": { en: "Accessibility Statement", mr: "सुलभता विधान" },
  "website-policies": { en: "Website Policies", mr: "संकेतस्थळ धोरणे" },
  "how-to-reach": { en: "How to Reach", mr: "कसे पोहोचावे" },
  stories: { en: "Photo Gallery", mr: "छायाचित्र दालन" },
  gallery: { en: "Photo Gallery", mr: "छायाचित्र दालन" },
  search: { en: "Search", mr: "शोध" },
  "public-facilities": { en: "Public Facilities", mr: "सार्वजनिक सुविधा" },
};

function segmentLabel(seg: string, en: boolean): string {
  const facility = facilityCategoryMap[seg];
  if (facility) return en ? facility.titleEn : facility.titleMr;
  const known = routeLabels[seg];
  if (known) return en ? known.en : known.mr;
  return seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " ");
}

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
  const { lang, t } = useLang();
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
          aria-label={t.facilities.breadcrumbAria}
          className={`flex items-center gap-1 text-xs flex-wrap ${dark ? "text-white/80" : "text-muted-foreground"}`}
        >
          <Link
            to="/"
            className={`flex items-center gap-1 transition-colors font-medium ${
              dark ? "hover:text-white" : "hover:text-civic-blue"
            }`}
          >
            <Home className="h-3 w-3" aria-hidden />
            <span>{en ? "Home" : "मुख्यपृष्ठ"}</span>
          </Link>
          {segments.map((seg, i) => {
            const path = "/" + segments.slice(0, i + 1).join("/");
            const label = segmentLabel(seg, en);
            const isLast = i === segments.length - 1;
            const to = seg === "stories" && !isLast ? "/gallery" : path;
            return (
              <span key={path} className="flex items-center gap-1">
                <ChevronRight className={`h-3 w-3 ${dark ? "opacity-60" : "opacity-40"}`} aria-hidden />
                {isLast ? (
                  <span className={`font-semibold ${dark ? "text-civic-gold" : "text-civic-blue"}`}>
                    {title || label}
                  </span>
                ) : (
                  <Link
                    to={to}
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
