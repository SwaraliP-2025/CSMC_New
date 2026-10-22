/**
 * Information & Technology Department (Computer Section).
 * Source: "Inf_Comp.Sec.For new Web Site.pdf" supplied by the department.
 * English and Marathi text is kept exactly as published, including its spelling and ASCII digits.
 */

export const IT_DEPARTMENT_SLUG = "information-technology";

export const IT_DEPARTMENT_NAME = {
  en: "Information & Technology Department (Computer Section)",
  mr: "माहिती व तंत्रज्ञान विभाग (संगणक कक्ष)",
};

export const IT_DEPARTMENT_INTRODUCTION = {
  en: "The Information & Technology Department looks after the computerization, e-Governance and online services of all departments of the Chhatrapati Sambhajinagar Municipal Corporation. Its main goal is to ensure that all works in the Corporation are completed in a fast, transparent and efficient manner through the use of technology.",
  mr: "माहिती व तंत्रज्ञान विभाग छत्रपती संभाजीनगर महानगरपालिकेच्या सर्व विभागांचे संगणकीकरण, ई-गव्हर्नन्स व ऑनलाईन सेवा यांचे कामकाज पाहतो. तंत्रज्ञानाच्या वापराने महानगरपालिकेतील सर्व कामे जलद, पारदर्शक व कार्यक्षमतेने पुर्णत्वास होणे हे विभागाचे प्रमुख ध्येय आहे.",
};

export const IT_DEPARTMENT_MOTTO = {
  motto: "From Paper to Digital",
  labelEn: "Motto:",
  labelMr: "उद्देश (Motto) :",
  separatorEn: " – ",
  separatorMr: " - ",
  en: "With the help of technology, to deliver all works related to the Municipal Corporation in a fast, transparent and efficient manner, by enhancing the ability of employees to work on computers.",
  mr: "तंत्रज्ञानाच्या साहाय्याने महानगरपालिकेशी संबंधित सर्व कामे जलद, पारदर्शक व कार्यक्षमरीत्या उपलब्ध करून देण्यासाठी कर्मचाऱ्यांमध्ये संगणकावर कामे करण्याची क्षमता वाढविणे.",
};

export type ItOfficer = {
  nameEn: string;
  nameMr: string;
  designationEn: string;
  designationMr: string;
  mobile: string;
  email: string;
};

export const IT_DEPARTMENT_OFFICERS: ItOfficer[] = [
  {
    nameEn: "Shri. Vasiur Rehman Siddiqui",
    nameMr: "श्री. वसिउर रहेमान सिद्दीकी",
    designationEn: "System Manager & Branch Head (E-Tender)",
    designationMr: "सिस्टम मॅनेजर व शाखाप्रमुख (E-Tender)",
    mobile: "9823044474",
    email: "siddiquivasi44744@gmail.com",
  },
];

export type ItFunction = {
  labelEn: string;
  descriptionEn: string;
  /** Separator printed after the English label. Defaults to " : ". */
  separatorEn?: string;
  labelMr: string;
  descriptionMr: string;
};

