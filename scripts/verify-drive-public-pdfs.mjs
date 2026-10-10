/**
 * Match approved published PDFs to the Drive inventory and check each file
 * without signing in. Writes src/data/driveHostedPdfs.ts for files that return
 * PDF bytes. Does not upload files or change publication decisions.
 */
import { readFileSync, writeFileSync } from "node:fs";

const ORIGIN = "https://swaralip-2025.github.io";
const RETAINED = new Set([
  "documents/FAQ_SevenStar.pdf",
  "documents/Guildelines_For_Disaster.pdf",
]);

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
  return rows.filter((item) => item.some((value) => value !== ""));
}

function records(file) {
  const rows = parseCsv(readFileSync(file, "utf8"));
  const header = rows[0];
  return rows.slice(1).map((row) => Object.fromEntries(header.map((name, index) => [name, row[index] ?? ""])));
}

function retained(localPath) {
  return RETAINED.has(localPath) || localPath.startsWith("documents/rts/");
}

function blocked(localPath) {
  const lower = localPath.toLowerCase();
  return (
    lower.includes("/tenders/") ||
    lower.startsWith("documents/ncap/") ||
    lower.startsWith("ncap/") ||
    lower.includes("duplicate review") ||
    lower.endsWith(".crdownload")
  );
}

const mapping = records("document-mapping-reconciled-draft.csv");
const inventory = records("csmc-drive-inventory.csv");
const byPath = new Map();
for (const item of inventory) {
  const localPath = `${item["Folder Path"]}/${item["File Name"]}`;
  const key = `${localPath}\0${item["Size Bytes"]}`;
  const list = byPath.get(key) ?? [];
  list.push(item);
  byPath.set(key, list);
}

const approved = mapping.filter((row) => {
  if (row.reconciliationStatus !== "implemented" || row.publicListingImplemented !== "yes") return false;
  if (!row.localPath || !row.fileName.toLowerCase().endsWith(".pdf")) return false;
  const disposition = row.publicationDisposition;
  if (disposition === "HOLD" || disposition === "EXCLUDE" || disposition === "NEEDS_HUMAN_REVIEW" || disposition === "MAPPED_PENDING_PUBLICATION_REVIEW") {
    return false;
  }
  return true;
});

const candidates = [];
const unmatched = [];
const ambiguous = [];
const disagreements = [];
const skippedRetained = [];
const skippedBlocked = [];

for (const row of approved) {
  if (retained(row.localPath)) {
    skippedRetained.push(row.localPath);
    continue;
  }
  if (blocked(row.localPath)) {
    skippedBlocked.push(row.localPath);
    continue;
  }
  const hits = byPath.get(`${row.localPath}\0${row.fileSizeBytes}`) ?? [];
  if (hits.length === 0) {
    unmatched.push(row.localPath);
    continue;
  }
  if (hits.length > 1 && new Set(hits.map((hit) => hit["File ID"])).size > 1) {
    ambiguous.push(row.localPath);
    continue;
  }
  const fileId = hits[0]["File ID"];
  if (row.driveFileId && row.driveFileId !== fileId) disagreements.push({ path: row.localPath, mapping: row.driveFileId, inventory: fileId });
  candidates.push({ path: row.localPath, fileName: row.fileName, bytes: row.fileSizeBytes, fileId });
}

async function probe(candidate) {
  const url = `https://drive.usercontent.google.com/download?id=${encodeURIComponent(candidate.fileId)}&export=download&confirm=t`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { Origin: ORIGIN, "User-Agent": "CSMC-drive-check" },
    });
    const finalHost = new URL(response.url).hostname;
    const reader = response.body?.getReader();
    const first = reader ? (await reader.read()).value : undefined;
    await reader?.cancel().catch(() => undefined);
    const head = Buffer.from(first ?? []).subarray(0, 5).toString("latin1");
    const acao = response.headers.get("access-control-allow-origin") || "";
    const type = response.headers.get("content-type") || "";
    const corsOk = acao === "*" || acao === ORIGIN;
    const pdf = head.startsWith("%PDF");
    const ok = response.status === 200 && finalHost === "drive.usercontent.google.com" && pdf && corsOk && !type.includes("text/html");
    return {
      ...candidate,
      ok,
      status: response.status,
      finalHost,
      type,
      acao,
      head,
      reason: ok
        ? ""
        : `status=${response.status} host=${finalHost} type=${type} acao=${acao || "none"} head=${JSON.stringify(head)}`,
    };
  } catch (error) {
    return { ...candidate, ok: false, reason: error.name === "AbortError" ? "timeout" : String(error.message || error) };
  } finally {
    clearTimeout(timer);
  }
}

const verified = [];
const failed = [];
let cursor = 0;
async function worker() {
  while (cursor < candidates.length) {
    const index = cursor;
    cursor += 1;
    const result = await probe(candidates[index]);
    if (result.ok) verified.push(result);
    else failed.push(result);
    const done = verified.length + failed.length;
    if (done % 50 === 0 || done === candidates.length) {
      console.log(`checked ${done}/${candidates.length} verified=${verified.length} failed=${failed.length}`);
    }
  }
}

console.log(
  JSON.stringify({
    approved: approved.length,
    candidates: candidates.length,
    retained: skippedRetained.length,
    blocked: skippedBlocked.length,
    unmatched: unmatched.length,
    ambiguous: ambiguous.length,
    disagreements: disagreements.length,
  }),
);

await Promise.all(Array.from({ length: 8 }, () => worker()));
verified.sort((left, right) => left.path.localeCompare(right.path));
failed.sort((left, right) => left.path.localeCompare(right.path));

const lines = verified.map((item) => `  ${JSON.stringify(item.path)}: ${JSON.stringify(item.fileId)},`);
const source = `/** Verified public Drive file IDs. Generated by scripts/verify-drive-public-pdfs.mjs. */
export const driveHostedPdfIds: Record<string, string> = {
${lines.join("\n")}
};
`;
writeFileSync("src/data/driveHostedPdfs.ts", source);
writeFileSync(
  "drive-pdf-access-report.json",
  JSON.stringify(
    {
      approved: approved.length,
      candidates: candidates.length,
      verified: verified.length,
      failed: failed.map((item) => ({ path: item.path, fileId: item.fileId, reason: item.reason })),
      unmatched,
      ambiguous,
      disagreements,
      retained: skippedRetained,
      blocked: skippedBlocked,
    },
    null,
    2,
  ),
);
console.log(`wrote ${verified.length} verified ids, ${failed.length} failures`);
