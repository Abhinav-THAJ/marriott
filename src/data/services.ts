export interface ClinicalService {
  id: string;
  slug: string;
  title: string;
  category: "Clinical Services" | "Emergency & Critical" | "Therapy & Support";
  summary: string;
  description: string;
  availability: string;
  location: string;
  keyFeatures: string[];
  patientPreparation: string;
  contactNumber: string;
  iconName: string;
}

export const servicesData: ClinicalService[] = [
  {
    id: "srv-opd",
    slug: "outpatient-services",
    title: "Outpatient Services (OPD)",
    category: "Clinical Services",
    summary: "Over 60 daily specialist clinics across multi-tier towers with digital token queuing and minimal wait times.",
    description: "Our outpatient department provides comprehensive consultation suites across every medical and surgical speciality. Designed for patient comfort, each clinic is supported by trained clinical assistants, computerized electronic health records, and adjacent diagnostic sample collection booths.",
    availability: "Monday to Saturday: 08:30 AM - 07:00 PM (Emergency 24/7)",
    location: "OPD Complex, Towers A & B (Floors 1, 2 & 3)",
    keyFeatures: [
      "Comfortable air-conditioned waiting lounges with real-time digital queue boards",
      "Seamless integration with hospital pharmacy and central laboratories",
      "Express registration kiosks for pre-booked appointments",
      "Wheelchair assistance and patient escorts available upon arrival"
    ],
    patientPreparation: "Please arrive 15 minutes prior to your scheduled time. Bring government photo ID, previous medical prescriptions, and insurance cards.",
    contactNumber: "+91 (484) 2800-000",
    iconName: "CalendarCheck"
  },
  {
    id: "srv-ipd",
    slug: "inpatient-services",
    title: "Inpatient Care & Hospitalization",
    category: "Clinical Services",
    summary: "Compassionate round-the-clock nursing, multi-tiered room choices, and dedicated medical officer supervision.",
    description: "Inpatient admission at Marriott Hospital prioritizes clinical recovery and family comfort. Each inpatient floor is staffed by clinical nurse managers, resident medical officers, clinical pharmacologists, and dedicated room-service dietitians.",
    availability: "24 Hours / 365 Days",
    location: "Inpatient Towers, Floors 4 to 9",
    keyFeatures: [
      "1:3 to 1:5 nurse-to-patient ratio on general medical floors",
      "Nurse aid call system beside every patient bed with instant nursing station alerts",
      "In-room entertainment, Wi-Fi connectivity, and comfortable attendant couch",
      "Daily multi-disciplinary consultant rounds and transparent medical updates"
    ],
    patientPreparation: "Pack comfortable personal clothing, toiletries, and ongoing home medications in their original packaging.",
    contactNumber: "+91 (484) 2800-111",
    iconName: "BedDouble"
  },
  {
    id: "srv-er",
    slug: "emergency-services",
    title: "24/7 Emergency & Level-1 Trauma",
    category: "Emergency & Critical",
    summary: "Immediate medical triage, advanced cardiac resuscitation, polytrauma resuscitation, and dedicated Code Stroke pathways.",
    description: "Our Emergency Medicine department is staffed 24 hours a day by certified emergency physicians, trauma surgeons, and acute care nurses. Equipped with direct ambulance ramps, high-speed triage, crash carts, and adjacent CT/X-ray suites.",
    availability: "24 Hours / 7 Days a Week",
    location: "Ground Floor, Dedicated Emergency Wing (East Gate)",
    keyFeatures: [
      "Immediate triage by certified Emergency Care Specialists within 2 minutes",
      "Dedicated Code STEMI (Heart Attack) and Code Stroke acute rescue teams",
      "Minor OT for emergency suturing, wound debridement, and fracture splinting",
      "Fleet of GPS-enabled Advanced Cardiac Life Support (ACLS) Ambulances"
    ],
    patientPreparation: "No appointment required. Immediate presentation is critical for chest pain, sudden weakness, breathing difficulty, or severe injuries.",
    contactNumber: "+91 (484) 2800-911",
    iconName: "Ambulance"
  },
  {
    id: "srv-diag",
    slug: "diagnostic-services",
    title: "Comprehensive Diagnostic Services",
    category: "Clinical Services",
    summary: "Precision radio-diagnostics, automated pathology, and point-of-care testing delivering rapid clinical answers.",
    description: "Accredited diagnostic laboratories and advanced radiology scanners provide accurate, reproducible diagnostic insights to clinicians, ensuring swift therapy planning.",
    availability: "24/7 for Inpatient & Emergency; OPD: 07:00 AM - 08:00 PM",
    location: "Diagnostic Block, Ground & Lower Ground Floors",
    keyFeatures: [
      "Integrated PACS system enabling instant online doctor view of imaging scans",
      "Automated SMS alerts when lab results are verified and ready for download",
      "Home sample collection network across city limits",
      "Stringent internal and external quality assurance controls (EQAS)"
    ],
    patientPreparation: "Fasting requirements vary per investigation. Please verify guidelines when booking.",
    contactNumber: "+91 (484) 2800-222",
    iconName: "ScanLine"
  },
  {
    id: "srv-lab",
    slug: "laboratory-services",
    title: "NABL-Accredited Central Pathology",
    category: "Clinical Services",
    summary: "High-throughput biochemistry, hematology, clinical microbiology, and molecular pathology.",
    description: "Equipped with state-of-the-art robotic analytical tracks, barcoded sample accessioning, and continuous temperature-controlled storage.",
    availability: "24 Hours a Day",
    location: "Level 1, Laboratory Pavilion",
    keyFeatures: [
      "Barcoded zero-error specimen handling",
      "Molecular PCR testing for respiratory and infectious pathogens",
      "Routine tests reported within 90 minutes of sample receipt",
      "Digital pathology consultation for complex histopathology"
    ],
    patientPreparation: "Follow test-specific instructions regarding fasting or medication withholding.",
    contactNumber: "+91 (484) 2800-230",
    iconName: "TestTube"
  },
  {
    id: "srv-rad",
    slug: "imaging-radiology",
    title: "Imaging & Radiology",
    category: "Clinical Services",
    summary: "3T Silent MRI, 128-Slice Low Dose CT, Digital Mammography, and 4D Ultrasonography.",
    description: "Our Department of Radio-Diagnosis delivers superior anatomical clarity with lower radiation exposure, interpreted by subspecialty fellowship-trained radiologists.",
    availability: "Emergency: 24/7; Elective Scans: 08:00 AM - 08:00 PM",
    location: "Radiology Centre, Ground Floor",
    keyFeatures: [
      "Wide-bore 3T MRI reducing claustrophobia and acoustic noise by 70%",
      "Low-radiation paediatric and cardiac CT scanning protocols",
      "Ultrasound-guided diagnostic biopsies and therapeutic aspirates",
      "High-resolution digital fluoroscopy for dynamic gastrointestinal studies"
    ],
    patientPreparation: "Remove all metallic objects, jewelry, and watches. Inform staff if you have cardiac pacemakers or metallic implants.",
    contactNumber: "+91 (484) 2800-240",
    iconName: "Scan"
  },
  {
    id: "srv-surg",
    slug: "surgical-services",
    title: "Modular Surgical Theatres & Day Care",
    category: "Clinical Services",
    summary: "Laminar airflow operation theatres, robotic surgical consoles, and short-stay day care surgery.",
    description: "A surgical complex comprising 10 ultra-clean modular theatres with HEPA filtration, specialized anaesthetic workstations, and dedicated surgical intensive recovery bays.",
    availability: "24/7 Emergency Surgeries; Elective: Mon-Sat 08:00 AM - 06:00 PM",
    location: "Surgical Pavilion, Level 3",
    keyFeatures: [
      "Ultra-clean positive pressure air exchanges (>25 air cycles/hour)",
      "Robotic and 4K laparoscopic imaging systems",
      "Dedicated Day Care Surgery unit for same-day discharge procedures",
      "Post-Anaesthesia Care Unit (PACU) with 1:1 specialist nursing monitoring"
    ],
    patientPreparation: "Follow Pre-Anaesthetic Checkup (PAC) guidelines and fasting instructions strictly.",
    contactNumber: "+91 (484) 2800-300",
    iconName: "Scissors"
  },
  {
    id: "srv-icu",
    slug: "critical-care",
    title: "Intensive & Critical Care Units (ICU)",
    category: "Emergency & Critical",
    summary: "Multi-disciplinary Medical, Surgical, Cardiac, Neuro, and Neonatal ICUs with 1:1 nursing.",
    description: "Specialized critical care environments staffed 24/7 by European and American Board-certified intensivists, providing advanced organ support, mechanical ventilation, and continuous haemodynamic surveillance.",
    availability: "24 Hours / 365 Days",
    location: "Critical Care Complex, Level 2",
    keyFeatures: [
      "1:1 intensive care nurse-to-patient ratio",
      "Invasive haemodynamic, intracranial pressure, and continuous EEG monitoring",
      "Bedside continuous renal replacement therapy (CRRT) and ECMO readiness",
      "Dedicated counseling room for transparent daily family updates"
    ],
    patientPreparation: "Visitation is strictly restricted to designated hours to minimize cross-infection risks.",
    contactNumber: "+91 (484) 2800-400",
    iconName: "HeartPulse"
  },
  {
    id: "srv-rehab",
    slug: "rehabilitation",
    title: "Comprehensive Physical Rehabilitation",
    category: "Therapy & Support",
    summary: "Neuro-rehabilitation, cardiac recovery, sports injury therapy, and occupational rehabilitation.",
    description: "Our rehabilitation institute assists patients recovering from stroke, major joint replacement, spinal trauma, and prolonged ICU admissions to regain independence and function.",
    availability: "Monday to Saturday: 08:00 AM - 06:00 PM",
    location: "Rehabilitation Centre, Level 1 (Tower B)",
    keyFeatures: [
      "Robotic gait training devices and body-weight supported treadmills",
      "Occupational therapy suite with simulated activities of daily living (ADL)",
      "Speech-Language Pathology and swallowing therapy for stroke recovery",
      "Tailored home exercise programs and caregiver training"
    ],
    patientPreparation: "Wear comfortable athletic clothing and footwear suitable for active movement.",
    contactNumber: "+91 (484) 2800-500",
    iconName: "Accessibility"
  },
  {
    id: "srv-physio",
    slug: "physiotherapy",
    title: "Physiotherapy & Sports Medicine",
    category: "Therapy & Support",
    summary: "Electrotherapy, manual mobilization, posture correction, and targeted musculoskeletal rehab.",
    description: "Certified physiotherapists employ advanced therapeutic modalities including laser therapy, ultrasound, dry needling, and therapeutic exercise regimes to alleviate pain and restore mobility.",
    availability: "Monday to Saturday: 08:00 AM - 06:30 PM",
    location: "Rehabilitation Wing, Level 1",
    keyFeatures: [
      "High-intensity Class-IV laser therapy for deep tissue inflammation",
      "Targeted sports injury assessment and biomechanical correction",
      "Post-operative orthopaedic protocolized joint mobilization",
      "Antenatal and postnatal pelvic floor muscle conditioning"
    ],
    patientPreparation: "Bring all previous orthopaedic records and recent X-ray/MRI imaging films.",
    contactNumber: "+91 (484) 2800-510",
    iconName: "Activity"
  }
];

export const services = servicesData;
