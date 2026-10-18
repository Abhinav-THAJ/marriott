"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, MapPin, Globe, ChevronDown } from "lucide-react";

export const UtilityBar: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = [
    { code: "EN", label: "English" },
    { code: "ML", label: "മലയാളം (Malayalam)" },
    { code: "AR", label: "العربية (Arabic)" },
    { code: "HI", label: "हिन्दी (Hindi)" },
  ];

  return (
    <div className="bg-primary text-white border-b border-primary-container/80 text-xs py-2 px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
      <div className="w-full flex items-center justify-between gap-3">
        {/* Left: 24/7 Emergency Hotline */}
        <div className="flex items-center gap-2 text-surface-bright whitespace-nowrap">
          <PhoneCall className="w-3.5 h-3.5 text-secondary-fixed" />
          <span className="text-[12px]">
            24/7 Emergency:{" "}
            <a href="tel:+914842800000" className="font-bold text-secondary-fixed hover:underline">
              108 / +91 (484) 2800-000
            </a>
          </span>
        </div>

        {/* Right: Portal Links, Campus Location, and Language */}
        <div className="hidden lg:flex items-center gap-4 text-[12px] text-primary-fixed-dim whitespace-nowrap">
          <div className="flex items-center gap-3.5">
            <Link href="/doctors" className="hover:text-white transition-colors">
              Find Doctor
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/patients/medical-records" className="hover:text-white transition-colors">
              Patient Portal
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/international-patients" className="hover:text-white transition-colors">
              International Patients
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/appointments" className="hover:text-white transition-colors">
              Second Opinion
            </Link>
          </div>

          <div className="h-3.5 w-px bg-white/20"></div>

          <div className="flex items-center gap-1 text-surface-variant text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-secondary-fixed" />
            <span>Kochi Campus</span>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="inline-flex items-center gap-1 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-white px-2 py-0.5 rounded text-[11px] font-medium transition-colors"
              aria-label="Select Language"
            >
              <Globe className="w-3 h-3 text-secondary-fixed" />
              <span>{selectedLang}</span>
              <ChevronDown className="w-3 h-3 text-white/60" />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-1.5 w-44 bg-surface-container-lowest text-on-surface rounded-lg shadow-xl border border-surface-container-high py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setSelectedLang(l.label);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-surface-container transition-colors flex items-center justify-between ${
                      selectedLang === l.label ? "font-bold text-primary bg-secondary-container/50" : ""
                    }`}
                  >
                    <span>{l.label}</span>
                    {selectedLang === l.label && <span className="text-secondary font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
