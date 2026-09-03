import { describe, expect, it } from "vitest";
import { fromDevanagariDigits, localizeDigits, toDevanagariDigits } from "@/i18n/digits";

describe("digit localization", () => {
  it("converts Western digits to Devanagari", () => {
    expect(toDevanagariDigits("12 May 2026")).toBe("१२ May २०२६");
    expect(toDevanagariDigits(116)).toBe("११६");
  });

  it("converts Devanagari digits back to Western", () => {
    expect(fromDevanagariDigits("प्रभाग २०")).toBe("प्रभाग 20");
  });

  it("uses Devanagari only for Marathi", () => {
    expect(localizeDigits("0240-2331731", "mr")).toBe("०२४०-२३३१७३१");
    expect(localizeDigits("0240-2331731", "en")).toBe("0240-2331731");
  });
});
