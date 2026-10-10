import type { CityAlert } from "@/types/civicCatalog";

/** Live alerts. Only records backed by a municipal source belong here. */
const RAW_ALERTS: CityAlert[] = [];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

/** Completed and overdue alerts are archived automatically; they remain in the dataset for search. */
export const CITY_ALERTS: CityAlert[] = RAW_ALERTS.map((alert) => {
  if (alert.status === "completed") return alert;
  if (alert.expectedCompletion < todayIso()) {
    return { ...alert, status: "completed" as const };
  }
  return alert;
});
