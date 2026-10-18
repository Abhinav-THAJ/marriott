import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  GraduationCap,
  Award,
  Languages,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Phone
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { doctorsData } from "@/data/doctors";
import { specialitiesData } from "@/data/specialities";

interface DoctorPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return doctorsData.map((doc) => ({
    slug: doc.slug,
  }));
}

export function generateMetadata({ params }: DoctorPageProps) {
  const doc = doctorsData.find((d) => d.slug === params.slug);
  if (!doc) return { title: "Doctor Not Found" };

  return {
    title: `${doc.name} - ${doc.designation}`,
    description: `${doc.name} is a ${doc.designation} in ${doc.department} at Marriott Hospital, Kochi. Experience: ${doc.experienceYears}+ years. Book consultation online.`,
  };
}

export default function DoctorDetailPage({ params }: DoctorPageProps) {
  const doctor = doctorsData.find((d) => d.slug === params.slug);
  if (!doctor) notFound();

  const speciality = specialitiesData.find((s) => s.slug === doctor.specialitySlug);
  const relatedDoctors = doctorsData.filter(
    (d) => d.specialitySlug === doctor.specialitySlug && d.slug !== doctor.slug
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Doctors Directory", href: "/doctors" },
            { label: doctor.name },
          ]}
        />

        {/* Profile Header Card */}
        <div className="mt-4 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Portrait Image */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-sm border border-slate-100">
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-navy-900 border border-slate-200">
                  {doctor.experienceYears}+ Yrs Experience
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-clinical-50 text-clinical-800 text-xs font-bold uppercase tracking-wider border border-clinical-100">
                    {doctor.department}
                  </span>
                  {speciality && (
                    <Link
                      href={`/specialities/${speciality.slug}`}
                      className="text-xs font-semibold text-teal-700 hover:underline"
                    >
                      {speciality.name} →
                    </Link>
                  )}
                </div>

                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-900 tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  {doctor.designation}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {doctor.qualifications}
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {doctor.bio}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-slate-400" />
                    <span>Languages: <strong>{doctor.languages.join(", ")}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>NABH Verified Consultant</span>
                  </div>
                </div>

                <Link
                  href={`/appointments?doctor=${doctor.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Person Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Clinical Interests & Education */}
          <div className="lg:col-span-8 space-y-8">
            {/* Areas of Clinical Expertise */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100">
                Areas of Clinical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.clinicalInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & Medical Fellowships */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-bold text-lg text-navy-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-clinical-600" />
                <span>Education & Medical Fellowships</span>
              </h2>
              <div className="space-y-3">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-clinical-600 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{edu}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: OPD Schedule & Sticky Appointment Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Schedule Box */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-heading font-bold text-base text-navy-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Clock className="w-4 h-4 text-clinical-600" />
                <span>OPD Consultation Schedule</span>
              </h3>

              <div className="space-y-3 text-xs">
                {doctor.opdSchedule.map((sched, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-bold text-slate-800">{sched.days}</p>
                    <p className="text-teal-700 font-semibold mt-0.5">{sched.hours}</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">{sched.room}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href={`/appointments?doctor=${doctor.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs shadow transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Appointment</span>
                </Link>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Need helpline support? Call <strong>+91 (484) 2800-000</strong>
                </p>
              </div>
            </div>

            {/* Related Speciality Link */}
            {speciality && (
              <div className="bg-gradient-to-br from-navy-900 to-clinical-950 p-6 rounded-3xl text-white shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                  Affiliated Department
                </span>
                <h4 className="font-heading font-bold text-base mt-1 text-white">
                  {speciality.name}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-3 leading-relaxed">
                  {speciality.overview}
                </p>
                <Link
                  href={`/specialities/${speciality.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-300 hover:text-white mt-4"
                >
                  <span>Explore Department Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
