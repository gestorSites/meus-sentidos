// Monta o pacote que vai para o cliente (ZIP do dist).
//
// Diferente de `npm run build`, este script garante o build de RAIZ, adiciona
// o 404.html e leva junto os arquivos de rewrite dos três servidores.
// Roda uma bateria de conferências no fim: é melhor o build falhar aqui do que
// o site subir quebrado num servidor onde ninguém do projeto tem acesso.

import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, readFileSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = resolve(fileURLToPath(new URL('..', import.meta.url)))
const dist = join(raiz, 'dist')
const deploy = join(raiz, 'deploy')

const ARQUIVOS_DE_SERVIDOR = ['.htaccess', 'nginx.conf.exemplo', 'web.config']

const passo = (m) => console.log(`\n▸ ${m}`)
const ok = (m) => console.log(`  ✓ ${m}`)
function falhar(m) {
  console.error(`\n✗ ${m}\n`)
  process.exit(1)
}

// ---------------------------------------------------------------- build
passo('Build com base "/" (raiz do domínio)')
const env = { ...process.env }
// GH_PAGES exportado no shell transformaria isto num build de subdiretório,
// e o pacote sairia com todos os caminhos errados sem aviso nenhum.
delete env.GH_PAGES
execFileSync('npm', ['run', 'build'], { cwd: raiz, env, stdio: 'inherit' })

// ------------------------------------------------------- 404 + servidores
passo('Adicionando 404.html e os arquivos de servidor')
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
ok('404.html (cópia do index.html)')
for (const nome of ARQUIVOS_DE_SERVIDOR) {
  const origem = join(deploy, nome)
  if (!existsSync(origem)) falhar(`deploy/${nome} não existe`)
  copyFileSync(origem, join(dist, nome))
  ok(nome)
}

// ------------------------------------------------------------ conferências
passo('Conferindo o pacote')
const html = readFileSync(join(dist, 'index.html'), 'utf8')

if (!/src="\/assets\//.test(html)) {
  falhar('index.html não aponta para /assets/ — o base do build não é a raiz.')
}
ok('assets em caminho de raiz (/assets/...)')

if (html.includes('/meus-sentidos/')) {
  falhar('index.html contém "/meus-sentidos/" — isto é um build do GitHub Pages.')
}
ok('sem resquício do base do GitHub Pages')

if (html.includes('__SITE_URL__')) {
  falhar('index.html ainda tem o marcador __SITE_URL__ por substituir.')
}
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
if (!canonical) falhar('index.html está sem <link rel="canonical">.')
ok(`canonical: ${canonical}`)

for (const nome of ['404.html', 'sitemap.xml', 'robots.txt', 'og-image.jpg', 'favicon.ico', 'site.webmanifest', ...ARQUIVOS_DE_SERVIDOR]) {
  if (!existsSync(join(dist, nome))) falhar(`está faltando ${nome} no dist.`)
}
ok('404.html, sitemap.xml, robots.txt, ícones e os 3 arquivos de servidor presentes')

// o og-image precisa ser um JPEG de verdade: se o arquivo sumir, o servidor
// devolve o index.html com status 200 e o erro passa despercebido.
const og = readFileSync(join(dist, 'og-image.jpg'))
if (og[0] !== 0xff || og[1] !== 0xd8 || og[2] !== 0xff) {
  falhar('og-image.jpg não começa com a assinatura de um JPEG.')
}
ok(`og-image.jpg é um JPEG (${(og.length / 1024).toFixed(0)} KB)`)

const urls = (readFileSync(join(dist, 'sitemap.xml'), 'utf8').match(/<loc>/g) ?? []).length
ok(`sitemap.xml com ${urls} URLs`)

// ------------------------------------------------------------------ fim
const tamanho = execFileSync('du', ['-sh', dist]).toString().split('\t')[0]
console.log(`
Pacote pronto em dist/ (${tamanho})

Para gerar o ZIP:
  cd dist && zip -r ../meus-sentidos-site.zip . -x '.DS_Store' && cd ..

O -r inclui o .htaccess, que é um arquivo oculto. Confira que ele está no ZIP:
  unzip -l meus-sentidos-site.zip | grep htaccess

Instruções para quem vai subir: ENTREGA.md
`)
