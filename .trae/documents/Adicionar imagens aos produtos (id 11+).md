## Contexto
- As imagens dos produtos são definidas em `components/product-grid.tsx`.
- Você pediu para buscar na internet e colocar imagens, mas limitar agora “somente as imagens do id 11 pra frente”.
- IDs envolvidos: 11 a 29 (Black Sheep, Nik Bar, Life Pod, Oxbar, Geek Bar, Ignite, Sex Adict).

## O que vou fazer
- Pesquisar imagens oficiais ou de lojas confiáveis para cada produto dos IDs 11–29.
- Baixar e otimizar (conversão para `.webp` ou `.jpg`, ~800x800, compressão) e salvar em `public/` com nomes padronizados.
- Atualizar `components/product-grid.tsx` apenas nos itens 11–29 com o novo caminho da imagem local.
- Manter `alt` descritivo (nome do produto) e o fallback já existente.

## Padrão de arquivos
- `public/black-sheep-30k.webp`
- `public/nik-bar-40k.webp`, `public/nik-bar-10k.webp`
- `public/life-pod-one-40k.webp`
- `public/oxbar-pro-30k.webp`, `public/oxbar-g-prime-25k.webp`, `public/oxbar-g-9-5k.webp`
- `public/geek-bar-g-35k.webp`
- Ignite:
  - `public/ignite-40k-2sabores.webp`, `public/ignite-40k-ice.webp`, `public/ignite-30k.webp`
  - `public/ignite-v250.webp`, `public/ignite-v155.webp`, `public/ignite-v150-pro.webp`, `public/ignite-v120.webp`
  - `public/ignite-p10k-bateria.webp`, `public/ignite-v80.webp`, `public/ignite-v55-ultra.webp`
- `public/sex-adict-28k.webp`

## Verificação
- Subir o servidor local e conferir se cada card dos IDs 11–29 exibe a imagem correta.
- Conferir pesos e qualidade das imagens para evitar impacto de performance.

## Observações de uso de imagem
- Priorizo sites oficiais e materiais promocionais. Caso algum produto não tenha uma imagem livre, utilizo temporariamente uma alternativa neutra, até você fornecer a oficial.

## Entregáveis
- Imagens otimizadas adicionadas em `public/` para IDs 11–29.
- `components/product-grid.tsx` atualizado apenas nos produtos 11–29 com `image` apontando para os novos arquivos.