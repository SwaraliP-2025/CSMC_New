import type { ArchiveFile } from "@/lib/archiveDocuments";
import {
  GENERAL_ADMINISTRATION_DOCUMENTS_FOLDER,
  generalAdministrationDocuments,
} from "@/data/generalAdministrationDocuments";

export type AdministrationEstablishmentCategory = {
  id: string;
  folder: string;
  files: ArchiveFile[];
};

/** On-disk parent. General Administration Documents is listed separately and is not included here. */
export const ADMINISTRATION_ESTABLISHMENT_ROOT = [
  "Municipal Document Repository",
  "Administration and Establishment Department",
] as const;

export const administrationEstablishmentCategories: AdministrationEstablishmentCategory[] = [
  {
    "id": "administration",
    "folder": "Administration",
    "files": [
      {
        "id": "administration-accountant-pdf",
        "file": "Accountant.pdf",
        "bytes": 66633
      },
      {
        "id": "administration-asst-commissioner-pdf",
        "file": "Asst__Commissioner.pdf",
        "bytes": 149170
      },
      {
        "id": "administration-asst-program-officer-pdf",
        "file": "Asst__Program_Officer.pdf",
        "bytes": 64107
      },
      {
        "id": "administration-asst-sports-officer-pdf",
        "file": "Asst__Sports_Officer.pdf",
        "bytes": 59498
      },
      {
        "id": "administration-auditor-pdf",
        "file": "Auditor.pdf",
        "bytes": 56774
      },
      {
        "id": "administration-chief-garden-officer-pdf",
        "file": "Chief_Garden_Officer.pdf",
        "bytes": 65883
      },
      {
        "id": "administration-computer-operator-pdf",
        "file": "Computer_Operator.pdf",
        "bytes": 64186
      },
      {
        "id": "administration-computer-programmer-pdf",
        "file": "Computer_Programmer.pdf",
        "bytes": 66552
      },
      {
        "id": "administration-curetor-pdf",
        "file": "Curetor.pdf",
        "bytes": 59584
      },
      {
        "id": "administration-driver-pdf",
        "file": "Driver.pdf",
        "bytes": 264652
      },
      {
        "id": "administration-dy-commissioner-pdf",
        "file": "Dy_Commissioner.pdf",
        "bytes": 80785
      },
      {
        "id": "administration-garden-assistant-pdf",
        "file": "Garden_Assistant.pdf",
        "bytes": 65166
      },
      {
        "id": "administration-junior-auditor-pdf",
        "file": "Junior_Auditor.pdf",
        "bytes": 71062
      },
      {
        "id": "administration-librarian-pdf",
        "file": "Librarian.pdf",
        "bytes": 61822
      },
      {
        "id": "administration-lipik-tanklekhak-pdf",
        "file": "Lipik_Tanklekhak.pdf",
        "bytes": 5413930
      },
      {
        "id": "administration-p-r-o-pdf",
        "file": "P_R_O.pdf",
        "bytes": 65943
      },
      {
        "id": "administration-sanitation-inspector-pdf",
        "file": "Sanitation_Inspector.pdf",
        "bytes": 119372
      },
      {
        "id": "administration-sanitation-officer-pdf",
        "file": "Sanitation_Officer.pdf",
        "bytes": 70348
      },
      {
        "id": "administration-stenographer-pdf",
        "file": "Stenographer.pdf",
        "bytes": 61368
      },
      {
        "id": "administration-suprintendent-1-pdf",
        "file": "Suprintendent (1).pdf",
        "bytes": 250029
      },
      {
        "id": "administration-suprintendent-pdf",
        "file": "Suprintendent.pdf",
        "bytes": 250029
      },
      {
        "id": "administration-telephone-opretor-pdf",
        "file": "Telephone_Opretor.pdf",
        "bytes": 73743
      },
      {
        "id": "administration-vistar-adhikari-education-pdf",
        "file": "Vistar_Adhikari_(Education).pdf",
        "bytes": 72103
      }
    ]
  },
  {
    "id": "fire",
    "folder": "Fire",
    "files": [
      {
        "id": "fire-dy-fire-officer-pdf",
        "file": "Dy_Fire_Officer.pdf",
        "bytes": 76210
      },
      {
        "id": "fire-fireman-pdf",
        "file": "Fireman.pdf",
        "bytes": 85583
      },
      {
        "id": "fire-leading-fireman-pdf",
        "file": "Leading_Fireman.pdf",
        "bytes": 167669
      }
    ]
  },
  {
    "id": "health",
    "folder": "Health",
    "files": [
      {
        "id": "health-accountatnt-cum-clerk-pdf",
        "file": "Accountatnt_cum_Clerk.pdf",
        "bytes": 64657
      },
      {
        "id": "health-anm-pdf",
        "file": "ANM.pdf",
        "bytes": 427212
      },
      {
        "id": "health-asst-metron-pdf",
        "file": "Asst__Metron.pdf",
        "bytes": 62136
      },
      {
        "id": "health-asst-health-officer-pdf",
        "file": "Asst_Health_Officer.pdf",
        "bytes": 62377
      },
      {
        "id": "health-chief-lab-technician-pdf",
        "file": "Chief_Lab_Technician.pdf",
        "bytes": 64717
      },
      {
        "id": "health-chief-pharmacy-officer-pdf",
        "file": "Chief_Pharmacy_Officer.pdf",
        "bytes": 61863
      },
      {
        "id": "health-darkroom-asst-pdf",
        "file": "Darkroom_Asst_.pdf",
        "bytes": 63129
      },
      {
        "id": "health-food-safety-officer-pdf",
        "file": "Food_Safety_Officer.pdf",
        "bytes": 62677
      },
      {
        "id": "health-health-officer-pdf",
        "file": "Health_Officer.pdf",
        "bytes": 124013
      },
      {
        "id": "health-health-supervisor-pdf",
        "file": "Health_Supervisor.pdf",
        "bytes": 82454
      },
      {
        "id": "health-lab-technician-pdf",
        "file": "Lab_Technician.pdf",
        "bytes": 80416
      },
      {
        "id": "health-laboratory-asst-pdf",
        "file": "Laboratory_Asst_.pdf",
        "bytes": 65036
      },
      {
        "id": "health-mpw-sfw-pdf",
        "file": "MPW_SFW.pdf",
        "bytes": 92129
      },
      {
        "id": "health-pharmacy-officer-pdf",
        "file": "Pharmacy_Officer.pdf",
        "bytes": 139301
      },
      {
        "id": "health-sister-incharge-pdf",
        "file": "Sister_Incharge.pdf",
        "bytes": 133258
      },
      {
        "id": "health-staff-nurse-gnm-pdf",
        "file": "Staff_Nurse_(GNM).pdf",
        "bytes": 187134
      },
      {
        "id": "health-statistical-officer1-pdf",
        "file": "Statistical_Officer1.pdf",
        "bytes": 64512
      },
      {
        "id": "health-x-ray-technician-pdf",
        "file": "X-Ray_Technician.pdf",
        "bytes": 64779
      }
    ]
  },
  {
    "id": "technical",
    "folder": "Technical",
    "files": [
      {
        "id": "technical-assistant-town-planner-pdf",
        "file": "Assistant_Town_Planner.pdf",
        "bytes": 57830
      },
      {
        "id": "technical-asst-coach-pdf",
        "file": "Asst_Coach.pdf",
        "bytes": 56329
      },
      {
        "id": "technical-asst-engineer-civil-pdf",
        "file": "Asst_Engineer_(Civil).pdf",
        "bytes": 122856
      },
      {
        "id": "technical-asst-engineer-electricity-pdf",
        "file": "Asst_Engineer_(Electricity).pdf",
        "bytes": 72075
      },
      {
        "id": "technical-civil-engineering-assistant-pdf",
        "file": "Civil_Engineering_Assistant.pdf",
        "bytes": 595660
      },
      {
        "id": "technical-dy-engineer-civil-pdf",
        "file": "Dy__Engineer_(Civil).pdf",
        "bytes": 55856
      },
      {
        "id": "technical-dy-engineer-electricity-pdf",
        "file": "Dy__Engineer_(Electricity).pdf",
        "bytes": 62036
      },
      {
        "id": "technical-dy-engineer-mechanical-pdf",
        "file": "Dy__Engineer_(Mechanical).pdf",
        "bytes": 55920
      },
      {
        "id": "technical-electrical-supervisor-pdf",
        "file": "Electrical_Supervisor.pdf",
        "bytes": 108839
      },
      {
        "id": "technical-executive-engineer-civil-pdf",
        "file": "Executive_Engineer_(Civil).pdf",
        "bytes": 96025
      },
      {
        "id": "technical-executive-engineer-mechanical-pdf",
        "file": "Executive_Engineer_(Mechanical).pdf",
        "bytes": 65287
      },
      {
        "id": "technical-jr-engineer-civil-pdf",
        "file": "Jr__Engineer_(Civil).pdf",
        "bytes": 328721
      },
      {
        "id": "technical-jr-engineer-mechanical-pdf",
        "file": "Jr__Engineer_(Mechanical).pdf",
        "bytes": 108767
      },
      {
        "id": "technical-jr-engineer-electricity-pdf",
        "file": "Jr_Engineer_(Electricity).pdf",
        "bytes": 92721
      },
      {
        "id": "technical-mechanic-pdf",
        "file": "Mechanic.pdf",
        "bytes": 73704
      },
      {
        "id": "technical-plant-operator-pdf",
        "file": "Plant_Operator.pdf",
        "bytes": 69653
      },
      {
        "id": "technical-plumber-fitter-pdf",
        "file": "Plumber-Fitter.pdf",
        "bytes": 107403
      },
      {
        "id": "technical-tracer-pdf",
        "file": "Tracer.pdf",
        "bytes": 113735
      }
    ]
  },
  {
    "id": "zoo",
    "folder": "Zoo",
    "files": [
      {
        "id": "zoo-animal-husbandry-devp-officer-pdf",
        "file": "Animal_Husbandry_Devp_Officer.pdf",
        "bytes": 58761
      },
      {
        "id": "zoo-asst-animal-husbandry-devp-officer-pdf",
        "file": "Asst_Animal_Husbandry_Devp_Officer.pdf",
        "bytes": 72368
      },
      {
        "id": "zoo-livestock-supervisor-pdf",
        "file": "Livestock_Supervisor.pdf",
        "bytes": 75073
      }
    ]
  }
];

export type AdministrationEstablishmentEntry = AdministrationEstablishmentCategory & {
  folderSegments: string[];
};

/** Every folder in Administration and Establishment Department, including the existing General Administration Documents list. */
export const administrationEstablishmentEntries: AdministrationEstablishmentEntry[] = [
  ...administrationEstablishmentCategories.map((category) => ({
    ...category,
    folderSegments: [...ADMINISTRATION_ESTABLISHMENT_ROOT, category.folder],
  })),
  {
    id: "general-administration-documents",
    folder: "General Administration Documents",
    files: generalAdministrationDocuments,
    folderSegments: [...GENERAL_ADMINISTRATION_DOCUMENTS_FOLDER],
  },
].sort((a, b) => a.folder.localeCompare(b.folder, undefined, { sensitivity: "base" }));

export function administrationEstablishmentCategory(id: string | undefined) {
  return administrationEstablishmentEntries.find((category) => category.id === id);
}
