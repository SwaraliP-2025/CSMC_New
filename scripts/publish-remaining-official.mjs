/**
 * Final publication pass.
 * - Official PDFs with no local copy: link the official URL when it returns a PDF.
 * - Tender-folder PDFs: list one copy per identical file when Drive serves it without sign-in.
 * - Census links: list in the repository when Drive serves them without sign-in.
 * Duplicates are detected by SHA-256 of the local file, not by filename.
 */
import { createHash } from "node:crypto";
import { createReadStream, readFileSync, writeFileSync } from "node:fs";
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
      if (char === '"' && text[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { row.push(cell); cell = ""; }
    else if (char === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (char !== "\r") cell += char;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [header, ...body] = rows.filter((item) => item.some((value) => value !== ""));
  return { header, records: body.map((cells) => Object.fromEntries(header.map((key, index) => [key, cells[index] ?? ""]))) };
}

function csvField(value) {
  const text = value ?? "";
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

async function pool(items, size, fn) {
  const out = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      out[index] = await fn(items[index], index);
    }
  }));
  return out;
}

function sha(file) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    createReadStream(file).on("data", (chunk) => hash.update(chunk)).on("end", () => resolve(hash.digest("hex"))).on("error", reject);
  });
}

function decode(value) {
  try { return decodeURIComponent(value); } catch { return value; }
}

function cleanTitle(label, href) {
  const file = decode(href.split("/").pop() || "");
  const text = (label || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\.pdf$/i, "")
    .trim();
  if (!text || /^(click here|pdf|download|view)$/i.test(text)) {
    return file.replace(/\.pdf$/i, "").replace(/_+/g, " ").replace(/\s+/g, " ").trim();
  }
  return text;
}

