import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { ShopCatalog } from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop Collection — Architectural Sneaker Storage",
  description:
    "Explore the complete lineup of Creator The Maker sneaker storage monoliths. HEAT series, Heritage Sneaker Trunks, and vertical Tower Trunks.",
};

export default function ShopPage() {
  return (
    <div className="pt-32 pb-24 bg-ctm-black min-h-screen">
      <Container size="wide">
        <SectionHeading
          eyebrow="PRODUCTION ARCHIVE"
          title="THE HARDWARE"
          description="Monolithic display architectures precision-milled from 6063 aerospace aluminum, low-iron museum glass, and ballistic composites."
        />
        <ShopCatalog />
      </Container>
    </div>
  );
}
