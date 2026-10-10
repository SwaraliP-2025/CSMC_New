# Site-wide document cross-listing proposal

This is a review proposal. It does not change the live website, `document-mapping-draft.csv`, Drive permissions, or publication. The original mapping remains the current baseline. The proposed records are in `document-mapping-crosslist-proposal.csv`.

Each physical file or existing page link stays one canonical record. A display location is written as `place|status`, so the original section and the Municipal Document Repository can be published or withheld independently. Nothing in this file has been applied to the site.

Drive file IDs are filled only for an exact path and size match, a published NCAP copy whose local SHA-256 matches, or a file link already shown on the Census page. Filename-only matches are blank. Folder links stay blank. The incomplete Town Planning download is blank even though a Drive object shares its path and size.

| Proposal class | Records | What it means |
| --- | ---: | --- |
| confirmed-section-to-repository | 586 | Already published in an original section. Repository listing is proposed, not live. |
| already-cross-listed | 416 | Already on both the original section and the repository. |
| confirmed-additional-section | 3 | Fire establishment files already on General Administration and in the repository. The Fire department page is an additional proposed location. |
| withheld-pending-approval | 1,037 | Tender files. Both Tender Notices and the repository stay withheld. |
| excluded-duplicate-copy | 117 | Unpublished copies. Not given a second listing. |
| unresolved | 131 | Not classified. Both listings withheld. |
| excluded-no-physical-file | 31 | Catalogue or link records with no file. Not merged with a real PDF. |
| excluded-incomplete | 1 | `Unconfirmed 513392.crdownload`. |

## Confirmed existing-section to repository

These remain on their current route. The repository location is `proposed`.

| Original section | Records | Proposed repository anchor |
| --- | ---: | --- |
| Standing committee minutes, year folders | 337 | `#standing-committee-minutes` |
| Election Insights, including wards 44–53 | 141 | `#election-insights` |
| RTI, including the RTI copy of the disaster guidelines | 49 | `#rti` |
| Budget files on Public Documents | 13 | `#budget` |
| Census 2026–27 page links | 11 | `#census-2026-27` |
| Published NCAP files at `ncap/documents/` | 8 | `#ncap` |
| RTS | 6 | `#rts` |
| Chief Accounts and Finance Officer department page | 5 | `#chief-accounts-finance-officer` |
| List of Completed Works | 11 | `#completed-works` |
| Dastavez, Policies and Guidelines, Municipal Secretaries | 1 each | matching section anchor |
| Citizen Services → 7 Star Citizen FAQs | 1 | `#citizen-services` |
| Contact → Guidelines for Disaster | 1 | `#guidelines-for-disaster` |

`FAQ_SevenStar.pdf` is the file opened by Citizen Services. The draft had marked it for manual review because that navigation link was not recorded. `documents/Guildelines_For_Disaster.pdf` (759,375 bytes) is the Contact link. It is a different document from the RTI file of the same name (2,362,355 bytes). Both stay separate records.

The earlier mapping left Chief Accounts off the repository. This proposal adds it because those five files are already published department documents.

## Confirmed repository to section

No repository-only document was given a new section solely because of its folder name.

The three Administration and Establishment Fire files are the confirmed addition in this direction:

- `Dy_Fire_Officer.pdf`
- `Fireman.pdf`
- `Leading_Fireman.pdf`

They are already published at General Administration `#fire` and at `/digital-repository#administration-and-establishment`. The proposal adds `/departments/fire-disaster-management` as `proposed`. The separate, unlisted `Fire Department` folder (2 files) is not included.

Education (16), Town Planning (57 PDFs and 3 Drive folder links), Drainage (265), and the rest of Administration and Establishment (73 files and 2 Drive folder links) are already on both surfaces. Their routes are unchanged.

## Intentionally excluded

