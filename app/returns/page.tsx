import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Returns Policy — Creator The Maker",
  description: "Creator The Maker returns, damage in transit claims, and replacement policies.",
};

export default function ReturnsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <Container size="narrow">
        <SectionHeading
          eyebrow="CLIENT ASSURANCE"
          title="RETURN POLICY"
          description="Last updated: January 2026."
        />

        <div className="p-4 bg-red-50 border border-red-200 text-xs font-mono text-ctm-red font-bold mb-8">
          [NOTICE: REPLACE WITH BUSINESS-APPROVED LEGAL COPY PRIOR TO COMMERCIAL LAUNCH]
        </div>

        <div className="bg-white border border-ctm-border p-8 sm:p-12 space-y-8 text-sm text-ctm-lightMuted leading-relaxed font-normal shadow-sm">
          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              1. 14-Day Architectural Inspection Period
            </h2>
            <p>
              Catalog items (HEAT and HEAT 2.0) are eligible for return within 14 days
              of delivery provided the unit remains uninstalled, undamaged, and repackaged
              in original factory flight crates. Return freight and restocking fees apply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              2. Custom & Bespoke Commissions
            </h2>
            <p>
              Custom-engineered installations, bespoke dimensions, and personalized
              finish commissions are non-returnable once engineering drawings have been
              client-approved and aluminum extrusion cutting has commenced.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
