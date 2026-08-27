# Instruções de publicação — Site Clínica Meus Sentidos

Para quem vai subir os arquivos. Não é preciso instalar nada nem rodar nada:
o site já está compilado, são arquivos estáticos.

---

## 1. O que tem no ZIP

| Item | O que é |
|---|---|
| `index.html` | página principal |
| `assets/` | JavaScript, CSS e todas as imagens |
| `404.html` | rede de segurança (ver item 3) |
| `.htaccess` | configuração do **Apache** (arquivo oculto) |
| `web.config` | configuração do **IIS / Windows Server** |
| `nginx.conf.exemplo` | modelo para **nginx** (não é usado pelo site) |
| `og-image.jpg` | imagem que aparece ao compartilhar o link no WhatsApp |
| `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `site.webmanifest` | ícones |
| `sitemap.xml`, `robots.txt` | arquivos para o Google |

> **Atenção ao `.htaccess`:** é um arquivo oculto. Muitos programas de FTP e
> descompactadores não mostram nem copiam arquivos que começam com ponto.
> Ligue a opção "mostrar arquivos ocultos" antes de enviar e confirme depois
> que ele chegou no servidor.

---

## 2. Onde colocar

Todos os arquivos vão na **raiz do domínio**, ou seja, em
`https://www.meussentidos.com.br` — e **não** dentro de uma subpasta.

Na prática: extraia o ZIP e envie **o conteúdo dele** para a pasta pública do
servidor (`public_html`, `www`, `htdocs` ou `wwwroot`, dependendo da
hospedagem). Não crie uma subpasta com o nome do arquivo ZIP — o `index.html`
tem que ficar solto na pasta pública, junto com a pasta `assets/`.

Ao final, `index.html` precisa responder em
`https://www.meussentidos.com.br/index.html`. Se ele acabar em
`.../site/index.html` ou `.../meus-sentidos/index.html`, **o site não vai
funcionar** — os caminhos internos foram gerados para a raiz. O sintoma típico
é a **página abrir totalmente em branco**. Nesse caso, pare e fale com quem
desenvolveu o site: é preciso gerar outro pacote.

---

## 3. A regra de reescrita (a parte que mais dá problema)

> **Não pule esta seção.** Sem a regra descrita aqui, as páginas internas ainda
> abrem normalmente para quem visita — mas o servidor as entrega com o código
> de erro **HTTP 404**, e por isso o Google não indexa nenhuma delas. É uma
> falha silenciosa: navegando pelo site parece estar tudo certo, e mesmo assim
> nenhuma página interna aparece nas buscas do Google.

Este site tem endereços internos: `/profissionais`, `/empresas`, `/links`,
`/profissionais/lara_marra` e outros. Essas pastas **não existem** no servidor
— quem monta essas páginas é o próprio site, no navegador.

Por isso o servidor precisa ser instruído a entregar o `index.html` para
qualquer endereço que não seja um arquivo real. Sem essa regra, abrir
`/profissionais` direto na barra de endereço (ou dar F5 numa página interna)
faz o servidor responder 404: a página aparece na tela, porque o `404.html`
entra em ação, mas o código de erro continua sendo enviado.

Escolha o arquivo conforme o servidor:

| Servidor | O que fazer |
|---|---|
| **Apache** (cPanel, Plesk, hospedagem compartilhada) | Deixe o `.htaccess` na mesma pasta do `index.html`. Já está pronto. Precisa do módulo `mod_rewrite` ativo. |
| **IIS / Windows Server** | Deixe o `web.config` na mesma pasta do `index.html`. Precisa do módulo **URL Rewrite** instalado. |
| **nginx** | O `nginx.conf.exemplo` **não funciona sozinho**. Abra-o, copie o bloco `location / { try_files ... }` para dentro do `server { }` que já atende o domínio, e recarregue: `nginx -t && systemctl reload nginx` (ou o comando equivalente na sua distribuição). |

Os arquivos que não forem do seu servidor podem ser apagados sem problema.

