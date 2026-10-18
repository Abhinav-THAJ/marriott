"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronRight, PhoneCall, Calendar, Search } from "lucide-react";
import { Logo } from "@/components/common/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenSearch }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const navLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-250">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <Logo showTagline={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Quick Actions */}
        <div className="p-4 border-b border-slate-100 space-y-3 bg-slate-50">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 text-slate-400 text-sm hover:border-clinical-600 transition-colors shadow-sm"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span>Search doctors, tests, specialities...</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/appointments"
              onClick={navLinkClick}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-clinical-800 hover:bg-clinical-900 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </Link>
            <a
              href="tel:+914842800911"
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Emergency</span>
            </a>
          </div>
        </div>

        {/* Navigation Accordion Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <Link
            href="/"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>

          {/* About Us */}
          <div>
            <button
              onClick={() => toggleSection("about")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>About Us</span>
              {openSection === "about" ? (
                <ChevronDown className="w-4 h-4 text-clinical-800" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {openSection === "about" && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg text-xs font-medium text-slate-600">
                <Link href="/about" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Overview & Philosophy
                </Link>
                <Link href="/about/our-hospital" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Our Hospital & Campus
                </Link>
                <Link href="/about/vision-mission-values" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Vision, Mission & Values
                </Link>
                <Link href="/about/leadership" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Leadership Directorate
                </Link>
                <Link href="/about/infrastructure" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Hospital Infrastructure
                </Link>
                <Link href="/about/quality-and-patient-safety" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Quality & Patient Safety
                </Link>
                <Link href="/about/accreditations" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Accreditations & Certifications
                </Link>
                <Link href="/about/community-initiatives" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Community Initiatives & CSR
                </Link>
              </div>
            )}
          </div>

          {/* Doctors */}
          <div>
            <button
              onClick={() => toggleSection("doctors")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Doctors</span>
              {openSection === "doctors" ? (
                <ChevronDown className="w-4 h-4 text-clinical-800" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {openSection === "doctors" && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg text-xs font-medium text-slate-600">
                <Link href="/doctors" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Find a Doctor Directory
                </Link>
                <Link href="/specialities" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Browse by Speciality
                </Link>
                <Link href="/departments" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Browse by Department
                </Link>
                <Link href="/appointments" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Appointment Information
                </Link>
                <Link href="/appointments/faq" onClick={navLinkClick} className="block py-1.5 hover:text-clinical-800">
                  Doctor & Consultation FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Specialities */}
          <div>
            <button
              onClick={() => toggleSection("specialities")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Specialities (17)</span>
              {openSection === "specialities" ? (
                <ChevronDown className="w-4 h-4 text-clinical-800" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {openSection === "specialities" && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg text-xs font-medium text-slate-600 max-h-56 overflow-y-auto">
                <Link href="/specialities" onClick={navLinkClick} className="block py-1.5 font-bold text-clinical-800">
                  View All Specialities →
                </Link>
                <Link href="/specialities/cardiology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Cardiology & Cardiac Surgery
                </Link>
                <Link href="/specialities/neurology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Neurology & Neurosurgery
                </Link>
                <Link href="/specialities/orthopaedics" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Orthopaedics & Joint Care
                </Link>
                <Link href="/specialities/oncology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Comprehensive Oncology
                </Link>
                <Link href="/specialities/gastroenterology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Gastroenterology & Hepatology
                </Link>
                <Link href="/specialities/nephrology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Nephrology & Renal Care
                </Link>
                <Link href="/specialities/urology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Urology & Andrology
                </Link>
                <Link href="/specialities/general-medicine" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Internal Medicine
                </Link>
                <Link href="/specialities/general-surgery" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  General & Laparoscopic Surgery
                </Link>
                <Link href="/specialities/obstetrics-gynaecology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Obstetrics & Gynaecology
                </Link>
                <Link href="/specialities/paediatrics" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Paediatrics & Neonatology
                </Link>
                <Link href="/specialities/pulmonology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Pulmonology & Sleep Care
                </Link>
                <Link href="/specialities/ent" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  ENT (Ear, Nose, Throat)
                </Link>
                <Link href="/specialities/ophthalmology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Ophthalmology & Eye Care
                </Link>
                <Link href="/specialities/dermatology" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Dermatology & Skin
                </Link>
                <Link href="/specialities/critical-care" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Critical Care & ICUs
                </Link>
                <Link href="/specialities/diagnostic-services" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Diagnostic Imaging & Pathology
                </Link>
              </div>
            )}
          </div>

          {/* Services & Facilities */}
          <div>
            <button
              onClick={() => toggleSection("services")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Services & Facilities</span>
              {openSection === "services" ? (
                <ChevronDown className="w-4 h-4 text-clinical-800" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {openSection === "services" && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg text-xs font-medium text-slate-600">
                <Link href="/services" onClick={navLinkClick} className="block py-1.5 font-bold text-clinical-800">
                  All Clinical Services
                </Link>
                <Link href="/services/outpatient-services" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Outpatient Services (OPD)
                </Link>
                <Link href="/services/inpatient-services" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Inpatient Services & Wards
                </Link>
                <Link href="/services/emergency-services" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  24/7 Emergency Care
                </Link>
                <Link href="/facilities" onClick={navLinkClick} className="block py-1.5 font-bold text-clinical-800 pt-2 border-t border-slate-200">
                  Hospital Facilities
                </Link>
                <Link href="/facilities/patient-rooms" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Patient Rooms & Suites
                </Link>
                <Link href="/facilities/pharmacy" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  24x7 In-Campus Pharmacy
                </Link>
                <Link href="/facilities/blood-bank" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Blood Bank & Transfusion
                </Link>
                <Link href="/facilities/parking-accessibility" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Parking & Accessibility
                </Link>
              </div>
            )}
          </div>

          {/* Patient Information */}
          <div>
            <button
              onClick={() => toggleSection("patients")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Patient Information</span>
              {openSection === "patients" ? (
                <ChevronDown className="w-4 h-4 text-clinical-800" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {openSection === "patients" && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg text-xs font-medium text-slate-600">
                <Link href="/patients" onClick={navLinkClick} className="block py-1.5 font-bold text-clinical-800">
                  Patient Guide Overview
                </Link>
                <Link href="/patients/new-patients" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  New Patients Guide
                </Link>
                <Link href="/patients/existing-patients" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Existing Patients & Follow-ups
                </Link>
                <Link href="/patients/opd-and-timings" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  OPD & Consultation Timings
                </Link>
                <Link href="/patients/admission" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Admission Guidelines
                </Link>
                <Link href="/patients/discharge" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Discharge Protocol
                </Link>
                <Link href="/patients/billing-and-insurance" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Billing & Cashless Insurance
                </Link>
                <Link href="/patients/medical-records" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Medical Records Request
                </Link>
                <Link href="/patients/patient-rights" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Patient Rights & Charter
                </Link>
                <Link href="/patients/visitor-guidelines" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Visitor Guidelines
                </Link>
                <Link href="/patients/feedback" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Feedback & Grievances
                </Link>
                <Link href="/patients/faqs" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Patient Care FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Health Packages */}
          <div>
            <button
              onClick={() => toggleSection("packages")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Health Packages</span>
              {openSection === "packages" ? (
                <ChevronDown className="w-4 h-4 text-clinical-800" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {openSection === "packages" && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg text-xs font-medium text-slate-600">
                <Link href="/health-packages" onClick={navLinkClick} className="block py-1.5 font-bold text-clinical-800">
                  View All Packages →
                </Link>
                <Link href="/health-packages/comprehensive-executive-health" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Executive Health Checkup
                </Link>
                <Link href="/health-packages/cardiac-wellness-screening" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Cardiac Wellness Screening
                </Link>
                <Link href="/health-packages/womens-wellness-checkup" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Women&apos;s Wellness Checkup
                </Link>
                <Link href="/health-packages/senior-citizen-comprehensive" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Senior Citizen Package
                </Link>
                <Link href="/health-packages/diabetic-care-essential" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Diabetic Care Package
                </Link>
                <Link href="/health-packages/master-health-checkup" onClick={navLinkClick} className="block py-1 hover:text-clinical-800">
                  Master Health Checkup
                </Link>
              </div>
            )}
          </div>

          {/* Health Library */}
          <Link
            href="/health-library"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Health Library & Articles
          </Link>

          {/* News & Events */}
          <Link
            href="/news"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Hospital News & Milestones
          </Link>

          <Link
            href="/events"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Health Awareness Events
          </Link>

          {/* International Patients */}
          <Link
            href="/international-patients"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            International Patients Desk
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Careers & Vacancies
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            onClick={navLinkClick}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact & Directions
          </Link>
        </div>

        {/* Bottom Drawer Bar */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-slate-500">
          <p className="font-semibold text-slate-700">Marriott Hospital Campus</p>
          <p className="text-[11px] mt-0.5">Medical City Road, Kochi, Kerala</p>
          <p className="text-[11px] mt-0.5">Emergency: +91 (484) 2800-911</p>
        </div>
      </div>
    </div>
  );
};
