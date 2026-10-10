import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { OFFICIAL } from "@/data/officialLinks";
import { getGlobalSearchIndex } from "@/lib/searchIndex";
import { searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";

const ROUTES = [...readFileSync("src/App.tsx", "utf8").matchAll(/<Route path="([^"]+)"/g)].map((match) => match[1]);

function pathOf(href: string) {
  if (href.startsWith("http")) return href;
  return (href.split("?")[0] || "/").replace(/\/$/, "") || "/";
}

function matchesRoute(path: string) {
  return ROUTES.some((route) => {
    if (route === "*") return false;
    const pattern = `^${route.replace(/:[^/]+/g, "[^/]+")}$`;
    return new RegExp(pattern).test(path);
  });
}

function topId(query: string) {
  return searchHits(query)[0]?.record.id;
}

describe("search coverage", { timeout: 30000 }, () => {
  it("resolves the public terms citizens ask for", () => {
    expect(topId("Organogram")).toMatch(/organization/);
    expect(topId("Birth Certificate")).toBe("svc-birth");
    expect(topId("Property Tax")).toBe("svc-property-tax");
    expect(topId("Water Tax")).toBe("svc-water-tax");
    expect(topId("Gunthewari")).toBe("svc-entry-gunthewari");
    expect(topId("Ellora")).toBe("place-ellora-caves");
    expect(topId("Health Department")).toBe("dept-health");
    expect(topId("Fire Station")).toBe("fac-fire-stations");
    expect(topId("Police Station")).toBe("fac-police-stations");
    expect(topId("Zone Office")).toBe("fac-zone-offices");
    expect(searchHits("NCAP")[0]?.record.href).toBe("/ncap");
    expect(topId("RTI")).toBe("act-rti");
    expect(["cc-health", "cc-revenue"]).toContain(topId("Citizen Charter"));
    expect(topId("AI Mitra")).toBe("svc-ai-mitra");
    expect(topId("Privacy Policy")).toBe("nav-privacy-policy");
    expect(topId("Accessibility")).toMatch(/accessibility/);
    expect(topId("Grievance")).toBe("svc-grievance");
    expect(topId("जन्म प्रमाणपत्र")).toBe("svc-birth");
    expect(topId("मालमत्ता कर")).toBe("svc-property-tax");
    expect(topId("अग्निशमन केंद्र")).toBe("fac-fire-stations");
  });

  it("matches word prefixes and ignores buried substrings", () => {
    expect(topId("bir")).toBe("svc-birth");
    expect(topId("prop")).toBe("svc-property-tax");
    expect(topId("gunt")).toBe("svc-entry-gunthewari");
    expect(topId("organ")).toMatch(/organization/);
    expect(topId("depart")).toBe("svc-departments");
    expect(searchHits("ncap")[0]?.record.href).toBe("/ncap");
    expect(topId("ell")).toBe("place-ellora-caves");
    const trade = searchHits("trade").slice(0, 8).map((hit) => hit.record.titleEn.toLowerCase());
    expect(trade.some((title) => title.includes("netradeep"))).toBe(false);
  });

  it("corrects catalogue typos for typed and spoken-style queries", () => {
    expect(suggestDidYouMean("Propert Tax")).toMatch(/Property Tax/i);
    expect(suggestDidYouMean("Propery Tax")).toMatch(/Property Tax/i);
  });

  it("indexes published office-holder lists and live routes", () => {
    expect(topId("Sameer Subhash Rajurkar")).toMatch(/^mayor-/);
    const index = getGlobalSearchIndex();
    const paths = new Set(index.map((record) => (record.href ? pathOf(record.href) : "")).filter((href) => href.startsWith("/")));
    const skip = new Set(["/search", "/under-construction", "*"]);
    // Patrika and Samvaad stay as empty publication pages and are not search destinations.
    const emptyPublicationRoutes = new Set(["/patrika", "/samvaad"]);
    const redirectTargets: Record<string, string> = {
      "/tenders": OFFICIAL.mahatenders.replace(/\/$/, ""),
      "/administration-and-establishment": "/departments/general-administration",
    };
    const hrefs = new Set(index.map((record) => record.href?.replace(/\/$/, "")).filter(Boolean));
    const missingRoutes = ROUTES.filter((route) => {
      if (route.includes(":") || skip.has(route) || emptyPublicationRoutes.has(route) || paths.has(route)) return false;
      const target = redirectTargets[route];
      return !target || !hrefs.has(target);
    });
    const broken = [
      ...new Set(
        index
          .map((record) => record.href)
          .filter((href): href is string => Boolean(href && href.startsWith("/") && !href.startsWith("//")))
          .map(pathOf)
          .filter((path) => !path.startsWith("/ncap/documents/") && !matchesRoute(path)),
      ),
    ];
    const missingEnglish = index.filter((record) => !record.titleEn.trim()).map((record) => record.id);
    const missingMarathi = index.filter((record) => !record.titleMr.trim()).map((record) => record.id);
    const seen = new Map<string, number>();
    for (const record of index) seen.set(record.id, (seen.get(record.id) ?? 0) + 1);
    const duplicateIds = [...seen.entries()].filter(([, count]) => count > 1).map(([id]) => id);

    expect(paths.has("/dastavez")).toBe(true);
    expect(searchHits("Banner Location List")[0]?.record.href).toBe("/dastavez");
    expect(paths.has("/patrika")).toBe(false);
    expect(paths.has("/samvaad")).toBe(false);
    expect(missingRoutes, missingRoutes.join(", ")).toEqual([]);
    expect(broken, broken.join(", ")).toEqual([]);
    expect(missingEnglish).toEqual([]);
    expect(missingMarathi).toEqual([]);
    expect(duplicateIds).toEqual([]);
    expect(index.length).toBeGreaterThan(100);
  });
});
