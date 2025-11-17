## Escopo
- Pesquisar imagens na internet para os produtos com `id` 11 a 29 (Black Sheep, Nik Bar, Life Pod, Oxbar, Geek Bar, Ignite, Sex Adict).
- Priorizar fontes oficiais ou lojas reconhecidas e imagens com boa resolução quadrada.

## Como vou fazer
- Para cada produto, executar buscas específicas (ex.: "Nik Bar 40K image", "Oxbar Pro 30K product photo").
- Selecionar a melhor imagem pública e baixar para `public/` com nomes padronizados.
- Otimizar para ~800×800 e formato `.webp` quando possível, senão `.jpg`.
- Atualizar `components/product-grid.tsx` apenas nos itens de id 11–29, apontando para os arquivos locais.

## Nomes de arquivo
- `public/black-sheep-30k.webp`
- `public/nik-bar-40k.webp`, `public/nik-bar-10k.webp`
- `public/life-pod-one-40k.webp`
- `public/oxbar-pro-30k.webp`, `public/oxbar-g-prime-25k.webp`, `public/oxbar-g-9-5k.webp`
- `public/geek-bar-g-35k.webp`
- Ignite: `ignite-40k-2sabores.webp`, `ignite-40k-ice.webp`, `ignite-30k.webp`, `ignite-v250.webp`, `ignite-v155.webp`, `ignite-v150-pro.webp`, `ignite-v120.webp`, `ignite-p10k-bateria.webp`, `ignite-v80.webp`, `ignite-v55-ultra.webp`
- `public/sex-adict-28k.webp`

## Verificação
- Rodar o servidor local e conferir os cards dos ids 11–29 com suas imagens corretas.
- Checar peso total das imagens e qualidade.

## Observações
- Caso algum produto não tenha imagem pública confiável, manter temporariamente uma imagem neutra até você enviar a oficial.

## Entregáveis
- Imagens adicionadas em `public/` para id 11–29.
- `components/product-grid.tsx` atualizado com novos caminhos de imagem para id 11–29.