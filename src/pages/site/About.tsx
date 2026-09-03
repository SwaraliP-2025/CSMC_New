import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import {
  Landmark,
  Target,
  Eye,
  Award,
  BookOpen,
  Building2,
  MapPin,
  Music,
  ScrollText,
  Shirt,
  DoorOpen,
  UtensilsCrossed,
  Sparkles,
  Factory,
  GraduationCap,
  Plane,
  Users,
  LayoutGrid,
  TreePine,
  IndianRupee,
  CheckCircle2,
  Crown,
} from "lucide-react";
import aboutAjanta from "@/assets/about/ajanta-caves.png";
import aboutFestival from "@/assets/about/ellora-ajanta-festival.png";
import aboutHimroo from "@/assets/about/himroo-weaving.png";
import aboutDam from "@/assets/about/jaikwadi-dam.png";
import aboutPaithani from "@/assets/about/paithani-saree.png";
import aboutShivajiGate from "@/assets/about/shivaji-museum-gate.png";
import aboutDeogiri from "@/assets/about/deogiri-fort.png";
import aboutFrescoes from "@/assets/about/ajanta-wall-frescoes.png";
import aboutKranti from "@/assets/about/kranti-chowk.png";
import aboutElloraElephants from "@/assets/about/ellora-kailasa-elephants.png";
import bibiKaMaqbara from "@/assets/tourist/bibi-ka-maqbara.jpg";
import muncorpPic from "@/assets/muncorp_pic.png";

type CollageTile = {
  src: string;
  altEn: string;
  altMr: string;
  className: string;
  /** CSS object-position — keeps subject framed when filling the cell */
  objectPosition?: string;
  /** contain = show full image (no crop); cover = fill cell */
  fit?: "cover" | "contain";
  featured?: boolean;
};

/**
 * Layout (md): Ajanta + festival left; CSMC centre; Ellora frieze top-right;
 * Kranti Chowk statue bottom-right (portrait framed to fill the tile).
 */
const ABOUT_COLLAGE: CollageTile[] = [
  {
    src: aboutAjanta,
    altEn: "Ajanta Caves",
    altMr: "अजिंठा लेणी",
    className: "col-span-2 md:col-span-1 md:col-start-1 md:row-start-1",
    objectPosition: "center 45%",
  },
  {
    src: aboutFestival,
    altEn: "Ellora-Ajanta International Festival",
    altMr: "एलोरा-अजिंठा आंतरराष्ट्रीय महोत्सव",
    className: "col-span-2 md:col-span-1 md:col-start-1 md:row-start-2",
    fit: "contain",
    objectPosition: "center center",
  },
  {
    src: muncorpPic,
    altEn: "CSMC Main Building",
    altMr: "CSMC मुख्य इमारत",
    className:
      "col-span-4 row-span-2 md:col-span-3 md:row-span-2 md:col-start-2 md:row-start-1 order-first md:order-none",
    featured: true,
    objectPosition: "center 40%",
  },
  {
    src: aboutShivajiGate,
    altEn: "Shivaji Maharaj Museum gate",
    altMr: "शिवाजी महाराज संग्रहालय प्रवेशद्वार",
    className: "col-span-2 md:col-span-1 md:col-start-6 md:row-start-3",
    objectPosition: "center 35%",
  },
  {
    src: bibiKaMaqbara,
    altEn: "Bibi Ka Maqbara",
    altMr: "बीबी का मकबरा",
    className: "col-span-2 md:col-span-1 md:col-start-6 md:row-start-1",
    objectPosition: "center 40%",
  },
  {
    src: aboutElloraElephants,
    altEn: "Ellora Caves — Kailasa temple elephant carvings",
    altMr: "एलोरा लेणी — कैलास मंदिर हत्ती शिल्पे",
    className: "col-span-2 md:col-span-2 md:col-start-5 md:row-start-2",
    objectPosition: "center 55%",
  },
  {
    src: aboutDam,
    altEn: "Jayakwadi Dam",
    altMr: "जायकवाडी धरण",
    className: "col-span-2 md:col-span-1 md:col-start-1 md:row-start-3",
    objectPosition: "center 45%",
  },
  {
    src: aboutPaithani,
    altEn: "Paithani saree weaving",
    altMr: "पैठणी साडी विणकाम",
    className: "col-span-2 md:col-span-1 md:col-start-2 md:row-start-3",
    objectPosition: "center center",
  },
  {
    src: aboutHimroo,
    altEn: "Himroo weaving",
    altMr: "हिमरो विणकाम",
    className: "col-span-2 md:col-span-1 md:col-start-3 md:row-start-3",
    objectPosition: "center center",
  },
  {
    src: aboutFrescoes,
    altEn: "Ajanta wall frescoes",
    altMr: "अजिंठा भित्तिचित्रे",
    className: "col-span-2 md:col-span-1 md:col-start-5 md:row-start-3",
    fit: "contain",
    objectPosition: "center center",
  },
  {
    src: aboutDeogiri,
    altEn: "Deogiri Fort",
    altMr: "देवगिरी किल्ला",
    className: "col-span-2 md:col-span-1 md:col-start-4 md:row-start-3",
    objectPosition: "center 40%",
  },
  {
    src: aboutKranti,
    altEn: "Kranti Chowk — Chhatrapati Shivaji Maharaj statue",
    altMr: "क्रांती चौक — छत्रपती शिवाजी महाराज पुतळा",
    className: "col-span-2 md:col-span-1 md:col-start-5 md:row-start-1",
    fit: "contain",
    objectPosition: "center center",
  },
];

