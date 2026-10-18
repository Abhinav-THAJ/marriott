import React from "react";
import Link from "next/link";
import { CheckCircle2, FileCheck, Pill, Calendar, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Hospital Discharge Process & Protocols",
  description: "Comprehensive guide to the discharge workflow, billing clearance, take-home medication counseling, and follow-up care at Marriott Hospital.",
};

export default function DischargePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Discharge Process" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Care Continuum
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Patient Discharge Protocol
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            The discharge process is carefully coordinated by your clinical care team to ensure safe recovery at home, clear medication instructions, and seamless billing closure.
          </p>
        </div>

        <div className="space-y-6">
          {/* Discharge Steps */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100">
              The 4 Steps of Discharge
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Consultant Round & Discharge Order</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    During morning ward rounds, your treating consultant reviews recovery metrics, vital stability, and surgical healing, issuing the clinical discharge order.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Discharge Summary & Prescription Handoff</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    The medical officer prepares an exhaustive Discharge Summary detailing your initial diagnosis, investigations, surgical procedures, clinical course, and follow-up plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Take-Home Medication Counseling</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    A clinical pharmacist delivers your prescribed discharge medications to the bedside, explaining dosages, timing, food interactions, and storage guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Billing Clearance & Gate Pass</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    The billing desk completes final invoice reconciliation (or TPA final approval for cashless patients). Upon settlement, a discharge gate pass is issued.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Expectations */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-3 pb-2 border-b border-slate-100">
              Processing Time Expectations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Cash paying patients typically complete discharge within 2 hours of the doctor&apos;s morning order. For cashless insurance patients, the final approval turnaround time depends on the insurance TPA, which usually takes between 2 to 4 hours after final bill transmission.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-clinical-600 flex-shrink-0 mt-0.5" />
              <span>
                Please ensure you receive your original discharge summary, diagnostic reports, take-home medicines, and follow-up appointment date before leaving your room.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
