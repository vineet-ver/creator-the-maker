import { Collection } from "@/lib/types";

export const COLLECTIONS: Collection[] = [
  {
    id: "col-heat-series",
    slug: "heat-series",
    name: "HEAT SERIES",
    tagline: "Precision climate-shielded monolithic showcases.",
    description:
      "Engineered with aerospace-grade anodized aluminum frames, 99.2% UV-protective museum glass, and zero-heat emission light arrays. Built for grails that demand preservation without aesthetic compromise.",
    coverImage: "/images/products/heat-2-main.svg",
    itemCount: 2,
    featured: true,
  },
  {
    id: "col-sneaker-trunks",
    slug: "sneaker-trunks",
    name: "SNEAKER TRUNKS",
    tagline: "Transatlantic luxury travel luggage re-engineered for the modern collector.",
    description:
      "Handcrafted composite shells, custom brass corner protectors, and micro-suede pull-out display drawers with integrated cordless power systems.",
    coverImage: "/images/products/sneaker-trunk-main.svg",
    itemCount: 1,
    featured: true,
  },
  {
    id: "col-tower-trunks",
    slug: "tower-trunks",
    name: "TOWER TRUNKS",
    tagline: "Architectural vertical presence for high-density collections.",
    description:
      "2.2-meter vertical monoliths featuring individual sealed presentation compartments, smartphone lighting control, and floor-to-ceiling modular stacking.",
    coverImage: "/images/products/tower-trunk-main.svg",
    itemCount: 1,
    featured: true,
  },
  {
    id: "col-long-trunks",
    slug: "long-trunks",
    name: "LONG TRUNKS",
    tagline: "Low-profile credenzas and seating plinths for luxury interiors.",
    description:
      "Subtle architectural furniture that combines structural bench seating with motorized smoked-glass display vaults for signature footwear rotations.",
    coverImage: "/images/products/long-trunk-main.svg",
    itemCount: 1,
    featured: true,
  },
  {
    id: "col-bespoke",
    slug: "bespoke",
    name: "BESPOKE ARCHITECTURAL",
    tagline: "Custom-commissioned walk-in sneaker rooms and installations.",
    description:
      "Complete custom engineering tailored to your private residence, penthouse, or gallery. Any dimension, any material, any capacity.",
    coverImage: "/images/gallery/bespoke-hero.svg",
    itemCount: 1,
    featured: true,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
