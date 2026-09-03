import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import type { TouristPlaceRecord } from "@/lib/facilities";
import { ArrowLeft, MapPin, Globe } from "lucide-react";
import { TouristCard } from "@/components/site/TouristCard";

const visitorTipsMap: Record<string, { en: string[]; mr: string[] }> = {
  "bibi-ka-maqbara": {
    en: [
      "Visit early in the morning to avoid crowds and enjoy the gardens.",
      "Capture the marble details by walking around the main platform.",
      "Carry water and wear comfortable shoes for the surrounding grounds."
    ],
    mr: [
      "लोक असण्यापूर्वी सकाळी भेट द्या आणि बागांचा आनंद घ्या.",
      "मुख्य प्लॅटफॉर्मभोवती फिरून संगमरवरी तपशील टिपा.",
      "आसाव्या पाण्याच्या बाटल्या बरोबर ठेवा आणि आरामदायक जोडपे घाला."
    ]
  },
  "ellora-caves": {
    en: [
      "Explore the carved temples slowly and respect the peaceful atmosphere.",
      "Take a guided tour to understand the history of the Kailasa temple.",
      "Carry a light sweater; caves can feel cool inside."
    ],
    mr: [
      "कोरणाऱ्या मंदिरांचा हळूहळू अभ्यास करा आणि शांत वातावरणाचा आदर करा.",
      "कैलासा मंदिराच्या इतिहासासाठी मार्गदर्शित फेरफटका घ्या.",
      "थोडी कार्डिगन किंवा स्वेटर बरोबर ठेवा; गुहा आत थंड वाटू शकते."
    ]
  },
  "ajanta-caves": {
    en: [
      "Focus on the frescoes and storytelling panels in each cave.",
      "Use a camera with good low-light performance for the interiors.",
      "Wear a hat and sunscreen for the walk from the parking area."
    ],
    mr: [
      "प्रत्येक गुहेतील भित्तीचित्रे आणि कथन पॅनेलवर लक्ष द्या.",
      "आतील भागांसाठी चांगल्या लो-लाइट कॅमेऱ्यासह फोटो घ्या.",
      "पार्किंग भागापासून चालण्यासाठी टोपली आणि सनस्क्रीन वापरा."
    ]
  },
  "daulatabad-fort": {
    en: [
      "Climb the ramparts for panoramic city views and photo spots.",
      "Wear sturdy shoes for the uneven stone paths and stairs.",
      "Visit the secret passage and historic gates while exploring."
    ],
    mr: [
      "नगराच्या जीवनमुक्त दृश्यांसाठी वरच्या भिंतींवर चढा.",
      "असंतुलीत दगडी मार्गांसाठी मजबूत जोडपे परिधान करा.",
      "गुफ्तद्वार आणि ऐतिहासिक फाटके पाहताना भटकंती करा."
    ]
  },
  "grishneshwar-temple": {
    en: [
      "Respect the temple rituals and dress modestly when entering.",
      "Attend the aarti if you want a peaceful spiritual experience.",
      "Explore nearby shops for prasadam and local sweets."
    ],
    mr: [
      "मंदिरात प्रवेश करताना विधींचा आदर करा आणि सौम्य पोशाख घाला.",
      "शांत आध्यात्मिक अनुभवासाठी आरतीत सहभागी व्हा.",
      "प्रसाद आणि स्थानिक गोड्यांसाठी जवळच्या दुकानांमध्ये भेट द्या."
    ]
  },
  "panchakki": {
    en: [
      "Enjoy the landscaped garden and observe the water mill mechanism.",
      "Bring a camera for the historic water channel and fountain views.",
      "Combine this visit with nearby heritage sites for a full day."
    ],
    mr: [
      "सुव्यवस्थित बागेचा आनंद घ्या आणि जलचक्र यंत्रणा पहा.",
      "ऐतिहासिक जलमार्ग आणि फव्वारा दृश्यांसाठी कॅमेरा बरोबर ठेवा.",
      "पूर्ण दिवसासाठी ह्या भेटीसह जवळच्या वारसा स्थळांचीही भेट द्या."
    ]
  },
  "siddharth-garden": {
    en: [
      "Take a leisurely walk through the shaded garden paths.",
      "Perfect place for family picnics and evening strolls.",
      "Look for local flower varieties and birdlife around the lake."
    ],
    mr: [
      "छायांकित बागेतील मार्गांवर आरामाने चालत जा.",
      "कुटुंबीय पिकनिक आणि संध्याकाळच्या फेरफटक्यांसाठी उत्तम ठिकाण.",
      " तलावाजवळील स्थानिक फुले आणि पक्ष्यांची निरीक्षण करा."
    ]
  },
  "soneri-mahal": {
    en: [
      "Admire the palace architecture and look for decorative details.",
      "Ask about the history of the estate from local guides.",
      "Choose the late afternoon for softer light in photographs."
    ],
    mr: [
      "महालाच्या वास्तुकलेचे कौतुक करा आणि सजावटीचे तपशील पहा.",
      "स्थानिक मार्गदर्शकांकडून इमारतीचा इतिहास विचारा.",
      "फोटोसाठी सौम्य प्रकाशासाठी दुपारी नंतर भेट देणे चांगले."
    ]
  }
};

const TouristAttractionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const en = lang === "en";
  const [place, setPlace] = useState<TouristPlaceRecord | null>(null);
  const [places, setPlaces] = useState<TouristPlaceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/tourist-places.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data: TouristPlaceRecord[]) => {
        setPlaces(data);
        const found = data.find((item) => item.slug === slug) ?? null;
        setPlace(found);
      })
      .catch((err) => console.error("Failed to load tourist details:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <section className="py-24 container text-center text-muted-foreground">
          {en ? "Loading details..." : "तपशील लोड करत आहे..."}
        </section>
      </Layout>
    );
  }

  if (!place) {
    return (
      <Layout>
        <section className="py-24 container text-center">
          <h1 className="font-serif text-3xl text-civic-blue font-bold mb-4">{en ? "Attraction not found" : "आकर्षण आढळले नाही"}</h1>
          <p className="text-muted-foreground mb-8">
            {en ? "Please return to the Explore section." : "कृपया शोधा विभागात परत या."}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-civic-blue px-5 py-3 text-sm font-semibold text-civic-blue hover:bg-civic-blue hover:text-white transition-all">
            <ArrowLeft className="h-4 w-4" />
            {en ? "Back to Home" : "मुख्य पृष्ठावर परत जा"}
          </Link>
        </section>
      </Layout>
    );
  }

  const resolveAssetUrl = (path: string) => {
    if (path.startsWith("/")) {
      return `${import.meta.env.BASE_URL}${path.slice(1)}`;
    }
    return `${import.meta.env.BASE_URL}${path}`;
  };

  const resolvedImage = resolveAssetUrl(place.image);
  const tips = visitorTipsMap[place.slug] ?? visitorTipsMap["bibi-ka-maqbara"];
  const relatedPlaces = places.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Explore" : "शोधा"}
        title={en ? place.nameEn : place.nameMr}
        subtitle={en ? place.detailsEn : place.detailsMr}
      />
      <section className="py-16 container">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm bg-slate-100 aspect-[16/9]">
            <img
              src={resolvedImage}
              alt={en ? place.nameEn : place.nameMr}
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23eef2ff'/%3E%3Cpath d='M100 200 L150 140 L190 180 L240 110 L300 190' stroke='%23566ee7' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='120' cy='190' r='18' fill='%23c7d2fe'/%3E%3Ccircle cx='280' cy='190' r='18' fill='%23c7d2fe'/%3E%3Crect x='140' y='90' width='120' height='80' rx='14' fill='%23c7d2fe'/%3E%3C/svg%3E";
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-civic-blue font-bold mb-4">{en ? place.nameEn : place.nameMr}</h2>

              {/* Distance badge */}
              {place.distanceKm && (
                <div className="inline-flex items-center gap-1.5 bg-civic-blue/8 text-civic-blue text-xs font-semibold rounded-full px-3 py-1 mb-4 border border-civic-blue/15">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {place.distanceKm}
                </div>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{en ? place.descriptionEn : place.descriptionMr}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{en ? place.detailsEn : place.detailsMr}</p>

              {/* How to visit — always shown */}
              <div className="mb-6 rounded-2xl bg-civic-blue/5 border border-civic-blue/10 p-4">
                <h3 className="font-semibold text-civic-blue mb-2 flex items-center gap-1.5">
                  <Globe className="h-4 w-4 shrink-0" />
                  {en ? "How to visit" : "भेट कशी घ्यावी"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {(en ? place.howToVisitEn : place.howToVisitMr) ?? (en
                    ? "Use the map link below to get directions and explore nearby attractions."
                    : "दिशा मिळवण्यासाठी खालील नकाशा लिंक वापरा.")}
                </p>
              </div>

              <a href={place.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-civic-blue px-5 py-3 text-sm font-semibold text-civic-blue hover:bg-civic-blue hover:text-white transition-all">
                <MapPin className="h-4 w-4" />
                {en ? "Open in Google Maps" : "गुगल नकाशात उघडा"}
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-civic-blue font-bold mb-4">{en ? "Visitor tips" : "भेटीसाठी टिप्स"}</h2>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-3">
                {(en ? tips.en : tips.mr).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-civic-red font-bold mb-2">{en ? "Explore nearby" : "जवळील आकर्षणे"}</p>
            <h2 className="font-serif text-3xl text-civic-blue font-bold">{en ? "Related attractions" : "संबंधित आकर्षणे"}</h2>
          </div>
          <Link to="/explore" className="text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors">
            {en ? "See all attractions" : "सर्व आकर्षणे पहा"}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedPlaces.map((related) => (
            <TouristCard key={related.id} place={related} en={en} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default TouristAttractionDetail;
