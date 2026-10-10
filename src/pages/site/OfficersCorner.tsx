import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { DEPARTMENT_BRIEFS } from "@/data/departmentBriefs";
import { useLang } from "@/i18n/LanguageContext";
import {
  findOrganogramOfficerForHead,
  getPublishedOrganogram,
  organogramDisplayDepartment,
  organogramDisplayDesignation,
  organogramDisplayName,
  organogramTelHref,
  type OrganogramPerson,
} from "@/lib/organogram";
import { DEPARTMENTS, type DeptInfo } from "./DepartmentDetail";
import { Building2, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function departmentsForOfficer(person: OrganogramPerson): DeptInfo[] {
  return DEPARTMENTS.filter((dept) => findOrganogramOfficerForHead(dept.headEn)?.id === person.id);
}

function unique(values: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const text = value.trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    out.push(text);
  }
  return out;
}

const OfficersCorner = () => {
  const { lang, d } = useLang();
  const en = lang === "en";
  const officers = getPublishedOrganogram();

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Officer's Corner" : "अधिकारी कक्ष"}
        subtitle={
          en
            ? "Officers already published on the CSMC organisation chart. Names, posts and contact details are shown only where that chart or the department page already records them."
            : "संघटना आकृतीवर आधीच प्रकाशित असलेले अधिकारी. नाव, पद आणि संपर्क तपशील तेव्हाच दाखवले आहेत, जेव्हा ती नोंद आकृतीवर किंवा विभाग पृष्ठावर आधीच आहे."
        }
      />
      <section className="container py-8 md:py-10">
        <h1 className="mb-3 font-serif text-2xl font-bold text-civic-blue md:text-3xl">
          {en ? "Officer's Corner" : "अधिकारी कक्ष"}
        </h1>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {en
            ? "Officers already published on the CSMC organisation chart. Names, posts and contact details appear only where that chart or a department page already records them. Department documents stay on the department page and in the Municipal Document Repository."
            : "संघटना आकृतीवर आधीच प्रकाशित असलेले अधिकारी. नाव, पद आणि संपर्क तपशील तेव्हाच दाखवले आहेत, जेव्हा ती नोंद आकृतीवर किंवा विभाग पृष्ठावर आधीच आहे. विभागीय दस्तऐवज विभाग पृष्ठावर आणि महापालिका दस्तऐवज भंडारातच राहतात."}{" "}
          <Link to="/organization" className="font-semibold text-civic-blue hover:underline">
            {en ? "Organisation chart" : "संघटना आकृती"}
          </Link>
        </p>
        <ul className="grid list-none gap-4 p-0">
          {officers.map((person) => {
            const posts = departmentsForOfficer(person);
            const name = organogramDisplayName(person, en);
            const designation = organogramDisplayDesignation(person, en);
            const office = organogramDisplayDepartment(person, en);
            const phone = person.phone?.trim();
            const tel = organogramTelHref(phone);
            const emails = unique(posts.map((dept) => dept.email));
            const addresses = unique(posts.map((dept) => (en ? dept.addressEn : dept.addressMr)));
            const duties = posts
              .map((dept) => {
                const brief = DEPARTMENT_BRIEFS[dept.slug];
                const items = en
                  ? brief?.activitiesEn ?? dept.activitiesEn ?? dept.responsibilitiesEn ?? []
                  : brief?.activitiesMr ?? dept.activitiesMr ?? dept.responsibilitiesMr ?? [];
                return { dept, items };
              })
              .filter((entry) => entry.items.length > 0);

            return (
              <li key={person.id}>
                <article className="grid gap-5 rounded-2xl border border-border bg-white p-4 shadow-sm md:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] md:p-6">
                  <div className="flex gap-4">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={name}
                        className="h-24 w-20 shrink-0 rounded-lg border border-border object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-24 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-civic-blue" aria-hidden>
                        <UserRound className="h-8 w-8" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h2 className="font-serif text-lg font-bold leading-snug text-civic-ink">{name}</h2>
                      <p className="mt-1 text-sm font-semibold text-civic-blue">{designation}</p>
                      {office ? <p className="mt-1 text-sm text-muted-foreground">{office}</p> : null}
                      <ul className="mt-3 space-y-1.5 text-sm text-civic-ink">
                        {phone ? (
                          <li className="flex items-start gap-2">
                            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-civic-blue" aria-hidden />
                            {tel ? (
                              <a href={tel} className="hover:text-civic-blue hover:underline">{d(phone)}</a>
                            ) : (
                              <span>{d(phone)}</span>
                            )}
                          </li>
                        ) : null}
                        {emails.map((email) => (
                          <li key={email} className="flex items-start gap-2 break-all">
                            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-civic-blue" aria-hidden />
                            <a href={`mailto:${email}`} className="hover:text-civic-blue hover:underline">{email}</a>
                          </li>
                        ))}
                        {addresses.map((address) => (
                          <li key={address} className="flex items-start gap-2">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-civic-blue" aria-hidden />
                            <span>{address}</span>
                          </li>
                        ))}
                      </ul>
                      {posts.length > 0 ? (
                        <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                          {posts.map((dept) => (
                            <li key={dept.slug}>
                              <Link
                                to={`/departments/${dept.slug}`}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-civic-blue px-2.5 py-1 text-xs font-bold text-civic-blue hover:bg-civic-blue hover:text-white"
                              >
                                <Building2 className="h-3.5 w-3.5" aria-hidden />
                                {en ? dept.nameEn : dept.nameMr}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {en ? "Roles and responsibilities" : "कार्य व जबाबदाऱ्या"}
                    </h3>
                    {duties.length > 0 ? (
                      <div className="mt-3 space-y-4">
                        {duties.map(({ dept, items }) => (
                          <div key={dept.slug}>
                            {posts.length > 1 ? (
                              <p className="text-sm font-semibold text-civic-ink">{en ? dept.nameEn : dept.nameMr}</p>
                            ) : null}
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-civic-ink">
                              {items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {en
                          ? "A separate duties note is not published for this post. The designation above is the published record."
                          : "या पदासाठी स्वतंत्र कार्यटीप प्रकाशित नाही. वरील पदनाम ही प्रकाशित नोंद आहे."}
                      </p>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default OfficersCorner;
