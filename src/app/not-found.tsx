import React from "react";
import Link from "next/link";
import { Search, Home, PhoneCall, Stethoscope, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <span className="text-6xl sm:text-7xl font-black text-clinical-600 font-display">404</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500 mt-3 leading-relaxed">
          The medical resource, doctor profile, or department page you requested may have been relocated or updated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-clinical-600 hover:bg-clinical-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/search"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition"
          >
            <Search className="w-4 h-4" />
            <span>Search Website</span>
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Need immediate assistance?</span>
          <a
            href="tel:+914842880911"
            className="font-bold text-red-600 hover:underline inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency: +91 484 288 0911</span>
          </a>
        </div>
      </div>
    </div>
  );
}
