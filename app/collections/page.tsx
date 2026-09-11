import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/data/collections";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Collections Archive — Creator The Maker",
  description:
    "Explore our complete range of sneaker display collections: HEAT Series, Sneaker Trunks, Tower Trunks, Long Trunks, and Bespoke Architectural Commissions.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        <SectionHeading
          eyebrow="PORTFOLIO DIVISIONS"
          title="COLLECTIONS"
          description="Every collection is engineered around distinct collector space footprints, structural payloads, and preservation tolerances."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, index) => (
            <Link
              key={col.id}
              href={col.slug === "bespoke" ? "/bespoke" : `/collections/${col.slug}`}
              className={`group relative h-[500px] transition-all duration-500 overflow-hidden flex flex-col justify-between p-8 shadow-sm hover:shadow-xl ${
                col.slug === "bespoke"
                  ? "bg-[#09090B] text-white border border-neutral-800 hover:border-ctm-red"
                  : "bg-ctm-surfaceSubtle/60 text-black border border-ctm-border hover:border-black hover:shadow-black/5"
              }`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={col.coverImage}
                  alt={col.name}
                  fill
                  className="object-contain p-8 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div
                  className={`absolute inset-0 ${
                    col.slug === "bespoke"
                      ? "bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent"
                      : "bg-gradient-to-t from-white via-white/50 to-transparent"
                  }`}
                />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={`text-xs font-mono tracking-widest uppercase ${
                    col.slug === "bespoke" ? "text-neutral-400" : "text-ctm-muted"
                  }`}
                >
                  SERIES 0{index + 1}
                </span>
                <span
                  className={`w-8 h-8 border flex items-center justify-center transition-all ${
                    col.slug === "bespoke"
                      ? "border-neutral-700 bg-neutral-900 text-white group-hover:border-ctm-red group-hover:bg-ctm-red"
                      : "border-ctm-border bg-white text-black group-hover:border-ctm-red group-hover:bg-ctm-red group-hover:text-white"
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <h2
                  className={`text-3xl font-display font-extrabold uppercase tracking-wide group-hover:text-ctm-red transition-colors ${
                    col.slug === "bespoke" ? "text-white" : "text-black"
                  }`}
                >
                  {col.name}
                </h2>
                <p
                  className={`text-xs font-display tracking-wider font-semibold ${
                    col.slug === "bespoke" ? "text-neutral-300" : "text-ctm-lightMuted"
                  }`}
                >
                  {col.tagline}
                </p>
                <p
                  className={`text-xs leading-relaxed line-clamp-2 pt-1 font-normal ${
                    col.slug === "bespoke" ? "text-neutral-400" : "text-ctm-muted"
                  }`}
                >
                  {col.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ctm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
