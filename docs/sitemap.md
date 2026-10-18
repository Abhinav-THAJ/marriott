# Marriott Hospital: Complete Sitemap & Route Inventory

All routes listed below are actively implemented in the Next.js App Router application. There are no placeholder routes, dead links, or missing pages.

---

## 1. Primary Website Routes

### 1.1 Core Pages
- `/` — Homepage (Complete 19-section patient portal and clinical showcase)
- `/appointments` — Multi-step online appointment booking form
- `/appointments/confirmation` — Appointment submission receipt & next steps
- `/appointments/faq` — Appointment, consultation, and rescheduling FAQs
- `/search` — Global search interface across doctors, specialities, packages, facilities, articles
- `/contact` — Contact information, verified department directory, emergency contacts, inquiry form
- `/locations` — Hospital campus directory, interactive directions, transit accessibility

### 1.2 About Us (`/about`)
- `/about` — Overview of Marriott Hospital, philosophy, clinical mission
- `/about/our-hospital` — Campus profile, clinical milestones, care ethos
- `/about/vision-mission-values` — Institutional vision, mission, core values
- `/about/leadership` — Clinical governance, medical directorate, executive advisory
- `/about/infrastructure` — Architectural highlights, medical gas pipelines, green hospital standards
- `/about/quality-and-patient-safety` — Clinical audits, infection prevention, safety indicators
- `/about/accreditations` — Quality certifications (NABH, NABL, JCI-aligned standards, Kayakalp)
- `/about/community-initiatives` — Rural healthcare outreach, preventative camps, CSR

### 1.3 Doctors & Medical Staff (`/doctors`)
- `/doctors` — Searchable & filterable directory of medical specialists
- `/doctors/[slug]` — Comprehensive individual doctor profiles with booking integration:
  - `/doctors/dr-arun-nair` (Cardiology)
  - `/doctors/dr-priya-menon` (Neurology)
  - `/doctors/dr-rajesh-sharma` (Orthopaedics)
  - `/doctors/dr-anita-deshmukh` (Obstetrics & Gynaecology)
  - `/doctors/dr-vikram-patel` (Paediatrics)
  - `/doctors/dr-suresh-reddy` (Gastroenterology)
  - `/doctors/dr-meera-krishnan` (Oncology)
  - `/doctors/dr-sanjay-gupta` (Pulmonology)

### 1.4 Specialities & Centres of Excellence (`/specialities`)
- `/specialities` — Complete catalogue of clinical specialities
- `/specialities/[slug]` — Individual speciality deep-dive pages:
  - `/specialities/cardiology` — Cardiology & Cardiac Surgery
  - `/specialities/neurology` — Neurology & Neurosurgery
  - `/specialities/orthopaedics` — Orthopaedics & Joint Replacement
  - `/specialities/oncology` — Comprehensive Cancer Care
  - `/specialities/gastroenterology` — Medical & Surgical Gastroenterology
  - `/specialities/nephrology` — Nephrology, Dialysis & Renal Care
  - `/specialities/urology` — Urology & Andrology
  - `/specialities/general-medicine` — Internal Medicine & Critical Care
  - `/specialities/general-surgery` — Minimally Invasive & Laparoscopic Surgery
  - `/specialities/obstetrics-gynaecology` — Women's Health & High-Risk Obstetrics
  - `/specialities/paediatrics` — Child Health & Neonatal Intensive Care
  - `/specialities/pulmonology` — Pulmonology, Sleep & Respiratory Medicine
  - `/specialities/ent` — Ear, Nose & Throat (Head & Neck)
  - `/specialities/ophthalmology` — Advanced Eye Care & Microsurgery
  - `/specialities/dermatology` — Clinical Dermatology & Dermatosurgery
  - `/specialities/critical-care` — 24/7 Level 3 Intensive Care Units
  - `/specialities/diagnostic-services` — Radio-diagnosis, 3T MRI, 128-Slice CT, NABL Pathology

### 1.5 Departments Directory (`/departments`)
- `/departments` — Operational hospital departments index
- `/departments/[slug]` — Department functional profile:
  - `/departments/emergency-trauma` — 24/7 Emergency & Level-1 Trauma Centre
  - `/departments/operation-theatres` — Modular OT Complex & Laminar Flow
  - `/departments/diagnostic-imaging` — Advanced Radiology & Ultrasonography
  - `/departments/pathology-laboratory` — Automated Clinical Biochemistry & Haematology
  - `/departments/rehabilitation-physiotherapy` — Comprehensive Neuro & Ortho Rehab
  - `/departments/pharmacy-services` — 24/7 Inpatient & Outpatient Pharmacy

