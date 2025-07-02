"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { Product } from "@/lib/data/products"

// Tipuri pentru cart item și starea comenzii
export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean    // flag pentru deschidere/inchidere modal
}

// Acțiuni suportate de reducer
export type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

// Context și reducer
const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.product.id === action.payload.product.id)
      const newItems = existing
        ? state.items.map(i =>
            i.product.id === action.payload.product.id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          )
        : [...state.items, { product: action.payload.product, quantity: action.payload.quantity }]
      const total = newItems.reduce((sum, item) => sum + (typeof item.product.price === "number" ? item.product.price : 0) * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
      return { ...state, items: newItems, total, itemCount }
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter(i => i.product.id !== action.payload.productId)
      const total = newItems.reduce((sum, item) => sum + (typeof item.product.price === "number" ? item.product.price : 0) * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
      return { ...state, items: newItems, total, itemCount }
    }
    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map(i =>
          i.product.id === action.payload.productId
            ? { ...i, quantity: action.payload.quantity }
            : i
        )
        .filter(i => i.quantity > 0)
      const total = newItems.reduce((sum, item) => sum + (typeof item.product.price === "number" ? item.product.price : 0) * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
      return { ...state, items: newItems, total, itemCount }
    }
    case "CLEAR_CART":
      return { ...state, items: [], total: 0, itemCount: 0 }
    case "LOAD_CART":
      return action.payload
    case "OPEN_CART":
      return { ...state, isOpen: true }
    case "CLOSE_CART":
      return { ...state, isOpen: false }
    default:
      return state
  }
}

// Provider pentru cart
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
    isOpen: false,
  })

  // Load cart și starea modal din localStorage (opțional)
  useEffect(() => {
    const saved = localStorage.getItem("izopresto-cart")
    if (saved) {
      try {
        const data: CartState = JSON.parse(saved)
        dispatch({ type: "LOAD_CART", payload: data })
      } catch {}
    }
  }, [])
  // Salvează starea în localStorage de fiecare dată
  useEffect(() => {
    localStorage.setItem("izopresto-cart", JSON.stringify(state))
  }, [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizat
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be inside CartProvider")
  return ctx
}
