import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Bell, Download, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { HERO_BANNER_SLIDES } from "@/data/heroBanners";
import bannerImg from "@/assets/banners/tax-rebate-banner.jpg";
import { isTourDoneForPromos } from "@/lib/tourPersistence";

const BANNER_SRC = bannerImg;
const NOTICES = HERO_BANNER_SLIDES.map((s) => ({
  id: s.id,
  title: s.titleEn,
  titleMr: s.titleMr,
  date: s.date ?? "",
  category: s.categoryEn ?? "Notice",
  categoryMr: s.categoryMr ?? "सूचना",
  link: s.link,
}));

const categoryColors: Record<string, string> = {
  Revenue: "bg-amber-100 text-amber-700",
  "Town Planning": "bg-blue-100 text-blue-700",
  "Water Supply": "bg-cyan-100 text-cyan-700",
  Tenders: "bg-red-100 text-red-700",
  Recruitment: "bg-green-100 text-green-700",
};

function useDialogFocus(open: boolean, onClose: () => void, closeRef: React.RefObject<HTMLButtonElement | null>) {
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement as HTMLElement | null;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      window.clearTimeout(t);
      triggerRef.current?.focus?.();
    };
  }, [open, onClose, closeRef]);
}

// ─── Banner Popup (auto-shows on page load) ───────────────────────────────────
export const BannerPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  useDialogFocus(open, onClose, closeRef);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="CSMC Notice"
        className="relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close notice"
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
        >
          <X className="h-5 w-5 text-gray-700" aria-hidden />
        </button>

        <img
          src={BANNER_SRC}
          alt="CSMC property tax rebate notice"
          className="w-full rounded-2xl shadow-2xl"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="bg-civic-blue text-white rounded-2xl p-8 text-center shadow-2xl">
                  <p class="text-2xl font-bold mb-2">माझा कर, माझी जबाबदारी</p>
                  <p class="text-lg mb-4">वेळेत कर भरा, 10% सूट मिळवा!</p>
                  <p class="text-sm opacity-80">30 एप्रिल 2026 पूर्वी मालमत्ता कर भरल्यास 10% सूट मिळेल</p>
                  <p class="text-xs mt-4 opacity-60">Save banner as src/assets/banners/tax-rebate-banner.jpg to show the image</p>
                </div>`;
            }
          }}
        />

        <div className="mt-3 flex justify-center">
          <a
            href="https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="bg-civic-gold text-civic-ink font-bold px-6 py-2.5 rounded-full text-sm hover:bg-white transition-colors shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            मालमत्ता कर भरा / Pay Property Tax →
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
};

// ─── Notices List Popup (opens when clicking Notices in nav) ─────────────────
export const NoticesPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const closeRef = useRef<HTMLButtonElement>(null);
  useDialogFocus(open, onClose, closeRef);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notices-dialog-title"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 bg-civic-blue text-white shrink-0">
          <Bell className="h-5 w-5 text-civic-gold" aria-hidden />
          <div>
            <h2 id="notices-dialog-title" className="font-bold text-base">
              {en ? "Latest Notices & Announcements" : "ताज्या सूचना व घोषणा"}
            </h2>
            <p className="text-xs text-white/70">
              {en ? "Press Escape or click outside to close" : "बंद करण्यासाठी Esc दाबा किंवा बाहेर क्लिक करा"}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={en ? "Close notices" : "सूचना बंद करा"}
            className="ml-auto w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="shrink-0 border-b border-border">
          <img
            src={BANNER_SRC}
            alt={en ? "CSMC notice banner" : "CSMC सूचना बॅनर"}
            className="w-full object-cover max-h-40"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div className="overflow-y-auto flex-1 divide-y divide-border">
          {NOTICES.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-4 px-5 py-4 hover:bg-muted/30 transition-colors group focus-within:bg-muted/30"
            >
              <div className="w-2 h-2 rounded-full bg-civic-red mt-2 shrink-0 animate-pulse" aria-hidden />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-civic-ink leading-snug">{d(en ? n.title : n.titleMr)}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryColors[n.category] || "bg-gray-100 text-gray-600"}`}
                  >
                    {en ? n.category : n.categoryMr}
                  </span>
                  <span className="text-xs text-muted-foreground">{d(n.date)}</span>
                </div>
              </div>
              <a
                href={n.link}
                target={n.link?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={onClose}
                className="shrink-0 flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-2.5 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
              >
                <Download className="h-3 w-3" aria-hidden /> {en ? "View" : "पहा"}
              </a>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 bg-muted/30 border-t border-border flex items-center justify-between shrink-0">
          <p className="text-xs text-muted-foreground">
            {en ? `${NOTICES.length} notices` : `${d(NOTICES.length)} सूचना`}
          </p>
          <a
            href="/notices"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-civic-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue rounded"
          >
            {en ? "View All Notices" : "सर्व सूचना पहा"} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
};

// ─── Hook — banner auto-shows on load, notices opens on nav click ─────────────
export const useNoticesPopup = () => {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [noticesOpen, setNoticesOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("banner_shown")) return;

    const tryShow = () => {
      if (localStorage.getItem("banner_shown")) return true;
      if (!isTourDoneForPromos()) return false;
      setBannerOpen(true);
      localStorage.setItem("banner_shown", "1");
      return true;
    };

    if (tryShow()) return;

    const poll = window.setInterval(() => {
      if (tryShow()) window.clearInterval(poll);
    }, 400);
    return () => window.clearInterval(poll);
  }, []);

  return {
    bannerOpen,
    noticesOpen,
    hideBanner: () => setBannerOpen(false),
    showNotices: () => setNoticesOpen(true),
    hideNotices: () => setNoticesOpen(false),
  };
};
