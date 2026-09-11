"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubscribed(true);
    trackEvent({ name: "newsletter_signup" });
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 sm:pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display font-black text-xl tracking-[0.2em] text-white uppercase flex items-center gap-1">
                CREATOR <span className="text-neutral-500 font-normal text-sm">THE</span> MAKER
                <span className="inline-block w-2 h-2 bg-ctm-red ml-1" />
              </span>
              <p className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase mt-1">
                ARCHITECTURAL SNEAKER STORAGE & BESPOKE COMMISSIONS
              </p>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm font-normal leading-relaxed">
              Engineered for grails worth protecting. We design and build
              furniture-grade sneaker preservation chambers, vertical monoliths,
              and walk-in collector vaults.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs font-mono">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-ctm-red tracking-widest uppercase transition-colors"
              >
                Instagram
              </a>
              <a
                href={getWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-ctm-red tracking-widest uppercase transition-colors"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-white uppercase">
              ARCHIVE
            </h3>
            <ul className="space-y-2.5 text-xs font-display tracking-wider uppercase">
              <li>
                <Link href="/shop" className="text-neutral-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-neutral-400 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/products/heat-2-0" className="text-neutral-400 hover:text-white transition-colors">
                  HEAT 2.0
                </Link>
              </li>
              <li>
                <Link href="/products/sneaker-trunk" className="text-neutral-400 hover:text-white transition-colors">
                  Sneaker Trunk
                </Link>
              </li>
              <li>
                <Link href="/products/tower-trunk" className="text-neutral-400 hover:text-white transition-colors">
                  Tower Trunk
                </Link>
              </li>
              <li>
                <Link href="/products/long-trunk" className="text-neutral-400 hover:text-white transition-colors">
                  Long Trunk
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Services */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-white uppercase">
              STUDIO
            </h3>
            <ul className="space-y-2.5 text-xs font-display tracking-wider uppercase">
              <li>
                <Link href="/bespoke" className="text-neutral-400 hover:text-white transition-colors">
                  Bespoke Commissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-white transition-colors">
                  Installations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-white transition-colors">
                  Technical FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Direct Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-white uppercase">
              JOIN THE COLLECTION
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Receive private notifications regarding limited batch releases,
              bespoke allocations, and architectural exhibitions.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-neutral-900 border border-ctm-red/40 text-xs font-mono text-white">
                <CheckCircle2 className="w-4 h-4 text-ctm-red shrink-0" />
                <span>You have been registered for private archive access.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-ctm-red transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-ctm-red text-white hover:bg-ctm-redHover text-xs font-display font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1 shadow-md shadow-ctm-red/20"
                >
                  JOIN <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="text-[10px] font-mono text-neutral-500">
              Zero spam. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {currentYear} CREATOR THE MAKER. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-neutral-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/shipping-policy" className="hover:text-white transition-colors">
              Shipping Policy
            </Link>
            <Link href="/returns" className="hover:text-white transition-colors">
              Return Policy
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
