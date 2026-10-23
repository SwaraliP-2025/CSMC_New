import { describe, expect, it } from "vitest";
import { CITY_ENGINEER_OUTSOURCED_EMPLOYEES, CITY_ENGINEER_PERMANENT_EMPLOYEES } from "@/data/cityEngineerDepartment";
import { CULTURAL_DEPARTMENT_EMAIL, FIRE_DEPARTMENT_STAFFING } from "@/data/culturalFireDepartments";
import { IT_DEPARTMENT_OFFICERS } from "@/data/informationTechnologyDepartment";
import { DEPARTMENTS } from "@/pages/site/DepartmentDetail";

describe("department headcounts and staff lists", () => {
  it("counts the IT department head once and keeps her separate from the contact list", () => {
    const department = DEPARTMENTS.find(({ slug }) => slug === "information-technology");

    expect(department?.employeeCount).toBe(5);
    expect(department?.employeeCountDetailsEn).toBeUndefined();
    expect(department?.employeeCountDetailsMr).toBeUndefined();
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
});
