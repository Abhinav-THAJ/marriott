import React from "react";
import Link from "next/link";
import { UserCheck, CheckCircle2, FileText, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "New Patients Guide - What to Expect",
  description: "Essential guide for first-time visitors at Marriott Hospital. Learn what to bring, registration steps, and consultation preparation.",
};

export default function NewPatientsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "New Patients Guide" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            First-Time Visitors
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            New Patient Welcome Guide
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Welcome to Marriott Hospital. We strive to make your first visit efficient and reassuring. Review our registration steps and checklist below.
          </p>
        </div>

        <div className="space-y-6">
          {/* Registration Step by Step */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100">
              3 Steps to Complete on Arrival
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-clinical-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Hospital Registration & UHID Creation</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Report to the New Patient Registration Desk at the Ground Floor Main Lobby. You will be assigned a unique hospital identification number (UHID) that securely stores your lifelong electronic medical records.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-clinical-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Consultation Token & Vitals Check</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    A clinical triage nurse will record your baseline vital parameters (blood pressure, temperature, pulse rate, oxygen saturation, and body weight) before escorting you to your specialist&apos;s consultation suite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-clinical-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy-900">Doctor Consultation & Diagnostic Review</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Meet with your doctor for a detailed clinical history, physical examination, and discussion of recommended diagnostics or treatment pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              <span>What to Bring on Your First Visit</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Government photo ID (Aadhar / Passport / Driving License)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Previous medical history, surgery records & discharge summaries</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Recent blood investigation reports, ECGs, and imaging films (CD/Film)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Health insurance policy copy and TPA photo identity card</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-clinical-50 border border-clinical-100 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-sm text-navy-900">
                Ready to book your first consultation?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Save time at registration by booking your specialist slot online in advance.
              </p>
            </div>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-clinical-800 hover:bg-clinical-900 text-white rounded-xl text-xs font-bold transition-all shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
