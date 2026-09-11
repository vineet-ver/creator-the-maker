"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Graceful fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      trackEvent({ name: "contact_form_submit", subject: formData.subject });
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-ctm-border p-8 sm:p-12 text-center space-y-4 animate-fade-in shadow-sm">
        <div className="w-12 h-12 bg-white border-2 border-ctm-red flex items-center justify-center mx-auto text-ctm-red shadow-md">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-black uppercase text-black tracking-wide">
          Message Transmitted to Concierge
        </h3>
        <p className="text-xs font-mono text-ctm-lightMuted max-w-md mx-auto leading-relaxed">
          Thank you for contacting Creator The Maker. A design consultant or client
          representative will respond to your inquiry within 24 business hours.
        </p>
        <div className="pt-4">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono uppercase text-ctm-red hover:underline tracking-widest font-bold"
          >
            Submit Another Inquiry →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-ctm-border p-6 sm:p-10 space-y-4 shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Julian Ross"
            className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-3 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="julian@residence.com"
            className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-3 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 019-2834"
            className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-3 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
            Inquiry Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-ctm-surfaceSubtle border border-ctm-border px-3.5 py-3 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white uppercase cursor-pointer"
          >
            <option value="Product Inquiry">Product Inquiry (HEAT / Trunks)</option>
            <option value="Bespoke Consultation">Bespoke Architectural Project</option>
            <option value="Order Tracking">Order Tracking & White-Glove Dispatch</option>
            <option value="Press & Partnership">Press & Architecture Collaboration</option>
            <option value="General Question">General Concierge Question</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5 font-bold">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share details regarding your inquiry, project scope, or questions..."
          className="w-full bg-ctm-surfaceSubtle border border-ctm-border p-3.5 text-xs font-mono text-black focus:outline-none focus:border-ctm-red focus:bg-white leading-relaxed transition-colors"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        size="lg"
        className="w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>TRANSMITTING MESSAGE...</span>
        ) : (
          <>
            <span>SUBMIT CONCIERGE MESSAGE</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
