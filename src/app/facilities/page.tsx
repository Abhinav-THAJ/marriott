import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { facilitiesData, HospitalFacility } from "@/data/facilities";

export const metadata = {
  title: "Hospital Facilities & Patient Amenities",
  description: "Discover patient rooms, 24x7 in-campus pharmacy, waiting lounges, blood bank, clinical dietary, and accessible parking at Marriott Hospital.",
};

export default function FacilitiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Hospital Facilities" }]} />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Comfort, Hygiene & Safety
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Hospital Facilities & Patient Amenities
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Engineered to support clinical healing with natural light, universal wheelchair access, acoustic dampening, and round-the-clock supportive amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <Image
                  src={fac.imageUrl}
                  alt={fac.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-navy-900 border border-slate-200">
                  {fac.operatingHours}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-heading font-extrabold text-xl text-navy-900 group-hover:text-clinical-800 transition-colors">
                    {fac.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {fac.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{fac.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/facilities/${fac.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-800 group-hover:underline"
                  >
                    <span>Facility Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-teal-700 font-semibold">
                    {fac.amenities.length} Key Amenities
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
