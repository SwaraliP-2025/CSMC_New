# Document mapping reconciliation

On 2026-10-11, first-page text was read for the records that were still mapped but unpublished. 39 of those records are now cross-listed from their existing files: 16 audit reports, 3 electrical records (two public-works rate schedules and one work-done list), the library note, the blank NULM nomination form, the fire-brigade information note, 4 mechanical vehicle and water-works records, and 13 standing-committee date-range volumes. Two records moved to HOLD because their first pages are an EOI and a tender evaluation. Applicant, beneficiary, disability, and selected-candidate lists stay unpublished. The five unscanned records whose destination is still unknown stay in human review. A search of chhsambhajinagarmc.org did not find those five PDFs. A 2025 ward-boundary annex mentions Satara, Deolai, and the Bombay Mercantile Bank as places, which does not identify the local files.

Current totals from `document-mapping-reconciled-draft.csv`: 2,322 rows, 1,033 implemented, 72 mapped and unpublished, 1,062 HOLD, 150 EXCLUDE, 5 NEEDS_HUMAN_REVIEW. `document-mapping-draft.csv` was not rewritten. The sections below keep the earlier reconciliation and are superseded by this paragraph where they disagree.

## Earlier reconciliation

The 546 rows described below as proposed have since been cross-listed. Their reconciled status is now `implemented`. The disposition update is in the last section of this report. The paragraphs that follow record the earlier reconciliation and were not rewritten.

The website code is the source of truth for what is listed. `document-mapping-draft.csv` was not overwritten. The reconciled rows are in `document-mapping-reconciled-draft.csv`. The original draft columns are unchanged. New columns record the website check, the local file check, and the historical Drive path.

`csmc-drive-inventory.csv` is a historical snapshot. It is not the current live Drive, and a Drive ID was not treated as public access. SHA-256 was not recomputed. Path and byte size were compared.

All of the named reports and source files were present, including `full-document-reconciliation-report.md`, `document-mapping-crosslist-validation.md`, `document-identity-discrepancy-review.md`, `document-reference-audit.md`, `next-crosslisting-batch-review.md`, and `budget-crosslisting-review.md`. Git status was inspected before this reconciliation. Website source was not edited.

## Counts

| Check | Count |
| --- | ---: |
| Draft rows, preserved in the reconciled file | 2,322 |
| Local files in `public/documents/` | 3,304 |
| Local files in `public/ncap/documents/` | 8 |
| Historical Drive snapshot rows | 3,304 |
| Distinct snapshot file IDs | 3,304 |
| Website file paths read from current code | 989 |
| Of those, also rendered in the repository | 443 |
| Mapped local paths missing on disk | 0 |
| Mapped sizes that differ from disk | 0 |
| Website file paths missing from the draft | 0 |

Reconciliation status on the 2,322 rows:

| Status | Rows | Meaning in the current code |
| --- | ---: | --- |
| implemented | 448 | The website lists the record now. 443 are local files in the repository. 5 are Drive folder links. |
| proposed | 546 | The website lists the record on its original section. The repository code does not list it yet. |
| held | 1,155 | Tender rows, duplicate copies, and the incomplete download. Not published. |
| missing | 0 | No mapped path was absent from disk. |
| review | 173 | 131 unclassified local files, 31 generated catalogue cards, and 11 Census links. |

## Implemented cross-listings confirmed in code

`DigitalRepository.tsx` currently renders these anchors: education, town planning, drainage, administration and establishment, citizen services, disaster guidelines, Dastavez, policies, municipal secretaries, RTS, Chief Accounts, and budget.

The 448 implemented rows are:

| Group | Rows | Where the code lists them |
| --- | ---: | --- |
| Drainage | 265 | Department page and `#drainage-department` |
| Town Planning PDFs and 3 folder links | 60 | Department page and `#town-planning-department` |
| Administration, Health, Technical, Fire, and Zoo cadre files | 65 | Administration repository block, the General Administration page, and the Fire cadre list on the Fire department page |
| Education | 16 | Department page and `#education-department` |
| General Administration PDFs and 2 folder links | 13 | Same administration block |
| Budget PDFs | 13 | `/public-documents?category=budget` and `#budget`, one browser per year folder |
| RTS | 6 | `/rts-act` and `#rts` |
| Chief Accounts | 5 | Chief Accounts department page and `#chief-accounts-finance-officer` |
| FAQ and root disaster guidelines | 2 | Existing navigation targets and `#citizen-services` / `#guidelines-for-disaster` |
| Dastavez, policies, secretaries | 3 | Their existing pages and `#dastavez`, `#policies-guidelines`, `#municipal-secretaries` |

The FAQ and disaster-guidelines rows are still `needs-manual-review` in the original draft. The current repository code lists both files, so the reconciled status is implemented. The draft column itself was not changed.

Budget uses `budgetDocumentsFor(section.id)` with folder segments `budget` and that year id. The 2026-27, 2025-26, and archive files keep those paths. `budgetDocumentsFor("2024-25")` is empty, and the repository section omits that empty year. The public documents page still has the empty 2024-25 year.

## Proposed, and not in the repository code

| Category | Rows | Current page |
| --- | ---: | --- |
| Standing committee minutes | 337 | `/public-documents` minutes |
| Election Insights | 141 | `/election-insights` |
| RTI | 49 | `/rti-act`, including `RTI_Order.pdf` |
| Completed works | 11 | `/completed-works` |
| NCAP | 8 | `/ncap`, from `public/ncap/documents/` |

These 546 files are on disk at the mapped size. They are not repository sections in `DigitalRepository.tsx`.

`zone-6-17-06-2017` and `zone-6-17-06-20171` stay two completed-works rows. `ncap-04` and `ncap-08` stay two NCAP rows. Neither pair was merged or removed.

