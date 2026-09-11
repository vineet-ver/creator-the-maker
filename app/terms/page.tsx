import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions — Creator The Maker",
  description: "Terms of sale, bespoke commission agreements, and architectural hardware warranties.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <Container size="narrow">
        <SectionHeading
          eyebrow="LEGAL PROTOCOL"
          title="TERMS & CONDITIONS"
          description="Last updated: January 2026."
        />

        <div className="p-4 bg-red-50 border border-red-200 text-xs font-mono text-ctm-red font-bold mb-8">
          [NOTICE: REPLACE WITH BUSINESS-APPROVED LEGAL COPY PRIOR TO COMMERCIAL LAUNCH]
        </div>

        <div className="bg-white border border-ctm-border p-8 sm:p-12 space-y-8 text-sm text-ctm-lightMuted leading-relaxed font-normal shadow-sm">
          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              1. Commission & Fabrication Agreement
            </h2>
            <p>
              By purchasing catalog hardware or commissioning a bespoke installation,
              the client acknowledges that each unit is built to architectural
              tolerances from solid aluminum, museum glass, and hand-stitched
              interiors. Lead times vary depending on custom configurations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              2. Intellectual Property & Industrial Design
            </h2>
            <p>
              All proprietary chassis extrusions, kinetic hinge designs, and
              Creator The Maker branding are protected under international copyright
              and design patent conventions.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
