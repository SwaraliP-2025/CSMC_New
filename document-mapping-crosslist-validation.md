# Cross-listing proposal validation

Pre-implementation check of `document-mapping-crosslist-proposal.csv` against `document-mapping-crosslist-report.md`, `document-mapping-draft.csv`, `csmc-drive-inventory.csv`, and the current application data. No application code, mapping, proposal, Drive permission, or deployment was changed.

The proposal has 2,322 data rows, in the same order as the draft. Every row’s path and size match the draft row in that position. Class counts match the report: 586, 416, 3, 1,037, 117, 131, 31, and 1.

| Check | Result |
| --- | --- |
| 1. Evidence for every proposed repository addition | Pass, with a discrepancy |
| 2. Independent publication flags | Pass, with a discrepancy |
| 3. All 586 additions accounted for, without accidental duplicates | Pass |
| 4. Tenders, copies, unclassified files, incomplete files, and catalogue records stay out of new public listings | Pass, with a discrepancy |
| 5. 2,284 Drive IDs match the intended files | Pass, with limits |
| 6. 7 Star FAQ and Contact disaster guidelines are distinct | Pass |
| 7. Three Fire cadre files have three locations and one physical file each | Pass |
| 8. Existing sections and routes remain intact | Pass |
| 9. NCAP, Census, and other external references | Pass |
| 10. A known Drive ID does not make an unverified file public | Pass |

## 1. Proposed repository additions

Pass. All 586 rows are `confirmed-section-to-repository`, `reviewStatus` `verified-existing`, `sectionPublication` `published`, and `repositoryPublication` `proposed`. Each has one repository location marked `proposed` and at least one published original section. Local files exist at the recorded size. The 11 Census rows have no local file; their titles and file IDs match `census2026.ts`.

Anchor counts match the report and add up to 586: standing-committee minutes 337, Election Insights 141, RTI 49, budgets 13, Census 11, completed works 11, NCAP 8, RTS 6, Chief Accounts 5, and one each for Dastavez, policies, secretaries, the 7 Star FAQ, and the Contact disaster guidelines.

Discrepancy: `canonicalId` is blank on all 2,322 rows. The draft IDs were not copied. Identity for this validation used row order plus path and size, which match the draft exactly. Do not join the proposal to the draft on `canonicalId` until that column is restored.

## 2. Publication flags

Pass. The publication columns match the documented decisions:

- Section-to-repository rows: section `published`, repository `proposed`.
- Already cross-listed rows: both `published`.
- Fire cadre rows: both `published`, with the Fire department page separately marked `proposed`.
- Tender rows: both `withheld`, and both display locations are `withheld`.
- Unclassified rows: both `withheld`, with no published or proposed location.
- Duplicate copies and the incomplete download: both `not-proposed`.
- Catalogue rows: repository `catalog-only`, section `not-proposed`, Drive ID blank.

Discrepancy: the 31 catalogue rows still carry `|published` inside `displayLocations` because those strings were copied from the existing generated catalogue routes. The publication columns do not say to add them. An implementation must follow the columns for those rows.

## 3. The 586 additions

Pass. No path or Census title is repeated inside one proposed repository anchor.

Two pairs have the same SHA-256 and would both enter the same new anchor. They are the pairs the report already keeps separate, not extra copies created by this proposal:

- `#completed-works`: `List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` and `List_of_Completed_Work_in_Zone_6_17_06_20171.pdf`
- `#ncap`: `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` and the `20221` filename

## 4. Exclusions

Pass. None of the 1,037 tender rows, 117 duplicate-copy rows, 131 unclassified rows, the incomplete download, or the 31 catalogue rows has repository or section publication set to `published` or `proposed`.

Tender display locations are only `/tender-notices|withheld` and `/digital-repository#tender-notices|withheld`. The Tender Notices page still passes `documents={[]}`. `/tenders` still redirects to MahaTenders.

Discrepancy: on the incomplete-download row, the explanation text was written into `relatedDriveFileIds` and the notes column is empty. Its publication flags remain `not-proposed`, and its Drive file ID is blank.

## 5. Drive IDs

Pass for the 2,284 populated IDs. None points at a folder.

| Evidence | IDs | Result |
| --- | ---: | --- |
| Exact inventory path and size | 2,266 | Path and size match the proposal row |
| Published NCAP file, same name, size, and local SHA-256 as `documents/ncap/documents/` | 8 | Hash confirmed again |
| Census file link already present in `census2026.ts` | 10 | Each ID matches that page |

No populated ID was missing from the inventory except the 10 Census IDs, which are identified from the page rather than the inventory. There was no path mismatch, size mismatch, or filename-only match. Thirty-eight IDs are blank: 31 catalogue rows, 5 Drive folder links, the Census folder link, and the incomplete download.

Eight inventory IDs appear on two proposal rows. In each case the rows are the published `ncap/documents/` file and the excluded `documents/ncap/documents/` copy of that same file. The match is not ambiguous. The excluded row is not a new public listing.

