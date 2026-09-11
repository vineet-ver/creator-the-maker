"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { Button } from "@/ui/Button";

export function ProductShowcase() {
  const heat2 = PRODUCTS.find((p) => p.slug === "heat-2-0") || PRODUCTS[0];
  const sneakerTrunk = PRODUCTS.find((p) => p.slug === "sneaker-trunk") || PRODUCTS[2];

  return (
    <section className="bg-white border-b border-ctm-border overflow-hidden">
      {/* SECTION 1: HEAT 2.0 (Jet Black Engineering Spotlight) */}
      <div className="py-24 sm:py-32 bg-[#09090B] text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-7 relative group">
              <div className="relative w-full h-[450px] sm:h-[600px] bg-neutral-900 border border-neutral-800 overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                <Image
                  src={heat2.images[0]?.url || "/images/products/heat-2-main.svg"}
                  alt={heat2.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-black/90 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-300 uppercase shadow-md">
                  6063 ANODIZED ALUMINUM // ELEVATION 01
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 shadow-md">
                <span className="w-1.5 h-1.5 bg-ctm-red animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-ctm-red uppercase font-semibold">
                  ENGINEERING SPOTLIGHT
                </span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                  {heat2.name}
                </h2>
                <p className="text-lg sm:text-xl font-display text-neutral-400 mt-3">
                  &ldquo;Built around the way collectors actually live.&rdquo;
                </p>
              </div>

              <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                {heat2.longDesc}
              </p>

              {/* Architectural Specifications Table */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-neutral-800 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Capacity
                  </span>
                  <span className="text-white font-semibold">{heat2.capacity}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Dimensions
                  </span>
                  <span className="text-white font-semibold">{heat2.dimensions}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Material
                  </span>
                  <span className="text-white font-semibold">{heat2.material}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Finish
                  </span>
                  <span className="text-white font-semibold">{heat2.finish}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Tare Weight
                  </span>
                  <span className="text-white font-semibold">{heat2.weight}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Warranty
                  </span>
                  <span className="text-white font-semibold">{heat2.warranty}</span>
                </div>
              </div>

              <div>
                <Button
                  href={`/products/${heat2.slug}`}
                  variant="primary"
                  size="md"
                  className="flex items-center gap-2"
                >
                  <span>EXPLORE HEAT 2.0</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: SNEAKER TRUNK (Content Left, Image Right) */}
      <div className="py-24 sm:py-32 bg-ctm-surfaceSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-ctm-border shadow-sm">
                <span className="w-1.5 h-1.5 bg-ctm-red" />
                <span className="text-[10px] font-mono tracking-widest text-ctm-red uppercase font-semibold">
                  HERITAGE SERIES
                </span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-black leading-none">
                  {sneakerTrunk.name}
                </h2>
                <p className="text-lg sm:text-xl font-display text-ctm-lightMuted mt-3">
                  &ldquo;Transatlantic luggage heritage re-imagined for grail rotations.&rdquo;
                </p>
              </div>

              <p className="text-sm text-ctm-muted font-normal leading-relaxed">
                {sneakerTrunk.longDesc}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-ctm-border text-xs font-mono">
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Capacity
                  </span>
                  <span className="text-black font-semibold">{sneakerTrunk.capacity}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Dimensions
                  </span>
                  <span className="text-black font-semibold">{sneakerTrunk.dimensions}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Interior
                  </span>
                  <span className="text-black font-semibold">Italian Micro-Suede</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Locking
                  </span>
                  <span className="text-black font-semibold">TSA Mechanical Brass</span>
                </div>
              </div>

              <div>
                <Button
                  href={`/products/${sneakerTrunk.slug}`}
                  variant="outline"
                  size="md"
                  className="flex items-center gap-2"
                >
                  <span>INSPECT SNEAKER TRUNK</span>
                  <ArrowRight className="w-4 h-4 text-ctm-red group-hover:text-white" />
                </Button>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-7 relative group order-1 lg:order-2">
              <div className="relative w-full h-[450px] sm:h-[600px] bg-white border border-ctm-border overflow-hidden flex items-center justify-center p-8 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-transparent pointer-events-none" />
                <Image
                  src={sneakerTrunk.images[0]?.url || "/images/products/sneaker-trunk-main.svg"}
                  alt={sneakerTrunk.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black text-white text-[10px] font-mono tracking-widest uppercase">
                  COMPOSITE CORE // SOLID BRASS HARDWARE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
