import {
  CITY_ENGINEER_DEPARTMENT_HEADINGS,
  CITY_ENGINEER_OUTSOURCED_EMPLOYEES,
  CITY_ENGINEER_PERMANENT_EMPLOYEES,
  type CityEngineerEmployee,
} from "@/data/cityEngineerDepartment";

const sectionHeading = "font-serif text-lg font-bold text-civic-blue mb-3";

function EmployeeTable({
  en,
  employees,
  heading,
}: {
  en: boolean;
  employees: CityEngineerEmployee[];
  heading: "permanent" | "outsourced";
}) {
  const column = (key: keyof typeof CITY_ENGINEER_DEPARTMENT_HEADINGS) =>
    en ? CITY_ENGINEER_DEPARTMENT_HEADINGS[key].en : CITY_ENGINEER_DEPARTMENT_HEADINGS[key].mr;
  const title = en ? CITY_ENGINEER_DEPARTMENT_HEADINGS[heading].en : CITY_ENGINEER_DEPARTMENT_HEADINGS[heading].mr;

  return (
    <section aria-labelledby={`city-engineer-${heading}-heading`} className="min-w-0">
      <h3 id={`city-engineer-${heading}-heading`} className={sectionHeading}>
        {title}
      </h3>
      <ol className="flex flex-col gap-3 md:hidden">
        {employees.map((employee, index) => (
          <li key={employee.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <p className="break-words font-semibold text-civic-ink">
              <span className="text-civic-blue">{index + 1}. </span>
              {en ? employee.nameEn : employee.nameMr}
            </p>
            <dl className="mt-3 flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{column("designation")}</dt>
                <dd className="mt-1 break-words text-civic-ink">{en ? employee.designationEn : employee.designationMr}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{column("natureOfWork")}</dt>
                <dd className="mt-1 break-words leading-relaxed text-civic-ink">
                  {en ? employee.natureOfWorkEn : employee.natureOfWorkMr}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{column("contactNumber")}</dt>
                <dd className="mt-1">
                  <a href={`tel:${employee.contactNumber}`} className="font-semibold text-civic-blue hover:underline">
                    {employee.contactNumber}
                  </a>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
      <div className="hidden overflow-x-auto rounded-2xl border border-border shadow-sm md:block">
        <table className="civic-table w-full text-sm">
          <caption className="sr-only">{title}</caption>
          <colgroup>
            <col className="w-20" />
            <col className="w-[22%]" />
            <col className="w-[18%]" />
            <col />
            <col className="w-36" />
          </colgroup>
          <thead className="bg-civic-blue text-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left font-bold">{column("srNo")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{column("name")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{column("designation")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{column("natureOfWork")}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{column("contactNumber")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td className="px-4 py-3 font-bold text-civic-blue">{index + 1}</td>
                <th scope="row" className="px-4 py-3 text-left font-semibold text-civic-ink">
                  {en ? employee.nameEn : employee.nameMr}
                </th>
                <td className="px-4 py-3 text-civic-ink">{en ? employee.designationEn : employee.designationMr}</td>
                <td className="px-4 py-3 leading-relaxed text-civic-ink">{en ? employee.natureOfWorkEn : employee.natureOfWorkMr}</td>
                <td className="px-4 py-3">
                  <a href={`tel:${employee.contactNumber}`} className="font-semibold text-civic-blue hover:underline whitespace-nowrap">
                    {employee.contactNumber}
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

/** Permanent and outsourced staff as listed in the supplied City Engineer department document. */
export function CityEngineerDepartmentSections({ en }: { en: boolean }) {
  return (
    <div className="min-w-0 space-y-8">
      <EmployeeTable en={en} employees={CITY_ENGINEER_PERMANENT_EMPLOYEES} heading="permanent" />
      <EmployeeTable en={en} employees={CITY_ENGINEER_OUTSOURCED_EMPLOYEES} heading="outsourced" />
    </div>
  );
}
