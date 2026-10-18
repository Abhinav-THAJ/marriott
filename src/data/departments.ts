export interface Department {
  id: string;
  slug: string;
  name: string;
  headOfDepartment: string;
  overview: string;
  description: string;
  coreServices: string[];
  keyEquipment: string[];
  location: string;
  contactExtension: string;
}

export const departmentsData: Department[] = [
  {
    id: "dept-emrg",
    slug: "emergency-trauma",
    name: "Emergency & Trauma Department",
    headOfDepartment: "Dr. Arun Nair (Chief Clinical Coordinator)",
    overview: "Level-1 emergency care facility operating round the clock for acute medical, surgical, and accidental trauma emergencies.",
    description: "The Department of Emergency Medicine at Marriott Hospital is designed for rapid patient stabilization and immediate diagnostic evaluation. Utilizing automated electronic triage, high-acuity resuscitation bays, and dedicated bedside ultrasound, our team responds to medical emergencies within seconds.",
    coreServices: [
      "Immediate Level-1 Trauma Resuscitation",
      "Acute Myocardial Infarction (Code STEMI) Management",
      "Acute Ischemic Stroke Thrombolysis (Code Stroke)",
      "Polytrauma Stabilization & Emergency Surgical Transfer",
      "Toxicology, Poisoning & Envenomation Care"
    ],
    keyEquipment: [
      "Advanced Crash Carts with Biphasic Defibrillators & Pacing",
      "Point-of-Care Ultrasound (POCUS) and ABG Analyzers",
      "Dedicated High-Resolution Emergency CT and Digital X-Ray",
      "Negative Pressure Isolation Room for Airborne Pathogens"
    ],
    location: "Ground Floor, East Wing (Direct Ambulance Portico)",
    contactExtension: "+91 (484) 2800-911"
  },
  {
    id: "dept-ot",
    slug: "operation-theatres",
    name: "Operation Theatres & Surgical Suites",
    headOfDepartment: "Dr. Rajesh Sharma (Director of Surgical Services)",
    overview: "10 ultra-modern modular surgical theatres equipped with laminar airflow, HEPA filtration, and robotic navigation.",
    description: "Our surgical theatre complex maintains stringent sterile conditions for neurosurgery, cardiac bypass, robotic joint replacements, organ transplants, and minimally invasive laparoscopy. Seamlessly linked to CSSD and surgical recovery units.",
    coreServices: [
      "Robotic and Computer-Navigated Arthroplasty",
      "Complex Minimally Invasive Laparoscopy & Endoscopy",
      "Open-Heart Cardiopulmonary Bypass Surgeries",
      "Micro-Neurosurgery & Stereotactic Procedures",
      "Day-Care Ambulatory Surgery"
    ],
    keyEquipment: [
      "Ultra-Clean Vertical Laminar Airflow Systems with HEPA Filters",
      "4K Ultra-HD Video Laparoscopy Towers",
      "Intraoperative High-Resolution C-Arm Fluoroscopy",
      "Advanced Anaesthesia Workstations with Agent Monitoring"
    ],
    location: "Level 3, Surgical Pavilion",
    contactExtension: "+91 (484) 2800-300"
  },
  {
    id: "dept-rad",
    slug: "diagnostic-imaging",
    name: "Department of Radio-Diagnosis & Imaging",
    headOfDepartment: "Dr. Sanjay Gupta (Clinical Diagnostic Liaison)",
    overview: "Comprehensive diagnostic and interventional radiology services utilizing state-of-the-art non-invasive imaging modalities.",
    description: "Operating with cutting-edge 3T MRI, 128-slice CT, and high-frequency ultrasound, our radiology department ensures rapid, high-fidelity anatomical diagnostics for adult and paediatric patients.",
    coreServices: [
      "3T High-Field Whole Body Magnetic Resonance Imaging (MRI)",
      "128-Slice Low-Dose Computed Tomography (CT) Angiography",
      "Digital Full-Field Mammography & Breast Tomosynthesis",
      "Colour Doppler Ultrasonography and Guided Biopsies",
      "High-Frequency Digital Radiography"
    ],
    keyEquipment: [
      "Siemens Magnetom 3T Silent MRI",
      "GE 128-Slice Low Radiation Dose CT Scanner",
      "Voluson E10 High-End 4D Ultrasound Systems",
      "Enterprise Picture Archiving & Communication System (PACS)"
    ],
    location: "Ground Floor, Diagnostic Block",
    contactExtension: "+91 (484) 2800-240"
  },
  {
    id: "dept-path",
    slug: "pathology-laboratory",
    name: "Department of Pathology & Laboratory Medicine",
    headOfDepartment: "Dr. Meera Krishnan (Onco-Pathology Lead)",
    overview: "NABL-accredited diagnostic laboratory offering comprehensive clinical biochemistry, hematology, microbiology, and molecular pathology.",
    description: "Our laboratory processes over 2,500 diagnostic parameters daily using barcoded specimen routing, automated robotic track analyzers, and rigorous inter-laboratory quality assurance programs.",
    coreServices: [
      "Routine & Specialized Clinical Biochemistry",
      "Automated Hematology, Coagulation & Flow Cytometry",
      "Bacteriology, Mycology & Automated Blood Culture",
      "Histopathology, Frozen Section & Immunohistochemistry (IHC)",
      "Real-Time PCR Molecular Infectious Disease Diagnostics"
    ],
    keyEquipment: [
      "Roche Cobas 8000 Automated Chemistry Track",
      "Sysmex XN-1000 High-Throughput Hematology Analyzer",
      "BACTEC Automated Blood Culture System",
      "Leica Cryostat for Instant Intraoperative Frozen Sections"
    ],
    location: "Level 1, Diagnostic Pavilion",
    contactExtension: "+91 (484) 2800-230"
  },
  {
    id: "dept-rehab",
    slug: "rehabilitation-physiotherapy",
    name: "Physical Medicine & Rehabilitation",
    headOfDepartment: "Senior Consultant Physiotherapist",
    overview: "Restoring physical function, mobility, and independence through evidence-based physical, occupational, and speech therapy.",
    description: "A state-of-the-art rehabilitation wing assisting inpatients and outpatients with stroke recovery, post-surgical joint rehabilitation, sports injuries, and neurological impairments.",
    coreServices: [
      "Post-Surgical Joint Replacement Rehabilitation",
      "Neuro-Rehabilitation following Stroke or Brain Injury",
      "Sports Injury Conditioning & Biomechanical Analysis",
      "Spinal Rehabilitation & Chronic Back Pain Management",
      "Pediatric Developmental Physiotherapy"
    ],
    keyEquipment: [
      "Body-Weight Supported Treadmill Gait Training System",
      "High-Intensity Class-IV Deep Tissue Laser",
      "Computerized Balance Master & Posture Assessment",
      "Therapeutic Ultrasound and Interferential Current Units"
    ],
    location: "Level 1, Tower B",
    contactExtension: "+91 (484) 2800-500"
  },
  {
    id: "dept-pharm",
    slug: "pharmacy-services",
    name: "Department of Pharmacy Services",
    headOfDepartment: "Chief Clinical Pharmacist",
    overview: "Safe, computerized dispensing of genuine medications, cold-chain biologics, and clinical pharmacy ward surveillance.",
    description: "Providing 24-hour pharmaceutical support across all hospital floors, outpatient counters, and emergency bays with electronic drug interaction checking.",
    coreServices: [
      "24/7 Outpatient & Emergency Medication Dispensing",
      "Unit-Dose Inpatient Medication Distribution",
      "Cold-Chain Biological and Vaccine Maintenance",
      "Clinical Pharmacist Ward Rounds & Drug Safety Audits",
      "Patient Medication Counseling and Discharge Education"
    ],
    keyEquipment: [
      "Computerized Barcode Verification Dispensing System",
      "Pharmaceutical-Grade Temperature Controlled Refrigerators",
      "Automated Laminar Flow Clean Air Hoods for Sterile Compounding"
    ],
    location: "Ground Floor Atrium & Emergency Wing",
    contactExtension: "+91 (484) 2800-250"
  }
];

export const departments = departmentsData;
