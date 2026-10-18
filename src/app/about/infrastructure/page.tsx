import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Cpu, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Hospital Infrastructure & Clean Engineering",
  description: "Learn about the advanced medical gas pipeline systems, clean air filtration, laminar flow surgical complexes, and green hospital architecture at Marriott Hospital.",
};

export default function InfrastructurePage() {
  const infraHighlights = [
    {
      title: "Modular Laminar Flow Operation Suites",
      desc: "Positive pressure vertical laminar airflow exceeding 25 air cycles per hour with terminal HEPA filters, creating an ultra-clean surgical environment for joint replacements and neurosurgery.",
    },
    {
      title: "Medical Gas Pipeline System (MGPS)",
      desc: "Centralized vacuum, medical air, and high-purity liquid oxygen storage with automatic quad-manifold switchovers and continuous digital line pressure monitoring.",
    },
    {
      title: "Advanced 3T MRI & 128-Slice Low-Dose CT",
      desc: "Acoustically shielded diagnostic radiology suites with vibration-damped floating foundations, eliminating environmental interference for superior imaging resolution.",
    },
    {
      title: "Isolated Power Systems (IPS) in ICUs & OTs",
      desc: "Medical-grade isolated uninterruptible power supplies (UPS) and dedicated emergency diesel generator fail-safes guaranteeing uninterrupted life-support operation.",
    },
    {
      title: "Comprehensive Infection Isolation Rooms",
      desc: "Negative pressure isolation rooms with anterooms and dedicated exhaust filtration for treating contagious respiratory infections safely without cross-contamination.",
    },
    {
      title: "Pneumatic Tube Transport System",
      desc: "High-speed computerized pneumatic capsule routing connecting all inpatient nursing stations directly to the central diagnostic laboratory and blood bank.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Infrastructure" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Biomedical Engineering
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Hospital Infrastructure & Clean Technology
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Engineered to international tertiary standards, Marriott Hospital integrates advanced environmental controls, clinical fail-safes, and clean medical technology.
          </p>
        </div>

        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-clinical-50 text-clinical-800 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Sustainability Panel */}
          <div className="bg-gradient-to-br from-navy-950 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Sustainable Healthcare
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-white mt-1">
              Green Hospital Design & Effluent Treatment
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Marriott Hospital is committed to ecological stewardship. Our facility features on-site 100% biological Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP), rooftop solar photovoltaic generation, rainwater harvesting reservoirs, and energy-efficient LED and variable-refrigerant climate systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
