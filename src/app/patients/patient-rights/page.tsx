import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Charter of Patient Rights & Responsibilities",
  description: "Official institutional charter defining patient rights, privacy, dignity, informed consent, and attendant responsibilities at Marriott Hospital.",
};

export default function PatientRightsPage() {
  const patientRights = [
    {
      title: "Right to Respect & Dignity",
      desc: "Every patient receives compassionate, respectful care irrespective of gender, religion, race, social background, or disability.",
    },
    {
      title: "Right to Informed Consent",
      desc: "Full explanation of diagnosis, proposed clinical procedures, risks, alternative treatment modalities, and expected outcomes prior to medical intervention.",
    },
    {
      title: "Right to Medical Privacy & Confidentiality",
      desc: "Total protection of personal health data, clinical examination privacy, and confidential management of diagnostic case sheets.",
    },
    {
      title: "Right to Know Doctor's Identity",
      desc: "Right to know the professional name, clinical qualifications, and designation of all doctors, surgeons, and nurses managing your care.",
    },
    {
      title: "Right to Second Opinion",
      desc: "Unrestricted freedom to seek a second clinical opinion and request copies of all medical investigations without hesitation.",
    },
    {
      title: "Right to Transparent Billing",
      desc: "Right to receive itemized cost estimations, explanation of invoices, and transparent breakdown of professional fees and medication charges.",
    },
  ];

  const patientResponsibilities = [
    {
      title: "Provide Accurate Medical History",
      desc: "Disclose complete and honest information regarding past illnesses, hospitalizations, medications, allergies, and ongoing symptoms.",
    },
    {
      title: "Follow Treatment Plans",
      desc: "Adhere conscientiously to the agreed medical advice, taking prescribed medications, dietary regimens, and attending follow-ups.",
    },
    {
      title: "Respect Hospital Rules & Staff",
      desc: "Treat hospital doctors, nursing staff, technicians, and fellow patients with courtesy, maintaining quiet hours and clean premises.",
    },
    {
      title: "Observe Infection Control Policies",
      desc: "Comply strictly with hand hygiene protocols, visitor limits, ICU visiting hours, and designated no-smoking and sanitization norms.",
    },
    {
      title: "Timely Financial Settlement",
      desc: "Fulfill hospital billing obligations and deposit arrangements promptly according to agreed estimates.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Patient Rights & Responsibilities" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Ethical Governance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Charter of Patient Rights & Responsibilities
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            In conformity with National Accreditation Board (NABH) standards and international medical ethics, Marriott Hospital upholds the fundamental dignity and autonomy of every patient.
          </p>
        </div>

        <div className="space-y-8">
          {/* Patient Rights Grid */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>Your Rights as a Patient</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {patientRights.map((right, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-heading font-bold text-sm text-navy-900 mb-1">
                    {idx + 1}. {right.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {right.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Responsibilities Grid */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-clinical-600" />
              <span>Your Responsibilities as a Patient & Attendant</span>
            </h2>

            <div className="space-y-3">
              {patientResponsibilities.map((resp, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-heading font-bold text-sm text-navy-900 mb-1">
                    {resp.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {resp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
