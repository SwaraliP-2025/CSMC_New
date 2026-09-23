/** Facility location names for global search (sourced from public/data/*.json). */
export type FacilityLocationRow = { id: string; name: string; address: string; zone: string };

export const FACILITY_LOCATION_DATASETS: Record<string, FacilityLocationRow[]> = {
  "phcs": [],
  "csmc-hospitals": [
    {
      "id": "hospital-001",
      "name": "SAMARTH EYE HOSPITAL",
      "address": "SAMARTH EYE HOSPITAL, PLOT NO. 32, SHREY NAGAR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-002",
      "name": "MARATHWADA MEDICAL AND RESEARCH CENTER (KAMALNAYAN BAJAJ)",
      "address": "MARATHWADA MEDICAL AND RESEARCH CENTER (KAMALNAYAN BAJAJ),,GUR NO-43,SATARA PARISAR, BEED BY PASS ROAD, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-003",
      "name": "KRUPAMAI HOSPITAL NURSING HOME",
      "address": "KRUPAMAI HOSPITAL NURSING HOME, AKSHAY, OPP. OF YOUTH HOSTEL NEAR STASTION ROAD, AURANGABAD",
      "zone": "Ward 70"
    },
    {
      "id": "hospital-004",
      "name": "SETH NANDLAL DHOOT HOSPITAL",
      "address": "SETH NANDLAL DHOOT HOSPITAL, A-1 MIDC, CHIKALTHANA, AURANGABAD",
      "zone": "Ward 38"
    },
    {
      "id": "hospital-005",
      "name": "GURUPRASAD EYE HOSPITAL",
      "address": "GURUPRASAD EYE HOSPITAL, PLOT NO. 200, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-006",
      "name": "PANAT HOSPITAL",
      "address": "PANAT HOSPITAL, PLOT NO. 12, SHREY NAGAR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-007",
      "name": "REGE HOSPITAL",
      "address": "REGE HOSPITAL, PLOT NO. 14, PUSHPNAGRI, FIRST FLOOR ,OPP S.T WORKSHOP, BEHIND KOHINOOR TECHNICAL INSTITUTE, CBS ROAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-008",
      "name": "MORE HOSPITAL",
      "address": "MORE HOSPITAL, KHADKESHWER, H-15-22, OPP. OF ANJALI CINEMA, AURANGABAD",
      "zone": "Ward 51"
    },
    {
      "id": "hospital-009",
      "name": "SHREYASH MATERNITY NURSING HOME AND EYE HOSPITAL",
      "address": "SHREYASH MATERNITY NURSING HOME AND EYE HOSPITAL, PLOT NO. 57, DASHMESH NAGAR, AURANGABAD",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-010",
      "name": "DARAK NURSING HOME",
      "address": "DARAK NURSING HOME, PLOT NO. 22\\23, RAGHUVIR NAGAR, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-011",
      "name": "KOTHARI NURING HOME",
      "address": "KOTHARI NURING HOME, PLOT NO. P-6, TOWN CENTER, LOKMAT NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-012",
      "name": "BANSAL CHILDERN HOSPITAL MULTISPECIALITY",
      "address": "BANSAL CHILDERN HOSPITAL MULTISPECIALITY, N-5, M-24, CIDCO, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-013",
      "name": "SAOJI MULTISPECIALITY HOSPITAL",
      "address": "SAOJI MULTISPECIALITY HOSPITAL, PLOT NO. 32,  SHRINIKETAN COLONY, AURANGABAD",
      "zone": "Ward 54"
    },
    {
      "id": "hospital-014",
      "name": "MAGAN CLINIC",
      "address": "",
      "zone": "Ward 48"
    },
    {
      "id": "hospital-015",
      "name": "SAKOLKAR HOSPITAL AND SONOGRAPHY CENTER",
      "address": "SAKOLKAR HOSPITAL AND SONOGRAPHY CENTER, PLOT NO. 155, SECTOR-C N-1, CIDCO, NEAR BHAKTI GANESH MANDIR, JALGAON ROAD, AURANGABAD",
      "zone": "Ward 8"
    },
    {
      "id": "hospital-016",
      "name": "KHUSALA MATERNITY HOME",
      "address": "KHUSALA MATERNITY HOME, PLOT NO-27/26-B, GANESH CO. HOUSING SOCITEY, BAJRANG CHOWK, N-8/A CIDCO, AURANGABAD",
      "zone": "Ward 40"
    },
    {
      "id": "hospital-017",
      "name": "KIDNEY HOSPITAL",
      "address": "AURANGABAD KIDNEY HOSPITAL, PLOT NO. 12, UDAY NAGAR, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-018",
      "name": "UTKARSH KIDNEY CLINIC",
      "address": "UTKARSH KIDNEY CLINIC, PLOT NO. 108, SAMTA NAGAR, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-019",
      "name": "ZAWAR HOSPITAL",
      "address": "ZAWAR HOSPITAL, CHAITNYA BUILDING, OPP. OF ANJALI CINEMA, KHADKESHWAR, AURANGABAD",
      "zone": "Ward 51"
    },
    {
      "id": "hospital-020",
      "name": "SACHIN HOSPITAL",
      "address": "SACHIN HOSPITAL, VISHWA, KHADKESHWAR, AURANGABAD",
      "zone": "Ward 51"
    },
    {
      "id": "hospital-021",
      "name": "PARGAONKAR HOSPITAL",
      "address": "PARGAONKAR HOSPITAL, PLOT NO. 20, PUSHPA NAGARI, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-022",
      "name": "SEEMA NARSING HOME",
      "address": "SEEMA NURSING HOME, ROSHAN GATE, AURANGABAD",
      "zone": "Ward 44"
    },
    {
      "id": "hospital-023",
      "name": "KELEY ENT HOSPITAL",
      "address": "KELEY ENT HOSPITAL, TOWN CENTER, N-1 CIDCO, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-024",
      "name": "BHAVNA NURSING HOME",
      "address": "BHAVNA NURSING HOME, INFRONT OF JAIN MANDIR, RAJABAZAR, AURANGABAD",
      "zone": "Ward 47"
    },
    {
      "id": "hospital-025",
      "name": "POOJA NURSING HOME",
      "address": "POOJA NURSING HOME, PLOT NO. 24, RACHANAKAR COLONY, RAILWAY STATION ROAD, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-026",
      "name": "JANKI HOSPITAL",
      "address": "JANKI HOSPITAL, PLOT NO. 136, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-027",
      "name": "GAIKWAD NUERSING HOME",
      "address": "GAIKWAD NURSING HOME, PLOT NO. 132, SAMARTH NAGAR, SAWARKAR CHOWK, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-028",
      "name": "SHARMA HOSPITAL",
      "address": "SHARMA HOSPITAL, PLOT NO. 10, MANJEET NAGAR, INFRONT OF AKASHWANI, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-029",
      "name": "DR. SHRIKANT MADHUKAR SAOJI",
      "address": "AKSHAY 5\\6\\32, KHADKESHWAR",
      "zone": "Ward 52"
    },
    {
      "id": "hospital-030",
      "name": "NAVANDAR NURSING HOME",
      "address": "NAVANDAR NURSING HOME, PLOT NO. 12, VIDYANIKETAN COLONY, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-031",
      "name": "KASBEKAR MATERNITY",
      "address": "KASBEKAR MATERNITY, PLOT NO. 139, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-032",
      "name": "PATEL MATERNITY AND NURSING HOME",
      "address": "PATEL MATERNITY AND NURSING HOME, PRANAV PLAZA  COMPLEX, AURANGABAD",
      "zone": "Ward 52"
    },
    {
      "id": "hospital-033",
      "name": "SHRIKRISHNA HOSPITAL",
      "address": "SHRIKRISHNA HOSPITAL, PLOT NO. 223, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-034",
      "name": "JANKI HOSPITAL",
      "address": "JANKI HOSPITAL, PLOT NO. 136, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-035",
      "name": "DWARKA HOSPITAL",
      "address": "DWARKA HOSPITAL, PLOT NO. 101, RANJANWAN HO. SOCIETY, J-SECTOR, N-9 HUDCO, AURANGABAD",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-036",
      "name": "SHRI SURGICAL AND MATERNITY HOSPITAL",
      "address": "SHRI SURGICAL AND MATERNITY HOSPITAL, PLOT NO. 6,  H-SECTOR, N-9 CIDCO, AURANGABAD",
      "zone": "Ward 29"
    },
    {
      "id": "hospital-037",
      "name": "ANAND MATARNITY AND NURSING HOME",
      "address": "ANAND MATERNITY AND NURSING HOME, PLOT NO. 52, J-52, N-9 CIDCO, AURANGABAD",
      "zone": "Ward 29"
    },
    {
      "id": "hospital-038",
      "name": "SAVITRI HOSPITAL",
      "address": "SAVITRI HOSPITAL, CHELIPURA, AURANGABAD",
      "zone": "Ward 23"
    },
    {
      "id": "hospital-039",
      "name": "SANE HOSPITAL",
      "address": "SANE HOSPITAL, BHADKAL GATE, NEAR JUBLI PARK, AURANGABAD",
      "zone": "Ward 49"
    },
    {
      "id": "hospital-040",
      "name": "SUMAN ANJALI PRATISHTHAN",
      "address": "SUMAN ANJALI PRATISHTHAN, PLOT NO. 3, N-2 CIDCO, AURANGABAD",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-041",
      "name": "YASHODHA HOSPITAL",
      "address": "YASHODHA HOSPITAL, GADIYA PARK, BAIJIPURA, AURANGABAD",
      "zone": "Ward 59"
    },
    {
      "id": "hospital-042",
      "name": "TOTLA HOSPITAL",
      "address": "TOTLA HOSPITAL, PLOT NO. 29, VENKATESH NAGAR, OPP. SFS SCHOOL, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-043",
      "name": "CHAITANYA MATERNITY AND NURSING HOME",
      "address": "CHAITANYA MATERNITY AND NURSING HOME, PLOT NO. 10, SANT EKNATH HOUSING SOCIETY, JALNA ROAD, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-044",
      "name": "JHUNJHUNWALA HOSPITAL",
      "address": "JHUNJHUNWALA HOSPITAL, OPPOSITE AKASHWANI, MANJEET NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-045",
      "name": "GANDHI HOSPITAL",
      "address": "GANDHI HOSPITAL, PLOT NO. 3, MANJEET NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-046",
      "name": "HAJARI NURSING HOME",
      "address": "HAJARI NURSING HOME, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-047",
      "name": "JIJAI MATERNITY HOME AND NURSING",
      "address": "JIJAI MATERNITY HOME AND NURSING, PLOT NO. 12,  CHAITANYA CO. HO. SO., GARKHEDA PARISAR, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-048",
      "name": "SAINT ANN'S HOSPITAL",
      "address": "SAINT ANN'S HOSPITAL, BEHIND SFS SCHOOL, JALNA ROAD, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-049",
      "name": "ROPLEKAR HEART CARE",
      "address": "ROPLEKAR HEART CARE, PLOT NO. 160, TILAK NAGAR, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-050",
      "name": "CHHABDA HOSPITAL",
      "address": "HO. NO. 5-6-19, SHANTI, CHHABDA HOSPITAL, NEW OSMANPURA, INFRONT OF SANT EKNATH RANGMANDIR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-051",
      "name": "SHELAR HOSPITAL",
      "address": "SHELAR HOSPITAL, PLOT NO. E-69, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-052",
      "name": "SHAMA NURSING HOME",
      "address": "SHAMA NURSING HOME, NEAR AJANATA PRESS, KHOADPURA, AURANGABAD",
      "zone": "Ward 53"
    },
    {
      "id": "hospital-053",
      "name": "CHOUBE NURSING HOME",
      "address": "CHOUBE NURSING HOME, INFRONT OF CHATNA NAGAR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-054",
      "name": "SAOJI TUPKARI HOSPITAL",
      "address": "SAOJI TUPKARI HOSPITAL, PLOT NO. 4, VIJAY NAGAR, GARKHEDA",
      "zone": "Ward 96"
    },
    {
      "id": "hospital-055",
      "name": "PALNITKAR HOSPITAL",
      "address": "PALNITKAR HOSPITAL, SHREEFAL, BHAGYA NAGAR, NEAR BABA PETROL PUMP, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-056",
      "name": "DIABETIC CENTER",
      "address": "DIABETIC CENTER, RACHANAKAR COLONY, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-057",
      "name": "SUKHDA NURSING HOME",
      "address": "SUKHADA NURSING HOME, PADAMPURA, NEAR YOUTH HOSTEL, AURANGABAD",
      "zone": "Ward 70"
    },
    {
      "id": "hospital-058",
      "name": "JANKI HOSPITAL",
      "address": "JANKI HOSPITAL, PLOT NO. 136, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-059",
      "name": "ANKUR MATERNITY AND EYE CHILDERN HOSPITAL",
      "address": "ANKUR MATERNITY AND EYE CHILDERN HOSPITAL, PLOT NO. 207, TILAK NAGAR, JAWAHAR COLONY, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-060",
      "name": "HEDGEWAR HOSPITAL",
      "address": "HEDGEWAR HOSPITAL, TRIMURTI CHOWK, GARKHEDA PARISAR, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-061",
      "name": "GHARPURE HOSPITAL",
      "address": "GHARPURE HOSPITAL, PLOT NO. 13, PUSHP NAGARI, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-062",
      "name": "JILLHA HOSPITAL",
      "address": "JILLHA HOSPITAL, PLOT NO. 84,102,103,104, MOTIWALA NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-063",
      "name": "SATYA VISHNU CHARITABLE HOSPITAL",
      "address": "SATYA VISHNU CHARITABLE HOSPITAL, N-12, HUDCO, AURANGABAD",
      "zone": "Ward 10"
    },
    {
      "id": "hospital-064",
      "name": "KODLIKERI MEMORIAL HOSPITAL",
      "address": "KODLIKERI MEMORIAL HOSPITAL, PLOT NO. 8, MANJEET NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-065",
      "name": "GOUSIA HOSPITAL",
      "address": "GOUSIA HOSPITAL, JASWANTPURA, CENTRAL NAKA ROAD, NEAR CORPORATION SCHOOL NO. 1, AURANGABAD",
      "zone": "Ward 58"
    },
    {
      "id": "hospital-066",
      "name": "BAGDIA HOSPITAL",
      "address": "BAGDIA HOSPITAL, PLOT NO. 278, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-067",
      "name": "INSHA SURGICAL HOSPITAL",
      "address": "INSHA SURGICAL HOSPITAL, JUNABAZAR, AURANGABAD",
      "zone": "Ward 49"
    },
    {
      "id": "hospital-068",
      "name": "BHARTIYA MATERNITY AND NURSING HOME",
      "address": "BHARTIYA MATERNITY AND NURSING HOME, RAJA BAZAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-069",
      "name": "SANJEEVANI HOSPITAL",
      "address": "SANJEEVANI HOSPITAL, SUSHIL, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-070",
      "name": "PENDKAR HOSPITAL AND ICU",
      "address": "PENDKAR HOSPITAL AND ICU, DR. AMBEDKAR ROAD, AURANGABAD",
      "zone": "Ward 52"
    },
    {
      "id": "hospital-071",
      "name": "THOLE CHILDERN HOSPITAL",
      "address": "THOLE CHILDERN HOSPITAL, HOUSE NO-4-5-38/2, OPP JAIN MANDIR, RAZABAZAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-072",
      "name": "CHHABDA HOSPITAL",
      "address": "HO. NO. 5-6-19, SHANTI, CHHABDA HOSPITAL, NEW OSMANPURA, INFRONT OF SANT EKNATH RANGMANDIR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-073",
      "name": "PATVARDAHAN HOSPITAL",
      "address": "PATVARDAHAN HOSPITAL, BANSILAL NAGAR, STATION ROAD, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-074",
      "name": "DR. ARVIND MORE",
      "address": "OSMANPURA",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-075",
      "name": "TEKWANI NURSING HOME",
      "address": "TEKWANI NURSING HOME, JUNA BAZAR, AURANGABAD",
      "zone": "Ward 49"
    },
    {
      "id": "hospital-076",
      "name": "LIONS EYE HOSPITAL",
      "address": "LIONS EYE HOSPITAL, N-1 CIDCO, AURANGABAD",
      "zone": "Ward 38"
    },
    {
      "id": "hospital-077",
      "name": "NAVJIVAN HOSPITAL",
      "address": "NAVJIVAN HOSPITAL, PAITHAN GATE, BESIDE HOTEL RIPSS (OLD), AURANGABAD",
      "zone": "Ward 53"
    },
    {
      "id": "hospital-078",
      "name": "KABRA HOSPITAL",
      "address": "KABRA HOSPITAL, PLOT NO. 55, MAHESH NAGAR, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-079",
      "name": "VENKATESH HOSPITAL",
      "address": "VENKATESH HOSPITAL, PLOT NO. 233, SAMARTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-080",
      "name": "SANJEEVANI HOSPITAL",
      "address": "SANJEEVANI HOSPITAL, SUSHIL, AURANGABAD",
      "zone": "Ward 73"
    },
    {
      "id": "hospital-081",
      "name": "KALYANI HOSPITAL",
      "address": "KALYANI HOSPITAL, GULMANDI ROAD, ANAND MARKET, AURANGABAD",
      "zone": "Ward 48"
    },
    {
      "id": "hospital-082",
      "name": "VARE ACCIDENT AND MATERNITY",
      "address": "VARE ACCIDENT AND MATERNITY, PLOT NO. 16,  KOKANWADI, FRIENDS COLONY, AURANGABAD",
      "zone": "Ward 71"
    },
    {
      "id": "hospital-083",
      "name": "BILAGI NURSING HOME",
      "address": "BILAGI NURSING HOME, PLOT NO. 96, SHREYNAGAR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-084",
      "name": "SUMAIRA HOSPITAL",
      "address": "SUMAIRA HOSPITAL, KARIM COLONY, ROSHAN GATE, AURANGABAD",
      "zone": "Ward 44"
    },
    {
      "id": "hospital-085",
      "name": "JYOTI MATERNITY AND SONOGRAPHY CLINIC",
      "address": "JYOTI MATERNITY AND SONOGRAPHY CLINIC, PLOT NO. 52, SURANA NAGAR, BEHIND HOTEL YASHODEEP, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-086",
      "name": "PRABHASHREE NURSING HOME",
      "address": "PRABHASHREE NURSING HOME, PLOT NO. 56, ROKADIYA HANUMAN COLONY, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-087",
      "name": "KALBANDE HEART AND CHEST HOSPITAL",
      "address": "KALBANDE HEART AND CHEST HOSPITAL, PLOT NO. 20, SANT EKNATH HO. SO., AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-088",
      "name": "SUYOG CHILDREN HOSPITAL",
      "address": "SUYOG CHILDREN HOSPITAL, PLOT NO. 41, VIDYANIKETAN COLONY, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-089",
      "name": "DAULAT MEMORIAL HOSPITAL",
      "address": "DAULAT MEMORIAL HOSPITAL, PLOT NO. 148, N-3 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-090",
      "name": "SHRI KRISHNA ORTHOPEDIC HOSPITAL",
      "address": "SHRI KRISHNA ORTHOPEDIC HOSPITAL, PLOT NO. 9, SANT EKNATH HO. SO., IN FRONT OF AKASHWANI, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-091",
      "name": "SANA MATERNITY AND GENERAL HOSPITAL",
      "address": "SANA MATERNITY AND GENERAL HOSPITAL, KAISAR COLONY, AURANGABAD",
      "zone": "Ward 45"
    },
    {
      "id": "hospital-092",
      "name": "SHAKERA HOSPITAL AND MATERNITY HOSPITAL",
      "address": "SHAKERA HOSPITAL AND MATERNITY HOSPITAL, INDIRA NAGAR, BAIJIPURA, AURANGABAD",
      "zone": "Ward 60"
    },
    {
      "id": "hospital-093",
      "name": "MANIK HOSPITAL AND RESEARCH CENTER",
      "address": "MANIK HOSPITAL AND RESEARCH CENTER, PLOT NO. 67, SHIVNERI NAGAR, GARKHEDA, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-094",
      "name": "VAIDYA CHILDERN HOSPITAL",
      "address": "VAIDYA CHILDERN HOSPITAL, PLOT NO. 10, SUSHIL CO.HO.SO., SHREYA NAGAR ROAD, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-095",
      "name": "SAI NURSING HOME",
      "address": "SAI NURSING HOME, INDIRA NAGAR, BAIJIPURA, AURANGABAD",
      "zone": "Ward 60"
    },
    {
      "id": "hospital-096",
      "name": "ANAND EYE HOSPITAL",
      "address": "ANAND EYE HOSPITAL, PLOT NO. 112, SAMRTH NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-097",
      "name": "BINDU HOSPITAL",
      "address": "BINDU HOSPITAL, PLOT NO. 39, JAI VISHWA BHARTI COLONY, AURANGABAD",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-098",
      "name": "DR. TAKIYA HASAN KHAN",
      "address": "KIRADPURA, AURANGABAD",
      "zone": "Ward 58"
    },
    {
      "id": "hospital-099",
      "name": "QURAISHI HOSPITAL AND HEART CARE CENTER",
      "address": "QURAISHI HOSPITAL AND HEART CARE CENTER, SHAHABAZAR,AURANGABAD",
      "zone": "Ward 46"
    },
    {
      "id": "hospital-100",
      "name": "SHRI SAI HOSPITAL AND RESEARCH CENTRE",
      "address": "SHRI SAI HOSPITAL AND RESEARCH CENTRE, OPP. POLICE HEAD QUARTER ,MILL CORNER,AURANGABAD",
      "zone": "Ward 52"
    },
    {
      "id": "hospital-101",
      "name": "DEVGIRI CHILDREN HOSPITAL",
      "address": "DEVGIRI CHILDREN HOSPITAL, 43 SURANA NAGAR,AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-102",
      "name": "KHANALE CHILDREN HOSPITAL",
      "address": "KHANALE CHILDREN HOSPITAL, SECOND FLOOR ,NAGESHWARWADI,AURANGABAD",
      "zone": "Ward 51"
    },
    {
      "id": "hospital-103",
      "name": "SUNITI NURSING HOME",
      "address": "SUNITI NURSING HOME, PLOT NO. 96/3, PANNALAL NAGAR, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-104",
      "name": "DANDE HOSPITAL",
      "address": "DANDE HOSPITAL, DANDE DIABETES AND HEART CARE, 49 N-2, MAYANAGARI, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-105",
      "name": "PATNE HOSPITAL",
      "address": "J J PLUS PVT. LTD AND PATNE HOSPITAL, PLOT NO 25 INFRONT OF DISTRICT COURT, NEAR  BABA PETROL PUMP, JALNA ROAD,AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-106",
      "name": "SUPRABHA HOSPITAL",
      "address": "SUPRABHA HOSPITAL, PLOT NO 2, SAVARKAR CHOWK, N-9 CIDCO, AURANGABAD",
      "zone": "Ward 29"
    },
    {
      "id": "hospital-107",
      "name": "RANJALKAR HOSPITAL",
      "address": "RANJALKAR HOSPITAL, PLOT NO-1, TOWN CENTER,BEHIND RAJ PETROL PUMP, CIDCO, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-108",
      "name": "GANGA HOSPITAL",
      "address": "GANGA HOSPITAL, PLOT NO 74\\79, BEHIND APEX HOSPITAL, BASAIYYE NAGAR, AURANGABAD",
      "zone": "Ward 56"
    },
    {
      "id": "hospital-109",
      "name": "MATHURA MATERNITY NURSING HOME",
      "address": "MATHURA MATERNITY NURSING HOME, PLOT NO 3, SUKHAD SAHAWAS, SHIVAJI NAGAR ROAD, GARKHEDA, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-110",
      "name": "SHREEPAD CHILDREN HOSPITAL",
      "address": "SHREEPAD CHILDREN HOSPITAL, N-9 RAIGAD NAGAR, CIDCO, AURANGABAD",
      "zone": "Ward 31"
    },
    {
      "id": "hospital-111",
      "name": "RASHA MATERNITY AND NURSING HOME",
      "address": "",
      "zone": "Ward 28"
    },
    {
      "id": "hospital-112",
      "name": "SONI UROLOGY HOSPITAL",
      "address": "SONI UROLOGY HOSPITAL, MAHESH NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-113",
      "name": "SUSHILA HOSPITAL",
      "address": "SUSHILA HOSPITAL, PLOT NO-8, BANSILAL NAGAR, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-114",
      "name": "GADE HOSPITAL",
      "address": "GADE HOSPITAL, PLOT NO 8 CHAITNYA HO. SOCIETY, OPP. GAJANAN MANDIR, GARKHEDA PARISAR, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-115",
      "name": "KALPATARU HOSPITAL",
      "address": "KALPATARU HOSPITAL, SRINIKETAN COLONY, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-116",
      "name": "VILAS BHOLE ENT HOSPITAL",
      "address": "VILAS BHOLE ENT HOSPITAL, PLOT NO. 64,  ROKADIYA HANUMAN COLONY, NEAR ABHINAY CINEMA, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-117",
      "name": "SHAKERA HOSPITAL AND MATERNITY",
      "address": "SHAKERA HOSPITAL AND MATERNITY,BLOK NO 22, S T COLONY, FAZALPURA, AURANGABAD",
      "zone": "Ward 23"
    },
    {
      "id": "hospital-118",
      "name": "MEHAR HOSPITAL, AND MATERNITY HOME",
      "address": "MEHAR HOSPITAL, AND MATERNITY HOME, NEW BAIJIPURA,  ROW NO 31, AURANGABAD",
      "zone": "Ward 60"
    },
    {
      "id": "hospital-119",
      "name": "SUYASH NURSING HOME",
      "address": "SUYASH NURSING HOME, PRACHI,  PLOT NO 11, SEVEN HILL COLONY, BESIDE LOKVIKAS BANK, MGM HOSPITAL ROAD, AURANGABAD",
      "zone": "Ward 53"
    },
    {
      "id": "hospital-120",
      "name": "DR. HEENA MASHRUR A KADIR",
      "address": "",
      "zone": "Ward 46"
    },
    {
      "id": "hospital-121",
      "name": "SHREYAS NETRALAYA AND NURSING",
      "address": "SHREYAS NETRALAYA AND NURSING, 103 VIDYAVIHAR NAGAR, AURANGABAD",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-122",
      "name": "ZULEKHA CHILD CARE  CENTER",
      "address": "ZULEKHA CHILD CARE  CENTER, CHAMPA CHOWK, ROSHAN GATE, AURANGABAD",
      "zone": "Ward 45"
    },
    {
      "id": "hospital-123",
      "name": "ADITYA NETRA RUGNALAYA",
      "address": "ADITYA NETRA RUGNALAYA, PLOT NO 55, SARANG HO., SO., NEAR GAJANAN MAHARAJ MANDIR, GARKHEDA ROAD, AURANGABAD",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-124",
      "name": "GOPANPALLIKAR GASTROENTEROLOGY AND EYE HOSPITAL",
      "address": "GOPANPALLIKAR GASTROENTEROLOGY AND EYE HOSPITAL PLOT NO 62, SARANG HO. SOCIETY , NEAR GAJANAN MAHARAJ MANDIR, GARKHEDA, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-125",
      "name": "AL-FAIZ MATERNITY HOSPITAL",
      "address": "AL-FAIZ MATERNITY HOSPITAL, HAMEED COLONY , BEED BY PASS ROAD, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-126",
      "name": "SATARKAR GASTROENPEROLOGY CENTER",
      "address": "",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-127",
      "name": "GOSIYA NURSING MATERNITY",
      "address": "GOSIYA NURSING MATERNITY, OSMANPURA",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-128",
      "name": "SHUBHANGI HOSPITAL",
      "address": "SHUBHANGI HOSPITAL, N-6, CHISTIYA COLONY",
      "zone": "Ward 63"
    },
    {
      "id": "hospital-129",
      "name": "BORIKAR HOSPITAL",
      "address": "BORIKAR HOSPITAL, PLOT NO 158 SHINDE AVENUE SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-130",
      "name": "KALYANI MATERNITY AND NURSING HOME",
      "address": "KALYANI MATERNITY AND NURSING HOME, PLOT NO 3, NAVYUG COLONY, PADAMPURA",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-131",
      "name": "SAURABH EYE CARE CENTER",
      "address": "SAURABH EYE CARE CENTER, 95/2 NEW SBH COLONY, JEEVANPUSHPA SHAHNOORMIYA DARGA",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-132",
      "name": "M.I.T HOSPITAL AND RESEARCH INSTITUTE",
      "address": "M.I.T HOSPITAL AND RESEARCH INSTITUTE, PLOT NO. 144, SECTOR F, N-4, CIDCO",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-133",
      "name": "ARYAN NURSING HOME DAY CARE EYE CLINIC",
      "address": "",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-134",
      "name": "MAHENDRAKAR HOSPITAL AND NURSING HOME",
      "address": "MAHENDRAKAR HOSPITAL AND NURSING HOME PLOT NO 28/29 BANSILAL NAGAR",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-135",
      "name": "MAMTA MULTISPECIALITY HOSPITAL",
      "address": "MAMTA MULTISPECIALITY HOSPITAL, PLOT NO 13, S.NO. 8, MUKUNDWADI RAM NAGAR STOP  CIDCO N-2",
      "zone": "Ward 82"
    },
    {
      "id": "hospital-136",
      "name": "GAYAL HOSPITAL",
      "address": "GAYAL HOSPITAL, PLOT NO 41, JAI VISHWA BHARTI COLONY, AURANGABAD",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-137",
      "name": "SASWADE EYE CLINIC  AND OMKAR LASIK LESAR CENTER",
      "address": "SASWADE EYE CLINIC  AND OMKAR LASIK LESAR CENTER, PLOT NO 3 JAIVISHWBHARTI COLONY CHETAK GHODA CHOWK",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-138",
      "name": "GHULE HOSPITAL",
      "address": "GHULE HOSPITAL, GARKHEDA PARISAR, SHIVAJI NAGAR",
      "zone": "Ward 112"
    },
    {
      "id": "hospital-139",
      "name": "SAI UROLOGY HOSPITAL",
      "address": "SAI UROLOGY HOSPITAL, PLOT NO. 1, VISHAL NAGAR, GAJANAN MANDIR ROAD,  OPP. CADA OFFICE",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-140",
      "name": "PARVATI HOSPITAL",
      "address": "PARVATI HOSPITAL, NEAR BAMI GATE, JAISINGPURA",
      "zone": "Ward 18"
    },
    {
      "id": "hospital-141",
      "name": "ENT HOSPITAL",
      "address": "ENT HOSPITAL, OFFICE NO. 7, DHANLAXMI COMPLEX, NEAR SANT EKNATH RANG MANDIR, NEW OSMANPURA",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-142",
      "name": "ASMAT NURSING HOME",
      "address": "ASMAT NURSING HOME, NEAR LABOUR COLONY, COLLECTOR OFFICE ROAD, FAZILPURA",
      "zone": "Ward 23"
    },
    {
      "id": "hospital-143",
      "name": "NEO CLINIC",
      "address": "NEO CLINIC, GAYATRI PLOT NO 27 SAMARTH NAGAR NEAR VARAD GANESH MANDIR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-144",
      "name": "MOHOLKAR ACCIDENT HOPSITAL",
      "address": "MOHOLKAR ACCIDENT HOPSITAL, BHAGWAN, PLOT NO. 19, N-3, CIDCO, INFRONT OF HOTEL AJANTA AMBASSADOR",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-145",
      "name": "DUNKHE HOSPITAL",
      "address": "DUNKHE HOSPITAL, PLOT NO. 9/10, HOTEL AURANGABAD ASHOKA CAMPUS, OPP. DISTRICT COURT, ADALAT ROAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-146",
      "name": "SAI WOMEN HOSPITAL",
      "address": "SAI WOMEN HOSPITAL, PLOT NO. 103, SHREYA NAGAR",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-147",
      "name": "KETKI HOSPITAL",
      "address": "KETKI HOSPITAL, PLOT NO. 477, N-3, CIDCO, IN FRONT OF CHATE",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-148",
      "name": "SHRI HOSPITAL",
      "address": "SHRI HOSPITAL,PLOT NO-21/A,  C3-SECTOR , N-1 CIDCO,TOWN CENTER,BIHINDE TAPDIYA MULTIPLEX",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-149",
      "name": "RAMKRISHNA JAISWAL HOSPITAL",
      "address": "RAMKRISHNA JAISWAL HOSPITAL, JAISWAL HALL BUILDING,  T.V. CENTER, N-9",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-150",
      "name": "RENUKA NURSING HOME AND CHILDREN HOSPITAL",
      "address": "RENUKA NURSING HOME AND CHILDREN HOSPITAL, PLOT NO. 20, DARGA ROAD, S.B.H. COLONY, OSMANPURA",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-151",
      "name": "APEX SUPER SPECIALITY HOSPITAL",
      "address": "APEX SUPER SPECIALITY HOSPITAL, 5/8, BASAIYYE NAGAR, OPP. SFS SCHOOL, JALNA ROAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-152",
      "name": "MEHAR MATERNITY",
      "address": "MEHAR MATERNITY, PLOT NO. 19, AZAD CHOWK, N-6 CIDCO",
      "zone": "Ward 62"
    },
    {
      "id": "hospital-153",
      "name": "G. G. HOSPITAL",
      "address": "G. G. HOSPITAL, 30/7, BESIDES ADARSH MAHILA BANK, OPP. JNEC COLLEGE, N-6 CIDCO",
      "zone": "Ward 62"
    },
    {
      "id": "hospital-154",
      "name": "SHABAHAD HOSPITAL",
      "address": "SHABAHAD HOSPITAL, YUNUS COLONY KATKAT GATE ROAD",
      "zone": "Ward 44"
    },
    {
      "id": "hospital-155",
      "name": "KULKARNI NURSING AND MATERNITY HOME",
      "address": "KULKARNI NURSING AND MATERNITY HOME, PLOT NO. 30, S.NO. 60, MAHAJAN COLONY, N-2 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-156",
      "name": "SUSHUSHA NURSING HOME",
      "address": "SUSHUSHA NURSING HOME, PLOT NO. 12, ROKDIYA HANUMAN COLONY`",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-157",
      "name": "DHANWAI HOSPITAL",
      "address": "DHANWAI HOSPITAL, 103 RANJANWAN HO. SO. T.V. CENTER ROAD, N-9, M-2, HUDCO",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-158",
      "name": "BHARTIYA MATERNITY NURSING HOME",
      "address": "BHARTIYA MATERNITY NURSING HOME PVT.,PLOT NO- 27 MANJEET NAGAR",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-159",
      "name": "DIWAN HOSPITAL",
      "address": "DIWAN HOSPITAL, PLOT NO. 328, OPP. HOTEL DEEPALI EXECUTIVE, N-3 CIDCO",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-160",
      "name": "RAGHAVENDRA HOSPITAL",
      "address": "RAGHAVENDRA HOSPITAL, PLOT NO 10 C.B.S. ROAD, SHAKTI NAGAR, PUSHPA NAGRI",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-161",
      "name": "GAJHANS HOSPITAL",
      "address": "GAJHANS HOSPITAL, PLOT NO. 5, C-5, N-11, NEAR S.B.O.A. SCHOOL, JALGAON ROAD, CIDCO",
      "zone": "Ward 6"
    },
    {
      "id": "hospital-162",
      "name": "GHAZALA TARIQ HOSPITAL",
      "address": "GHAZALA TARIQ HOSPITAL, 2-4-121, BESIDE NISHAN, SHAHABAZAR",
      "zone": "Ward 23"
    },
    {
      "id": "hospital-163",
      "name": "MANAS MATERNITY AND CHILD CARE CENTER",
      "address": "MANAS MATERNITY AND CHILD CARE CENTER, PLOT NO. 27/A/I, MUKUND CO-OP HO. SO., BEHIND BHAWANI PETROL PUMP, N-2 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-164",
      "name": "NIMAI CHILDREN HOSPITAL",
      "address": "NIMAI CHILDREN HOSPITAL,PLOT NO-2/3,RANJANAWAN SO.,N-9,M-2 ROAD HUDCO",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-165",
      "name": "KAHKASHAN MATERNITY HOME",
      "address": "KAHKASHAN MATERNITY HOME, PLOT NO. 25, DILRAS COLONY, GMCH, AURANGABAD",
      "zone": "Ward 19"
    },
    {
      "id": "hospital-166",
      "name": "SADEQA ENT AND EYE HOSPITAL",
      "address": "SADEQA ENT AND EYE HOSPITAL, NEAR HEAD POST OFFICE,  JUNA BAZAR",
      "zone": "Ward 52"
    },
    {
      "id": "hospital-167",
      "name": "SIDDIQUE HOSPITAL",
      "address": "SIDDIQUE HOSPITAL, NEAR NISHAN, SHAHA BAZAR, AURANGABAD",
      "zone": "Ward 23"
    },
    {
      "id": "hospital-168",
      "name": "JINTURKAR ENT HOSPITAL",
      "address": "JINTURKAR ENT HOSPITAL, PLOT NO. 65, NEAR S.T. WORKSHOP, BHAGYA NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-169",
      "name": "RAHAT HOSPITAL",
      "address": "RAHAT HOSPITAL, PLOT NO. 36, PROFESSOR COLONY, DELHI GATE, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-170",
      "name": "SEETAI MATERNITY HOME",
      "address": "SEETAI MATERNITY HOME, NISARG APPARTMENT, GARKHEDA, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-171",
      "name": "GAJANAN HOSPITAL AND LAPROSCOPY CENTER",
      "address": "GAJANAN HOSPITAL AND LAPROSCOPY CENTER, PLOT NO. D-12, N-2 CIDCO, BEHIND SOHAM MORTORS,  NEAR H.P. QUARTERS, JALNA ROAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-172",
      "name": "WADGAONKAR EYE HOSPITAL",
      "address": "WADGAONKAR EYE HOSPITAL, PLOT NO. 126, MADHUSHRI, VARAD GANESH MANDIR, SAMRTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-173",
      "name": "CHIRAYOO CHILDREN HOSPITAL",
      "address": "CHIRAYOO CHILDREN HOSPITAL, SECTOR-F, PLOT NO. 30, N-5, MAIN ROAD, BESIDE HOTEL DASHMESH, NEAR BAJRANG CHOWK, CIDCO",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-174",
      "name": "SAMARTH HOSPITAL",
      "address": "SAMARTH HOSPITAL,PLOT NO- 26, SEVA NAGAR HO. SO., N-8 CIDCO",
      "zone": "Ward 40"
    },
    {
      "id": "hospital-175",
      "name": "OM ORTHOPADIC",
      "address": "OM ORTHOPADIC, PLOT NO. 30, BEHIND RATNAPRABHA MOTORS, BHAGYA NAGAR, ADALAT ROAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-176",
      "name": "ROPLEKAR HEALTH CARE CENTER",
      "address": "",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-177",
      "name": "MAULI CHILDERN'S HOSPITAL AND MATERNITY HOME",
      "address": "MAULI CHILDERN'S HOSPITAL AND MATERNITY HOME, PLOT NO. 21, CHAITNYA HO. SOCIETY, GARKHEDA PAISAR, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-178",
      "name": "SANKET NURSING HOME",
      "address": "SANKET NURSING HOME, PLOT NO-5, BALAJI NIWAS, BEHIND UDYOG SIDDHARTH APPT, DEVA NAGARI, SHANOORWADI, AURANGABAD",
      "zone": "Ward 110"
    },
    {
      "id": "hospital-179",
      "name": "EKVIRA HOSPITAL",
      "address": "EKVIRA HOSPITAL, D-23, N-2 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-180",
      "name": "SIDDHIVINAYAK ACCIDENT HOSPITAL",
      "address": "SIDDHIVINAYAK ACCIDENT HOSPITAL, PLOT NO-123/124, SARVEY NO-18/2,JADHAVWADI, T.V CENTER NEAR T POINT JALGAON ROAD, KOTHARI, AURANGABAD",
      "zone": "Ward 8"
    },
    {
      "id": "hospital-181",
      "name": "HOSPITAL MOTHER AND CHILD CARE",
      "address": "AURANGABAD HOSPITAL MOTHER AND CHILD CARE, NEAR  HEAD POST OFFICE, JUNA BAZAR AMC SCHOOL",
      "zone": "Ward 49"
    },
    {
      "id": "hospital-182",
      "name": "M.G.M. MEDICAL COLLLEGE AND HOSPITAL",
      "address": "M.G.M. MEDICAL COLLLEGE AND HOSPITAL, N-6 CIDCO,AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-183",
      "name": "DESHMUKH HOSPITAL",
      "address": "DESHMUKH HOSPITAL, SHIV APARTMENT B-4, OPP. OF BAHETI HOSPITAL, MANJEET NAGAR, OPP. AKASHWANI",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-184",
      "name": "GADKARI HOSPITAL",
      "address": "GADKARI HOSPITAL, PLOT NO. 121, BEHIND RAJWADA HOTEL, NEAR PETROL PUMP, BHAGYA NAGAR",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-185",
      "name": "DESHMUKH HOSPITAL AND SURGICAL",
      "address": "DESHMUKH HOSPITAL AND SURGICAL, 30/A SECTOR, N-11, SUDARSHAN NAGAR, HUDCO, AURANGABAD",
      "zone": "Ward 9"
    },
    {
      "id": "hospital-186",
      "name": "SHRI JI MATERNITY AND NURSING",
      "address": "SHRI JI MATERNITY AND NURSING, PLOT NO-88, NATH PRAGAN, GARKHEDA, SUTGIRNI ROAD,AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-187",
      "name": "OPTECH EYE HOSPITAL",
      "address": "OPTECH EYE HOSPITAL, 1ST FLOOR, OBEROI CHAMBERS, BESIDES HOTEL AMPREET, JALNA ROAD, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-188",
      "name": "BOHAR ENT HOSPITAL",
      "address": "BOHAR ENT HOSPITAL,PLOT NO-133,FLAT NO-03, FIRST FLOOR,GURUKRUPA CHEMBERS, SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-189",
      "name": "DESHMUKH INSTITUTE OF MAZILLO-FACIAL SURGERY AND RESEARCH CENTER",
      "address": "DESHMUKH INSTITUTE OF MAZILLO-FACIAL SURGERY AND RESEARCH CENTER, PLOT NO. 136, DNYA-HIRA, BASSAIYE NAGAR, NEW BAIJIPURA",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-190",
      "name": "ADITYA HOSPITAL",
      "address": "ADITYA HOSPITAL, PLOT NO. 33, SARANG HOUSING SOCIETY, GARKHEDA ROAD, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-191",
      "name": "KRUSHNAI MATERNITY AND NURSING HOME",
      "address": "KRUSHNAI MATERNITY AND NURSING HOME, MIG-24,SIDDHARTH CHOWK, AVISHKAR COLONY, N-6,CIDCO, AURANGABAD",
      "zone": "Ward 63"
    },
    {
      "id": "hospital-192",
      "name": "TIRUPATI NETRALAYA AND DENTAL CLINIC",
      "address": "TIRUPATI NETRALAYA AND DENTAL CLINIC, 1st FLOOR, ABOVE INDIAN OVERSEAS BANK, NEAR SFS SCHOOL, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-193",
      "name": "SHRADDHA HOSPITAL AND CRITICAL CARE",
      "address": "SHRADDHA HOSPITAL AND CRITICAL CARE, PLOT NO 9 ,VISHAL NAGAR, INFRONT OF CADA OFFICE GAJANAN MAHARAJ MANDIR ROAD, AURANGABAD",
      "zone": "Ward 74"
    },
    {
      "id": "hospital-194",
      "name": "NAQSHBANDI HOSPITAL",
      "address": "NAQSHBANDI HOSPITAL, NEAR NISHAN SHAHBAZAR, AURANGABAD",
      "zone": "Ward 46"
    },
    {
      "id": "hospital-195",
      "name": "RAODEO MATERNITY & CHILDREN'S HOSPITAL",
      "address": "RAODEO MATERNITY & CHILDREN'S HOSPITAL, PLOT NO. 205, SECTOR B, N-1 CIDCO, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-196",
      "name": "MUNDADA UROLOGY HOSPITAL AND AYURVED CENTER",
      "address": "MUNDADA UROLOGY HOSPITAL AND AYURVED CENTER, PLOT NO. 6, DEOGIRI COLONY, KRANTI CHOWK POLICE STATION ROAD, AURANGABAD",
      "zone": "Ward 67"
    },
    {
      "id": "hospital-197",
      "name": "ASHIRWAD HOSPITAL AND NURSING HOME",
      "address": "ASHIRWAD HOSPITAL AND NURSING HOME, TRIVENI CHOWK, NEAR SUSHILADEVI SCHOOL, RAMNAGAR, N-2 CIDCO",
      "zone": "Ward 87"
    },
    {
      "id": "hospital-198",
      "name": "KOTHARI HOSPITAL",
      "address": "KOTHARI HOSPITAL, PLOT NO 5, ITI COLLEGE ROAD, VEDANT NAGAR",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-199",
      "name": "SANT DNYANESHWAR HOSPITAL AND RESEARCH CENTRE",
      "address": "SANT DNYANESHWAR HOSPITAL AND RESEARCH CENTRE,PLOT NO- 36,SANT EKNATH HOS..SOC., NEAR AKASHWANI, JALNA ROAD",
      "zone": "Ward 84"
    },
    {
      "id": "hospital-200",
      "name": "MULTI SPECIALITY BRAIN HOSPITAL",
      "address": "MULTI SPECIALITY BRAIN HOSPITAL, NUTAN COLONY PLOT NO.1, NEAR BUS STOP, AURANGABAD",
      "zone": "Ward 67"
    },
    {
      "id": "hospital-201",
      "name": "PATIL HOSPITAL",
      "address": "PATIL HOSPITAL, PLOT NO. 2, SECTOR 3, SEVALAL MAHARAJ CHOWK, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-202",
      "name": "SHREE AVDHUT HOSPITAL",
      "address": "SHREE AVDHUT HOSPITAL, PLOT NO. 7, SHIVAJI COLONY, KRANTI CHOWK POLICE STATION ROAD, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-203",
      "name": "SAFA HOSPITAL AND MATERNITY",
      "address": "SAFA HOSPITAL AND MATERNITY, KIRADPURA, NEAR RAM MANDIR, AURANGABAD",
      "zone": "Ward 58"
    },
    {
      "id": "hospital-204",
      "name": "SAHARA HOSPITAL",
      "address": "SAHARA HOSPITAL, PLOT NO. 4, CENTERAL NAKA ROAD, BEHIND VIP FUNCTION HALL, JASWANTPURA, AURANGABAD",
      "zone": "Ward 58"
    },
    {
      "id": "hospital-205",
      "name": "JASMIN CLINIC AND NURSING HOME",
      "address": "JASMIN CLINIC AND NURSING HOME, CHISTIYA COLONY,AURANGABAD",
      "zone": "Ward 63"
    },
    {
      "id": "hospital-206",
      "name": "SAIKURUPA HOSPITAL",
      "address": "SAIKURUPA HOSPITAL, KRANTI CHOWK, NEAR BSNL OFFICE SACHIN",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-207",
      "name": "AL-HASSAN CLINIC",
      "address": "AL-HASSAN CLINIC, JUNABAZAR,AURANGABAD",
      "zone": "Ward 21"
    },
    {
      "id": "hospital-208",
      "name": "RIA NURSING HOME",
      "address": "RIA NURSING HOME, VARDHMAN PATSANSTHA BUILDING, MAIN ROAD, MUKUNDWADI,AURANGABAD",
      "zone": "Ward 83"
    },
    {
      "id": "hospital-209",
      "name": "SHUBHAM CHILDREN HOSPITAL AND CRITICAL CARE CENTER",
      "address": "SHUBHAM CHILDREN HOSPITAL AND CRITICAL CARE CENTER, PLOT NO. 12, SECTOR C, KAMGAR CHOWK, INFRONT OF TAPADIYA PARK, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-210",
      "name": "AMANULLAH MOTIWALA FOUNDATION, MAA AIYSHA CHARITABLE HOSPITAL",
      "address": "AMANULLAH MOTIWALA FOUNDATION, MAA AIYSHA CHARITABLE HOSPITAL, MOTIWALA NAGAR, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-211",
      "name": "AMAAN HOSPITAL, SURGICAL AND ORTHOPEDIC",
      "address": "AMAAN HOSPITAL, SURGICAL AND ORTHOPEDIC, JASWANTPURA, CENTRAL NAKA ROAD, NEAR MARBLE BUILDING, AURANGABAD",
      "zone": "Ward 60"
    },
    {
      "id": "hospital-212",
      "name": "RADHAI HOSPITAL AND MATERNITY",
      "address": "RADHAI HOSPITAL AND MATERNITY, BHASKAR PUSHPA, PLOT NO. 109, NEAR VARAD GANESH MANDIR, SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-213",
      "name": "BHAKTI CHILDREN HOSPITAL",
      "address": "BHAKTI CHILDREN HOSPITAL, PLOT NO. 136, LAXMI NAGAR, SHIVAJI NAGAR ROAD, GARKHEDA,AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-214",
      "name": "GLOBAL MEDICAL FOUNDATION AND DR. NAYANA RESEARCH CENTER",
      "address": "GLOBAL MEDICAL FOUNDATION AND DR. NAYANA RESEARCH CENTER, AURANGABAD (M.S) INDIA, PLOT NO. 71, GEETA SADAN, NEAR HANUMAN TEMPLE, N-4 CIDCO,AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-215",
      "name": "KULKARNI CANCER HOSPITAL",
      "address": "KULKARNI CANCER HOSPITAL, PLOT NO. 26, C-3, BEHIND FAME TAPADIYA, N-1 CIDCO, TOWN CENTER,AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-216",
      "name": "SAWANGVIKAR MULTISPECIALITY HOSPITAL",
      "address": "SAWANGVIKAR MULTISPECIALITY HOSPITAL, PLOT NO. 3, S.NO. 90/2, NEAR SOHAM MOTORS, MUKUNDWADI, N-2 CIDCO",
      "zone": "Ward 84"
    },
    {
      "id": "hospital-217",
      "name": "DATTA KRUPA EYE HOSPITAL",
      "address": "DATTA KRUPA EYE HOSPITAL, PLOT NO. 66,  MAYANAGAR, N-2 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-218",
      "name": "SHRADDHA NURSING HOME",
      "address": "SHRADDHA NURSING HOME, PLOT NO. 10-B, BROTHERHOOD, WATER TANK ROAD, OPP CHURCH,  SAMTA NAGAR,AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-219",
      "name": "FARAH MATERNITY AND INFERTILITY CENTER",
      "address": "FARAH MATERNITY AND INFERTILITY CENTER, PLOT NO. 51, DILRAS COLONY, BHADKAL GATE,AURANGABAD",
      "zone": "Ward 19"
    },
    {
      "id": "hospital-220",
      "name": "NIRMALA MATERNITY AND NURSING HOME",
      "address": "NIRMALA MATERNITY AND NURSING HOME, F-51 N-S-1, SHIVAJI NAGAR ROAD ,GARKHEDA PARISAR,AURANGABAD",
      "zone": "Ward 113"
    },
    {
      "id": "hospital-221",
      "name": "PATIL HOSPITAL",
      "address": "PATIL HOSPITAL, PLOT NO. 2, SECTOR 3, SEVALAL MAHARAJ CHOWK, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 31"
    },
    {
      "id": "hospital-222",
      "name": "WARE PATHOLOGY AND ENT HOSPITAL",
      "address": "WARE PATHOLOGY AND ENT HOSPITAL, PLOT NO. 21, INFRONT OF GURU TEJ BAHADAR SCHOOL, MUTHIYAN CORNER, NEW OSMANPURA",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-223",
      "name": "SHANESHWAR NURSING HOME",
      "address": "SHANESHWAR NURSING HOME, NEAR JAKAT NAKA, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-224",
      "name": "VISHWE EYE HOSPITAL",
      "address": "VISHWE EYE HOSPITAL, SHARADASRAM, PAITHAN GATE ROAD, AURANGABAD",
      "zone": "Ward 53"
    },
    {
      "id": "hospital-225",
      "name": "LOHIYA CHILDREN HOSPITAL",
      "address": "LOHIYA CHILDREN HOSPITAL,  PLOT NO. 15, SAMADHAN COLONY, KOKANWADI",
      "zone": "Ward 70"
    },
    {
      "id": "hospital-226",
      "name": "LAXMI HOSPITAL AND MATERNITY HOME",
      "address": "LAXMI HOSPITAL AND MATERNITY HOME, PLOT NO 4, SECTOR 3, NEAR PUNDLIK NAGAR WATER TANK GAJANAN MAHARAJ MANDIR ROAD, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-227",
      "name": "KRUSHNAI MATERNITY & NURSING",
      "address": "KRUSHNAI MATERNITY & NURSING, CHIKALTHANA,AURANGABAD",
      "zone": "Ward 63"
    },
    {
      "id": "hospital-228",
      "name": "RIYAZ POLYCLINIC MATERNITY AND NURSING HOME",
      "address": "RIYAZ POLYCLINIC MATERNITY AND NURSING HOME, YUNUS COLONY, BESIDE KATKAT GATE, NEAR MEYAAR HALL,AURANGABAD",
      "zone": "Ward 24"
    },
    {
      "id": "hospital-229",
      "name": "DRUSHTI EYE INSTITUTE",
      "address": "DRUSHTI EYE INSTITUTE PVT. LTD, PLOT NO-139 , SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-230",
      "name": "SAMBRE NETRA RUGNALAYA,",
      "address": "SAMBRE NETRA RUGNALAYA, PLOT NO 34, GROUND FLOOR SEVEN HILL COLONY, JALNA ROAD,AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-231",
      "name": "ASHTAVINAYAK HOSPITAL AND MATERNITY HOME",
      "address": "ASHTAVINAYAK HOSPITAL AND MATERNITY HOME, PRASUTI GRUHA, MUKUNDWADI, RAILWAY STATION ROAD, JAI BHAVANI NAGAR, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-232",
      "name": "GURUKRUPA HOSPITAL AND PRASUTI GRUHA",
      "address": "GURUKRUPA HOSPITAL AND PRASUTI GRUHA, NEW HANUMAN NAGAR, LANE NO. 3, AURANGABAD",
      "zone": "Ward 93"
    },
    {
      "id": "hospital-233",
      "name": "JIVAN VIKAS PRATISHTHAN SANT GADGEBABA HOSPITAL",
      "address": "JIVAN VIKAS PRATISHTHAN SANT GADGEBABA HOSPITAL, PLOT NO. 5, NEW HANUMAN NAGAR, NEAR SUDHAKARRAO NAIK, HIGH SCHOOL LANE NO. 5, AURANGABAD",
      "zone": "Ward 93"
    },
    {
      "id": "hospital-234",
      "name": "PADMAVATI HOSPITAL AND CRITICAL CEAR CENTER",
      "address": "PADMAVATI HOSPITAL AND CRITICAL CEAR CENTER, B-WING, GURUNATH SANKUL KALDA CORNER, CHETNA NAGAR",
      "zone": "Ward 73"
    },
    {
      "id": "hospital-235",
      "name": "HITECH CRITICAL CARE CENTER",
      "address": "HITECH CRITICAL CARE CENTER PVT. LTD. PLOT NO 107, KOTLA COLONY, SAMTA NAGAR, ADALAT ROAD, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-236",
      "name": "ORIION CITY CARE SUPER HOSPITAL",
      "address": "ORIION CITY CARE SUPER HOSPITAL, NEAR KALASH MANGAL KARYALAY, OSMANPURA",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-237",
      "name": "MEDI ARTS HOSPITAL",
      "address": "MEDI ARTS HOSPITAL, SHUBHAM COMPLEX, NEAR ESSAR PETROL PUMP, PUNDLIK NAGAR ROAD, GARKHEDA, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-238",
      "name": "CIIGMA INSTITUTE OF MEDICAL SCIENCES",
      "address": "",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-239",
      "name": "SPARSH KIDS CEAR (CHILDREN HOSPITAL AND CRITICAL CEAR UNIT)",
      "address": "SPARSH KIDS CEAR (CHILDREN HOSPITAL AND CRITICAL CEAR UNIT), MALAN PLAZA, VISHNU NAGAR, JAWAHAR COLONY ROAD, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-240",
      "name": "SHRI VYANKATESH ACCIDENT & SURGICAL ORTHOPEDIC HOSPITAL",
      "address": "SHRI VYANKATESH ACCIDENT & SURGICAL ORTHOPEDIC HOSPITAL, MAHAJAN COLONY, PLOT NO. 4, N-2 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-241",
      "name": "DAGA PILES HOSPITAL",
      "address": "DAGA PILES HOSPITAL, OPP. OF DISTRICT COURT, ADALAT ROAD , AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-242",
      "name": "KRUSHNA HOSPITAL",
      "address": "KRUSHNA HOSPITAL, PLOT NO 16, ROKDIYA HANUMAN COLONY, BEHIND COSMOS BANK, JALNA ROAD, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-243",
      "name": "SIDDHESH EYE HOSPITAL",
      "address": "SIDDHESH EYE HOSPITAL, PLOT NO 15, MANJIRI, IN FRONT OF PANAT HOSPITAL, SHREYA NAGAR, OSMANPURA",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-244",
      "name": "MATOSHRI HOSPITAL",
      "address": "MATOSHRI HOSPITAL, PLOT NO 25, B SECTOR, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-245",
      "name": "MATOSHRI CHILDREN HOSPITAL",
      "address": "MATOSHRI CHILDREN HOSPITAL, PLOT NO 15, MATOSHRI VRUNDHAVAN COLONY, PUSHPA NAGARI, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-246",
      "name": "NIRMITI HOSPITAL",
      "address": "NIRMITI HOSPITAL, PLOT NO 4 ,ASHOK NAGAR, NEAR JAWAHAR NAGAR POLICE STATION , AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-247",
      "name": "MATOSHRI HOSPITAL",
      "address": "MATOSHRI HOSPITAL, PLOT NO 25, B SECTOR, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-248",
      "name": "ADVANCE ENT AND MULTISPACIALITY HOSPITAL",
      "address": "ADVANCE ENT AND MULTISPACIALITY HOSPITAL PVT. LTD.,   PLOT NO 27, NANDIGRAM COLONY, PUNDLIK NAGAR ROAD, GARKHEDA, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-249",
      "name": "SUSHRUT MULVYADH",
      "address": "SUSHRUT MULVYADH,OFFICE NO-15,GOKULDHAM ,NEAR KADA OFFICE, GARKHEDA, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-250",
      "name": "VED PATHAK HOSPITAL",
      "address": "VED PATHAK HOSPITAL,AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-251",
      "name": "R V PRASAD EYE HOSPITAL",
      "address": "R V PRASAD EYE HOSPITAL, N-5,M-18, BAJRANG CHOWK,V.I.P. FUNCTION HALL, CENTRAL NAKA, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-252",
      "name": "MULTICARE SPECIALITY HOSPITAL",
      "address": "MULTICARE SPECIALITY HOSPITAL, PLOT NO 1, JASWANTPURA, NEAR VIP FUNCTION HALL, CENTRAL NAKA, AURANGABAD",
      "zone": "Ward 58"
    },
    {
      "id": "hospital-253",
      "name": "SAI SHRADDHA HOSPITAL",
      "address": "SAI SHRADDHA HOSPITAL, PLOT NO-11, OLD HIGH COURT , ADALAT ROAD, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-254",
      "name": "DAHIWARE HOSPITAL",
      "address": "DAHIWARE HOSPITAL, PLOT NO-11, OLD HIGH COURT , ADALAT ROAD, AURANGABAD",
      "zone": "Ward 69"
    },
    {
      "id": "hospital-255",
      "name": "SHREE NURSING HOME",
      "address": "SHREE NURSING HOME,SHOP NO 344, SARA HARMONY, NATHVALLEY SCHOOL ROAD, KANCHANWADI PAITHAN ROAD, AURANGABAD",
      "zone": "Ward 106"
    },
    {
      "id": "hospital-256",
      "name": "NEW LIFE MULTISPECIALITY HOPITAL",
      "address": "NEW LIFE MULTISPECIALITY HOPITAL, 5 DEVGIRI COLLEGE KRANTI CHOWK",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-257",
      "name": "DHULE ACCIDENT HOSPITAL AND DAIBETS CENTER",
      "address": "DHULE ACCIDENT HOSPITAL AND DAIBETS CENTER, PLOT NO 5 DEVGIRI COLONY, BHIM SANDESH CHOWK, KRANTI CHOWK, POLICE STAION ROAD, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-258",
      "name": "BADAR CHILDREN HOSPITAL",
      "address": "BADAR CHILDREN HOSPITAL , NEAR FATIMA FUNCTION HALL, SHAHBAZAR, AURANGABAD",
      "zone": "Ward 46"
    },
    {
      "id": "hospital-259",
      "name": "IKON MULTISPECIALITY HOSPITAL",
      "address": "IKON MULTISPECIALITY HOSPITAL , PVT. LTD, ROSE PARK, OPP. GANESH COLONY, MAJNU HILL, T.V CENTER ROAD, AURANGABAD",
      "zone": "Ward 25"
    },
    {
      "id": "hospital-260",
      "name": "PATEL ACCIDENT AND MATERNITY HOSPITAL",
      "address": "PATEL ACCIDENT AND MATERNITY HOSPITAL, CENTRAL NAKA ROAD,VIP FUNCTION HALL, AURANGABAD",
      "zone": "Ward 59"
    },
    {
      "id": "hospital-261",
      "name": "KHEDKAR MATERNITY HOSPITAL",
      "address": "KHEDKAR MATERNITY HOSPITAL, SHIVAJI NAGAR ,GARKHEDA , AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-262",
      "name": "MEDICARE CHILDREN HOSPITAL",
      "address": "MEDICARE CHILDREN HOSPITAL, PLOT NO-33,N-5/F,BAJRANG CHOWK, CIDCO ,AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-263",
      "name": "CHARAK HEALTH CENTER, AURVED AND PANCHKARMA CLINIC",
      "address": "CHARAK HEALTH CENTER, AURVED AND PANCHKARMA CLINIC,FLAT NO-2,SHARDDHA PARTMENT,DHANWANTARI NAGAR,DASHMESH NAGAR ROAD, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-264",
      "name": "FATIMA MATERNITY AND SURGICAL HOSPITAL",
      "address": "FATIMA MATERNITY AND SURGICAL HOSPITAL, INFRONT OF VIP FUNCTION HALL, CENTRAL NAKA ROAD, AURANGABAD",
      "zone": "Ward 60"
    },
    {
      "id": "hospital-265",
      "name": "RAJPUT HOSPITAL",
      "address": "RAJPUT HOSPITAL,PLOT NO. 7, BAJRANG CHOWK, N-6 CIDCO, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-266",
      "name": "SHAIKH KARIM CHARITABLE TRUST LOKMANYA HEALTH CARE RUGNALAY",
      "address": "SHAIKH KARIM CHARITABLE TRUST LOKMANYA HEALTH CARE RUGNALAY, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-267",
      "name": "PARIPURTI NURSING HOME",
      "address": "PARIPURTI NURSING HOME, PLOT NO 27, SHRIKRISHNA NAGAR, SHAHNOORWADI, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-268",
      "name": "SAKOLKAR CHARITABLE HOSPITAL AND RESEARCH CENTER",
      "address": "SAKOLKAR CHARITABLE HOSPITAL AND RESEARCH CENTER, PLOT NO 155, SECTOR-B, NEAR BHAKTI GANESH MANDIR, JALGAON ROAD, N-1 CIDCO AURANGABAD",
      "zone": "Ward 38"
    },
    {
      "id": "hospital-269",
      "name": "GLOBAL MULTISPECIALITY HOSPITAL",
      "address": "",
      "zone": "Ward 44"
    },
    {
      "id": "hospital-270",
      "name": "SHREE MULTISPECIALITY HOSPITAL",
      "address": "SHREE MULTISPECIALITY HOSPITAL, HANUMAN NAGAR CHOWK, PUNDLIK NAGAR ROAD, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 93"
    },
    {
      "id": "hospital-271",
      "name": "SAHYADRI MULTISPECIALITY HOSPITAL",
      "address": "SAHYADRI MULTISPECIALITY HOSPITAL, J8 MUKUNDWADI, AURANGABAD",
      "zone": "Ward 87"
    },
    {
      "id": "hospital-272",
      "name": "SHRI SAI CLINIC AND PHYSIOTHERPY",
      "address": "SHRI SAI CLINIC AND PHYSIOTHERPY, PLOT NO 14, H.S. JYOTI NAGAR ,AURANGABAD",
      "zone": "Ward 100"
    },
    {
      "id": "hospital-273",
      "name": "VEDANT HOSPITAL",
      "address": "VEDANT HOSPITAL, PLOT NO.1,SECTOR NS-4, PUNDLIK NAGAR ROAD, N-4 ROAD, AURANGABAD",
      "zone": "Ward 93"
    },
    {
      "id": "hospital-274",
      "name": "DKMM HOMEOPATHIC MADICAL COLLEGE AND HOSPITAL",
      "address": "DKMM HOMEOPATHIC MADICAL COLLEGE AND HOSPITAL, GURU GANESH NAGAR, NEAR BIBI KA MAQBARA, AURANGABAD",
      "zone": "Ward 13"
    },
    {
      "id": "hospital-275",
      "name": "HOPE HOSPITAL, SURGICAL & CRITICAL CEAR CENTER",
      "address": "HOPE HOSPITAL, SURGICAL & CRITICAL CEAR CENTER, PLOT NO 2, SHRI GANESH HOUSING SOCIETY, N-9 D, CIDCO AURANGABAD",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-276",
      "name": "SHITOLE SUPER SPECIALITY HOSPITAL",
      "address": "SHITOLE SUPER SPECIALITY HOSPITAL,PLOT NO 4 ,TOSHNIWAL COMPLEX NEAR, JAWHAR NAGAR POLICE STATION, GARKHEDA , AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-277",
      "name": "NETRADEEP EYE HOSPITAL",
      "address": "NETRADEEP EYE HOSPITAL, FLAT NO 2, ZAMBAD TOWER, N-2 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-278",
      "name": "DR. SHAMIM'S ORTHOPEDIC HOSPITAL",
      "address": "",
      "zone": "Ward 46"
    },
    {
      "id": "hospital-279",
      "name": "SHRI HOSPITAL",
      "address": "SHRI HOSPITAL,PLOT NO-21/A,  C3-SECTOR , N-1 CIDCO,TOWN CENTER,BIHINDE TAPDIYA MULTIPLEX",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-280",
      "name": "DONGAONKAR SUPERSPECIALITY EYE HOSPITAL",
      "address": "DONGAONKAR SUPERSPECIALITY EYE HOSPITAL, SHRINATHJI APARTMENT, OPP KALASH MANGAL KARYALAY, NEW OSMANPURA, NEAR KRANTI CHOWK, AURANGABAD",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-281",
      "name": "NANDINI HOSPITAL & NURSING HOME",
      "address": "NANDINI HOSPITAL & NURSING HOME PVT.LTD. PLOT NO. F 20,NS-1, GUT NO 125/126, SHIVAJI NAGAR, SATARA PARISAR, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-282",
      "name": "NU LIFE CHILDREN'S HOSPITAL & CRITICAL CEAR CENTER",
      "address": "NU LIFE CHILDREN'S HOSPITAL & CRITICAL CEAR CENTER, NEAR HOTEL ELLORA, NUTAN COLONY, AURANGABAD",
      "zone": "Ward 67"
    },
    {
      "id": "hospital-283",
      "name": "FOSTER DEVELOPMENT'S HOMOEOPATHIC MEDICAL COLLEGE AND HOSPITAL",
      "address": "FOSTER DEVELOPMENT'S HOMOEOPATHIC MEDICAL COLLEGE AND HOSPITAL,  GULMOHAR COLONY, N-5 CIDCO",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-284",
      "name": "SAMARTH HOSPITAL",
      "address": "SAMARTH HOSPITAL,PLOT NO- 26, SEVA NAGAR HO. SO., N-8 CIDCO",
      "zone": "Ward 40"
    },
    {
      "id": "hospital-285",
      "name": "RUBY LIFE CAREHOSPITAL, MATERNITY AND CHILDREN HOSPITAL",
      "address": "RUBY LIFE CARE MATERNITY AND CHILDREN HOSPITAL, PLOT NO. 1, RAVINDRA NAGAR, NEAR PIR GAIB SAHAB DARGAH, CHAMPA CHOWK, COLLECTOR OFFICE ROAD, AURANGABAD",
      "zone": "Ward 24"
    },
    {
      "id": "hospital-286",
      "name": "MUSKAAN CHILDREN HOSPITAL",
      "address": "MUSKAAN CHILDREN HOSPITAL, CENTRAL NAKA, JASWANTPURA, AURANGABAD",
      "zone": "Ward 41"
    },
    {
      "id": "hospital-287",
      "name": "BEMBDE HOSPITAL",
      "address": "BEMBDE HOSPITAL, PLOT NO. 14, NEAR RENUKA MATA TEMPLE, BEED BY PASS ROAD, AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-288",
      "name": "AASHAY MULTY SPECIALITY HOSPITAL",
      "address": "AASHAY MULTY SPECIALITY HOSPITAL, N-7/G-2/01 CIDCO, INFRONT OF AMBEDKAR NAGAR GATE, JALGAON ROAD, AURANGABAD",
      "zone": "Ward 39"
    },
    {
      "id": "hospital-289",
      "name": "KEWAL CARE HOSPITAL",
      "address": "DR. SODHI'S KEWAL CARE HOSPITAL, H. NO. 5/6/70, BEHIND GURUDWARA GROUND,OSMANPURA",
      "zone": "Ward 71"
    },
    {
      "id": "hospital-290",
      "name": "GOVIND MATERNITY HOSPITAL",
      "address": "GOVIND MATERNITY SRUGICAL HOSPITAL,PLOT NO-1/A,SOHAM BUILDING, NEW  SHANTINIKENTAN COLONY,OPP.HANUMAN MANDIR, JAWAHAR COLONY ROAD.",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-291",
      "name": "DR. IMRAN'S CHILDREN HOSPITAL",
      "address": "DR. IMRAN'S CHILDREN HOSPITAL, YOUNUS COLONY, KAT KAT GATE ROAD, NEAR ARISH MASJID, AURANGABAD",
      "zone": "Ward 24"
    },
    {
      "id": "hospital-292",
      "name": "FATIMA MATERNITY HOME",
      "address": "FATIMA MATERNITY HOME,PLOT 5/2, AHBAB COLONY, KAT KAT GATE, AURANGABAD",
      "zone": "Ward 26"
    },
    {
      "id": "hospital-293",
      "name": "KHUSHI WOMENS HOSPITAL & NURSING HOME",
      "address": "KHUSHI WOMENS HOSPITAL & NURSING HOME, GANESH COLONY, AURANGABAD",
      "zone": "Ward 25"
    },
    {
      "id": "hospital-294",
      "name": "RAMKRISHNA HOSPITAL",
      "address": "RAMKRISHNA HOSPITAL,PLOT NO-56/J,VIJAYSHREE COLONY,NEAR FOSTER MEDICAL COLLEGE, BAJRANG CHOWK, N-5,CIDCO, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-295",
      "name": "SAYLI CHARITABLE TRUST HOMEOPATHIC HOSPITAL",
      "address": "SAYLI CHARITABLE TRUST HOMEOPATHIC HOSPITAL, GUT NO 141,150,MITMITA, NASHIK ROAD , AURANGABAD",
      "zone": "Ward 15"
    },
    {
      "id": "hospital-296",
      "name": "SAI MEDICITY HOSPITAL & CRITICAL CARE CENTER",
      "address": "SAI MEDICITY HOSPITAL & CRITICAL CARE CENTER, PLOT NO-3,  S.NO-193/8  BESIDE SAINT JOHN ENGLISH SCHOOL, SAUBHAGAYA CHOWK, JALGOAN  ROAD, JADHAVWADI, AURANGABAD",
      "zone": "Ward 7"
    },
    {
      "id": "hospital-297",
      "name": "ANANDI NURSING HOME, MATERNITY & SURGICAL CARE",
      "address": "ANANDI NURSING HOME, MATERNITY & SURGICAL CARE, PLOT NO. 79/4,  N-11.A CIDCO, SUDARSHAN NAGAR, T.V. CENTER, AURANGABAD",
      "zone": "Ward 61"
    },
    {
      "id": "hospital-298",
      "name": "AJANTA (ALCO) HOSPITAL CRITICAL CARE AND SUPERSPECIALITY CENTRE",
      "address": "AJANTA (ALCO) HOSPITAL CRITICAL CARE AND SUPERSPECIALITY CENTRE, LOT NO-5,SURVEY NO-90/2,NEAR BHUWAN MOTORS, KASLIWAL MARKET,MUKUNDWADI, AURANGABAD",
      "zone": "Ward 84"
    },
    {
      "id": "hospital-299",
      "name": "MILLAT HOSPITAL MATERNITY AND SURGICAL",
      "address": "MILLAT HOSPITAL MATERNITY AND SURGICAL,C-17, N-13 A,WANKHEDE NAGAR,  HUDCO CORNER, AURANGABAD",
      "zone": "Ward 5"
    },
    {
      "id": "hospital-300",
      "name": "METRO HOSPITAL, SUPER SPECIALITY",
      "address": "METRO HOSPITAL, SUPER SPECIALITY, SAUJANYA NAGAR, KALDA CORNER",
      "zone": "Ward 73"
    },
    {
      "id": "hospital-301",
      "name": "GAJANAN HOSPITAL AND CRITICAL CARE CENTER",
      "address": "",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-302",
      "name": "CARE WELL HOSPITAL",
      "address": "CARE WELL HOSPITAL,PLOT NO.49/ P-1, TOWN CENTER, LOKMAT NAGAR,  BEHIND AIR INDIA OFFICE, JALNA ROAD, AURANGABAD",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-303",
      "name": "KALPATARU HOSPITAL",
      "address": "KALPATARU HOSPITAL, SRINIKETAN COLONY, AURANGABAD",
      "zone": "Ward 29"
    },
    {
      "id": "hospital-304",
      "name": "DEOGIRI, MULTISPECIALITY HOSPITAL",
      "address": "DEOGIRI MULTISPECIALITY HOSPITAL, INFRONT STATE BANK OF INDIA, PLOT NO-4, SECTOR-03, JAY BHAVANI NAGAR,  N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-305",
      "name": "KHONDE-ATKARE'S GOLDEN HOSPITAL",
      "address": "KHONDE-ATKARE'S GOLDEN HOSPITAL, PLOT NO-5, S.NO. 53/2/3, DESHMUKH NAGAR, SHIVAJI NAGAR ROAD,GARKHEDA, AURANGABAD",
      "zone": "Ward 112"
    },
    {
      "id": "hospital-306",
      "name": "CHHATRPATI SHAHU MAHARAJ  SHIKSHAN SASNTHA, SPECIALITY HOSPTAL  AND RESEARCH CENTER",
      "address": "CHHATRPATI SHAHU MAHARAJ  SHIKSHAN SASNTHA, SPECIALITY HOSPTAL  AND RESEARCH CENTER, KANCHANWADI, AURANGABAD",
      "zone": "Ward 106"
    },
    {
      "id": "hospital-307",
      "name": "AURANGABAD INSTITUTE OF MEDICAL HOSPITAL(AIMS HOSPITAL )",
      "address": "AURANGABAD INSTITUTE OF MEDICAL SCIENCE PVT.LTD PLOT NO-20, SECTOR-A, N-11, CIDCO, JALGAON ROAD (AIMS HOSPITAL ), AURANGABAD",
      "zone": "Ward 9"
    },
    {
      "id": "hospital-308",
      "name": "NAVDEEP SUPER SPECIALITY HOSPITAL",
      "address": "NAVDEEP SUPER SPECIALITY HOSPITAL, ULKANAGARI, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-309",
      "name": "UNITED CIIGMA INSTITUTE OF MEDICAL SCIENCE",
      "address": "UNITED CIIGMA INSTITUTE OF MEDICAL SCIENCE PVT. LTD., PLOT NO. 6 TO 7 AND 33 TO 35, SURVEY NO. 10, SHAHNOORWADI, DARGAH ROAD, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-310",
      "name": "GENIS ENDOSCOPY CENTER",
      "address": "GENIS ENDOSCOPY CENTER LLP, WING-A, 5TH FLOWER,UNITED CIIGMA HOSPITAL BUILDING, PLOT NO-6,7 SHAHNOORWADI,  DARGA ROAD, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-311",
      "name": "SHANKAR CHEST HOSPITAL",
      "address": "SHANKAR CHEST HOSPITAL, PLOT NO. 24, JAIVISHWABHARTI COLONY, NEAR CHETAK GHODA, AURANGABAD",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-312",
      "name": "DAIVA BHARTI HOSPITAL",
      "address": "DAIVA BHARTI HOSPITAL, KASHMIR NAGAR, KANCHANWADI, AURANGABAD",
      "zone": "Ward 106"
    },
    {
      "id": "hospital-313",
      "name": "NIRAMAY SUPERSPECILITY BAL RUGNALAY",
      "address": "HIRAMAY SUPERSPECILITY BAL RUGNALAY PVT.,CPS NO-14245,AJAB NAGAR, NUTAN COLONY,  KRANTI CHOWK",
      "zone": "Ward 67"
    },
    {
      "id": "hospital-314",
      "name": "MUNDADA ENT AND EYE HOSPITAL",
      "address": "MUNDADA ENT AND EYE HOSPITAL,172/A ,SHASTRI NAGAR, GARKHEDA, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-315",
      "name": "GOVINDARAJ HOSPITAL",
      "address": "GOVINDARAJ HOSPITAL, PLOT NO-13,SHRI,ABOVE MAMTA HOSPITAL, NEAR HANUMAN MANDIR,N-2, CIDCO,RAM NAGAR, JALNA ROAD",
      "zone": "Ward 86"
    },
    {
      "id": "hospital-316",
      "name": "OMKAR NURSING HOME",
      "address": "OMKAR NURSING HOME, 210 PARIJAT NAGAR, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-317",
      "name": "ASHISH HOSPITAL",
      "address": "ASHISH HOSPITAL, PLOT NO. 10, RANJANVAN HOUSING SOCIETY, J-SECTOR, M-2 ROAD, N-9 CIDCO, AURANGABAD",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-318",
      "name": "UTKARSH HOSPITAL",
      "address": "UTKARSH HOSPITAL, PLOT NO- 10, N11/P, JALGAON ROAD, NEAR PETROL PUMP, AURANGABAD",
      "zone": "Ward 6"
    },
    {
      "id": "hospital-319",
      "name": "VARAD NETRALAY",
      "address": "VARAD NETRALAY, N-11 CIDCO, TV CENTER,HUDCO, AURANGABAD",
      "zone": "Ward 29"
    },
    {
      "id": "hospital-320",
      "name": "KHAN MADAM HOSPITAL",
      "address": "KHAN MADAM HOSPITAL  NEAR ELECTRICK DP  NO. 52 NEHRU NAGAR (KATKAT GATE), AURANGABAD",
      "zone": "Ward 26"
    },
    {
      "id": "hospital-321",
      "name": "PRACHI MATERNITY AND SURGICAL HOSPITAL",
      "address": "PRACHI MATERNITY AND SURGICAL HOSPITAL, IN FRONT OF TIRUMALA MANGAL KARYALAY, AURANGABAD",
      "zone": "Ward 79"
    },
    {
      "id": "hospital-322",
      "name": "MIDTOWN LAYANCE MEDICAL SERVICES TRUST",
      "address": "MIDTOWN LAYANCE MEDICAL SERVICES TRUST, YASHODA ARCADE PLOT NO. 132, APEX HOSPITAL, MAHESH NAGAR, BAIJIPURA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-323",
      "name": "VASAN EYE CARE HOSPITAL SAGAR TREAD CENTER",
      "address": "VASAN EYE CARE HOSPITAL SAGAR TREAD CENTER, INFORNT OF AKASHWANI, JALNA ROAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-324",
      "name": "LIFE MULTISEPCILITY HOSPITAL AND TRUMA CENTER",
      "address": "LIFE MULTISEPCILITY HOSPITAL AND TRUMA CENTER, PLOT NO. 9, SECTOR A, N-2 CIDCO, RAMNAGAR CORNER, JALNA ROAD",
      "zone": "Ward 86"
    },
    {
      "id": "hospital-325",
      "name": "SIDDHI MATERNITY AND ORTHOPAEDIC NURSING HOME",
      "address": "",
      "zone": "Ward 112"
    },
    {
      "id": "hospital-326",
      "name": "AURANGABAD INTERNATIONAL IVF CENTER",
      "address": "AURANGABAD INTERNATIONAL IVF CENTER, PLOT NO. 537, N-3 CIDCO",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-327",
      "name": "ENDOWORLD HOSPITAL",
      "address": "ENDOWORLD HOSPITAL PVT. LTD.PLOT NO-723, INFRONT OF AIRPORT,CHIKALTHANA, AURANGABAD",
      "zone": "Ward 37"
    },
    {
      "id": "hospital-328",
      "name": "ELREVO COSMETIC AND PLASTIC SURGERY CLINIC",
      "address": "ELREVO COSMETIC AND PLASTIC SURGERY CLINIC, MITRA NAGAR ,NEAR GURUDWARA JALNA ROAD, AURANGABAD",
      "zone": "Ward 76"
    },
    {
      "id": "hospital-329",
      "name": "KAVERI NETRALAY",
      "address": "KAVERI NETRALAY, PLOT NO11 GOVIND SAKHA, NEAR CHETAK GHODA  CHOWK, GARKHEDA, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-330",
      "name": "DAIVA BHARTI MULTISPECIALITY HOSPITAL",
      "address": "",
      "zone": "Ward 106"
    },
    {
      "id": "hospital-331",
      "name": "ALPINE SUPERSPECIALITY HOSPITAL",
      "address": "ALPINE SUPERSPECIALITY HOSPITAL, ( A UNIT OF JARA HOSPITAL PVT LTD), PLOT NO-136/A GUT NO-71,JAI NAGARI SATARA PARISAR,BEED BY PASS ,SATARA, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-332",
      "name": "UNITED CIGMA NURSING HOME",
      "address": "UNITED CIGMA NURSING HOME,PLOT NO 30, SHAHANOORMIYA, DARGA ROAD, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-333",
      "name": "GOLDEN CITY HOSPITAL",
      "address": "GOLDEN CITY HOSPITAL, GUT NO-66, BESIDE NATHSEEDS, VITKHEDA, PAITHAN ROAD, AURANGABAD",
      "zone": "Ward 107"
    },
    {
      "id": "hospital-334",
      "name": "JILLA FERTILITY CLINIC AND DAY CARE ENDOSCOPY CENTER",
      "address": "JILLA FERTILITY CLINIC AND DAY CARE ENDOSCOPY CENTER, MOTIWALA NAGAR",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-335",
      "name": "NILKANTH HOSPITAL",
      "address": "NILKANTH HOSPITAL, PLOT NO A44 SADASHIV NAGAR, N2, CIDCO, AURANGABAD",
      "zone": "Ward 87"
    },
    {
      "id": "hospital-336",
      "name": "NOBEL NURSING HOME",
      "address": "",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-337",
      "name": "GENERATION NEXT TEST TUBE BABY CENTER",
      "address": "GENERATION NEXT TEST TUBE BABY CENTER, PLOT NO. 17, ELITE PLAZA, SEVEN HILLS, BAIJIPURA, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-338",
      "name": "KPOND CHILDREN'S SUPERSPECIALITY HOSPITAL",
      "address": "KPOND CHILDREN'S SUPERSPECIALITY HOSPITAL, PLOT NO. 12/13, OPP OF AADINATH NAGAR, DEEPNAGAR, GARKHEDA, AURANGABAD",
      "zone": "Ward 96"
    },
    {
      "id": "hospital-339",
      "name": "PALAVE BAAL RUGNALAYA & DENTAL CLINIC",
      "address": "PALAVE BAAL RUGNALAYA & DENTAL CLINIC  SHIVAJI CHOWK, JAYBHAWANI NAGAR, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-340",
      "name": "AMRUT BAAL RUGNALAYA",
      "address": "AMRUT BAAL RUGNALAYA,.PLOT NO.20, DEEPNAGAR ,SHAHANOORMIYA, DARGA ROAD, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-341",
      "name": "SRUSTHI HOSPITAL AND MATERNITY HOME",
      "address": "SRUSTHI HOSPITAL AND MATERNITY HOME,27 A NANDIGRAM COLONY, NEAR ESSAR PERTOL PUMP,PUNDLIK NAGAR ROAD ,GARKHEDA, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-342",
      "name": "GETWELL CLINIC AND HOSPITAL",
      "address": "GETWELL CLINIC AND HOSPITAL, PLOT NO-6, SHIVALAY, ASHOK NAGAR ,GARKHEDA, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-343",
      "name": "PRESTIGE HOSPITAL",
      "address": "PRESTIGE HOSPITAL,PLOT NO-4, DEVGIRI COLONY, SAMTA NAGAR, AURANGABAD",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-344",
      "name": "LIFE CARE HOSPITAL",
      "address": "LIFE CARE HOSPITAL, BHAGYARUTU, PLOT NO. 232, B-SECTOR, N-1 CIDCO, AURANGABAD",
      "zone": "Ward 38"
    },
    {
      "id": "hospital-345",
      "name": "SANKALP NETRA RUGNALAYA",
      "address": "",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-346",
      "name": "SMITA'S INFERTILITY AND MATERNITY",
      "address": "SMITA'S INFERTILITY AND MATERNITY, PLOT NO. 1, D-SECTOR, N-12, INFRONT OF SWAMI VIVEKANAD GARDEN, AURANGABAD",
      "zone": "Ward 28"
    },
    {
      "id": "hospital-347",
      "name": "CHAVAN MATERNITY AND CHILDREN'S HOSPITAL",
      "address": "CHAVAN MATERNITY AND CHILDREN'S HOSPITAL,PLOT NO-1/2 CHANDRA NAGAR  N-9 ,M2 ROAD  CIDCO, AURANGABAD",
      "zone": "Ward 39"
    },
    {
      "id": "hospital-348",
      "name": "SUDHARSHAN ORTHO CARE  ACCIDENT HOSPITAL",
      "address": "SUDHARSHAN ORTHO CARE  ACCIDENT HOSPITAL, PLOT NO-1 N5 F SECTOR,CIDCO, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-349",
      "name": "SANTPURE FOUNDATION HOSPITAL",
      "address": "SANTPURE FOUNDATION HOSPITAL,PLOT NO-9,14/3, NEW SHREENATH NAGAR, BEHIND YASHODEEP HOTES SEVASN HILLS, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-350",
      "name": "AVDHOOT ACCIDENT HOSPITAL AND CRITICAL CARE CENTER",
      "address": "AVDHUT ACCIDENT HOSPITAL AND CRITICAL CARE CENTER,PLOT NO-5. B SECTOR, N-7 CIDCO, JALGAON ROAD, AURANGABAD",
      "zone": "Ward 39"
    },
    {
      "id": "hospital-351",
      "name": "SHEVALE HOSPITAL",
      "address": "SHEVALE HOSPITAL, PVT LTD & AJANTA FERTILITY CENTER,PLOT NO-24 SHRINIKETAN COLONY ,JALNA ROAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-352",
      "name": "VYANKETSH HOSPITAL",
      "address": "VYANKETSH HOSPITAL, NEAR TAPDIYA NAGAR, SHAHNOORMIYA ,DARGA ROAD, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-353",
      "name": "SAMARTH DENTAL AND ENT HOSPIAL",
      "address": "SAMARTH DENTAL AND ENT HOSPIAL, PLOT NO-6 DEOGIRI HILLS,  SHIVAJI NAGAR, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-354",
      "name": "NEW OPTIC EYE HOSPITAL",
      "address": "NEW OPTIC EYE HOSPITAL, PLOT NO-123 SHIVGAURI COMPLEX, OPP APEX HOSPITAL,  BASAIYYE NAGAR, AURANGABAD",
      "zone": "Ward 59"
    },
    {
      "id": "hospital-355",
      "name": "DEVGIRI MULTY SPECILTY HOSPITAL",
      "address": "DEVGIRI MULTY SPECILTY HOSPITAL, PLOT NO-2 ,SEVEN HILL , JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-356",
      "name": "MAHAVAR HOSPITAL",
      "address": "MAHAVAR HOSPITAL, PLOT NO 13/1,  KALPTARU HOUSING SOCIETY, GARKHEDA PARISAR, AURANGABAD",
      "zone": "Ward 79"
    },
    {
      "id": "hospital-357",
      "name": "THE PACIFIC HOUSING AND RESEARCH CENTER",
      "address": "",
      "zone": "Ward 10"
    },
    {
      "id": "hospital-358",
      "name": "SAHAYADRI ASTHIROG, BALRAO, DENTAL NURSING HOME MATERNITY CENTER",
      "address": "SAHAYADRI ASTHIROG, BALRAO, DENTAL NURSING HOME MATERNITY CENTER, S.NO. 8, PLOT NO. 20, MUKUNDWADI N-2 CIDCO",
      "zone": "Ward 90"
    },
    {
      "id": "hospital-359",
      "name": "SNEH SAWALI CARE CENTER",
      "address": "SNEH SAWALI CARE CENTER, SHREE NATH NAGAR ,SEVEN HILL, PLOT NO 16, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-360",
      "name": "PATEL ACCIDENT AND MATERNITY HOSPITAL",
      "address": "PATEL ACCIDENT AND MATERNITY HOSPITAL, CENTRAL NAKA ROAD,VIP FUNCTION HALL, AURANGABAD",
      "zone": "Ward 59"
    },
    {
      "id": "hospital-361",
      "name": "SIDDHESH EYE HOSPITAL",
      "address": "SIDDHESH EYE HOSPITAL, PLOT NO 15, MANJIRI, IN FRONT OF PANAT HOSPITAL, SHREYA NAGAR, OSMANPURA",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-362",
      "name": "ISHWAR INSTITUTE OF HEALTH CARE",
      "address": "ISHWAR INSTITUTE OF HEALTH CARE, ISHWAR HEIGHT GUT NO 6/1 POLOT NO 7, JAISINGHPURA, PADEGAON, AURANGABAD",
      "zone": "Ward 14"
    },
    {
      "id": "hospital-363",
      "name": "NULIFE LIFE HOSPITAL",
      "address": "NULIFE LIFE HOSPITAL, S.NO-12088/1, SHEET NO 129, NEAR.SAHIL MEDICAL, JASWANT PURA KIRAD PURA ,  ROSHN GATE, AURANGABAD",
      "zone": "Ward 45"
    },
    {
      "id": "hospital-364",
      "name": "SHIV KALA NETRALAYA",
      "address": "SHIV KALA NETRALAYA, PLOT NO-9 JABINDA ESTATE,NEAR JAIN INTERNATIONAL SCHOOL,  DARGA ROAD, AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-365",
      "name": "VEDANT BAL RUGNALAY",
      "address": "VEDANT BAL RUGNALAY ,ALANI -1 PLOT NO3, CTS NO,15840/175 SHIVAJI NAGAR ROAD ,OPP INDIAN OIL  PETROL PUMP, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-366",
      "name": "SAI KRUPA HOSPITAL",
      "address": "SAI KRUPA HOSPITAL, PLOT NO-1, BHAGWANT NAGAR HOS. SOCIETY, NEAR DISHA NAGARI, BEHIND HOTESL MASTER COOK, BEED BY PASS, AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-367",
      "name": "SHRI KRISHNA NETRALAYA",
      "address": "SHRI KRISHNA NETRALAYA, PLOT NO-50, MAHESH NAGAR AKASHWANI CHOWK, JALNA ROAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-368",
      "name": "SUSHRUT  AYURVEDIC MULTISPECILITY",
      "address": "SUSHRUT  AYURVEDIC MULTISPECILITY SUSHRUTT PLOT NO-8 , MUKUNDWADI N-2 CIDCO",
      "zone": "Ward 84"
    },
    {
      "id": "hospital-369",
      "name": "NARAYANI HOSPITAL AND MATERNITY HOME",
      "address": "NARAYAN HOSPITAL AND MATERNITY HOME, PLOT NO-9, M-9, N-6 ,CIDCO BAJARANG CHOWK, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-370",
      "name": "GAUR HOSPITAL",
      "address": "GAUR HOSPITAL, PLOT NO-2, CPS NO-13159/29,SHRINIKETAN COLONY,JALNA ROAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-371",
      "name": "INTERNATIONAL HOSPITAL",
      "address": "INTERNATIONAL HOSPITAL, PLOT NO. 8/9, MOTIWALA NAGAR, CETRAL NAKA ROAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-372",
      "name": "MAXCARE HOSPITAL",
      "address": "MAXCARE, PLOT NO 219 N3,  OP LEMON TREE HOTEL, CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-373",
      "name": "SANKALP HOSPITAL",
      "address": "SANKALP HOSPITAL, PLOT NO 57, MAHESH NAGAR, NEAR ELLORA DIAGNOSTIC CENTER, APEX HOSPITAL ROAD NEAR AKASHWANI, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-374",
      "name": "MAXCARE HOSPITAL",
      "address": "MAXCARE, PLOT NO 219 N3,  OP LEMON TREE HOTEL, CIDCO, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-375",
      "name": "MATRUTVA NURSING & MATERNITY HOSPITAL",
      "address": "MATRUTVA NURSING & MATERNITY HOSPITAL,PLOT NO-6, ULKANAGARI,OMKARESHWAR CHOWK,JAWAHAR POLICE STATION ROAD, AURANGABAD",
      "zone": "Ward 98"
    },
    {
      "id": "hospital-376",
      "name": "AII NURSING HOME",
      "address": "AII NURSING HOME, PLOT NO-21/A MAYUR PARK ROAD, JALGAON ROAD,AURANGABAD",
      "zone": "Ward 7"
    },
    {
      "id": "hospital-377",
      "name": "AMEEN HOSPITAL, MATERNITY AND ENT",
      "address": "AMEEN HOSPITAL, MATERNITY AND ENT, PLOT NO-11, NAGSEN COLONY, ROSHAN GATE",
      "zone": "Ward 45"
    },
    {
      "id": "hospital-378",
      "name": "SHRI RADHE NETRALAY",
      "address": "SHRI RADHE NETRALAY VIJAY APPARTMENT, ULKANAGARI, AURANGABAD",
      "zone": "Ward 98"
    },
    {
      "id": "hospital-379",
      "name": "MALANI HOSPITAL, SEGICAL CRITICAL CARE",
      "address": "MALANI HOSPITAL, SEGICAL CRITICAL CARE, PLOT NO-127, SHRI HARI APP, ABOVE MORE SUPER MARKET, SAVARKAR CHOWK, SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-380",
      "name": "NISHA SUPER SPECIALITY HOSPITAL",
      "address": "NISHA SUPER SPECIALITY HOSPITAL,PLOT NO-4-12,57/P, SARVEY NO-162/21,NEAR RAHIMA MAZID, NEW BAIJIPURA, AURANGABAD",
      "zone": "Ward 58"
    },
    {
      "id": "hospital-381",
      "name": "CITIZEN HOSPITAL, MATERNITY INFERTILITY CHILD CEAR CENTER",
      "address": "CITIZEN HOSPITAL, MATERNITY INFERTILITY CHILD CEAR CENTER, AAMER COMPLEX, FIRST FLOOR,  JINSI ROAD, AURANGABAD",
      "zone": "Ward 45"
    },
    {
      "id": "hospital-382",
      "name": "PANACEA SUPER SPECIALITY HOSPITAL",
      "address": "PANACEA SUPER SPECIALITY HOSPITAL, PLOT NO-147, CTS NO-20498, OPP VARAD GANESH MANDIR, SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-383",
      "name": "HYAAT WELLNESS HOSPITAL",
      "address": "HYAAT WELLNESS HOSPITAL, MEYAAR PLAZA, PLOT NO 84 CTS, NO. 11253, YUNUS COLONY, KATKAT GATE, AURANGABAD",
      "zone": "Ward 43"
    },
    {
      "id": "hospital-384",
      "name": "SYNERGY HOSPITAL",
      "address": "SYNERGY HOSPITAL, PLOT NO 24, NEAR SHIVCHHATRAPATI COLLEGE, KAMGAR CHOWK N-3 CIDCO",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-385",
      "name": "SIDDHIVINAYAK LAPAROSCOPIC, OBESITY SURGERY HOSPITAL",
      "address": "SIDDHIVINAYAK LAPAROSCOPIC, OBESITY SURGERY HOSPITAL, SAPNA ,MARKET INFRONT ESSAR PETROL PUMP ,PUNDLIK NAGR ROAD, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-386",
      "name": "SHREE SAI PILES SPECIALITY HOSPITAL AND LASER CENTER",
      "address": "SHREE SAI PILES SPECIALITY HOSPITAL AND LASER CENTER  PLOT NO-61, S.NO. 188, SANKET NAGAR, NEAR DADOJI KONDDEV SCHOOL, MAYUR PARK, AURANGABAD",
      "zone": "Ward 7"
    },
    {
      "id": "hospital-387",
      "name": "INDIRA IVF HOSPITAL",
      "address": "INDIRA IVF HOSPITAL PVT. LTD SECOND FLOWE, KOHLI COMLEX, NEAR MGM MEDICAL COLLLEGE,  SEVEN HILLS JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-388",
      "name": "EMRALD MEDICAL RESEARCH CENTER",
      "address": "EMMRALD MEDICAL RESEARCH CENTER PVT. LTD.,PLOT NO-110, S.NO.6/A  SHAHNOOR MIYA DARGA ROAD,AUARANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-389",
      "name": "SHRI SARVESHWAR NETRALAYA",
      "address": "SHRI SARVESHWAR NETRALAYA PLOT NO.5 MITRA NAGAR, NEAR GURUDWARA, AURANGABAD",
      "zone": "Ward 76"
    },
    {
      "id": "hospital-390",
      "name": "GI-ONE HOSPITAL",
      "address": "GI-ONE HOSPITAL, AMRUT SAI SOLITARE, BESIDE GOLDIE CENIMA, OPP. MIDC OFFICE RAILWAY STATION  ROAD, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-391",
      "name": "SAI HOSPITAL ADVANCED LAPAROSCOPY CENTER",
      "address": "SAI HOSPITAL ADVANCED LAPAROSCOPY CENTER, PLOT NO-1 FIRST, BHANUDAS NAGAR, JAWAHAR COLONY ROAD, AKASHWANI,  BHANUDAS NAGAR",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-392",
      "name": "OZONE MULTISPECIALITY HOSPITAL AND ICU",
      "address": "OZONE MULTISPECIALITY HOSPITAL AND ICU, PUNDALIK NAGAR, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-393",
      "name": "TRUST HOSPITAL AND NURSING HOME",
      "address": "TRUST HOSPITAL AND NURSING HOME, NAGSEN COLONY BESIDE BILAL MASJID, NEAR SIR SAYYED COLLEGE, ROSHAN GATE",
      "zone": "Ward 45"
    },
    {
      "id": "hospital-394",
      "name": "SUDARSHAN NETRALAYA",
      "address": "",
      "zone": "Ward 73"
    },
    {
      "id": "hospital-395",
      "name": "GORE NETRALAYA AND LASER CENTER",
      "address": "GORE NETRALAYA AND LASER CENTER PAITHAN GATE, 1ST FLOOR, SUNNY CORNER, PAITHAN GATE CIRCLE, AURANGABAD",
      "zone": "Ward 53"
    },
    {
      "id": "hospital-396",
      "name": "SANAP HEALTH CENTER",
      "address": "SANAP HEALTH CENTER PLOT NO.27, FIRST AND SECOND FLOWER,  MALANI ARCADE, NANDIGRAM COLONY, BESIDE  ESSAR PETROL PUMP, NEAR GAJANAN MANDIR, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-397",
      "name": "KHEDKAR MATERNITY HOSPITAL",
      "address": "KHEDKAR MATERNITY HOSPITAL, SHIVAJI NAGAR ,GARKHEDA , AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-398",
      "name": "NIRAAMAY SUPER SPECIALITY CLINIC AND DAYCARE CENTER",
      "address": "NIRAAMAY SUPER SPECIALITY CLINIC AND DAYCARE CENTER, POLT NO-233/34, SHRI SWAMI SAMARTH SHRYSHTI, FIRST FLOWER, ABOVE BANK OF BARODA, VARAD GANESH MANDIR ROAD, SAMARTH NAGAR",
      "zone": "Ward 68"
    },
    {
      "id": "hospital-399",
      "name": "VIBHUTE ACCIDENT AND ORTHOPAEDIC",
      "address": "VIBHUTE ACCIDENT AND ORTHOPAEDIC PLOT NO.544 KAMGAR CHOWK, N-3, CIDCO",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-400",
      "name": "KALPATARU ADVANCED AND PEDIATRIC SURGERY CENTER",
      "address": "",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-401",
      "name": "GURUKRUPA NURSING HOME",
      "address": "GURUKRUPA NURSING HOME, PLOT NO.24 KALPATRU HO. SO. GARKHEDA, AURANGABAD",
      "zone": "Ward 79"
    },
    {
      "id": "hospital-402",
      "name": "NASER NURSING HOME",
      "address": "NASER NURSING HOME, PLOT NO.20, RAVINDRA NAGAR, AHBAB COLONY, KATKAT GATE, AURANGABAD",
      "zone": "Ward 75"
    },
    {
      "id": "hospital-403",
      "name": "ELITE SISA LASER CENTER AND EYE CLINIC",
      "address": "ELITE SISA LASER CENTER AND EYE CLINIC, OFFICE NO. 201, SECOND FLOOR, NISHA PRIDE LAND MARK, MONDHA NAKA, JALNA ROAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-404",
      "name": "SHIV SHAKTI CLINIC",
      "address": "SHIV SHAKTI CLINIC, JADHAVWADI, LANE NO. 6,  TV CENTER, AURANGABAD",
      "zone": "Ward 8"
    },
    {
      "id": "hospital-405",
      "name": "SODANI MULTISPECIALITY HOSPITAL",
      "address": "SODANI MULTISPECIALITY HOSPITAL, PLOT NO. 520, SONAI, N-3, CIDCO",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-406",
      "name": "NEO LIFE CHILDREN'S HOSPITAL",
      "address": "NEO LIFE CHILDREN'S HOSPITAL, SAFALYA PLAZA, PLOT NO. 693, N-5, CIDCO, AURANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-407",
      "name": "CHINTAMANI EYE AND DENTAL HOSPITAL",
      "address": "CHINTAMANI EYE AND DENTAL HOSPITAL, A-1,2, FIRST FLOOR, SUYASH COMPLEX, KALDA CORNER",
      "zone": "Ward 72"
    },
    {
      "id": "hospital-408",
      "name": "RAHAT GENERAL HOSPITAL, MATERNITY AND NURSING HOME",
      "address": "RAHAT GENERAL HOSPITAL, MATERNITY AND NURSING HOME, SADAT NAGAR, NEAR ZAM ZAM SCHOOL, RAILWAY STATION, AURANGABAD",
      "zone": "Ward 103"
    },
    {
      "id": "hospital-409",
      "name": "VEDANT EYE HOSPITAL",
      "address": "VEDANT EYE HOSPITAL, PLOT NO. 341, ABOVE CHISHTIYA POLICE CHOWKI, N-6, CIDCO, AURANGABAD",
      "zone": "Ward 63"
    },
    {
      "id": "hospital-410",
      "name": "NETRAJYOTI EYE HOSPITAL",
      "address": "NETRAJYOTI EYE HOSPITAL, OFFICE NO. 103, SAMYAK GALLERIA, SUTGIRNI CHOWK, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-411",
      "name": "COLORS CHILDREN'S HOPSITAL",
      "address": "COLORS CHILDREN'S HOPSITAL, SHAHA BAZAR, NEAR CHELIPURA POLICE STATION, AURANGABAD",
      "zone": "Ward 46"
    },
    {
      "id": "hospital-412",
      "name": "KILBIL NURSING HOME",
      "address": "KILBIL NURSING HOME, PLOT NO 16, MUKUND HO.SO. N-2, CIDCO AURANGABAD",
      "zone": "Ward 81"
    },
    {
      "id": "hospital-413",
      "name": "GADEKAR HOSPITAL AND NURSING HOME",
      "address": "GADEKAR HOSPITAL AND NURSING HOME, SHOP NO 4 AND 5, RADHAKRISHNA TOWER, SAYADRI NAGAR, SATARA PARISAR, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-414",
      "name": "SANT EKNATH HOSPITAL",
      "address": "SANT EKNATH HOSPITAL, KASLIWAL VISHWA, PARVATI NAGAR, NEAR KHIWANSARA LAWNS, ULKANAGRI, AURANGABAD",
      "zone": "Ward 98"
    },
    {
      "id": "hospital-415",
      "name": "GHUGE HOSPITAL AND PRASTUTI GRUHA",
      "address": "GHUGE HOSPITAL AND PRASTUTI GRUHA, JAI BHAVANI NAGAR, MUKUNDWADI RAILWAY STATION ROAD, AURANGABAD",
      "zone": "Ward 91"
    },
    {
      "id": "hospital-416",
      "name": "JAMBURE HOSPITAL",
      "address": "JAMBURE HOSPITAL, PLOT NO 28, MORYA MANGAL KARYALAYA RAOD, SHIVAJI NAGAR, AURANGABAD",
      "zone": "Ward 113"
    },
    {
      "id": "hospital-417",
      "name": "MAULI MULVYADH HOSPITAL",
      "address": "MAULI MULVYADH HOSPITAL, PLOT NO-9, S.NO 7/1 AND 7/2, OPP OF DHOOOT HOSPITAL, AURANGABAD",
      "zone": "Ward 87"
    },
    {
      "id": "hospital-418",
      "name": "SHRE GAJANAN SPECIALITY EYE CENTER",
      "address": "SHRE GAJANAN SPECIALITY EYE CENTER, PLOT NO-455, NEAR KETKI HOSPITAL,  N-3, CIDCO",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-419",
      "name": "KANDARPHALE HOSPITAL",
      "address": "KANDARPHALE HOSPITAL, TOWN CENTER, PLOT NO-2, SECTOR E, CIDCO, AUARANGABAD",
      "zone": "Ward 64"
    },
    {
      "id": "hospital-420",
      "name": "SHARP EYE CARE SUPERSPECIALITY EYE HOSPITAL",
      "address": "SHARP EYE CARE SUPERSPECIALITY EYE HOSPITAL, 1ST FLOOR, SAI BUSINESS CENTER, SURANA NAGAR, BESIDE SILVER INN HOTEL, SEVEN HILL FLYOVER, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-421",
      "name": "DGA UMANG MATERNITY & IVF CENTER",
      "address": "DGA UMANG MATERNITY & IVF CENTER PVT.LTD. PLOT NO 32, N.S 1, F- SECTOR MORYA MANGAL KARYALAY ROAD, SHIVAJI NAGAR, AURANGABAD",
      "zone": "Ward 113"
    },
    {
      "id": "hospital-422",
      "name": "AURANGABAD HOSPITAL, FOR ORTHOPEDIC AND SURGICAL CARE",
      "address": "AURANGABAD HOSPITAL, FOR ORTHOPEDIC AND SURGICAL CARE, NEAR JUNA BAZAR AMC SCHOOL",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-423",
      "name": "SV NEOCARE HOSPITAL",
      "address": "SV NEOCARE HOSPITAL, CTS NO-15847/111, BEHIND DISHA SQUARE,NEAR DEOVGIRI NAGRI SAHKARI BANK, SUTGIRNI CHOWK, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-424",
      "name": "COSMO ENT HOSPITAL",
      "address": "COSMO ENT HOSPITAL, PLOT NO-536, N-3 CIDCO, KAMGAR CHOWK",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-425",
      "name": "YADAV SUPERSPECIALITY HOSPITAL",
      "address": "YADAV SUPERSPECIALITY HOSPITAL, PLOT NO. 112, SHAHANOOR MIA DARGAH ROAD, SAHAKAR NAGAR, AURANGABAD",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-426",
      "name": "JIVHALA MATERNITY HOSPITAL",
      "address": "JIVHALA MATERNITY HOSPITAL, PLOT NO. 172-B, SHASTRI NAGAR, BEHIND HEDGEWAR HOSPITAL, AURANGABAD",
      "zone": "Ward 77"
    },
    {
      "id": "hospital-427",
      "name": "POLE ENDOVASCULAR CARE (POLE HOSPITAL)",
      "address": "POLE ENDOVASCULAR CARE (POLE HOSPITAL), PLOT NO. 1, VENKATESH NAGAR, 1ST FLOOR ELLORA DIAGNOSTIC CENTER, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-428",
      "name": "ADCHITRE EYE HOSPITAL",
      "address": "ADCHITRE EYE HOSPITAL, 1ST FLOOR, RAJSHREE TOWER, JIJAMATA COLONY, NIRALA BAZAR TO PAITHAN GATE ROAD, AURANGABAD",
      "zone": "Ward 53"
    },
    {
      "id": "hospital-429",
      "name": "CARE WELL HOSPITAL,(A UNIT OF RVM CAREWELL HOSPTIAL",
      "address": "CARE WELL HOSPITAL,(A UNIT OF RVM CAREWELL HOSPTIAL & ICU PVT LTD),PLOT NO-11 VIDYA NIKETAN COLONY, MAHESH NAGAR ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-430",
      "name": "PROBUS HOSPITAL & RESEARCH",
      "address": "PROBUS HOSPITAL & RESEARCH LLP, MANAK RATAN BIULDING , NEAR HIWALE PATIL LONS, BEED BY PASS ROAD, AURANGABAD",
      "zone": "Ward 114"
    },
    {
      "id": "hospital-431",
      "name": "KOHIRE BAL RUGNALAY & MATERNITY HOME",
      "address": "KOHIRE BAL RUGNALAY & MATERNITY HOME,PLOT NO-2, MAULI HIDS,INFRONT OF HOTEL MANISH INN, AURANGABAD",
      "zone": "Ward 15"
    },
    {
      "id": "hospital-432",
      "name": "DR. ABDUL WAHEED A HAMEED KHAN",
      "address": "PLOT NO-3, NEAR ICYAS MAJJID , AZAD CHOWK, JASMANTPURA, AURANGABAD",
      "zone": "Ward 40"
    },
    {
      "id": "hospital-433",
      "name": "CSM NURSING HOME",
      "address": "CSM NURSING HOME, PLOT NO-24/B, SHRIKRUPA COLONY,BEHIND NISHAN PARK HOTEL,OPP. OF AJIT HOS. SOCIETY,MUSTFABAD, AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-434",
      "name": "SNEH SAWLI CARE CENTER (A PROJECT OF SANJ SAWALI CARE FOUNDATION)",
      "address": "SNEH SAWLI CARE CENTER( A PROJECT OF SANJ SAWALI CARE FOUNDATION),PLOT NO-11, GUT NO-58,SATARA PARISAR,BESIDE MAHENDRA RATNAPRABHA MOTORS, BEED BY PASS, AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-435",
      "name": "SHANTAI HOSPITAL",
      "address": "SHANTAI HOSPITAL,PLOT NO-19,SANT EKNATH HOS SOCIETY , OPP. AKASHWANI, JALNA ROAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-436",
      "name": "SHRI ASHIRWAD HOSPITAL & NURSING HOME",
      "address": "SHRI ASHIRWAD HOSPITAL & NURSING HOME, PLOT NO-27,SADASHIV NAGAR , CIDCO N-2/A",
      "zone": "Ward 83"
    },
    {
      "id": "hospital-437",
      "name": "SHUBHSHRI HOSPITAL",
      "address": "SHUBHSHRI HOSPITAL,OFFICE NO-4, 1ST FLOOR , SHRIDURGANAND HIDES, JAIBHAVANI HOS SOCIETY, PUNDLIK NAGAR ROAD, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-438",
      "name": "T-POINT MULTISPECILITY HOSPITAL",
      "address": "T-POINT MULTISPECILITY HOSPITAL,PLOT NO-13, GUT NO-176/B, HARSOOL, AURANGABAD",
      "zone": "Ward 7"
    },
    {
      "id": "hospital-439",
      "name": "ANANDI MULTISPECILITY HOSPITAL",
      "address": "ANANDI MULTISPECILITY HOSPITAL,PLOT NO-4, CTS NO-15840/131,SHIVAJINAGAR ROAD, GARKHEDA, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-440",
      "name": "ORCHID CHILD CARE",
      "address": "ORCHID CHILLID CARE,UPER BASEMENT FLOOR, SAI BUSINESS CENTER, PLOT NO-5 & 16, SURANA NAGAR, JALNA ROAD, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-441",
      "name": "AMRUTWELL CLINIC & NURSING HOME",
      "address": "AMRUTWELL CLINIC & NURSING HOME, PLOT NO-3, NIRANJAN SOCIETY, TILAK NAGAR, NEAR KHIVSARA PARK, OPP. GURUKUL CLASS, SHAHANURWADI",
      "zone": "Ward 99"
    },
    {
      "id": "hospital-442",
      "name": "JEEVAN AMRUT HOSPITAL",
      "address": "JEEVAN AMRUT HOSPITAL,PLOT NO-47, PARIJAT NAGAR, BEHINDE GOKUL SWEETS, N-4 CIDCO, AURANGABAD",
      "zone": "Ward 80"
    },
    {
      "id": "hospital-443",
      "name": "RIYA SEVAN HILLS HOSPITAL",
      "address": "RIYA SEVAN HILLS HOSPITAL, PLOT NO-44, VIDYA NAGAR, SEVAN HILLS, JALNA ROAD, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-444",
      "name": "APSINGKAR MATERNITY HOSPITAL & PAIN CLINIC",
      "address": "APSINGKAR MATERNITY HOSPITAL & PAIN CLINIC, PLOT NO -2, BHAGWANT NAGAR, HOS SOCIETY, MUSTFABAD AERA,BESIDE DISHA NAGARI, BEED BY PASS ROAD, AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-445",
      "name": "JEEVAN SPARSH NETRALAY",
      "address": "JEEVAN SPARSH NETRALAY,PLOT NO-R28/2,N-7,MAHADA COLONY, CIDCO, AURANGABAD",
      "zone": "Ward 87"
    },
    {
      "id": "hospital-446",
      "name": "ORTHOCARE HOSPITAL",
      "address": "ORTHOCARE HOSPITAL,PLOT NO-57, MAHESH NAGAR, APEX HOSPITAL ROAD, NEAR AKASHWANI CHOWK",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-447",
      "name": "AJANTA SUPERSPECILITY HOSPITAL, GLOBAL TRAUMA & BUNDS CENTER",
      "address": "AJANTA SUPERSPECILITY HOSPITAL,GLOBAL TRAUMA & BUNDS CENTER, PLOT NO-15, N-13, HUDCO CORNER, AURANGABAD",
      "zone": "Ward 5"
    },
    {
      "id": "hospital-448",
      "name": "GANPATI SUPERSPECILITY HOSPITAL",
      "address": "GANPATI SUPERSPECILITY HOSPITAL, PLOT NO-26 & 33, VYANKTESH NAGAR, APEX ROAD, BAIJIPURA, AURANGABAD",
      "zone": "Ward 2"
    },
    {
      "id": "hospital-449",
      "name": "SWARNIM MULTISPECILITY HOSPITAL",
      "address": "SWARNIM MULTISPECILITY HOSPITAL, NATHVALLY SCHOOL ROAD, OPP. SAFFRON HERITGE, KANCHANWADI, AURANGABAD",
      "zone": "Ward 106"
    },
    {
      "id": "hospital-450",
      "name": "LIFELINE MULTISPECILITY HOSPITAL",
      "address": "LIFELINE MULTISPECILITY HOSPITAL, PLOT NO-20, GUT NO-103, OPP.SURYA LOWNS, BEED BY PASS, AURANGABAD",
      "zone": "Ward 114"
    },
    {
      "id": "hospital-451",
      "name": "SAROJ ADVANCE IVF",
      "address": "SAROJ ADVANCE IVF, 2ND FLOOER, OBERAI CHEMBERS,DUDHDAIRY CHOWK, JALNA ROAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-452",
      "name": "SANKLAP HOSPITAL",
      "address": "SANKLAP HOSPITAL, PLOT NO-49, P/1,TOWN CENTER, LOKAMAT NAGAR, CIDCO, BEHINDE RAJ PETROL PUMP, AURANGABAD",
      "zone": "Ward 65"
    },
    {
      "id": "hospital-453",
      "name": "SHASHWAT PILES HOSPITAL",
      "address": "SHASHWAT PILES HOSPITAL,OFFICE NO-5, 2ND FLOOER, DURAGAVAND HIDS, PUNDLIK NAGAR ROAD, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-454",
      "name": "KHEDKAR MATERNITY HOSPITAL",
      "address": "KHEDKAR MATERNITY HOSPITAL, SHIVAJI NAGAR ,GARKHEDA , AURANGABAD",
      "zone": "Ward 109"
    },
    {
      "id": "hospital-455",
      "name": "AAROGYAM WOMEN AND CHILDREN CARE HOSPITAL",
      "address": "AAROGYAM WOMEN AND CHILDREN CARE HOSPITAL, PLOT NO. 5, SECTOR-K, OPP. SARASWAT BANK, T.V. CENTER ROAD, N-9 CIDCO, AURANGABAD",
      "zone": "Ward 30"
    },
    {
      "id": "hospital-456",
      "name": "DESHMUKH HOSPITAL, MATERNITY, PEADIATRIC AND SURGICAL HOSPITTAL",
      "address": "DESHMUKH HOSPITAL, MATERNITY, PEADIATRIC AND SURGICAL HOSPITTAL, PLOT NO-18, GUT NO-140, BEED BY PASS, SATARA PARISAR,AURANGABAD",
      "zone": "Ward 115"
    },
    {
      "id": "hospital-457",
      "name": "PAWAR HOSPITAL",
      "address": "PAWAR HOSPITAL,PUNARMA COMPLEX, PLOT NO-31,N-11/A,TV CENTER HUDCO, AURANGABAD",
      "zone": "Ward 29"
    },
    {
      "id": "hospital-458",
      "name": "CONTRACARE EYE HOSPITAL",
      "address": "CONTRACARE EYE HOSPITAL, SAGAR TRADE CENTER, JALNA ROAD, AURANGABAD",
      "zone": "Ward 66"
    },
    {
      "id": "hospital-459",
      "name": "SAI SANKET MULTISPECIALITY HOSPITAL",
      "address": "SAI SANKET MULTISPECIALITY HOSPITAL, SAMYAK GALLERIA, SUTGIRANI CHOWK, AURANGABAD",
      "zone": "Ward 97"
    },
    {
      "id": "hospital-460",
      "name": "CHANDRIKA NURSING HOME",
      "address": "CHANDRIKA NURSING HOME, PLOT NO-1,SANDHESH NAGAR, GARKHEDA, AURANGABAD",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-461",
      "name": "MOTHERHOOD MATERNITY & NURSING HOME",
      "address": "PLOT NO-7/A,CTS NO-11496,N-13,MAHEMUDPURA ROZA BAGH, AURANGABAD",
      "zone": "Ward 5"
    },
    {
      "id": "hospital-462",
      "name": "CHAVAN MATERNITY AND CHILDREN'S HOSPITAL",
      "address": "CHAVAN MATERNITY AND CHILDREN'S HOSPITAL,PLOT NO-1/2 CHANDRA NAGAR  N-9 ,M2 ROAD  CIDCO, AURANGABAD",
      "zone": "Ward 40"
    },
    {
      "id": "hospital-463",
      "name": "DRISHTI NETRALAY",
      "address": "",
      "zone": "Ward 78"
    },
    {
      "id": "hospital-464",
      "name": "DR. PAWAR NURSING HOME",
      "address": "",
      "zone": "Ward 91"
    }
  ],
  "fire-stations": [
    {
      "id": "fire-001",
      "name": "Padampura Fire Station",
      "address": "Railway Station Rd, Shriram Nagar, Padampura, Aurangabad, Maharashtra 431005",
      "zone": "Ward 103"
    },
    {
      "id": "fire-002",
      "name": "7 Hill Fire Station",
      "address": "M G M, Aurangabad, Maharashtra 431003",
      "zone": "Ward 65"
    },
    {
      "id": "fire-003",
      "name": "MIDC Fire Station",
      "address": "MIDC Industrial Area, Chilkalthana, Aurangabad, Maharashtra 431006",
      "zone": "Ward 38"
    }
  ],
  "police-stations": [
    {
      "id": "police-001",
      "name": "City Chowk P.S.",
      "address": "City Chowk",
      "zone": "Ward 22"
    },
    {
      "id": "police-002",
      "name": "Kranti Chowk P.S.",
      "address": "Kranti Chowk",
      "zone": "Ward 69"
    },
    {
      "id": "police-003",
      "name": "Jinsi Chowk P.S.",
      "address": "Jinsi Chowk",
      "zone": "Ward 45"
    },
    {
      "id": "police-004",
      "name": "Pundalik Nagar P.S.",
      "address": "Pundalik Nagar",
      "zone": "Ward 93"
    },
    {
      "id": "police-005",
      "name": "Satara P.S.",
      "address": "Satara",
      "zone": "Ward 115"
    },
    {
      "id": "police-006",
      "name": "Harsul P.S.",
      "address": "Harsul",
      "zone": "Ward 1"
    },
    {
      "id": "police-007",
      "name": "MCIDCO P.S.",
      "address": "MCIDCO",
      "zone": "Ward 38"
    },
    {
      "id": "police-008",
      "name": "Mukundwadi P.S.",
      "address": "Mukundwadi",
      "zone": "Ward 84"
    },
    {
      "id": "police-009",
      "name": "Vedant Nagar P.S.",
      "address": "Vedant Nagar",
      "zone": "Ward 104"
    },
    {
      "id": "police-010",
      "name": "CIDCO P.S.",
      "address": "CIDCO",
      "zone": "Ward 39"
    },
    {
      "id": "police-011",
      "name": "Begumpura P.S.",
      "address": "Begumpura",
      "zone": "Ward 12"
    },
    {
      "id": "police-012",
      "name": "Jawahar Nagar P.S.",
      "address": "Jawahar Nagar",
      "zone": "Ward 98"
    },
    {
      "id": "police-013",
      "name": "Usmanpura P.S.",
      "address": "Usmanpura",
      "zone": "Ward 101"
    }
  ],
  "zone-offices": [
    {
      "id": "zone-001",
      "name": "Zone Office 1",
      "address": "Town Hall",
      "zone": "Zone 1"
    },
    {
      "id": "zone-002",
      "name": "Zone Office 2",
      "address": "Sillekhana",
      "zone": "Zone 2"
    },
    {
      "id": "zone-003",
      "name": "Zone Office 3",
      "address": "Central Naka",
      "zone": "Zone 3"
    },
    {
      "id": "zone-004",
      "name": "Zone Office 4",
      "address": "Near Saubhagya Mangal Karyalay",
      "zone": "Zone 4"
    },
    {
      "id": "zone-005",
      "name": "Zone Office 5 & 6",
      "address": "Jalgaon Road",
      "zone": "Zone 5 & 6"
    },
    {
      "id": "zone-006",
      "name": "Zone Office 7",
      "address": "Near Jawahar Colony Police Station",
      "zone": "Zone 7"
    },
    {
      "id": "zone-007",
      "name": "Zone Office 8",
      "address": "Beed By Pass",
      "zone": "Zone 8"
    },
    {
      "id": "zone-008",
      "name": "Zone Office 9",
      "address": "Jalna Road",
      "zone": "Zone 9"
    },
    {
      "id": "zone-009",
      "name": "Zone Office 10",
      "address": "Raj Nagar Railway Station Road",
      "zone": "Zone 10"
    }
  ],
  "cfcs": [
    {
      "id": "cfc-001",
      "name": "CFC — Zone Office 1",
      "address": "Town Hall",
      "zone": "Zone 1"
    },
    {
      "id": "cfc-002",
      "name": "CFC — Zone Office 2",
      "address": "Sillekhana",
      "zone": "Zone 2"
    },
    {
      "id": "cfc-003",
      "name": "CFC — Zone Office 3",
      "address": "Central Naka",
      "zone": "Zone 3"
    },
    {
      "id": "cfc-004",
      "name": "CFC — Zone Office 4",
      "address": "Near Saubhagya Mangal Karyalay",
      "zone": "Zone 4"
    },
    {
      "id": "cfc-005",
      "name": "CFC — Zone Office 5 & 6",
      "address": "Jalgaon Road",
      "zone": "Zone 5 & 6"
    },
    {
      "id": "cfc-006",
      "name": "CFC — Zone Office 7",
      "address": "Near Jawahar Colony Police Station",
      "zone": "Zone 7"
    },
    {
      "id": "cfc-007",
      "name": "CFC — Zone Office 8",
      "address": "Beed By Pass",
      "zone": "Zone 8"
    },
    {
      "id": "cfc-008",
      "name": "CFC — Zone Office 9",
      "address": "Jalna Road",
      "zone": "Zone 9"
    },
    {
      "id": "cfc-009",
      "name": "CFC — Zone Office 10",
      "address": "Raj Nagar Railway Station Road",
      "zone": "Zone 10"
    }
  ],
  "csmc-schools": [
    {
      "id": "school-001",
      "name": "Kendriya Prathamik school",
      "address": "Begampura",
      "zone": "Zone 1"
    },
    {
      "id": "school-002",
      "name": "Prathamik school urdu",
      "address": "Arif colony",
      "zone": "Zone 1"
    },
    {
      "id": "school-003",
      "name": "Prathamik school",
      "address": "Bhavsingpura",
      "zone": "Zone 1"
    },
    {
      "id": "school-004",
      "name": "Padegaoan Prathamil school",
      "address": "Padegaoan",
      "zone": "Zone 1"
    },
    {
      "id": "school-005",
      "name": "Prathamik School",
      "address": "Mittitha",
      "zone": "Zone 1"
    },
    {
      "id": "school-006",
      "name": "Kendriya Prathamik School",
      "address": "Jubili Park",
      "zone": "Zone 1"
    },
    {
      "id": "school-007",
      "name": "Prathami School Badi Girni",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-008",
      "name": "Prathamik School Juna Bazar",
      "address": "",
      "zone": "Zone 1"
    },
    {
      "id": "school-009",
      "name": "Prathamik School NageshwarWadi",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-010",
      "name": "Prathamik School Manzurpura",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-011",
      "name": "Kendriya Prathamik School Kiradpura 1",
      "address": "Kiradpura",
      "zone": "Zone 3"
    },
    {
      "id": "school-012",
      "name": "Prathamik School Kiradpura 2",
      "address": "",
      "zone": "Zone 3"
    },
    {
      "id": "school-013",
      "name": "Kendriya Prathamik School Kiradpura 3",
      "address": "",
      "zone": "Zone 3"
    },
    {
      "id": "school-014",
      "name": "Prathamik School chelipura",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-015",
      "name": "Prathamik School Yashodhara colony",
      "address": "",
      "zone": "Zone 3"
    },
    {
      "id": "school-016",
      "name": "Prathamik School N11",
      "address": "",
      "zone": "Zone 4"
    },
    {
      "id": "school-017",
      "name": "Prathamik School Ashok nagar",
      "address": "",
      "zone": "Zone 5"
    },
    {
      "id": "school-018",
      "name": "Prathamik School Brijwadi",
      "address": "",
      "zone": "Zone 5"
    },
    {
      "id": "school-019",
      "name": "Prathamik School Naregaon Marathi",
      "address": "",
      "zone": "Zone 5"
    },
    {
      "id": "school-020",
      "name": "Prathamik School Naregaon Urdu",
      "address": "",
      "zone": "Zone 5"
    },
    {
      "id": "school-021",
      "name": "Kendriya Prathamik School Mukundwadi",
      "address": "",
      "zone": "Zone 6"
    },
    {
      "id": "school-022",
      "name": "Prathamik School Chikalthana",
      "address": "",
      "zone": "Zone 6"
    },
    {
      "id": "school-023",
      "name": "Prathamik School Sanjay Nagar",
      "address": "",
      "zone": "Zone 6"
    },
    {
      "id": "school-024",
      "name": "Kendriya Prathamik School Priyadarshini",
      "address": "",
      "zone": "Zone 8"
    },
    {
      "id": "school-025",
      "name": "Prathamik School Ganesh Colony Urdu",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-026",
      "name": "Prathamik School Eknath Nagar",
      "address": "",
      "zone": "Zone 9"
    },
    {
      "id": "school-027",
      "name": "Kendriya Prathamik School Bansilal Nagar",
      "address": "",
      "zone": "Zone 9"
    },
    {
      "id": "school-028",
      "name": "Prathamik School Garkheda",
      "address": "",
      "zone": "Zone 7"
    },
    {
      "id": "school-029",
      "name": "Prathamik School Shah Bazar",
      "address": "",
      "zone": "Zone 3"
    },
    {
      "id": "school-030",
      "name": "Prathamik School Padampura",
      "address": "",
      "zone": "Zone 9"
    },
    {
      "id": "school-031",
      "name": "Prathamik School Osmanpura",
      "address": "",
      "zone": "Zone 9"
    },
    {
      "id": "school-032",
      "name": "Prathamik School Silk Milk",
      "address": "",
      "zone": "Zone 8"
    },
    {
      "id": "school-033",
      "name": "Prathamik School Paithan Gate",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-034",
      "name": "Prathamik School Silli Khana",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-035",
      "name": "Prathamik School Samtha Nagar",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-036",
      "name": "Prathamik School Rohidaspura",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-037",
      "name": "Kendriya Prathamik School Baijipura",
      "address": "",
      "zone": "Zone 7"
    },
    {
      "id": "school-038",
      "name": "Prathamik School Kailash Nagar",
      "address": "",
      "zone": "Zone 9"
    },
    {
      "id": "school-039",
      "name": "Prathamik School Rozabagh",
      "address": "",
      "zone": "Zone 4"
    },
    {
      "id": "school-040",
      "name": "Prathamik School Nutan Colony",
      "address": "",
      "zone": "Zone 2"
    },
    {
      "id": "school-041",
      "name": "Kendriya Prathamik School Harsul Gaon",
      "address": "",
      "zone": "Zone 4"
    },
    {
      "id": "school-042",
      "name": "Prathamik School Harsul vasat",
      "address": "",
      "zone": "Zone 4"
    },
    {
      "id": "school-043",
      "name": "Kendriya Prathamik School Banewadi",
      "address": "",
      "zone": "Zone 8"
    },
    {
      "id": "school-044",
      "name": "Prathamik School Vithkhada",
      "address": "",
      "zone": "Zone 8"
    },
    {
      "id": "school-045",
      "name": "Prathamik School Kanchanwadi",
      "address": "",
      "zone": "Zone 8"
    },
    {
      "id": "school-046",
      "name": "Prathamik School Nakshatrawadi",
      "address": "",
      "zone": "Zone 8"
    },
    {
      "id": "school-047",
      "name": "Kendriya Prathamik School N12",
      "address": "",
      "zone": "Zone 4"
    },
    {
      "id": "school-048",
      "name": "Kendriya Prathamik School N7",
      "address": "",
      "zone": "Zone 5"
    },
    {
      "id": "school-049",
      "name": "Prathamik School Vithal Nagar",
      "address": "",
      "zone": "Zone 6"
    },
    {
      "id": "school-050",
      "name": "Prathamik School Harsul Urdu",
      "address": "",
      "zone": "Zone 4"
    }
  ],
  "hoardings": [
    {
      "id": "hoarding-001",
      "name": "Ad World — Mill Corner Wahid yar khan",
      "address": "Mill Corner Wahid yar khan",
      "zone": ""
    },
    {
      "id": "hoarding-002",
      "name": "Adventure & Developers — Apna Bazaar",
      "address": "Apna Bazaar",
      "zone": ""
    },
    {
      "id": "hoarding-003",
      "name": "Adventure & Developers — Apna Bazaar",
      "address": "Apna Bazaar",
      "zone": ""
    },
    {
      "id": "hoarding-004",
      "name": "Adventure & Developers — Apna Bazar",
      "address": "Apna Bazar",
      "zone": ""
    },
    {
      "id": "hoarding-005",
      "name": "Adventure & Developers — Apna Bazar",
      "address": "Apna Bazar",
      "zone": ""
    },
    {
      "id": "hoarding-006",
      "name": "Hoarding at PRINTRAVEL- MAJID",
      "address": "PRINTRAVEL- MAJID",
      "zone": ""
    },
    {
      "id": "hoarding-007",
      "name": "Hoarding at PRINTRAVEL -MAJID",
      "address": "PRINTRAVEL -MAJID",
      "zone": ""
    },
    {
      "id": "hoarding-008",
      "name": "Hoarding at PRINTRAVEL- MAJID",
      "address": "PRINTRAVEL- MAJID",
      "zone": ""
    },
    {
      "id": "hoarding-009",
      "name": "Hoarding at PRINTRAVEL-MAJID",
      "address": "PRINTRAVEL-MAJID",
      "zone": ""
    },
    {
      "id": "hoarding-010",
      "name": "Hoarding at PRINTRAVEL-MAJIDA",
      "address": "PRINTRAVEL-MAJIDA",
      "zone": ""
    },
    {
      "id": "hoarding-011",
      "name": "Hoarding at PRINTRAVEL-MAJIDA",
      "address": "PRINTRAVEL-MAJIDA",
      "zone": ""
    },
    {
      "id": "hoarding-012",
      "name": "Hoarding at SHASHIKANT BOARBANE",
      "address": "SHASHIKANT BOARBANE",
      "zone": ""
    },
    {
      "id": "hoarding-013",
      "name": "Hoarding at MONDHA NAKA-GULAB DARDA",
      "address": "MONDHA NAKA-GULAB DARDA",
      "zone": ""
    },
    {
      "id": "hoarding-014",
      "name": "Hoarding at AKASHWANI -EKNATH HSG",
      "address": "AKASHWANI -EKNATH HSG",
      "zone": ""
    },
    {
      "id": "hoarding-015",
      "name": "Hoarding at KRANTI CHOWK D.D.LOYA FCNG BABA",
      "address": "KRANTI CHOWK D.D.LOYA FCNG BABA",
      "zone": ""
    },
    {
      "id": "hoarding-016",
      "name": "Hoarding at KRANTI CHOWK D.D.LOYA FCNG BABA",
      "address": "KRANTI CHOWK D.D.LOYA FCNG BABA",
      "zone": ""
    },
    {
      "id": "hoarding-017",
      "name": "Hoarding at KRANTI CHOWK D.D.LOYA FCNG CIDCO",
      "address": "KRANTI CHOWK D.D.LOYA FCNG CIDCO",
      "zone": ""
    },
    {
      "id": "hoarding-018",
      "name": "Hoarding at KRANTI CHOWK D.D.LOYA FCNG CIDCO",
      "address": "KRANTI CHOWK D.D.LOYA FCNG CIDCO",
      "zone": ""
    },
    {
      "id": "hoarding-019",
      "name": "Hoarding at CIDCO -AKSHAYDEEP",
      "address": "CIDCO -AKSHAYDEEP",
      "zone": ""
    },
    {
      "id": "hoarding-020",
      "name": "Hoarding at MONDHA NAKA-GULAB DARDA",
      "address": "MONDHA NAKA-GULAB DARDA",
      "zone": ""
    },
    {
      "id": "hoarding-021",
      "name": "Hoarding at Cidco-Akshaydeep",
      "address": "Cidco-Akshaydeep",
      "zone": ""
    },
    {
      "id": "hoarding-022",
      "name": "Hoarding at CIDCO -AKSHAYDEEP",
      "address": "CIDCO -AKSHAYDEEP",
      "zone": ""
    },
    {
      "id": "hoarding-023",
      "name": "Hoarding at RAILWAY STATION,RAFIQ MOTIWALA",
      "address": "RAILWAY STATION,RAFIQ MOTIWALA",
      "zone": ""
    },
    {
      "id": "hoarding-024",
      "name": "Hoarding at Cidco-Akshaydeep",
      "address": "Cidco-Akshaydeep",
      "zone": ""
    },
    {
      "id": "hoarding-025",
      "name": "Hoarding at KRANTI CHOWK-S.DHAMNE FCNG CIDCO",
      "address": "KRANTI CHOWK-S.DHAMNE FCNG CIDCO",
      "zone": ""
    },
    {
      "id": "hoarding-026",
      "name": "Hoarding at KRANTI CHOWK-S.DHAMNE FCNG BABA",
      "address": "KRANTI CHOWK-S.DHAMNE FCNG BABA",
      "zone": ""
    },
    {
      "id": "hoarding-027",
      "name": "Hoarding at Rajesh B.Zawar CTS No-17334 vitago building Osmanpura",
      "address": "Rajesh B.Zawar CTS No-17334 vitago building Osmanpura",
      "zone": ""
    },
    {
      "id": "hoarding-028",
      "name": "Hoarding at Rajesh B.Zawar CTS No-17334 vitago building Osmanpura",
      "address": "Rajesh B.Zawar CTS No-17334 vitago building Osmanpura",
      "zone": ""
    },
    {
      "id": "hoarding-029",
      "name": "Hoarding at PAITHAN GATE ,ALFA LODGE,SAJIDA BEGUM",
      "address": "PAITHAN GATE ,ALFA LODGE,SAJIDA BEGUM",
      "zone": ""
    },
    {
      "id": "hoarding-030",
      "name": "Hoarding at EKNATH HOUSING SOCIETY,AKASHWANI,ARUN NAIK",
      "address": "EKNATH HOUSING SOCIETY,AKASHWANI,ARUN NAIK",
      "zone": ""
    },
    {
      "id": "hoarding-031",
      "name": "Hoarding at R.K.GHANDHI NAIK COLLEGE ,SURAJ PRINTERS",
      "address": "R.K.GHANDHI NAIK COLLEGE ,SURAJ PRINTERS",
      "zone": ""
    },
    {
      "id": "hoarding-032",
      "name": "Dreams Creation Advertising — Kranti Chowk Kabrastan",
      "address": "Kranti Chowk Kabrastan",
      "zone": ""
    },
    {
      "id": "hoarding-033",
      "name": "Dreams Creation Advertising — Sevenhill Flyover,Kuber Avenue 'B' Building",
      "address": "Sevenhill Flyover,Kuber Avenue 'B' Building",
      "zone": ""
    },
    {
      "id": "hoarding-034",
      "name": "Dreams Creation Advertising — Murlidhar Maind,Chikalthana Hanuman Chowk",
      "address": "Murlidhar Maind,Chikalthana Hanuman Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-035",
      "name": "Dreams Creation Advertising — Parichay Complex,Bada Takiya,Moonlite(shifted to harsul t point)",
      "address": "Parichay Complex,Bada Takiya,Moonlite(shifted to harsul t point)",
      "zone": ""
    },
    {
      "id": "hoarding-036",
      "name": "Dreams Creation Advertising — MBC Tower,Printravel Signal",
      "address": "MBC Tower,Printravel Signal",
      "zone": ""
    },
    {
      "id": "hoarding-037",
      "name": "Dreams Creation Advertising — Ashfaque Yaar Khan,Mill Corner",
      "address": "Ashfaque Yaar Khan,Mill Corner",
      "zone": ""
    },
    {
      "id": "hoarding-038",
      "name": "Dreams Creation Advertising — MBC Tower,Printravel Signal",
      "address": "MBC Tower,Printravel Signal",
      "zone": ""
    },
    {
      "id": "hoarding-039",
      "name": "Dreams Creation Advertising — Shahnoor Miya Darga,Beside Darga Gate",
      "address": "Shahnoor Miya Darga,Beside Darga Gate",
      "zone": ""
    },
    {
      "id": "hoarding-040",
      "name": "Dreams Creation Advertising — Shahnoor Miya Darga,Beside Darga Gate",
      "address": "Shahnoor Miya Darga,Beside Darga Gate",
      "zone": ""
    },
    {
      "id": "hoarding-041",
      "name": "Dreams Creation Advertising — Apna Bazar Building,Big Bazar,Akashwani",
      "address": "Apna Bazar Building,Big Bazar,Akashwani",
      "zone": ""
    },
    {
      "id": "hoarding-042",
      "name": "Dreams Creation Advertising — Apna Bazar Building,Big Bazar,Akashwani",
      "address": "Apna Bazar Building,Big Bazar,Akashwani",
      "zone": ""
    },
    {
      "id": "hoarding-043",
      "name": "Dreams Creation Advertising — Muzawar Moulana Nooruddin Railway Station",
      "address": "Muzawar Moulana Nooruddin Railway Station",
      "zone": ""
    },
    {
      "id": "hoarding-044",
      "name": "Dreams Creation Advertising — Himroo Showroom,Hudco Corner",
      "address": "Himroo Showroom,Hudco Corner",
      "zone": ""
    },
    {
      "id": "hoarding-045",
      "name": "Dreams Creation Advertising — Jayantilala Patel,Kranti Chowk",
      "address": "Jayantilala Patel,Kranti Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-046",
      "name": "Dreams Creation Advertising — Jayantilala Patel,Kranti Chowk",
      "address": "Jayantilala Patel,Kranti Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-047",
      "name": "Dreams Creation Advertising — Santosh Bhagwanrao Naikwade,SB Colony,Jalna Road",
      "address": "Santosh Bhagwanrao Naikwade,SB Colony,Jalna Road",
      "zone": ""
    },
    {
      "id": "hoarding-048",
      "name": "Dreams Creation Advertising — Suleman Khan,Kiradpura Prozon Mall,Town Center",
      "address": "Suleman Khan,Kiradpura Prozon Mall,Town Center",
      "zone": ""
    },
    {
      "id": "hoarding-049",
      "name": "Dreams Creation Advertising — Chandrakant Sahebrao Rana,Jalna Road,Rana Nagar",
      "address": "Chandrakant Sahebrao Rana,Jalna Road,Rana Nagar",
      "zone": ""
    },
    {
      "id": "hoarding-050",
      "name": "Dreams Creation Advertising — Praful Jariwala,Evergreen Electrical,Osmanpura",
      "address": "Praful Jariwala,Evergreen Electrical,Osmanpura",
      "zone": ""
    },
    {
      "id": "hoarding-051",
      "name": "Dreams Creation Advertising — RC Church Chawani",
      "address": "RC Church Chawani",
      "zone": ""
    },
    {
      "id": "hoarding-052",
      "name": "Dreams Creation Advertising — Meghdhoot Hotel,Nirala Bazaar,Kohinoor Plaza",
      "address": "Meghdhoot Hotel,Nirala Bazaar,Kohinoor Plaza",
      "zone": ""
    },
    {
      "id": "hoarding-053",
      "name": "Dreams Creation Advertising — Shamji Patel Kranti Chowk",
      "address": "Shamji Patel Kranti Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-054",
      "name": "Dreams Creation Advertising — Shamji Patel Kranti Chowk",
      "address": "Shamji Patel Kranti Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-055",
      "name": "Dreams Creation Advertising — Jawaharlal Gandhi,Adalat Road",
      "address": "Jawaharlal Gandhi,Adalat Road",
      "zone": ""
    },
    {
      "id": "hoarding-056",
      "name": "Dreams Creation Advertising — Chetan Ashok Sainani,Jafar Gate",
      "address": "Chetan Ashok Sainani,Jafar Gate",
      "zone": ""
    },
    {
      "id": "hoarding-057",
      "name": "Dreams Creation Advertising — Beed by pass shatranj complex",
      "address": "Beed by pass shatranj complex",
      "zone": ""
    },
    {
      "id": "hoarding-058",
      "name": "Dreams Creation Advertising — Walbai B Patel,Krushna Sadan Kranti Chowk",
      "address": "Walbai B Patel,Krushna Sadan Kranti Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-059",
      "name": "Dreams Creation Advertising — Walbai B Patel,Krushna Sadan Kranti Chowk",
      "address": "Walbai B Patel,Krushna Sadan Kranti Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-060",
      "name": "Dreams Creation Advertising — Shobha Vijaysing Rajput",
      "address": "Shobha Vijaysing Rajput",
      "zone": ""
    },
    {
      "id": "hoarding-061",
      "name": "Dreams Creation Advertising — Shobha Vijaysing Rajput",
      "address": "Shobha Vijaysing Rajput",
      "zone": ""
    },
    {
      "id": "hoarding-062",
      "name": "Dreams Creation Advertising — Nabila Juber Motiwala",
      "address": "Nabila Juber Motiwala",
      "zone": ""
    },
    {
      "id": "hoarding-063",
      "name": "Dreams Creation Advertising — Smt. Chatwal Amarpreet Signal,Jalna Road",
      "address": "Smt. Chatwal Amarpreet Signal,Jalna Road",
      "zone": ""
    },
    {
      "id": "hoarding-064",
      "name": "Dreams Creation Advertising — Smt. Chatwal Amarpreet Signal,Jalna Road",
      "address": "Smt. Chatwal Amarpreet Signal,Jalna Road",
      "zone": ""
    },
    {
      "id": "hoarding-065",
      "name": "Dreams Creation Advertising — Nehru Nagar,Katkat Gate,Nasim Begum Yahiya Shaikh",
      "address": "Nehru Nagar,Katkat Gate,Nasim Begum Yahiya Shaikh",
      "zone": ""
    },
    {
      "id": "hoarding-066",
      "name": "Dreams Creation Advertising — Hotel Great Panjab,Railway Station,Bharti Gopal Rathod",
      "address": "Hotel Great Panjab,Railway Station,Bharti Gopal Rathod",
      "zone": ""
    },
    {
      "id": "hoarding-067",
      "name": "Dreams Creation Advertising — Hotel Great Panjab,Railway Station,Bharti Gopal Rathod",
      "address": "Hotel Great Panjab,Railway Station,Bharti Gopal Rathod",
      "zone": ""
    },
    {
      "id": "hoarding-068",
      "name": "Dreams Creation Advertising — Chikalthana,Bhau Saheb Wagh",
      "address": "Chikalthana,Bhau Saheb Wagh",
      "zone": ""
    },
    {
      "id": "hoarding-069",
      "name": "Dreams Creation Advertising — Chikalthana,Gut No.421,Shri. Balu Epichand Navpute",
      "address": "Chikalthana,Gut No.421,Shri. Balu Epichand Navpute",
      "zone": ""
    },
    {
      "id": "hoarding-070",
      "name": "Dreams Creation Advertising — ST Colony,N-2,Cidco,Balkrishna Patil",
      "address": "ST Colony,N-2,Cidco,Balkrishna Patil",
      "zone": ""
    },
    {
      "id": "hoarding-071",
      "name": "Dreams Creation Advertising — Railway Station Flyover",
      "address": "Railway Station Flyover",
      "zone": ""
    },
    {
      "id": "hoarding-072",
      "name": "Dreams Creation Advertising — Waseem Yar Khan,Mill Corner Signal",
      "address": "Waseem Yar Khan,Mill Corner Signal",
      "zone": ""
    },
    {
      "id": "hoarding-073",
      "name": "Dreams Creation Advertising — Railway Sttaion,Silk Showroom,Md. Hafiz Md. Nazir",
      "address": "Railway Sttaion,Silk Showroom,Md. Hafiz Md. Nazir",
      "zone": ""
    },
    {
      "id": "hoarding-074",
      "name": "Dreams Creation Advertising — Railway Sttaion,Silk Showroom,Md. Hafiz Md. Nazir",
      "address": "Railway Sttaion,Silk Showroom,Md. Hafiz Md. Nazir",
      "zone": ""
    },
    {
      "id": "hoarding-075",
      "name": "Dreams Creation Advertising — Roshan Gate, Sima Dairy,Khamar Sultana Bashir Ahemad",
      "address": "Roshan Gate, Sima Dairy,Khamar Sultana Bashir Ahemad",
      "zone": ""
    },
    {
      "id": "hoarding-076",
      "name": "Dreams Creation Advertising — Jubli Park,Feroz Khan, F K Tower",
      "address": "Jubli Park,Feroz Khan, F K Tower",
      "zone": ""
    },
    {
      "id": "hoarding-077",
      "name": "Dreams Creation Advertising — Shivaji Nagar,Dilip Kumar Varma",
      "address": "Shivaji Nagar,Dilip Kumar Varma",
      "zone": ""
    },
    {
      "id": "hoarding-078",
      "name": "Dreams Creation Advertising — Chistiya Chowk,Manoj Ahirewal",
      "address": "Chistiya Chowk,Manoj Ahirewal",
      "zone": ""
    },
    {
      "id": "hoarding-079",
      "name": "Dreams Creation Advertising — Chistiya Chowk,Manoj Ahirewal",
      "address": "Chistiya Chowk,Manoj Ahirewal",
      "zone": ""
    },
    {
      "id": "hoarding-080",
      "name": "Dreams Creation Advertising — Paithan Gate,Aayesha Begum Syed Abbas",
      "address": "Paithan Gate,Aayesha Begum Syed Abbas",
      "zone": ""
    },
    {
      "id": "hoarding-081",
      "name": "Dreams Creation Advertising — Padegaon,Wani Complex,Gut No. 6/2",
      "address": "Padegaon,Wani Complex,Gut No. 6/2",
      "zone": ""
    },
    {
      "id": "hoarding-082",
      "name": "Dreams Creation Advertising — Padegaon,Wani Complex,Gut No. 6/2 .",
      "address": "Padegaon,Wani Complex,Gut No. 6/2 .",
      "zone": ""
    },
    {
      "id": "hoarding-083",
      "name": "Dreams Creation Advertising — Padegaon,Hanuman Peharkar,Gut No. 62",
      "address": "Padegaon,Hanuman Peharkar,Gut No. 62",
      "zone": ""
    },
    {
      "id": "hoarding-084",
      "name": "Dreams Creation Advertising — Maya Nagar,N-2,Shangrila Hotel",
      "address": "Maya Nagar,N-2,Shangrila Hotel",
      "zone": ""
    },
    {
      "id": "hoarding-085",
      "name": "Dreams Creation Advertising — Maya Nagar,N-2,Shangrila Hotel",
      "address": "Maya Nagar,N-2,Shangrila Hotel",
      "zone": ""
    },
    {
      "id": "hoarding-086",
      "name": "Dreams Creation Advertising — Mohammad Bin Hasan Bin Mazi,Katkat gate,Nehru nagar",
      "address": "Mohammad Bin Hasan Bin Mazi,Katkat gate,Nehru nagar",
      "zone": ""
    },
    {
      "id": "hoarding-087",
      "name": "Dreams Creation Advertising — Town Hall,VIP Road,Jakiya Begum Madni",
      "address": "Town Hall,VIP Road,Jakiya Begum Madni",
      "zone": ""
    },
    {
      "id": "hoarding-088",
      "name": "Dreams Creation Advertising — Town Hall,VIP Road,Jakiya Begum Madni",
      "address": "Town Hall,VIP Road,Jakiya Begum Madni",
      "zone": ""
    },
    {
      "id": "hoarding-089",
      "name": "Dreams Creation Advertising — Beed By Pass,Rahim Complex,G.No.131,Devlali Chowk Imtiyaz Khan",
      "address": "Beed By Pass,Rahim Complex,G.No.131,Devlali Chowk Imtiyaz Khan",
      "zone": ""
    },
    {
      "id": "hoarding-090",
      "name": "Dreams Creation Advertising — Aurangabad Silkmil Compound,Paithan Road,Plot No. 18811.6,Qureshi Mohd.Furkhan",
      "address": "Aurangabad Silkmil Compound,Paithan Road,Plot No. 18811.6,Qureshi Mohd.Furkhan",
      "zone": ""
    },
    {
      "id": "hoarding-091",
      "name": "Dreams Creation Advertising — Roshan Gate,Abbas Function Hall,sri.Syed Ilyas Syed Abbas",
      "address": "Roshan Gate,Abbas Function Hall,sri.Syed Ilyas Syed Abbas",
      "zone": ""
    },
    {
      "id": "hoarding-092",
      "name": "Dreams Creation Advertising — Chandrakant Baburao Kadam, Gut No 393 Near Shiwneri Lawns Chikalthana",
      "address": "Chandrakant Baburao Kadam, Gut No 393 Near Shiwneri Lawns Chikalthana",
      "zone": ""
    },
    {
      "id": "hoarding-093",
      "name": "Dreams Creation Advertising — Gut No 614 Zalta Phata Beed Naka Premsingh Gabroo Chawan",
      "address": "Gut No 614 Zalta Phata Beed Naka Premsingh Gabroo Chawan",
      "zone": ""
    },
    {
      "id": "hoarding-094",
      "name": "Dreams Creation Advertising — Sahebrao Dandge Sambhaji Maharaj,Sq.TV Centre",
      "address": "Sahebrao Dandge Sambhaji Maharaj,Sq.TV Centre",
      "zone": ""
    },
    {
      "id": "hoarding-095",
      "name": "Dreams Creation Advertising — Beed By Pass,Shamir Khan Complex ,Nasir Khan Shamir Khan",
      "address": "Beed By Pass,Shamir Khan Complex ,Nasir Khan Shamir Khan",
      "zone": ""
    },
    {
      "id": "hoarding-096",
      "name": "Dreams Creation Advertising — Beed By Pass,Shamir Khan Complex ,Nasir Khan Shamir Khan",
      "address": "Beed By Pass,Shamir Khan Complex ,Nasir Khan Shamir Khan",
      "zone": ""
    },
    {
      "id": "hoarding-097",
      "name": "Dreams Creation Advertising — At Narayana School Campus,Mr Munot",
      "address": "At Narayana School Campus,Mr Munot",
      "zone": ""
    },
    {
      "id": "hoarding-098",
      "name": "Future Media Advertising — Zendumal Nathani,Sindhi Colony",
      "address": "Zendumal Nathani,Sindhi Colony",
      "zone": ""
    },
    {
      "id": "hoarding-099",
      "name": "Future Media Advertising — A.N. Kalda,Sindhi Colony",
      "address": "A.N. Kalda,Sindhi Colony",
      "zone": ""
    },
    {
      "id": "hoarding-100",
      "name": "Future Media Advertising — Kultaran Kaur,Surendra Singh Oberaoy,Amarpreet Signal",
      "address": "Kultaran Kaur,Surendra Singh Oberaoy,Amarpreet Signal",
      "zone": ""
    },
    {
      "id": "hoarding-101",
      "name": "Future Media Advertising — Kultaran Kaur,Surendra Singh Oberaoy,Amarpreet Signal",
      "address": "Kultaran Kaur,Surendra Singh Oberaoy,Amarpreet Signal",
      "zone": ""
    },
    {
      "id": "hoarding-102",
      "name": "Future Media Advertising — Mehboob Yar Khan,Mill Corner 30x20",
      "address": "Mehboob Yar Khan,Mill Corner 30x20",
      "zone": ""
    },
    {
      "id": "hoarding-103",
      "name": "Future Media Advertising — Paithan Gate",
      "address": "Paithan Gate",
      "zone": ""
    },
    {
      "id": "hoarding-104",
      "name": "Future Media Advertising — Sillekhana Bagwan Kabrasthan S.NO70",
      "address": "Sillekhana Bagwan Kabrasthan S.NO70",
      "zone": ""
    },
    {
      "id": "hoarding-105",
      "name": "Future Media Advertising — Sillekhana Bagwan Kabrasthan S.NO70",
      "address": "Sillekhana Bagwan Kabrasthan S.NO70",
      "zone": ""
    },
    {
      "id": "hoarding-106",
      "name": "Future Media Advertising — Sillekhana Bagwan Kabrastan,S No70",
      "address": "Sillekhana Bagwan Kabrastan,S No70",
      "zone": ""
    },
    {
      "id": "hoarding-107",
      "name": "Future Media Advertising — Sillekhana Bagwan Kabrastan,S No70",
      "address": "Sillekhana Bagwan Kabrastan,S No70",
      "zone": ""
    },
    {
      "id": "hoarding-108",
      "name": "Setu Media — Paithan Road Besides Best Price towards Paithan Upper",
      "address": "Paithan Road Besides Best Price towards Paithan Upper",
      "zone": ""
    },
    {
      "id": "hoarding-109",
      "name": "Setu Media — Chetak Chowk FTF Ulka Nagri",
      "address": "Chetak Chowk FTF Ulka Nagri",
      "zone": ""
    },
    {
      "id": "hoarding-110",
      "name": "Setu Media — Chetak Chowk FTF Roplekar Hospital",
      "address": "Chetak Chowk FTF Roplekar Hospital",
      "zone": ""
    },
    {
      "id": "hoarding-111",
      "name": "Setu Media — Jalna Road, Kushalnagar towards Amarpreet Signal",
      "address": "Jalna Road, Kushalnagar towards Amarpreet Signal",
      "zone": ""
    },
    {
      "id": "hoarding-112",
      "name": "Setu Media — Mondha Signal, City Pride to KC",
      "address": "Mondha Signal, City Pride to KC",
      "zone": ""
    },
    {
      "id": "hoarding-113",
      "name": "Setu Media — Railway Station Road Near Goldie towards railway station",
      "address": "Railway Station Road Near Goldie towards railway station",
      "zone": ""
    },
    {
      "id": "hoarding-114",
      "name": "Setu Media — Airport Exit",
      "address": "Airport Exit",
      "zone": ""
    },
    {
      "id": "hoarding-115",
      "name": "Setu Media — Beed Bypass Chavda Complex towards Deolai Chowk",
      "address": "Beed Bypass Chavda Complex towards Deolai Chowk",
      "zone": ""
    },
    {
      "id": "hoarding-116",
      "name": "Setu Media — Mondha Signal, City Pride to Cidco",
      "address": "Mondha Signal, City Pride to Cidco",
      "zone": ""
    },
    {
      "id": "hoarding-117",
      "name": "Setu Media — Prozone Mall Exit",
      "address": "Prozone Mall Exit",
      "zone": ""
    },
    {
      "id": "hoarding-118",
      "name": "Setu Media — Beed Bypass Chavda Complex towards Jabinda Ground",
      "address": "Beed Bypass Chavda Complex towards Jabinda Ground",
      "zone": ""
    },
    {
      "id": "hoarding-119",
      "name": "Setu Media — Bharat Bazaar towards Prozone mall [upper]",
      "address": "Bharat Bazaar towards Prozone mall [upper]",
      "zone": ""
    },
    {
      "id": "hoarding-120",
      "name": "Setu Media — Near Nirala Bazar, Sawarkar Chowk towards CBS",
      "address": "Near Nirala Bazar, Sawarkar Chowk towards CBS",
      "zone": ""
    },
    {
      "id": "hoarding-121",
      "name": "Setu Media — Gajanan Mandir Circle towards Garkheda",
      "address": "Gajanan Mandir Circle towards Garkheda",
      "zone": ""
    },
    {
      "id": "hoarding-122",
      "name": "Setu Media — Gajanan Mandir Circle towards seven hill",
      "address": "Gajanan Mandir Circle towards seven hill",
      "zone": ""
    },
    {
      "id": "hoarding-123",
      "name": "Abhishek Advertising — Near Kranti Chowk, Chunilal Petrol Pump to Baba",
      "address": "Near Kranti Chowk, Chunilal Petrol Pump to Baba",
      "zone": ""
    },
    {
      "id": "hoarding-124",
      "name": "Abhishek Advertising — Chikalthana Opp. Govt Hospital Towards Shendra [RHS]",
      "address": "Chikalthana Opp. Govt Hospital Towards Shendra [RHS]",
      "zone": ""
    },
    {
      "id": "hoarding-125",
      "name": "Abhishek Advertising — Paithan Gate above CCN FTF Nutan Colony",
      "address": "Paithan Gate above CCN FTF Nutan Colony",
      "zone": ""
    },
    {
      "id": "hoarding-126",
      "name": "Abhishek Advertising — Chikalthana Opp. Govt Hospital Towards CIDCO [LHS]",
      "address": "Chikalthana Opp. Govt Hospital Towards CIDCO [LHS]",
      "zone": ""
    },
    {
      "id": "hoarding-127",
      "name": "Abhishek Advertising — Chikalthana Market Towards City",
      "address": "Chikalthana Market Towards City",
      "zone": ""
    },
    {
      "id": "hoarding-128",
      "name": "Abhishek Advertising — Nutan Colony Signal FTF Paithan Gate",
      "address": "Nutan Colony Signal FTF Paithan Gate",
      "zone": ""
    },
    {
      "id": "hoarding-129",
      "name": "Abhishek Advertising — Nutan Colony Signal FTF Samarth Nagar",
      "address": "Nutan Colony Signal FTF Samarth Nagar",
      "zone": ""
    },
    {
      "id": "hoarding-130",
      "name": "Abhishek Advertising — HUDCO Corner FTF CIDCO",
      "address": "HUDCO Corner FTF CIDCO",
      "zone": ""
    },
    {
      "id": "hoarding-131",
      "name": "Abhishek Advertising — Aurangpura FTF Khadkeshwar",
      "address": "Aurangpura FTF Khadkeshwar",
      "zone": ""
    },
    {
      "id": "hoarding-132",
      "name": "Abhishek Advertising — Aurangpura FTF Gulmandi",
      "address": "Aurangpura FTF Gulmandi",
      "zone": ""
    },
    {
      "id": "hoarding-133",
      "name": "Abhishek Advertising — Kranti Chowk flyover towards Baba",
      "address": "Kranti Chowk flyover towards Baba",
      "zone": ""
    },
    {
      "id": "hoarding-134",
      "name": "Abhishek Advertising — Kranti Chowk flyover towards Cidco",
      "address": "Kranti Chowk flyover towards Cidco",
      "zone": ""
    },
    {
      "id": "hoarding-135",
      "name": "Abhishek Advertising — Kranti Chowk Circle FTF Osmanpura",
      "address": "Kranti Chowk Circle FTF Osmanpura",
      "zone": ""
    },
    {
      "id": "hoarding-136",
      "name": "Abhishek Advertising — Kranti Chowk Circle FTF Paithan gate",
      "address": "Kranti Chowk Circle FTF Paithan gate",
      "zone": ""
    },
    {
      "id": "hoarding-137",
      "name": "Abhishek Advertising — Aurangpura FTF Nirala Bazaar",
      "address": "Aurangpura FTF Nirala Bazaar",
      "zone": ""
    },
    {
      "id": "hoarding-138",
      "name": "Abhishek Advertising — Opp. BSNL office near abhinay talkies towards Nutan Colony",
      "address": "Opp. BSNL office near abhinay talkies towards Nutan Colony",
      "zone": ""
    },
    {
      "id": "hoarding-139",
      "name": "Abhishek Advertising — Near garkheda police station towards Reliance Mall",
      "address": "Near garkheda police station towards Reliance Mall",
      "zone": ""
    },
    {
      "id": "hoarding-140",
      "name": "Hoarding at 2 Hoardings at Jeevan Prakash Adalat Road, LIC OF INDIA, AurangabadÂ  Divisional Office Building",
      "address": "2 Hoardings at Jeevan Prakash Adalat Road, LIC OF INDIA, AurangabadÂ  Divisional Office Building",
      "zone": ""
    },
    {
      "id": "hoarding-141",
      "name": "Hoarding at 1 Hoarding at Jeevan Suman , LIC OF INDIA, 98D Branch Building , CIDCO, Aurangabad.",
      "address": "1 Hoarding at Jeevan Suman , LIC OF INDIA, 98D Branch Building , CIDCO, Aurangabad.",
      "zone": ""
    },
    {
      "id": "hoarding-142",
      "name": "S.N.Patil — Opp. MGM College Indrayanee Hostel",
      "address": "Opp. MGM College Indrayanee Hostel",
      "zone": ""
    },
    {
      "id": "hoarding-143",
      "name": "Ultra Outdoors — Jalan Nagar, Tirupati Supream Enclave",
      "address": "Jalan Nagar, Tirupati Supream Enclave",
      "zone": ""
    },
    {
      "id": "hoarding-144",
      "name": "Ultra Outdoors — Ranjit Nagar, Chetna Nagar Plot no. 1",
      "address": "Ranjit Nagar, Chetna Nagar Plot no. 1",
      "zone": ""
    },
    {
      "id": "hoarding-145",
      "name": "Ultra Outdoors — D S Bindra, Satdhan Complex, Rokadiya Hanuman Colony",
      "address": "D S Bindra, Satdhan Complex, Rokadiya Hanuman Colony",
      "zone": ""
    },
    {
      "id": "hoarding-146",
      "name": "Ultra Outdoors — ManmohanSingh Oberoy, Karampura Building, Osmanpura",
      "address": "ManmohanSingh Oberoy, Karampura Building, Osmanpura",
      "zone": ""
    },
    {
      "id": "hoarding-147",
      "name": "Ultra Outdoors — Manmohan Singh Oberoy, Karamkrupa Building, Osmanpura",
      "address": "Manmohan Singh Oberoy, Karamkrupa Building, Osmanpura",
      "zone": ""
    },
    {
      "id": "hoarding-148",
      "name": "Ultra Outdoors — Shop No.32, Sindhi Colony, Ishwar Kour Chabda",
      "address": "Shop No.32, Sindhi Colony, Ishwar Kour Chabda",
      "zone": ""
    },
    {
      "id": "hoarding-149",
      "name": "Ultra Outdoors — Asok Patil, Jyotirmay Complex,  Cidco",
      "address": "Asok Patil, Jyotirmay Complex,  Cidco",
      "zone": ""
    },
    {
      "id": "hoarding-150",
      "name": "Ultra Outdoors — Asok Patil, Jyotirmay Complex,  Cidco",
      "address": "Asok Patil, Jyotirmay Complex,  Cidco",
      "zone": ""
    },
    {
      "id": "hoarding-151",
      "name": "Ultra Outdoors — Jalan Nagar, Tirupati Supream Enclave",
      "address": "Jalan Nagar, Tirupati Supream Enclave",
      "zone": ""
    },
    {
      "id": "hoarding-152",
      "name": "Ultra Outdoors — N-1, Cidco",
      "address": "N-1, Cidco",
      "zone": ""
    },
    {
      "id": "hoarding-153",
      "name": "Ultra Outdoors — N-1, Cidco",
      "address": "N-1, Cidco",
      "zone": ""
    },
    {
      "id": "hoarding-154",
      "name": "Ultra Outdoors — Bhadkal Gate, Town Hall, Sd.Hamid Ali Mosin Ali",
      "address": "Bhadkal Gate, Town Hall, Sd.Hamid Ali Mosin Ali",
      "zone": ""
    },
    {
      "id": "hoarding-155",
      "name": "Ultra Outdoors — Mondha Naka, Guru Ramdas Complex, Hamindar Sing Makhija",
      "address": "Mondha Naka, Guru Ramdas Complex, Hamindar Sing Makhija",
      "zone": ""
    },
    {
      "id": "hoarding-156",
      "name": "Ultra Outdoors — Railway Station, Hotel Tanishq, Laximan Haribhau Raut",
      "address": "Railway Station, Hotel Tanishq, Laximan Haribhau Raut",
      "zone": ""
    },
    {
      "id": "hoarding-157",
      "name": "Ultra Outdoors — Railway Station, Hotel Tanishq, Laximan Haribhau Raut",
      "address": "Railway Station, Hotel Tanishq, Laximan Haribhau Raut",
      "zone": ""
    },
    {
      "id": "hoarding-158",
      "name": "Ultra Outdoors — Railway Station, Hotel Tanishq, Laximan Haribhau Raut (B2B)",
      "address": "Railway Station, Hotel Tanishq, Laximan Haribhau Raut (B2B)",
      "zone": ""
    },
    {
      "id": "hoarding-159",
      "name": "Ultra Outdoors — Satdham Complex, D.S.Bindra",
      "address": "Satdham Complex, D.S.Bindra",
      "zone": ""
    },
    {
      "id": "hoarding-160",
      "name": "Ultra Outdoors — Jawahar Colony, Sahara Hardware,Shfik Hussin Pathan",
      "address": "Jawahar Colony, Sahara Hardware,Shfik Hussin Pathan",
      "zone": ""
    },
    {
      "id": "hoarding-161",
      "name": "Ultra Outdoors — Satdhan Complex, D.S.Bindra",
      "address": "Satdhan Complex, D.S.Bindra",
      "zone": ""
    },
    {
      "id": "hoarding-162",
      "name": "Ultra Outdoors — Near Siddharth Garden, Hotel Kalalaxmi, Farukh Kamal Ghori",
      "address": "Near Siddharth Garden, Hotel Kalalaxmi, Farukh Kamal Ghori",
      "zone": ""
    },
    {
      "id": "hoarding-163",
      "name": "Ultra Outdoors — N-2 Cidco, Mukund Housing Society, Arun Takalkar",
      "address": "N-2 Cidco, Mukund Housing Society, Arun Takalkar",
      "zone": ""
    },
    {
      "id": "hoarding-164",
      "name": "Ultra Outdoors — N-2 Cidco, Mukund Housing Society, Arun Takalkar",
      "address": "N-2 Cidco, Mukund Housing Society, Arun Takalkar",
      "zone": ""
    },
    {
      "id": "hoarding-165",
      "name": "Ultra Outdoors — Rajmata Nivas, Dhangar Galli,Chikalthana",
      "address": "Rajmata Nivas, Dhangar Galli,Chikalthana",
      "zone": ""
    },
    {
      "id": "hoarding-166",
      "name": "Ultra Outdoors — Rajmata Nivas, Dhangar Galli,Chikalthana",
      "address": "Rajmata Nivas, Dhangar Galli,Chikalthana",
      "zone": ""
    },
    {
      "id": "hoarding-167",
      "name": "Ultra Outdoors — Kohinoor Building, Silk Mill Colony, Beed By Pass Road",
      "address": "Kohinoor Building, Silk Mill Colony, Beed By Pass Road",
      "zone": ""
    },
    {
      "id": "hoarding-168",
      "name": "Universal Sunshine — Geeta V Nathani, Sindhi Colony",
      "address": "Geeta V Nathani, Sindhi Colony",
      "zone": ""
    },
    {
      "id": "hoarding-169",
      "name": "Universal Sunshine — Geeta V Nathani, Sindhi Colony",
      "address": "Geeta V Nathani, Sindhi Colony",
      "zone": ""
    },
    {
      "id": "hoarding-170",
      "name": "Universal Sunshine — Jogenrasingh Chabda,Shop No. 32, Sindhi Colony",
      "address": "Jogenrasingh Chabda,Shop No. 32, Sindhi Colony",
      "zone": ""
    }
  ]
};
