export type ProductVariant = {
  id: string;
  name: string;
  sku: string;
  finish: string;
  lighting: string;
  configuration: string;
  priceOffset: number;
  inventory: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inventory: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isNewRelease?: boolean;
  capacity: string;
  dimensions: string;
  material: string;
  finish: string;
  weight: string;
  warranty: string;
  collectionSlug: string;
  collectionName: string;
  images: {
    url: string;
    alt: string;
    isPrimary?: boolean;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  variants: ProductVariant[];
  shippingInfo: string;
};

export type Collection = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  itemCount: number;
  featured?: boolean;
};

export type CartItem = {
  id: string; // Unique cart item ID (productId + variantId)
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  selectedFinish: string;
  selectedLighting: string;
  selectedConfig: string;
  price: number;
};

export type GalleryItem = {
  id: string;
  title: string;
  slug: string;
  category: "Sneaker Rooms" | "Trunks" | "Wall Storage" | "Custom Projects" | "Installations";
  location: string;
  collectionSize: string;
  solution: string;
  year: string;
  image: string;
  galleryImages: string[];
  description: string;
  specs: {
    capacity: string;
    finish: string;
    lighting: string;
    installationTime: string;
  };
};

export type BespokeSubmission = {
  name: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  sneakerCount: string;
  spaceWidth?: string;
  spaceHeight?: string;
  spaceDepth?: string;
  preferredStyle?: string;
  finish?: string;
  lighting?: string;
  configuration?: string;
  requirements: string;
  referenceImages?: string[];
};

export type Order = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    line1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: "Pending" | "Confirmed" | "In Production" | "Dispatched";
  createdAt: string;
};
