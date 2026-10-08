/**
 * Standing Committee and subject-committee chairpersons.
 * Names and committee titles are the current CSMC source wording.
 * No established Marathi equivalent exists in this project, so the
 * Marathi fields keep that source text. No local portraits are available.
 */
export type StandingCommitteeChairperson = {
  id: string;
  name: string;
  nameMr: string;
  committeeName: string;
  committeeNameMr: string;
  photo: string | null;
};

export const STANDING_COMMITTEE_CHAIRPERSONS: StandingCommitteeChairperson[] = [
  {
    id: "jayashree-surendra-kulkarni",
    name: "Smt. Jayashree Surendra Kulkarni",
    nameMr: "Smt. Jayashree Surendra Kulkarni",
    committeeName: "Chairman Standing Committee",
    committeeNameMr: "Chairman Standing Committee",
    photo: null,
  },
  {
    id: "manisha-vinod-lokhande",
    name: "Smt. Manisha Vinod Lokhande",
    nameMr: "Smt. Manisha Vinod Lokhande",
    committeeName: "Women Child Welfare Committee",
    committeeNameMr: "Women Child Welfare Committee",
    photo: null,
  },
  {
    id: "shobha-gurulingappa-burande",
    name: "Smt. Shobha Gurulingappa Burande",
    nameMr: "Smt. Shobha Gurulingappa Burande",
    committeeName: "Dy.Chairman Women Child Welfare Committee",
    committeeNameMr: "Dy.Chairman Women Child Welfare Committee",
    photo: null,
  },
  {
    id: "gokulsing-sampatsing-malke",
    name: "Shri. Gokulsing Sampatsing Malke",
    nameMr: "Shri. Gokulsing Sampatsing Malke",
    committeeName: "Chairman Health Committee",
    committeeNameMr: "Chairman Health Committee",
    photo: null,
  },
  {
    id: "kamal-ramchandra-narote",
    name: "Smt. Kamal Ramchandra Narote",
    nameMr: "Smt. Kamal Ramchandra Narote",
    committeeName: "Chairman Education Committee",
    committeeNameMr: "Chairman Education Committee",
    photo: null,
  },
  {
    id: "manoj-aasarm-ballal",
    name: "Shri. Manoj Aasarm Ballal",
    nameMr: "Shri. Manoj Aasarm Ballal",
    committeeName: "Chairman City Development Committee",
    committeeNameMr: "Chairman City Development Committee",
    photo: null,
  },
  {
    id: "siddhantsanjay-shirsat",
    name: "Shri. SiddhantSanjay Shirsat",
    nameMr: "Shri. SiddhantSanjay Shirsat",
    committeeName: "Chairman Slum improvement, Housing Social welfare",
    committeeNameMr: "Chairman Slum improvement, Housing Social welfare",
    photo: null,
  },
  {
    id: "afsar-khan-yasin-khan",
    name: "SHRI. AFSAR KHAN YASIN KHAN",
    nameMr: "SHRI. AFSAR KHAN YASIN KHAN",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO-1",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO-1",
    photo: null,
  },
  {
    id: "manoj-asaram-ballal",
    name: "MR MANOJ ASARAM BALLAL",
    nameMr: "MR MANOJ ASARAM BALLAL",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO-2",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO-2",
    photo: null,
  },
  {
    id: "nasim-bee-sandu-khan",
    name: "MRS NASIM BEE SANDU KHAN",
    nameMr: "MRS NASIM BEE SANDU KHAN",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO-3",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO-3",
    photo: null,
  },
  {
    id: "pushpa-uttamrao-rojatkar",
    name: "MRS PUSHPA UTTAMRAO ROJATKAR",
    nameMr: "MRS PUSHPA UTTAMRAO ROJATKAR",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO - 4",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO - 4",
    photo: null,
  },
  {
    id: "jyoti-subhash-pinjarkar",
    name: "MRS JYOTI SUBHASH PINJARKAR",
    nameMr: "MRS JYOTI SUBHASH PINJARKAR",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO-5",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO-5",
    photo: null,
  },
  {
    id: "manisha-balasaheb-mundhe",
    name: "MRS MANISHA BALASAHEB MUNDHE",
    nameMr: "MRS MANISHA BALASAHEB MUNDHE",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO- 6",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO- 6",
    photo: null,
  },
  {
    id: "meena-ramdas-gayke",
    name: "MRS MEENA RAMDAS GAYKE",
    nameMr: "MRS MEENA RAMDAS GAYKE",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO - 7",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO - 7",
    photo: null,
  },
  {
    id: "vimal-janardhan-kamble",
    name: "MRS VIMAL JANARDHAN KAMBLE",
    nameMr: "MRS VIMAL JANARDHAN KAMBLE",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO- 8",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO- 8",
    photo: null,
  },
  {
    id: "nitin-dashrath-salvi",
    name: "MR NITIN DASHRATH SALVI",
    nameMr: "MR NITIN DASHRATH SALVI",
    committeeName: "CHAIRMAN ZONE COMMITTEE NO - 9",
    committeeNameMr: "CHAIRMAN ZONE COMMITTEE NO - 9",
    photo: null,
  },
];
