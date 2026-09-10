// import { useParams, Link } from "react-router-dom";
// import { Layout } from "@/components/site/Layout";
// import { PageHeader } from "@/components/site/PageHeader";
// import { useLang } from "@/i18n/LanguageContext";
// import { getCivicRecord } from "@/data/civicCatalog";
// import { Phone, Mail, MapPin, ArrowLeft, Bell, FileText } from "lucide-react";
// import { useEffect, useRef } from "react";
// import amolSir from "@/assets/leadership/shri_amol_sir.png";

// interface DeptInfo {
//   slug: string;
//   nameEn: string;
//   nameMr: string;
//   headEn: string;
//   headMr: string;
//   designationEn: string;
//   designationMr: string;
//   phone: string;
//   email: string;
//   addressEn: string;
//   addressMr: string;
//   image?: string;
//   photoSize?: string;
//   photoTop?: string;
//   updates: { en: string; mr: string; date: string }[];
//   responsibilitiesEn?: string[];
//   responsibilitiesMr?: string[];
//   servicesEn?: string[];
//   servicesMr?: string[];
//   relatedDocIds?: string[];
// }

// /** Optional extended content keyed by slug (merged at render). */
// const DEPT_EXTRAS: Record<
//   string,
//   Pick<DeptInfo, "responsibilitiesEn" | "responsibilitiesMr" | "servicesEn" | "servicesMr" | "relatedDocIds">
// > = {
//   "municipal-commissioner": {
//     responsibilitiesEn: ["Overall civic administration", "Policy implementation", "Citizen service delivery oversight"],
//     responsibilitiesMr: ["एकूण नागरिक प्रशासन", "धोरण अंमलबजावणी", "नागरिक सेवा वितरण देखरेख"],
//     servicesEn: ["Commissioner office correspondence", "Administrative approvals"],
//     servicesMr: ["आयुक्त कार्यालय पत्रव्यवहार", "प्रशासकीय मंजुरी"],
//     relatedDocIds: ["bud-2627", "act-rti"],
//   },
//   "additional-commissioner-1": {
//     responsibilitiesEn: ["Civic infrastructure oversight", "Public works coordination", "Capital project monitoring"],
//     responsibilitiesMr: ["नागरी पायाभूत सुविधा देखरेख", "सार्वजनिक कामे समन्वय", "भांडवली प्रकल्प निरीक्षण"],
//     servicesEn: ["Works sanctions follow-up", "Project status review"],
//     servicesMr: ["कामे मंजुरी अनुवर्ती", "प्रकल्प स्थिती आढावा"],
//     relatedDocIds: ["mm-sc-apr"],
//   },
//   "additional-commissioner-2": {
//     responsibilitiesEn: ["Revenue and taxation oversight", "Citizen services", "Grievance redressal coordination"],
//     responsibilitiesMr: ["महसूल व कर देखरेख", "नागरिक सेवा", "तक्रार निवारण समन्वय"],
//     servicesEn: ["Revenue drives", "Grievance camps"],
//     servicesMr: ["महसूल मोहिमा", "तक्रार शिबिरे"],
//     relatedDocIds: ["not-tax-rebate", "bud-2526"],
//   },
//   health: {
//     responsibilitiesEn: ["Public health services", "Vaccination and epidemic control", "Municipal dispensaries"],
//     responsibilitiesMr: ["सार्वजनिक आरोग्य सेवा", "लसीकरण व साथरोग नियंत्रण", "महापालिका दवाखाने"],
//     servicesEn: ["Health camps", "Vaccination drives", "Dispensary services"],
//     servicesMr: ["आरोग्य शिबिरे", "लसीकरण मोहिमा", "दवाखाना सेवा"],
//     relatedDocIds: ["dept-health"],
//   },
//   "animal-husbandry": {
//     responsibilitiesEn: ["Stray animal control", "Veterinary services", "Animal birth control programmes"],
//     responsibilitiesMr: ["भटक्या प्राण्यांचे नियंत्रण", "पशुवैद्यकीय सेवा", "प्राणी जन्म नियंत्रण कार्यक्रम"],
//     servicesEn: ["ABC programme", "Stray vaccination"],
//     servicesMr: ["ABC कार्यक्रम", "भटक्या प्राण्यांचे लसीकरण"],
//     relatedDocIds: [],
//   },
//   drainage: {
//     responsibilitiesEn: ["Sewerage network maintenance", "STP operations", "Pre-monsoon drain cleaning"],
//     responsibilitiesMr: ["गटार जाळे देखभाल", "STP संचालन", "पूर्व-मान्सून नाला सफाई"],
//     servicesEn: ["Drain cleaning requests", "STP information"],
//     servicesMr: ["नाला सफाई विनंत्या", "STP माहिती"],
//     relatedDocIds: ["dept-drainage", "cir-water-summer"],
//   },
//   garden: {
//     responsibilitiesEn: ["Public gardens and parks", "Tree plantation drives", "Green cover maintenance"],
//     responsibilitiesMr: ["सार्वजनिक उद्याने व बागा", "वृक्षारोपण मोहिमा", "हरित आच्छादन देखभाल"],
//     servicesEn: ["Garden bookings enquiry", "Plantation drives"],
//     servicesMr: ["उद्यान बुकिंग चौकशी", "वृक्षारोपण मोहिमा"],
//     relatedDocIds: [],
//   },
//   estate: {
//     responsibilitiesEn: ["Corporation property management", "Leases and encroachments", "Municipal land records"],
//     responsibilitiesMr: ["महापालिका मालमत्ता व्यवस्थापन", "भाडेपट्टे व अतिक्रमणे", "महापालिका जमीन नोंदी"],
//     servicesEn: ["Lease renewal", "Encroachment complaints routing"],
//     servicesMr: ["भाडेपट्टी नूतनीकरण", "अतिक्रमण तक्रार मार्गदर्शन"],
//     relatedDocIds: [],
//   },
//   "property-tax": {
//     responsibilitiesEn: ["Property assessment", "Tax collection and rebates", "Revision of property tax"],
//     responsibilitiesMr: ["मालमत्ता मूल्यांकन", "कर संकलन व सवलती", "मालमत्ता कर सुधारणा"],
//     servicesEn: ["Online property tax payment", "Assessment enquiry"],
//     servicesMr: ["ऑनलाइन मालमत्ता कर भरणे", "मूल्यांकन चौकशी"],
//     relatedDocIds: ["dept-ptax", "not-tax-rebate", "faq-ptax"],
//   },
//   "water-tax": {
//     responsibilitiesEn: ["Water billing", "New connections", "Supply schedule coordination"],
//     responsibilitiesMr: ["पाणी बिलिंग", "नवीन जोडण्या", "पुरवठा वेळापत्रक समन्वय"],
//     servicesEn: ["Online water tax payment", "New connection guidance"],
//     servicesMr: ["ऑनलाइन पाणी कर भरणे", "नवीन जोडणी मार्गदर्शन"],
//     relatedDocIds: ["cir-water-summer"],
//   },
//   "town-planning": {
//     responsibilitiesEn: ["Building permissions", "Development plan implementation", "Layout approvals"],
//     responsibilitiesMr: ["बांधकाम परवानग्या", "विकास आराखडा अंमलबजावणी", "लेआउट मंजुरी"],
//     servicesEn: ["Building permission guidance", "DP enquiry"],
//     servicesMr: ["बांधकाम परवाना मार्गदर्शन", "DP चौकशी"],
//     relatedDocIds: ["dept-tp", "not-dp-revision", "dp-2025"],
//   },
//   fire: {
//     responsibilitiesEn: ["Fire fighting and rescue", "Fire NOC", "Disaster response support"],
//     responsibilitiesMr: ["अग्निशमन व बचाव", "अग्नि NOC", "आपत्ती प्रतिसाद सहाय्य"],
//     servicesEn: ["Emergency dial 101", "Fire NOC guidance"],
//     servicesMr: ["आपत्कालीन १०१", "अग्नि NOC मार्गदर्शन"],
//     relatedDocIds: [],
//   },
//   license: {
//     responsibilitiesEn: ["Trade licences", "Shop establishment certificates", "Hawker permits"],
//     responsibilitiesMr: ["व्यापार परवाने", "दुकान स्थापना प्रमाणपत्रे", "फिरते विक्रेता परवाने"],
//     servicesEn: ["Licence renewal camps", "Online licence guidance"],
//     servicesMr: ["परवाना नूतनीकरण शिबिरे", "ऑनलाइन परवाना मार्गदर्शन"],
//     relatedDocIds: ["act-rts"],
//   },
//   electrical: {
//     responsibilitiesEn: ["Street lighting", "LED upgrades", "Municipal electrical maintenance"],
//     responsibilitiesMr: ["पथदिवे", "LED अद्यतने", "महापालिका विद्युत देखभाल"],
//     servicesEn: ["Streetlight complaint routing", "LED upgrade information"],
//     servicesMr: ["पथदिवा तक्रार मार्गदर्शन", "LED अद्यतन माहिती"],
//     relatedDocIds: ["cir-streetlight"],
//   },
//   nulm: {
//     responsibilitiesEn: ["Urban livelihoods mission", "Skill development", "SHG and street vendor support"],
//     responsibilitiesMr: ["नगर उपजीविका अभियान", "कौशल्य विकास", "बचत गट व फिरते विक्रेता सहाय्य"],
//     servicesEn: ["Skill training batches", "SHG loan camps"],
//     servicesMr: ["कौशल्य प्रशिक्षण बॅच", "बचत गट कर्ज शिबिरे"],
//     relatedDocIds: [],
//   },
// };

