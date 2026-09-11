import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Refund Policy — Creator The Maker",
  description: "Creator The Maker transaction refunds, dispute management, and deposit terms.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FINANCIAL PROTOCOL"
          title="REFUND POLICY"
          description="Last updated: January 2026."
        />

        <div className="p-4 bg-red-50 border border-red-200 text-xs font-mono text-ctm-red font-bold mb-8">
          [NOTICE: REPLACE WITH BUSINESS-APPROVED LEGAL COPY PRIOR TO COMMERCIAL LAUNCH]
        </div>

        <div className="bg-white border border-ctm-border p-8 sm:p-12 space-y-8 text-sm text-ctm-lightMuted leading-relaxed font-normal shadow-sm">
          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              1. Approved Refund Processing
            </h2>
            <p>
              Once returned hardware is received at our facility and passes technical
              inspection (verifying structural frame alignment, glass integrity, and
              electronics functionality), refunds are credited back to the original
              payment method within 5–7 business days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              2. Deposit Forfeiture Terms for Custom Commissions
            </h2>
            <p>
              For bespoke projects, initial 50% design and material allocation deposits
              are non-refundable after CAD sign-off has been finalized.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
