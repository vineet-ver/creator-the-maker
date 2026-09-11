"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/ui/Button";

export function Hero() {
  const scrollToCollection = () => {
    const el = document.getElementById("collection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white border-b border-ctm-border">
      {/* Background Architectural Visual with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand/brand-hero.svg"
          alt="Creator The Maker Architectural Monoliths"
          fill
          priority
          className="object-cover object-center opacity-15 scale-105 transition-transform duration-1000 invert"
        />
        {/* Gallery White Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/40 to-white" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full flex flex-col items-center text-center">
        {/* Architectural Pre-title */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white border border-ctm-border shadow-sm">
          <span className="w-1.5 h-1.5 bg-ctm-red" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-ctm-lightMuted uppercase">
            ARCHITECTURAL PRESERVATION SERIES
          </span>
        </div>

        {/* Master Headline: Bold Black with Red Accent */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-black uppercase leading-[0.92] select-none">
          STORE <br className="hidden sm:inline" />
          YOUR <span className="text-black relative inline-block">HEAT<span className="text-ctm-red">.</span></span>
        </h1>

        {/* Supporting Line */}
        <p className="mt-8 text-base sm:text-xl md:text-2xl text-ctm-lightMuted max-w-2xl font-light tracking-wide leading-relaxed">
          Premium sneaker storage engineered for collectors. Museum-grade UV
          shielding, aerospace anodizing, and bespoke architectural integration.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href="/shop"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto min-w-[200px]"
          >
            SHOP COLLECTION
          </Button>

          <Button
            href="/bespoke"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 group"
          >
            <span>BUILD BESPOKE</span>
            <ArrowRight className="w-4 h-4 text-ctm-red group-hover:translate-x-1 group-hover:text-white transition-all" />
          </Button>
        </div>

        {/* Technical Specs Ticker Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 pt-8 border-t border-ctm-border max-w-4xl w-full text-left">
          <div>
            <span className="block text-[10px] font-mono text-ctm-muted tracking-widest uppercase">
              Glazing
            </span>
            <span className="font-display font-bold text-black text-sm tracking-wider">
              99.2% UV Shield Glass
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-mono text-ctm-muted tracking-widest uppercase">
              Alloy
            </span>
            <span className="font-display font-bold text-black text-sm tracking-wider">
              6063-T6 Aerospace
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-mono text-ctm-muted tracking-widest uppercase">
              Illumination
            </span>
            <span className="font-display font-bold text-black text-sm tracking-wider">
              98 CRI Zero-Heat LED
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-mono text-ctm-muted tracking-widest uppercase">
              Warranty
            </span>
            <span className="font-display font-bold text-black text-sm tracking-wider">
              5-Year Structural
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToCollection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ctm-muted hover:text-black transition-colors"
        aria-label="Scroll to collection"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">
          EXPLORE
        </span>
        <ArrowDown className="w-4 h-4 text-ctm-red animate-bounce" />
      </button>
    </section>
  );
}
