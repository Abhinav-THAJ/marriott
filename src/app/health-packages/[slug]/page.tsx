import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  AlertCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Phone
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { healthPackagesData, HealthPackage } from "@/data/packages";

interface PackagePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return healthPackagesData.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PackagePageProps) {
  const pkg = healthPackagesData.find((p) => p.slug === params.slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} | Marriott Hospital`,
    description: `${pkg.subtitle}. Price: ${pkg.priceNote}. Fasting: ${pkg.fastingRequired ? "Yes" : "No"}. Book preventive health checkup.`,
  };
}

export default function PackageDetailPage({ params }: PackagePageProps) {
  const pkg = healthPackagesData.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Health Packages", href: "/health-packages" },
            { label: pkg.title },
          ]}
        />

        {/* Hero Card */}
        <div className="mt-4 bg-gradient-to-br from-navy-950 via-navy-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-400/30">
              {pkg.category} Health Checkup
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              {pkg.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-200 font-medium">
              {pkg.subtitle}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-heading font-extrabold text-4xl text-white">
                {pkg.priceNote}
              </span>
              {pkg.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  Regular: {pkg.originalPrice}
                </span>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/appointments?package=${pkg.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs sm:text-sm shadow-lg transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Checkup Online</span>
              </Link>

              <a
                href="tel:+914842800000"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Package Helpdesk: +91 (484) 2800-000</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: All Tests Included */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Comprehensive Inclusions & Tests</span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  NABL Quality Verified
                </span>
              </h2>

              <div className="space-y-6">
                {pkg.testsIncluded.map((grp, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="font-heading font-bold text-sm text-navy-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      <span>{grp.category}</span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {grp.tests.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Guidelines */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span>Preparation & Fasting Guidelines</span>
              </h2>
              <div className="space-y-3">
                {pkg.preparationGuidelines.map((guideline, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-amber-50/50 rounded-xl border border-amber-100 text-xs text-slate-700">
                    <span className="text-amber-700 font-bold">&bull;</span>
                    <span className="leading-relaxed font-medium">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Summary & Booking */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm sticky top-28">
              <h3 className="font-heading font-bold text-base text-navy-900 mb-4 pb-2 border-b border-slate-100">
                Package Overview
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Recommended For:</span>
                  <span className="font-bold text-slate-800">{pkg.targetAudience}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Fasting Requirement:</span>
                  <span className="font-bold text-slate-800">
                    {pkg.fastingRequired ? `${pkg.fastingHours} Hours Overnight Fasting` : "No Fasting"}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Report Delivery:</span>
                  <span className="font-bold text-teal-700">{pkg.reportTurnaround}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <Link
                  href={`/appointments?package=${pkg.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs shadow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Checkup Slot</span>
                </Link>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  No advance online payment required. Pay at the registration counter on the morning of testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
