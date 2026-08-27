# Meus Sentidos

Site institucional da Clínica Meus Sentidos — clínica especializada no
atendimento de crianças e adolescentes com TEA.

Single-page application estática: sem back-end, sem banco, sem build no
servidor. O resultado do build é uma pasta de arquivos que pode ser servida por
qualquer servidor web.

## Stack

- React 19 + TypeScript
- Vite 7
- React Router 7 (`createBrowserRouter`, rotas com URL de verdade)
- Tailwind CSS 3
- Framer Motion (animações) e Swiper (carrosséis)

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:5173
```

Outros comandos:

```bash
npm run lint       # ESLint
npm run preview    # serve o dist já compilado
```

> `npm run lint` reporta 2 erros conhecidos em `src/pages/Equipe.tsx`
> (`no-explicit-any`). São pré-existentes. Mais que isso indica regressão.

## Os três builds

Todos geram a pasta `dist/`. A diferença é para onde o pacote vai.

| Comando | Para quê | `base` |
|---|---|---|
| `npm run build` | build de raiz, genérico | `/` |
| `npm run build:pages` | GitHub Pages (`/meus-sentidos/`) | `/meus-sentidos/` |
| `npm run build:entrega` | **pacote que vai para o cliente** | `/` |

### `build`

Build normal, para servir na raiz de um domínio.

### `build:pages`

Usado **apenas** pelo workflow `.github/workflows/deploy-pages.yml`. A variável
`GH_PAGES=true` muda o `base` para `/meus-sentidos/`, porque no GitHub Pages o
site fica numa subpasta.

O `basename` do React Router lê `import.meta.env.BASE_URL`
(`src/router.tsx`), então as rotas acompanham o `base` automaticamente — não
existe lista de caminhos para manter em sincronia.

### `build:entrega`

O que gera o ZIP enviado ao cliente. Além do build de raiz, ele:

- copia `index.html` para `404.html` (rede de segurança para servidores sem
  regra de reescrita);
- inclui `.htaccess`, `web.config` e `nginx.conf.exemplo` (pasta `deploy/`);
- ignora `GH_PAGES` mesmo se estiver exportado no shell;
- confere o pacote no fim (caminhos de raiz, arquivos obrigatórios, assinatura
  do JPEG do og-image) e falha em vez de entregar algo quebrado.

As instruções que acompanham o ZIP estão em [`ENTREGA.md`](./ENTREGA.md).

## `VITE_SITE_URL`

Endereço público do site, **sem barra no final**. Padrão:
`https://www.meussentidos.com.br` (ver [`.env.example`](./.env.example)).

Em tempo de build ela alimenta:

- `<link rel="canonical">` e `og:url` no `index.html`;
- as URLs absolutas de `og:image` e `twitter:image` — precisam ser absolutas
  porque o Vite reescreve `link[href]` e `script[src]` de acordo com o `base`,
  mas **nunca** `meta[content]`;
- `sitemap.xml` e `robots.txt`, gerados no build (não existem em `public/`).

O `sitemap.xml` cobre 30 URLs: 6 rotas estáticas mais as 24 fichas de
profissional, cujos slugs são lidos de `src/data/profissionais.ts`. Adicionar ou
remover alguém atualiza o sitemap sozinho no próximo build.

O `canonical` aponta para o domínio real **também no build do GitHub Pages**,
de propósito: os dois endereços servem conteúdo idêntico e, sem isso, o Google
poderia eleger o `github.io` como versão canônica do site.

Para trocar o domínio, defina a variável e gere o pacote de novo:

```bash
VITE_SITE_URL=https://www.novodominio.com.br npm run build:entrega
```

O build recusa valores sem `http://` ou `https://`.

## Onde ficam as coisas

```
src/
  router.tsx          rotas (o basename vem de import.meta.env.BASE_URL)
  data/               profissionais, especialidades, avaliações, empresas
  pages/              uma página por rota
  components/         componentes e seções da home
  assets/             imagens importadas pelo bundle
public/               arquivos copiados sem processamento (ícones, og-image)
deploy/               configs de servidor que entram no pacote de entrega
scripts/              empacotamento da entrega
```