function slugId(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

const PAGE_SECTIONS = {
  fe2d010308a6b3799a3d9c728ee74244: { kind: "section", id: "general-body", en: "General Body Meetings", mr: "सर्वसाधारण सभा" },
  "nulm-department": { kind: "dept", slug: "nulm", en: "NULM Department", mr: "NULM विभाग" },
  "public-notice1646633500": { kind: "section", id: "public-notices", en: "Public Notices", mr: "जाहीर प्रगटन" },
  bf40d1cbb2ba9fdad19821fc140fa50c: { kind: "dept", slug: "general-administration", en: "Recruitment results", mr: "भरती निकाल" },
  add5aebfcb33a2206b6497d53bc4f309: { kind: "dept", slug: "general-administration", en: "ASCDCL contract recruitment", mr: "ASCDCL कंत्राटी भरती" },
  d9437926cc8d785a7bdb8578fd85d8e3: { kind: "dept", slug: "election-census", en: "General Election 2025 – final ward structure", mr: "सार्वत्रिक निवडणूक 2025 – अंतिम प्रभाग रचना" },
  "establishment-1": { kind: "dept", slug: "general-administration", en: "General Administration Department", mr: "सामान्य प्रशासन विभाग" },
  "local-body-tax-departement": { kind: "dept", slug: "tax", en: "Local Body Tax Department (official LBT page)", mr: "स्थानिक संस्था कर विभाग" },
  d93591bdf7860e1e4ee2fca799911215: { kind: "dept", slug: "general-administration", en: "Retired officer recruitment", mr: "सेवानिवृत्त अधिकारी भरती" },
  "light-department": { kind: "dept", slug: "electrical", en: "Electrical Department", mr: "विद्युत विभाग" },
  a7a3d70c6d17a73140918996d03c014f: { kind: "dept", slug: "health", en: "COVID-19 recruitment", mr: "कोविड-19 भरती" },
  "uidssmt-department": { kind: "dept", slug: "drainage", en: "UIDSSMT Department", mr: "UIDSSMT विभाग" },
  "9d740bd0f36aaa312c8d504e28c42163": { kind: "dept", slug: "municipal-secretary-department", en: "Committee chairpersons 2026", mr: "समिती सभापती यादी 2026" },
  fe709c654eac84d5239d1a12a4f71877: { kind: "dept", slug: "health", en: "Health recruitment", mr: "आरोग्य भरती" },
  "draft-voter-list-20201646637597": { kind: "dept", slug: "election-census", en: "Draft Voter List 2020", mr: "प्रारूप मतदार यादी 2020" },
  "right-to-information-act": { kind: "dept", slug: "additional-commissioner-1", en: "Right to Information disclosure", mr: "माहिती अधिकार प्रकटीकरण" },
  "786f2d0acade1787dacb21cac85d099c": { kind: "section", id: "public-notices", en: "Public Notices", mr: "जाहीर प्रगटन" },
  "5e632913bf096e49880cf8b92d53c9ad": { kind: "dept", slug: "municipal-secretary-department", en: "General Election 2025 – elected members", mr: "सार्वत्रिक निवडणूक 2025 – निर्वाचित सदस्य" },
  eab9c5e9815adc4c40a6557495eed6d3: { kind: "dept", slug: "general-administration", en: "CSMC officer list", mr: "मनपा अधिकारी यादी" },
  "032a01d83345f23883c98c540ff32fe7": { kind: "section", id: "public-notices", en: "Public Notices", mr: "जाहीर प्रगटन" },
  ae5eb824ef87499f644c3f11a7176157: { kind: "dept", slug: "general-administration", en: "Establishment advertisement", mr: "आस्थापना जाहिरात" },
  "9978b7063e297d84bb2ac8e46c1c845f": { kind: "dept", slug: "health", en: "RNTCP", mr: "RNTCP" },
  a08e32d2f9a8b78894d964ec7fd4172e: { kind: "dept", slug: "health", en: "RNTCP", mr: "RNTCP" },
  "2f014b914ea5e7c04fc6cbde68d02141": { kind: "section", id: "public-notices", en: "Public Notices", mr: "जाहीर प्रगटन" },
  "audit-department": { kind: "dept", slug: "audit-department", en: "Audit Department", mr: "लेखापरीक्षण विभाग" },
  "education-department": { kind: "dept", slug: "education", en: "Education Department", mr: "शिक्षण विभाग" },
  "hoarding-licenses": { kind: "dept", slug: "property-management", en: "Hoarding licences", mr: "होर्डिंग परवाने" },
  "garden-department": { kind: "dept", slug: "garden", en: "Garden Department", mr: "उद्यान विभाग" },
  "town-planning-department": { kind: "dept", slug: "town-planning-department", en: "Town Planning Department", mr: "नगररचना विभाग" },
};

const TENDER_FOLDERS = [
  ["documents/Municipal Document Repository/Tenders/tender-notice-2025", "Tender notices 2025", "निविदा सूचना 2025"],
  ["documents/Municipal Document Repository/Tenders/tender-notice-2024", "Tender notices 2024", "निविदा सूचना 2024"],
  ["documents/Municipal Document Repository/Tenders/tender 2023", "Tenders 2023", "निविदा 2023"],
  ["documents/Municipal Document Repository/Tenders/2022", "Tenders 2022", "निविदा 2022"],
  ["documents/Municipal Document Repository/Tenders/2020", "Tenders 2020", "निविदा 2020"],
  ["documents/Municipal Document Repository/Tenders/Tender 2018-2019", "Tenders 2018-2019", "निविदा 2018-2019"],
];

const audit = JSON.parse(readFileSync("official-document-audit.json", "utf8"));
const csv = parseCsv(readFileSync("document-mapping-reconciled-draft.csv", "utf8"));
const inventory = parseCsv(readFileSync("csmc-drive-inventory.csv", "utf8")).records;
const invByPath = new Map(inventory.map((row) => [`${row["Folder Path"]}/${row["File Name"]}`.replace(/\\/g, "/"), row]));
const listedRows = csv.records.filter((row) => row.publicListingImplemented === "yes" && row.localPath);
const listedSizes = new Map();
for (const row of listedRows) {
  const list = listedSizes.get(row.fileSizeBytes) ?? [];
  list.push(row);
  listedSizes.set(row.fileSizeBytes, list);
}
// 1. Official PDFs without a local copy.
const missing = audit.documents.filter((doc) => !doc.sharedChrome && doc.matchCount === 0);
const officialChecks = await pool(missing, 8, async (doc) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(doc.href, { method: "HEAD", redirect: "follow", signal: controller.signal });
    return { status: response.status, bytes: Number(response.headers.get("content-length") || 0), type: response.headers.get("content-type") || "", finalUrl: response.url };
  } catch (error) {
    return { status: 0, bytes: 0, type: String(error.name || error), finalUrl: doc.href };
  } finally {
    clearTimeout(timer);
  }
});

