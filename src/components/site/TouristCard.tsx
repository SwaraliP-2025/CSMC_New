import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import type { TouristPlaceRecord } from "@/lib/facilities";

const resolveAssetUrl = (path: string) => {
  if (path.startsWith("/")) {
    return `${import.meta.env.BASE_URL}${path.slice(1)}`;
  }
  return `${import.meta.env.BASE_URL}${path}`;
};

export const TouristCard = ({
  place,
  en,
}: {
  place: TouristPlaceRecord;
  en: boolean;
  /** @deprecated Cards are compact by default */
  compact?: boolean;
}) => {
  const resolvedImage = place.image ? resolveAssetUrl(place.image) : "";
  const makeSrcSet = (ext: string) => {
    const base = resolvedImage.replace(/\.[a-zA-Z0-9]+$/i, "");
    return [400, 800, 1200].map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");
  };

  const webpSrcSet = makeSrcSet("webp");
  const jpgSrcSet = makeSrcSet("jpg");

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-elegant transition-all h-full flex flex-col">
      <Link to={`/tourist-attraction/${place.slug}`} className="block flex-1">
        {/* Taller 4:3 frame so monuments/landmarks show more fully */}
        <div className="overflow-hidden relative bg-slate-100 rounded-t-2xl w-full aspect-[4/3]">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              srcSet={webpSrcSet}
              type="image/webp"
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
            />
            <img
              src={resolvedImage}
              srcSet={jpgSrcSet}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
              alt={en ? place.nameEn : place.nameMr}
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23eef2ff'/%3E%3Cpath d='M100 200 L150 140 L190 180 L240 110 L300 190' stroke='%23566ee7' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='120' cy='190' r='18' fill='%23c7d2fe'/%3E%3Ccircle cx='280' cy='190' r='18' fill='%23c7d2fe'/%3E%3Crect x='140' y='90' width='120' height='80' rx='14' fill='%23c7d2fe'/%3E%3C/svg%3E";
              }}
              className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </picture>
        </div>
        <div className="px-4 pt-3.5">
          <h3 className="font-serif text-base md:text-lg font-bold leading-snug text-civic-blue line-clamp-2">
            {en ? place.nameEn : place.nameMr}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
            {en ? place.descriptionEn : place.descriptionMr}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4 pt-3 flex items-center justify-between gap-2 mt-auto">
        {place.distanceKm && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium truncate">
            <MapPin className="h-3.5 w-3.5 text-civic-blue shrink-0" />
            <span className="truncate">{place.distanceKm}</span>
          </span>
        )}
        <Link
          to={`/tourist-attraction/${place.slug}`}
          className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-civic-blue hover:text-civic-red transition-colors ml-auto shrink-0"
        >
          {en ? "View Details" : "तपशील पहा"} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
};
