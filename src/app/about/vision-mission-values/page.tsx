import React from "react";
import Link from "next/link";
import { Eye, Target, Heart, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Vision, Mission & Core Values",
  description: "The guiding vision, clinical mission, and core values of Marriott Hospital, emphasizing medical excellence, integrity, compassion, and innovation.",
};

export default function VisionMissionValuesPage() {
  const coreValues = [
    {
      title: "Clinical Integrity",
      desc: "Upholding absolute honesty, transparency in medical counsel, and adhering strictly to evidence-based healthcare guidelines without commercial compromise.",
    },
    {
      title: "Patient-Centred Compassion",
      desc: "Treating every patient and family with empathy, attentiveness, and cultural sensitivity, respecting individual dignity at every interaction.",
    },
    {
      title: "Patient Safety & Quality",
      desc: "Zero-tolerance for medical errors, stringent infection prevention protocols, and continuous clinical peer review audits.",
    },
    {
      title: "Technological Innovation",
      desc: "Adopting proven technological breakthroughs, robotic surgical navigation, and silent high-field imaging to enhance patient clinical outcomes.",
    },
    {
      title: "Collaborative Teamwork",
      desc: "Harnessing the combined wisdom of multidisciplinary doctor panels, nursing leaders, and clinical pharmacologists for coordinated care.",
    },
    {
      title: "Social Accountability",
      desc: "Providing accessible healthcare outreach, subsidized rural preventative screenings, and continuous public health education.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Vision, Mission & Values" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Institutional Purpose
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Vision, Mission & Core Values
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Our guiding commitments articulate our duty to our patients, clinical staff, and the wider community.
          </p>
        </div>

        <div className="space-y-10">
          {/* Vision and Mission 2-Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-clinical-500/20 border border-clinical-400/30 flex items-center justify-center mb-6 text-clinical-400">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Our Institutional Vision
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-white mt-1">
                  Excellence in Compassionate Care
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  &ldquo;To be recognized as the benchmark of clinical excellence, ethical integrity, and patient-centered compassionate healthcare in India, delivering advanced multidisciplinary medical outcomes that heal, inspire hope, and transform lives.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-clinical-950 to-clinical-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mb-6 text-teal-300">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Our Clinical Mission
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-white mt-1">
                  Advancing Patient Healing Every Day
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  &ldquo;To provide accessible, high-quality, and evidence-driven tertiary healthcare services by integrating distinguished clinical talent, innovative medical technology, and empathetic patient engagement, while upholding the highest standards of safety and medical ethics.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* 6 Core Values */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
                Ethical Foundation
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-navy-900 mt-1">
                Our Six Core Institutional Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-clinical-700 block mb-1">0{idx + 1}.</span>
                    <h3 className="font-heading font-bold text-base text-navy-900">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
