import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { facilitiesData, HospitalFacility } from "@/data/facilities";

interface FacilityPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return facilitiesData.map((f) => ({
    slug: f.slug,
  }));
}

export function generateMetadata({ params }: FacilityPageProps) {
  const fac = facilitiesData.find((f) => f.slug === params.slug);
  if (!fac) return { title: "Facility Not Found" };

  return {
    title: `${fac.title} | Marriott Hospital`,
    description: `${fac.summary} Learn about operating hours, amenities, and access rules at Marriott Hospital.`,
  };
}

export default function FacilityDetailPage({ params }: FacilityPageProps) {
  const fac = facilitiesData.find((f) => f.slug === params.slug);
  if (!fac) notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Facilities", href: "/facilities" },
            { label: fac.title },
          ]}
        />

        {/* Hero Card */}
        <div className="mt-4 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-clinical-50 text-clinical-800 text-xs font-bold uppercase tracking-wider mb-3 border border-clinical-100">
                Hospital Amenity
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight">
                {fac.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {fac.summary}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {fac.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Hours: <strong>{fac.operatingHours}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-clinical-600" />
                  <span>Location: <strong>{fac.location}</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100">
              <Image
                src={fac.imageUrl}
                alt={fac.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* Amenities & Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Available Amenities & Features</span>
              </h2>
              <div className="space-y-3">
                {fac.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0"></span>
                    <span className="font-medium leading-relaxed">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading font-bold text-base text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span>Access Guidelines & Rules</span>
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                {fac.guidelines.map((rule, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                    <span className="text-amber-700 font-bold">&bull;</span>
                    <span className="leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow transition-all"
                >
                  <span>Need Help Locating This Facility?</span>
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
