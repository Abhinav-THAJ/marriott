"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Search,
  FileText,
  Building2,
  Users,
  CreditCard,
  Download,
  ArrowRight,
  Sparkles,
  HeartPulse,
  BedDouble
} from "lucide-react";

export default function PatientsPage() {
  // Policy eligibility calculator state
  const [selectedInsurer, setSelectedInsurer] = useState("Star Health Insurance");
  const [selectedRoom, setSelectedRoom] = useState("Deluxe Single Room");
  const [uhid, setUhid] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top Editorial Header & Admission Telemetry (Stitch Screen 5) */}
      <section className="w-full bg-surface-container-low border-b border-surface-container py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
              <Link href="/" className="hover:text-primary transition-colors">
                Marriott Health
              </Link>
              <span>/</span>
              <span className="text-primary font-semibold">Patient & Visitor Guide</span>
            </nav>

            <div className="flex items-center gap-2 bg-secondary-container text-secondary px-3 py-1 rounded text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="uppercase tracking-wider">Clinical Admission & Concierge Protocols Active</span>
            </div>
          </div>

          {/* Headline Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                Clinical Care Pathways & Inpatient Guide
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-primary leading-tight tracking-tight">
                A Seamless Care Journey. Compassionate Guidance at Every Step.
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                Clear admission workflows, 100% cashless insurance authorization, healing inpatient rooms, and infection-safe visiting guidelines designed to ensure safety and quiet recovery.
              </p>

              {/* In-Page Quick Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-3">
                <a
                  href="#pre-admission"
                  className="px-3 py-1.5 rounded-lg bg-surface border border-surface-container-high hover:border-secondary text-xs font-semibold text-primary transition-colors"
                >
                  Pre-Admission Flow
                </a>
                <a
                  href="#cashless"
                  className="px-3 py-1.5 rounded-lg bg-surface border border-surface-container-high hover:border-secondary text-xs font-semibold text-primary transition-colors"
                >
                  Cashless TPA Desk
                </a>
                <a
                  href="#healing-suites"
                  className="px-3 py-1.5 rounded-lg bg-surface border border-surface-container-high hover:border-secondary text-xs font-semibold text-primary transition-colors"
                >
                  Healing Suites & Rooms
                </a>
                <a
                  href="#dicom-vault"
                  className="px-3 py-1.5 rounded-lg bg-surface border border-surface-container-high hover:border-secondary text-xs font-semibold text-primary transition-colors"
                >
                  Download Reports
                </a>
                <a
                  href="#visiting-hours"
                  className="px-3 py-1.5 rounded-lg bg-surface border border-surface-container-high hover:border-secondary text-xs font-semibold text-primary transition-colors"
                >
                  Visiting Hours
                </a>
              </div>
            </div>

            {/* Right Side Quick Helpdesk */}
            <div className="lg:col-span-4 bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-high shadow-subtle space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Central Admissions Desk
                </span>
                <span className="text-[10px] bg-secondary-fixed text-primary px-2 py-0.5 rounded font-bold">
                  24/7 OPEN
                </span>
              </div>
              <p className="font-serif text-lg font-bold text-primary">
                Ground Floor, Atrium Tower A
              </p>
              <p className="text-xs text-on-surface-variant">
                Direct phone coordination for planned admissions, cashless TPAs, and emergency bed allotments.
              </p>
              <div className="pt-2 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Direct Helpline:</span>
                <a href="tel:+914842800000" className="font-bold text-secondary hover:underline">
                  +91 (484) 2800-000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Admission & Planned Hospitalization (Stitch Screen 5) */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pre-admission">
        <div className="mb-10 pb-4 border-b border-surface-container">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Standard Operating Protocol
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
            Pre-Admission & Planned Hospitalization.
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
            Follow our four-step streamlined pathway from consultant slip to comfortable room check-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface text-secondary">Step 1</span>
              </div>
              <h3 className="font-serif text-base font-bold text-primary">Booking & Clinical Slip</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Consultant physician issues the planned Admission Order specifying room type and treatment protocol.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-surface-container text-[11px] text-secondary font-semibold">
              Bring Government Photo ID
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface text-secondary">Step 2</span>
              </div>
              <h3 className="font-serif text-base font-bold text-primary">Pre-Authorization (TPA)</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Submit health card at the TPA Desk at least 48 hours prior to planned surgery for hassle-free cashless clearance.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-surface-container text-[11px] text-secondary font-semibold">
              Fast Electronic Filing
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface text-secondary">Step 3</span>
              </div>
              <h3 className="font-serif text-base font-bold text-primary">Room & Suite Allocation</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Select from Executive Suites, Deluxe Singles, or Semi-Private Twin rooms with en-suite amenities.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-surface-container text-[11px] text-secondary font-semibold">
              Companion Bed Included
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface text-secondary">Step 4</span>
              </div>
              <h3 className="font-serif text-base font-bold text-primary">Day of Arrival Check-In</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Direct porter accompaniment to your room with baseline nurse assessment, vitals, and surgical prep.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-surface-container text-[11px] text-secondary font-semibold">
              Zero Lobby Wait Time
            </div>
          </div>
        </div>
      </section>

      {/* 100% Cashless TPA & Insurance Desk Hub + Instant Estimator (Stitch Screen 5) */}
      <section className="py-16 bg-surface-container border-y border-surface-container-high" id="cashless">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: TPA Network Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Cashless Hospitalization
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
                  100% Cashless TPA & Insurance Desk Hub.
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Marriott Hospital is empanelled with all national insurers and TPAs, facilitating immediate pre-authorization and transparent cashless claims.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Star Health",
                  "ICICI Lombard",
                  "HDFC ERGO",
                  "Care Health",
                  "Medi Assist TPA",
                  "Niva Bupa",
                  "Vidal Health TPA",
                  "MDIndia Healthcare",
                  "Paramount TPA"
                ].map((tpa, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-high text-xs font-semibold text-primary text-center"
                  >
                    {tpa}
                  </div>
                ))}
              </div>

              {/* Fast Facts */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-surface-container-high">
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high">
                  <span className="font-serif text-xl font-bold text-secondary">4 Hours</span>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Average Pre-Auth Turnaround</p>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high">
                  <span className="font-serif text-xl font-bold text-primary">98.2%</span>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">First-Pass Approval Rate</p>
                </div>
              </div>
            </div>

            {/* Right: Instant Policy Eligibility Estimator (Stitch Screen 5) */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container-high shadow-card space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <h3 className="font-heading font-bold text-sm text-primary flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-secondary" />
                  <span>Instant Policy Estimator</span>
                </h3>
                <span className="text-[10px] uppercase font-bold text-secondary bg-secondary-container px-2 py-0.5 rounded">
                  Live Calculator
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Select Your Health Insurer / TPA
                  </label>
                  <select
                    value={selectedInsurer}
                    onChange={(e) => setSelectedInsurer(e.target.value)}
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                  >
                    <option value="Star Health Insurance">Star Health Insurance</option>
                    <option value="ICICI Lombard">ICICI Lombard</option>
                    <option value="HDFC ERGO">HDFC ERGO</option>
                    <option value="Care Health Insurance">Care Health Insurance</option>
                    <option value="Medi Assist TPA">Medi Assist TPA</option>
                    <option value="Niva Bupa Health">Niva Bupa Health</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Planned Room Accommodation
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                  >
                    <option value="Presidential Suite">Presidential Suite (Deluxe)</option>
                    <option value="Deluxe Single Room">Deluxe Single Room (Private)</option>
                    <option value="Twin-Sharing Room">Twin-Sharing Room (Semi-Private)</option>
                  </select>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-surface-container-high space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Estimated Cashless Approval:</span>
                    <strong className="text-secondary font-bold">85% – 95%</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Co-Pay Requirement:</span>
                    <strong className="text-primary font-bold">Nil / Policy Dependent</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Pre-Auth Desk Lead Time:</span>
                    <strong className="text-primary font-bold">&lt; 4 Hours</strong>
                  </div>
                </div>

                <a
                  href="tel:+914842800000"
                  className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded-lg text-center block transition-colors shadow-sm"
                >
                  Verify Policy With Insurance Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Suites & Inpatient Living Spaces (Stitch Screen 5) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="healing-suites">
        <div className="mb-10 pb-4 border-b border-surface-container">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Inpatient Accommodations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
            Healing Suites & Inpatient Living Spaces.
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
            Thoughtfully designed with natural biophilic daylight, HEPA-filtered air circulation, and acoustic isolation for serene recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Room 1 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-subtle flex flex-col justify-between">
            <div>
              <div className="relative h-44 w-full bg-surface-container">
                <Image
                  src="/images/hospital/reception.jpg"
                  alt="Presidential Suite"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-secondary-fixed text-primary">
                  Premium
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-base font-bold text-primary">Presidential Suite</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Dual-room layout with private patient bedroom, visitor lounge, refrigerator, dining table, and dedicated nurse call.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Daily Tariff</span>
                <span className="font-serif font-bold text-primary">₹12,500 / day</span>
              </div>
            </div>
          </div>

          {/* Room 2 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-subtle flex flex-col justify-between">
            <div>
              <div className="relative h-44 w-full bg-surface-container">
                <Image
                  src="/images/hospital/exterior.jpg"
                  alt="Deluxe Single Room"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary text-secondary-fixed">
                  Most Popular
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-base font-bold text-primary">Deluxe Single Room</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Motorized multi-position patient bed, en-suite private bathroom, companion sofa-bed, and smart TV.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Daily Tariff</span>
                <span className="font-serif font-bold text-primary">₹6,200 / day</span>
              </div>
            </div>
          </div>

          {/* Room 3 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-subtle flex flex-col justify-between">
            <div>
              <div className="relative h-44 w-full bg-surface-container">
                <Image
                  src="/images/facilities/diagnostic-imaging.jpg"
                  alt="Twin-Sharing Room"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-surface text-primary">
                  Economical
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-base font-bold text-primary">Twin-Sharing Room</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Semi-private accommodation with sound-dampening acoustic privacy curtains, attendant recliner, and nurse buzzer.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Daily Tariff</span>
                <span className="font-serif font-bold text-primary">₹3,400 / day</span>
              </div>
            </div>
          </div>

          {/* Room 4 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-subtle flex flex-col justify-between">
            <div>
              <div className="relative h-44 w-full bg-surface-container">
                <Image
                  src="/images/departments/rehabilitation.jpg"
                  alt="High-Dependency Unit"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-secondary-container text-secondary">
                  Step-Down ICU
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-base font-bold text-primary">High-Dependency Unit</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Continuous multi-parameter cardiac telemetry, central oxygen perfusion, and 1:2 dedicated nursing supervision.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Daily Tariff</span>
                <span className="font-serif font-bold text-primary">₹5,000 / day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Diagnostics & DICOM Vault (Stitch Screen 5) */}
      <section className="py-14 bg-surface-container border-y border-surface-container-high" id="dicom-vault">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Paperless Patient Records
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
                Digital Diagnostics & High-Resolution DICOM Vault.
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xl">
                Access your verified blood pathology results, 3T MRI scans, CT angiograms, and discharge summaries anytime from home using your unique patient identifier.
              </p>
            </div>

            <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-card space-y-3">
              <h3 className="font-heading font-bold text-sm text-primary">
                Patient Quick-Access Portal
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Authenticated! Loading clinical archive..."); }} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Patient UHID (e.g. MH-2026-9041)
                  </label>
                  <input
                    type="text"
                    required
                    value={uhid}
                    onChange={(e) => setUhid(e.target.value)}
                    placeholder="Enter UHID from discharge slip"
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Registered Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98400 00000"
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-secondary-fixed" />
                  <span>Access Secure Medical Vault</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines & ICU Protocols (Stitch Screen 5) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="visiting-hours">
        <div className="mb-10 pb-4 border-b border-surface-container">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Infection Prevention & Quiet Rest
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
            Visitor Guidelines & Intensive Care Protocols.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inpatient Ward Visiting Hours */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-secondary">Inpatient Wards & Rooms</span>
              <span className="text-[10px] bg-secondary-container text-secondary font-bold px-2 py-0.5 rounded">
                General Visiting
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-primary">04:30 PM – 07:00 PM Daily</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Family members and friends are requested to adhere to visiting hours so patients receive adequate rest and medical rounds are uninterrupted.
            </p>
            <ul className="space-y-2 text-xs text-on-surface pt-2 border-t border-surface-container">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Maximum 2 visitors permitted bedside simultaneously</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Children under 12 not permitted in acute care zones</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Mandatory hand sanitization at entry checkpoints</span>
              </li>
            </ul>
          </div>

          {/* ICU & Transplant Clean-Room Protocols */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-error">Intensive Care Units (ICU / CCU)</span>
              <span className="text-[10px] bg-error-container text-on-error-container font-bold px-2 py-0.5 rounded">
                Restricted Access
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-primary">
              11:30 AM – 12:30 PM & 05:00 PM – 06:00 PM
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Critical care environments are zero-particle zones. Visitors must gown and wear barrier masks prior to entry into the unit.
            </p>
            <ul className="space-y-2 text-xs text-on-surface pt-2 border-t border-surface-container">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-error flex-shrink-0" />
                <span>Strictly 1 immediate family member at a time</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-error flex-shrink-0" />
                <span>Personal mobile phones must be switched off</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-error flex-shrink-0" />
                <span>Direct briefing with Treating Intensivist during slots</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hospital Conveniences Strip (Stitch Screen 5) */}
      <section className="py-12 bg-surface-container border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high">
              <h4 className="font-serif text-sm font-bold text-primary">24/7 Outpatient Pharmacy</h4>
              <p className="text-[11px] text-on-surface-variant mt-1">Ground Floor, East Wing • Complete Medication Stock</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high">
              <h4 className="font-serif text-sm font-bold text-primary">The Sanctuary Dining Lounge</h4>
              <p className="text-[11px] text-on-surface-variant mt-1">Hygienic Halal & Dietary Cuisines • 06:30 AM – 10:30 PM</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high">
              <h4 className="font-serif text-sm font-bold text-primary">Bank ATM & Foreign Exchange</h4>
              <p className="text-[11px] text-on-surface-variant mt-1">Main Atrium • Multi-Currency Exchange Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
