import fs from "fs";

const text = fs.readFileSync("src/pages/site/DepartmentDetail.tsx", "utf8");
const marker = "const DEPARTMENTS: DeptInfo[] = [";
const start = text.lastIndexOf(marker);
if (start < 0) throw new Error("DEPARTMENTS not found");
const slice = text.slice(start);
const end = slice.indexOf("export { DEPARTMENTS }");
const body = end > 0 ? slice.slice(0, end) : slice;

const re =
  /slug:\s*"([^"]+)"[\s\S]*?nameEn:\s*"([^"]*)"[\s\S]*?nameMr:\s*"([^"]*)"/g;
const bySlug = new Map();
let m;
while ((m = re.exec(body))) {
  bySlug.set(m[1], { slug: m[1], nameEn: m[2], nameMr: m[3] });
}
const out = [...bySlug.values()];

const file = `/** Lightweight department labels for global search (sourced from DepartmentDetail). */
export type DepartmentDirectoryEntry = { slug: string; nameEn: string; nameMr: string };

export const DEPARTMENT_DIRECTORY: DepartmentDirectoryEntry[] = ${JSON.stringify(out, null, 2)};
`;

fs.writeFileSync("src/data/departmentDirectory.ts", file);
console.log("wrote", out.length, "unique departments");
