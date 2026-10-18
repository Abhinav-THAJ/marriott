import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Phone,
  Mail,
  MapPin,
  Calendar,
  UserCheck,
  ShieldCheck,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { Logo } from "@/components/common/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-primary-container">
      {/* Stitch Quaternary Chairman's Board Consultation Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-container to-primary py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-secondary-fixed/20 text-secondary-fixed text-xs font-semibold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Multidisciplinary Collegial Board
            </span>
            <h3 className="font-serif italic text-2xl sm:text-3xl text-surface-bright tracking-tight leading-tight">
              Facing a Complex Diagnosis? Consult the Quaternary Chairman&apos;s Board
            </h3>
            <p className="text-sm text-primary-fixed-dim mt-2 leading-relaxed">
              Expedited consensus clinical review for complex multi-organ transplants, rare oncology, neurovascular surgery, and international second opinions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-secondary-fixed text-primary font-semibold text-sm hover:bg-surface-bright transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Request Board Case Review</span>
            </Link>

            <a
              href="tel:+914842800000"
              className="inline-flex items-center gap-2 px-4 py-3 rounded bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-bright text-sm font-medium border border-white/15 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-secondary-fixed" />
              <span>Call Board Secretariat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer from Stitch */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Quaternary Centers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-fixed mb-4">
              Quaternary Centers
            </h4>
            <ul className="space-y-2 text-xs text-primary-fixed-dim">
              <li>
                <Link href="/specialities/cardiology" className="hover:text-surface-bright transition-colors">
                  Organ Transplant & HPB Sciences
                </Link>
              </li>
              <li>
                <Link href="/specialities/neurology" className="hover:text-surface-bright transition-colors">
                  Comprehensive Neuro-Oncology
                </Link>
              </li>
              <li>
                <Link href="/specialities/orthopaedics" className="hover:text-surface-bright transition-colors">
                  Robotic Joint Reconstruction
                </Link>
              </li>
              <li>
                <Link href="/specialities/medical-oncology" className="hover:text-surface-bright transition-colors">
                  Cellular Immunotherapy & Bone Marrow
                </Link>
              </li>
              <li>
                <Link href="/specialities/gastroenterology" className="hover:text-surface-bright transition-colors">
                  Advanced Digestive Diseases & Endoscopy
                </Link>
              </li>
              <li>
                <Link href="/specialities/paediatrics" className="hover:text-surface-bright transition-colors">
                  Pediatric Neonatal Critical Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Clinical Care & Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-fixed mb-4">
              Clinical Care & Services
            </h4>
            <ul className="space-y-2 text-xs text-primary-fixed-dim">
              <li>
                <Link href="/doctors" className="hover:text-surface-bright transition-colors">
                  Find a Consultant Doctor
                </Link>
              </li>
              <li>
                <Link href="/health-packages" className="hover:text-surface-bright transition-colors">
                  Executive Health Check Packages
                </Link>
              </li>
              <li>
                <Link href="/patients/billing-and-insurance" className="hover:text-surface-bright transition-colors">
                  100% Cashless TPA & Insurance Desk
                </Link>
              </li>
              <li>
                <Link href="/international-patients" className="hover:text-surface-bright transition-colors">
                  International Patients Concierge
                </Link>
              </li>
              <li>
                <Link href="/patients/medical-records" className="hover:text-surface-bright transition-colors">
                  Download Lab & Diagnostic Reports
                </Link>
              </li>
              <li>
                <Link href="/patients/visitor-guidelines" className="hover:text-surface-bright transition-colors">
                  Visiting Hours & ICU Protocols
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academics & Ethics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-fixed mb-4">
              Academics & Ethics
            </h4>
            <ul className="space-y-2 text-xs text-primary-fixed-dim">
              <li>
                <Link href="/about/vision-mission-values" className="hover:text-surface-bright transition-colors">
                  Sub-Specialty Fellowship Programs
                </Link>
              </li>
              <li>
                <Link href="/about/quality-and-patient-safety" className="hover:text-surface-bright transition-colors">
                  Institutional Ethics Committee
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-surface-bright transition-colors">
                  Faculty & Nursing Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-surface-bright transition-colors">
                  Clinical Trials & Research Publications
                </Link>
              </li>
              <li>
                <Link href="/health-library" className="hover:text-surface-bright transition-colors">
                  Medical Knowledge & Health Library
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-surface-bright transition-colors">
                  Medical Advisory Council
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Emergency Dispatch */}
          <div>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-error-container mb-4">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              <span>Emergency Dispatch</span>
            </div>
            <div className="space-y-3 text-xs text-primary-fixed-dim">
              <div className="bg-surface-container-lowest/5 p-3 rounded border border-white/10">
                <p className="font-semibold text-surface-bright">Kochi Medical Campus:</p>
                <p className="mt-0.5 text-[11px] leading-relaxed">
                  NH 544 Corridor, Edappally - Aluva Road, Kochi, Kerala 682024
                </p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px]">24/7 Hotline:</span>
                  <a href="tel:+914842800000" className="font-bold text-secondary-fixed hover:underline">
                    +91 (484) 2800-000
                  </a>
                </div>
              </div>

              <div className="bg-surface-container-lowest/5 p-3 rounded border border-white/10">
                <p className="font-semibold text-surface-bright flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Air Ambulance & Helipad-01:
                </p>
                <p className="mt-0.5 text-[11px]">
                  Rapid inter-hospital critical transit active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations Trust Badges Bar from Stitch */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 text-xs text-surface-bright/80">
            <span className="material-symbols-outlined text-secondary-fixed text-sm">verified</span>
            <span className="font-medium">JCI Gold Seal Certified</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-surface-bright/80">
            <span className="material-symbols-outlined text-secondary-fixed text-sm">health_and_safety</span>
            <span className="font-medium">NABH Tertiary Hospital</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-surface-bright/80">
            <span className="material-symbols-outlined text-secondary-fixed text-sm">biotech</span>
            <span className="font-medium">NABL Quality Accredited Labs</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-surface-bright/80">
            <span className="material-symbols-outlined text-secondary-fixed text-sm">gavel</span>
            <span className="font-medium">Ethical Medical Governance</span>
          </div>
        </div>
      </div>

      {/* 8.5 Footer Bottom Bar */}
      <div className="border-t border-navy-800 bg-navy-950/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p>
              &copy; {currentYear} Marriott Hospital. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Marriott Hospital is an independent multi-speciality tertiary care institution. No affiliation with hospitality brand Marriott International.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>&bull;</span>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <span>&bull;</span>
            <Link href="/medical-disclaimer" className="hover:text-white transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
