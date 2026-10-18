# Marriott Hospital: Navbar & Footer Specification

This document provides the exhaustive specification for the global Navigation Bar, Mega Menus, Utility Bar, Mobile Navigation Drawer, and Comprehensive 6-Column Footer for Marriott Hospital.

---

## 1. Top Utility Bar Specification

The Utility Bar is positioned immediately above the primary header to provide fast, high-contrast access to critical patient resources.

### 1.1 Content Elements
- **Emergency Hotline (Left):**
  - Text: `24/7 Emergency Care: +91 (484) 2800-911`
  - Icon: `PhoneCall` (Amber/Coral accent)
  - Interactive Action: `tel:+914842800911`
- **Campus Location (Left):**
  - Text: `Kochi Medical City, Kerala`
  - Icon: `MapPin`
  - Link: `/locations`
- **OPD Assistance / General Inquiry (Right):**
  - Text: `General Helpline: +91 (484) 2800-000`
  - Icon: `Phone`
  - Interactive Action: `tel:+914842800000`
- **Patient Support Email (Right):**
  - Text: `care@marriotthospital.org`
  - Icon: `Mail`
  - Interactive Action: `mailto:care@marriotthospital.org`
- **Language Selector (Right):**
  - English (`EN`) / Malayalam (`ML`) / Hindi (`HI`) dropdown toggle

### 1.2 Layout & Styling
- Background: Deep Medical Navy (`#0A192F` / `bg-slate-900`)
- Typography: 12px (text-xs), medium weight, Slate-300 with Slate-100 hover
- Separators: Subtle border-slate-700
- Padding: 6px 0 on desktop, hidden on ultra-small mobile with telephone badge condensed.

---

## 2. Main Header & Navigation Specification

### 2.1 Logo & Identity
- **Logo Presentation:** Custom medical emblem: stylized clinical cross intertwined with caring leaf motif, paired with bold typography: **MARRIOTT** in navy and **HOSPITAL** with sub-tagline *"Excellence in Compassionate Care"*.
- **Route:** Navigates to `/` (Homepage).
- **Compliance Rule:** Under no circumstances should hotel motifs, lodging stars, or Marriott Bonvoy graphics be used.

### 2.2 Primary Menu Items & Dropdowns

#### Menu 1: Home
- Destination: `/`
- Behavior: Direct link

#### Menu 2: About Us
- Destination: `/about`
- Menu Type: 2-Column Enhanced Dropdown
- Left Column (Introductory card):
  - "Committed to clinical excellence, evidence-based therapies, and compassionate patient care."
  - Quick action: "Read Our Story"
- Right Column (Navigation Links):
  - Overview (`/about`)
  - About the Hospital (`/about/our-hospital`)
  - Vision, Mission & Values (`/about/vision-mission-values`)
  - Leadership & Medical Directorate (`/about/leadership`)
  - Infrastructure & Technology (`/about/infrastructure`)
  - Quality & Patient Safety (`/about/quality-and-patient-safety`)
  - Accreditations (`/about/accreditations`)
  - Community Initiatives (`/about/community-initiatives`)

#### Menu 3: Doctors
- Destination: `/doctors`
- Menu Type: 2-Column Action Dropdown
- Interactive Search in Menu:
  - Doctor search input field with instant redirect to `/doctors?q=[term]`
- Navigation Links:
  - Find a Doctor Directory (`/doctors`)
  - Browse by Speciality (`/specialities`)
  - Browse by Department (`/departments`)
  - Appointment Booking (`/appointments`)
  - Doctor FAQs & Consultation Timings (`/appointments/faq`)

#### Menu 4: Specialities (Clinical Mega Menu)
- Destination: `/specialities`
- Menu Type: Full-Width 4-Column Mega Menu
- Column 1: Cardiac & Neuro
  - Cardiology & Cardiac Surgery (`/specialities/cardiology`)
  - Neurology & Neurosurgery (`/specialities/neurology`)
  - Critical Care & Trauma (`/specialities/critical-care`)
  - Pulmonology & Sleep Medicine (`/specialities/pulmonology`)
- Column 2: Surgical & Oncology
  - Orthopaedics & Joint Replacement (`/specialities/orthopaedics`)
  - Comprehensive Oncology (`/specialities/oncology`)
  - Gastroenterology & Hepatology (`/specialities/gastroenterology`)
  - General & Laparoscopic Surgery (`/specialities/general-surgery`)