export const IT_DEPARTMENT_FUNCTIONS: ItFunction[] = [
  {
    labelEn: "e-Office - The State Govt. Software for File Movement",
    separatorEn: "- ",
    descriptionEn: "Responsibility as Admin for e-Office management & All Other work",
    labelMr: "e-Office राज्य शासनाची संचिका बाबत संगणकीय प्रणाली",
    descriptionMr: "Admin म्हणून व्यवस्थापणाची जबाबदारी व याअंतर्गतची सर्व कामे.",
  },
  {
    labelEn: "DSC",
    descriptionEn: "Distribution of Digital Signature Certificates to officers and employees, and related training.",
    labelMr: "DSC",
    descriptionMr: "अधिकारी-कर्मचाऱ्यांना Digital Signature Certificate चे वितरण व त्यासंबंधी प्रशिक्षण.",
  },
  {
    labelEn: "Attendance System",
    descriptionEn: "Improvement and control of the attendance app for officers and employees.",
    labelMr: "हजेरी प्रणाली",
    descriptionMr: "अधिकारी-कर्मचाऱ्यांच्या हजेरी ॲपमध्ये सुधारणा व नियंत्रण.",
  },
  {
    labelEn: "Website",
    descriptionEn: "Uploading information related to various departments on the Corporation’s website.",
    labelMr: "वेबसाईट",
    descriptionMr: "मनपाच्या वेबसाईटवर विविध विभागांशी संबंधित माहिती अपलोड करणे.",
  },
  {
    labelEn: "e-Tender",
    descriptionEn: "All works related to publishing tenders of various departments through the Tender Section.",
    labelMr: "ई-निविदा",
    descriptionMr: "निविदा शाखेमार्फत विविध विभागांच्या निविदा प्रसिद्धीची सर्व कामे.",
  },
  {
    labelEn: "Right to Services (RTS)",
    descriptionEn: "Responsibility for fully implementing the 69 notified services.",
    labelMr: "लोकसेवा हक्क (RTS)",
    descriptionMr: "अधिसूचित 69 सेवा पूर्णतः कार्यान्वित करण्याची जबाबदारी.",
  },
  {
    labelEn: "Grievance Redressal",
    descriptionEn: "Working as Nodal Officer for the Aaple Sarkar and PG Portals.",
    labelMr: "तक्रार निवारण",
    descriptionMr: "आपले सरकार व PG पोर्टलचे नोडल अधिकारी म्हणून कामकाज.",
  },
  {
    labelEn: "Online RTI Portal",
    descriptionEn: "Nodal Officer for the State Government’s Online RTI Portal.",
    labelMr: "Online RTI Portal",
    descriptionMr: "राज्य शासनाच्या Online RTI Portal चे नोडल अधिकारी.",
  },
  {
    labelEn: "Hon. Chief Minister’s Secretariat Cell",
    descriptionEn: "Nodal Officer for grievance redressal.",
    labelMr: "मा. मुख्यमंत्री सचिवालय कक्ष",
    descriptionMr: "तक्रार निवारणासाठी नोडल अधिकारी.",
  },
  {
    labelEn: "Technical Support",
    descriptionEn: "Resolving technical issues of various departments during computerization.",
    labelMr: "तांत्रिक सहाय्य",
    descriptionMr: "विविध विभागांच्या संगणकीकरणादरम्यानच्या तांत्रिक अडचणींचे निराकरण.",
  },
  {
    labelEn: "Computer Supply",
    descriptionEn: "Providing computer systems to departments as required, through the Store Department.",
    labelMr: "संगणक पुरवठा",
    descriptionMr: "विभागांना गरजेनुसार भांडार विभागामार्फत संगणक यंत्रणा पुरवणे.",
  },
  {
    labelEn: "Training",
    descriptionEn: "Providing training on computer systems to employees and conducting examinations.",
    labelMr: "प्रशिक्षण",
    descriptionMr: "कर्मचाऱ्यांना संगणकीय प्रणालीचे प्रशिक्षण देणे व परीक्षा घेणे.",
  },
  {
    labelEn: "Networking",
    descriptionEn: "Computer networking and internet supply, maintenance and repairs.",
    labelMr: "नेटवर्किंग",
    descriptionMr: "संगणकीय नेटवर्किंग व इंटरनेट पुरवठा, देखभाल व दुरुस्ती.",
  },
  {
    labelEn: "CCTV",
    descriptionEn: "Operationalizing CCTV systems, along with their maintenance and repairs.",
    labelMr: "CCTV",
    descriptionMr: "सीसीटीव्ही कार्यान्वित करणे, देखभाल व दुरुस्ती इत्यादी कामे.",
  },
  {
    labelEn: "GIS",
    descriptionEn: "GIS ID Creation works on Google Map for field-level development works.",
    labelMr: "GIS",
    descriptionMr: "विकास कामांतर्गत क्षेत्रीय Google Map वर GIS ID Creation ची कामे.",
  },
  {
    labelEn: "Administrative Works",
    descriptionEn: "Carrying out various works as per administrative orders.",
    labelMr: "प्रशासकीय कामे",
    descriptionMr: "प्रशासकीय आदेशानुसार विविध कामे करणे.",
  },
  {
    labelEn: "e-Governance",
    descriptionEn: "Getting works done by maintaining administrative control across various departments.",
    labelMr: "ई-गव्हर्नन्स",
    descriptionMr: "विविध विभागांमध्ये प्रशासकीय नियंत्रण ठेवून कामे करून घेणे.",
  },
];

/** Top to bottom, as printed in the source. The last level states sanctioned posts, not staff in post. */
export const IT_DEPARTMENT_HIERARCHY: { en: string; mr: string }[] = [
  { en: "Hon. Commissioner", mr: "मा. आयुक्त" },
  { en: "Hon. Additional Commissioner", mr: "मा. अति. आयुक्त" },
  {
    en: "Hon. Deputy Commissioner & Head of Section (E-Gov. & E-Tender)",
    mr: "मा. उपआयुक्त व कक्ष प्रमुख (E-Gov. & E-Tender)",
  },
  { en: "System Manager & Branch Head (E-Tender)", mr: "सिस्टम मॅनेजर व शाखाप्रमुख (E-Tender)" },
  { en: "Clerk – Total Posts: 03", mr: "लिपिक एकूण पदे : 03" },
];

export const IT_DEPARTMENT_HEADINGS = {
  officers: { en: "Employee Contact", mr: "कर्मचारी संपर्क" },
  functions: { en: "Main Functions of the Department", mr: "विभागाची प्रमुख कामे" },
  hierarchy: { en: "Structural Details of the Department", mr: "विभागाचे संरचनात्मक विवरण" },
  introduction: { en: "Introduction", mr: "प्रस्तावना" },
};

export const IT_OFFICER_TABLE_COLUMNS = {
  srNo: { en: "Sr. No.", mr: "अ.क्र." },
  name: { en: "Officer Name", mr: "अधिकाऱ्यांचे नाव" },
  designation: { en: "Designation", mr: "पद" },
  mobile: { en: "Mobile", mr: "मोबाईल" },
  email: { en: "Email", mr: "ईमेल" },
};
