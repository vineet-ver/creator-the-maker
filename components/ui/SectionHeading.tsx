import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  theme = "light",
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-col mb-12 sm:mb-16", alignStyles[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-ctm-red rounded-none" />
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] text-ctm-red uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight uppercase leading-[1.05]",
          isDark ? "text-white" : "text-black"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed",
            isDark ? "text-ctm-muted" : "text-ctm-lightMuted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
