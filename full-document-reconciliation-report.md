# Full document reconciliation

Read-only comparison of two sources against the current website listings and `document-mapping-crosslist-proposal.csv`. No existing file, publication setting, Drive permission, or deployment was changed. The Drive inventory was not refreshed.

`csmc-drive-inventory.csv` is an exported snapshot of a Google Drive folder. It does not show Drive changes made after that export. A Drive ID or URL in the snapshot is not evidence that the file is publicly downloadable.

`public/documents/` is the current local project copy. It is not a new Drive upload. The website also uses eight files under `public/ncap/documents/`, which are outside `public/documents/`.

This review matched path and byte size. It did not recompute SHA-256.

## Source counts

| Source | Files |
| --- | ---: |
| Drive snapshot rows | 3,304 |
| Distinct Drive file IDs | 3,304 |
| Local files in `public/documents/` | 3,304 |
| Local files in `public/ncap/documents/` | 8 |
| Mapping rows | 2,322 |
| Mapping rows with a local path | 2,275 |
| Mapping rows with no local path | 47 |

The snapshot contains 3,300 PDFs, 2 Excel files, 1 Word `.doc`, and 1 Word `.docx`. It has no folder rows.

## Drive snapshot against the local project copy

2,267 files match on exact path and size.

The other 1,037 files are the same filenames and sizes, with one folder-name difference. The snapshot uses `documents/tenders/tender-notices/tender-notice {year}/`. The local copy uses `documents/tenders/tender-notices/tender notice {year}/`. After that hyphen-to-space substitution, all 1,037 match. There is no size mismatch.

Year counts for that pair are 2018–19: 354, 2020: 247, 2022: 112, 2023: 58, 2024: 92, and 2025: 174.

No other local file under `public/documents/` is absent from the snapshot, and no other snapshot file is absent from that folder.

The eight published NCAP files are not in the snapshot under `ncap/documents/`. Each one has the same byte size as the same filename under `documents/ncap/documents/`, and that copy is in both the snapshot and `public/documents/`. The `2022` and `20221` filenames are the same size as each other. That equal size is not, by itself, a new hash comparison.

## Drive snapshot against the mapping

2,267 mapping paths match a snapshot row on path and size.

The 1,037 `tender-notice` snapshot files are not separate mapping rows. The mapping withholds the Municipal Document Repository tender rows and does not list this second tender tree as its own records.

Eight mapping paths, `ncap/documents/{file}`, are not snapshot paths. The snapshot path for those filenames is `documents/ncap/documents/{file}`.

These published website links are not file rows in the snapshot:

- Census file IDs for `census-1` through `census-9` and `census-11` are not among the 3,304 snapshot IDs. `census-10` is a Drive folder link and has no file ID.
- General Administration folder links `gad-google-drive-1` and `gad-google-drive-2`, and Town Planning folder links `tp-drive-amc-layout`, `tp-drive-mrtp-26`, and `tp-drive-mrtp-28`, have no file ID. The snapshot has no folder rows.

Thirty-one mapping rows are generated catalogue cards with no local path and no snapshot file. Three of those are `bud-2627`, `bud-2526`, and `bud-2425`.

## Local `public/documents/` against the mapping

All 2,275 mapping paths exist, and every recorded size matches the file on disk. That includes the eight `ncap/documents/` files outside `public/documents/`.

1,037 local files are not mapping rows. They are the spaced `tender notice` copies above.

These local folders have no files. They are absent from the snapshot and have no mapping file row:

- `documents/GAD Orders and Circulars`
- `documents/budget/2024-25`
- `documents/Election Insights/AMC Election 2020 Final Maps`

## Website listings against both sources

The website currently lists local files for education, town planning, drainage, administration and establishment, the General Administration PDFs, Fire cadre files, the FAQ, the root disaster-guidelines PDF, Dastavez, policies, municipal secretaries, RTS, Chief Accounts, the 13 budget PDFs, standing-committee minutes, Election Insights, RTI, completed works, and the eight NCAP files under `ncap/documents/`.

Those listed files are present locally at the paths the pages use. The files under `public/documents/` are also in the Drive snapshot, except that the published NCAP path itself is not a snapshot path.

The website does not list either tender tree, the Works copies, the `documents/ncap/documents/` copies, Duplicate Review, Needs Review, the other unlisted repository folders, or the incomplete Town Planning download. Those files remain in the local copy and, where the path matches, in the snapshot. The mapping keeps them unpublished.

The repository page now has a `#budget` section and the Dastavez, policies, secretaries, RTS, and Chief Accounts sections. The mapping still marks those 27 records `repositoryPublication=proposed`. The website is ahead of the mapping. Their original pages are unchanged, and the mapping still marks those original sections `published`.

These website listings have no file in `public/documents/` and no file row in the snapshot:

- The repository’s generated catalogue cards, including the three budget cards whose catalogue sizes do not match the real PDFs.
- The 11 Census links.
- The General Administration and Town Planning Drive folder links.
- The Budget 2024-25 year. The page and navigation still open it, and the local folder is empty.
- The Election Insights category “AMC Election 2020 Final Maps.” Its file list is empty.

## Discrepancies to keep in view

1. The snapshot and the local tender copies differ only by `tender-notice` versus `tender notice`. They are the same filenames and sizes. Neither tree is a website listing.
2. Published NCAP files live at `ncap/documents/`. The snapshot and the second local copy live at `documents/ncap/documents/`.
3. Census file IDs used on the website are not in this Drive snapshot. Folder links are not file rows.
4. The mapping still says the 27 repository sections added in code are only proposed.
5. The generated catalogue cards are website listings without a local or snapshot file.
6. Empty folders are not missing files in either source. The website still shows the empty 2024-25 budget year and the empty final-maps category.

## Confirmation

No existing project file or publication setting was changed. The Drive inventory was not refreshed, no file was uploaded, and the website was not deployed. The only file added is this report.
