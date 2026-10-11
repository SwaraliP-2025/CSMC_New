/**
 * Publish official-site PDFs that are still unlisted when the official file size
 * matches exactly one local file and the same Drive inventory object.
 * Duplicate EXCLUDE rows and files with no local copy stay unpublished.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

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
  "light-department": "electrical",
  "fire-department": "fire-disaster-management",
  "divyang-beneficiaries-list": "social-development",
  "audit-department": "audit-department",
  "education-department": "education",
  "nulm-department": "nulm",
  "town-planning-department": "town-planning-department",
  "establishment-1": "general-administration",
  "chief-accounts-officer": "chief-accounts-finance-officer",
  library: "library",
  departments: "municipal-secretary-department",
};

function pageSlug(pages) {
  for (const page of pages) {
    const name = page.replace("https://chhsambhajinagarmc.org/", "");
    if (slugByPage[name]) return slugByPage[name];
  }
  return "";
}

function cleanTitle(label, file) {
  const text = (label || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "and")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\.pdf$/i, "");
  if (!text || /^click here$/i.test(text)) {
    return file.replace(/\.pdf$/i, "").replace(/[_]+/g, " ").replace(/\s+/g, " ").trim();
  }
  return text;
}

const audit = JSON.parse(readFileSync("official-document-audit.json", "utf8"));
const csv = parseCsv(readFileSync("document-mapping-reconciled-draft.csv", "utf8"));
const inventory = parseCsv(readFileSync("csmc-drive-inventory.csv", "utf8")).records;
const byPath = new Map(inventory.map((row) => [`${row["Folder Path"]}/${row["File Name"]}`.replace(/\\/g, "/"), row]));
const listed = new Set(csv.records.filter((row) => row.publicListingImplemented === "yes").map((row) => row.localPath));
const driveSource = readFileSync("src/data/driveHostedPdfs.ts", "utf8");
const hostedIds = new Set([...driveSource.matchAll(/"([^"]+)": "([^"]+)"/g)].map((match) => match[2]));

const hrefs = new Set();
const docs = [];
for (const doc of audit.documents) {
  if (doc.sharedChrome) continue;
  const open = doc.matches.filter((match) => match.publicationDisposition !== "EXCLUDE" && !listed.has(match.localPath) && match.publicListingImplemented !== "yes");
  if (!open.length) continue;
  docs.push(doc);
  hrefs.add(doc.href);
}

const lengths = new Map();
const queue = [...hrefs];
async function worker() {
  while (queue.length) {
    const href = queue.shift();
    try {
      const response = await fetch(href, { method: "HEAD", redirect: "follow" });
      lengths.set(href, { status: response.status, bytes: Number(response.headers.get("content-length") || 0) });
    } catch (error) {
      lengths.set(href, { status: 0, bytes: 0, error: String(error) });
    }
  }
}
await Promise.all(Array.from({ length: 8 }, () => worker()));

const selected = [];
const skipped = [];
for (const doc of docs) {
  const remote = lengths.get(doc.href);
  const open = doc.matches.filter((match) => match.publicationDisposition !== "EXCLUDE" && !listed.has(match.localPath) && match.publicListingImplemented !== "yes");
  const sized = open.filter((match) => remote?.status === 200 && Number(match.fileSizeBytes) === remote.bytes && remote.bytes > 0);
  if (sized.length !== 1) {
    skipped.push({ href: doc.href, fileName: doc.fileName, reason: sized.length === 0 ? "size-mismatch-or-unavailable" : "ambiguous-size", open: open.length, officialBytes: remote?.bytes || 0, status: remote?.status || 0 });
    continue;
  }
  const match = sized[0];
  const drive = byPath.get(match.localPath);
  const driveBytes = Number(drive?.["Size Bytes"] || 0);
  const driveId = drive?.["File ID"] || "";
  if (!driveId || driveBytes !== Number(match.fileSizeBytes)) {
    skipped.push({ href: doc.href, fileName: doc.fileName, reason: "drive-mismatch", localPath: match.localPath });
    continue;
  }
  if (hostedIds.has(driveId) || driveSource.includes(match.localPath)) {
    skipped.push({ href: doc.href, fileName: doc.fileName, reason: "already-hosted", localPath: match.localPath });
    continue;
  }
  if (!existsSync(path.join("public", ...match.localPath.split("/")))) {
    skipped.push({ href: doc.href, fileName: doc.fileName, reason: "missing-local-file", localPath: match.localPath });
    continue;
  }
  const slug = pageSlug(doc.pages);
  const standing = match.localPath.startsWith("documents/standing-committee/");
  const namedPage = doc.pages.some((page) => {
    const name = page.replace("https://chhsambhajinagarmc.org/", "");
    return Object.prototype.hasOwnProperty.call(slugByPage, name) && name !== "establishment-1";
  });
  const establishmentOk = slug === "general-administration" && /establishment|administration/i.test(match.localPath);
  if ((!slug && !standing) || (slug === "general-administration" && !establishmentOk) || (!namedPage && !standing && slug !== "general-administration")) {
    skipped.push({ href: doc.href, fileName: doc.fileName, reason: "department-not-established", pages: doc.pages });
    continue;
  }
  const parts = match.localPath.split("/");
  const file = parts.pop();
  selected.push({
    documentId: match.documentId,
    href: doc.href,
    pages: doc.pages,
    fileName: doc.fileName,
    label: doc.label,
    localPath: match.localPath,
    localBytes: Number(match.fileSizeBytes),
    officialBytes: remote.bytes,
    driveId,
    slug,
    standing,
    folder: parts.slice(1),
    file,
    title: cleanTitle(doc.label, file),
    previousDisposition: match.publicationDisposition,
    tender: match.publicationDisposition === "HOLD" || /tender|eoi|\brfp\b|pre[-_ ]?bid/i.test(doc.fileName),
  });
}

selected.sort((a, b) => a.localPath.localeCompare(b.localPath));
const seenPath = new Set();
const uniqueSelected = [];
for (const item of selected) {
  if (seenPath.has(item.localPath) || uniqueSelected.some((other) => other.driveId === item.driveId)) continue;
  seenPath.add(item.localPath);
  uniqueSelected.push(item);
}

const groups = new Map();
const standingDocs = [];
for (const item of uniqueSelected) {
  const id = `official-${item.slug || "standing"}-${item.file.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  item.id = id;
  if (item.standing && !item.slug) {
    standingDocs.push(item);
    continue;
  }
  const key = `${item.slug}\n${item.folder.join("/")}`;
  const list = groups.get(key) ?? [];
  list.push(item);
  groups.set(key, list);
}

const lines = [
  'import type { ArchiveFile } from "@/lib/archiveDocuments";',
  "",
  "export type OfficialPublicAddition = {",
  "  slug: string;",
  "  folder: string[];",
  "  documents: ArchiveFile[];",
  "};",
  "",
  "/** Official PDFs published after the tender hold was lifted. Sizes match the official file and Drive. */",
  "export const officialPublicAdditions: OfficialPublicAddition[] = [",
];
for (const list of groups.values()) {
  const first = list[0];
  lines.push("  {");
  lines.push(`    slug: ${JSON.stringify(first.slug)},`);
  lines.push(`    folder: ${JSON.stringify(first.folder)},`);
  lines.push("    documents: [");
  for (const item of list) {
    lines.push(`      { id: ${JSON.stringify(item.id)}, file: ${JSON.stringify(item.file)}, bytes: ${item.localBytes}, titleEn: ${JSON.stringify(item.title)} },`);
  }
  lines.push("    ],");
  lines.push("  },");
}
lines.push("];", "");
if (standingDocs.length) {
  lines.push("export const officialStandingCommitteeFolder = " + JSON.stringify(standingDocs[0].folder) + ";");
  lines.push("export const officialStandingCommitteeDocuments: ArchiveFile[] = [");
  for (const item of standingDocs) {
    lines.push(`  { id: ${JSON.stringify(item.id)}, file: ${JSON.stringify(item.file)}, bytes: ${item.localBytes}, titleEn: ${JSON.stringify(item.title)} },`);
  }
  lines.push("];", "");
}
writeFileSync("src/data/officialPublicAdditions.ts", lines.join("\n"));

