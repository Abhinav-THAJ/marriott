import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { Eye, CheckCircle2, HeartHandshake, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement & Universal Access | Marriott Hospital",
  description: "Marriott Hospital's commitment to digital and physical accessibility, conforming to WCAG 2.2 Level AA guidelines for patients of all abilities.",
};

export default function AccessibilityPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Accessibility Statement" }
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mt-6">
          <div className="flex items-center gap-2 text-clinical-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <Eye className="w-4 h-4" />
            <span>Inclusive Healthcare</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Accessibility Statement
          </h1>
          <p className="text-xs text-slate-500 mt-2 mb-8">
            Conforming Standard: W3C WCAG 2.2 Level AA • Updated: October 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">1. Our Commitment to Universal Access</h2>
              <p>
                Healthcare services and medical information must be accessible to every member of society without barrier. Marriott Hospital is committed to ensuring that both our digital web portals and our physical hospital facilities provide equitable, dignified access for persons with visual, auditory, cognitive, and physical impairments.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">2. Digital Accessibility Features Implemented</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Keyboard Navigation:</strong> All interactive elements, including our mega-menus, search modals, and appointment booking forms, are fully navigable via standard keyboard controls (Tab, Shift+Tab, Enter, Escape).</li>
                <li><strong>High Contrast Ratio:</strong> Colors exceed the minimum 4.5:1 contrast ratio for normal body copy and 3:1 for large display headers against neutral backgrounds.</li>
                <li><strong>Screen Reader Optimization:</strong> Proper semantic HTML5 hierarchy (single h1 per page, structured headings, explicit ARIA tags, and descriptive image alt-text).</li>
                <li><strong>Form Accessibility:</strong> Explicit form field labels, programmatic error messaging, and descriptive instructional text across all booking workflows.</li>
                <li><strong>Responsive Scalability:</strong> Pages reflow smoothly up to 200% zoom without truncation or horizontal scrolling breakage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">3. Physical Campus Accessibility</h2>
              <p>
                Our hospital campus in Kochi is constructed with universal physical accessibility:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Zero-step ground entrances and gentle gradient wheelchair ramps at all main pavilions.</li>
                <li>Braille-enabled and audio-assisted automated passenger elevators.</li>
                <li>Dedicated wheelchair escort stations at the main hospital porch and emergency entrance.</li>
                <li>Accessible, barrier-free restrooms on every outpatient consultation floor.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 font-display">4. Accessibility Feedback & Assistance</h2>
              <p>
                If you encounter any difficulty accessing digital information on this portal or require special accommodations during an in-person hospital visit, please contact our Accessibility Officer:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-2 text-xs">
                <p className="font-bold text-slate-900">Hospital Patient Advocacy & Accessibility Desk</p>
                <p>Phone: +91 484 288 0000 (Ext. 104)</p>
                <p>Email: <a href="mailto:accessibility@marriotthospital.com" className="text-clinical-700 underline font-medium">accessibility@marriotthospital.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
