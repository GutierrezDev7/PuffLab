import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-context"

export default function TermsPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-primary">Termos de Uso e Privacidade</h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leia atentamente os termos que regem o uso do site PUFF LAB e nossa política de privacidade.
            </p>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-card border-4 border-border pixel-corners p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl text-primary">Termos de Uso</h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site PUFF LAB, você concorda com estes termos e com as leis aplicáveis no Brasil.
                Os conteúdos, preços e disponibilidades podem ser alterados sem aviso prévio.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                O uso do site é destinado a maiores de 18 anos. Ao realizar compras, você declara que possui idade legal
                e fornece informações verdadeiras para contato e entrega.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                É proibida qualquer tentativa de engenharia reversa, cópia não autorizada ou uso indevido das marcas e
                conteúdos apresentados neste site.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Em caso de dúvidas ou problemas com pedidos, entre em contato pelos canais de atendimento informados
                abaixo.
              </p>
            </div>

            <div className="bg-card border-4 border-border pixel-corners p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl text-primary">Privacidade</h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Coletamos dados mínimos necessários para processar seu pedido e prestar atendimento, como nome, telefone
                e detalhes do pedido. Esses dados são tratados conforme boas práticas de segurança.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Utilizamos o WhatsApp para comunicação do pedido. Ao finalizar a compra, o site prepara uma mensagem com
                os itens e quantidades, direcionando para o número de atendimento informado.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Não compartilhamos seus dados com terceiros, exceto quando necessário para cumprir obrigações legais ou
                viabilizar a entrega e o atendimento.
              </p>
            </div>
          </section>

          
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

