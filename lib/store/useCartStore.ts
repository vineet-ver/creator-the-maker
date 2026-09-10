import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, Product, ProductVariant } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (
    product: Product,
    variant?: ProductVariant,
    options?: {
      finish?: string;
      lighting?: string;
      config?: string;
      quantity?: number;
    }
  ) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product, variant, options = {}) => {
        const selectedFinish = options.finish || variant?.finish || product.finish;
        const selectedLighting = options.lighting || variant?.lighting || "Pure White 4500K";
        const selectedConfig = options.config || variant?.configuration || "Standard Edition";
        const qty = options.quantity || 1;

        const effectivePrice = (product.price || 0) + (variant?.priceOffset || 0);
        const itemId = `${product.id}-${variant?.id || "base"}-${selectedFinish}-${selectedLighting}`;

        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === itemId);

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += qty;
            return { items: updatedItems, isOpen: true };
          }

          const newItem: CartItem = {
            id: itemId,
            product,
            variant,
            quantity: qty,
            selectedFinish,
            selectedLighting,
            selectedConfig,
            price: effectivePrice,
          };

          return { items: [...state.items, newItem], isOpen: true };
        });

        trackEvent({
          name: "add_to_cart",
          productId: product.id,
          productName: product.name,
          variant: variant?.name,
          price: effectivePrice,
          quantity: qty,
        });
      },

      removeItem: (itemId: string) => {
        const item = get().items.find((i) => i.id === itemId);
        if (item) {
          trackEvent({
            name: "remove_from_cart",
            productId: item.product.id,
            productName: item.product.name,
            price: item.price,
          });
        }

        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getSubtotal: () => {
        return get().items.reduce(
          (acc, item) => acc + (item.price || 0) * item.quantity,
          0
        );
      },

      getItemCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: "ctm-cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);
