/** PDFs in public/documents/Municipal Document Repository/Education Department/. A year is set only when the filename already states one. */
export type EducationDocument = {
  id: string;
  file: string;
  year?: string;
};

export const EDUCATION_DOCUMENTS_FOLDER = [
  "Municipal Document Repository",
  "Education Department",
] as const;

export const educationDocuments: EducationDocument[] = [
  { id: "draft-seniority-list-of-co-teachers", file: "Draft_seniority_list_of_co-teachers.pdf" },
  { id: "draft-seniority-list-of-principals", file: "Draft_Seniority_List_of_Principals.pdf" },
  { id: "edu-development-officer-seniority-list-2024", file: "Edu__deolapment_officer_seniority_list-2024.pdf", year: "2024" },
  { id: "education-information-06", file: "Education_informtion__06.pdf" },
  { id: "head-master-seniority-list-2024", file: "Head_Master_seniority_list-2024.pdf", year: "2024" },
  { id: "inter-district-transfer-marathi", file: "Inter_District_Transfer_Marathi_Medium_List.pdf" },
  { id: "inter-district-transfer-urdu", file: "Inter_District_Transfer_Urdu_Medium_List.pdf" },
  { id: "manapa-bhag-1", file: "manapa-Bhag_-1.pdf" },
  { id: "manapa-bhag-2", file: "manapa-Bhag-2.pdf" },
  { id: "manapa-bhag-3", file: "manapa-Bhag-3.pdf" },
  { id: "manapa-bhag-4", file: "manapa-Bhag-4.pdf" },
  { id: "manapa-bhag-5", file: "manapa-_Bhag-5.pdf" },
  { id: "manapa-bhag-6", file: "manapa-Bhag-6.pdf" },
  { id: "schoolwise-students-list", file: "Schoolwise_Students_List.pdf" },
  { id: "summer-camp-planning", file: "Summer_Camp_Planning_final_-_PPT_compressed.pdf" },
  { id: "teacher-seniority-list-2024", file: "Teacher_Seniority_Lust-2024_compressed.pdf", year: "2024" },
];
