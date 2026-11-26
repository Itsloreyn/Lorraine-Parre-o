import React from 'react';

export const HeroBotanicalAccent: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 360 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    {/* Subtle abstract petal arcs */}
    <path
      d="M44 296C44 176 138 78 262 66C256 184 166 286 44 296Z"
      stroke="currentColor"
      strokeWidth="1.2"
      className="text-[#D98CA5]/45 dark:text-[#D98CA5]/30"
    />
    <path
      d="M110 326C130 220 212 134 318 118C302 224 220 308 110 326Z"
      stroke="currentColor"
      strokeWidth="1"
      className="text-[#C5B5E8]/55 dark:text-[#C5B5E8]/30"
    />
    <circle
      cx="278"
      cy="84"
      r="4"
      className="fill-[#E8D5C4] dark:fill-[#D98CA5]/50"
    />
  </svg>
);

export const EditorialRibbonCurve: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 180 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M2 34C38 10 74 42 114 20C138 7 158 10 178 22"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      className="text-[#D98CA5]/60 dark:text-[#D98CA5]/40"
    />
  </svg>
);
