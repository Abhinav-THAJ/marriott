export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Fellowship";
  experience: string;
  qualification: string;
  openings: number;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobPostings: JobPosting[] = [
  {
    id: "job-1",
    slug: "consultant-interventional-cardiologist",
    title: "Consultant Interventional Cardiologist",
    department: "Cardiology & Cath Lab",
    location: "Kochi, Kerala",
    employmentType: "Full-time",
    experience: "5+ years post DM / DNB",
    qualification: "DM / DNB Cardiology, Fellowship in Interventional Cardiology",
    openings: 1,
    overview: "Marriott Hospital invites applications from experienced Interventional Cardiologists to join our high-volume Heart Institute. The consultant will lead complex PCI, peripheral interventions, structural heart procedures, and contribute to our 24/7 Code STEMI on-call roster.",
    responsibilities: [
      "Perform diagnostic coronary angiographies and complex coronary interventions (rotational atherectomy, bifurcations, CTOs).",
      "Lead Code STEMI primary PCI emergency shifts in our state-of-the-art biplane Cath Lab.",
      "Conduct specialized OPD clinics and supervise inpatient coronary care unit (ICCU) rounds.",
      "Participate actively in clinical audit, mortality reviews, and academic clinical research."
    ],
    requirements: [
      "DM or DNB in Cardiology from an NMC-recognized institution.",
      "Valid registration with Kerala State Medical Council (or eligibility).",
      "Demonstrated experience in primary angioplasties and mechanical circulatory support.",
      "Commitment to patient-centric, evidence-based ethical clinical practice."
    ],
    benefits: [
      "Competitive compensation package commensurate with experience.",
      "Access to latest biplane cath lab and advanced intravascular imaging (IVUS / OCT).",
      "Conference travel allowance and medical indemnity insurance coverage.",
      "Subsidized healthcare coverage for immediate family."
    ]
  },
  {
    id: "job-2",
    slug: "senior-staff-nurse-critical-care-icu",
    title: "Senior Staff Nurse — Critical Care & Surgical ICU",
    department: "Nursing Services",
    location: "Kochi, Kerala",
    employmentType: "Full-time",
    experience: "3 - 7 years in accredited ICU / CCU",
    qualification: "B.Sc Nursing / Post Basic B.Sc Nursing / GNM",
    openings: 6,
    overview: "We are seeking skilled and compassionate Critical Care Nurses to provide vigilant, 1:1 patient care within our Medical and Surgical Intensive Care Units. You will monitor advanced haemodynamics, manage mechanical ventilators, and work closely with intensivist teams.",
    responsibilities: [
      "Deliver individualized nursing care according to NABH infection prevention and critical care protocols.",
      "Manage advanced infusion pumps, mechanical ventilators, dialysis circuits, and arterial lines.",
      "Administer critical IV medications accurately, monitor telemetry, and escalate clinical deteriorations immediately.",
      "Provide empathetic, reassuring communication to anxious families during designated visiting sessions."
    ],
    requirements: [
      "B.Sc Nursing or GNM with active Kerala Nursing Council registration.",
      "BLS and ACLS certification (AHA accredited).",
      "Minimum 3 years experience in a tertiary care multi-disciplinary ICU.",
      "Strong clinical assessment, documentation, and interpersonal skills."
    ],
    benefits: [
      "Industry-leading remuneration with ICU specialty allowance.",
      "Continuous professional development (CNE credits) and training workshops.",
      "Provident fund, ESI / Group health insurance, and duty meal allowance.",
      "Structured shift scheduling with balanced off-duty cycles."
    ]
  },
  {
    id: "job-3",
    slug: "radiological-technologist-mri-ct",
    title: "Radiological Technologist (3T MRI & 128-Slice CT)",
    department: "Imaging & Diagnostic Radiology",
    location: "Kochi, Kerala",
    employmentType: "Full-time",
    experience: "2 - 5 years in cross-sectional imaging",
    qualification: "B.Sc Medical Imaging Technology / Diploma in Radiography",
    openings: 2,
    overview: "Join our advanced diagnostic imaging division operating modern 3T MRI and multi-detector 128-slice CT platforms. Technologists are responsible for executing high-resolution imaging protocols while ensuring maximum patient comfort and radiation safety.",
    responsibilities: [
      "Operate Siemens / GE 3T MRI and CT scanners following established diagnostic protocols.",
      "Screen patients rigorously for MRI safety contraindications and implant compatibility.",
      "Administer IV contrast agents under radiologist supervision and monitor for adverse reactions.",
      "Maintain PACS integration, image archiving, and equipment calibration logs."
    ],
    requirements: [
      "Degree or Diploma in Radiography / Medical Imaging Technology from a recognized university.",
      "AERB certification and proven competency in contrast-enhanced CT / MRI studies.",
      "Good communication skills and gentle patient handling demeanour.",
      "Willingness to participate in rotational emergency shift rosters."
    ],
    benefits: [
      "Modern working environment with latest radiation shielding and safety controls.",
      "Comprehensive medical insurance coverage.",
      "Overtime compensation and shift allowances.",
      "Annual performance increments and career progression tracks."
    ]
  },
  {
    id: "job-4",
    slug: "patient-care-coordinator-international-helpdesk",
    title: "Patient Care Coordinator & Guest Relations Officer",
    department: "Patient Experience & International Services",
    location: "Kochi, Kerala",
    employmentType: "Full-time",
    experience: "2 - 4 years in hospital administration or guest relations",
    qualification: "Bachelor’s degree in Hospital Administration (BHA), Mass Comm, or Hospitality",
    openings: 3,
    overview: "Act as the primary welcoming liaison for outpatients, inpatient admissions, and overseas medical travelers. You will guide patients through OPD desks, billing counters, and ensure seamless patient-advocate interactions.",
    responsibilities: [
      "Welcome arriving patients, provide navigational assistance, and streamline registration queues.",
      "Assist international travelers with language interpretation, visa extension paperwork, and concierge requirements.",
      "Coordinate with billing, TPA insurance desks, and nursing stations to resolve patient queries promptly.",
      "Collect and document patient feedback, proactively mitigating delays and concerns."
    ],
    requirements: [
      "Degree in Hospital Administration, Healthcare Management, or Hospitality.",
      "Fluency in English and Malayalam; proficiency in Arabic or Hindi is a strong advantage.",
      "Warm, empathetic demeanor with exceptional problem-solving capacity under pressure.",
      "Familiarity with hospital information systems (HIS) and digital scheduling tools."
    ],
    benefits: [
      "Attractive monthly salary with quarterly performance incentives.",
      "Health insurance benefits and staff cafeteria subsidies.",
      "Opportunity to learn healthcare operations within an accredited hospital framework."
    ]
  }
];
