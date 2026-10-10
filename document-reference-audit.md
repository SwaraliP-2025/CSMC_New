# Duplicate document reference audit

Read-only audit of `zone-6-17-06-2017`, `zone-6-17-06-20171`, `ncap-04`, and `ncap-08`. No application source, catalogue data, mapping, CSV, publication setting, physical file, Drive permission, or deployment was changed. The public listings on `/completed-works` and `/ncap` are unchanged.

Local file identity is taken from `document-identity-discrepancy-review.md`. This audit did not recompute SHA-256. Those hashes show the local PDFs in each pair are byte-identical. They do not show that a Drive file is publicly downloadable.

No application route uses these catalogue IDs. Links are built from filenames.

## Zone 6 pair

### Application references

| Record | Where | Lines | What it does |
| --- | --- | --- | --- |
| Both | `src/data/completedWorks.ts` | 20–21 | Comment says `…20171.pdf` is a byte-identical copy of `…2017.pdf` and that both use one row. The array still has two rows. |
| `zone-6-17-06-2017` | `src/data/completedWorks.ts` | 86–91 | Title “List of Work Done by Zone 6”, date `2017-06-17`, file `List_of_Completed_Work_in_Zone_6_17_06_2017.pdf`. |
| `zone-6-17-06-20171` | `src/data/completedWorks.ts` | 93–98 | Same English title, same Marathi title, same date, file `List_of_Completed_Work_in_Zone_6_17_06_20171.pdf`. |
| Both, by the array | `src/pages/site/CompletedWorks.tsx` | 24–26 and 56–58 | Renders every `completedWorks` row. `key` is `doc.id`. The link is `completedWorkUrl(doc.file)`, not the catalogue ID. |
| URL helper | `src/data/completedWorks.ts` | 10–15 | `${BASE_URL}documents/List%20of%20Completed%20Works/${encodeURIComponent(file)}`. |

`src/lib/searchIndex.ts` does not import `completedWorks`. These two PDFs are not search records. Searching does not depend on either ID.

These files name the page `/completed-works` and do not name either record or filename:

- `src/App.tsx` line 126
- `src/navigation/siteNav.ts` line 234
- `src/seo/siteConfig.ts` lines 276–281
- `src/components/site/PageHeader.tsx` line 52
- `src/lib/navSearchEnrichment.ts` indexes that navigation item as a page link

### Tests

No test names either Zone 6 ID or filename. `src/test/document-mapping.test.ts` lines 50, 108, and 121 walk the whole `completedWorks` array and require each listed file to exist under `public/documents/List of Completed Works/`, with no slash in the filename. Removing a row would not fail that test. Deleting the file while leaving the row would fail it.

### Mappings and inventories

Current proposal and draft, same row numbers:

| Lines | Record | Path | Publication in the current proposal |
| --- | --- | --- | --- |
| 213 | `zone-6-17-06-2017` | `documents/List of Completed Works/List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` | Section published. Repository `#completed-works` proposed, not implemented. |
| 214 | `zone-6-17-06-20171` | `documents/List of Completed Works/List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` | Same. |
| 1794 | Unlisted Works copy, not a catalogue ID | `documents/Municipal Document Repository/Works/List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` | Not proposed. |
| 1795 | Unlisted Works copy | `documents/Municipal Document Repository/Works/List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` | Not proposed. |

The same IDs are on lines 213–214 of `document-mapping-draft.csv` and `document-mapping-draft.backup.csv`. In the draft backup the status text is `published-existing`.

`document-mapping-crosslist-proposal.backup.csv` lines 213, 214, 1794, and 1795 have the same paths, but the first column is blank, so those rows cannot be found by catalogue ID.

`csmc-drive-inventory.csv` lines 1059, 1063, 2640, and 2644 record four Drive file IDs, one per local path. `documents-inventory.csv` lines 166, 167, 709, and 710 list the four paths with a rounded size of `1.03`. `documents-manifest.csv` lines 163–164 list only the two `List of Completed Works` files, at 1,080,487 bytes. That manifest does not list the Works copies.

Narrative mentions, not runtime links: `document-mapping-crosslist-validation.md` lines 48 and 117, `document-mapping-crosslist-report.md` line 64, and `document-identity-discrepancy-review.md`. Proposal notes on other completed-works rows, including lines 210–212 and 215–220, repeat the two filenames inside a shared note. Those notes do not create a second website link.

### Consolidation impact

Removing one row from `completedWorks` removes one row from `/completed-works`. These two rows are the last items in the array, so removing `zone-6-17-06-20171` does not change the serial number of any earlier row. No other page, search record, or route points at either ID.

The PDF URL is the static file path. Leaving the file in `public/` keeps that URL available even if the catalogue row is removed. There is no redirect file in the project. Deleting `…20171.pdf` would make an existing direct link to that filename fail. No in-app code other than this catalogue row points at that filename.

The repository anchor is still only a proposal. Changing the live list does not change a live repository section.

### Canonical record

`zone-6-17-06-2017`.

The source comment names the `20171` file as the copy of the `2017` file. Both catalogue titles and dates match. The identity review recorded one SHA-256, `d2c701ec60383270f35138877241db4bac21872174c18738130c1eb1bc677156`, for both published files and both Works copies. The comment’s phrase “both use that row” does not match the two IDs in the array.

**Recommendation: consolidate later.** Keep both listings until that change is explicitly made. Keep the physical `20171` file unless a redirect is added first. Do not publish the Works copies.

## NCAP pair

### Application references

