import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Download,
  Building2,
  Sparkles,
  PhoneCall,
  Activity,
  Award,
  ChevronRight
} from "lucide-react";
import { specialitiesData } from "@/data/specialities";
import { doctorsData } from "@/data/doctors";
import { CollegiumForm } from "@/components/specialities/CollegiumForm";

interface SpecialityPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return specialitiesData.map((spec) => ({
    slug: spec.slug,
  }));
}

export function generateMetadata({ params }: SpecialityPageProps) {
  const spec = specialitiesData.find((s) => s.slug === params.slug);
  if (!spec) return { title: "Speciality Not Found" };

  return {
    title: `${spec.name} | Marriott Health Institute`,
    description: `${spec.overview.slice(0, 160)}... Quaternary care and clinical excellence at Marriott Health.`,
  };
}

export default function SpecialityDetailPage({ params }: SpecialityPageProps) {
  const speciality = specialitiesData.find((s) => s.slug === params.slug);
  if (!speciality) notFound();

  const affiliatedDoctors = doctorsData.filter(
    (doc) => doc.specialitySlug === speciality.slug || speciality.leadDoctorSlugs.includes(doc.slug)
  );

  const sisterSpecialities = specialitiesData.filter((s) => s.slug !== speciality.slug).slice(0, 5);

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Editorial Quaternary Hero (Stitch Screen 2) */}
      <section className="w-full bg-surface-container-low border-b border-surface-container py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Breadcrumbs & Status Flag */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
              <Link href="/" className="hover:text-primary transition-colors">
                Marriott Health
              </Link>
              <span>/</span>
              <Link href="/specialities" className="hover:text-primary transition-colors">
                Institutes of Care
              </Link>
              <span>/</span>
              <span className="text-primary font-semibold">{speciality.name}</span>
            </nav>

            <div className="flex items-center gap-2 bg-secondary-container text-secondary px-3 py-1 rounded text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="uppercase tracking-wider">Accredited Quaternary Surgical Division</span>
            </div>
          </div>

          {/* Main Title & Lead Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                {speciality.category} • Directorate of Advanced Care
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-primary leading-tight tracking-tight">
                {speciality.name}.
              </h1>
              <p className="font-medium text-xs sm:text-sm text-secondary">
                {speciality.heroTagline}
              </p>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {speciality.overview}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={`/appointments?speciality=${speciality.slug}`}
                  className="px-5 py-3 bg-primary hover:bg-primary-container text-white font-semibold text-xs sm:text-sm rounded transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Seek Rapid Assessment Consultation</span>
                  <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                </Link>

                <a
                  href="#collegium"
                  className="px-4 py-3 bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs sm:text-sm rounded border border-surface-container-high transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-secondary" />
                  <span>Download Treatment Dossier</span>
                </a>
              </div>
            </div>

            {/* Department OT Preview Card */}
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl border border-surface-container-high overflow-hidden shadow-card">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/images/departments/cardiology.jpg"
                  alt={speciality.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <p className="font-serif font-bold text-sm">Active Surgical Suite • Intraoperative Perfusion</p>
                  <p className="text-[11px] text-white/80">Class-100 Ultra Clean Positive Pressure Airflow</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Clinical Outcome Metrics (Stitch Screen 2) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-surface-container">
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high">
              <span className="font-serif text-2xl font-bold text-secondary">98.4%</span>
              <p className="text-xs text-on-surface-variant mt-0.5 font-medium">1-Yr Clinical Success</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high">
              <span className="font-serif text-2xl font-bold text-primary">34 Beds</span>
              <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Dedicated ICU Wings</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high">
              <span className="font-serif text-2xl font-bold text-secondary">0.0%</span>
              <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Surgical Site Infection</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high">
              <span className="font-serif text-2xl font-bold text-primary">1,420+</span>
              <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Annual Interventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Surgical Wings & Clinical Conditions (Stitch Screen 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-10 pb-4 border-b border-surface-container">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Sub-Specialty Clinical Matrix
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
            Specialized Surgical Wings & Interventional Programs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speciality.keyConditions.map((condition, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary-container text-secondary">
                  Wing 0{idx + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mt-2">
                  {condition}
                </h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Comprehensive multidisciplinary diagnostics, risk stratification, and patient-specific pre-operative conditioning protocols.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-secondary font-semibold">Active Care Protocol</span>
                <Link
                  href={`/appointments?speciality=${speciality.slug}`}
                  className="text-primary hover:text-secondary font-bold flex items-center gap-1"
                >
                  Consult <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Four-Stage Quaternary Care Timeline (Stitch Screen 2) */}
      <section className="py-16 bg-surface-container border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Clinical Journey
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary mt-1 tracking-tight">
              Four-Stage Quaternary Care Timeline.
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
              Every surgical pathway is synchronized across medical imaging, anaesthetic risk profiling, sterile theatre execution, and intensive rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle">
              <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs mb-3">
                01
              </span>
              <h3 className="font-serif text-base font-bold text-primary">Clinical Work-Up & Profiling</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                High-gradient 3T imaging, cardiopulmonary exercise testing, and organ reserve estimation.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle">
              <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs mb-3">
                02
              </span>
              <h3 className="font-serif text-base font-bold text-primary">Collegial Board Consensus</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Multidisciplinary evaluation with surgical chairs, critical care intensivists, and pharmacists.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle">
              <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs mb-3">
                03
              </span>
              <h3 className="font-serif text-base font-bold text-primary">Dual-OT Robotic Surgery</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Real-time intraoperative perfusion, microvascular anastomosis, and zero-particle sterile suite.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-subtle">
              <span className="w-8 h-8 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center font-bold text-xs mb-3">
                04
              </span>
              <h3 className="font-serif text-base font-bold text-primary">Dedicated ICU Surveillance</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                1-on-1 critical care nursing, continuous arterial telemetry, and early ambulation protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Faculty & Collegium Request Form (Stitch Screen 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="collegium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Affiliated Faculty */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Medical Directorate
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
                Distinguished Institute Faculty Leadership.
              </h2>
            </div>

            <div className="space-y-4">
              {affiliatedDoctors.length > 0 ? (
                affiliatedDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-high shadow-subtle flex flex-col sm:flex-row gap-4 items-start"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                      <Image
                        src={doc.imageUrl || "/images/doctors/doctor-consultation.jpg"}
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif text-lg font-bold text-primary">{doc.name}</h4>
                      <p className="text-xs font-semibold text-secondary">{doc.designation}</p>
                      <p className="text-xs text-on-surface-variant">{doc.qualifications}</p>
                      <p className="text-xs text-on-surface pt-1 line-clamp-2">{doc.bio}</p>
                      <div className="pt-2 flex items-center gap-3 text-xs">
                        <Link
                          href={`/appointments?doctor=${doc.slug}`}
                          className="font-bold text-primary hover:text-secondary"
                        >
                          Book OPD Slot →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 rounded-xl bg-surface-container text-xs text-on-surface-variant">
                  Clinical faculty details available via our Central OPD Scheduling Desk.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Request Collegium Evaluation */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container-high shadow-card space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Department Triage
              </span>
              <h3 className="font-serif text-xl font-bold text-primary mt-1">
                Request Collegium Evaluation
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Connect directly with the clinical registry of {speciality.name} for planned admissions, surgical audits, or urgent referrals.
              </p>
            </div>

            <CollegiumForm specialityName={speciality.name} />
          </div>
        </div>
      </section>

      {/* Sister Quaternary Institutes of Care (Stitch Screen 2) */}
      <section className="py-12 bg-surface-container border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Interconnected Care Network
            </span>
            <h3 className="font-serif text-xl font-bold text-primary mt-1">
              Sister Quaternary Institutes of Care
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sisterSpecialities.map((s) => (
              <Link
                key={s.id}
                href={`/specialities/${s.slug}`}
                className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-secondary transition-all shadow-subtle group"
              >
                <span className="text-[10px] font-bold uppercase text-secondary">Quaternary</span>
                <h4 className="font-serif text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-1">
                  {s.name}
                </h4>
                <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-1">
                  {s.heroTagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
