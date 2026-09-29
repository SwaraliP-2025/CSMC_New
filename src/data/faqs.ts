/** Citizen FAQs shown on /faq. Search records are derived from this list. */
export type FaqEntry = {
  q: string;
  qMr: string;
  a: string;
  aMr: string;
};

export const FAQS: FaqEntry[] = [
  {
    q: "How do I pay my property tax online?",
    qMr: "मी माझा मालमत्ता कर ऑनलाइन कसा भरू?",
    a: "Visit the Property Tax section on our website or click 'Pay Property Tax' on the homepage. Enter your property ID and follow the payment steps on the official CSMC tax portal.",
    aMr: "आमच्या वेबसाइटवरील मालमत्ता कर विभागाला भेट द्या किंवा मुख्यपृष्ठावर 'मालमत्ता कर भरा' वर क्लिक करा. अधिकृत CSMC कर पोर्टलवर मालमत्ता आयडी टाका व पेमेंट चरण पूर्ण करा.",
  },
  {
    q: "How can I apply for a birth certificate?",
    qMr: "मी जन्म प्रमाणपत्रासाठी कसा अर्ज करू?",
    a: "Apply online through the RTS Citizen Services portal. You will need the hospital discharge summary and parents' ID proof. Processing follows RTS timelines.",
    aMr: "RTS नागरिक सेवा पोर्टलद्वारे ऑनलाइन अर्ज करा. रुग्णालय डिस्चार्ज सारांश व पालकांचे ओळखपत्र आवश्यक. प्रक्रिया RTS कालमर्यादेनुसार होते.",
  },
  {
    q: "How do I file a complaint about civic issues?",
    qMr: "मी नागरी समस्यांबद्दल तक्रार कशी नोंदवू?",
    a: "Use the official CSMC complaint form, or the Samadhaan / Aaple Sarkar grievance portal for state-level redressal. You will receive a reference ID to track status.",
    aMr: "अधिकृत CSMC तक्रार फॉर्म वापरा, किंवा राज्यस्तरीय निवारणासाठी समाधान / आपले सरकार तक्रार पोर्टल. स्थिती ट्रॅक करण्यासाठी संदर्भ आयडी मिळेल.",
  },
  {
    q: "What are the office hours of CSMC?",
    qMr: "CSMC चे कार्यालयीन वेळ काय आहे?",
    a: "CSMC offices are open Monday to Saturday, 10:00 AM to 6:00 PM. Closed on Sundays and public holidays.",
    aMr: "CSMC कार्यालये सोमवार ते शनिवार, सकाळी १०:०० ते सायंकाळी ६:०० पर्यंत खुली असतात. रविवार आणि सार्वजनिक सुट्ट्यांना बंद.",
  },
  {
    q: "How can I get a trade license?",
    qMr: "मला व्यापार परवाना कसा मिळेल?",
    a: "Apply through the RTS Citizen Services portal with business registration documents, address proof, and Fire NOC if applicable.",
    aMr: "व्यवसाय नोंदणी दस्तऐवज, पत्ता पुरावा आणि लागू असल्यास अग्निशमन NOC सह RTS नागरिक सेवा पोर्टलद्वारे अर्ज करा.",
  },
  {
    q: "How do I check my water bill?",
    qMr: "मी माझे पाणी बिल कसे तपासू?",
    a: "Open Pay Water Tax and enter your consumer number on the official water ledger portal to view and pay.",
    aMr: "पाणी कर भरा उघडा आणि अधिकृत पाणी लेजर पोर्टलवर ग्राहक क्रमांक टाकून बिल पहा व भरा.",
  },
];
