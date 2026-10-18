export interface Speciality {
  id: string;
  slug: string;
  name: string;
  category: "Centres of Excellence" | "Medical Specialities" | "Surgical Disciplines" | "Women & Child" | "Diagnostic & Support";
  iconName: string;
  heroTagline: string;
  overview: string;
  keyConditions: string[];
  diagnosticTechnologies: string[];
  treatmentModalities: string[];
  leadDoctorSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const specialitiesData: Speciality[] = [
  {
    id: "spec-cardio",
    slug: "cardiology",
    name: "Cardiology & Cardiac Sciences",
    category: "Centres of Excellence",
    iconName: "HeartPulse",
    heroTagline: "Advanced Comprehensive Cardiac Care, 24/7 Primary PCI & Electrophysiology",
    overview: "The Marriott Heart Institute is equipped with cutting-edge biplane catheterization laboratories, advanced 3D echocardiography, dedicated coronary intensive care units (CCU), and a 24/7 Code STEMI emergency response team for immediate acute myocardial infarction revascularization.",
    keyConditions: [
      "Coronary Artery Disease & Acute Myocardial Infarction",
      "Heart Failure & Cardiomyopathies",
      "Cardiac Arrhythmias & Atrial Fibrillation",
      "Valvular Heart Diseases (Aortic Stenosis, Mitral Regurgitation)",
      "Hypertensive Heart Disease & Peripheral Vascular Occlusion"
    ],
    diagnosticTechnologies: [
      "Digital Flat-Panel Cath Lab with IVUS & OCT",
      "3D Transesophageal Echocardiography (TEE)",
      "Continuous Holter Monitoring & Treadmill Stress Testing (TMT)",
      "Cardiac MRI and 128-Slice Coronary CT Angiography"
    ],
    treatmentModalities: [
      "Emergency Primary Angioplasty (Door-to-Balloon < 60 mins)",
      "Transcatheter Aortic Valve Replacement (TAVR / TAVI)",
      "Pacemaker, ICD, and Cardiac Resynchronization Therapy (CRT-D)",
      "Minimally Invasive Coronary Artery Bypass Grafting (CABG)"
    ],
    leadDoctorSlugs: ["dr-arun-nair"],
    faqs: [
      {
        question: "What is the door-to-balloon time for heart attack emergencies at Marriott Hospital?",
        answer: "Our 24/7 dedicated Code STEMI protocol achieves an average door-to-balloon time of under 55 minutes, significantly below the international benchmark of 90 minutes."
      },
      {
        question: "Can I get a comprehensive heart checkup without a prior prescription?",
        answer: "Yes, our Cardiac Wellness Screening Package is available daily from 7:30 AM without a prescription. Fasting of 10-12 hours is recommended."
      }
    ]
  },
  {
    id: "spec-neuro",
    slug: "neurology",
    name: "Neurology & Neurosurgery",
    category: "Centres of Excellence",
    iconName: "Activity",
    heroTagline: "Rapid-Response Stroke Protocols, Micro-Neurosurgery & Spine Excellence",
    overview: "Marriott Neurosciences combines interventional neuroradiology, neuro-intensive care, and advanced micro-neurosurgery. With a 24/7 Acute Stroke thrombolysis and mechanical thrombectomy unit, we deliver life-saving neuro-interventions within the golden hour.",
    keyConditions: [
      "Acute Ischemic & Haemorrhagic Stroke",
      "Brain Tumours & Skull Base Malignancies",
      "Epilepsy, Seizure Disorders & Refractory Tremors",
      "Parkinson's Disease & Movement Disorders",
      "Degenerative Spine Disorders, Disc Herniation & Sciatica"
    ],
    diagnosticTechnologies: [
      "3T High-Field Silent Neuro-MRI with Tractography & Spectroscopy",
      "Continuous Video EEG and Intraoperative Neuromonitoring",
      "Digital Subtraction Angiography (DSA) for Cerebral Vessels",
      "Neuro-Navigation System & High-Resolution Operating Microscope"
    ],
    treatmentModalities: [
      "Mechanical Thrombectomy for Acute Stroke",
      "Endoscopic & Microscopic Brain Tumour Resection",
      "Minimally Invasive Spine Decompression & Fusion",
      "Deep Brain Stimulation (DBS) for Parkinson's Disease"
    ],
    leadDoctorSlugs: ["dr-priya-menon"],
    faqs: [
      {
        question: "What is the golden hour window for acute stroke intervention?",
        answer: "Intravenous thrombolysis is most effective within 4.5 hours of symptom onset, and mechanical thrombectomy can be performed up to 24 hours in selected patients based on perfusion imaging."
      }
    ]
  },
  {
    id: "spec-ortho",
    slug: "orthopaedics",
    name: "Orthopaedics & Joint Replacement",
    category: "Centres of Excellence",
    iconName: "Bone",
    heroTagline: "Robotic Joint Replacements, Sports Medicine & Complex Trauma Reconstruction",
    overview: "The Department of Orthopaedics at Marriott Hospital provides comprehensive bone, joint, and spine reconstruction. Equipped with sub-millimeter robotic surgical navigation, our specialists facilitate faster postoperative mobility and reduced hospital stays.",
    keyConditions: [
      "Osteoarthritis of the Knee and Hip",
      "Sports Injuries: ACL, PCL, Meniscus, and Rotator Cuff Tears",
      "Complex Pelvic, Acetabular & Polytrauma Fractures",
      "Spinal Stenosis, Spondylolisthesis & Disc Herniations",
      "Paediatric Deformities and Clubfoot"
    ],
    diagnosticTechnologies: [
      "Low-Dose Digital Radiography & Dynamic Fluoroscopy",
      "High-Resolution Musculoskeletal Ultrasound",
      "Computer-Assisted Pre-Surgical 3D Joint Modeling"
    ],
    treatmentModalities: [
      "Robotic Total and Partial Knee Replacement",
      "Direct Anterior Approach Hip Arthroplasty",
      "Minimally Invasive Arthroscopic Ligament Repair",
      "Comprehensive Inpatient Physical Rehabilitation"
    ],
    leadDoctorSlugs: ["dr-rajesh-sharma"],
    faqs: [
      {
        question: "How soon can I walk after robotic knee replacement surgery?",
        answer: "Under our Enhanced Recovery After Surgery (ERAS) protocol, most patients begin assisted walking within 4 to 6 hours after surgery."
      }
    ]
  },
  {
    id: "spec-onco",
    slug: "oncology",
    name: "Comprehensive Oncology",
    category: "Centres of Excellence",
    iconName: "ShieldAlert",
    heroTagline: "Multidisciplinary Tumour Board, Targeted Immunotherapy & Surgical Precision",
    overview: "Our Comprehensive Cancer Centre integrates Medical Oncology, Surgical Oncology, Precision Radiation, and Haematology. Every oncology case is reviewed by a multi-disciplinary tumour board to tailor personalized, evidence-driven treatment protocols.",
    keyConditions: [
      "Breast, Gynaecological, and Ovarian Cancers",
      "Gastrointestinal, Colorectal, and Pancreatic Cancers",
      "Lung and Head & Neck Malignancies",
      "Leukaemias, Lymphomas, and Multiple Myeloma",
      "Prostate, Bladder, and Renal Cell Carcinomas"
    ],
    diagnosticTechnologies: [
      "PET-CT Imaging for Staging and Restaging",
      "Next-Generation Sequencing (NGS) Genomic Profiling",
      "Liquid Biopsy & High-Precision Flow Cytometry"
    ],
    treatmentModalities: [
      "Targeted Molecular Therapy and Immune Checkpoint Inhibitors",
      "Day-Care Chemotherapy with Chemo-Port Infusion Pumps",
      "Organ-Preserving Oncoplastic Surgery",
      "Comprehensive Palliative & Supportive Symptom Care"
    ],
    leadDoctorSlugs: ["dr-meera-krishnan"],
    faqs: [
      {
        question: "How does the Multidisciplinary Tumour Board work?",
        answer: "A collaborative panel of medical oncologists, surgical oncologists, radiation therapists, pathologists, and radiologists convenes weekly to formulate individual patient treatment strategies."
      }
    ]
  },
  {
    id: "spec-gastro",
    slug: "gastroenterology",
    name: "Gastroenterology & Hepatology",
    category: "Medical Specialities",
    iconName: "Stethoscope",
    heroTagline: "Therapeutic Endoscopy, Liver ICU & Advanced Digestive Care",
    overview: "Marriott Gastroenterology offers complete diagnostic and therapeutic endoscopy, ERCP, EUS, and intensive hepatology care for acute liver failure and chronic digestive disorders.",
    keyConditions: [
      "Acid Peptic Disease, GERD, and Peptic Ulcers",
      "Inflammatory Bowel Disease (Ulcerative Colitis & Crohn's)",
      "Cirrhosis, Non-Alcoholic Fatty Liver (NAFLD) & Hepatitis",
      "Gallstones, Bile Duct Obstruction & Chronic Pancreatitis",
      "Gastrointestinal Bleeding & Colorectal Polyps"
    ],
    diagnosticTechnologies: [
      "High-Definition Video Endoscopy and Colonoscopy with NBI",
      "Endoscopic Ultrasound (EUS) & Fine-Needle Biopsy",
      "High-Resolution Oesophageal & Anorectal Manometry",
      "FibroScan Non-Invasive Liver Stiffness Measurement"
    ],
    treatmentModalities: [
      "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
      "Endoscopic Mucosal Resection (EMR) for Early Tumours",
      "Emergency Endoscopic Band Ligation for Variceal Bleeds",
      "Biological Infusion Therapy for Inflammatory Bowel Disease"
    ],
    leadDoctorSlugs: ["dr-suresh-reddy"],
    faqs: [
      {
        question: "Is endoscopy done under sedation?",
        answer: "Yes, both upper GI endoscopy and colonoscopy are performed under light conscious sedation monitored by anaesthetists for a painless experience."
      }
    ]
  },
  {
    id: "spec-nephro",
    slug: "nephrology",
    name: "Nephrology & Renal Sciences",
    category: "Medical Specialities",
    iconName: "Droplets",
    heroTagline: "24/7 Haemodialysis, Glomerular Disease Care & Kidney Transplantation",
    overview: "Providing advanced management of acute kidney injury, chronic kidney disease, diabetic nephropathy, and round-the-clock haemodialysis with ultra-pure water filtration.",
    keyConditions: [
      "Chronic Kidney Disease (CKD Stages 1-5)",
      "Diabetic Nephropathy & Hypertensive Renal Disease",
      "Acute Kidney Injury (AKI) & Critical Care Nephrology",
      "Glomerulonephritis and Nephrotic Syndrome",
      "Polycystic Kidney Disease & Electrolyte Imbalances"
    ],
    diagnosticTechnologies: [
      "Ultrasound-Guided Real-Time Renal Biopsy",
      "24-Hour Urine Protein and Creatinine Clearance Profiling",
      "Doppler Evaluation of AV Fistulas and Renal Vessels"
    ],
    treatmentModalities: [
      "High-Flux Haemodialysis & Online Haemodiafiltration (HDF)",
      "Continuous Renal Replacement Therapy (CRRT) in ICUs",
      "Peritoneal Dialysis (CAPD/APD) Training and Management",
      "Vascular Access Creation (AV Fistula / Grafting)"
    ],
    leadDoctorSlugs: ["dr-arun-nair"],
    faqs: [
      {
        question: "Does Marriott Hospital offer emergency dialysis at night?",
        answer: "Yes, our dialysis unit operates 24/7 with on-call nephrologists and certified dialysis technicians for emergency and ICU patients."
      }
    ]
  },
  {
    id: "spec-uro",
    slug: "urology",
    name: "Urology & Andrology",
    category: "Surgical Disciplines",
    iconName: "Shield",
    heroTagline: "Laser Stone Surgery, Uro-Oncology & Reconstructive Urology",
    overview: "Advanced minimally invasive endourology, holmium laser enucleation of prostate (HoLEP), RIRS for renal stones, and reconstructive urology.",
    keyConditions: [
      "Kidney, Ureteric & Bladder Calculi (Stones)",
      "Benign Prostatic Hyperplasia (BPH / Enlarged Prostate)",
      "Urological Cancers (Prostate, Bladder, Kidney)",
      "Urinary Incontinence & Overactive Bladder",
      "Male Infertility and Erectile Dysfunction"
    ],
    diagnosticTechnologies: [
      "Flexible Video Ureterorenoscopy (F-URS)",
      "Urodynamic Testing System (UDS)",
      "Multi-Parametric MRI (mpMRI) for Prostate"
    ],
    treatmentModalities: [
      "Retrograde Intrarenal Surgery (RIRS) with Thulium/Holmium Laser",
      "Mini-PCNL (Percutaneous Nephrolithotomy)",
      "Transurethral Resection & Laser Enucleation of Prostate",
      "Laparoscopic Urological Reconstructions"
    ],
    leadDoctorSlugs: ["dr-rajesh-sharma"],
    faqs: [
      {
        question: "Is kidney stone removal possible without incisions?",
        answer: "Yes, through RIRS and laser lithotripsy, stones are powdered through natural urinary tracts with zero external incisions."
      }
    ]
  },
  {
    id: "spec-genmed",
    slug: "general-medicine",
    name: "Internal Medicine & General Health",
    category: "Medical Specialities",
    iconName: "Stethoscope",
    heroTagline: "Holistic Adult Medicine, Metabolic Management & Preventive Healthcare",
    overview: "The Department of Internal Medicine serves as the primary backbone of adult healthcare, specializing in chronic lifestyle disease management, fever investigations, and multidisciplinary medical consultations.",
    keyConditions: [
      "Type 1 & Type 2 Diabetes Mellitus and Metabolic Syndrome",
      "Essential Hypertension & Dyslipidaemia",
      "Tropical Fevers (Dengue, Malaria, Typhoid, Leptospirosis)",
      "Adult Infectious Diseases and Immunizations",
      "Geriatric Comprehensive Health Management"
    ],
    diagnosticTechnologies: [
      "Automated NABL-Accredited Biochemical Lab",
      "Ambulatory Blood Pressure Monitoring (ABPM)",
      "Continuous Glucose Monitoring Systems (CGMS)"
    ],
    treatmentModalities: [
      "Comprehensive Lifestyle & Pharmacological Protocols",
      "Inpatient Medical Stabilization & Isolation Facilities",
      "Personalized Preventative Health Evaluation"
    ],
    leadDoctorSlugs: ["dr-arun-nair"],
    faqs: [
      {
        question: "Can I consult an Internal Medicine specialist for persistent unexplained fever?",
        answer: "Yes, our department operates a dedicated Pyrexia of Unknown Origin (PUO) clinic with rapid diagnostic testing."
      }
    ]
  },
  {
    id: "spec-gensurg",
    slug: "general-surgery",
    name: "General & Laparoscopic Surgery",
    category: "Surgical Disciplines",
    iconName: "Syringe",
    heroTagline: "Minimally Invasive Laparoscopy, Hernia Repair & Colorectal Care",
    overview: "State-of-the-art modular operating theatres with advanced 4K laparoscopic imaging towers, facilitating minimal post-operative pain and rapid resumption of daily activities.",
    keyConditions: [
      "Gallbladder Stones & Cholecystitis",
      "Abdominal Wall, Inguinal & Incisional Hernias",
      "Acute Appendicitis & Intestinal Perforations",
      "Proctology: Haemorrhoids (Piles), Anal Fistula & Fissures",
      "Thyroid, Parathyroid, and Breast Benign Lesions"
    ],
    diagnosticTechnologies: [
      "4K Ultra-HD Laparoscopic Video Systems",
      "High-Frequency Intraoperative Ultrasound",
      "Harmonic Scalpel and Ligasure Vessel Sealing"
    ],
    treatmentModalities: [
      "Single-Incision and Multi-Port Laparoscopic Cholecystectomy",
      "Laparoscopic Hernia Repair (TEP, TAPP, IPOM)",
      "Laser Proctology for Painless Piles and Fistulas",
      "Emergency Acute Abdominal Exploratory Surgeries"
    ],
    leadDoctorSlugs: ["dr-rajesh-sharma"],
    faqs: [
      {
        question: "What is the recovery time for laparoscopic gallbladder surgery?",
        answer: "Most patients are discharged within 24 to 36 hours and can resume light desk work within 5 to 7 days."
      }
    ]
  },
  {
    id: "spec-obgyn",
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    category: "Women & Child",
    iconName: "Baby",
    heroTagline: "Compassionate Maternity Care, Fetal Medicine & Laparoscopic Gynaecology",
    overview: "From pre-conception counseling to advanced maternity suites, high-risk obstetric monitoring, and minimally invasive gynaecology, our department provides compassionate, respectful care at every phase of a woman's life.",
    keyConditions: [
      "Normal and High-Risk Pregnancies",
      "Recurrent Miscarriages & Pre-Eclampsia",
      "Uterine Fibroids, Adenomyosis & Endometriosis",
      "Polycystic Ovarian Syndrome (PCOS) & Menstrual Irregularities",
      "Menopausal Health and Pelvic Organ Prolapse"
    ],
    diagnosticTechnologies: [
      "Advanced 3D/4D Fetal Anomaly Ultrasonography",
      "Cardiotocography (CTG) Fetal Heart Monitoring",
      "Diagnostic Video Hysteroscopy and Colposcopy"
    ],
    treatmentModalities: [
      "Family-Centred Birthing Suites with Water Birthing Support",
      "Emergency Cesarean Delivery with 24/7 Anaesthesia On-Site",
      "Laparoscopic Myomectomy and Total Laparoscopic Hysterectomy (TLH)",
      "Conservative Fertility-Enhancing Gynaecological Surgeries"
    ],
    leadDoctorSlugs: ["dr-anita-deshmukh"],
    faqs: [
      {
        question: "Are fathers or attendants allowed in the labour room?",
        answer: "Yes, our modern birthing suites encourage birth partner participation during labour and delivery under safe medical protocols."
      }
    ]
  },
  {
    id: "spec-paed",
    slug: "paediatrics",
    name: "Paediatrics & Neonatology",
    category: "Women & Child",
    iconName: "Heart",
    heroTagline: "Level-3 NICU, Child Friendly Care & Developmental Paediatrics",
    overview: "Dedicated to the health and well-being of infants, children, and adolescents, backed by a cutting-edge Level-III Neonatal Intensive Care Unit and specialized paediatric emergency care.",
    keyConditions: [
      "Prematurity, Respiratory Distress & Neonatal Jaundice",
      "Childhood Asthma, Bronchiolitis & Viral Pneumonias",
      "Growth Faltering, Failure to Thrive & Nutritional Deficiencies",
      "Paediatric Allergies and Skin Disorders",
      "Developmental Delays, ADHD & Autism Screenings"
    ],
    diagnosticTechnologies: [
      "Neonatal High-Frequency Oscillatory Ventilators (HFOV)",
      "Bedside Echocardiography & Cranial Ultrasound",
      "Inhaled Nitric Oxide (iNO) Therapy System"
    ],
    treatmentModalities: [
      "Surfactant Replacement Therapy & Non-Invasive Bubble CPAP",
      "Comprehensive Childhood Immunization Programs",
      "Paediatric Emergency Resuscitation and Stabilization",
      "Multidisciplinary Developmental Therapy & Guidance"
    ],
    leadDoctorSlugs: ["dr-vikram-patel"],
    faqs: [
      {
        question: "What vaccines are available at the Paediatric clinic?",
        answer: "We stock all WHO and IAP (Indian Academy of Pediatrics) approved vaccines, stored with cold-chain monitoring."
      }
    ]
  },
  {
    id: "spec-pulmo",
    slug: "pulmonology",
    name: "Pulmonology & Respiratory Medicine",
    category: "Medical Specialities",
    iconName: "Wind",
    heroTagline: "Interventional Pulmonology, Advanced Sleep Lab & Critical Respiratory Care",
    overview: "Treating complex lung conditions, asthma, COPD, and sleep apnea with interventional bronchoscopy, endobronchial ultrasound, and pulmonary rehabilitation.",
    keyConditions: [
      "Bronchial Asthma & Chronic Obstructive Pulmonary Disease (COPD)",
      "Interstitial Lung Diseases (Pulmonary Fibrosis, Sarcoidosis)",
      "Pneumonia, Pleural Effusion & Pulmonary Tuberculosis",
      "Obstructive Sleep Apnea (OSA) & Hypoventilation Syndromes",
      "Pulmonary Thromboembolism & Lung Nodules"
    ],
    diagnosticTechnologies: [
      "High-Definition Flexible Video Bronchoscopy with EBUS",
      "Complete Pulmonary Function Testing (PFT) & DLCO",
      "Full-Night Polysomnography (Sleep Study Lab)",
      "Thoracic Ultrasound and Medical Thoracoscopy"
    ],
    treatmentModalities: [
      "Transbronchial Lung Cryobiopsy (TBLC)",
      "Intercostal Drainage & Pleurodesis for Recurrent Effusions",
      "CPAP/BiPAP Titration and Non-Invasive Ventilation (NIV)",
      "Structured Pulmonary Rehabilitation Programs"
    ],
    leadDoctorSlugs: ["dr-sanjay-gupta"],
    faqs: [
      {
        question: "How is a sleep study performed at Marriott Hospital?",
        answer: "Patients stay overnight in a sound-insulated private suite with non-invasive sensors monitoring brain waves, breathing patterns, heart rhythm, and oxygen levels."
      }
    ]
  },
  {
    id: "spec-ent",
    slug: "ent",
    name: "ENT & Head-Neck Sciences",
    category: "Surgical Disciplines",
    iconName: "Ear",
    heroTagline: "Endoscopic Sinus Surgery, Micro-Ear Surgery & Voice Clinics",
    overview: "Comprehensive diagnostic and surgical solutions for ear, nose, throat, voice, and skull base conditions with high-resolution operating microscopes.",
    keyConditions: [
      "Chronic Sinusitis, Nasal Polyps & Deviated Nasal Septum",
      "Otitis Media, Hearing Loss & Tympanic Membrane Perforations",
      "Tonsillitis, Adenoid Hypertrophy & Obstructive Snoring",
      "Vocal Cord Nodules, Polyps & Hoarseness",
      "Head and Neck Benign and Malignant Tumours"
    ],
    diagnosticTechnologies: [
      "High-Definition Video Endoscopic Nasal and Laryngeal Scopes",
      "Pure Tone Audiometry (PTA) and Impedance Tympanometry",
      "Stroboscopy for Precision Vocal Cord Evaluation"
    ],
    treatmentModalities: [
      "Functional Endoscopic Sinus Surgery (FESS) with Navigation",
      "Micro-Laryngeal Surgery for Voice Restoration",
      "Tympanoplasty and Mastoidectomy for Ear Discharge",
      "Coblation-Assisted Tonsillectomy & Adenoidectomy"
    ],
    leadDoctorSlugs: ["dr-rajesh-sharma"],
    faqs: [
      {
        question: "Is Coblation tonsillectomy less painful than conventional surgery?",
        answer: "Yes, Coblation uses low-temperature radiofrequency which causes significantly less tissue trauma and speeds up recovery."
      }
    ]
  },
  {
    id: "spec-ophth",
    slug: "ophthalmology",
    name: "Ophthalmology & Eye Care",
    category: "Surgical Disciplines",
    iconName: "Eye",
    heroTagline: "Micro-Incision Cataract Surgery, Glaucoma & Medical Retina Care",
    overview: "Precision eye care providing blade-free cataract surgeries, laser glaucoma treatments, diabetic retinopathy management, and comprehensive optical diagnostics.",
    keyConditions: [
      "Senile and Traumatic Cataracts",
      "Open-Angle and Angle-Closure Glaucoma",
      "Diabetic Retinopathy & Age-Related Macular Degeneration",
      "Refractive Errors (Myopia, Hyperopia, Astigmatism)",
      "Dry Eye Disease and Corneal Infiltrates"
    ],
    diagnosticTechnologies: [
      "Optical Coherence Tomography (OCT) for Retina & Optic Disc",
      "Automated Visual Field Analyser (Perimetry)",
      "Non-Contact Tonometer & Corneal Topographer"
    ],
    treatmentModalities: [
      "Micro-Incision Phacoemulsification with Premium Trifocal IOLs",
      "Selective Laser Trabeculoplasty (SLT) for Glaucoma",
      "Intravitreal Anti-VEGF Injections for Retinal Diseases",
      "Comprehensive Paediatric Amblyopia Screening"
    ],
    leadDoctorSlugs: ["dr-priya-menon"],
    faqs: [
      {
        question: "How long does a micro-incision cataract surgery take?",
        answer: "The procedure typically takes 15 to 20 minutes under topical droplet anaesthesia with no needles or eye patches required."
      }
    ]
  },
  {
    id: "spec-derm",
    slug: "dermatology",
    name: "Dermatology & Dermatosurgery",
    category: "Medical Specialities",
    iconName: "Sparkles",
    heroTagline: "Evidence-Based Medical Dermatology & Laser Skin Therapies",
    overview: "Specialized clinical diagnosis and management of acute and chronic skin, hair, and nail disorders, alongside certified dermatosurgical interventions.",
    keyConditions: [
      "Psoriasis, Vitiligo & Autoimmune Bullous Disorders",
      "Severe Acne Vulgaris, Rosacea & Post-Acne Scarring",
      "Atopic Dermatitis & Contact Eczemas",
      "Alopecia Areata, Androgenetic Hair Loss & Scalp Disorders",
      "Fungal, Viral, and Bacterial Skin Infections"
    ],
    diagnosticTechnologies: [
      "Digital Dermoscopy for Pigmented Lesions & Melanoma Screening",
      "Wood's Lamp Examination & Skin Biopsy Facilities",
      "Trichoscopy for Hair and Scalp Analysis"
    ],
    treatmentModalities: [
      "Narrow-Band UVB Phototherapy for Vitiligo and Psoriasis",
      "Platelet-Rich Plasma (PRP) Therapy for Hair Restoration",
      "Radiofrequency & Laser Ablation for Benign Skin Growths",
      "Intralesional Injections and Chemical Peels for Lichen Planus"
    ],
    leadDoctorSlugs: ["dr-anita-deshmukh"],
    faqs: [
      {
        question: "Is phototherapy safe for long-term psoriasis treatment?",
        answer: "Yes, Narrowband UVB phototherapy is clinically proven to be one of the safest modalities for widespread psoriasis and vitiligo."
      }
    ]
  },
  {
    id: "spec-critcare",
    slug: "critical-care",
    name: "Critical Care & Intensive Medicine",
    category: "Diagnostic & Support",
    iconName: "HeartHandshake",
    heroTagline: "24/7 Level-III Multidisciplinary ICUs with 1:1 Nursing Care",
    overview: "Equipped with state-of-the-art ventilators, invasive haemodynamic monitoring, and round-the-clock intensivists, providing vigilant resuscitation and organ support for critically ill patients.",
    keyConditions: [
      "Septic Shock and Severe Sepsis with Multi-Organ Failure",
      "Acute Respiratory Distress Syndrome (ARDS)",
      "Severe Traumatic Brain Injury and Polytrauma",
      "Post-Cardiac Arrest Resuscitation Syndrome",
      "Severe Acute Pancreatitis & Metabolic Crises"
    ],
    diagnosticTechnologies: [
      "Point-of-Care Ultrasound (POCUS) and Echocardiography",
      "Continuous Arterial Blood Gas (ABG) & Lactate Analysers",
      "Invasive Haemodynamic Monitoring (PICCO / EV1000)"
    ],
    treatmentModalities: [
      "Advanced Protective Mechanical Ventilation & Prone Positioning",
      "Extracorporeal Membrane Oxygenation (ECMO) Capability",
      "Continuous Renal Replacement Therapy (CRRT) at Bedside",
      "Percutaneous Dilatational Tracheostomy"
    ],
    leadDoctorSlugs: ["dr-arun-nair", "dr-sanjay-gupta"],
    faqs: [
      {
        question: "What are the visiting hours for the Intensive Care Unit?",
        answer: "To ensure patient safety and minimize infection risks, ICU visitation is restricted to 11:30 AM - 12:30 PM and 05:00 PM - 06:00 PM for designated immediate attendants."
      }
    ]
  },
  {
    id: "spec-diag",
    slug: "diagnostic-services",
    name: "Diagnostic Services & Imaging",
    category: "Diagnostic & Support",
    iconName: "Search",
    heroTagline: "3T MRI, 128-Slice Low-Dose CT & NABL-Accredited Automated Pathology",
    overview: "Marriott Diagnostic Sciences delivers swift, ultra-precise imaging and clinical lab results operating 24 hours a day to support rapid clinical decision-making.",
    keyConditions: [
      "Whole-Body Oncological & Neurological Screening",
      "Acute Vascular Occlusion & Pulmonary Embolism",
      "Occult Fractures & Musculoskeletal Tears",
      "Metabolic, Endocrine, and Autoimmune Biomarker Profiling",
      "Infectious Disease Serology & Molecular PCR Diagnostics"
    ],
    diagnosticTechnologies: [
      "Siemens Magnetom 3T Silent MRI with 64-Channel Matrix",
      "128-Slice Low-Radiation Dose Computed Tomography (CT)",
      "Digital Full-Field Mammography with Tomosynthesis",
      "Fully Automated Clinical Chemistry & Haematology Track"
    ],
    treatmentModalities: [
      "Image-Guided Percutaneous Biopsies and Drainages",
      "Emergency Trauma CT protocols with instant PACS reporting",
      "Digital Web Portal for Instant Patient Report Access"
    ],
    leadDoctorSlugs: ["dr-sanjay-gupta"],
    faqs: [
      {
        question: "How quickly are emergency radiology reports available?",
        answer: "Emergency trauma scans and stroke CTs receive immediate preliminary radiologist reporting within 20 minutes."
      }
    ]
  }
];

export const specialities = specialitiesData;
