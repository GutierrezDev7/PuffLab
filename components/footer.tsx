import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-card border-t-4 border-border">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8">
                <img src="/image-gen%20(1).png" alt="PUFF LAB" />
              </div>
              <span className="text-sm font-bold text-primary">PUFF LAB</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
              A melhor loja de pods e cigarros eletrônicos com estilo único e qualidade premium.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-bold">NAVEGAÇÃO</h3>
            <ul className="space-y-2 text-[10px] sm:text-xs text-muted-foreground">
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-bold">REDES SOCIAIS</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/laboratorio_da_fumaca?igsh=Ym0yMHVoYjY4NGhl"
                className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center pixel-corners hover:translate-y-[-2px] transition-transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground">Siga-nos para novidades e promoções exclusivas!</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-muted-foreground">
            <p>© 2025 PUFF LAB. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="/termos" className="hover:text-primary transition-colors">Termos de Uso</a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
