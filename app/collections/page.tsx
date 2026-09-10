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
    <div className="pt-32 pb-24 bg-ctm-black min-h-screen">
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
              className="group relative h-[500px] bg-ctm-surface border border-ctm-border hover:border-ctm-red transition-all duration-500 overflow-hidden flex flex-col justify-between p-8"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={col.coverImage}
                  alt={col.name}
                  fill
                  className="object-contain p-8 opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono text-ctm-muted tracking-widest uppercase">
                  SERIES 0{index + 1}
                </span>
                <span className="w-8 h-8 border border-ctm-border flex items-center justify-center text-white group-hover:border-ctm-red group-hover:text-ctm-red transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <h2 className="text-3xl font-display font-extrabold uppercase tracking-wide text-white group-hover:text-ctm-red transition-colors">
                  {col.name}
                </h2>
                <p className="text-xs text-ctm-lightMuted font-display tracking-wider">
                  {col.tagline}
                </p>
                <p className="text-xs text-ctm-muted leading-relaxed line-clamp-2 pt-1 font-normal">
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
