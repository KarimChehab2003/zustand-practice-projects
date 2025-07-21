import { create } from "zustand"
import type { Product } from "../types/E-commerceTypes"


interface CartStore {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productID: number) => void;
    updateQuantity: (itemID: number, quantity: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productID) => set((state) => ({ cart: state.cart.filter((product) => product.id !== productID) })),
    updateQuantity: (itemID, quantity) => set((state) => ({ cart: state.cart.map((item) => item.id !== itemID ? item : { ...item, quantity: quantity }) })),
    clearCart: () => set(() => ({ cart: [] }))
}))

export const cartSelector = (state: CartStore) => state.cart;
export const addToCartSelector = (state: CartStore) => state.addToCart;
export const removeFromCartSelector = (state: CartStore) => state.removeFromCart;
export const updateQuantitySelector = (state: CartStore) => state.updateQuantity;
export const clearCartSelector = (state: CartStore) => state.clearCart;