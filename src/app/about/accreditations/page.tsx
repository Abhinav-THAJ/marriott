import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, FileCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Hospital Accreditations & Quality Certifications",
  description: "Official certifications, NABH compliance, NABL laboratory accreditation, and AERB radiation safety verifications for Marriott Hospital.",
};

export default function AccreditationsPage() {
  const accreditationsList = [
    {
      title: "NABH Accreditation",
      issuer: "National Accreditation Board for Hospitals & Healthcare Providers",
      standard: "Comprehensive Hospital Healthcare Standards (5th Edition)",
      scope: "Tertiary Multi-Speciality Inpatient, Outpatient & Emergency Operations",
      status: "Accredited & Certified",
    },
    {
      title: "NABL Accreditation (ISO 15189:2012)",
      issuer: "National Accreditation Board for Testing and Calibration Laboratories",
      standard: "Medical Laboratories — Requirements for Quality and Competence",
      scope: "Clinical Biochemistry, Haematology, Clinical Pathology & Microbiology",
      status: "Accredited & Certified",
    },
    {
      title: "AERB Radiation Safety Certification",
      issuer: "Atomic Energy Regulatory Board (AERB), Government of India",
      standard: "Radiation Safety for Medical Diagnostic Scanners",
      scope: "128-Slice CT, 3T MRI, Digital Mammography & Cath Lab C-Arms",
      status: "Compliant & Licensed",
    },
    {
      title: "Kayakalp Clean Hospital Standards",
      issuer: "Ministry of Health and Family Welfare Quality Assurance",
      standard: "Clean Hospital & Bio-Medical Waste Management Framework",
      scope: "Campus Hygiene, Waste Segregation & Infection Control",
      status: "Verified & Empanelled",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Accreditations" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Certified Excellence
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Accreditations & Certifications
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Our adherence to rigorous national quality boards affirms our dedication to clinical safety, diagnostic precision, and transparent healthcare administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {accreditationsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100/80 text-teal-800 px-2.5 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg text-navy-900">
                  {item.title}
                </h2>
                <p className="text-xs text-clinical-700 font-semibold mt-1">
                  {item.issuer}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                  <p><strong>Standard:</strong> {item.standard}</p>
                  <p><strong>Scope:</strong> {item.scope}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Public Notice Regarding Medical Claims */}
        <div className="p-6 bg-slate-100 border border-slate-200 rounded-3xl text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-700 block mb-1">Authenticity & Verification Notice:</strong>
          Marriott Hospital strictly publishes only verified accreditations and statutory clinical licenses. In accordance with medical council ethics, certificates are audited annually by independent inspection panels.
        </div>
      </div>
    </div>
  );
}
