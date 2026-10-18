export interface Doctor {
  id: string;
  slug: string;
  name: string;
  designation: string;
  department: string;
  specialitySlug: string;
  qualifications: string;
  experienceYears: number;
  languages: string[];
  bio: string;
  clinicalInterests: string[];
  education: string[];
  opdSchedule: {
    days: string;
    hours: string;
    room: string;
  }[];
  imageUrl: string;
  isAvailableForOnlineBooking: boolean;
}

export const doctorsData: Doctor[] = [
  {
    id: "doc-1",
    slug: "dr-arun-nair",
    name: "Dr. Arun Nair",
    designation: "Senior Consultant & Director of Cardiac Sciences",
    department: "Cardiology & Interventional Cardiology",
    specialitySlug: "cardiology",
    qualifications: "MBBS, MD (Gen Med), DM (Cardiology), FACC (USA)",
    experienceYears: 22,
    languages: ["English", "Malayalam", "Hindi"],
    bio: "Dr. Arun Nair is a pioneer in complex coronary interventions, structural heart diseases, and transcatheter aortic valve replacements (TAVR). Having led over 6,500 successful interventional procedures, he champions evidence-based preventive cardiology and advanced emergency cardiac protocols.",
    clinicalInterests: [
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "Complex Bifurcation & CTO Angioplasties",
      "Heart Failure & Cardiac Resynchronization Therapy (CRT)",
      "Preventive & Nuclear Cardiology"
    ],
    education: [
      "MBBS - Government Medical College, Trivandrum",
      "MD (Internal Medicine) - AIIMS, New Delhi",
      "DM (Cardiology) - Christian Medical College (CMC), Vellore",
      "Fellowship in Interventional Cardiology - Cleveland Clinic, USA"
    ],
    opdSchedule: [
      { days: "Mon, Wed, Fri", hours: "09:00 AM - 01:00 PM", room: "OPD Suite 204 (Tower A)" },
      { days: "Tue, Thu", hours: "02:00 PM - 05:00 PM", room: "OPD Suite 204 (Tower A)" }
    ],
    imageUrl: "/images/doctors/doctor-consultation.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-2",
    slug: "dr-priya-menon",
    name: "Dr. Priya Menon",
    designation: "Chief Neurosurgeon & Head of Neurosciences",
    department: "Neurology & Neurosurgery",
    specialitySlug: "neurology",
    qualifications: "MBBS, MS (Gen Surg), MCh (Neurosurgery), FINR (Zurich)",
    experienceYears: 19,
    languages: ["English", "Malayalam", "Tamil", "Hindi"],
    bio: "Dr. Priya Menon is an acclaimed neurosurgeon specializing in minimally invasive brain surgery, neuro-oncology, and endoscopic skull base procedures. She established Marriott Hospital's 24/7 Acute Comprehensive Stroke Care pathway.",
    clinicalInterests: [
      "Minimally Invasive Brain Tumour Excision",
      "Endoscopic Spine & Skull Base Surgery",
      "Acute Ischemic Stroke Mechanical Thrombectomy",
      "Functional Neurosurgery & Deep Brain Stimulation (DBS)"
    ],
    education: [
      "MBBS - Stanley Medical College, Chennai",
      "MS (General Surgery) - PGIMER, Chandigarh",
      "MCh (Neurosurgery) - NIMHANS, Bengaluru",
      "Fellowship in Interventional Neuroradiology - University Hospital Zurich, Switzerland"
    ],
    opdSchedule: [
      { days: "Mon, Thu, Sat", hours: "10:00 AM - 02:00 PM", room: "Neuro Clinic 312 (Tower B)" },
      { days: "Wed", hours: "02:00 PM - 06:00 PM", room: "Neuro Clinic 312 (Tower B)" }
    ],
    imageUrl: "/images/doctors/medical-team.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-3",
    slug: "dr-rajesh-sharma",
    name: "Dr. Rajesh Sharma",
    designation: "Senior Consultant Orthopaedic & Joint Replacement Surgeon",
    department: "Orthopaedics & Joint Replacement",
    specialitySlug: "orthopaedics",
    qualifications: "MBBS, MS (Ortho), DNB (Ortho), FRCS (Tr & Orth - UK)",
    experienceYears: 24,
    languages: ["English", "Hindi", "Malayalam"],
    bio: "Dr. Rajesh Sharma brings extensive international expertise in computer-navigated and robotic knee and hip joint arthroplasties. He has performed more than 4,200 joint replacements with rapid recovery protocols.",
    clinicalInterests: [
      "Robotic Total Knee & Hip Replacement",
      "Complex Revision Joint Arthroplasty",
      "Arthroscopic Knee Ligament Reconstruction (ACL/PCL)",
      "Sports Injury Management & Cartilage Restoration"
    ],
    education: [
      "MBBS - King George's Medical University, Lucknow",
      "MS (Orthopaedics) - AIIMS, New Delhi",
      "FRCS (Trauma & Orthopaedics) - Royal College of Surgeons, Edinburgh",
      "Arthroplasty Fellowship - Wrightington Hospital, UK"
    ],
    opdSchedule: [
      { days: "Mon, Tue, Thu", hours: "09:30 AM - 01:30 PM", room: "Ortho Suite 108 (Tower A)" },
      { days: "Fri, Sat", hours: "02:00 PM - 05:30 PM", room: "Ortho Suite 108 (Tower A)" }
    ],
    imageUrl: "/images/departments/rehabilitation.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-4",
    slug: "dr-anita-deshmukh",
    name: "Dr. Anita Deshmukh",
    designation: "Director of Obstetrics, Gynaecology & Fetal Medicine",
    department: "Obstetrics & Gynaecology",
    specialitySlug: "obstetrics-gynaecology",
    qualifications: "MBBS, MD (OBGYN), DGO, MRCOG (London), FICOG",
    experienceYears: 21,
    languages: ["English", "Hindi", "Marathi", "Malayalam"],
    bio: "Dr. Anita Deshmukh is a prominent specialist in high-risk pregnancies, fetal diagnosis, and advanced laparoscopic gynaecological surgery. Her holistic maternal-fetal care unit emphasizes natural birthing and comprehensive prenatal screening.",
    clinicalInterests: [
      "High-Risk Pregnancy & Recurrent Pregnancy Loss",
      "Advanced 3D/4D Fetal Ultrasound & Targeted Scans",
      "Laparoscopic Myomectomy & Hysterectomy",
      "Adolescent Gynaecology & Menopausal Care"
    ],
    education: [
      "MBBS - Seth GS Medical College & KEM Hospital, Mumbai",
      "MD (Obstetrics & Gynaecology) - Mumbai University",
      "MRCOG - Royal College of Obstetricians and Gynaecologists, London",
      "Fellowship in Fetal Medicine - Kings College Hospital, UK"
    ],
    opdSchedule: [
      { days: "Mon to Fri", hours: "09:00 AM - 01:00 PM", room: "Mother & Child Wing 402" },
      { days: "Sat", hours: "10:00 AM - 01:00 PM", room: "Mother & Child Wing 402" }
    ],
    imageUrl: "/images/departments/paediatrics.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-5",
    slug: "dr-vikram-patel",
    name: "Dr. Vikram Patel",
    designation: "Head of Paediatrics & Neonatal Intensive Care",
    department: "Paediatrics & Neonatology",
    specialitySlug: "paediatrics",
    qualifications: "MBBS, MD (Paediatrics), Fellowship in Neonatology (Australia)",
    experienceYears: 18,
    languages: ["English", "Gujarati", "Hindi", "Malayalam"],
    bio: "Dr. Vikram Patel heads our Level-III Neonatal Intensive Care Unit (NICU), known for achieving exceptional survival outcomes for extremely preterm newborns. His clinical team provides family-centred developmental care.",
    clinicalInterests: [
      "Critical Care of Extremely Low Birth Weight (ELBW) Infants",
      "Pediatric Pulmonology & Childhood Asthma",
      "Developmental Assessment & Growth Disorders",
      "Pediatric Infectious Diseases & Immunization"
    ],
    education: [
      "MBBS - Baroda Medical College",
      "MD (Paediatrics) - B.J. Medical College, Ahmedabad",
      "Neonatal Fellowship - Royal Children's Hospital, Melbourne, Australia"
    ],
    opdSchedule: [
      { days: "Mon to Sat", hours: "09:00 AM - 01:00 PM", room: "Child Health Centre 215" },
      { days: "Tue, Thu", hours: "04:00 PM - 07:00 PM", room: "Child Health Centre 215" }
    ],
    imageUrl: "/images/departments/paediatrics.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-6",
    slug: "dr-suresh-reddy",
    name: "Dr. Suresh Reddy",
    designation: "Chief of Medical Gastroenterology & Hepatology",
    department: "Gastroenterology & Hepatobiliary Sciences",
    specialitySlug: "gastroenterology",
    qualifications: "MBBS, MD (Gen Med), DM (Gastroenterology), FACG",
    experienceYears: 20,
    languages: ["English", "Telugu", "Hindi", "Malayalam"],
    bio: "Dr. Suresh Reddy specializes in therapeutic endoscopy, ERCP, endoscopic ultrasound (EUS), and liver disease management. He manages Marriott Hospital's accredited GI Bleed and Liver ICU units.",
    clinicalInterests: [
      "Therapeutic ERCP & Endoscopic Ultrasound (EUS)",
      "Cirrhosis, Non-Alcoholic Fatty Liver (NAFLD) & Viral Hepatitis",
      "Inflammatory Bowel Disease (Crohn's & Ulcerative Colitis)",
      "Early GI Cancer Screening & Third Space Endoscopy"
    ],
    education: [
      "MBBS - Osmania Medical College, Hyderabad",
      "MD (Internal Medicine) - Nizam's Institute of Medical Sciences (NIMS)",
      "DM (Gastroenterology) - Christian Medical College (CMC), Vellore"
    ],
    opdSchedule: [
      { days: "Mon, Wed, Fri", hours: "09:30 AM - 01:30 PM", room: "Digestive Health OPD 118" },
      { days: "Thu", hours: "02:00 PM - 05:00 PM", room: "Digestive Health OPD 118" }
    ],
    imageUrl: "/images/doctors/doctor-consultation.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-7",
    slug: "dr-meera-krishnan",
    name: "Dr. Meera Krishnan",
    designation: "Lead Medical Oncologist & Stem Cell Specialist",
    department: "Medical Oncology & Haematology",
    specialitySlug: "oncology",
    qualifications: "MBBS, MD (Gen Med), DM (Medical Oncology), ESMO Certified",
    experienceYears: 17,
    languages: ["English", "Malayalam", "Tamil", "Hindi"],
    bio: "Dr. Meera Krishnan is a European Society for Medical Oncology (ESMO) certified oncologist committed to personalized molecular targeted therapy and immunotherapy. She chairs the multi-disciplinary hospital tumour board.",
    clinicalInterests: [
      "Precision Oncology & Next-Generation Sequencing (NGS) Guided Therapy",
      "Breast, Lung, and Gastrointestinal Malignancies",
      "Haematological Malignancies (Leukaemia, Lymphoma, Myeloma)",
      "Immunotherapy & Cancer Supportive Care"
    ],
    education: [
      "MBBS - Calicut Medical College",
      "MD (Internal Medicine) - Madras Medical College, Chennai",
      "DM (Medical Oncology) - Tata Memorial Centre, Mumbai"
    ],
    opdSchedule: [
      { days: "Mon, Tue, Thu, Fri", hours: "10:00 AM - 02:00 PM", room: "Cancer Institute 501" }
    ],
    imageUrl: "/images/doctors/medical-team.jpg",
    isAvailableForOnlineBooking: true,
  },
  {
    id: "doc-8",
    slug: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    designation: "Senior Consultant Pulmonologist & Sleep Medicine Specialist",
    department: "Pulmonology & Critical Care Medicine",
    specialitySlug: "pulmonology",
    qualifications: "MBBS, MD (Pulmonary Medicine), DNB, FCCP (USA)",
    experienceYears: 23,
    languages: ["English", "Hindi", "Malayalam"],
    bio: "Dr. Sanjay Gupta specializes in interventional pulmonology, rigid bronchoscopy, endobronchial ultrasound (EBUS), and comprehensive sleep-disordered breathing therapy.",
    clinicalInterests: [
      "Endobronchial Ultrasound (EBUS) & Cryobiopsy",
      "Severe Asthma, COPD & Interstitial Lung Diseases (ILD)",
      "Obstructive Sleep Apnea (OSA) & Comprehensive Sleep Studies",
      "Post-COVID Pulmonary Fibrosis Rehabilitation"
    ],
    education: [
      "MBBS - Maulana Azad Medical College (MAMC), New Delhi",
      "MD (Pulmonary Medicine) - Vallabhbhai Patel Chest Institute, Delhi",
      "Fellowship in Interventional Pulmonology - Thoraxklinik Heidelberg, Germany"
    ],
    opdSchedule: [
      { days: "Mon, Wed, Fri", hours: "09:00 AM - 01:00 PM", room: "Chest & Sleep Clinic 220" },
      { days: "Tue, Sat", hours: "02:00 PM - 05:00 PM", room: "Chest & Sleep Clinic 220" }
    ],
    imageUrl: "/images/facilities/diagnostic-imaging.jpg",
    isAvailableForOnlineBooking: true,
  }
];

export const doctors = doctorsData;
