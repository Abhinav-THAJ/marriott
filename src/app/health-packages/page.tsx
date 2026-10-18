"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { healthPackagesData } from "@/data/packages";

export default function HealthPackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Executive",
    "Cardiac",
    "Women's Health",
    "Senior Citizen",
    "Diabetic Care",
    "Preventive",
  ];

  const filtered = healthPackagesData.filter((pkg) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      pkg.title.toLowerCase().includes(q) ||
      pkg.subtitle.toLowerCase().includes(q) ||
      pkg.category.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === "all" || pkg.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Editorial Header */}
      <section className="w-full bg-surface-container-low border-b border-surface-container py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
              <Link href="/" className="hover:text-primary transition-colors">
                Marriott Health
              </Link>
              <span>/</span>
              <span className="text-primary font-semibold">Preventive Health Check Packages</span>
            </nav>

            <div className="flex items-center gap-2 bg-secondary-container text-secondary px-3 py-1 rounded text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="uppercase tracking-wider">Same-Day Diagnostic Reporting Active</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">
              Preventive Diagnostics & Health Intelligence
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-primary leading-tight tracking-tight">
              Comprehensive Executive Health Packages.
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Early detection of silent cardiac, metabolic, and oncological risk factors. All investigations executed in NABL-accredited automated pathology suites with specialist review.
            </p>
          </div>

          {/* Search & Category Filter Console */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-high shadow-card space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 text-secondary absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search package by name or health focus..."
                  className="w-full pl-10 pr-4 py-2.5 bg-surface rounded-xl border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                />
              </div>

              <div className="md:col-span-7 flex flex-wrap gap-1.5 items-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-white shadow-sm"
                        : "bg-surface hover:bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {cat === "all" ? "All Packages (6)" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-surface-container-lowest rounded-2xl border border-surface-container-high p-6 sm:p-7 shadow-subtle hover:border-secondary transition-all flex flex-col justify-between relative group"
            >
              {pkg.featured && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded bg-secondary-fixed text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Recommended
                </div>
              )}

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary-container text-secondary">
                  {pkg.category} Checkup
                </span>

                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors mt-2">
                  {pkg.title}
                </h3>

                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  {pkg.subtitle}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    {pkg.priceNote}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-xs text-on-surface-variant line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-surface-container space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span>Report: <strong className="text-primary">{pkg.reportTurnaround}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                    <span>{pkg.fastingRequired ? "10h Overnight Fasting" : "No Fasting Needed"}</span>
                  </div>

                  <p className="font-bold text-primary pt-2 text-[11px] uppercase tracking-wider">
                    Key Diagnostic Inclusions:
                  </p>
                  {pkg.testsIncluded.slice(0, 3).map((grp, i) => (
                    <div key={i} className="text-on-surface-variant flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">
                        <strong className="text-primary">{grp.category}:</strong> {grp.tests.slice(0, 2).join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-3">
                <Link
                  href={`/health-packages/${pkg.slug}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-surface hover:bg-surface-container text-primary text-xs font-semibold border border-surface-container-high transition-colors"
                >
                  View Details
                </Link>
                <Link
                  href={`/appointments?package=${pkg.slug}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-primary hover:bg-primary-container text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  Book Checkup
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
