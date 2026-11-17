---
name: Dra. Thamyris Dahas Daher · Cardiologista
description: Landing de agendamento de uma cardiologista em Balneário Camboriú, no padrão de site de médico executado com acabamento.
colors:
  navy: "#0a3868"
  navy-ink: "#08274f"
  navy-deep: "#072c55"
  navy-hover: "#0d4580"
  navy-night: "#061f3d"
  teal: "#117a69"
  teal-ink: "#0b7068"
  teal-bright: "#55c8b8"
  star: "#0e9185"
  ground: "#f6f8fa"
  paper: "#ffffff"
  mist: "#e8eef5"
  rule: "#d7dfe8"
  ink: "#1b2a3e"
  ink-2: "#44546a"
  on-navy: "#f5f7fa"
  on-navy-2: "#b9c8da"
typography:
  display:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 3.1vw, 3.125rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2.4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.5
  brand-role:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.24em"
rounded:
  focus: "6px"
  row: "10px"
  alert: "14px"
  faq: "16px"
  card: "18px"
  map: "20px"
  portrait: "28px"
  pill: "999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  container: "1180px"
  head-gap: "clamp(32px, 5vw, 56px)"
  section: "clamp(64px, 11vw, 120px)"
  card-pad: "24px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "0 28px 0 24px"
    height: "60px"
  button-primary-hover:
    backgroundColor: "{colors.navy-hover}"
    textColor: "{colors.paper}"
  button-primary-hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 32px 0 26px"
    height: "64px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px 0 24px"
    height: "60px"
  pill-whatsapp:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px 0 16px"
    height: "46px"
  pill-whatsapp-hover:
    backgroundColor: "{colors.teal-ink}"
    textColor: "{colors.paper}"
  card-review:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  card-review-lead:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  faq-item:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.faq}"
    padding: "20px 20px 20px 22px"
  faq-item-open:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
  dock:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "56px"
---

# Design System: Dra. Thamyris Dahas Daher · Cardiologista

## Overview

**Creative North Star: "O consultório de porta aberta"**

O sistema é o padrão de site de médico, executado com acabamento: chão branco e cinza-frio claríssimo, azul-marinho profundo para manchetes, ação e faixas inteiras de seção, e um teal contido que só aparece em estrelas, checks, ícones de localização e na pílula do WhatsApp. A médica abre a página: o retrato real, grande e próximo, é a prova, e tudo o mais (manchete, botão, nota 5,0) vem logo abaixo dela, em ordem de confiança.

A densidade é calma e legível para um paciente 40+ no celular: texto de corpo a 17px com entrelinha 1,6, linhas curtas (36 a 64ch), muito ar entre seções. A tipografia é uma única sans clara, Biryani, que fala em peso normal e destaca as palavras-chave em negrito dentro da própria frase. A forma é macia e confiante: pílulas para toda ação, cartões com cantos generosos, uma faixa marinho com borda superior curva marcando a passagem do retrato para o conteúdo.

O sistema recusa a página de clínica com ícones em grade e azul hospitalar saturado, e recusa rótulos-sobrelinha (kickers) acima de títulos: cada seção começa direto pela manchete.

**Key Characteristics:**
- Chão claro e frio, marinho como cor de voz e de ação, teal só como sinal.
- Biryani 400 com palavras-chave em 700 na mesma linha.
- Toda ação é pílula marinho com ícone e seta, sempre seguida da nota 5,0.
- Retrato real da médica como peça principal, com selos em vidro translúcido sobre a foto.
- Faixa marinho de borda curva como transição de seção assinatura.
- Movimento mínimo: uma chegada no hero, a barra fixa no celular, o FAQ que abre por altura.

## Colors

Paleta fria e médica sem cara de hospital: marinho profundo sobre branco-gelo, com teal reservado para sinais.

### Primary
- **Marinho Consultório** (`navy`): cor de ação e de faixa. Botões principais, barra fixa do celular, faixa "Para quem é a consulta", fechamento, cartão de depoimento em destaque, `theme-color` do navegador. Branco sobre ele mede 11,8:1.
- **Marinho Tinta** (`navy-ink`): cor de manchete e de texto forte sobre chão claro (h1, h2, títulos de serviço, nomes, valores). 13,9:1 sobre `ground`.
- **Marinho Fundo** (`navy-deep`): faixa "Na consulta", um degrau mais escuro que `navy` para separar duas faixas escuras próximas.
- **Marinho Ativo** (`navy-hover`): hover dos botões marinho e dos links.
- **Marinho Noite** (`navy-night`): só o rodapé, o ponto mais escuro da página.

