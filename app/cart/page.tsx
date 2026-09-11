"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = mounted ? getSubtotal() : 0;
  const currentItems = mounted ? items : [];
  const freeShippingThreshold = 2500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        <SectionHeading
          eyebrow="CLIENT ALLOCATION"
          title="VAULT CART"
          description="Review allocated hardware units prior to white-glove logistics scheduling and production reservation."
        />

        {currentItems.length === 0 ? (
          <div className="py-24 text-center border border-ctm-border bg-white max-w-2xl mx-auto p-8 shadow-sm">
            <h2 className="text-xl font-display font-black uppercase text-black mb-2">
              Your vault is empty
            </h2>
            <p className="text-xs font-mono text-ctm-muted mb-8">
              Explore our current collection of sneaker storage monoliths.
            </p>
            <Button href="/shop" variant="primary" size="md">
              BROWSE COLLECTION
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Items Column */}
            <div className="lg:col-span-8 bg-white border border-ctm-border p-6 sm:p-8 divide-y divide-ctm-border shadow-sm">
              {currentItems.map((item) => (
                <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6">
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-32 h-36 bg-ctm-surfaceSubtle/30 border border-ctm-border flex items-center justify-center p-2 shrink-0">
                    <Image
                      src={item.product.images[0]?.url || "/images/products/heat-2-main.svg"}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="text-xl font-display font-bold uppercase text-black hover:text-ctm-red transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-ctm-muted hover:text-ctm-red p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 space-y-1 text-xs font-mono text-ctm-lightMuted">
                        <p>Specification: {item.selectedFinish}</p>
                        <p>Illumination: {item.selectedLighting}</p>
                        <p>Configuration: {item.selectedConfig}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-ctm-border">
                      <div className="flex items-center border border-ctm-border bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-black hover:bg-ctm-surfaceSubtle transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center font-mono text-xs font-bold text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-black hover:bg-ctm-surfaceSubtle transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono text-lg font-bold text-black">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-4 bg-white border border-ctm-border p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-display font-black text-lg uppercase tracking-wider text-black">
                ORDER SUMMARY
              </h3>

              {/* Free shipping threshold bar */}
              <div className="p-4 bg-ctm-surfaceSubtle border border-ctm-border space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-black font-semibold">
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-ctm-red font-bold">
                        WHITE-GLOVE DELIVERY UNLOCKED
                      </span>
                    ) : (
                      <span>
                        Add {formatPrice(freeShippingThreshold - subtotal)} for White-Glove
                      </span>
                    )}
                  </span>
                  <span className="text-black font-bold">{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-200">
                  <div
                    className="h-full bg-ctm-red transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono border-y border-ctm-border py-4">
                <div className="flex justify-between text-ctm-muted">
                  <span>SUBTOTAL</span>
                  <span className="text-black font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-ctm-muted">
                  <span>LOGISTICS</span>
                  <span className="text-black font-medium">
                    {subtotal >= freeShippingThreshold
                      ? "COMPLIMENTARY WHITE-GLOVE"
                      : "CALCULATED AT DISPATCH"}
                  </span>
                </div>
                <div className="flex justify-between text-ctm-muted">
                  <span>INSURANCE</span>
                  <span className="text-black font-medium">FULLY INSURED FREIGHT</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <span className="font-display font-bold text-sm uppercase text-black">
                  TOTAL ESTIMATE
                </span>
                <span className="font-mono text-2xl font-black text-black">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <Button
                href="/checkout"
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="space-y-2 pt-2 text-[11px] font-mono text-black font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-ctm-red shrink-0" />
                  <span>5-Year Architectural Warranty included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-ctm-red shrink-0" />
                  <span>Wooden flight crate packaging</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
