import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ShieldCheck, GraduationCap, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { doctorsData } from "@/data/doctors";

export const metadata = {
  title: "Hospital Leadership & Medical Directorate",
  description: "Meet the clinical superintendence, medical directors, and departmental chairs guiding healthcare governance at Marriott Hospital.",
};

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Dr. Arun Nair",
      role: "Medical Director & Director of Cardiac Sciences",
      qualifications: "MBBS, MD (Gen Med), DM (Cardiology), FACC (USA)",
      bio: "Oversees hospital clinical governance, emergency care pathways, and interdisciplinary patient safety standards.",
      imageUrl: "/images/doctors/doctor-consultation.jpg",
      slug: "dr-arun-nair",
    },
    {
      name: "Dr. Priya Menon",
      role: "Chief of Medical Staff & Head of Neurosciences",
      qualifications: "MBBS, MS, MCh (Neurosurgery), FINR (Zurich)",
      bio: "Chairs the Hospital Clinical Audit Board, credentialing committees, and advanced neuro-trauma protocols.",
      imageUrl: "/images/doctors/medical-team.jpg",
      slug: "dr-priya-menon",
    },
    {
      name: "Dr. Rajesh Sharma",
      role: "Director of Surgical Services & Head of Orthopaedics",
      qualifications: "MBBS, MS (Ortho), DNB, FRCS (Tr & Orth - UK)",
      bio: "Directs surgical quality audits, modular operating theatre standards, and robotic surgical training.",
      imageUrl: "/images/departments/rehabilitation.jpg",
      slug: "dr-rajesh-sharma",
    },
    {
      name: "Dr. Anita Deshmukh",
      role: "Chairperson, Maternal & Child Health Directorate",
      qualifications: "MBBS, MD (OBGYN), MRCOG (London), FICOG",
      bio: "Leads maternal mortality prevention initiatives, family-centered birthing suites, and developmental care.",
      imageUrl: "/images/departments/paediatrics.jpg",
      slug: "dr-anita-deshmukh",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Leadership Directorate" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Clinical Governance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Leadership & Medical Directorate
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Marriott Hospital is governed by experienced senior clinicians who prioritize medical ethics, continuous quality enhancement, and patient safety above all else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <Image
                  src={leader.imageUrl}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    {leader.role}
                  </span>
                  <h2 className="font-heading font-bold text-lg text-navy-900 mt-1">
                    {leader.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">{leader.qualifications}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/doctors/${leader.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-800 hover:underline"
                  >
                    <span>View Clinical Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
