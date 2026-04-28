import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageContext";
import { Phone, Mail, MapPin, ArrowLeft, Bell } from "lucide-react";
import { useEffect, useRef } from "react";

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
  aboutEn: string;
  aboutMr: string;
  updates: { en: string; mr: string; date: string }[];
}

const DEPARTMENTS: DeptInfo[] = [
  {
    slug: "municipal-commissioner",
    nameEn: "Municipal Commissioner", nameMr: "महनगरपलक आयकत",
    headEn: "Shri Amol Yedage, IAS", headMr: "शर. अमल यडग, भ.पर.स.",
    designationEn: "Municipal Commissioner & Administrator", designationMr: "महनगरपलक आयकत व परशसक",
    phone: "0240-2331731", email: "commissioner@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Behind Head Post Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक मखय इमरत, टऊन हल, हड पसट ऑफसचय मग, छतरपत सभजनगर – ",
    aboutEn: "The Municipal Commissioner is the chief executive officer of the Chhatrapati Sambhajinagar Municipal Corporation, responsible for overall administration, policy implementation and citizen service delivery.",
    aboutMr: "महनगरपलक आयकत ह छतरपत सभजनगर महनगरपलकच मखय करयकर अधकर असन त एकण परशसन, धरण अमलबजवण आण नगरक सव वतरणसठ जबबदर आहत.",
    updates: [
      { en: "Smart City project review meeting scheduled", mr: "समरट सट परकलप आढव बठक नयजत", date: "28 Apr 2026" },
      { en: "Annual budget presentation to General Body", mr: "सरवसधरण सभल वरषक अरथसकलप सदरकरण", date: "25 Apr 2026" },
      { en: "Inspection of road works in Zone 3", mr: "झन  मधल रसत कमच तपसण", date: "22 Apr 2026" },
    ],
  },
  {
    slug: "additional-commissioner-1",
    nameEn: "Additional Commissioner – I", nameMr: "अतरकत आयकत – ",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Additional Municipal Commissioner", designationMr: "अतरकत महनगरपलक आयकत",
    phone: "0240-2331732", email: "addlcomm1@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक मखय इमरत, टऊन हल, छतरपत सभजनगर – ",
    aboutEn: "Additional Commissioner – I oversees civic infrastructure, public works and capital project execution across the corporation.",
    aboutMr: "अतरकत आयकत –  ह नगर पयभत सवध, सरवजनक बधकम आण भडवल परकलप अमलबजवणवर दखरख करतत.",
    updates: [
      { en: "Road repair works approved for Ward 12", mr: "वरड  सठ रसत दरसत कम मजर", date: "27 Apr 2026" },
      { en: "Bridge inspection report submitted", mr: "पल तपसण अहवल सदर", date: "20 Apr 2026" },
    ],
  },
  {
    slug: "additional-commissioner-2",
    nameEn: "Additional Commissioner – II", nameMr: "अतरकत आयकत – ",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Additional Municipal Commissioner", designationMr: "अतरकत महनगरपलक आयकत",
    phone: "0240-2331733", email: "addlcomm2@csmc.gov.in",
    addressEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक मखय इमरत, टऊन हल, छतरपत सभजनगर – ",
    aboutEn: "Additional Commissioner – II handles revenue, taxation, citizen services and grievance redressal for the corporation.",
    aboutMr: "अतरकत आयकत –  ह महसल, कर, नगरक सव आण तकरर नवरण हतळतत.",
    updates: [
      { en: "Property tax collection drive launched", mr: "मलमतत कर सकलन महम सर", date: "26 Apr 2026" },
      { en: "Grievance redressal camp at Zone 5", mr: "झन  यथ तकरर नवरण शबर", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "health",
    nameEn: "Health Department", nameMr: "आरगय वभग",
    headEn: "Dr. To Be Announced", headMr: "ड. लवकरच जहर हईल",
    designationEn: "Chief Medical Officer", designationMr: "मखय वदयकय अधकर",
    phone: "0240-2331740", email: "health@csmc.gov.in",
    addressEn: "CSMC Health Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक आरगय करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Health Department manages public health services, dispensaries, vaccination drives, sanitation and epidemic control across the city.",
    aboutMr: "आरगय वभग शहरतल सरवजनक आरगय सव, दवखन, लसकरण महम, सवचछत आण सथरग नयतरण वयवसथपत करत.",
    updates: [
      { en: "Free health camp at Cidco area on 2 May", mr: " म रज सडक परसरत मफत आरगय शबर", date: "28 Apr 2026" },
      { en: "Dengue awareness drive in all zones", mr: "सरव झनमधय डगय जनजगत महम", date: "24 Apr 2026" },
      { en: "New dispensary inaugurated at Garkheda", mr: "गरखड यथ नवन दवखन उदघटन", date: "15 Apr 2026" },
    ],
  },
  {
    slug: "animal-husbandry",
    nameEn: "Animal Husbandry Department", nameMr: "पशसवरधन वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Veterinary Officer", designationMr: "पशवदयकय अधकर",
    phone: "0240-2331745", email: "animal@csmc.gov.in",
    addressEn: "CSMC Animal Husbandry Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक पशसवरधन करयलय, छतरपत सभजनगर – ",
    aboutEn: "The Animal Husbandry Department manages stray animal control, veterinary services, animal birth control programs and cattle pound operations.",
    aboutMr: "पशसवरधन वभग भटकय परणयच नयतरण, पशवदयकय सव, परण जनम नयतरण करयकरम आण गशळ करयनवयन वयवसथपत करत.",
    updates: [
      { en: "ABC programme completed in Zone 2", mr: "झन  मधय ABC करयकरम परण", date: "27 Apr 2026" },
      { en: "Vaccination drive for stray dogs", mr: "भटकय कतरयसठ लसकरण महम", date: "20 Apr 2026" },
    ],
  },
  {
    slug: "drainage",
    nameEn: "Drainage Department", nameMr: "मलनसरण वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Executive Engineer (Drainage)", designationMr: "करयकर अभयत (मलनसरण)",
    phone: "0240-2331746", email: "drainage@csmc.gov.in",
    addressEn: "CSMC Drainage Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक मलनसरण करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Drainage Department maintains the city's sewerage network, STP operations, drainage cleaning and flood mitigation infrastructure.",
    aboutMr: "मलनसरण वभग शहरच सडपण जळ, STP करयनवयन, नल सफई आण पर नयतरण पयभत सवध रखत.",
    updates: [
      { en: "Pre-monsoon drain cleaning drive started", mr: "परव मनसन नल सफई महम सर", date: "28 Apr 2026" },
      { en: "STP capacity upgrade work in progress", mr: "STP कषमत वढ कम परगतपथवर", date: "22 Apr 2026" },
    ],
  },
  {
    slug: "garden",
    nameEn: "Garden Department", nameMr: "उदयन वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Superintendent, Garden Department", designationMr: "अधकषक, उदयन वभग",
    phone: "0240-2331747", email: "garden@csmc.gov.in",
    addressEn: "CSMC Garden Office, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक उदयन करयलय, छतरपत सभजनगर – ",
    aboutEn: "The Garden Department develops and maintains public gardens, parks, tree plantation drives and green cover across the city.",
    aboutMr: "उदयन वभग शहरतल सरवजनक उदयन, बग, वकषरपण महम आण हरत आचछदन वकसत व रखत.",
    updates: [
      { en: "New garden inaugurated at Prozone area", mr: "परझन परसरत नवन उदयन उदघटन", date: "26 Apr 2026" },
      { en: "Tree plantation drive: 5000 saplings planted", mr: "वकषरपण महम:  रप लवल", date: "22 Apr 2026" },
    ],
  },
  {
    slug: "estate",
    nameEn: "Estate Department", nameMr: "इसटट वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Estate Officer", designationMr: "इसटट अधकर",
    phone: "0240-2331748", email: "estate@csmc.gov.in",
    addressEn: "CSMC Estate Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक इसटट करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Estate Department manages corporation properties, leases, encroachment removal and municipal land records.",
    aboutMr: "इसटट वभग महनगरपलक मलमतत, भडपटट, अतकरमण हटवण आण महनगरपलक जमन नद वयवसथपत करत.",
    updates: [
      { en: "Encroachment removal drive in Zone 4", mr: "झन  मधय अतकरमण हटवण महम", date: "25 Apr 2026" },
      { en: "Lease renewal notices issued", mr: "भडपटट नतनकरण नटस जर", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "property-tax",
    nameEn: "Property Tax Department", nameMr: "मलमतत कर वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Deputy Commissioner (Property Tax)", designationMr: "उपआयकत (मलमतत कर)",
    phone: "0240-2331749", email: "propertytax@csmc.gov.in",
    addressEn: "CSMC Property Tax Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक मलमतत कर करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Property Tax Department handles assessment, collection and revision of property taxes for all residential and commercial properties in the city.",
    aboutMr: "मलमतत कर वभग शहरतल सरव नवस व वयवसयक मलमततसठ मलमतत करच मलयकन, सकलन आण सधरण हतळत.",
    updates: [
      { en: "Last date for tax payment with rebate: 31 May", mr: "सवलतसह कर भरणयच अतम तरख:  म", date: "28 Apr 2026" },
      { en: "Online payment portal updated", mr: "ऑनलइन पमट परटल अदयतनत", date: "20 Apr 2026" },
    ],
  },
  {
    slug: "water-tax",
    nameEn: "Water Tax Department", nameMr: "पण कर वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Deputy Commissioner (Water Supply)", designationMr: "उपआयकत (पण परवठ)",
    phone: "0240-2331750", email: "watertax@csmc.gov.in",
    addressEn: "CSMC Water Supply Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक पण परवठ करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Water Tax Department manages water supply billing, new connections, disconnections and water charge collection across the city.",
    aboutMr: "पण कर वभग शहरतल पण परवठ बलग, नवन जडणय, खडन आण पण शलक सकलन वयवसथपत करत.",
    updates: [
      { en: "New water connections approved for Hudco area", mr: "हडक परसरसठ नवन पण जडणय मजर", date: "27 Apr 2026" },
      { en: "Water supply schedule revised for summer", mr: "उनहळयसठ पण परवठ वळपतरक सधरत", date: "15 Apr 2026" },
    ],
  },
  {
    slug: "town-planning",
    nameEn: "Town Planning Department", nameMr: "नगर रचन वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "City Engineer / Town Planner", designationMr: "शहर अभयत / नगर नयजक",
    phone: "0240-2331751", email: "townplanning@csmc.gov.in",
    addressEn: "CSMC Town Planning Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक नगर रचन करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Town Planning Department handles building permissions, development plan implementation, layout approvals and urban development regulations.",
    aboutMr: "नगर रचन वभग बधकम परवनगय, वकस आरखड अमलबजवण, लआउट मजर आण नगर वकस नयमन हतळत.",
    updates: [
      { en: "DP revision public notice issued", mr: "DP सधरण सरवजनक नटस जर", date: "28 Apr 2026" },
      { en: "Building permission online portal launched", mr: "बधकम परवनग ऑनलइन परटल सर", date: "10 Apr 2026" },
    ],
  },
  {
    slug: "fire",
    nameEn: "Fire Department", nameMr: "अगनशमन वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Chief Fire Officer", designationMr: "मखय अगनशमन अधकर",
    phone: "101", email: "fire@csmc.gov.in",
    addressEn: "CSMC Fire Station, Osmanpura, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक अगनशमन कदर, उसमनपर, छतरपत सभजनगर – ",
    aboutEn: "The Fire Department provides fire fighting, rescue operations, fire NOC services and disaster response across the city.",
    aboutMr: "अगनशमन वभग शहरत अगनशमन, बचव करय, अगन NOC सव आण आपतत परतसद परदन करत.",
    updates: [
      { en: "Fire safety audit of commercial buildings", mr: "वयवसयक इमरतच अगन सरकष ऑडट", date: "26 Apr 2026" },
      { en: "New fire tender vehicle commissioned", mr: "नवन अगनशमन वहन करयनवत", date: "12 Apr 2026" },
    ],
  },
  {
    slug: "license",
    nameEn: "License Department", nameMr: "परवन वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "License Inspector", designationMr: "परवन नरकषक",
    phone: "0240-2331752", email: "license@csmc.gov.in",
    addressEn: "CSMC License Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक परवन करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The License Department issues trade licenses, shop establishment certificates, hawker licenses and other business permits.",
    aboutMr: "परवन वभग वयपर परवन, दकन सथपन परमणपतर, फरवल परवन आण इतर वयवसय परवन जर करत.",
    updates: [
      { en: "Trade license renewal camp on 5 May", mr: " म रज वयपर परवन नतनकरण शबर", date: "28 Apr 2026" },
      { en: "Online license application portal updated", mr: "ऑनलइन परवन अरज परटल अदयतनत", date: "16 Apr 2026" },
    ],
  },
  {
    slug: "electrical",
    nameEn: "Electrical Department", nameMr: "वदयत वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Executive Engineer (Electrical)", designationMr: "करयकर अभयत (वदयत)",
    phone: "0240-2331753", email: "electrical@csmc.gov.in",
    addressEn: "CSMC Electrical Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक वदयत करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The Electrical Department manages street lighting, LED upgrades, electrical maintenance of municipal buildings and public infrastructure.",
    aboutMr: "वदयत वभग पथदव, LED अदयतन, महनगरपलक इमरतच वदयत दखभल आण सरवजनक पयभत सवध वयवसथपत करत.",
    updates: [
      { en: "LED street light installation in Zone 6 complete", mr: "झन  मधय LED पथदव बसवण परण", date: "25 Apr 2026" },
      { en: "Solar panel installation at municipal buildings", mr: "महनगरपलक इमरतवर सर पनल बसवण", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "nulm",
    nameEn: "NULM Department", nameMr: "NULM वभग",
    headEn: "To Be Announced", headMr: "लवकरच जहर हईल",
    designationEn: "Project Officer, NULM", designationMr: "परकलप अधकर, NULM",
    phone: "0240-2331754", email: "nulm@csmc.gov.in",
    addressEn: "CSMC NULM Office, Town Hall Campus, Chhatrapati Sambhajinagar – 431001",
    addressMr: "छतरपत सभजनगर महनगरपलक NULM करयलय, टऊन हल परसर, छतरपत सभजनगर – ",
    aboutEn: "The NULM Department implements the National Urban Livelihoods Mission — skill development, self-help groups, street vendor support and urban poverty alleviation.",
    aboutMr: "NULM वभग रषटरय नगर उपजवक अभयन रबवत — कशलय वकस, बचत गट, फरवल सहयय आण नगर दरदरय नरमलन.",
    updates: [
      { en: "Skill training batch started for 200 youth", mr: " यवकसठ कशलय परशकषण बच सर", date: "27 Apr 2026" },
      { en: "SHG loan disbursement camp", mr: "बचत गट करज वतरण शबर", date: "20 Apr 2026" },
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
        <span className="text-white font-bold text-sm">{en ? "Latest Updates" : "तजय घडमड"}</span>
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
        <PageHeader eyebrow={en ? "Departments" : "वभग"} title={en ? "Department Not Found" : "वभग सपडल नह"} subtitle="" />
        <section className="py-16 container text-center">
          <p className="text-muted-foreground mb-6">{en ? "The requested department page does not exist." : "वनत कलल वभग पषठ असततवत नह."}</p>
          <Link to="/departments" className="inline-flex items-center gap-2 text-civic-blue font-bold hover:underline">
            <ArrowLeft className="h-4 w-4" /> {en ? "Back to Departments" : "वभगकड परत"}
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        eyebrow={en ? "Departments" : "वभग"}
        title={en ? dept.nameEn : dept.nameMr}
        subtitle={en ? "Department information, head of department and latest updates." : "वभग महत, वभगपरमख आण तजय घडमड."}
      />
      <section className="py-8 md:py-14 container">
        {/* Back link */}
        <Link to="/departments" className="inline-flex items-center gap-1.5 text-civic-blue text-sm font-semibold hover:text-civic-red transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> {en ? "All Departments" : "सरव वभग"}
        </Link>

        {/* Main grid: profile + updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Left: Profile card */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
              {/* Blue header */}
              <div className="bg-gradient-to-br from-civic-blue to-civic-blue/80 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 border-4 border-white/30 shadow-xl flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-3xl md:text-4xl">
                    {(en ? dept.nameEn : dept.nameMr).charAt(0)}
                  </span>
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
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Phone" : "दरधवन"}</p>
                    <p className="font-semibold text-civic-ink">{dept.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Email" : "ईमल"}</p>
                    <p className="font-semibold text-civic-ink break-all">{dept.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-civic-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-0.5">{en ? "Office Address" : "करयलय पतत"}</p>
                    <p className="font-semibold text-civic-ink leading-snug">{en ? dept.addressEn : dept.addressMr}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About section */}
            <div className="bg-white border border-border rounded-2xl p-5 md:p-6">
              <h3 className="font-serif text-lg font-bold text-civic-blue mb-3">
                {en ? `About ${dept.nameEn}` : `${dept.nameMr} बददल`}
              </h3>
              <div className="h-1 w-12 bg-gradient-saffron rounded-full mb-4" />
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                {en ? dept.aboutEn : dept.aboutMr}
              </p>
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
