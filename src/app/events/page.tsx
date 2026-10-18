import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { eventsData } from "@/data/newsEvents";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeader from "@/components/common/SectionHeader";
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Health Events & Medical Workshops | Marriott Hospital",
  description: "Explore upcoming health checkup camps, academic CMEs, patient support webinars, and wellness workshops hosted by Marriott Hospital.",
};

export default function EventsIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Events & Workshops" }
            ]}
          />
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mt-4 font-display">
            Hospital Events & Health Camps
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-base">
            Participate in preventive screening programs, medical awareness webinars, and clinical workshops designed to empower our community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          eyebrow="Calendar of Events"
          heading="Upcoming Community Initiatives & Seminars"
          subheading="Advance registrations are open for all listed sessions. Free participation for public health camps."
          className="mb-10"
        />

        <div className="space-y-6">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-clinical-50 text-clinical-700 text-xs font-semibold px-2.5 py-1 rounded border border-clinical-200">
                    {event.category}
                  </span>
                  {event.registrationOpen && (
                    <span className="inline-flex items-center gap-1 text-teal-700 text-xs font-medium bg-teal-50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                      Registration Open
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  <Link href={`/events/${event.slug}`} className="hover:text-clinical-700 transition">
                    {event.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-3xl leading-relaxed">
                  {event.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Calendar className="w-4 h-4 text-clinical-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-4 h-4 text-clinical-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-4 h-4 text-clinical-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-center gap-3 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <Link
                  href={`/events/${event.slug}`}
                  className="w-full sm:w-auto text-center bg-medical-900 hover:bg-medical-800 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-sm transition"
                >
                  View Details & Register
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Community Outreach Callout */}
        <div className="mt-16 bg-gradient-to-r from-medical-900 to-medical-950 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white">Partner with Our Community Health Outreach</h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Are you a corporate entity, educational institution, or NGO seeking health awareness camps or first-aid training?
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-clinical-600 hover:bg-clinical-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow whitespace-nowrap transition"
          >
            <span>Request Health Camp</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
