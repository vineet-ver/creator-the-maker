import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { BespokeStudioWizard } from "@/components/bespoke/BespokeStudioWizard";

export const metadata: Metadata = {
  title: "Bespoke Architectural Sneaker Rooms — Creator The Maker",
  description:
    "Commission custom walk-in sneaker vaults, floor-to-ceiling monolith arrays, and precision-engineered display chambers designed specifically around your collection and space.",
};

export default function BespokePage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        <SectionHeading
          eyebrow="COMMISSION ATELIER"
          title="BESPOKE STORAGE"
          description="Designed around your collection. Built around your space. Initiate an architectural project dossier with our structural design team."
          align="center"
        />

        <BespokeStudioWizard />
      </Container>
    </div>
  );
}
