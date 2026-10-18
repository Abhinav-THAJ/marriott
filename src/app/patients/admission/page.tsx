import React from "react";
import Link from "next/link";
import { BedDouble, CheckCircle2, FileText, ShieldCheck, AlertCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Inpatient Admission Process & Guidelines",
  description: "Step-by-step hospital admission guide for planned surgeries and emergency admissions at Marriott Hospital, Kochi.",
};

export default function AdmissionPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Admission Process" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Inpatient Care
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Hospital Admission Process
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Whether arriving for a planned surgical procedure or admitted through our emergency triage, our admissions desk ensures an organized, transparent transition into your inpatient room.
          </p>
        </div>

        <div className="space-y-6">
          {/* Planned vs Emergency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-700">Type A</span>
              <h2 className="font-heading font-bold text-base text-navy-900 mt-1">
                Planned Elective Admission
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                For scheduled surgeries or therapies, report to the Inpatient Admission Desk on the date and time instructed by your consultant. Pre-anaesthetic clearance (PAC) and financial estimation should be completed in advance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Type B</span>
              <h2 className="font-heading font-bold text-base text-navy-900 mt-1">
                Emergency Acute Admission
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Emergency patients are prioritized for immediate medical stabilization in the triage bay. Admission paperwork is coordinated seamlessly with accompanying family members without delaying life-saving interventions.
              </p>
            </div>
          </div>

          {/* Documentation Required */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-clinical-600" />
              <span>Required Documents for Admission</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Doctor&apos;s Admission Advice Slip with diagnosis</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Government photo ID of patient and primary attendant</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Health insurance e-card / physical card & policy schedule</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Past diagnostic test reports, blood grouping card & ECGs</span>
              </div>
            </div>
          </div>

          {/* Room Allocation and Deposit */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-3 pb-2 border-b border-slate-100">
              Room Categories & Financial Deposit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Patients may select from Executive Deluxe Suites, Private Single Rooms, Semi-Private Shared Rooms, or General Wards depending on clinical advice and preference. For non-insured or non-cashless admissions, an initial treatment deposit is collected at the admission counter.
            </p>
            <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl text-xs text-teal-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Cashless Patients:</strong> If your TPA pre-authorization is approved prior to admission, no cash deposit is required, except for a nominal non-medical consumable expense deposit as stipulated by your insurer.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
