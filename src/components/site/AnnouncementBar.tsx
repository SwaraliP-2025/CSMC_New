import { useLang } from "@/i18n/LanguageContext";
import { Bell, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const AnnouncementBar = () => {
  const { t } = useLang();

  const icons = [
    <ImageIcon className="h-3 w-3" />,
    <ImageIcon className="h-3 w-3" />,
    <ImageIcon className="h-3 w-3" />,
    <Bell className="h-3 w-3" />,
    <Bell className="h-3 w-3" />,
  ];

  const announcementItems = t.announcements.items.map((label, i) => ({
    label,
    icon: icons[i],
  }));

  const itemClass = "flex items-center gap-2 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded border border-white/20 text-white text-[11px] font-medium cursor-pointer transition-colors";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-10 bg-civic-blue overflow-hidden border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      {/* Label */}
      <div className="flex items-center px-6 bg-civic-gold text-civic-ink font-bold text-[10px] uppercase tracking-widest whitespace-nowrap z-10 border-r border-civic-ink/10">
        {t.announcements.label}
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden relative flex items-center bg-civic-blue">
        <div className="flex items-center gap-4 px-4 animate-marquee-fast whitespace-nowrap">
          {[...announcementItems, ...announcementItems].map((item, index) => (
            <Link key={index} to="/under-construction" className={itemClass}>
              {item.icon}
              <span>{item.label}</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-50" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
