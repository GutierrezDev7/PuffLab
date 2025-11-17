## Contexto
- O grid de produtos renderiza a lista local `products` e mapeia para o card (`ProductCard`).
- Estrutura dos itens do card: `id`, `name`, `description`, `price`, `image`, `badge?`, `colors` em `components/product-card.tsx:6-15`.
- A lista atual está hardcoded em `components/product-grid.tsx:5` e já contém 3 dos produtos pedidos.

## O que vou mudar
- Atualizar `components/product-grid.tsx:5-59` substituindo os itens fictícios por todos os produtos fornecidos na sua lista.
- Manter os 3 já existentes e ajustar preços/labels para consistência (formato "R$ 120,00").
- Preencher `badge` apenas quando fizer sentido, seguindo o padrão atual (ex.: "GELADO", "3 EM 1", "GOLD EDITION", e novos como "ICE", "2 SABORES", "PRO", "ULTRA", "COM FONES").
- Definir `image` temporariamente para um placeholder até você subir as imagens.
- Variar `colors` com combinações de `primary`, `secondary`, `accent` para manter o visual diverso.

## Placeholders de imagem
- Adicionar `public/placeholder.svg` (não existe hoje) para evitar imagens quebradas, já que o card usa `"/placeholder.svg"` como fallback em `components/product-card.tsx:31`.

## Dados dos produtos
- Incluir todos os produtos exatamente como na sua lista (nome e descrição):
  - Elfbar: Ice King 40K, Trio 40K, 30K Black Gold Edition, GH 23K, BC 15K
  - Waka: 36K, 25K
  - Airmez: 40K (com fones)
  - Lost Mary: MT 35K, MO 20K
  - Black Sheep: 30K
  - Nik Bar: 40K, 10K
  - Life Pod One: 40K
  - Oxbar: Pro 30K, G Prime 25K, G 9.5K
  - Geek Bar: G 35K
  - Ignite: 40K (2 Sabores), 40K Ice, 30K, V250, V155, V150 Pro, V120, P10K (com bateria), V80, V55 Ultra
- Normalizar preços para padrão brasileiro (ex.: "R$ 120,00"). Onde você já tem preço diferente no grid, será ajustado para o que você especificou.

## Verificação
- Rodar localmente e conferir na Home (`app/page.tsx:14`) se todos os cards renderizam sem warnings e com preços/badges consistentes.
- Confirmar que o placeholder aparece corretamente para quem ainda não tem imagem.

## Entregáveis
- `components/product-grid.tsx` atualizado com todos os produtos.
- `public/placeholder.svg` adicionado.

## Próximos (opcional)
- Se quiser, posso mover a lista para `data/products.ts` para facilitar manutenção.
- Podemos adicionar filtros por marca e um link de compra/WhatsApp nos botões do card.