// const DEPARTMENTS: DeptInfo[] = [
//   {
//     slug: "municipal-commissioner",
//     nameEn: "Municipal Commissioner", nameMr: "महानगरपालिका आयुक्त",
//     headEn: "Shri Amol Yedage, IAS", headMr: "श्री. अमोल येडगे, भा.प्र.से.",
//     designationEn: "Municipal Commissioner & Administrator", designationMr: "महानगरपालिका आयुक्त",
//     phone: DEPARTMENT_CONTACT_PHONE, email: "commissioner@csmc.gov.in",
//     addressEn: "CSMC Main Building, Town Hall, Behind Head Post Office, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, हेड पोस्ट ऑफिसच्या मागे, छत्रपती संभाजीनगर, महाराष्ट्र, भारत, ४३१००१ ",
//     image: amolSir,
//     photoSize: "126%",
//     photoTop: "-8%",
//     updates: [
//       { en: "Smart City project review meeting scheduled", mr: "स्मार्ट सिटी प्रकल्प आढावा बैठक नियोजित", date: "28 Apr 2026" },
//       { en: "Annual budget presentation to General Body", mr: "सर्वसाधारण सभेला वार्षिक अर्थसंकल्प सादरीकरण", date: "25 Apr 2026" },
//       { en: "Inspection of road works in Zone 3", mr: "झोन 3 मधील रास्ता कामाची तपासणी ", date: "22 Apr 2026" },
//     ],
//   },
//   {
//     slug: "additional-commissioner-1",
//     nameEn: "Additional Commissioner – I", nameMr: "अतिरिक्त आयुक्त - 1",
//     headEn: "Shri. Ranjit Patil", headMr: "श्री रणजीत पाटील",
//     designationEn: "Additional Municipal Commissioner - I", designationMr: "अतिरिक्त महानगरपालिका आयुक्त - १",
//     phone: DEPARTMENT_CONTACT_PHONE, email: "addlcomm1@csmc.gov.in",
//     addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "Additional Commissioner – I oversees civic infrastructure, public works and capital project execution across the corporation.",
//     // aboutMr: "अतिरिक्त आयुक्त ह नगर पयभत सवध, सरवजनक बधकम आण भडवल परकलप अमलबजवणवर दखरख करतत.",
//     updates: [
//       { en: "Road repair works approved for Ward 12", mr: "वॉर्ड 12 साठी रस्ता दुरुस्ती काम मंजूर", date: "27 Apr 2026" },
//       { en: "Bridge inspection report submitted", mr: "पूल तपासणी अहवाल सादर", date: "20 Apr 2026" },
//     ],
//   },
//   {
//     slug: "additional-commissioner-2",
//     nameEn: "Additional Commissioner – II", nameMr: "अतिरिक्त आयुक्त - 2",
//     headEn: "Smt Kalpita Pimple", headMr: "श्रीमती कल्पिता पिंपळे",
//     designationEn: "Additional Municipal Commissioner - II", designationMr: "अतिरिक्त महानगरपालिका आयुक्त - 2",
//     phone: DEPARTMENT_CONTACT_PHONE, email: "addlcomm2@csmc.gov.in",
//     addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "Additional Commissioner – II handles revenue, taxation, citizen services and grievance redressal for the corporation.",
//     // aboutMr: "अतरकत आयकत –  ह महसल, कर, नगरक सव आण तकरर नवरण हतळतत.",
//     updates: [
//       { en: "Property tax collection drive launched", mr: "मालमत्ता कर संकलन मोहिम सुरु ", date: "26 Apr 2026" },
//       { en: "Grievance redressal camp at Zone 5", mr: " झोन 5 येथे तक्रार निवारण शिबीर ", date: "18 Apr 2026" },
//     ],
//   },
//   {
//     slug: "health",
//     nameEn: "Health Department", nameMr: "आरोग्य विभाग",
//     headEn: "Dr. Paras Mandlecha", headMr: " डॉ. पारस मंडलेचा",
//     designationEn: "HOD - Health Department", designationMr: "हेड ऑफ डिपार्टमेंट - आरोग्य विभाग",
//     phone: "0240-2331740", email: "health@csmc.gov.in",
//     addressEn: "CSMC Health Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Health Department manages public health services, dispensaries, vaccination drives, sanitation and epidemic control across the city.",
//     // aboutMr: "आरगय वभग शहरतल सरवजनक आरगय सव, दवखन, लसकरण महम, सवचछत आण सथरग नयतरण वयवसथपत करत.",
//     updates: [
//       { en: "Free health camp at Cidco area on 2 May", mr: "2 मे रोजी सिडको परिसरात मोफत आरोग्य शिबीर", date: "28 Apr 2026" },
//       { en: "Dengue awareness drive in all zones", mr: "सर्व झोन मध्ये डेंग्यू जनजागृती मोहीम", date: "24 Apr 2026" },
//       { en: "New dispensary inaugurated at Garkheda", mr: "गारखेडा येथे नवीन दवाखाना उदघाटन", date: "15 Apr 2026" },
//     ],
//   },
//   {
//     slug: "animal-husbandry",
//     nameEn: "Animal Husbandry Department", nameMr: "पशूसंवर्धन विभाग",
//     headEn: "Smt Aparna Thete", headMr: "श्रीमती अपर्णा थेटे",
//     designationEn: "Deputy Municipal Commissioner", designationMr: "उपायुक्त",
//     phone: "0240-2331745", email: "animal@csmc.gov.in",
//     addressEn: "CSMC Animal Husbandry Office, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Animal Husbandry Department manages stray animal control, veterinary services, animal birth control programs and cattle pound operations.",
//     // aboutMr: "पशसवरधन वभग भटकय परणयच नयतरण, पशवदयकय सव, परण जनम नयतरण करयकरम आण गशळ करयनवयन वयवसथपत करत.",
//     updates: [
//       { en: "ABC programme completed in Zone 2", mr: "झोन 2 मध्ये ABC कार्यक्रम पूर्ण", date: "27 Apr 2026" },
//       { en: "Vaccination drive for stray dogs", mr: "भटक्या कुत्र्यांसाठी लसीकरण मोहीम", date: "20 Apr 2026" },
//     ],
//   },
//   {
//     slug: "drainage",
//     nameEn: "Drainage Department", nameMr: "मलनिस्सारण विभाग",
//     headEn: "Shri Anil Tanpure", headMr: " श्री अनिल तनपुरे",
//     designationEn: "", designationMr: "",
//     phone: "0240-2331746", email: "drainage@csmc.gov.in",
//     addressEn: "CSMC Drainage Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Drainage Department maintains the city's sewerage network, STP operations, drainage cleaning and flood mitigation infrastructure.",
//     // aboutMr: "मलनसरण वभग शहरच सडपण जळ, STP करयनवयन, नल सफई आण पर नयतरण पयभत सवध रखत.",
//     updates: [
//       { en: "Pre-monsoon drain cleaning drive started", mr: "पूर्व मान्सून नाला सफाई मोहीम सुरु", date: "28 Apr 2026" },
//       { en: "STP capacity upgrade work in progress", mr: "STP क्षमता वाढ काम प्रगतीपथावर", date: "22 Apr 2026" },
//     ],
//   },
//   {
//     slug: "garden",
//     nameEn: "Garden Department", nameMr: "उद्यान विभाग",
//     headEn: "Dr Vijay Patil", headMr: "डॉ. विजय पाटील",
//     designationEn: "", designationMr: "",
//     phone: "0240-2331747", email: "garden@csmc.gov.in",
//     addressEn: "CSMC Garden Office, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Garden Department develops and maintains public gardens, parks, tree plantation drives and green cover across the city.",
//     // aboutMr: "उदयन वभग शहरतल सरवजनक उदयन, बग, वकषरपण महम आण हरत आचछदन वकसत व रखत.",
//     updates: [
//       { en: "New garden inaugurated at Prozone area", mr: "प्रोझोन परिसरात नवीन उद्यान उदघाटन", date: "26 Apr 2026" },
//       { en: "Tree plantation drive: 5000 saplings planted", mr: "वृक्षारोपण मोहीम: 5000 रोपे लावली गेली", date: "22 Apr 2026" },
//     ],
//   },
//   {
//     slug: "estate",
//     nameEn: "Estate Department", nameMr: "इस्टेट विभाग",
//     headEn: "Smt Aparna Thete", headMr: "श्रीमती अपर्णा थेटे",
//     designationEn: "Deputy Municipal Commissioner", designationMr: "उपायुक्त",
//     phone: "0240-2331748", email: "estate@csmc.gov.in",
//     addressEn: "CSMC Estate Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Estate Department manages corporation properties, leases, encroachment removal and municipal land records.",
//     // aboutMr: "इसटट वभग महनगरपलक मलमतत, भडपटट, अतकरमण हटवण आण महनगरपलक जमन नद वयवसथपत करत.",
//     updates: [
//       { en: "Encroachment removal drive in Zone 4", mr: "झोन 4 मध्ये अतिक्रमण हटाव मोहीम", date: "25 Apr 2026" },
//       { en: "Lease renewal notices issued", mr: "भाडेपट्टी नूतनीकरण नोटीस जारी", date: "18 Apr 2026" },
//     ],
//   },
//   {
//     slug: "property-tax",
//     nameEn: "Property Tax Department", nameMr: "मालमत्ता कर विभाग",
//     headEn: "Shri. Vikas Nawale", headMr: "श्री विकास नवाळे",
//     designationEn: "Deputy Municipal Commissioner (Property Tax)", designationMr: "उपायुक्त (मालमत्ता कर)",
//     phone: "0240-2331749", email: "propertytax@csmc.gov.in",
//     addressEn: "CSMC Property Tax Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Property Tax Department handles assessment, collection and revision of property taxes for all residential and commercial properties in the city.",
//     // aboutMr: "मलमतत कर वभग शहरतल सरव नवस व वयवसयक मलमततसठ मलमतत करच मलयकन, सकलन आण सधरण हतळत.",
//     updates: [
//       { en: "Last date for tax payment with rebate: 31 May", mr: "सवलतीसह कर भरण्याची अंतिम तारीख: 30 एप्रिल", date: "28 Apr 2026" },
//       { en: "Online payment portal updated", mr: "ऑनलाईन पेमेंट पोर्टल अपडेट", date: "20 Apr 2026" },
//     ],
//   },
//   {
//     slug: "water-tax",
//     nameEn: "Water Tax Department", nameMr: "पाणी कर विभाग",
//     headEn: "Shri Vikas Nawale", headMr: "श्री विकास नवाळे",
//     designationEn: "Deputy Commissioner", designationMr: "उपायुक्त",
//     phone: "0240-2331750", email: "watertax@csmc.gov.in",
//     addressEn: "CSMC Water Supply Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Water Tax Department manages water supply billing, new connections, disconnections and water charge collection across the city.",
//     // aboutMr: "पण कर वभग शहरतल पण परवठ बलग, नवन जडणय, खडन आण पण शलक सकलन वयवसथपत करत.",
//     updates: [
//       { en: "New water connections approved for Hudco area", mr: "हडको परिसरासाठी नवीन पाणी जोडणी मंजूर", date: "27 Apr 2026" },
//       { en: "Water supply schedule revised for summer", mr: "उन्हाळ्यासाठी सुधारित पाणी पुरवठा वेळापत्रक", date: "15 Apr 2026" },
//     ],
//   },
//   {
//     slug: "town-planning",
//     nameEn: "Town Planning Department", nameMr: "नगर रचना विभाग",
//     headEn: "Shri Manoj Garje", headMr: "श्री मनोज गर्जे",
//     designationEn: "", designationMr: "",
//     phone: "0240-2331751", email: "townplanning@csmc.gov.in",
//     addressEn: "CSMC Town Planning Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Town Planning Department handles building permissions, development plan implementation, layout approvals and urban development regulations.",
//     // aboutMr: "नगर रचन वभग बधकम परवनगय, वकस आरखड अमलबजवण, लआउट मजर आण नगर वकस नयमन हतळत.",
//     updates: [
//       { en: "DP revision public notice issued", mr: "DP सुधारणा सार्वजनिक नोटीस जारी", date: "28 Apr 2026" },
//       { en: "Building permission online portal launched", mr: "बांधकाम परवाना ऑनलाईन पोर्टल सुरु", date: "10 Apr 2026" },
//     ],
//   },
//   {
//     slug: "fire",
//     nameEn: "Fire Department", nameMr: "अग्निशमन विभाग ",
//     headEn: "Shri Ankush Pandhare", headMr: "श्री अंकुश पांढरे",
//     designationEn: "", designationMr: "",
//     phone: DEPARTMENT_CONTACT_PHONE, email: "fire@csmc.gov.in",
//     addressEn: "CSMC Fire Station, Osmanpura, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Fire Department provides fire fighting, rescue operations, fire NOC services and disaster response across the city.",
//     // aboutMr: "अगनशमन वभग शहरत अगनशमन, बचव करय, अगन NOC सव आण आपतत परतसद परदन करत.",
//     updates: [
//       { en: "Fire safety audit of commercial buildings", mr: "व्यावसायिक इमारतीचे अग्नी सुरक्षा ऑडिट", date: "26 Apr 2026" },
//       { en: "New fire tender vehicle commissioned", mr: "नवीन अग्निशमन वाहन कार्यान्वत", date: "12 Apr 2026" },
//     ],
//   },
//   {
//     slug: "license",
//     nameEn: "License Department", nameMr: "परवाना विभाग",
//     headEn: "Shri. Vikas Nawale", headMr: "श्री विकास नवाळे",
//     designationEn: "", designationMr: "",
//     phone: "0240-2331752", email: "license@csmc.gov.in",
//     addressEn: "CSMC License Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The License Department issues trade licenses, shop establishment certificates, hawker licenses and other business permits.",
//     // aboutMr: "परवन वभग वयपर परवन, दकन सथपन परमणपतर, फरवल परवन आण इतर वयवसय परवन जर करत.",
//     updates: [
//       { en: "Trade license renewal camp on 5 May", mr: "5 मे व्यापार परवाना नूतनीकरण शिबीर", date: "28 Apr 2026" },
//       { en: "Online license application portal updated", mr: "ऑनलाईन परवाना अर्ज पोर्टल अपडेट", date: "16 Apr 2026" },
//     ],
//   },
//   {
//     slug: "electrical",
//     nameEn: "Electrical Department", nameMr: "विद्युत विभाग",
//     headEn: "", headMr: "",
//     designationEn: "", designationMr: "",
//     phone: "0240-2331753", email: "electrical@csmc.gov.in",
//     addressEn: "CSMC Electrical Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The Electrical Department manages street lighting, LED upgrades, electrical maintenance of municipal buildings and public infrastructure.",
//     // aboutMr: "वदयत वभग पथदव, LED अदयतन, महनगरपलक इमरतच वदयत दखभल आण सरवजनक पयभत सवध वयवसथपत करत.",
//     updates: [
//       { en: "LED street light installation in Zone 6 complete", mr: "झोन 6 मध्ये LED पथदिवे बसवणे पूर्ण", date: "25 Apr 2026" },
//       { en: "Solar panel installation at municipal buildings", mr: "महानगरपालिका इमारतीवर सोलर पॅनल बसवणे", date: "18 Apr 2026" },
//     ],
//   },
//   {
//     slug: "nulm",
//     nameEn: "NULM Department", nameMr: "NULM विभाग",
//     headEn: "Shri Lakhichand Chavhan", headMr: "श्री लखीचंद चव्हाण",
//     designationEn: "Deputy Municipal Commissioner", designationMr: "उपायुक्त",
//     phone: "0240-2331754", email: "nulm@csmc.gov.in",
//     addressEn: "CSMC NULM Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
//     addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
//     // aboutEn: "The NULM Department implements the National Urban Livelihoods Mission — skill development, self-help groups, street vendor support and urban poverty alleviation.",
//     // aboutMr: "NULM वभग रषटरय नगर उपजवक अभयन रबवत — कशलय वकस, बचत गट, फरवल सहयय आण नगर दरदरय नरमलन.",
//     updates: [
//       { en: "Skill training batch started for 200 youth", mr: "200 युवकांसाठी कौशल्य प्रशिक्षण बॅच सुरु", date: "27 Apr 2026" },
//       { en: "SHG loan disbursement camp", mr: "बचत गट कर्ज वितरण शिबीर", date: "20 Apr 2026" },
//     ],
//   },
// ];

