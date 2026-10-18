import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, AlertCircle, Award, Activity } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Quality & Patient Safety Indicators",
  description: "Learn about hospital infection control rates, surgical safety checklists, clinical peer review audits, and patient safety standards at Marriott Hospital.",
};

export default function QualityPatientSafetyPage() {
  const safetyIndicators = [
    {
      metric: "99.4%",
      label: "Hand Hygiene Compliance",
      desc: "Monitored across all intensive care units and surgical prep zones using WHO observational tools.",
    },
    {
      metric: "< 0.8%",
      label: "Surgical Site Infection (SSI) Rate",
      desc: "Substantially below the national benchmark of 2.5% through strict laminar airflow and antibiotic stewardship.",
    },
    {
      metric: "100%",
      label: "WHO Surgical Safety Checklist Adherence",
      desc: "Mandatory time-out verifications before every surgical incision to eliminate site or patient discrepancy.",
    },
    {
      metric: "< 55 min",
      label: "Door-to-Balloon Emergency STEMI Time",
      desc: "Emergency cardiac revascularization average, surpassing the international gold standard of 90 minutes.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Quality & Patient Safety" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Clinical Governance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Quality & Patient Safety Indicators
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Patient safety is not an afterthought—it is the foundational metric of our clinical operations. We track, audit, and benchmark quality indicators every month.
          </p>
        </div>

        <div className="space-y-10">
          {/* Key Clinical Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyIndicators.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-clinical-800 block mb-2">
                    {ind.metric}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-navy-900">
                    {ind.label}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Protocols */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="font-heading font-bold text-xl text-navy-900 pb-2 border-b border-slate-100">
              Institutional Safety Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Hospital-Acquired Infection (HAI) Surveillance
                </h3>
                <p className="leading-relaxed">
                  Our Hospital Infection Control Committee (HICC), headed by clinical microbiologists and infectious disease specialists, conducts daily audits of central lines, ventilators, and urinary catheters to prevent CAUTI, CLABSI, and VAP.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Antimicrobial Stewardship Program (AMSP)
                </h3>
                <p className="leading-relaxed">
                  To combat antibiotic resistance, prescription of restricted reserve antibiotics requires pre-authorization by the infectious disease board following microbiological culture reports.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Medication Safety & Barcode Verification
                </h3>
                <p className="leading-relaxed">
                  High-risk and look-alike, sound-alike (LASA) medications are stored in separate designated colored bins with double-nurse verification before bedside administration.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-heading font-bold text-sm text-navy-900 mb-2">
                  Patient Fall & Pressure Injury Prevention
                </h3>
                <p className="leading-relaxed">
                  All admitted patients undergo Morse Fall Scale assessment on admission. High-risk patients receive color-coded wristbands, bed alarms, and low-height motorized safety beds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
