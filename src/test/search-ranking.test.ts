import { describe, expect, it } from "vitest";
import { searchHits, suggestDidYouMean } from "@/lib/unifiedSearch";

function topId(query: string) {
  return searchHits(query)[0]?.record.id;
}

function titles(query: string) {
  return searchHits(query)
    .slice(0, 2)
    .map((h) => (h.displayLang === "mr" ? h.record.titleMr : h.record.titleEn));
}

describe("search ranking", () => {
  it("ranks core civic services first", () => {
    expect(topId("property tax")).toBe("svc-property-tax");
    expect(topId("I want to pay property tax")).toBe("svc-property-tax");
    expect(topId("birth certificate")).toBe("svc-birth");
    expect(topId("search for water tax")).toBe("svc-water-tax");
    expect(topId("मालमत्ता कर")).toBe("svc-property-tax");
  });

  it("ranks website pages for spoken/typed hub queries", () => {
    expect(topId("tourism")).toBe("svc-tourism");
    expect(topId("tourist places")).toBe("svc-tourism");
    expect(topId("टुरिझम")).toBe("svc-tourism");
    expect(topId("how to reach")).toBe("svc-how-to-reach");
    expect(topId("corporator")).toBe("svc-corporator");
  });

  it("finds municipal corporation terms used in nav and voice (EN/MR)", () => {
    expect(topId("महानगरपालिका")).toBe("svc-about");
    expect(topId("महापालिका")).toBe("svc-about");
    expect(topId("municipal corporation")).toBe("svc-about");
    expect(topId("mahanagarpalika")).toBe("svc-about");
  });

  it("ranks a named attraction over the generic tourism hub", () => {
    expect(topId("Ellora caves")).toBe("place-ellora-caves");
    expect(topId("Bibi Ka Maqbara")).toBe("place-bibi-ka-maqbara");
  });

  it("prefers English title then Marathi equivalent for English queries", () => {
    const hits = searchHits("Property Tax");
    expect(hits[0]?.record.id).toBe("svc-property-tax");
    expect(hits[0]?.displayLang).toBe("en");
    expect(hits[1]?.record.id).toBe("svc-property-tax");
    expect(hits[1]?.displayLang).toBe("mr");
    expect(hits[1]?.isBilingualTwin).toBe(true);

    const birth = searchHits("Birth Certificate");
    expect(birth[0]?.displayLang).toBe("en");
    expect(birth[0]?.record.titleEn).toMatch(/Birth Certificate/i);
    expect(birth[1]?.displayLang).toBe("mr");
    expect(birth[1]?.record.titleMr).toMatch(/जन्म/);
  });

  it("prefers Marathi title then English equivalent for Marathi queries", () => {
    const hits = searchHits("मालमत्ता कर");
    expect(hits[0]?.record.id).toBe("svc-property-tax");
    expect(hits[0]?.displayLang).toBe("mr");
    expect(hits[1]?.record.id).toBe("svc-property-tax");
    expect(hits[1]?.displayLang).toBe("en");

    const birth = searchHits("जन्म प्रमाणपत्र");
    expect(birth[0]?.displayLang).toBe("mr");
    expect(birth[1]?.displayLang).toBe("en");
    expect(titles("जन्म प्रमाणपत्र")[1]).toMatch(/Birth Certificate/i);
  });

  it("suggests high-confidence typo corrections without navigating", () => {
    expect(suggestDidYouMean("Propert Tax")).toMatch(/Property Tax/i);
    expect(suggestDidYouMean("Propery Tax")).toMatch(/Property Tax/i);
    expect(suggestDidYouMean("Property Tax")).toBeNull();
  });
});
