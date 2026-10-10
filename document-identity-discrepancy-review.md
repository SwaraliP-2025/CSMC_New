# Document identity discrepancy review

Read-only review of the Zone 6 completed-works pair and the NCAP `2022` / `20221` pair. No application code, catalogue data, CSV, mapping, publication flag, physical file, Google Drive permission, or deployment was changed. The five existing cross-listings were not touched.

SHA-256 was calculated from the local files. Drive file bytes were not downloaded. A recorded Drive ID identifies an inventory row. It does not show that the file is publicly downloadable.

## Zone 6 completed-works pair

**Conclusion: Same document.**

The two catalogue records point at two local PDFs with different filenames and the same title, date, size, and SHA-256. Every byte matches, including any metadata stored inside the PDF, so these are not different versions. Two further local copies under `Municipal Document Repository/Works` are the same bytes and are not published.

### Catalogue records

| Catalogue ID | Title | Date in the catalogue | File named by the record |
| --- | --- | --- | --- |
| `zone-6-17-06-2017` | List of Work Done by Zone 6 | 2017-06-17 | `List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` |
| `zone-6-17-06-20171` | List of Work Done by Zone 6 | 2017-06-17 | `List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` |

Both titles and dates come from `src/data/completedWorks.ts`. The Marathi title on both rows is “झोन 6 ने पूर्ण केलेल्या कामांची यादी”. A comment in that file says the `20171` file is a byte-identical copy and that “both use that row”. The array still contains two separate rows. The comment’s identity claim is confirmed by the hash below. Its wording that both use one row does not match the two IDs in the array.

### Local files

| Path | Bytes | Header | SHA-256 | Publication |
| --- | --- | ---: | --- | --- |
| `documents/List of Completed Works/List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` | 1,080,487 | `%PDF-` | `d2c701ec60383270f35138877241db4bac21872174c18738130c1eb1bc677156` | Published on `/completed-works` |
| `documents/List of Completed Works/List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` | 1,080,487 | `%PDF-` | `d2c701ec60383270f35138877241db4bac21872174c18738130c1eb1bc677156` | Published on `/completed-works` |
| `documents/Municipal Document Repository/Works/List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` | 1,080,487 | `%PDF-` | `d2c701ec60383270f35138877241db4bac21872174c18738130c1eb1bc677156` | Not published. Proposal class `excluded-duplicate-copy` |
| `documents/Municipal Document Repository/Works/List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` | 1,080,487 | `%PDF-` | `d2c701ec60383270f35138877241db4bac21872174c18738130c1eb1bc677156` | Not published. Proposal class `excluded-duplicate-copy` |

The completed-works page is live. A repository anchor `#completed-works` is only `proposed` in `document-mapping-crosslist-proposal.csv`. It was not part of the implemented slice, so these two records are not yet added to the Municipal Document Repository.

### Drive references already recorded

These IDs are in `csmc-drive-inventory.csv` and on the matching proposal rows. Each ID is a different Drive file object. The local file at that inventory path has the hash above. The Drive object itself was not hashed.

| Inventory path | Drive file ID | Drive URL |
| --- | --- | --- |
| `documents/List of Completed Works/List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` | `1J1vzjHMJo0n6ey9kdgyRr0Iij3sBi0HZ` | `https://drive.google.com/file/d/1J1vzjHMJo0n6ey9kdgyRr0Iij3sBi0HZ/view?usp=drivesdk` |
| `documents/List of Completed Works/List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` | `1QgoH1cqsH9ggtYf2Nz0kQpMCeTiKHQmx` | `https://drive.google.com/file/d/1QgoH1cqsH9ggtYf2Nz0kQpMCeTiKHQmx/view?usp=drivesdk` |
| `documents/Municipal Document Repository/Works/List_of_Completed_Work_in_Zone_6_17_06_2017.pdf` | `1vNOSQWM3tum5MrJRTwhaGLJYGBOq6QzF` | `https://drive.google.com/file/d/1vNOSQWM3tum5MrJRTwhaGLJYGBOq6QzF/view?usp=drivesdk` |
| `documents/Municipal Document Repository/Works/List_of_Completed_Work_in_Zone_6_17_06_20171.pdf` | `1jhVSYuP9-ieNLr9u9Yj5TPdVYv30sq7r` | `https://drive.google.com/file/d/1jhVSYuP9-ieNLr9u9Yj5TPdVYv30sq7r/view?usp=drivesdk` |

### Evidence

Verified: equal size, equal `%PDF-` header, and one SHA-256 across all four local files. Catalogue titles and dates are the same. Filenames differ by a trailing `1` on the second name.

