import React from "react";
import Link from "next/link";
import { Heart, CheckCircle2, Calendar, ArrowRight, Users, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata = {
  title: "Community Outreach & Public Health Initiatives",
  description: "Learn about rural health camps, free cardiac screenings, school wellness programs, and CSR activities conducted by Marriott Hospital.",
};

export default function CommunityInitiativesPage() {
  const initiatives = [
    {
      title: "Rural Preventative Health & Cardiac Screenings",
      desc: "Our mobile diagnostic outreach vans conduct monthly free clinics in underserved rural communities, providing complimentary ECGs, blood pressure checks, and physician evaluations.",
    },
    {
      title: "School Health & Paediatric Nutrition Camps",
      desc: "Comprehensive vision, hearing, dental, and nutritional assessments for government school children to detect early developmental disorders and refractive errors.",
    },
    {
      title: "Community Basic Life Support (BLS) Training",
      desc: "Free CPR and basic resuscitation workshops for auto-rickshaw drivers, school teachers, and police personnel to empower first responders during the golden hour.",
    },
    {
      title: "Subsidized Dialysis & Cancer Care Support",
      desc: "Dedicated charitable trust subsidies for economically disadvantaged patients requiring long-term maintenance haemodialysis and day-care chemotherapy.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "About Us", href: "/about" },
            { label: "Community Initiatives" },
          ]}
        />

        <div className="mt-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Social Responsibility & Outreach
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Community Health & CSR Initiatives
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Healthcare extends far beyond hospital walls. Through proactive community outreach, free screening camps, and bystander resuscitation training, we work to build healthier communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h2 className="font-heading font-bold text-lg text-navy-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Camp Banner */}
        <div className="bg-gradient-to-r from-teal-900 to-clinical-950 text-white p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Community Calendar
            </span>
            <h3 className="font-heading font-bold text-xl text-white mt-1">
              Interested in organizing a health camp for your association or workplace?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Contact our Community Health Outreach Coordinator for schedules and team dispatch.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white text-navy-950 hover:bg-slate-100 font-bold text-xs transition-colors flex-shrink-0"
          >
            Inquire About Outreach
          </Link>
        </div>
      </div>
    </div>
  );
}
