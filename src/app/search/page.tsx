"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { doctors } from "@/data/doctors";
import { specialities } from "@/data/specialities";
import { packagesData } from "@/data/packages";
import { articlesData } from "@/data/articles";
import { newsData } from "@/data/newsEvents";
import { servicesData } from "@/data/services";
import { 
  Search, 
  User, 
  Stethoscope, 
  Package, 
  BookOpen, 
  Newspaper, 
  Sparkles,
  ArrowRight,
  X
} from "lucide-react";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"all" | "doctors" | "specialities" | "packages" | "articles" | "news">("all");

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const cleanQuery = query.toLowerCase().trim();

  // Search Results
  const matchedDoctors = cleanQuery
    ? doctors.filter(
        (d) =>
          d.name.toLowerCase().includes(cleanQuery) ||
          d.department.toLowerCase().includes(cleanQuery) ||
          d.qualifications.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedSpecialities = cleanQuery
    ? specialities.filter(
        (s) =>
          s.name.toLowerCase().includes(cleanQuery) ||
          s.heroTagline.toLowerCase().includes(cleanQuery) ||
          s.overview.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedPackages = cleanQuery
    ? packagesData.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.subtitle.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedArticles = cleanQuery
    ? articlesData.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery) ||
          a.excerpt.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedNews = cleanQuery
    ? newsData.filter(
        (n) =>
          n.title.toLowerCase().includes(cleanQuery) ||
          n.summary.toLowerCase().includes(cleanQuery) ||
          n.category.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults =
    matchedDoctors.length +
    matchedSpecialities.length +
    matchedPackages.length +
    matchedArticles.length +
    matchedNews.length;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Search Portal" }
          ]}
        />

        {/* Search Bar Input */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mt-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
            Search Marriott Hospital
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Find doctors, specialities, clinical services, health packages, and medical articles.
          </p>

          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type doctor name, symptom, condition, or package..."
              className="w-full pl-12 pr-10 py-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-clinical-500 focus:outline-none shadow-inner"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Popular Searches:</span>
            {["Cardiology", "Dr. Priya Menon", "Health Checkup", "Knee Replacement", "MRI Scan"].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md transition"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        {cleanQuery && (
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition ${
                activeTab === "all"
                  ? "bg-clinical-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              All Results ({totalResults})
            </button>
            <button
              onClick={() => setActiveTab("doctors")}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition ${
                activeTab === "doctors"
                  ? "bg-clinical-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Doctors ({matchedDoctors.length})
            </button>
            <button
              onClick={() => setActiveTab("specialities")}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition ${
                activeTab === "specialities"
                  ? "bg-clinical-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Specialities ({matchedSpecialities.length})
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition ${
                activeTab === "packages"
                  ? "bg-clinical-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Packages ({matchedPackages.length})
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition ${
                activeTab === "articles"
                  ? "bg-clinical-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Articles ({matchedArticles.length})
            </button>
          </div>
        )}

        {/* Results Body */}
        {!cleanQuery ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-slate-900">Enter a search keyword above</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Search by doctor name (e.g. Dr. Anand Verma), department (e.g. Neurology), diagnostic scan, or symptom.
            </p>
          </div>
        ) : totalResults === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-slate-900">No results found for "{query}"</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Please check your spelling, try broader keywords, or browse our directories directly:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link href="/doctors" className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-4 py-2 rounded-lg">
                View All Doctors
              </Link>
              <Link href="/specialities" className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-4 py-2 rounded-lg">
                View Specialities
              </Link>
              <Link href="/health-packages" className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-4 py-2 rounded-lg">
                Health Packages
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Doctors */}
            {(activeTab === "all" || activeTab === "doctors") && matchedDoctors.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-clinical-600" />
                  <span>Doctors ({matchedDoctors.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedDoctors.map((doc) => (
                    <div key={doc.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                      <div>
                        <Link href={`/doctors/${doc.slug}`} className="font-bold text-slate-900 hover:text-clinical-700 transition">
                          {doc.name}
                        </Link>
                        <div className="text-xs text-clinical-700 font-medium">{doc.department}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{doc.qualifications} • {doc.experienceYears}+ Yrs Exp</div>
                      </div>
                      <Link
                        href={`/appointments?doctor=${doc.slug}`}
                        className="bg-medical-900 hover:bg-medical-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg whitespace-nowrap"
                      >
                        Book
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specialities */}
            {(activeTab === "all" || activeTab === "specialities") && matchedSpecialities.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-teal-600" />
                  <span>Specialities & Departments ({matchedSpecialities.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedSpecialities.map((spec) => (
                    <Link
                      key={spec.id}
                      href={`/specialities/${spec.slug}`}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-teal-500 transition group flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-teal-700 transition">{spec.name}</h4>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{spec.heroTagline || spec.overview}</p>
                      </div>
                      <span className="text-xs font-semibold text-teal-600 mt-3 flex items-center gap-1">
                        Explore Speciality <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Health Packages */}
            {(activeTab === "all" || activeTab === "packages") && matchedPackages.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-clinical-600" />
                  <span>Health Packages ({matchedPackages.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedPackages.map((pkg) => (
                    <div key={pkg.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                      <div>
                        <Link href={`/health-packages/${pkg.slug}`} className="font-bold text-slate-900 hover:text-clinical-700 transition">
                          {pkg.title}
                        </Link>
                        <div className="text-xs text-slate-500 mt-0.5">{pkg.category} • {pkg.testsIncluded.length} Diagnostic Categories</div>
                        <div className="text-xs font-bold text-clinical-700 mt-1">{pkg.priceNote}</div>
                      </div>
                      <Link
                        href={`/appointments?package=${pkg.slug}`}
                        className="bg-clinical-600 hover:bg-clinical-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg whitespace-nowrap"
                      >
                        Select
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Articles */}
            {(activeTab === "all" || activeTab === "articles") && matchedArticles.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  <span>Health Articles & Guides ({matchedArticles.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedArticles.map((art) => (
                    <Link
                      key={art.id}
                      href={`/health-library/${art.slug}`}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-amber-500 transition group flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[11px] text-amber-700 font-semibold">{art.category} • {art.readTime}</div>
                        <h4 className="font-bold text-slate-900 group-hover:text-amber-700 transition mt-0.5">{art.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{art.excerpt}</p>
                      </div>
                      <span className="text-xs font-semibold text-amber-700 mt-3 flex items-center gap-1">
                        Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* News */}
            {(activeTab === "all" || activeTab === "news") && matchedNews.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-purple-600" />
                  <span>Hospital News ({matchedNews.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedNews.map((news) => (
                    <Link
                      key={news.id}
                      href={`/news/${news.slug}`}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-purple-500 transition group flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[11px] text-purple-700 font-semibold">{news.date} • {news.category}</div>
                        <h4 className="font-bold text-slate-900 group-hover:text-purple-700 transition mt-0.5">{news.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{news.summary}</p>
                      </div>
                      <span className="text-xs font-semibold text-purple-700 mt-3 flex items-center gap-1">
                        View Announcement <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading search interface...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
