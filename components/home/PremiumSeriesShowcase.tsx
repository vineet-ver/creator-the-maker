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
              className="premium-box-dark group"
            >
              <div className="premium-inner-dark flex flex-col justify-between p-6 sm:p-9 relative border border-zinc-900/90 overflow-hidden">
                {/* Shimmer Light Reflection Overlay */}
                <div className="shimmer-overlay" />

                {/* Card Top Badges & Meta */}
                <div className="flex items-center justify-between gap-4 mb-6 z-10">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-[10px] font-mono font-black tracking-widest uppercase shadow-lg shadow-red-900/40 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      PREMIUM TIER
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase hidden sm:inline">
                      {product.sku}
                    </span>
                  </div>

                  <span className="px-3 py-1 bg-[#09090D] border border-zinc-800 text-[10px] font-mono text-neutral-300 font-semibold tracking-wider uppercase">
                    {product.capacity}
                  </span>
                </div>

                {/* Image Showcase Stage: Pitch Dark Vault with Hover Spotlight */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative w-full h-64 sm:h-80 flex items-center justify-center p-6 bg-[#040406] border border-zinc-900/90 mb-6 overflow-hidden transition-all duration-500 group-hover:border-neutral-700/60"
                >
                  {/* Dramatic Radial Spotlight Behind Sneaker Trunk on Hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.28)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Ambient Floor Reflection Shadow */}
                  <div className="absolute bottom-0 inset-x-8 h-12 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                  <Image
                    src={product.images[0]?.url || "/images/products/tower-trunk-main.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 group-hover:-translate-y-1.5 transition-all duration-700 ease-out"
                  />

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-5 py-2.5 bg-ctm-red text-white text-xs font-display font-bold uppercase tracking-widest flex items-center gap-2 shadow-2xl shadow-ctm-red/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>INSPECT SPECIFICATIONS</span>
                    </div>
                  </div>

                  {/* Dimensions Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/90 border border-zinc-800 text-[10px] font-mono text-neutral-300 tracking-wider">
                    {product.dimensions}
                  </div>

                  {/* Premium Coating Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-red-900/50 text-[9px] font-mono text-red-400 font-bold tracking-widest uppercase">
                    1MM MIKA
                  </div>
                </Link>

                {/* Article Info & Details */}
                <div className="space-y-4 z-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-2xl sm:text-3xl font-display font-black uppercase text-white group-hover:text-ctm-red transition-colors tracking-wide leading-none"
                    >
                      {product.name}
                    </Link>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
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

                  {/* Premium Specs Grid with Dark Carbon Panels */}
                  <div className="grid grid-cols-2 gap-2 pt-3 pb-3 text-[11px] font-mono border-y border-zinc-900 text-neutral-300">
                    <div className="flex items-center gap-2 p-2 bg-[#060609] border border-zinc-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-ctm-red shrink-0" />
                      <span className="truncate">1mm Mika Surfacing</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#060609] border border-zinc-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-ctm-red shrink-0" />
                      <span className="truncate">120µ HG Matte</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#060609] border border-zinc-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-ctm-red shrink-0" />
                      <span className="truncate">18mm Century HDHMR</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#060609] border border-zinc-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-ctm-red shrink-0" />
                      <span className="truncate">Ozone / Hettich</span>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-green-500" />
                      Pan-India Freight Included
                    </span>

                    <Button
                      href={`/products/${product.slug}`}
                      variant="primary"
                      size="sm"
                      className="flex items-center gap-1.5 shadow-lg shadow-ctm-red/30 group-hover:scale-105 transition-transform"
                    >
                      <span>ORDER ARTICLE</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
