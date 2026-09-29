/** Public RTI contacts and document links shown on /rti-act. */
export const RTI_OFFICERS = [
  {
    role: "Public Information Officer (PIO)",
    roleMr: "जन माहिती अधिकारी (PIO)",
    name: "Shri. Rajesh Patil",
    dept: "General Administration",
    phone: "0240-2331731",
  },
  {
    role: "Appellate Authority",
    roleMr: "अपीलीय प्राधिकरण",
    name: "Shri. Suresh Deshmukh",
    dept: "Administration",
    phone: "0240-2331732",
  },
] as const;

export const RTI_DOCS = [
  {
    title: "RTI Application Form",
    titleMr: "RTI अर्ज नमुना",
    to: "/digital-repository/act-rti",
    external: false,
  },
  {
    title: "First Appeal Form / Quarterly Disclosure",
    titleMr: "प्रथम अपील / तिमाही प्रकटीकरण",
    to: "/digital-repository/rti-q4",
    external: false,
  },
] as const;