const linked = [];
const officialBroken = [];
const officialDuplicate = [];
const officialUnassigned = [];
const seenHref = new Set();
for (let index = 0; index < missing.length; index += 1) {
  const doc = missing[index];
  const check = officialChecks[index];
  const pageName = doc.pages.map((page) => page.replace("https://chhsambhajinagarmc.org/", "")).find((name) => PAGE_SECTIONS[name]);
  if (check.status !== 200 || check.bytes === 0 || /text\/html/i.test(check.type)) {
    officialBroken.push({ href: doc.href, label: doc.label, page: doc.pages[0], status: check.status, type: check.type });
    continue;
  }
  const sameSize = listedSizes.get(String(check.bytes)) ?? [];
  if (check.bytes > 10000 && sameSize.length) {
    officialDuplicate.push({ href: doc.href, bytes: check.bytes, publishedAs: sameSize.map((row) => row.localPath) });
    continue;
  }
  if (!pageName) {
    officialUnassigned.push({ href: doc.href, label: doc.label, pages: doc.pages });
    continue;
  }
  const finalUrl = check.finalUrl;
  if (seenHref.has(finalUrl)) continue;
  seenHref.add(finalUrl);
  const section = PAGE_SECTIONS[pageName];
  linked.push({
    href: finalUrl,
    sourcePage: `https://chhsambhajinagarmc.org/${pageName}`,
    bytes: check.bytes,
    title: cleanTitle(doc.label, finalUrl),
    file: decode(finalUrl.split("/").pop() || ""),
    section,
  });
}

// 2. Tender-folder and other held PDFs.
const held = csv.records.filter((row) => row.publicationDisposition === "HOLD" && row.localPath && row.fileName.toLowerCase().endsWith(".pdf"));
const hashes = await pool(held, 6, async (row) => sha(path.join("public", ...row.localPath.split("/"))).catch(() => ""));
const listedHash = new Map();
const sizeCollisions = new Set(held.map((row) => row.fileSizeBytes).filter((size) => listedSizes.has(size)));
const listedToHash = listedRows.filter((row) => sizeCollisions.has(row.fileSizeBytes));
const listedHashes = await pool(listedToHash, 6, async (row) => sha(path.join("public", ...row.localPath.split("/"))).catch(() => ""));
listedToHash.forEach((row, index) => { if (listedHashes[index]) listedHash.set(listedHashes[index], row.localPath); });

const folderRank = new Map(TENDER_FOLDERS.map(([folder], index) => [folder, index]));
const order = held.map((row, index) => ({ row, hash: hashes[index] }))
  .sort((a, b) => (folderRank.get(a.row.localPath.split("/").slice(0, -1).join("/")) ?? 99) - (folderRank.get(b.row.localPath.split("/").slice(0, -1).join("/")) ?? 99) || a.row.localPath.localeCompare(b.row.localPath));
const tenderKeep = [];
const tenderDuplicates = [];
const tenderUnreadable = [];
const keptHash = new Map();
for (const { row, hash } of order) {
  if (!hash) { tenderUnreadable.push(row.localPath); continue; }
  if (listedHash.has(hash)) { tenderDuplicates.push({ path: row.localPath, of: listedHash.get(hash) }); continue; }
  if (keptHash.has(hash)) { tenderDuplicates.push({ path: row.localPath, of: keptHash.get(hash) }); continue; }
  keptHash.set(hash, row.localPath);
  tenderKeep.push(row);
}

async function probeDrive(fileId) {
  const url = `https://drive.usercontent.google.com/download?id=${encodeURIComponent(fileId)}&export=download&confirm=t`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const response = await fetch(url, { redirect: "follow", signal: controller.signal, headers: { "User-Agent": "CSMC-drive-check" } });
    const reader = response.body?.getReader();
    const first = reader ? (await reader.read()).value : undefined;
    await reader?.cancel().catch(() => undefined);
    const head = Buffer.from(first ?? []).subarray(0, 5).toString("latin1");
    const host = new URL(response.url).hostname;
    return { ok: response.status === 200 && host === "drive.usercontent.google.com" && head.startsWith("%PDF"), status: response.status, host, head };
  } catch (error) {
    return { ok: false, status: 0, host: "", head: String(error.name || error) };
  } finally {
    clearTimeout(timer);
  }
}

const tenderCandidates = tenderKeep.map((row) => ({ row, drive: invByPath.get(row.localPath) }));
const tenderProbe = await pool(tenderCandidates, 8, async ({ drive }, index) => {
  if (index % 100 === 0) console.log(`drive probe ${index}/${tenderCandidates.length}`);
  if (!drive || drive["Size Bytes"] !== tenderCandidates[index].row.fileSizeBytes) return { ok: false, status: 0, head: "no-inventory-match" };
  return probeDrive(drive["File ID"]);
});
const tenderPublished = [];
const tenderNoAccess = [];
tenderCandidates.forEach(({ row, drive }, index) => {
  if (tenderProbe[index].ok) tenderPublished.push({ row, driveId: drive["File ID"] });
  else tenderNoAccess.push({ path: row.localPath, reason: `${tenderProbe[index].status} ${tenderProbe[index].head}` });
});

