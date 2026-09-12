"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/ui/Button";

export function ProductShowcase() {
  const massiveTrunk =
    PRODUCTS.find((p) => p.slug === "massive-sneaker-trunk") || PRODUCTS[3];
  const hiddenShelfTrunk =
    PRODUCTS.find((p) => p.slug === "long-trunk-w-hidden-shelf") || PRODUCTS[2];

  return (
    <section className="bg-white border-b border-ctm-border overflow-hidden">
      {/* SECTION 1: MASSIVE SNEAKER TRUNK (Jet Black Engineering Spotlight) */}
      <div className="py-24 sm:py-32 bg-[#09090B] text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-7 relative group">
              <div className="relative w-full h-[450px] sm:h-[600px] bg-neutral-900 border border-neutral-800 overflow-hidden flex items-center justify-center p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                <Image
                  src={massiveTrunk.images[0]?.url || "/images/products/sneaker-trunk-main.svg"}
                  alt={massiveTrunk.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-black/90 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-300 uppercase shadow-md">
                  18MM CENTURY HDHMR // 1 SHELF + 3 DRAWERS
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 shadow-md">
                <span className="w-1.5 h-1.5 bg-ctm-red animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-ctm-red uppercase font-semibold">
                  HIGH-CAPACITY MONOLITH
                </span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                  {massiveTrunk.name}
                </h2>
                <p className="text-lg sm:text-xl font-display text-neutral-400 mt-3">
                  &ldquo;4-Foot Stature. 1 Vitrine Shelf + 3 Heavy-Duty Drawers.&rdquo;
                </p>
              </div>

              <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                {massiveTrunk.longDesc}
              </p>

              {/* Architectural Specifications Table */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-neutral-800 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Dimensions
                  </span>
                  <span className="text-white font-semibold">{massiveTrunk.dimensions}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Capacity
                  </span>
                  <span className="text-white font-semibold">{massiveTrunk.capacity}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Substrate
                  </span>
                  <span className="text-white font-semibold">18mm Action/Century HDHMR</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Lid Mechanism
                  </span>
                  <span className="text-white font-semibold">Hydraulic Shockers</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Drawer Hardware
                  </span>
                  <span className="text-white font-semibold">Ozone / Hettich Runners</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">
                    Price
                  </span>
                  <span className="text-ctm-red font-bold text-sm">
                    {formatPrice(massiveTrunk.price)}
                  </span>
                </div>
              </div>

              <div>
                <Button
                  href={`/products/${massiveTrunk.slug}`}
                  variant="primary"
                  size="md"
                  className="flex items-center gap-2 shadow-lg shadow-ctm-red/25"
                >
                  <span>INSPECT MASSIVE TRUNK</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: LONG TRUNK W/ HIDDEN SHELF (Content Left, Image Right) */}
      <div className="py-24 sm:py-32 bg-ctm-surfaceSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-ctm-border shadow-sm">
                <span className="w-1.5 h-1.5 bg-ctm-red" />
                <span className="text-[10px] font-mono tracking-widest text-ctm-red uppercase font-semibold">
                  MULTI-TIER VAULT ARCHITECTURE
                </span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-black leading-none">
                  {hiddenShelfTrunk.name}
                </h2>
                <p className="text-lg sm:text-xl font-display text-ctm-lightMuted mt-3">
                  &ldquo;Double-decker concealed storage for 30–35 pairs.&rdquo;
                </p>
              </div>

              <p className="text-sm text-ctm-muted font-normal leading-relaxed">
                {hiddenShelfTrunk.longDesc}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-ctm-border text-xs font-mono">
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Dimensions
                  </span>
                  <span className="text-black font-semibold">{hiddenShelfTrunk.dimensions}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Capacity
                  </span>
                  <span className="text-black font-semibold">{hiddenShelfTrunk.capacity}</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Mobility
                  </span>
                  <span className="text-black font-semibold">6-Wheel Mobility Buffers</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Lid Operation
                  </span>
                  <span className="text-black font-semibold">Hydraulic Shockers</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Logistics
                  </span>
                  <span className="text-black font-semibold">Pan-India Delivery</span>
                </div>
                <div>
                  <span className="text-ctm-muted block uppercase text-[10px]">
                    Price
                  </span>
                  <span className="text-black font-bold text-sm">
                    {formatPrice(hiddenShelfTrunk.price)}
                  </span>
                </div>
              </div>

              <div>
                <Button
                  href={`/products/${hiddenShelfTrunk.slug}`}
                  variant="secondary"
                  size="md"
                  className="flex items-center gap-2"
                >
                  <span>INSPECT HIDDEN SHELF TRUNK</span>
                  <ArrowRight className="w-4 h-4 text-ctm-red group-hover:text-white" />
                </Button>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-7 relative group order-1 lg:order-2">
              <div className="relative w-full h-[450px] sm:h-[600px] bg-white border border-ctm-border overflow-hidden flex items-center justify-center p-8 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-transparent pointer-events-none" />
                <Image
                  src={hiddenShelfTrunk.images[0]?.url || "/images/products/long-trunk-main.svg"}
                  alt={hiddenShelfTrunk.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black text-white text-[10px] font-mono tracking-widest uppercase">
                  CONCEALED MULTI-LEVEL STORAGE // 35 PAIRS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
