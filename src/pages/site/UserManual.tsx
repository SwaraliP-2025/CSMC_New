import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import {
  Home,
  FileBadge,
  Flame,
  Droplets,
  Store,
  FileText,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";

type ManualItem = {
  titleEn: string;
  titleMr: string;
  icon: LucideIcon;
};

const manuals: ManualItem[] = [
  {
    titleEn: "How to pay property tax",
    titleMr: "मालमत्ता कर कसा भरावा",
    icon: Home,
  },
  {
    titleEn: "How to register a marriage",
    titleMr: "विवाह नोंदणी कशी करावी",
    icon: FileBadge,
  },
  {
    titleEn: "Fire services",
    titleMr: "अग्निशमन सेवा",
    icon: Flame,
  },
  {
    titleEn: "How to check and pay water tax",
    titleMr: "पाणी कर कसा तपासावा आणि भरावा",
    icon: Droplets,
  },
  {
    titleEn: "Trade license",
    titleMr: "व्यापारी परवाना",
    icon: Store,
  },
];

const topRow = manuals.slice(0, 3);
const bottomRow = manuals.slice(3);

const ManualCard = ({ item, en }: { item: ManualItem; en: boolean }) => {
  const Icon = item.icon;
  return (
    <article className="h-full min-h-[280px] bg-white rounded-xl shadow-card border border-border/60 p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-elegant hover:-translate-y-0.5 transition-all">
      <div
        className="mb-5 flex items-center justify-center w-[88px] h-[88px] shrink-0 rounded-2xl bg-civic-blue/10 text-civic-blue shadow-sm"
        aria-hidden
      >
        <Icon className="h-11 w-11" strokeWidth={1.5} />
      </div>

      <div className="flex items-center justify-center gap-3 mb-5 text-sm font-semibold shrink-0">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-civic-blue hover:text-civic-gold transition-colors"
          onClick={(e) => e.preventDefault()}
          aria-label={en ? `PDF — ${item.titleEn}` : `पीडीएफ — ${item.titleMr}`}
        >
          <FileText className="h-4 w-4 shrink-0 text-civic-blue" />
          {en ? "PDF" : "पीडीएफ"}
        </a>
        <span className="text-civic-blue/30 font-normal" aria-hidden>
          |
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-civic-blue hover:text-civic-gold transition-colors"
          onClick={(e) => e.preventDefault()}
          aria-label={en ? `Video — ${item.titleEn}` : `व्हिडिओ — ${item.titleMr}`}
        >
          <PlayCircle className="h-4 w-4 shrink-0 text-civic-blue" />
          {en ? "Video" : "व्हिडिओ"}
        </a>
      </div>

      <h2 className="mt-auto min-h-[3.5rem] flex items-center justify-center font-serif text-base sm:text-lg font-bold text-civic-blue leading-snug">
        {en ? item.titleEn : item.titleMr}
      </h2>
    </article>
  );
};

const UserManual = () => {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <Layout>
      <PageHeader
        variant="dark"
        title={en ? "User Manual" : "वापरकर्ता नियमावली"}
      />
      <section className="py-10 sm:py-12 bg-[#faf8f4] heritage-pattern min-h-[50vh]">
        <div className="container max-w-5xl">
          <div className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
              {topRow.map((item) => (
                <ManualCard key={item.titleEn} item={item} en={en} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 items-stretch sm:max-w-xl sm:mx-auto lg:max-w-none">
              {bottomRow.map((item, i) => (
                <div
                  key={item.titleEn}
                  className={i === 0 ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2"}
                >
                  <ManualCard item={item} en={en} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserManual;
