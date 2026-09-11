"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/ui/Button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal } =
    useCartStore();
  const subtotal = getSubtotal();
  const [mounted, setMounted] = useState(false);
  const freeShippingThreshold = 2500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l border-ctm-border shadow-2xl flex flex-col justify-between animate-fade-in text-black">
          {/* Header */}
          <div className="p-6 bg-black text-white border-b border-neutral-800 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                Cart Vault
              </h2>
              <p className="text-xs font-mono text-neutral-400 tracking-widest mt-0.5">
                {items.length} {items.length === 1 ? "UNIT ALLOCATED" : "UNITS ALLOCATED"}
              </p>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-neutral-400 hover:text-ctm-red border border-neutral-800 hover:border-ctm-red transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* White Glove Shipping Progress Banner */}
          <div className="px-6 py-3.5 bg-ctm-surfaceSubtle border-b border-ctm-border">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-ctm-lightMuted">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-ctm-red font-bold">
                    ✓ COMPLIMENTARY WHITE-GLOVE UNLOCKED
                  </span>
                ) : (
                  <span>
                    Add {formatPrice(freeShippingThreshold - subtotal)} for White-Glove
                  </span>
                )}
              </span>
              <span className="text-black font-bold font-mono">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-ctm-border">
              <div
                className="h-full bg-ctm-red transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-ctm-borderSubtle">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-dashed border-ctm-border flex items-center justify-center text-ctm-muted">
                  <span className="font-mono text-xs">EMPTY</span>
                </div>
                <p className="text-base font-display text-black font-bold">
                  Your vault is currently empty.
                </p>
                <p className="text-xs text-ctm-muted mt-2 max-w-xs mx-auto">
                  Explore our architectural storage series or commission a custom installation.
                </p>
                <div className="mt-6">
                  <Button
                    onClick={closeCart}
                    variant="outline"
                    size="sm"
                    href="/shop"
                  >
                    DISCOVER HARDWARE
                  </Button>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-6 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 bg-ctm-surfaceSubtle border border-ctm-border shrink-0 overflow-hidden flex items-center justify-center">
                    <Image
                      src={
                        item.product.images[0]?.url ||
                        "/images/products/heat-2-main.svg"
                      }
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
                          onClick={closeCart}
                          className="font-display font-bold text-black text-sm hover:text-ctm-red transition-colors uppercase tracking-wide"
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

                      <div className="mt-1 space-y-0.5 text-[11px] font-mono text-ctm-muted">
                        <p>Finish: {item.selectedFinish}</p>
                        <p>Light: {item.selectedLighting}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-ctm-border bg-white">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-black hover:bg-ctm-surfaceSubtle transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-mono font-bold text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-black hover:bg-ctm-surfaceSubtle transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="font-mono text-sm font-bold text-black">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-ctm-surfaceSubtle border-t border-ctm-border space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-ctm-muted">
                  <span>SUBTOTAL</span>
                  <span className="text-black font-bold">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-ctm-muted">
                  <span>LOGISTICS</span>
                  <span className="text-black">
                    {subtotal >= freeShippingThreshold
                      ? "COMPLIMENTARY WHITE GLOVE"
                      : "CALCULATED AT DISPATCH"}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-ctm-border flex justify-between items-baseline">
                <span className="font-display text-sm font-bold text-black uppercase tracking-wider">
                  Total Allocation
                </span>
                <span className="font-mono text-xl font-bold text-black">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  href="/checkout"
                  onClick={closeCart}
                  variant="accent"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 shadow-md shadow-ctm-red/20"
                >
                  PROCEED TO SECURE CHECKOUT <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  onClick={closeCart}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs font-mono"
                >
                  CONTINUE BROWSING
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-ctm-muted pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-ctm-red" />
                <span>DIRECT FROM STUDIO // 5-YEAR ARCHITECTURAL WARRANTY</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
