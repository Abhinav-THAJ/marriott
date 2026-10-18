import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Award,
  Users,
  HeartPulse,
  CheckCircle2,
  ArrowRight,
  Calendar
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "About Us - Overview & Clinical Heritage",
  description: "Learn about Marriott Hospital, our founding philosophy, tertiary clinical capabilities, and patient-first medical standards in Kochi, Kerala.",
};

export default function AboutPage() {
  const aboutLinks = [
    { title: "Our Hospital & Campus", href: "/about/our-hospital", desc: "450+ bed tertiary medical centre profile." },
    { title: "Vision, Mission & Values", href: "/about/vision-mission-values", desc: "Core ethical commitments guiding clinical care." },
    { title: "Leadership Directorate", href: "/about/leadership", desc: "Medical superintendence and clinical advisory boards." },
    { title: "Infrastructure & Technology", href: "/about/infrastructure", desc: "Clean air laminar flow OTs and 3T MRI diagnostics." },
    { title: "Quality & Patient Safety", href: "/about/quality-and-patient-safety", desc: "Infection indices and clinical audit indicators." },
    { title: "Accreditations", href: "/about/accreditations", desc: "NABH, NABL, and national quality recognitions." },
    { title: "Community Initiatives", href: "/about/community-initiatives", desc: "Rural medical camps and preventative CSR drives." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero Card */}
        <div className="mt-4 bg-gradient-to-br from-navy-950 via-navy-900 to-clinical-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-clinical-500/20 text-clinical-300 text-xs font-bold uppercase tracking-wider mb-3 border border-clinical-400/30">
              Healthcare Institution Profile
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Compassionate Healthcare, Clinical Precision
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Marriott Hospital was established to deliver state-of-the-art multidisciplinary tertiary medical care founded on rigorous clinical ethics, patient safety, and transparent medical counsel.
            </p>
          </div>
        </div>

        {/* Two-Column Overview */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
                Institutional Ethos
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-900 mt-1 leading-snug">
                Advancing tertiary medicine with integrity and patient-first responsibility.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Situated in Kochi, Kerala, Marriott Hospital brings together more than 65 super-specialist consultants across Cardiology, Neurosciences, Robotic Orthopaedics, Comprehensive Oncology, Gastroenterology, Paediatrics, and Critical Care Medicine.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our clinical philosophy prioritizes minimal invasive interventions, low door-to-balloon emergency cardiac response times, and evidence-based therapeutic regimens. We never compromise on patient dignity, clear explanations of health conditions, or rigorous infection control.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>NABH & NABL Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>24/7 Level-1 Trauma Centre</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Multidisciplinary Tumour Board</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md border border-slate-100">
              <Image
                src="/images/doctors/medical-team.jpg"
                alt="Marriott Hospital Medical Faculty"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>

        {/* Sub-Pages Navigation Grid */}
        <div className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
              Explore Our Institution
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-navy-900 mt-1">
              About Marriott Hospital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-heading font-bold text-base text-navy-900 group-hover:text-clinical-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-clinical-800 group-hover:underline">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
