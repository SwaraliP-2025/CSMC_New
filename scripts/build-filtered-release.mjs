import { execSync, spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist-release");
const pages = process.argv.includes("--pages");

const built = spawnSync("npx", ["vite", "build", "--outDir", "dist-release", "--emptyOutDir"], {
  cwd: root,
  env: { ...process.env, CSMC_FILTER_PUBLIC: "1" },
  stdio: "inherit",
  shell: true,
});
if (built.status !== 0) process.exit(built.status ?? 1);

const entry = `
import { administrationEstablishmentEntries } from "./src/data/administrationEstablishmentDocuments.ts";
import { SEVEN_STAR_FAQ_DOCUMENT, DISASTER_GUIDELINES_DOCUMENT } from "./src/data/citizenRepositoryDocuments.ts";
import { BUDGET_FOLDER, budgetDocumentsFor, budgetYearSections } from "./src/data/budgetDocuments.ts";
import { ELECTION_INSIGHTS_ROOT, electionInsightCategories } from "./src/data/electionInsights.ts";
import { standingCommitteeMinutes } from "./src/data/standingCommitteeMinutes.ts";
import { chiefAccountsOfficerDocuments, CHIEF_ACCOUNTS_OFFICER_FOLDER } from "./src/data/chiefAccountsOfficerDocuments.ts";
import { dastavezDocuments, policyDocuments } from "./src/data/municipalDocuments.ts";
import { MUNICIPAL_SECRETARIES_DOCUMENT, SECRETARIES_FOLDER } from "./src/data/municipalSecretaries.ts";
import { RTI_DEPARTMENT_FOLDER, RTI_FOLDER, RTI_OFFICERS_FOLDER, RTI_OFFICERS_ORDER, rtiArchiveDocuments } from "./src/data/rtiDocuments.ts";
import { rtsArchiveDocuments, RTS_FOLDER } from "./src/data/rtsDocuments.ts";
import { educationDocuments, EDUCATION_DOCUMENTS_FOLDER } from "./src/data/educationDocuments.ts";
import { completedWorks } from "./src/data/completedWorks.ts";
import { ncapArchiveDocuments } from "./src/data/ncapSearchMeta.ts";
import { DRAINAGE_DOCUMENTS_FOLDER, drainageDocuments } from "./src/data/drainageDocuments.ts";
import { TOWN_PLANNING_DOCUMENTS_FOLDER, townPlanningDocuments } from "./src/data/townPlanningDocuments.ts";
import { AUDIT_DOCUMENTS_FOLDER, ELECTRICAL_DOCUMENTS_FOLDER, FIRE_INFORMATION_FOLDER, LIBRARY_DOCUMENTS_FOLDER, MECHANICAL_DOCUMENTS_FOLDER, NULM_DOCUMENTS_FOLDER, STANDING_COMMITTEE_VOLUME_FOLDER, auditDocuments, electricalPublicDocuments, fireInformationDocuments, libraryDocuments, mechanicalPublicDocuments, nulmDocuments, standingCommitteeVolumeMinutes } from "./src/data/reviewedPublicDocuments.ts";
const rels = new Set();
function local(segments, file) { rels.add(["documents", ...segments, file].join("/")); }
for (const doc of educationDocuments) local([...EDUCATION_DOCUMENTS_FOLDER], doc.file);
for (const doc of townPlanningDocuments) if (!doc.externalUrl) local([...TOWN_PLANNING_DOCUMENTS_FOLDER], doc.file);
for (const doc of drainageDocuments) local([...DRAINAGE_DOCUMENTS_FOLDER], doc.file);
for (const category of administrationEstablishmentEntries) for (const doc of category.files) if (!doc.externalUrl) local([...category.folderSegments], doc.file);
local([], SEVEN_STAR_FAQ_DOCUMENT.file);
local([], DISASTER_GUIDELINES_DOCUMENT.file);
for (const doc of dastavezDocuments) local([doc.folder], doc.file);
for (const doc of policyDocuments) local([doc.folder], doc.file);
local([SECRETARIES_FOLDER], MUNICIPAL_SECRETARIES_DOCUMENT.file);
for (const doc of rtsArchiveDocuments) local([RTS_FOLDER], doc.file);
for (const doc of chiefAccountsOfficerDocuments) local([CHIEF_ACCOUNTS_OFFICER_FOLDER], doc.file);
for (const section of budgetYearSections) for (const doc of budgetDocumentsFor(section.id)) local([BUDGET_FOLDER, section.id], doc.file);
for (const doc of standingCommitteeMinutes) local(["standing-committee", String(doc.year)], doc.file);
for (const category of electionInsightCategories) if (category.files.length) for (const doc of category.files) local([ELECTION_INSIGHTS_ROOT, category.folder], doc.file);
for (const doc of rtiArchiveDocuments()) local([RTI_FOLDER, RTI_DEPARTMENT_FOLDER], doc.file);
local([RTI_FOLDER, RTI_OFFICERS_FOLDER], RTI_OFFICERS_ORDER.file);
for (const doc of completedWorks) local(["List of Completed Works"], doc.file);
for (const doc of ncapArchiveDocuments()) rels.add("ncap/documents/" + doc.file);
for (const doc of auditDocuments) local([...AUDIT_DOCUMENTS_FOLDER], doc.file);
for (const doc of electricalPublicDocuments) local([...ELECTRICAL_DOCUMENTS_FOLDER], doc.file);
for (const doc of libraryDocuments) local([...LIBRARY_DOCUMENTS_FOLDER], doc.file);
for (const doc of nulmDocuments) local([...NULM_DOCUMENTS_FOLDER], doc.file);
for (const doc of fireInformationDocuments) local([...FIRE_INFORMATION_FOLDER], doc.file);
for (const doc of mechanicalPublicDocuments) local([...MECHANICAL_DOCUMENTS_FOLDER], doc.file);
for (const doc of standingCommitteeVolumeMinutes) local(["standing-committee", STANDING_COMMITTEE_VOLUME_FOLDER], doc.file);
export const allow = [...rels];
`;

const bundled = await esbuild.build({
  absWorkingDir: root,
  stdin: { contents: entry, resolveDir: root, loader: "ts", sourcefile: "release-allowlist.ts" },
  bundle: true,
  format: "esm",
  platform: "node",
  write: false,
  packages: "external",
  alias: { "@": path.join(root, "src") },
  define: {
    "import.meta.env.BASE_URL": '"/CSMC_New/"',
    "import.meta.env.DEV": "false",
    "import.meta.env.PROD": "true",
    "import.meta.env.MODE": '"production"',
  },
  logLevel: "silent",
});
const mod = await import("data:text/javascript;base64," + Buffer.from(bundled.outputFiles[0].text).toString("base64"));
const allow = new Set(mod.allow);

function copyTree(from, to, skip) {
  mkdirSync(to, { recursive: true });
  for (const name of readdirSync(from)) {
    if (skip?.(name)) continue;
    const source = path.join(from, name);
    const target = path.join(to, name);
    if (statSync(source).isDirectory()) copyTree(source, target);
    else cpSync(source, target);
  }
}

const publicDir = path.join(root, "public");
copyTree(publicDir, outDir, (name) => name === "documents" || name === "ncap");
copyTree(path.join(publicDir, "ncap"), path.join(outDir, "ncap"), (name) => name === "documents");

let copied = 0;
if (pages) {
  const tracked = execSync("git ls-files -z -- public/documents public/ncap/documents", {
    cwd: root,
    encoding: "utf8",
  }).split("\0").filter(Boolean);
  for (const gitPath of tracked) {
    const rel = gitPath.replaceAll("\\", "/").replace(/^public\//, "");
    const target = path.join(outDir, rel);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(root, gitPath), target);
    copied++;
  }
} else {
  for (const rel of allow) {
    const source = path.join(publicDir, rel);
    if (!existsSync(source)) throw new Error("Approved file is missing: " + rel);
    const target = path.join(outDir, rel);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(source, target);
    copied++;
  }
}

function walk(dir, found) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, found);
    else found.push(path.relative(outDir, full).split(path.sep).join("/"));
  }
}
const present = [];
walk(path.join(outDir, "documents"), present);
walk(path.join(outDir, "ncap", "documents"), present);
const extra = pages ? [] : present.filter((rel) => !allow.has(rel));
const missing = pages ? [] : [...allow].filter((rel) => !present.includes(rel));
if (extra.length || missing.length) {
  console.error(JSON.stringify({ extra: extra.slice(0, 20), missing: missing.slice(0, 20), extraCount: extra.length, missingCount: missing.length }, null, 2));
  rmSync(outDir, { recursive: true, force: true });
  process.exit(1);
}

const forbidden = ["PMAY AHP APPLICANT", "Divyang_list.pdf", "Qualified_Applicant", "tenders/", "Duplicate Review", ".crdownload"];
const leaked = present.filter((rel) => forbidden.some((bit) => rel.includes(bit)));
if (leaked.length) {
  console.error(leaked.slice(0, 20));
  rmSync(outDir, { recursive: true, force: true });
  process.exit(1);
}

console.log((pages ? "Pages release: " : "Filtered release: ") + copied + " document files copied, " + present.length + " document files in dist-release.");
