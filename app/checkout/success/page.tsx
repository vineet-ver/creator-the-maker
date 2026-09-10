"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, Printer, MessageCircle, ArrowRight, Package } from "lucide-react";
import confetti from "canvas-confetti";
import { formatPrice } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";

interface StoredOrder {
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: Array<{
    id: string;
    product: { name: string; images: Array<{ url: string }> };
    price: number;
    quantity: number;
    selectedFinish: string;
  }>;
  total: number;
  paymentMethod: string;
  date: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber") || "CTM-2026-CONFIRMED";
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#E11D48", "#FFFFFF", "#333333"],
      });
    } catch {
      // ignore
    }

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ctm-last-order");
      if (saved) {
        try {
          setOrder(JSON.parse(saved));
        } catch {
          // ignore
        }
      }
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <Container size="narrow">
      {/* Success Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="w-16 h-16 bg-ctm-surface border border-ctm-red flex items-center justify-center mx-auto text-ctm-red shadow-lg shadow-ctm-red/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-ctm-red" />
          <span className="text-xs font-mono tracking-widest text-ctm-red uppercase">
            STUDIO RESERVATION CONFIRMED
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
          ORDER CONFIRMED<span className="text-ctm-red">.</span>
        </h1>

        <p className="text-sm font-mono text-ctm-muted">
          Order Reference: <span className="text-white font-bold">{orderNumber}</span>
        </p>
      </div>

      {/* Confirmation Details Card */}
      <div className="bg-ctm-surface border border-ctm-border p-6 sm:p-10 space-y-8">
        {/* Dispatch Timeline */}
        <div className="border border-ctm-borderSubtle bg-black p-6 space-y-4">
          <h3 className="text-xs font-mono tracking-widest text-white uppercase flex items-center gap-2">
            <Package className="w-4 h-4 text-ctm-red" />
            PRODUCTION & LOGISTICS TIMELINE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
            <div className="p-3 border border-ctm-border bg-ctm-surface">
              <span className="text-ctm-red font-bold block">STAGE 01: ALLOCATED</span>
              <span className="text-white mt-1 block">Chassis QA Inspection</span>
              <span className="text-ctm-muted text-[10px] mt-0.5 block">Immediate</span>
            </div>
            <div className="p-3 border border-ctm-border bg-ctm-surface">
              <span className="text-ctm-lightMuted font-bold block">STAGE 02: CRATING</span>
              <span className="text-white mt-1 block">Wooden Flight Crate Build</span>
              <span className="text-ctm-muted text-[10px] mt-0.5 block">24–48 Hours</span>
            </div>
            <div className="p-3 border border-ctm-border bg-ctm-surface">
              <span className="text-ctm-lightMuted font-bold block">STAGE 03: DISPATCH</span>
              <span className="text-white mt-1 block">White-Glove Courier</span>
              <span className="text-ctm-muted text-[10px] mt-0.5 block">3–5 Business Days</span>
            </div>
          </div>
        </div>

        {/* Customer & Address Manifest */}
        {order && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-ctm-borderSubtle text-xs font-mono">
            <div>
              <span className="text-[10px] uppercase text-ctm-muted tracking-widest block mb-1">
                Recipient Information
              </span>
              <p className="text-white font-semibold">{order.customerName}</p>
              <p className="text-ctm-lightMuted">{order.email}</p>
              <p className="text-ctm-lightMuted">{order.phone}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-ctm-muted tracking-widest block mb-1">
                Delivery Destination
              </span>
              <p className="text-ctm-lightMuted">{order.address}</p>
              <span className="inline-block mt-1 text-[10px] text-emerald-400">
                White-Glove In-Room Placement
              </span>
            </div>
          </div>
        )}

        {/* Item Allocation List */}
        {order && order.items && order.items.length > 0 && (
          <div className="pt-4 border-t border-ctm-borderSubtle space-y-4">
            <span className="text-xs font-mono uppercase text-ctm-muted tracking-widest block">
              Allocated Hardware Units:
            </span>

            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-black border border-ctm-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 bg-ctm-surface shrink-0 p-1">
                      <Image
                        src={
                          item.product.images[0]?.url ||
                          "/images/products/heat-2-main.svg"
                        }
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-display font-bold text-white text-sm uppercase">
                        {item.product.name}
                      </span>
                      <span className="block text-[11px] font-mono text-ctm-muted">
                        Qty: {item.quantity} • {item.selectedFinish}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-white">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-baseline pt-4 border-t border-ctm-borderSubtle">
              <span className="font-display font-bold text-sm text-white uppercase">
                Total Settled
              </span>
              <span className="font-mono text-xl font-bold text-white">
                {formatPrice(order.total)}
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-ctm-borderSubtle">
          <Button
            href="/shop"
            variant="primary"
            size="lg"
            className="flex-1 flex items-center justify-center gap-2"
          >
            <span>CONTINUE SHOPPING</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <button
            onClick={handlePrint}
            className="px-6 py-4 bg-ctm-surface hover:bg-black border border-ctm-border hover:border-ctm-lightMuted text-white text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
          >
            <Printer className="w-4 h-4 text-ctm-muted" />
            <span>PRINT RECEIPT</span>
          </button>
        </div>

        {/* WhatsApp Follow-up Support */}
        <div className="text-center pt-2">
          <a
            href={getWhatsAppUrl({ type: "order", orderNumber })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ctm-lightMuted hover:text-ctm-red transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-ctm-red" />
            <span>Connect with Studio Dispatch Specialist on WhatsApp</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <div className="pt-32 pb-24 bg-ctm-black min-h-screen">
      <Suspense
        fallback={
          <div className="text-center py-24 text-xs font-mono text-ctm-muted">
            RESOLVING ORDER MANIFEST...
          </div>
        }
      >
        <SuccessContent />
      </Suspense>
    </div>
  );
}
