import React from "react";
import Link from "next/link";
import { HelpCircle, Calendar, ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { generalFaqs } from "@/data/faqs";

export const metadata = {
  title: "Appointment FAQs & Consultation Timings",
  description: "Common questions regarding booking doctor appointments, OPD hours, cancellation, and first-visit requirements at Marriott Hospital.",
};

export default function AppointmentFaqPage() {
  const appointmentFaqs = generalFaqs.filter((f) => f.category === "General & Appointments");

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Appointments", href: "/appointments" },
            { label: "Doctor FAQs" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Patient Support
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Appointment Information & Doctor FAQs
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Everything you need to know about booking, rescheduling, consultation timings, and preparing for your specialist visit at Marriott Hospital.
          </p>
        </div>

        <div className="space-y-4">
          {appointmentFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <h2 className="font-heading font-bold text-base text-navy-900 mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-clinical-600 flex-shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}

          {/* Additional Specific Appointment Questions */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-base text-navy-900 mb-2 flex items-start gap-2.5">
              <HelpCircle className="w-5 h-5 text-clinical-600 flex-shrink-0 mt-0.5" />
              <span>How do I reschedule or cancel my booked appointment?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
              To reschedule or cancel your appointment, please contact our Central Appointment Desk at +91 (484) 2800-000 at least 4 hours in advance with your reference code. There is no cancellation fee for advance notices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-base text-navy-900 mb-2 flex items-start gap-2.5">
              <HelpCircle className="w-5 h-5 text-clinical-600 flex-shrink-0 mt-0.5" />
              <span>Are teleconsultations or online video appointments offered?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
              Yes, for stable follow-up consultations and review of diagnostic test results, selected departments offer secure video consultations. You can inquire about teleconsultation eligibility when speaking with the department coordinator.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-base text-navy-900">
              Ready to schedule your appointment?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Choose your doctor, pick an open date, and confirm your visit in 2 minutes.
            </p>
          </div>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs shadow transition-all flex-shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
