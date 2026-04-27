import { HomeLayout } from "@/components/site/Layout";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowRight, Calendar, Landmark, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-heritage.jpg"; // Placeholder image for video poster
import { NoticesPopup, useNoticesPopup } from "@/components/site/NoticesPopup";

// Example Guide for different formats:
// import devendraImg from "@/assets/leadership/devendraji_pic.png";
// import eknathImg from "@/assets/leadership/eknathji_pic.jpg";
// ... works for both .png and .jpg!

const icons = [
  Landmark,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
];

const SocialMediaSection = () => {
  const { lang } = useLang();
  const en = lang === "en";

  useEffect(() => {
    if ((window as any).FB) (window as any).FB.XFBML.parse();
    if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
  }, []);

  const FB_URL = "https://www.facebook.com/ChhSambhajinagarMC";
  const IG_URL = "https://www.instagram.com/csmcmahapalika/";

  return (
    <section className="py-12 bg-white border-t border-border">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-2">{en ? "Stay Connected" : "आमच्याशी जोडलेले राहा"}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-civic-blue font-bold">{en ? "Our Social Media" : "आपले सोशल मीडिया"}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Facebook */}
          <div className="border border-border rounded-xl overflow-hidden bg-white">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1877F2] text-white text-sm font-semibold">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              CSMC — Facebook
              <a href={FB_URL} target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition-colors">Follow</a>
            </div>
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_URL)}&tabs=timeline&width=500&height=460&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
              width="100%" height="460"
              style={{ border: "none", display: "block" }}
              scrolling="no" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="CSMC Facebook Page"
            />
            <a href={FB_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 text-[#1877F2] text-sm font-semibold border-t border-border hover:bg-blue-50 transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              View on Facebook →
            </a>
          </div>

          {/* Instagram */}
          <div className="border border-border rounded-xl overflow-hidden bg-white">
            <div className="flex items-center gap-2 px-4 py-2.5 text-white text-sm font-semibold"
              style={{ background: "linear-gradient(90deg,#f09433,#dc2743,#bc1888)" }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @csmcmahapalika
              <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition-colors">Follow</a>
            </div>
            <div className="p-4 min-h-[460px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={IG_URL}
                data-instgrm-version="14"
                style={{ background:"#FFF", border:"0", borderRadius:"3px", boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin:"0 auto", maxWidth:"540px", minWidth:"280px", padding:"0", width:"100%" }}
              >
                <a href={IG_URL} target="_blank" rel="noopener noreferrer">View @csmcmahapalika on Instagram</a>
              </blockquote>
            </div>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold border-t border-border hover:bg-pink-50 transition-colors"
              style={{ color: "#bc1888" }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              View on Instagram →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const { t, lang } = useLang();
  const en = lang === "en";
  const leadershipRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollGallery = (dir: "left" | "right") => {
    if (galleryRef.current) galleryRef.current.scrollBy({ left: dir === "left" ? -440 : 440, behavior: "smooth" });
  };
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<typeof leadership[0] | null>(null);
  const notices = useNoticesPopup();

  // Also open popup when Notices is clicked in navbar
  useEffect(() => {
    const handler = () => notices.show();
    window.addEventListener("open-notices-popup", handler);
    return () => window.removeEventListener("open-notices-popup", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (leadershipRef.current) observer.observe(leadershipRef.current);
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedLeader(null); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const leadership = [
    { name: en ? "Shri Devendra Fadnavis" : "श्री. देवेंद्र फडणवीस", role: en ? "Hon'ble Chief Minister of Maharashtra" : "मा. मुख्यमंत्री, महाराष्ट्र राज्य", image: "leadership/devendraji_pic.png" },
    { name: en ? "Shri Eknath Shinde" : "श्री. एकनाथ शिंदे", role: en ? "Hon'ble Deputy Chief Minister of Maharashtra" : "मा. उपमुख्यमंत्री, महाराष्ट्र राज्य", image: "leadership/eknathji_pic.png" },
    { name: en ? "Smt. Sunetra A. Pawar" : "सौ. सुनेत्रा अजित पवार", role: en ? "Hon'ble Deputy Chief Minister of Maharashtra" : "मा. उपमुख्यमंत्री, महाराष्ट्र राज्य", image: "leadership/Suntera_mam.jpeg" },
    { name: en ? "Smt. Madhuri Misal" : "सौ. माधुरी मिसाळ", role: en ? "Hon'ble Minister of State, Urban Development Department" : "मा. राज्यमंत्री, नगरविकास विभाग", image: "leadership/madhuri_misal2.jpg" },
    { name: en ? "Shri Sameer Rajurkar" : "श्री. समीर राजूरकर", role: en ? "Hon'ble Mayor" : "मा. महापौर", image: "leadership/samir-bhaiya-rajurkar.png" },
    { name: en ? "Shri Rajendra Janjal" : "श्री. राजेंद्र जांजळ", role: en ? "Hon'ble Deputy Mayor" : "मा. उपमहापौर", image: "leadership/raju-bhaiya-janjal1.png" },
    { name: en ? "Shri Amol Yedage" : "श्री. अमोल येडगे", role: en ? "Hon'ble Municipal Commissioner" : "मा. महानगरपालिका आयुक्त", image: "leadership/shri_amol_sir.png" },
  ];

  return (
    <HomeLayout>
      {/* Quick services */}
      <section className="py-20 bg-white relative z-10 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.1)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-3">{t.quick.title}</p>
            <h2 className="font-serif text-3xl md:text-5xl text-civic-blue font-bold mb-4">{en ? "Seamless Citizen Services" : "नागरिक सेवा"}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.quick.subtitle}</p>
            <div className="mx-auto mt-6 h-1.5 w-24 bg-gradient-heritage rounded-full" />
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {t.quick.items.map((item, i) => {
              const Icon = icons[i] ?? icons[0];
              const cls = "group bg-white border border-border rounded-3xl p-8 hover:shadow-elegant hover:border-civic-blue/20 transition-all hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden";
              const content = (
                <>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-civic-gold/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-civic-gold/20 transition-colors" />
                  <div className="h-16 w-16 grid place-items-center rounded-2xl bg-civic-blue/10 text-civic-blue mb-6 group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-civic-ink mb-3 group-hover:text-civic-blue transition-colors">{item.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.d}</p>
                  <div className="mt-6 flex items-center text-civic-red font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    {en ? "Access Service" : "सेवा मिळवा"} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </div>
                </>
              );
              return (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tools Strip */}
      {/* <section className="py-8 bg-civic-blue/5 border-y border-civic-blue/10">
        <div className="container flex flex-wrap justify-center gap-4">
          {[
            { to: "/track", label: "Track Application", icon: "🔍", desc: "Check real-time status" },
            { to: "/tax-calculator", label: "Tax Calculator", icon: "🧮", desc: "Estimate property tax" },
            { to: "/public-documents", label: "Public Documents", icon: "📄", desc: "RTI & resolutions" },
            { to: "/grievance", label: "Lodge Complaint", icon: "📝", desc: "Register grievance" },
          ].map(item => (
            <Link key={item.to} to={item.to}
              className="flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3 hover:shadow-elegant hover:border-civic-blue/30 hover:-translate-y-0.5 transition-all group">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-sm text-civic-blue group-hover:text-civic-red transition-colors">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* Leadership Section */}
      <section ref={leadershipRef} className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-2">{en ? "Our Leadership" : "आमचे नेतृत्व"}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold">{en ? "Honourable Leaders" : "मा. नेते"}</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-civic-gold to-civic-red rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5 pb-2 px-2">
            {leadership.map((person, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center shrink-0 w-[calc(50%-1rem)] sm:w-[calc(33%-1rem)] md:w-[calc(100%/7-1rem)] min-w-[100px] max-w-[140px] cursor-pointer"
                onClick={() => setSelectedLeader(person)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: isVisible
                    ? `opacity 300ms ease ${i * 70}ms, transform 300ms cubic-bezier(0.34,1.4,0.64,1) ${i * 70}ms`
                    : "none",
                }}
              >
                {/* Photo */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-3 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-civic-gold group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                  {person.image ? (
                    <img
                      src={person.image.startsWith("http") || person.image.startsWith("/")
                        ? person.image
                        : new URL(`../assets/${person.image}`, import.meta.url).href}
                      alt={person.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-civic-blue/10 text-civic-blue font-serif text-2xl font-bold">
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                </div>

                {/* Gold accent line */}
                <div className="w-8 h-0.5 bg-civic-gold rounded-full mb-2 group-hover:w-14 transition-all duration-200" />

                {/* Name */}
                <h3 className="text-[11px] md:text-xs font-bold text-civic-blue leading-snug mb-1 group-hover:text-civic-red transition-colors duration-150 px-1 line-clamp-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Inter', sans-serif" }}>
                  {person.name}
                </h3>

                {/* Role */}
                <p className="text-[10px] md:text-[11px] text-muted-foreground font-medium leading-tight px-1" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — moved to About CSMC page */}
      {/* <section className="py-24 bg-gradient-heritage text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 heritage-pattern" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">{t.stats.title}</h2>
            <div className="mx-auto mt-6 h-1.5 w-20 bg-civic-gold rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.statsItems.map((s, i) => (
              <div key={i} className="text-center group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                <p className="font-serif text-4xl md:text-6xl font-bold text-civic-gold mb-3 tabular-nums">{s.v}</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Gallery Section */}
      <section className="py-12 bg-civic-light">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-1">{en ? "Photo Gallery" : "छायाचित्र दालन"}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-civic-blue font-bold">{en ? "Corporation in Pictures" : "महानगरपालिका छायाचित्रांत"}</h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => scrollGallery("left")}
                className="w-9 h-9 rounded-full bg-civic-blue text-white flex items-center justify-center hover:bg-civic-gold hover:text-civic-ink transition-colors shadow-md">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => scrollGallery("right")}
                className="w-9 h-9 rounded-full bg-civic-blue text-white flex items-center justify-center hover:bg-civic-gold hover:text-civic-ink transition-colors shadow-md">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              <a href="/under-construction"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-civic-blue text-civic-blue font-bold text-xs hover:bg-civic-blue hover:text-white transition-all">
                {en ? "View All" : "सर्व पहा"} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div ref={galleryRef} className="flex gap-4 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}>
            {[
              { label: en ? "General Body Meeting" : "सर्वसाधारण सभा", bg: "from-civic-blue to-blue-800" },
              { label: en ? "Road Work Inauguration" : "रस्ते कामाचे उद्घाटन", bg: "from-amber-700 to-amber-500" },
              { label: en ? "Swachh Bharat Drive" : "स्वच्छ भारत अभियान", bg: "from-green-700 to-green-500" },
              { label: en ? "Water Supply Project" : "पाणी पुरवठा प्रकल्प", bg: "from-cyan-700 to-cyan-500" },
              { label: en ? "Tree Plantation Drive" : "वृक्षारोपण अभियान", bg: "from-emerald-700 to-emerald-500" },
              { label: en ? "Health Camp" : "आरोग्य शिबिर", bg: "from-red-700 to-red-500" },
              { label: en ? "Smart City ICCC Launch" : "स्मार्ट सिटी ICCC उद्घाटन", bg: "from-purple-700 to-purple-500" },
              { label: en ? "Cleanliness Drive" : "स्वच्छता मोहीम", bg: "from-orange-700 to-orange-500" },
              { label: en ? "Award Ceremony" : "पुरस्कार सोहळा", bg: "from-yellow-700 to-yellow-500" },
            ].map((item, i) => (
              <div key={i}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} group cursor-pointer shrink-0`}
                style={{ width: "200px", height: "200px" }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "10px 10px" }} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-white font-bold text-xs drop-shadow-md bg-black/30 px-2 py-1 rounded-lg">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="relative rounded-[3rem] bg-gradient-heritage p-10 md:p-20 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 heritage-pattern" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-civic-gold/20 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">{t.cta.title}</h3>
                <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">{t.cta.body}</p>
              </div>
              <Button asChild size="lg" className="bg-civic-gold text-civic-ink hover:bg-white px-10 py-8 text-xl font-bold shadow-2xl transition-all hover:scale-105 shrink-0">
                <Link to="/grievance">{t.cta.btn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Leader Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button — solid, always visible */}
            <div className="flex justify-end px-4 pt-4">
              <button
                onClick={() => setSelectedLeader(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-xl font-bold leading-none transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Photo — full, no overlay */}
            <div className="px-6 pb-2">
              <img
                src={selectedLeader.image.startsWith("http") || selectedLeader.image.startsWith("/")
                  ? selectedLeader.image
                  : new URL(`../assets/${selectedLeader.image}`, import.meta.url).href}
                alt={selectedLeader.name}
                className="w-full rounded-xl object-cover object-top"
                style={{ maxHeight: "280px" }}
              />
            </div>

            {/* Info */}
            <div className="px-6 pb-6 pt-3 text-center">
              <div className="w-10 h-0.5 bg-civic-gold rounded-full mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-civic-blue mb-1">{selectedLeader.name}</h3>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">{selectedLeader.role}</p>
            </div>
          </div>
        </div>
      )}

      <NoticesPopup open={notices.open} onClose={notices.hide} />

    </HomeLayout>
  );
};

export default Index;
