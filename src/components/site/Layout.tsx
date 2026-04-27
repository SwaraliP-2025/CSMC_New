import { ReactNode, useEffect, useState } from "react";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnnouncementBar } from "./AnnouncementBar";
import { VideoHero } from "./VideoHero";
import { AppsBar } from "./AppsBar";
import { ChevronUp } from "lucide-react";

const SiteHeader = () => (
  <div className="sticky top-0 z-50 w-full">
    <TopBar />
    <Header />
  </div>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Go to top"
      className="fixed bottom-20 right-6 z-50 flex items-center gap-1.5 rounded-full bg-civic-blue text-white shadow-lg px-3 py-2.5 hover:bg-civic-gold hover:text-civic-ink transition-all duration-200 hover:scale-105"
    >
      <ChevronUp className="h-5 w-5 shrink-0" />
      {hovered && <span className="text-xs font-bold whitespace-nowrap">Go to Top</span>}
    </button>
  );
};

// Home layout — includes the hero banner
export const HomeLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <VideoHero />
    <main id="main" className="flex-1 mb-10 pb-12">{children}</main>
    <AppsBar />
    <Footer />
    <AnnouncementBar />
    <ScrollToTop />
  </div>
);

// Standard layout — no hero banner (used on all sub-pages)
export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <main id="main" className="flex-1 mb-10 pb-12">{children}</main>
    <AppsBar />
    <Footer />
    <AnnouncementBar />
    <ScrollToTop />
  </div>
);
