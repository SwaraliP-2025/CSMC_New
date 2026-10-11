/**
 * Publish official PDFs whose bytes match the local file and the Drive inventory.
 * Applicant lists, scanned electrical ward parts, held tenders, and human-review files stay out.
 */
import { readFileSync, writeFileSync } from "node:fs";

function parseCsv(csv) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  const text = csv.replace(/^\uFEFF/, "");
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") cell += char;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [header, ...body] = rows.filter((item) => item.some((value) => value !== ""));
  return { header, records: body.map((cells) => Object.fromEntries(header.map((key, index) => [key, cells[index] ?? ""]))) };
}

function csvField(value) {
  const text = value ?? "";
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

const slugByPage = {
  "health-departement": "health",
  "tourism-department": "tourism-development",
  "city-engineer": "city-engineer",
  "garden-department": "garden",
  "labour-department": "labour",
  "mechanical-department": "mechanical-vehicles",
  "solid-waste-management-department": "solid-waste-management",
  "tax-assessor-and-collector-department": "tax",
  "water-supply-department": "water-supply-distribution",
  "pmay-department": "pmay",
  "ramai-awas-yojana": "ramai-housing",
  departments: "municipal-secretary-department",
};

const sizeCheck = JSON.parse(readFileSync("official-document-size-check.json", "utf8"));
const audit = JSON.parse(readFileSync("official-document-audit.json", "utf8"));
const labels = new Map(audit.documents.map((doc) => [doc.href, doc.label || ""]));

function blocked(item) {
  const name = item.fileName;
  if (/benefic|applicant/i.test(name)) return "personal-list";
  if (/^(Ward_|Word_)/.test(name)) return "scanned-ward-part";
  if (name.startsWith("15-_16_03_15")) return "standing-committee-duplicate-candidate";
  return "";
}

const selected = [];
for (const item of sizeCheck.results) {
  if (!item.sizeMatch || !item.driveSizeMatch || !item.driveId) continue;
  const page = item.pages[0].replace("https://chhsambhajinagarmc.org/", "");
  const slug = slugByPage[page];
  if (!slug) continue;
  if (page === "departments" && item.fileName !== "Mahapalika_Sachiv_Section.pdf") continue;
  if (page === "pmay-department" && item.fileName !== "Gharkul_Section.pdf") continue;
  if (page === "ramai-awas-yojana" && !item.fileName.startsWith("Jahir_")) continue;
  const reason = blocked(item);
  if (reason) continue;
  const parts = item.localPath.split("/");
  const file = parts.pop();
  const folder = parts.slice(1);
  selected.push({ ...item, page, slug, file, folder, label: (labels.get(item.href) || file).replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim() });
}

selected.sort((a, b) => a.localPath.localeCompare(b.localPath));
const ids = new Set();
const groups = new Map();
for (const item of selected) {
  const id = `official-${item.slug}-${item.file.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  if (ids.has(id)) throw new Error(`duplicate id ${id}`);
  ids.add(id);
  item.id = id;
  const key = `${item.slug}\n${item.folder.join("/")}`;
  const list = groups.get(key) ?? [];
  list.push(item);
  groups.set(key, list);
}

const driveSource = readFileSync("src/data/driveHostedPdfs.ts", "utf8");
for (const item of selected) {
  if (driveSource.includes(item.localPath) || driveSource.includes(item.driveId)) {
    throw new Error(`already hosted ${item.localPath}`);
  }
}

const lines = ['import type { ArchiveFile } from "@/lib/archiveDocuments";', "", "export type OfficialVerifiedGroup = {", "  slug: string;", "  folder: string[];", "  documents: ArchiveFile[];", "};", "", "/** Official CSMC PDFs whose file size matches the local copy and the Drive inventory. */", "export const officialVerifiedGroups: OfficialVerifiedGroup[] = ["];
for (const list of groups.values()) {
  const first = list[0];
  lines.push("  {");
  lines.push(`    slug: ${JSON.stringify(first.slug)},`);
  lines.push(`    folder: ${JSON.stringify(first.folder)},`);
  lines.push("    documents: [");
  for (const item of list) {
    const title = item.label.replace(/\.pdf$/i, "");
    lines.push(`      { id: ${JSON.stringify(item.id)}, file: ${JSON.stringify(item.file)}, bytes: ${item.localBytes}, titleEn: ${JSON.stringify(title)} },`);
  }
  lines.push("    ],");
  lines.push("  },");
}
lines.push("];", "");
writeFileSync("src/data/officialVerifiedDocuments.ts", lines.join("\n"));

const insertion = selected
  .map((item) => `  ${JSON.stringify(item.localPath)}: ${JSON.stringify(item.driveId)},`)
  .join("\n");
if (!driveSource.trimEnd().endsWith("};")) throw new Error("drive map ending changed");
writeFileSync("src/data/driveHostedPdfs.ts", driveSource.replace(/\n};\s*$/, `\n${insertion}\n};\n`));

const csv = parseCsv(readFileSync("document-mapping-reconciled-draft.csv", "utf8"));
const byId = new Map(selected.map((item) => [item.documentId, item]));
let updated = 0;
for (const record of csv.records) {
  const item = byId.get(record.documentId);
  if (!item) continue;
  if (record.localPath !== item.localPath) throw new Error(`path mismatch ${record.documentId}`);
  if (record.publicationDisposition !== "MAPPED_PENDING_PUBLICATION_REVIEW") throw new Error(`unexpected disposition ${record.documentId}`);
  record.reconciliationStatus = "implemented";
  record.publicListingImplemented = "yes";
  record.websiteSectionListed = "yes";
  record.websiteRepositoryListed = "yes";
  record.publicationDisposition = "";
  record.driveFileId = item.driveId;
  record.driveUrl = `https://drive.google.com/file/d/${item.driveId}/view`;
  record.reconciliationNotes = `${record.reconciliationNotes} Official content-length ${item.officialBytes} matches the local file and Drive inventory. Listed from ${item.href}.`.trim();
  updated += 1;
}
if (updated !== selected.length) throw new Error(`updated ${updated} of ${selected.length}`);
const body = [csv.header, ...csv.records.map((record) => csv.header.map((key) => csvField(record[key])))]
  .map((row) => row.join(","))
  .join("\n");
writeFileSync("document-mapping-reconciled-draft.csv", `\uFEFF${body}\n`);
writeFileSync("official-verified-additions.json", JSON.stringify(selected, null, 2));
console.log(`added ${selected.length} documents across ${groups.size} groups`);
