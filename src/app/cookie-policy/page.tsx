import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { Cookie, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy & Web Preferences | Marriott Hospital",
  description: "Understand the minimal, privacy-conscious cookie and session storage technologies utilized across the Marriott Hospital portal.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Cookie Policy" }
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mt-6">
          <div className="flex items-center gap-2 text-clinical-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <Cookie className="w-4 h-4" />
            <span>Digital Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Cookie & Tracking Technologies Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 mb-8">
            Policy Version 2.1 • Effective: October 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">1. How We Use Cookies</h2>
              <p>
                Marriott Hospital uses essential and functional cookies solely to maintain website security, recall your user interface preferences (such as text size and search filters), and support smooth multi-step appointment scheduling.
              </p>
              <p>
                <strong>We do not sell, license, or monetize web visitor telemetry, nor do we deploy invasive third-party ad-tracking cookies.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">2. Types of Cookies in Operation</h2>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">Strictly Essential Cookies</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Required for basic site navigation, CSRF security tokens, and appointment form state preservation. These cannot be disabled in our systems.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">Preference & Functional Cookies</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Store localized options such as language selection, font readability toggles, and recent doctor directory search terms.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">Aggregated Performance Metrics</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Anonymized telemetry to help our IT engineers identify broken links, slow server response times, and mobile viewport errors.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">3. Managing Browser Preferences</h2>
              <p>
                You can block or purge cookies through your browser settings (Chrome, Safari, Firefox, Edge). Please note that disabling essential cookies may impact the appointment booking workflow.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
