import { type ReactNode, useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, GraduationCap, MapPin, Plus, SquareUser, Star } from 'lucide-react'
import portrait from '../assets/plates/portrait.png'

const WA_NUMBER = '554735153260'
const WA_DISPLAY = '(47) 3515-3260'
const DEFAULT_MSG = 'Olá! Gostaria de agendar uma consulta com a Dra. Thamyris.'
export const waLink = (text = DEFAULT_MSG) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

const REVIEWS_URL = 'https://www.doctoralia.com.br/perfil/thamyris-dahas-daher#profile-reviews'
const ADDRESS = 'Avenida do Estado Dalmo Vieira, 871, Centro, Balneário Camboriú, SC, 88331-490'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS)

const situations = [
  'Pressão alta que não baixa',
  'Cirurgia marcada e precisa do risco cirúrgico',
  'Vai começar ou voltar a treinar',
  'Cansaço, falta de ar ou palpitação no esforço',
  'Colesterol alto ou infarto na família',
  'Quer saber como anda o coração',
]

const services = [
  {
    group: 'Consultas',
    items: [
      { title: 'Consulta cardiológica', text: 'Avaliação completa do coração, da história clínica aos exames.' },
      { title: 'ECG (eletrocardiograma)', text: 'Registro da atividade elétrica do coração, no próprio consultório.' },
      { title: 'Retorno', text: 'Revisão dos exames e ajuste do tratamento.' },
    ],
  },
  {
    group: 'Avaliações',
    items: [
      { title: 'Risco cirúrgico', text: 'Segurança cardiovascular antes de qualquer procedimento.' },
      { title: 'Pré-operatório', text: 'Laudo e orientações para chegar preparado à cirurgia.' },
      { title: 'Avaliação para esportes', text: 'Liberação para atividade física com segurança.' },
    ],
  },
  {
    group: 'Cuidado contínuo',
    items: [
      { title: 'Check up', text: 'Panorama da saúde cardiovascular e metabólica.' },
      { title: 'Prevenção cardiovascular', text: 'Controle dos fatores de risco antes que virem doença.' },
      { title: 'Tratamento da hipertensão', text: 'Plano individual e acompanhamento da pressão.' },
    ],
  },
]

const ways = [
  { title: 'Consulta sem pressa', text: 'Tempo para ouvir sua história inteira, não só o sintoma do dia.' },
  { title: 'Cada exame explicado', text: 'Você sai entendendo o resultado e o porquê de cada orientação.' },
  { title: 'Plano feito com você', text: 'Tratamento baseado em evidências e ajustado à sua rotina.' },
]

const reviews = [
  { name: 'Thatiane Thieme', service: 'Consulta cardiologia', date: '', text: 'Muito atenciosa, detalhista nas explicações e clara nas orientações.' },
  { name: 'Rodrigo', service: 'Check up', date: 'set. 2025', text: 'Muito educada, atenciosa e humana. Tirou todas as minhas dúvidas.' },
  { name: 'Jéssica L.', service: 'Risco cirúrgico', date: 'ago. 2025', text: 'Ótimo atendimento objetivo, confortável, explicativo. Muito grata por toda atenção da Dra. Thamyris.' },
  { name: 'Maria Elair Garcia', service: 'Consulta cardiologia', date: 'jul. 2025', text: 'Excelente profissional, superindico, atendimento excelente, explica tudo com detalhes, adorei!' },
  { name: 'Grasi Gris', service: 'Consulta cardiologia', date: 'jul. 2025', text: 'Fiquei impressionada com a atenção e carinho, me surpreendeu!' },
]

const education = [
  { when: '2013', title: 'Medicina', place: 'Universidade de Cuiabá' },
  { when: 'Residência', title: 'Clínica Médica', place: 'Secretaria Municipal de Saúde de São Paulo' },
  { when: 'Especialização', title: 'Cardiologia', place: 'UNICAMP' },
  { when: 'Desde 2018', title: 'Consultório em Balneário Camboriú', place: 'Cebrale, Centro' },
]