### 1.6 Services & Facilities (`/services` & `/facilities`)
- `/services` — Clinical and ambulatory patient services index
- `/services/[slug]` — Individual service profiles:
  - `/services/outpatient-services` — Daily OPD clinics, specialist consultation timings
  - `/services/inpatient-services` — Inpatient admissions, multi-tier rooms, round-the-clock nursing
  - `/services/emergency-services` — 24/7 Rapid response ambulance, cardiac resuscitation
  - `/services/diagnostic-services` — Laboratory medicine, radiology, cardiac stress testing
  - `/services/laboratory-services` — NABL accredited clinical pathology & microbiology
  - `/services/imaging-radiology` — High-field MRI, low-dose CT, ultrasound, digital X-Ray
  - `/services/surgical-services` — Day care surgery, complex reconstructive procedures
  - `/services/critical-care` — Multi-disciplinary ICU, NICU, PICU, HDU
  - `/services/rehabilitation` — Physical therapy, occupational therapy, speech-language therapy
  - `/services/physiotherapy` — Musculoskeletal rehabilitation & sports medicine
- `/facilities` — Hospital infrastructure & patient amenities
- `/facilities/[slug]` — Individual facility profiles:
  - `/facilities/patient-rooms` — Deluxe suites, private single rooms, semi-private, general wards
  - `/facilities/waiting-areas` — Air-conditioned lounges, digital display token queue
  - `/facilities/pharmacy` — 24x7 In-campus pharmacy with computerized dispensing
  - `/facilities/cafeteria-dietary` — Clinical nutritionist-supervised meal services & visitor cafe
  - `/facilities/parking-accessibility` — Multi-level covered parking, wheelchair ramps, braille signage
  - `/facilities/blood-bank` — Component separation unit & 24/7 voluntary blood banking

### 1.7 Patient Information & Care Support (`/patients`)
- `/patients` — Patient Portal & Navigation Guide
- `/patients/new-patients` — What to bring, registration formalities, checklist
- `/patients/existing-patients` — Medical records, follow-ups, prescription refills
- `/patients/opd-and-timings` — Daily clinic schedules, consultant OPD timings
- `/patients/admission` — Planned & emergency admission workflows, deposit guidelines
- `/patients/discharge` — Summary handoff, home medications, follow-up coordination
- `/patients/billing-and-insurance` — Cashless TPA empanelment, estimation desk, insurance documentation
- `/patients/medical-records` — Secure discharge summary & diagnostic reports access
- `/patients/patient-rights` — Charter of Patient Rights & Responsibilities
- `/patients/visitor-guidelines` — Visiting hours, ICU protocols, infection prevention
- `/patients/feedback` — Patient experience evaluation, grievances redressal
- `/patients/faqs` — Patient care, insurance, admission, and clinical FAQs

### 1.8 Health Packages (`/health-packages`)
- `/health-packages` — Preventative health screenings & wellness packages catalogue
- `/health-packages/[slug]` — Detailed package inclusions and booking forms:
  - `/health-packages/comprehensive-executive-health` — Complete body screening & cardiac risk assessment
  - `/health-packages/cardiac-wellness-screening` — Heart health, 2D Echo, TMT, lipid profiling
  - `/health-packages/womens-wellness-checkup` — Pap smear, mammogram, bone densitometry, thyroid panel
  - `/health-packages/senior-citizen-comprehensive` — Geriatric health, arthritis, renal & metabolic evaluation
  - `/health-packages/diabetic-care-essential` — HbA1c, microalbuminuria, diabetic retinopathy screening
  - `/health-packages/master-health-checkup` — Broad baseline diagnostics for working adults

### 1.9 Health Library & Patient Education (`/health-library`)
- `/health-library` — Clinical articles, wellness guides, disease prevention
- `/health-library/[slug]` — In-depth reviewed health articles:
  - `/health-library/understanding-heart-attack-symptoms-prevention` — Cardiac care guide
  - `/health-library/managing-hypertension-lifestyle-clinical-strategies` — Blood pressure management
  - `/health-library/joint-pain-and-arthritis-when-to-see-an-orthopaedic-specialist` — Musculoskeletal guide
  - `/health-library/nutrition-and-immunity-in-paediatric-growth` — Child health nutrition
  - `/health-library/importance-of-preventive-health-screenings` — Health prevention handbook

### 1.10 News, Events & Institutional Media
- `/news` — Hospital news, clinical milestones, press releases
- `/news/[slug]` — Detailed news article
- `/events` — Health awareness camps, webinars, CME workshops
- `/events/[slug]` — Event details & registration

### 1.11 International Patients (`/international-patients`)
- `/international-patients` — Concierge medical tourism, second opinions, visa letters, interpreter services

### 1.12 Careers (`/careers`)
- `/careers` — Career opportunities, work culture, clinical openings
- `/careers/[slug]` — Job description and requirements
- `/careers/apply` — Online application form & CV submission

### 1.13 Legal & Governance
- `/privacy-policy` — Patient data protection, HIPAA/national healthcare compliance
- `/terms-and-conditions` — Terms of website use & telemedicine conditions
- `/cookie-policy` — Cookie preferences, analytics transparency
- `/accessibility` — Accessibility statement (WCAG 2.2 AA standards)
- `/medical-disclaimer` — Medical advice disclaimer & emergency notices
