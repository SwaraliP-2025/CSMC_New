import fs from "fs";
import path from "path";

const files = [
  "phcs.json",
  "csmc-hospitals.json",
  "fire-stations.json",
  "police-stations.json",
  "zone-offices.json",
  "cfcs.json",
  "csmc-schools.json",
  "hoardings.json",
];

const datasets = {};
for (const file of files) {
  const slug = file.replace(/\.json$/, "");
  const rows = JSON.parse(fs.readFileSync(path.join("public/data", file), "utf8"));
  datasets[slug] = rows.map((r) => ({
    id: r.id,
    name: r.name,
    address: r.address ?? "",
    zone: r.zone ?? "",
  }));
}

const body = `/** Facility location names for global search (sourced from public/data/*.json). */
export type FacilityLocationRow = { id: string; name: string; address: string; zone: string };

export const FACILITY_LOCATION_DATASETS: Record<string, FacilityLocationRow[]> = ${JSON.stringify(datasets, null, 2)};
`;

fs.writeFileSync("src/data/facilityLocations.ts", body);
console.log(
  "wrote facility locations",
  Object.fromEntries(Object.entries(datasets).map(([k, v]) => [k, v.length])),
);
