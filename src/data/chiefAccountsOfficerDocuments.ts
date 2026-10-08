/** Payment and RTGS registers read as Chief Accounts Officer records. */
export type ChiefAccountsOfficerDocument = {
  id: string;
  file: string;
  bytes: number;
};

export const CHIEF_ACCOUNTS_OFFICER_FOLDER = "Chief Accounts Officer";

export const chiefAccountsOfficerDocuments: ChiefAccountsOfficerDocument[] = [
  { id: "cafo-b1-date-wise-contractor", file: "B-1_Date_Wise_list_Contractor.pdf", bytes: 245582 },
  { id: "cafo-rtgs-july-aug-2018", file: "july-aug_2018_account_deparment_rtgs.pdf", bytes: 120648 },
  { id: "cafo-paid-contractor-apr16-jan17", file: "Paid_Amt__of_Contractor_Apr-16_To_Jan-17.pdf", bytes: 111070 },
  { id: "cafo-paid-contractor-jun-2018", file: "Paid_Amt__of_Contractor_Jun_2018.pdf", bytes: 8113316 },
  { id: "cafo-paid-contractor-oct-2018", file: "Paid_Amt__of_Contractor_OCT_2018_PDF.pdf", bytes: 286602 },
];
