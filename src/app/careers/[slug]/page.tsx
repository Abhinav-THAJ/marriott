import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { jobPostings } from "@/data/careers";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Building,
  Users
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return jobPostings.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = jobPostings.find((j) => j.slug === params.slug);
  if (!job) return { title: "Position Not Found | Marriott Hospital Careers" };
  return {
    title: `${job.title} | Careers at Marriott Hospital`,
    description: job.overview,
  };
}

export default function JobDetailPage({ params }: Props) {
  const job = jobPostings.find((j) => j.slug === params.slug);
  if (!job) notFound();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: job.title }
            ]}
          />
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="bg-teal-500/20 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30">
              {job.department}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
              {job.employmentType}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 font-display">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-teal-400" />
              <span>{job.openings} Openings</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
                Role Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {job.overview}
              </p>

              <h3 className="text-lg font-bold text-slate-900 font-display mt-8 mb-4">
                Key Responsibilities & Duties
              </h3>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-clinical-600 mt-1 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-slate-900 font-display mt-8 mb-4">
                Eligibility & Candidate Profile
              </h3>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-slate-900 font-display mt-8 mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-700 hover:text-clinical-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Openings</span>
                </Link>
                <Link
                  href={`/careers/apply?job=${job.slug}`}
                  className="inline-flex items-center gap-2 bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow transition"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Action Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-slate-900 font-display text-base mb-1">
                Ready to Apply?
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Submit your updated curriculum vitae and registration credentials to our Human Resources Directorate.
              </p>

              <div className="space-y-3 mb-6 text-xs text-slate-600">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-400">Department</span>
                  <span className="font-semibold text-slate-800">{job.department}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-400">Location</span>
                  <span className="font-semibold text-slate-800">{job.location}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-400">Type</span>
                  <span className="font-semibold text-slate-800">{job.employmentType}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-400">Experience</span>
                  <span className="font-semibold text-slate-800">{job.experience}</span>
                </div>
              </div>

              <Link
                href={`/careers/apply?job=${job.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-sm py-3 rounded-lg shadow transition text-center"
              >
                <span>Proceed to Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