const Phone = () => <span className="nowrap">{WA_DISPLAY}</span>

const faq: { q: string; a: ReactNode }[] = [
  {
    q: 'Como faço para agendar?',
    a: (
      <>
        Pelo WhatsApp da clínica, <Phone />. É só tocar em “Agendar pelo WhatsApp”: a mensagem já vai pronta e a equipe responde com os horários disponíveis.
      </>
    ),
  },
  {
    q: 'Atende convênio?',
    a: 'Atende Unimed e particular. No particular, o pagamento é por PIX ou dinheiro. Valores sob consulta.',
  },
  {
    q: 'O que devo levar na primeira consulta?',
    a: 'Documento, carteirinha do convênio se tiver, exames anteriores (mesmo os antigos) e a lista dos remédios que você usa, com as doses.',
  },
  {
    q: 'O eletrocardiograma é feito na hora?',
    a: 'O ECG é feito no próprio consultório. Se for preciso algum outro exame, a Dra. explica qual, por quê e onde fazer.',
  },
  {
    q: 'Preciso de risco cirúrgico. Como funciona?',
    a: 'Você passa por consulta e avaliação cardiológica antes do procedimento e sai com o laudo para o seu cirurgião. Se tiver data marcada, avise no agendamento.',
  },
  {
    q: 'Estou com dor no peito agora. Posso marcar consulta?',
    a: 'Não espere a consulta. Dor no peito forte, falta de ar intensa ou desmaio pedem atendimento imediato: procure um pronto-socorro ou ligue 192.',
  },
]

/** Marca: coração em contorno com o traço do pulso. */
function HeartMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 44" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 41 6.6 24.2A11.6 11.6 0 0 1 23 7.8l1 1 1-1a11.6 11.6 0 0 1 16.4 16.4L24 41Z" />
      <path d="M8 23h9l3-6 5 12 3-6h12" />
    </svg>
  )
}

/** Glifo de conversa no WhatsApp: balão com fone. */
function WhatsGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3.6 20.4 5 16.3A8.6 8.6 0 1 1 8 19.1l-4.4 1.3Z" />
      <path
        d="M9.2 8.4c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.6.4-1.5.6-2.4.3-2.3-.8-4.2-2.7-5-5-.2-.9 0-1.8.4-2.4Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

