import React from "react";
import Link from "next/link";
import { Receipt, ShieldCheck, CheckCircle2, FileText, Phone, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Billing & Cashless Insurance Desk",
  description: "Empanelled TPAs, cashless hospitalization guidelines, insurance pre-authorization, and payment policies at Marriott Hospital.",
};

export default function BillingInsurancePage() {
  const empanelledTPAs = [
    "Star Health & Allied Insurance",
    "ICICI Lombard General Insurance",
    "HDFC ERGO Health Insurance",
    "Max Bupa / Niva Bupa Health",
    "Care Health Insurance (Religare)",
    "Bajaj Allianz General Insurance",
    "Medi Assist Insurance TPA",
    "Vidal Health TPA",
    "MDIndia Health Insurance TPA",
    "Paramount Health Services TPA",
    "Heritage Health Insurance TPA",
    "Family Health Plan Insurance TPA (FHPL)",
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Billing & Insurance" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Financial Transparency
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Billing & Cashless Insurance Desk
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Marriott Hospital maintains a dedicated 24/7 Insurance & TPA Coordination Desk to streamline cashless hospitalization approvals and ensure transparent billing.
          </p>
        </div>

        <div className="space-y-6">
          {/* Cashless Process Flow */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>How Cashless Hospitalization Works</span>
            </h2>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-clinical-50 text-clinical-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h3 className="font-heading font-bold text-slate-900">Pre-Authorization Request Submission</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    Submit your health insurance policy copy, TPA photo ID, doctor&apos;s admission advice, and first consultation prescription at the Insurance Desk. For planned surgery, please submit at least 48 hours prior to admission.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-clinical-50 text-clinical-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h3 className="font-heading font-bold text-slate-900">Initial Approval from Insurer</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    The insurance desk transmits clinical records and cost estimates to your insurer. The insurer typically issues an Initial Pre-Authorization sanction within 4 to 6 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-clinical-50 text-clinical-800 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h3 className="font-heading font-bold text-slate-900">Final Bill Settlement on Discharge</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    Upon discharge order, the final itemized bill, lab reports, and doctor summary are sent to the TPA for Final Approval. The patient pays only non-medical items (as per policy terms).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Empanelled Partners List */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100">
              Empanelled Insurers & TPAs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
              {empanelledTPAs.map((tpa, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="font-medium">{tpa}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-4">
              * If your insurance provider is not listed above, our billing desk provides all authenticated documentation required for post-hospitalization reimbursement claims.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-6 bg-navy-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                Have questions about your insurance coverage?
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Speak directly with an Insurance Coordinator at our hospital helpdesk.
              </p>
            </div>
            <a
              href="tel:+914842800000"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-clinical-600 hover:bg-clinical-500 text-white rounded-xl text-xs font-bold transition-all shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Insurance Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
