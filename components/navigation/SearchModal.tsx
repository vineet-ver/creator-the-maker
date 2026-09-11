"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, CornerDownLeft } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.collectionName.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.finish.toLowerCase().includes(q)
    );

    setResults(filtered);

    trackEvent({
      name: "search",
      query: q,
      resultsCount: filtered.length,
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-3xl bg-white border border-ctm-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Header */}
        <div className="relative flex items-center px-6 py-5 border-b border-ctm-border">
          <Search className="w-5 h-5 text-ctm-red mr-3.5 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search archive by model, collection, finish, or SKU..."
            className="w-full bg-transparent text-black placeholder-ctm-muted text-base sm:text-lg font-display focus:outline-none tracking-wide"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-ctm-muted hover:text-black mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono tracking-widest text-ctm-muted border border-ctm-border hover:text-black hover:border-black transition-colors uppercase"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-ctm-borderSubtle">
          {query.trim() === "" ? (
            <div className="p-8 text-center bg-white">
              <p className="text-xs font-mono uppercase tracking-widest text-ctm-muted mb-3">
                Suggested Searches
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["HEAT 2.0", "Sneaker Trunk", "Tower Trunk", "Long Trunk", "Anodized Obsidian", "UV Shield"].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs font-mono px-3 py-1.5 bg-ctm-surfaceSubtle border border-ctm-border text-black hover:border-ctm-red hover:text-ctm-red transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2 bg-white">
              <div className="px-6 py-2 text-[10px] font-mono tracking-widest text-ctm-muted uppercase">
                {results.length} Matching Hardware Units
              </div>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between px-6 py-4 hover:bg-ctm-surfaceSubtle transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 bg-ctm-surfaceSubtle border border-ctm-border flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src={product.images[0]?.url || "/images/products/heat-2-main.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-black text-base tracking-wide group-hover:text-ctm-red transition-colors">
                          {product.name}
                        </span>
                        <span className="text-[10px] font-mono text-ctm-muted px-1.5 py-0.5 border border-ctm-border">
                          {product.sku}
                        </span>
                      </div>
                      <p className="text-xs text-ctm-muted mt-0.5 line-clamp-1">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right">
                    <span className="font-mono text-sm font-semibold text-black">
                      {formatPrice(product.price)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-ctm-muted group-hover:text-ctm-red group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center bg-white">
              <p className="text-base text-black font-display">
                No matching architectural hardware found.
              </p>
              <p className="text-xs text-ctm-muted mt-2 font-mono">
                Try searching for &quot;HEAT&quot;, &quot;Trunk&quot;, or request a Bespoke Commission.
              </p>
              <Link
                href="/bespoke"
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-5 text-xs font-mono uppercase tracking-widest text-ctm-red hover:underline"
              >
                Inquire About Bespoke Design <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-ctm-surfaceSubtle border-t border-ctm-border flex items-center justify-between text-[11px] font-mono text-ctm-muted">
          <span>Search Engine // Precision Architecture</span>
          <span className="flex items-center gap-1">
            Navigate with <CornerDownLeft className="w-3 h-3 inline" /> ENTER
          </span>
        </div>
      </div>
    </div>
  );
}
