# Budget cross-listing review

Read-only review of the 13 proposed budget records. No source file, mapping, CSV, test, publication flag, or physical document was changed.

These records have no separate title field. `budgetDocuments` stores an ID, filename, byte size, and year. The budget browser labels a file from its filename. The mapping `title` column is blank for all 13.

## Records

Each file is present under `public/` and its byte size matches the mapping. No other mapping row has the same filename or the same size. The budget folder contains these 13 files and no others. `public/documents/budget/2024-25/` exists and is empty.

| Catalogue ID | Year folder | Local path | Bytes |
| --- | --- | --- | ---: |
| `budget-book-2026-27` | `2026-27` | `documents/budget/2026-27/Budget Book  2026-27 PDF.pdf` | 17,936,442 |
| `budget-book-2025-2026` | `2025-26` | `documents/budget/2025-26/Budget book 2025-2026.pdf` | 27,223,572 |
| `budget-pdf-2023-2024` | `archive` | `documents/budget/archive/BUDGET-PDF_2023-2024_.pdf` | 5,736,269 |
| `budget-book-2022` | `archive` | `documents/budget/archive/budget_Book_2022_FINAL__web_2_compressed.pdf` | 31,072,634 |
| `budget-21-22-final` | `archive` | `documents/budget/archive/Budget--21-22_Final.pdf` | 1,989,116 |
| `budget-2020-21` | `archive` | `documents/budget/archive/Budget_2020-21.pdf` | 2,109,121 |
| `budget-18-19` | `archive` | `documents/budget/archive/Budget_18-19.pdf` | 12,186,278 |
| `budget-submitted-sc-16-17` | `archive` | `documents/budget/archive/submitted_to_SC_budget_16-17.pdf` | 6,984,861 |
| `budget-jama-karch-2015-16` | `archive` | `documents/budget/archive/Budget_Jama_karch_2015-16.pdf` | 5,165,752 |
| `budget-jama-15-16` | `archive` | `documents/budget/archive/Budget_Jama-15-16__1.pdf` | 319,613 |
| `budget-2014-15` | `archive` | `documents/budget/archive/BUDGET_2014-15.pdf` | 4,145,517 |
| `budget-2013-14` | `archive` | `documents/budget/archive/Budget_2013-14__.pdf` | 3,137,580 |
| `budget-2012-2013` | `archive` | `documents/budget/archive/Budget_2012-2013__.pdf` | 3,658,888 |

## Current location

The page route is `/public-documents`. Budget documents appear only when `category=budget`. A year query opens one year folder:

- `/public-documents?category=budget&year=2026-27`
- `/public-documents?category=budget&year=2025-26`
- `/public-documents?category=budget&year=archive`

Those three URLs are also in the site navigation. `PublicDocuments.tsx` renders `budgetDocumentsFor(yearId)` in `DocumentArchiveBrowser` with folder segments `["budget", yearId]`. The file URL is `documents/budget/{yearId}/{filename}`.

All 13 rows are `sectionPublication=published` and `repositoryPublication=proposed`. They are not in the repository. `DigitalRepository.tsx` has no `id="budget"`. Its current anchors stop at education, town planning, drainage, administration, citizen services, disaster guidelines, Dastavez, policies, secretaries, RTS, and Chief Accounts.

## Repository anchor

Use `#budget` on `/digital-repository`.

That is the anchor in every one of the 13 proposal rows (`repository:/digital-repository#budget|proposed`). It matches the existing budget category ID. It is not an anchor in the page today. `src/test/document-mapping.test.ts` currently expects the repository source not to contain `id="budget"`, because the previous batch left budget out. An implementation has to update that assertion.

The same logical records and paths can be reused. Pass `budgetDocumentsFor(yearId)` and folder segments `["budget", yearId]`, which is what the public page already does. One browser for all 13 files would point the 2026-27 and 2025-26 files at the wrong folder, because those files are not in `archive`.

## Duplicates and identities

No mapped file shares a name or size with these 13, so none is a byte-identical copy of another mapped file. SHA-256 was not recomputed.

`budget-jama-15-16` is named `Budget_Jama-15-16__1.pdf`. No unsuffixed file of that name is on disk or in the mapping, and its size is unique. The suffix is not evidence of a second document.

The featured 2024-25 year has a navigation link and an empty folder. It is not one of the 13 records. Do not add a file for it.

Three generated catalogue cards are separate and have no local file: `bud-2627`, `bud-2526`, and `bud-2425`. Their catalogue sizes are 5.6 MB, 5.2 MB, and 4.8 MB. The real 2026-27 and 2025-26 PDFs are 17,936,442 and 27,223,572 bytes. Do not merge the cards with those PDFs. `bud-2425` points at the empty 2024-25 year.

## Publication concerns

The 13 files are already published on the budget page. Listing them again in the repository does not change those URLs if the year folder and filename stay the same.

Each proposal row records a Drive file ID with match `exact-path-and-size`. That is an inventory match of path and size. These Drive URLs were not opened, so they are not evidence of public download.

The proposal note on each row says both “Not proposed for … the central repository” and “Repository listing is proposed and is not live.” The publication columns are the status to follow: section published, repository proposed. The first sentence of the note disagrees with those columns.

Search record `svc-budget` links to `/public-documents?category=budget`, not to an individual PDF. A repository section should leave that link in place.

## Recommendation

The 13 records are ready to cross-list. Add `#budget` by reusing `budgetDocuments` and the existing year-folder paths. Keep `/public-documents` unchanged. Do not add a 2024-25 file, do not merge the three generated budget cards, and do not treat the Drive IDs as public access.

## Confirmation

No existing project file or setting was changed. The only file added is this report.
