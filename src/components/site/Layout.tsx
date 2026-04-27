import { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnnouncementBar } from "./AnnouncementBar";
import { VideoHero } from "./VideoHero";
import { AppsBar } from "./AppsBar";
import { AccessibilityToolbar } from "./AccessibilityToolbar";

const SiteHeader = () => (
  <div className="sticky top-0 z-50 w-full">
    <TopBar />
    <Header />
  </div>
);

// Home layout — includes the hero banner
export const HomeLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <VideoHero />
    <main id="main" className="flex-1 mb-10">{children}</main>
    <AppsBar />
    <Footer />
    <AnnouncementBar />
    <AccessibilityToolbar />
  </div>
);

// Standard layout — no hero banner (used on all sub-pages)
export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <main id="main" className="flex-1 mb-10">{children}</main>
    <AppsBar />
    <Footer />
    <AnnouncementBar />
    <AccessibilityToolbar />
  </div>
);
