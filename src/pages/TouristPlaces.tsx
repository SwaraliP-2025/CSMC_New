import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { TouristCard } from "@/components/site/TouristCard";
import type { TouristPlaceRecord } from "@/lib/facilities";

const TouristPlaces = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [places, setPlaces] = useState<TouristPlaceRecord[]>([]);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/tourist-places.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.error("Failed to load tourist places:", err));
  }, []);

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Explore" : "शोधा"}
        title={en ? "Explore Chhatrapati Sambhajinagar" : "छत्रपती संभाजीनगर शोधा"}
        subtitle={
          en
            ? "Discover the city’s heritage attractions and plan your next visit."
            : "शहरातील वारसात्मक आकर्षण शोधा आणि पुढील भेटीचे नियोजन करा."
        }
      />
      <section className="py-10 container">
        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {places.map((place) => (
            <TouristCard key={place.id} place={place} en={en} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default TouristPlaces;
