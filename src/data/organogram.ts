import amolYedagePhoto from "@/assets/leadership/shri_amol_sir.png";
import ranjitPatilPhoto from "@/assets/leadership/organogram/ranjit-patil.jpg";
import kalpitaPimplePhoto from "@/assets/leadership/organogram/kalpita-pimple.jpg";
import santoshWahulePhoto from "@/assets/leadership/organogram/santosh-wahule.jpg";
import ujwalaBhamarePhoto from "@/assets/leadership/organogram/ujwala-bhamare.jpg";
import vikasNawalePhoto from "@/assets/leadership/organogram/vikas-nawale.jpg";
import aparnaThetePhoto from "@/assets/leadership/organogram/aparna-thete.jpg";
import savitaSonewanePhoto from "@/assets/leadership/organogram/savita-sonewane.jpg";
import vijayPatilPhoto from "@/assets/leadership/organogram/vijay-patil.jpg";
import rahulSurgawanshiPhoto from "@/assets/leadership/organogram/rahul-surgawanshi.jpg";
import kaustubhBhavePhoto from "@/assets/leadership/organogram/kaustubh-bhave.jpg";
import abhayPramanikPhoto from "@/assets/leadership/organogram/abhay-pramanik.jpg";
import balasahebShirsathPhoto from "@/assets/leadership/organogram/balasaheb-shirsath.jpg";
import amolKulkarniPhoto from "@/assets/leadership/organogram/amol-kulkarni.jpg";
import ankushPandharePhoto from "@/assets/leadership/organogram/ankush-pandhare.jpg";
import sanjayKoltePhoto from "@/assets/leadership/organogram/sanjay-kolte.jpg";
import sanjayKombdePhoto from "@/assets/leadership/organogram/sanjay-kombde.jpg";
import shivajiNaikwadePhoto from "@/assets/leadership/organogram/shivaji-naikwade.jpg";
import nandkishorBhombePhoto from "@/assets/leadership/organogram/nandkishor-bhombe.jpg";
import sachinWalkarPhoto from "@/assets/leadership/organogram/sachin-walkar.jpg";
import anilTanpurePhoto from "@/assets/leadership/organogram/anil-tanpure.jpg";
import vijayGoreEngineerPhoto from "@/assets/leadership/organogram/vijay-gore-engineer.jpg";
import vasantBhogePhoto from "@/assets/leadership/organogram/vasant-bhoge.jpg";

/**
 * Published CSMC organogram records.
 *
 * The public chart keeps the existing row order. Personnel and designations
 * are updated only where the CSMC Work Distribution Order dated 03/09/2026
 * clearly identifies the current officer for that post.
 *
 * Records with status "archived" stay in this list for a future CMS, and are
 * not shown on the public page.
 */
export type OrganogramStatus = "active" | "archived";

export interface OrganogramPerson {
  id: string;
  name: string;
  nameMr?: string;
  designation: string;
  designationMr?: string;
  department?: string;
  departmentMr?: string;
  photo?: string;
  /** Public contact number already printed on the previous organogram. */
  phone?: string;
  /** Reporting relationship when the order or the existing chart establishes one. */
  parentId?: string;
  level: number;
  order: number;
  group: string;
  status: OrganogramStatus;
  /** True only when the 03/09/2026 order confirms this person and designation. */
  verified: boolean;
  source?: string;
  sourceDate?: string;
  effectiveFrom?: string;
  effectiveTo?: string;
}

export const ORGANOGRAM_SOURCE = "CSMC Work Distribution Order 03/09/2026";
export const ORGANOGRAM_SOURCE_DATE = "2026-09-03";

const confirmed = {
  verified: true as const,
  source: ORGANOGRAM_SOURCE,
  sourceDate: ORGANOGRAM_SOURCE_DATE,
  effectiveFrom: ORGANOGRAM_SOURCE_DATE,
};

