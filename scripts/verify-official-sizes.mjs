/**
 * Compare official Content-Length with the mapped file size and the Drive inventory.
 * A filename match without equal sizes stays unresolved.
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
  const [header, ...body] = rows.filter((item) => item.length > 1);
  return body.map((cells) => Object.fromEntries(header.map((key, index) => [key, cells[index] ?? ""])));
}

const audit = JSON.parse(readFileSync("official-document-audit.json", "utf8"));
const inventory = parseCsv(readFileSync("csmc-drive-inventory.csv", "utf8"));
const byPath = new Map();
for (const row of inventory) {
  const path = `${row["Folder Path"]}/${row["File Name"]}`.replace(/\\/g, "/");
  byPath.set(path, row);
}

const candidates = audit.documents.filter((doc) => {
  if (doc.sharedChrome || doc.matchCount !== 1) return false;
  const match = doc.matches[0];
  if (match.publicationDisposition !== "MAPPED_PENDING_PUBLICATION_REVIEW") return false;
  if (match.publicListingImplemented === "yes") return false;
  if (doc.pages.some((page) => page.includes("divyang-beneficiaries"))) return false;
  return true;
});

async function lengthOf(url) {
  const response = await fetch(url, { method: "HEAD", redirect: "follow" });
  return {
    status: response.status,
    bytes: Number(response.headers.get("content-length") || "0"),
    type: response.headers.get("content-type") || "",
  };
}

const results = [];
const queue = [...candidates];
async function worker() {
  while (queue.length) {
    const doc = queue.shift();
    const match = doc.matches[0];
    const drive = byPath.get(match.localPath);
    let remote = { status: 0, bytes: 0, type: "" };
    try {
      remote = await lengthOf(doc.href);
    } catch (error) {
      remote = { status: 0, bytes: 0, type: String(error) };
    }
    const localBytes = Number(match.fileSizeBytes);
    const driveBytes = Number(drive?.["Size Bytes"] || 0);
    results.push({
      href: doc.href,
      pages: doc.pages,
      fileName: doc.fileName,
      localPath: match.localPath,
      documentId: match.documentId,
      section: match.intendedRepositorySection,
      localBytes,
      officialBytes: remote.bytes,
      officialStatus: remote.status,
      sizeMatch: remote.status === 200 && remote.bytes === localBytes && localBytes > 0,
      driveId: drive?.["File ID"] || "",
      driveBytes,
      driveSizeMatch: Boolean(drive) && driveBytes === localBytes,
    });
  }
}
await Promise.all(Array.from({ length: 8 }, () => worker()));
const summary = {
  checked: results.length,
  officialSizeMatch: results.filter((item) => item.sizeMatch).length,
  officialAndDriveMatch: results.filter((item) => item.sizeMatch && item.driveSizeMatch).length,
  officialMismatch: results.filter((item) => item.officialStatus === 200 && !item.sizeMatch).length,
  officialFailed: results.filter((item) => item.officialStatus !== 200).length,
};
writeFileSync("official-document-size-check.json", JSON.stringify({ summary, results }, null, 2));
console.log(JSON.stringify(summary, null, 2));
