"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Search, ArrowRight, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { generalFaqs, HospitalFaq } from "@/data/faqs";

export default function PatientFaqsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    "all",
    "General & Appointments",
    "Inpatient & Admission",
    "Billing & Cashless Insurance",
    "Visiting Guidelines",
    "Health Packages",
  ];

  const filteredFaqs = generalFaqs.filter((faq) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Frequently Asked Questions" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Patient Support & Knowledge Base
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Quick, clear answers to common questions about outpatient consultation, inpatient procedures, hospital insurance, visiting hours, and health checkups.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by question or topic..."
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-clinical-800 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                {cat === "all" ? "All Questions" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-heading font-bold text-sm text-navy-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-clinical-800" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-sm text-navy-900">
              Need personalized assistance?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Our 24/7 central hospital helpline is available for patient queries.
            </p>
          </div>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs rounded-xl shadow transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
