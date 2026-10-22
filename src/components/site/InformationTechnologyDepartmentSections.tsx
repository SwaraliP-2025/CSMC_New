import { ChevronDown } from "lucide-react";
import {
  IT_DEPARTMENT_FUNCTIONS,
  IT_DEPARTMENT_HEADINGS,
  IT_DEPARTMENT_HIERARCHY,
  IT_DEPARTMENT_OFFICERS,
  IT_OFFICER_TABLE_COLUMNS,
} from "@/data/informationTechnologyDepartment";

const sectionHeading = "font-serif text-lg font-bold text-civic-blue mb-3";

function ItOfficerTable({ en }: { en: boolean }) {
  const col = (key: keyof typeof IT_OFFICER_TABLE_COLUMNS) => (en ? IT_OFFICER_TABLE_COLUMNS[key].en : IT_OFFICER_TABLE_COLUMNS[key].mr);
  return (
    <section aria-labelledby="it-officers-heading" className="min-w-0">
      <h3 id="it-officers-heading" className={sectionHeading}>
        {en ? IT_DEPARTMENT_HEADINGS.officers.en : IT_DEPARTMENT_HEADINGS.officers.mr}
      </h3>
      <ol className="flex flex-col gap-3 md:hidden">
        {IT_DEPARTMENT_OFFICERS.map((officer, index) => (
          <li key={officer.email} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <p className="font-semibold text-civic-ink break-words">
              <span className="text-civic-blue">{index + 1}. </span>
              {en ? officer.nameEn : officer.nameMr}
            </p>
            <dl className="mt-3 flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{col("designation")}</dt>
                <dd className="mt-1 break-words text-civic-ink">{en ? officer.designationEn : officer.designationMr}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{col("mobile")}</dt>
                <dd className="mt-1">
                  <a href={`tel:${officer.mobile}`} className="font-semibold text-civic-blue hover:underline">
                    {officer.mobile}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{col("email")}</dt>
                <dd className="mt-1 break-all">
                  <a href={`mailto:${officer.email}`} className="font-semibold text-civic-blue hover:underline">
                    {officer.email}
                  </a>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="civic-table w-full text-sm">
          <caption className="sr-only">{en ? IT_DEPARTMENT_HEADINGS.officers.en : IT_DEPARTMENT_HEADINGS.officers.mr}</caption>
          <colgroup>
            <col className="w-20" />
            <col className="w-[22%]" />
            <col />
            <col className="w-32" />
            <col className="w-[24%]" />
          </colgroup>
          <thead className="bg-civic-blue text-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left font-bold">{col("srNo")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{col("name")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{col("designation")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{col("mobile")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{col("email")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {IT_DEPARTMENT_OFFICERS.map((officer, index) => (
              <tr key={officer.email}>
                <td className="px-4 py-3 font-bold text-civic-blue">{index + 1}</td>
                <th scope="row" className="px-4 py-3 text-left font-semibold text-civic-ink">{en ? officer.nameEn : officer.nameMr}</th>
                <td className="px-4 py-3 text-civic-ink">{en ? officer.designationEn : officer.designationMr}</td>
                <td className="px-4 py-3">
                  <a href={`tel:${officer.mobile}`} className="font-semibold text-civic-blue hover:underline whitespace-nowrap">
                    {officer.mobile}
                  </a>
                </td>
                <td className="px-4 py-3 break-all">
                  <a href={`mailto:${officer.email}`} className="font-semibold text-civic-blue hover:underline">
                    {officer.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ItFunctionsList({ en }: { en: boolean }) {
  return (
    <section aria-labelledby="it-functions-heading" className="min-w-0 bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
      <h3 id="it-functions-heading" className={sectionHeading}>
        {en ? IT_DEPARTMENT_HEADINGS.functions.en : IT_DEPARTMENT_HEADINGS.functions.mr}
      </h3>
      <ol className="list-decimal pl-6 space-y-2 text-sm text-civic-ink leading-relaxed marker:font-bold marker:text-civic-blue">
        {IT_DEPARTMENT_FUNCTIONS.map((item) => (
          <li key={item.labelEn} className="break-words pl-1">
            <span className="font-semibold text-civic-blue">{en ? item.labelEn : item.labelMr}</span>
            {en ? item.separatorEn ?? " : " : " : "}
            {en ? item.descriptionEn : item.descriptionMr}
          </li>
        ))}
      </ol>
    </section>
  );
}

function ItHierarchy({ en }: { en: boolean }) {
  return (
    <section aria-labelledby="it-hierarchy-heading" className="min-w-0">
      <h3 id="it-hierarchy-heading" className={sectionHeading}>
        {en ? IT_DEPARTMENT_HEADINGS.hierarchy.en : IT_DEPARTMENT_HEADINGS.hierarchy.mr}
      </h3>
      <ol className="mx-auto flex w-full max-w-xl flex-col items-stretch">
        {IT_DEPARTMENT_HIERARCHY.map((level, index) => (
          <li key={level.en} className="flex flex-col items-center">
            {index > 0 ? <ChevronDown className="my-1 h-5 w-5 text-civic-gold" aria-hidden /> : null}
            <span className="w-full rounded-xl border border-civic-blue/25 bg-civic-blue/5 px-4 py-3 text-center text-sm font-semibold text-civic-blue break-words">
              {en ? level.en : level.mr}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Non-head employee contacts for the Information & Technology Department page. */
export function InformationTechnologyEmployeeContacts({ en }: { en: boolean }) {
  return <ItOfficerTable en={en} />;
}

/** Department functions and hierarchy for the information column. */
export function InformationTechnologyDetails({ en }: { en: boolean }) {
  return (
    <div className="min-w-0 space-y-8">
      <ItFunctionsList en={en} />
      <ItHierarchy en={en} />
    </div>
  );
}
