"use client"

import { ShoppingCart, Menu, X, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useCart, buildWhatsAppUrl } from "@/components/cart-context"
import { Toaster } from "sonner"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { items, count, total, updateQuantity, removeFromCart, clear } = useCart()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-4 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-20 w-20">
              <img src="/image-gen%20(1).png" alt="PUFF LAB" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-primary">PUFF LAB</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs">
            <a href="#produtos" className="hover:text-primary transition-colors">
              PRODUTOS
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              SOBRE
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              CONTATO
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="pixel-corners pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-[10px] sm:text-xs px-3 py-2 h-auto"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden sm:inline">CARRINHO ({count})</span>
              <span className="sm:hidden">{count}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              size="sm"
              variant="outline"
              className="md:hidden pixel-corners h-auto p-2 bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 text-xs border-t-2 border-border pt-4">
            <a
              href="#produtos"
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              PRODUTOS
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              SOBRE
            </a>
            <a
              href="#contato"
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTATO
            </a>
          </nav>
        )}

        {cartOpen && (
          <div className="mt-4 border-4 border-border pixel-corners bg-card p-4 overflow-hidden sm:max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-bold">Seu carrinho</span>
              <span className="text-xs sm:text-sm">Total: R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            {items.length === 0 ? (
              <div className="text-[10px] sm:text-xs text-muted-foreground">Carrinho vazio</div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-wrap items-center justify-between border-2 border-border p-2 pixel-corners gap-2">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                      <div className="text-[10px] sm:text-xs">
                        <div className="font-bold">{item.name}</div>
                        <div>{item.priceBRL}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Button size="sm" className="pixel-corners h-auto p-1" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-xs w-6 text-center">{item.quantity}</span>
                      <Button size="sm" className="pixel-corners h-auto p-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="pixel-corners h-auto p-1" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                  <Button size="sm" variant="outline" className="pixel-corners w-full sm:w-auto" onClick={clear}>Limpar</Button>
                  <Button
                    size="sm"
                    className="pixel-corners pixel-shadow w-full sm:w-auto"
                    onClick={() => {
                      const url = buildWhatsAppUrl(items, total, "+556291724624")
                      window.open(url, "_blank")
                    }}
                  >
                    Finalizar compra
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {!isMobile && <Toaster richColors position="top-left" />}
    </header>
  )
}