## Held

| Group | Rows |
| --- | ---: |
| Municipal Document Repository tender rows | 1,037 |
| Duplicate copies | 117 |
| Incomplete Town Planning download | 1 |

`/tenders` still redirects away from these files. The tender path comparison is in `tender-path-reconciliation-report.md`.

## Review

| Group | Rows | Why it is not reclassified |
| --- | ---: | --- |
| Unclassified local files | 131 | They are not current website listings. The folder name was not used as a department. |
| Needs Review minutes with no published twin in this status | 14 | Counted inside the 131. They stay off the public minutes list. |
| Generated catalogue cards | 31 | The repository grid still renders them, and they have no local PDF. Three are `bud-2627`, `bud-2526`, and `bud-2425`. Their catalogue sizes were not matched to the real budget PDFs. |
| Census links | 11 | `/census-2026-27` lists them. There is no local PDF. Ten file IDs are not in the historical snapshot. `census-10` is a folder link. Live access was not checked. |

## Local files, website listings, and the snapshot

- 989 website file paths are present locally and match the draft size. None of those paths is missing from the draft.
- 1,286 draft rows have a local file and are not a current website listing. That is the 1,037 tender rows, 117 duplicate copies, 131 unclassified files, and 1 incomplete download.
- 1,037 further local files, under `documents/tenders/tender-notices/tender notice {year}/`, are not separate draft rows. They are recorded on the matching tender row in `localMirrorPath`.
- 2,267 snapshot paths match a local `public/documents/` path and size exactly.
- 1,037 snapshot paths do not exist locally under that exact path. Each has a local file of the same filename and size under `tender notice` instead of `tender-notice`.
- The eight published NCAP paths are not snapshot paths. The same filenames and sizes are in the snapshot at `documents/ncap/documents/`.
- Five website folder links have no snapshot file row: two General Administration folders and three Town Planning folders. They are not missing PDFs.
- Empty local folders with no snapshot files and no file row: `documents/GAD Orders and Circulars`, `documents/budget/2024-25`, and `documents/Election Insights/AMC Election 2020 Final Maps`. The last of these is an empty category in the Election Insights code.

## Assumptions

The website path set was read from the current data modules and the pages that render them. A record is implemented only when that code lists it. The older `repositoryStatus` value in the draft was not used for that decision.

The historical snapshot was matched by path and size only. No live Drive request was made.

## Confirmation

No website source, PDF, original mapping, Drive permission, commit, or deployment was changed. The new files are `document-mapping-reconciled-draft.csv`, this report, and `tender-path-reconciliation-report.md`.

## Disposition update after the cross-listing batches

Checked against the current repository code, `document-mapping-draft.csv`, and the files under `public/documents/` and `public/ncap/documents/`. The draft CSV was not changed. No PDF was moved, copied, or deleted. No new repository section was added.

The 546 rows that this report originally called proposed are listed by the current data modules and `DigitalRepository.tsx`: 337 standing-committee minutes, 141 Election Insights files, 49 RTI records, 11 completed-works records, and 8 NCAP records. In the reconciled CSV those rows are now `reconciliationStatus=implemented` and `websiteRepositoryListed=yes`. That brings implemented rows to 994, including the earlier 448. `ncap-04` and `ncap-08` remain separate records, as do the two Zone 6 completed-works records.

Every mapped local file still exists at the CSV size. The 3,312 files on disk remain the 2,275 mapped paths, 1,019 tender mirror paths, and 18 ambiguous tender copies.

New columns on the reconciled CSV only: `publicationDisposition`, `intendedRepositorySection`, `dispositionEvidence`, and `publicListingImplemented`. A destination in those columns is not a public listing. `publicListingImplemented=yes` is only the 994 rows already rendered in the repository.

| Disposition | Rows | What happened |
| --- | ---: | --- |
| Already implemented, no new disposition | 994 | Left public. Includes the corrected 546. |
| `MAPPED_PENDING_PUBLICATION_REVIEW` | 113 | Category recorded. Not added to a public section. |
| `HOLD` | 1,060 | 1,037 tender rows, 11 Census links, and 12 EOI, tender, auction, or RFP files found outside the tender rows. |
| `EXCLUDE` | 150 | 118 duplicate-confirmed or incomplete copies, 31 catalogue cards, and the byte-identical 2018–19 audit copy. |
| `NEEDS_HUMAN_REVIEW` | 5 | Filename and available text do not support a category. |

The 14 files in `standing-committee/Needs Review/` that are not duplicate-confirmed are mapped to `standing-committee`. Their sizes match. Their contents were not fully verified, so they stay out of `standingCommitteeMinutes.ts` and `#standing-committee`.

The other 2018–19 audit report stays mapped to `audit` and unpublished. `Copy_of_annual_audit_report_of_2018-2019.pdf` has the same SHA-256 (`b47000957f613ba4531747d834f3502c4b8b3d3bc2d45f499259a8e07cd9c95a`) and is excluded as a duplicate copy, not as a second official record. The file remains on disk.

Applicant, beneficiary, and personal-data filenames under PMAY, Ramai Awaas Yojna, and Social Welfare are mapped to those categories and are not published. The five unresolved files are `Satara_Devlaee-1.pdf`, `Satara_Devlaee-2.pdf`, `Agriment.pdf`, `edu__37_dt__02_06_2021.pdf`, and `BOMBAY_MERCANTILE_CO-OPERATION_B.pdf`.

`READY_FOR_CROSS_LISTING` was not used. No unclassified file was both clearly in an existing repository section and clearly suitable for public release. `library.pdf` and the blank NULM nomination form were read and mapped, but they do not justify a new public section. Tender rows, Census links, duplicate copies, catalogue cards, and the incomplete download stay unpublished. The tender-path report was not changed.
