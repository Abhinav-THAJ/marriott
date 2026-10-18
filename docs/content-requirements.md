# Marriott Hospital: Content & Data Requirements

This document establishes the editorial integrity guidelines, data models, clinical disclaimers, and content standards for Marriott Hospital.

---

## 1. Editorial Integrity & Non-Fabrication Standards

As a premier healthcare digital platform, accuracy, patient safety, and clinical credibility are paramount.
1. **No Fabricated Accreditations:** Accreditations are presented in conformity with national standards (e.g., NABH entry-level, NABL compliance for laboratories, ISO 9001:2015 quality frameworks). Any pending certifications are explicitly designated as *Under Audit*.
2. **Clinical Review Status:** All health library articles and condition guides must display clear medical review attribution (e.g., "Medically reviewed by Marriott Hospital Clinical Advisory Board").
3. **Emergency Disclaimers:** Web forms and chatbots are not monitored for acute medical emergencies. Prominent notices urge patients experiencing acute chest pain, stroke symptoms, or severe trauma to call `+91 (484) 2800-911` immediately.
4. **No Commercial Exaggerations:** Avoid unverified marketing superlatives ("#1 in the nation", "100% cure rate"). Use objective, ethical descriptions ("Dedicated tertiary cardiac team", "Comprehensive stroke protocol").

---

## 2. Structured Data Schemas

### 2.1 Doctor Profile Data Schema
```typescript
export interface Doctor {
  id: string;
  slug: string;
  name: string;
  designation: string; // e.g. "Senior Consultant & Head of Department"
  department: string;  // e.g. "Cardiology & Cardiac Surgery"
  specialitySlug: string;
  qualifications: string; // e.g. "MBBS, MD (Gen Med), DM (Cardiology), FACC"
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
```

### 2.2 Speciality Data Schema
```typescript
export interface Speciality {
  id: string;
  slug: string;
  name: string;
  category: "Tertiary Centres" | "Medical Specialities" | "Surgical Disciplines" | "Diagnostic & Support";
  iconName: string;
  heroTagline: string;
  overview: string;
  keyConditions: string[];
  diagnosticTechnologies: string[];
  treatmentModalities: string[];
  leadDoctorSlugs: string[];
  faqs: { question: string; answer: string }[];
}
```

### 2.3 Health Package Schema
```typescript
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
  priceNote: string; // e.g. "₹3,999 (Inclusive of all tests & consultations)"
  testsIncluded: {
    category: string; // e.g. "Cardiology", "Pathology", "Radiology", "Doctor Consultation"
    tests: string[];
  }[];
  preparationGuidelines: string[];
  featured: boolean;
}
```

### 2.4 Patient Service Schema
```typescript
export interface PatientService {
  id: string;
  slug: string;
  title: string;
  summary: string;
  processSteps: { title: string; description: string }[];
  requiredDocuments: string[];
  contactDesk: string;
  faqs: { question: string; answer: string }[];
}
```

---

## 3. Mandatory Medical & Regulatory Disclaimers

### 3.1 Website Global Disclaimer
> *"The information provided on the Marriott Hospital website is intended for general informational, educational, and patient awareness purposes only. It should not be considered medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for clinical evaluation."*

### 3.2 Appointment Booking Notice
> *"Submitting an online appointment request initiates a booking with our hospital registration desk. Confirmation is communicated via SMS and Email once the consultation slot is allocated by the department coordinator."*

### 3.3 Cashless Insurance & Billing Notice
> *"Cashless hospitalization is subject to pre-authorization approval from the respective TPA / Insurance company. Please present your original health card and policy documents to the Insurance Desk upon admission."*
