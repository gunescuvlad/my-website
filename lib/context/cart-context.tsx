"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { Product } from "@/lib/data/products"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.product.id === action.payload.product.id)

      let newItems: CartItem[]
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        )
      } else {
        newItems = [...state.items, action.payload]
      }

      const total = newItems.reduce((sum, item) => {
        const price = typeof item.product.price === "number" ? item.product.price : 0
        return sum + price * item.quantity
      }, 0)

      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.product.id !== action.payload.productId)

      const total = newItems.reduce((sum, item) => {
        const price = typeof item.product.price === "number" ? item.product.price : 0
        return sum + price * item.quantity
      }, 0)

      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.product.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item,
        )
        .filter((item) => item.quantity > 0)

      const total = newItems.reduce((sum, item) => {
        const price = typeof item.product.price === "number" ? item.product.price : 0
        return sum + price * item.quantity
      }, 0)

      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 }

    case "LOAD_CART":
      return action.payload

    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("izopresto-cart")
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart)
        dispatch({ type: "LOAD_CART", payload: cartData })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("izopresto-cart", JSON.stringify(state))
  }, [state])

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
