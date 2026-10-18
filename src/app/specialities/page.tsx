"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HeartPulse,
  Activity,
  Bone,
  Search,
  ArrowRight,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Building2
} from "lucide-react";
import { specialitiesData } from "@/data/specialities";

export default function SpecialitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Centres of Excellence",
    "Medical Specialities",
    "Surgical Disciplines",
    "Women & Child",
    "Diagnostic & Support",
  ];

  const filtered = specialitiesData.filter((spec) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      spec.name.toLowerCase().includes(q) ||
      spec.overview.toLowerCase().includes(q) ||
      spec.keyConditions.some((c) => c.toLowerCase().includes(q));

    const matchesCategory =
      selectedCategory === "all" || spec.category === selectedCategory;

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
              <span className="text-primary font-semibold">Institutes of Care</span>
            </nav>

            <div className="flex items-center gap-2 bg-secondary-container text-secondary px-3 py-1 rounded text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="uppercase tracking-wider">17 Multidisciplinary Quaternary Institutes</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">
              Clinical Governance & Institutes
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-primary leading-tight tracking-tight">
              Quaternary Institutes & Centres of Excellence.
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Explore our comprehensive clinical departments, specialized clean-room surgical units, interventional catheterization suites, and advanced organ transplantation teams.
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
                  placeholder="Search by institute name, symptom, or treatment..."
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
                    {cat === "all" ? "All Institutes (17)" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutes Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((spec) => (
            <div
              key={spec.id}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle hover:border-secondary transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary-container text-secondary">
                    {spec.category}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">
                    NABH Accredited
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {spec.name}
                </h3>

                <p className="text-xs font-medium text-secondary mt-1">
                  {spec.heroTagline}
                </p>

                <p className="text-xs text-on-surface-variant mt-2.5 line-clamp-3 leading-relaxed">
                  {spec.overview}
                </p>

                {/* Key Treatments / Focus */}
                <div className="mt-4 pt-3 border-t border-surface-container">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block mb-1.5">
                    Core Clinical Disciplines:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {spec.treatmentModalities.slice(0, 2).map((tm, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-surface px-2 py-0.5 rounded text-on-surface border border-surface-container"
                      >
                        {tm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between text-xs">
                <Link
                  href={`/specialities/${spec.slug}`}
                  className="font-bold text-primary group-hover:text-secondary flex items-center gap-1"
                >
                  <span>Explore Institute</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/appointments?speciality=${spec.slug}`}
                  className="px-3 py-1 bg-surface-container hover:bg-secondary-container text-primary text-xs font-semibold rounded transition-colors"
                >
                  Book Slot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
