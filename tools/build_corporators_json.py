# -*- coding: utf-8 -*-
"""One-off builder for public/data/corporators-by-prabhag.json from Election-2026 PDF extract."""
import json
from pathlib import Path

def c(seat, name_en, name_mr, phones, address_en, address_mr):
    return {
        "seat": seat,
        "nameEn": name_en,
        "nameMr": name_mr,
        "phones": phones if isinstance(phones, list) else [phones],
        "addressEn": address_en,
        "addressMr": address_mr,
    }

BY_PRABHAG = {
    "01": [
        c("A", "Ashok Rangnath Hiwrale", "श्री.अशोक रंगनाथ हिवराळे", ["7972429505", "9511111035"], "Row-house A-2, Saravaibhav, Jatwada Road, Harsul", "रो-हाऊस A-2, सारावैभव, जटवाडा रोड, हसुर्ल"),
        c("B", "Vijayashri Ashish Jadhav", "श्रीमती विजयश्री आशिष जाधव", ["9607495451"], "Plot No.14, Mahatma Jyotiba Phule Housing Society, Radhaswami Colony, Harsul", "प्लॉट नं.14, महात्मा ज्योतीबा फुले हौ.सो., राधास्वामी कॉलनी, हसुर्ल"),
        c("C", "Zeenat Yunus Patel", "श्रीमती जिनत युनूस पटेल", ["9326203345"], "Plot No.608, Yasin Chowk, Harsul", "प्लॉट नं.608, यासिन चौक, हसुर्ल"),
        c("D", "Pathan Mazhar Pathan Ayyub", "श्री.पठाण मजहर पठाण अय्युब", ["7888024444"], "House No.8-30-348, Mulla Galli, Harsul", "घर क्र.8-30-348, मुल्ला गल्ली, हसुर्ल"),
    ],
    "02": [
        c("A", "Pushpa Uttamrao Rojatkar", "श्रीमती पुष्पा उत्तमराव रोजतकर", ["9764560999"], "F-17/12, Ul-11, Navjeevan Colony, HUDCO", "एफ-17/12, उल-11, नवजीवन कॉलनी, हडको"),
        c("B", "Nagare Kishore Baburao", "श्री.नागरे किशोर बाबुराव", ["9422702601"], "N-11, C.5/11/2, Dwarkanagar, HUDCO", "एन-11, सी.5/11/2, द्वारकानगर, हडको"),
        c("C", "Suvarnalata Ulhas Patil (Salve)", "श्रीमती सुवर्णलता उल्हास पाटील (साळवे)", ["9421663794"], "N-11, H-17/8, Navnathnagar, HUDCO", "एन-11, एच-17/8, नवनाथनगर, हडको"),
        c("D", "Rajgaurav Haridas Wankhede", "श्री.राजगौरव हरिदास वानखेडे", ["9423777885"], "Ashirwad Niwas, Wankhedenagar, N-13, HUDCO", "आशिर्वाद निवास, वानखेडेनगर, एन-13, हडको"),
    ],
    "03": [
        c("A", "Amit Sudhakar Bhuingal", "श्री.अमित सुधाकर भुईगळ", ["9890054294"], "Killeark, Kala Darwaza, VIP Road", "किल्लेअर्क, काळा दरवाजा, व्ही.आय.पी.रोड"),
        c("B", "Jarina Javed Qureshi", "श्रीमती जरीना जावेद कुरेशी", ["7721923993"], "Block No.06, ST Colony, Fazalpura, near Collector Office", "ब्लॉक नं.06, एसटी कॉलनी, फाजलपुरा, जिल्हाधिकारी कार्यालया जवळ"),
        c("C", "Karuna Meghanand Jadhav", "श्रीमती करुणा मेघानंद जाधव", ["8805315753"], "Shahir Meghanand Jadhav, Bhimnagar, Bhawsingpura, Galli-2", "शाहीर मेघानंद जाधव, भीमनगर, भावसिंगपुरा, गल्ली-2"),
        c("D", "Afsar Khan Yasin Khan", "श्री.अफसर खान यासिन खान", ["9823008644"], "House No.1-7-88, Maqbara Road, Begumpura", "घर क्र.1-7-88, मकबरा रोड, बेगमपुरा"),
    ],
    "04": [
        c("A", "Dabhade Premlata Milind", "श्रीमती दाभाडे प्रेमलता मिलींद", ["9764997207"], "Jaaniv, Plot No.2, Bhujbal Nagar, New Nandanvan Colony, Cantonment", "'जाणीव', प्लॉट नं.2, भुजबळ नगर, न्यु नंदनवन कॉलनी, छावणी"),
        c("B", "A. Rashid Khan (Mamu) Hamid Khan", "श्री.अ.रशिद खान (मामू) हमिद खान", ["9422201786"], "Block No.7, Rashid Mamu Colony, Garampani, Kotwalpura", "ब्लॉक नं.7, रशिद मामू कॉलनी, गरमपाणी, कोतवालपुरा"),
        c("C", "Vani Savitribai Hiralal", "श्रीमती वाणी सावित्रीबाई हिरालाल", ["9049087777"], "House No.11-2-95, near Hanuman Mandir, Sillekhana Road, Padegaon", "घर नं.11-2-95, हनुमान मंदिराजवळ, सिलेखाना रोड, पडेगाव"),
        c("D", "Ganesh Kautikrao Lokhande", "श्री.गणेश कौतिकराव लोखंडे", ["9890939945"], "Plot No.9, Raje Shivray Colony, Bhawsingpura", "प्लॉट नं.9, राजे शिवराय कॉलनी, भावसिंगपुरा"),
    ],
    "05": [
        c("A", "Salve Bhagyashri Sanjay", "श्रीमती साळवे भाग्यश्री संजय", ["9764625555"], "House No.1-10-76, near Chhoti Masjid, Jaysingpura", "घर नं.1-10-76, छोटी मशिद जवळ, जयसिंगपुरा"),
        c("B", "Abdul Samir Sajid", "श्री.अब्दुल समीर साजीद", ["9823941247"], "House No.1-22-99, Rauf Palace, opposite Sajed Tower, Chelipura", "घर क्र.1-22-99, रऊफ पॅलेस, साजेद टॉवर समोर, चेलीपुरा"),
        c("C", "Farzana Shaikh Ghulam Rasul", "श्रीमती फरजाना शेख गुलाम रसुल", ["9860872244"], "House No.1-13-57, Buddi Lane", "घर क्र.1-13-57, बुद्धीलेन"),
        c("D", "Ali Mir Wajid", "श्री.अली मीर वाजीद", ["9145181181"], "4-20-6/P, near Rauf Palace", "4-20-6/P, रऊफ पॅलेस जवळ"),
    ],
    "06": [
        c("A", "Mohammad Wasim Aleem Ahmed", "श्री.मोहम्मद वसीम अलीम अहमद", ["9823888853"], "Lotakaranja area", "लोटाकारंजा परिसर"),
        c("B", "Shaikh Nargis Salim", "श्रीमती शेख नरगीस सलिम", ["8999541137"], "Shahabazar area", "शहाबाजार परिसर"),
        c("C", "Shaikh Wajia Begum", "श्रीमती शेख वजिया बेगम", ["9823889111"], "Fazalpura area", "फाजलपुरा परिसर"),
        c("D", "Meraj Khan Jalil Khan", "श्री.मेराज खान जलिल खान", ["7666090155"], "House No.1-12-1-128", "घर क्र.1-12-1-128"),
    ],
    "07": [
        c("A", "Hiwale Jeevakpal Bhimrao", "श्री.हिवाळे जिवकपाल भीमराव", ["9545072222"], "N-9, Plot No.1074, Ranjanvan Society, Pawan Nagar, behind Datta Mandir", "एन-9, प्लॉट नं.1074, रंजनवन सोसायटी, पवन नगर, दत्त मंदिरा मागे"),
        c("B", "Sunita Madhukar Sonawane", "श्रीमती सुनिता मधुकर सोनवणे", ["9764448444"], "Behind Renuka Mata Mandir, N-1 L Sector, House No.6/2, Jalgaon Road", "रेणुका माता मंदिरा मागे, एन-1 एल सेक्टर, घर नं.6/2, जळगाव रोड"),
        c("C", "Jyoti Mukesh Jain", "श्रीमती ज्योती मुकेश जैन", ["9511111165"], "Jain Corner, Gala No.18, Sports Complex, TV Center Chowk, HUDCO", "जैन कॉर्नर, गाला नं.18, स्पोर्ट्स कॉम्प्लेक्स, टीव्ही सेंटर चौक, हडको"),
        c("D", "Malwatkar Mahesh Shivajirao", "श्री.माळवतकर महेश शिवाजीराव", ["9518516951"], "N-11, B-54/4, HUDCO", "एन-11, बी-54/4, हडको"),
    ],
    "08": [
        c("A", "Bharti Mahendra Sonawane", "श्रीमती भारती महेंद्र सोनवणे", ["9923333394"], "CIDCO N-7, Art Apartment, next to Pandit Super Market", "सिडको एन-7, आर्ट अपार्टमेंट, पंडित सुपर मार्केट जवळ"),
        c("B", "Ramdas Pandit Harne", "श्री.रामदास पंडित हरने", ["9823313741"], "Grishneshwar Colony, next to Parva, Jadhavwadi CIDCO", "घृष्णेश्वर कॉलनी, पर्वा जवळ, जाधववाडी सिडको"),
        c("C", "Gaikwad Mohini Laxman", "श्रीमती गायकवाड मोहिनी लक्ष्मण", ["7774006608"], "House No.680, Naregaon, Vitthal Nagar", "घर नं.680, नरेगाव, विठ्ठल नगर"),
        c("D", "Otade Vijay Sainath", "श्री.ओताडे विजय सैनाथ", ["9765331111"], "Plot No.17, Indraprastha, Sai Saphalya Nagar, Harsul T-Point, Jalgaon Road", "प्लॉट नं.17, इंद्रप्रस्थ, साई सफळ्य नगर, हसुर्ल टी-पॉईंट, जळगाव रोड"),
    ],
    "09": [
        c("A", "Kakasaheb Damodar Kakde", "श्री.काकासाहेब दामोदर काकडे", ["9922333295"], "Ashok Nagar, Masnatpura, MIDC, Chikalthana", "अशोक नगर, मस्नतपुरा, एमआयडीसी, चिकलठाणा"),
        c("B", "Shahin Rahim Patel", "श्रीमती शाहिन रहीम पटेल", ["9405811111"], "Arafat Masjid, Fatima Nagar, Harsul", "अराफात मस्जिद, फातिमा नगर, हसुर्ल"),
        c("C", "Khan Sadia Amjad Khan", "श्रीमती खान सादिया अमजद खान", ["9822077340"], "Chikalthana, next to Rural Police Station, Jalna Road", "चिकलठाणा, रुरल पोलीस स्टेशन जवळ, जालना रोड"),
        c("D", "Matin Majid Sheikh", "श्री.मतीन मजीद शेख", ["9975735555"], "Bismillah Colony, Dargah Masjid, in front of Naregaon", "बिस्मिल्लाह कॉलनी, दर्गा मस्जिद, नरेगाव समोर"),
    ],
    "10": [
        c("A", "Surekha Balasaheb Sanap", "श्रीमती सुरेखा बालासाहेब सानप", ["9970654444"], "Gulmohar Colony / Ayodhya Nagar area", "गुलमोहर कॉलनी / अयोध्या नगर परिसर"),
        c("B", "Archana Sanjay Chaudhari", "श्रीमती अर्चना संजय चौधरी", ["9923990033"], "MIDC / Bajrang Chowk area", "एमआयडीसी / बजरंग चौक परिसर"),
        c("C", "Ganesh Ramjeevan Navandar", "श्री.गणेश रामजीवन नावंदर", ["9923554155"], "Garware Stadium / N-11 CIDCO area", "गरवारे स्टेडियम / एन-11 सिडको परिसर"),
        c("D", "Dandge Shivaji Bhausaheb", "श्री.दांडगे शिवाजी भाऊसाहेब", ["9730474848"], "Savarkar Chowk area", "सावरकर चौक परिसर"),
    ],
    "11": [
        c("A", "Swami Vishwanath Guruling", "श्री.स्वामी विश्वनाथ गुरुलींग", ["9923389888"], "Avishkar Colony / N-6 area", "अविष्कार कॉलनी / एन-6 परिसर"),
        c("B", "Adv. Advant Madhuri Milind Deshmukh", "अॅड.अदवंत माधुरी मिलींद देशमुख", ["9423778277"], "Hattesingpura area", "हत्तेसिंगपुरा परिसर"),
        c("C", "Kharat Meena Nitin", "श्रीमती खरात मीना नितीन", ["9860047624"], "Chistiya Colony / Vaishali Nagar area", "चिस्तीया कॉलनी / वैशालीनगर परिसर"),
        c("D", "Mayur Bansilal Vanjari", "श्री.मयुर बन्सीलाल वंजारी", ["9890674411"], "Sinhagad Colony area", "सिंहगड कॉलनी परिसर"),
    ],
    "12": [
        c("A", "Sheikh Farhat Jahan Sheikh Mohammad Atiq", "श्रीमती शेख फरहत जहाँ शेख मोहम्मद अतीक", ["9370356111"], "Rehemania Colony area", "रहेमानिया कॉलनी परिसर"),
        c("B", "Sumayya Khan Nisar Khan", "श्रीमती सुमय्या खान निसार खान", ["7774820994"], "Mujeeb Colony area", "मुजीब कॉलनी परिसर"),
        c("C", "Mohammad Wajed Mohammad Ayyub", "श्री.मोहम्मद वाजेद मोहम्मद अय्युब", ["9021444777"], "Azam Colony area", "आजम कॉलनी परिसर"),
        c("D", "Sherkhan Haji Abdul Rehman Khan", "श्री.शेरखान हाजी अब्दुल रहमान खान", ["9371069942"], "Sharif Colony / Kiradpura area", "शरीफ कॉलनी / किराडपुरा परिसर"),
    ],
    "13": [
        c("A", "Sayyad Sohel Sayyad Mahmad Hasan", "श्री.सय्यद सोहेल सय्यद महमद हसन", ["9881135513"], "Plot No.8, Opp. Jinsi Police Station, Jinsi", "प्लॉट नं.8, जिंसी पोलीस स्टेशन समोर, जिंसी"),
        c("B", "Alakesari Dina Alakesari Mohammad", "श्री.अलकसेरी दिना अलकसेरी मोहम्मद", ["9028023725", "9665177007"], "House No.15-8-369, Near Sadat Masjid, Azam Colony, Roshan Gate", "घर नं.15-8-369, सादत मस्जिद जवळ, आजम कॉलनी, रोशन गेट"),
        c("C", "Zohra Samir Bin Haider", "श्रीमती जोहरा समीर बीन हैदर", ["8208925557"], "Indiranagar, New Baijipura, Lane No.10, Opp. Shah Hospital", "इंदिरानगर, न्यू बायजीपुरा, गल्ली नं.10, शाह हॉस्पिटल समोर"),
        c("D", "Sayyad Usama Abdul Qadir", "श्री.सय्यद उसामा अब्दुल कादीर", ["9049142245"], "Plot No.87, Central Naka Road, Jamatul Arab Function Hall, Jaswantpura", "प्लॉट नं.87, सेंट्रल नाका रोड, जमातुल अरब फंक्शन हॉल, जसवंतपुरा"),
    ],
    "14": [
        c("A", "Qureshi Maleka Begum Qureshi Habib", "श्रीमती कुरैशी मलेका बेगम कुरैशी हबीब", ["9822510147"], "Nizamganj Colony, Near Bhavaninar Mehraj Masjid", "निजामगंज कॉलनी, भवनिनार मेहराज मस्जिद जवळ"),
        c("B", "Khan Feroz Moinuddin Khan", "श्री.खान फेरोज मोइनोद्दीन खान", ["9823774444"], "House No.8-2-15, Near Banemiya Dargah, Bukkalpuda, Shahganj", "घर नं.8-2-15, बानेमिया दर्गा जवळ, बुक्कलपुडा, शहागंज"),
        c("C", "Khan Almas Khanam Amjad", "श्री.खान अल्मास खानम अमजद", ["8055897777"], "Sanjay Nagar, Baijipura, Lane No.15B, Near Water Tank", "संजयनगर, बायजीपुरा, गल्ली नं.15B, पाण्याच्या टाकीजवळ"),
        c("D", "Munshi Bhikan Sheikh", "श्री.मुन्शी भिकन शेख", ["9890826666"], "Opp. Roshan Masjid, Bhagat Singh Nagar, Garkheda", "रोशन मस्जिद समोर, भगतसिंग नगर, गारखेडा"),
    ],
    "15": [
        c("A", "Khaire Sachin Suryakant", "श्री.खैरे सचिन सूर्यकांत", ["9850047777"], "Parvati Sadan, 2-18-66, Pandariba", "पार्वती सदन, 2-18-66, पांडरीबा"),
        c("B", "Tarannum Akil Ahmed", "श्रीमती तरन्नुम अकील अहमद", ["9883454545"], "1-10-72, Near Saray Masjid, Buddi Lane", "1-10-72, सराय मस्जिद जवळ, बुद्धीलेन"),
        c("C", "Noor Jahan Iqbal", "श्रीमती नूर जहान इकबाल", ["9890065786"], "Plot No.4 & 7, Damdi Mahal", "प्लॉट नं.4 व 7, दामडी महाल"),
        c("D", "Rushikesh Pradip Jaiswal", "श्री.ऋषिकेश प्रदीप जैस्वाल", ["9021990007"], "Plot No.41, Shakuntala Niwas, Royal Residency, Nirala Bazar", "प्लॉट नं.41, शकुंतला निवास, रॉयल रेसिडेन्सी, निराला बाजार"),
    ],
    "16": [
        c("A", "Sangita Nitin Sangle", "श्रीमती संगिता नितीन सांगळे", ["9767195811"], "Ajabnagar / Chota Takiya area", "अजबनगर / छोटा तकिया परिसर"),
        c("B", "Wadekar Raju Jagannath", "श्री.वाडेकर राजू जगन्नाथ", ["9960708741"], "Motivalanagar / Khokadpura area", "मोतीवालानगर / खोकडपुरा परिसर"),
        c("C", "Bhalerao Asha Naresh", "श्रीमती भालेराव आशा नरेश", ["9158920000", "9158190000"], "Laxman Chavadi / Sudarshannagar area", "लक्ष्मण चावडी / सुदर्शननगर परिसर"),
        c("D", "Bhadve Rameshwar Baburao", "श्री.भडवे रामेश्वर बाबुराव", ["9673788283"], "Kailasnagar area", "कैलासनगर परिसर"),
    ],
    "17": [
        c("A", "Salve Seema Siddharth", "श्रीमती साळवे सीमा सिद्धार्थ", ["7721932222", "8408892222"], "Khadkeshwar / Saraswati Bhuvan area", "खडकेश्वर / सरस्वती भवन परिसर"),
        c("B", "Anil Shrikishan Makariye", "श्री.अनिल श्रीकिशन मकारिये", ["9802315098"], "Nageshwarwadi / Bhoiwada area", "नागेश्वरवाडी / भोईवाडा परिसर"),
        c("C", "Kirti Mahendra Shinde", "श्रीमती कीर्ती महेंद्र शिंदे", ["9657023430"], "Samarthnagar / Kotla Colony area", "समर्थनगर / कोटला कॉलनी परिसर"),
        c("D", "Sameer Subhash Rajurkar", "श्री.समीर सुभाष राजुरकर", ["9823029359", "6262242424"], "Sillekhana / Bhagyanagar area", "सिलेखाना / भाग्यनगर परिसर"),
    ],
    "18": [
        c("A", "Harshada Sanjay Sirsat", "कुमारी हर्षदा संजय सिरसाट", ["9158777751"], "Padampura / Gandhinagar area", "पदमपुरा / गांधीनगर परिसर"),
        c("B", "Abhijit Devidas Jivanwal", "श्री.अभिजित देविदास जिवनवाल", ["9372355555"], "Vedantnagar / Konkanwadi area", "वेदांतनगर / कोंकणवाडी परिसर"),
        c("C", "Chhaya Vijay Waghchaure", "श्रीमती छाया विजय वाघचौरे", ["9595100700"], "Bansilalnagar / Jahangirdar Colony area", "बन्सीलालनगर / जहांगीरदार कॉलनी परिसर"),
        c("D", "Raju Magansing Rajput", "श्री.राजू मगनसिंग राजपुत", ["9890918246"], "Krantinagar / Osmanpura / Jalannagar area", "क्रांतीनगर / उस्मानपुरा / जालनानगर परिसर"),
    ],
    "19": [
        c("A", "Chandrakant Sukhdev Hivrale", "श्री.चंद्रकांत सुखदेव हिवराळे", ["9370335218"], "Ramanagar / Kranti Chowk area", "रामनगर / क्रांती चौक परिसर"),
        c("B", "Shilparani Sagar Wadkar", "श्रीमती शिल्पारानी सागर वाडकर", ["9403621284"], "Jyotinagar / Sant Eknath Rangmandir area", "ज्योतीनगर / संत एकनाथ रंगमंदिर परिसर"),
        c("C", "Burande Shobha Gurulingappa", "श्रीमती बुरांडे शोभा गुरुलिंगअप्पा", ["9371705665"], "Plot No.91/92, Devanagari, behind Shahanurmiya Dargah", "प्लॉट नं.91/92, देवानगरी, शहानुरमियाँ दर्गाच्या पाठीमागे"),
        c("D", "Satindersingh (Navin) Manmohansingh Oberoi", "श्री.सतिंदरसिंग (नविन) मनमोहनसिंग ओबेरॉय", ["9922221744"], "House No.5/6/86, behind Gurudwara, Osmanpura", "घर क्र.5/6/86, गुरुद्वाराच्या पाठीमागे, उस्मानपुरा"),
    ],
    "20": [
        c("A", "Shendge Jalindar Mahadev", "श्री.शेंडगे जालिंदर महादेव", ["9923254555", "9370381866"], "Shantai Niwas, Bauddha Nagar, Jawahar Colony", "शांताई निवास, बौद्धनगर, जवाहर कॉलनी"),
        c("B", "Archana Shailendra Nilkanth", "श्रीमती अर्चना शैलेंद्र नीळकंठ", ["9673484666", "9326655777"], "B-1, Tirupati Garden, Tapadia Nagar, Shahanur Miya Dargah Road", "बी-1, तिरुपती गार्डन, तापडिया नगर, शहानुर मियाँ दर्गा रोड"),
        c("C", "Anita Kishor Mankape", "श्रीमती अनिता किशोर मानकापे", ["9326214545", "9823324545"], "A-29, Nath Nagar, near Tuljabhavani Mandir", "ए-29, नाथ नगर, तुळजाभवनी मंदीरा जवळ"),
        c("D", "Tryambak Ganpatrao Tupe", "श्री.त्र्यंबक गणपतराव तुपे", ["9343717171", "9404717171"], "Opposite Balaji Mangal Karyalaya, Balaji Nagar", "बालाजी मंगल कार्यालयासमोर, बालाजी नगर"),
    ],
    "21": [
        c("A", "Gawali Nandlal Suresh", "श्री.गवळी नंदलाल सुरेश", ["9823140328"], "Plot No.570, Uttam Nagar, opposite Bilal Masjid", "प्लॉट नं.570, उत्तम नगर, बिलाल मस्जिद समोर"),
        c("B", "Thorat Kamal Dilip", "श्रीमती थोरात कमल दिलीप", ["9112481385"], "Row House No.B-2, Tirupati Executive, Ulkanagari", "रो-हाऊस नं.बी-2, तिरुपती एक्झ्युकेटीव्ह, उल्कानगरी"),
        c("C", "Sumitra Shankarrao Matre", "श्रीमती सुमित्रा शंकरराव मात्रे", ["9923798413"], "Plot No.8, Kulaswamini Niwas, Bhanudas Nagar, Jawahar Colony Road", "प्लॉट नं.8, कुलस्वामिनी निवास, भानुदासनगर, जवाहर कॉलनी रोड"),
        c("D", "Surendra Manikrao Kulkarni", "श्री.सुरेंद्र माणिकराव कुलकर्णी", ["9823044970"], "Plot No.15, Agnihotra Chowk, near Chetak Ghoda, Ulkanagari", "प्लॉट नं.15, अग्रिहोत्र चौक, चेतक घोड्याजवळ, उल्कानगरी"),
    ],
    "22": [
        c("A", "Nirpagare Pushpa Kantilal", "श्रीमती निरपगारे पुष्पा कांतीलाल", ["8484940548"], "Plot No.3, Lane No.7, Saishraddha Niwas, Nyayanagar, Durgamata Colony", "प्लॉट नं.3, गल्ली नं.7, साईश्रद्धा निवास, न्यायनगर, दुर्गामाता कॉलनी"),
        c("B", "Ashok Dhondiba Damle", "श्री.अशोक धोंडिबा दामले", ["7276202333"], "Plot No.94, Lane No.2, Ganpati Krupa, Damle Niwas, New Hanumannagar, Garkheda", "प्लॉट नं.94, गल्ली नं.2, गणपती कृपा, दामले निवास, न्यु हनुमाननगर, गारखेडा"),
        c("C", "Yashoda Rameshwar Shelke", "श्रीमती यशोदा रामेश्वर शेळके", ["9767936730"], "Plot No.234, Lane No.2, Gayatri Developers Office, Hanumannagar", "प्लॉट नं.234, गल्ली नं.2, गायत्री डेव्हलपर्स ऑफीस, हनुमाननगर"),
        c("D", "Janjal Rajendra Himmatrao", "श्री.जंजाळ राजेंद्र हिम्मतराव", ["9371029878"], "Flat No.2, Gurusiddhant Apartment, Nathprangan, opposite Janki Hall", "फ्लॅट नं.2, गुरुसिद्धांत अपार्टमेंट, नाथप्रांगण, जानकी हॉल समोर"),
    ],
    "23": [
        c("A", "Gaikwad Surekha Tarachand", "श्रीमती गायकवाड सुरेखा ताराचंद", ["9403923364"], "Tathagat Niwas, Jaybhavani Nagar, Lane No.1, CIDCO N-4", "तथागत निवास, जयभवानी नगर, गल्ली नं.1, सिडको एन-4"),
        c("B", "Balasaheb Dinkar Munde", "श्री.बाळासाहेब दिनकर मुंडे", ["9765491488"], "Plot No.20, Survey No.68, near Devi Mandir, Jaybhavani Nagar", "प्लॉट नं.20, सर्व्हे नं.68, देवी मंदिराजवळ, जयभवानीनगर"),
        c("C", "Satyabhama Damuanna Shinde", "श्रीमती सत्यभामा दामुअण्णा शिंदे", ["9673167562"], "Plot No.7/8, Mahajan Colony, Thakare Nagar, Road No.2", "प्लॉट क्र.7/8, महाजन कॉलनी, ठाकरे नगर, क्रमांक-2 रोड"),
        c("D", "Pramod Pralhad Rathod", "श्री.प्रमोद प्रल्हाद राठोड", ["9823511111"], "Plot No.126, N-3 CIDCO", "प्लॉट नं.126, एन-3 सिडको"),
    ],
    "24": [
        c("A", "Gangabai Bhimrao Bhavare", "श्रीमती गंगाबाई भीमराव भवरे", ["7798972142"], "Plot No.21, Lane No.13, near Jaybhavani Patsanstha, Ambikanagar, Mukundwadi", "प्लॉट नं.21, गल्ली नं.13, जयभवानी पतसंस्थे जवळ, अंबिकानगर, मुकुंदवाडी"),
        c("B", "Narote Kamal Ramchandra", "श्रीमती नरोटे कमल रामचंद्र", ["8806417743"], "Lane No.4, beside Soham Motors, Bikaner Nagar, Mukundwadi", "गल्ली नं.4, सोहम मोटर्सच्या बाजूला, बिकानगर, मुकुंदवाडी"),
        c("C", "Thube Mukta Kisan", "श्रीमती ठुबे मुक्ता किसन", ["9422712399"], "Near Akshara Kirana Shop, opposite Shiv Mandir, Mukundwadi", "अक्षरा किराणा शॉप जवळ, शिवमंदिरा समोर, मुकुंदवाडी"),
        c("D", "Jagtap Sunil Devidas", "श्री.जगताप सुनिल देविदास", ["7020220874"], "Late Raghunath Patil Jagtap's wada, near Vitthal Mandir, Mukundwadi village", "कै.रघुनाथ पाटील जगताप यांचा वाडा, विठ्ठल मंदिराजवळ, मुकुंदवाडी गाव"),
    ],
    "25": [
        c("A", "Manoj Bansilal (Mama) Gangve", "श्री.मनोज बन्सीलाल (मामा) गांगवे", ["9421922222"], "Plot No.33/34, N-1, Town Center, CIDCO", "प्लॉट क्र.33/34, एन-1, टाऊन सेंटर, सिडको"),
        c("B", "Korade Vaishali Rameshwar", "श्रीमती कोरडे वैशाली रामेश्वर", ["9028533898"], "Punyashlok Ahilyadevi Holkar Chowk, Chikalthana", "पुण्यश्लोक अहिल्यादेवी होळकर चौक, चिकलठाणा"),
        c("C", "Priyanka Dipak Khotkar", "श्रीमती प्रियांका दिपक खोतकर", ["9834515291"], "Plot No.38, N-2, Dipak Complex", "प्लॉट नं.38, एन-2, दिपक कॉम्प्लेक्स"),
        c("D", "Ravi Sahebrao Kawade", "श्री.रवी साहेबराव कावडे", ["9970155594"], "Behind Savta Mandir, Hanuman Chowk, Chikalthana, Sadashivnagar (Ramnagar)", "सावता मंदिराच्या पाठीमागे, हनुमान चौक, चिकलठाणा, सदाशिवनगर (रामनगर)"),
    ],
    "26": [
        c("A", "Salve Anita Mohanlal", "श्रीमती साळवे अनिता मोहनलाल", ["9865616535"], "Indira Market, Mukundwadi Bhajimandi", "इंदिरा मार्केट, मुकुंदवाडी भाजीमंडी"),
        c("B", "Rajput Padmasinh Kashinath", "श्री.राजपुत पद्मसिंह काशीनाथ", ["9422713640"], "Plot No.10, Flat No.3, Gat No.103, Rana Tower, Chate School Road, Satara area", "प्लॉट नं.10, फ्लॅट नं.3, गट नं.103, राणा टॉवर, चाटे स्कुल रोड, सातारा परिसर"),
        c("C", "Kulkarni Savita Ratnakar", "श्रीमती कुलकर्णी सविता रत्नाकर", ["9881068089"], "Plot No.31, 32, Gat No.176, Samaras Bungalow, ahead of Satara Police Station", "प्लॉट नं.31,32, गट नं.176, समरस बंगला, सातारा पोलिस स्टेशनच्या पुढे"),
        c("D", "Hiwale Appasaheb Vinayakrao", "श्री.हिवाळे अप्पासाहेब विनायकराव", ["9209717171"], "Hiwale Patil Lawns, Beed Bypass", "हिवाळे पाटील लॉन्स, बीडबायपास"),
    ],
    "27": [
        c("A", "Gaikwad Daya Kailas", "श्रीमती गायकवाड दया कैलास", ["8698523010", "9765008031"], "Lane No.21, Indiranagar, Baijipura", "गल्ली नं.21, इंदिरानगर, बायजीपुरा"),
        c("B", "Kendre Govind Parshuram", "श्री.केंद्रे गोविंद परशुराम", ["9503418111"], "Plot No.69, Shivneri Colony, Balkrishna Nagar, near Vijay Chowk, Garkheda", "प्लॉट नं.69, शिवनेरी कॉलनी, बाळकृष्ण नगर, विजय चौकाजवळ, गारखेडा"),
        c("C", "Solanke Sunita Sanjay", "श्रीमती सोळंके सुनिता संजय", ["8007199717"], "Row House A/2, Shrirang Residency, opposite Adinath Nagar, Jawahar Police Station Chowk, Garkheda", "रो-हाऊस ए/2, श्रीरंग रेसिडेन्सी, आदीनाथ नगर समोर, जवाहर पोलीस स्टेशन चौक, गारखेडा"),
        c("D", "Renukadas (Raju) Dattopant Vaidya", "श्री.रेणुकादास (राजु) दत्तोपंत वैद्य", ["9422203355"], "G-Renukakrupa, Siddheshwar Nagar, Shreya Nagar", "जी-रेणुकाकृपा, सिध्देश्वर नगर, श्रेयनगर"),
    ],
    "28": [
        c("A", "Wahul Sunita Manoj", "श्रीमती वाहूळ सुनिता मनोज", ["9021101101"], "Plot, Nagsen Nagar, Osmanpura, beside Mohini Hospital", "प्लॉट, नागसेन नगर, उस्मानपुरा, मोहिनी हॉस्पीटलच्या बाजूला"),
        c("B", "Khan Abdul Matin", "श्री.खान अब्दुल मतीन", ["8862069456"], "H.No.6-12-842, Lane No.6, near Mohsin Kirana, Rahul Nagar, Main Road Railway Station", "हॉ.नं.6-12-842, गल्ली नं.6, मोहसीन किराणाजवळ, राहुल नगर, मेनरोड रेल्वेस्टेशन"),
        c("C", "Naseem Begum Mohammad Afsar", "श्रीमती नसीम बेगम मोहम्मद अफसर", ["8055577750"], "Lane No.B7, Silk Mill Colony, Railway Station", "गल्ली नं.B7, सिल्क मिल कॉलनी, रेल्वेस्टेशन"),
        c("D", "Sheikh Saber Pashu", "श्री.शेख साबेर पाशू", ["9970417759"], "House No.6-15-359, Lane No.2, Marwah Masjid", "घर क्र.6-15-359, गल्ली क्र.2, मारवाह मस्जिद"),
    ],
    "29": [
        c("A", "Siddhant Sanjay Sirsat", "श्री.सिध्दांत संजय सिरसाट", ["8793877777"], "Link Road, opposite Golwadi, Abrar Colony, Beed Bypass Road", "लिंकरोड, गोलवाडी समोर, अबरार कॉलनी, बीडबायपास रोड"),
        c("B", "Anita Nandkumar Ghodele", "श्रीमती अनिता नंदकुमार घोडेले", ["9765211111"], "Matoshree, Sai Vrindavan Colony, behind Mahanubhav Ashram, Itkheda", "मातोश्री, साईवृंदावन कॉलनी, महानुभाव आश्रमाच्या पाठीमागे, ईटखेडा"),
        c("C", "Shweta Sumit Trivedi", "श्रीमती श्वेता सुमित त्रिवेदी", ["7470723374"], "Near Santaji Police Chowki, Nakshatrawadi", "संताजी पोलीस चौकी जवळ, नक्षत्रवाडी"),
    ],
}

def main():
    out = Path(__file__).resolve().parents[1] / "public" / "data" / "corporators-by-prabhag.json"
    payload = {
        "source": "CSMC Municipal Secretary Department — General Election 2026 elected corporators list (party column omitted in portal display)",
        "sourceMr": "छत्रपती संभाजीनगर महानगरपालिका — सार्वत्रिक निवडणूक-२०२६ निर्वाचित स.पालिका सदस्यांची यादी (पोर्टलवर पक्ष नाव दर्शवले जात नाही)",
        "note": "Seat classifications A/B/C/D correspond to अ/ब/क/ड. Contact numbers as published.",
        "byPrabhag": BY_PRABHAG,
    }
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    total = sum(len(v) for v in BY_PRABHAG.values())
    print(f"Wrote {out} — {len(BY_PRABHAG)} prabhags, {total} corporators")

if __name__ == "__main__":
    main()
