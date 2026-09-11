import { ExternalLink, Mail, MapPin, Navigation, Phone, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { localizeDigits } from "@/i18n/digits";
import { CSMC_OFFICE_MAPS_URL } from "@/data/officialLinks";
import heroBg from "@/assets/hero-heritage.jpg";

const CSMC_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=19.8900943,75.3243991";

const CSMC_MAPS_RATING = 4.1;

export const VisitCsmc = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const phoneDisplay = localizeDigits("02402333536", en ? "en" : "mr");
  const ratingLabel = localizeDigits(CSMC_MAPS_RATING.toFixed(1), en ? "en" : "mr");

  /** Key-free Google Maps embed (no Maps JavaScript API / secrets). */
  const mapsEmbedSrc = en
    ? "https://www.google.com/maps?q=19.8900943,75.3243991&z=17&hl=en&output=embed"
    : "https://www.google.com/maps?q=19.8900943,75.3243991&z=17&hl=mr&output=embed";

  const iconBtn =
    "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-white text-civic-blue shadow-sm hover:bg-civic-blue hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-gold";

  return (
    <section
      id="visit-csmc"
      className="relative overflow-hidden"
      aria-labelledby="visit-csmc-heading"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-civic-blue/70" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-civic-ink/55 via-civic-blue/40 to-civic-ink/20" aria-hidden />

      <div className="container relative z-[1] py-8 md:py-10">
        <div className="overflow-hidden rounded-2xl md:rounded-[1.75rem] border border-white/20 shadow-2xl bg-civic-ink/40 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative order-1 flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8 bg-civic-blue/85">
              <div className="absolute inset-0 opacity-[0.08] heritage-pattern pointer-events-none" aria-hidden />
              <div className="relative z-[1]">
                <h2
                  id="visit-csmc-heading"
                  className="font-serif text-2xl sm:text-[1.75rem] md:text-3xl font-bold tracking-tight text-white"
                >
                  {en ? (
                    <>
                      <span className="relative inline-block">
                        Visit
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-civic-gold" aria-hidden />
                      </span>{" "}
                      CSMC
                    </>
                  ) : (
                    <span className="devanagari">CSMC ला भेट द्या</span>
                  )}
                </h2>

                <ul className="mt-5 space-y-3.5 text-[13px] sm:text-sm leading-relaxed">
                  <li className="flex gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-civic-gold" aria-hidden />
                    <div>
                      <p className="font-bold text-white">
                        {en
                          ? "Chhatrapati Sambhajinagar Municipal Corporation"
                          : "छत्रपती संभाजीनगर महानगरपालिका"}
                      </p>
                      <p className={`mt-0.5 text-white/75 ${en ? "" : "devanagari"}`}>
                        {en ? (
                          <>
                            Main Building, Town Hall
                            <br />
                            Behind Head Post Office
                            <br />
                            Chhatrapati Sambhajinagar, Maharashtra – 431001
                          </>
                        ) : (
                          <>
                            मुख्य इमारत, टाऊन हॉल
                            <br />
                            हेड पोस्ट ऑफिसच्या मागे
                            <br />
                            छत्रपती संभाजीनगर, महाराष्ट्र – ४३१००१
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Phone className="h-4 w-4 shrink-0 mt-0.5 text-civic-gold" aria-hidden />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-white/50 mb-0.5">
                        {en ? "Telephone" : "दूरध्वनी"}
                      </p>
                      <a
                        href="tel:+912402333536"
                        className="font-semibold text-white hover:text-civic-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-gold rounded-sm"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Mail className="h-4 w-4 shrink-0 mt-0.5 text-civic-gold" aria-hidden />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-white/50 mb-0.5">
                        {en ? "Email" : "ईमेल"}
                      </p>
                      <a
                        href="mailto:contact@chhsambhajinagarmc.org"
                        className="font-semibold text-white break-all hover:text-civic-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-gold rounded-sm"
                      >
                        contact@chhsambhajinagarmc.org
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative order-2 min-h-[240px] sm:min-h-[260px] lg:min-h-0 overflow-hidden bg-muted">
              <iframe
                title={
                  en
                    ? "Map of CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar"
                    : "CSMC मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर — नकाशा"
                }
                src={mapsEmbedSrc}
                className="absolute inset-x-0 top-0 w-full border-0 h-[calc(100%+40px)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="pointer-events-none absolute left-3 top-3 right-3 z-[2] sm:right-auto sm:max-w-[260px]">
                <div className="pointer-events-auto rounded-xl bg-white shadow-lg border border-border/80 p-3">
                  <p className="text-[13px] font-bold text-civic-ink leading-snug">
                    {en
                      ? "Chhatrapati Sambhajinagar Municipal Corporation"
                      : "छत्रपती संभाजीनगर महानगरपालिका"}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                    {en
                      ? "Town Hall, behind Head Post Office, 431001"
                      : "टाऊन हॉल, हेड पोस्ट ऑफिसच्या मागे, ४३१००१"}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-xs font-bold text-civic-ink">{ratingLabel}</span>
                    <span className="flex items-center gap-px" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.round(CSMC_MAPS_RATING)
                              ? "fill-civic-gold text-civic-gold"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </span>
                    <span className="sr-only">
                      {en
                        ? `Google Maps rating ${CSMC_MAPS_RATING} out of 5`
                        : `Google Maps रेटिंग ${ratingLabel} पैकी ५`}
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <a
                      href={CSMC_OFFICE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={iconBtn}
                      aria-label={en ? "Open in Google Maps" : "Google Maps मध्ये उघडा"}
                      title={en ? "Open in Google Maps" : "Google Maps मध्ये उघडा"}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                      href={CSMC_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${iconBtn} bg-[#1A73E8] text-white border-[#1A73E8] hover:bg-[#1557b0] hover:text-white`}
                      aria-label={en ? "Get directions" : "दिशा मिळवा"}
                      title={en ? "Get directions" : "दिशा मिळवा"}
                    >
                      <Navigation className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
