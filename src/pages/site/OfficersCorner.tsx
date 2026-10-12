import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import {
  departmentsForOrganogramOfficer,
  getPublishedOrganogram,
  organogramDisplayDepartment,
  organogramDisplayDesignation,
  organogramDisplayName,
  type OrganogramPerson,
} from "@/lib/organogram";
import { getDepartmentGroupId, type DepartmentGroupId } from "@/data/departmentGroups";
import { DEPARTMENTS, type DeptInfo } from "./DepartmentDetail";
import { Building2, Mail, MapPin, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

/** Officers whose department chips stay off this page. Their name links and assignments remain. */
const HIDE_DEPARTMENT_CHIPS = new Set(["amol-yedage", "ranjit-patil", "kalpita-pimple"]);

/** Work-distribution sections these officers control. Their chips are hidden on this page. */
const CHARGE_GROUPS: Partial<Record<string, DepartmentGroupId>> = {
  "amol-yedage": "commissioner",
  "ranjit-patil": "ac1",
  "kalpita-pimple": "ac2",
};

function departmentsForOfficer(person: OrganogramPerson): DeptInfo[] {
  const headed = departmentsForOrganogramOfficer(person, DEPARTMENTS);
  const groupId = CHARGE_GROUPS[person.id];
  if (!groupId) return headed;
  const seen = new Set(headed.map((dept) => dept.slug));
  const charged = DEPARTMENTS.filter(
    (dept) => getDepartmentGroupId(dept.slug) === groupId && !seen.has(dept.slug),
  );
  return [...headed, ...charged];
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

const DEVANAGARI_DIGITS = "०१२३४५६७८९";

/** Same office written with a different dash, spacing, or PIN digits counts as one address. */
function addressKey(value: string): string {
  const folded = value.replace(/[०-९]/g, (digit) => String(DEVANAGARI_DIGITS.indexOf(digit)));
  return folded
    .replace(/\s+/g, " ")
    .replace(/[–—−]/g, "-")
    .replace(/,\s*([0-9]{6})\s*$/g, "-$1")
    .replace(/\s*-\s*/g, "-")
    .replace(/\s*,\s*/g, ",")
    .trim()
    .toLowerCase();
}

function uniqueAddresses(values: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const text = value.trim();
    const key = addressKey(text);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(text);
  }
  return out;
}

const OfficersCorner = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const officers = getPublishedOrganogram();

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Officer's Corner" : "अधिकारी कक्ष"}
        subtitle={
          en
            ? "Municipal officers, their designations, and the official contact details recorded for each office."
            : "महानगरपालिकेचे अधिकारी, त्यांची पदनामे आणि प्रत्येक कार्यालयासाठी नोंदवलेले अधिकृत संपर्क तपशील."
        }
      />
      <section className="container py-8 md:py-10">
        <h1 className="mb-3 font-serif text-2xl font-bold text-civic-blue md:text-3xl">
          {en ? "Officer's Corner" : "अधिकारी कक्ष"}
        </h1>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {en
            ? "This section presents the officers of the Chhatrapati Sambhajinagar Municipal Corporation, with their designations and the official email address and office address recorded for each post, so that citizens can identify the relevant office."
            : "या विभागात छत्रपती संभाजीनगर महानगरपालिकेचे अधिकारी, त्यांची पदनामे आणि प्रत्येक पदासाठी नोंदवलेला अधिकृत ई-मेल व कार्यालय पत्ता दिला आहे, जेणेकरून नागरिकांना संबंधित कार्यालय ओळखता येईल."}{" "}
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
            const emails = unique(posts.map((dept) => dept.email));
            const primaryPost = posts[0];
            const addresses = uniqueAddresses(
              primaryPost ? [en ? primaryPost.addressEn : primaryPost.addressMr] : [],
            );
            const primary = departmentsForOrganogramOfficer(person, DEPARTMENTS)[0];
            const primaryName = primary ? (en ? primary.nameEn : primary.nameMr) : "";

            return (
              <li key={person.id}>
                <article className="rounded-2xl border border-border bg-white p-4 shadow-sm md:p-6">
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
                      <h2 className="font-serif text-lg font-bold leading-snug text-civic-ink">
                        {primary ? (
                          <Link
                            to={`/departments/${primary.slug}`}
                            aria-label={en ? `${name}, ${primaryName}` : `${name}, ${primaryName}`}
                            className="rounded-sm hover:text-civic-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-gold"
                          >
                            {name}
                          </Link>
                        ) : (
                          name
                        )}
                      </h2>
                      <p className="mt-1 inline-block max-w-full cursor-default rounded-sm px-1.5 py-0.5 -mx-1.5 text-sm font-semibold text-civic-blue transition-colors hover:bg-civic-blue hover:text-white">
                        {designation}
                      </p>
                      {office ? <p className="mt-1 text-sm text-muted-foreground">{office}</p> : null}
                      <ul className="mt-3 space-y-1.5 text-sm text-civic-ink">
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
                      {posts.length > 0 && !HIDE_DEPARTMENT_CHIPS.has(person.id) ? (
                        <ul className="mt-3 flex w-full list-none flex-wrap gap-2 p-0">
                          {posts.map((dept) => (
                            <li key={dept.slug}>
                              <Link
                                to={`/departments/${dept.slug}`}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-civic-blue px-2.5 py-1 text-xs font-bold text-civic-blue transition-colors hover:bg-civic-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-gold"
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
