import React from "react";
import Link from "next/link";
import { Building2, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { departmentsData } from "@/data/departments";

export const metadata = {
  title: "Hospital Operational Departments",
  description: "Browse operational departments at Marriott Hospital including Emergency & Trauma, Operation Theatres, Central Diagnostic Labs, and Rehabilitation.",
};

export default function DepartmentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Departments" }]} />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Institutional Infrastructure
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Operational Hospital Departments
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Discover the key infrastructure, central diagnostic hubs, advanced surgical theatres, and emergency wings powering clinical care at Marriott Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-clinical-50 text-clinical-800 flex items-center justify-center mb-4 group-hover:bg-clinical-800 group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>

                <h2 className="font-heading font-extrabold text-xl text-navy-900 group-hover:text-clinical-800 transition-colors">
                  {dept.name}
                </h2>
                <p className="text-xs text-teal-700 font-semibold mt-1">
                  Lead: {dept.headOfDepartment}
                </p>
                <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {dept.overview}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Core Clinical Functions:
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {dept.coreServices.slice(0, 3).map((srv, i) => (
                      <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="text-teal-600 font-bold">&bull;</span>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/departments/${dept.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-800 group-hover:underline"
                >
                  <span>Department Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[11px] text-slate-400">
                  {dept.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
