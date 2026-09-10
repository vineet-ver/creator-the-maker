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
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

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
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white uppercase leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-ctm-muted max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