Not assumed: the trailing `1` is not treated as a version number. A different version would differ in at least one byte. No PDF text or page count was extracted, because a full-file hash already shows the bytes are identical.

### Recommended next action

Leave both catalogue rows published until you decide to show only one. If that decision is made later, keep one completed-works listing and do not delete the physical files. Do not list the Works copies. Do not add both names to the repository unless you explicitly want the same document shown twice there.

## NCAP `2022` / `20221` pair

**Conclusion: Same document.**

The two catalogue records use different filenames and different Drive file IDs. The four local PDFs are byte-identical. They are duplicate copies, not distinct documents and not different versions.

### Catalogue records

| Catalogue ID | Title stored on the record | File name | Organisation | Year |
| --- | --- | --- | --- | --- |
| `ncap-04` | `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022` | `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` | Office of the Assistant Commissioner of Police (Traffic), Aurangabad City | null |
| `ncap-08` | `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221` | `VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf` | Office of the Assistant Commissioner of Police (Traffic), Aurangabad City | null |

These fields are in `src/data/ncapSearchMeta.ts`. The same IDs and filenames are the NCAP library records. `ncapFileUrl` publishes a file from `ncap/documents/{fileName}` on `/ncap`. The stored title is the filename without the extension. No separate rewritten title was found. The stored excerpts for the two records are the same string.

### Local files

| Path | Bytes | Header | SHA-256 | Publication |
| --- | --- | ---: | --- | --- |
| `ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` | 599,197 | `%PDF-` | `d8852e81747f93752f721b7889c9768b0696d4f5efb8ab281ac8cde9d11d6852` | Published on `/ncap` as `ncap-04` |
| `ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf` | 599,197 | `%PDF-` | `d8852e81747f93752f721b7889c9768b0696d4f5efb8ab281ac8cde9d11d6852` | Published on `/ncap` as `ncap-08` |
| `documents/ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` | 599,197 | `%PDF-` | `d8852e81747f93752f721b7889c9768b0696d4f5efb8ab281ac8cde9d11d6852` | Not published. Proposal class `excluded-duplicate-copy` |
| `documents/ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf` | 599,197 | `%PDF-` | `d8852e81747f93752f721b7889c9768b0696d4f5efb8ab281ac8cde9d11d6852` | Not published. Proposal class `excluded-duplicate-copy` |

Repository anchor `#ncap` is `proposed` for the two published records and was not implemented. The `documents/ncap/documents` copies stay excluded.

### Drive references already recorded

`csmc-drive-inventory.csv` lists only the `documents/ncap/documents` paths. It has no row whose folder is `ncap/documents`. The proposal attaches each published `ncap/documents` record to the Drive ID of the same-named copy, after a local hash match. That attachment is a recorded reference to the copy’s Drive object. It is not a second Drive file for the published path, and it was not checked by downloading the Drive bytes.

| Inventory path | Drive file ID | Drive URL | Also recorded on |
| --- | --- | --- | --- |
| `documents/ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_2022.pdf` | `1ra_tubWBaIndR5wjwK45JlL6FOwIxNbf` | `https://drive.google.com/file/d/1ra_tubWBaIndR5wjwK45JlL6FOwIxNbf/view?usp=drivesdk` | Published record `ncap-04` and the excluded copy |
| `documents/ncap/documents/VE_7_2_TRAFFIC_DECONGESTION_ACTIONS_TAKEN_26,_20221.pdf` | `1583iVIUuUtDS0KTqB2J6B3lQ8LXEkNsy` | `https://drive.google.com/file/d/1583iVIUuUtDS0KTqB2J6B3lQ8LXEkNsy/view?usp=drivesdk` | Published record `ncap-08` and the excluded copy |

The two Drive IDs are different objects. Their local counterparts are byte-identical to each other.

### Evidence

Verified: one SHA-256 and one size for all four local PDFs; matching organisation and excerpt text on the two catalogue records; filenames differ by a trailing `1` before `.pdf`.

Not assumed: the two Drive IDs are not treated as two versions. Drive content was not downloaded, so the identity conclusion is about the local files. The shared Drive ID between a published record and its excluded copy means both records point at one inventory object. It does not merge the catalogue records.

### Recommended next action

Leave `ncap-04` and `ncap-08` as separate published records until you decide whether `/ncap` should show one of them. Do not publish the `documents/ncap/documents` copies. Do not delete or rename the files as part of that decision.

## Confirmation

No application source, catalogue data, CSV, document mapping, publication setting, or physical document was changed. The temporary hash command was removed after the hashes were recorded. The website was not deployed.