All 1,037 `relatedDriveFileIds` values are a second inventory file of the same name and size under `documents/tenders/tender-notices/tender-notice …`. None of those IDs is also used as a primary ID.

Drive file bytes were not downloaded, so anonymous download access was not established for the inventory. Sample HEAD requests reached Google: the Census file view and the Census folder view returned HTML pages, and the 7 Star FAQ Drive view returned a 302. Those responses do not prove that the file bytes are publicly downloadable. The local files for the exact-path matches are on disk.

## 6. FAQ and Contact disaster guidelines

Pass. The records are different files, different sizes, different hashes, and different Drive IDs. Each Drive ID is the inventory row for that exact path.

| Record | Local file | Bytes | Drive ID |
| --- | --- | ---: | --- |
| Citizen Services, 7 Star Citizen FAQs | `documents/FAQ_SevenStar.pdf` | 67,011 | `148Q0qZydJDB_Xo0R92v6pcWAq-mRieDV` |
| Contact, Guidelines for Disaster | `documents/Guildelines_For_Disaster.pdf` | 759,375 | `1Vz8tyjhNLjsfSKFHYwKz0S7m1dJXJy_8` |
| RTI, Guidelines for Disaster | `documents/rti/Department-wise RTI Documents/Guildelines_For_Disaster.pdf` | 2,362,355 | `1BNXnrSoeR0zc0RYpNggK9vw8hJu3sgP6` |

`siteNav.ts` still opens the first two files. The RTI list still uses the third. The FAQ repository anchor is `#citizen-services`. The Contact file’s anchor is `#guidelines-for-disaster`. The RTI file’s anchor is `#rti`.

## 7. Fire cadre files

Pass. These three paths are proposed once each, and each file is on disk once:

- `Dy_Fire_Officer.pdf` (76,210 bytes)
- `Fireman.pdf` (85,583 bytes)
- `Leading_Fireman.pdf` (167,669 bytes)

Each location set is General Administration `#fire` published, `/digital-repository#administration-and-establishment` published, and `/departments/fire-disaster-management` proposed. The department page exists and does not yet render these files. The two files in the unlisted `Fire Department` folder are not included.

## 8. Existing routes

Pass. Education, Town Planning, Drainage, and Administration and Establishment are still separate repository anchors and department listings in the application. The proposal does not remove an existing location from any non-tender row. Chief Accounts, budgets, minutes, RTI, RTS, Dastavez, policies, completed works, secretaries, Election Insights, NCAP, and Census remain on their current section flags as `published`. Patrika and Samvaad are still empty. The Fire department page has not been given a document browser.

## 9. NCAP and Census

Pass. The eight published NCAP files are proposed for `#ncap` and keep their current section. Their Drive IDs come from the hash-matched `documents/ncap/documents/` copies. Those copy rows stay `excluded-duplicate-copy`. The `2022` and `20221` files remain two records.

All 10 Census file IDs in `census2026.ts` appear on the matching proposal rows. `Mi Swa-Ganana Keliye` remains the folder `1OQCJd9LXkJ5khqjIvCbmq0aIVVZ7ZF7V`, with no file ID. The Town Planning and General Administration folder links also have blank file IDs.

## 10. Drive ID is not publication

Pass. No tender, unclassified, duplicate-copy, incomplete, or catalogue row with a Drive ID is marked published or proposed. Tender IDs are stored only on withheld rows.

## Decisions still requiring approval

- Restore `canonicalId` from `document-mapping-draft.csv` before implementation. The blank column is a proposal defect, not a classification change.
- Approve the 586 repository additions as a group, or approve a smaller first slice. They are proposed, not live.
- Decide whether both files in the Zone 6 completed-works pair, and both NCAP `2022` / `20221` files, should appear in the new repository anchors.
- Approve the three Fire cadre files on `/departments/fire-disaster-management`.
- Keep withholding the 1,037 tender files, 117 duplicate copies, 131 unclassified files, and the incomplete download.
- Do not turn the 31 catalogue records into physical files, and do not merge them with real PDFs of similar titles.
- Do not publish from a Drive ID alone. Census and folder links stay external references.

## Smallest safe implementation plan

The checks support implementation only after the blank `canonicalId` column is restored and the approvals above are given. The first code change should not load all 586 rows.

1. Repair the proposal IDs from the draft by row order. Do not otherwise rewrite classifications.
2. Add a shared registry read by both the original section and the repository. Each location keeps its own publication flag. Points at the existing file path. Do not copy files.
3. First public slice, after approval: the 7 Star FAQ and the 759,375-byte Contact guidelines in the repository, and the three existing Fire cadre files on the Fire department page. Leave their current links in place.
4. Leave tenders, unclassified folders, duplicate copies, catalogue records, and the incomplete download unpublished.
5. Add the tests named in `document-mapping-crosslist-report.md` for that slice before any later batch. Do not deploy as part of that change.
6. Bring the remaining approved anchors in later batches: minutes, Election Insights, RTI, RTS, budgets, completed works, NCAP, Census, Chief Accounts, Dastavez, policies, and secretaries. Skip a hash pair unless the approval above says to list both.
