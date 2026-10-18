import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { newsData } from "@/data/newsEvents";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeader from "@/components/common/SectionHeader";
import { Calendar, ArrowRight, Newspaper, BellRing } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospital News & Media Announcements | Marriott Hospital",
  description: "Stay informed about the latest clinical breakthroughs, technology installations, medical faculty achievements, and official announcements from Marriott Hospital.",
};

export default function NewsIndexPage() {
  const featured = newsData[0];
  const others = newsData.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News & Media" }
            ]}
          />
          <div className="flex items-center gap-3 mt-4 text-teal-400 font-semibold tracking-wide uppercase text-xs">
            <Newspaper className="w-4 h-4" />
            <span>Official Media Desk</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mt-2 font-display">
            Hospital News & Medical Updates
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-base">
            Verified updates regarding our clinical milestones, technological acquisitions, accreditation assessments, and public health engagements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Story */}
        {featured && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 hover:shadow-md transition">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px]">
                <Image
                  src={featured.imageUrl}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-medical-900/90 text-teal-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Featured Release
                </div>
              </div>
              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-clinical-600" />
                    <span>{featured.date}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-clinical-700 bg-clinical-50 px-2 py-0.5 rounded font-medium">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 font-display leading-snug">
                    <Link href={`/news/${featured.slug}`} className="hover:text-clinical-700 transition">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm mt-4 leading-relaxed line-clamp-4">
                    {featured.summary}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-clinical-700 hover:text-clinical-800 text-sm group"
                  >
                    <span>Read Full Press Release</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other News Grid */}
        <SectionHeader
          eyebrow="Recent Releases"
          heading="Archived Announcements & Clinical Reports"
          subheading="Chronological updates from our departments, research wings, and clinical administration."
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition flex flex-col"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-white/90 text-medical-900 text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display line-clamp-2 hover:text-clinical-700 transition">
                    <Link href={`/news/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-clinical-700 hover:text-clinical-900"
                  >
                    <span>Read Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Media Contact banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <BellRing className="w-4 h-4" />
              <span>Media Enquiries</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Hospital Press & Public Relations Office</h3>
            <p className="text-slate-300 text-sm mt-2 max-w-xl">
              For accredited press visits, verified clinical commentary, and official photography permissions, contact our Communications Directorate.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-sm px-6 py-3.5 rounded-lg whitespace-nowrap shadow-md transition"
          >
            <span>Contact Media Office</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
