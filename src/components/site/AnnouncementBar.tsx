import { useLang } from "@/i18n/LanguageContext";
import { Bell, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { OFFICIAL } from "@/data/officialLinks";

/** Destinations/dates only — citizen-facing labels come from `t.announcements`. */
const DESTINATIONS: { to: string; external?: boolean; date: string }[] = [
  { to: OFFICIAL.gunthewari, external: true, date: "2026-04-10" },
  { to: "/city-alerts", date: "2026-08-14" },
  { to: "/digital-repository/not-tax-rebate", date: "2026-04-22" },
  { to: OFFICIAL.mahatenders, external: true, date: "2026-04-10" },
  { to: "/notices", date: "2026-08-01" },
];

export const AnnouncementBar = () => {
  const { t } = useLang();
  const labels = t.announcements.items;

  const itemClass =
    "flex items-center gap-2 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded border border-white/20 text-white text-[11px] font-medium cursor-pointer transition-colors";

  const renderItem = (index: number, keySuffix: string) => {
    const dest = DESTINATIONS[index % DESTINATIONS.length];
    const label = labels[index % labels.length] ?? "";
    const icon = index % DESTINATIONS.length < 2 ? <ImageIcon className="h-3 w-3" /> : <Bell className="h-3 w-3" />;
    const inner = (
      <>
        {icon}
        <span>
          {label}
          <span className="opacity-70 ml-1">({dest.date})</span>
        </span>
        {dest.external && <ExternalLink className="h-2.5 w-2.5 opacity-50" />}
      </>
    );
    if (dest.external) {
      return (
        <a key={`${dest.to}-${keySuffix}`} href={dest.to} target="_blank" rel="noopener noreferrer" className={itemClass}>
          {inner}
        </a>
      );
    }
    return (
      <Link key={`${dest.to}-${keySuffix}`} to={dest.to} className={itemClass}>
        {inner}
      </Link>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1100] flex h-10 bg-civic-blue overflow-hidden border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center px-6 bg-civic-gold text-civic-ink font-bold text-[10px] uppercase tracking-widest whitespace-nowrap z-10 border-r border-civic-ink/10">
        {t.announcements.label}
      </div>
      <div className="flex-1 overflow-hidden relative flex items-center bg-civic-blue">
        <div className="flex items-center gap-4 px-4 animate-marquee-fast whitespace-nowrap motion-reduce:animate-none">
          {DESTINATIONS.map((_, index) => renderItem(index, `a-${index}`))}
          {DESTINATIONS.map((_, index) => renderItem(index, `b-${index}`))}
        </div>
      </div>
    </div>
  );
};
