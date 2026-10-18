import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, AlertCircle, Clock, CheckCircle2, Phone, Download } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Medical Records Department (MRD) - Report Requests",
  description: "Official procedure for requesting authenticated copies of hospital case sheets, discharge summaries, and diagnostic reports from Marriott Hospital MRD.",
};

export default function MedicalRecordsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Medical Records (MRD)" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Clinical Documentation
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Medical Records Department (MRD)
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Patient health information is strictly confidential. Our Medical Records Department (MRD) handles all requests for authenticated clinical case records, OT notes, and diagnostic records in compliance with national patient privacy legislation.
          </p>
        </div>

        <div className="space-y-6">
          {/* Privacy Security Notice */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3 text-xs text-teal-900">
            <ShieldCheck className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Confidentiality Assurance:</strong> In accordance with healthcare data protection principles, medical records are never released to third parties without verified written authorization from the patient or legal guardian.
            </div>
          </div>

          {/* Procedure for Requesting Records */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100">
              How to Request Authenticated Records
            </h2>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-clinical-50 text-clinical-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h3 className="font-heading font-bold text-slate-900">Submit Application Form & Patient ID</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    Complete the physical MRD Application Form available at our Ground Floor MRD Counter, accompanied by the patient&apos;s government photo ID and UHID hospital card.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-clinical-50 text-clinical-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h3 className="font-heading font-bold text-slate-900">Authorization Letter (If Requested by Representative)</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    If an immediate family member is collecting the records on behalf of the patient, a formal signed letter of consent from the patient along with the representative&apos;s photo ID is mandatory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-clinical-50 text-clinical-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h3 className="font-heading font-bold text-slate-900">Verification & Document Issuance</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    Routine duplicate discharge summaries and lab reports are processed within 24 to 48 working hours. Complete indoor case sheets for insurance or legal review are retrieved from archives within 3 to 5 working days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Hours & Contact */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-clinical-600" />
              <span>MRD Counter Operating Hours</span>
            </h2>
            <div className="space-y-2 text-xs text-slate-700">
              <p><strong>Days:</strong> Monday through Saturday (Excluding Public Holidays)</p>
              <p><strong>Timings:</strong> 09:00 AM - 04:30 PM</p>
              <p><strong>Counter Location:</strong> Ground Floor, Administration Wing (Opposite Tower B)</p>
              <p><strong>Direct MRD Extension:</strong> +91 (484) 2800-280</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
