import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showTagline = true,
  className = "",
}) => {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group flex-shrink-0 ${className}`}>
      {/* Stitch Quaternary Clinical Cross Emblem */}
      <div className={`relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-lg ${
        isLight ? "bg-surface-container-lowest/10 border border-white/20 text-secondary-fixed" : "bg-primary text-secondary-fixed shadow-sm"
      } transition-transform duration-200 group-hover:scale-105`}>
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Medical Quaternary Cross */}
          <path d="M12 4v16M4 12h16" />
        </svg>
        {/* Verification Status Indicator */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white"></span>
      </div>

      <div className="flex flex-col whitespace-nowrap">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-heading font-extrabold text-base sm:text-lg tracking-tight ${
              isLight ? "text-white" : "text-primary"
            }`}
          >
            MARRIOTT
          </span>
          <span
            className={`font-heading font-semibold text-base sm:text-lg tracking-tight ${
              isLight ? "text-secondary-fixed" : "text-secondary"
            }`}
          >
            HEALTH
          </span>
        </div>
        {showTagline && (
          <span
            className={`hidden xl:inline text-[9px] uppercase font-bold tracking-widest mt-0.5 ${
              isLight ? "text-primary-fixed-dim" : "text-secondary"
            }`}
          >
            Institute of Quaternary Sciences
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
