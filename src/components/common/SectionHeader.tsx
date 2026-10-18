import React from "react";

interface SectionHeaderProps {
  badge?: string;
  eyebrow?: string;
  title?: string;
  heading?: string;
  subtitle?: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  eyebrow,
  title,
  heading,
  subtitle,
  subheading,
  align = "center",
  className = "",
}) => {
  const displayBadge = badge || eyebrow;
  const displayTitle = title || heading || "";
  const displaySubtitle = subtitle || subheading;
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {displayBadge && (
        <span className="inline-block px-3 py-1 rounded-full bg-clinical-50 text-clinical-800 text-xs font-bold uppercase tracking-wider mb-2.5 border border-clinical-100">
          {displayBadge}
        </span>
      )}
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-900 tracking-tight font-display">
        {displayTitle}
      </h2>
      {displaySubtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
          {displaySubtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
