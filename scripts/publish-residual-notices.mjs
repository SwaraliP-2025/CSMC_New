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

const canonical = [
  ["documents/Municipal Document Repository/Tenders/tender-notice-2025/Project_Manager-Jahirat.pdf", "13cXfEi1j_yQR-puTTJgFX3mjJwjvw-6l", "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/Project_Manager-Jahirat.pdf", 1423860],
  ["documents/Municipal Document Repository/Tenders/tender-notice-2025/ShreeGaneshUtsav2026.pdf", "1FHH5wUeYPnnhTSH4cYVQunIMdfG5o4Yz", "https://chhsambhajinagarmc.org/assets/300/2026/09/mediafiles/ShreeGaneshUtsav2026.pdf", 9513364],
  ["documents/Municipal Document Repository/Tenders/tender-notice-2025/Street_Vendors_Election_Suchana.pdf", "1o7e6Osiy9CCZfyaNEYb4-khHhI5aFfqd", "https://chhsambhajinagarmc.org/assets/300/2026/06/mediafiles/Street_Vendors_Election_Suchana.pdf", 878041],
  ["documents/Municipal Document Repository/Garden Department/Jahir_Lilav_Suchana.pdf", "1z3IeH4JwLvKdn27wMRKnsmY0LROmcN6a", "https://chhsambhajinagarmc.org/assets/300/2026/06/mediafiles/Jahir_Lilav_Suchana.pdf", 937402],
];
const duplicatePaths = [
  "documents/Municipal Document Repository/Tenders/Tender 2018-2019/Project_Manager-Jahirat.pdf",
  "documents/Municipal Document Repository/Tenders/tender-notice-2024/Project_Manager-Jahirat.pdf",
  "documents/Municipal Document Repository/Tenders/Tender 2018-2019/ShreeGaneshUtsav2026.pdf",
  "documents/Municipal Document Repository/Tenders/tender-notice-2024/ShreeGaneshUtsav2026.pdf",
  "documents/Municipal Document Repository/Tenders/Tender 2018-2019/Street_Vendors_Election_Suchana.pdf",
  "documents/Municipal Document Repository/Tenders/tender-notice-2024/Street_Vendors_Election_Suchana.pdf",
  "documents/Municipal Document Repository/Tenders/tender-notice-2025/Jahir_Lilav_Suchana.pdf",
];

const csv = parseCsv(readFileSync("document-mapping-reconciled-draft.csv", "utf8"));
const byPath = new Map(csv.records.map((record) => [record.localPath, record]));
for (const [localPath, driveId, href, bytes] of canonical) {
  const record = byPath.get(localPath);
  if (!record) throw new Error(`missing ${localPath}`);
  if (Number(record.fileSizeBytes) !== bytes) throw new Error(`size ${localPath}`);
  if (record.publicListingImplemented === "yes") throw new Error(`already listed ${localPath}`);
  record.reconciliationStatus = "implemented";
  record.publicListingImplemented = "yes";
  record.websiteSectionListed = "yes";
  record.websiteRepositoryListed = "yes";
  record.publicationDisposition = "";
  record.driveFileId = driveId;
  record.driveUrl = `https://drive.google.com/file/d/${driveId}/view`;
  record.reconciliationNotes = `${record.reconciliationNotes} Official content-length ${bytes} matches this file and its Drive object. Listed from ${href}. Identical copies in other folders were not listed again.`.trim();
}
for (const localPath of duplicatePaths) {
  const record = byPath.get(localPath);
  if (!record) throw new Error(`missing duplicate ${localPath}`);
  if (record.publicationDisposition !== "HOLD") throw new Error(`duplicate disposition ${localPath} ${record.publicationDisposition}`);
  record.publicationDisposition = "EXCLUDE";
  record.reconciliationNotes = `${record.reconciliationNotes} Byte-identical duplicate of the published official file. Not listed separately.`.trim();
}
const body = [csv.header, ...csv.records.map((record) => csv.header.map((key) => csvField(record[key])))].map((row) => row.join(",")).join("\n");
writeFileSync("document-mapping-reconciled-draft.csv", `\uFEFF${body}\n`);

const driveSource = readFileSync("src/data/driveHostedPdfs.ts", "utf8");
for (const [localPath, driveId] of canonical) {
  if (driveSource.includes(driveId) || driveSource.includes(localPath)) throw new Error(`already hosted ${localPath}`);
}
const insertion = canonical.map(([localPath, driveId]) => `  ${JSON.stringify(localPath)}: ${JSON.stringify(driveId)},`).join("\n");
writeFileSync("src/data/driveHostedPdfs.ts", driveSource.replace(/\n};\s*$/, `\n${insertion}\n};\n`));

const count = (key, expected) => csv.records.filter((record) => record[key] === expected).length;
console.log(JSON.stringify({
  implemented: count("reconciliationStatus", "implemented"),
  listed: count("publicListingImplemented", "yes"),
  hold: count("publicationDisposition", "HOLD"),
  exclude: count("publicationDisposition", "EXCLUDE"),
  human: count("publicationDisposition", "NEEDS_HUMAN_REVIEW"),
  pending: count("publicationDisposition", "MAPPED_PENDING_PUBLICATION_REVIEW"),
  heldAndHold: csv.records.filter((record) => record.reconciliationStatus === "held" && record.publicationDisposition === "HOLD").length,
  censusHold: csv.records.filter((record) => record.category === "census-2026-27" && record.publicationDisposition === "HOLD").length,
}, null, 2));
