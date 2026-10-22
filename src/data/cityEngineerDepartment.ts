export type CityEngineerEmployee = {
  id: string;
  nameEn: string;
  nameMr: string;
  designationEn: string;
  designationMr: string;
  natureOfWorkEn: string;
  natureOfWorkMr: string;
  contactNumber: string;
};

export const CITY_ENGINEER_PERMANENT_EMPLOYEES: CityEngineerEmployee[] = [
  {
    id: "shilpa-pujari",
    nameEn: "Mrs. Shilpa Vinay Pujari",
    nameMr: "श्रीमती शिल्पा पुजारी",
    designationEn: "Superintendent",
    designationMr: "अधीक्षक",
    natureOfWorkEn:
      "Scrutinizing and verifying e-Office files, including budget provisions, financial records and payment claims, before submission to the City Engineer; maintaining e-Office digital records; supervising departmental staff and assigned work; and carrying out duties directed by the City Engineer.",
    natureOfWorkMr:
      "ई-ऑफिसमधील अर्थसंकल्पीय तरतुदी, आर्थिक नोंदी व देयकांच्या नोंदी तपासून शहर अभियंत्यांकडे सादर करणे; ई-ऑफिसमधील डिजिटल नोंदी ठेवणे; विभागातील कर्मचाऱ्यांवर देखरेख ठेवणे; तसेच शहर अभियंत्यांनी सोपविलेली कामे करणे.",
    contactNumber: "9822170276",
  },
  {
    id: "sanjay-kanale",
    nameEn: "Mr. Sanjay Prabhakar Kapale",
    nameMr: "डॉ. संजय प्रभाकर कपाळे",
    designationEn: "Tracer",
    designationMr: "अनुरेखक",
    natureOfWorkEn:
      "Supporting consistent, accurate and systematic planning and execution of the department's development works; using the GIS platform to streamline work and reduce delays; handling online work; and carrying out duties assigned by the City Engineer.",
    natureOfWorkMr:
      "विकासकामांच्या नियोजनात आणि अंमलबजावणीत सुसंगती व अचूकता राखण्यास मदत करणे; GIS प्लॅटफॉर्मचा वापर करून कामे सुलभ करणे व विलंब कमी करणे; ऑनलाइन कामे करणे; तसेच शहर अभियंत्यांनी सोपविलेली कामे करणे.",
    contactNumber: "9422712301",
  },
  {
    id: "pooja-bhanve",
    nameEn: "Ms. Pooja Bhonve",
    nameMr: "कु. पूजा भांवे",
    designationEn: "Junior Engineer",
    designationMr: "कनिष्ठ अभियंता",
    natureOfWorkEn:
      "Scrutinizing proposals under the Self-Development (Swayam Vikas) scheme and processing them in accordance with the prescribed rules; and carrying out duties assigned by the City Engineer.",
    natureOfWorkMr:
      "स्वयं विकास (Self Development) योजनेअंतर्गत प्राप्त प्रस्तावांची छाननी करून नियमांनुसार कार्यवाही करणे; तसेच शहर अभियंत्यांनी सोपविलेली कामे करणे.",
    contactNumber: "9767712420",
  },
  {
    id: "hemant-deore",
    nameEn: "Mr. Hemant Ramsing Deore",
    nameMr: "श्री हेमंत रामसिंग देवरे",
    designationEn: "Senior Clerk",
    designationMr: "वरिष्ठ लिपिक",
    natureOfWorkEn:
      "Managing registration and inward/outward processing of Executive Engineer department files in e-Office; handling Right to Information Act, 2005 applications; maintaining departmental records; compiling information for the City Engineer's department and submitting it to the Superintendent; and carrying out assigned duties.",
    natureOfWorkMr:
      "ई-ऑफिसमध्ये कार्यकारी अभियंता विभागाच्या संचिका नोंदणी व आवक-जावक हाताळणे; माहितीचा अधिकार अधिनियम, २००५ अंतर्गत प्राप्त अर्ज हाताळणे; विभागीय अभिलेखांची नोंद ठेवणे; माहिती संकलित करून अधीक्षकांकडे सादर करणे; तसेच शहर अभियंत्यांनी सोपविलेली कामे करणे.",
    contactNumber: "9371717115",
  },
  {
    id: "mangesh-yadav",
    nameEn: "Mr. Mangesh Mahendra Yadav",
    nameMr: "श्री मंगेश महेंद्र यादव",
    designationEn: "Senior Clerk",
    designationMr: "वरिष्ठ लिपिक",
    natureOfWorkEn:
      "Managing daily correspondence and e-Office files; compiling information and preparing files; requisitioning materials from the Stores Department and recording received materials; handling online e-Office work; and carrying out duties assigned by the City Engineer.",
    natureOfWorkMr:
      "दैनंदिन टपाल व ई-ऑफिसमधील संचिका हाताळणे; माहिती संकलित करून संचिका तयार करणे; भांडार विभागाकडून साहित्याची मागणी व प्राप्त साहित्याच्या नोंदी ठेवणे; ई-ऑफिसमधील ऑनलाइन कामे करणे; तसेच शहर अभियंत्यांनी सोपविलेली कामे करणे.",
    contactNumber: "9404988468",
  },
  {
    id: "shaikh-hameed-rustum",
    nameEn: "Mr. Shaikh Hameed Shaikh Rustum",
    nameMr: "श्री शेख हमीद शेख रुस्तुम",
    designationEn: "Peon",
    designationMr: "शिपाई",
    natureOfWorkEn:
      "Opening the office, performing cleaning and sanitation-related duties in the City Engineer's office, and carrying out other tasks as directed by the City Engineer.",
    natureOfWorkMr:
      "कार्यालय उघडणे, शहर अभियंत्यांच्या कार्यालयातील स्वच्छतेची कामे करणे; तसेच शहर अभियंत्यांनी निर्देशित केलेली इतर कामे करणे.",
    contactNumber: "0881838582",
  },
];

