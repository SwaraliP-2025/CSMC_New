import { describe, expect, it } from "vitest";
import { searchHits } from "@/lib/unifiedSearch";

function topId(query: string) {
  return searchHits(query)[0]?.record.id;
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

  it("ranks a named attraction over the generic tourism hub", () => {
    expect(topId("Ellora caves")).toBe("place-ellora-caves");
    expect(topId("Bibi Ka Maqbara")).toBe("place-bibi-ka-maqbara");
  });
});
