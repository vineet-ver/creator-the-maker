"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Shield,
  Truck,
  Check,
  MessageCircle,
  Plus,
  Minus,
  Maximize2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { Product, ProductVariant } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store/useCartStore";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const router = useRouter();
  const { addItem, openCart } = useCartStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("specs");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Dynamic price calculation based on variant
  const currentPrice = product.price + (selectedVariant?.priceOffset || 0);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, {
      quantity,
      finish: selectedVariant?.finish || product.finish,
      lighting: selectedVariant?.lighting || "Studio White",
      config: selectedVariant?.configuration || "Standard",
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="w-full">
      {/* Main Two-Column Architectural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Gallery & Lightbox */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Display Stage */}
          <div className="relative w-full h-[450px] sm:h-[620px] bg-ctm-surfaceSubtle/40 border border-ctm-border overflow-hidden flex items-center justify-center p-8 group shadow-sm">
            <Image
              src={
                product.images[selectedImageIndex]?.url ||
                product.images[0]?.url ||
                "/images/products/heat-2-main.svg"
              }
              alt={product.images[selectedImageIndex]?.alt || product.name}
              fill
              priority
              className="object-contain p-6 transition-all duration-500 ease-out"
            />

            {/* Fullscreen Lightbox Trigger */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 p-2.5 bg-white border border-ctm-border text-black hover:bg-black hover:text-white hover:border-black transition-colors shadow-sm"
              aria-label="Enlarge image preview"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Image Counter & Spec Tag */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-white border border-ctm-border text-[10px] font-mono tracking-widest text-black uppercase font-bold shadow-sm">
              VIEW 0{selectedImageIndex + 1} // 0{product.images.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative h-24 sm:h-28 bg-white border p-2 flex items-center justify-center overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === idx
                      ? "border-ctm-red ring-2 ring-ctm-red"
                      : "border-ctm-border hover:border-black"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Product Configurator & Purchasing */}
        <div className="lg:col-span-5 space-y-8">
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-ctm-muted tracking-widest uppercase">
                {product.sku}
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ctm-red animate-pulse" />
                <span className="text-[10px] font-mono text-black font-bold uppercase tracking-widest">
                  AVAILABLE // STUDIO ALLOCATION
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase text-black tracking-tight leading-none">
              {product.name}
            </h1>

            <p className="text-sm font-display text-ctm-lightMuted font-semibold">
              {product.tagline}
            </p>

            <div className="pt-2 flex items-baseline gap-4">
              <span className="font-mono text-3xl font-bold text-black">
                {formatPrice(currentPrice)}
              </span>
              {product.compareAtPrice && (
                <span className="font-mono text-sm text-ctm-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              <span className="text-[11px] font-mono text-ctm-muted">
                (INCLUDES WHITE-GLOVE LOGISTICS)
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-ctm-lightMuted leading-relaxed font-normal border-t border-ctm-border pt-4">
            {product.shortDesc}
          </p>

          {/* Variant Selector (Finish / Configuration) */}
          {product.variants.length > 0 && (
            <div className="space-y-4 border-t border-ctm-border pt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono tracking-widest text-black uppercase font-bold">
                  Select Architectural Specification:
                </label>
                <span className="text-xs font-mono text-ctm-red font-bold">
                  {selectedVariant?.name}
                </span>
              </div>

              <div className="space-y-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-full p-3.5 text-left border flex items-center justify-between transition-all duration-200 ${
                      selectedVariant?.id === variant.id
                        ? "bg-black border-black text-white shadow-md"
                        : "bg-white border-ctm-border text-black hover:border-black"
                    }`}
                  >
                    <div>
                      <div
                        className={`font-display font-bold text-xs sm:text-sm uppercase tracking-wide ${
                          selectedVariant?.id === variant.id ? "text-white" : "text-black"
                        }`}
                      >
                        {variant.finish}
                      </div>
                      <div
                        className={`text-[11px] font-mono mt-0.5 ${
                          selectedVariant?.id === variant.id ? "text-zinc-300" : "text-ctm-muted"
                        }`}
                      >
                        Lighting: {variant.lighting} • {variant.configuration}
                      </div>
                    </div>

                    <div className="text-right">
                      {variant.priceOffset > 0 ? (
                        <span
                          className={`text-xs font-mono font-bold ${
                            selectedVariant?.id === variant.id ? "text-ctm-red" : "text-black"
                          }`}
                        >
                          +{formatPrice(variant.priceOffset)}
                        </span>
                      ) : (
                        <span
                          className={`text-[10px] font-mono ${
                            selectedVariant?.id === variant.id ? "text-zinc-300" : "text-ctm-muted"
                          }`}
                        >
                          STANDARD
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Actions */}
          <div className="space-y-3 pt-4 border-t border-ctm-border">
            <div className="flex items-center gap-4">
              {/* Quantity selector */}
              <div className="flex items-center border border-ctm-border bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-12 flex items-center justify-center text-black hover:bg-ctm-surfaceSubtle transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-mono text-sm font-bold text-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-12 flex items-center justify-center text-black hover:bg-ctm-surfaceSubtle transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="lg"
                className="flex-1 text-xs sm:text-sm"
              >
                ADD TO CART • {formatPrice(currentPrice * quantity)}
              </Button>
            </div>

            {/* Instant Buy Now */}
            <Button
              onClick={handleBuyNow}
              variant="accent"
              size="lg"
              className="w-full text-xs sm:text-sm"
            >
              PROCEED TO IMMEDIATE CHECKOUT
            </Button>

            {/* Direct WhatsApp Concierge Button */}
            <a
              href={getWhatsAppUrl({
                type: "product",
                productName: product.name,
                variant: selectedVariant?.name,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-white hover:bg-black hover:text-white border-2 border-black text-black flex items-center justify-center gap-2 text-xs font-display font-bold uppercase tracking-wider transition-colors shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 text-ctm-red group-hover:text-white transition-colors" />
              <span>CONSULT ON WHATSAPP REGARDING THIS MODEL</span>
            </a>
          </div>

          {/* Value Assurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[10px] sm:text-[11px] font-mono text-black font-bold">
            <div className="flex items-center gap-2 p-2.5 bg-ctm-surfaceSubtle border border-ctm-border">
              <Shield className="w-4 h-4 text-ctm-red shrink-0" />
              <span>TERMITE & WATER RESISTANT</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-ctm-surfaceSubtle border border-ctm-border">
              <Truck className="w-4 h-4 text-ctm-red shrink-0" />
              <span>PAN-INDIA FREIGHT INCLUDED</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-red-50 border border-red-200 text-ctm-red">
              <span className="w-2 h-2 rounded-full bg-ctm-red animate-pulse shrink-0" />
              <span>100% CUSTOMISABLE SPECS</span>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED SPECIFICATIONS & EDITORIAL STORY SECTION */}
      <div className="mt-24 pt-16 border-t border-ctm-border space-y-16">
        {/* Architectural Narrative Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono tracking-widest text-ctm-red uppercase block mb-2 font-bold">
              CURATORIAL ARCHIVE
            </span>
            <h2 className="text-3xl font-display font-black uppercase text-black tracking-wide">
              THE DESIGN ETHOS
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-ctm-lightMuted font-light leading-relaxed">
            <p>{product.longDesc}</p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-black font-semibold">
                  <Check className="w-4 h-4 text-ctm-red shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Data Sheet Table */}
        <div className="bg-[#09090B] text-white border border-neutral-800 p-6 sm:p-10 shadow-xl">
          <h3 className="text-lg font-display font-black uppercase tracking-wider text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-ctm-red animate-pulse" />
            TECHNICAL SPECIFICATIONS SPEC SHEET
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 divide-y md:divide-y-0 divide-neutral-800">
            {product.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="py-3 border-b border-neutral-800 flex items-baseline justify-between text-xs font-mono"
              >
                <span className="text-neutral-400 uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-white font-bold text-right pl-4">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Accordions: Shipping, Care, Warranty */}
        <div className="space-y-4 max-w-4xl mx-auto divide-y divide-ctm-border">
          {/* Shipping Accordion */}
          <div className="pt-4 first:pt-0">
            <button
              onClick={() => toggleAccordion("shipping")}
              className="w-full py-4 text-left flex items-center justify-between font-display font-bold text-base uppercase text-black hover:text-ctm-red transition-colors"
            >
              <span>WHITE-GLOVE LOGISTICS & INSTALLATION</span>
              <ChevronDown
                className={`w-4 h-4 text-ctm-muted transition-transform ${
                  activeAccordion === "shipping" ? "rotate-180 text-ctm-red" : ""
                }`}
              />
            </button>
            {activeAccordion === "shipping" && (
              <div className="pb-6 text-sm text-ctm-lightMuted font-normal leading-relaxed space-y-2">
                <p>{product.shippingInfo}</p>
                <p>
                  Every unit is packed in a military-grade wooden flight crate
                  with dual G-force impact and tilt sensors. Our logistics
                  partners uncrate, position, level, and power-test the unit
                  directly inside your residence.
                </p>
              </div>
            )}
          </div>

          {/* Warranty Accordion */}
          <div className="pt-4">
            <button
              onClick={() => toggleAccordion("warranty")}
              className="w-full py-4 text-left flex items-center justify-between font-display font-bold text-base uppercase text-black hover:text-ctm-red transition-colors"
            >
              <span>ARCHITECTURAL 5-YEAR LIMITED WARRANTY</span>
              <ChevronDown
                className={`w-4 h-4 text-ctm-muted transition-transform ${
                  activeAccordion === "warranty" ? "rotate-180 text-ctm-red" : ""
                }`}
              />
            </button>
            {activeAccordion === "warranty" && (
              <div className="pb-6 text-sm text-ctm-lightMuted font-normal leading-relaxed space-y-2">
                <p>
                  Creator The Maker provides comprehensive structural and frame
                  coverage against material fatigue, anodizing defects, and
                  kinetic hinge failure for five full years from delivery.
                </p>
                <p>
                  LED linear arrays, touch dimmers, and power transformers carry
                  a 3-year replacement guarantee with modular plug-and-play
                  replacement modules shipped express worldwide.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Hardware Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-ctm-border">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-black tracking-wide">
                COMPLEMENTARY HARDWARE
              </h3>
              <Link
                href="/shop"
                className="text-xs font-mono uppercase tracking-widest text-black hover:text-ctm-red transition-colors flex items-center gap-1 font-bold"
              >
                VIEW FULL ARCHIVE <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white border border-ctm-border hover:border-black p-6 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="relative w-full h-48 mb-4 bg-ctm-surfaceSubtle/30">
                    <Image
                      src={rel.images[0]?.url || "/images/products/heat-2-main.svg"}
                      alt={rel.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-ctm-muted uppercase">
                      {rel.sku}
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <h4 className="font-display font-bold text-black text-base uppercase group-hover:text-ctm-red transition-colors">
                        {rel.name}
                      </h4>
                      <span className="font-mono text-sm font-bold text-black">
                        {formatPrice(rel.price)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={
                product.images[selectedImageIndex]?.url ||
                product.images[0]?.url ||
                "/images/products/heat-2-main.svg"
              }
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white text-xs font-mono uppercase border border-ctm-border px-4 py-2 hover:border-ctm-red transition-colors"
          >
            CLOSE ESC
          </button>
        </div>
      )}
    </div>
  );
}
