import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Patient Data Governance | Marriott Hospital",
  description: "Learn how Marriott Hospital collects, safeguards, and processes clinical and website visitor information under applicable healthcare data protection statutes.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" }
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mt-6">
          <div className="flex items-center gap-2 text-clinical-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Information Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-xs text-slate-500 mt-2 mb-8">
            Last Reviewed & Approved: October 2026 • Reference: POL-INF-092
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">1. Purpose & Scope</h2>
              <p>
                Marriott Hospital ("the Hospital", "we", "our") is dedicated to preserving the absolute confidentiality, integrity, and security of all Protected Health Information (PHI) and personal identifiers collected through our physical campus, digital appointment portals, and this website.
              </p>
              <p>
                This policy complies with the Digital Personal Data Protection Act (DPDP), the National Digital Health Mission (ABDM) guidelines, and standard international medical data protection protocols.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">2. Categories of Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity & Demographic Details:</strong> Patient full name, date of birth, age, gender, national identity number (where legally required), and residential address.</li>
                <li><strong>Contact Information:</strong> Phone numbers, WhatsApp handles, and email addresses utilized strictly for appointment reminders, lab alerts, and discharge communications.</li>
                <li><strong>Clinical & Medical Data:</strong> Medical history, consultation notes, diagnostic test results, pathology summaries, prescription records, and radiological scans required for clinical treatment.</li>
                <li><strong>Digital Interaction Data:</strong> IP addresses, browser types, and navigation telemetry collected anonymously to optimize website responsiveness.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">3. Lawful Basis & Utilization of Data</h2>
              <p>We process your information solely for the following legitimate healthcare operations:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Facilitating clinical outpatient consultations, diagnostic bookings, and inpatient hospitalizations.</li>
                <li>Coordinating cashless insurance approvals with Third Party Administrators (TPAs) upon explicit patient authorization.</li>
                <li>Transmitting urgent clinical alerts, critical lab results, and medication reminders.</li>
                <li>Complying with statutory public health surveillance and communicable disease reporting mandates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">4. Patient Data Rights</h2>
              <p>
                Patients maintain the fundamental right to inspect, review, and request certified physical or digital copies of their hospital records via the Central Medical Records Department (MRD). Patients may also request correction of inaccurate demographic records.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">5. Data Protection Officer (DPO) Contact</h2>
              <p>
                For grievances or inquiries concerning data privacy and confidentiality, contact our appointed Data Protection Officer:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-2 text-xs">
                <p className="font-bold text-slate-900">Office of the Data Protection Officer</p>
                <p>Marriott Hospital, NH 544 Highway Corridor, Edappally - Aluva Road, Kochi, Kerala 682024</p>
                <p className="mt-1">Email: <a href="mailto:privacy@marriotthospital.com" className="text-clinical-700 underline font-medium">privacy@marriotthospital.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
