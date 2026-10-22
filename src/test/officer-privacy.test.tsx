import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ORGANOGRAM_PEOPLE } from "@/data/organogram";
import { DEPARTMENT_CONTACT_PHONE } from "@/lib/departmentIcons";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ColorBlindProvider } from "@/i18n/ColorBlindContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { localizeDigits } from "@/i18n/digits";
import DepartmentDetail, { DEPARTMENTS } from "@/pages/site/DepartmentDetail";
import OfficersCorner from "@/pages/site/OfficersCorner";

const officerPhones = [
  DEPARTMENT_CONTACT_PHONE,
  ...ORGANOGRAM_PEOPLE.map((person) => person.phone).filter((phone): phone is string => Boolean(phone)),
];

function phoneForms(phone: string): string[] {
  const compact = phone.replace(/[^\d]/g, "");
  return [phone, compact, localizeDigits(phone, "mr"), localizeDigits(compact, "mr")];
}

function renderInSite(ui: React.ReactElement) {
  return render(
    <ColorBlindProvider>
      <TooltipProvider>
        <LanguageProvider>{ui}</LanguageProvider>
      </TooltipProvider>
    </ColorBlindProvider>,
  );
}

function expectNoOfficerPhones(root: HTMLElement) {
  expect(root.innerHTML).not.toMatch(/href="tel:/);
  const text = root.textContent ?? "";
  for (const phone of officerPhones) {
    for (const form of phoneForms(phone)) {
      expect(text).not.toContain(form);
    }
  }
}

describe("officer phone privacy", () => {
  it("does not show officer telephone numbers on Officer's Corner", () => {
    const view = renderInSite(
      <MemoryRouter>
        <OfficersCorner />
      </MemoryRouter>,
    );
    expect(view.getByRole("heading", { level: 1, name: "अधिकारी कक्ष" })).toBeInTheDocument();
    expect(view.getByText("श्री अमोल येडगे, भा.प्र.से.")).toBeInTheDocument();
    const profiles = [...view.container.querySelectorAll("article")];
    expect(profiles.length).toBeGreaterThan(0);
    for (const profile of profiles) expectNoOfficerPhones(profile);
  });

  it("does not show officer telephone numbers on department pages", () => {
    for (const dept of DEPARTMENTS) {
      const view = renderInSite(
        <MemoryRouter initialEntries={[`/departments/${dept.slug}`]}>
          <Routes>
            <Route path="/departments/:slug" element={<DepartmentDetail />} />
          </Routes>
        </MemoryRouter>,
      );
      if (dept.headMr) expect(view.getAllByText(dept.headMr).length).toBeGreaterThan(0);
      const card = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" }).parentElement;
      expect(card).toBeTruthy();
      expectNoOfficerPhones(card!);
      view.unmount();
    }
  }, 120000);
});
