# GIS facility source data

Place CSMC GIS Excel exports in this folder, then run:

```bash
npm run import:facilities
```

Expected filenames:

- `Hospitals.xlsx`
- `Fire_Station.xlsx`
- `Police_Station.xlsx`
- `Zone Office.xlsx`
- `CSMC_School.xlsx`
- `Hoardings.xlsx`

The importer writes `public/data/*.json` in the site `FacilityRecord` shape (not raw spreadsheet columns). Search index rows are regenerated via `scripts/extract-facility-locations.mjs`.