### Secondary
- **Teal Clínico** (`teal`): pílula do WhatsApp no topo, setas dos serviços, ícone do FAQ, pino do endereço. Escolhido mais escuro que o teal da comp para dar peso à pílula.
- **Teal Tinta** (`teal-ink`): hover da pílula do WhatsApp e texto teal sobre claro (rótulos de grupo de serviço, datas da linha do tempo), 5,95:1 sobre branco.
- **Teal Luz** (`teal-bright`): só sobre marinho: disco dos checks, filete antes do título da faixa, estrelas nas superfícies escuras, anel de foco e filete superior dos itens "Na consulta".
- **Estrela** (`star`): estrelas da nota sobre chão claro.

### Neutral
- **Chão Gelo** (`ground`): fundo da página, do hero e dos itens fechados do FAQ.
- **Papel** (`paper`): barra do topo, seções "Sobre" e "Dúvidas", cartões, hover das linhas de serviço.
- **Névoa** (`mist`): fundo de espera do mapa.
- **Filete** (`rule`): divisórias de 1px de listas (serviços, linha do tempo, dados do endereço).
- **Tinta** (`ink`): corpo de texto.
- **Tinta Suave** (`ink-2`): texto secundário, notas, meta, links do menu. 7,25:1 sobre `ground`.
- **Sobre Marinho** (`on-navy`) e **Sobre Marinho Suave** (`on-navy-2`): texto principal e secundário nas faixas escuras (`on-navy-2` mede 6,9:1 sobre `navy`).

### Named Rules
**The Teal Is a Signal Rule.** Teal nunca pinta superfície nem manchete. Ele marca estrela, check, seta, pino e a pílula do WhatsApp; tudo o que é título, faixa ou ação principal é marinho.

**The Two-Tone Night Rule.** Faixas escuras usam apenas a família marinho (`navy`, `navy-deep`, `navy-night`); nunca preto, nunca cinza. Duas faixas escuras vizinhas se separam por degrau de marinho, não por linha.

## Typography

**Display Font:** Biryani (com system-ui, sans-serif), auto-hospedada via @fontsource
**Body Font:** Biryani
**Label/Mono Font:** Biryani (sem mono)

**Character:** Uma única sans arredondada e aberta, de leitura fácil para paciente mais velho. A hierarquia vem de tamanho e de negrito pontual, não de troca de família.

### Hierarchy
- **Display** (400 com palavras-chave em 700, clamp de 2,5rem a 3,125rem no desktop, entrelinha 1,14): só a manchete do hero. No celular escala pela unidade da comp (`--u`), mínimo 25px, entrelinha 1,2, centralizada em três linhas com quebras manuais; no desktop as quebras somem e vale `text-wrap: balance`.
- **Headline** (400 com palavras-chave em 700, clamp de 1,75rem a 2,75rem, entrelinha 1,15): títulos de seção, com `text-wrap: balance`. Exceção: o título da faixa "Para quem é a consulta" é todo em 700 e precedido por filete teal.
- **Title** (700, 1,1875rem, entrelinha 1,3): título de serviço, itens da faixa, nomes. Itens "Na consulta" sobem a 1,375rem.
- **Body** (400, 1,0625rem, entrelinha 1,6): todo texto corrido, com medida de 36 a 64ch. Lede do "Sobre" a 1,25rem.
- **Label** (600, 0,9375rem): menu, datas, meta de endereço, perguntas do FAQ (1,0625rem/600).
- **Brand role** (400, 0,6875rem no desktop, espaçamento 0,24em, maiúsculas): só o "Cardiologista" sob o nome na marca. É parte do logotipo, não um estilo de rótulo reutilizável.
- **Score** (700, 3,25rem, entrelinha 1, -0,03em): o número 5,0 da seção de avaliações.

### Named Rules
**The Bold Keyword Rule.** Manchetes são escritas em peso 400 e só as palavras que carregam o argumento vão em 700 (`<b>`), dentro da mesma frase. Nunca a manchete inteira em negrito, salvo o título da faixa.

**The Headline-First Rule.** Nenhuma seção tem rótulo-sobrelinha (kicker/eyebrow) acima do título. A seção abre pela manchete; contexto vai num parágrafo abaixo dela.

## Layout

