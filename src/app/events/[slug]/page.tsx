"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventsData } from "@/data/newsEvents";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { Calendar, Clock, MapPin, CheckCircle2, ArrowLeft, Send } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = eventsData.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    attendees: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setRegistered(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Events", href: "/events" },
              { label: event.title }
            ]}
          />
          <span className="inline-block mt-4 bg-teal-500/20 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30">
            {event.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 font-display">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Event Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 font-display mb-4">
                About this Event
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {event.description}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">
                  Event Schedule & Logistics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                    <Calendar className="w-5 h-5 text-clinical-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Date</div>
                      <div className="font-semibold text-slate-900">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                    <Clock className="w-5 h-5 text-clinical-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Timing</div>
                      <div className="font-semibold text-slate-900">{event.time}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl text-sm">
                  <MapPin className="w-5 h-5 text-clinical-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Venue & Location</div>
                    <div className="font-semibold text-slate-900">{event.location}</div>
                    <p className="text-xs text-slate-500 mt-1">Marriott Hospital Campus, Kochi, Kerala</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-700 hover:text-clinical-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Events</span>
                </Link>
                <span className="text-xs text-slate-400">Marriott Community Health Outreach</span>
              </div>
            </div>
          </div>

          {/* Registration Form Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Reserve Your Attendance
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Free participation. Registration is required to prepare diagnostic kits and manage seating.
              </p>

              {registered ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">Seat Reserved!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. An SMS confirmation with your reporting badge has been dispatched to {formData.phone}.
                  </p>
                  <button
                    onClick={() => setRegistered(false)}
                    className="text-xs text-emerald-800 underline font-semibold mt-2"
                  >
                    Register Another Attendee
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Nair"
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (for SMS token) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98460 00000"
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Attendees
                    </label>
                    <select
                      value={formData.attendees}
                      onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4+ Family Group</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-sm py-2.5 rounded-lg shadow transition flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Confirm Registration</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    No payment required. Walk-ins subject to hall capacity.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
