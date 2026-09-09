import React from "react";

export default function BrandLogo({
  className = "h-9 w-auto",
  showText = true,
  theme = "dark",
}: {
  className?: string;
  showText?: boolean;
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Clean Modern Squircle Emblem */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
        <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-sky-400 group-hover:scale-105 transition-transform duration-200"
          >
            {/* Minimalist architectural apex + spark */}
            <path
              d="M3 14L12 5L21 14"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 10V19M8 15L12 19L16 15"
              stroke="#38BDF8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span
            className={`font-sans font-extrabold text-base tracking-tight ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Noida
          </span>
          <span className="font-sans font-bold text-base text-sky-400 tracking-tight">
            Services
          </span>
        </div>
      )}
    </div>
  );
}