- Column 3: Family, Women & Diagnostics
  - Obstetrics & Gynaecology (`/specialities/obstetrics-gynaecology`)
  - Paediatrics & Neonatology (`/specialities/paediatrics`)
  - Nephrology & Urology (`/specialities/nephrology` & `/specialities/urology`)
  - Diagnostic Imaging & Lab (`/specialities/diagnostic-services`)
  - ENT, Eye & Skin (`/specialities/ent`, `/specialities/ophthalmology`, `/specialities/dermatology`)
- Column 4: Clinical Spotlight & Quick Action
  - Feature Banner: "24/7 Level-1 Emergency & Stroke Unit"
  - Action 1: "Browse All Specialities" -> `/specialities`
  - Action 2: "Schedule Consultation" -> `/appointments`

#### Menu 5: Services & Facilities
- Destination: `/services`
- Menu Type: 2-Category Mega Dropdown
- Category 1: Clinical Services
  - Outpatient Services (`/services/outpatient-services`)
  - Inpatient Services (`/services/inpatient-services`)
  - Emergency & Trauma (`/services/emergency-services`)
  - Diagnostic Services (`/services/diagnostic-services`)
  - Surgical Services (`/services/surgical-services`)
  - Critical Care Units (`/services/critical-care`)
  - Rehabilitation & Physiotherapy (`/services/rehabilitation`)
- Category 2: Patient Facilities
  - Hospital Facilities Overview (`/facilities`)
  - Patient Rooms & Suites (`/facilities/patient-rooms`)
  - Waiting Areas & Lounges (`/facilities/waiting-areas`)
  - 24x7 Pharmacy (`/facilities/pharmacy`)
  - Blood Bank & Transfusion (`/facilities/blood-bank`)
  - Parking & Accessibility (`/facilities/parking-accessibility`)

#### Menu 6: Patient Information
- Destination: `/patients`
- Menu Type: Multi-Column Grouped Dropdown
- Column 1: Visits & Care
  - New Patient Guide (`/patients/new-patients`)
  - Existing Patient Services (`/patients/existing-patients`)
  - OPD Schedules & Timings (`/patients/opd-and-timings`)
  - Patient Rights & Responsibilities (`/patients/patient-rights`)
- Column 2: Inpatient Care
  - Admission Guidelines (`/patients/admission`)
  - Discharge Protocols (`/patients/discharge`)
  - Billing & Cashless Insurance (`/patients/billing-and-insurance`)
  - Medical Records Request (`/patients/medical-records`)
- Column 3: Assistance & Policies
  - Visitor Guidelines & Hours (`/patients/visitor-guidelines`)
  - Patient Feedback & Grievances (`/patients/feedback`)
  - Patient Care FAQs (`/patients/faqs`)

#### Menu 7: Health Packages
- Destination: `/health-packages`
- Menu Type: Categorized Dropdown
  - All Health Packages (`/health-packages`)
  - Comprehensive Executive Health (`/health-packages/comprehensive-executive-health`)
  - Cardiac Wellness Screening (`/health-packages/cardiac-wellness-screening`)
  - Women's Health Checkup (`/health-packages/womens-wellness-checkup`)
  - Senior Citizen Package (`/health-packages/senior-citizen-comprehensive`)
  - Diabetic Care Essential (`/health-packages/diabetic-care-essential`)
  - Master Health Checkup (`/health-packages/master-health-checkup`)

#### Menu 8: Resources (Health Library, News & Careers)
- Destination: `/health-library`
- Dropdown items:
  - Health Library & Articles (`/health-library`)
  - Hospital News & Press (`/news`)
  - Health Awareness Events (`/events`)
  - International Patients Desk (`/international-patients`)
  - Careers at Marriott Hospital (`/careers`)
  - Contact Us & Directions (`/contact`)

### 2.3 Actions & Utilities (Right Side of Header)
- **Search Trigger Button:** Opens modal global search overlay with instant keystroke filtering across doctors, conditions, packages, and services (`/search`).
- **Book an Appointment CTA:** High-contrast, prominent rounded button leading directly to `/appointments`.

---

## 3. Mobile Navigation Specification
- **Trigger:** Accessible hamburger menu toggle with `aria-expanded` and `aria-label="Toggle Navigation Menu"`.
- **Drawer Behavior:** Smooth slide-out from right/left, lock document body scroll (`overflow: hidden`).
- **Structure:**
  - Search input at the top of the mobile drawer.
  - Accordion dropdown groups for: About Us, Doctors, Specialities, Services & Facilities, Patient Information, Health Packages, Resources.
  - Sticky bottom mobile action: Direct Emergency Call button and Book Appointment button.
  - Generous tap targets (min 48px height), clear active states, smooth transition.

