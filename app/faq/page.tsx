import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQ_DATA } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Technical FAQ & Documentation — Creator The Maker",
  description:
    "Frequently asked questions regarding Creator The Maker products, museum UV shielding glass, linear LED thermal footprints, white-glove shipping, and bespoke commissions.",
};

export default function FAQPage() {
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Container size="wide">
        <SectionHeading
          eyebrow="TECHNICAL INTELLIGENCE"
          title="FREQUENTLY ASKED"
          description="Everything you need to know about preservation science, aerospace joinery, logistics protocols, and bespoke project commissioning."
          align="center"
        />

        <FAQAccordion />
      </Container>
    </div>
  );
}
