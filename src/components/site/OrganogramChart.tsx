import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import type { OrganogramPerson } from "@/data/organogram";
import { PhotoModal } from "@/components/site/PhotoModal";
import {
  getOrganogramGroups,
  organogramDisplayDepartment,
  organogramDisplayDesignation,
  organogramDisplayName,
  organogramInitials,
} from "@/lib/organogram";

const photoFrame =
  "relative mx-auto rounded-full border-[3px] border-[#D9A441] bg-white shadow-[0_2px_8px_rgba(26,26,26,0.12)] transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_5px_14px_rgba(26,26,26,0.16)]";

function PersonPhoto({ person, large }: { person: OrganogramPerson; large?: boolean }) {
  const size = large
    ? "h-28 w-28 shrink-0 flex-[0_0_7rem] sm:h-32 sm:w-32 sm:flex-[0_0_8rem]"
    : "h-[5.5rem] w-[5.5rem] shrink-0 flex-[0_0_5.5rem] sm:h-24 sm:w-24 sm:flex-[0_0_6rem]";
  return (
    <div className={`${photoFrame} flex items-center justify-center ${size}`}>
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {person.photo ? (
          <img src={person.photo} alt="" className="h-full w-full object-cover object-top" />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center bg-civic-blue/[0.06] font-serif text-lg font-bold text-civic-blue"
            aria-hidden
          >
            {organogramInitials(name)}
          </span>
        )}
      </div>
    </div>
  );
}

function PersonCard({
  person,
  large,
  onOpen,
}: {
  person: OrganogramPerson;
  large?: boolean;
  onOpen: (person: OrganogramPerson) => void;
}) {
  const { lang } = useLang();
  const en = lang === "en";
  const name = organogramDisplayName(person, en);
  const designation = organogramDisplayDesignation(person, en);
  const department = organogramDisplayDepartment(person, en);
  const canOpen = Boolean(person.photo);

  const body = (
    <>
      <PersonPhoto person={person} large={large} />
      <h3 className={`mt-3 font-bold text-civic-blue leading-snug ${large ? "text-base" : "text-sm"}`}>
        {name}
      </h3>
      <p className="mt-1 text-xs leading-snug text-muted-foreground [overflow-wrap:anywhere]">{designation}</p>
      {department ? <p className="mt-1 text-[11px] leading-snug text-civic-blue/80 [overflow-wrap:anywhere]">{department}</p> : null}
    </>
  );

  if (!canOpen) {
    return (
      <article className="group flex h-full flex-col items-center text-center" lang={en ? "en" : "mr"}>
        {body}
      </article>
    );
  }

  return (
    <button
      type="button"
      lang={en ? "en" : "mr"}
      className="group flex h-full w-full cursor-zoom-in flex-col items-center border-0 bg-transparent p-0 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-blue rounded-xl"
      aria-label={en ? `View photo of ${name}` : `${name} यांचे छायाचित्र पहा`}
      onClick={() => onOpen(person)}
    >
      {body}
    </button>
  );
}

const GROUP_LABELS: Record<string, { en: string; mr: string }> = {
  commissioner: { en: "Municipal Commissioner", mr: "महानगरपालिका आयुक्त" },
  senior: { en: "Senior officers", mr: "वरिष्ठ अधिकारी" },
  deputies: { en: "Deputy Municipal Commissioners", mr: "उप आयुक्त" },
  "deputies-and-garden": { en: "Deputy Commissioners and Garden", mr: "उप आयुक्त व उद्यान" },
  engineers: { en: "Engineering officers", mr: "अभियांत्रिकी अधिकारी" },
  officers: { en: "Department officers", mr: "विभाग अधिकारी" },
};

export function OrganogramChart() {
  const { lang } = useLang();
  const en = lang === "en";
  const groups = getOrganogramGroups();
  const [selected, setSelected] = useState<OrganogramPerson | null>(null);
  const selectedName = selected ? organogramDisplayName(selected, en) : "";
  const selectedRole = selected
    ? [organogramDisplayDesignation(selected, en), organogramDisplayDepartment(selected, en)].filter(Boolean).join(", ")
    : "";

  return (
    <div className="bg-white px-3 py-8 sm:px-4 sm:py-10">
      {groups.map((group) => {
        const featured = group.level === 1;
        const label = GROUP_LABELS[group.group];
        return (
          <section key={group.group} className="mb-10 last:mb-0" aria-labelledby={`organogram-group-${group.group}`}>
            {label ? (
              <p
                id={`organogram-group-${group.group}`}
                className="mb-4 text-center text-xs font-bold uppercase tracking-wide text-civic-blue/70 lg:sr-only"
              >
                {en ? label.en : label.mr}
              </p>
            ) : null}
            <ol
              className={
                featured
                  ? "mx-auto flex max-w-xs list-none items-start justify-center p-0"
                  : "flex list-none flex-wrap items-start justify-center gap-x-3 gap-y-8 p-0 lg:gap-x-3 2xl:gap-x-5"
              }
            >
              {group.people.map((person) => (
                <li
                  key={person.id}
                  className={
                    featured
                      ? "w-full"
                      : "w-full max-w-sm min-w-0 sm:w-[calc(50%-0.375rem)] sm:max-w-none lg:w-40 lg:shrink-0"
                  }
                >
                  <PersonCard person={person} large={featured} onOpen={setSelected} />
                </li>
              ))}
            </ol>
          </section>
        );
      })}
      {selected?.photo ? (
        <PhotoModal src={selected.photo} name={selectedName} role={selectedRole} onClose={() => setSelected(null)} />
      ) : null}
      <p className="sr-only">
        {en
          ? "Officers are listed from the Municipal Commissioner downward, in the established organogram order."
          : "अधिकारी महानगरपालिका आयुक्तांपासून खाली प्रस्थापित संघटना क्रमाने दाखवले आहेत."}
      </p>
    </div>
  );
}
