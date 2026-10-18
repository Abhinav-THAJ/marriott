"use client";

import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface CollegiumFormProps {
  specialityName: string;
}

export const CollegiumForm: React.FC<CollegiumFormProps> = ({ specialityName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [concern, setConcern] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center space-y-2 bg-surface rounded-xl border border-surface-container-high">
        <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center mx-auto">
          <Check className="w-5 h-5" />
        </div>
        <h4 className="font-serif text-base font-bold text-primary">Inquiry Transmitted</h4>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Thank you, <strong className="text-primary">{name}</strong>. The clinical registry for {specialityName} has received your referral. A care coordinator will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-2">
      <div>
        <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
          Patient Full Name *
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Patient Name"
          className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98400 00000"
            className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
            City / Location
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Kochi"
            className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-on-surface-variant uppercase mb-1">
          Clinical Concern or Specific Diagnosis
        </label>
        <textarea
          rows={3}
          required
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          placeholder={`Mention symptoms, biopsy findings, or prior doctor advice regarding ${specialityName}...`}
          className="w-full px-3 py-2 bg-surface rounded-lg border border-surface-container-high text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-semibold rounded transition-colors shadow-sm"
      >
        Request Collegium Appointment
      </button>
    </form>
  );
};
