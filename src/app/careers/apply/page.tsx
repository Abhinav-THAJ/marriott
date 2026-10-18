"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { jobPostings } from "@/data/careers";
import { 
  CheckCircle2, 
  UploadCloud, 
  Briefcase, 
  Send, 
  ArrowLeft,
  FileText
} from "lucide-react";

function CareerApplicationContent() {
  const searchParams = useSearchParams();
  const selectedJobSlug = searchParams.get("job") || "";
  const matchedJob = jobPostings.find((j) => j.slug === selectedJobSlug);

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: matchedJob ? matchedJob.title : "General Medical / Nursing Faculty",
    qualification: "",
    experienceYears: "3-5",
    currentEmployer: "",
    coverLetter: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers" },
            { label: "Apply Online" }
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm mt-6">
          <div className="flex items-center gap-2 text-clinical-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Human Resources Directorate</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Hospital Employment Application
          </h1>
          <p className="text-sm text-slate-500 mt-2 mb-8">
            Complete the form below to submit your credentials to our clinical recruitment panel.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-bold text-emerald-900 font-display">
                Application Successfully Submitted
              </h2>
              <p className="text-sm text-emerald-700 max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-semibold">{formData.name}</span>. Your application for <span className="font-semibold">{formData.position}</span> has been logged under Reference ID <span className="font-mono font-bold">HR-2026-{Math.floor(1000 + Math.random() * 9000)}</span>.
              </p>
              <p className="text-xs text-emerald-600">
                Shortlisted candidates will be contacted by our HR department for initial technical screening.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <Link
                  href="/careers"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition"
                >
                  Return to Careers
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Anand Verma / Nurse Anju Philip"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Applying for Position *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
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
                    placeholder="+91 98470 00000"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Highest Educational Qualification *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    placeholder="e.g. MD, DM, B.Sc Nursing, M.Pharm"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Total Clinical / Industry Experience
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                  >
                    <option value="0-1">Fresh Graduate / Entry Level (0-1 yr)</option>
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5-10">5 - 10 Years</option>
                    <option value="10+">10+ Years Senior Specialist</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Upload Curriculum Vitae (PDF / DOCX) *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-clinical-500 transition cursor-pointer relative bg-slate-50">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center">
                    <UploadCloud className="w-8 h-8 text-clinical-600 mb-2" />
                    {fileName ? (
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded">
                        <FileText className="w-4 h-4" />
                        <span>{fileName}</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs font-semibold text-slate-700">
                          Click to browse or drag and drop your resume
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1">PDF or DOCX up to 10MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes / Cover Message
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Mention medical council registration details, sub-specialty fellowship, or notice period..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-clinical-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-sm py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                <Link href="/careers" className="hover:text-slate-800 flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Open Positions
                </Link>
                <span>Encrypted & Privacy-Protected Submission</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CareerApplicationPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading application portal...</div>}>
      <CareerApplicationContent />
    </Suspense>
  );
}
