"use client"

import { ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { productToCartItem, useCart } from "@/components/cart-context"
import { toast } from "sonner"

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    price: string
    image: string
    badge?: string
    colors: string[]
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  const handleAdd = () => {
    const item = productToCartItem(product)
    addToCart(item, qty)
    toast.success("Produto adicionado ao carrinho", {
      description: `${product.name} x${qty}`,
    })
  }

  return (
    <div className="group relative bg-card border-4 border-border pixel-corners overflow-hidden hover:translate-y-[-4px] transition-transform">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 text-[10px] pixel-corners pixel-shadow">
          {product.badge}
        </div>
      )}

      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover bg-white group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button onClick={handleAdd} size="sm" variant="secondary" className="pixel-corners pixel-shadow text-xs">
            <ShoppingCart className="h-4 w-4 mr-2" />
            COMPRAR AGORA
          </Button>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-sm sm:text-base font-bold leading-tight">{product.name}</h3>

        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{product.description}</p>

        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs">Quantidade</span>
          <Button size="sm" className="pixel-corners h-auto p-1" onClick={() => setQty(Math.max(1, qty - 1))}>
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-xs w-6 text-center">{qty}</span>
          <Button size="sm" className="pixel-corners h-auto p-1" onClick={() => setQty(qty + 1)}>
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex items-center justify-between pt-2 border-t-2 border-border">
          <span className="text-base sm:text-lg font-bold text-primary">{product.price}</span>
          <Button
            size="sm"
            className="pixel-corners pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-[10px] sm:text-xs h-auto py-2"
            onClick={handleAdd}
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
