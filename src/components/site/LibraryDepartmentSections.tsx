import { ChevronDown } from "lucide-react";
import {
  LIBRARY_DEPARTMENT_FUNCTIONS,
  LIBRARY_DEPARTMENT_HIERARCHY,
  LIBRARY_DEPARTMENT_INTRODUCTION,
  LIBRARY_DEPARTMENT_STAFF,
} from "@/data/libraryDepartment";

const sectionHeading = "mb-3 font-serif text-lg font-bold text-civic-blue";
const infoCard = "min-w-0 rounded-2xl border border-border bg-white p-5 shadow-sm md:p-6";
const columnHeading = {
  en: { name: "Name", designation: "Designation", mobile: "Mobile", email: "Email" },
  mr: { name: "नाव", designation: "पद", mobile: "मोबाईल", email: "ई-मेल" },
} as const;

export function LibraryDepartmentInformation({ en }: { en: boolean }) {
  return (
    <section aria-labelledby="library-department-information" className="min-w-0 space-y-8">
      <h3 id="library-department-information" className="font-serif text-lg font-bold text-civic-blue">
        {en ? "Department Information" : "विभागाची माहिती"}
      </h3>
      <section className={infoCard}>
        <h4 className={sectionHeading}>{en ? "Introduction" : "प्रस्तावना"}</h4>
        <p className="text-sm leading-relaxed text-civic-ink">
          {en ? LIBRARY_DEPARTMENT_INTRODUCTION.en : LIBRARY_DEPARTMENT_INTRODUCTION.mr}
        </p>
      </section>

      <section className={infoCard}>
        <h4 className={sectionHeading}>{en ? "Core Functions of the Department" : "विभागाची प्रमुख कामे"}</h4>
        <ol className="list-decimal space-y-2 pl-6 text-sm leading-relaxed text-civic-ink marker:font-bold marker:text-civic-blue">
          {LIBRARY_DEPARTMENT_FUNCTIONS.map((item) => (
            <li key={item.en} className="break-words pl-1">{en ? item.en : item.mr}</li>
          ))}
        </ol>
      </section>

      <section className={infoCard}>
        <h4 className={sectionHeading}>{en ? "Structural Details of the Department" : "विभागाचे संरचनात्मक विवरण"}</h4>
        <ol className="mx-auto flex w-full max-w-xl flex-col items-stretch">
          {LIBRARY_DEPARTMENT_HIERARCHY.map((level, index) => (
            <li key={level.en} className="flex flex-col items-center">
              {index > 0 ? <ChevronDown className="my-1 h-5 w-5 text-civic-gold" aria-hidden /> : null}
              <span className="w-full break-words rounded-xl border border-civic-blue/25 bg-civic-blue/5 px-4 py-3 text-center text-sm font-semibold text-civic-blue">
                {en ? level.en : level.mr}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}

export function LibraryDepartmentStaff({ en }: { en: boolean }) {
  const labels = en ? columnHeading.en : columnHeading.mr;
  return (
    <section className="min-w-0">
      <h3 className={sectionHeading}>{en ? "Library Staff" : "वाचनालय कर्मचारी"}</h3>
      <ol className="flex flex-col gap-3 md:hidden">
        {LIBRARY_DEPARTMENT_STAFF.map((staff, index) => (
          <li key={staff.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <p className="break-words font-semibold text-civic-ink">
              <span className="text-civic-blue">{index + 1}. </span>{en ? staff.nameEn : staff.nameMr}
            </p>
            <dl className="mt-3 flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{labels.designation}</dt>
                <dd className="mt-1 break-words text-civic-ink">{en ? staff.designationEn : staff.designationMr}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{labels.mobile}</dt>
                <dd className="mt-1">
                  <a href={`tel:${staff.mobile}`} className="font-semibold text-civic-blue hover:underline">{staff.mobile}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{labels.email}</dt>
                <dd className="mt-1 break-all">
                  <a href={`mailto:${staff.email}`} className="font-semibold text-civic-blue hover:underline">{staff.email}</a>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
      <div className="hidden overflow-x-auto rounded-2xl border border-border shadow-sm md:block">
        <table className="civic-table w-full text-sm">
          <caption className="sr-only">{en ? "Library Staff" : "वाचनालय कर्मचारी"}</caption>
          <thead className="bg-civic-blue text-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left font-bold">#</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{labels.name}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{labels.designation}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{labels.mobile}</th>
              <th scope="col" className="px-4 py-3 text-left font-bold">{labels.email}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {LIBRARY_DEPARTMENT_STAFF.map((staff, index) => (
              <tr key={staff.id}>
                <td className="px-4 py-3 font-bold text-civic-blue">{index + 1}</td>
                <th scope="row" className="px-4 py-3 text-left font-semibold text-civic-ink">{en ? staff.nameEn : staff.nameMr}</th>
                <td className="px-4 py-3 text-civic-ink">{en ? staff.designationEn : staff.designationMr}</td>
                <td className="px-4 py-3"><a href={`tel:${staff.mobile}`} className="whitespace-nowrap font-semibold text-civic-blue hover:underline">{staff.mobile}</a></td>
                <td className="break-all px-4 py-3"><a href={`mailto:${staff.email}`} className="font-semibold text-civic-blue hover:underline">{staff.email}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