---

## 4. Comprehensive 6-Column Footer Specification

### 4.1 Pre-Footer Appointment Banner
- Background: Gradient Medical Navy (`#0A192F` to `#0F2C59`)
- Content:
  - Heading: "Need help finding the right care or specialist?"
  - Subtitle: "Our patient care coordinators are available 24/7 to assist with consultations, emergency care, and package inquiries."
  - Action 1: "Find a Doctor" (`/doctors`)
  - Action 2: "Book an Appointment" (`/appointments`)
  - Action 3: "Call +91 (484) 2800-000"

### 4.2 Main 6-Column Footer Layout
- **Column 1: Marriott Hospital**
  - Brand logo & tagline.
  - Introduction: "Marriott Hospital is committed to providing clear, compassionate healthcare information, advanced medical technology, and evidence-based patient care."
  - Verified Address: Marriott Hospital Campus, Medical City Road, Kochi, Kerala 682024, India.
  - Emergency Dispatch: `+91 (484) 2800-911`
  - General Desk: `+91 (484) 2800-000`
  - Email: `care@marriotthospital.org`
- **Column 2: Quick Links**
  - Home (`/`)
  - About Us (`/about`)
  - Leadership (`/about/leadership`)
  - Find a Doctor (`/doctors`)
  - Specialities (`/specialities`)
  - Services (`/services`)
  - Facilities (`/facilities`)
  - Contact Us (`/contact`)
  - Campus Locations (`/locations`)
- **Column 3: Patient Care Services**
  - Book an Appointment (`/appointments`)
  - New Patient Guide (`/patients/new-patients`)
  - Existing Patients (`/patients/existing-patients`)
  - OPD Timings & Consultations (`/patients/opd-and-timings`)
  - Admission Process (`/patients/admission`)
  - Discharge Protocols (`/patients/discharge`)
  - Billing & Cashless Insurance (`/patients/billing-and-insurance`)
  - Medical Records Request (`/patients/medical-records`)
  - Patient Rights (`/patients/patient-rights`)
  - Patient FAQs (`/patients/faqs`)
- **Column 4: Centres of Excellence & Specialities**
  - Cardiology & Cardiac Surgery (`/specialities/cardiology`)
  - Neurology & Neurosurgery (`/specialities/neurology`)
  - Orthopaedics & Joint Care (`/specialities/orthopaedics`)
  - Medical & Surgical Oncology (`/specialities/oncology`)
  - Gastroenterology & Hepatology (`/specialities/gastroenterology`)
  - Nephrology & Dialysis (`/specialities/nephrology`)
  - Obstetrics & Gynaecology (`/specialities/obstetrics-gynaecology`)
  - Paediatrics & Neonatal Care (`/specialities/paediatrics`)
  - View All 17 Specialities (`/specialities`)
- **Column 5: Health Resources & News**
  - Preventive Health Packages (`/health-packages`)
  - Health Library & Wellness Articles (`/health-library`)
  - Cardiac Health Guides (`/health-library/understanding-heart-attack-symptoms-prevention`)
  - Hospital Announcements & News (`/news`)
  - Community Health Camps & Events (`/events`)
  - International Patients Desk (`/international-patients`)
  - Careers & Medical Fellowships (`/careers`)
  - Patient Feedback Form (`/patients/feedback`)
- **Column 6: Quality, Ethics & Legal**
  - Quality & Patient Safety (`/about/quality-and-patient-safety`)
  - Hospital Accreditations (`/about/accreditations`)
  - Privacy Policy (`/privacy-policy`)
  - Terms and Conditions (`/terms-and-conditions`)
  - Cookie Policy (`/cookie-policy`)
  - Accessibility Statement (`/accessibility`)
  - Medical Disclaimer (`/medical-disclaimer`)
  - Visitor Guidelines (`/patients/visitor-guidelines`)

### 4.3 Footer Bottom Bar
- Dynamic copyright: `© {new Date().getFullYear()} Marriott Hospital. All rights reserved.`
- Compliance text: *"Marriott Hospital is an independent multi-speciality tertiary care institution. No affiliation with hospitality brand Marriott International."*
- Bottom legal inline links: Privacy Policy | Terms of Service | Cookie Preferences | Sitemap