**Não sabe qual é o seu caso?** Hospedagem compartilhada com cPanel ou Plesk em
Linux é quase sempre **Apache**. Servidor Windows é **IIS**. Em um servidor
Linux próprio (VPS), `nginx -v` ou `apache2 -v` no terminal responde qual dos
dois está instalado. Na dúvida, o suporte da hospedagem informa.

### Se o painel não permitir nenhuma dessas opções

O `404.html` cobre esse caso: as páginas internas vão abrir normalmente para o
visitante, porque o servidor entrega o `404.html` (que é uma cópia do site) e o
site corrige o endereço sozinho.

É uma solução **parcial**: essas páginas continuam respondendo com o código de
erro 404 e, por causa disso, não aparecem nas buscas do Google. O site funciona
para quem visita, mas só a página inicial é encontrada pelo buscador.

Então: use como último recurso, e vale insistir com o suporte da hospedagem
para liberar a reescrita.

**Em nenhuma hipótese apague o `404.html`.** Ele é a única proteção caso a
regra de reescrita falhe ou seja removida numa migração futura.

---

## 4. Domínio sem www

`meussentidos.com.br` (sem www) precisa **redirecionar com 301**
(redirecionamento permanente) para `https://www.meussentidos.com.br`.

O site declara internamente que seu endereço oficial é o **com www**. Se os
dois endereços responderem com o conteúdo, o Google vê o mesmo site em dois
lugares e a configuração fica inconsistente.

Normalmente isso se resolve no painel da hospedagem, em "Domínios" ou
"Redirecionamentos". Se não houver essa opção, há um trecho pronto (comentado)
no fim do `.htaccess` e do `nginx.conf.exemplo`.

> Não configure o redirecionamento nos dois lugares ao mesmo tempo — painel e
> arquivo juntos podem causar loop de redirecionamento.

Confirme também que o site abre em **https**. O certificado normalmente é
emitido pelo próprio painel (Let's Encrypt).

---

## 5. Checklist — confira depois de subir

1. **`https://www.meussentidos.com.br`** abre e as fotos aparecem.
2. **Este é o item mais importante: é o único que revela se a regra de
   reescrita do item 3 está ativa.** Olhar a tela não resolve — por causa do
   `404.html`, a página abre igual nos dois casos. É preciso ver o **código de
   resposta** que o servidor manda:

   - Abra `https://www.meussentidos.com.br/profissionais` no Chrome ou no Edge.
   - Aperte **F12** (abre o painel do desenvolvedor, na lateral ou embaixo).
   - Clique na aba **Network** (em português, "Rede") e aperte **F5**.
   - Na lista que aparecer, olhe a **primeira linha** — a chamada
     `profissionais` — na coluna **Status**.

   **200** significa configurado corretamente. **404** significa que a regra de
   reescrita não está ativa: volte ao item 3.

   Se preferir a linha de comando, o mesmo teste é:
   `curl -I https://www.meussentidos.com.br/profissionais` — a primeira linha
   da resposta precisa conter `200`, e não `404`.
3. Abra `https://www.meussentidos.com.br/profissionais/lara_marra` e aperte
   **F5**. Precisa continuar na ficha da profissional.
4. Abra `https://www.meussentidos.com.br/og-image.jpg`. Precisa aparecer uma
   **imagem azul com o logo** — se aparecer a página do site, o arquivo não
   subiu.
5. Abra `https://meussentidos.com.br` (**sem** www). Precisa redirecionar
   sozinho para o endereço com www.

---

## 6. Se o domínio mudar

O endereço do site fica **gravado dentro dos arquivos** (`sitemap.xml`,
`robots.txt` e etiquetas dentro do `index.html`).

Trocar o domínio, ou mudar de com-www para sem-www, **exige gerar um pacote
novo** — não adianta editar os arquivos à mão, é fácil deixar passar algum.

Nesse caso, procure quem desenvolveu o site e peça um novo pacote.

> **Responsável técnico:** Lucas Natalicio Ferreira — lucasnf99@gmail.com

Dúvidas técnicas sobre a hospedagem — regra de reescrita, certificado,
redirecionamento de domínio, qualquer item deste documento — devem ser enviadas
**por e-mail**, para o endereço acima.
