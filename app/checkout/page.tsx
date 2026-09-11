"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, CreditCard, Landmark, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { formatPrice, generateOrderNumber } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = mounted ? getSubtotal() : 0;
  const currentItems = mounted ? items : [];

  const [paymentMethod, setPaymentMethod] = useState<"card" | "wire" | "whatsapp">("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsProcessing(true);

    const orderNumber = generateOrderNumber();

    trackEvent({
      name: "purchase",
      orderNumber,
      value: subtotal,
      itemsCount: items.length,
    });

    // Simulate payment authorization delay for premium feel
    setTimeout(() => {
      // Save order into localStorage for confirmation page
      const orderSummary = {
        orderNumber,
        customerName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}${formData.apartment ? `, ${formData.apartment}` : ""}, ${formData.city}, ${formData.state} ${formData.postalCode}, ${formData.country}`,
        items,
        subtotal,
        total: subtotal,
        paymentMethod,
        date: new Date().toISOString(),
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("ctm-last-order", JSON.stringify(orderSummary));
      }

      clearCart();
      router.push(`/checkout/success?orderNumber=${orderNumber}`);
    }, 1200);
  };

  if (mounted && currentItems.length === 0 && !isProcessing) {
    return (
      <div className="pt-32 pb-24 bg-white min-h-screen">
        <Container size="narrow">
          <div className="py-24 text-center border border-ctm-border bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-display font-black uppercase text-black mb-2">
              Vault is empty
            </h1>
            <p className="text-xs font-mono text-ctm-muted mb-8">
              Please allocate a hardware unit prior to initiating checkout.
            </p>
            <Button href="/shop" variant="primary" size="md">
              RETURN TO ARCHIVE
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        <SectionHeading
          eyebrow="TRANSACTION GATEWAY"
          title="SECURE CHECKOUT"
          description="Studio allocation reservation & logistics manifest dispatch."
        />

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Form: Shipping & Payment Details */}
            <div className="lg:col-span-7 space-y-8">
              {/* 1. Contact & Identity */}
              <div className="bg-white border border-ctm-border p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-ctm-border">
                  <h2 className="text-sm font-mono uppercase tracking-widest text-black font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-ctm-red" />
                    01 // CLIENT RECIPIENT
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Marcus"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Vance"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      Email Address (For Invoicing & Tracking) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="m.vance@residence.com"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      Phone Number (For White-Glove Dispatch) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Destination Manifest */}
              <div className="bg-white border border-ctm-border p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-ctm-border">
                  <h2 className="text-sm font-mono uppercase tracking-widest text-black font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-ctm-red" />
                    02 // RESIDENCE & DELIVERY DESTINATION
                  </h2>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="450 Washington Street"
                    className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      Penthouse / Suite / Floor (Optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      placeholder="Penthouse B"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New York"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      State / Province *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="NY"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="10013"
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white uppercase cursor-pointer"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. Payment Gateway */}
              <div className="bg-white border border-ctm-border p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-ctm-border">
                  <h2 className="text-sm font-mono uppercase tracking-widest text-black font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-ctm-red" />
                    03 // PAYMENT INTEGRATION
                  </h2>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 font-bold">
                    <Lock className="w-3 h-3" />
                    <span>256-BIT ENCRYPTED</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3.5 border flex flex-col items-center justify-center gap-2 text-center transition-all ${
                      paymentMethod === "card"
                        ? "bg-black border-black text-white shadow-md"
                        : "bg-white border-ctm-border text-black hover:border-black"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-ctm-red" />
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                      Stripe Card
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("wire")}
                    className={`p-3.5 border flex flex-col items-center justify-center gap-2 text-center transition-all ${
                      paymentMethod === "wire"
                        ? "bg-black border-black text-white shadow-md"
                        : "bg-white border-ctm-border text-black hover:border-black"
                    }`}
                  >
                    <Landmark className="w-5 h-5 text-ctm-red" />
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                      Wire Transfer
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("whatsapp")}
                    className={`p-3.5 border flex flex-col items-center justify-center gap-2 text-center transition-all ${
                      paymentMethod === "whatsapp"
                        ? "bg-black border-black text-white shadow-md"
                        : "bg-white border-ctm-border text-black hover:border-black"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 text-ctm-red" />
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                      Concierge Pay
                    </span>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4 border-t border-ctm-border animate-fade-in">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                        Card Number (Test Mode: Any valid 16 digits) *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="4242 •••• •••• 4242"
                        className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white tracking-widest transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                          Expiration Date *
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          required
                          value={formData.expiry}
                          onChange={handleChange}
                          placeholder="MM / YY"
                          className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
                          Security Code (CVC) *
                        </label>
                        <input
                          type="text"
                          name="cvc"
                          required
                          value={formData.cvc}
                          onChange={handleChange}
                          placeholder="CVC"
                          className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-2.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "wire" && (
                  <div className="p-4 bg-ctm-surfaceSubtle border border-ctm-border text-xs font-mono text-black space-y-2 animate-fade-in">
                    <p className="font-bold">
                      Direct SWIFT / ACH Wire Transfer:
                    </p>
                    <p className="text-ctm-lightMuted">
                      Upon order placement, you will receive our treasury wire
                      coordinates. Unit production begins immediately upon
                      funds clearance.
                    </p>
                  </div>
                )}

                {paymentMethod === "whatsapp" && (
                  <div className="p-4 bg-ctm-surfaceSubtle border border-ctm-border text-xs font-mono text-black space-y-2 animate-fade-in">
                    <p className="font-bold">
                      Dedicated Concierge Assisted Checkout:
                    </p>
                    <p className="text-ctm-lightMuted">
                      A studio concierge specialist will contact you on WhatsApp
                      to coordinate personalized payment settlement, split-deposit
                      structures, or corporate purchase orders.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Summary Panel: Jet Black Manifest Card */}
            <div className="lg:col-span-5 bg-[#09090B] text-white border border-neutral-800 p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="font-display font-black text-lg uppercase tracking-wider text-white">
                MANIFEST REVIEW ({items.length})
              </h3>

              <div className="space-y-4 divide-y divide-neutral-800 max-h-80 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                    <div className="relative w-16 h-16 bg-neutral-900 border border-neutral-800 shrink-0 flex items-center justify-center p-1">
                      <Image
                        src={item.product.images[0]?.url || "/images/products/heat-2-main.svg"}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <span className="font-display font-bold text-sm uppercase text-white">
                          {item.product.name}
                        </span>
                        <span className="font-mono text-xs font-bold text-white">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono text-neutral-400 mt-0.5">
                        Qty: {item.quantity} • {item.selectedFinish}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-800 pt-4 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>SUBTOTAL</span>
                  <span className="text-white font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>WHITE-GLOVE LOGISTICS</span>
                  <span className="text-ctm-red font-bold">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>ESTIMATED TAX</span>
                  <span className="text-white font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-baseline pt-3 border-t border-neutral-800">
                  <span className="font-display font-bold text-base uppercase text-white">
                    TOTAL
                  </span>
                  <span className="font-mono text-2xl font-black text-white">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                variant="accent"
                size="xl"
                className="w-full flex items-center justify-center gap-2 shadow-lg shadow-ctm-red/30"
              >
                {isProcessing ? (
                  <span>AUTHORIZING TRANSACTION...</span>
                ) : (
                  <>
                    <span>CONFIRM & PLACE ORDER</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>

              <div className="text-[11px] font-mono text-neutral-400 space-y-2 text-center pt-2">
                <p>By placing order you authorize Creator The Maker fabrication terms.</p>
                <div className="flex items-center justify-center gap-1.5 text-ctm-red font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>5-Year Structural Guarantee Active</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
