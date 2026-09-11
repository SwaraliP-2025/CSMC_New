import sameerImg from "@/assets/leadership/samir-bhaiya-rajurkar.png";

export type MayorRecord = {
  sr: number;
  nameEn: string;
  nameMr: string;
  from: string;
  to: string;
  /** Photo path when available; null is a CMS-ready placeholder. */
  img: string | null;
  current?: boolean;
};

/** Hon'ble Mayors of CSMC, chronological as published on the official list. */
export const MAYORS: MayorRecord[] = [
  { sr: 1, nameEn: "Shantaram Yashwantrao Kale", nameMr: "शांताराम यशवंतराव काळे", from: "17.05.1988", to: "05.07.1989", img: null },
  { sr: 2, nameEn: "Moreshwar Save", nameMr: "मोरेश्वर सावे", from: "05.07.1989", to: "19.05.1990", img: null },
  { sr: 3, nameEn: "Pradip Shivnarayan Jaiswal", nameMr: "प्रदीप शिवनारायण जायस्वाल", from: "19.05.1990", to: "13.05.1991", img: null },
  { sr: 4, nameEn: "Manmohansingh Karamsingh Oberai", nameMr: "मनमोहनसिंग करमसिंह ओबेराय", from: "13.05.1991", to: "28.05.1992", img: null },
  { sr: 5, nameEn: "Yadav Ashok Sayanna", nameMr: "यादव अशोक सायन्ना", from: "28.05.1992", to: "30.04.1993", img: null },
  { sr: 6, nameEn: "Sunandatai Uttamrao Kolhe", nameMr: "सुनंदाताई उत्तमराव कोल्हे", from: "29.04.1995", to: "18.04.1996", img: null },
  { sr: 7, nameEn: "Gajanan Ramkisan Barwal", nameMr: "गजानन रामकिसन बारवळ", from: "18.04.1996", to: "07.05.1997", img: null },
  { sr: 8, nameEn: "Abdul Rashid Khan (Mamu)", nameMr: "अब्दुल रशीद खान (मामू)", from: "07.05.1997", to: "20.04.1998", img: null },
  { sr: 9, nameEn: "Shilatai Sitaram Gunjal", nameMr: "शिलाताई सिताराम गुंजाळ", from: "20.04.1998", to: "20.04.1999", img: null },
  { sr: 10, nameEn: "Sudam Patil Sonwane", nameMr: "सुदाम पाटील सोनवणे", from: "20.04.1999", to: "29.04.2000", img: null },
  { sr: 11, nameEn: "Bhagwat Kisanrao Karad", nameMr: "भागवत किसनराव कराड", from: "29.04.2000", to: "31.07.2001", img: null },
  { sr: 12, nameEn: "Vikas Ratanlal Jain", nameMr: "विकास रतनलाल जैन", from: "04.09.2001", to: "29.10.2002", img: null },
  { sr: 13, nameEn: "Vimaltai Bhikansingh Rajput", nameMr: "विमलताई भीकानसिंग राजपूत", from: "29.10.2002", to: "03.02.2004", img: null },
  { sr: 14, nameEn: "Rukminitai Shinde", nameMr: "रुक्मिणीताई शिंदे", from: "12.02.2004", to: "29.04.2005", img: null },
  { sr: 15, nameEn: "Kishanchand Tanwani", nameMr: "किशनचंद तनवाणी", from: "29.04.2005", to: "04.11.2006", img: null },
  { sr: 16, nameEn: "Dr. Bhagwat Kisanrao Karad", nameMr: "डॉ. भागवत किसनराव कराड", from: "14.11.2006", to: "29.10.2007", img: null },
  { sr: 17, nameEn: "Vijaya Rahatkar", nameMr: "विजया रहाटकर", from: "29.10.2007", to: "28.04.2010", img: null },
  { sr: 18, nameEn: "Anita Nandkumar Ghodele", nameMr: "अनीता नंदकुमार घोडेले", from: "29.04.2010", to: "28.10.2012", img: null },
  { sr: 19, nameEn: "Kala Ravinandan Oza", nameMr: "कला रविनंदन ओझा", from: "29.10.2012", to: "28.04.2015", img: null },
  { sr: 20, nameEn: "Trimbak Ganpatrao Tupe", nameMr: "त्रिंबक गणपतराव तुपे", from: "29.04.2015", to: "30.11.2016", img: null },
  { sr: 21, nameEn: "Bhagwan Bapu Ghadmode", nameMr: "भगवान बापू घाडमोडे", from: "14.12.2016", to: "28.10.2017", img: null },
  { sr: 22, nameEn: "Nandkumar Radhakisan Ghodele", nameMr: "नंदकुमार राधाकिसन घोडेले", from: "29.10.2017", to: "28.04.2020", img: null },
  { sr: 23, nameEn: "Sameer Subhash Rajurkar", nameMr: "समीर सुभाष राजूरकर", from: "10.02.2026", to: "Present", img: sameerImg, current: true },
];
