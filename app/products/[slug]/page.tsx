import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/lib/data/products";
import { Container } from "@/ui/Container";
import { ProductDetailView } from "@/components/product/ProductDetailView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — Luxury Sneaker Storage`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} | Creator The Maker`,
      description: product.shortDesc,
      images: [
        {
          url: product.images[0]?.url || "/images/products/heat-2-main.svg",
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img: { url: string }) => img.url),
    description: product.shortDesc,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "Creator The Maker",
    },
    offers: {
      "@type": "Offer",
      url: `https://creator-the-maker.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: product.isAvailable
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <Container size="wide">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-ctm-muted mb-8 uppercase tracking-widest">
          <Link href="/shop" className="hover:text-black transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ARCHIVE</span>
          </Link>
          <span>/</span>
          <Link
            href={`/collections/${product.collectionSlug}`}
            className="hover:text-black transition-colors"
          >
            {product.collectionName}
          </Link>
          <span>/</span>
          <span className="text-black font-bold">{product.name}</span>
        </div>

        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </Container>
    </div>
  );
}
