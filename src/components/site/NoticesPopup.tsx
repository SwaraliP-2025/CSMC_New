import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Bell, Download, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

// ─── Save your banner image as: src/assets/banners/tax-rebate-banner.jpg ───
// Then uncomment: import bannerImg from "@/assets/banners/tax-rebate-banner.jpg";
// For now using dynamic import with fallback
const BANNER_SRC = new URL("../assets/banners/tax-rebate-banner.jpg", import.meta.url).href;

const NOTICES = [
  { id: 1, title: "Property Tax Rebate — 10% discount till 30 April 2026", titleMr: "मालमत्ता कर सवलत — ३० एप्रिल २०२६ पर्यंत १०% सूट", date: "1 Apr 2026", category: "Revenue", categoryMr: "महसूल", link: "https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi" },
  { id: 2, title: "Gunthewari Regularisation Scheme — Apply Now", titleMr: "गुंठेवारी नियमितीकरण योजना — आता अर्ज करा", date: "15 Mar 2026", category: "Town Planning", categoryMr: "नगर रचना", link: "https://rts.chhsambhajinagarmc.org/links/gunthewari_form_codev2" },
  { id: 3, title: "Water Supply Shutdown — Zone 3 & 4 on 28 Apr 2026", titleMr: "पाणी पुरवठा बंद — झोन ३ व ४, २८ एप्रिल २०२६", date: "25 Apr 2026", category: "Water Supply", categoryMr: "पाणी पुरवठा", link: "/notices" },
  { id: 4, title: "New e-Tender: SWM Phase II — NIT No. CSMC/SWM/2026/01", titleMr: "नवीन ई-निविदा: SWM टप्पा II — NIT क्र. CSMC/SWM/2026/01", date: "10 Apr 2026", category: "Tenders", categoryMr: "निविदा", link: "https://mahatenders.gov.in/nicgep/app" },
  { id: 5, title: "Recruitment Notice — Junior Engineer (Civil) — 12 Posts", titleMr: "भरती सूचना — कनिष्ठ अभियंता (स्थापत्य) — १२ जागा", date: "5 Apr 2026", category: "Recruitment", categoryMr: "भरती", link: "/recruitment" },
];

const categoryColors: Record<string, string> = {
  Revenue: "bg-amber-100 text-amber-700",
  "Town Planning": "bg-blue-100 text-blue-700",
  "Water Supply": "bg-cyan-100 text-cyan-700",
  Tenders: "bg-red-100 text-red-700",
  Recruitment: "bg-green-100 text-green-700",
};

// ─── Banner Popup (auto-shows on page load) ───────────────────────────────────
export const BannerPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      onClick={onClose}>
      <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Banner image */}
        <img
          src={BANNER_SRC}
          alt="CSMC Notice"
          className="w-full rounded-2xl shadow-2xl"
          onError={(e) => {
            // Fallback if image not yet added
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

        {/* Action button */}
        <div className="mt-3 flex justify-center">
          <a href="https://chhsambhajinagarmc.org/TaxCollection/pg/property/getPropertyPgWebApi"
            target="_blank" rel="noopener noreferrer"
            onClick={onClose}
            className="bg-civic-gold text-civic-ink font-bold px-6 py-2.5 rounded-full text-sm hover:bg-white transition-colors shadow-lg">
            मालमत्ता कर भरा / Pay Property Tax →
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ─── Notices List Popup (opens when clicking Notices in nav) ─────────────────
export const NoticesPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { lang } = useLang();
  const en = lang === "en";

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-civic-blue text-white shrink-0">
          <Bell className="h-5 w-5 text-civic-gold" />
          <div>
            <h2 className="font-bold text-base">{en ? "Latest Notices & Announcements" : "ताज्या सूचना व घोषणा"}</h2>
            <p className="text-xs text-white/70">{en ? "Click outside or Esc to close" : "बंद करण्यासाठी बाहेर क्लिक करा"}</p>
          </div>
          <button onClick={onClose}
            className="ml-auto w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Banner image at top of notices */}
        <div className="shrink-0 border-b border-border">
          <img src={BANNER_SRC} alt="CSMC Notice"
            className="w-full object-cover max-h-40"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        </div>

        {/* Notices list */}
        <div className="overflow-y-auto flex-1 divide-y divide-border">
          {NOTICES.map(n => (
            <div key={n.id} className="flex items-start gap-4 px-5 py-4 hover:bg-muted/30 transition-colors group">
              <div className="w-2 h-2 rounded-full bg-civic-red mt-2 shrink-0 animate-pulse" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-civic-ink leading-snug">{en ? n.title : n.titleMr}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryColors[n.category] || "bg-gray-100 text-gray-600"}`}>
                    {en ? n.category : n.categoryMr}
                  </span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
              </div>
              <a href={n.link} target={n.link?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" onClick={onClose}
                className="shrink-0 flex items-center gap-1 text-xs font-bold text-civic-blue border border-civic-blue px-2.5 py-1.5 rounded-lg hover:bg-civic-blue hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <Download className="h-3 w-3" /> {en ? "View" : "पहा"}
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-muted/30 border-t border-border flex items-center justify-between shrink-0">
          <p className="text-xs text-muted-foreground">{en ? `${NOTICES.length} notices` : `${NOTICES.length} सूचना`}</p>
          <a href="/notices" onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-civic-blue hover:text-civic-red transition-colors">
            {en ? "View All Notices" : "सर्व सूचना पहा"} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ─── Hook — banner auto-shows on load, notices opens on nav click ─────────────
export const useNoticesPopup = () => {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [noticesOpen, setNoticesOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBannerOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return {
    bannerOpen,
    noticesOpen,
    hideBanner: () => setBannerOpen(false),
    showNotices: () => setNoticesOpen(true),
    hideNotices: () => setNoticesOpen(false),
  };
};
