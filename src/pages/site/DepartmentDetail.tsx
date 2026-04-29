import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Phone, Mail, MapPin, ArrowLeft, Bell } from "lucide-react";
import { useEffect, useRef } from "react";

// import amolSir from "@assets/departments/shri_amol_sir.png";

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
  updates: { en: string; mr: string; date: string }[];
}

const DEPARTMENTS: DeptInfo[] = [
  {
    slug: "municipal-commissioner",
    nameEn: "Municipal Commissioner", nameMr: "महानगरपालिका आयुक्त",
    headEn: "Shri Amol Yedage, IAS", headMr: "श्री. अमोल येडगे, भा.प्र.से.",
    designationEn: "Municipal Commissioner & Administrator", designationMr: "महानगरपालिका आयुक्त",
    phone: "0240-2331731", email: "commissioner@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Behind Head Post Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, हेड पोस्ट ऑफिसच्या मागे, छत्रपती संभाजीनगर, महाराष्ट्र, भारत, ४३१००१ ",
    // aboutEn: "The Municipal Commissioner is the chief executive officer of the Chhatrapati Sambhajinagar Municipal Corporation, responsible for overall administration, policy implementation and citizen service delivery.",
    // aboutMr: "महानगरपालिका आयुक्त हे छत्रपती संभाजीनगर महानगरपालिकेचे मुख्य कार्यकारी अधिकारी असून ते एकूण प्रशासन, धोरण, अंमलबजावणी आणि नागरिक सेवा वितरणासाठी जबाबदार आहेत.",
    // image: amolSir,
    updates: [
      { en: "Smart City project review meeting scheduled", mr: "स्मार्ट सिटी प्रकल्प आढावा बैठक नियोजित", date: "28 Apr 2026" },
      { en: "Annual budget presentation to General Body", mr: "सर्वसाधारण सभेला वार्षिक अर्थसंकल्प सादरीकरण", date: "25 Apr 2026" },
      { en: "Inspection of road works in Zone 3", mr: "झोन 3 मधील रास्ता कामाची तपासणी ", date: "22 Apr 2026" },
    ],
  },
  {
    slug: "additional-commissioner-1",
    nameEn: "Additional Commissioner – I", nameMr: "अतिरिक्त आयुक्त - 1",
    headEn: "Shri. Ranjit Patil", headMr: "श्री रणजीत पाटील",
    designationEn: "Additional Municipal Commissioner - I", designationMr: "अतिरिक्त महानगरपालिका आयुक्त - १",
    phone: "0240-2331732", email: "addlcomm1@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "Additional Commissioner – I oversees civic infrastructure, public works and capital project execution across the corporation.",
    // aboutMr: "अतिरिक्त आयुक्त ह नगर पयभत सवध, सरवजनक बधकम आण भडवल परकलप अमलबजवणवर दखरख करतत.",
    updates: [
      { en: "Road repair works approved for Ward 12", mr: "वॉर्ड 12 साठी रस्ता दुरुस्ती काम मंजूर", date: "27 Apr 2026" },
      { en: "Bridge inspection report submitted", mr: "पूल तपासणी अहवाल सादर", date: "20 Apr 2026" },
    ],
  },
  {
    slug: "additional-commissioner-2",
    nameEn: "Additional Commissioner – II", nameMr: "अतिरिक्त आयुक्त - 2",
    headEn: "Smt Kalpita Pimple", headMr: "श्रीमती कल्पिता पिंपळे",
    designationEn: "Additional Municipal Commissioner - II", designationMr: "अतिरिक्त महानगरपालिका आयुक्त - 2",
    phone: "0240-2331733", email: "addlcomm2@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "Additional Commissioner – II handles revenue, taxation, citizen services and grievance redressal for the corporation.",
    // aboutMr: "अतरकत आयकत –  ह महसल, कर, नगरक सव आण तकरर नवरण हतळतत.",
    updates: [
      { en: "Property tax collection drive launched", mr: "मालमत्ता कर संकलन मोहिम सुरु ", date: "26 Apr 2026" },
      { en: "Grievance redressal camp at Zone 5", mr: " झोन 5 येथे तक्रार निवारण शिबीर ", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "health",
    nameEn: "Health Department", nameMr: "आरोग्य विभाग",
    headEn: "Dr. Paras Mandlecha", headMr: " डॉ. पारस मंडलेचा",
    designationEn: "HOD - Health Department", designationMr: "हेड ऑफ डिपार्टमेंट - आरोग्य विभाग",
    phone: "0240-2331740", email: "health@csmc.gov.in",
    addressEn: "CSMC Health Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Health Department manages public health services, dispensaries, vaccination drives, sanitation and epidemic control across the city.",
    // aboutMr: "आरगय वभग शहरतल सरवजनक आरगय सव, दवखन, लसकरण महम, सवचछत आण सथरग नयतरण वयवसथपत करत.",
    updates: [
      { en: "Free health camp at Cidco area on 2 May", mr: "2 मे रोजी सिडको परिसरात मोफत आरोग्य शिबीर", date: "28 Apr 2026" },
      { en: "Dengue awareness drive in all zones", mr: "सर्व झोन मध्ये डेंग्यू जनजागृती मोहीम", date: "24 Apr 2026" },
      { en: "New dispensary inaugurated at Garkheda", mr: "गारखेडा येथे नवीन दवाखाना उदघाटन", date: "15 Apr 2026" },
    ],
  },
  {
    slug: "animal-husbandry",
    nameEn: "Animal Husbandry Department", nameMr: "पशूसंवर्धन विभाग",
    headEn: "Smt Aparna Thete", headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner", designationMr: "उपायुक्त",
    phone: "0240-2331745", email: "animal@csmc.gov.in",
    addressEn: "CSMC Animal Husbandry Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Animal Husbandry Department manages stray animal control, veterinary services, animal birth control programs and cattle pound operations.",
    // aboutMr: "पशसवरधन वभग भटकय परणयच नयतरण, पशवदयकय सव, परण जनम नयतरण करयकरम आण गशळ करयनवयन वयवसथपत करत.",
    updates: [
      { en: "ABC programme completed in Zone 2", mr: "झोन 2 मध्ये ABC कार्यक्रम पूर्ण", date: "27 Apr 2026" },
      { en: "Vaccination drive for stray dogs", mr: "भटक्या कुत्र्यांसाठी लसीकरण मोहीम", date: "20 Apr 2026" },
    ],
  },
  {
    slug: "drainage",
    nameEn: "Drainage Department", nameMr: "मलनिस्सारण विभाग",
    headEn: "Shri Anil Tanpure", headMr: " श्री अनिल तनपुरे",
    designationEn: "", designationMr: "",
    phone: "0240-2331746", email: "drainage@csmc.gov.in",
    addressEn: "CSMC Drainage Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Drainage Department maintains the city's sewerage network, STP operations, drainage cleaning and flood mitigation infrastructure.",
    // aboutMr: "मलनसरण वभग शहरच सडपण जळ, STP करयनवयन, नल सफई आण पर नयतरण पयभत सवध रखत.",
    updates: [
      { en: "Pre-monsoon drain cleaning drive started", mr: "पूर्व मान्सून नाला सफाई मोहीम सुरु", date: "28 Apr 2026" },
      { en: "STP capacity upgrade work in progress", mr: "STP क्षमता वाढ काम प्रगतीपथावर", date: "22 Apr 2026" },
    ],
  },
  {
    slug: "garden",
    nameEn: "Garden Department", nameMr: "उद्यान विभाग",
    headEn: "Dr Vijay Patil", headMr: "डॉ. विजय पाटील",
    designationEn: "", designationMr: "",
    phone: "0240-2331747", email: "garden@csmc.gov.in",
    addressEn: "CSMC Garden Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Garden Department develops and maintains public gardens, parks, tree plantation drives and green cover across the city.",
    // aboutMr: "उदयन वभग शहरतल सरवजनक उदयन, बग, वकषरपण महम आण हरत आचछदन वकसत व रखत.",
    updates: [
      { en: "New garden inaugurated at Prozone area", mr: "प्रोझोन परिसरात नवीन उद्यान उदघाटन", date: "26 Apr 2026" },
      { en: "Tree plantation drive: 5000 saplings planted", mr: "वृक्षारोपण मोहीम: 5000 रोपे लावली गेली", date: "22 Apr 2026" },
    ],
  },
  {
    slug: "estate",
    nameEn: "Estate Department", nameMr: "इस्टेट विभाग",
    headEn: "Smt Aparna Thete", headMr: "श्रीमती अपर्णा थेटे",
    designationEn: "Deputy Municipal Commissioner", designationMr: "उपायुक्त",
    phone: "0240-2331748", email: "estate@csmc.gov.in",
    addressEn: "CSMC Estate Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Estate Department manages corporation properties, leases, encroachment removal and municipal land records.",
    // aboutMr: "इसटट वभग महनगरपलक मलमतत, भडपटट, अतकरमण हटवण आण महनगरपलक जमन नद वयवसथपत करत.",
    updates: [
      { en: "Encroachment removal drive in Zone 4", mr: "झोन 4 मध्ये अतिक्रमण हटाव मोहीम", date: "25 Apr 2026" },
      { en: "Lease renewal notices issued", mr: "भाडेपट्टी नूतनीकरण नोटीस जारी", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "property-tax",
    nameEn: "Property Tax Department", nameMr: "मालमत्ता कर विभाग",
    headEn: "Shri. Vikas Nawale", headMr: "श्री विकास नवाळे",
    designationEn: "Deputy Municipal Commissioner (Property Tax)", designationMr: "उपायुक्त (मालमत्ता कर)",
    phone: "0240-2331749", email: "propertytax@csmc.gov.in",
    addressEn: "CSMC Property Tax Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Property Tax Department handles assessment, collection and revision of property taxes for all residential and commercial properties in the city.",
    // aboutMr: "मलमतत कर वभग शहरतल सरव नवस व वयवसयक मलमततसठ मलमतत करच मलयकन, सकलन आण सधरण हतळत.",
    updates: [
      { en: "Last date for tax payment with rebate: 31 May", mr: "सवलतीसह कर भरण्याची अंतिम तारीख: 30 एप्रिल", date: "28 Apr 2026" },
      { en: "Online payment portal updated", mr: "ऑनलाईन पेमेंट पोर्टल अपडेट", date: "20 Apr 2026" },
    ],
  },
  {
    slug: "water-tax",
    nameEn: "Water Tax Department", nameMr: "पाणी कर विभाग",
    headEn: "Shri Vikas Nawale", headMr: "श्री विकास नवाळे",
    designationEn: "Deputy Commissioner", designationMr: "उपायुक्त",
    phone: "0240-2331750", email: "watertax@csmc.gov.in",
    addressEn: "CSMC Water Supply Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Water Tax Department manages water supply billing, new connections, disconnections and water charge collection across the city.",
    // aboutMr: "पण कर वभग शहरतल पण परवठ बलग, नवन जडणय, खडन आण पण शलक सकलन वयवसथपत करत.",
    updates: [
      { en: "New water connections approved for Hudco area", mr: "हडको परिसरासाठी नवीन पाणी जोडणी मंजूर", date: "27 Apr 2026" },
      { en: "Water supply schedule revised for summer", mr: "उन्हाळ्यासाठी सुधारित पाणी पुरवठा वेळापत्रक", date: "15 Apr 2026" },
    ],
  },
  {
    slug: "town-planning",
    nameEn: "Town Planning Department", nameMr: "नगर रचना विभाग",
    headEn: "Shri Manoj Garje", headMr: "श्री मनोज गर्जे",
    designationEn: "", designationMr: "",
    phone: "0240-2331751", email: "townplanning@csmc.gov.in",
    addressEn: "CSMC Town Planning Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Town Planning Department handles building permissions, development plan implementation, layout approvals and urban development regulations.",
    // aboutMr: "नगर रचन वभग बधकम परवनगय, वकस आरखड अमलबजवण, लआउट मजर आण नगर वकस नयमन हतळत.",
    updates: [
      { en: "DP revision public notice issued", mr: "DP सुधारणा सार्वजनिक नोटीस जारी", date: "28 Apr 2026" },
      { en: "Building permission online portal launched", mr: "बांधकाम परवाना ऑनलाईन पोर्टल सुरु", date: "10 Apr 2026" },
    ],
  },
  {
    slug: "fire",
    nameEn: "Fire Department", nameMr: "अग्निशमन विभाग ",
    headEn: "Shri Ankush Pandhare", headMr: "श्री अंकुश पांढरे",
    designationEn: "", designationMr: "",
    phone: "101", email: "fire@csmc.gov.in",
    addressEn: "CSMC Fire Station, Osmanpura, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Fire Department provides fire fighting, rescue operations, fire NOC services and disaster response across the city.",
    // aboutMr: "अगनशमन वभग शहरत अगनशमन, बचव करय, अगन NOC सव आण आपतत परतसद परदन करत.",
    updates: [
      { en: "Fire safety audit of commercial buildings", mr: "व्यावसायिक इमारतीचे अग्नी सुरक्षा ऑडिट", date: "26 Apr 2026" },
      { en: "New fire tender vehicle commissioned", mr: "नवीन अग्निशमन वाहन कार्यान्वत", date: "12 Apr 2026" },
    ],
  },
  {
    slug: "license",
    nameEn: "License Department", nameMr: "परवाना विभाग",
    headEn: "Shri. Vikas Nawale", headMr: "श्री विकास नवाळे",
    designationEn: "", designationMr: "",
    phone: "0240-2331752", email: "license@csmc.gov.in",
    addressEn: "CSMC License Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The License Department issues trade licenses, shop establishment certificates, hawker licenses and other business permits.",
    // aboutMr: "परवन वभग वयपर परवन, दकन सथपन परमणपतर, फरवल परवन आण इतर वयवसय परवन जर करत.",
    updates: [
      { en: "Trade license renewal camp on 5 May", mr: "5 मे व्यापार परवाना नूतनीकरण शिबीर", date: "28 Apr 2026" },
      { en: "Online license application portal updated", mr: "ऑनलाईन परवाना अर्ज पोर्टल अपडेट", date: "16 Apr 2026" },
    ],
  },
  {
    slug: "electrical",
    nameEn: "Electrical Department", nameMr: "विद्युत विभाग",
    headEn: "", headMr: "",
    designationEn: "", designationMr: "",
    phone: "0240-2331753", email: "electrical@csmc.gov.in",
    addressEn: "CSMC Electrical Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The Electrical Department manages street lighting, LED upgrades, electrical maintenance of municipal buildings and public infrastructure.",
    // aboutMr: "वदयत वभग पथदव, LED अदयतन, महनगरपलक इमरतच वदयत दखभल आण सरवजनक पयभत सवध वयवसथपत करत.",
    updates: [
      { en: "LED street light installation in Zone 6 complete", mr: "झोन 6 मध्ये LED पथदिवे बसवणे पूर्ण", date: "25 Apr 2026" },
      { en: "Solar panel installation at municipal buildings", mr: "महानगरपालिका इमारतीवर सोलर पॅनल बसवणे", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "nulm",
    nameEn: "NULM Department", nameMr: "NULM विभाग",
    headEn: "Shri Lakhichand Chavhan", headMr: "श्री लखीचंद चव्हाण",
    designationEn: "Deputy Municipal Commissioner", designationMr: "उपायुक्त",
    phone: "0240-2331754", email: "nulm@csmc.gov.in",
    addressEn: "CSMC NULM Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छत्रपती संभाजीनगर महानगरपालिका, मुख्य इमारत, टाऊन हॉल, छत्रपती संभाजीनगर, ४३१००१",
    // aboutEn: "The NULM Department implements the National Urban Livelihoods Mission — skill development, self-help groups, street vendor support and urban poverty alleviation.",
    // aboutMr: "NULM वभग रषटरय नगर उपजवक अभयन रबवत — कशलय वकस, बचत गट, फरवल सहयय आण नगर दरदरय नरमलन.",
    updates: [
      { en: "Skill training batch started for 200 youth", mr: "200 युवकांसाठी कौशल्य प्रशिक्षण बॅच सुरु", date: "27 Apr 2026" },
      { en: "SHG loan disbursement camp", mr: "बचत गट कर्ज वितरण शिबीर", date: "20 Apr 2026" },
    ],
  },
];

export { DEPARTMENTS };
export type { DeptInfo };

const UpdatesTicker = ({ updates, en }: { updates: DeptInfo["updates"]; en: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;
    const tick = () => {
      pos += speed;
      if (pos >= el.scrollHeight / 2) pos = 0;
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
        <span className="text-white font-bold text-sm">{en ? "Latest Updates" : "ताज्या घडामोडी"}</span>
      </div>
      <div ref={ref} className="flex-1 overflow-hidden" style={{ maxHeight: "340px" }}>
        <div>
          {doubled.map((u, i) => (
            <div key={i} className="px-4 py-3 border-b border-border last:border-0 hover:bg-civic-gold/5 transition-colors">
              <p className="text-xs font-bold text-civic-blue mb-0.5">{u.date}</p>
              <p className="text-sm text-foreground leading-snug">{en ? u.en : u.mr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DepartmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const en = lang === "en";
  const dept = DEPARTMENTS.find(d => d.slug === slug);

  if (!dept) {
    return (
      <Layout>
        <PageHeader eyebrow={en ? "Departments" : "विभाग"} title={en ? "Department Not Found" : "विभाग सापडला नाही"} subtitle="" />
        <section className="py-16 container text-center">
          <p className="text-muted-foreground mb-6">{en ? "The requested department page does not exist." : "विभाग उपलब्ध नाही"}</p>
          <Link to="/departments" className="inline-flex items-center gap-2 text-civic-blue font-bold hover:underline">
            <ArrowLeft className="h-4 w-4" /> {en ? "Back to Departments" : "विभागाकडे परत"}
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
        subtitle={en ? "Department information, head of department and latest updates." : "विभाग माहिती विभागप्रमुख आणि ताज्या घडामोडी"}
      />
      <section className="py-8 md:py-14 container">
        {/* Back link */}
        <Link to="/departments" className="inline-flex items-center gap-1.5 text-civic-blue text-sm font-semibold hover:text-civic-red transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> {en ? "All Departments" : "सर्व विभाग"}
        </Link>

        {/* Main grid: profile + updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Left: Profile card */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
              {/* Blue header */}
              <div className="bg-gradient-to-br from-civic-blue to-civic-blue/80 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 border-4 border-white/30 shadow-xl flex items-center justify-center shrink-0 overflow-hidden">
                  {dept.image ? (
                    <img src={dept.image} alt={en ? dept.headEn : dept.headMr} className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="text-white font-bold text-3xl md:text-4xl">
                      {(en ? dept.nameEn : dept.nameMr).charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="font-serif text-lg md:text-xl font-bold text-white mb-1">
                    {en ? dept.headEn : dept.headMr}
                  </h2>
                  <p className="text-civic-gold text-sm font-semibold">
                    {en ? dept.designationEn : dept.designationMr}
                  </p>
                  <p className="text-white/70 text-xs mt-1">{en ? dept.nameEn : dept.nameMr}</p>
                </div>
              </div>

              {/* Contact info */}
              <div className="p-5 md:p-6 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Phone" : "दुरध्वनी"}</p>
                    <p className="font-semibold text-civic-ink">{dept.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Email" : "ई-मेल"}</p>
                    <p className="font-semibold text-civic-ink break-all">{dept.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Office Address" : "कार्यालय पत्ता"}</p>
                    <p className="font-semibold text-civic-ink leading-snug">{en ? dept.addressEn : dept.addressMr}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Updates ticker */}
          <div className="md:col-span-1">
            <UpdatesTicker updates={dept.updates} en={en} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentDetail;
