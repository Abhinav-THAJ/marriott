import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeader from "@/components/common/SectionHeader";
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Navigation, 
  Car, 
  Train, 
  Plane, 
  Building2, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hospital Locations & Campus Guide | Marriott Hospital",
  description: "Explore the Marriott Hospital main campus layout in Kochi, including our acute surgical pavilions, diagnostic wings, and patient parking access.",
};

export default function LocationsPage() {
  const campusWings = [
    {
      name: "Main Clinical Pavilion (Block A)",
      description: "Houses the 24/7 Emergency & Trauma Centre, Intensive Care Units, Main Operating Theatres, and Inpatient Wards.",
      services: ["24/7 Emergency", "Critical Care / ICCU", "Cardiac Cath Lab", "Inpatient Admissions"],
      timing: "Open 24 Hours / 365 Days",
      floors: "Ground to 7th Floor",
    },
    {
      name: "Outpatient Consulting & Wellness Wing (Block B)",
      description: "Dedicated to specialist consultation suites, Day Care Chemotherapy, Dialysis Suites, and Executive Health Checkups.",
      services: ["Specialist OPD Clinics", "Dialysis Centre", "Preventive Health Lounge", "Patient Billing"],
      timing: "Mon - Sat: 8:00 AM - 7:00 PM",
      floors: "Ground to 4th Floor",
    },
    {
      name: "Diagnostic Imaging & Central Laboratory (Block C)",
      description: "Advanced imaging infrastructure including 3T MRI, 128-Slice CT, digital mammography, and NABL-accredited pathology.",
      services: ["3T MRI & CT Scans", "Pathology Lab", "Ultrasound / Doppler", "Sample Collection"],
      timing: "24/7 for Inpatient & Emergency; OPD 7:00 AM - 9:00 PM",
      floors: "Basement & Ground Floor",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Hospital Locations" }
            ]}
          />
          <div className="flex items-center gap-2 mt-4 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Campus Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 font-display">
            Hospital Campus & Navigation
          </h1>
          <p className="text-slate-300 max-w-2xl mt-4 text-base leading-relaxed">
            Marriott Hospital operates a unified 450-bed modern tertiary healthcare campus located strategically along the Kochi national highway corridor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Campus Feature Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative h-80 lg:h-auto min-h-[380px]">
              <Image
                src="/images/hospital/exterior.jpg"
                alt="Marriott Hospital Kochi Campus"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-medical-900/90 text-teal-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                Main Tertiary Campus
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Marriott Hospital — Kochi
                </h2>
                <div className="flex items-center gap-2 text-clinical-700 text-sm font-semibold mt-2">
                  <MapPin className="w-4 h-4" />
                  <span>NH 544 Highway Corridor, Edappally - Aluva Road, Kochi, Kerala 682024</span>
                </div>

                <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                  Our flagship medical campus provides comprehensive multispeciality care across 17 clinical disciplines, integrating modular laminar-flow surgical suites, advanced cardiac catheterization facilities, and comfortable patient suites.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-medium">Emergency Line</span>
                    <a href="tel:+914842880911" className="font-bold text-red-600 hover:underline">
                      +91 484 288 0911
                    </a>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-medium">General Inquiries</span>
                    <a href="tel:+914842880000" className="font-bold text-slate-800 hover:text-clinical-700">
                      +91 484 288 0000
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                <Link
                  href="/appointments"
                  className="bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm transition"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  Contact Helpdesk
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Wings Breakdown */}
        <SectionHeader
          eyebrow="Campus Zones"
          heading="Specialized Wings & Hospital Blocks"
          subheading="Our integrated facilities are organized for rapid emergency access, intuitive outpatient circulation, and quiet inpatient healing."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {campusWings.map((wing, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-600 bg-clinical-50 px-2.5 py-1 rounded">
                  {wing.floors}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-3">
                  {wing.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {wing.description}
                </p>

                <div className="mt-5 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Services Located Here:
                  </span>
                  {wing.services.map((svc, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-500" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{wing.timing}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transit & Commute Guide */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
            Transportation & Commuter Access
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-2xl">
            Detailed guidance for patients and visitors arriving by personal vehicle, public bus routes, Kochi Metro, or out-of-station transit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
              <Train className="w-6 h-6 text-clinical-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">By Metro & Rail</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Kalamassery Metro Station is 1.8 km away with frequent feeder auto-rickshaws. Major railway stations: Aluva (9 km) and Ernakulam North (12 km).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
              <Plane className="w-6 h-6 text-teal-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">From Airport</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Cochin International Airport (COK) is 28 km north. Direct highway drive takes approximately 35–45 minutes via NH 544.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
              <Car className="w-6 h-6 text-medical-800 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Parking & Valet</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Designated emergency ambulance bays and a multi-level 450-car patient parking facility with free valet assistance for senior citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
