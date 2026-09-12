"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/ui/Button";

export function BrandStory() {
  return (
    <section className="relative py-28 sm:py-36 bg-black text-white border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-ctm-red" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-ctm-red uppercase font-semibold">
                FOUNDER STATEMENT // NOVA SCOTIA ➔ DELHI
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-[0.98]">
              I DIDN&apos;T BRING BACK A JOB<span className="text-ctm-red">.</span>
              <br />
              <span className="text-ctm-red">I BROUGHT BACK AN IDEA.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              <p>
                In 2020, as a student in Nova Scotia, Canada, I watched
                collectors abroad craft bespoke display furniture specifically
                for their sneaker collections. I was fascinated by the
                craftsmanship, but one burning question never left me:{" "}
                <em className="text-white font-medium not-italic">
                  &ldquo;Why don&apos;t we have this in India?&rdquo;
                </em>
              </p>
              <p className="text-sm sm:text-base text-neutral-400">
                I returned home to Delhi to fuse what was already in my
                blood—my family&apos;s generational timber and woodworking
                heritage—with my obsession for sneaker culture. That alchemy is
                how Creator The Maker was born.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-neutral-900/80 border border-neutral-800">
                <span className="text-neutral-500 block text-[10px] uppercase">
                  Lineage
                </span>
                <span className="text-white font-bold">Generational Timber</span>
              </div>
              <div className="p-3 bg-neutral-900/80 border border-neutral-800">
                <span className="text-neutral-500 block text-[10px] uppercase">
                  Mission
                </span>
                <span className="text-ctm-red font-bold">Made in India 🇮🇳</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="accent"
                size="lg"
                className="flex items-center gap-2 shadow-lg shadow-ctm-red/25"
              >
                <span>READ THE FULL FOUNDER STORY</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[440px] sm:h-[540px] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
              <Image
                src="/images/products/heat-2-lifestyle.svg"
                alt="Creator The Maker Architectural Philosophy"
                fill
                className="object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span>DELHI WORKSHOP // TIMBER LINEAGE</span>
                <span className="text-ctm-red font-bold">EST. 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
