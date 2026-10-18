import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { servicesData, ClinicalService } from "@/data/services";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Marriott Hospital`,
    description: `${service.summary} Learn about availability, location, and preparation guidelines at Marriott Hospital.`,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Clinical Services", href: "/services" },
            { label: service.title },
          ]}
        />

        {/* Hero Card */}
        <div className="mt-4 bg-gradient-to-br from-navy-950 via-navy-900 to-clinical-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-clinical-500/20 text-clinical-300 text-xs font-bold uppercase tracking-wider mb-3 border border-clinical-400/30">
              {service.category}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              {service.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-clinical-200 font-medium">
              {service.summary}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Availability: <strong>{service.availability}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-clinical-400" />
                <span>Location: <strong>{service.location}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Key Clinical Features */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Key Service Capabilities & Standards</span>
              </h2>
              <div className="space-y-3">
                {service.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0"></span>
                    <span className="font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Preparation Guidance */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-clinical-600" />
                <span>Patient Preparation & Arrival Guidelines</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-clinical-50/50 p-4 rounded-2xl border border-clinical-100">
                {service.patientPreparation}
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Booking */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-heading font-bold text-base text-navy-900 mb-3 pb-2 border-b border-slate-100">
                Direct Service Assistance
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Service Desk:</span>
                  <a href={`tel:${service.contactNumber.replace(/[^0-9+]/g, "")}`} className="font-bold text-clinical-800 text-sm">
                    {service.contactNumber}
                  </a>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-400 block font-medium">Campus Location:</span>
                  <span className="font-bold text-slate-800">{service.location}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Link
                  href="/appointments"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs shadow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Person Visit</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                >
                  <span>General Inquiry Form</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
