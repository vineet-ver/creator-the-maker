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
    <div className="pt-32 pb-24 bg-ctm-black min-h-screen text-white">
      <Container size="narrow">
        <SectionHeading
          eyebrow="LEGAL PROTOCOL"
          title="PRIVACY POLICY"
          description="Last updated: January 2026."
        />

        <div className="p-4 bg-ctm-red/10 border border-ctm-red/30 text-xs font-mono text-ctm-red mb-8">
          [NOTICE: REPLACE WITH BUSINESS-APPROVED LEGAL COPY PRIOR TO COMMERCIAL LAUNCH]
        </div>

        <div className="bg-ctm-surface border border-ctm-border p-8 sm:p-12 space-y-8 text-sm text-ctm-muted leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-base font-display font-bold uppercase tracking-wider text-white">
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
            <h2 className="text-base font-display font-bold uppercase tracking-wider text-white">
              2. Transaction Security & Encrypted Gateways
            </h2>
            <p>
              All payment transactions are tokenized and processed via Stripe or direct
              institutional banking SWIFT wire transfers. Cardholder credentials are never
              stored directly on Creator The Maker servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-bold uppercase tracking-wider text-white">
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
