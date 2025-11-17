import { Truck, Shield, Zap, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "ENTREGA RÁPIDA",
    description: "Entregamos em todo Brasil com agilidade e segurança",
  },
  {
    icon: Shield,
    title: "GARANTIA TOTAL",
    description: "Todos os produtos com garantia de qualidade",
  },
  {
    icon: Zap,
    title: "ALTA PERFORMANCE",
    description: "Tecnologia de ponta para melhor experiência",
  },
  {
    icon: Headphones,
    title: "SUPORTE 24/7",
    description: "Atendimento sempre disponível para você",
  },
]

export function FeaturesSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary">POR QUE ESCOLHER A PUFF LAB?</h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Combinamos qualidade premium, design único e atendimento excepcional para proporcionar a melhor experiência
            em vaping.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border pixel-corners p-6 hover:translate-y-[-4px] transition-transform"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-primary-foreground flex items-center justify-center pixel-corners pixel-shadow">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold leading-tight">{feature.title}</h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
