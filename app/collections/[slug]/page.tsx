import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { COLLECTIONS, getCollectionBySlug } from "@/lib/data/collections";
import { PRODUCTS, getProductsByCollection } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: `${collection.name} — Creator The Maker`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(slug);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container size="wide">
        {/* Back Link */}
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ctm-muted hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>ALL COLLECTIONS</span>
        </Link>

        {/* Collection Hero Banner */}
        <div className="relative bg-ctm-surfaceSubtle border border-ctm-border p-8 sm:p-16 mb-16 overflow-hidden shadow-sm">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-ctm-red" />
              <span className="text-xs font-mono tracking-widest text-ctm-red uppercase">
                DIVISION SPECIFICATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-black tracking-tight leading-none">
              {collection.name}
            </h1>
            <p className="text-lg text-ctm-lightMuted font-display font-semibold">
              {collection.tagline}
            </p>
            <p className="text-sm text-ctm-muted leading-relaxed font-normal pt-2">
              {collection.description}
            </p>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <Image
              src={collection.coverImage}
              alt={collection.name}
              fill
              className="object-contain p-8"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-ctm-border">
            <span className="text-xs font-mono text-ctm-muted uppercase tracking-widest">
              HARDWARE ARCHIVES ({products.length})
            </span>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: Product) => {
                const isPremium = slug === "premium-series";

                if (isPremium) {
                  return (
                    <div
                      key={product.id}
                      className="premium-box-dark group"
                    >
                      <div className="premium-inner-dark flex flex-col justify-between p-6 relative border border-zinc-900 overflow-hidden">
                        <div className="shimmer-overlay" />

                        <div className="p-2 flex items-center justify-between z-10 mb-4">
                          <span className="px-2 py-0.5 bg-ctm-red text-white text-[9px] font-mono font-bold tracking-widest uppercase">
                            PREMIUM SERIES
                          </span>
                          <span className="text-[10px] font-mono text-neutral-300 bg-[#0A0A0D] border border-zinc-800 px-2 py-0.5">
                            {product.capacity}
                          </span>
                        </div>

                        <Link
                          href={`/products/${product.slug}`}
                          className="relative w-full h-64 flex items-center justify-center p-6 overflow-hidden bg-[#040406] border border-zinc-900 group-hover:border-neutral-700/60 transition-all mb-4"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                          <Image
                            src={product.images[0]?.url || "/images/products/tower-trunk-main.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-700 ease-out"
                          />
                        </Link>

                        <div className="space-y-3 z-10 pt-2 border-t border-zinc-900">
                          <div className="flex items-baseline justify-between">
                            <Link
                              href={`/products/${product.slug}`}
                              className="font-display font-black text-xl text-white group-hover:text-ctm-red transition-colors uppercase"
                            >
                              {product.name}
                            </Link>
                            <span className="font-mono text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                              {formatPrice(product.price)}
                            </span>
                          </div>

                          <p className="text-xs text-neutral-400 line-clamp-2 font-normal">
                            {product.shortDesc}
                          </p>

                          <div className="pt-2">
                            <Button
                              href={`/products/${product.slug}`}
                              variant="primary"
                              size="sm"
                              className="w-full flex items-center justify-center gap-2 shadow-lg shadow-ctm-red/25"
                            >
                              <span>INSPECT UNIT</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={product.id}
                    className="group bg-white border border-ctm-border hover:border-black/30 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
                  >
                    <div className="p-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-ctm-muted uppercase">
                        {product.sku}
                      </span>
                      <Badge variant="default">{product.capacity}</Badge>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="relative w-full h-72 flex items-center justify-center p-6 overflow-hidden bg-ctm-surfaceSubtle/30"
                    >
                      <Image
                        src={product.images[0]?.url || "/images/products/heat-2-main.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </Link>

                    <div className="p-6 border-t border-ctm-border bg-white">
                      <div className="flex items-baseline justify-between mb-2">
                        <Link
                          href={`/products/${product.slug}`}
                          className="font-display font-bold text-xl text-black hover:text-ctm-red transition-colors uppercase"
                        >
                          {product.name}
                        </Link>
                        <span className="font-mono text-lg font-bold text-black">
                          {formatPrice(product.price)}
                        </span>
                      </div>

                      <p className="text-xs text-ctm-muted line-clamp-2 mb-4 font-normal">
                        {product.shortDesc}
                      </p>

                      <Button
                        href={`/products/${product.slug}`}
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <span>INSPECT UNIT</span>
                        <ArrowRight className="w-3.5 h-3.5 text-ctm-red" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-24 text-center border border-ctm-border bg-ctm-surfaceSubtle">
              <p className="text-lg font-display text-black font-bold uppercase">
                Bespoke architectural commissions are engineered on custom project basis.
              </p>
              <div className="mt-6">
                <Button href="/bespoke" variant="primary" size="md">
                  COMMISSION BESPOKE ARCHITECTURE
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
