"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Search,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { healthArticlesData, HealthArticle } from "@/data/articles";

export default function HealthLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Preventive Healthcare",
    "Cardiology",
    "Orthopaedics",
    "Paediatrics",
    "Wellness",
  ];

  const filteredArticles = healthArticlesData.filter((art) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === "all" || art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Health Library & Wellness" }]} />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Patient Education Portal
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Health Library & Evidence-Based Guides
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Medically reviewed articles and prevention handbooks authored by our medical specialists to help you understand symptoms, treatment options, and healthy living.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, condition, or keyword..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600 focus:bg-white"
              />
            </div>

            <div className="md:col-span-7 flex flex-wrap gap-1.5 items-center">
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
                  {cat === "all" ? "All Topics" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <Image
                  src={art.imageUrl}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-navy-900 border border-slate-200">
                  {art.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <span>{art.publishedDate}</span>
                    <span>&bull;</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-base text-navy-900 group-hover:text-clinical-800 transition-colors line-clamp-2">
                    {art.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">
                    Reviewed: {art.medicalReviewer.split(",")[0]}
                  </span>
                  <Link
                    href={`/health-library/${art.slug}`}
                    className="font-bold text-clinical-800 group-hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
