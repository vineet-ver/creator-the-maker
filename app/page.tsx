import React from "react";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { CollectionGrid } from "@/components/home/CollectionGrid";
import { BrandStory } from "@/components/home/BrandStory";
import { BespokeTeaser } from "@/components/home/BespokeTeaser";
import { InstagramCuration } from "@/components/home/InstagramCuration";
import { FAQPreview } from "@/components/home/FAQPreview";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <FeaturedProducts />
      <ProductShowcase />
      <CollectionGrid />
      <BrandStory />
      <BespokeTeaser />
      <InstagramCuration />
      <FAQPreview />
    </div>
  );
}
