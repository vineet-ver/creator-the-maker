import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "red" | "outline" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-ctm-surface text-ctm-lightMuted border border-ctm-border",
    red: "bg-ctm-red/10 text-ctm-red border border-ctm-red/30",
    outline: "bg-transparent text-ctm-muted border border-ctm-borderLight",
    accent: "bg-white text-black font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-mono tracking-widest uppercase px-2.5 py-1",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
