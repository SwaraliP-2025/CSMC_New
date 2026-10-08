/** Financial-year folders under public/documents/budget. A year is set only when the document states it. */
export type BudgetYearId = "2026-27" | "2025-26" | "2024-25" | "archive";

export type BudgetDocument = {
  id: string;
  file: string;
  bytes: number;
  yearId: BudgetYearId;
};

export type BudgetYearSection = {
  id: BudgetYearId;
  titleEn: string;
  titleMr: string;
  featured: boolean;
};

export const BUDGET_FOLDER = "budget";

export const budgetYearSections: BudgetYearSection[] = [
  { id: "2026-27", titleEn: "Budget 2026-27", titleMr: "अर्थसंकल्प २०२६-२७", featured: true },
  { id: "2025-26", titleEn: "Budget 2025-26", titleMr: "अर्थसंकल्प २०२५-२६", featured: true },
  { id: "2024-25", titleEn: "Budget 2024-25", titleMr: "अर्थसंकल्प २०२४-२५", featured: true },
  { id: "archive", titleEn: "Older Budgets / Archive", titleMr: "जुने अर्थसंकल्प / संग्रह", featured: false },
];

export const budgetDocuments: BudgetDocument[] = [
  { id: "budget-book-2026-27", file: "Budget Book  2026-27 PDF.pdf", bytes: 17936442, yearId: "2026-27" },
  { id: "budget-book-2025-2026", file: "Budget book 2025-2026.pdf", bytes: 27223572, yearId: "2025-26" },
  { id: "budget-pdf-2023-2024", file: "BUDGET-PDF_2023-2024_.pdf", bytes: 5736269, yearId: "archive" },
  { id: "budget-book-2022", file: "budget_Book_2022_FINAL__web_2_compressed.pdf", bytes: 31072634, yearId: "archive" },
  { id: "budget-21-22-final", file: "Budget--21-22_Final.pdf", bytes: 1989116, yearId: "archive" },
  { id: "budget-2020-21", file: "Budget_2020-21.pdf", bytes: 2109121, yearId: "archive" },
  { id: "budget-18-19", file: "Budget_18-19.pdf", bytes: 12186278, yearId: "archive" },
  { id: "budget-submitted-sc-16-17", file: "submitted_to_SC_budget_16-17.pdf", bytes: 6984861, yearId: "archive" },
  { id: "budget-jama-karch-2015-16", file: "Budget_Jama_karch_2015-16.pdf", bytes: 5165752, yearId: "archive" },
  { id: "budget-jama-15-16", file: "Budget_Jama-15-16__1.pdf", bytes: 319613, yearId: "archive" },
  { id: "budget-2014-15", file: "BUDGET_2014-15.pdf", bytes: 4145517, yearId: "archive" },
  { id: "budget-2013-14", file: "Budget_2013-14__.pdf", bytes: 3137580, yearId: "archive" },
  { id: "budget-2012-2013", file: "Budget_2012-2013__.pdf", bytes: 3658888, yearId: "archive" },
];

const BUDGET_YEAR_ALIASES: Record<string, BudgetYearId> = {
  "2026-27": "2026-27",
  "2026": "2026-27",
  "2025-26": "2025-26",
  "2025": "2025-26",
  "2024-25": "2024-25",
  "2024": "2024-25",
  archive: "archive",
};

export function budgetYearFromParam(value: string | null) {
  if (!value) return null;
  return BUDGET_YEAR_ALIASES[value] ?? null;
}

export function budgetDocumentsFor(yearId: BudgetYearId) {
  return budgetDocuments.filter((doc) => doc.yearId === yearId);
}
