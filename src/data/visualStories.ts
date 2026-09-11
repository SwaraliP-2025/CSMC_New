import { isHeritageStory, storyPath, type VisualStory } from "@/types/featuredStory";
import heroEllora from "@/assets/hero-heritage.jpg";
import aboutAjanta from "@/assets/about/ajanta-caves.png";
import aboutDeogiri from "@/assets/about/deogiri-fort.png";
import aboutKranti from "@/assets/about/kranti-chowk.png";
import bibiKaMaqbara from "@/assets/tourist/bibi-ka-maqbara.jpg";
import civicSchoolStudents from "@/assets/civic/school-students.png";
import civicChildrenProgramme from "@/assets/civic/children-programme.png";
import civicCorporationMeeting from "@/assets/civic/corporation-meeting.png";
import civicYouthHonour from "@/assets/civic/youth-honour.png";
import civicCitation from "@/assets/civic/citation-presentation.png";

/**
 * One record → Hero (optional) + Gallery (optional) + one detail page.
 * PRO/CMS can later replace this array without changing Hero or Gallery UI.
 */
export const VISUAL_STORIES: VisualStory[] = [
  {
    id: "ellora-caves",
    type: "heritage",
    titleEn: "Ellora Caves",
    titleMr: "वेरूळ लेणी",
    shortDescriptionEn: "A UNESCO World Heritage site of rock-cut temples near the city.",
    shortDescriptionMr: "शहराजवळील खडकात कोरणाऱ्या मंदिरांचे युनेस्को जागतिक वारसा स्थळ.",
    descriptionEn:
      "Ellora is a complex of rock-cut monasteries and temples. It is among the region's most significant architectural heritage sites and a defining landmark of Chhatrapati Sambhajinagar.",
    descriptionMr:
      "वेरूळ हे खडकात कोरणाऱ्या विहार व मंदिरांचे संकुल आहे. हे प्रदेशातील महत्त्वाच्या स्थापत्य वारसा स्थळांपैकी एक असून छत्रपती संभाजीनगरचे एक प्रमुख प्रतीक आहे.",
    image: heroEllora,
    altEn: "Kailasa Temple, Ellora Caves — Chhatrapati Sambhajinagar",
    altMr: "कैलास मंदिर, वेरूळ लेणी — छत्रपती संभाजीनगर",
    locationEn: "Ellora, about 33 km from the city centre",
    locationMr: "वेरूळ, शहराच्या केंद्रापासून सुमारे ३३ किमी",
    categoryEn: "Heritage",
    categoryMr: "वारसा",
    showInHero: true,
    showInGallery: false,
    heroOrder: 1,
    objectPosition: "center 22%",
    touristSlug: "ellora-caves",
    relatedIds: ["ajanta-caves", "bibi-ka-maqbara", "deogiri-fort"],
  },
  {
    id: "civic-children-programme",
    type: "event",
    titleEn: "Citizens at a Municipal Programme",
    titleMr: "महापालिका कार्यक्रमातील नागरिक",
    shortDescriptionEn: "Children and residents taking part in a civic programme of the Municipal Corporation.",
    shortDescriptionMr: "महानगरपालिकेच्या नागरी कार्यक्रमात सहभागी झालेली मुले व नागरिक.",
    descriptionEn:
      "This photograph records a civic programme of Chhatrapati Sambhajinagar Municipal Corporation. It shows children, residents and municipal representatives gathered together. Specific event title and date will be published by the PRO desk when the official record is available.",
    descriptionMr:
      "हे छायाचित्र छत्रपती संभाजीनगर महानगरपालिकेच्या नागरी कार्यक्रमाची नोंद करते. यात मुले, नागरिक व महापालिका प्रतिनिधी एकत्र दिसतात. अधिकृत कार्यक्रमनाव व दिनांक PRO विभागाकडून उपलब्ध झाल्यावर प्रकाशित केले जातील.",
    image: civicChildrenProgramme,
    altEn: "Children and municipal officials at a civic programme under a decorated tent",
    altMr: "सजावट केलेल्या पंडालखाली नागरी कार्यक्रमातील मुले व महापालिका अधिकारी",
    locationEn: "Chhatrapati Sambhajinagar",
    locationMr: "छत्रपती संभाजीनगर",
    categoryEn: "Civic Life",
    categoryMr: "नागरी जीवन",
    purposeEn: "Public programmes that bring residents and the Municipal Corporation together.",
    purposeMr: "नागरिक व महानगरपालिका एकत्र आणणारे सार्वजनिक कार्यक्रम.",
    showInHero: true,
    showInGallery: true,
    heroOrder: 2,
    galleryOrder: 2,
    objectPosition: "center 42%",
    relatedIds: ["civic-school-students", "civic-youth-honour", "civic-citation"],
  },
  {
    id: "ajanta-caves",
    type: "heritage",
    titleEn: "Ajanta Caves",
    titleMr: "अजिंठा लेणी",
    shortDescriptionEn: "Ancient cave sanctuaries renowned for their murals.",
    shortDescriptionMr: "भित्तिचित्रांसाठी प्रसिद्ध प्राचीन लेणी.",
    descriptionEn:
      "The Ajanta Caves are Buddhist cave monuments known for wall paintings and sculpture. They form part of the wider heritage landscape associated with Chhatrapati Sambhajinagar.",
    descriptionMr:
      "अजिंठा लेणी भित्तिचित्रे व शिल्पांसाठी प्रसिद्ध बौद्ध गुहा स्मारके आहेत. ती छत्रपती संभाजीनगरच्या व्यापक वारसा परिसराचा भाग आहेत.",
    image: aboutAjanta,
    altEn: "Ajanta Caves — Chhatrapati Sambhajinagar region",
    altMr: "अजिंठा लेणी — छत्रपती संभाजीनगर परिसर",
    locationEn: "About 100 km from the city centre",
    locationMr: "शहराच्या केंद्रापासून सुमारे १०० किमी",
    categoryEn: "Heritage",
    categoryMr: "वारसा",
    showInHero: true,
    showInGallery: false,
    heroOrder: 3,
    objectPosition: "center 45%",
    touristSlug: "ajanta-caves",
    relatedIds: ["ellora-caves", "bibi-ka-maqbara"],
  },
  {
    id: "civic-corporation-meeting",
    type: "civic",
    titleEn: "Municipal Administration at Work",
    titleMr: "कार्यरत महानगरपालिका प्रशासन",
    shortDescriptionEn: "Officials and citizens at the Chhatrapati Sambhajinagar Municipal Corporation.",
    shortDescriptionMr: "छत्रपती संभाजीनगर महानगरपालिकेतील अधिकारी व नागरिक.",
    descriptionEn:
      "A gathering in the Municipal Corporation meeting hall. The photograph shows civic administration and public engagement at the CSMC headquarters. Named attendees and the occasion will be confirmed from the official PRO record.",
    descriptionMr:
      "महानगरपालिका सभागृहातील एक मेळावा. हे छायाचित्र CSMC मुख्यालयातील प्रशासन व सार्वजनिक सहभाग दर्शवते. उपस्थित व्यक्तींची नावे व प्रसंगाचा तपशील अधिकृत PRO नोंदीनुसार निश्चित केला जाईल.",
    image: civicCorporationMeeting,
    altEn: "Municipal officials and guests gathered in the CSMC meeting hall",
    altMr: "CSMC सभागृहात एकत्र आलेले महापालिका अधिकारी व पाहुणे",
    locationEn: "CSMC Main Building, Town Hall, Chhatrapati Sambhajinagar",
    locationMr: "CSMC मुख्य इमारत, टाउन हॉल, छत्रपती संभाजीनगर",
    categoryEn: "Governance",
    categoryMr: "प्रशासन",
    purposeEn: "Civic meetings and official engagements at the Municipal Corporation.",
    purposeMr: "महानगरपालिकेतील नागरी बैठका व अधिकृत कार्यक्रम.",
    showInHero: true,
    showInGallery: true,
    heroOrder: 4,
    galleryOrder: 3,
    objectPosition: "left 38%",
    relatedIds: ["civic-citation", "civic-youth-honour"],
  },
  {
    id: "bibi-ka-maqbara",
    type: "heritage",
    titleEn: "Bibi Ka Maqbara",
    titleMr: "बीबी का मकबरा",
    shortDescriptionEn: "A historic mausoleum in the city, often called the Taj of the Deccan.",
    shortDescriptionMr: "शहरातील ऐतिहासिक स्मारक, ज्याला दख्खनचा ताज म्हणतात.",
    descriptionEn:
      "Bibi Ka Maqbara is a Mughal-era mausoleum in Chhatrapati Sambhajinagar, known for its dome and surrounding gardens. It is one of the city's most recognisable landmarks.",
    descriptionMr:
      "बीबी का मकबरा हे छत्रपती संभाजीनगरमधील मुघलकालीन स्मारक आहे. त्याचे शिखर व बागा शहराच्या ओळखनीय स्थळांपैकी आहेत.",
    image: bibiKaMaqbara,
    altEn: "Bibi Ka Maqbara, Chhatrapati Sambhajinagar",
    altMr: "बीबी का मकबरा, छत्रपती संभाजीनगर",
    locationEn: "About 5 km from the city centre",
    locationMr: "शहराच्या केंद्रापासून सुमारे ५ किमी",
    categoryEn: "Heritage",
    categoryMr: "वारसा",
    showInHero: false,
    showInGallery: false,
    objectPosition: "center 40%",
    touristSlug: "bibi-ka-maqbara",
    relatedIds: ["ellora-caves", "deogiri-fort", "kranti-chowk"],
  },
  {
    id: "civic-school-students",
    type: "programme",
    titleEn: "School students at a civic visit",
    titleMr: "नागरी भेटीतील विद्यार्थिनी",
    shortDescriptionEn: "School students gathered during a civic visit.",
    shortDescriptionMr: "नागरी भेटीदरम्यान एकत्र आलेल्या विद्यार्थिनी.",
    descriptionEn:
      "School students in uniform photographed during a civic visit. The image is part of CSMC's visual record of public engagement. School name and visit date will follow the official programme note when issued.",
    descriptionMr:
      "नागरी भेटीदरम्यान गणवेशातील विद्यार्थिनी. हे छायाचित्र CSMC च्या सार्वजनिक सहभागाच्या दृश्य नोंदीचा भाग आहे. शाळेचे नाव व भेटीचा दिनांक अधिकृत कार्यक्रम टिपणीनंतर जोडला जाईल.",
    image: civicSchoolStudents,
    altEn: "School students in uniform gathered for a civic visit",
    altMr: "नागरी भेटीसाठी एकत्र आलेल्या गणवेशातील विद्यार्थिनी",
    locationEn: "Chhatrapati Sambhajinagar",
    locationMr: "छत्रपती संभाजीनगर",
    categoryEn: "Civic Life",
    categoryMr: "नागरी जीवन",
    showInGallery: true,
    galleryOrder: 1,
    objectPosition: "center 40%",
    relatedIds: ["civic-children-programme", "civic-youth-honour"],
  },
  {
    id: "civic-youth-honour",
    type: "event",
    titleEn: "Citation presented to a young citizen",
    titleMr: "तरुण नागरिकास सन्मानपत्र",
    shortDescriptionEn: "A young citizen receiving a citation at the Municipal Corporation.",
    shortDescriptionMr: "महानगरपालिकेत सन्मानपत्र स्वीकारणारा तरुण नागरिक.",
    descriptionEn:
      "A citation being presented in the Municipal Corporation building. Names of recipients and the occasion will be published from the official PRO record; they are not inferred from the photograph.",
    descriptionMr:
      "महानगरपालिका इमारतीत सन्मानपत्र प्रदान. प्राप्तकर्त्यांची नावे व प्रसंग अधिकृत PRO नोंदीनुसार प्रकाशित केले जातील; छायाचित्रावरून अनुमान काढलेले नाहीत.",
    image: civicYouthHonour,
    altEn: "A young citizen receiving a citation at the Municipal Corporation",
    altMr: "महानगरपालिकेत सन्मानपत्र स्वीकारणारा तरुण नागरिक",
    locationEn: "CSMC Main Building, Chhatrapati Sambhajinagar",
    locationMr: "CSMC मुख्य इमारत, छत्रपती संभाजीनगर",
    categoryEn: "Event",
    categoryMr: "कार्यक्रम",
    showInGallery: true,
    galleryOrder: 4,
    objectPosition: "center 40%",
    relatedIds: ["civic-citation", "civic-corporation-meeting"],
  },
  {
    id: "civic-citation",
    type: "event",
    titleEn: "Municipal citation presentation",
    titleMr: "महापालिका सन्मान सोहळा",
    shortDescriptionEn: "A citation being presented at the Municipal Corporation.",
    shortDescriptionMr: "महानगरपालिकेत सन्मानपत्र प्रदान करताना.",
    descriptionEn:
      "Officials presenting a citation at the Municipal Corporation. This is a representative record of civic recognition. Full programme details will be added from the PRO desk.",
    descriptionMr:
      "महानगरपालिकेत सन्मानपत्र प्रदान करताना अधिकारी. ही नागरी सन्मानाची प्रतिनिधिक नोंद आहे. पूर्ण कार्यक्रम तपशील PRO विभागाकडून जोडला जाईल.",
    image: civicCitation,
    altEn: "A citation being presented at the Municipal Corporation",
    altMr: "महानगरपालिकेत सन्मानपत्र प्रदान करताना",
    locationEn: "CSMC Main Building, Chhatrapati Sambhajinagar",
    locationMr: "CSMC मुख्य इमारत, छत्रपती संभाजीनगर",
    categoryEn: "Event",
    categoryMr: "कार्यक्रम",
    showInGallery: true,
    galleryOrder: 5,
    objectPosition: "center 42%",
    relatedIds: ["civic-youth-honour", "civic-corporation-meeting"],
  },
  {
    id: "deogiri-fort",
    type: "heritage",
    titleEn: "Deogiri Fort",
    titleMr: "देवगिरी किल्ला",
    shortDescriptionEn: "A hill fortress known for its defensive architecture.",
    shortDescriptionMr: "संरक्षणात्मक रचनेसाठी ओळखला जाणारा टेकड्यावरील किल्ला.",
    descriptionEn:
      "Deogiri Fort (Daulatabad) is a historic hill fortress on the Ellora road, known for its walls, moat and gateways. It is a major landmark of the region.",
    descriptionMr:
      "देवगिरी किल्ला (दौलताबाद) ऐलोरा मार्गावरील ऐतिहासिक टेकडी किल्ला आहे. भिंती, खंदक व दरवाज्यांसाठी तो ओळखला जातो.",
    image: aboutDeogiri,
    altEn: "Deogiri Fort, Chhatrapati Sambhajinagar region",
    altMr: "देवगिरी किल्ला, छत्रपती संभाजीनगर परिसर",
    locationEn: "About 13 km from the city centre",
    locationMr: "शहराच्या केंद्रापासून सुमारे १३ किमी",
    categoryEn: "Heritage",
    categoryMr: "वारसा",
    showInHero: false,
    showInGallery: false,
    objectPosition: "center 40%",
    touristSlug: "daulatabad-fort",
    relatedIds: ["ellora-caves", "bibi-ka-maqbara"],
  },
  {
    id: "kranti-chowk",
    type: "heritage",
    titleEn: "Kranti Chowk",
    titleMr: "क्रांती चौक",
    shortDescriptionEn: "A central city junction marked by the Chhatrapati Shivaji Maharaj statue.",
    shortDescriptionMr: "छत्रपती शिवाजी महाराज पुतळ्यासाठी ओळखला जाणारा शहरातील प्रमुख चौक.",
    descriptionEn:
      "Kranti Chowk is a well-known public junction in Chhatrapati Sambhajinagar. The statue of Chhatrapati Shivaji Maharaj is a familiar civic landmark. It also identifies Municipal Zone D9 – Krantichowk.",
    descriptionMr:
      "क्रांती चौक हे छत्रपती संभाजीनगरमधील परिचित सार्वजनिक चौक आहे. छत्रपती शिवाजी महाराजांचा पुतळा शहराचे एक नागरी प्रतीक आहे. येथे महानगरपालिका विभाग D९ – क्रांतीचौक आहे.",
    image: aboutKranti,
    altEn: "Kranti Chowk — Chhatrapati Shivaji Maharaj statue",
    altMr: "क्रांती चौक — छत्रपती शिवाजी महाराज पुतळा",
    locationEn: "Kranti Chowk, Chhatrapati Sambhajinagar",
    locationMr: "क्रांती चौक, छत्रपती संभाजीनगर",
    categoryEn: "City",
    categoryMr: "शहर",
    showInHero: false,
    showInGallery: false,
    objectPosition: "center 20%",
    relatedIds: ["bibi-ka-maqbara", "civic-corporation-meeting"],
  },
];

export function getStoryById(id: string) {
  return VISUAL_STORIES.find((story) => story.id === id);
}

export function getHeroStories() {
  return VISUAL_STORIES
    .filter((story) => story.showInHero)
    .slice()
    .sort((a, b) => (a.heroOrder ?? 99) - (b.heroOrder ?? 99));
}

const HOMEPAGE_GALLERY_LIMIT = 4;

/** Civic / event photographs only — never heritage monuments. */
export function getGalleryStories() {
  return VISUAL_STORIES
    .filter((story) => story.showInGallery && story.type !== "heritage")
    .slice()
    .sort((a, b) => (a.galleryOrder ?? 99) - (b.galleryOrder ?? 99));
}

export function getHomepageGalleryStories() {
  return getGalleryStories().slice(0, HOMEPAGE_GALLERY_LIMIT);
}

export function getRelatedStories(story: VisualStory) {
  const related = (story.relatedIds ?? [])
    .map((id) => getStoryById(id))
    .filter((item): item is VisualStory => Boolean(item));
  if (isHeritageStory(story)) return related.filter(isHeritageStory);
  return related.filter((item) => !isHeritageStory(item));
}

export { storyPath };
