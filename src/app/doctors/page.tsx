"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  UserCheck,
  Building2,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Award
} from "lucide-react";
import { doctorsData } from "@/data/doctors";
import { specialitiesData } from "@/data/specialities";

function DoctorsDirectoryContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search") || searchParams.get("q") || "";
  const initialSpec = searchParams.get("speciality") || "all";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSpeciality, setSelectedSpeciality] = useState(initialSpec);
  const [selectedCampus, setSelectedCampus] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");

  const filteredDoctors = doctorsData.filter((doc) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      doc.name.toLowerCase().includes(q) ||
      doc.department.toLowerCase().includes(q) ||
      doc.qualifications.toLowerCase().includes(q) ||
      doc.clinicalInterests.some((ci) => ci.toLowerCase().includes(q));

    const matchesSpec =
      selectedSpeciality === "all" || doc.specialitySlug === selectedSpeciality;

    return matchesSearch && matchesSpec;
  });

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top Editorial Header & Faculty Tally */}
      <section className="w-full bg-surface-container-low border-b border-surface-container py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Breadcrumb & Registry Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
              <Link href="/" className="hover:text-primary transition-colors">
                Marriott Health
              </Link>
              <span>/</span>
              <span className="text-primary font-semibold">Faculty Directory & Specialist Appointment</span>
            </nav>

            <div className="flex items-center gap-2 bg-secondary-container text-secondary px-3 py-1 rounded text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="uppercase tracking-wider">Faculty On-Duty Registry • Active</span>
            </div>
          </div>

          {/* Headline & Faculty Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                Academic Excellence • Tertiary Faculty
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-primary leading-tight tracking-tight">
                Distinguished Clinician-Scientists & Surgical Faculty.
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                Search over 65+ quaternary specialists, collegial surgical chairs, and international research fellows pioneering complex clinical interventions across 4 integrated teaching campuses.
              </p>
            </div>

            {/* Quick Stats Box */}
            <div className="lg:col-span-4 bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high shadow-subtle flex items-center justify-around text-center">
              <div>
                <span className="font-serif text-2xl font-bold text-primary">65+</span>
                <p className="text-[11px] text-on-surface-variant mt-0.5 font-medium">Active Faculty</p>
              </div>
              <div className="h-8 w-px bg-surface-container"></div>
              <div>
                <span className="font-serif text-2xl font-bold text-secondary">17</span>
                <p className="text-[11px] text-on-surface-variant mt-0.5 font-medium">Institutes</p>
              </div>
              <div className="h-8 w-px bg-surface-container"></div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">0 Min</span>
                <p className="text-[11px] text-on-surface-variant mt-0.5 font-medium">Next Slot</p>
              </div>
            </div>
          </div>

          {/* Search & Multi-Filter Console */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-high shadow-card space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-secondary absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search faculty name, sub-specialty, condition (e.g. 'TAVR', 'Epilepsy Surgery', 'Liver Transplant')..."
                  className="w-full pl-10 pr-4 py-2.5 bg-surface rounded-xl border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                />
              </div>

              <div className="md:col-span-3">
                <select
                  value={selectedSpeciality}
                  onChange={(e) => setSelectedSpeciality(e.target.value)}
                  className="w-full px-3 py-2.5 bg-surface rounded-xl border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                >
                  <option value="all">All Quaternary Institutes (17)</option>
                  {specialitiesData.map((spec) => (
                    <option key={spec.id} value={spec.slug}>
                      {spec.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full px-3 py-2.5 bg-surface rounded-xl border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                >
                  <option value="all">All Teaching Campuses (4)</option>
                  <option value="kochi">Main Medical City Campus</option>
                  <option value="edappally">Edappally Day-Care Wing</option>
                  <option value="aluva">Aluva Cardiac Outreach</option>
                </select>
              </div>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-container text-xs">
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                Focus Areas:
              </span>
              {[
                { label: "Robotic Surgery Chairs", spec: "orthopaedics" },
                { label: "Organ Transplant Teams", spec: "cardiology" },
                { label: "Neurovascular & Stroke", spec: "neurology" },
                { label: "Pediatric Critical Care", spec: "paediatrics" },
                { label: "Digestive & HPB", spec: "gastroenterology" }
              ].map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSpeciality(pill.spec)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    selectedSpeciality === pill.spec
                      ? "bg-primary text-white font-semibold"
                      : "bg-surface hover:bg-surface-container text-on-surface"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
              {selectedSpeciality !== "all" && (
                <button
                  onClick={() => setSelectedSpeciality("all")}
                  className="text-secondary text-xs font-semibold hover:underline ml-2"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Faculty Listing & Triage Concierge Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main 8-Column Doctor Profiles List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Faculty Profiles: Showing {filteredDoctors.length} Verified Consultants
              </span>
              <span className="text-xs text-secondary font-semibold">
                Available for Online & OPD Booking
              </span>
            </div>

            {filteredDoctors.length === 0 ? (
              <div className="bg-surface-container-lowest p-12 text-center rounded-2xl border border-surface-container-high">
                <UserCheck className="w-12 h-12 text-on-surface-variant mx-auto mb-3 opacity-40" />
                <h3 className="font-serif text-lg font-bold text-primary">No Specialists Match Your Search</h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Try adjusting the department filter or search keywords.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpeciality("all");
                  }}
                  className="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-surface-container-lowest rounded-2xl border border-surface-container-high p-5 sm:p-6 shadow-card hover:border-secondary transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Doctor Portrait */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 border border-surface-container-high">
                      <Image
                        src={doc.imageUrl || "/images/doctors/doctor-consultation.jpg"}
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Doctor Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary-container text-secondary">
                            {doc.department.split("&")[0]}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            OPD Available
                          </span>
                        </div>
                        <span className="text-xs text-on-surface-variant font-medium">
                          {doc.experienceYears}+ Yrs Quaternary Experience
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary leading-tight">
                        {doc.name}
                      </h3>

                      <p className="text-xs font-semibold text-secondary">
                        {doc.designation}
                      </p>

                      <p className="text-xs text-on-surface-variant">
                        {doc.qualifications}
                      </p>

                      <p className="text-xs text-on-surface leading-relaxed pt-1">
                        {doc.bio}
                      </p>

                      {/* Clinical Interests Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {doc.clinicalInterests.slice(0, 3).map((ci, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-surface px-2 py-0.5 rounded text-on-surface-variant border border-surface-container"
                          >
                            {ci}
                          </span>
                        ))}
                      </div>

                      {/* Schedule & Action Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-3 border-t border-surface-container">
                        <div className="text-xs text-on-surface-variant flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-secondary" />
                          <span>
                            Clinics: <strong className="text-primary">{doc.opdSchedule[0]?.days || "Mon–Sat"}</strong> ({doc.opdSchedule[0]?.hours || "09:00 AM - 01:00 PM"})
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/doctors/${doc.slug}`}
                            className="px-3 py-1.5 rounded text-xs font-semibold text-secondary hover:bg-secondary-container transition-colors"
                          >
                            View Dossier
                          </Link>
                          <Link
                            href={`/appointments?doctor=${doc.slug}`}
                            className="px-4 py-2 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded transition-colors shadow-sm"
                          >
                            Reserve OPD Slot
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right 4-Column Triage & Concierge Sidebar (Stitch Screen 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1: Fast-Triage Concierge */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-card space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Fast-Triage Concierge
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-primary leading-tight">
                24-Hour Clinical Match Response
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Unsure which quaternary specialist or collegial board is indicated for your symptoms? Submit a brief summary for clinical allocation by our Senior Registrar.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert("Clinical triage request submitted. A Medical Coordinator will contact you within 2 hours."); }} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Contact Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98400 00000"
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
                    Primary Complaint / Diagnosis
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly state symptoms, duration, or prior hospital referral notes..."
                    className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-secondary-fixed" />
                  <span>Request Clinical Triage</span>
                </button>
              </form>
            </div>

            {/* Card 2: Multidisciplinary Tumor Board & Transplant Clearance */}
            <div className="bg-primary text-white p-6 rounded-2xl border border-primary-container shadow-card space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-fixed">
                Specialized Board Review
              </span>
              <h3 className="font-serif text-lg font-bold text-surface-bright leading-tight">
                Need Multidisciplinary Tumor Board or Transplant Clearance?
              </h3>
              <p className="text-xs text-primary-fixed-dim leading-relaxed">
                For complex oncological, neurovascular, or cadaveric organ transplant cases requiring joint consensus clearance across surgical, medical, and radiological chairs.
              </p>
              <Link
                href="/appointments"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-secondary-fixed hover:underline"
              >
                <span>Initiate Collegium Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Emergency Dispatch Direct Line */}
            <div className="bg-error-container text-on-error-container p-5 rounded-2xl border border-error/20 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-error">
                  Level-1 Trauma Alert
                </p>
                <p className="text-xs font-bold mt-0.5">Emergency Dispatch: 108</p>
                <p className="text-[11px] opacity-80">+91 (484) 2800-000</p>
              </div>
              <a
                href="tel:+914842800000"
                className="px-3 py-2 rounded bg-error text-white text-xs font-bold hover:bg-error/90 transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Call SOS</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DoctorsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-secondary">Loading Quaternary Faculty Directory...</div>}>
      <DoctorsDirectoryContent />
    </Suspense>
  );
}
