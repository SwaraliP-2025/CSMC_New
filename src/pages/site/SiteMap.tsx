import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Main Pages", titleMr: "मुख्य पृष्ठे",
    links: [
      { label: "Home", labelMr: "मुख्यपृष्ठ", to: "/" },
      { label: "About CSMC", labelMr: "CSMC बद्दल", to: "/about" },
      { label: "Municipal Commissioner", labelMr: "महानगरपालिका आयुक्त", to: "/commissioner" },
      { label: "Departments", labelMr: "विभाग", to: "/departments" },
      { label: "Zones & Wards", labelMr: "झोन / प्रभाग", to: "/zones-wards" },
    ],
  },
  {
    title: "Citizen Services", titleMr: "नागरिक सेवा",
    links: [
      { label: "All Services", labelMr: "सर्व सेवा", to: "/services" },
      { label: "Track Application", labelMr: "अर्ज स्थिती", to: "/track" },
      { label: "Tax Calculator", labelMr: "कर कॅल्क्युलेटर", to: "/tax-calculator" },
      { label: "Lodge Grievance", labelMr: "तक्रार नोंदवा", to: "/grievance" },
    ],
  },
  {
    title: "Information", titleMr: "माहिती",
    links: [
      { label: "Public Notices", labelMr: "जाहीर सूचना", to: "/notices" },
      { label: "Govt. Orders", labelMr: "शासन निर्णय", to: "/govt-orders" },
      { label: "Public Documents", labelMr: "सार्वजनिक दस्तऐवज", to: "/public-documents" },
      { label: "Recruitment", labelMr: "भरती", to: "/recruitment" },
      { label: "Elections", labelMr: "निवडणूक", to: "/elections" },
    ],
  },
  {
    title: "Legal & Compliance", titleMr: "कायदेशीर",
    links: [
      { label: "RTI Act", labelMr: "माहिती अधिकार", to: "/rti-act" },
      { label: "RTS Act", labelMr: "सेवा हक्क", to: "/rts-act" },
      { label: "FAQ", labelMr: "सामान्य प्रश्न", to: "/faq" },
      { label: "Disaster Management", labelMr: "आपत्ती व्यवस्थापन", to: "/disaster-management" },
    ],
  },
  {
    title: "Contact", titleMr: "संपर्क",
    links: [
      { label: "Contact Us", labelMr: "संपर्क करा", to: "/contact" },
      { label: "Citizen Feedback", labelMr: "नागरिक अभिप्राय", to: "/grievance" },
    ],
  },
];

const SiteMap = () => {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <Layout>
      <PageHeader eyebrow={en ? "Navigation" : "नेव्हिगेशन"} title={en ? "Site Map" : "साइटमॅप"}
        subtitle={en ? "Complete directory of all pages on this website." : "या वेबसाइटवरील सर्व पृष्ठांची संपूर्ण निर्देशिका."} />
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-serif text-lg font-bold text-civic-blue mb-4 pb-2 border-b border-civic-gold/30">
                {en ? s.title : s.titleMr}
              </h2>
              <ul className="space-y-2">
                {s.links.map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-civic-blue transition-colors group">
                      <ChevronRight className="h-3.5 w-3.5 text-civic-gold group-hover:translate-x-0.5 transition-transform" />
                      {en ? l.label : l.labelMr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default SiteMap;
