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
    default: "bg-white text-black border border-black/20 font-semibold shadow-xs",
    red: "bg-ctm-red text-white border border-ctm-red font-bold shadow-xs",
    outline: "bg-transparent text-black/70 border border-black/30",
    accent: "bg-black text-white border border-black font-semibold",
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
