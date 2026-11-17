# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, both real:

- **A Dra. Thamyris Dahas Daher (decisora da compra).** Cardiologista em Balneário Camboriú. Ela ainda não é cliente: recebe este site como prévia de prospecção e decide se contrata.
- **Pacientes da região (usuários finais).** Adultos, em boa parte 40+, em Balneário Camboriú e arredores: hipertensos, gente fazendo check up, pacientes que precisam de risco cirúrgico ou pré-operatório, esportistas pedindo liberação. Leem no celular, muitas vezes com pressa ou alguma ansiedade. Trabalho: confiar na médica e marcar consulta.

O site precisa convencer pacientes de verdade; é isso que convence a médica.

## Product Purpose

Landing page de conversão para agendamento. Sucesso: o paciente clica e abre conversa no WhatsApp da clínica para marcar consulta. Para a prospecção, sucesso é a Dra. ver o próprio consultório apresentado de um jeito que ela queira pôr no ar.

## Positioning

Site próprio da médica, montado a partir do perfil público dela no Doctoralia (5,0, 85 opiniões), com caminho direto para a conversa no WhatsApp da clínica em vez de depender só de diretório de terceiros.

## Operating Context

- Feito por Eduardo Santos (eduardoia-site, IA e automação para negócios de agenda) como prévia não solicitada.
- Agendamento: CTA abre o WhatsApp da clínica, **(47) 3515-3260** (`https://wa.me/554735153260`). Esse é o canal de agendamento da landing.
- Local de atendimento: Cebrale, Avenida do Estado Dalmo Vieira, 871, Centro, Balneário Camboriú, SC, 88331-490.
- Convênio Unimed e particular. Pagamento PIX e dinheiro.

## Capabilities and Constraints

- Stack existente: Vite + React 18 + TypeScript, `lucide-react`, kit `stageshow` em `src/kit/` (usado no `BookingDemo`).
- Serviços confirmados: consulta cardiológica, ECG, retorno, risco cirúrgico, pré-operatório, avaliação para esportes, check up, prevenção cardiovascular, tratamento da hipertensão. Valores sob consulta.
- Publicidade médica segue as regras do CFM (Resolução 2.336/2023): CRM e RQE visíveis, sem promessa de resultado, sem antes/depois.
- Em aberto: se os links atuais para o Doctoralia (agendar/avaliações) ficam como secundários ou saem; domínio e hospedagem finais.

## Brand Commitments

- Nome: Dra. Thamyris Dahas Daher. Registro: CRM SC 26991 · RQE 17108.
- Voz em pt-BR, calorosa e direta: consulta sem pressa, explicação clara, cuidado humanizado e baseado em evidências.
- Linguagem visual: o padrão consagrado de site de médico, executado sem ironia no nível de acabamento da referência do Dr. Bruno Monteiro (`D:\teste\531bfe249533623.6a0a1cbe1d4a0.webp`, Grupo Milano). A referência é régua de acabamento; conteúdo e marca dela não se copiam.
- Personalidade: acolhedora, atenta, precisa. A médica que explica tudo com detalhes (é o que as avaliações elogiam), com autoridade técnica da formação UNICAMP.

## Evidence on Hand

- Foto: `public/dra-thamyris.jpeg`.
- Nota 5,0 com 85 opiniões no Doctoralia; depoimentos reais (Thatiane Thieme, Rodrigo, Jéssica L., Maria Elair Garcia, Grasi Gris) copiados do perfil público, em `src/App.tsx`.
- Formação: Medicina (Universidade de Cuiabá, 2013), residência em Clínica Médica (SMS São Paulo), especialização em Cardiologia (UNICAMP), atende em BC desde 2018.
- Não existe: fotos do consultório, vídeo, prêmios, imprensa, número de pacientes atendidos. Não inventar.

## Product Principles

1. Agendar pelo WhatsApp é a ação; tudo na página serve a ela e ela está sempre a um toque.
2. Confiança vem de fatos verificáveis (CRM, RQE, formação, avaliações reais), nunca de alegações.
3. Celular primeiro: o paciente chega pelo Google ou Instagram no telefone.
4. Fala de médica para paciente, não de marketing: clara, sem jargão, sem urgência artificial.
5. Tem que parecer pronto para ir ao ar, porque a prévia vende o serviço.

## Accessibility & Inclusion

Público inclui pessoas mais velhas e com doença cardiovascular: texto legível em tamanho confortável, contraste WCAG 2.2 AA, alvos de toque grandes, respeito a `prefers-reduced-motion`.
