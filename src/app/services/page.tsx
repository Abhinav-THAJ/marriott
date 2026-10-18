import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  Clock,
  MapPin,
  CalendarCheck,
  BedDouble,
  Ambulance,
  ScanLine,
  TestTube,
  Scan,
  Scissors,
  HeartPulse,
  Accessibility,
  Activity
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { servicesData, ClinicalService } from "@/data/services";

export const metadata = {
  title: "Clinical & Ambulatory Patient Services",
  description: "Explore 24/7 emergency care, inpatient wards, outpatient clinics, modular operating theatres, and physical rehabilitation at Marriott Hospital.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Clinical Services" }]} />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Care Spectrum
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Clinical & Ambulatory Services
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            From daily outpatient specialist clinics and 24/7 acute trauma resuscitation to modular surgical theatres and intensive care, our clinical services ensure seamless healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-clinical-50 text-clinical-800 flex items-center justify-center group-hover:bg-clinical-800 group-hover:text-white transition-colors">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-700 bg-clinical-50 px-2.5 py-1 rounded-full border border-clinical-100">
                    {srv.category}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-xl text-navy-900 group-hover:text-clinical-800 transition-colors">
                  {srv.title}
                </h2>
                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {srv.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span className="truncate">{srv.availability}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{srv.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${srv.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-800 group-hover:underline"
                >
                  <span>Service Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/appointments"
                  className="text-xs font-semibold text-slate-500 hover:text-navy-900"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
