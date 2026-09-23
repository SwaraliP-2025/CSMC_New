import { describe, expect, it } from "vitest";
import {
  displayFacilityDetailValue,
  displayFacilityName,
  localizeFacilityZoneLabel,
} from "@/lib/facilities";
import { toDevanagariDigits } from "@/i18n/digits";

const dMr = (v: string | number | null | undefined) =>
  v == null ? "" : toDevanagariDigits(v);
const dEn = (v: string | number | null | undefined) =>
  v == null ? "" : String(v);

describe("facility display localization", () => {
  it("localizes zone and ward prefixes", () => {
    expect(localizeFacilityZoneLabel("Zone 2", "mr", dMr)).toBe("झोन २");
    expect(localizeFacilityZoneLabel("Ward 22", "mr", dMr)).toBe("प्रभाग २२");
    expect(localizeFacilityZoneLabel("Ward 22", "en", dEn)).toBe("Ward 22");
  });

  it("localizes structural facility-type suffixes without inventing place names", () => {
    expect(displayFacilityName("Padampura Fire Station", "mr", dMr)).toBe(
      "Padampura अग्निशमन केंद्र",
    );
    expect(displayFacilityName("City Chowk P.S.", "mr", dMr)).toBe("City Chowk पोलीस ठाणे");
    expect(displayFacilityName("Zone Office 3", "mr", dMr)).toBe("झोन कार्यालय ३");
    expect(displayFacilityName("7 Hill Fire Station", "mr", dMr)).toBe("७ Hill अग्निशमन केंद्र");
    expect(displayFacilityName("City Chowk P.S.", "en", dEn)).toBe("City Chowk P.S.");
  });

  it("localizes common detail enums", () => {
    expect(displayFacilityDetailValue("PRIVATE", "mr", dMr)).toBe("खाजगी");
    expect(displayFacilityDetailValue("NO", "mr", dMr)).toBe("नाही");
    expect(displayFacilityDetailValue("Zone 1", "mr", dMr)).toBe("झोन १");
  });
});
