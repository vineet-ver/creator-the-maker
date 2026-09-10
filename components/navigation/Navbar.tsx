"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { SearchModal } from "./SearchModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const { openCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Bespoke", href: "/bespoke" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-ctm-border py-4"
            : "bg-gradient-to-b from-black/80 to-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group select-none"
              aria-label="Creator The Maker Home"
            >
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-[0.18em] text-white uppercase group-hover:text-ctm-red transition-colors flex items-center gap-1.5">
                  CREATOR <span className="text-ctm-muted font-normal text-xs sm:text-sm tracking-widest">THE</span> MAKER
                  <span className="inline-block w-1.5 h-1.5 bg-ctm-red ml-0.5" />
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-ctm-muted uppercase">
                  ARCHITECTURAL SNEAKER STORAGE
                </span>
              </div>
            </Link>

            {/* CENTER: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs font-display uppercase tracking-[0.18em] transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-ctm-lightMuted hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ctm-red" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-ctm-lightMuted hover:text-white transition-colors"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Cart Drawer Trigger with Badge */}
              <button
                onClick={openCart}
                className="relative p-2 text-ctm-lightMuted hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="Open cart drawer"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {itemCount > 0 && (
                  <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-ctm-red text-white text-[10px] font-mono font-bold">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-ctm-lightMuted hover:text-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-24 pb-8 px-6 bg-[#080808]/95 backdrop-blur-xl border-b border-ctm-border flex flex-col justify-between animate-fade-in">
          <div className="space-y-6 pt-4">
            <div className="text-[10px] font-mono tracking-widest text-ctm-muted uppercase mb-4">
              ARCHITECTURAL DIRECTORY
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-2xl font-display font-bold uppercase tracking-wider text-white hover:text-ctm-red transition-colors py-2 border-b border-ctm-borderSubtle"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-ctm-muted" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="flex items-center justify-between text-2xl font-display font-bold uppercase tracking-wider text-white hover:text-ctm-red transition-colors py-2 border-b border-ctm-borderSubtle"
            >
              <span>Contact Concierge</span>
              <ArrowUpRight className="w-5 h-5 text-ctm-muted" />
            </Link>
          </div>

          <div className="pt-8 border-t border-ctm-border space-y-3">
            <p className="text-xs font-mono text-ctm-muted">
              STORE YOUR HEAT // ARCHITECTURAL SNEAKER PRESERVATION
            </p>
            <div className="text-[11px] font-mono text-ctm-lightMuted">
              CREATOR THE MAKER STUDIO © 2026
            </div>
          </div>
        </div>
      )}

      {/* Global Search Dialog Overlay */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
