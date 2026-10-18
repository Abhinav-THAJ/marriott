"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, User, HeartPulse, ShieldAlert, Sparkles, FileText, ArrowRight } from "lucide-react";
import { doctorsData } from "@/data/doctors";
import { specialitiesData } from "@/data/specialities";
import { healthPackagesData } from "@/data/packages";
import { servicesData } from "@/data/services";
import { healthArticlesData } from "@/data/articles";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedDoctors = q
    ? doctorsData.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.department.toLowerCase().includes(q) ||
          d.qualifications.toLowerCase().includes(q)
      )
    : [];

  const matchedSpecialities = q
    ? specialitiesData.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.overview.toLowerCase().includes(q) ||
          s.keyConditions.some((c) => c.toLowerCase().includes(q))
      )
    : [];

  const matchedPackages = q
    ? healthPackagesData.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : [];

  const matchedServices = q
    ? servicesData.filter(
        (srv) =>
          srv.title.toLowerCase().includes(q) ||
          srv.summary.toLowerCase().includes(q)
      )
    : [];

  const matchedArticles = q
    ? healthArticlesData.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      )
    : [];

  const hasResults =
    matchedDoctors.length > 0 ||
    matchedSpecialities.length > 0 ||
    matchedPackages.length > 0 ||
    matchedServices.length > 0 ||
    matchedArticles.length > 0;

  const handleNavigate = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, specialities, symptoms, packages, or services..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-slate-200 text-slate-400 rounded-full"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-5">
          {!q && (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm font-medium">Type any doctor name, symptom, or service to search.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Cardiology", "Robotic Knee", "Dr. Arun Nair", "Health Checkup", "Stroke Protocol", "NICU"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="text-xs px-3 py-1 bg-slate-100 hover:bg-clinical-50 hover:text-clinical-800 text-slate-600 rounded-full transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="py-12 text-center text-slate-500">
              <p className="text-base font-semibold text-slate-700">No matching hospital results for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Please try searching with alternative medical terms or browse our departments.</p>
              <Link
                href="/specialities"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-clinical-800 hover:underline"
              >
                Browse All 17 Specialities <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Doctors Section */}
          {matchedDoctors.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <User className="w-3.5 h-3.5 text-clinical-800" />
                <span>Specialist Doctors ({matchedDoctors.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedDoctors.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => handleNavigate(`/doctors/${doc.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-clinical-50/70 border border-transparent hover:border-clinical-100 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-clinical-800">
                        {doc.name}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">{doc.department}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{doc.qualifications}</p>
                    </div>
                    <span className="text-xs text-clinical-800 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Profile →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specialities Section */}
          {matchedSpecialities.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
                <span>Specialities & Departments ({matchedSpecialities.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedSpecialities.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => handleNavigate(`/specialities/${spec.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-teal-50/70 border border-transparent hover:border-teal-100 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-teal-700">
                        {spec.name}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">{spec.heroTagline}</p>
                    </div>
                    <span className="text-xs text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Explore →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Health Packages Section */}
          {matchedPackages.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Preventive Health Packages ({matchedPackages.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => handleNavigate(`/health-packages/${pkg.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-100 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-amber-700">
                        {pkg.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">{pkg.subtitle}</p>
                      <span className="text-[11px] font-bold text-slate-700 mt-1 inline-block">
                        {pkg.priceNote}
                      </span>
                    </div>
                    <span className="text-xs text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Details →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Services */}
          {matchedServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                <span>Clinical & Patient Services ({matchedServices.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedServices.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => handleNavigate(`/services/${srv.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-clinical-800">
                        {srv.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">{srv.summary}</p>
                    </div>
                    <span className="text-xs text-clinical-800 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      View →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Health Library Articles */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <FileText className="w-3.5 h-3.5 text-purple-600" />
                <span>Health Articles & Education ({matchedArticles.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => handleNavigate(`/health-library/${art.slug}`)}
                    className="w-full text-left p-3 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-purple-100 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-purple-700">
                        {art.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">{art.excerpt}</p>
                    </div>
                    <span className="text-xs text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Read →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
