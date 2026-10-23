import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import {
  CULTURAL_DEPARTMENT_ACTIVITIES,
  CULTURAL_DEPARTMENT_EMAIL,
  CULTURAL_DEPARTMENT_INTRODUCTION,
  CULTURAL_DEPARTMENT_PHONE_NUMBERS,
  FIRE_DEPARTMENT_EMAIL,
  FIRE_DEPARTMENT_NOC_INFORMATION,
  FIRE_DEPARTMENT_OPERATIONAL_STATIONS,
  FIRE_DEPARTMENT_OVERVIEW,
  FIRE_DEPARTMENT_PHONE,
  FIRE_DEPARTMENT_PROPOSED_STATIONS,
  FIRE_DEPARTMENT_RECRUITMENT,
  FIRE_DEPARTMENT_REVENUE,
  FIRE_DEPARTMENT_TRAINING,
} from "@/data/culturalFireDepartments";

const sectionHeading = "font-serif text-lg font-bold text-civic-blue mb-3";
const infoCard = "min-w-0 rounded-2xl border border-border bg-white p-5 shadow-sm md:p-6";

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3 text-sm">
      {icon}
      <div className="min-w-0">
        <p className="mb-0.5 text-xs font-semibold uppercase text-muted-foreground">{label}</p>
        {children}
      </div>
    </div>
  );
}

export function DepartmentContactSection({
  en,
  email,
  phones,
  address,
  localize,
}: {
  en: boolean;
  email: string;
  phones: readonly string[];
  address?: string;
  localize: (value: string | number | null | undefined) => string;
}) {
  const normalizedEmail = email.toLowerCase();
  return (
    <section className={infoCard}>
      <h3 className={sectionHeading}>{en ? "Department Contact" : "विभाग संपर्क"}</h3>
      <div className="space-y-4">
        {normalizedEmail ? (
          <ContactRow
            icon={<Mail className="mt-0.5 h-4 w-4 shrink-0 text-civic-blue" aria-hidden />}
            label={en ? "Official Department Email" : "विभागाचा अधिकृत ई-मेल"}
          >
            <a href={`mailto:${normalizedEmail}`} className="break-all font-semibold text-civic-blue hover:underline">
              {normalizedEmail}
            </a>
          </ContactRow>
        ) : null}
        {phones.length > 0 ? (
          <ContactRow
            icon={<Phone className="mt-0.5 h-4 w-4 shrink-0 text-civic-blue" aria-hidden />}
            label={en ? "Official Department Telephone" : "विभागाचा अधिकृत दूरध्वनी"}
          >
            <ul className="space-y-1">
              {phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-civic-blue hover:underline">
                    {localize(phone)}
                  </a>
                </li>
              ))}
            </ul>
          </ContactRow>
        ) : null}
        {address ? (
          <ContactRow
            icon={<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-civic-blue" aria-hidden />}
            label={en ? "Office Address" : "कार्यालयाचा पत्ता"}
          >
            <p className="break-words font-semibold leading-snug text-civic-ink">{address}</p>
          </ContactRow>
        ) : null}
      </div>
    </section>
  );
}

export function CulturalDepartmentSections({
  en,
}: {
  en: boolean;
}) {
  return (
    <div className="min-w-0 space-y-8">
      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Department Overview" : "विभागाची माहिती"}</h3>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en ? CULTURAL_DEPARTMENT_INTRODUCTION.en : CULTURAL_DEPARTMENT_INTRODUCTION.mr}
        </p>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Functions and Programmes" : "कार्यक्रम व उपक्रम"}</h3>
        <ol className="list-decimal space-y-2 pl-6 text-sm leading-relaxed text-civic-ink marker:font-bold marker:text-civic-blue">
          {CULTURAL_DEPARTMENT_ACTIVITIES.map((activity) => (
            <li key={activity.en} className="break-words pl-1">
              {en ? activity.en : activity.mr}
            </li>
          ))}
        </ol>
      </section>

    </div>
  );
}

export function FireDepartmentSections({
  en,
}: {
  en: boolean;
}) {
  const stations = en
    ? FIRE_DEPARTMENT_OPERATIONAL_STATIONS
    : ["पदमपुरा", "सिडको", "चिकलठाणा", "एन-९", "कांचनवाडी"];
  const proposedStations = en ? FIRE_DEPARTMENT_PROPOSED_STATIONS : ["शहागंज", "हर्सूल", "सातारा"];
  const revenue = en ? FIRE_DEPARTMENT_REVENUE.en : FIRE_DEPARTMENT_REVENUE.mr;

  return (
    <div className="min-w-0 space-y-8">
      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Department Overview" : "विभागाची माहिती"}</h3>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en ? FIRE_DEPARTMENT_OVERVIEW.en : FIRE_DEPARTMENT_OVERVIEW.mr}
        </p>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Operational Facilities" : "कार्यरत सुविधा"}</h3>
        <div className="space-y-5 text-sm text-civic-ink">
          <div>
            <h4 className="mb-2 font-semibold">{en ? "5 operational fire stations" : "५ कार्यरत अग्निशमन केंद्रे"}</h4>
            <ul className="list-disc space-y-1 pl-5">
              {stations.map((station) => <li key={station}>{station}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">{en ? "3 proposed fire stations — not operational" : "३ प्रस्तावित अग्निशमन केंद्रे — अद्याप कार्यरत नाहीत"}</h4>
            <ul className="list-disc space-y-1 pl-5">
              {proposedStations.map((station) => <li key={station}>{station}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Equipment" : "उपकरणे"}</h3>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en
            ? "The department has 22 fire tenders and 4 jeeps/SUVs."
            : "विभागाकडे २२ अग्निशमन बंब आणि ४ जीप/SUV वाहने आहेत."}
        </p>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Services and No Objection Certificates" : "सेवा व ना हरकत प्रमाणपत्रे"}</h3>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en ? FIRE_DEPARTMENT_NOC_INFORMATION.en : FIRE_DEPARTMENT_NOC_INFORMATION.mr}
        </p>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Source-Reported Revenue" : "स्रोत दस्तऐवजानुसार महसूल"}</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-civic-ink">
          {revenue.map((period) => <li key={period}>{period}</li>)}
        </ul>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Training and Practical Demonstrations" : "प्रशिक्षण व प्रात्यक्षिके"}</h3>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en ? FIRE_DEPARTMENT_TRAINING.en : FIRE_DEPARTMENT_TRAINING.mr}
        </p>
      </section>

      <section className={infoCard}>
        <h3 className={sectionHeading}>{en ? "Recruitment Status Reported by Source" : "स्रोत दस्तऐवजात नमूद भरतीची स्थिती"}</h3>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en ? FIRE_DEPARTMENT_RECRUITMENT.en : FIRE_DEPARTMENT_RECRUITMENT.mr}
        </p>
      </section>

    </div>
  );
}

export function CulturalDepartmentContact({
  en,
  localize,
  address,
}: {
  en: boolean;
  localize: (value: string | number | null | undefined) => string;
  address: string;
}) {
  return (
    <DepartmentContactSection
      en={en}
      email={CULTURAL_DEPARTMENT_EMAIL}
      phones={CULTURAL_DEPARTMENT_PHONE_NUMBERS}
      address={address}
      localize={localize}
    />
  );
}

export function FireDepartmentContact({
  en,
  localize,
}: {
  en: boolean;
  localize: (value: string | number | null | undefined) => string;
}) {
  return (
    <DepartmentContactSection
      en={en}
      email={FIRE_DEPARTMENT_EMAIL}
      phones={[FIRE_DEPARTMENT_PHONE]}
      localize={localize}
    />
  );
}
