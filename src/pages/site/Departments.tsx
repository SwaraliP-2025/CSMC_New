import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Input } from "@/components/ui/input";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { DEPARTMENTS, type DeptInfo } from "./DepartmentDetail";
import { getDepartmentIcon } from "@/lib/departmentIcons";
import {
  DEPARTMENT_GROUPS,
  type DepartmentGroupId,
  type DepartmentGroupMeta,
  getDepartmentGroupId,
  groupDepartmentsBySection,
  matchesDepartmentSearch,
} from "@/data/departmentGroups";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

function DepartmentCard({
  dept,
  en,
  group,
  showGroupBadge,
}: {
  dept: DeptInfo;
  en: boolean;
  group?: DepartmentGroupMeta;
  showGroupBadge?: boolean;
}) {
  const Icon = getDepartmentIcon(dept.slug);
  return (
    <Link
      to={`/departments/${dept.slug}`}
      className="group bg-white border border-border rounded-3xl p-6 md:p-8 hover:shadow-elegant hover:-translate-y-1 hover:border-civic-gold/30 transition-all flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="h-14 w-14 grid place-items-center rounded-2xl bg-civic-gold/10 text-civic-gold group-hover:bg-civic-blue group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        {showGroupBadge && group ? (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-civic-blue/70 bg-civic-blue/5 border border-civic-blue/10 rounded-full px-2 py-0.5 shrink-0 max-w-[45%] text-right leading-tight">
            {en ? group.shortEn : group.shortMr}
          </span>
        ) : null}
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-base md:text-lg font-bold text-civic-blue mb-1 group-hover:text-civic-red transition-colors">
          {en ? dept.nameEn : dept.nameMr}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {en ? dept.designationEn : dept.designationMr}
        </p>
        <p className="text-[11px] text-muted-foreground/80 mt-1.5">
          {en ? dept.headEn : dept.headMr}
        </p>
      </div>
      <div className="flex items-center text-civic-blue font-bold text-xs gap-1 opacity-0 group-hover:opacity-100 transition-all">
        {en ? "View Department" : "विभाग पहा"} <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

const Departments = () => {
  const { lang } = useLang();
  const en = lang === "en";
  const [query, setQuery] = useState("");

  const groupMetaById = useMemo(
    () => Object.fromEntries(DEPARTMENT_GROUPS.map((g) => [g.id, g])) as Record<
      DepartmentGroupId,
      DepartmentGroupMeta
    >,
    [],
  );

  const filtered = useMemo(
    () => DEPARTMENTS.filter((d) => matchesDepartmentSearch(d, query)),
    [query],
  );

  const sections = useMemo(() => {
    const buckets = groupDepartmentsBySection(filtered);
    const order: DepartmentGroupId[] = [
      "independent",
      "commissioner",
      "ac1",
      "ac2",
      "technical",
    ];
    return order
      .map((id) => ({ id, departments: buckets[id] }))
      .filter((s) => s.departments.length > 0);
  }, [filtered]);

  const totalVisible = sections.reduce((n, s) => n + s.departments.length, 0);
  const searchActive = query.trim().length > 0;

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Administration" : "प्रशासन"}
        title={en ? "Departments" : "विभाग"}
        subtitle={
          en
            ? "Senior officers, wings under the Municipal Commissioner (from Commissioner Office), Additional Commissioners, and technical branches—or search by name."
            : "वरिष्ठ अधिकारी, आयुक्त कार्यालयापासूनचे विभाग, अतिरिक्त आयुक्त व तांत्रिक शाखा—किंवा नावाने शोधा."
        }
      />
      <section className="py-12 md:py-16 container">
        <div className="mb-8 md:mb-10 space-y-4">
          <div className="relative max-w-xl">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
              aria-hidden
            />
            <Input
              type="text"
              role="searchbox"
              inputMode="search"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                en
                  ? "Search department, officer, or designation…"
                  : "विभाग, अधिकारी किंवा पदनाम शोधा…"
              }
              className="pl-9 pr-9 h-11 rounded-2xl border-border/80"
              aria-label={en ? "Search departments" : "विभाग शोधा"}
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-muted-foreground hover:text-civic-blue hover:bg-muted transition-colors"
                aria-label={en ? "Clear search" : "शोध साफ करा"}
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <p className="text-xs text-muted-foreground">
            {en
              ? `${totalVisible} department${totalVisible === 1 ? "" : "s"} shown`
              : `${totalVisible} विभाग दर्शविले`}
          </p>
        </div>

        {totalVisible === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-muted/30 px-6 py-14 text-center">
            <p className="font-serif text-lg text-civic-blue font-bold mb-2">
              {en ? "No departments match your search" : "आपल्या शोधाशी जुळणारे विभाग नाहीत"}
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {en
                ? "Try another spelling or officer name, or clear the search."
                : "वेगळे शब्द वापरून पहा, अधिकाऱ्याचे नाव टाका, किंवा शोध साफ करा."}
            </p>
          </div>
        ) : searchActive ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dept) => (
              <DepartmentCard
                key={dept.slug}
                dept={dept}
                en={en}
                group={groupMetaById[getDepartmentGroupId(dept.slug)]}
                showGroupBadge
              />
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {sections.map(({ id, departments }) => {
              const meta = groupMetaById[id];
              return (
                <div key={id} id={`dept-group-${id}`}>
                  <div className="mb-5 pb-3 border-b border-civic-gold/25">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-civic-blue">
                      {en ? meta.titleEn : meta.titleMr}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      {en
                        ? `${departments.length} department${departments.length === 1 ? "" : "s"}`
                        : `${departments.length} विभाग`}
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {departments.map((dept) => (
                      <DepartmentCard
                        key={dept.slug}
                        dept={dept}
                        en={en}
                        group={meta}
                        showGroupBadge={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Departments;
