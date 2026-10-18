export interface HospitalNews {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Clinical Milestone" | "Infrastructure" | "Academics" | "Community Health";
  summary: string;
  content: string[];
  imageUrl: string;
}

export interface HospitalEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Public Health Camp" | "Webinar" | "CME Workshop" | "Awareness Walk";
  summary: string;
  description: string;
  registrationOpen: boolean;
}

export const newsData: HospitalNews[] = [
  {
    id: "news-1",
    slug: "marriott-hospital-launches-next-gen-robotic-surgery-suite",
    title: "Marriott Hospital Commissions Advanced Robotic Surgery Suite for Precision Joint Arthroplasty",
    date: "October 05, 2026",
    category: "Infrastructure",
    summary: "The hospital expands its surgical wing with state-of-the-art robotic assistance, reducing tissue trauma and patient recovery times.",
    content: [
      "Marriott Hospital has officially inaugurated its next-generation robotic surgical suite within the main surgical pavilion. The robotic system provides sub-millimeter anatomical guidance to orthopaedic and urological surgeons during complex reconstructive surgeries.",
      "The system utilizes pre-operative 3D CT modeling to create a patient-specific surgical blueprint, allowing custom implant placement with minimal bone loss. Early clinical trials indicate shorter hospital stays and faster return to function for joint replacement patients.",
      "Patients scheduled for joint replacements can now consult with our orthopaedic faculty to explore robotic surgical candidacy."
    ],
    imageUrl: "/images/departments/rehabilitation.jpg"
  },
  {
    id: "news-2",
    slug: "cardiac-institute-achieves-door-to-balloon-milestone",
    title: "Marriott Heart Institute Achieves Record 48-Minute Average Door-to-Balloon Emergency Cardiac Time",
    date: "September 18, 2026",
    category: "Clinical Milestone",
    summary: "The 24/7 Code STEMI emergency cardiac team surpasses global quality benchmarks for emergency angioplasties.",
    content: [
      "In a clinical audit reviewing emergency interventions over the past quarter, the Marriott Heart Institute achieved an average door-to-balloon time of 48 minutes for acute ST-Elevation Myocardial Infarction (STEMI) cases.",
      "International healthcare guidelines recommend revascularizing blocked coronary arteries within 90 minutes of hospital arrival. The integration of pre-hospital ECG transmission from ambulances to our catheterization laboratory played a pivotal role in this life-saving achievement.",
      "The hospital maintains continuous 24/7 primary PCI readiness with on-site interventional cardiologists and dedicated cardiac catheterization teams."
    ],
    imageUrl: "/images/departments/cardiology.jpg"
  },
  {
    id: "news-3",
    slug: "national-accreditation-board-re-certifies-pathology-lab",
    title: "Central Diagnostic Laboratory Awarded NABL Quality Re-Accreditation with Commendation",
    date: "August 22, 2026",
    category: "Clinical Milestone",
    summary: "Rigorous external technical audits affirm highest standards of diagnostic accuracy, calibration, and zero-defect quality control.",
    content: [
      "The Department of Pathology & Laboratory Medicine at Marriott Hospital has received formal re-accreditation following an unannounced audit by the National Accreditation Board for Testing and Calibration Laboratories (NABL).",
      "The assessment reviewed technical competency across biochemistry, haematology, clinical microbiology, and molecular genetics, recognizing the lab's automated barcoded specimen track and stringent internal quality controls.",
      "All outpatient and inpatient diagnostic investigations continue to adhere to strict ISO 15189 medical laboratory standards."
    ],
    imageUrl: "/images/facilities/diagnostic-imaging.jpg"
  }
];

export const eventsData: HospitalEvent[] = [
  {
    id: "evt-1",
    slug: "world-heart-day-free-cardiac-screening-camp",
    title: "World Heart Day: Free Cardiac Screening & Risk Assessment Camp",
    date: "October 24, 2026",
    time: "08:00 AM - 02:00 PM",
    location: "Main Hospital Auditorium, Ground Floor",
    category: "Public Health Camp",
    summary: "Complimentary blood sugar, blood pressure, ECG, and cardiologist consultations for adults aged 40 and above.",
    description: "In commemoration of World Heart Day, Marriott Hospital invites community members to a free preventive cardiac health camp. Participants will receive free BP and blood glucose testing, resting ECG, and personalized lifestyle counseling with our cardiology team. Advance registration is recommended due to limited slots.",
    registrationOpen: true
  },
  {
    id: "evt-2",
    slug: "stroke-awareness-and-rapid-response-webinar",
    title: "Recognizing Stroke: Signs, Golden Hour Protocols & Prevention Webinar",
    date: "November 05, 2026",
    time: "05:00 PM - 06:30 PM",
    location: "Live Digital Webinar (Zoom / Hospital Portal)",
    category: "Webinar",
    summary: "Interactive virtual medical forum led by Dr. Priya Menon explaining the BE-FAST stroke recognition mnemonic.",
    description: "Join our Chief of Neurosciences for an informative community webinar on identifying sudden stroke symptoms, transient ischemic attacks (TIAs), and why immediate hospital transfer can prevent permanent paralysis. Includes live Q&A session.",
    registrationOpen: true
  },
  {
    id: "evt-3",
    slug: "annual-paediatric-immunization-and-wellness-fair",
    title: "Community Child Health & Immunization Awareness Drive",
    date: "November 14, 2026",
    time: "09:00 AM - 03:00 PM",
    location: "Paediatric Wing & Courtyard Plaza",
    category: "Public Health Camp",
    summary: "Free growth and developmental milestones assessment, nutritional advice, and immunization schedule audits.",
    description: "A family-friendly health fair featuring interactive pediatric wellness stations, nutrition workshops for young mothers, and developmental screening by senior child health specialists.",
    registrationOpen: true
  }
];
