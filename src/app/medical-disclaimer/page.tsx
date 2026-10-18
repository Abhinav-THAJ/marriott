import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AlertTriangle, Stethoscope, PhoneCall, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical & Clinical Disclaimer | Marriott Hospital",
  description: "Official medical disclaimer regarding health articles, diagnostic information, and emergency protocol at Marriott Hospital.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Medical Disclaimer" }
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mt-6">
          <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Clinical Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Medical Disclaimer & Emergency Protocol
          </h1>
          <p className="text-xs text-slate-500 mt-2 mb-8">
            Published by the Clinical Governance & Quality Council • Marriott Hospital
          </p>

          {/* Urgent Emergency Warning Box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8 flex items-start gap-4">
            <ShieldAlert className="w-8 h-8 text-red-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-base font-bold text-red-950">
                In Case of Acute Medical Emergency
              </h2>
              <p className="text-xs sm:text-sm text-red-800 mt-1 leading-relaxed">
                If you or someone under your care is experiencing crushing chest pain, sudden numbness or speech difficulty (stroke symptoms), severe breathlessness, uncontrolled hemorrhage, loss of consciousness, or major trauma, <strong>DO NOT RELY ON THIS WEBSITE</strong>.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+914842880911"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition inline-flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Emergency: +91 484 288 0911</span>
                </a>
                <span className="text-xs font-semibold text-red-900">
                  Or report directly to Marriott Emergency & Trauma Centre.
                </span>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="text-lg font-bold text-slate-900 font-display">1. Informational Purpose Only</h3>
              <p>
                The medical articles, symptom checklists, treatment overviews, surgical descriptions, and health package details on this website are authored solely for general health education, preventative awareness, and public guidance. <strong>They do not establish a physician-patient relationship.</strong>
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 font-display">2. No Substitute for Professional Clinical Evaluation</h3>
              <p>
                Online medical summaries can never replace individualized physical examination, diagnostic investigations, laboratory pathology, or the specialized clinical judgement of a licensed healthcare physician. Never disregard professional medical advice or delay seeking evaluation because of something you have read on this website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 font-display">3. Medical Review & Evolution of Science</h3>
              <p>
                While content on our Health Library is reviewed by clinical specialists at the time of publication, medical knowledge, pharmacological guidelines, and surgical protocols evolve continuously. Marriott Hospital does not warrant that past articles reflect the very latest clinical guidelines published after their review date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 font-display">4. Diagnostic Screening Packages</h3>
              <p>
                Preventive health packages are screening tools designed to detect silent risk factors. Normal screening test values do not provide an absolute guarantee against future health events, and abnormal screening indicators require formal clinical consultation with our consultant faculty.
              </p>
            </section>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
              <Link
                href="/doctors"
                className="bg-clinical-600 hover:bg-clinical-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition"
              >
                Consult a Doctor
              </Link>
              <Link
                href="/appointments"
                className="border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold px-5 py-2.5 rounded-lg transition"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
