"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/ui/Button";

export function BrandStory() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#040404] border-b border-ctm-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-ctm-red" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-ctm-red uppercase">
                THE MANIFESTO
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-[0.98]">
              BUILT FOR THE PAIRS YOU DON&apos;T JUST WEAR<span className="text-ctm-red">.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-ctm-lightMuted font-light leading-relaxed">
              <p>
                Footwear collecting is no longer a hobby relegated to cardboard
                boxes stacked in closets. It is an architectural curation of
                industrial design history, cultural artifacts, and personal
                expression.
              </p>
              <p className="text-sm sm:text-base text-ctm-muted">
                Creator The Maker was founded on a singular conviction: the
                grails in your possession deserve display hardware engineered
                with the same rigorous tolerances as luxury furniture, precision
                automotive machinery, and museum exhibition cases.
              </p>
            </div>

            <div className="pt-4">
              <Button href="/about" variant="primary" size="lg" className="flex items-center gap-2">
                <span>OUR STORY & PHILOSOPHY</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[400px] sm:h-[520px] bg-ctm-surface border border-ctm-border overflow-hidden">
              <Image
                src="/images/products/heat-2-lifestyle.svg"
                alt="Creator The Maker Architectural Philosophy"
                fill
                className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-ctm-borderSubtle flex items-center justify-between text-xs font-mono text-ctm-lightMuted">
                <span>STUDIO DISPATCH // STUTTGART & NYC</span>
                <span className="text-ctm-red">TOLERANCE ±0.02MM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
