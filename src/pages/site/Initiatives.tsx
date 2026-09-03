import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import {
  Sparkles,
  HeartHandshake,
  Trees,
  Dumbbell,
  Users,
  Trophy,
  CheckCircle2,
  Camera,
} from "lucide-react";
import cricketPlayground from "@/assets/initiatives/let-us-play/cricket-playground.png";
import obstacleCourse from "@/assets/initiatives/let-us-play/obstacle-course.png";
import multiPlaySystem from "@/assets/initiatives/let-us-play/multi-play-system.png";
import parkLandscape from "@/assets/initiatives/let-us-play/park-landscape.png";

const Initiatives = () => {
  const { lang } = useLang();
  const en = lang === "en";

  const highlights = en
    ? [
        "Development of safe and accessible neighbourhood play spaces",
        "Open playgrounds, multi-play systems and fitness areas",
        "Better utilisation of public open spaces",
        "Promotion of sports, recreation and healthier lifestyles",
        "Enhanced community participation and well-being",
      ]
    : [
        "सुरक्षित आणि सुलभ खेळाची मैदाने",
        "मल्टी-प्ले सुविधा व खुली व्यायामशाळा",
        "सार्वजनिक मोकळ्या जागांचा प्रभावी वापर",
        "क्रीडा, आरोग्यदायी जीवनशैली आणि मनोरंजनाला प्रोत्साहन",
        "समाजातील सहभाग आणि सार्वजनिक सुविधांचा अधिक चांगला वापर",
      ];

  const impactStats = en
    ? [
        { v: "68", l: "Colony-wise Multi-Play Spaces & Parks Developed" },
        { v: "20+", l: "Playgrounds Developed and Upgraded" },
        { v: "✓", l: "Safer recreational spaces for children and families" },
        { v: "✓", l: "Encouraging active and healthier communities" },
      ]
    : [
        { v: "६८", l: "वसाहत-स्तरीय मल्टी-प्ले स्पेसेस व उद्याने विकसित" },
        { v: "२०+", l: "खेळाची मैदाने विकसित व सुधारित" },
        { v: "✓", l: "मुलांसाठी व कुटुंबांसाठी सुरक्षित मनोरंजन सुविधा" },
        { v: "✓", l: "सक्रिय आणि निरोगी समाजनिर्मितीस प्रोत्साहन" },
      ];

  const gallery = [
    {
      src: cricketPlayground,
      altEn: "Children playing cricket at a newly developed turf playground",
      altMr: "नव्याने विकसित केलेल्या खेळाच्या मैदानावर क्रिकेट खेळणारी मुले",
    },
    {
      src: obstacleCourse,
      altEn: "Child on an outdoor obstacle course at a neighbourhood play space",
      altMr: "शेजारच्या खेळाच्या मैदानावरील अडथळा धावपट्टीवर मूल",
    },
    {
      src: multiPlaySystem,
      altEn: "Colourful multi-play system at a public park",
      altMr: "सार्वजनिक उद्यानातील रंगबिरंगी मल्टी-प्ले सुविधा",
    },
    {
      src: parkLandscape,
      altEn: "Landscaped public park developed under the Let Us Play initiative",
      altMr: "'आम्हाला खेळू द्या' उपक्रमांतर्गत विकसित केलेले उद्यान",
    },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Mahanagarpalika" : "महानगरपालिका"}
        title={en ? "Initiatives by CSMC" : "CSMC चे उपक्रम"}
        subtitle={
          en
            ? "Building a Better, Healthier and More Livable Chhatrapati Sambhajinagar"
            : "छत्रपती संभाजीनगर — अधिक चांगले, निरोगी आणि राहण्यास सुखकर शहर"
        }
      />

      {/* Intro */}
      <section className="py-10 container">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-civic-red mb-3">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold">
              {en ? "Citizen-Centric Initiatives" : "नागरिक-केंद्रित उपक्रम"}
            </span>
          </div>
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            {en
              ? "The Chhatrapati Sambhajinagar Municipal Corporation (CSMC) undertakes citizen-centric initiatives that promote sustainable urban development, healthier communities, and improved public spaces. These initiatives aim to enhance the quality of life while creating a safer and more inclusive city for all."
              : "छत्रपती संभाजीनगर महानगरपालिका (CSMC) शाश्वत शहरी विकास, निरोगी समुदाय आणि सुधारित सार्वजनिक जागांना प्रोत्साहन देणारे नागरिक-केंद्रित उपक्रम राबवते. या उपक्रमांचा उद्देश जीवनमान उंचावणे आणि सर्वांसाठी अधिक सुरक्षित व समावेशक शहर निर्माण करणे हा आहे."}
          </p>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="pb-14 container">
        <div className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
          {/* Feature header */}
          <div className="bg-gradient-heritage text-white px-6 py-8 md:px-10 md:py-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 heritage-pattern" />
            <div className="relative z-10">
              <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] bg-civic-gold text-civic-ink px-3 py-1 rounded-full mb-4">
                {en ? "Featured Initiative" : "वैशिष्ट्यीकृत उपक्रम"}
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold mb-2">
                {en ? "Let Us Play" : "आम्हाला खेळू द्या"}
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-2xl leading-relaxed">
                {en
                  ? "Creating Safe Spaces for Play, Fitness and Community Well-being"
                  : "सुरक्षित खेळाची मैदाने, निरोगी जीवनशैली आणि सशक्त समुदायासाठी एक उपक्रम"}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {/* Overview */}
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base max-w-4xl">
              {en
                ? "Let Us Play is a flagship initiative of the Chhatrapati Sambhajinagar Municipal Corporation (CSMC) under the PRAGATI Campaign, aimed at promoting sports culture, healthy lifestyles, and community well-being by developing safe, accessible, and inclusive play spaces across the city."
                : "'आम्हाला खेळू द्या' हा छत्रपती संभाजीनगर महानगरपालिका (CSMC) चा प्रगती (PRAGATI) अभियानांतर्गत राबविण्यात आलेला एक महत्त्वपूर्ण उपक्रम आहे. या उपक्रमाचा उद्देश शहरभर सुरक्षित, सर्वसमावेशक आणि सहज उपलब्ध खेळाची मैदाने व मनोरंजन सुविधा विकसित करून क्रीडा संस्कृतीला प्रोत्साहन देणे तसेच नागरिकांच्या आरोग्यदायी जीवनशैलीला बळकटी देणे हा आहे."}
            </p>

            {/* Why + Highlights */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-[#faf8f4] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HeartHandshake className="h-5 w-5 text-civic-red" />
                  <h3 className="font-serif text-lg font-bold text-civic-blue">
                    {en ? "Why This Initiative?" : "या उपक्रमाची गरज"}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {en
                    ? "With rapid urbanisation and increasing screen time, access to safe outdoor play spaces has become increasingly important. The initiative revitalises public open spaces and neighbourhood playgrounds, encouraging children and citizens to engage in outdoor activities, physical fitness, and community interaction."
                    : "वेगाने होणारे शहरीकरण आणि वाढता स्क्रीन टाइम यामुळे मुलांच्या मैदानी खेळाच्या संधी कमी होत आहेत. हा उपक्रम सार्वजनिक मोकळ्या जागा आणि खेळाची मैदाने विकसित करून मुलांना व नागरिकांना सुरक्षित वातावरणात खेळ, व्यायाम आणि सामाजिक सहभागासाठी प्रोत्साहित करतो."}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-civic-gold" />
                  <h3 className="font-serif text-lg font-bold text-civic-blue">
                    {en ? "Key Highlights" : "प्रमुख वैशिष्ट्ये"}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-civic-gold shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Users className="h-5 w-5 text-civic-blue" />
                <h3 className="font-serif text-xl font-bold text-civic-blue">
                  {en ? "Impact" : "उपक्रमाचा प्रभाव"}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {impactStats.map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-2xl border border-border bg-civic-blue/[0.04] px-5 py-4 text-center hover:border-civic-gold/40 transition-colors"
                  >
                    <p className="font-serif text-2xl md:text-3xl font-bold text-civic-blue mb-1.5 tabular-nums">
                      {stat.v}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug font-medium">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Camera className="h-5 w-5 text-civic-red" />
                <h3 className="font-serif text-xl font-bold text-civic-blue">
                  {en ? "Gallery" : "छायाचित्र दालन"}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
                {en
                  ? "Playgrounds and recreational spaces developed under the Let Us Play initiative."
                  : "'आम्हाला खेळू द्या' उपक्रमांतर्गत विकसित करण्यात आलेल्या विविध खेळाच्या मैदानांचे व सार्वजनिक मनोरंजन सुविधांचे छायाचित्र."}
              </p>

              <div className="max-w-2xl md:max-w-3xl mx-auto">
                <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                  {gallery.map((photo) => (
                    <div
                      key={photo.altEn}
                      className="group overflow-hidden rounded-xl border border-border bg-slate-100"
                    >
                      <img
                        src={photo.src}
                        alt={en ? photo.altEn : photo.altMr}
                        className="w-full h-28 sm:h-32 md:h-36 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-civic-red">
                <Trees className="h-3.5 w-3.5" />
                PRAGATI Campaign
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-civic-blue">
                <Dumbbell className="h-3.5 w-3.5" />
                {en ? "Sports & Recreation" : "क्रीडा व मनोरंजन"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Initiatives;