// 3. Census links.
const census = csv.records.filter((row) => row.category === "census-2026-27");
const censusSource = readFileSync("src/data/census2026.ts", "utf8");
const censusIds = [...censusSource.matchAll(/id: (\d+),[\s\S]*?url: "([^"]+)"/g)].map((match) => ({ id: Number(match[1]), url: match[2] }));
const censusChecks = await pool(censusIds, 4, async (item) => {
  const fileId = item.url.match(/\/file\/d\/([^/]+)\//)?.[1];
  if (!fileId) return { ...item, ok: false, reason: "folder link, not a single PDF" };
  const result = await probeDrive(fileId);
  return { ...item, fileId, ok: result.ok, reason: result.ok ? "" : `${result.status} ${result.head}` };
});

// Write site data.
const deptGroups = new Map();
const sections = new Map();
for (const item of linked) {
  const doc = { id: `official-link-${slugId(item.file)}-${item.bytes}`, file: item.file, bytes: item.bytes, externalUrl: item.href, titleEn: item.title };
  if (item.section.kind === "dept") {
    const key = `${item.section.slug}\n${item.section.en}`;
    const group = deptGroups.get(key) ?? { slug: item.section.slug, headingEn: item.section.en, headingMr: item.section.mr, documents: [] };
    group.documents.push(doc);
    deptGroups.set(key, group);
  } else {
    const group = sections.get(item.section.id) ?? { id: item.section.id, headingEn: item.section.en, headingMr: item.section.mr, documents: [] };
    group.documents.push(doc);
    sections.set(item.section.id, group);
  }
}
const ids = new Set();
for (const group of [...deptGroups.values(), ...sections.values()]) {
  for (const doc of group.documents) {
    if (ids.has(doc.id)) throw new Error(`duplicate id ${doc.id}`);
    ids.add(doc.id);
  }
}

const tenderGroups = TENDER_FOLDERS.map(([folder, en, mr]) => ({
  folder: folder.split("/").slice(1),
  headingEn: en,
  headingMr: mr,
  documents: tenderPublished
    .filter(({ row }) => row.localPath.split("/").slice(0, -1).join("/") === folder)
    .map(({ row }) => ({
      id: `tender-${slugId(folder.split("/").pop())}-${slugId(row.fileName)}`,
      file: row.fileName,
      bytes: Number(row.fileSizeBytes),
      titleEn: row.fileName.replace(/\.pdf$/i, "").replace(/_+/g, " ").replace(/\s+/g, " ").trim(),
    })),
})).filter((group) => group.documents.length);
for (const group of tenderGroups) {
  for (const doc of group.documents) {
    const base = doc.id;
    for (let suffix = 2; ids.has(doc.id); suffix += 1) doc.id = `${base}-${suffix}`;
    ids.add(doc.id);
  }
}

const censusDocs = censusChecks.filter((item) => item.ok).map((item) => ({ id: `census-${item.id}`, url: item.url }));

const ts = [
  'import type { ArchiveFile } from "@/lib/archiveDocuments";',
  "",
  "export type OfficialLinkedGroup = { slug: string; headingEn: string; headingMr: string; documents: ArchiveFile[] };",
  "export type OfficialLinkedSection = { id: string; headingEn: string; headingMr: string; documents: ArchiveFile[] };",
  "export type TenderArchiveGroup = { folder: string[]; headingEn: string; headingMr: string; documents: ArchiveFile[] };",
  "",
  "/** Official CSMC PDFs that have no local copy. Each opens the official URL that returned a PDF. */",
  `export const officialLinkedGroups: OfficialLinkedGroup[] = ${JSON.stringify([...deptGroups.values()], null, 2)};`,
  "",
  `export const officialLinkedSections: OfficialLinkedSection[] = ${JSON.stringify([...sections.values()], null, 2)};`,
  "",
  "/** One copy of each tender-folder PDF. Identical files (same SHA-256) are listed once. */",
  `export const tenderArchiveGroups: TenderArchiveGroup[] = ${JSON.stringify(tenderGroups, null, 2)};`,
  "",
  "/** Census resources whose Drive file opened without sign-in. */",
  `export const verifiedCensusIds: number[] = ${JSON.stringify(censusChecks.filter((item) => item.ok).map((item) => item.id))};`,
  "",
];
writeFileSync("src/data/officialLinkedDocuments.ts", ts.join("\n"));

const driveSource = readFileSync("src/data/driveHostedPdfs.ts", "utf8");
const insertion = tenderPublished
  .filter(({ row, driveId }) => !driveSource.includes(`"${row.localPath}"`) && !driveSource.includes(`"${driveId}"`))
  .map(({ row, driveId }) => `  ${JSON.stringify(row.localPath)}: ${JSON.stringify(driveId)},`)
  .join("\n");
if (insertion) writeFileSync("src/data/driveHostedPdfs.ts", driveSource.replace(/\n};\s*$/, `\n${insertion}\n};\n`));

