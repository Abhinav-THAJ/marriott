"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Clock,
  User,
  MapPin,
  FileText,
  Printer,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref") || "MH-782941";
  const patientName = searchParams.get("name") || "Valued Patient";
  const date = searchParams.get("date") || "Upcoming Date";
  const slot = searchParams.get("slot") || "Scheduled Time Slot";
  const item = searchParams.get("item") || "Specialist Consultation";

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Appointments", href: "/appointments" },
            { label: "Booking Confirmation" },
          ]}
        />

        {/* Success Card */}
        <div className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-teal-800 to-clinical-900 p-8 text-white text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-teal-300" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Appointment Request Received
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl mt-1 tracking-tight">
              Booking Confirmed: {refCode}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-lg mx-auto">
              Thank you, {patientName}. Your consultation request has been logged with our central outpatient registration desk.
            </p>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Booking Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4 text-xs sm:text-sm">
              <h2 className="font-heading font-bold text-sm text-navy-900 pb-2 border-b border-slate-200">
                Consultation Summary
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-clinical-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-xs">Doctor / Service:</span>
                    <strong className="text-slate-800 font-bold block">{item}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-clinical-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-xs">Date:</span>
                    <strong className="text-slate-800 font-bold block">{date}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-clinical-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-xs">Time Window:</span>
                    <strong className="text-slate-800 font-bold block">{slot}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-clinical-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-xs">Reporting Location:</span>
                    <strong className="text-slate-800 font-bold block">
                      Main OPD Atrium, Tower A (Floor 1)
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Checklist */}
            <div>
              <h3 className="font-heading font-bold text-sm text-navy-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-clinical-600" />
                <span>What to Bring for Your Consultation</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">&bull;</span>
                  <span><strong>Government Photo Identification:</strong> Aadhar, Passport, or Driving License for hospital registration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">&bull;</span>
                  <span><strong>Past Medical Records:</strong> Recent lab reports, ECGs, CT/MRI films, discharge summaries, or previous prescriptions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">&bull;</span>
                  <span><strong>Current Medications:</strong> Carry ongoing medications in original packaging for doctor review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">&bull;</span>
                  <span><strong>Health Insurance Card:</strong> If you intend to utilize cashless insurance or reimbursement facilities.</span>
                </li>
              </ul>
            </div>

            {/* Arrival Notice */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
              <strong>Arrival Timing:</strong> Please report to the Express OPD Check-in Counter 15 minutes prior to your allocated time. Present your Reference Code (<strong>{refCode}</strong>) to receive your clinic token number.
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Confirmation Slip</span>
              </button>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-slate-600 hover:text-clinical-800 transition-colors"
                >
                  Campus Directions
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white text-xs font-bold transition-colors"
                >
                  <span>Return to Home</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppointmentConfirmationPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading confirmation receipt...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
