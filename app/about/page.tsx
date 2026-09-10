import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Compass, Hammer, Cpu } from "lucide-react";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "About The Studio — Creator The Maker",
  description:
    "Learn about Creator The Maker: our architectural design philosophy, 6063 aerospace aluminum engineering, museum glass preservation, and why we build for pairs you don't just wear.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-ctm-black min-h-screen text-white">
      <Container size="wide">
        {/* Editorial Brand Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-ctm-red" />
            <span className="text-xs font-mono tracking-widest text-ctm-red uppercase">
              STUDIO PHILOSOPHY & ORIGIN
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight leading-[0.95]">
            BUILT FOR THE PAIRS YOU DON&apos;T JUST WEAR<span className="text-ctm-red">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-ctm-lightMuted font-light leading-relaxed max-w-2xl mx-auto">
            Creator The Maker sits at the intersection of architectural
            furniture, aerospace metalcraft, and contemporary sneaker culture.
          </p>
        </div>

        {/* Hero Architectural Image */}
        <div className="relative w-full h-[380px] sm:h-[540px] bg-ctm-surface border border-ctm-border mb-24 overflow-hidden">
          <Image
            src="/images/brand/brand-hero.svg"
            alt="Creator The Maker Architectural Monoliths"
            fill
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-ctm-muted">
            <span>FIGURE 01 // ARCHITECTURAL ASSEMBLY HALL</span>
            <span className="text-ctm-red">PRECISION TOLERANCE ±0.02MM</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="p-8 bg-ctm-surface border border-ctm-border space-y-4">
            <div className="w-10 h-10 border border-ctm-border flex items-center justify-center text-ctm-red">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wide">
              Architectural Discipline
            </h3>
            <p className="text-xs text-ctm-muted leading-relaxed font-normal">
              Every profile, bezel, and shadow gap is designed with the exact
              spatial restraint found in modernist architecture and bespoke
              cabinetry.
            </p>
          </div>

          <div className="p-8 bg-ctm-surface border border-ctm-border space-y-4">
            <div className="w-10 h-10 border border-ctm-border flex items-center justify-center text-ctm-red">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wide">
              Aerospace Metallurgy
            </h3>
            <p className="text-xs text-ctm-muted leading-relaxed font-normal">
              We machine each chassis from solid 6063-T6 aluminum extrusion,
              chemically etched and anodized in deep obsidian to eliminate surface
              fatigue.
            </p>
          </div>

          <div className="p-8 bg-ctm-surface border border-ctm-border space-y-4">
            <div className="w-10 h-10 border border-ctm-border flex items-center justify-center text-ctm-red">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wide">
              Museum Preservation
            </h3>
            <p className="text-xs text-ctm-muted leading-relaxed font-normal">
              Dual-laminated low-iron glass filters 99.2% of harmful UV wavelengths,
              halting polyurethane hydrolysis, midsole yellowing, and glue bond
              failure.
            </p>
          </div>

          <div className="p-8 bg-ctm-surface border border-ctm-border space-y-4">
            <div className="w-10 h-10 border border-ctm-border flex items-center justify-center text-ctm-red">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wide">
              Zero-Heat Light
            </h3>
            <p className="text-xs text-ctm-muted leading-relaxed font-normal">
              98 CRI linear LED arrays channeled with external cooling sinks cast
              photorealistic natural spectrum lighting without raising internal chamber
              temperatures.
            </p>
          </div>
        </div>

        {/* Narrative Section (Editorial Two-Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 border-y border-ctm-border">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-ctm-red tracking-widest uppercase">
              FOUNDATIONAL MISSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-tight">
              Why Generic Acrylic Boxes Don&apos;t Cut It
            </h2>
            <p className="text-sm text-ctm-muted leading-relaxed font-normal">
              For years, collectors spending thousands on grails, player
              exclusives, and deadstock silhouettes were offered the same cheap,
              flexible plastic shoe boxes. These attract static dust, lack UV
              protection, and look out of place in luxury penthouses and
              architect-designed residences.
            </p>
            <p className="text-sm text-ctm-muted leading-relaxed font-normal">
              Creator The Maker was created to establish a permanent new
              category: museum-grade luxury sneaker storage furniture.
            </p>
          </div>

          <div className="lg:col-span-7 relative h-96 sm:h-[480px] bg-ctm-surface border border-ctm-border overflow-hidden">
            <Image
              src="/images/products/heat-2-detail.svg"
              alt="Precision Hinge Metallurgy"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/80 border border-ctm-border text-[10px] font-mono text-ctm-lightMuted">
              CNC MACHINED CORNER // STUTTGART ATELIER
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-20 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-wide">
            Experience Creator The Maker
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/shop" variant="primary" size="lg">
              EXPLORE THE COLLECTION
            </Button>
            <Button href="/bespoke" variant="outline" size="lg">
              START A BESPOKE PROJECT
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
