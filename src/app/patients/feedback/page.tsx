"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Star, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function FeedbackPage() {
  const [category, setCategory] = useState("Doctor Consultation");
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [uhid, setUhid] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg("Please provide your name, phone number, and feedback message.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Feedback & Grievances" },
          ]}
        />

        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">
            Quality & Experience
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight mt-1">
            Patient Experience Feedback
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Your feedback guides our clinical standards and patient safety indicators. Please share your compliments, suggestions, or concerns directly with our Quality Audit Directorate.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4 text-teal-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-navy-900">
              Thank You for Your Valuable Feedback
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
              Your submission has been securely delivered to the Marriott Hospital Patient Care Quality Committee. If you requested follow-up, an officer will connect with you shortly.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage("");
                }}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold hover:bg-slate-50"
              >
                Submit Another Response
              </button>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white text-xs font-bold transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6"
          >
            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Feedback Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600 text-slate-700"
              >
                <option value="Doctor Consultation">Doctor Consultation & Clinical Guidance</option>
                <option value="Nursing Care">Nursing Care & Ward Attendants</option>
                <option value="Inpatient Experience">Inpatient Rooms & Cleanliness</option>
                <option value="Billing & Insurance">Billing & Cashless Insurance Desk</option>
                <option value="Diagnostic Lab & Imaging">Diagnostic Lab & Imaging</option>
                <option value="Emergency & Ambulance">Emergency & Ambulance Services</option>
                <option value="General Suggestion">General Suggestion / Compliment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Overall Experience Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    aria-label={`${star} Stars`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-slate-600 ml-2">
                  {rating === 5 ? "Exceptional" : rating === 4 ? "Very Good" : rating === 3 ? "Average" : "Needs Improvement"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anjali Nair"
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9840012345"
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient UHID / Room No (Optional)
                </label>
                <input
                  type="text"
                  value={uhid}
                  onChange={(e) => setUhid(e.target.value)}
                  placeholder="e.g. MH-123456"
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Feedback & Comments *
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please describe your experience in detail..."
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Patient Feedback</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
