"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Phone,
  ArrowRight
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { doctorsData } from "@/data/doctors";
import { specialitiesData } from "@/data/specialities";
import { healthPackagesData } from "@/data/packages";

function AppointmentBookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preSelectedDoctor = searchParams.get("doctor");
  const preSelectedPackage = searchParams.get("package");

  // Step State: 1 = Care Selection, 2 = Date & Slot, 3 = Patient Information, 4 = Review
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [careType, setCareType] = useState<"doctor" | "package">("doctor");
  const [selectedSpeciality, setSelectedSpeciality] = useState("all");
  const [selectedDoctorSlug, setSelectedDoctorSlug] = useState(preSelectedDoctor || "");
  const [selectedPackageSlug, setSelectedPackageSlug] = useState(preSelectedPackage || "");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Morning (09:00 AM - 12:00 PM)");

  // Patient Details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [reason, setReason] = useState("");
  const [consent, setConsent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preSelectedDoctor) {
      setCareType("doctor");
      setSelectedDoctorSlug(preSelectedDoctor);
      const doc = doctorsData.find((d) => d.slug === preSelectedDoctor);
      if (doc) setSelectedSpeciality(doc.specialitySlug);
    } else if (preSelectedPackage) {
      setCareType("package");
      setSelectedPackageSlug(preSelectedPackage);
    }
  }, [preSelectedDoctor, preSelectedPackage]);

  // Set default minimum date to tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const filteredDoctors = doctorsData.filter((doc) => {
    if (selectedSpeciality === "all") return true;
    return doc.specialitySlug === selectedSpeciality;
  });

  const handleNextStep = () => {
    setErrorMsg("");

    if (currentStep === 1) {
      if (careType === "doctor" && !selectedDoctorSlug) {
        setErrorMsg("Please select a doctor or choose 'Next Available Specialist'.");
        return;
      }
      if (careType === "package" && !selectedPackageSlug) {
        setErrorMsg("Please select a health checkup package.");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!preferredDate) {
        setErrorMsg("Please select your preferred consultation date.");
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!fullName.trim() || !phone.trim() || !email.trim() || !age.trim()) {
        setErrorMsg("Please complete all required personal details.");
        return;
      }
      if (phone.trim().length < 10) {
        setErrorMsg("Please enter a valid 10-digit mobile number.");
        return;
      }
      if (!consent) {
        setErrorMsg("Please acknowledge the hospital patient privacy consent.");
        return;
      }
      setCurrentStep(4);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate random reference code
    const bookingRef = "MH-" + Math.floor(100000 + Math.random() * 900000);
    const chosenDoctor = doctorsData.find((d) => d.slug === selectedDoctorSlug);
    const chosenPackage = healthPackagesData.find((p) => p.slug === selectedPackageSlug);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push(
        `/appointments/confirmation?ref=${bookingRef}&name=${encodeURIComponent(
          fullName
        )}&date=${preferredDate}&slot=${encodeURIComponent(preferredSlot)}&item=${encodeURIComponent(
          careType === "doctor"
            ? chosenDoctor?.name || "Consultant Specialist"
            : chosenPackage?.title || "Health Package"
        )}`
      );
    }, 600);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Patient Care", href: "/patients" },
            { label: "Book an Appointment" },
          ]}
        />

        {/* Page Title & Emergency Notice */}
        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Outpatient Directorate & Scheduling
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-primary tracking-tight mt-1">
            Schedule an In-Person Consultation
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
            Reserve your consultation slot with our super-specialists. Once submitted, our outpatient registration desk validates room allocation and sends SMS verification.
          </p>

          <div className="mt-4 p-3.5 bg-error-container text-on-error-container border border-error/20 rounded-xl flex items-start gap-3 text-xs">
            <AlertCircle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
            <div>
              <strong>Emergency Care Notice:</strong> If you are experiencing acute chest pain, severe shortness of breath, sudden facial drooping or speech loss, call our 24/7 Emergency Dispatch immediately at{" "}
              <a href="tel:+914842800000" className="font-bold underline">
                108 / +91 (484) 2800-000
              </a>
              .
            </div>
          </div>
        </div>

        {/* Multi-Step Indicator */}
        <div className="bg-surface-container-lowest p-4 rounded-2xl border border-surface-container-high shadow-subtle mb-8">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { step: 1, label: "1. Service" },
              { step: 2, label: "2. Date & Time" },
              { step: 3, label: "3. Patient Info" },
              { step: 4, label: "4. Review" },
            ].map((s) => (
              <div
                key={s.step}
                className={`py-2 px-1 rounded-xl font-bold transition-all ${
                  currentStep === s.step
                    ? "bg-primary text-white shadow-sm"
                    : currentStep > s.step
                    ? "bg-secondary-container text-secondary"
                    : "text-on-surface-variant bg-surface"
                }`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content Container */}
        <div className="bg-surface-container-lowest rounded-3xl border border-surface-container-high shadow-card p-6 sm:p-10">
          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: CARE SELECTION */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-lg text-navy-900 pb-2 border-b border-slate-100">
                Step 1: Select Consultation or Health Package
              </h2>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCareType("doctor")}
                  className={`flex-1 p-4 rounded-2xl border text-left transition-all ${
                    careType === "doctor"
                      ? "border-clinical-600 bg-clinical-50/60 ring-2 ring-clinical-600/20"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <p className="font-heading font-bold text-sm text-navy-900">Consult a Doctor</p>
                  <p className="text-xs text-slate-500 mt-1">Specialist outpatient consultation</p>
                </button>

                <button
                  type="button"
                  onClick={() => setCareType("package")}
                  className={`flex-1 p-4 rounded-2xl border text-left transition-all ${
                    careType === "package"
                      ? "border-clinical-600 bg-clinical-50/60 ring-2 ring-clinical-600/20"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <p className="font-heading font-bold text-sm text-navy-900">Health Checkup</p>
                  <p className="text-xs text-slate-500 mt-1">Preventive diagnostic screening package</p>
                </button>
              </div>

              {careType === "doctor" ? (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Filter by Clinical Speciality:
                    </label>
                    <select
                      value={selectedSpeciality}
                      onChange={(e) => {
                        setSelectedSpeciality(e.target.value);
                        setSelectedDoctorSlug("");
                      }}
                      className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600 text-slate-700"
                    >
                      <option value="all">All Specialities</option>
                      {specialitiesData.map((s) => (
                        <option key={s.id} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Choose Consultant Specialist:
                    </label>
                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {filteredDoctors.map((doc) => (
                        <label
                          key={doc.id}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            selectedDoctorSlug === doc.slug
                              ? "border-clinical-600 bg-clinical-50/50"
                              : "border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="selectedDoctor"
                            value={doc.slug}
                            checked={selectedDoctorSlug === doc.slug}
                            onChange={() => setSelectedDoctorSlug(doc.slug)}
                            className="mt-1 text-clinical-600 focus:ring-clinical-500"
                          />
                          <div>
                            <p className="font-heading font-bold text-sm text-navy-900">{doc.name}</p>
                            <p className="text-xs text-slate-500">{doc.designation} &bull; {doc.qualifications}</p>
                            <p className="text-[11px] text-teal-700 font-semibold mt-1">
                              OPD: {doc.opdSchedule[0]?.days || "Mon - Sat"} ({doc.opdSchedule[0]?.hours || "09:00 AM - 01:00 PM"})
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Health Package:
                  </label>
                  <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                    {healthPackagesData.map((pkg) => (
                      <label
                        key={pkg.id}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedPackageSlug === pkg.slug
                            ? "border-clinical-600 bg-clinical-50/50"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="selectedPackage"
                          value={pkg.slug}
                          checked={selectedPackageSlug === pkg.slug}
                          onChange={() => setSelectedPackageSlug(pkg.slug)}
                          className="mt-1 text-clinical-600 focus:ring-clinical-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-heading font-bold text-sm text-navy-900">{pkg.title}</p>
                            <span className="font-bold text-xs text-clinical-800">{pkg.priceNote}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{pkg.subtitle}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-sm shadow transition-all"
                >
                  <span>Continue to Date & Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & SLOT SELECTION */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-lg text-navy-900 pb-2 border-b border-slate-100">
                Step 2: Choose Preferred Consultation Date & Time Slot
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Consultation Date:
                  </label>
                  <input
                    type="date"
                    min={minDate}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600 text-slate-800"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    OPD operates Mon - Sat. Sunday is emergency & inpatient only.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Time Slot:
                  </label>
                  <div className="space-y-2">
                    {[
                      "Morning (09:00 AM - 12:00 PM)",
                      "Afternoon (12:00 PM - 03:00 PM)",
                      "Evening (03:00 PM - 06:30 PM)",
                    ].map((slot) => (
                      <label
                        key={slot}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          preferredSlot === slot
                            ? "border-clinical-600 bg-clinical-50/50 text-clinical-900 font-semibold"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredSlot"
                          value={slot}
                          checked={preferredSlot === slot}
                          onChange={() => setPreferredSlot(slot)}
                          className="text-clinical-600 focus:ring-clinical-500"
                        />
                        <span className="text-xs">{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition-colors"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-sm shadow transition-all"
                >
                  <span>Continue to Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PATIENT DEMOGRAPHICS */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-lg text-navy-900 pb-2 border-b border-slate-100">
                Step 3: Patient Demographic Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Mobile Number * (SMS updates)
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Age (Years) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="115"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g. 42"
                      className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Gender *
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600 text-slate-700"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reason for Visit / Symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Describe your current symptoms or whether this is a routine follow-up..."
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-clinical-600"
                />
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 text-clinical-600 rounded focus:ring-clinical-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I confirm that the personal information provided above is accurate. I consent to receive appointment confirmation and hospital visit updates via SMS and Email in accordance with the{" "}
                    <Link href="/privacy-policy" className="text-clinical-800 underline">
                      Hospital Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition-colors"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-clinical-800 hover:bg-clinical-900 text-white font-bold text-sm shadow transition-all"
                >
                  <span>Review Booking Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & CONFIRM */}
          {currentStep === 4 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <h2 className="font-heading font-bold text-lg text-navy-900 pb-2 border-b border-slate-100">
                Step 4: Review Your Consultation Details
              </h2>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-400 block font-medium">Selected Service:</span>
                    <strong className="text-navy-900 text-sm block mt-0.5">
                      {careType === "doctor"
                        ? doctorsData.find((d) => d.slug === selectedDoctorSlug)?.name || "Selected Specialist"
                        : healthPackagesData.find((p) => p.slug === selectedPackageSlug)?.title || "Health Package"}
                    </strong>
                    <span className="text-slate-500">
                      {careType === "doctor"
                        ? doctorsData.find((d) => d.slug === selectedDoctorSlug)?.department
                        : "Preventive Healthcare Checkup"}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Scheduled Timing:</span>
                    <strong className="text-navy-900 text-sm block mt-0.5">
                      {preferredDate}
                    </strong>
                    <span className="text-slate-500">{preferredSlot}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <span className="text-slate-400 block font-medium">Patient Name:</span>
                    <strong className="text-slate-800 block mt-0.5">{fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Mobile Phone:</span>
                    <strong className="text-slate-800 block mt-0.5">{phone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Email:</span>
                    <strong className="text-slate-800 block mt-0.5 truncate">{email}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Age / Gender:</span>
                    <strong className="text-slate-800 block mt-0.5">{age} Yrs &bull; {gender}</strong>
                  </div>
                </div>

                {reason && (
                  <div className="pt-2">
                    <span className="text-slate-400 block font-medium">Reason / Symptoms:</span>
                    <p className="text-slate-700 italic mt-0.5">{reason}</p>
                  </div>
                )}
              </div>

              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3 text-xs text-teal-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>No Immediate Online Payment Required:</strong> Consultation fees and diagnostic investigations are billed at the outpatient billing counter on the date of your visit.
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition-colors"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-clinical-600 hover:bg-clinical-500 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Appointment</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppointmentBookingPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading booking form...</div>}>
      <AppointmentBookingContent />
    </Suspense>
  );
}
