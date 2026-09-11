import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy — Creator The Maker",
  description: "Creator The Maker client data protection, privacy standards, and information retention protocols.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <Container size="narrow">
        <SectionHeading
          eyebrow="LEGAL PROTOCOL"
          title="PRIVACY POLICY"
          description="Last updated: January 2026."
        />

        <div className="p-4 bg-red-50 border border-red-200 text-xs font-mono text-ctm-red font-bold mb-8">
          [NOTICE: REPLACE WITH BUSINESS-APPROVED LEGAL COPY PRIOR TO COMMERCIAL LAUNCH]
        </div>

        <div className="bg-white border border-ctm-border p-8 sm:p-12 space-y-8 text-sm text-ctm-lightMuted leading-relaxed font-normal shadow-sm">
          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              1. Information Collection & Archival
            </h2>
            <p>
              Creator The Maker collects client information solely for the purposes
              of order processing, white-glove logistics routing, custom bespoke CAD
              consultations, and verified warranty registration. We respect collector
              confidentiality and do not sell, license, or trade client dossiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              2. Transaction Security & Encrypted Gateways
            </h2>
            <p>
              All payment transactions are tokenized and processed via Stripe or direct
              institutional banking SWIFT wire transfers. Cardholder credentials are never
              stored directly on Creator The Maker servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              3. Communications & WhatsApp Data
            </h2>
            <p>
              Communications conducted through WhatsApp or electronic mail are archived
              strictly for project continuity, architectural revisions, and client support.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
