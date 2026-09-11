import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Shipping Policy & Logistics — Creator The Maker",
  description: "White-glove delivery, flight crating standards, and international freight protocols.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <Container size="narrow">
        <SectionHeading
          eyebrow="LOGISTICS PROTOCOL"
          title="SHIPPING POLICY"
          description="Flight crating and white-glove in-room placement."
        />

        <div className="p-4 bg-red-50 border border-red-200 text-xs font-mono text-ctm-red font-bold mb-8">
          [NOTICE: REPLACE WITH BUSINESS-APPROVED LEGAL COPY PRIOR TO COMMERCIAL LAUNCH]
        </div>

        <div className="bg-white border border-ctm-border p-8 sm:p-12 space-y-8 text-sm text-ctm-lightMuted leading-relaxed font-normal shadow-sm">
          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              1. Specialized Flight Crating
            </h2>
            <p>
              Due to the structural weight and precision museum glass used in all
              Creator The Maker monoliths, items are never dispatched in standard
              corrugated boxes. All units travel in reinforced wooden flight crates
              lined with custom shock-absorbing EVA foam and calibrated tilt indicators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-display font-black uppercase tracking-wider text-black">
              2. White-Glove In-Room Delivery
            </h2>
            <p>
              For our larger architectural items (Tower Trunk, Sneaker Trunk, and Long
              Trunk), complimentary White-Glove delivery is standard across North
              America, Europe, and select international capitals. Couriers uncrate,
              level, position, and remove all packaging debris.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
