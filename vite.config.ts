import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Domínio de produção. É só o fallback: quem manda é VITE_SITE_URL (ver .env.example).
const FALLBACK_SITE_URL = 'https://www.meussentidos.com.br'

// Marcador trocado no index.html em tempo de build. Não use a sintaxe %VAR%
// do Vite aqui: ela é resolvida por outro hook e a ordem entre os dois não é
// garantida.
const SITE_URL_TOKEN = '__SITE_URL__'

// Rotas concretas de src/router.tsx. /profissionais/:slug não entra aqui porque
// é um padrão, não uma URL — as 24 fichas são expandidas a partir dos dados.
const ROTAS_ESTATICAS = [
  '/',
  '/especialidades',
  '/avaliacoes',
  '/profissionais',
  '/empresas',
  '/links',
]

function resolveSiteUrl(): string {
  const bruto = (process.env.VITE_SITE_URL ?? '').trim() || FALLBACK_SITE_URL
  if (!/^https?:\/\//.test(bruto)) {
    throw new Error(
      `VITE_SITE_URL precisa começar com http:// ou https:// (recebido: "${bruto}")`,
    )
  }
  return bruto.replace(/\/+$/, '')
}

// Lê os slugs de src/data/profissionais.ts para o sitemap não desatualizar
// sozinho quando alguém adiciona ou remove um profissional.
function lerSlugsDeProfissionais(root: string): string[] {
  const arquivo = resolve(root, 'src/data/profissionais.ts')
  const fonte = readFileSync(arquivo, 'utf8')
  const inicio = fonte.indexOf('export const profissionais')
  if (inicio === -1) {
    throw new Error(`Não achei "export const profissionais" em ${arquivo}`)
  }
  const slugs = [...fonte.slice(inicio).matchAll(/^ {2}([A-Za-z0-9_]+):\s*\{/gm)].map(
    (m) => m[1],
  )
  if (slugs.length === 0) {
    throw new Error(
      `Nenhum slug encontrado em ${arquivo}. O formato do arquivo mudou e o ` +
        `sitemap sairia incompleto, então o build para aqui de propósito.`,
    )
  }
  return slugs
}

function montarSitemap(siteUrl: string, slugs: string[], lastmod: string): string {
  const caminhos = [...ROTAS_ESTATICAS, ...slugs.map((s) => `/profissionais/${s}`)]
  const urls = caminhos
    .map((c) => `  <url>\n    <loc>${siteUrl}${c}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function montarRobots(siteUrl: string): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
}

// Injeta a URL pública no index.html e gera sitemap.xml + robots.txt.
// O index.html é servido em dois endereços (domínio do cliente e GitHub Pages)
// com conteúdo idêntico. O canonical aponta para o domínio real nos DOIS casos,
// de propósito: sem isso o Google pode eleger o github.io como versão canônica.
function seoPlugin(siteUrl: string): Plugin {
  let root = process.cwd()
  return {
    name: 'meus-sentidos-seo',
    configResolved(config) {
      root = config.root
    },
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.split(SITE_URL_TOKEN).join(siteUrl),
    },
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10)
      const slugs = lerSlugsDeProfissionais(root)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: montarSitemap(siteUrl, slugs, lastmod),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: montarRobots(siteUrl),
      })
      this.info(
        `sitemap.xml: ${ROTAS_ESTATICAS.length + slugs.length} URLs em ${siteUrl}`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(() => {
  const siteUrl = resolveSiteUrl()
  return {
    plugins: [react(), seoPlugin(siteUrl)],
    // GH_PAGES is only set by the GitHub Pages workflow (project page,
    // served under /meus-sentidos/). A normal `npm run build`, meant for
    // the real production server at the site's own domain, stays at '/'.
    base: process.env.GH_PAGES ? '/meus-sentidos/' : '/',
  }
})
