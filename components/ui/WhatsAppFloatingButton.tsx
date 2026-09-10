"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppFloatingButton() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleClick = () => {
    trackEvent({
      name: "whatsapp_click",
      location: "floating_button",
    });
    window.open(getWhatsAppUrl({ type: "general" }), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Mini Dismissible Tooltip for New Visitors */}
      {isTooltipOpen && (
        <div className="hidden sm:flex items-center gap-3 bg-ctm-surface border border-ctm-border px-4 py-2.5 shadow-2xl text-xs font-mono text-white animate-fade-in">
          <span>Need architectural guidance? Speak with a specialist.</span>
          <button
            onClick={() => setIsTooltipOpen(false)}
            className="text-ctm-muted hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Concierge Action Pill */}
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 bg-ctm-surface/90 hover:bg-black border border-ctm-borderLight hover:border-ctm-red text-white px-4 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
        aria-label="Contact via WhatsApp Concierge"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-ctm-red group-hover:rotate-6 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-ctm-red rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-ctm-red rounded-full" />
        </div>
        <span className="hidden md:inline-block text-xs font-display font-bold uppercase tracking-wider">
          Studio Concierge
        </span>
      </button>
    </div>
  );
}
