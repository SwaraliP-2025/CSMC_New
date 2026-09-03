import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { GlobalSearch } from "@/components/site/GlobalSearch";
import emblem from "@/assets/cs-emblem.png";
import ascdcl from "@/assets/ascdcl.png";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipArrow } from "@/components/ui/tooltip";
import { SITE_NAV, isExternalHref, type NavItem } from "@/navigation/siteNav";

const NAV = SITE_NAV;

// ─── Single nav item (desktop) ────────────────────────────────────────────────
const NavItemDesktop = ({ item, label, en }: { item: NavItem; label: string; en: boolean }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const dropdownTextCls = en ? "text-[12px]" : "text-[14px]";

  const isActive = item.to ? pathname === item.to : false;
  const isHome = item.to === "/";
  const baseCls = `${isHome ? "px-3" : "px-2"} py-3 text-[14px] font-bold tracking-wide text-white transition-all relative whitespace-nowrap flex items-center justify-center gap-1 cursor-pointer select-none ${isHome ? "h-full" : "w-full h-full"} ${isActive ? "bg-civic-gold text-civic-ink" : "hover:bg-civic-gold/80"}`;
  const content = isHome ? <Home className="h-4 w-4" aria-hidden /> : label;

  if (!item.children) {
    if (isExternalHref(item.to, item.external)) return <a href={item.to} target="_blank" rel="noopener noreferrer" className={baseCls} aria-label={label}>{content}</a>;
    // Notices item fires a custom event so the homepage popup opens
    if (item.to === "/notices") {
      return (
        <span className={baseCls} onClick={() => {
          window.dispatchEvent(new CustomEvent("open-notices-popup"));
        }}>
          {label}
        </span>
      );
    }
    return <Link to={item.to!} className={baseCls} aria-label={label} title={label}>{content}</Link>;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={baseCls}>
        {label}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (() => {
        const hasGroups = item.children!.some(c => c.children && c.children.length > 0);
        const renderLink = (child: NavItem) => {
          const childLabel = en ? child.labelEn : child.labelMr;
          const cls = `block px-3 py-1.5 ${dropdownTextCls} text-white hover:bg-civic-gold hover:text-civic-ink transition-colors rounded-sm`;
          if (isExternalHref(child.to, child.external)) {
            return (
              <a key={child.labelEn} href={child.to} target="_blank" rel="noopener noreferrer" className={cls}>
                {childLabel}
              </a>
            );
          }
          return (
            <Link key={child.labelEn} to={child.to!} className={cls}>
              {childLabel}
            </Link>
          );
        };

        if (hasGroups) {
          return (
            <div className="absolute top-full left-0 z-50 w-[min(96vw,900px)] bg-[#1a3a6b] shadow-2xl border-t-2 border-civic-gold rounded-b-lg overflow-hidden p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {item.children!.map(group => {
                  const groupLabel = en ? group.labelEn : group.labelMr;
                  return (
                    <div key={group.labelEn} className="min-w-0">
                      <div className={`px-2 py-1.5 mb-1 ${dropdownTextCls} text-civic-gold font-bold uppercase tracking-wider border-b border-civic-gold/40`}>
                        {groupLabel}
                      </div>
                      <div className="flex flex-col">
                        {(group.children ?? []).map(renderLink)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <div className="absolute top-full left-0 z-50 min-w-[280px] bg-[#1a3a6b] shadow-2xl border-t-2 border-civic-gold rounded-b-lg overflow-hidden">
            {item.children!.map(child => {
              const childLabel = en ? child.labelEn : child.labelMr;
              return (
                <div key={child.labelEn} className="border-b border-white/10 last:border-0">
                  {isExternalHref(child.to, child.external) ? (
                    <a href={child.to} target="_blank" rel="noopener noreferrer"
                      className={`block px-5 py-2 ${dropdownTextCls} text-white hover:bg-civic-gold hover:text-civic-ink transition-colors`}>
                      {childLabel}
                    </a>
                  ) : (
                    <Link to={child.to!}
                      className={`block px-5 py-2 ${dropdownTextCls} text-white hover:bg-civic-gold hover:text-civic-ink transition-colors`}>
                      {childLabel}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      })()}
    </div>
  );
};

// ─── Main Header ──────────────────────────────────────────────────────────────
export const Header = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [pathname]);

  const label = (item: NavItem) => en ? item.labelEn : item.labelMr;
  const whatsappLabel = en ? "Smart Chhatrapati Sambhajinagar WhatsApp Chatbot" : "स्मार्ट छत्रपती संभाजीनगर व्हॉट्सॲप चॅटबॉट";

  return (
    <header className="bg-white border-b border-border shadow-card-soft">
      {/* Row 1: Logo + hamburger (mobile) / Logo + all actions (desktop) */}
      <div className="container py-2 md:py-3 flex items-center justify-between gap-2 md:gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group min-w-0 flex-1">
          <img src={emblem} alt="CSMC Emblem" width={56} height={56}
            className="h-10 w-10 md:h-14 md:w-14 object-contain shrink-0 transition-transform group-hover:scale-105" />
          <div className="leading-tight min-w-0">
            <h1 className="font-serif text-sm sm:text-base md:text-xl text-civic-blue font-bold tracking-tight">
              {en ? "Chhatrapati Sambhajinagar Municipal Corporation" : "छत्रपती संभाजीनगर महानगरपालिका"}
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground font-normal hidden sm:block">
              {en ? "City of Heritage, Vision of Tomorrow" : "शहर वारसाचे, स्वप्न उद्याचे "}
            </p>
          </div>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://api.whatsapp.com/send?phone=919485202020&text=Hi" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full hover:scale-110 transition-transform"
              style={{ backgroundColor: "#25D366" }} aria-label={whatsappLabel}>
              <svg viewBox="0 0 32 32" width="18" height="18" fill="white"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.648 4.832 1.783 6.865L2 30l7.335-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.834-1.594l-.418-.248-4.352 1.046 1.074-4.234-.272-.435A11.46 11.46 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.388c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.581-.776-.592l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.328 1.405 3.558c.172.23 2.427 3.706 5.88 5.196.822.355 1.463.567 1.963.726.824.263 1.574.226 2.167.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.2-1.635-.086-.143-.316-.23-.66-.402z"/></svg>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" align="center" className="max-w-[220px] text-center">
            <span className="block leading-tight text-sm font-semibold">
              {whatsappLabel}
            </span>
            <TooltipArrow className="mx-auto mt-1" />
          </TooltipContent>
        </Tooltip>
        <Link to="/user-manual" className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold border-2 border-civic-blue text-civic-blue hover:bg-civic-blue hover:text-white transition-colors whitespace-nowrap">
          {en ? "User Manual" : "वापरकर्ता नियमावली"}
        </Link>
        <div className="hidden md:block">
          <GlobalSearch />
        </div>
      </div>

        {/* Mobile: ASCDCL logo + hamburger */}
        <div className="md:hidden flex items-center gap-2 shrink-0">
          <img src={ascdcl} alt="ASCDCL" width={40} height={40} className="h-9 w-9 object-contain" />
          <Button size="icon" variant="ghost" className="text-civic-blue"
            onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

      {/* Row 2 (mobile only): action buttons below logo */}
      <div className="md:hidden border-t border-border/50 px-3 py-2 flex items-center gap-2">
          <div className="relative flex items-center">
          <a href="https://api.whatsapp.com/send?phone=919485202020&text=Hi" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full hover:scale-110 transition-transform"
            style={{ backgroundColor: "#25D366" }} aria-label={whatsappLabel} title={whatsappLabel}>
            <svg viewBox="0 0 32 32" width="18" height="18" fill="white"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.648 4.832 1.783 6.865L2 30l7.335-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.834-1.594l-.418-.248-4.352 1.046 1.074-4.234-.272-.435A11.46 11.46 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.388c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.581-.776-.592l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.328 1.405 3.558c.172.23 2.427 3.706 5.88 5.196.822.355 1.463.567 1.963.726.824.263 1.574.226 2.167.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.2-1.635-.086-.143-.316-.23-.66-.402z"/></svg>
          </a>
        </div>
        <Link to="/user-manual" className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold border-2 border-civic-blue text-civic-blue whitespace-nowrap">
          {en ? "User Policy" : "वापरकर्ता नियमावली"}
        </Link>
        <GlobalSearch compact />
      </div>

      {/* Desktop nav */}
      <nav id="nav" className="hidden md:block bg-[#1a3a6b]">
        <div className="w-full flex items-stretch">
          {NAV.map(item => (
            <div key={item.labelEn} className={item.to === "/" ? "shrink-0" : "flex-1"}>
              <NavItemDesktop item={item} label={label(item)} en={en} />
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card max-h-[70vh] overflow-y-auto">
          {NAV.map(item => (
            <div key={item.labelEn}>
              {item.children ? (
                <>
                  <button onClick={() => setMobileExpanded(e => e === item.labelEn ? null : item.labelEn)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm border-b border-border font-semibold text-foreground">
                    {label(item)}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.labelEn ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.labelEn && item.children.map(child => (
                    child.children ? (
                      <div key={child.labelEn}>
                        <div className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-civic-blue bg-civic-blue/5 border-b border-border">
                          {label(child)}
                        </div>
                        {child.children.map(sub => (
                          isExternalHref(sub.to, sub.external) ? (
                            <a key={sub.labelEn} href={sub.to} target="_blank" rel="noopener noreferrer"
                              onClick={() => setMobileOpen(false)}
                              className="block px-10 py-2.5 text-sm border-b border-border text-muted-foreground">
                              {label(sub)}
                            </a>
                          ) : (
                            <Link key={sub.labelEn} to={sub.to!} onClick={() => setMobileOpen(false)}
                              className="block px-10 py-2.5 text-sm border-b border-border text-muted-foreground">
                              {label(sub)}
                            </Link>
                          )
                        ))}
                      </div>
                    ) : isExternalHref(child.to, child.external) ? (
                      <a key={child.labelEn} href={child.to} target="_blank" rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="block px-8 py-2.5 text-sm border-b border-border text-muted-foreground">
                        {label(child)}
                      </a>
                    ) : (
                      <Link key={child.labelEn} to={child.to!} onClick={() => setMobileOpen(false)}
                        className="block px-8 py-2.5 text-sm border-b border-border text-muted-foreground">
                        {label(child)}
                      </Link>
                    )
                  ))}
                </>
              ) : isExternalHref(item.to, item.external) ? (
                <a href={item.to} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm border-b border-border text-foreground">
                  {label(item)}
                </a>
              ) : (
                <Link to={item.to!} onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm border-b border-border ${pathname === item.to ? "bg-primary/5 text-primary font-semibold" : "text-foreground"}`}>
                  {label(item)}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};
