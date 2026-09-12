"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight, Eye, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import { COLLECTIONS } from "@/lib/data/collections";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/ui/Badge";
import { useCartStore } from "@/lib/store/useCartStore";

export function ShopCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<string>("all");
  const [selectedCapacity, setSelectedCapacity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const { addItem } = useCartStore();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Collection filter
      if (selectedCollection !== "all" && product.collectionSlug !== selectedCollection) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.sku.toLowerCase().includes(q) ||
          product.shortDesc.toLowerCase().includes(q) ||
          product.finish.toLowerCase().includes(q);
        if (!matches) return false;
      }

        // Capacity filter
        const cap = product.capacity;
        if (selectedCapacity === "standard") {
          // 14 to 23 pairs
          if (!cap.includes("15") && !cap.includes("14") && !cap.includes("21")) return false;
        }
        if (selectedCapacity === "large") {
          // 24 to 35 pairs
          if (!cap.includes("30") && !cap.includes("28") && !cap.includes("24")) return false;
        }
        if (selectedCapacity === "mega") {
          // 36+ pairs
          if (!cap.includes("34") && !cap.includes("36") && !cap.includes("40") && !cap.includes("50")) return false;
        }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // default featured
    });
  }, [searchQuery, selectedCollection, selectedCapacity, sortBy]);

  return (
    <div className="w-full">
      {/* Search & Filter Bar */}
      <div className="bg-[#09090B] text-white border border-neutral-800 p-4 sm:p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center shadow-lg">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter models or SKU..."
            className="w-full bg-neutral-900 border border-neutral-700 pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-ctm-red transition-colors"
          />
        </div>

        {/* Filters and Sorters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {/* Collection Filter Dropdown */}
          <select
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-ctm-red uppercase cursor-pointer"
          >
            <option value="all">All Collections</option>
            {COLLECTIONS.filter((c) => c.slug !== "bespoke").map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Capacity Filter */}
          <select
            value={selectedCapacity}
            onChange={(e) => setSelectedCapacity(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-ctm-red uppercase cursor-pointer"
          >
            <option value="all">All Capacities</option>
            <option value="standard">Standard (14–23 Pairs)</option>
            <option value="large">High Capacity (24–35 Pairs)</option>
            <option value="mega">Archival Scale (36+ Pairs)</option>
          </select>

          {/* Sort Selector */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-ctm-red uppercase cursor-pointer"
          >
            <option value="featured">Featured Archive</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-ctm-muted mb-6 px-1">
        <span>SHOWING {filteredProducts.length} ARCHITECTURAL UNITS</span>
        {selectedCollection !== "all" && (
          <button
            onClick={() => setSelectedCollection("all")}
            className="text-ctm-red hover:underline uppercase font-bold"
          >
            Clear Collection Filter ×
          </button>
        )}
      </div>

      {/* Product Grid: 4 cols on desktop, 2-3 on tablet, 2 on mobile */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-ctm-border hover:border-black/30 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
            >
              {/* Top metadata */}
              <div className="p-3 sm:p-4 flex items-center justify-between z-10">
                <span className="text-[9px] sm:text-[10px] font-mono text-ctm-muted uppercase">
                  {product.sku}
                </span>
                <Badge variant="default" className="text-[9px] px-1.5 py-0.5">
                  {product.capacity}
                </Badge>
              </div>

              {/* Product Visual */}
              <Link
                href={`/products/${product.slug}`}
                className="relative w-full h-48 sm:h-64 flex items-center justify-center p-4 overflow-hidden bg-ctm-surfaceSubtle/30"
              >
                <Image
                  src={product.images[0]?.url || "/images/products/heat-2-main.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </Link>

              {/* Details & Quick Action */}
              <div className="p-4 pt-3 border-t border-ctm-border bg-white flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-display font-bold text-sm sm:text-base text-black hover:text-ctm-red transition-colors uppercase tracking-wide block truncate"
                  >
                    {product.name}
                  </Link>
                  <p className="text-[11px] text-ctm-lightMuted line-clamp-1 mt-0.5 font-normal">
                    {product.finish}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-ctm-border flex items-center justify-between">
                  <span className="font-mono text-sm sm:text-base font-bold text-black">
                    {formatPrice(product.price)}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="p-1.5 border border-ctm-border text-black hover:text-white hover:bg-ctm-red hover:border-ctm-red transition-all"
                    aria-label={`Inspect ${product.name}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Red Accent Base Hairline */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ctm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-ctm-border bg-white shadow-sm">
          <p className="text-lg font-display text-black uppercase font-bold">
            No matching models found in this archive filter.
          </p>
          <p className="text-xs font-mono text-ctm-muted mt-2">
            Reset search parameters or inquire about a custom bespoke installation.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCollection("all");
              setSelectedCapacity("all");
            }}
            className="mt-6 px-6 py-2.5 bg-black text-white text-xs font-display font-bold uppercase tracking-widest hover:bg-ctm-red transition-colors"
          >
            RESET ALL FILTERS
          </button>
        </div>
      )}
    </div>
  );
}
