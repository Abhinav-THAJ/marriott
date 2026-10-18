"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Search,
  PhoneCall,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Activity,
  Award,
  Sparkles,
  HeartPulse,
  Stethoscope,
  Building2,
  FileText,
  BadgeCheck,
  CheckCircle2,
  Plane,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { doctorsData } from "@/data/doctors";
import { specialitiesData } from "@/data/specialities";
import { healthPackagesData } from "@/data/packages";
import { generalFaqs } from "@/data/faqs";

export default function HomePage() {
  // Triage Console Tabs State
  const [activeTab, setActiveTab] = useState<"specialty" | "symptoms" | "doctor" | "procedure">("specialty");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("kochi-main");
  const [selectedSpecialty, setSelectedSpecialty] = useState("cardiology");

  // Telemetry real-time sync clock
  const [syncTime, setSyncTime] = useState("LIVE 00:00:00");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setSyncTime(`LIVE ${now.toLocaleTimeString("en-GB")}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filtered doctors for preview
  const featuredDoctors = doctorsData.slice(0, 4);

  // Featured Institutes
  const institutes = specialitiesData.slice(0, 6);

  return (
    <div className="flex flex-col w-full bg-surface text-on-surface">

      {/* =========================================================================
          SECTION 1 — EDITORIAL SPLIT HERO WITH LIVE TRIAGE TELEMETRY & CONSOLE
          ========================================================================= */}
      <section className="relative w-full biophilic-hero text-white overflow-hidden border-b border-primary-container">
        {/* Cinematic Quaternary Hospital Campus Photo Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-quaternary-campus.jpg"
            alt="Marriott Quaternary Teaching Hospital Academic Medical Center Campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-center opacity-30 select-none"
          />
          {/* Multi-layered directional gradient overlays to preserve biophilic contrast & typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002023] via-[#002023]/90 to-[#002023]/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#002023] via-transparent to-[#002023]/70"></div>
        </div>

        {/* Ambient Biophilic Backlight Orbs */}
        <div className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[480px] h-[320px] rounded-full bg-secondary-container/10 blur-2xl pointer-events-none"></div>

        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 pb-12 relative z-10">
          {/* Breadcrumb Meta / Accreditation Flag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-20 sm:mb-24">
            <div className="flex items-center gap-2 text-primary-fixed-dim text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
              <span className="tracking-widest uppercase">Quaternary Clinical Directorate • 4 Teaching Campuses</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest/10 px-3 py-1 rounded backdrop-blur-md text-xs text-surface-bright">
              <ShieldCheck className="w-4 h-4 text-secondary-fixed" />
              <span>NABH & JCI Quaternary Accredited Network</span>
            </div>
          </div>

          {/* Main Split Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
            {/* Left Statement: Human Dignity & Clinical Authority */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-secondary-fixed"></span>
                <span className="text-xs font-semibold text-secondary-fixed tracking-wider uppercase">
                  Institutes of Advanced Healing
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-surface-bright leading-[1.1] tracking-tight">
                Precision Quaternary Medicine. <br />
                <span className="text-secondary-fixed font-light italic">Human Dignity</span> at Every Milestone.
              </h1>

              <p className="text-sm sm:text-base text-primary-fixed-dim max-w-2xl leading-relaxed">
                A world-renowned teaching hospital network with 4 specialized campuses in Kochi, pioneering clinical breakthroughs in multi-organ transplantation, intraoperative robotic surgery, cellular immunotherapy, and zero-delay stroke resuscitation.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#triage-console"
                  className="px-5 py-3 bg-secondary-fixed text-primary font-semibold text-sm rounded hover:bg-surface-bright transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Clinical Specialties</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/international-patients"
                  className="px-5 py-3 bg-surface-container-lowest/10 text-surface-bright font-semibold text-sm rounded hover:bg-surface-container-lowest/20 transition-colors inline-flex items-center backdrop-blur-sm border border-white/10"
                >
                  <span>Global Tumor Board Review</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Campus Photo Card & Live Clinical Telemetry */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:-mt-20">
              {/* Authentic Indian Hospital Campus Visual Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src="/images/hero-quaternary-campus.jpg"
                    alt="Marriott Hospital Kochi Campus - Multi-Specialty Tertiary Care"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002023] via-[#002023]/25 to-transparent"></div>
                  
                  {/* Floating Live Badges */}
                  <div className="absolute top-3 left-3 bg-primary/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-surface-bright flex items-center gap-1.5 border border-white/15 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>24/7 Level-1 Emergency & Trauma Active</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div>
                      <p className="font-serif font-bold text-base text-surface-bright">Marriott Hospital Kochi Campus</p>
                      <p className="text-[11px] text-primary-fixed-dim">Tertiary & Quaternary Multi-Speciality Medical Center</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Quaternary Operations Telemetry */}
              <div className="flex flex-col gap-3 bg-primary/80 p-5 rounded-2xl backdrop-blur-xl border border-white/15 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"></span>
                    <span className="text-xs font-bold text-surface-bright uppercase tracking-wider">
                      Live Quaternary Telemetry
                    </span>
                  </div>
                  <span className="text-[11px] text-primary-fixed-dim font-mono tracking-wider">
                    {syncTime}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {/* Metric 1: ER Wait */}
                <div className="bg-surface-container-lowest/5 p-3 rounded flex flex-col justify-between border border-white/5">
                  <div className="flex items-center gap-1 text-primary-fixed-dim mb-1">
                    <Activity className="w-3.5 h-3.5 text-secondary-fixed" />
                    <span className="text-[10px] font-semibold uppercase">ER Triage</span>
                  </div>
                  <span className="text-lg font-bold text-secondary-fixed font-mono">0 MIN</span>
                  <span className="text-[10px] text-surface-bright/70">Immediate Triage</span>
                </div>

                {/* Metric 2: ICU Census */}
                <div className="bg-surface-container-lowest/5 p-3 rounded flex flex-col justify-between border border-white/5">
                  <div className="flex items-center gap-1 text-primary-fixed-dim mb-1">
                    <Building2 className="w-3.5 h-3.5 text-secondary-fixed" />
                    <span className="text-[10px] font-semibold uppercase">Level-1 ICU</span>
                  </div>
                  <span className="text-lg font-bold text-surface-bright font-mono">8 BEDS</span>
                  <span className="text-[10px] text-surface-bright/70">Across 4 Wings</span>
                </div>

                {/* Metric 3: Cath Lab */}
                <div className="bg-surface-container-lowest/5 p-3 rounded flex flex-col justify-between border border-white/5">
                  <div className="flex items-center gap-1 text-primary-fixed-dim mb-1">
                    <HeartPulse className="w-3.5 h-3.5 text-secondary-fixed" />
                    <span className="text-[10px] font-semibold uppercase">Cath Lab</span>
                  </div>
                  <span className="text-lg font-bold text-secondary-fixed font-mono">ACTIVE</span>
                  <span className="text-[10px] text-surface-bright/70">Biplane 24/7 Ready</span>
                </div>
              </div>

              {/* Rapid Clinical Transit Tracker */}
              <div className="bg-surface-container-lowest/5 p-3 rounded flex items-center justify-between gap-3 border border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed flex-shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-surface-bright">Air Ambulance & ECMO Transit</p>
                    <p className="text-[11px] text-primary-fixed-dim">Pad-01 East & Regional Airport Operational</p>
                  </div>
                </div>
                <a
                  href="tel:+914842800000"
                  className="px-2.5 py-1 rounded bg-error-container text-on-error-container text-xs font-bold hover:bg-error hover:text-white transition-all flex items-center gap-1 flex-shrink-0"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>108 / SOS</span>
                </a>
              </div>
            </div>
          </div>
        </div>

          {/* Integrated Triage & Specialist Search Console */}
          <div className="w-full bg-surface-container-lowest text-on-surface rounded-xl p-5 sm:p-6 shadow-2xl border border-surface-container-high" id="triage-console">
            {/* Interactive Pill Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-surface-container">
              <button
                onClick={() => setActiveTab("specialty")}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  activeTab === "specialty"
                    ? "bg-primary text-white"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
              >
                By Super-Specialty
              </button>
              <button
                onClick={() => setActiveTab("symptoms")}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  activeTab === "symptoms"
                    ? "bg-primary text-white"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
              >
                By Condition / Symptoms
              </button>
              <button
                onClick={() => setActiveTab("doctor")}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  activeTab === "doctor"
                    ? "bg-primary text-white"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
              >
                By Consultant Doctor
              </button>
              <button
                onClick={() => setActiveTab("procedure")}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  activeTab === "procedure"
                    ? "bg-primary text-white"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
              >
                By Procedure / Package
              </button>
            </div>

            {/* Live Filter Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-4">
              <div className="md:col-span-5">
                <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  {activeTab === "specialty" && "Select Institute / Department"}
                  {activeTab === "symptoms" && "Describe Clinical Condition or Symptoms"}
                  {activeTab === "doctor" && "Doctor Name or Academic Specialty"}
                  {activeTab === "procedure" && "Diagnostic Investigation or Surgical Package"}
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-secondary absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === "specialty"
                        ? "e.g. Organ Transplant, Cardiology, Neurosurgery..."
                        : activeTab === "symptoms"
                        ? "e.g. Chest tightness, acute joint pain, seizure..."
                        : activeTab === "doctor"
                        ? "e.g. Dr. Arun Nair, Dr. Priya Menon..."
                        : "e.g. Executive Health Check, Coronary Angio, MRI..."
                    }
                    className="w-full pl-9 pr-3 py-2.5 bg-surface rounded border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                  />
                </div>
              </div>

              <div className="md:col-span-4">
                <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  Teaching Campus & Clinical Wing
                </label>
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full px-3 py-2.5 bg-surface rounded border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                >
                  <option value="kochi-main">Kochi Quaternary Institute (Main Medical Campus)</option>
                  <option value="edappally-hub">Edappally Super-Specialty Wing</option>
                  <option value="aluva-outreach">Aluva Cardiac & Daycare Center</option>
                </select>
              </div>

              <div className="md:col-span-3 flex items-end">
                <Link
                  href={
                    activeTab === "doctor"
                      ? `/doctors?search=${encodeURIComponent(searchQuery)}`
                      : activeTab === "procedure"
                      ? `/health-packages`
                      : `/appointments?speciality=${selectedSpecialty}`
                  }
                  className="w-full py-2.5 px-4 bg-primary hover:bg-primary-container text-white font-semibold text-xs sm:text-sm rounded transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-secondary-fixed" />
                  <span>Search Schedule</span>
                </Link>
              </div>
            </div>

            {/* Quick Clinical Tag Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 mt-2 border-t border-surface-container text-xs">
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                Trending Pathways:
              </span>
              <Link
                href="/specialities/cardiology"
                className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container text-on-surface transition-colors"
              >
                Coronary Angioplasty (Door-to-Balloon)
              </Link>
              <Link
                href="/specialities/nephrology"
                className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container text-on-surface transition-colors"
              >
                Robotic Kidney Transplant
              </Link>
              <Link
                href="/specialities/neurology"
                className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container text-on-surface transition-colors"
              >
                Paediatric Neurosurgery
              </Link>
              <Link
                href="/specialities/medical-oncology"
                className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container text-on-surface transition-colors"
              >
                Bone Marrow Cellular Therapy
              </Link>
              <Link
                href="/specialities/obstetrics-gynaecology"
                className="px-2.5 py-1 rounded bg-surface hover:bg-surface-container text-on-surface transition-colors"
              >
                High-Risk Obstetrics & Level-3 NICU
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — 4 INSTANT CARE STRIPS (From Stitch Screen 1)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Emergency Triage */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-container-high shadow-card hover:border-secondary transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-error-container text-error flex items-center justify-center">
                <HeartPulse className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-error-container text-on-error-container px-2 py-0.5 rounded">
                Level-1 24/7
              </span>
            </div>
            <h3 className="font-heading font-bold text-sm text-primary group-hover:text-secondary transition-colors">
              Immediate Critical Care
            </h3>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              Resuscitation bay, acute stroke thrombolysis, and trauma surgeon on-site 24/7.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-xs">
              <span className="font-semibold text-error">Emergency: 108</span>
              <a href="tel:+914842800000" className="text-secondary hover:underline font-semibold flex items-center gap-1">
                Dispatch <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Express Day-Care */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-container-high shadow-card hover:border-secondary transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-secondary-container text-secondary flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-secondary px-2 py-0.5 rounded">
                12-Hour Discharge
              </span>
            </div>
            <h3 className="font-heading font-bold text-sm text-primary group-hover:text-secondary transition-colors">
              Express Day-Care Wings
            </h3>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              Minimally invasive laparoscopic surgeries, laser vein procedures, and pain recovery.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-xs">
              <span className="text-on-surface-variant">Same-Day Protocol</span>
              <Link href="/services/outpatient-services" className="text-secondary hover:underline font-semibold flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 3: Senior Organ Care */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-container-high shadow-card hover:border-secondary transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">
                Quaternary
              </span>
            </div>
            <h3 className="font-heading font-bold text-sm text-primary group-hover:text-secondary transition-colors">
              Senior Organ Care Unit
            </h3>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              Dedicated transplant surveillance, geriatric hemodialysis, and heart failure clinics.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-xs">
              <span className="text-on-surface-variant">Continuous Audit</span>
              <Link href="/specialities/nephrology" className="text-secondary hover:underline font-semibold flex items-center gap-1">
                View Clinics <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 4: Executive Health Check */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-container-high shadow-card hover:border-secondary transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-secondary-fixed text-primary flex items-center justify-center">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-fixed text-primary px-2 py-0.5 rounded">
                Same-Day Reports
              </span>
            </div>
            <h3 className="font-heading font-bold text-sm text-primary group-hover:text-secondary transition-colors">
              Preventive Health Screening
            </h3>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              35+ diagnostic parameters, 3T cardiac calcium score, and genetic risk assessment.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-xs">
              <span className="text-on-surface-variant">6 Tailored Plans</span>
              <Link href="/health-packages" className="text-secondary hover:underline font-semibold flex items-center gap-1">
                Packages <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — SPECIALIZED QUATERNARY INSTITUTES (Stitch Screen 1 & 2)
          ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-surface-container">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Centres of Excellence
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary mt-1 tracking-tight">
              Specialized Quaternary Institutes Engineered for Complex Care.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
            Multi-disciplinary surgical units with intraoperative robotic guidance, specialized critical-care nursing, and peer-reviewed survival rates.
          </p>
        </div>

        {/* Featured Quaternary Institute Spotlight & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Featured Institute (Comprehensive Organ Transplant & HPB Sciences) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-card">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <Image
                src="/images/departments/cardiology.jpg"
                alt="Marriott Surgical Theatres"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-secondary-fixed text-primary px-2.5 py-1 rounded font-bold uppercase tracking-wider text-[11px]">
                  NABH Centre of Excellence
                </span>
                <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded text-white/90">
                  OT Suite 04 • Laminar Class-100
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Department Spotlight
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-primary mt-1">
                Comprehensive Organ Transplant & HPB Sciences
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Dedicated quaternary wing executing cadaveric and living-donor liver, kidney, pancreas, and dual-organ transplantation with continuous perfusion support and zero-rejection clinical pathways.
              </p>

              {/* 3 Clinical Metrics */}
              <div className="grid grid-cols-3 gap-3 my-6 pt-4 border-t border-surface-container">
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-secondary">98.4%</span>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">1-Yr Graft Survival</p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">34 Beds</span>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Dedicated ICU Wing</p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-secondary">0.0%</span>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Surgical Site Infection</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-container">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center font-bold text-sm">
                    AN
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">Prof. Dr. Arun Nair</p>
                    <p className="text-[11px] text-on-surface-variant">Chief Transplant Surgeon</p>
                  </div>
                </div>

                <Link
                  href="/specialities/cardiology"
                  className="px-4 py-2 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5"
                >
                  <span>Consult Institute</span>
                  <ArrowRight className="w-3.5 h-3.5 text-secondary-fixed" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Other Quaternary Institutes Grid */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {institutes.slice(1, 6).map((inst) => (
              <Link
                key={inst.id}
                href={`/specialities/${inst.slug}`}
                className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-surface-container-high hover:border-secondary transition-all shadow-subtle group flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                    {inst.category}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-primary group-hover:text-secondary transition-colors mt-0.5">
                    {inst.name}
                  </h4>
                  <p className="text-xs text-on-surface-variant line-clamp-1 mt-1">
                    {inst.heroTagline}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container group-hover:bg-secondary-container group-hover:text-secondary text-on-surface-variant flex items-center justify-center flex-shrink-0 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}

            <Link
              href="/specialities"
              className="mt-2 py-3 px-4 rounded-xl border border-dashed border-secondary/40 text-secondary hover:bg-secondary-container/20 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore All 17+ Quaternary Institutes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — GLOBALLY DISTINGUISHED CLINICIAN SCIENTISTS (Stitch Screen 4)
          ========================================================================= */}
      <section className="py-16 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-surface-container-high">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Faculty & Academic Directorate
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-primary mt-1 tracking-tight">
                Globally Distinguished Clinician Scientists.
              </h2>
            </div>
            <Link
              href="/doctors"
              className="text-xs sm:text-sm font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>View All 65+ Medical Faculty</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Doctor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-card flex flex-col justify-between group hover:border-secondary transition-all"
              >
                <div>
                  <div className="relative h-56 w-full bg-surface-container overflow-hidden">
                    <Image
                      src={doc.imageUrl || "/images/doctors/doctor-consultation.jpg"}
                      alt={doc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {doc.department.split("&")[0]}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                      {doc.qualifications}
                    </p>
                    <p className="text-xs text-on-surface mt-2.5 line-clamp-2 leading-relaxed">
                      {doc.bio}
                    </p>

                    <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center justify-between">
                      <span className="font-medium text-secondary">OPD Clinics</span>
                      <span>{doc.opdSchedule[0]?.days || "Mon–Sat"}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/appointments?doctor=${doc.slug}`}
                    className="w-full py-2 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded text-center block transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — WHERE ROBOTIC SUB-MILLIMETER PRECISION MEETS ARCHITECTURE
          ========================================================================= */}
      <section className="py-20 biophilic-hero text-white border-b border-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-secondary-fixed uppercase tracking-wider">
              Clinical Infrastructure & sterile design
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-surface-bright mt-2 leading-tight">
              Where Robotic Sub-Millimeter Precision Meets Sterile Architecture.
            </h2>
            <p className="text-xs sm:text-sm text-primary-fixed-dim mt-2 leading-relaxed">
              Designed from ground-up to eliminate hospital-acquired pathogens while enabling complex minimally-invasive robotic surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tech 1 */}
            <div className="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/10 hover:border-secondary-fixed/50 transition-all backdrop-blur-sm">
              <span className="font-mono text-xs text-secondary-fixed font-bold">01 / ROBOTICS</span>
              <h3 className="font-serif text-lg font-bold text-surface-bright mt-2">
                Da Vinci Xi 4th-Gen Robotic Suite
              </h3>
              <p className="text-xs text-primary-fixed-dim mt-2 leading-relaxed">
                Dual-console high-definition 3D stereo endoscopy with tremor filtration for prostate, cardiac, and colorectal reconstructions.
              </p>
            </div>

            {/* Tech 2 */}
            <div className="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/10 hover:border-secondary-fixed/50 transition-all backdrop-blur-sm">
              <span className="font-mono text-xs text-secondary-fixed font-bold">02 / NEURO VASCULAR</span>
              <h3 className="font-serif text-lg font-bold text-surface-bright mt-2">
                Biplane Neuro DSA Angio Suite
              </h3>
              <p className="text-xs text-primary-fixed-dim mt-2 leading-relaxed">
                Simultaneous multi-angle microvascular navigation enabling acute stroke thrombectomy within the golden-hour therapeutic window.
              </p>
            </div>

            {/* Tech 3 */}
            <div className="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/10 hover:border-secondary-fixed/50 transition-all backdrop-blur-sm">
              <span className="font-mono text-xs text-secondary-fixed font-bold">03 / STERILE SUITE</span>
              <h3 className="font-serif text-lg font-bold text-surface-bright mt-2">
                Class-100 Modular Theatres
              </h3>
              <p className="text-xs text-primary-fixed-dim mt-2 leading-relaxed">
                Positive-pressure laminar ceiling flow guaranteeing zero-particle sterile zones for organ transplants and prosthetic implants.
              </p>
            </div>

            {/* Tech 4 */}
            <div className="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/10 hover:border-secondary-fixed/50 transition-all backdrop-blur-sm">
              <span className="font-mono text-xs text-secondary-fixed font-bold">04 / IMAGING</span>
              <h3 className="font-serif text-lg font-bold text-surface-bright mt-2">
                3T Spectral MRI & 128-CT
              </h3>
              <p className="text-xs text-primary-fixed-dim mt-2 leading-relaxed">
                Ultra-high gradient multi-channel neuro imaging and non-invasive coronary angiography with ultra-low radiation doses.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — 100% CASHLESS TPA & INSURANCE DESK (Stitch Screen 1 & 5)
          ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Cashless Process */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Zero-Friction Admission
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary mt-1 tracking-tight">
              Hassle-Free Cashless Insurance Authorization.
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed max-w-xl">
              Our 24/7 dedicated cashless coordination desk handles direct insurer liaison, pre-authorizations within 4 hours, and zero-wait discharge assistance.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs flex-shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Initial E-Card Validation & Advice</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Submit insurance card, government ID, and consulting specialist admission order at our Ground Floor TPA Lounge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs flex-shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Digital Pre-Authorization in 4 Hours</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Our medical claim officers transmit diagnostic dossiers directly to insurer portals for instantaneous initial sanction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs flex-shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Cashless Inpatient Admission</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Direct entry into assigned room category without upfront medical deposits or collateral.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <span className="w-7 h-7 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs flex-shrink-0">
                  4
                </span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Final Settlement & Rapid Discharge</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Final discharge summaries and pharmacy expenses cleared electronically without billing delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Empanelled Partners Grid */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container-high shadow-card">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container mb-6">
              <h3 className="font-heading font-bold text-sm text-primary">
                Empanelled TPAs & Insurers
              </h3>
              <span className="text-[11px] font-semibold text-secondary">40+ Partners</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              {[
                "Star Health Insurance",
                "ICICI Lombard",
                "HDFC ERGO",
                "Care Health Insurance",
                "Medi Assist TPA",
                "Niva Bupa Health",
                "Vidal Health TPA",
                "MDIndia Healthcare",
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface border border-surface-container-high text-xs font-semibold text-primary flex items-center justify-center"
                >
                  {partner}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-secondary-container/40 border border-secondary/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-primary">Need Policy Verification?</p>
                <p className="text-[11px] text-on-surface-variant">Speak directly to our TPA Desk</p>
              </div>
              <a
                href="tel:+914842800000"
                className="px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-container transition-colors"
              >
                Call Desk
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — REAL-WORLD CASE CHRONICLES & SURVIVALS (Stitch Screen 1)
          ========================================================================= */}
      <section className="py-16 bg-surface-container border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Verified Clinical Outcomes
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary mt-1 tracking-tight">
              Real-World Case Chronicles & Survivals.
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
              Documented patient recoveries across acute emergencies, multi-organ transplants, and complex surgical oncology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Story 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-error-container text-on-error-container">
                    Cardiac STEMI
                  </span>
                  <span className="text-[11px] text-on-surface-variant">Door-to-Balloon: 38 min</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Acute Anterior Wall Infarction Resuscitation
                </h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  &ldquo;A 54-year-old patient arrived in cardiogenic shock. Immediate primary angioplasty restored total perfusion in 38 minutes. Discharged safely within 72 hours.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container text-xs text-on-surface font-semibold flex items-center justify-between">
                <span>Dr. Arun Nair • Cardiology</span>
                <span className="text-secondary font-bold">100% Recovery</span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-secondary">
                    HPB Transplant
                  </span>
                  <span className="text-[11px] text-on-surface-variant">Cadaveric Split-Graft</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Split-Liver Transplant in End-Stage Cirrhosis
                </h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  &ldquo;Decompensated liver failure patient received a split-liver graft. Advanced microvascular biliary anastomosis achieved immediate normal organ function.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container text-xs text-on-surface font-semibold flex items-center justify-between">
                <span>Transplant Directorate</span>
                <span className="text-secondary font-bold">1-Yr Stable</span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-surface-container text-primary">
                    Robotic Spine
                  </span>
                  <span className="text-[11px] text-on-surface-variant">Sub-Millimeter</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  Minimally Invasive Spinal Reconstruction
                </h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  &ldquo;Complex degenerative spinal canal stenosis corrected using 3D neuro-navigation. Patient was fully ambulatory by day two post-operation.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container text-xs text-on-surface font-semibold flex items-center justify-between">
                <span>Dr. Priya Menon • Neuro</span>
                <span className="text-secondary font-bold">Full Mobility</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 8 — QUATERNARY FAQS ACCORDION
          ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Patient Support & Answers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
            Frequently Addressed Clinical Questions
          </h2>
        </div>

        <div className="space-y-3">
          {generalFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden transition-all shadow-subtle"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-bold text-sm text-primary hover:text-secondary transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-secondary flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant border-t border-surface-container leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