Mobile-first. Abaixo de 1100px o topo e o hero são escalados pela unidade `--u` (1px da comp aprovada de 1024px, proporcional à largura da tela, com mínimos em px para cada medida), de modo que o celular reproduz a comp: retrato no alto (até 46svh / 390px em telas ≤600px), selos na base da foto, manchete centralizada, botão pílula quase em largura total, nota 5,0 e nota de local.

Do primeiro scroll em diante as seções usam um contêiner de 1180px com respiro lateral de 20px (40px a partir de 640px) e espaçamento vertical `section`. Cabeçalhos de seção limitam a 640px e separam-se do conteúdo por `head-gap`.

- **Tablet (≥720px):** serviços e "Na consulta" em três colunas; depoimentos em duas, com o depoimento em destaque ocupando a linha inteira.
- **Desktop (≥1100px):** o hero vira duas colunas (texto 1,1fr à esquerda, retrato 0,9fr à direita com cantos de 28px), manchete alinhada à base da célula superior e ação ao topo da inferior. A comp governa só o celular. O topo ganha menu de âncoras e a pílula do WhatsApp encolhe a 46px. A faixa vira grade 0,9fr/1,1fr com lista em duas colunas; "Sobre" 1,15fr/0,85fr; depoimentos em três colunas com o destaque ocupando duas linhas; FAQ 0,8fr/1,2fr; endereço 0,85fr/1,15fr com mapa esticado. A barra fixa some.

O topo é fixo (sticky) com um filete de sombra de 1px. No celular, uma barra de agendamento fixa aparece no rodapé da tela quando a ação do hero sai de vista por cima.

## Elevation & Depth

Híbrido: a página é majoritariamente plana e separa planos por tom (gelo, papel, marinho). Sombras existem, sempre difusas, com deslocamento só para baixo e tingidas de marinho (`rgb(8 39 79 / …)`), nunca pretas, exceto o botão claro sobre marinho.

### Shadow Vocabulary
- **Pílula** (`box-shadow: 0 6px 18px -8px rgb(8 39 79 / 0.45)`): pílula do WhatsApp.
- **Botão suave** (`box-shadow: 0 10px 30px -12px rgb(8 39 79 / 0.28)`): botão marinho em repouso; no hover sobe para `0 14px 34px -14px rgb(8 39 79 / 0.55)`.
- **Cartão** (`box-shadow: 0 1px 2px rgb(8 39 79 / 0.06), 0 12px 32px -20px rgb(8 39 79 / 0.25)`): depoimentos; o FAQ aberto usa a variante `0 14px 36px -22px … / 0.35`.
- **Retrato e mapa** (`0 30px 60px -40px rgb(8 39 79 / 0.45)` e `0 14px 40px -24px rgb(8 39 79 / 0.4)`): peças grandes de mídia no desktop.
- **Barra fixa** (`0 16px 36px -12px rgb(8 39 79 / 0.6)`): a mais forte, porque flutua sobre qualquer conteúdo.
- **Vidro do selo**: fundo `rgb(228 242 248 / 0.88)` com `backdrop-filter: blur(8px)` e sombra `0 8px 22px -14px rgb(8 39 79 / 0.5)`, só nos selos sobre o retrato.

### Named Rules
**The Navy Shadow Rule.** Toda sombra é tingida de marinho e espalhada, com spread negativo. Sombra dura, deslocada ou preta não pertence a este mundo.

## Shapes

A forma é macia. Toda ação é pílula completa (`pill`): botões, pílula do WhatsApp, barra fixa, selos do retrato. Superfícies de conteúdo têm cantos generosos e crescentes conforme o tamanho: linha de serviço no hover (`row`), alerta da faixa (`alert`), itens do FAQ (`faq`), cartões de depoimento (`card`), mapa (`map`), retrato no desktop (`portrait`). Checks são discos perfeitos.

A silhueta assinatura é a borda superior da faixa marinho: uma elipse (`clip-path: ellipse(75% 100% at 50% 100%)`) de 26u a 28px de altura que faz o marinho subir em curva suave sob o hero. Listas usam filetes horizontais de 1px em `rule`, sem caixas; os itens "Na consulta" usam filete superior de 2px em teal luz a 55%.

## Components

### Buttons
Confiantes e grandes, sempre com o ícone do WhatsApp à esquerda e uma seta à direita.
- **Shape:** pílula completa (`pill`).
- **Primary:** marinho com texto branco em 700; 60px de altura nas seções, 64px no hero do desktop; no hero do celular escala pela comp (mínimo 56px, quase largura total, texto até 45u).
- **Hover / Focus:** fundo vai a `navy-hover`, sombra se aprofunda, seta anda 4px para a direita; `:active` encolhe a 0,985. Foco é anel de 3px em `teal-bright` com 3px de afastamento.
- **Light:** branco com texto `navy-ink`, só sobre faixas marinho; hover `#e8f1fb`.
- **Regra de par:** o botão principal é sempre seguido da nota 5,0 (estrelas + "5,0" + contagem de opiniões), no hero e no fechamento.

