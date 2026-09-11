import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://creator-the-maker.com"
  ),
  title: {
    default: "Creator The Maker — Luxury Sneaker Storage & Architectural Display",
    template: "%s | Creator The Maker",
  },
  description:
    "Premium sneaker storage solutions designed for collectors, enthusiasts, and luxury spaces. Hand-finished aerospace aluminum, UV-shielding museum glass, and bespoke walk-in vaults.",
  keywords: [
    "luxury sneaker storage",
    "sneaker display case",
    "sneaker trunk",
    "grail storage",
    "custom sneaker room",
    "architectural storage",
    "Creator The Maker",
  ],
  authors: [{ name: "Creator The Maker" }],
  creator: "Creator The Maker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creator-the-maker.com",
    siteName: "Creator The Maker",
    title: "Creator The Maker — Luxury Sneaker Storage & Architectural Display",
    description:
      "Engineered for the pairs worth protecting. Handcrafted sneaker trunks, vertical monoliths, and bespoke walk-in display chambers.",
    images: [
      {
        url: "/images/brand/brand-hero.svg",
        width: 1600,
        height: 900,
        alt: "Creator The Maker Architectural Sneaker Storage Monoliths",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator The Maker — Luxury Sneaker Storage",
    description:
      "Premium sneaker storage solutions engineered for modern collectors and luxury interiors.",
    images: ["/images/brand/brand-hero.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Creator The Maker",
    url: "https://creator-the-maker.com",
    logo: "https://creator-the-maker.com/images/brand/logo.svg",
    description:
      "Creator The Maker designs and manufactures architectural sneaker storage chambers, trunks, and bespoke collector installations.",
    sameAs: ["https://instagram.com/creatorthemaker"],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="bg-white text-ctm-black antialiased min-h-screen flex flex-col selection:bg-ctm-red selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
