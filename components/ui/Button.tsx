"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-display font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-ctm-red disabled:opacity-40 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 tracking-widest",
      md: "text-xs px-6 py-3.5 tracking-widest",
      lg: "text-sm px-8 py-4 tracking-widest",
      xl: "text-base px-10 py-5 tracking-widest",
    };

    const variantStyles = {
      primary:
        "bg-black text-white hover:bg-ctm-red hover:text-white border border-black hover:border-ctm-red shadow-md shadow-black/10",
      secondary:
        "bg-ctm-surfaceSubtle text-black hover:bg-black hover:text-white border border-ctm-borderLight",
      outline:
        "bg-transparent text-black border border-black hover:bg-ctm-red hover:border-ctm-red hover:text-white",
      accent:
        "bg-ctm-red text-white hover:bg-ctm-redHover border border-ctm-red shadow-lg shadow-ctm-red/20",
      ghost:
        "bg-transparent text-ctm-muted hover:text-black hover:bg-black/5 border border-transparent",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
