# Drive inventory reconciliation

Read-only comparison of `csmc-drive-inventory.csv` with `document-mapping-draft.csv`, checked against the files currently under `public/documents` and `public/ncap`. No website mapping, status, application code, Drive permission, or file location was changed.

The Drive CSV has no hash column. SHA-256 was computed only for local files. A Drive row is treated as the same document as a local file when the relative path and size match, or when the filename and size match and the local copies that share that filename and size are byte-identical. Filename similarity alone is not a match.

## Counts

| Measure | Count |
| --- | ---: |
| Drive inventory rows | 3,304 |
| Unique Drive file IDs | 3,304 |
| Drive file IDs that appear more than once | 0 |
| Mapping rows | 2,322 |
| Mapping rows with a local path | 2,275 |
| Mapping rows with `driveFileId` or `driveUrl` filled | 0 |
| Drive rows matched by the mapping's Drive ID column | 0 |
| Local files on disk (`public/documents` and `public/ncap`) | 3,312 |
| Local files under `public/documents` | 3,304 |
| Local files under `public/ncap` | 8 |
| Drive rows whose path and size match a local file exactly | 2,267 |
| Drive rows that match after the tender folder spelling below | 1,037 |
| Drive rows with no local file of the same name and size | 0 |
| Local files in the mapping that are missing from disk | 0 |
| Mapping size disagreements with disk | 0 |

Every one of the 3,304 Drive rows corresponds to a local file. None of those rows is an unmatched extra upload. The 1,037-row gap against the mapping is a second copy of the tender set, not 1,037 new documents.

## Why Drive has 3,304 rows and the mapping has 2,275 local files

The mapping's 2,275 local paths are still all on disk:

- 2,267 files under `public/documents`
- 8 files under `public/ncap/documents`

Drive lists those 2,267 `public/documents` files, and it also lists 1,037 more rows under `documents/tenders/tender-notices/`. Those 1,037 rows are the same tender files already stored under `documents/Municipal Document Repository/Tenders/`. `2,267 + 1,037 = 3,304`.

The 8 published NCAP files do not add Drive rows. Drive lists them once, at `documents/ncap/documents/`. The mapping also lists `ncap/documents/`. Both local copies share a filename, size, and SHA-256.

Disk now has 3,312 files because the tender mirror is present locally as well, under a slightly different folder spelling. Those 1,037 local copies are not rows in `document-mapping-draft.csv`. The mapping file was not updated.

## Tender year folders

Each year is complete in all three places. For every filename, the Municipal Document Repository file, the local `documents/tenders` copy, and the Drive row have the same size, and the two local copies have the same SHA-256. There is no missing tender file and no extra tender filename in any year.

| Year | Municipal Document Repository | Local `documents/tenders/.../tender notice …` | Drive `documents/tenders/.../tender-notice …` | Same name, size, and local hash |
| --- | ---: | ---: | ---: | ---: |
| 2018–19 | 354 | 354 | 354 | 354 |
| 2020 | 247 | 247 | 247 | 247 |
| 2022 | 112 | 112 | 112 | 112 |
| 2023 | 58 | 58 | 58 | 58 |
| 2024 | 92 | 92 | 92 | 92 |
| 2025 | 174 | 174 | 174 | 174 |
| Total | 1,037 | 1,037 | 1,037 | 1,037 |

Folder names:

- Mapped and still on disk: `documents/Municipal Document Repository/Tenders/Tender 2018-2019`, `2020`, `2022`, `tender 2023`, `tender-notice-2024`, `tender-notice-2025`
- Additional local copies, not in the mapping: `documents/tenders/tender-notices/tender notice 2018-19`, `tender notice 2020`, `tender notice 2022`, `tender notice 2023`, `tender notice 2024`, `tender notice 2025`
- Drive inventory spelling: `documents/tenders/tender-notices/tender-notice 2018-19` (and the same hyphenated form for 2020, 2022, 2023, 2024, and 2025)

The only path difference for these 1,037 Drive rows is `tender-notice` versus `tender notice` in that one folder name. After that single substitution, all 1,037 paths exist locally with the same filename and size. Zero Drive rows needed any other path correction.

These copies are not safe to publish. `/tenders` still redirects to MahaTenders, and the mapping keeps the tender set as `needs-manual-review`. Publishing the second tree would list the same files again.

## Renames and different paths

No file was found under a different filename. There is no Drive row whose size matches exactly one local file of a different name.

Confirmed path differences:

- 1,037 tender rows use the hyphenated folder above. The local mirror uses a space. The mapped copies remain in `Municipal Document Repository/Tenders/`.
- 8 published NCAP files live at `ncap/documents/`. Drive and the second local copy live at `documents/ncap/documents/`. All eight pairs match on filename, size, and SHA-256, including `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` and the `20221` filename, which are the same bytes as each other.

One filename is two different documents, not a rename. `Guildelines_For_Disaster.pdf` is 759,375 bytes at `documents/Guildelines_For_Disaster.pdf` and 2,362,355 bytes in the RTI folder. Both sizes are on Drive. Only the RTI copy is published.

## Potential duplicates

- Drive IDs: no ID is repeated, so the inventory did not list the same Drive file twice.
- Drive filename plus size: 1,122 groups occur in more than one Drive folder, producing 1,153 extra rows. The tender mirror accounts for the bulk of that. The rest are copies already known inside the repository (standing-committee review folders, Works copies, drainage pairs, NCAP copies, and tender files repeated across year folders).
- Local SHA-256 on the current disk: 1,134 groups and 1,193 extra copies. The extra-copy count is 1,037 higher than the earlier hash of the mapped files alone, which is one extra copy for each file in the new tender tree.
- Local hashes agree inside every tender year pair and every NCAP pair. Drive bytes were not downloaded, so the Drive objects themselves were not hashed.

## GAD Orders and Circulars

`public/documents/GAD Orders and Circulars` exists and contains no files. It has no row in the Drive inventory and no row in the mapping.

The Drive CSV is a file list. Its MIME types are PDF (3,300), Excel (2), Word (1), and Word .docx (1). There are no `application/vnd.google-apps.folder` rows, so an empty folder cannot appear. The same is true of the other empty local folders `documents/budget/2024-25` and `documents/Election Insights/AMC Election 2020 Final Maps`.

The General Administration PDFs are present at `documents/Municipal Document Repository/Administration and Establishment Department/General Administration Documents` in both the mapping and the Drive inventory. The two website links to Google Drive folders are folder links, not file rows in this inventory. Their file-ID columns in the mapping are still blank.

## Limitations

- Drive content was not downloaded. Path, filename, and size tie a Drive row to a local file; SHA-256 proves the local copies match each other.
- `driveFileId` and `driveUrl` in the mapping are empty, so nothing was matched on the stored Drive ID.
- The 1,037 tender copies and the NCAP copy folder are duplicates of files the mapping already records. They were not added to the website, and they are not cleared for publication.
- This check did not change `document-mapping-draft.csv`, application source, file locations, or Drive permissions.
