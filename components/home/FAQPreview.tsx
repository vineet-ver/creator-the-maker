"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQ_DATA } from "@/lib/data/faq";
import { SectionHeading } from "@/ui/SectionHeading";

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const previewItems = FAQ_DATA.slice(0, 5);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-b border-ctm-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTELLIGENCE & SUPPORT"
          title="FREQUENTLY ASKED"
          description="Technical insights into our preservation engineering, white-glove logistics, and custom architectural commissions."
          align="center"
        />

        {/* Accordion List */}
        <div className="space-y-4 divide-y divide-ctm-borderSubtle">
          {previewItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.id} className="pt-4 first:pt-0">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-ctm-muted">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-display font-bold uppercase tracking-wide text-white group-hover:text-ctm-red transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-ctm-muted group-hover:text-white transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-ctm-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pl-9 pr-4 text-sm text-ctm-muted font-normal leading-relaxed animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-ctm-red transition-colors"
          >
            <span>VIEW COMPLETE TECHNICAL FAQ</span>
            <ArrowRight className="w-3.5 h-3.5 text-ctm-red" />
          </Link>
        </div>
      </div>
    </section>
  );
}
