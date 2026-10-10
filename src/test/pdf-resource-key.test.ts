import { describe, expect, it } from "vitest";
import { pdfResourceKey } from "@/lib/pdfDocument";

const WORKER = "http://127.0.0.1:8787/";
const DRIVE_A = "11FX7W6uilLpjY-VjBhpZn5TdveaQ5RyH";
const DRIVE_B = "another-approved-file";

describe("pdfResourceKey", () => {
  it("keeps different Drive file ids on one worker endpoint apart", () => {
    const first = pdfResourceKey(`${WORKER}?id=${DRIVE_A}`);
    const second = pdfResourceKey(`${WORKER}?id=${DRIVE_B}`);
    expect(first).not.toBe(second);
    expect(first).toContain(`id=${DRIVE_A}`);
    expect(second).toContain(`id=${DRIVE_B}`);
  });

  it("matches a root-relative document url with its absolute form", () => {
    const path = "/CSMC_New/documents/budget/2026-27/Budget%20book.pdf";
    expect(pdfResourceKey(path)).toBe(pdfResourceKey(`${window.location.origin}${path}`));
  });

  it("ignores page fragments on the same pdf", () => {
    const path = "/CSMC_New/documents/budget/2026-27/Budget%20book.pdf";
    expect(pdfResourceKey(`${path}#page=5`)).toBe(pdfResourceKey(`${path}#page=12`));
    expect(pdfResourceKey(`${WORKER}?id=${DRIVE_A}#page=5`)).toBe(pdfResourceKey(`${WORKER}?id=${DRIVE_A}#page=9`));
  });

  it("keeps existing document urls on the decoded pathname", () => {
    const url = "/CSMC_New/documents/Municipal%20Document%20Repository/Drainage/file.pdf";
    const pathname = decodeURIComponent(new URL(url, window.location.href).pathname);
    expect(pdfResourceKey(url)).toBe(pathname);
    expect(pdfResourceKey(url)).not.toContain("?");
  });

  it("treats reordered query parameters as the same document", () => {
    expect(pdfResourceKey(`${WORKER}?id=${DRIVE_A}&extra=1`)).toBe(
      pdfResourceKey(`${WORKER}?extra=1&id=${DRIVE_A}`),
    );
  });
});
