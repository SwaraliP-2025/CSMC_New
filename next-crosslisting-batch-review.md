# Next cross-listing batch review

Read-only review of the 584 repository additions that are still `proposed` in `document-mapping-crosslist-proposal.csv`. No source file, test, mapping, CSV, publication flag, document file, or Drive permission was changed.

The five records already cross-listed stay as they are: `FAQ_SevenStar.pdf`, the root `Guildelines_For_Disaster.pdf`, and the three Fire cadre files. This review does not repeat them.

A Drive ID or URL is an inventory reference. It is not evidence that the file is publicly downloadable.

## Remaining proposed additions

`confirmed-section-to-repository` has 586 rows. Two are already `published` in the repository. These 584 are still proposed:

| Category | Records | Current public location | Proposed repository anchor |
| --- | ---: | --- | --- |
| Standing committee minutes | 337 | Public Documents, year folders | `#standing-committee` |
| Election Insights | 141 | `/election-insights` | `#election-insights` |
| RTI | 49 | `/rti-act` | `#rti` |
| Budget | 13 | `/public-documents?category=budget` | `#budget` |
| Census 2026-27 | 11 | `/census-2026-27` | `#census-2026-27` |
| Completed works | 11 | `/completed-works` | `#completed-works` |
| NCAP | 8 | `/ncap` | `#ncap` |
| RTS | 6 | `/rts-act` | `#rts` |
| Chief Accounts | 5 | `/departments/chief-accounts-finance-officer` | `#chief-accounts-finance-officer` |
| Municipal secretaries | 1 | `/municipal-corporation-secretaries` | `#municipal-secretaries` |
| Policies | 1 | `/policies-guidelines` | `#policies-guidelines` |
| Dastavez | 1 | `/dastavez` | `#dastavez` |

## Recommended first batch: 14 records

Add the five smallest complete public collections. Each record already has a catalogue ID, a public page, and a local file whose size matches the proposal. Each recorded size is unique among the 2,322 mapping rows, so no other mapped file can be a byte-identical copy. SHA-256 was not recomputed in this review.

| Catalogue ID | Existing location | Proposed repository location | Local file | Verification |
| --- | --- | --- | --- | --- |
| `banner-location-list` | `/dastavez` | `#dastavez` | `documents/municipal-documents/Banner_location.pdf` (232,424) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `draft-water-policy` | `/policies-guidelines` | `#policies-guidelines` | `documents/policies/Draft Water Policy_CS.pdf` (16,225,466) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `municipal-corporation-secretaries-2026` | `/municipal-corporation-secretaries` | `#municipal-secretaries` | `documents/List of Municipal Corporation Secretaries/Municipal_Corporation_Secretary_List_2026.pdf` (591,240) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `rts-adhi-suchana` | `/rts-act` | `#rts` | `documents/rts/Adhi-Suchna.pdf` (6,654,507) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `rts-gazette-2025-11-20` | `/rts-act` | `#rts` | `documents/rts/Gazette_Dt_20-11-2025.pdf` (558,629) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `rts-act-2015` | `/rts-act` | `#rts` | `documents/rts/Maharashtra_Right_to_public_services_Act_2015.pdf` (268,783) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `rts-rules-2016` | `/rts-act` | `#rts` | `documents/rts/RTS_Rules_Gazette2.pdf` (174,904) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `rts-mc-office-order` | `/rts-act` | `#rts` | `documents/rts/Gazette_2.pdf` (2,795,360) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `rts-gazette-2025-08-21` | `/rts-act` | `#rts` | `documents/rts/Maharashtra_Public_Service_Right_Act_Rules_Gazette_21-08-2025.pdf` (288,322) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `cafo-b1-date-wise-contractor` | Chief Accounts department page | `#chief-accounts-finance-officer` | `documents/Chief Accounts Officer/B-1_Date_Wise_list_Contractor.pdf` (245,582) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `cafo-rtgs-july-aug-2018` | Chief Accounts department page | `#chief-accounts-finance-officer` | `documents/Chief Accounts Officer/july-aug_2018_account_deparment_rtgs.pdf` (120,648) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `cafo-paid-contractor-apr16-jan17` | Chief Accounts department page | `#chief-accounts-finance-officer` | `documents/Chief Accounts Officer/Paid_Amt__of_Contractor_Apr-16_To_Jan-17.pdf` (111,070) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `cafo-paid-contractor-jun-2018` | Chief Accounts department page | `#chief-accounts-finance-officer` | `documents/Chief Accounts Officer/Paid_Amt__of_Contractor_Jun_2018.pdf` (8,113,316) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |
| `cafo-paid-contractor-oct-2018` | Chief Accounts department page | `#chief-accounts-finance-officer` | `documents/Chief Accounts Officer/Paid_Amt__of_Contractor_OCT_2018_PDF.pdf` (286,602) | Present. Size matches. Drive match recorded as `exact-path-and-size`. |

