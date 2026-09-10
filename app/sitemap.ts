import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data/products";
import { COLLECTIONS } from "@/lib/data/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creator-the-maker.com";

  const staticRoutes = [
    "",
    "/shop",
    "/collections",
    "/bespoke",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/shipping-policy",
    "/returns",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const collectionRoutes = COLLECTIONS.map((col) => ({
    url: `${baseUrl}/collections/${col.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes];
}