// export { DEPARTMENTS };
// export type { DeptInfo };

// const UpdatesTicker = ({ updates, en }: { updates: DeptInfo["updates"]; en: boolean }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     let pos = 0;
//     const speed = 0.5;
//     const tick = () => {
//       pos += speed;
//       if (pos >= el.scrollHeight / 2) pos = 0;
//       el.scrollTop = pos;
//     };
//     const id = setInterval(tick, 30);
//     return () => clearInterval(id);
//   }, []);

//   const doubled = [...updates, ...updates];
//   return (
//     <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
//       <div className="bg-civic-blue px-4 py-3 flex items-center gap-2">
//         <Bell className="h-4 w-4 text-civic-gold" />
//         <span className="text-white font-bold text-sm">{en ? "Latest Updates" : "ताज्या घडामोडी"}</span>
//       </div>
//       <div ref={ref} className="flex-1 overflow-hidden" style={{ maxHeight: "340px" }}>
//         <div>
//           {doubled.map((u, i) => (
//             <div key={i} className="px-4 py-3 border-b border-border last:border-0 hover:bg-civic-gold/5 transition-colors">
//               <p className="text-xs font-bold text-civic-blue mb-0.5">{u.date}</p>
//               <p className="text-sm text-foreground leading-snug">{en ? u.en : u.mr}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const DepartmentDetail = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const { lang, d } = useLang();
//   const en = lang === "en";
//   const base = DEPARTMENTS.find(d => d.slug === slug);
//   const dept = base ? { ...base, ...(DEPT_EXTRAS[base.slug] ?? {}) } : undefined;

//   if (!dept) {
//     return (
//       <Layout>
//         <PageHeader eyebrow={en ? "Departments" : "विभाग"} title={en ? "Department Not Found" : "विभाग सापडला नाही"} subtitle="" />
//         <section className="py-16 container text-center">
//           <p className="text-muted-foreground mb-6">{en ? "The requested department page does not exist." : "विभाग उपलब्ध नाही"}</p>
//           <Link to="/departments" className="inline-flex items-center gap-2 text-civic-blue font-bold hover:underline">
//             <ArrowLeft className="h-4 w-4" /> {en ? "Back to Departments" : "विभागाकडे परत"}
//           </Link>
//         </section>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <PageHeader
//         eyebrow={en ? "Departments" : "विभाग"}
//         title={en ? dept.nameEn : dept.nameMr}
//         subtitle={en ? "Department information, head of department and latest updates." : "विभाग माहिती विभागप्रमुख आणि ताज्या घडामोडी"}
//       />
//       <section className="py-8 md:py-14 container">
//         {/* Back link */}
//         <Link to="/departments" className="inline-flex items-center gap-1.5 text-civic-blue text-sm font-semibold hover:text-civic-red transition-colors mb-8">
//           <ArrowLeft className="h-4 w-4" /> {en ? "All Departments" : "सर्व विभाग"}
//         </Link>

//         {/* Main grid: profile + updates */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

//           {/* Left: Profile card */}
//           <div className="md:col-span-2 space-y-6">
//             <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
//               {/* Blue header */}
//               <div className="bg-gradient-to-br from-civic-blue to-civic-blue/80 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
//                 <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 border-4 border-white/30 shadow-xl shrink-0 overflow-hidden">
//                   {dept.image ? (
//                     <img
//                       src={dept.image}
//                       alt={en ? dept.headEn : dept.headMr}
//                       className="absolute left-1/2 object-cover"
//                       style={{
//                         width: dept.photoSize ?? "100%",
//                         height: dept.photoSize ?? "100%",
//                         minWidth: dept.photoSize ? "115%" : "100%",
//                         minHeight: dept.photoSize ? "115%" : "100%",
//                         top: dept.photoTop ?? "0",
//                         transform: "translateX(-50%)",
//                       }}
//                     />
//                   ) : (
//                     <span className="flex h-full w-full items-center justify-center text-white font-bold text-3xl md:text-4xl">
//                       {(en ? dept.headEn : dept.headMr).charAt(0)}
//                     </span>
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="font-serif text-lg md:text-xl font-bold text-white mb-1">
//                     {en ? dept.headEn : dept.headMr}
//                   </h2>
//                   <p className="text-civic-gold text-sm font-semibold">
//                     {en ? dept.designationEn : dept.designationMr}
//                   </p>
//                   {(en ? dept.nameEn : dept.nameMr) !== (en ? dept.designationEn : dept.designationMr) &&
//                     !(en ? dept.designationEn : dept.designationMr)
//                       .toLowerCase()
//                       .includes((en ? dept.nameEn : dept.nameMr).toLowerCase()) && (
//                     <p className="text-white/70 text-xs mt-1">{en ? dept.nameEn : dept.nameMr}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Contact info */}
//               <div className="p-5 md:p-6 space-y-4">
//                 <div className="flex items-start gap-3 text-sm">
//                   <Phone className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
//                   <div>
//                     <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Phone" : "दुरध्वनी"}</p>
//                     <p className="font-semibold text-civic-ink">{d(dept.phone)}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 text-sm">
//                   <Mail className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
//                   <div>
//                     <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Email" : "ई-मेल"}</p>
//                     <p className="font-semibold text-civic-ink break-all">{dept.email}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 text-sm">
//                   <MapPin className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
//                   <div>
//                     <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Office Address" : "कार्यालय पत्ता"}</p>
//                     <p className="font-semibold text-civic-ink leading-snug">{d(en ? dept.addressEn : dept.addressMr)}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Extended sections — below contact card; profile header unchanged */}
//             {((en ? dept.responsibilitiesEn : dept.responsibilitiesMr)?.length ?? 0) > 0 && (
//               <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
//                 <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
//                   {en ? "Key Responsibilities" : "मुख्य जबाबदाऱ्या"}
//                 </h3>
//                 <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
//                   {(en ? dept.responsibilitiesEn! : dept.responsibilitiesMr!).map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {((en ? dept.servicesEn : dept.servicesMr)?.length ?? 0) > 0 && (
//               <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
//                 <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
//                   {en ? "Services" : "सेवा"}
//                 </h3>
//                 <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
//                   {(en ? dept.servicesEn! : dept.servicesMr!).map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {(dept.relatedDocIds?.filter((id) => getCivicRecord(id)).length ?? 0) > 0 && (
//               <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
//                 <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
//                   {en ? "Related Documents" : "संबंधित दस्तऐवज"}
//                 </h3>
//                 <ul className="space-y-2">
//                   {dept.relatedDocIds!
//                     .map((id) => getCivicRecord(id))
//                     .filter((r): r is NonNullable<typeof r> => !!r)
//                     .map((rec) => (
//                       <li key={rec.id}>
//                         <Link
//                           to={`/digital-repository/${rec.id}`}
//                           className="flex items-center gap-2 text-sm font-semibold text-civic-blue hover:underline"
//                         >
//                           <FileText className="h-4 w-4 shrink-0" />
//                           {en ? rec.titleEn : rec.titleMr}
//                         </Link>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             )}

