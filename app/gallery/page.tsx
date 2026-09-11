import React from "react";
import { Metadata } from "next";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GalleryViewer } from "@/components/gallery/GalleryViewer";

export const metadata: Metadata = {
  title: "Completed Installations & Gallery — Creator The Maker",
  description:
    "Explore real-world collector installations, private penthouse sneaker rooms, and custom architectural storage projects engineered by Creator The Maker.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        <SectionHeading
          eyebrow="GLOBAL PORTFOLIO"
          title="INSTALLATIONS"
          description="A curation of residential walk-in vaults, penthouses, and private exhibitions completed across New York, Zurich, London, Beverly Hills, Kyoto, and Dubai."
          align="center"
        />

        <GalleryViewer />
      </Container>
    </div>
  );
}