const insertion = uniqueSelected.map((item) => `  ${JSON.stringify(item.localPath)}: ${JSON.stringify(item.driveId)},`).join("\n");
if (!driveSource.trimEnd().endsWith("};")) throw new Error("drive map ending changed");
writeFileSync("src/data/driveHostedPdfs.ts", driveSource.replace(/\n};\s*$/, `\n${insertion}\n};\n`));

const byId = new Map(uniqueSelected.map((item) => [item.documentId, item]));
let updated = 0;
for (const record of csv.records) {
  const item = byId.get(record.documentId);
  if (!item) continue;
  if (record.localPath !== item.localPath) throw new Error(`path mismatch ${record.documentId}`);
  record.reconciliationStatus = "implemented";
  record.publicListingImplemented = "yes";
  record.websiteSectionListed = "yes";
  record.websiteRepositoryListed = "yes";
  record.publicationDisposition = "";
  record.driveFileId = item.driveId;
  record.driveUrl = `https://drive.google.com/file/d/${item.driveId}/view`;
  record.reconciliationNotes = `${record.reconciliationNotes} Official content-length ${item.officialBytes} matches this file and its Drive object. Listed from ${item.href}.`.trim();
  updated += 1;
}
if (updated !== uniqueSelected.length) throw new Error(`updated ${updated} of ${uniqueSelected.length}`);
const body = [csv.header, ...csv.records.map((record) => csv.header.map((key) => csvField(record[key])))].map((row) => row.join(",")).join("\n");
writeFileSync("document-mapping-reconciled-draft.csv", `\uFEFF${body}\n`);
writeFileSync("official-public-additions.json", JSON.stringify({ selected: uniqueSelected, skipped }, null, 2));

const tenderBySlug = {};
const otherBySlug = {};
for (const item of uniqueSelected) {
  const bucket = item.tender ? tenderBySlug : otherBySlug;
  const key = item.slug || "standing-committee";
  bucket[key] = (bucket[key] || 0) + 1;
}
console.log(JSON.stringify({
  checked: docs.length,
  published: uniqueSelected.length,
  tenders: uniqueSelected.filter((item) => item.tender).length,
  tenderBySlug,
  otherBySlug,
  skipped: skipped.length,
  skipReasons: skipped.reduce((acc, item) => { acc[item.reason] = (acc[item.reason] || 0) + 1; return acc; }, {}),
}, null, 2));
