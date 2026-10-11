import { readFileSync, writeFileSync } from "node:fs";

const audit = JSON.parse(readFileSync("official-document-audit.json", "utf8"));
const missing = audit.documents.filter((doc) => !doc.sharedChrome && doc.matchCount === 0);
const byPage = new Map();
for (const doc of missing) {
  const page = doc.pages[0];
  const list = byPage.get(page) ?? [];
  list.push(doc);
  byPage.set(page, list);
}

function headings(html) {
  const out = [];
  for (const match of html.matchAll(/<(h1|h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const text = match[2].replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    if (text && text.length < 160) out.push(text);
  }
  const crumb = html.match(/breadcrumb[\s\S]{0,800}/i)?.[0].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 200) || "";
  return { headings: [...new Set(out)].slice(0, 8), crumb };
}

const result = [];
for (const [page, docs] of byPage) {
  let info = { headings: [], crumb: "" };
  try {
    const response = await fetch(page);
    info = headings(await response.text());
  } catch (error) {
    info = { headings: [String(error)], crumb: "" };
  }
  result.push({ page, count: docs.length, ...info, samples: docs.slice(0, 4).map((doc) => doc.label || doc.fileName) });
}
result.sort((a, b) => b.count - a.count);
writeFileSync("official-missing-pages.json", JSON.stringify(result, null, 2));
for (const item of result) {
  console.log(`\n${item.count} ${item.page}\n  H: ${item.headings.join(" | ")}\n  B: ${item.crumb}\n  S: ${item.samples.join(" | ")}`);
}
