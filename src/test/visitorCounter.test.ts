import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  getIndiaDate,
  getNextIndiaMidnight,
  getVisitorCount,
  loadVisitorCounts,
} from "../lib/visitorCounter";

const createStorage = () => {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
  };
};

const jsonResponse = (value: number, status = 200) =>
  ({
    ok: status >= 200 && status < 300,
    status,
    json: async () => ({ value }),
  }) as Response;

describe("shared visitor counter", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.restoreAllMocks();
  });

  it("uses the shared hit endpoint once per session and then reads the same counter", async () => {
    const storage = createStorage();
    const fetcher = vi.fn(async () => jsonResponse(12));

    await expect(getVisitorCount("test-total", "test-total-session", true, storage, fetcher)).resolves.toBe(12);
    await expect(getVisitorCount("test-total", "test-total-session", true, storage, fetcher)).resolves.toBe(12);

    expect(fetcher).toHaveBeenNthCalledWith(
      1,
      "https://countapi.mileshilliard.com/api/v1/hit/test-total",
    );
    expect(fetcher).toHaveBeenNthCalledWith(
      2,
      "https://countapi.mileshilliard.com/api/v1/get/test-total",
    );
  });

  it("uses one shared daily key per IST date and increments it on a homepage visit", async () => {
    const fetcher = vi.fn(async () => jsonResponse(8));
    vi.stubGlobal("fetch", fetcher);

    await expect(loadVisitorCounts(true, new Date("2026-10-29T18:29:59.000Z"))).resolves.toEqual({
      total: 8,
      today: 8,
      date: "2026-10-29",
    });

    expect(fetcher).toHaveBeenCalledWith(
      "https://countapi.mileshilliard.com/api/v1/hit/csmc_website_visitors",
    );
    expect(fetcher).toHaveBeenCalledWith(
      "https://countapi.mileshilliard.com/api/v1/hit/csmc_website_visitors_ist_20261029",
    );
  });

  it("starts a separate daily count at midnight IST", async () => {
    const fetcher = vi.fn(async () => jsonResponse(1));
    vi.stubGlobal("fetch", fetcher);

    expect(getIndiaDate(new Date("2026-10-29T18:30:00.000Z"))).toBe("2026-10-30");
    expect(getNextIndiaMidnight(new Date("2026-10-29T12:00:00.000Z"))).toBe(
      new Date("2026-10-29T18:30:00.000Z").getTime(),
    );

    await loadVisitorCounts(true, new Date("2026-10-29T18:30:00.000Z"));
    expect(fetcher).toHaveBeenCalledWith(
      "https://countapi.mileshilliard.com/api/v1/hit/csmc_website_visitors_ist_20261030",
    );
  });

  it("treats a not-yet-created daily counter as zero when only reading", async () => {
    const fetcher = vi.fn(async () => jsonResponse(0, 404));

    await expect(
      getVisitorCount("not-created", "not-created-session", false, createStorage(), fetcher),
    ).resolves.toBe(0);
  });
});
