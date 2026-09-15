import { Collection } from "@/lib/types";

export const COLLECTIONS: Collection[] = [
  {
    id: "col-premium-series",
    slug: "premium-series",
    name: "PREMIUM SERIES",
    tagline: "1mm Mika Coating • 3M Digital UV Prints • 120 Micron HG Matte Lamination",
    description:
      "Our flagship architectural tier. Engineered with 18mm Action/Century Pre-Laminated HDHMR, 1mm architectural Mika surfacing, 3M digital UV graphics, 120-micron high-grade matte lamination, and German Ozone/Hettich soft-close hardware.",
    coverImage: "/images/products/tower-trunk-main.svg",
    itemCount: 4,
    featured: true,
  },
  {
    id: "col-sneaker-trunks",
    slug: "sneaker-trunks",
    name: "SNEAKER TRUNKS",
    tagline: "Hydraulic shocker mobility trunks for grail rotations.",
    description:
      "Standard and Massive sneaker trunks built with 18mm Pre-Laminated HDHMR, 6-wheel buffers, hydraulic lift shockers, and high-resolution UV digital prints.",
    coverImage: "/images/white-studio/standard-sneacker-trunk-studio.jpg",
    itemCount: 2,
    featured: true,
  },
  {
    id: "col-long-trunks",
    slug: "long-trunks",
    name: "LONG TRUNKS",
    tagline: "Low-profile credenzas & double-decker hidden shelf storage.",
    description:
      "High-capacity horizontal monoliths available in standard format and concealed multi-tier hidden shelf configurations holding up to 35 pairs.",
    coverImage: "/images/white-studio/long-trunk-studio.jpg",
    itemCount: 2,
    featured: true,
  },
  {
    id: "col-tower-trunks",
    slug: "tower-trunks",
    name: "TOWER TRUNKS",
    tagline: "Architectural vertical presence and synchronized dual towers.",
    description:
      "Vertical monoliths engineered for collectors maximizing floor-to-ceiling space with Ozone and Hettich precision damping hinges.",
    coverImage: "/images/white-studio/tower-trunk-studio.jpg",
    itemCount: 2,
    featured: true,
  },
  {
    id: "col-wardrobes",
    slug: "wardrobes",
    name: "WARDROBES & CUPBOARDS",
    tagline: "Full-scale 6ft sneaker cupboards with sliding architectural doors.",
    description:
      "Large-capacity 34–38 pair dedicated footwear storage with 8–9 adjustable shelves, smooth sliding tracks, and termite/water-resistant HDHMR substrates.",
    coverImage: "/images/white-studio/wardrobes-studio.jpg",
    itemCount: 2,
    featured: true,
  },
  {
    id: "col-bespoke",
    slug: "bespoke",
    name: "BESPOKE COMMISSIONS",
    tagline: "Custom-commissioned walk-in sneaker rooms and installations.",
    description:
      "All articles are 100% made to order and customisable to any dimension, finish, or capacity for private residences across India.",
    coverImage: "/images/gallery/bespoke-hero.svg",
    itemCount: 1,
    featured: true,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