function Stars() {
  return (
    <span className="stars" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

function Cta({ label = 'Agendar pelo WhatsApp', message, tone = 'navy' }: { label?: string; message?: string; tone?: 'navy' | 'light' }) {
  return (
    <a className={`cta cta--${tone}`} href={waLink(message)} target="_blank" rel="noreferrer">
      <WhatsGlyph />
      {label}
      <ArrowRight className="cta__arrow" strokeWidth={2.4} />
    </a>
  )
}

function Rating({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <a className={`rating rating--${tone}`} href={REVIEWS_URL} target="_blank" rel="noreferrer">
      <Stars />
      <span>
        <b>5,0</b> · 85 opiniões no Doctoralia
      </span>
      <span className="sr-only">(abre o perfil no Doctoralia)</span>
    </a>
  )
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq">
      {faq.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <Plus className="faq__icon" strokeWidth={2.2} aria-hidden />
              </button>
            </h3>
            <div className="faq__panel" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function App() {
  const heroAct = useRef<HTMLDivElement>(null)
  const [dock, setDock] = useState(false)
  useEffect(() => {
    const el = heroAct.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setDock(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="top">
        <a href="#topo" className="brand" aria-label="Dra. Thamyris Dahas Daher, cardiologista. Início">
          <HeartMark className="brand__mark" />
          <span>
            <span className="brand__name">Dra. Thamyris Dahas Daher</span>
            <span className="brand__role">Cardiologista</span>
          </span>
        </a>
        <nav className="top__nav" aria-label="Seções">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#endereco">Endereço</a>
        </nav>
        <a className="pill-wa" href={waLink()} target="_blank" rel="noreferrer">
          <WhatsGlyph />
          WhatsApp
        </a>
      </header>

      <main id="topo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__portrait">
            <img
              src={portrait}
              alt="Dra. Thamyris Dahas Daher sorrindo, de jaleco branco, no consultório"
              width={1536}
              height={960}
              {...{ fetchpriority: 'high' }}
            />
            <p className="badge badge--crm">
              <SquareUser strokeWidth={1.7} />
              <span>
                CRM SC 26991 ·<br /> RQE 17108
              </span>
            </p>
            <p className="badge badge--edu">
              <GraduationCap strokeWidth={1.6} />
              <span>
                Especialização
                <strong>UNICAMP</strong>
              </span>
            </p>
          </div>

          <h1 id="hero-title">
            <b>Um coração bem cuidado</b>
            <br /> começa com uma <b>consulta</b>
            <br /> <b>sem pressa.</b>
          </h1>
          <div className="hero__act" ref={heroAct}>
            <Cta />
            <Rating />
            <p className="hero__note">Centro de Balneário Camboriú · Unimed e particular</p>
          </div>
        </section>

        <section className="band" id="conteudo" aria-labelledby="para-quem">
          <div className="wrap band__grid">
            <div>
              <h2 id="para-quem" className="band__title">
                Para quem é a consulta
              </h2>
              <p className="band__lede">
                Muita gente chega ao cardiologista por um destes motivos. Se algum é o seu, vale conversar.
              </p>
            </div>
            <ul className="band__list">
              {situations.map((s) => (
                <li key={s}>
                  <span className="check">
                    <Check strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="band__alert">
              Dor no peito forte, falta de ar intensa ou desmaio? Não espere a consulta: procure um pronto-socorro ou ligue <a href="tel:192">192</a>.
            </p>
          </div>
        </section>

        <section className="section" id="servicos" aria-labelledby="servicos-t">
          <div className="wrap">
            <header className="head">
              <h2 id="servicos-t">
                Como posso <b>te ajudar</b>
              </h2>
              <p>Do primeiro check up ao acompanhamento de longo prazo. Toque em um serviço para pedir o agendamento já com o assunto certo.</p>
            </header>
            <div className="services">
              {services.map((g) => (
                <div key={g.group} className="services__group">
                  <h3 className="services__label">{g.group}</h3>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s.title}>
                        <a className="svc" href={waLink(`Olá! Gostaria de agendar: ${s.title}.`)} target="_blank" rel="noreferrer">
                          <span className="svc__body">
                            <span className="svc__title">{s.title}</span>
                            <span className="svc__text">{s.text}</span>
                          </span>
                          <ArrowUpRight className="svc__go" strokeWidth={2} aria-hidden />
                          <span className="sr-only">(agendar pelo WhatsApp)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ways" aria-labelledby="ways-t">
          <div className="wrap">
            <header className="head head--light">
              <h2 id="ways-t">
                O que você encontra <b>na consulta</b>
              </h2>
              <p>O que os pacientes mais destacam nas avaliações é a atenção e a clareza.</p>
            </header>
            <ol className="ways__list">
              {ways.map((w) => (
                <li key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </li>
              ))}
            </ol>
            <div className="ways__act">
              <Cta tone="light" />
            </div>
          </div>
        </section>

        <section className="section about" id="sobre" aria-labelledby="sobre-t">
          <div className="wrap about__grid">
            <div className="about__copy">
              <h2 id="sobre-t">
                Medicina feita <b>com tempo e escuta</b>
              </h2>
              <p className="about__lede">
                Formada em 2013, com residência em Clínica Médica em São Paulo e especialização em Cardiologia pela UNICAMP.
              </p>
              <p>
                Atende em Balneário Camboriú desde 2018, com foco em prevenção, hipertensão e dislipidemias, avaliação para atividade física, reabilitação cardiovascular e saúde metabólica. O cuidado é humanizado e baseado em evidências: cada decisão é explicada, sem pressa.
              </p>
              <Cta />
            </div>
            <ol className="timeline" aria-label="Formação">
              {education.map((e) => (
                <li key={e.title}>
                  <span className="timeline__when">{e.when}</span>
                  <span className="timeline__what">
                    <strong>{e.title}</strong>
                    <span>{e.place}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section reviews" id="avaliacoes" aria-labelledby="aval-t">
          <div className="wrap">
            <header className="head head--split">
              <h2 id="aval-t">
                O que dizem <b>os pacientes</b>
              </h2>
              <a className="score" href={REVIEWS_URL} target="_blank" rel="noreferrer">
                <span className="score__num">5,0</span>
                <span className="score__meta">
                  <Stars />
                  <span>
                    85 opiniões no Doctoralia <ArrowUpRight size={16} aria-hidden />
                  </span>
                </span>
              </a>
            </header>
            <div className="reviews__grid">
              {reviews.map((r, i) => (
                <figure key={r.name} className={`review${i === 0 ? ' review--lead' : ''}`}>
                  <Stars />
                  <blockquote>“{r.text}”</blockquote>
                  <figcaption>
                    <strong>{r.name}</strong>
                    <span>
                      {r.service}
                      {r.date ? ` · ${r.date}` : ''}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="reviews__src">Depoimentos publicados por pacientes no perfil público do Doctoralia.</p>
          </div>
        </section>

        <section className="section faq-sec" id="duvidas" aria-labelledby="faq-t">
          <div className="wrap faq-sec__grid">
            <header className="head">
              <h2 id="faq-t">
                Dúvidas <b>antes da consulta</b>
              </h2>
              <p>Não achou a sua? Mande pelo WhatsApp que a equipe responde.</p>
            </header>
            <Faq />
          </div>
        </section>

        <section className="place" id="endereco" aria-labelledby="end-t">
          <div className="wrap place__grid">
            <div className="place__copy">
              <h2 id="end-t">
                Onde <b>atende</b>
              </h2>
              <address>
                <MapPin strokeWidth={1.8} aria-hidden />
                <span>
                  <strong>Cebrale</strong>
                  Avenida do Estado Dalmo Vieira, 871
                  <br />
                  Centro, Balneário Camboriú · SC · 88331-490
                </span>
              </address>
              <dl className="place__meta">
                <div>
                  <dt>Convênio</dt>
                  <dd>Unimed e particular</dd>
                </div>
                <div>
                  <dt>Pagamento</dt>
                  <dd>PIX e dinheiro</dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={waLink()} target="_blank" rel="noreferrer">
                      <Phone />
                    </a>
                  </dd>
                </div>
              </dl>
              <a className="link" href={MAPS_URL} target="_blank" rel="noreferrer">
                Como chegar <ArrowUpRight size={18} aria-hidden />
              </a>
            </div>
            <div className="place__map">
              <iframe
                title="Mapa: Avenida do Estado Dalmo Vieira, 871, Balneário Camboriú"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={'https://www.google.com/maps?q=' + encodeURIComponent('Avenida do Estado Dalmo Vieira, 871, Balneário Camboriú') + '&output=embed'}
              />
            </div>
          </div>
        </section>

        <section className="close" aria-labelledby="close-t">
          <div className="wrap close__inner">
            <h2 id="close-t">
              Vamos cuidar do <b>seu coração?</b>
            </h2>
            <p>Mande uma mensagem e a equipe da clínica responde com os horários disponíveis.</p>
            <Cta tone="light" />
            <Rating tone="light" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <p className="footer__brand">
            <HeartMark className="footer__mark" />
            Dra. Thamyris Dahas Daher
          </p>
          <p>Cardiologista · CRM SC 26991 · RQE 17108</p>
          <p className="footer__note">Prévia de site, a validar com a Dra. Thamyris. Avaliações e formação vêm do perfil público no Doctoralia; as respostas das dúvidas são um rascunho para revisão.</p>
        </div>
      </footer>

      <a className={`dock${dock ? " is-on" : ""}`} href={waLink()} target="_blank" rel="noreferrer" aria-hidden={!dock} tabIndex={dock ? 0 : -1}>
        <WhatsGlyph />
        Agendar pelo WhatsApp
      </a>
    </>
  )
}
