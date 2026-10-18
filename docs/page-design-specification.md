# Marriott Hospital: Page Design Specification

This document details the architectural layout, components, sections, assets, and user actions for every planned route across the Marriott Hospital platform.

---

## 1. Homepage (`/`) Specification (19 Ordered Sections)

### Section 1: Hero Section
- **Visuals:** Full-width responsive cinematic healthcare banner with high visual clarity. Deep medical navy subtle gradient overlay on the left for maximum text contrast.
- **Copy:**
  - Badge: "Advanced Tertiary Healthcare & Compassionate Clinical Care"
  - Headline: "Care That Puts You First."
  - Subtitle: "Discover compassionate healthcare, clear medical guidance, and cutting-edge multidisciplinary services designed around your needs."
- **Actions:**
  - Primary CTA: "Book an Appointment" -> `/appointments`
  - Secondary CTA: "Find a Doctor" -> `/doctors`
  - Tertiary Action: "Explore Specialities" -> `/specialities`
- **Key Metrics Floating Bar:** 450+ Hospital Beds, 65+ Super Specialists, 24/7 Level-1 Trauma, 99.4% Patient Satisfaction.

### Section 2: Quick Access Grid
- **Design:** 6 elevated shortcut cards with micro-hover lift and clear medical iconography:
  1. *Find a Doctor* -> `/doctors`
  2. *Book an Appointment* -> `/appointments`
  3. *Centres & Specialities* -> `/specialities`
  4. *Patient Information* -> `/patients`
  5. *Health Packages* -> `/health-packages`
  6. *Contact & Emergency Directions* -> `/contact`

### Section 3: Introduction to Marriott Hospital
- **Layout:** 2-Column editorial showcase with campus interior imagery.
- **Content:** Institutional mission, patient-centred clinical philosophy, ethical practice, and hospital commitment to compassionate care without commercial embellishment.
- **CTA:** "About Our Hospital" -> `/about/our-hospital`

### Section 4: Specialities and Clinical Departments
- **Design:** Interactive responsive grid featuring key specialities (Cardiology, Neurology, Orthopaedics, Oncology, Gastroenterology, Paediatrics, Gynaecology, Pulmonology, Nephrology, General Surgery).
- **Card Elements:** Clinical icon, department name, clinical scope summary, "Explore Department" link.
- **CTA:** "View All Specialities" -> `/specialities`

### Section 5: Find a Doctor (Interactive Filter & Featured Staff)
- **Design:** High-contrast search container with real-time text input, speciality selector, and department dropdown.
- **Results Display:** Featured consultant doctor cards with verified photos, qualifications, designations, and dual actions: "View Profile" & "Book Consultation".

### Section 6: Why Choose Marriott Hospital
- **Layout:** Clean 4-column card grid with iconography:
  1. *Patient-Centred Communication* — Clear treatment explanations and shared decision making.
  2. *Coordinated Multidisciplinary Care* — Integrated specialist teams for comprehensive treatment.
  3. *Advanced Medical Technology* — 3T MRI, 128-Slice CT, modular laminar flow OTs.
  4. *Transparent Billing & Care Support* — Empanelled with major health insurers & TPA networks.

### Section 7: Centres of Excellence
- **Design:** Showcase of tertiary flagship departments (Heart Institute, Neurosciences, Ortho & Joint Reconstruction, Cancer Care).
- **Content:** Clinical capabilities, cutting-edge diagnostic equipment, rehabilitation protocols.

### Section 8: Facilities and Technology
- **Design:** Visual gallery cards showcasing:
  - Advanced Intensive Care Units (ICU / NICU / PICU)
  - Modular Operation Theatres with Laminar Air Flow
  - Diagnostic Imaging & Robotic Radiosurgery
  - 24/7 In-House Pathology & Molecular Diagnostics

### Section 9: Health Packages (Preventative Healthcare)
- **Design:** Transparent package cards with verified inclusions, recommended age/demographic groups, transparent pricing indicators, and direct enquiry/booking buttons.
- **CTA:** "Explore All Health Checkups" -> `/health-packages`

### Section 10: Patient Journey (6-Step Visual Timeline)
- **Process Steps:**
  1. *Step 1: Discover Speciality* — Review departments and clinical offerings.
  2. *Step 2: Choose Specialist* — Filter doctors by experience and clinical focus.
  3. *Step 3: Schedule Appointment* — Convenient online booking or phone dispatch.
  4. *Step 4: Clinical Consultation* — Comprehensive diagnostic review and treatment plan.
  5. *Step 5: Coordinated Treatment* — Inpatient or day-care procedure with compassionate nursing.
  6. *Step 6: Follow-Up & Records* — Digital access to lab reports and post-care guidance.

