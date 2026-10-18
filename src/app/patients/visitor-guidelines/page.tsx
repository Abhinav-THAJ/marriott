import React from "react";
import Link from "next/link";
import { Users, Clock, AlertCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Visitor Guidelines & Visiting Hours",
  description: "Visiting hours, attendant pass rules, infection control protocols, and ICU restrictions at Marriott Hospital.",
};

export default function VisitorGuidelinesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Visitor Guidelines" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Hospital Policy
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Visitor Guidelines & Visiting Hours
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            While we recognize the therapeutic comfort family and friends provide, our visiting guidelines are strictly maintained to protect vulnerable patients from infection and guarantee vital clinical rest.
          </p>
        </div>

        <div className="space-y-6">
          {/* Visiting Hours Table */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-clinical-600" />
              <span>Designated Visiting Hours</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-bold text-navy-900 block text-sm">General Inpatient & Private Rooms</span>
                <p className="text-teal-700 font-bold mt-1 text-sm">04:30 PM - 07:00 PM (Daily)</p>
                <p className="text-slate-500 mt-1">Sunday additional hours: 10:00 AM - 12:00 PM</p>
                <p className="text-slate-400 text-[11px] mt-1">Maximum 2 visitors at bedside at a time.</p>
              </div>

              <div className="p-4 bg-red-50/60 rounded-2xl border border-red-100">
                <span className="font-bold text-red-900 block text-sm">Intensive Care Units (ICU / CCU / NICU)</span>
                <p className="text-red-700 font-bold mt-1 text-sm">11:30 AM - 12:30 PM & 05:00 PM - 06:00 PM</p>
                <p className="text-slate-600 mt-1">Only 1 immediate family attendant permitted.</p>
                <p className="text-red-600 text-[11px] mt-1 font-semibold">Strict hand disinfection & shoe covers required.</p>
              </div>
            </div>
          </div>

          {/* Core Visitor Rules */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>Infection Prevention & Campus Rules</span>
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                <span><strong>Visitor Passes:</strong> All visitors must present their Visitor Pass issued at the lobby security counter. Return passes upon leaving.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                <span><strong>No Outside Cooked Food:</strong> To prevent foodborne infections and maintain clinical dietary management, outside cooked food is not permitted.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                <span><strong>Children Under 12:</strong> Children under 12 years are restricted from inpatient wards to protect them from hospital pathogens.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                <span><strong>Quiet Hours:</strong> Silence must be strictly observed from 09:30 PM to 06:30 AM across all corridors and patient rooms.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                <span><strong>Tobacco & Smoke-Free Campus:</strong> Marriott Hospital is a 100% smoke-free and tobacco-free healthcare campus.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
