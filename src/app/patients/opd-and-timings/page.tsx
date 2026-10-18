import React from "react";
import Link from "next/link";
import { Clock, MapPin, Calendar, AlertCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { specialitiesData } from "@/data/specialities";
import { doctorsData } from "@/data/doctors";

export const metadata = {
  title: "OPD Schedules & Doctor Consultation Timings",
  description: "Daily outpatient department consultation timings and clinic rooms across all medical and surgical specialities at Marriott Hospital.",
};

export default function OpdTimingsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "OPD & Timings" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Outpatient Department
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            OPD Schedules & Consultation Timings
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Our outpatient clinics run Monday through Saturday across Towers A & B. Sunday operates 24/7 for emergency triage and critical inpatient care.
          </p>
        </div>

        {/* Operating Hours Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <Clock className="w-6 h-6 text-clinical-600 mb-2" />
            <h3 className="font-heading font-bold text-sm text-navy-900">General OPD Hours</h3>
            <p className="text-xs text-slate-600 mt-1">
              Monday - Saturday: <strong>08:30 AM - 07:00 PM</strong>
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Registration counter opens at 08:00 AM</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <Clock className="w-6 h-6 text-red-600 mb-2" />
            <h3 className="font-heading font-bold text-sm text-navy-900">24/7 Emergency Care</h3>
            <p className="text-xs text-slate-600 mt-1">
              Operates <strong>24 Hours / 365 Days</strong>
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Direct triage via Ground Floor East Gate</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <Clock className="w-6 h-6 text-teal-600 mb-2" />
            <h3 className="font-heading font-bold text-sm text-navy-900">Diagnostic Services</h3>
            <p className="text-xs text-slate-600 mt-1">
              Sample Collection: <strong>07:00 AM - 08:00 PM</strong>
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Emergency lab & imaging runs 24 hours</p>
          </div>
        </div>

        {/* Doctor Schedules Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-heading font-bold text-lg text-navy-900">
              Consultant OPD Clinic Timetable
            </h2>
            <Link
              href="/appointments"
              className="px-4 py-2 bg-clinical-800 hover:bg-clinical-900 text-white text-xs font-bold rounded-xl shadow transition-colors"
            >
              Book In-Person Slot
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
                <tr>
                  <th className="py-3.5 px-6">Doctor & Designation</th>
                  <th className="py-3.5 px-6">Speciality / Department</th>
                  <th className="py-3.5 px-6">Consultation Days</th>
                  <th className="py-3.5 px-6">Timings</th>
                  <th className="py-3.5 px-6">Clinic Room</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {doctorsData.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-navy-900">
                      <Link href={`/doctors/${doc.slug}`} className="hover:text-clinical-800">
                        {doc.name}
                      </Link>
                      <span className="block text-[11px] font-normal text-slate-400">{doc.qualifications}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{doc.department}</td>
                    <td className="py-4 px-6 font-semibold text-slate-800">{doc.opdSchedule[0]?.days || "Mon - Sat"}</td>
                    <td className="py-4 px-6 text-teal-700 font-bold">{doc.opdSchedule[0]?.hours || "09:00 AM - 01:00 PM"}</td>
                    <td className="py-4 px-6 text-slate-500">{doc.opdSchedule[0]?.room || "OPD Suite"}</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/appointments?doctor=${doc.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-clinical-800 hover:underline"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
