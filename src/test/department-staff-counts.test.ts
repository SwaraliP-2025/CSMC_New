import { describe, expect, it } from "vitest";
import { CITY_ENGINEER_OUTSOURCED_EMPLOYEES, CITY_ENGINEER_PERMANENT_EMPLOYEES } from "@/data/cityEngineerDepartment";
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
});
