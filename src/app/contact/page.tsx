"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeader from "@/components/common/SectionHeader";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Ambulance, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Building2,
  HelpCircle
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Inquiries & Feedback",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-medical-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact Us" }
            ]}
          />
          <div className="flex items-center gap-2 mt-4 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Connect with Marriott Hospital</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 font-display">
            Contact & Directions
          </h1>
          <p className="text-slate-300 max-w-2xl mt-4 text-base leading-relaxed">
            Reach our patient assistance desks, emergency trauma centre, or administrative offices. We are here to support your clinical inquiries and hospital visits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Urgent Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center shrink-0">
              <Ambulance className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-700">24/7 Emergency & Trauma</div>
              <a href="tel:+914842880911" className="text-xl sm:text-2xl font-black text-red-950 block mt-1 hover:underline">
                +91 484 288 0911
              </a>
              <p className="text-xs text-red-800 mt-1">Immediate response, resuscitation triage & cardiac dispatch.</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 bg-clinical-50 text-clinical-600 rounded-xl flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Main Hospital Switchboard</div>
              <a href="tel:+914842880000" className="text-xl sm:text-2xl font-bold text-slate-900 block mt-1 hover:text-clinical-700">
                +91 484 288 0000
              </a>
              <p className="text-xs text-slate-500 mt-1">General inquiries, operator routing & ward connections.</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Patient Support Email</div>
              <a href="mailto:care@marriotthospital.com" className="text-lg sm:text-xl font-bold text-slate-900 block mt-1 hover:text-teal-700 break-all">
                care@marriotthospital.com
              </a>
              <p className="text-xs text-slate-500 mt-1">Written inquiries, medical opinions & billing support.</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Form vs Address & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Send an Online Enquiry
            </h2>
            <p className="text-sm text-slate-500 mt-1 mb-8">
              Fill in your details and our customer care team will respond within 24 operational hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">Message Received</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Your enquiry has been forwarded to our <span className="font-semibold">{formData.department}</span> team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-emerald-800 underline font-semibold mt-2 inline-block"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meera Nair"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98460 00000"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="meera@example.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Department of Concern
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                    >
                      <option value="General Inquiries & Feedback">General Inquiries & Feedback</option>
                      <option value="OPD Appointments">OPD Appointments</option>
                      <option value="Billing & Insurance Desk">Billing & Insurance Desk</option>
                      <option value="Diagnostic Laboratory / Reports">Diagnostic Laboratory / Reports</option>
                      <option value="International Patient Support">International Patient Support</option>
                      <option value="Administration & Grievances">Administration & Grievances</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query or visit requirement..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-sm py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2"
                >
                  <span>Transmit Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Location & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 font-display mb-4">
                Hospital Campus & Timings
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-clinical-600 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Physical Address</div>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                      Marriott Hospital Campus, NH 544 Highway Corridor, Edappally - Aluva Road, Kochi, Kerala 682024, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-clinical-600 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Operational Hours</div>
                    <p className="text-slate-600 text-xs mt-0.5">
                      <span className="font-semibold text-slate-800">Emergency & Critical Care:</span> 24 Hours / 365 Days
                    </p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      <span className="font-semibold text-slate-800">Outpatient Consultation (OPD):</span> Mon – Sat: 8:00 AM – 7:00 PM
                    </p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      <span className="font-semibold text-slate-800">Central Pharmacy & Laboratory:</span> 24/7 Continuous
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-clinical-600 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Transit & Accessibility</div>
                    <ul className="text-slate-600 text-xs mt-0.5 space-y-1">
                      <li>• Metro: 5 minutes from Kalamassery Metro Station</li>
                      <li>• Airport: 28 km from Cochin International Airport (COK)</li>
                      <li>• Railway: 9 km from Aluva Railway Station; 12 km from Ernakulam Town (North)</li>
                      <li>• Parking: 450+ vehicles multi-level automated patient parking on campus</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="mt-6 h-48 bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 opacity-60" />
                <MapPin className="w-8 h-8 text-clinical-600 relative z-10 mb-2" />
                <span className="text-xs font-bold text-slate-800 relative z-10">Marriott Hospital Campus Map</span>
                <span className="text-[11px] text-slate-500 relative z-10">NH 544 Corridor, Kochi, Kerala</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 relative z-10 bg-white border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded shadow-xs hover:bg-slate-50 transition"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Department Extensions */}
            <div className="bg-medical-900 text-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold font-display text-white text-base mb-3">
                Key Department Direct Desks
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-medical-950 p-3 rounded-lg border border-medical-800">
                  <div className="text-slate-400">OPD Appointments</div>
                  <div className="font-bold text-teal-300 mt-0.5">+91 484 288 0100</div>
                </div>
                <div className="bg-medical-950 p-3 rounded-lg border border-medical-800">
                  <div className="text-slate-400">Cashless Insurance (TPA)</div>
                  <div className="font-bold text-teal-300 mt-0.5">+91 484 288 0140</div>
                </div>
                <div className="bg-medical-950 p-3 rounded-lg border border-medical-800">
                  <div className="text-slate-400">Central Blood Centre</div>
                  <div className="font-bold text-teal-300 mt-0.5">+91 484 288 0188</div>
                </div>
                <div className="bg-medical-950 p-3 rounded-lg border border-medical-800">
                  <div className="text-slate-400">International Helpdesk</div>
                  <div className="font-bold text-teal-300 mt-0.5">+91 484 288 0055</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
