"use client"

import { createContext, useContext, useMemo, useState, ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  priceBRL: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clear: () => void
  count: number
  total: number
}

const CartContext = createContext<CartContextType | null>(null)

function parseBRLToNumber(brl: string) {
  const normalized = brl.replace(/[^0-9,]/g, "").replace(/\./g, "").replace(/,/g, ".")
  const value = Number(normalized)
  return isNaN(value) ? 0 : value
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === item.id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity }
        return next
      }
      return [...prev, { ...item, quantity }]
    })
  }

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)))
  }

  const clear = () => setItems([])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])

  const value: CartContextType = { items, addToCart, removeFromCart, updateQuantity, clear, count, total }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("CartProvider ausente")
  return ctx
}

export function productToCartItem(p: {
  id: number
  name: string
  price: string
  image: string
}): Omit<CartItem, "quantity"> {
  return {
    id: p.id,
    name: p.name,
    priceBRL: p.price,
    price: parseBRLToNumber(p.price),
    image: p.image || "/placeholder.svg",
  }
}

export function formatOrderText(items: CartItem[], _total: number) {
  const now = new Date()
  const date = now.toLocaleDateString("pt-BR")
  const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  const lines = [
    "Pedido via PUFF LAB",
    `Data: ${date} ${time}`,
    "Itens:",
    ...items.map((i) => `• ${i.name} x${i.quantity}`),
  ]
  return lines.join("\n")
}

export function buildWhatsAppUrl(items: CartItem[], total: number, phone?: string) {
  const text = formatOrderText(items, total)
  const target = phone || "+556291724624"
  const base = `https://api.whatsapp.com/send?phone=${target}`
  return `${base}&text=${encodeURIComponent(text)}`
}