### Pílula do WhatsApp (topo)
- Teal com texto branco em 600 e ícone do WhatsApp, à direita da barra do topo. Hover `teal-ink`, `:active` 0,97. 46px no desktop, escalada pela comp no celular (mínimo 40px).

### Selos do retrato
- Pílulas de vidro translúcido azulado sobre a base do retrato, ícone lucide em traço fino e texto `navy-ink` com a parte forte em 800. Um à esquerda (CRM · RQE), um à direita (formação). Chegam com leve subida escalonada.

### Cards / Containers
- **Depoimento:** papel, cantos `card`, padding 24px, sombra de cartão, estrelas pequenas no topo, citação em corpo, autor em `navy-ink`.
- **Depoimento em destaque:** marinho, citação em branco 600 a 1,375rem (1,75rem no desktop), estrelas em teal luz.
- **Alerta da faixa:** branco a 8% sobre marinho, cantos `alert`, texto 0,9375rem, link em branco 700.

### Linhas de serviço
- Lista sem caixa entre filetes. Título em 700 `navy-ink`, descrição em corpo, seta diagonal teal à direita. No hover a linha ganha fundo papel, recua 12px à esquerda e a seta anda na diagonal.

### Navigation
- Barra branca fixa: marca (símbolo marinho + nome em 400 + "Cardiologista" em maiúsculas espaçadas) à esquerda, pílula do WhatsApp à direita. No desktop, menu de âncoras em `label` `ink-2`, hover `navy`. Sem menu hambúrguer no celular.

### FAQ
- Itens em gelo com cantos `faq`; aberto vira papel com sombra de cartão. Pergunta em 600 `navy-ink`, ícone "+" teal que gira 45°. O painel abre animando `grid-template-rows` de 0fr para 1fr (0,4s).

### Barra fixa de agendamento (celular)
- Pílula marinho de 56px, 12px das bordas, respeita a área segura. Entra deslizando de baixo quando a ação do hero sai da tela por cima; com movimento reduzido, só aparece por opacidade. Some no desktop.

### Movimento
Uma única chegada: o retrato assenta de escala 1,06 e leve dessaturação para o normal (1,4s), os selos sobem (0,9s, atrasos 0,35s e 0,5s) e o ícone do WhatsApp do botão do hero balança uma vez aos 1,6s. Fora isso, só transições de estado (0,2 a 0,45s) com `cubic-bezier(0.16, 1, 0.3, 1)`. Tudo isso fica dentro de `prefers-reduced-motion: no-preference`; o scroll suave também é desligado com movimento reduzido.

## Do's and Don'ts

### Do:
- **Do** usar marinho (`navy`) para toda ação principal e para faixas inteiras, e `navy-ink` para manchetes sobre claro.
- **Do** escrever manchetes em Biryani 400 com só as palavras-chave em 700.
- **Do** fazer toda ação em pílula completa com ícone do WhatsApp e seta, seguida da nota 5,0.
- **Do** tingir toda sombra de marinho (`rgb(8 39 79 / …)`), difusa e com spread negativo.
- **Do** manter o retrato real da médica como primeira imagem, com selos de credencial em vidro translúcido sobre a foto.
- **Do** abrir a transição do hero para o conteúdo com a faixa marinho de borda curva.
- **Do** limitar o movimento a uma chegada no hero, à barra fixa do celular e ao FAQ, e respeitar `prefers-reduced-motion`.
- **Do** usar a pílula do WhatsApp do topo em `teal`, mais escuro que o teal da comp, com hover em `teal-ink`.

### Don't:
- **Don't** colocar rótulo-sobrelinha (kicker/eyebrow) acima de títulos de seção.
- **Don't** usar teal em superfícies, manchetes ou no botão principal; ele é só sinal.
- **Don't** usar `teal-bright` sobre fundo claro; ele existe para as superfícies marinho.
- **Don't** usar sombra preta, dura ou deslocada, nem cantos retos em ações.
- **Don't** montar grade de ícones de especialidade nem azul hospitalar saturado.
- **Don't** trocar de família tipográfica para hierarquia; Biryani faz tudo.