// Mapping updates.
const publishedPaths = new Map(tenderPublished.map(({ row, driveId }) => [row.localPath, driveId]));
const duplicatePaths = new Map(tenderDuplicates.map((item) => [item.path, item.of]));
const censusOk = new Set(censusChecks.filter((item) => item.ok).map((item) => `census-${item.id}`));
for (const record of csv.records) {
  if (publishedPaths.has(record.localPath)) {
    const driveId = publishedPaths.get(record.localPath);
    record.reconciliationStatus = "implemented";
    record.publicListingImplemented = "yes";
    record.websiteSectionListed = "yes";
    record.websiteRepositoryListed = "yes";
    record.publicationDisposition = "";
    record.driveFileId = driveId;
    record.driveUrl = `https://drive.google.com/file/d/${driveId}/view`;
    record.reconciliationNotes = `${record.reconciliationNotes} Listed on Tender Notices and in the repository. Drive file opened without sign-in.`.trim();
  } else if (duplicatePaths.has(record.localPath) && record.publicationDisposition === "HOLD") {
    record.publicationDisposition = "EXCLUDE";
    record.reconciliationNotes = `${record.reconciliationNotes} SHA-256 identical to ${duplicatePaths.get(record.localPath)}. Listed once.`.trim();
  } else if (censusOk.has(record.documentId)) {
    record.reconciliationStatus = "implemented";
    record.publicListingImplemented = "yes";
    record.websiteRepositoryListed = "yes";
    record.publicationDisposition = "";
    record.reconciliationNotes = `${record.reconciliationNotes} Drive file opened without sign-in. Listed on the Census page and in the repository.`.trim();
  }
}
const body = [csv.header, ...csv.records.map((record) => csv.header.map((key) => csvField(record[key])))].map((row) => row.join(",")).join("\n");
writeFileSync("document-mapping-reconciled-draft.csv", `\uFEFF${body}\n`);

const linkedCsv = [
  ["section", "slugOrId", "title", "officialUrl", "sourcePage", "bytes"],
  ...linked.map((item) => [item.section.kind, item.section.slug || item.section.id, item.title, item.href, item.sourcePage, String(item.bytes)]),
].map((row) => row.map(csvField).join(",")).join("\n");
writeFileSync("official-linked-documents.csv", `\uFEFF${linkedCsv}\n`);

const report = {
  officialMissing: missing.length,
  officialLinked: linked.length,
  officialBroken,
  officialDuplicate,
  officialUnassigned,
  heldPdfRows: held.length,
  tenderUnique: tenderKeep.length,
  tenderPublished: tenderPublished.length,
  tenderDuplicates,
  tenderNoAccess,
  tenderUnreadable,
  census: censusChecks,
};
writeFileSync("final-publication-report.json", JSON.stringify(report, null, 2));
const byDept = {};
for (const item of linked) {
  const key = item.section.slug || item.section.id;
  byDept[key] = (byDept[key] || 0) + 1;
}
const byFolder = {};
for (const { row } of tenderPublished) {
  const key = row.localPath.split("/").slice(-2, -1)[0];
  byFolder[key] = (byFolder[key] || 0) + 1;
}
console.log(JSON.stringify({
  officialMissing: missing.length,
  officialLinked: linked.length,
  officialBroken: officialBroken.length,
  officialDuplicate: officialDuplicate.length,
  officialUnassigned: officialUnassigned.length,
  linkedBySection: byDept,
  heldPdfRows: held.length,
  tenderUnique: tenderKeep.length,
  tenderPublished: tenderPublished.length,
  tenderByFolder: byFolder,
  tenderDuplicates: tenderDuplicates.length,
  tenderNoAccess: tenderNoAccess.length,
  tenderUnreadable: tenderUnreadable.length,
  censusOk: censusDocs.length,
  censusFailed: censusChecks.filter((item) => !item.ok).map((item) => `${item.id}: ${item.reason}`),
}, null, 2));
