# Creator The Maker — Luxury Sneaker Storage E-Commerce Platform

A production-ready, ultra-premium web application engineered for **Creator The Maker** — an architectural luxury sneaker storage brand combining high-end furniture craft, automotive-grade industrial finishes, museum-grade UV preservation, and contemporary sneaker collector culture.

---

## 🏛️ Brand Positioning & Aesthetics

- **Visual Tone**: Confident, Minimal, Modern, Bold, Editorial.
- **Palette**: Pure Black (`#050505`), Deep Charcoal (`#0D0D0D`, `#121212`), Technical Grey (`#1A1A1A`, `#262626`), Crisp White (`#F5F5F7`), with precision Crimson Red (`#E11D48`) accents.
- **Typography**: Space Grotesk (architectural technical headlines) paired with Inter (high-legibility editorial specs and narrative).
- **Inspirations**: Luxury furniture ateliers, high-end automotive configurators, industrial design studios, and modern architectural portfolios.

---

## 🚀 Core Features

1. **Cinematic Homepage**: Full-viewport hero ("STORE YOUR HEAT"), featured product cards, alternating storytelling deep-dives, collection gallery panels, brand manifesto, bespoke teaser, community Instagram archive, and FAQ accordion.
2. **Filterable Shop (`/shop`)**: Dynamic search, category/collection filtering, capacity selector, price sorting, and responsive 4-column product grid.
3. **Product Detail Engine (`/products/[slug]`)**: Multi-angle image gallery with fullscreen lightbox, live variant configurator with dynamic price updates, technical spec sheets, and expandable shipping/warranty accordions.
4. **Bespoke Custom Storage Studio (`/bespoke`)**: 7-stage architectural wizard with real-time progress, space dimension inputs, finish selection, reference file uploads, and direct WhatsApp project handoff.
5. **Completed Installations Gallery (`/gallery`)**: Editorial portfolio of collector installations (Tribeca, Zurich, Mayfair, Beverly Hills, Kyoto, Dubai) with fullscreen inspection modals.
6. **Persistent Cart Drawer & Full Cart (`/cart`)**: Slide-over drawer accessible from any page, quantity controls, and White-Glove complimentary delivery meter ($2,500 threshold).
7. **Two-Step Checkout Gateway (`/checkout`)**: Clean shipping manifest and multi-option payment bridge (Stripe credit card simulation, Wire transfer, and Concierge WhatsApp payment).
8. **Celebratory Confirmation (`/checkout/success`)**: Confetti micro-interaction, tracking timeline, and printable order invoice.
9. **Omnipresent WhatsApp Integration**: Floating action pill and prefilled contextual inquiry links across every product, bespoke commission, and order support touchpoint.
10. **Global Command-Palette Search (`CMD+K` / Search icon)**: Instant fuzzy filtering by model name, SKU, finish, or description with keyboard ESC navigation.
11. **Admin Control Center (`/admin`)**: Operations dashboard tracking gross revenue, order volume, active hardware inventory CRUD, and pending bespoke inquiry queue.
12. **Technical SEO & Schema Markup**: JSON-LD Structured Data for `Organization`, `Product`, `FAQPage`, automated `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server Components & Route Handlers)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand (with local storage persistence)
- **Database & ORM**: PostgreSQL with Prisma ORM
- **Payments**: Stripe ready
- **Visuals & Assets**: Handcrafted architectural vector SVGs & WebP assets

---

## 📦 Installation & Setup

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and configure your credentials:
```bash
cp .env.example .env.local
```

Example configuration in `.env.local`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/creator_the_maker?schema=public"
NEXTAUTH_SECRET="your_nextauth_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_WHATSAPP_NUMBER="15550192834"
NEXT_PUBLIC_SITE_URL="https://creator-the-maker.com"
```

### 3. Prisma Client Generation & Database Migration
```bash
# Generate Prisma Client
npx prisma generate

# When connected to a live PostgreSQL instance:
npx prisma migrate dev --name init
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
/app
  /(store)
    page.tsx                    # Cinematic Homepage
    /shop/page.tsx              # Filterable Product Catalog
    /collections/page.tsx       # Portfolio Divisions Overview
    /collections/[slug]/page.tsx# Collection Detail View
    /products/[slug]/page.tsx   # Product Detail & Configurator
    /bespoke/page.tsx           # 7-Step Custom Storage Studio
    /gallery/page.tsx           # Real Completed Installations
    /about/page.tsx             # Studio Manifesto & Craftsmanship
    /faq/page.tsx               # Categorized Technical FAQ
    /contact/page.tsx           # Concierge Contact & Showrooms
    /cart/page.tsx              # Vault Cart Manifest
    /checkout/page.tsx          # Secure Checkout Gateway
    /checkout/success/page.tsx  # Order Confirmation & Timeline
    /admin/page.tsx             # Executive Control Center
    /privacy-policy/page.tsx    # Privacy Policy
    /terms/page.tsx             # Terms & Conditions
    /shipping-policy/page.tsx   # Shipping & Flight Crating
    /returns/page.tsx           # Returns Policy
    /refund-policy/page.tsx     # Refund Policy
    sitemap.ts                  # Dynamic Sitemap Generator
    robots.ts                   # Robots.txt Generator
    not-found.tsx               # Architectural 404
    error.tsx                   # Error Boundary
  /api
    /products/route.ts          # Products Endpoint
    /products/[slug]/route.ts   # Single Product Endpoint
    /bespoke/route.ts           # Bespoke Commission Endpoint
    /contact/route.ts           # Contact Concierge Endpoint
    /newsletter/route.ts        # Newsletter Registration
    /checkout/route.ts          # Checkout Processing Bridge
/components
  /ui                           # Atomic UI (Button, Container, Heading, Badge)
  /navigation                   # Navbar, Footer, SearchModal
  /home                         # Hero, Featured, Story, Showcase, Curation
  /shop                         # ShopCatalog with live filters
  /product                      # ProductDetailView with dynamic variants
  /bespoke                      # BespokeStudioWizard
  /gallery                      # GalleryViewer with modal inspector
  /cart                         # CartDrawer slide-over
  /contact                      # ContactForm
  /admin                        # AdminDashboard
/lib
  db.ts                         # Prisma Client Singleton
  types.ts                      # TypeScript Model Interfaces
  utils.ts                      # Styling & Formatter Utilities
  whatsapp.ts                   # Reusable WhatsApp Context Deep-Links
  analytics.ts                  # Centralized GA4 & Meta Pixel Tracker
  /data                         # Products, Collections, Gallery, FAQ Data
  /store                        # Zustand Persistent Cart Store
/prisma
  schema.prisma                 # Complete PostgreSQL Schema Models
/public
  /images
    /brand                      # Brand Monogram & Hero Assets
    /products                   # Product SVGs (HEAT 2.0, Trunks, Credenzas)
    /gallery                    # Project Installations
```

---

## 🔒 Security & Performance Guidelines

- **Zero Client Secrets**: Database credentials, payment secrets, and webhook tokens are strictly restricted to server environments.
- **Lighthouse 90+ Target**: Optimized responsive vector visuals, Next.js image optimization, Google Font preloading, and non-blocking CSS.
- **Accessibility (WCAG)**: Keyboard navigation, visible focus outlines, high-contrast dark palette, and semantic ARIA labeling.

---

## © License & Brand Notice

© 2026 Creator The Maker. All rights reserved.
