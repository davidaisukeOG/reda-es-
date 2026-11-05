# Minha Jornada — Memórias de uma Vida Escolar

Site estático, responsivo e minimalista para reunir suas 15 redações e uma linha do tempo fotográfica da vida escolar.

## Como abrir
1. Extraia o arquivo ZIP.
2. Abra a pasta `minha-jornada` no VS Code.
3. Abra `index.html` no navegador. Para desenvolvimento, pode usar a extensão Live Server.

## Como inserir suas redações
1. Abra `js/script.js`.
2. Localize a lista `essays` no início do arquivo.
3. Em cada item, altere `title`, `category` e `paragraphs`.
4. Cada texto em `paragraphs` será exibido como um parágrafo separado.

Exemplo:
```js
{
  number: 1,
  title: "A importância da educação",
  category: "REDAÇÃO ESCOLAR",
  paragraphs: [
    "Primeiro parágrafo da redação...",
    "Segundo parágrafo da redação...",
    "Terceiro parágrafo da redação..."
  ]
}
```

## Como inserir suas fotografias
Coloque suas imagens nas pastas correspondentes e use o nome `foto-01.jpg` para a imagem principal de cada fase:
- `assets/fotos-infancia/foto-01.jpg`
- `assets/fotos-fundamental-i/foto-01.jpg`
- `assets/fotos-fundamental-ii/foto-01.jpg`
- `assets/fotos-ensino-medio/foto-01.jpg`

As mesmas imagens também aparecem discretamente no fundo do site, com transparência. Você pode usar JPG, PNG ou WebP; se mudar o nome ou a extensão, atualize os caminhos no `css/style.css`.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie todos os arquivos desta pasta.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
5. Aguarde a publicação e acesse o endereço fornecido pelo GitHub.

## Personalização
- Cores, tipografia, espaçamentos e responsividade: `css/style.css`.
- Conteúdo das redações e comportamento das abas: `js/script.js`.
- Estrutura e textos das seções: `index.html`.

Observação: as pastas de fotos estão vazias de propósito. O site não inventa imagens ou redações; os espaços estão preparados para seu material original.
