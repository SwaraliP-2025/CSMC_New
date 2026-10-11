/**
 * Read-only crawl of the official CSMC site document tables.
 * Writes official-document-audit.json. Does not change publication.
 */
import { writeFileSync } from "node:fs";

const ORIGIN = "https://chhsambhajinagarmc.org";
const SEEDS = [
  "/departments",
  "/tourism-department",
  "/health-departement",
  "/local-body-tax-departement",
  "/right-to-information-act",
  "/city-engineer",
  "/establishment-1",
  "/library",
  "/work-completed",
  "/public-notice1646633500",
  "/institutional-structure",
];

function abs(href, base) {
  try {
    return new URL(href, base).href;
  } catch {
    return null;
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "CSMC-local-document-audit/1.0" },
    redirect: "follow",
  });
  const text = await response.text();
  return { status: response.status, finalUrl: response.url, text };
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function departmentLinks(html, pageUrl) {
  const hrefs = [...html.matchAll(/href=["']([^"'#]+)["']/gi)].map((match) => abs(match[1], pageUrl));
  return unique(
    hrefs.filter((href) => {
      if (!href || !href.startsWith(ORIGIN)) return false;
      const path = new URL(href).pathname.toLowerCase();
      if (/\.(pdf|docx?|xlsx?|zip|jpe?g|png|css|js|apk)$/i.test(path)) return false;
      if (/\/assets\/|\/ajax\/|\/npm\/|\/store\/|font-awesome|bootstrap/.test(path)) return false;
      const depth = path.split("/").filter(Boolean).length;
      return depth === 1;
    }),
  );
}

function pdfRows(html, pageUrl) {
  const rows = [];
  const anchors = [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  for (const match of anchors) {
    const href = abs(match[1], pageUrl);
    const label = match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (!href) continue;
    const looksPdf = /\.pdf($|\?)/i.test(href) || /\.pdf/i.test(label);
    if (!looksPdf) continue;
    rows.push({ label, href });
  }
  return rows;
}

const seen = new Set();
const queue = SEEDS.map((path) => ORIGIN + path);
const pages = [];

const index = await fetchText(ORIGIN + "/departments");
for (const link of departmentLinks(index.text, ORIGIN + "/departments")) {
  queue.push(link.split("#")[0]);
}

while (queue.length && pages.length < 160) {
  const url = queue.shift();
  if (!url || seen.has(url)) continue;
  seen.add(url);
  try {
    const page = await fetchText(url);
    const docs = pdfRows(page.text, page.finalUrl);
    const links = departmentLinks(page.text, page.finalUrl);
    pages.push({
      url,
      status: page.status,
      finalUrl: page.finalUrl,
      documentCount: docs.length,
      documents: docs,
    });
    for (const link of links) {
      if (!seen.has(link) && queue.length < 120) queue.push(link.split("#")[0]);
    }
    console.log(`${page.status} docs=${docs.length} ${url}`);
  } catch (error) {
    pages.push({ url, status: 0, error: String(error), documentCount: 0, documents: [] });
    console.log(`ERR ${url} ${error}`);
  }
}

const out = {
  crawledAt: new Date().toISOString(),
  origin: ORIGIN,
  pageCount: pages.length,
  documentCount: pages.reduce((sum, page) => sum + page.documentCount, 0),
  pages,
};
writeFileSync("official-document-audit-crawl.json", JSON.stringify(out, null, 2));
console.log(`wrote ${out.pageCount} pages, ${out.documentCount} pdf links`);