export const ORGANOGRAM_PEOPLE: OrganogramPerson[] = [
  {
    id: "amol-yedage",
    name: "Shri Amol Yedage, IAS",
    nameMr: "श्री अमोल येडगे, भा.प्र.से.",
    designation: "Hon. Municipal Commissioner",
    designationMr: "आयुक्त",
    photo: amolYedagePhoto,
    level: 1,
    order: 1,
    group: "commissioner",
    status: "active",
    ...confirmed,
  },
  {
    id: "ranjit-patil",
    name: "Shri Ranjit A. Patil",
    nameMr: "श्री रणजीत आ. पाटील",
    designation: "Additional Commissioner-1",
    photo: ranjitPatilPhoto,
    designationMr: "अतिरिक्त आयुक्त-1",
    phone: "9923123144",
    parentId: "amol-yedage",
    level: 2,
    order: 1,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "kalpita-pimple",
    name: "Smt. Kalpita Pimple",
    nameMr: "श्रीमती कल्पिता पिंपळे",
    designation: "Additional Commissioner-2",
    photo: kalpitaPimplePhoto,
    designationMr: "अतिरिक्त आयुक्त-2",
    phone: "9855512635",
    parentId: "amol-yedage",
    level: 2,
    order: 2,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "santosh-wahule",
    name: "Shri Santosh Wahule",
    nameMr: "श्री संतोष वाहुले",
    designation: "Chief Accounts and Finance Officer and Encroachment Control Officer",
    photo: santoshWahulePhoto,
    designationMr: "मुख्य लेखा व वित्त अधिकारी तथा अतिक्रमण नियंत्रण अधिकारी",
    phone: "9922354478",
    parentId: "amol-yedage",
    level: 2,
    order: 3,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "shivaji-naikwade",
    name: "Shri Shivaji Naikwade",
    nameMr: "श्री शिवाजी नाईकवाडे",
    photo: shivajiNaikwadePhoto,
    designation: "Chief Auditor",
    designationMr: "मुख्य लेखापरीक्षक",
    phone: "9421431018",
    parentId: "amol-yedage",
    level: 2,
    order: 4,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "sanjay-kombde",
    name: "Shri Sanjay Kombde",
    nameMr: "श्री संजय कोंबडे",
    photo: sanjayKombdePhoto,
    designation: "Executive Engineer and In-charge City Engineer",
    designationMr: "कार्यकारी अभियंता तथा प्रभारी शहर अभियंता",
    phone: "9764999441",
    parentId: "amol-yedage",
    level: 2,
    order: 5,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "dipali-patil",
    name: "Smt. Dipali Patil",
    nameMr: "श्रीमती दिपाली पाटील",
    designation: "Deputy Director, Town Planning",
    designationMr: "उपसंचालक, नगररचना",
    parentId: "amol-yedage",
    level: 2,
    order: 6,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "manoj-garje",
    name: "Shri Manoj Garje",
    designation: "Deputy Director, Town Planning",
    designationMr: "उपसंचालक, नगररचना",
    phone: "9423452577",
    level: 2,
    order: 6,
    group: "senior",
    status: "archived",
    verified: false,
    source: ORGANOGRAM_SOURCE,
    sourceDate: ORGANOGRAM_SOURCE_DATE,
  },
  {
    id: "ujwala-bhamare",
    name: "Dr. Ujwala Bhamare",
    nameMr: "डॉ. उज्वला भामरे",
    designation: "Acting Medical Health Officer",
    photo: ujwalaBhamarePhoto,
    designationMr: "प्र. वैद्यकीय आरोग्य अधिकारी",
    parentId: "amol-yedage",
    level: 2,
    order: 7,
    group: "senior",
    status: "active",
    ...confirmed,
  },
  {
    id: "paras-mandkecha",
    name: "Dr. Paras Mandkecha",
    designation: "Medical Health Officer",
    designationMr: "वैद्यकीय आरोग्य अधिकारी",
    phone: "9822057601",
    level: 2,
    order: 7,
    group: "senior",
    status: "archived",
    verified: false,
    source: ORGANOGRAM_SOURCE,
    sourceDate: ORGANOGRAM_SOURCE_DATE,
  },
  {
    id: "vikas-nawale",
    name: "Shri Vikas Nawale",
    nameMr: "श्री विकास नवाळे",
    designation: "Deputy Municipal Commissioner",
    photo: vikasNawalePhoto,
    designationMr: "उप आयुक्त",
    department: "Labour; Tax",
    departmentMr: "कामगार विभाग; कर विभाग",
    phone: "9822768926",
    level: 3,
    order: 1,
    group: "deputies",
    status: "active",
    ...confirmed,
  },
  {
    id: "aparna-thete",
    name: "Smt. Aparna Thete",
    nameMr: "श्रीमती अपर्णा थेटे",
    designation: "Deputy Municipal Commissioner",
    photo: aparnaThetePhoto,
    designationMr: "उप आयुक्त",
    phone: "9096349990",
    parentId: "kalpita-pimple",
    level: 3,
    order: 2,
    group: "deputies",
    status: "active",
    ...confirmed,
  },
  {
    id: "rahul-surgawanshi",
    name: "Shri Rahul Suryavanshi",
    nameMr: "श्री राहुल सूर्यवंशी",
    photo: rahulSurgawanshiPhoto,
    designation: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: "9352876304",
    level: 3,
    order: 3,
    group: "deputies",
    status: "active",
    verified: false,
  },
  {
    id: "ankush-pandhare",
    name: "Shri Ankush Pandhare",
    nameMr: "श्री अंकुश पांढरे",
    photo: ankushPandharePhoto,
    designation: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: "9889800190",
    parentId: "ranjit-patil",
    level: 3,
    order: 4,
    group: "deputies",
    status: "active",
    ...confirmed,
  },
  {
    id: "nandkishor-bhombe",
    name: "Shri Nandkishor Bhombe",
    nameMr: "श्री नंदकिशोर भोंबे",
    photo: nandkishorBhombePhoto,
    designation: "Deputy Municipal Commissioner and Acting Municipal Secretary",
    designationMr: "उप आयुक्त तथा प्र. महापालिका सचिव",
    phone: "8796142675",
    level: 3,
    order: 5,
    group: "deputies",
    status: "active",
    ...confirmed,
  },
  {
    id: "lakhmichand-chavan",
    name: "Shri Lakhmichand Chavan",
    designation: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: "8454040121",
    level: 4,
    order: 1,
    group: "deputies-and-garden",
    status: "archived",
    verified: false,
  },
  {
    id: "abhay-pramanik",
    name: "Shri Abhay Pramanik",
    nameMr: "श्री अभय प्रामाणिक",
    photo: abhayPramanikPhoto,
    designation: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    department: "General Administration and Records",
    departmentMr: "सामान्य प्रशासन व अभिलेख विभाग",
    phone: "8208586136",
    parentId: "ranjit-patil",
    level: 4,
    order: 1,
    group: "deputies-and-garden",
    status: "active",
    ...confirmed,
  },
  {
    id: "savita-sonewane",
    name: "Smt. Savita Sonewane",
    nameMr: "श्रीमती सविता सोनवणे",
    designation: "Deputy Municipal Commissioner and Head of Encroachment Department",
    photo: savitaSonewanePhoto,
    designationMr: "उप आयुक्त तथा अतिक्रमण विभाग प्रमुख",
    phone: "9370665021",
    level: 4,
    order: 2,
    group: "deputies-and-garden",
    status: "active",
    ...confirmed,
  },
  {
    id: "vijay-patil",
    name: "Shri Vijay Patil",
    nameMr: "श्री विजय पाटील",
    designation: "Chief Garden Officer",
    photo: vijayPatilPhoto,
    designationMr: "मुख्य उद्यान अधिकारी",
    phone: "9404000054",
    parentId: "ranjit-patil",
    level: 4,
    order: 3,
    group: "deputies-and-garden",
    status: "active",
    ...confirmed,
  },
  {
    id: "anil-tanpure",
    name: "Shri Anil Tanpure",
    photo: anilTanpurePhoto,
    designation: "City Engineer",
    designationMr: "शहर अभियंता",
    phone: "9764999932",
    level: 5,
    order: 1,
    group: "engineers",
    status: "archived",
    verified: false,
    source: ORGANOGRAM_SOURCE,
    sourceDate: ORGANOGRAM_SOURCE_DATE,
    effectiveTo: ORGANOGRAM_SOURCE_DATE,
  },
  {
    id: "vijay-gore-engineer",
    name: "Shri Vijay Gore",
    nameMr: "श्री विजय गोरे",
    photo: vijayGoreEngineerPhoto,
    designation: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: "9764999931",
    level: 5,
    order: 2,
    group: "engineers",
    status: "active",
    verified: false,
  },
  {
    id: "vasant-bhoge",
    name: "Shri Vasant R. Bhoge",
    nameMr: "श्री वसंत आर भोये",
    photo: vasantBhogePhoto,
    designation: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: "9764999580",
    level: 5,
    order: 3,
    group: "engineers",
    status: "active",
    verified: false,
  },
  {
    id: "balasaheb-shirsath",
    name: "Shri Balasaheb Shirsath",
    nameMr: "श्री बाळासाहेब शिरसाट",
    photo: balasahebShirsathPhoto,
    designation: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    department: "Roads",
    departmentMr: "रस्ते विभाग",
    phone: "9423355137",
    parentId: "sanjay-kombde",
    level: 5,
    order: 4,
    group: "engineers",
    status: "active",
    ...confirmed,
  },
  {
    id: "amol-kulkarni",
    name: "Shri Amol Kulkarni",
    nameMr: "श्री अमोल कुलकर्णी",
    photo: amolKulkarniPhoto,
    designation: "Executive Engineer and In-charge Additional City Engineer",
    designationMr: "कार्यकारी अभियंता तथा प्रभारी अतिरिक्त शहर अभियंता",
    phone: "9764999700",
    level: 6,
    order: 1,
    group: "officers",
    status: "active",
    ...confirmed,
  },
  {
    id: "sachin-walkar",
    name: "Shri Sachin Walkar",
    nameMr: "श्री सचिन वाईकर",
    photo: sachinWalkarPhoto,
    designation: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: "9764999864",
    level: 6,
    order: 2,
    group: "officers",
    status: "active",
    ...confirmed,
  },
  {
    id: "kaustubh-bhave",
    name: "Shri Kaustubh Bhave",
    nameMr: "श्री कौस्तुभ भावे",
    photo: kaustubhBhavePhoto,
    designation: "Town Planner",
    designationMr: "नगर रचनाकार",
    department: "Town Planning",
    departmentMr: "नगररचना विभाग",
    phone: "9420601936",
    parentId: "dipali-patil",
    level: 6,
    order: 3,
    group: "officers",
    status: "active",
    ...confirmed,
  },
  {
    id: "sanjay-kolte",
    name: "Shri Sanjay Kolte",
    nameMr: "श्री संजय कोलते",
    photo: sanjayKoltePhoto,
    designation: "Acting Accounts Officer",
    designationMr: "प्र. लेखाधिकारी",
    parentId: "santosh-wahule",
    level: 6,
    order: 4,
    group: "officers",
    status: "active",
    ...confirmed,
  },
  {
    id: "vijay-gore-accounts",
    name: "Shri Vijay Gore",
    designation: "Account Officer",
    designationMr: "लेखाधिकारी",
    level: 6,
    order: 4,
    group: "officers",
    status: "archived",
    verified: false,
    source: ORGANOGRAM_SOURCE,
    sourceDate: ORGANOGRAM_SOURCE_DATE,
  },
];
