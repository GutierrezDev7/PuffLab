"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Zap, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-4 border-border">
      {/* Pixel Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px),
                           repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px)`,
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-vibrant-purple text-primary-foreground px-4 py-2 pixel-corners text-[10px] sm:text-xs animate-pulse-custom animate-glow">
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>LANÇAMENTO 2025</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
              A NOVA ERA DO
              <span className="block text-vibrant-purple mt-2">VAPING CHEGOU</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-md">
              Descubra pods e cigarros eletrônicos de alta qualidade com design único. Tecnologia de ponta encontra
              estilo retro.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 sm:gap-4 text-[10px] sm:text-xs">
              <div className="flex items-center gap-2 bg-vibrant-green text-white px-3 py-2 pixel-corners animate-pulse-slow">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>ENTREGA RÁPIDA</span>
              </div>
              <div className="flex items-center gap-2 bg-vibrant-orange text-white px-3 py-2 pixel-corners">
                <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>QUALIDADE PREMIUM</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="pixel-corners pixel-shadow-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all text-xs sm:text-sm h-auto py-4 bg-vibrant-pink text-white animate-pulse-slow"
                onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
              >
                VER PRODUTOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="pixel-corners hover:bg-vibrant-purple hover:text-purple transition-colors text-xs sm:text-sm h-auto py-4 bg-pink-200 border-vibrant-purple text-vibrant-purple"
              ><a href="#sobre" className="hover:text-primary transition-colors">
                SAIBA MAIS
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Pixel Art Device Representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 pixel-corners animate-pulse-custom" />
              <div className="relative h-full flex items-center justify-center">
                <img
                  src="/special-offer-vape-products-pixel-art-gaming-style.jpg"
                  alt="PUFF LAB Pod"
                  className="w-full h-full object-contain pixel-corners pixel-shadow-xl"
                />
              </div>
              {/* Decorative Pixels */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-vibrant-pink pixel-corners animate-bounce animate-glow" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-vibrant-cyan pixel-corners animate-bounce animate-glow" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
