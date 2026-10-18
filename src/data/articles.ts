export interface HealthArticle {
  id: string;
  slug: string;
  title: string;
  category: "Preventive Healthcare" | "Cardiology" | "Orthopaedics" | "Women's Health" | "Paediatrics" | "Wellness";
  excerpt: string;
  content: string[];
  author: string;
  medicalReviewer: string;
  publishedDate: string;
  readTime: string;
  imageUrl: string;
  relatedSpecialitySlug: string;
}

export const healthArticlesData: HealthArticle[] = [
  {
    id: "art-1",
    slug: "understanding-heart-attack-symptoms-prevention",
    title: "Understanding Heart Attack Symptoms: Why the First 60 Minutes Matter",
    category: "Cardiology",
    excerpt: "Recognizing early warning signs of acute myocardial infarction, subtle atypical symptoms in women, and the life-saving significance of door-to-balloon time.",
    content: [
      "A myocardial infarction (heart attack) occurs when blood flow to a section of the heart muscle is abruptly blocked, commonly due to a ruptured atherosclerotic plaque. In clinical cardiology, time is heart muscle: every minute of delay increases irreversible cardiomyocyte cell death.",
      "Classic symptoms include crushing central chest tightness or squeezing pain radiating to the left arm, neck, jaw, or upper back. However, atypical symptoms are especially common in women, older adults, and individuals with diabetes—including sudden shortness of breath, unexplained profound fatigue, nausea, cold sweats, or epigastric discomfort mimicking indigestion.",
      "If you or someone near you experiences these symptoms, call our 24/7 Emergency Hotline (+91 484 2800-911) immediately. Do not attempt to drive yourself to the hospital. Modern emergency protocols achieve primary angioplasty revascularization in under 60 minutes, preserving cardiac function and saving lives."
    ],
    author: "Marriott Clinical Editorial Board",
    medicalReviewer: "Dr. Arun Nair, DM (Cardiology), FACC",
    publishedDate: "October 12, 2026",
    readTime: "4 min read",
    imageUrl: "/images/departments/cardiology.jpg",
    relatedSpecialitySlug: "cardiology"
  },
  {
    id: "art-2",
    slug: "managing-hypertension-lifestyle-clinical-strategies",
    title: "Silent Danger: Clinical and Lifestyle Strategies to Control High Blood Pressure",
    category: "Preventive Healthcare",
    excerpt: "Hypertension often produces no noticeable symptoms while silently damaging arteries, kidneys, and the heart. Learn evidence-based management principles.",
    content: [
      "Often termed the 'silent killer', high blood pressure affects more than one in three adults worldwide. Sustained elevated vascular pressure places immense strain on coronary arteries, cerebral microvasculature, and delicate renal glomeruli.",
      "Normal blood pressure is defined as systolic < 120 mmHg and diastolic < 80 mmHg. Lifestyle modifications including sodium restriction (< 2 grams daily), the DASH dietary pattern rich in potassium and magnesium, 150 minutes of weekly moderate aerobic exercise, and stress mitigation can reduce systolic pressure by 10-15 mmHg.",
      "Regular home monitoring and periodic medical checkups ensure that antihypertensive therapy is calibrated appropriately to prevent heart failure, stroke, and kidney damage."
    ],
    author: "Department of Preventive Medicine",
    medicalReviewer: "Dr. Arun Nair, Director of Cardiac Sciences",
    publishedDate: "September 28, 2026",
    readTime: "5 min read",
    imageUrl: "/images/doctors/doctor-consultation.jpg",
    relatedSpecialitySlug: "general-medicine"
  },
  {
    id: "art-3",
    slug: "joint-pain-and-arthritis-when-to-see-an-orthopaedic-specialist",
    title: "Knee and Joint Pain: Non-Surgical Options and When to Consider Robotic Replacement",
    category: "Orthopaedics",
    excerpt: "Differentiating between mechanical wear-and-tear osteoarthritis and inflammatory arthritis, from early physiotherapy to advanced robotic joint preservation.",
    content: [
      "Joint pain in weight-bearing knees and hips is among the leading causes of mobility loss in adults over 50. Osteoarthritis involves gradual progressive loss of articular cartilage, leading to bone-on-bone friction, joint stiffness, and chronic nocturnal aching.",
      "Early stages respond remarkably well to multimodal conservative therapy: targeted quadriceps strengthening, weight management, low-impact swimming or cycling, viscosupplementation injections, and ergonomic adjustments.",
      "When joint degeneration severely restricts walking, sleep, and independent daily activities despite conservative care, robotic total joint arthroplasty offers sub-millimeter precision alignment, minimal soft tissue disruption, and rapid return to active living."
    ],
    author: "Department of Orthopaedic Surgery",
    medicalReviewer: "Dr. Rajesh Sharma, MS (Ortho), FRCS",
    publishedDate: "September 15, 2026",
    readTime: "5 min read",
    imageUrl: "/images/departments/rehabilitation.jpg",
    relatedSpecialitySlug: "orthopaedics"
  },
  {
    id: "art-4",
    slug: "nutrition-and-immunity-in-paediatric-growth",
    title: "Childhood Nutrition & Immune Resilience: A Paediatrician's Guide",
    category: "Paediatrics",
    excerpt: "Navigating key developmental milestones, balanced micronutrient intake, vaccination schedules, and identifying early childhood growth faltering.",
    content: [
      "The first five years of a child's life represent a critical window of neurodevelopment and immune system maturation. Providing adequate macro-nutrients alongside vital trace elements—such as iron, zinc, vitamin D3, and iodine—is essential for cognitive and physical growth.",
      "Routine preventive checkups track height, weight, and head circumference percentiles on standardized WHO growth charts. In addition, adhering strictly to national immunization schedules shields children against debilitating vaccine-preventable infections including pneumococcal pneumonia, rotavirus diarrhoea, and measles.",
      "Our Paediatric Clinic provides developmental screening, infant feeding guidance, and gentle treatment for allergic respiratory conditions."
    ],
    author: "Child Health Education Team",
    medicalReviewer: "Dr. Vikram Patel, Head of Paediatrics",
    publishedDate: "August 30, 2026",
    readTime: "4 min read",
    imageUrl: "/images/departments/paediatrics.jpg",
    relatedSpecialitySlug: "paediatrics"
  },
  {
    id: "art-5",
    slug: "importance-of-preventive-health-screenings",
    title: "Why Annual Health Screenings Save Lives: The Power of Early Detection",
    category: "Wellness",
    excerpt: "How annual diagnostic profiling catches silent metabolic, cardiac, and oncological conditions long before irreversible clinical symptoms appear.",
    content: [
      "The greatest paradox of modern healthcare is that conditions with the highest morbidity—such as coronary artery disease, colorectal polyps, cervical pre-cancer, and chronic kidney disease—often remain completely painless in their early curable stages.",
      "Preventive health checkups are designed not just to test for existing diseases, but to evaluate metabolic trajectory, cardiovascular risk scores, and organ function. Catching elevated liver enzymes, early microscopic albuminuria, or borderline glucose intolerance enables non-invasive lifestyle reversal before disease onset.",
      "Explore Marriott Hospital's transparent preventative packages suited for adults, senior citizens, and families."
    ],
    author: "Preventive Health Directorate",
    medicalReviewer: "Clinical Advisory Board, Marriott Hospital",
    publishedDate: "August 14, 2026",
    readTime: "4 min read",
    imageUrl: "/images/facilities/diagnostic-imaging.jpg",
    relatedSpecialitySlug: "diagnostic-services"
  }
];

export const articlesData = healthArticlesData;
export const articles = healthArticlesData;
