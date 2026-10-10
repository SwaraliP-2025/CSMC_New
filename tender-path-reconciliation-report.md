# Tender path reconciliation

Compared the 1,037 tender files in the historical Drive snapshot with the local project copy and with the 1,037 Municipal Document Repository tender rows in `document-mapping-draft.csv`.

The snapshot is not the current live Drive. No file was renamed, copied, or published. `/tenders` still redirects to MahaTenders, and these rows stay held.

## Snapshot against the local notice folders

The snapshot folder is `documents/tenders/tender-notices/tender-notice {year}/`.

The local folder is `documents/tenders/tender-notices/tender notice {year}/`.

The only path difference is the hyphen in `tender-notice` versus the space in `tender notice`. The year text and the filename are the same. Every file was matched on filename, year text, and byte size.

| Year text | Snapshot files | Local files | Filename and size matches | Size mismatches | Unmatched |
| --- | ---: | ---: | ---: | ---: | ---: |
| 2018-19 | 354 | 354 | 354 | 0 | 0 |
| 2020 | 247 | 247 | 247 | 0 | 0 |
| 2022 | 112 | 112 | 112 | 0 | 0 |
| 2023 | 58 | 58 | 58 | 0 | 0 |
| 2024 | 92 | 92 | 92 | 0 | 0 |
| 2025 | 174 | 174 | 174 | 0 | 0 |
| Total | 1,037 | 1,037 | 1,037 | 0 | 0 |

There is no ambiguous pair in this comparison. Each snapshot file has one local path, and each local notice file has one snapshot path.

## Those pairs against the repository tender rows

The canonical draft path remains `documents/Municipal Document Repository/Tenders/{folder}/{filename}`. The snapshot path and the local notice path are stored on that row when the match is unique:

- `historicalDrivePath` keeps the snapshot `tender-notice` path.
- `localMirrorPath` keeps the local `tender notice` path.
- `localPath` stays the repository tender path.

| Result | Files | How the repository folder compares |
| --- | ---: | --- |
| Unique filename, size, and year token | 359 | Repository folder `2020` or `2022`. Snapshot folder `tender-notice 2020` (247) or `tender-notice 2022` (112). |
| Unique filename and size, different folder spelling | 660 | See the folder pairs below. The year label refers to the same year text, written differently. |
| Ambiguous filename and size | 18 | The same filename and size occur in more than one repository tender folder, so no single row received the mirror path. |
| No repository row with that filename and size | 0 | |
| Size mismatch | 0 | |

The 660 folder-spelling pairs are:

| Repository folder | Snapshot folder | Files |
| --- | --- | ---: |
| `Tender 2018-2019` | `tender-notice 2018-19` | 348 |
| `tender-notice-2025` | `tender-notice 2025` | 168 |
| `tender-notice-2024` | `tender-notice 2024` | 86 |
| `tender 2023` | `tender-notice 2023` | 58 |

These are folder-name differences. They were not treated as missing files. They were also not treated as proof that a file belongs to a different year.

## Ambiguous files

Six filenames, each at one size, occur in three repository folders: `Tender 2018-2019`, `tender-notice-2024`, and `tender-notice-2025`. That is 18 rows. Each snapshot copy still has exactly one local `tender notice` file of the same name and size. Because three repository rows share that name and size, the mirror path was left blank on those rows rather than assigned to one of them.

| Filename | Bytes |
| --- | ---: |
| `EST_12_01_2025.pdf` | 54,247 |
| `EST-1_Dt_03_07_2026.pdf` | 155,222 |
| `Municipal_Corporation_-_Improved_Voter_List_Program_26-11-2025.pdf` | 504,720 |
| `Project_Manager-Jahirat.pdf` | 1,423,860 |
| `ShreeGaneshUtsav2026.pdf` | 9,513,364 |
| `Street_Vendors_Election_Suchana.pdf` | 878,041 |

All 18 repository rows still match the snapshot on their own canonical path and size. They remain unpublished.

## What this does not show

The snapshot does not prove the current live Drive contents. Equal size is not a new SHA-256 comparison. No tender file was published, renamed, or copied.