### Section 11: Patient Services Hub
- **Design:** Interactive tile matrix linking to:
  - Admission Guidelines (`/patients/admission`)
  - Discharge Process (`/patients/discharge`)
  - Cashless Insurance (`/patients/billing-and-insurance`)
  - Medical Records Request (`/patients/medical-records`)
  - Patient Rights (`/patients/patient-rights`)
  - Feedback & Complaints (`/patients/feedback`)

### Section 12: International Patients Desk
- **Design:** Editorial panel highlighting dedicated concierge care, medical visa invitations, airport transfers, multi-lingual interpreters, and remote second opinions.
- **CTA:** "International Patient Services" -> `/international-patients`

### Section 13: Health Library (Evidence-Based Articles)
- **Design:** 3-column curated article cards with medical category tags, publication dates, read times, and medically verified author attributions.
- **CTA:** "Browse Health Articles" -> `/health-library`

### Section 14: News & Events
- **Design:** Timeline cards for hospital milestones, new clinical equipment installations, and free community health screening camps.
- **CTA:** "View Hospital News" -> `/news`

### Section 15: Patient Experiences & Testimonials
- **Design:** Genuine, dignified patient stories highlighting attentive nursing, successful surgical recovery, and transparent clinical counseling.

### Section 16: Frequently Asked Questions (Interactive Accordion)
- **Content:** Key questions regarding OPD hours, emergency triage, cashless insurance claims, visiting hours, and online doctor booking.

### Section 17: Contact & Directions
- **Layout:** 2-column layout with hospital location card, emergency telephone lines, public transit guides, and an embedded route map locator.

### Section 18: Final Call-to-Action (Appointment Banner)
- **Design:** High-impact contrasting card inviting patients to consult with specialists or contact the 24/7 care desk.

### Section 19: Complete Global Footer
- Full 6-column specification detailed in `navbar-and-footer-specification.md`.

---

## 2. Core Internal Pages Architecture

### 2.1 Doctor Directory & Doctor Profile (`/doctors` & `/doctors/[slug]`)
- **Directory Layout:**
  - Search input, department filter pills, availability filter.
  - Doctor card grid displaying verified photo, qualifications (e.g. MBBS, MD, DM, MCh, FRCS), designations, consultation days, and "Book Consultation" trigger.
- **Profile Detail (`/doctors/[slug]`):**
  - Clinical biography, education & fellowships, areas of expertise, published research, OPD schedule table, and sticky appointment booking widget.

### 2.2 Speciality Directory & Speciality Detail (`/specialities` & `/specialities/[slug]`)
- **Directory Layout:** Categorized cards with quick symptom tags and department links.
- **Detail Layout (`/specialities/[slug]`):**
  - Clinical introduction and scope of care.
  - Common conditions treated & diagnostic procedures.
  - Advanced treatment modalities.
  - Department faculty/doctors with direct booking.
  - Patient preparation guidelines and related health packages.

### 2.3 Appointment Booking Workflow (`/appointments` & `/appointments/confirmation`)
- **Step 1: Care Selection:** Select Speciality, Doctor, or General Consultation.
- **Step 2: Date & Slot:** Pick preferred date and time slot (Morning / Afternoon / Evening).
- **Step 3: Patient Demographics:** Full name, phone number, email, age, gender, previous hospital ID (optional).
- **Step 4: Reason for Visit:** Symptoms and notes.
- **Step 5: Consent & Submission:** Privacy agreement and instant validation.
- **Confirmation Page (`/appointments/confirmation`):** Unique booking reference number, appointment summary, hospital arrival checklist, and SMS/Email verification instructions.

### 2.4 Patient Services & Inpatient Information (`/patients/*`)
- Structured, readable guidelines for Admission, Discharge, Billing & Insurance, Medical Records Requests, Visitor Regulations, and Patient Rights.

### 2.5 Health Check Packages (`/health-packages` & `/health-packages/[slug]`)
- Package overview, detailed test breakdown (Pathology, Radiology, Cardiology, Consultations), fasting/preparation guidelines, and instant package booking form.

### 2.6 Health Library (`/health-library` & `/health-library/[slug]`)
- Medically reviewed articles with symptom checklists, preventive tips, author credentials, and disclaimer.

### 2.7 Contact Us (`/contact`)
- Departmental direct extensions, emergency triage guidance, parking instructions, and responsive contact inquiry form.

### 2.8 Governance & Legal (`/privacy-policy`, `/terms-and-conditions`, etc.)
- Comprehensive, legally structured compliance pages ensuring privacy, accessibility, and medical disclaimers.
