"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";

export function FeaturedProducts() {
  return (
    <section id="collection" className="py-24 sm:py-32 bg-[#080808] border-b border-ctm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="ARCHIVE 2026"
            title="THE COLLECTION"
            description="Designed for the pairs worth protecting. Each monolith balances structural architectural weight with zero-oxidation preservation technology."
            className="mb-0"
          />

          <Button
            href="/shop"
            variant="outline"
            size="md"
            className="self-start md:self-end flex items-center gap-2"
          >
            <span>VIEW ALL ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 text-ctm-red" />
          </Button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-ctm-surface border border-ctm-border hover:border-ctm-borderLight flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Card Header Tags */}
              <div className="p-6 pb-0 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-ctm-muted uppercase">
                    {product.sku}
                  </span>
                  {product.isNewRelease && (
                    <Badge variant="red">NEW RELEASE</Badge>
                  )}
                </div>
                <Badge variant="outline">{product.capacity}</Badge>
              </div>

              {/* Product Visual Presentation */}
              <Link
                href={`/products/${product.slug}`}
                className={`relative w-full flex items-center justify-center overflow-hidden cursor-pointer ${
                  index === 0 ? "h-96 sm:h-[480px]" : "h-80 sm:h-96"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-4/5 h-4/5">
                  <Image
                    src={product.images[0]?.url || "/images/products/heat-2-main.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-5 py-2.5 bg-black/90 border border-ctm-borderLight text-white text-xs font-display font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-ctm-red" />
                    <span>INSPECT ARCHIVE</span>
                  </div>
                </div>
              </Link>

              {/* Product Details & Actions */}
              <div className="p-6 pt-4 border-t border-ctm-borderSubtle bg-ctm-surface">
                <div className="flex items-baseline justify-between mb-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide text-white group-hover:text-ctm-red transition-colors"
                  >
                    {product.name}
                  </Link>
                  <div className="text-right">
                    <span className="font-mono text-lg font-bold text-white">
                      {formatPrice(product.price)}
                    </span>
                    {product.compareAtPrice && (
                      <span className="block text-xs font-mono text-ctm-muted line-through">
                        {formatPrice(product.compareAtPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-ctm-muted line-clamp-2 leading-relaxed mb-6 font-normal">
                  {product.shortDesc}
                </p>

                <div className="pt-4 border-t border-ctm-borderSubtle flex items-center justify-between">
                  <span className="text-[11px] font-mono text-ctm-lightMuted tracking-wider uppercase">
                    {product.finish}
                  </span>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-white hover:text-ctm-red transition-colors"
                  >
                    <span>VIEW PRODUCT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-ctm-red" />
                  </Link>
                </div>
              </div>

              {/* Red Bottom Accent Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ctm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
