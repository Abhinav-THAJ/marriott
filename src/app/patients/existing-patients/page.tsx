import React from "react";
import Link from "next/link";
import { ShieldCheck, Calendar, FileText, ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Existing Patients Care - Follow-ups & Records",
  description: "Information for returning patients at Marriott Hospital. Book follow-up appointments, access test results, and request prescription refills.",
};

export default function ExistingPatientsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Existing Patients" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Continuing Care
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Existing Patients Support
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            We are privileged to be your trusted healthcare partner. Review how to schedule follow-up appointments, obtain diagnostic reports, and manage long-term medical care.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <Calendar className="w-8 h-8 text-clinical-600 mb-3" />
                <h2 className="font-heading font-bold text-base text-navy-900">
                  Follow-Up Consultations
                </h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Scheduled follow-ups ensure that your medication doses are optimized, surgical healing is evaluated, and recovery is on schedule. Quote your UHID number when booking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/appointments"
                  className="text-xs font-bold text-clinical-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Book Follow-up Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <FileText className="w-8 h-8 text-teal-600 mb-3" />
                <h2 className="font-heading font-bold text-base text-navy-900">
                  Accessing Diagnostic Reports
                </h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Laboratory and radiology reports are archived under your UHID. Once authorized by pathologists or radiologists, reports can be collected from the Central Diagnostic Dispatch counter.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/patients/medical-records"
                  className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>Medical Records Info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-base text-navy-900 mb-3 pb-2 border-b border-slate-100">
              Prescription Refills & Chronic Care Management
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Patients on long-term medications for hypertension, diabetes, cardiac conditions, or neurological disorders should schedule periodic review consultations every 3 to 6 months to adjust drug dosages based on updated blood parameters and organ function.
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-2xl text-xs text-slate-600 flex items-center justify-between">
              <span>Need help recalling your UHID or doctor schedule?</span>
              <a href="tel:+914842800000" className="font-bold text-clinical-800 hover:underline">
                Call Helpline: +91 (484) 2800-000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
