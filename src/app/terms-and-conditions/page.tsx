import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions of Service | Marriott Hospital",
  description: "Review the terms and conditions governing the use of Marriott Hospital's online scheduling services, informational resources, and hospital facilities.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Terms & Conditions" }
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mt-6">
          <div className="flex items-center gap-2 text-clinical-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-slate-500 mt-2 mb-8">
            Effective Date: October 2026 • Governing Law: Jurisdiction of Courts in Ernakulam, Kerala
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">1. Acceptance of Terms</h2>
              <p>
                By accessing this website, scheduling an outpatient consultation, registering for health screening packages, or entering the premises of Marriott Hospital, you agree to be legally bound by these terms, our hospital policies, and all applicable statutory regulations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">2. Nature of Website Information</h2>
              <p>
                All informational content, medical articles, department overviews, and health guides published on this website are provided strictly for educational and public health awareness purposes. <strong>Nothing on this website constitutes direct medical advice, clinical diagnosis, or a prescription.</strong>
              </p>
              <p>
                Patients experiencing acute or life-threatening symptoms must immediately report to our 24/7 Emergency & Trauma Centre or dial emergency services (+91 484 288 0911).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">3. Appointments & Doctor Availability</h2>
              <p>
                While Marriott Hospital makes every effort to honour scheduled appointment timings, medical emergencies, emergency operative call-outs, and urgent trauma admissions may occasionally necessitate doctor rescheduling. In such circumstances, our OPD reception desk will provide the earliest alternate consultation slot.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">4. Non-Affiliation Notice</h2>
              <p>
                Marriott Hospital is an autonomous healthcare institution operated independently in Kochi, Kerala. The hospital has no affiliation, commercial partnership, or corporate relationship with Marriott International, Marriott Hotels, Marriott Bonvoy, or any hospitality lodging chain.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">5. Zero Tolerance for Violence</h2>
              <p>
                Under the Kerala Healthcare Service Persons and Healthcare Service Institutions (Prevention of Violence and Damage to Property) Act, any verbal abuse, physical obstruction, or threat directed towards healthcare professionals or hospital property is a non-bailable criminal offense subject to legal prosecution.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
