import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Phone, Theater } from "lucide-react";

type Venue = {
  name: string;
  address: string;
  /** Exactly as published. Empty when the official listing gives no number. */
  contact: string;
};

/** Official list: https://chhsambhajinagarmc.org/drama-theatre */
const venues: Venue[] = [
  { name: "Sant Eknath Rang Mandir", address: "New Usmanpura, Pannalal Nagar, Aurangabad, Maharashtra 431001", contact: "" },
  {
    name: "Jagadguru Sant Tukaram Maharaj Natya Mandir, Cidco",
    address: "Near Rajmat Jijav Chowk, Jayalaxmi Colony, Vijayshri Colony, N 5, Cidco, Aurangabad, Maharashtra 431003",
    contact: "+91- 88559 97747",
  },
  {
    name: "Dr.Babasaheb Ambedkar Marathawada University Natyavibhag.",
    address: "Lal Mandi, Dr Babasaheb Ambedkar Marathwada University Campus, Aurangabad, Maharashtra 431004",
    contact: "0240 240 3320",
  },
  { name: "Open Air Theatre (Temporary Close)", address: "Disha Nagari, Aurangabad, Maharashtra 431005", contact: "" },
  { name: "Open Air Theatre", address: "Dr Babasaheb Ambedkar Marathwada University Campus, Aurangabad, Maharashtra 431004", contact: "" },
  {
    name: "Khivansara Cineplex (Amba / Apsara )",
    address: "Amba - Apsara Cinema Rd, opp. Zilha Parishad, Aurangpura, Aurangabad, Maharashtra 431001",
    contact: "",
  },
  { name: "Nabhrag Pratisthan", address: "Plot no 7, Shrikrishna Nagar, Ulkanagari, Aurangabad, Maharashtra 431005", contact: "" },
  {
    name: "Nupur- Mukta A2 Cinemas.",
    address: "Jalna Road Nupur Cinetorium, Seven Hills Flyover Rd, near Fire Brigade Office, Aurangabad, Maharashtra 431003",
    contact: "+91 93251 99251",
  },
  {
    name: "Carnival Cinema",
    address: "Anjali Complex, Amba - Apsara Cinema Rd, Khadakeshwar, Naralibag, Aurangabad, Maharashtra 431001",
    contact: "",
  },
  {
    name: "PVR Cinema",
    address: "61, Plot No - 76, MIDC, Jalna Road, MIDC Industrial Area, Chilkalthana, Aurangabad, Maharashtra 431002",
    contact: "+91 88009 00009",
  },
  {
    name: "Pavar Cinema",
    address: "No 61, Jalna Road, Opp. S.F.S. School, Mahesh Nagar, Mukundwadi, Aurangabad, Maharashtra 431007",
    contact: "",
  },
  {
    name: "Yashwantrao chavan natyagruha",
    address: "Near Roxy Cinema, Paithan Gate, Sanmitra Colony, Nirala Bazar, Aurangabad, Maharashtra 431001",
    contact: "099602 91888",
  },
  { name: "I-NOX Tapadiya", address: "Tapadia Mall, Sector C-2, Town Center, Cidco, Aurangabad, Maharashtra 431003", contact: "" },
  {
    name: "I-NOX Prozone Mall",
    address: "Prozone Mall, API Corner, P-80, MIDC Industrial Area, Chilkalthana, Aurangabad, Maharashtra 431210",
    contact: "+91- 87968 79674",
  },
  {
    name: "E-Square Abhinav",
    address: "CTS, Abhinay Talkies Rd, Bahadurpura, Khokadpura, Banjara Colony, Aurangabad, Maharashtra 431001",
    contact: "",
  },
  {
    name: "Uthlieve.com",
    address: "House Number 5, 12/74, Bhavsingpura Rd, Bhimnagar, Nandanvan Colony, Padegaon, Aurangabad, Maharashtra 431001",
    contact: "+91 - 98226 00042",
  },
  {
    name: "I-NOX",
    address: "Reliance Mall, Gajanan Maharaj Mandir Rd, opp. Radhakrishna Mangal Karyalay, Chattrapati Nagar, Garkheda, Aurangabad, Maharashtra 431001",
    contact: "+91 -91688 01010",
  },
  { name: "Sadia Talkies", address: "Tilak Rd, Khokadpura, Aurangabad, Maharashtra 431001", contact: "" },
];

const telHref = (contact: string) => `tel:${contact.replace(/[^\d+]/g, "")}`;

const DramaTheatre = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const labels = {
    address: en ? "Address" : "पत्ता",
    contact: en ? "Contact No." : "संपर्क क्र.",
  };
  const fieldLabel = "flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground";

  return (
    <Layout>
      <PageHeader title={en ? "Drama / Theatre" : "नाट्य / रंगमंच"} />
      <section className="py-12 container">
        <h1 className="mb-6 font-serif text-2xl font-bold text-civic-blue md:text-3xl">{en ? "Drama / Theatre" : "नाट्य / रंगमंच"}</h1>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {venues.map((venue) => (
            <li key={venue.name} className="min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="h-1 bg-civic-gold/80" aria-hidden />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-civic-blue/10 text-civic-blue" aria-hidden>
                      <Theater className="h-4 w-4" />
                    </span>
                    <h2 className="min-w-0 break-words pt-1 font-serif text-base font-bold leading-snug text-civic-blue">{venue.name}</h2>
                  </div>
                  <dl className="mt-4 flex flex-1 flex-col gap-4 text-sm">
                    <div>
                      <dt className={fieldLabel}>
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        {labels.address}
                      </dt>
                      <dd className="mt-1 break-words leading-relaxed text-civic-ink/80">{venue.address}</dd>
                    </div>
                    <div className="mt-auto border-t border-border pt-3">
                      <dt className={fieldLabel}>
                        <Phone className="h-3.5 w-3.5" aria-hidden />
                        {labels.contact}
                      </dt>
                      <dd className="mt-1 min-h-5">
                        {venue.contact ? (
                          <a href={telHref(venue.contact)} className="font-semibold text-civic-blue hover:underline whitespace-nowrap">
                            {venue.contact}
                          </a>
                        ) : null}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default DramaTheatre;