const About = () => {
  const { t, lang } = useLang();
  const en = lang === "en";

  const values = en
    ? [
        "Transparency",
        "Accountability",
        "Integrity",
        "Citizen-Centric Governance",
        "Sustainability",
        "Innovation",
        "Inclusiveness",
        "Heritage Conservation",
      ]
    : [
        "पारदर्शकता",
        "उत्तरदायित्व",
        "सचोटी",
        "नागरिक-केंद्रित शासन",
        "शाश्वतता",
        "नवोन्मेष",
        "समावेशकता",
        "वारसा संवर्धन",
      ];

  const keyFacts = en
    ? [
        { label: "Municipal Corporation Established", value: "8 December 1982" },
        { label: "Administrative Zones", value: "10" },
        { label: "Wards", value: "116" },
        { label: "Prabhags", value: "29" },
        { label: "Headquarters", value: "Town Hall, Chhatrapati Sambhajinagar" },
      ]
    : [
        { label: "महानगरपालिका स्थापना", value: "८ डिसेंबर १९८२" },
        { label: "प्रशासकीय विभाग", value: "१०" },
        { label: "वॉर्ड्स", value: "११६" },
        { label: "प्रभाग समूह", value: "२९" },
        { label: "मुख्यालय", value: "टाऊन हॉल, छत्रपती संभाजीनगर" },
      ];

  const cityStats = en
    ? [
        { Icon: Users, v: "17.5L+", l: "Population Served" },
        { Icon: LayoutGrid, v: "10", l: "Administrative Zones" },
        { Icon: Building2, v: "116", l: "Wards" },
        { Icon: MapPin, v: "29", l: "Prabhags" },
        { Icon: TreePine, v: "138", l: "Gardens & Parks" },
        { Icon: IndianRupee, v: "₹3,000 Cr", l: "Annual Budget" },
      ]
    : [
        { Icon: Users, v: "१७.५ लाख+", l: "सेवा देत असलेली लोकसंख्या" },
        { Icon: LayoutGrid, v: "१०", l: "प्रशासकीय विभाग" },
        { Icon: Building2, v: "११६", l: "वॉर्ड्स" },
        { Icon: MapPin, v: "२९", l: "प्रभाग समूह" },
        { Icon: TreePine, v: "१३८", l: "बागा व उद्याने" },
        { Icon: IndianRupee, v: "₹३,००० कोटी", l: "वार्षिक अर्थसंकल्प" },
      ];

  const timeline = en
    ? [
        {
          year: "12th–13th Century",
          title: "Deogiri & the Yadava Kingdom",
          body: "Deogiri (Daulatabad) rose as the capital of the Yadava dynasty — a powerful fortress-city that shaped the early political landscape of the Deccan.",
        },
        {
          year: "c. 13th Century",
          title: "Sharangadeva & Sangita Ratnakara",
          body: "The legendary musicologist Sharangadeva composed the Sangita Ratnakara at Deogiri, a foundational treatise that continues to influence Indian classical music.",
        },
        {
          year: "1610",
          title: "Malik Ambar founds Khadki",
          body: "Malik Ambar established the city of Khadki, laying the urban foundations of what would grow into a major Deccan capital.",
        },
        {
          year: "17th Century",
          title: "Mughal period & Aurangabad",
          body: "Under Mughal rule the city flourished as Aurangabad — known for its gates, gardens, monuments and strategic importance in the Deccan.",
        },
        {
          year: "1960",
          title: "Formation of Maharashtra",
          body: "With the formation of the State of Maharashtra, Aurangabad became the gateway to Marathwada and a growing industrial and educational hub.",
        },
        {
          year: "8 December 1982",
          title: "Establishment of CSMC",
          body: "Aurangabad Municipal Corporation was established on 8 December 1982, marking the beginning of organised municipal governance for the city — later known as the Chhatrapati Sambhajinagar Municipal Corporation (CSMC).",
        },
        {
          year: "15 September 2023",
          title: "Chhatrapati Sambhajinagar",
          body: "As per the government notification dated 15 September 2023, the city and the Municipal Corporation were officially renamed ‘Chhatrapati Sambhajinagar’.",
        },
      ]
    : [
        {
          year: "१२–१३ वे शतक",
          title: "देवगिरी व यादव राज्य",
          body: "देवगिरी (दौलताबाद) यादव राजवंशाची राजधानी म्हणून उदयास आले — दक्षिण भारताच्या राजकीय इतिहासातील एक महत्त्वपूर्ण किल्लेदार शहर.",
        },
        {
          year: "सु. १३ वे शतक",
          title: "शारंगदेव व संगीत रत्नाकर",
          body: "संगीतशास्त्रज्ञ शारंगदेवांनी देवगिरी येथे संगीत रत्नाकर रचला — भारतीय शास्त्रीय संगीतावर अजूनही प्रभाव असलेला मूलभूत ग्रंथ.",
        },
        {
          year: "१६१०",
          title: "मलिक अंबर व खडकीची स्थापना",
          body: "मलिक अंबर यांनी खडकी शहराची स्थापना केली, ज्यामुळे आजच्या शहराच्या शहरी पायाभरणीची सुरुवात झाली.",
        },
        {
          year: "१७ वे शतक",
          title: "मुघल काळ व औरंगाबाद",
          body: "मुघल काळात शहर औरंगाबाद म्हणून विकसित झाले — दरवाजे, उद्याने, स्मारके आणि दख्खनमधील रणनीतिक महत्त्वासाठी प्रसिद्ध.",
        },
        {
          year: "१९६०",
          title: "महाराष्ट्र राज्याची निर्मिती",
          body: "महाराष्ट्र राज्याच्या निर्मितीनंतर औरंगाबाद मराठवाड्याचे प्रवेशद्वार आणि वाढता औद्योगिक व शैक्षणिक केंद्र बनले.",
        },
        {
          year: "८ डिसेंबर १९८२",
          title: "CSMC ची स्थापना",
          body: "८ डिसेंबर १९८२ रोजी औरंगाबाद महानगरपालिकेची स्थापना झाली — शहराच्या संघटित नागरी प्रशासनाची सुरुवात; नंतर ती छत्रपती संभाजीनगर महानगरपालिका (CSMC) म्हणून ओळखली जाते.",
        },
        {
          year: "१५ सप्टेंबर २०२३",
          title: "छत्रपती संभाजीनगर",
          body: "१५ सप्टेंबर २०२३ रोजी शासनाच्या अधिसूचनेनुसार शहर व महानगरपालिकेचे नाव अधिकृतपणे ‘छत्रपती संभाजीनगर’ असे करण्यात आले.",
        },
      ];

  const cityHighlights = en
    ? [
        {
          Icon: MapPin,
          title: "Gateway to Marathwada",
          body: "Strategically located as the principal urban centre of the Marathwada region, connecting trade, culture and administration across central Maharashtra.",
        },
        {
          Icon: Factory,
          title: "Industrial & Educational Hub",
          body: "Home to major industrial estates, automobile and manufacturing units, and leading educational institutions that drive regional growth.",
        },
        {
          Icon: Landmark,
          title: "UNESCO World Heritage Nearby",
          body: "Located close to the world-renowned Ajanta and Ellora Caves, Chhatrapati Sambhajinagar serves as the gateway to two UNESCO World Heritage Sites, making it a significant destination for heritage and cultural tourism.",
        },
        {
          Icon: Crown,
          title: "Tourism Capital of Maharashtra",
          body: "Officially declared the Tourism Capital of Maharashtra, the city offers a rich blend of heritage, culture, cuisine, festivals, and hospitality, making it a year-round destination for domestic and international visitors.",
        },
        {
          Icon: Plane,
          title: "Strong Connectivity",
          body: "Well connected by air, rail and road to major metros, making it a convenient base for business, tourism and civic administration.",
        },
        {
          Icon: GraduationCap,
          title: "Major Economic Sectors",
          body: "Industry, tourism, education, agro-processing and services form the backbone of the city's diverse economy.",
        },
      ]
    : [
        {
          Icon: MapPin,
          title: "मराठवाड्याचे प्रवेशद्वार",
          body: "मराठवाडा प्रदेशातील प्रमुख शहरी केंद्र म्हणून व्यापाराचे, संस्कृतीचे आणि प्रशासनाचे मध्यवर्ती स्थान.",
        },
        {
          Icon: Factory,
          title: "औद्योगिक व शैक्षणिक केंद्र",
          body: "मोठे औद्योगिक वसाहत, ऑटोमोबाइल व उत्पादन युनिट्स तसेच प्रमुख शैक्षणिक संस्थांचे शहर — प्रादेशिक विकासाचे चालक.",
        },
        {
          Icon: Landmark,
          title: "जवळचे युनेस्को जागतिक वारसा स्थळे",
          body: "जगप्रसिद्ध अजिंठा व वेरूळ लेण्यांजवळ वसलेले छत्रपती संभाजीनगर ही दोन युनेस्को जागतिक वारसा स्थळांचे प्रवेशद्वार असून, वारसा व सांस्कृतिक पर्यटनासाठी महत्त्वाचे ठिकाण आहे.",
        },
        {
          Icon: Crown,
          title: "महाराष्ट्राची पर्यटन राजधानी",
          body: "अधिकृतपणे महाराष्ट्राची पर्यटन राजधानी म्हणून घोषित, शहर वारसा, संस्कृती, खाद्यसंस्कृती, उत्सव आणि आतिथ्याचा समृद्ध संगम देत असून, देशी व आंतरराष्ट्रीय पर्यटकांसाठी वर्षभर आकर्षणाचे ठिकाण आहे.",
        },
        {
          Icon: Plane,
          title: "उत्तम जोडणी",
          body: "हवाई, रेल्वे व रस्ता मार्गाने प्रमुख शहरांशी चांगली जोडणी — व्यवसाय, पर्यटन व प्रशासनासाठी सोयीस्कर.",
        },
        {
          Icon: GraduationCap,
          title: "प्रमुख आर्थिक क्षेत्रे",
          body: "उद्योग, पर्यटन, शिक्षण, कृषी प्रक्रिया व सेवा हे शहराच्या विविध अर्थव्यवस्थेचे आधारस्तंभ आहेत.",
        },
      ];

  const culturalItems = en
    ? [
        {
          Icon: ScrollText,
          title: "Saint Tradition & Folk Literature",
          body: "The region carries a rich bhakti and folk tradition — saints, poets and oral literature that continue to shape Marathi cultural identity.",
        },
        {
          Icon: Music,
          title: "Contribution to Indian Classical Music",
          body: "From Sangita Ratnakara to living gharana traditions, the city has a deep association with Hindustani classical music and performing arts.",
        },
        {
          Icon: Shirt,
          title: "Traditional Textiles & Handicrafts",
          body: "Himroo, mashru, paithani-inspired weaving and fine handicrafts reflect centuries of Deccan craftsmanship still practised today.",
        },
        {
          Icon: DoorOpen,
          title: "City of 52 Gates",
          body: "Historic darwazas once defined the city's fortifications and neighbourhoods — a distinctive urban heritage still visible across the old city.",
        },
        {
          Icon: UtensilsCrossed,
          title: "Culinary Heritage",
          body: "Naan Qalia, tahari, sheer khurma and other Deccani flavours make the city's food culture a cherished part of everyday life and celebration.",
        },
        {
          Icon: Sparkles,
          title: "Modern Cultural Heritage",
          body: "Festivals, museums, public art and contemporary cultural institutions keep the city's creative life vibrant alongside its historic legacy.",
        },
      ]
    : [
        {
          Icon: ScrollText,
          title: "संत परंपरा व लोकसाहित्य",
          body: "भक्ती व लोकपरंपरेचा समृद्ध वारसा — संत, कवी आणि मौखिक साहित्य मराठी सांस्कृतिक ओळखीला आकार देत राहिले आहे.",
        },
        {
          Icon: Music,
          title: "भारतीय शास्त्रीय संगीतातील योगदान",
          body: "संगीत रत्नाकरापासून ते जिवंत घराना परंपरांपर्यंत — हिंदुस्थानी शास्त्रीय संगीत व कला सादरीकरणाशी शहराचा खोल संबंध आहे.",
        },
        {
          Icon: Shirt,
          title: "पारंपरिक वस्त्रे व हस्तकला",
          body: "हिमरू, मश्रू, पैठणी-प्रेरित विणकाम आणि उत्कृष्ट हस्तकला — दख्खनी कारागिरीची शतकानुशतके चालत आलेली परंपरा.",
        },
        {
          Icon: DoorOpen,
          title: "५२ दरवाज्यांचे शहर",
          body: "ऐतिहासिक दरवाजे एकेकाळी शहराच्या संरक्षण व वस्त्यांची ओळख होते — जुन्या शहरात आजही दिसणारा वैशिष्ट्यपूर्ण वारसा.",
        },
        {
          Icon: UtensilsCrossed,
          title: "पाककला वारसा",
          body: "नान कालिया, तहारी, शीर खुरमा आणि इतर दख्खनी चव — शहराच्या अन्नसंस्कृतीचा जीवनातील व उत्सवातील अविभाज्य भाग.",
        },
        {
          Icon: Sparkles,
          title: "आधुनिक सांस्कृतिक वारसा",
          body: "उत्सव, संग्रहालये, सार्वजनिक कला आणि समकालीन सांस्कृतिक संस्था — ऐतिहासिक वारशासोबत शहराचे सर्जनशील जीवन जिवंत ठेवतात.",
        },
      ];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Our Story" : "आमच्याविषयी"}
        title={en ? "About CSMC & Chhatrapati Sambhajinagar" : "CSMC व छत्रपती संभाजीनगर बद्दल"}
        subtitle={
          en
            ? "The Corporation, the city, and the heritage we steward together."
            : "महानगरपालिका, शहर आणि आपण एकत्र जपत असलेला वारसा."
        }
      />

      {/* Heritage & civic collage — object-cover fills each cell; caption under CSMC */}
      <section
        aria-label={en ? "City and Corporation highlights" : "शहर व महानगरपालिका झलक"}
        className="relative w-full overflow-hidden bg-[#0a2748]"
      >
        <div className="grid grid-cols-4 auto-rows-[minmax(130px,1fr)] md:grid-cols-6 md:grid-rows-[repeat(3,minmax(175px,1fr))] gap-2 md:gap-2.5 p-2 md:p-2.5 min-h-[min(92vw,560px)] md:h-[min(54vw,680px)]">
          {ABOUT_COLLAGE.map((tile, i) => (
            <div
              key={`${tile.altEn}-${i}`}
              className={`relative overflow-hidden rounded-lg ring-1 ring-white/10 group ${tile.className} ${
                tile.featured
                  ? "flex flex-col bg-[#0a2748] ring-2 ring-civic-gold/80 shadow-[0_8px_28px_rgba(0,0,0,0.28)]"
                  : "bg-[#0a2748]"
              }`}
            >
              {tile.featured ? (
                <>
                  <div className="relative min-h-0 flex-1 overflow-hidden">
                    <img
                      src={tile.src}
                      alt={en ? tile.altEn : tile.altMr}
                      className="about-collage-img absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      style={{
                        animationDelay: `${i * 55}ms`,
                        objectPosition: tile.objectPosition ?? "center center",
                      }}
                      loading="eager"
                    />
                  </div>
                  <p className="relative z-10 shrink-0 bg-civic-blue px-2 py-1.5 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.14em] text-civic-gold">
                    {en ? "CSMC Main Building" : "CSMC मुख्य इमारत"}
                  </p>
                </>
              ) : (
                <img
                  src={tile.src}
                  alt={en ? tile.altEn : tile.altMr}
                  className={`about-collage-img absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                    tile.fit === "contain" ? "object-contain" : "object-cover"
                  }`}
                  style={{
                    animationDelay: `${i * 55}ms`,
                    objectPosition: tile.objectPosition ?? "center center",
                  }}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative z-10 border-t border-white/10 bg-gradient-to-r from-civic-blue via-[#123a6b] to-civic-blue px-4 py-4 md:px-8 md:py-5">
          <div className="container max-w-7xl">
            <h2 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug md:whitespace-nowrap">
              {en
                ? "Chhatrapati Sambhajinagar Municipal Corporation — Serving a City of Heritage and Progress"
                : "छत्रपती संभाजीनगर महानगरपालिका — वारसा, विकास आणि लोकाभिमुख प्रशासन"}
            </h2>
            <p className="mt-1.5 text-xs md:text-[13px] lg:text-sm text-white/80 leading-relaxed md:whitespace-nowrap">
              {en
                ? "Dedicated to delivering efficient civic services, sustainable urban development, and citizen-centric governance while preserving the rich cultural, historical, and architectural legacy of Chhatrapati Sambhajinagar"
                : "समृद्ध सांस्कृतिक, ऐतिहासिक आणि वास्तुशिल्पीय वारशाचे संवर्धन करत कार्यक्षम नागरी सेवा, शाश्वत शहरी विकास आणि नागरिकाभिमुख प्रशासनाद्वारे शहराच्या सर्वांगीण प्रगतीसाठी कटिबद्ध."}
            </p>
          </div>
        </div>
      </section>

      {/* 1. About CSMC — left intro; right Mission / Vision / Values */}
      <section className="py-16 container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-10">
          <div className="h-full flex flex-col rounded-2xl border border-border bg-white p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-civic-red mb-3">
              <Building2 className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold">
                {en ? "About CSMC" : "CSMC बद्दल"}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold mb-4 leading-tight">
              {en
                ? "Chhatrapati Sambhajinagar Municipal Corporation"
                : "छत्रपती संभाजीनगर महानगरपालिका"}
            </h2>
            <div className="h-1.5 w-20 bg-gradient-saffron rounded-full mb-6" />
            <p className="text-foreground/80 leading-relaxed text-lg flex-1">
              {en
                ? "The Chhatrapati Sambhajinagar Municipal Corporation (CSMC) is the Urban Local Body responsible for the planning, administration, and delivery of civic services within the municipal limits of Chhatrapati Sambhajinagar. The Corporation is committed to transparent governance, sustainable urban development, and citizen-centric services while preserving the city's rich historical and cultural heritage."
                : "छत्रपती संभाजीनगर महानगरपालिका (CSMC) ही छत्रपती संभाजीनगरच्या महानगरपालिका हद्दीत नियोजन, प्रशासन आणि नागरी सेवा देण्यासाठी जबाबदार असलेली शहरी स्थानिक स्वराज्य संस्था आहे. पारदर्शक शासन, शाश्वत शहरी विकास आणि नागरिक-केंद्रित सेवा तसेच शहराचा ऐतिहासिक व सांस्कृतिक वारसा जपण्यास महानगरपालिका कटिबद्ध आहे."}
            </p>
          </div>

          <div className="flex flex-col gap-5 h-full">
            <div className="bg-white border border-border rounded-2xl p-6 md:p-7 hover:shadow-elegant transition-all flex gap-4 items-start group flex-1">
              <div className="h-12 w-12 shrink-0 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-civic-blue mb-2">
                  {en ? "Our Mission" : "आमचे ध्येय"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {en
                    ? "Deliver transparent, efficient, and citizen-first civic services that improve the quality of life while ensuring sustainable urban development."
                    : "पारदर्शक, कार्यक्षम आणि नागरिक-प्रथम नागरी सेवा देऊन जीवनमान उंचावणे तसेच शाश्वत शहरी विकास सुनिश्चित करणे."}
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 md:p-7 hover:shadow-elegant transition-all flex gap-4 items-start group flex-1">
              <div className="h-12 w-12 shrink-0 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-civic-blue mb-2">
                  {en ? "Our Vision" : "आमचे स्वप्न"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {en
                    ? "To build Chhatrapati Sambhajinagar as a clean, sustainable, inclusive, technologically advanced, and heritage-rich city."
                    : "छत्रपती संभाजीनगरला स्वच्छ, शाश्वत, समावेशक, तंत्रज्ञानाने सक्षम आणि वारसासंपन्न शहर म्हणून घडवणे."}
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 md:p-7 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-civic-gold/10 text-civic-gold">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-civic-blue">
                  {en ? "Our Values" : "आमची मूल्ये"}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-[#faf8f4] px-3 py-2.5 text-sm font-semibold text-civic-blue"
                  >
                    <CheckCircle2 className="h-4 w-4 text-civic-gold shrink-0" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* History + Key Facts */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="h-5 w-5 text-civic-red" />
              <h3 className="font-serif text-2xl font-bold text-civic-blue">
                {en ? "History of the Corporation" : "महानगरपालिकेचा इतिहास"}
              </h3>
            </div>
            <ul className="space-y-4 text-foreground/80 leading-relaxed">
              <li className="pl-4 border-l-4 border-civic-gold/50">
                {en ? (
                  <>
                    <strong className="text-civic-blue">8 December 1982</strong> — Aurangabad Municipal Corporation was established.
                  </>
                ) : (
                  <>
                    <strong className="text-civic-blue">८ डिसेंबर १९८२</strong> — औरंगाबाद महानगरपालिकेची स्थापना झाली.
                  </>
                )}
              </li>
              <li className="pl-4 border-l-4 border-civic-gold/50">
                {en
                  ? "The Corporation has continuously strengthened civic administration through planned urban development, digital governance, GIS-based planning, and citizen-centric services."
                  : "नियोजित शहरी विकास, डिजिटल शासन, GIS-आधारित नियोजन आणि नागरिक-केंद्रित सेवांद्वारे महानगरपालिकेने नागरी प्रशासन सातत्याने बळकट केले आहे."}
              </li>
              <li className="pl-4 border-l-4 border-civic-gold/50">
                {en ? (
                  <>
                    Following the official renaming of the city, the civic body is now known as the{" "}
                    <strong className="text-civic-blue">Chhatrapati Sambhajinagar Municipal Corporation (CSMC).</strong>
                  </>
                ) : (
                  <>
                    शहराच्या अधिकृत नामकरणानंतर ही संस्था आता{" "}
                    <strong className="text-civic-blue">छत्रपती संभाजीनगर महानगरपालिका (CSMC)</strong> म्हणून ओळखली जाते.
                  </>
                )}
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="bg-civic-blue px-6 py-4">
              <h3 className="font-serif text-xl font-bold text-white">
                {en ? "Key Facts" : "मुख्य तथ्ये"}
              </h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {keyFacts.map((fact, i) => (
                  <tr key={fact.label} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f4]"}>
                    <td className="px-6 py-3.5 font-medium text-muted-foreground border-t border-border w-[48%]">
                      {fact.label}
                    </td>
                    <td className="px-6 py-3.5 font-bold text-civic-blue border-t border-border">
                      {fact.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2. Our City in Numbers */}
      <section className="py-16 bg-gradient-heritage text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 heritage-pattern" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{t.stats.title}</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-civic-gold rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cityStats.map(({ Icon, v, l }) => (
              <div
                key={l}
                className="text-center group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <Icon className="h-5 w-5 text-civic-gold mx-auto mb-3 opacity-90" />
                <p className="font-serif text-2xl md:text-3xl font-bold text-civic-gold mb-2 tabular-nums">{v}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-80 leading-snug">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. History of the City */}
      <section className="py-16 container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          <div className="lg:w-[38%] shrink-0">
            <div className="inline-flex items-center gap-2 text-civic-red mb-3">
              <Landmark className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold">
                {en ? "Timeline" : "कालरेषा"}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold mb-4 leading-tight">
              {en ? "History of Chhatrapati Sambhajinagar" : "छत्रपती संभाजीनगरचा इतिहास"}
            </h2>
            <div className="h-1.5 w-20 bg-gradient-saffron rounded-full mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-6">
              {en
                ? "From the Yadava capital of Deogiri to a modern municipal city, Chhatrapati Sambhajinagar carries centuries of Deccan history."
                : "देवगिरीच्या यादव राजधानीपासून आधुनिक महानगरपालिका शहरापर्यंत — छत्रपती संभाजीनगर दख्खनी इतिहासाची शतकानुशतके जपत आहे."}
            </p>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src={aboutDeogiri}
                alt={en ? "Deogiri Fort" : "देवगिरी किल्ला"}
                className="w-full h-56 object-cover object-[center_40%]"
              />
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-civic-gold/30 hidden sm:block" />
            <ol className="space-y-6">
              {timeline.map((item) => (
                <li key={item.title} className="sm:pl-8 relative">
                  <span className="hidden sm:block absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-civic-gold border-2 border-white shadow" />
                  <p className="text-xs font-bold uppercase tracking-widest text-civic-red mb-1">{item.year}</p>
                  <h3 className="font-serif text-lg font-bold text-civic-blue mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. About the City */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-civic-red mb-3">
                <MapPin className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">
                  {en ? "The City" : "शहर"}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold mb-4 leading-tight">
                {en ? "About the City" : "शहराबद्दल"}
              </h2>
              <div className="h-1.5 w-20 bg-gradient-saffron rounded-full mb-6" />
              <p className="text-foreground/80 leading-relaxed text-lg">
                {en
                  ? "Chhatrapati Sambhajinagar is one of Maharashtra's most iconic cities — a gateway to Marathwada, an industrial and educational hub, and home to world-famous heritage within easy reach."
                  : "छत्रपती संभाजीनगर महाराष्ट्रातील एक प्रतिष्ठित शहर आहे — मराठवाड्याचे प्रवेशद्वार, औद्योगिक व शैक्षणिक केंद्र, आणि जगप्रसिद्ध वारसास्थळांच्या सहज पोहोचण्याजवळचे शहर."}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutKranti}
                alt={
                  en
                    ? "Kranti Chowk — Chhatrapati Shivaji Maharaj statue"
                    : "क्रांती चौक — छत्रपती शिवाजी महाराज पुतळा"
                }
                className="rounded-2xl w-full max-w-[220px] md:max-w-[260px] h-auto object-contain shadow-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityHighlights.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-elegant transition-all"
              >
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-civic-blue/8 text-civic-blue mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className={`text-lg font-bold text-civic-blue mb-2 ${en ? "font-serif" : "devanagari"}`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm text-muted-foreground leading-relaxed ${en ? "" : "devanagari"}`}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cultural Heritage */}
      <section className="py-16 container">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-civic-red mb-3">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold">
              {en ? "Heritage & Culture" : "वारसा व संस्कृती"}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-civic-blue font-bold mb-4 leading-tight">
            {en ? "Cultural Heritage" : "सांस्कृतिक वारसा"}
          </h2>
          <div className="h-1.5 w-20 bg-gradient-saffron rounded-full mb-6" />
          <p className="text-foreground/80 leading-relaxed text-lg">
            {en
              ? "Beyond monuments and fortresses, the city lives through its saints, music, crafts, gates, cuisine and contemporary cultural life."
              : "स्मारके व किल्ल्यांपलीकडे — संत, संगीत, हस्तकला, दरवाजे, पाककला आणि समकालीन सांस्कृतिक जीवनाने हे शहर जिवंत आहे."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalItems.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="group bg-white border border-border rounded-2xl p-7 hover:shadow-elegant transition-all hover:border-civic-gold/40"
            >
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold mb-5 group-hover:bg-civic-blue group-hover:text-white transition-all duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-civic-blue mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
