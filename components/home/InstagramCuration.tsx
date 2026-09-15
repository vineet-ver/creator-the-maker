"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/ui/SectionHeading";

export function InstagramCuration() {
  const posts = [
    {
      image: "/images/gallery/tower-trunk3.JPG",
      caption: "Tower Trunk multi-tier installation featuring custom footwear graphics.",
      tag: "@creatorthemaker",
    },
    {
      image: "/images/white-studio/massive-sneaker-trunk-studio.jpg",
      caption: "Massive Sneaker Trunk: 4-foot monolith with 1 vitrine shelf + 3 slide drawers.",
      tag: "#CreatorTheMaker",
    },
    {
      image: "/images/white-studio/wardrobes-studio.jpg",
      caption: "6-foot dedicated Sneaker Cupboard wardrobe holding 38 pairs across 9 shelves.",
      tag: "@creatorthemaker",
    },
    {
      image: "/images/white-studio/standard-sneacker-trunk-studio.jpg",
      caption: "Standard Sneaker Trunk with dual hydraulic shockers & 6-wheel mobility buffers.",
      tag: "#SneakerStorage",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ctm-surfaceSubtle border-b border-ctm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="COMMUNITY ARCHIVE"
            title="FOLLOW THE COLLECTION"
            description="Documenting real-world collector installations, prototype testing, and private architectural reveals."
            className="mb-0"
          />

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black hover:text-ctm-red transition-colors"
          >
            <Instagram className="w-4 h-4 text-ctm-red" />
            <span>@CREATORTHEMAKER</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ctm-muted" />
          </a>
        </div>

        {/* 4-Column Editorial Instagram Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-80 bg-white border border-ctm-border hover:border-black transition-all duration-300 overflow-hidden flex flex-col justify-end p-5 shadow-sm hover:shadow-xl"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono text-ctm-red uppercase tracking-widest font-bold">
                  {post.tag}
                </span>
                <p className="text-xs text-white line-clamp-2 font-display">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
