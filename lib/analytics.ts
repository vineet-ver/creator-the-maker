declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export type AnalyticsEvent =
  | { name: "page_view"; path: string; title?: string }
  | { name: "product_view"; productId: string; productName: string; price: number; category: string }
  | { name: "collection_view"; collectionSlug: string; collectionName: string }
  | { name: "search"; query: string; resultsCount: number }
  | { name: "add_to_cart"; productId: string; productName: string; variant?: string; price: number; quantity: number }
  | { name: "remove_from_cart"; productId: string; productName: string; price: number }
  | { name: "begin_checkout"; itemsCount: number; value: number }
  | { name: "purchase"; orderNumber: string; value: number; itemsCount: number }
  | { name: "whatsapp_click"; location: string; targetItem?: string }
  | { name: "bespoke_form_start" }
  | { name: "bespoke_form_submit"; referenceCode: string; sneakerCount: string }
  | { name: "contact_form_submit"; subject: string }
  | { name: "newsletter_signup" };

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Log in development for auditability
  if (process.env.NODE_ENV === "development") {
    console.info(`[Analytics Event] ${event.name}`, event);
  }

  // Google Analytics 4 integration
  if (window.gtag) {
    window.gtag("event", event.name, event);
  }

  // Meta Pixel integration
  if (window.fbq) {
    if (event.name === "product_view") {
      window.fbq("track", "ViewContent", { content_name: event.productName, value: event.price, currency: "USD" });
    } else if (event.name === "add_to_cart") {
      window.fbq("track", "AddToCart", { content_name: event.productName, value: event.price, currency: "USD" });
    } else if (event.name === "purchase") {
      window.fbq("track", "Purchase", { value: event.value, currency: "USD" });
    } else {
      window.fbq("trackCustom", event.name, event);
    }
  }
}
