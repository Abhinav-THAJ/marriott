export interface HealthPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Executive" | "Cardiac" | "Women's Health" | "Senior Citizen" | "Diabetic Care" | "Preventive";
  targetAudience: string;
  fastingRequired: boolean;
  fastingHours?: number;
  reportTurnaround: string;
  priceNote: string;
  originalPrice?: string;
  testsIncluded: {
    category: string;
    tests: string[];
  }[];
  preparationGuidelines: string[];
  featured: boolean;
}

export const healthPackagesData: HealthPackage[] = [
  {
    id: "pkg-1",
    slug: "comprehensive-executive-health",
    title: "Comprehensive Executive Health Checkup",
    subtitle: "Complete whole-body screening for working executives, entrepreneurs, and busy professionals",
    category: "Executive",
    targetAudience: "Adults aged 30+ seeking in-depth vital organ profiling",
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: "Same Day (by 5:00 PM)",
    priceNote: "₹5,499",
    originalPrice: "₹8,200",
    featured: true,
    testsIncluded: [
      {
        category: "Cardiology & Radiology",
        tests: [
          "12-Lead Electrocardiogram (ECG)",
          "Chest X-Ray (Digital PA View)",
          "Ultrasound Whole Abdomen & Pelvis",
          "Treadmill Stress Test (TMT) / 2D Echo (Doctor Advised)"
        ]
      },
      {
        category: "Blood & Biochemical Parameters (Pathology)",
        tests: [
          "Complete Blood Count (CBC) with ESR",
          "Fasting Blood Sugar & HbA1c (Glycated Haemoglobin)",
          "Lipid Profile (Total Cholesterol, HDL, LDL, VLDL, Triglycerides)",
          "Liver Function Test (LFT: Bilirubin, SGOT, SGPT, Alk Phos, Proteins)",
          "Kidney Function Test (KFT: Blood Urea, S. Creatinine, Uric Acid, Electrolytes)",
          "Complete Urine Analysis & Microscopic Examination"
        ]
      },
      {
        category: "Endocrine & Vitamin Status",
        tests: [
          "Thyroid Stimulating Hormone (TSH)",
          "Vitamin D3 (25-Hydroxy)",
          "Vitamin B12 Level"
        ]
      },
      {
        category: "Specialist Consultations",
        tests: [
          "Comprehensive Consultation with Senior Physician",
          "Cardiologist Review & Risk Scoring",
          "Clinical Diet & Nutrition Counseling",
          "Dental Examination & Ophthalmology Screening"
        ]
      }
    ],
    preparationGuidelines: [
      "Strict overnight fasting of 10 to 12 hours is mandatory. Water is permitted.",
      "Avoid caffeine, smoking, and vigorous exercise on the morning of testing.",
      "Bring your current medical prescriptions and previous diagnostic records.",
      "Wear comfortable loose clothing suitable for treadmill stress evaluation."
    ]
  },
  {
    id: "pkg-2",
    slug: "cardiac-wellness-screening",
    title: "Cardiac Wellness & Heart Health Screening",
    subtitle: "Specialized assessment dedicated to coronary risk detection, arterial wellness, and heart function",
    category: "Cardiac",
    targetAudience: "Individuals with family history of heart disease, hypertension, or elevated cholesterol",
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: "Same Day",
    priceNote: "₹3,999",
    originalPrice: "₹6,000",
    featured: true,
    testsIncluded: [
      {
        category: "Advanced Cardiac Diagnostics",
        tests: [
          "High-Resolution 2D Echocardiography with Colour Doppler",
          "Treadmill Exercise Stress Test (TMT)",
          "Resting 12-Lead ECG",
          "High-Sensitivity C-Reactive Protein (hs-CRP)"
        ]
      },
      {
        category: "Lipid & Metabolic Profiling",
        tests: [
          "Comprehensive Lipid Profile with Apolipoprotein Evaluation",
          "Fasting Blood Sugar & Serum Homocysteine",
          "Serum Creatinine & Electrolytes",
          "Complete Haemogram"
        ]
      },
      {
        category: "Clinical Evaluation",
        tests: [
          "One-on-One Consultation with Senior Consultant Cardiologist",
          "Framingham Cardiovascular Risk Score Assessment",
          "Cardiac Nutrition & Heart-Healthy Lifestyle Prescription"
        ]
      }
    ],
    preparationGuidelines: [
      "Fast for 10 hours prior to the appointment. Drink plenty of water.",
      "If you take beta-blockers or cardiac medicines, consult your doctor regarding morning doses.",
      "Wear sports shoes and gym attire for the treadmill test."
    ]
  },
  {
    id: "pkg-3",
    slug: "womens-wellness-checkup",
    title: "Women's Comprehensive Wellness Checkup",
    subtitle: "Holistic preventive screening tailored for women's reproductive, hormonal, bone, and breast health",
    category: "Women's Health",
    targetAudience: "Women aged 25 and above",
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: "24 Hours (Histology/Pap smear)",
    priceNote: "₹4,299",
    originalPrice: "₹6,800",
    featured: true,
    testsIncluded: [
      {
        category: "Gynaecological & Cancer Screening",
        tests: [
          "Liquid-Based Pap Smear (Cervical Cancer Screening)",
          "Bilateral Breast Ultrasound or Mammography (Age-Appropriate)",
          "Pelvic & Abdominal Ultrasound (Uterus & Ovaries)",
          "Clinical Breast Examination by Lady Consultant"
        ]
      },
      {
        category: "Bone, Hormone & Metabolic Panel",
        tests: [
          "Complete Thyroid Panel (Free T3, Free T4, TSH)",
          "Dual Energy X-Ray Absorptiometry (DEXA Bone Mineral Density)",
          "Serum Calcium, Vitamin D3 & Iron Studies / Ferritin",
          "HbA1c & Fasting Lipid Profile"
        ]
      },
      {
        category: "Consultations",
        tests: [
          "Detailed Gynaecological Consultation",
          "Physician Wellness Review",
          "Dietary Counseling for Bone Health & Hormonal Balance"
        ]
      }
    ],
    preparationGuidelines: [
      "Fasting of 10 hours required for blood tests.",
      "Schedule your appointment at least 5 days after the completion of your menstrual cycle.",
      "Do not apply deodorants, perfumes, or powders on the chest prior to mammography."
    ]
  },
  {
    id: "pkg-4",
    slug: "senior-citizen-comprehensive",
    title: "Senior Citizen Comprehensive Health Package",
    subtitle: "Gentle, thorough screening for elderly adults focusing on mobility, organ preservation, and vitality",
    category: "Senior Citizen",
    targetAudience: "Men and women aged 60+",
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: "Same Day",
    priceNote: "₹4,799",
    originalPrice: "₹7,500",
    featured: false,
    testsIncluded: [
      {
        category: "Geriatric & Organ Health",
        tests: [
          "Complete Renal Panel (eGFR, Urea, Creatinine, Electrolytes)",
          "Liver Function Tests & Serum Albumin",
          "Prostate-Specific Antigen (PSA) for Men / Pelvic USG for Women",
          "Complete Blood Count with Peripheral Smear",
          "Stool for Occult Blood Screening"
        ]
      },
      {
        category: "Cardio-Pulmonary & Vision",
        tests: [
          "12-Lead ECG & Chest X-Ray PA View",
          "Comprehensive Ophthalmological Evaluation (Cataract & Glaucoma check)",
          "Pure Tone Audiometry (Hearing Test)"
        ]
      },
      {
        category: "Consultations & Rehab",
        tests: [
          "Senior Consultant Physician Consultation",
          "Geriatric Fall-Risk Assessment & Physiotherapy Guidance",
          "Nutritional Review for Healthy Ageing"
        ]
      }
    ],
    preparationGuidelines: [
      "10 hours fasting required. Morning blood pressure medicines may be taken with sips of water.",
      "Senior patients should be accompanied by an attendant for assistance.",
      "Wheelchair assistance is provided right at the entrance upon arrival."
    ]
  },
  {
    id: "pkg-5",
    slug: "diabetic-care-essential",
    title: "Diabetic Care & Microvascular Assessment",
    subtitle: "In-depth metabolic monitoring to prevent diabetic retinopathy, nephropathy, and neuropathy",
    category: "Diabetic Care",
    targetAudience: "Patients diagnosed with Type 1 or Type 2 Diabetes or Prediabetes",
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: "Same Day",
    priceNote: "₹2,899",
    originalPrice: "₹4,500",
    featured: false,
    testsIncluded: [
      {
        category: "Glycemic & Renal Markers",
        tests: [
          "Fasting & Post-Prandial Blood Sugar",
          "HbA1c with Average Blood Glucose Estimation",
          "Urine Microalbumin to Creatinine Ratio (Early Kidney Marker)",
          "Serum Creatinine and Blood Urea Nitrogen (BUN)"
        ]
      },
      {
        category: "End-Organ Screening",
        tests: [
          "Dilated Retinal Eye Examination for Diabetic Retinopathy",
          "Biothesiometry Vibration Foot Screening (Diabetic Neuropathy)",
          "Resting ECG & Lipid Profile"
        ]
      },
      {
        category: "Clinical Guidance",
        tests: [
          "Diabetologist / Physician Consultation",
          "Certified Diabetes Educator & Diabetic Diet Plan"
        ]
      }
    ],
    preparationGuidelines: [
      "Fasting sample taken in morning, followed by normal breakfast and 2-hour post-prandial blood draw.",
      "Please bring your diabetes medications or insulin pens to the hospital."
    ]
  },
  {
    id: "pkg-6",
    slug: "master-health-checkup",
    title: "Master Health Checkup",
    subtitle: "Essential baseline preventive health investigation suitable for every family member",
    category: "Preventive",
    targetAudience: "Individuals of all age groups seeking annual health tracking",
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: "Same Day",
    priceNote: "₹2,499",
    originalPrice: "₹3,900",
    featured: false,
    testsIncluded: [
      {
        category: "Essential Screenings",
        tests: [
          "Complete Blood Count (CBC) with ESR",
          "Fasting Blood Glucose",
          "Lipid Profile Basic (Cholesterol, Triglycerides, HDL, LDL)",
          "Liver Enzymes (SGOT, SGPT) & Renal Marker (Creatinine)",
          "Resting 12-Lead ECG & Digital Chest X-Ray",
          "Urine Routine & Microscopic"
        ]
      },
      {
        category: "Consultations",
        tests: [
          "Consultation with Consultant Physician",
          "Blood Pressure & Body Mass Index (BMI) Assessment",
          "Personalized Health Lifestyle Report"
        ]
      }
    ],
    preparationGuidelines: [
      "Overnight fasting for 10 hours.",
      "Avoid heavy greasy meals on the evening before testing."
    ]
  }
];

export const packagesData = healthPackagesData;
export const packages = healthPackagesData;
