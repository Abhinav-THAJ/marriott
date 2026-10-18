"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Calendar,
  ChevronDown,
  Menu,
  HeartPulse,
  Activity,
  Bone,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { MobileMenu } from "./MobileMenu";
import { SearchModal } from "@/components/common/SearchModal";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [doctorNavSearch, setDoctorNavSearch] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus when pathname changes
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Hover handlers with debounce safety
  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Click toggle handler
  const handleToggle = (menuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-surface-container-high shadow-subtle w-full"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-20 gap-3 w-full">
            {/* Left: Brand Logo (Always links Home) */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation Links - Pure CSS Hover + React Click */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink">
              {/* SPECIALITIES */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("specialities")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle("specialities", e)}
                  aria-expanded={activeMenu === "specialities"}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeMenu === "specialities" || pathname.startsWith("/specialities")
                      ? "bg-secondary-container/70 text-secondary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span>Specialities</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "specialities" ? "rotate-180 text-secondary" : "group-hover:rotate-180 opacity-60"
                    }`}
                  />
                </button>

                {/* Dropdown panel: Opens on hover (group-hover) OR click (activeMenu) */}
                <div
                  className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${
                    activeMenu === "specialities"
                      ? "block opacity-100 pointer-events-auto"
                      : "hidden group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  <div className="w-[720px] max-w-[calc(100vw-4rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5">
                    <div className="grid grid-cols-4 gap-4">
                      {/* Column 1: Cardiac & Neuro */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2.5 pb-1 border-b border-slate-100">
                          <HeartPulse className="w-3.5 h-3.5 text-error" />
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">Heart & Brain</h4>
                        </div>
                        <ul className="space-y-1.5 text-xs text-on-surface-variant">
                          <li>
                            <Link href="/specialities/cardiology" className="hover:text-primary hover:underline">
                              Cardiology & Cardiac Surgery
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/neurology" className="hover:text-primary hover:underline">
                              Neurology & Neurosurgery
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/critical-care" className="hover:text-primary hover:underline">
                              Critical Care & ICUs
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/pulmonology" className="hover:text-primary hover:underline">
                              Pulmonology
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: Ortho & Oncology */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2.5 pb-1 border-b border-slate-100">
                          <Bone className="w-3.5 h-3.5 text-secondary" />
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">Ortho & Cancer</h4>
                        </div>
                        <ul className="space-y-1.5 text-xs text-on-surface-variant">
                          <li>
                            <Link href="/specialities/orthopaedics" className="hover:text-primary hover:underline">
                              Orthopaedics & Joints
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/medical-oncology" className="hover:text-primary hover:underline">
                              Medical Oncology
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/surgical-oncology" className="hover:text-primary hover:underline">
                              Surgical Oncology
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/spine-surgery" className="hover:text-primary hover:underline">
                              Spine Surgery
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 3: Transplants & Visceral */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2.5 pb-1 border-b border-slate-100">
                          <Activity className="w-3.5 h-3.5 text-secondary" />
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">Transplants & GI</h4>
                        </div>
                        <ul className="space-y-1.5 text-xs text-on-surface-variant">
                          <li>
                            <Link href="/specialities/liver-transplant" className="hover:text-primary hover:underline">
                              Liver Transplant & HPB
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/kidney-transplant" className="hover:text-primary hover:underline">
                              Renal Transplants
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/gastroenterology" className="hover:text-primary hover:underline">
                              Gastroenterology
                            </Link>
                          </li>
                          <li>
                            <Link href="/specialities/nephrology" className="hover:text-primary hover:underline">
                              Nephrology & Dialysis
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 4: Academic Directorate */}
                      <div className="bg-slate-50 p-3.5 rounded-xl flex flex-col justify-between border border-slate-200">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                            Academic Directorate
                          </span>
                          <h5 className="font-serif text-xs font-bold text-primary mt-1">24+ Quaternary Institutes</h5>
                          <p className="text-[10.5px] text-on-surface-variant mt-1 leading-relaxed">
                            Interdisciplinary surgical teams and robotic directorates.
                          </p>
                        </div>
                        <Link
                          href="/specialities"
                          className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-secondary hover:text-primary transition-colors"
                        >
                          <span>Explore All Institutes</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DOCTORS */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("doctors")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle("doctors", e)}
                  aria-expanded={activeMenu === "doctors"}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeMenu === "doctors" || pathname.startsWith("/doctors")
                      ? "bg-secondary-container/70 text-secondary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span>Doctors</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "doctors" ? "rotate-180 text-secondary" : "group-hover:rotate-180 opacity-60"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${
                    activeMenu === "doctors"
                      ? "block opacity-100 pointer-events-auto"
                      : "hidden group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (doctorNavSearch.trim()) {
                          window.location.href = `/doctors?q=${encodeURIComponent(doctorNavSearch.trim())}`;
                        }
                      }}
                      className="mb-2.5"
                    >
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-on-surface-variant" />
                        <input
                          type="text"
                          value={doctorNavSearch}
                          onChange={(e) => setDoctorNavSearch(e.target.value)}
                          placeholder="Search doctor..."
                          className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-secondary"
                        />
                      </div>
                    </form>

                    <div className="space-y-1 text-xs font-medium text-on-surface-variant">
                      <Link
                        href="/doctors"
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-secondary-container/50 text-primary font-semibold transition-colors"
                      >
                        <span>Find Doctor Directory</span>
                        <ArrowRight className="w-3 h-3 text-secondary" />
                      </Link>
                      <Link href="/specialities" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Browse by Speciality
                      </Link>
                      <Link href="/departments" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Browse by Department
                      </Link>
                      <Link href="/appointments" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Appointment Scheduling
                      </Link>
                      <Link href="/appointments/faq" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Doctor Consult FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* SERVICES */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle("services", e)}
                  aria-expanded={activeMenu === "services"}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeMenu === "services" || pathname.startsWith("/services") || pathname.startsWith("/departments") || pathname.startsWith("/facilities")
                      ? "bg-secondary-container/70 text-secondary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "services" ? "rotate-180 text-secondary" : "group-hover:rotate-180 opacity-60"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${
                    activeMenu === "services"
                      ? "block opacity-100 pointer-events-auto"
                      : "hidden group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4">
                    <div className="p-2 mb-2 bg-secondary-container/30 rounded-xl border border-secondary-container/50">
                      <p className="text-xs font-bold text-primary">Clinical Facilities</p>
                      <p className="text-[10.5px] text-on-surface-variant mt-0.5">
                        Modular robotic OTs, 3T MRI, 128-slice CT, and 24/7 emergency.
                      </p>
                    </div>
                    <div className="space-y-1 text-xs text-on-surface-variant font-medium">
                      <Link href="/services/emergency-services" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors">
                        Emergency & Trauma (24/7)
                      </Link>
                      <Link href="/departments/operation-theatres" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors">
                        Modular Robotic OTs
                      </Link>
                      <Link href="/departments/diagnostic-imaging" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors">
                        Diagnostic Imaging & PET-CT
                      </Link>
                      <Link href="/facilities/patient-rooms" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors">
                        Healing Suites & Inpatient Rooms
                      </Link>
                      <Link href="/facilities/pharmacy" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors">
                        24/7 Pharmacy & Lab
                      </Link>
                      <Link href="/services/outpatient-services" className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors">
                        Day Care & Infusion Lounge
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* PATIENTS */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("patients")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle("patients", e)}
                  aria-expanded={activeMenu === "patients"}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeMenu === "patients" || pathname.startsWith("/patients")
                      ? "bg-secondary-container/70 text-secondary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span>Patients</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "patients" ? "rotate-180 text-secondary" : "group-hover:rotate-180 opacity-60"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full right-0 pt-2 z-50 transition-all duration-150 ${
                    activeMenu === "patients"
                      ? "block opacity-100 pointer-events-auto"
                      : "hidden group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  <div className="w-[500px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <h4 className="font-bold text-[11px] uppercase tracking-wider text-primary mb-1.5 pb-1 border-b border-slate-100">
                          Hospitalization
                        </h4>
                        <div className="space-y-1 text-on-surface-variant">
                          <Link href="/patients" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary font-bold text-secondary">
                            Patient Central Hub →
                          </Link>
                          <Link href="/patients/admission" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            Pre-Admission Guide
                          </Link>
                          <Link href="/patients/discharge" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            Discharge & Take-Home Rx
                          </Link>
                          <Link href="/patients/opd-and-timings" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            OPD Clinic Timings
                          </Link>
                          <Link href="/international-patients" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            International Desk
                          </Link>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-[11px] uppercase tracking-wider text-primary mb-1.5 pb-1 border-b border-slate-100">
                          Insurance & MRD
                        </h4>
                        <div className="space-y-1 text-on-surface-variant">
                          <Link href="/patients/billing-and-insurance" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary font-semibold text-primary">
                            Cashless Insurance & TPA
                          </Link>
                          <Link href="/patients/medical-records" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            Digital MRD & Reports
                          </Link>
                          <Link href="/patients/visitor-guidelines" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            Visitor Regulations
                          </Link>
                          <Link href="/patients/patient-rights" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            Patient Rights
                          </Link>
                          <Link href="/patients/feedback" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 hover:text-primary">
                            Patient Feedback Desk
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PACKAGES */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("packages")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle("packages", e)}
                  aria-expanded={activeMenu === "packages"}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeMenu === "packages" || pathname.startsWith("/health-packages")
                      ? "bg-secondary-container/70 text-secondary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span>Packages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "packages" ? "rotate-180 text-secondary" : "group-hover:rotate-180 opacity-60"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full right-0 pt-2 z-50 transition-all duration-150 ${
                    activeMenu === "packages"
                      ? "block opacity-100 pointer-events-auto"
                      : "hidden group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3">
                    <div className="p-2 mb-2 bg-secondary-container/30 rounded-xl border border-secondary-container/50">
                      <p className="text-xs font-bold text-primary">Preventive Health Screenings</p>
                      <p className="text-[10.5px] text-on-surface-variant mt-0.5">
                        Comprehensive diagnostic checkups with same-day reports.
                      </p>
                    </div>
                    <div className="space-y-0.5 text-xs text-on-surface-variant font-medium">
                      <Link href="/health-packages" className="block px-2 py-1.5 rounded-lg bg-slate-50 hover:bg-secondary-container/50 font-bold text-primary transition-colors">
                        Explore All Packages →
                      </Link>
                      <Link href="/health-packages/comprehensive-executive-health" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Executive Health (₹5,499)
                      </Link>
                      <Link href="/health-packages/cardiac-wellness-screening" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Cardiac Wellness (₹3,999)
                      </Link>
                      <Link href="/health-packages/womens-wellness-checkup" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Women&apos;s Wellness (₹4,299)
                      </Link>
                      <Link href="/health-packages/senior-citizen-comprehensive" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Senior Citizen (₹4,799)
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ABOUT */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle("about", e)}
                  aria-expanded={activeMenu === "about"}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeMenu === "about" || pathname.startsWith("/about") || pathname.startsWith("/news") || pathname.startsWith("/careers") || pathname.startsWith("/contact") || pathname.startsWith("/health-library")
                      ? "bg-secondary-container/70 text-secondary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "about" ? "rotate-180 text-secondary" : "group-hover:rotate-180 opacity-60"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full right-0 pt-2 z-50 transition-all duration-150 ${
                    activeMenu === "about"
                      ? "block opacity-100 pointer-events-auto"
                      : "hidden group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3">
                    <div className="space-y-0.5 text-xs text-on-surface-variant font-medium">
                      <Link href="/about" className="block px-2 py-1.5 rounded-lg bg-slate-50 hover:bg-secondary-container/50 font-bold text-primary transition-colors">
                        About Marriott Hospital Overview
                      </Link>
                      <Link href="/about/vision-mission-values" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Vision, Mission & Core Values
                      </Link>
                      <Link href="/about/leadership" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Leadership & Directorate
                      </Link>
                      <Link href="/about/infrastructure" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Infrastructure & Clean Tech
                      </Link>
                      <Link href="/about/quality-and-patient-safety" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Quality & Patient Safety
                      </Link>
                      <div className="my-1 border-t border-slate-100"></div>
                      <Link href="/health-library" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Health Library & Articles
                      </Link>
                      <Link href="/news" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Hospital News & Milestones
                      </Link>
                      <Link href="/careers" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Careers at Marriott
                      </Link>
                      <Link href="/contact" className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                        Contact Us & Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side Actions - Compact, Airy, Stays Cleanly Inside Screen */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
              {/* Global Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Open Search"
                title="Search Doctors, Tests & Specialities"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Book Consultation CTA Button */}
              <Link
                href="/appointments"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-primary hover:bg-primary-container text-white font-semibold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-secondary-fixed" />
                <span>Book Consultation</span>
              </Link>

              {/* Patient Portal Profile Icon - Shown on xl+ */}
              <Link
                href="/patients/medical-records"
                className="hidden xl:flex w-8 h-8 rounded-full bg-primary text-secondary-fixed items-center justify-center font-bold text-xs hover:bg-primary-container transition-colors flex-shrink-0"
                title="Patient Portal Login"
              >
                <span>Pt</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-on-surface transition-colors"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />
    </>
  );
};

export default Navbar;
