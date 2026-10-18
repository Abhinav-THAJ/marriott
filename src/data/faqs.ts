export interface HospitalFaq {
  category: "General & Appointments" | "Inpatient & Admission" | "Billing & Cashless Insurance" | "Visiting Guidelines" | "Health Packages";
  question: string;
  answer: string;
}

export const generalFaqs: HospitalFaq[] = [
  {
    category: "General & Appointments",
    question: "How do I schedule an appointment with a specialist at Marriott Hospital?",
    answer: "You can book an appointment online anytime through our website by navigating to the 'Book an Appointment' portal, selecting your desired department or consultant, and choosing an available date and time. You may also call our Central Appointment Desk at +91 (484) 2800-000 from 08:00 AM to 08:00 PM."
  },
  {
    category: "General & Appointments",
    question: "Can I walk in for an outpatient consultation without an appointment?",
    answer: "Yes, walk-in consultations are accommodated at our Outpatient Registration counters. However, pre-booking is strongly recommended to minimize waiting times, as scheduled appointments take priority."
  },
  {
    category: "General & Appointments",
    question: "What should I bring on my first visit to Marriott Hospital?",
    answer: "First-time visitors should bring a valid government photo ID, any previous medical records, diagnostic test reports, discharge summaries, and a comprehensive list of all current medications. If you plan to claim health insurance, please bring your original health card and policy documents."
  },
  {
    category: "Inpatient & Admission",
    question: "What is the procedure for planned hospital admission?",
    answer: "For planned admissions, your consulting specialist will issue an Admission Order. Please report to the Inpatient Admission Desk in the main lobby along with your medical file. Our admissions team will assist with room category selection, deposit payment or cashless insurance pre-authorization, and guide you to your assigned room."
  },
  {
    category: "Inpatient & Admission",
    question: "What room categories are available for admitted patients?",
    answer: "We offer multi-tier room accommodations including Deluxe Executive Suites, Single Private Rooms, Twin-Sharing Semi-Private Rooms, and General Multi-Bed Wards. All private rooms feature motorized patient beds, companion sofa-beds, private en-suite bathrooms, nurse call systems, and television."
  },
  {
    category: "Billing & Cashless Insurance",
    question: "Which insurance companies and TPAs are empanelled for cashless hospitalization?",
    answer: "Marriott Hospital is empanelled with all leading national insurance companies and Third-Party Administrators (TPAs) including Star Health, ICICI Lombard, HDFC ERGO, Max Bupa/Niva Bupa, Care Health, Medi Assist, Vidal Health, MDIndia, and Paramount TPA. Please visit our Insurance Helpdesk for policy pre-authorization."
  },
  {
    category: "Billing & Cashless Insurance",
    question: "How does the cashless hospitalization process work?",
    answer: "For planned admissions, submit your insurance card, policy copy, and doctor's admission advice at least 48 hours prior to our Insurance Desk. For emergency admissions, our desk initiates pre-authorization within 4 hours of patient arrival. Once approved by your insurer, eligible hospital expenses are settled directly."
  },
  {
    category: "Visiting Guidelines",
    question: "What are the hospital visiting hours for family and friends?",
    answer: "General Ward and Private Room visiting hours are from 04:30 PM to 07:00 PM on weekdays, and 10:00 AM to 12:00 PM and 04:30 PM to 07:00 PM on Sundays and public holidays. ICU visiting hours are strictly restricted to 11:30 AM - 12:30 PM and 05:00 PM - 06:00 PM for one attendant at a time."
  },
  {
    category: "Visiting Guidelines",
    question: "Are children allowed to visit hospitalized patients?",
    answer: "Children under the age of 12 are generally not permitted in inpatient wards or critical care units to protect them from potential hospital-acquired infections, except under special clinical circumstances with prior approval from the medical officer."
  },
  {
    category: "Health Packages",
    question: "Do I need to fast before coming for a health package checkup?",
    answer: "Yes, most comprehensive health packages require 10 to 12 hours of overnight fasting. You may drink plain water, but refrain from tea, coffee, milk, breakfast, and smoking prior to morning blood sample collection."
  },
  {
    category: "Health Packages",
    question: "How long does a preventive health checkup take?",
    answer: "Most checkups are completed within 3 to 4 hours. You will undergo blood and urine collection, imaging investigations (ECG, X-Ray, Ultrasound), followed by a complimentary light breakfast, after which you will consult with the physician and specialists once lab results are ready."
  }
];
