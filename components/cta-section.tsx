import { Button } from "@/components/ui/button"
import { ArrowRight, Gift } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 border-b-4 border-border">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-8 sm:p-12 lg:p-16 pixel-corners overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 12px),
                               repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 12px)`,
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6 text-primary-foreground">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-background text-foreground px-4 py-2 pixel-corners text-[10px] sm:text-xs">
                <Gift className="h-4 w-4" />
                <span>OFERTA ESPECIAL</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
                NA COMPRA DE 6 PODS
                <span className="block mt-2">RECEBA 30% OFF</span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed opacity-90 max-w-md">
                Entre em contato no instagram para receber um codigo exclusivo para compartilhar com seus amigos, e ganhar 10% de desconto na sua próxima compra!
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 pixel-corners pixel-shadow-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all text-xs sm:text-sm h-auto py-4"
                ><a href="https://www.instagram.com/laboratorio_da_fumaca?igsh=Ym0yMHVoYjY4NGhl" target="_blank" rel="noopener noreferrer">
                  QUERO MEU DESCONTO
                  </a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-sm ml-auto">
                <img
                  src="/promo.png"
                  alt="Oferta Especial"
                  className="w-full h-full object-contain pixel-corners pixel-shadow-lg"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent pixel-corners animate-pulse-custom" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-background pixel-corners animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
