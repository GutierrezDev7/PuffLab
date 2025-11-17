"use client"

import { ProductCard } from "@/components/product-card"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Elfbar Ice King 40K",
    description: "Frio na medida certa, sabor intenso e performance absurda!",
    price: "R$ 120,00",
    image: "/1.png",
    badge: "GELADO",
    brand: "Elfbar",
    colors: ["primary", "secondary", "accent"],
  },
  {
    id: 2,
    name: "Elfbar Trio 40K",
    description: "Três sabores, uma só vibe — troque e descubra seu preferido!",
    price: "R$ 120,00",
    image: "/2.png",
    badge: "3 EM 1",
    brand: "Elfbar",
    colors: ["accent", "primary"],
  },
  {
    id: 3,
    name: "Elfbar 30K Black Gold Edition",
    description: "Luxo, potência e estilo em cada tragada.",
    price: "R$ 110,00",
    image: "/3.png",
    badge: "GOLD EDITION",
    brand: "Elfbar",
    colors: ["secondary", "accent"],
  },
  {
    id: 4,
    name: "Elfbar GH 23K",
    description: "Compacto, potente e com vapor encorpado.",
    price: "R$ 120,00",
    image: "/4.png",
    brand: "Elfbar",
    colors: ["primary", "accent"],
  },
  {
    id: 5,
    name: "Elfbar BC 15K",
    description: "Sabores vibrantes e longa duração!",
    price: "R$ 100,00",
    image: "/5.png",
    brand: "Elfbar",
    colors: ["secondary", "primary"],
  },
  {
    id: 6,
    name: "Waka 36K",
    description: "Denso, durável e com recarga rápida.",
    price: "R$ 110,00",
    image: "/6.png",  
    badge: "PRO",
    brand: "Waka",
    colors: ["accent", "secondary"],
  },
  {
    id: 7,
    name: "Waka 25K",
    description: "Suavidade e potência no ponto certo.",
    price: "R$ 100,00",
    image: "/7.png",  
    brand: "Waka",
    colors: ["primary", "secondary"],
  },
  {
    id: 8,
    name: "Airmez 40K (com fones)",
    description: "Vapor e música na mesma vibe! Experiência única.",
    price: "R$ 130,00",
    image: "/8.png",
    badge: "COM FONES",
    brand: "Airmez",
    colors: ["accent", "primary"],
  },
  {
    id: 9,
    name: "Lost Mary MT 35K",
    description: "Design moderno e vapor insano.",
    price: "R$ 120,00",
    image: "/9.png",
    brand: "Lost Mary",
    colors: ["secondary", "accent"],
  },
  {
    id: 10,
    name: "Lost Mary MO 20K",
    description: "Sabor limpo e sensação suave.",
    price: "R$ 105,00",
    image: "/10.png",
    brand: "Lost Mary",
    colors: ["primary", "accent"],
  },
  {
    id: 11,
    name: "Black Sheep 30K",
    description: "Rebelde, ousado e com sabor marcante.",
    price: "R$ 130,00",
    image: "/11.png", 
    brand: "Black Sheep",
    colors: ["accent", "secondary"],
  },
  {
    id: 12,
    name: "Nik Bar 40K",
    description: "Perfeito equilíbrio entre potência e sabor.",
    price: "R$ 120,00",
    image: "/12.jpg", 
    brand: "Nik Bar",
    colors: ["primary", "secondary", "accent"],
  },
  {
    id: 13,
    name: "Nik Bar 10K",
    description: "Compacto e com performance incrível.",
    price: "R$ 90,00",
    image: "/13.jpg", 
    brand: "Nik Bar",
    colors: ["secondary", "primary"],
  },
  {
    id: 14,
    name: "Life Pod One 40K",
    description: "O rei da durabilidade e da qualidade premium.",
    price: "R$ 140,00",
    image: "/14.jpg", 
    badge: "PREMIUM",
    brand: "Life Pod",
    colors: ["accent", "primary"],
  },
  {
    id: 15,
    name: "Oxbar Pro 30K",
    description: "Alta performance e recarga eficiente.",
    price: "R$ 110,00",
    image: "/15.jpg", 
    badge: "PRO",
    brand: "Oxbar",
    colors: ["secondary", "primary"],
  },
  {
    id: 16,
    name: "Oxbar G Prime 25K",
    description: "Design moderno + vapor consistente.",
    price: "R$ 110,00",
    image: "/16.jpg", 
    badge: "PRIME",
    brand: "Oxbar",
    colors: ["primary", "accent"],
  },
  {
    id: 17,
    name: "Oxbar G 9.5K",
    description: "Leve, prático e saboroso.",
    price: "R$ 90,00",
    image: "/17.jpg", 
    brand: "Oxbar",
    colors: ["secondary", "accent"],
  },
  {
    id: 18,
    name: "Geek Bar G 35K",
    description: "Pura inovação em cada puxada!",
    price: "R$ 130,00",
    image: "/18.jpg", 
    brand: "Geek Bar",
    colors: ["accent", "primary"],
  },
  {
    id: 19,
    name: "Ignite 40K (2 Sabores)",
    description: "Duas experiências em um só pod.",
    price: "R$ 135,00",
    image: "/19.jpg", 
    badge: "2 SABORES",
    brand: "Ignite",
    colors: ["primary", "secondary"],
  },
  {
    id: 20,
    name: "Ignite 40K Ice",
    description: "Refrescante, gelado e viciante.",
    price: "R$ 130,00",
    image: "/20.jpg", 
    badge: "ICE",
    brand: "Ignite",
    colors: ["secondary", "accent"],
  },
  {
    id: 21,
    name: "Ignite 30K",
    description: "Potente e cheio de estilo.",
    price: "R$ 120,00",
    image: "/21.png", 
    brand: "Ignite",
    colors: ["accent", "primary"],
  },
  {
    id: 22,
    name: "Ignite V250",
    description: "Um monstro de performance!",
    price: "R$ 125,00",
    image: "/22.jpg", 
    brand: "Ignite",
    colors: ["primary", "secondary", "accent"],
  },
  {
    id: 23,
    name: "Ignite V155",
    description: "Vapor intenso e duradouro.",
    price: "R$ 116,00",
    image: "/23.jpg", 
    brand: "Ignite",
    colors: ["secondary", "primary"],
  },
  {
    id: 24,
    name: "Ignite V150 Pro",
    description: "Leve, elegante e com ótimo custo-benefício.",
    price: "R$ 115,00",
    image: "/24.jpg", 
    badge: "PRO",
    brand: "Ignite",
    colors: ["accent", "secondary"],
  },
  {
    id: 25,
    name: "Ignite V120",
    description: "Clássico, eficiente e saboroso.",
    price: "R$ 110,00",
    image: "/25.jpg", 
    brand: "Ignite",
    colors: ["primary", "accent"],
  },
  {
    id: 26,
    name: "Ignite P10K (com bateria)",
    description: "Durabilidade e praticidade garantidas.",
    price: "R$ 120,00",
    image: "/26.jpg", 
    badge: "COM BATERIA",
    brand: "Ignite",
    colors: ["secondary", "primary"],
  },
  {
    id: 27,
    name: "Ignite V80",
    description: "Compacto e cheio de energia.",
    price: "R$ 100,00",
    image: "/27.jpg", 
    brand: "Ignite",
    colors: ["accent", "primary"],
  },
  {
    id: 28,
    name: "Ignite V55 Ultra",
    description: "Pequeno no tamanho, gigante no sabor.",
    price: "R$ 90,00",
    image: "/28.jpg", 
    badge: "ULTRA",
    brand: "Ignite",
    colors: ["secondary", "accent"],
  },
  {
    id: 29,
    name: "Sex Adict 28K",
    description: "Sabor provocante, estilo único e pura intensidade!",
    price: "R$ 115,00",
    image: "/28.jpg", 
    brand: "Sex Adict",
    colors: ["primary", "secondary"],
  },
]

export function ProductGrid() {
  const [showAll, setShowAll] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState<string | "Todos">("Todos")
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort()
  const filtered = selectedBrand === "Todos" ? products : products.filter((p) => p.brand === selectedBrand)
  const visible = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section id="produtos" className="py-16 sm:py-24 border-b-4 border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary">NOSSOS PRODUTOS</h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore nossa coleção exclusiva de pods e cigarros eletrônicos. Cada produto é cuidadosamente selecionado
            para oferecer a melhor experiência.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedBrand("Todos")}
            className={`px-3 py-2 text-xs sm:text-sm border-2 border-border pixel-corners ${
              selectedBrand === "Todos" ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            Todos
          </button>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-3 py-2 text-xs sm:text-sm border-2 border-border pixel-corners ${
                selectedBrand === b ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-muted hover:bg-primary hover:text-primary-foreground pixel-corners pixel-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-xs sm:text-sm"
          >
            {showAll ? "VER MENOS" : "VER TODOS OS PRODUTOS"}
          </button>
        </div>
      </div>
    </section>
  )
}