- **Tender notices (1,037).** Intended locations are `/tender-notices` and `/digital-repository#tender-notices`, both `withheld`. `/tenders` continues to redirect to MahaTenders. The Tender Notices page stays empty. A Drive upload is not approval to publish. The local mirror under `documents/tenders/tender-notices/tender notice …` was hash-checked against the mapped tender folders: all 1,037 pairs match. Those mirrors are duplicate uploads on the same canonical tender record, not new documents.
- **Unpublished duplicate copies (117).** Duplicate Review, Needs Review copies that match another file, `documents/ncap/documents/`, and the Works copies of completed-works files. Existing canonical choices stay: published year-folder minutes, `ncap/documents/`, and `List of Completed Works/`.
- **Catalogue records with no file (31),** including the generated budget, tender, and government-order cards. They are not matched to real PDFs that happen to have similar titles.
- **Incomplete download (1).**
- **Empty sections.** Patrika, Samvaad, and Tender Notices have no approved documents. `GAD Orders and Circulars` has no files, so it has no record. Empty department pages stay empty.
- **Already-listed hash pairs that were left in place:** drainage drawing pairs, completed-works Zone 6 `2017` and `20171`, NCAP `2022` and `20221`, and Administration `Suprintendent.pdf` and `Suprintendent (1).pdf`. They are not merged.

## Unresolved

131 records stay withheld in both places. Folder names were not treated as department assignments.

| Group | Records | Why it is unresolved |
| --- | ---: | --- |
| Needs Review minutes with no hash twin | 14 | Not yet accepted as standing-committee minutes |
| Electrical | 22 | Unlisted folder |
| Audit | 17 | Unlisted folder. One pair is byte-identical and still two files |
| Health Department folder | 11 | Distinct from the Administration Health cadre list |
| Garden | 9 | Includes `Jahir_Lilav_Suchana.pdf`, which matches a tender copy and is not reclassified as a tender |
| Tax Assessment and Collection | 9 | Unlisted folder |
| PMAY | 8 | Unlisted folder |
| Labour | 7 | Includes files with “tender” in the name. Not moved to Tender Notices |
| Mechanical | 6 | Unlisted folder |
| City Engineer | 5 | Unlisted folder |
| Ramai Awaas Yojna, Social Welfare, Water Supply | 4 each | Unlisted folders |
| Solid Waste Management, Tourism | 3 each | Unlisted folders |
| Fire Department folder | 2 | Not the three published Fire cadre files |
| Library, NULM, Secretary Section | 1 each | Unlisted folders |

Administration categories Health (18), Technical (18), and Zoo (3) stay on General Administration and in the repository. Putting them on the Health or another department page is not proposed.

Generated catalogue titles that resemble real budgets, tenders, or government orders remain separate. No title was used to merge them.

## Drive IDs

| Match | Records |
| --- | ---: |
| Exact local path and size | 2,266 |
| Published NCAP path, same name, size, and local SHA-256 as `documents/ncap/documents/` | 8 |
| Census file link already published on `/census-2026-27` | 10 |
| Left blank | 38 |

The blank records are 31 catalogue rows, 5 Drive folder links (3 Town Planning, 2 General Administration), the Census folder link “Mi Swa-Ganana Keliye”, and the incomplete download. Each of the 1,037 tender records also stores the mirrored Drive ID in `relatedDriveFileIds`. That ID is a duplicate upload, not a second canonical document.

## Tests required before implementation

Do not add these to the live suite until the proposal is approved. When implementation starts, the tests should check:

- Citizen Services still opens `FAQ_SevenStar.pdf`, and the repository citizen-services anchor lists that same path once.
- Contact still opens the 759,375-byte disaster guidelines, and the RTI page still opens the 2,362,355-byte file. The repository lists them as two records.
- `/tender-notices` stays empty while tender rows are `withheld`. No tender path is rendered in the repository. `/tenders` still redirects to MahaTenders.
- The three Fire cadre files appear on General Administration, in the repository, and, only after approval, on `/departments/fire-disaster-management`. The unlisted Fire Department folder does not.
- Education, Town Planning, Drainage, and Administration and Establishment still resolve on both the department page and the repository, including the existing Drive folder links.
- A document proposed for both places is asserted in both collections, and a withheld document is asserted in neither.
- Confirmed duplicate copies are absent from the collection that already lists the canonical file.
- Chief Accounts remains on its department page. Repository inclusion follows only the approved proposal flag.
- Empty department pages, Patrika, and Samvaad still render.
- Catalogue rows without a file do not gain a local path or a Drive ID.
- Existing PDF open, search, OCR, highlight, download, and print behaviour is unchanged. The current search, coverage, and PDF cache-key tests still pass.

## Approval still required

Approving this proposal is what would allow implementation. Until then, no new repository block, Fire department list, or Tender Notices list should be published. The tender set, the 131 unresolved records, and the 117 duplicate copies need their own explicit decision before any of them is shown.
