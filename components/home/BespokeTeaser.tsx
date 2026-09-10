"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Ruler, Layers, Sliders, Shield, PenTool, CheckCircle } from "lucide-react";
import { Button } from "@/ui/Button";

export function BespokeTeaser() {
  const bespokeFeatures = [
    {
      icon: Ruler,
      title: "Custom Dimensions",
      desc: "Millimeter-exact spatial adaptation to penthouses, dressing suites, and awkward alcoves.",
    },
    {
      icon: Layers,
      title: "Capacity Scaling",
      desc: "Tailor display compartments from intimate 12-pair pods to 300+ pair walk-in sneaker vaults.",
    },
    {
      icon: Sliders,
      title: "Bespoke Finishes",
      desc: "Hand-brushed obsidian, raw satin titanium, 24k gold leaf accents, and carbon fiber composites.",
    },
    {
      icon: PenTool,
      title: "Smart Illumination",
      desc: "Smartphone & Crestron integrated tunable circadian lighting with per-cell dimming control.",
    },
    {
      icon: Shield,
      title: "Climate Buffering",
      desc: "Sealed argon-gas chambers with silent air exchange for archival polymer preservation.",
    },
    {
      icon: CheckCircle,
      title: "White-Glove Installation",
      desc: "Turnkey delivery and structural assembly executed by dedicated factory engineers.",
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#080808] border-b border-ctm-border relative overflow-hidden">
      {/* Background Architectural Blueprint */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/images/gallery/bespoke-hero.svg"
          alt="Bespoke Blueprint"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-ctm-red" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-ctm-red uppercase">
              ARCHITECTURAL COMMISSIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-[0.95]">
            YOUR COLLECTION.<br />
            YOUR SPACE.<br />
            YOUR RULES<span className="text-ctm-red">.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-ctm-muted font-normal leading-relaxed">
            Every collector space presents unique spatial constraints. Our
            bespoke engineering atelier designs, fabricates, and installs
            completely custom sneaker rooms, motorized vitrines, and monolithic
            wardrobe integrations.
          </p>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bespokeFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-8 bg-ctm-surface/80 border border-ctm-border hover:border-ctm-red/80 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="w-10 h-10 border border-ctm-border group-hover:border-ctm-red flex items-center justify-center text-ctm-lightMuted group-hover:text-ctm-red transition-colors mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-ctm-muted leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 bg-black border border-ctm-borderLight flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
              Initiate Your Commission
            </h3>
            <p className="text-xs sm:text-sm text-ctm-muted mt-1 font-mono">
              Lead times for bespoke architectural chambers currently range from 4–8 weeks.
            </p>
          </div>

          <Button
            href="/bespoke"
            variant="accent"
            size="lg"
            className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2"
          >
            <span>START A BESPOKE PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