export const CITY_ENGINEER_OUTSOURCED_EMPLOYEES: CityEngineerEmployee[] = [
  {
    id: "pawan-rahimut",
    nameEn: "Mr. Pawan Datta Rahimule",
    nameMr: "श्री पवन दत्ता रायमुळे",
    designationEn: "Contractual Engineer (Electrical)",
    designationMr: "कंत्राटी अभियंता, विद्युत",
    natureOfWorkEn:
      "Scrutinizing electrical proposals under the Self-Development and group housing schemes; conducting site inspections for street-lighting work and reporting to superiors; and performing other assigned tasks.",
    natureOfWorkMr:
      "स्वयं विकास आणि समूह गृह योजना अंतर्गत विद्युत विषयक प्रस्तावांची छाननी करणे; पथदिव्यांच्या कामांची स्थळ पाहणी करून वरिष्ठांना अहवाल सादर करणे; तसेच सोपविलेली इतर कामे करणे.",
    contactNumber: "8208140848",
  },
  {
    id: "shaikh-abdul-alim",
    nameEn: "Mr. Shaikh Abdul Alim Shaikh Abdul Gani",
    nameMr: "श्री शेख अब्दुल अलीम शेख अब्दुल गणी",
    designationEn: "Contractual Computer Operator",
    designationMr: "कंत्राटी संगणक ऑपरेटर",
    natureOfWorkEn:
      "Handling computer-related office operations; compiling and consolidating information from subdivisions; preparing meeting minutes and PowerPoint presentations; and managing e-Office tasks for the City Engineer.",
    natureOfWorkMr:
      "कार्यालयीन संगणकीय कामकाज करणे; उपविभागांकडून मिळालेली माहिती संकलित करून एकत्रित करणे; बैठकीचे इतिवृत्त व सादरीकरणे तयार करणे; तसेच शहर अभियंत्यांची ई-ऑफिसची कामे हाताळणे.",
    contactNumber: "9046014302",
  },
  {
    id: "prakash-kshirsagar",
    nameEn: "Mr. Prakash Kshirsagar",
    nameMr: "श्री प्रकाश क्षिरसागर",
    designationEn: "Contractual Peon",
    designationMr: "कंत्राटी शिपाई",
    natureOfWorkEn:
      "Performing cleaning duties in the department, obtaining materials from the Stores Department, maintaining the Superintendent's office, and carrying out other tasks as directed by the City Engineer.",
    natureOfWorkMr:
      "विभागातील स्वच्छतेची कामे करणे; भांडार विभागातून साहित्य आणणे; अधीक्षकांचे कार्यालय सांभाळणे; तसेच शहर अभियंत्यांनी निर्देशित केलेली इतर कामे करणे.",
    contactNumber: "9359384975",
  },
];

export const CITY_ENGINEER_DEPARTMENT_HEADINGS = {
  permanent: {
    en: "Other Permanent Employees (City Engineer shown above)",
    mr: "इतर कायम कर्मचारी (शहर अभियंता वरील प्रोफाइलमध्ये)",
  },
  outsourced: { en: "Outsourced Employees", mr: "बाह्यस्रोत कर्मचारी" },
  srNo: { en: "Sr. No.", mr: "अ.क्र." },
  name: { en: "Name", mr: "नाव" },
  designation: { en: "Designation", mr: "पद" },
  natureOfWork: { en: "Nature of Work", mr: "कामाचे स्वरूप" },
  contactNumber: { en: "Contact Number", mr: "संपर्क क्रमांक" },
} as const;
