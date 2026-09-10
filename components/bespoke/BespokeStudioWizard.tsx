"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Layers,
  Ruler,
  Sliders,
  FileText,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { generateBespokeReference } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/ui/Button";

export function BespokeStudioWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    country: "United States",
    sneakerCount: "25–50",
    spaceWidth: "",
    spaceHeight: "",
    spaceDepth: "",
    installationType: "Floor-to-Ceiling Monolith",
    preferredStyle: "Architectural Obsidian",
    finish: "Anodized Matte Black",
    material: "Aerospace 6063 Aluminum & Tempered Glass",
    lighting: "Tunable Circadian White (3000K-5000K)",
    requirements: "",
    referenceImages: [
      "loft_dressing_room_layout.png",
      "grail_rotation_reference.jpg",
    ],
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      trackEvent({ name: "bespoke_form_start" });
    }
    setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ref = generateBespokeReference();

    // Call /api/bespoke endpoint
    try {
      await fetch("/api/bespoke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, referenceCode: ref }),
      });
    } catch {
      // Handled gracefully in mock mode
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(ref);

      trackEvent({
        name: "bespoke_form_submit",
        referenceCode: ref,
        sneakerCount: formData.sneakerCount,
      });

      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#E11D48", "#FFFFFF", "#2B2B2B"],
        });
      } catch {
        // ignore
      }
    }, 1000);
  };

  // SUCCESS SCREEN
  if (submittedRef) {
    return (
      <div className="bg-ctm-surface border border-ctm-border p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="w-16 h-16 bg-black border border-ctm-red flex items-center justify-center mx-auto text-ctm-red shadow-xl shadow-ctm-red/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-ctm-red" />
          <span className="text-xs font-mono tracking-widest text-ctm-red uppercase">
            COMMISSION DOSSIER TRANSMITTED
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
          BESPOKE REQUEST RECEIVED<span className="text-ctm-red">.</span>
        </h2>

        <div className="p-4 bg-black border border-ctm-borderSubtle text-xs font-mono">
          <span className="text-ctm-muted block uppercase mb-1">
            Archival Reference ID:
          </span>
          <span className="text-white text-lg font-bold tracking-widest">
            {submittedRef}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-ctm-muted leading-relaxed max-w-lg mx-auto">
          Our Senior Architectural Project Director will review your spatial
          dimensions, footwear capacity requirements, and aesthetic
          specifications. A formal concept proposal and 3D CAD study will be
          dispatched within 48 hours.
        </p>

        {/* WhatsApp Immediate Transfer */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppUrl({
              type: "bespoke",
              referenceId: submittedRef,
              sneakerCount: formData.sneakerCount,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-ctm-surface hover:bg-black border border-ctm-red text-white text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-ctm-red" />
            <span>DISCUSS VIA WHATSAPP CONCIERGE NOW</span>
          </a>

          <Button href="/" variant="outline" size="md">
            RETURN TO SHOWROOM
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step Progress Tracker */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <span className="text-ctm-lightMuted tracking-widest uppercase">
            STAGE 0{currentStep} // 0{totalSteps}:{" "}
            {currentStep === 1 && "Personal Information"}
            {currentStep === 2 && "Collection Scale"}
            {currentStep === 3 && "Space Dimensions"}
            {currentStep === 4 && "Design Language"}
            {currentStep === 5 && "Spatial Requirements"}
            {currentStep === 6 && "Reference Imagery"}
            {currentStep === 7 && "Review & Commission"}
          </span>
          <span className="text-ctm-red font-bold font-mono">
            {Math.round((currentStep / totalSteps) * 100)}%
          </span>
        </div>

        <div className="w-full h-1 bg-ctm-border">
          <div
            className="h-full bg-ctm-red transition-all duration-400"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Wizard Form Container */}
      <div className="bg-ctm-surface border border-ctm-border p-6 sm:p-12">
        {/* STEP 1: PERSONAL INFORMATION */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                01. Client Identification
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Provide your primary contact coordinates for architectural consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Alexander Wright"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="alexander@domain.com"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 234-5678"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  WhatsApp Number (For Instant CAD Transmissions)
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => updateField("whatsapp", e.target.value)}
                  placeholder="+1 (555) 234-5678"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  City / Location *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="Los Angeles, CA"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Country *
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  placeholder="United States"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: COLLECTION SCALE */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                02. Collection Scale
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Select your approximate sneaker count requiring immediate and projected display capacity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["1–10", "10–25", "25–50", "50–100", "100+"].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => updateField("sneakerCount", tier)}
                  className={`p-6 border text-center transition-all ${
                    formData.sneakerCount === tier
                      ? "bg-ctm-surfaceActive border-ctm-red text-white ring-1 ring-ctm-red"
                      : "bg-black border-ctm-border text-ctm-muted hover:border-ctm-lightMuted"
                  }`}
                >
                  <span className="font-display font-extrabold text-2xl text-white block">
                    {tier}
                  </span>
                  <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest mt-1 block">
                    Pairs Capacity
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: SPACE DIMENSIONS */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                03. Spatial Dimensions
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Estimate the available room or wall dimensions (millimeters or inches).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Available Width
                </label>
                <input
                  type="text"
                  value={formData.spaceWidth}
                  onChange={(e) => updateField("spaceWidth", e.target.value)}
                  placeholder="e.g. 3200 mm (126 in)"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Available Height (Ceiling)
                </label>
                <input
                  type="text"
                  value={formData.spaceHeight}
                  onChange={(e) => updateField("spaceHeight", e.target.value)}
                  placeholder="e.g. 2800 mm (110 in)"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Available Depth
                </label>
                <input
                  type="text"
                  value={formData.spaceDepth}
                  onChange={(e) => updateField("spaceDepth", e.target.value)}
                  placeholder="e.g. 600 mm (24 in)"
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                Structural Configuration
              </label>
              <select
                value={formData.installationType}
                onChange={(e) => updateField("installationType", e.target.value)}
                className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red uppercase"
              >
                <option value="Floor-to-Ceiling Monolith">
                  Floor-to-Ceiling Architectural Monolith
                </option>
                <option value="Flush-Mounted Wall Vitrines">
                  Flush-Mounted Recessed Wall Vitrines
                </option>
                <option value="Freestanding Room Divider Plinth">
                  Freestanding Room Divider Plinth
                </option>
                <option value="Walk-In Vault Room (Full Suite)">
                  Walk-In Vault Room (Full Suite Transformation)
                </option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 4: DESIGN LANGUAGE */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                04. Material & Architectural Language
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Customize the alloy finish, glass treatment, and ambient illumination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Chassis Finish
                </label>
                <select
                  value={formData.finish}
                  onChange={(e) => updateField("finish", e.target.value)}
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red uppercase"
                >
                  <option value="Anodized Matte Black">Anodized Matte Obsidian</option>
                  <option value="Brushed Gunmetal Titanium">Brushed Gunmetal Titanium</option>
                  <option value="Raw Satin Aluminum">Raw Architectural Silver</option>
                  <option value="Textured Carbon Composite">Textured Carbon Composite</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                  Illumination Architecture
                </label>
                <select
                  value={formData.lighting}
                  onChange={(e) => updateField("lighting", e.target.value)}
                  className="w-full bg-black border border-ctm-border px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-ctm-red uppercase"
                >
                  <option value="Tunable Circadian White (3000K-5000K)">
                    Tunable Circadian White (3000K–5000K)
                  </option>
                  <option value="Pure Studio 4500K Linear Arrays">
                    Pure Studio 4500K Linear Arrays
                  </option>
                  <option value="Warm Horizon 2700K Museum Glow">
                    Warm Horizon 2700K Museum Glow
                  </option>
                  <option value="Smart RGBW App Automated Matrix">
                    Smart RGBW App Automated Matrix
                  </option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: SPECIAL REQUIREMENTS */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                05. Bespoke Requirements
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Describe specific features (e.g. biometric lock, motorized doors, humidity buffer, integrated sneaker bench).
              </p>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-ctm-muted mb-1.5">
                Detailed Spatial & Functional Scope
              </label>
              <textarea
                rows={6}
                value={formData.requirements}
                onChange={(e) => updateField("requirements", e.target.value)}
                placeholder="We are converting a 4m x 3.5m dressing room into a climate-controlled sneaker gallery. Require motorized soft-lift vitrines for top tier grails, integrated bench seating, and smart lighting synced to Crestron..."
                className="w-full bg-black border border-ctm-border p-4 text-xs font-mono text-white focus:outline-none focus:border-ctm-red leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* STEP 6: REFERENCE IMAGES */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                06. Reference Imagery & Floorplans
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Upload room photographs, architectural floorplans, or inspirational references.
              </p>
            </div>

            <div className="border-2 border-dashed border-ctm-border hover:border-ctm-red p-8 text-center bg-black/40 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-ctm-red mx-auto mb-3" />
              <p className="text-sm font-display font-bold text-white uppercase">
                Drag and drop architectural floorplans or photos
              </p>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Supports PNG, JPG, PDF, DWG up to 50MB
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-ctm-muted uppercase tracking-widest">
                Attached Reference Files:
              </span>
              {formData.referenceImages.map((file, i) => (
                <div
                  key={i}
                  className="p-3 bg-black border border-ctm-border flex items-center justify-between text-xs font-mono text-white"
                >
                  <span className="text-ctm-lightMuted">{file}</span>
                  <span className="text-emerald-400 text-[10px]">READY FOR TRANSMISSION</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 7: REVIEW & SUBMIT */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                07. Commission Review
              </h2>
              <p className="text-xs font-mono text-ctm-muted mt-1">
                Review your architectural dossier before transmitting to our engineering studio.
              </p>
            </div>

            <div className="bg-black border border-ctm-borderSubtle p-6 space-y-4 text-xs font-mono divide-y divide-ctm-borderSubtle">
              <div className="flex justify-between items-baseline pt-2 first:pt-0">
                <span className="text-ctm-muted uppercase">Client:</span>
                <span className="text-white font-bold">{formData.name || "Alexander Wright"}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-ctm-muted uppercase">Contact:</span>
                <span className="text-white">{formData.email} • {formData.phone}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-ctm-muted uppercase">Collection Scale:</span>
                <span className="text-white font-bold">{formData.sneakerCount} Pairs</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-ctm-muted uppercase">Configuration:</span>
                <span className="text-white">{formData.installationType}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-ctm-muted uppercase">Finish:</span>
                <span className="text-white">{formData.finish}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-ctm-muted uppercase">Illumination:</span>
                <span className="text-white">{formData.lighting}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-10 pt-6 border-t border-ctm-borderSubtle flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 border border-ctm-border text-xs font-mono uppercase tracking-widest text-ctm-lightMuted hover:text-white hover:border-ctm-lightMuted transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS STAGE</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3.5 bg-white text-black text-xs font-display font-bold uppercase tracking-wider hover:bg-ctm-red hover:text-white transition-colors flex items-center gap-2"
            >
              <span>NEXT STAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="px-8 py-3.5 bg-ctm-red text-white text-xs font-display font-bold uppercase tracking-wider hover:bg-ctm-redHover transition-colors flex items-center gap-2 shadow-lg shadow-ctm-red/20"
            >
              {isSubmitting ? (
                <span>TRANSMITTING DOSSIER...</span>
              ) : (
                <>
                  <span>SUBMIT BESPOKE REQUEST</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
