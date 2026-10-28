import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ORGANOGRAM_PEOPLE } from "@/data/organogram";
import { DEPARTMENT_CONTACT_PHONE } from "@/lib/departmentIcons";
import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { ColorBlindProvider } from "@/i18n/ColorBlindContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { localizeDigits } from "@/i18n/digits";
import { libraryDocuments } from "@/data/reviewedPublicDocuments";
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

function EnglishLanguageButton() {
  const { setLang } = useLang();
  return <button onClick={() => setLang("en")}>English</button>;
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
    const ranjitProfile = profiles.find((profile) => profile.textContent?.includes("श्री रणजीत आ. पाटील"));
    const kalpitaProfile = profiles.find((profile) => profile.textContent?.includes("श्रीमती कल्पिता पिंपळे"));
    expect(ranjitProfile?.textContent).toContain("acomm1@chhsambhajinagarmc.org");
    expect(ranjitProfile?.textContent).not.toContain("cultural@chhsambhajinagarmc.org");
    expect(kalpitaProfile?.textContent).toContain("acomm2@chhsambhajinagarmc.org");
    expect(kalpitaProfile?.textContent).not.toContain("compdept@gmail.com");
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

  it("keeps Information & Technology contacts after the profile grid and department details in the right column", () => {
    const view = renderInSite(
      <MemoryRouter initialEntries={["/departments/information-technology"]}>
        <Routes>
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    const officerHeading = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" });
    const leftColumn = officerHeading.parentElement?.parentElement;
    const grid = leftColumn?.parentElement;
    const rightColumn = grid?.children[1];

    expect(rightColumn?.querySelector("#it-functions-heading")).toBeInTheDocument();
    expect(rightColumn?.querySelector("#it-hierarchy-heading")).toBeInTheDocument();
    expect(grid?.nextElementSibling?.querySelector("#it-officers-heading")).toBeInTheDocument();
    expect(rightColumn?.querySelector("#it-officers-heading")).not.toBeInTheDocument();
    expect(view.container.textContent).not.toContain("The total includes the department head shown above");
    expect(view.container.textContent).not.toContain("Department Head Shown Above");
  });

  it("keeps City Engineer staff tables after the profile grid and documents after staff", () => {
    const view = renderInSite(
      <MemoryRouter initialEntries={["/departments/city-engineer"]}>
        <Routes>
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    const officerHeading = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" });
    const leftColumn = officerHeading.parentElement?.parentElement;
    const layoutGrid = leftColumn?.parentElement;
    const permanentStaff = view.container.querySelector("#city-engineer-permanent-heading");
    const departmentDocuments = [...view.container.querySelectorAll("h3")].find(
      (heading) => heading.textContent === "संबंधित दस्तऐवज",
    );

    expect(layoutGrid?.nextElementSibling?.contains(permanentStaff ?? null)).toBe(true);
    expect(layoutGrid?.nextElementSibling?.nextElementSibling?.contains(departmentDocuments ?? null)).toBe(true);
  });

  it("places Cultural contacts below the profile and keeps functions and documents in their page sections", () => {
    const view = renderInSite(
      <MemoryRouter initialEntries={["/departments/cultural"]}>
        <Routes>
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    const officerHeading = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" });
    const profileColumn = officerHeading.parentElement?.parentElement;
    const profileCard = profileColumn?.children[0];
    const layoutGrid = profileColumn?.parentElement;
    const rightColumn = layoutGrid?.children[1];
    const email = view.container.querySelector<HTMLAnchorElement>(
      'a[href="mailto:cultural@chhsambhajinagarmc.org"]',
    );
    const relatedDocumentsHeading = view.getByRole("heading", { level: 3, name: "संबंधित दस्तऐवज" });
    const contactHeading = view.getByRole("heading", { level: 3, name: "विभाग संपर्क" });

    expect(view.getByText("डॉ. अंकुश पांढरे")).toBeInTheDocument();
    expect(email?.textContent).toBe("cultural@chhsambhajinagarmc.org");
    expect(profileColumn?.children[1]?.contains(contactHeading)).toBe(true);
    expect(profileCard?.querySelector('a[href="mailto:cultural@chhsambhajinagarmc.org"]')).toBeNull();
    expect(contactHeading.parentElement?.textContent).toContain("०२४०२३३३५३६");
    expect(contactHeading.parentElement?.textContent).toContain("०२४०२३३३५३७");
    expect(contactHeading.parentElement?.textContent).toContain("तिसरा मजला");
    expect(rightColumn?.textContent).toContain("कार्यक्रम व उपक्रम");
    expect(rightColumn?.textContent).not.toContain("cultural@chhsambhajinagarmc.org");
    expect(rightColumn?.textContent).toContain("महापौर राज्यस्तरीय एकांकिका स्पर्धा");
    expect(layoutGrid?.nextElementSibling?.contains(relatedDocumentsHeading)).toBe(true);
    expect(view.container.textContent).toContain("Cultural 31 dt 27 08 2026");
  });

  it("places Fire contacts below the profile and shows the requested employee breakdown", () => {
    const view = renderInSite(
      <MemoryRouter initialEntries={["/departments/fire-disaster-management"]}>
        <Routes>
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    const officerHeading = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" });
    const profileColumn = officerHeading.parentElement?.parentElement;
    const profileCard = profileColumn?.children[0];
    const rightColumn = profileColumn?.parentElement?.children[1];
    const email = profileColumn?.children[1]?.querySelector<HTMLAnchorElement>(
      'a[href="mailto:aur.firebrigade@gmail.com"]',
    );
    const contactHeading = view.getByRole("heading", { level: 3, name: "विभाग संपर्क" });

    expect(view.getByText("डॉ. अंकुश पांढरे")).toBeInTheDocument();
    expect(email?.textContent).toBe("aur.firebrigade@gmail.com");
    expect(profileCard?.querySelector('a[href="mailto:aur.firebrigade@gmail.com"]')).toBeNull();
    expect(view.container.textContent).toContain("१४०");
    expect(view.container.textContent).toContain("विभागप्रमुखांसह ११३ कायम कर्मचारी");
    expect(view.container.textContent).toContain("२७ तात्पुरते/कंत्राटी कर्मचारी");
    expect(view.container.textContent).not.toContain("११२");
    expect(rightColumn?.textContent).toContain("कार्यरत अग्निशमन केंद्रे");
    expect(rightColumn?.textContent).toContain("अद्याप कार्यरत नाहीत");
    expect(rightColumn?.textContent).toContain("३,४५० इमारती");
    expect(profileColumn?.children[1]?.contains(contactHeading)).toBe(true);
    expect(profileCard?.querySelector('a[href="mailto:aur.firebrigade@gmail.com"]')).toBeNull();
    expect(contactHeading.parentElement?.textContent).toContain("०२४०-२३३४०००");
    expect(view.container.textContent).not.toContain("8689888190");
    expect(contactHeading.parentElement?.textContent).not.toContain("431001");
    expect(rightColumn?.textContent).not.toContain("aur.firebrigade@gmail.com");
  });

  it("keeps the Library HOD mobile private and displays Library information and mapped documents", () => {
    const view = renderInSite(
      <MemoryRouter initialEntries={["/departments/library"]}>
        <Routes>
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    const officerHeading = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" });
    const profileColumn = officerHeading.parentElement?.parentElement;
    const profileCard = profileColumn?.children[0];
    const layoutGrid = profileColumn?.parentElement;
    const rightColumn = layoutGrid?.children[1];
    const staffSection = layoutGrid?.nextElementSibling;
    const documentsHeading = [...view.container.querySelectorAll("h3")].find(
      (heading) => heading.textContent === "संबंधित दस्तऐवज",
    );

    expect(view.getByText("श्रीमती अपर्णा थेटे")).toBeInTheDocument();
    expect(view.container.textContent).toContain("५");
    expect(profileCard?.textContent).toContain("ई-गव्हर्नन्स व ई-निविदा");
    expect(profileCard?.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(profileColumn?.children).toHaveLength(1);
    expect(view.container.textContent).not.toContain("9096549990");
    expect(rightColumn?.textContent).toContain("मुख्य वाचनालय खडकेश्वर");
    expect(rightColumn?.textContent).toContain("पुस्तकांची देवाणघेवाण");
    expect(rightColumn?.textContent).toContain("२ मंजूर पदे");
    expect(staffSection?.textContent).toContain("श्रीमती समता शिवाजीराव वांगे-लोंढे");
    expect(staffSection?.textContent).toContain("श्री देवदत्त वि. महाजन");
    expect(view.getByRole("heading", { level: 3, name: "वाचनालय कर्मचारी" })).toBeInTheDocument();
    expect(staffSection?.textContent).not.toContain("स्रोत दस्तऐवजात या दोन अधिकाऱ्यांची नावे आहेत");
    expect(view.container.textContent).not.toContain("वाचनालयाच्या स्रोत दस्तऐवजात विभागासाठी स्वतंत्र ई-मेल");
    expect(staffSection?.textContent).not.toContain("9096549990");
    expect(staffSection?.contains(documentsHeading ?? null)).toBe(false);
    expect(view.container.textContent).toContain("library.pdf");
    expect(libraryDocuments).toHaveLength(1);
  });

  it("shows Audit Department contacts below the profile and renders the source information", async () => {
    const view = renderInSite(
      <MemoryRouter initialEntries={["/departments/audit-department"]}>
        <EnglishLanguageButton />
        <Routes>
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    const officerHeading = view.getByRole("heading", { level: 3, name: "अधिकारी कक्ष" });
    const profileColumn = officerHeading.parentElement?.parentElement;
    const contactHeading = view.getByRole("heading", { level: 3, name: "विभाग संपर्क" });
    const profileCard = profileColumn?.children[0];

    expect(view.getByText("श्री. शिवाजी बाजीराव नाईकवाडे")).toBeInTheDocument();
    expect(profileCard?.querySelector("img")).toHaveAttribute("src", expect.stringContaining("shivaji-naikwade"));
    expect(profileColumn?.children[1]?.contains(contactHeading)).toBe(true);
    expect(view.container.querySelector('a[href="mailto:ca@chhsambhajinagarmc.org"]')).toBeInTheDocument();
    expect(view.container.querySelector('a[href="tel:02402333536;ext=228"]')).toHaveTextContent("०२४० २३३३५३६–४० (विस्तार २२८)");
    expect(view.container.querySelector('a[href="tel:9421431518"]')).toHaveTextContent("९४२१४३१५१८");
    expect(view.container.textContent).toContain("एकूण कर्मचारी");
    expect(view.container.textContent).toContain("११ वर्ग ३ कर्मचारी आणि २ वर्ग ४ कर्मचारी");
    expect(view.container.textContent).toContain("विद्युत विभाग आणि यांत्रिकी (वाहने) विभागाचे लेखापरीक्षण सुरू आहे");
    expect(view.container.textContent).toContain("audit");

    await act(async () => {
      fireEvent.click(view.getByRole("button", { name: "English" }));
    });
    expect(view.getByText("Mr. Shivaji Bajirao Naikwade")).toBeInTheDocument();
    expect(view.container.textContent).toContain("Established in 1982");
    expect(view.container.textContent).toContain("11 Class III employees and 2 Class IV employees.");
    expect(view.container.textContent).toContain("audits of the Electrical Department and Mechanical (Vehicles) Department are in progress");
    expect(view.getByRole("heading", { name: "Department Contact" })).toBeInTheDocument();
  });

});