| Record | Where | Lines | What it does |
| --- | --- | --- | --- |
| `ncap-04` | `src/data/ncapSearchMeta.ts` | 41–48 | Title and filename `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022`. Organisation is the Office of the Assistant Commissioner of Police (Traffic), Aurangabad City. Year is null. |
| `ncap-08` | `src/data/ncapSearchMeta.ts` | 77–84 | Same organisation, null year, and the same excerpt string. Title and filename add a trailing `1` before `.pdf`. |
| Both | `public/data/ncap-documents.json` | 1 | Eight documents. These two have the same titles, filenames, organisation, PDF type, and stored `text` (1,010 characters, equal). Year is empty in the parsed JSON. |
| Page | `src/pages/site/Ncap.tsx` | 28, 109, 139, 180, 196 | Loads that JSON. List key is `doc.id`. Preview and download use `ncapFileUrl(doc.fileName)`. |
| URL helper | `src/lib/ncap.ts` | 19–21 | `${BASE_URL}ncap/documents/${encodeURIComponent(fileName)}`. |
| Search | `src/lib/searchIndex.ts` | 601–625 | One search record per meta row. IDs are `ncap-doc-ncap-04` and `ncap-doc-ncap-08`. Each `href` is that file’s `ncapFileUrl`. |

The page stub `svc-ncap` at `src/lib/searchIndex.ts` lines 195–204 links to `/ncap` and does not name either file. `src/App.tsx` line 124, `src/navigation/siteNav.ts` line 303, and `src/seo/siteConfig.ts` lines 269–274 also refer only to the page.

`dist/data/ncap-documents.json` and `dist-deploy/data/ncap-documents.json` are generated copies of the same JSON. `dist/assets/index-CxwLkZeQ.js` and `dist-deploy/assets/index-D2rRjo_l.js` contain the compiled catalogue strings. They are build output, not a separate source of the records.

### Tests

No test names `ncap-04`, `ncap-08`, or either filename. `src/test/document-mapping.test.ts` lines 64–66 and 110 require every JSON document’s file to exist under `public/ncap/documents/`, and require `ncapSearchMeta.ts` not to mention `documents/ncap/documents`. `src/test/search-ranking.test.ts` line 120 only checks that some NCAP search hit exists.

### Mappings and inventories

| Lines in the current proposal and the draft | Record | Path | Publication in the current proposal |
| --- | --- | --- | --- |
| 2320 | `ncap-04` | `ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` | Section published. Repository `#ncap` proposed, not implemented. |
| 2321 | `ncap-08` | `ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf` | Same. |
| 1807 | Unlisted copy | `documents/ncap/documents/…2022.pdf` | Not proposed. Drive ID `1ra_tubWBaIndR5wjwK45JlL6FOwIxNbf` is also stored on the `ncap-04` row. |
| 1808 | Unlisted copy | `documents/ncap/documents/…20221.pdf` | Not proposed. Drive ID `1583iVIUuUtDS0KTqB2J6B3lQ8LXEkNsy` is also stored on the `ncap-08` row. |

`document-mapping-draft.backup.csv` lines 2320–2321 keep the IDs, with status `published-existing`. `document-mapping-crosslist-proposal.backup.csv` lines 1807, 1808, 2320, and 2321 have the paths and a blank first column.

`csmc-drive-inventory.csv` lines 2793 and 2799 list only the `documents/ncap/documents` paths. There is no inventory row for `ncap/documents`. `documents-inventory.csv` lines 1227–1228 list the two published `ncap\documents` files at rounded size `0.57`. That older inventory does not list `documents\ncap\documents`. `documents-manifest.csv` has neither NCAP filename.

Narrative mentions: `document-mapping-crosslist-validation.md` lines 49, 105, and 117; `document-mapping-crosslist-report.md` line 64; `drive-reconciliation-report.md` line 73; `document-identity-discrepancy-review.md`.

### Consolidation impact

Removing one JSON record removes one row from `/ncap` and, if the matching search-meta row is removed, removes `ncap-doc-ncap-04` or `ncap-doc-ncap-08`. The `/ncap` page stub remains. The stored text is the same, so the remaining record still matches the shared excerpt and organisation. A search for the exact `20221` title would no longer hit a document record.

The download URL is the static file under `ncap/documents/`. Removing the catalogue row does not remove that file. No redirect exists from one filename to the other. Deleting `…20221.pdf` would break a direct link to that name. The unpublished `documents/ncap/documents` copies are not linked by the page. `document-mapping.test.ts` forbids that folder string in the published NCAP sources.

The `#ncap` repository listing is proposed and is not on the live repository page.

### Canonical record

`ncap-04`.

The two JSON `text` fields are equal. Search excerpts, organisation, year, and file type match. The identity review recorded one SHA-256, `d8852e81747f93752f721b7889c9768b0696d4f5efb8ab281ac8cde9d11d6852`, for both published files and both `documents/ncap/documents` copies. `ncap-08` differs in the catalogue by a trailing `1` on the title and filename. No source comment designates one NCAP record as the copy. The choice of `ncap-04` follows that filename difference plus the identical local bytes and identical stored text. It is not a separate municipal label.

**Recommendation: consolidate later.** Keep both `/ncap` rows until that change is explicitly made. Keep the physical `20221` file unless a redirect is added first. Do not publish the `documents/ncap/documents` copies. The two Drive IDs stay different objects; this audit did not download them.

## Could not be verified

- No live request was made to GitHub Pages, so this audit does not say whether an already deployed site is serving these filenames.
- No external bookmark or third-party link was searched.
- Drive URLs were not opened. A Drive ID in the inventory is not evidence of public access.
- File creation times were not compared, so which file was written first is not established from the filesystem.
- `documents-manifest.csv` and parts of `documents-inventory.csv` omit copies that exist in the later mapping. Those older files are incomplete inventories, not evidence that the copies are absent.
- This audit did not recompute SHA-256. The hashes cited above are the ones recorded in the identity review.

## Confirmation

No existing project file or setting was modified. The only file added is this report.
