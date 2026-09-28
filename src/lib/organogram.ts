import {
  ORGANOGRAM_PEOPLE,
  type OrganogramPerson,
  type OrganogramStatus,
} from "@/data/organogram";

export interface OrganogramGroup {
  group: string;
  level: number;
  people: OrganogramPerson[];
}

function isRecord(person: OrganogramPerson): boolean {
  return Boolean(person.id && person.name?.trim() && person.designation?.trim());
}

/** All structurally valid records, including archived officers. */
export function getOrganogramRecords(status?: OrganogramStatus): OrganogramPerson[] {
  return ORGANOGRAM_PEOPLE.filter((person) => {
    if (!isRecord(person)) return false;
    if (status && person.status !== status) return false;
    return true;
  });
}

/** Active officers in chart order. This is what the public page renders. */
export function getPublishedOrganogram(): OrganogramPerson[] {
  return getOrganogramRecords("active").sort((a, b) => a.level - b.level || a.order - b.order);
}

export function getOrganogramGroups(): OrganogramGroup[] {
  const groups = new Map<string, OrganogramGroup>();
  for (const person of getPublishedOrganogram()) {
    const existing = groups.get(person.group);
    if (existing) {
      existing.people.push(person);
      continue;
    }
    groups.set(person.group, { group: person.group, level: person.level, people: [person] });
  }
  return [...groups.values()].sort((a, b) => a.level - b.level);
}

export function getOrganogramPerson(id: string): OrganogramPerson | undefined {
  return getOrganogramRecords().find((person) => person.id === id);
}

/** Spellings used on department pages for the same organogram officer. */
const DEPARTMENT_HEAD_IDS: Record<string, string> = {
  "ranjit patil": "ranjit-patil",
  "ujjwala bhamre": "ujwala-bhamare",
  "ujwala bhamare": "ujwala-bhamare",
  "savita sonawane": "savita-sonewane",
  "balasaheb shirsat": "balasaheb-shirsath",
  "sachin waikar": "sachin-walkar",
};

function officerNameKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/[.,]/g, " ")
    .replace(/\b(shri|smt|dr|ias)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Match a department head to the published organogram record, including known spelling differences. */
export function findOrganogramOfficerForHead(headEn: string): OrganogramPerson | undefined {
  const key = officerNameKey(headEn);
  if (!key) return undefined;
  const aliasId = DEPARTMENT_HEAD_IDS[key];
  if (aliasId) return getOrganogramPerson(aliasId);
  return getPublishedOrganogram().find((person) => officerNameKey(person.name) === key);
}

export function organogramDisplayName(person: OrganogramPerson, en: boolean): string {
  if (!en && person.nameMr?.trim()) return person.nameMr.trim();
  return person.name;
}

export function organogramDisplayDesignation(person: OrganogramPerson, en: boolean): string {
  if (!en && person.designationMr?.trim()) return person.designationMr.trim();
  return person.designation;
}

export function organogramDisplayDepartment(person: OrganogramPerson, en: boolean): string | undefined {
  const value = en ? person.department : person.departmentMr;
  const text = value?.trim();
  return text || undefined;
}

/** Dial link for a 10-digit Indian mobile number. Display text stays unchanged. */
export function organogramTelHref(phone: string | undefined): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `tel:+${digits}`;
  return null;
}

export function organogramInitials(name: string): string {
  const words = name
    .replace(/^(Shri|Smt|Dr|श्रीमती|श्री|डॉ)\.?\s+/i, "")
    .split(/\s+/)
    .filter((word) => word && word !== "IAS" && !word.endsWith(".") && !/^भा/.test(word));
  const letters = words.slice(0, 2).map((word) => word[0] ?? "");
  return letters.join("").toUpperCase() || "—";
}
