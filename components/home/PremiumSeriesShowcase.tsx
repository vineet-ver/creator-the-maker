"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Layers, Eye, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/ui/Button";

export function PremiumSeriesShowcase() {
  const premiumProducts = PRODUCTS.filter(
    (p) => p.collectionSlug === "premium-series"
  );

  return (
    <section className="py-24 sm:py-32 bg-[#09090B] text-white border-b border-neutral-900 relative overflow-hidden">
      {/* Background Architectural Ambient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181B_1px,transparent_1px),linear-gradient(to_bottom,#18181B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-ctm-red/40 shadow-lg">
              <span className="w-2 h-2 bg-ctm-red animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-ctm-red uppercase font-bold">
                FLAGSHIP DIVISION // ARCHITECTURAL SERIES
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white leading-[0.95]">
              PREMIUM SERIES<span className="text-ctm-red">.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Crafted for high-end collector residences. Engineered with{" "}
              <span className="text-white font-semibold">1mm Mika Coating</span>,{" "}
              <span className="text-white font-semibold">3M Digital UV Direct Prints</span>, and{" "}
              <span className="text-ctm-red font-semibold">120-Micron HG Matte Lamination</span> over 18mm Century/Action HDHMR with German Ozone & Hettich fittings.
            </p>
          </div>

          {/* Premium Engineering Spec Pill */}
          <div className="p-4 sm:p-5 bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono shrink-0 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-ctm-red font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>1MM MIKA + 120µ HG MATTE</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                All articles are made to order & 100% customisable
              </p>
            </div>
            <Link
              href="/collections/premium-series"
              className="px-4 py-2 bg-ctm-red text-white hover:bg-white hover:text-black transition-colors font-display font-bold uppercase tracking-wider text-[11px] shrink-0"
            >
              VIEW COLLECTION
            </Link>
          </div>
        </div>

        {/* 4 Animated Box Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {premiumProducts.map((product) => (
            <div
              key={product.id}
              className="premium-animated-border group shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="bg-[#0D0D10] h-full flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden border border-neutral-800">
                {/* Shimmer Light Reflection Overlay */}
                <div className="shimmer-overlay" />

                {/* Card Top Badges & Meta */}
                <div className="flex items-center justify-between gap-4 mb-6 z-10">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-ctm-red text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-sm">
                      PREMIUM TIER
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase hidden sm:inline">
                      {product.sku}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-neutral-300 uppercase">
                    {product.capacity}
                  </span>
                </div>

                {/* Image Showcase Stage */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative w-full h-64 sm:h-80 flex items-center justify-center p-6 bg-neutral-900/50 border border-neutral-800/80 mb-6 overflow-hidden group-hover:border-neutral-700 transition-colors"
                >
                  <Image
                    src={product.images[0]?.url || "/images/products/tower-trunk-main.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-5 py-2.5 bg-ctm-red text-white text-xs font-display font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>INSPECT SPECIFICATIONS</span>
                    </div>
                  </div>

                  {/* Dimensions Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/90 border border-neutral-800 text-[10px] font-mono text-neutral-300 tracking-wider">
                    {product.dimensions}
                  </div>
                </Link>

                {/* Article Info & Details */}
                <div className="space-y-4 z-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-2xl sm:text-3xl font-display font-black uppercase text-white hover:text-ctm-red transition-colors tracking-wide leading-none"
                    >
                      {product.name}
                    </Link>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-white">
                        {formatPrice(product.price)}
                      </span>
                      {product.compareAtPrice && (
                        <span className="block text-xs font-mono text-neutral-500 line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-normal leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Premium Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 pb-2 text-[11px] font-mono border-y border-neutral-800/80 text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ctm-red shrink-0" />
                      <span>1mm Mika Surfacing</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ctm-red shrink-0" />
                      <span>120µ HG Matte Lamination</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ctm-red shrink-0" />
                      <span>18mm Century HDHMR</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ctm-red shrink-0" />
                      <span>Ozone / Hettich Fittings</span>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">
                      Pan-India Delivery Included
                    </span>

                    <Button
                      href={`/products/${product.slug}`}
                      variant="primary"
                      size="sm"
                      className="flex items-center gap-1.5 shadow-md shadow-ctm-red/25"
                    >
                      <span>ORDER ARTICLE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Notice */}
        <div className="mt-16 p-6 sm:p-8 bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-ctm-red tracking-widest uppercase">
              100% BESPOKE CAPABILITY
            </span>
            <p className="text-sm font-display font-medium text-white">
              Need custom dimensions, alternative Mika textures, or specialized lighting channels?
            </p>
          </div>

          <Button
            href="/bespoke"
            variant="secondary"
            size="md"
            className="shrink-0 border border-neutral-700 hover:border-ctm-red"
          >
            CUSTOMIZE ANY ARTICLE
          </Button>
        </div>
      </div>
    </section>
  );
}
