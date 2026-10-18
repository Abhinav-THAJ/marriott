"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeader from "@/components/common/SectionHeader";
import { jobPostings } from "@/data/careers";
import { 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  Users, 
  HeartHandshake, 
  Award, 
  Search 
} from "lucide-react";

export default function CareersIndexPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", ...Array.from(new Set(jobPostings.map((j) => j.department)))];

  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.overview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Careers" }
            ]}
          />
          <div className="flex items-center gap-2 mt-4 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Clinical Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 font-display">
            Careers at Marriott Hospital
          </h1>
          <p className="text-slate-300 max-w-2xl mt-4 text-base leading-relaxed">
            Build a fulfilling career alongside respected clinicians, compassionate nurses, and innovative healthcare professionals dedicated to ethical, patient-centric excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Workplace Culture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-clinical-50 text-clinical-600 rounded-xl flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 font-display text-base">Academic Excellence</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Ongoing clinical CME credits, peer-reviewed study groups, and mentorship from senior faculty members.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 font-display text-base">Multidisciplinary Culture</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Collaborative care models where doctors, nurses, and allied specialists work together with mutual respect.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-medical-50 text-medical-800 rounded-xl flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 font-display text-base">Comprehensive Benefits</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Health insurance for staff and family, provident fund, balanced duty rosters, and career growth pathways.
              </p>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search job title, qualification..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold text-slate-500 mr-2">Department:</span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition ${
                    selectedDept === dept
                      ? "bg-clinical-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Open Job Listings */}
        <SectionHeader
          eyebrow="Current Openings"
          heading="Available Clinical & Administrative Positions"
          subheading={`Showing ${filteredJobs.length} active opportunities.`}
          className="mb-8"
        />

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-clinical-50 text-clinical-700 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {job.department}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.employmentType}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {job.openings} {job.openings > 1 ? "Openings" : "Opening"}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  <Link href={`/careers/${job.slug}`} className="hover:text-clinical-700 transition">
                    {job.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2 max-w-3xl leading-relaxed">
                  {job.overview}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-clinical-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-clinical-600" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-clinical-600" />
                    <span>{job.qualification}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <Link
                  href={`/careers/${job.slug}`}
                  className="w-full lg:w-auto text-center border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs px-4 py-2.5 rounded-lg transition"
                >
                  View Details
                </Link>
                <Link
                  href={`/careers/apply?job=${job.slug}`}
                  className="w-full lg:w-auto text-center bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm transition whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">No positions found</h3>
              <p className="text-sm text-slate-500 mt-1">
                Try refining your keyword search or select "All" departments.
              </p>
            </div>
          )}
        </div>

        {/* General Application Callout */}
        <div className="mt-16 bg-medical-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white">Don't See Your Speciality Listed?</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              We continually review credentials for future clinical faculty appointments, resident medical officers, and specialized nursing batches.
            </p>
          </div>
          <Link
            href="/careers/apply?job=general-talent-pool"
            className="inline-flex items-center gap-2 bg-clinical-600 hover:bg-clinical-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg shadow whitespace-nowrap transition"
          >
            <span>Submit General Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
