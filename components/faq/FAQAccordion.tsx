"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import { FAQ_DATA, FAQItem } from "@/lib/data/faq";

export function FAQAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-01": true });

  const categories = [
    "All",
    "Products",
    "Shipping",
    "Installation",
    "Customization",
    "Payments",
    "Warranty",
    "Maintenance",
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-ctm-muted absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search technical knowledge base, shipping protocols, glass specs..."
          className="w-full bg-ctm-surfaceSubtle border border-ctm-border pl-12 pr-4 py-3.5 text-xs font-mono text-black placeholder-ctm-muted focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-mono tracking-widest uppercase px-3.5 py-2 border transition-all ${
              selectedCategory === cat
                ? "bg-black text-white border-black font-bold shadow-sm"
                : "bg-white text-black border-ctm-border hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="bg-white border border-ctm-border p-6 sm:p-10 space-y-4 divide-y divide-ctm-border shadow-sm">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div key={item.id} className="pt-4 first:pt-0">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-4 text-left flex items-start justify-between gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-ctm-red tracking-widest uppercase block font-bold">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-display font-black uppercase text-black group-hover:text-ctm-red transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-ctm-muted group-hover:text-black transition-transform duration-300 shrink-0 mt-1 ${
                      isOpen ? "rotate-180 text-ctm-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pr-6 text-xs sm:text-sm text-ctm-lightMuted font-normal leading-relaxed animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center text-xs font-mono text-ctm-muted">
            No FAQ entries matched your search query. Please contact studio concierge.
          </div>
        )}
      </div>
    </div>
  );
}
