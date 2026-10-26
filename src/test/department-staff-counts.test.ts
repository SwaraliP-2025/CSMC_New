import { describe, expect, it } from "vitest";
import { CITY_ENGINEER_OUTSOURCED_EMPLOYEES, CITY_ENGINEER_PERMANENT_EMPLOYEES } from "@/data/cityEngineerDepartment";
import { CULTURAL_DEPARTMENT_EMAIL, FIRE_DEPARTMENT_STAFFING } from "@/data/culturalFireDepartments";
import { LIBRARY_DEPARTMENT_STAFF } from "@/data/libraryDepartment";
import { IT_DEPARTMENT_OFFICERS } from "@/data/informationTechnologyDepartment";
import { DEPARTMENTS } from "@/pages/site/DepartmentDetail";

describe("department headcounts and staff lists", () => {
  it("counts the IT department head once and keeps her separate from the contact list", () => {
    const department = DEPARTMENTS.find(({ slug }) => slug === "information-technology");

    expect(department?.employeeCount).toBe(5);
    expect(department?.employeeCountDetailsEn).toBeUndefined();
    expect(department?.employeeCountDetailsMr).toBeUndefined();
    expect(department?.headEn).toBe("Smt. Aparna Thete");
    expect(department?.designationEn).toBe("Deputy Commissioner & Head of Section (E-Gov. & E-Tender)");
    expect(department?.email).toBe("compdept@gmail.com");
    expect(IT_DEPARTMENT_OFFICERS).toHaveLength(1);
    expect(IT_DEPARTMENT_OFFICERS.map(({ nameEn }) => nameEn)).not.toContain("Smt. Aparna Thete");
  });

  it("keeps the City Engineer in the ten-person headcount, not in the six-person permanent staff list", () => {
    const department = DEPARTMENTS.find(({ slug }) => slug === "city-engineer");

    expect(department?.employeeCount).toBe(10);
    expect(department?.employeeCountDetailsEn).toContain("7 permanent employees, including the City Engineer");
    expect(CITY_ENGINEER_PERMANENT_EMPLOYEES).toHaveLength(6);
    expect(CITY_ENGINEER_OUTSOURCED_EMPLOYEES).toHaveLength(3);
    expect(CITY_ENGINEER_PERMANENT_EMPLOYEES.some(({ id }) => id === "city-engineer")).toBe(false);
  });

  it("counts the Cultural Department head once in its four-person total", () => {
    const department = DEPARTMENTS.find(({ slug }) => slug === "cultural");

    expect(department?.employeeCount).toBe(4);
    expect(department?.employeeCountDetailsEn).toBeUndefined();
    expect(department?.employeeCountDetailsMr).toBeUndefined();
    expect(department?.headEn).toBe("Dr. Ankush Pandhare");
    expect(CULTURAL_DEPARTMENT_EMAIL.toLowerCase()).toBe("cultural@chhsambhajinagarmc.org");
  });

  it("counts 140 Fire Department employees with the HOD included in permanent staff", () => {
    const department = DEPARTMENTS.find(({ slug }) => slug === "fire-disaster-management");

    expect(department?.employeeCount).toBe(140);
    expect(department?.employeeCountDetailsEn).toBe(
      "113 permanent employees (including the Head of Department) and 27 temporary/contractual employees.",
    );
    expect(department?.employeeCountDetailsMr).toBe(
      "विभागप्रमुखांसह 113 कायम कर्मचारी आणि 27 तात्पुरते/कंत्राटी कर्मचारी.",
    );
    expect(department?.employeeCountDetailsEn).not.toMatch(/source PDF|on-duty|discrepancy|sanctioned|verification/i);
    expect(department?.employeeCountDetailsMr).toContain("27 तात्पुरते/कंत्राटी कर्मचारी");
    expect(FIRE_DEPARTMENT_STAFFING).toMatchObject({
      requestedPermanentIncludingHead: 113,
      requestedContractual: 27,
      sourcePermanentOnDuty: 27,
      sourceContractualOnDuty: 112,
      sanctionedPositions: 359,
    });
  });

  it("records five Library Department employees without fabricating the incomplete staff roster", () => {
    const library = DEPARTMENTS.find(({ slug }) => slug === "library");
    const informationTechnology = DEPARTMENTS.find(({ slug }) => slug === "information-technology");

    expect(library?.employeeCount).toBe(5);
    expect(library?.headEn).toBe("Smt. Aparna Thete");
    expect(library?.designationEn).toBe("Deputy Commissioner & Cell Head (E-Gov & E-Tender)");
    expect(library?.email).toBe("");
    expect(library?.addressEn).toBe("");
    expect(LIBRARY_DEPARTMENT_STAFF).toHaveLength(2);
    expect(LIBRARY_DEPARTMENT_STAFF.map(({ nameEn }) => nameEn)).toEqual([
      "Smt. Samata Shivajirao Wange-Londhe",
      "Shri Devdutta V. Mahajan",
    ]);
    expect(LIBRARY_DEPARTMENT_STAFF.map(({ nameEn }) => nameEn)).not.toContain("Smt. Aparna Thete");

    expect(informationTechnology?.employeeCount).toBe(5);
    expect(informationTechnology?.email).toBe("compdept@gmail.com");
    expect(informationTechnology?.designationEn).toBe("Deputy Commissioner & Head of Section (E-Gov. & E-Tender)");
  });
});
