# Marriott Hospital: Implementation Plan & Technical Roadmap

## 1. Project Phase Breakdown

```
Phase 1: Architecture, Research & Specifications (Completed)
├── Reference Website Audit (Aster, Renai Medicity, Apollo, Gautham)
├── Sitemap & 100% Route Coverage Definition
├── Global Navbar, Mega Menu & Footer Architecture
├── Design System, Token Definitions & Content Integrity Model
└── Implementation Plan & Milestones

Phase 2: Foundation & Project Bootstrapping
├── Initialize Next.js 14/15 App Router with TypeScript & Tailwind CSS
├── Configure Lucide React, Framer Motion, and Tailwind theme tokens
├── Establish central data repositories (`src/data/*` for doctors, specialities, packages, facilities, articles, faqs)
└── Setup base layout, SEO meta tags, Google Fonts, and root providers

Phase 3: AI Asset Generation & Media Pipeline
├── Generate photorealistic conceptual healthcare imagery via AI generation:
│   ├── Hero banner (modern clinical environment, compassionate doctor-patient consultation)
│   ├── Medical leadership and multispecialty doctor team
│   ├── Hospital reception and contemporary interior architecture
│   ├── High-tech diagnostic and modular operating theatre
│   ├── Speciality banners (Cardiology, Orthopaedics, Paediatrics, Neurology)
│   └── Preventative wellness & health packages
└── Store and optimize in `public/images/*`

Phase 4: Global Core Components
├── Utility Top Bar (24/7 Emergency hotline, phone, email, language toggle)
├── Main Sticky Header with responsive logo, search trigger, and appointment CTA
├── Multi-tier Mega Menus (Specialities, About, Services, Patient Info, Packages)
├── Mobile Navigation Drawer with accordions, search, and quick emergency dial
├── Global Modal Search System (Keystroke search across doctors, specialities, packages, articles)
└── Comprehensive 6-Column Footer with dynamic current year and pre-footer appointment banner

Phase 5: Homepage Implementation (19 Ordered Sections)
├── Hero section with high-impact visuals, key stats, and dual CTAs
├── Quick Access 6-card shortcut matrix
├── Introduction to Marriott Hospital (mission, clinical standards)
├── Specialities and clinical departments responsive showcase
├── Interactive Find a Doctor tool with instant filters
├── Why Choose Marriott Hospital (clinical governance, multidisciplinary care)
├── Centres of Excellence & Flagship Institutes
├── Facilities and Modern Technology
├── Preventive Health Packages (pricing, inclusions, booking CTA)
├── Patient Journey 6-step timeline
├── Patient Services Hub
├── International Patients Desk
├── Health Library curated articles
├── News, Announcements & Community Events
├── Patient Stories & Care Experiences
├── Comprehensive Interactive FAQs Accordion
├── Verified Contact, Operating Hours & Directions Map
└── Final Appointment CTA Banner

Phase 6: Complete Internal Route Implementation (Zero Dead Links)
├── About Us Section (`/about`, `/about/our-hospital`, `/about/vision-mission-values`, `/about/leadership`, `/about/infrastructure`, `/about/quality-and-patient-safety`, `/about/accreditations`, `/about/community-initiatives`)
├── Doctors Section (`/doctors`, `/doctors/[slug]`)
├── Specialities Section (`/specialities`, `/specialities/[slug]`)
├── Departments Section (`/departments`, `/departments/[slug]`)
├── Services & Facilities Section (`/services`, `/services/[slug]`, `/facilities`, `/facilities/[slug]`)
├── Patient Information Section (`/patients`, `/patients/new-patients`, `/patients/existing-patients`, `/patients/opd-and-timings`, `/patients/admission`, `/patients/discharge`, `/patients/billing-and-insurance`, `/patients/medical-records`, `/patients/patient-rights`, `/patients/visitor-guidelines`, `/patients/feedback`, `/patients/faqs`)
├── Health Packages Section (`/health-packages`, `/health-packages/[slug]`)
├── Health Library Section (`/health-library`, `/health-library/[slug]`)
├── News & Events Section (`/news`, `/news/[slug]`, `/events`, `/events/[slug]`)
├── Careers Section (`/careers`, `/careers/[slug]`, `/careers/apply`)
├── International Patients Desk (`/international-patients`)
├── Appointment Booking Flow (`/appointments`, `/appointments/confirmation`)
├── Contact & Locations (`/contact`, `/locations`)
└── Governance & Legal (`/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`, `/accessibility`, `/medical-disclaimer`)

Phase 7: Quality Assurance, Accessibility & Production Build
├── Test responsive behavior across Mobile (320px–480px), Tablet (768px), Desktop (1024px, 1440px)
├── Validate all form submissions, interactive filters, modal search, and tabs
├── Run TypeScript strict type verification
├── Execute Next.js production build (`npm run build`)
└── Produce Final QA & Delivery Report
```
