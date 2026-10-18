import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, ShieldCheck, HeartPulse, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "About Our Hospital & Campus Architecture",
  description: "Explore the 450+ bed tertiary medical centre at Marriott Hospital, purpose-built with clean room air exchanges, robotic surgery suites, and patient-first architecture.",
};

export default function OurHospitalPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Our Hospital" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Campus Profile
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            About Marriott Hospital
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            A state-of-the-art 450-bed tertiary multispeciality institution situated in Kochi Medical City, engineered for patient safety, clinical excellence, and respectful healthcare.
          </p>
        </div>

        <div className="space-y-12">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-slate-100 shadow-md">
              <Image
                src="/images/hospital/exterior.jpg"
                alt="Marriott Hospital Building Campus"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Architectural Excellence
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-navy-900 mt-1">
                Built Around Patient Healing & Safety
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Marriott Hospital campus was conceived from the ground up to minimize hospital-acquired infections (HAI), facilitate rapid emergency transit, and provide daylight-flooded spaces that reduce hospital anxiety.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every department is logically organized: emergency and acute trauma resuscitation bays lead directly to our dedicated imaging block and emergency catheterization suites, ensuring zero loss of critical clinical minutes.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-clinical-800 block text-base font-bold">450+</strong>
                  <span>Hospital Beds</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-teal-700 block text-base font-bold">10</strong>
                  <span>Modular OTs with HEPA</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-navy-900 block text-base font-bold">85</strong>
                  <span>Critical Care ICU Beds</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-red-600 block text-base font-bold">24/7</strong>
                  <span>Cath Lab & Triage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Institutional Strengths */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-xl text-navy-900 mb-6 pb-2 border-b border-slate-100">
              Key Pillars of Hospital Governance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Clinical Evidence Over Commercial Targets
                </h3>
                <p className="leading-relaxed">
                  Our doctors make clinical decisions guided by national and international medical guidelines, rejecting unindicated surgeries or unnecessary diagnostic burdens.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Multidisciplinary Collaboration
                </h3>
                <p className="leading-relaxed">
                  Specialists collaborate across Cardiology, Oncology, Critical Care, and Surgery through weekly case reviews and tumour boards to create holistic patient management strategies.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Patient Dignity & Transparency
                </h3>
                <p className="leading-relaxed">
                  Clear, jargon-free counseling regarding treatment options, financial clarity with all major insurance TPAs, and respectful bedside nursing care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
