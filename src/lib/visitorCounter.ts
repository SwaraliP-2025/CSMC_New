export type VisitorCounts = {
  total: number | null;
  today: number | null;
  date: string;
};

type CounterStorage = Pick<Storage, "getItem" | "setItem">;
type CounterResponse = Pick<Response, "ok" | "status" | "json">;
type CounterFetcher = (input: string) => Promise<CounterResponse>;

const API_BASE = "https://countapi.mileshilliard.com/api/v1";
const TOTAL_COUNTER_KEY = "csmc_website_visitors";
const TOTAL_SESSION_FLAG = "csmc_website_visitor_counted";
const INDIA_TIME_ZONE = "Asia/Kolkata";
const countedInMemory = new Set<string>();
const inFlightCounters = new Map<string, Promise<number>>();

export function getIndiaDate(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: INDIA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function getNextIndiaMidnight(now = new Date()): number {
  const [year, month, day] = getIndiaDate(now).split("-").map(Number);
  return Date.UTC(year, month - 1, day + 1) - 330 * 60 * 1000;
}

async function requestCounterValue(
  key: string,
  increment: boolean,
  fetcher: CounterFetcher,
): Promise<number> {
  const endpoint = increment ? "hit" : "get";
  const response = await fetcher(`${API_BASE}/${endpoint}/${key}`);
  if (!response.ok) {
    if (!increment && response.status === 404) return 0;
    throw new Error(`Visitor counter request failed with status ${response.status}.`);
  }

  const data: unknown = await response.json();
  if (
    typeof data !== "object" ||
    data === null ||
    !("value" in data) ||
    typeof data.value !== "number" ||
    !Number.isSafeInteger(data.value) ||
    data.value < 0
  ) {
    throw new Error("Visitor counter returned an invalid count.");
  }
  return data.value;
}

export function getVisitorCount(
  key: string,
  sessionFlag: string,
  countVisit: boolean,
  storage: CounterStorage = sessionStorage,
  fetcher: CounterFetcher = (input) => fetch(input),
): Promise<number> {
  let alreadyCounted = countedInMemory.has(sessionFlag);
  try {
    alreadyCounted ||= storage.getItem(sessionFlag) === "1";
  } catch (error) {
    console.error("Could not read the visitor counter session flag.", error);
  }

  const increment = countVisit && !alreadyCounted;
  const requestKey = `${key}:${increment ? "hit" : "get"}`;
  const existingRequest = inFlightCounters.get(requestKey);
  if (existingRequest) return existingRequest;

  const request = requestCounterValue(key, increment, fetcher).then((value) => {
    if (increment) {
      countedInMemory.add(sessionFlag);
      try {
        storage.setItem(sessionFlag, "1");
      } catch (error) {
        console.error("Could not save the visitor counter session flag.", error);
      }
    }
    return value;
  });

  inFlightCounters.set(requestKey, request);
  void request.finally(() => {
    if (inFlightCounters.get(requestKey) === request) inFlightCounters.delete(requestKey);
  }).catch(() => undefined);
  return request;
}

export async function loadVisitorCounts(
  countHomepageVisit: boolean,
  now = new Date(),
): Promise<VisitorCounts> {
  const date = getIndiaDate(now);
  const todayKey = `csmc_website_visitors_ist_${date.replace(/-/g, "")}`;
  const counts = await Promise.all([
    getVisitorCount(TOTAL_COUNTER_KEY, TOTAL_SESSION_FLAG, countHomepageVisit).catch((error: unknown) => {
      console.error("Could not load the shared total visitor count.", error);
      return null;
    }),
    getVisitorCount(todayKey, `csmc_website_visitor_counted_${date}`, countHomepageVisit).catch((error: unknown) => {
      console.error("Could not load the shared daily visitor count.", error);
      return null;
    }),
  ]);
  return { total: counts[0], today: counts[1], date };
}
