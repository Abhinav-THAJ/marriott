import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Cpu
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { departmentsData, Department } from "@/data/departments";

interface DeptPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return departmentsData.map((d) => ({
    slug: d.slug,
  }));
}

export function generateMetadata({ params }: DeptPageProps) {
  const dept = departmentsData.find((d) => d.slug === params.slug);
  if (!dept) return { title: "Department Not Found" };

  return {
    title: `${dept.name} | Marriott Hospital`,
    description: `${dept.overview} Learn about infrastructure, services, and location at Marriott Hospital.`,
  };
}

export default function DepartmentDetailPage({ params }: DeptPageProps) {
  const dept = departmentsData.find((d) => d.slug === params.slug);
  if (!dept) notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Departments", href: "/departments" },
            { label: dept.name },
          ]}
        />

        {/* Hero Card */}
        <div className="mt-4 bg-gradient-to-br from-navy-950 via-navy-900 to-clinical-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-clinical-500/20 text-clinical-300 text-xs font-bold uppercase tracking-wider mb-3 border border-clinical-400/30">
              Hospital Department
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              {dept.name}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-clinical-200 font-semibold">
              Leadership: {dept.headOfDepartment}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {dept.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{dept.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-clinical-400" />
                <span>Direct Extension: <strong>{dept.contactExtension}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Core Services */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Core Department Services</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dept.coreServices.map((srv, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 flex-shrink-0"></span>
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Infrastructure & Equipment */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-clinical-600" />
                <span>Specialized Equipment & Technology</span>
              </h2>
              <div className="space-y-3">
                {dept.keyEquipment.map((eq, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 p-3 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-clinical-600 mt-2 flex-shrink-0"></span>
                    <span className="font-medium leading-relaxed">{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Quick Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-heading font-bold text-base text-navy-900 mb-3 pb-2 border-b border-slate-100">
                Department Inquiries
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                For specific scheduling, patient transfers, or doctor inquiries regarding {dept.name}:
              </p>

              <div className="mt-4 p-4 bg-clinical-50/70 border border-clinical-100 rounded-2xl text-xs space-y-2">
                <p className="text-navy-900 font-bold">Marriott Central Reception</p>
                <p className="text-slate-600">Telephone: {dept.contactExtension}</p>
                <p className="text-slate-600">Location: {dept.location}</p>
              </div>

              <div className="mt-5 space-y-2">
                <Link
                  href="/appointments"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs shadow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                >
                  <span>General Contact Form</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
