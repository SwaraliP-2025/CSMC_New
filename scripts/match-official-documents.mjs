/**
 * Compare the official-site crawl with the reconciled mapping.
 * Filename similarity alone is recorded as unresolved.
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

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function norm(name) {
  return safeDecode(name)
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/, "")
    .replace(/[^a-z0-9]+/g, "");
}

const crawl = JSON.parse(readFileSync("official-document-audit-crawl.json", "utf8"));
const mapping = parseCsv(readFileSync("document-mapping-reconciled-draft.csv", "utf8"));
const byName = new Map();
for (const record of mapping) {
  const key = norm(record.fileName || "");
  if (!key) continue;
  const list = byName.get(key) ?? [];
  list.push(record);
  byName.set(key, list);
}

const hrefPages = new Map();
for (const page of crawl.pages) {
  for (const doc of page.documents) {
    const list = hrefPages.get(doc.href) ?? [];
    list.push(page.url);
    hrefPages.set(doc.href, list);
  }
}

const pageDocs = [];
for (const [href, pages] of hrefPages) {
  const fileName = safeDecode(href.split("/").pop() || "");
  const key = norm(fileName);
  const matches = byName.get(key) ?? [];
  const shared = pages.length >= 8;
  pageDocs.push({
    href,
    fileName,
    label: crawl.pages.flatMap((page) => page.documents).find((doc) => doc.href === href)?.label ?? "",
    pages: [...new Set(pages)],
    sharedChrome: shared,
    matchCount: matches.length,
    matches: matches.map((record) => ({
      documentId: record.documentId,
      localPath: record.localPath,
      fileSizeBytes: record.fileSizeBytes,
      publicationDisposition: record.publicationDisposition,
      publicListingImplemented: record.publicListingImplemented,
      intendedRepositorySection: record.intendedRepositorySection,
    })),
  });
}

const summary = {
  pages: crawl.pageCount,
  uniquePdfLinks: pageDocs.length,
  sharedChromeLinks: pageDocs.filter((doc) => doc.sharedChrome).length,
  pageSpecific: pageDocs.filter((doc) => !doc.sharedChrome).length,
  pageSpecificUniqueMatch: pageDocs.filter((doc) => !doc.sharedChrome && doc.matchCount === 1).length,
  pageSpecificAmbiguous: pageDocs.filter((doc) => !doc.sharedChrome && doc.matchCount > 1).length,
  pageSpecificMissing: pageDocs.filter((doc) => !doc.sharedChrome && doc.matchCount === 0).length,
};
const byPage = {};
for (const doc of pageDocs.filter((item) => !item.sharedChrome)) {
  for (const page of doc.pages) {
    const bucket = byPage[page] ?? { official: 0, uniqueMatch: 0, alreadyListed: 0, pending: 0, held: 0, missing: 0, ambiguous: 0 };
    bucket.official += 1;
    if (doc.matchCount === 0) bucket.missing += 1;
    else if (doc.matchCount > 1) bucket.ambiguous += 1;
    else {
      bucket.uniqueMatch += 1;
      const status = doc.matches[0].publicationDisposition;
      const listed = doc.matches[0].publicListingImplemented === "yes";
      if (listed) bucket.alreadyListed += 1;
      else if (status === "held") bucket.held += 1;
      else bucket.pending += 1;
    }
    byPage[page] = bucket;
  }
}

writeFileSync("official-document-audit.json", JSON.stringify({ summary, byPage, documents: pageDocs }, null, 2));
console.log(JSON.stringify({ summary, byPage }, null, 2));