### Why these categories

Dastavez, policies, and secretaries are each one published PDF. The repository section would show the same file the page already shows.

RTS is the whole live list in `src/data/rtsDocuments.ts`: six PDFs, with titles and dates already on `/rts-act`. The external notified-services link on that page is not one of these files and should not be added as a document.

Chief Accounts is the whole live list in `src/data/chiefAccountsOfficerDocuments.ts`. The department page already renders that array through `DocumentArchiveBrowser`. The repository can use the same array and the folder `Chief Accounts Officer`. These five files are not in the repository today.

None of the 14 names is a Zone 6 or NCAP duplicate. None shares its recorded size with another mapping row.

## Not in this batch

**Budget, 13 records.** All 13 files are present, size-matched, and unique in size among the mapping rows, with `exact-path-and-size` Drive matches recorded. They are the best following batch. `Budget_Jama-15-16__1.pdf` (`budget-jama-15-16`) has a copy-like filename, but no other mapping row has its size. The featured Budget 2024-25 folder has no file and must not gain an invented row. Leave budget until after this batch.

**Standing committee minutes, 337, and Election Insights, 141.** Both are published and have local files. They are too large for the next small batch. Some published minutes are already known to match unpublished copies. Do not reopen that set here.

**RTI, 49.** Published local files, but a larger set. The RTI `Guildelines_For_Disaster.pdf` is a different file from the root disaster-guidelines PDF already in the repository. Do not merge those two.

**Census, 11.** No local path. Ten rows are existing Drive file links. `census-10`, “Mi Swa-Ganana Keliye”, is the folder `1OQCJd9LXkJ5khqjIvCbmq0aIVVZ7ZF7V` and has no file ID. Do not add these until local files exist. Do not treat the Drive links as public downloads.

**Completed works, 11, and NCAP, 8.** Leave the whole categories out of this batch. `zone-6-17-06-2017` and `zone-6-17-06-20171` stay on the cleanup list, as do `ncap-04` and `ncap-08`. Do not consolidate either pair, and do not place either pair into a new repository anchor while that decision is open.

## Keep excluded

| Group | Rows | Why it stays out |
| --- | ---: | --- |
| Tenders | 1,037 | `withheld-pending-approval`. A Drive copy is not approval to publish. |
| Duplicate copies | 117 | `excluded-duplicate-copy`, including Works copies, `documents/ncap/documents/`, Duplicate Review, and Needs Review copies. |
| Unclassified files | 131 | `unresolved`. Folder names are not department assignments. |
| Incomplete download | 1 | `Unconfirmed 513392.crdownload`. |
| Catalogue records without a local file | 31 | `excluded-no-physical-file`. Generated downloads are not the PDFs on disk. |

The Administration `Suprintendent.pdf` / `Suprintendent (1).pdf` pair is already public. This batch does not consolidate it.

## Approval still required

Approve these 14 repository listings before any code change. Approval to list them does not include deleting files, merging the Zone 6 or NCAP pairs, publishing tenders, or treating Drive URLs as public access.

## Implementation plan after approval

1. Add five repository sections in `DigitalRepository.tsx`: `#dastavez`, `#policies-guidelines`, `#municipal-secretaries`, `#rts`, and `#chief-accounts-finance-officer`.
2. Reuse `dastavezDocuments`, `policyDocuments`, `RTS_DOCUMENTS`, `chiefAccountsOfficerDocuments`, and the existing secretaries file URL. Do not copy the PDFs.
3. Leave `/dastavez`, `/policies-guidelines`, `/municipal-corporation-secretaries`, `/rts-act`, and the Chief Accounts department page on their current components.
4. Do not retarget the Dastavez search hit away from `/dastavez`.
5. Do not add Census, budget, minutes, Election Insights, RTI, completed works, NCAP, tenders, duplicate copies, unclassified files, the incomplete download, or the 31 catalogue-only records.
6. Update `src/test/document-mapping.test.ts` so the new sections are present, each listed file still exists once, and the unpublished-source scan still rejects Needs Review, Duplicate Review, `documents/ncap/documents`, and `/Tenders/`.

After that change, run:

- `npx vitest run src/test/document-mapping.test.ts src/test/search-coverage.test.ts src/test/pdf-resource-key.test.ts`
- `npx vite build`

Do not deploy as part of that implementation.

## Confirmation

No existing project file or publication setting was changed. The only file added is this report.
