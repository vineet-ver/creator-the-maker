"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/data/collections";
import { SectionHeading } from "@/ui/SectionHeading";

export function CollectionGrid() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] border-b border-ctm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PORTFOLIO CATEGORIES"
          title="COLLECTIONS ARCHIVE"
          description="Monolithic display architectures categorized by spatial footprint, storage density, and mechanical engineering."
        />

        {/* Editorial Gallery Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS.map((col, idx) => (
            <Link
              key={col.id}
              href={col.slug === "bespoke" ? "/bespoke" : `/collections/${col.slug}`}
              className="group relative h-[460px] sm:h-[520px] bg-ctm-surface border border-ctm-border hover:border-ctm-red transition-all duration-500 overflow-hidden flex flex-col justify-between p-8"
            >
              {/* Background Product Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={col.coverImage}
                  alt={col.name}
                  fill
                  className="object-contain p-8 opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Top Panel Specs */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-ctm-muted tracking-widest uppercase">
                  SERIES 0{idx + 1}
                </span>
                <span className="w-8 h-8 rounded-none border border-ctm-border flex items-center justify-center text-white group-hover:border-ctm-red group-hover:text-ctm-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Information */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-wide text-white group-hover:text-ctm-red transition-colors">
                  {col.name}
                </h3>
                <p className="text-xs text-ctm-lightMuted font-display tracking-wider">
                  {col.tagline}
                </p>
                <p className="text-xs text-ctm-muted line-clamp-2 leading-relaxed pt-1">
                  {col.description}
                </p>
              </div>

              {/* Red Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-ctm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
