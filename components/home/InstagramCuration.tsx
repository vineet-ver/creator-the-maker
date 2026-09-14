"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/ui/SectionHeading";

export function InstagramCuration() {
  const posts = [
    {
      image: "/images/gallery/gallery-1.svg",
      caption: "Worli Sea Face Penthouse Vault installation complete. 140 pairs shielded.",
      tag: "@creatorthemaker",
    },
    {
      image: "/images/products/heat-2-main.svg",
      caption: "HEAT 2.0 dual chamber in Matte Obsidian. Precision milled 6063 alloy.",
      tag: "#CreatorTheMaker",
    },
    {
      image: "/images/gallery/gallery-2.svg",
      caption: "Brutalist architectural integration in Golf Links, New Delhi. Flush wall vitrines.",
      tag: "@creatorthemaker",
    },
    {
      image: "/images/white-studio/standard-sneacker-trunk-studio.jpg",
      caption: "Hand-finished solid brass corners on our Heritage Steamer Trunk.",
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
