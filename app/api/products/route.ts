import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const collection = searchParams.get("collection");

  if (collection) {
    const filtered = PRODUCTS.filter((p) => p.collectionSlug === collection);
    return NextResponse.json({ success: true, data: filtered });
  }

  return NextResponse.json({ success: true, data: PRODUCTS });
}