//           </div>

//           {/* Right: Updates ticker */}
//           <div className="md:col-span-1">
//             <UpdatesTicker updates={dept.updates} en={en} />
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default DepartmentDetail;

import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { getCivicRecord } from "@/data/civicCatalog";
import { Phone, Mail, MapPin, ArrowLeft, Bell, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import amolSir from "@/assets/leadership/shri_amol_sir.png";
import { DEPARTMENT_CONTACT_PHONE } from "@/lib/departmentIcons";

interface DeptInfo {
  slug: string;
  nameEn: string;
  nameMr: string;
  headEn: string;
  headMr: string;
  designationEn: string;
  designationMr: string;
  phone: string;
  email: string;
  addressEn: string;
  addressMr: string;
  image?: string;
  photoSize?: string;
  photoTop?: string;
  updates: { en: string; mr: string; date: string }[];
  responsibilitiesEn?: string[];
  responsibilitiesMr?: string[];
  servicesEn?: string[];
  servicesMr?: string[];
  relatedDocIds?: string[];
}

/*
 * IMPORTANT:
 * The following three entries are intentionally preserved from the
 * previous version exactly as requested:
 *
 * 1. Municipal Commissioner
 * 2. Additional Commissioner – I
 * 3. Additional Commissioner – II
 *
 * All other department information below has been updated according
 * to the Work Distribution Order dated 03/09/2026.
 */

/** Extended content */
const DEPT_EXTRAS: Record<
  string,
  Pick<
    DeptInfo,
    "responsibilitiesEn" |
    "responsibilitiesMr" |
    "servicesEn" |
    "servicesMr" |
    "relatedDocIds"
  >
> = {
  /* ================= PRESERVED – DO NOT CHANGE ================= */

  "municipal-commissioner": {
    responsibilitiesEn: [
      "Overall civic administration",
      "Policy implementation",
      "Citizen service delivery oversight",
    ],
    responsibilitiesMr: [
      "एकूण नागरिक प्रशासन",
      "धोरण अंमलबजावणी",
      "नागरिक सेवा वितरण देखरेख",
    ],
    servicesEn: [
      "Commissioner office correspondence",
      "Administrative approvals",
    ],
    servicesMr: [
      "आयुक्त कार्यालय पत्रव्यवहार",
      "प्रशासकीय मंजुरी",
    ],
    relatedDocIds: ["bud-2627", "act-rti"],
  },

  "additional-commissioner-1": {
    responsibilitiesEn: [
      "Civic infrastructure oversight",
      "Public works coordination",
      "Capital project monitoring",
    ],
    responsibilitiesMr: [
      "नागरी पायाभूत सुविधा देखरेख",
      "सार्वजनिक कामे समन्वय",
      "भांडवली प्रकल्प निरीक्षण",
    ],
    servicesEn: [
      "Works sanctions follow-up",
      "Project status review",
    ],
    servicesMr: [
      "कामे मंजुरी अनुवर्ती",
      "प्रकल्प स्थिती आढावा",
    ],
    relatedDocIds: ["mm-sc-apr"],
  },

  "additional-commissioner-2": {
    responsibilitiesEn: [
      "Revenue and taxation oversight",
      "Citizen services",
      "Grievance redressal coordination",
    ],
    responsibilitiesMr: [
      "महसूल व कर देखरेख",
      "नागरिक सेवा",
      "तक्रार निवारण समन्वय",
    ],
    servicesEn: [
      "Revenue drives",
      "Grievance camps",
    ],
    servicesMr: [
      "महसूल मोहिमा",
      "तक्रार शिबिरे",
    ],
    relatedDocIds: ["not-tax-rebate", "bud-2526"],
  },

  /* ================= UPDATED DEPARTMENTS ================= */

  "general-administration": {
    responsibilitiesEn: [
      "General administration",
      "Records and establishment matters",
      "Administrative coordination",
    ],
    responsibilitiesMr: [
      "सामान्य प्रशासन",
      "अभिलेख व आस्थापना विषयक कामकाज",
      "प्रशासकीय समन्वय",
    ],
    servicesEn: [
      "Administrative correspondence",
      "Record-related services",
    ],
    servicesMr: [
      "प्रशासकीय पत्रव्यवहार",
      "अभिलेख संबंधित सेवा",
    ],
    relatedDocIds: [],
  },

  "labour": {
    responsibilitiesEn: [
      "Labour department administration",
      "Labour-related civic matters",
      "Coordination of labour services",
    ],
    responsibilitiesMr: [
      "कामगार विभागाचे प्रशासन",
      "कामगार विषयक नागरी बाबी",
      "कामगार सेवांचा समन्वय",
    ],
    servicesEn: [
      "Labour-related applications",
      "Departmental assistance",
    ],
    servicesMr: [
      "कामगार विषयक अर्ज",
      "विभागीय सहाय्य",
    ],
    relatedDocIds: [],
  },

  "education": {
    responsibilitiesEn: [
      "Municipal education administration",
      "School-related civic services",
      "Education programme coordination",
    ],
    responsibilitiesMr: [
      "महापालिका शिक्षण प्रशासन",
      "शाळांशी संबंधित नागरी सेवा",
      "शैक्षणिक कार्यक्रम समन्वय",
    ],
    servicesEn: [
      "Education department services",
      "Municipal school coordination",
    ],
    servicesMr: [
      "शिक्षण विभाग सेवा",
      "महापालिका शाळा समन्वय",
    ],
    relatedDocIds: [],
  },

  "tourism-development": {
    responsibilitiesEn: [
      "Tourism development activities",
      "City tourism promotion",
      "Tourism project coordination",
    ],
    responsibilitiesMr: [
      "पर्यटन विकास उपक्रम",
      "शहर पर्यटन प्रसार",
      "पर्यटन प्रकल्प समन्वय",
    ],
    servicesEn: [
      "Tourism information",
      "Tourism project assistance",
    ],
    servicesMr: [
      "पर्यटन माहिती",
      "पर्यटन प्रकल्प सहाय्य",
    ],
    relatedDocIds: [],
  },

  "cultural": {
    responsibilitiesEn: [
      "Cultural activities",
      "Civic cultural programmes",
      "Cultural event coordination",
    ],
    responsibilitiesMr: [
      "सांस्कृतिक उपक्रम",
      "महापालिका सांस्कृतिक कार्यक्रम",
      "सांस्कृतिक कार्यक्रम समन्वय",
    ],
    servicesEn: [
      "Cultural programme coordination",
      "Event-related assistance",
    ],
    servicesMr: [
      "सांस्कृतिक कार्यक्रम समन्वय",
      "कार्यक्रम संबंधित सहाय्य",
    ],
    relatedDocIds: [],
  },

  "fire-disaster-management": {
    responsibilitiesEn: [
      "Fire and rescue services",
      "Fire safety and emergency response",
      "Disaster management coordination",
    ],
    responsibilitiesMr: [
      "अग्निशमन व बचाव सेवा",
      "अग्निसुरक्षा व आपत्कालीन प्रतिसाद",
      "आपत्ती व्यवस्थापन समन्वय",
    ],
    servicesEn: [
      "Fire emergency services",
      "Fire safety guidance",
      "Disaster response",
    ],
    servicesMr: [
      "अग्निशमन आपत्कालीन सेवा",
      "अग्निसुरक्षा मार्गदर्शन",
      "आपत्ती प्रतिसाद",
    ],
    relatedDocIds: [],
  },

  "solid-waste-management": {
    responsibilitiesEn: [
      "Solid waste management",
      "Waste collection and transportation",
      "City cleanliness coordination",
    ],
    responsibilitiesMr: [
      "घनकचरा व्यवस्थापन",
      "कचरा संकलन व वाहतूक",
      "शहर स्वच्छता समन्वय",
    ],
    servicesEn: [
      "Waste collection complaints",
      "Cleanliness-related services",
    ],
    servicesMr: [
      "कचरा संकलन तक्रारी",
      "स्वच्छता संबंधित सेवा",
    ],
    relatedDocIds: [],
  },

  "environment": {
    responsibilitiesEn: [
      "Environmental management",
      "NCAP-related activities",
      "Environmental improvement programmes",
    ],
    responsibilitiesMr: [
      "पर्यावरण व्यवस्थापन",
      "NCAP संबंधित उपक्रम",
      "पर्यावरण सुधारणा कार्यक्रम",
    ],
    servicesEn: [
      "Environmental information",
      "Environmental programme assistance",
    ],
    servicesMr: [
      "पर्यावरण माहिती",
      "पर्यावरण कार्यक्रम सहाय्य",
    ],
    relatedDocIds: [],
  },

  "garden": {
    responsibilitiesEn: [
      "Public gardens and parks",
      "Tree plantation activities",
      "Green cover maintenance",
    ],
    responsibilitiesMr: [
      "सार्वजनिक उद्याने व बागा",
      "वृक्षारोपण उपक्रम",
      "हरित आच्छादन देखभाल",
    ],
    servicesEn: [
      "Garden-related services",
      "Tree plantation programmes",
    ],
    servicesMr: [
      "उद्यान संबंधित सेवा",
      "वृक्षारोपण कार्यक्रम",
    ],
    relatedDocIds: [],
  },

  "kham-sukhna-river": {
    responsibilitiesEn: [
      "Kham and Sukhna river rejuvenation",
      "River improvement projects",
      "Project coordination",
    ],
    responsibilitiesMr: [
      "खाम व सुखना नदी पुनरुज्जीवन",
      "नदी सुधारणा प्रकल्प",
      "प्रकल्प समन्वय",
    ],
    servicesEn: [
      "River rejuvenation project information",
    ],
    servicesMr: [
      "नदी पुनरुज्जीवन प्रकल्प माहिती",
    ],
    relatedDocIds: [],
  },

  "sports-swimming": {
    responsibilitiesEn: [
      "Sports activities",
      "Municipal sports facilities",
      "Swimming facility coordination",
    ],
    responsibilitiesMr: [
      "क्रीडा उपक्रम",
      "महापालिका क्रीडा सुविधा",
      "जलतरण सुविधा समन्वय",
    ],
    servicesEn: [
      "Sports facility information",
      "Swimming facility information",
    ],
    servicesMr: [
      "क्रीडा सुविधा माहिती",
      "जलतरण सुविधा माहिती",
    ],
    relatedDocIds: [],
  },

  "health": {
    responsibilitiesEn: [
      "Public health administration",
      "Municipal health services",
      "Medical health programmes",
    ],
    responsibilitiesMr: [
      "सार्वजनिक आरोग्य प्रशासन",
      "महापालिका आरोग्य सेवा",
      "वैद्यकीय आरोग्य कार्यक्रम",
    ],
    servicesEn: [
      "Municipal health services",
      "Health programme information",
    ],
    servicesMr: [
      "महापालिका आरोग्य सेवा",
      "आरोग्य कार्यक्रम माहिती",
    ],
    relatedDocIds: [],
  },

  "tax": {
    responsibilitiesEn: [
      "Property tax administration",
      "Water tax administration",
      "Tax collection and control",
    ],
    responsibilitiesMr: [
      "मालमत्ता कर प्रशासन",
      "पाणीपट्टी प्रशासन",
      "कर संकलन व नियंत्रण",
    ],
    servicesEn: [
      "Property tax services",
      "Water tax services",
      "Tax-related assistance",
    ],
    servicesMr: [
      "मालमत्ता कर सेवा",
      "पाणीपट्टी सेवा",
      "कर संबंधित सहाय्य",
    ],
    relatedDocIds: ["not-tax-rebate", "faq-ptax"],
  },

  "market-license": {
    responsibilitiesEn: [
      "Market administration",
      "Market and licence-related matters",
      "Coordination of market permissions",
    ],
    responsibilitiesMr: [
      "बाजार प्रशासन",
      "बाजार व परवाना विषयक बाबी",
      "बाजार परवानगी समन्वय",
    ],
    servicesEn: [
      "Market licence assistance",
      "Market-related applications",
    ],
    servicesMr: [
      "बाजार परवाना सहाय्य",
      "बाजार संबंधित अर्ज",
    ],
    relatedDocIds: [],
  },

  "property-management": {
    responsibilitiesEn: [
      "Municipal property management",
      "Property-related administration",
      "Municipal asset coordination",
    ],
    responsibilitiesMr: [
      "महापालिका मालमत्ता व्यवस्थापन",
      "मालमत्ता संबंधित प्रशासन",
      "महापालिका मालमत्ता समन्वय",
    ],
    servicesEn: [
      "Municipal property services",
      "Property-related assistance",
    ],
    servicesMr: [
      "महापालिका मालमत्ता सेवा",
      "मालमत्ता संबंधित सहाय्य",
    ],
    relatedDocIds: [],
  },

  "bot": {
    responsibilitiesEn: [
      "BOT projects",
      "Project coordination",
      "Infrastructure partnership matters",
    ],
    responsibilitiesMr: [
      "बीओटी प्रकल्प",
      "प्रकल्प समन्वय",
      "पायाभूत सुविधा भागीदारी विषयक बाबी",
    ],
    servicesEn: [
      "BOT project information",
    ],
    servicesMr: [
      "बीओटी प्रकल्प माहिती",
    ],
    relatedDocIds: [],
  },

  "animal-veterinary": {
    responsibilitiesEn: [
      "Veterinary services",
      "Animal welfare administration",
      "Animal-related civic services",
    ],
    responsibilitiesMr: [
      "पशुवैद्यकीय सेवा",
      "प्राणी कल्याण प्रशासन",
      "प्राणी संबंधित नागरी सेवा",
    ],
    servicesEn: [
      "Veterinary assistance",
      "Animal-related services",
    ],
    servicesMr: [
      "पशुवैद्यकीय सहाय्य",
      "प्राणी संबंधित सेवा",
    ],
    relatedDocIds: [],
  },

  "election-census": {
    responsibilitiesEn: [
      "Election administration",
      "Census-related activities",
      "Election and census coordination",
    ],
    responsibilitiesMr: [
      "निवडणूक प्रशासन",
      "जनगणना संबंधित उपक्रम",
      "निवडणूक व जनगणना समन्वय",
    ],
    servicesEn: [
      "Election-related information",
      "Census-related assistance",
    ],
    servicesMr: [
      "निवडणूक संबंधित माहिती",
      "जनगणना संबंधित सहाय्य",
    ],
    relatedDocIds: [],
  },

  "legal": {
    responsibilitiesEn: [
      "Legal matters of the corporation",
      "Legal correspondence",
      "Legal advice coordination",
    ],
    responsibilitiesMr: [
      "महापालिकेच्या कायदेशीर बाबी",
      "कायदेशीर पत्रव्यवहार",
      "कायदेशीर सल्ला समन्वय",
    ],
    servicesEn: [
      "Legal department assistance",
      "Legal correspondence",
    ],
    servicesMr: [
      "विधी विभाग सहाय्य",
      "कायदेशीर पत्रव्यवहार",
    ],
    relatedDocIds: [],
  },

  "social-development": {
    responsibilitiesEn: [
      "Social development programmes",
      "Women and child development",
      "Disability-related civic programmes",
    ],
    responsibilitiesMr: [
      "समाज विकास कार्यक्रम",
      "महिला व बालविकास",
      "दिव्यांग संबंधित नागरी कार्यक्रम",
    ],
    servicesEn: [
      "Social development services",
      "Women and child welfare information",
    ],
    servicesMr: [
      "समाज विकास सेवा",
      "महिला व बालकल्याण माहिती",
    ],
    relatedDocIds: [],
  },

  "library": {
    responsibilitiesEn: [
      "Municipal library administration",
      "Library services",
      "Reading and information facilities",
    ],
    responsibilitiesMr: [
      "महापालिका ग्रंथालय प्रशासन",
      "ग्रंथालय सेवा",
      "वाचन व माहिती सुविधा",
    ],
    servicesEn: [
      "Library services",
      "Library information",
    ],
    servicesMr: [
      "ग्रंथालय सेवा",
      "ग्रंथालय माहिती",
    ],
    relatedDocIds: [],
  },

  "nulm": {
    responsibilitiesEn: [
      "National Urban Livelihoods Mission",
      "Urban livelihood programmes",
      "City project coordination",
    ],
    responsibilitiesMr: [
      "राष्ट्रीय नागरी उपजीविका अभियान",
      "नागरी उपजीविका कार्यक्रम",
      "शहर प्रकल्प समन्वय",
    ],
    servicesEn: [
      "NULM services",
      "Livelihood programme information",
    ],
    servicesMr: [
      "NULM सेवा",
      "उपजीविका कार्यक्रम माहिती",
    ],
    relatedDocIds: [],
  },

  "information-technology": {
    responsibilitiesEn: [
      "Computer and IT administration",
      "E-Governance",
      "E-Tendering systems",
    ],
    responsibilitiesMr: [
      "संगणक व माहिती तंत्रज्ञान प्रशासन",
      "ई-गव्हर्नन्स",
      "ई-निविदा प्रणाली",
    ],
    servicesEn: [
      "E-Governance services",
      "Online civic systems",
    ],
    servicesMr: [
      "ई-गव्हर्नन्स सेवा",
      "ऑनलाईन नागरी प्रणाली",
    ],
    relatedDocIds: [],
  },

  "information-public-relations": {
    responsibilitiesEn: [
      "Public information",
      "Public relations",
      "Democracy Day and inward-outward coordination",
    ],
    responsibilitiesMr: [
      "माहिती व जनसंपर्क",
      "लोकसंपर्क",
      "लोकशाही दिन व मुख्य आवक-जावक समन्वय",
    ],
    servicesEn: [
      "Public information services",
      "Public relations assistance",
    ],
    servicesMr: [
      "माहिती सेवा",
      "जनसंपर्क सहाय्य",
    ],
    relatedDocIds: [],
  },

  "central-stores": {
    responsibilitiesEn: [
      "Central stores administration",
      "Material management",
      "Municipal stock coordination",
    ],
    responsibilitiesMr: [
      "मध्यवर्ती भांडार प्रशासन",
      "साहित्य व्यवस्थापन",
      "महापालिका साठा समन्वय",
    ],
    servicesEn: [
      "Stores-related services",
      "Material coordination",
    ],
    servicesMr: [
      "भांडार संबंधित सेवा",
      "साहित्य समन्वय",
    ],
    relatedDocIds: [],
  },

  "pmay": {
    responsibilitiesEn: [
      "PMAY programmes",
      "Housing-related municipal programmes",
      "CLTC coordination",
    ],
    responsibilitiesMr: [
      "पीएमएवाय कार्यक्रम",
      "गृहनिर्माण संबंधित महापालिका कार्यक्रम",
      "CLTC समन्वय",
    ],
    servicesEn: [
      "PMAY information",
      "Housing programme assistance",
    ],
    servicesMr: [
      "पीएमएवाय माहिती",
      "गृहनिर्माण कार्यक्रम सहाय्य",
    ],
    relatedDocIds: [],
  },

  "ramai-housing": {
    responsibilitiesEn: [
      "Ramai housing programme",
      "Housing construction activities",
      "Housing project coordination",
    ],
    responsibilitiesMr: [
      "रमाई घरकुल कार्यक्रम",
      "गृहनिर्माण बांधकाम कामे",
      "गृहनिर्माण प्रकल्प समन्वय",
    ],
    servicesEn: [
      "Ramai housing information",
      "Housing project assistance",
    ],
    servicesMr: [
      "रमाई घरकुल माहिती",
      "गृहनिर्माण प्रकल्प सहाय्य",
    ],
    relatedDocIds: [],
  },

  "roads": {
    responsibilitiesEn: [
      "Road infrastructure",
      "Road maintenance and development",
      "Zone-wise road works",
    ],
    responsibilitiesMr: [
      "रस्ता पायाभूत सुविधा",
      "रस्ते देखभाल व विकास",
      "झोननिहाय रस्ता कामे",
    ],
    servicesEn: [
      "Road-related complaints",
      "Road work information",
    ],
    servicesMr: [
      "रस्ता संबंधित तक्रारी",
      "रस्ता कामांची माहिती",
    ],
    relatedDocIds: [],
  },

  "ramai-civil": {
    responsibilitiesEn: [
      "Ramai housing civil works",
      "Civil construction coordination",
      "Project implementation",
    ],
    responsibilitiesMr: [
      "रमाई घरकुल स्थापत्य कामे",
      "स्थापत्य बांधकाम समन्वय",
      "प्रकल्प अंमलबजावणी",
    ],
    servicesEn: [
      "Housing construction information",
    ],
    servicesMr: [
      "गृहनिर्माण बांधकाम माहिती",
    ],
    relatedDocIds: [],
  },

  "solid-waste-civil": {
    responsibilitiesEn: [
      "Civil works related to solid waste management",
      "Waste infrastructure projects",
      "Project coordination",
    ],
    responsibilitiesMr: [
      "घनकचरा व्यवस्थापनातील स्थापत्य कामे",
      "कचरा पायाभूत सुविधा प्रकल्प",
      "प्रकल्प समन्वय",
    ],
    servicesEn: [
      "Solid waste infrastructure information",
    ],
    servicesMr: [
      "घनकचरा पायाभूत सुविधा माहिती",
    ],
    relatedDocIds: [],
  },

  "buildings": {
    responsibilitiesEn: [
      "Municipal building works",
      "Building maintenance",
      "Civil construction coordination",
    ],
    responsibilitiesMr: [
      "महापालिका इमारत कामे",
      "इमारत देखभाल",
      "स्थापत्य बांधकाम समन्वय",
    ],
    servicesEn: [
      "Building-related information",
      "Municipal building services",
    ],
    servicesMr: [
      "इमारत संबंधित माहिती",
      "महापालिका इमारत सेवा",
    ],
    relatedDocIds: [],
  },

  "pmay-civil": {
    responsibilitiesEn: [
      "PMAY civil works",
      "Housing construction",
      "Project implementation",
    ],
    responsibilitiesMr: [
      "पीएमएवाय स्थापत्य कामे",
      "गृहनिर्माण बांधकाम",
      "प्रकल्प अंमलबजावणी",
    ],
    servicesEn: [
      "PMAY civil works information",
    ],
    servicesMr: [
      "पीएमएवाय स्थापत्य कामांची माहिती",
    ],
    relatedDocIds: [],
  },

  "garden-civil": {
    responsibilitiesEn: [
      "Civil works in gardens",
      "Garden infrastructure",
      "Park improvement works",
    ],
    responsibilitiesMr: [
      "उद्यानातील स्थापत्य कामे",
      "उद्यान पायाभूत सुविधा",
      "उद्यान सुधारणा कामे",
    ],
    servicesEn: [
      "Garden infrastructure information",
    ],
    servicesMr: [
      "उद्यान पायाभूत सुविधा माहिती",
    ],
    relatedDocIds: [],
  },

  "drainage": {
    responsibilitiesEn: [
      "Drainage infrastructure",
      "Drainage network maintenance",
      "Drainage project coordination",
    ],
    responsibilitiesMr: [
      "मलनिस्सारण पायाभूत सुविधा",
      "मलनिस्सारण जाळे देखभाल",
      "मलनिस्सारण प्रकल्प समन्वय",
    ],
    servicesEn: [
      "Drainage complaints",
      "Drainage work information",
    ],
    servicesMr: [
      "मलनिस्सारण तक्रारी",
      "मलनिस्सारण कामांची माहिती",
    ],
    relatedDocIds: [],
  },

  "drainage-special-east": {
    responsibilitiesEn: [
      "Drainage special projects",
      "Eastern assembly area drainage works",
      "Project implementation",
    ],
    responsibilitiesMr: [
      "मलनिस्सारण विशेष प्रकल्प",
      "पूर्व विधानसभा क्षेत्रातील मलनिस्सारण कामे",
      "प्रकल्प अंमलबजावणी",
    ],
    servicesEn: [
      "Drainage project information",
    ],
    servicesMr: [
      "मलनिस्सारण प्रकल्प माहिती",
    ],
    relatedDocIds: [],
  },

  "drainage-special-central": {
    responsibilitiesEn: [
      "Drainage special projects",
      "Central assembly area drainage works",
      "Project implementation",
    ],
    responsibilitiesMr: [
      "मलनिस्सारण विशेष प्रकल्प",
      "मध्य विधानसभा क्षेत्रातील मलनिस्सारण कामे",
      "प्रकल्प अंमलबजावणी",
    ],
    servicesEn: [
      "Drainage project information",
    ],
    servicesMr: [
      "मलनिस्सारण प्रकल्प माहिती",
    ],
    relatedDocIds: [],
  },

  "drainage-special-west": {
    responsibilitiesEn: [
      "Drainage special projects",
      "Satara-Deolai and western assembly area works",
      "Project implementation",
    ],
    responsibilitiesMr: [
      "मलनिस्सारण विशेष प्रकल्प",
      "सातारा-देवळाई व पश्चिम विधानसभा क्षेत्रातील कामे",
      "प्रकल्प अंमलबजावणी",
    ],
    servicesEn: [
      "Drainage project information",
    ],
    servicesMr: [
      "मलनिस्सारण प्रकल्प माहिती",
    ],
    relatedDocIds: [],
  },

  "water-supply-distribution": {
    responsibilitiesEn: [
      "Water supply distribution",
      "Zone-wise water supply coordination",
      "Water distribution infrastructure",
    ],
    responsibilitiesMr: [
      "पाणीपुरवठा वितरण",
      "झोननिहाय पाणीपुरवठा समन्वय",
      "पाणी वितरण पायाभूत सुविधा",
    ],
    servicesEn: [
      "Water supply information",
      "Distribution-related complaints",
    ],
    servicesMr: [
      "पाणीपुरवठा माहिती",
      "वितरण संबंधित तक्रारी",
    ],
    relatedDocIds: [],
  },

  "jayakwadi-water-civil": {
    responsibilitiesEn: [
      "Jayakwadi water supply civil works",
      "Water infrastructure projects",
      "Civil project coordination",
    ],
    responsibilitiesMr: [
      "जायकवाडी पाणीपुरवठा स्थापत्य कामे",
      "पाणी पायाभूत सुविधा प्रकल्प",
      "स्थापत्य प्रकल्प समन्वय",
    ],
    servicesEn: [
      "Jayakwadi water project information",
    ],
    servicesMr: [
      "जायकवाडी पाणी प्रकल्प माहिती",
    ],
    relatedDocIds: [],
  },

  "jayakwadi-water-mechanical": {
    responsibilitiesEn: [
      "Jayakwadi water supply mechanical works",
      "Mechanical water infrastructure",
      "Project maintenance",
    ],
    responsibilitiesMr: [
      "जायकवाडी पाणीपुरवठा यांत्रिकी कामे",
      "यांत्रिकी पाणी पायाभूत सुविधा",
      "प्रकल्प देखभाल",
    ],
    servicesEn: [
      "Mechanical water supply information",
    ],
    servicesMr: [
      "यांत्रिकी पाणीपुरवठा माहिती",
    ],
    relatedDocIds: [],
  },

  "city-water-mechanical": {
    responsibilitiesEn: [
      "City water supply mechanical works",
      "Mechanical maintenance",
      "Water supply infrastructure",
    ],
    responsibilitiesMr: [
      "शहर पाणीपुरवठा यांत्रिकी कामे",
      "यांत्रिकी देखभाल",
      "पाणीपुरवठा पायाभूत सुविधा",
    ],
    servicesEn: [
      "City water supply information",
    ],
    servicesMr: [
      "शहर पाणीपुरवठा माहिती",
    ],
    relatedDocIds: [],
  },

  "mechanical-vehicles": {
    responsibilitiesEn: [
      "Municipal vehicle management",
      "Vehicle maintenance",
      "Mechanical infrastructure",
    ],
    responsibilitiesMr: [
      "महापालिका वाहन व्यवस्थापन",
      "वाहन देखभाल",
      "यांत्रिकी पायाभूत सुविधा",
    ],
    servicesEn: [
      "Municipal vehicle services",
      "Vehicle maintenance coordination",
    ],
    servicesMr: [
      "महापालिका वाहन सेवा",
      "वाहन देखभाल समन्वय",
    ],
    relatedDocIds: [],
  },

  "electrical": {
    responsibilitiesEn: [
      "Municipal electrical works",
      "Electrical infrastructure",
      "Electrical maintenance",
    ],
    responsibilitiesMr: [
      "महापालिका विद्युत कामे",
      "विद्युत पायाभूत सुविधा",
      "विद्युत देखभाल",
    ],
    servicesEn: [
      "Electrical services",
      "Electrical infrastructure information",
    ],
    servicesMr: [
      "विद्युत सेवा",
      "विद्युत पायाभूत सुविधा माहिती",
    ],
    relatedDocIds: [],
  },

  "encroachment": {
    responsibilitiesEn: [
      "Encroachment control",
      "Zone-wise encroachment enforcement",
      "Municipal land protection",
    ],
    responsibilitiesMr: [
      "अतिक्रमण नियंत्रण",
      "झोननिहाय अतिक्रमण कारवाई",
      "महापालिका जमिनीचे संरक्षण",
    ],
    servicesEn: [
      "Encroachment complaint routing",
      "Encroachment-related information",
    ],
    servicesMr: [
      "अतिक्रमण तक्रार मार्गदर्शन",
      "अतिक्रमण संबंधित माहिती",
    ],
    relatedDocIds: [],
  },

  "security": {
    responsibilitiesEn: [
      "Municipal security",
      "Security coordination",
      "Protection of municipal premises",
    ],
    responsibilitiesMr: [
      "महापालिका सुरक्षा",
      "सुरक्षा समन्वय",
      "महापालिका परिसराचे संरक्षण",
    ],
    servicesEn: [
      "Security-related assistance",
    ],
    servicesMr: [
      "सुरक्षा संबंधित सहाय्य",
    ],
    relatedDocIds: [],
  },
};


/* ============================================================
 * DEPARTMENTS
 * ============================================================
 */

const DEPARTMENTS: DeptInfo[] = [

  /* ============================================================
   * PRESERVED EXACTLY AS REQUESTED
   * ============================================================ */

  {
    slug: "municipal-commissioner",
    nameEn: "Municipal Commissioner",
    nameMr: "महानगरपालिका आयुक्त",
    headEn: "Shri Amol Yedage, IAS",
    headMr: "श्री. अमोल येडगे, भा.प्र.से.",
    designationEn: "Municipal Commissioner & Administrator",
    designationMr: "महानगरपालिका आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "commissioner@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Behind Head Post Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, हेड पोस्ट ऑफिसच्या मागे, छत्रपती संभाजीनगर, महाराष्ट्र, भारत, ४३१००१ ",
    image: amolSir,
    photoSize: "126%",
    photoTop: "-8%",
    updates: [
      {
        en: "Smart City project review meeting scheduled",
        mr: "स्मार्ट सिटी प्रकल्प आढावा बैठक नियोजित",
        date: "28 Apr 2026",
      },
      {
        en: "Annual budget presentation to General Body",
        mr: "सर्वसाधारण सभेला वार्षिक अर्थसंकल्प सादरीकरण",
        date: "25 Apr 2026",
      },
      {
        en: "Inspection of road works in Zone 3",
        mr: "झोन 3 मधील रास्ता कामाची तपासणी ",
        date: "22 Apr 2026",
      },
    ],
  },

  {
    slug: "additional-commissioner-1",
    nameEn: "Additional Commissioner – I",
    nameMr: "अतिरिक्त आयुक्त - 1",
    headEn: "Shri. Ranjit Patil",
    headMr: "श्री रणजीत पाटील",
    designationEn: "Additional Municipal Commissioner - I",
    designationMr: "अतिरिक्त महानगरपालिका आयुक्त - १",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "addlcomm1@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    updates: [
      {
        en: "Road repair works approved for Ward 12",
        mr: "वॉर्ड 12 साठी रस्ता दुरुस्ती काम मंजूर",
        date: "27 Apr 2026",
      },
      {
        en: "Bridge inspection report submitted",
        mr: "पूल तपासणी अहवाल सादर",
        date: "20 Apr 2026",
      },
    ],
  },

  {
    slug: "additional-commissioner-2",
    nameEn: "Additional Commissioner – II",
    nameMr: "अतिरिक्त आयुक्त - 2",
    headEn: "Smt Kalpita Pimple",
    headMr: "श्रीमती कल्पिता पिंपळे",
    designationEn: "Additional Municipal Commissioner - II",
    designationMr: "अतिरिक्त महानगरपालिका आयुक्त - 2",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "addlcomm2@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    updates: [
      {
        en: "Property tax collection drive launched",
        mr: "मालमत्ता कर संकलन मोहिम सुरु ",
        date: "26 Apr 2026",
      },
      {
        en: "Grievance redressal camp at Zone 5",
        mr: " झोन 5 येथे तक्रार निवारण शिबीर ",
        date: "18 Apr 2026",
      },
    ],
  },

  {
  slug: "city-engineer",
  nameEn: "City Engineer & Executive Engineer",
  nameMr: "कार्यकारी अभियंता तथा प्रभारी शहर अभियंता",
  headEn: "Shri Sanjay Kombde",
  headMr: "श्री संजय कोंबडे",
  designationEn: "Executive Engineer",
  designationMr: "कार्यकारी अभियंता",
  phone: DEPARTMENT_CONTACT_PHONE,
  email: "",
  addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar - 431001",
  addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
  updates: [],
},
  /* ============================================================
   * ADDITIONAL COMMISSIONER – I CONTROLLED DEPARTMENTS
   * PDF DATED 03/09/2026
   * ============================================================ */

  {
    slug: "general-administration",
    nameEn: "General Administration & Records Department",
    nameMr: "सामान्य प्रशासन व अभिलेख विभाग",
    headEn: "Shri Abhay Pramanik",
    headMr: "श्री अभय प्रामाणिक",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "labour",
    nameEn: "Labour Department",
    nameMr: "कामगार विभाग",
    headEn: "Shri Vikas Nawale",
    headMr: "श्री विकास नवाळे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "education",
    nameEn: "Education Department",
    nameMr: "शिक्षण विभाग",
    headEn: "Shri Ankush Pandhare",
    headMr: "श्री अंकुश पांढरे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "tourism-development",
    nameEn: "Tourism Development Department",
    nameMr: "पर्यटन विकास विभाग",
    headEn: "Shri Ankush Pandhare",
    headMr: "श्री अंकुश पांढरे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "cultural",
    nameEn: "Cultural Department",
    nameMr: "सांस्कृतिक विभाग",
    headEn: "Shri Ankush Pandhare",
    headMr: "श्री अंकुश पांढरे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "fire-disaster-management",
    nameEn: "Fire & Disaster Management Department",
    nameMr: "अग्निशमन विभाग व आपत्ती व्यवस्थापन विभाग",
    headEn: "Shri Ankush Pandhare",
    headMr: "श्री अंकुश पांढरे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Fire Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका अग्निशमन विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "solid-waste-management",
    nameEn: "Solid Waste Management Department",
    nameMr: "घनकचरा व्यवस्थापन विभाग",
    headEn: "Shri Nandkishor Bhombe",
    headMr: "श्री नंदकिशोर भोंबे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "environment",
    nameEn: "Environment Department (NCAP)",
    nameMr: "पर्यावरण विभाग (NCAP सह)",
    headEn: "Shri Nandkishor Bhombe",
    headMr: "श्री नंदकिशोर भोंबे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "garden",
    nameEn: "Garden Department",
    nameMr: "उद्यान विभाग",
    headEn: "Shri Vijay Patil",
    headMr: "श्री विजय पाटील",
    designationEn: "Chief Garden Officer",
    designationMr: "मुख्य उद्यान अधिकारी",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Garden Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, उद्यान विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "kham-sukhna-river",
    nameEn: "Kham & Sukhna River Rejuvenation Project",
    nameMr: "खाम व सुखना नदी पुनरुज्जीवन प्रकल्प",
    headEn: "Shri Vijay Patil",
    headMr: "श्री विजय पाटील",
    designationEn: "Chief Garden Officer",
    designationMr: "मुख्य उद्यान अधिकारी",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "sports-swimming",
    nameEn: "Sports & Swimming Department",
    nameMr: "क्रीडा व जलतरण विभाग",
    headEn: "Shri Vijay Patil",
    headMr: "श्री विजय पाटील",
    designationEn: "Manager, Swimming",
    designationMr: "व्यवस्थापक, जलतरण",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Sports Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, क्रीडा विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  /* ============================================================
   * ADDITIONAL COMMISSIONER – II CONTROLLED DEPARTMENTS
   * ============================================================ */

  {
    slug: "health",
    nameEn: "Health Department",
    nameMr: "आरोग्य विभाग",
    headEn: "Dr. Ujjwala Bhamre",
    headMr: "डॉ. उज्वला भामरे",
    designationEn: "In-charge Medical Health Officer",
    designationMr: "प्र. वैद्यकीय आरोग्य अधिकारी",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Health Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, आरोग्य विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "tax",
    nameEn: "Tax Department (Property Tax & Water Tax)",
    nameMr: "कर विभाग (मालमत्ता कर व पाणीपट्टी)",
    headEn: "Shri Vikas Nawale",
    headMr: "श्री विकास नवाळे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Tax Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, कर विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "market-license",
    nameEn: "Market Licence Department",
    nameMr: "बाजार परवाना विभाग",
    headEn: "Shri Vikas Nawale",
    headMr: "श्री विकास नवाळे",
    designationEn: "In-charge Assistant Commissioner",
    designationMr: "प्र. सहायक आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "property-management",
    nameEn: "Property Management Department",
    nameMr: "मालमत्ता व्यवस्थापन विभाग",
    headEn: "Shri Vikas Nawale",
    headMr: "श्री विकास नवाळे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "bot",
    nameEn: "BOT Department",
    nameMr: "बीओटी विभाग",
    headEn: "Shri Vikas Nawale",
    headMr: "श्री विकास नवाळे",
    designationEn: "In-charge Sub-Divisional Engineer",
    designationMr: "प्र. उप अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "animal-veterinary",
    nameEn: "Animal Museum & Veterinary Department",
    nameMr: "प्राणी संग्रहालय व पशुवैद्यकीय विभाग",
    headEn: "Shri Vijay Patil",
    headMr: "श्री विजय पाटील",
    designationEn: "Chief Garden Officer",
    designationMr: "मुख्य उद्यान अधिकारी",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Animal & Veterinary Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, प्राणी संग्रहालय व पशुवैद्यकीय विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "election-census",
    nameEn: "Election & Census Department",
    nameMr: "निवडणूक व जनगणना विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "legal",
    nameEn: "Legal Department",
    nameMr: "विधी विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "social-development",
    nameEn: "Social Development Department",
    nameMr: "समाज विकास विभाग (महिला, बालविकास व दिव्यांग)",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "library",
    nameEn: "Library Department",
    nameMr: "ग्रंथालय विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "nulm",
    nameEn: "NULM Department",
    nameMr: "एनयुएलएम विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC NULM Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, NULM विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "information-technology",
    nameEn: "Information & Technology Department",
    nameMr: "माहिती व तंत्रज्ञान विभाग (संगणक/ई-गव्हर्नन्स/ई-निविदा)",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC IT Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, माहिती व तंत्रज्ञान विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "information-public-relations",
    nameEn: "Information & Public Relations Department",
    nameMr: "माहिती व जनसंपर्क विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "central-stores",
    nameEn: "Central Stores Department",
    nameMr: "मध्यवर्ती भांडार विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Central Stores, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मध्यवर्ती भांडार विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "pmay",
    nameEn: "PMAY Department",
    nameMr: "पीएमएवाय विभाग",
    headEn: "Smt. Aparna Thete",
    headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC PMAY Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, पीएमएवाय विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "ramai-housing",
    nameEn: "Ramai Housing Department",
    nameMr: "घरकुल विभाग (रमाई)",
    headEn: "Smt. Savita Sonawane",
    headMr: "श्रीमती सविता सोनवणे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Ramai Housing Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, घरकुल विभाग (रमाई), छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  /* ============================================================
   * TECHNICAL DEPARTMENTS
   * ============================================================ */

  {
    slug: "roads",
    nameEn: "Roads Department",
    nameMr: "रस्ते विभाग",
    headEn: "Shri Balasaheb Shirsat",
    headMr: "श्री बाळासाहेब शिरसाट",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Roads Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, रस्ते विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "ramai-civil",
    nameEn: "Ramai Housing Department – Civil Works",
    nameMr: "रमाई घरकुल विभाग (स्थापत्य कामे)",
    headEn: "Shri Balasaheb Shirsat",
    headMr: "श्री बाळासाहेब शिरसाट",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Civil Engineering Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, स्थापत्य विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "solid-waste-civil",
    nameEn: "Solid Waste Management – Civil Works",
    nameMr: "घनकचरा व्यवस्थापन विभाग (स्थापत्य कामे)",
    headEn: "Shri Sanjay Kombde",
    headMr: "श्री संजय कोंबडे",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Civil Engineering Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, स्थापत्य विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "buildings",
    nameEn: "Buildings Department",
    nameMr: "इमारती विभाग",
    headEn: "Shri Sanjay Kombde",
    headMr: "श्री संजय कोंबडे",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Buildings Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, इमारती विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "pmay-civil",
    nameEn: "PMAY Department – Civil Works",
    nameMr: "पीएमएवाय विभाग (स्थापत्य कामे)",
    headEn: "Shri Sanjay Kombde",
    headMr: "श्री संजय कोंबडे",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC PMAY Civil Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, पीएमएवाय स्थापत्य विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "garden-civil",
    nameEn: "Garden Department – Civil Works",
    nameMr: "उद्यान विभाग (स्थापत्य कामे)",
    headEn: "Shri Sanjay Kombde",
    headMr: "श्री संजय कोंबडे",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Civil Engineering Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, स्थापत्य विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "drainage",
    nameEn: "Drainage Department",
    nameMr: "ड्रेनेज विभाग",
    headEn: "Shri Sanjay Chamle",
    headMr: "श्री संजय चामले",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Drainage Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, ड्रेनेज विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "drainage-special-east",
    nameEn: "Drainage Special Project – Eastern Assembly",
    nameMr: "ड्रेनेज विशेष प्रकल्प (पूर्व विधानसभा)",
    headEn: "Shri Sanjay Chamle",
    headMr: "श्री संजय चामले",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Drainage Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, ड्रेनेज विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "drainage-special-central",
    nameEn: "Drainage Special Project – Central Assembly",
    nameMr: "ड्रेनेज विशेष प्रकल्प (मध्य विधानसभा)",
    headEn: "Shri Sanjay Chamle",
    headMr: "श्री संजय चामले",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Drainage Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, ड्रेनेज विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "drainage-special-west",
    nameEn: "Drainage Special Project – Satara-Deolai & Western Assembly",
    nameMr: "ड्रेनेज विशेष प्रकल्प (सातारा देवळाई व पश्चिम विधानसभा)",
    headEn: "Shri Sanjay Chamle",
    headMr: "श्री संजय चामले",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Drainage Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, ड्रेनेज विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "water-supply-distribution",
    nameEn: "Water Supply Distribution Department",
    nameMr: "पाणी पुरवठा वितरण विभाग",
    headEn: "Shri D. P. Gaikwad",
    headMr: "श्री डी. पी. गायकवाड",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Water Supply Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, पाणीपुरवठा विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "jayakwadi-water-civil",
    nameEn: "Jayakwadi Water Supply – Civil Works",
    nameMr: "जायकवाडी पाणीपुरवठा (स्थापत्य)",
    headEn: "Shri D. P. Gaikwad",
    headMr: "श्री डी. पी. गायकवाड",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Water Supply Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, पाणीपुरवठा विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "jayakwadi-water-mechanical",
    nameEn: "Jayakwadi Water Supply – Mechanical",
    nameMr: "जायकवाडी पाणीपुरवठा (यांत्रिकी)",
    headEn: "Shri Sachin Waikar",
    headMr: "श्री सचिन वाईकर",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Water Supply Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, पाणीपुरवठा विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "city-water-mechanical",
    nameEn: "City Water Supply – Mechanical",
    nameMr: "शहर पाणीपुरवठा (यांत्रिकी)",
    headEn: "Shri Sachin Waikar",
    headMr: "श्री सचिन वाईकर",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Water Supply Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, पाणीपुरवठा विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  /* ============================================================
   * ADDITIONAL CITY ENGINEER CONTROLLED
   * ============================================================ */

  {
    slug: "mechanical-vehicles",
    nameEn: "Mechanical (Vehicles) Department",
    nameMr: "यांत्रिकी (वाहने) विभाग",
    headEn: "Shri Amol Kulkarni",
    headMr: "श्री अमोल कुलकर्णी",
    designationEn: "Executive Engineer",
    designationMr: "कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Mechanical Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, यांत्रिकी विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "electrical",
    nameEn: "Electrical Department",
    nameMr: "विद्युत विभाग",
    headEn: "Smt. Mohini Warbhuvan",
    headMr: "श्रीमती मोहिनी वारभुवन",
    designationEn: "In-charge Executive Engineer",
    designationMr: "प्र. कार्यकारी अभियंता",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Electrical Department, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, विद्युत विभाग, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  /* ============================================================
   * ENCROACHMENT / SECURITY
   * ============================================================ */

  {
    slug: "encroachment",
    nameEn: "Encroachment Department",
    nameMr: "अतिक्रमण विभाग",
    headEn: "Smt. Savita Sonawane",
    headMr: "श्रीमती सविता सोनवणे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },

  {
    slug: "security",
    nameEn: "Security Department",
    nameMr: "सुरक्षा विभाग",
    headEn: "Smt. Savita Sonawane",
    headMr: "श्रीमती सविता सोनवणे",
    designationEn: "Deputy Municipal Commissioner",
    designationMr: "उप आयुक्त",
    phone: DEPARTMENT_CONTACT_PHONE,
    email: "",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर – ४३१००१",
    updates: [],
  },
];

export { DEPARTMENTS };
export type { DeptInfo };


/* ============================================================
 * LATEST UPDATES TICKER
 * ============================================================ */

const UpdatesTicker = ({
  updates,
  en,
}: {
  updates: DeptInfo["updates"];
  en: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pos = 0;
    const speed = 0.5;

    const tick = () => {
      pos += speed;

      if (pos >= el.scrollHeight / 2) {
        pos = 0;
      }

      el.scrollTop = pos;
    };

    const id = setInterval(tick, 30);

    return () => clearInterval(id);
  }, []);

  const doubled = [...updates, ...updates];

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
      <div className="bg-civic-blue px-4 py-3 flex items-center gap-2">
        <Bell className="h-4 w-4 text-civic-gold" />

        <span className="text-white font-bold text-sm">
          {en ? "Latest Updates" : "ताज्या घडामोडी"}
        </span>
      </div>

      <div
        ref={ref}
        className="flex-1 overflow-hidden"
        style={{ maxHeight: "340px" }}
      >
        <div>
          {doubled.map((u, i) => (
            <div
              key={i}
              className="px-4 py-3 border-b border-border last:border-0 hover:bg-civic-gold/5 transition-colors"
            >
              <p className="text-xs font-bold text-civic-blue mb-0.5">
                {u.date}
              </p>

              <p className="text-sm text-foreground leading-snug">
                {en ? u.en : u.mr}
              </p>
            </div>
          ))}

          {updates.length === 0 && (
            <div className="px-4 py-6 text-sm text-muted-foreground">
              {en
                ? "No latest updates available."
                : "ताज्या घडामोडी उपलब्ध नाहीत."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


/* ============================================================
 * DEPARTMENT DETAIL PAGE
 * ============================================================ */

const DepartmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, d } = useLang();

  const en = lang === "en";

  const base = DEPARTMENTS.find((item) => item.slug === slug);

  const dept = base
    ? {
        ...base,
        ...(DEPT_EXTRAS[base.slug] ?? {}),
      }
    : undefined;

  if (!dept) {
    return (
      <Layout>
        <PageHeader
          eyebrow={en ? "Departments" : "विभाग"}
          title={
            en
              ? "Department Not Found"
              : "विभाग सापडला नाही"
          }
          subtitle=""
        />

        <section className="py-16 container text-center">
          <p className="text-muted-foreground mb-6">
            {en
              ? "The requested department page does not exist."
              : "विभाग उपलब्ध नाही"}
          </p>

          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-civic-blue font-bold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />

            {en
              ? "Back to Departments"
              : "विभागाकडे परत"}
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Departments" : "विभाग"}
        title={en ? dept.nameEn : dept.nameMr}
        subtitle={
          en
            ? "Department information, head of department and latest updates."
            : "विभाग माहिती विभागप्रमुख आणि ताज्या घडामोडी"
        }
      />

      <section className="py-8 md:py-14 container">

        {/* Back link */}
        <Link
          to="/departments"
          className="inline-flex items-center gap-1.5 text-civic-blue text-sm font-semibold hover:text-civic-red transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />

          {en
            ? "All Departments"
            : "सर्व विभाग"}
        </Link>

        {/* Main grid: profile + updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Left: Profile card */}
          <div className="md:col-span-2 space-y-6">

            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">

              {/* Blue header */}
              <div className="bg-gradient-to-br from-civic-blue to-civic-blue/80 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 border-4 border-white/30 shadow-xl shrink-0 overflow-hidden">

                  {dept.image ? (
                    <img
                      src={dept.image}
                      alt={en ? dept.headEn : dept.headMr}
                      className="absolute left-1/2 object-cover"
                      style={{
                        width: dept.photoSize ?? "100%",
                        height: dept.photoSize ?? "100%",
                        minWidth: dept.photoSize ? "115%" : "100%",
                        minHeight: dept.photoSize ? "115%" : "100%",
                        top: dept.photoTop ?? "0",
                        transform: "translateX(-50%)",
                      }}
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-white font-bold text-3xl md:text-4xl">
                      {(en ? dept.headEn : dept.headMr).charAt(0)}
                    </span>
                  )}

                </div>

                <div>
                  <h2 className="font-serif text-lg md:text-xl font-bold text-white mb-1">
                    {en ? dept.headEn : dept.headMr}
                  </h2>

                  {dept.designationEn || dept.designationMr ? (
                    <p className="text-civic-gold text-sm font-semibold">
                      {en
                        ? dept.designationEn
                        : dept.designationMr}
                    </p>
                  ) : null}

                  {(en ? dept.nameEn : dept.nameMr) !==
                    (en
                      ? dept.designationEn
                      : dept.designationMr) &&
                    !(en
                      ? dept.designationEn
                      : dept.designationMr
                    )
                      .toLowerCase()
                      .includes(
                        (en
                          ? dept.nameEn
                          : dept.nameMr
                        ).toLowerCase()
                      ) && (
                      <p className="text-white/70 text-xs mt-1">
                        {en
                          ? dept.nameEn
                          : dept.nameMr}
                      </p>
                    )}
                </div>
              </div>


              {/* Contact info */}
              <div className="p-5 md:p-6 space-y-4">

                {dept.phone && (
                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />

                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">
                        {en ? "Phone" : "दुरध्वनी"}
                      </p>

                      <p className="font-semibold text-civic-ink">
                        {d(dept.phone)}
                      </p>
                    </div>
                  </div>
                )}


                {dept.email && (
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />

                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">
                        {en ? "Email" : "ई-मेल"}
                      </p>

                      <p className="font-semibold text-civic-ink break-all">
                        {dept.email}
                      </p>
                    </div>
                  </div>
                )}


                {((en ? dept.addressEn : dept.addressMr) || "") && (
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />

                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">
                        {en
                          ? "Office Address"
                          : "कार्यालय पत्ता"}
                      </p>

                      <p className="font-semibold text-civic-ink leading-snug">
                        {d(
                          en
                            ? dept.addressEn
                            : dept.addressMr
                        )}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>


            {/* Key Responsibilities */}
            {(
              (
                en
                  ? dept.responsibilitiesEn
                  : dept.responsibilitiesMr
              )?.length ?? 0
            ) > 0 && (
              <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">

                <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
                  {en
                    ? "Key Responsibilities"
                    : "मुख्य जबाबदाऱ्या"}
                </h3>

                <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                  {(en
                    ? dept.responsibilitiesEn!
                    : dept.responsibilitiesMr!
                  ).map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            )}


            {/* Services */}
            {(
              (
                en
                  ? dept.servicesEn
                  : dept.servicesMr
              )?.length ?? 0
            ) > 0 && (
              <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">

                <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
                  {en
                    ? "Services"
                    : "सेवा"}
                </h3>

                <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                  {(en
                    ? dept.servicesEn!
                    : dept.servicesMr!
                  ).map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            )}


            {/* Related Documents */}
            {(
              dept.relatedDocIds?.filter(
                (id) => getCivicRecord(id)
              ).length ?? 0
            ) > 0 && (
              <div className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">

                <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
                  {en
                    ? "Related Documents"
                    : "संबंधित दस्तऐवज"}
                </h3>

                <ul className="space-y-2">

                  {dept.relatedDocIds!
                    .map((id) => getCivicRecord(id))
                    .filter(
                      (
                        r
                      ): r is NonNullable<
                        typeof r
                      > => !!r
                    )
                    .map((rec) => (
                      <li key={rec.id}>

                        <Link
                          to={`/digital-repository/${rec.id}`}
                          className="flex items-center gap-2 text-sm font-semibold text-civic-blue hover:underline"
                        >
                          <FileText className="h-4 w-4 shrink-0" />

                          {en
                            ? rec.titleEn
                            : rec.titleMr}
                        </Link>

                      </li>
                    ))}

                </ul>
              </div>
            )}

          </div>


          {/* Right: Updates ticker */}
          <div className="md:col-span-1">
            <UpdatesTicker
              updates={dept.updates}
              en={en}
            />
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default DepartmentDetail;