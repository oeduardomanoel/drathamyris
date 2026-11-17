import { ArrowUpRight, ArrowRight, Star } from 'lucide-react'
import BookingDemo from './BookingDemo'
import { useReveal } from './useReveal'

const BOOK_URL = 'https://www.doctoralia.com.br/perfil/thamyris-dahas-daher#profile-pricing'
const REVIEWS_URL = 'https://www.doctoralia.com.br/perfil/thamyris-dahas-daher#profile-reviews'
const ADDRESS = 'Avenida do Estado Dalmo Vieira, 871, Centro, Balneário Camboriú, SC, 88331-490'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS)

const serviceGroups = [
  {
    label: 'Consultas',
    items: [
      { title: 'Consulta cardiológica', text: 'Avaliação completa do coração, da história clínica aos exames.' },
      { title: 'ECG (eletrocardiograma)', text: 'Registro da atividade elétrica do coração, no próprio consultório.' },
      { title: 'Retorno de consultas', text: 'Revisão de exames e ajuste do tratamento.' },
    ],
  },
  {
    label: 'Avaliações',
    items: [
      { title: 'Risco cirúrgico', text: 'Segurança cardiovascular antes de qualquer procedimento.' },
      { title: 'Pré-operatório', text: 'Laudo e orientações para chegar preparado à cirurgia.' },
      { title: 'Avaliação para esportes', text: 'Liberação para atividade física com segurança.' },
    ],
  },
  {
    label: 'Cuidado contínuo',
    items: [
      { title: 'Check up', text: 'Panorama da saúde cardiovascular e metabólica.' },
      { title: 'Prevenção cardiovascular', text: 'Controle dos fatores de risco antes que virem doença.' },
      { title: 'Tratamento da hipertensão', text: 'Pressão sob controle, com plano individual e acompanhamento.' },
    ],
  },
]

const featured = {
  name: 'Thatiane Thieme',
  service: 'Consulta Cardiologia',
  text: 'Muito atenciosa, detalhista nas explicações e clara nas orientações.',
}

const reviews = [
  { name: 'Rodrigo', service: 'Check up', date: 'set. 2025', text: 'Muito educada, atenciosa e humana. Tirou todas as minhas dúvidas.' },
  { name: 'Jéssica L.', service: 'Risco cirúrgico', date: 'ago. 2025', text: 'Ótimo atendimento objetivo, confortável, explicativo. Muito grata por toda atenção da Dra. Thamyris.' },
  { name: 'Maria Elair Garcia', service: 'Consulta Cardiologia', date: 'jul. 2025', text: 'Excelente profissional, superindico, atendimento excelente, explica tudo com detalhes, adorei!' },
  { name: 'Grasi Gris', service: 'Consulta Cardiologia', date: 'jul. 2025', text: 'Fiquei impressionada com a atenção e carinho, me surpreendeu!' },
]

const education = [
  { when: '2013', title: 'Graduação em Medicina', place: 'Universidade de Cuiabá' },
  { when: 'Residência', title: 'Clínica Médica', place: 'Secretaria Municipal de Saúde de São Paulo' },
  { when: 'Especialização', title: 'Cardiologia', place: 'UNICAMP' },
  { when: 'Desde 2018', title: 'Atendimento em Balneário Camboriú', place: 'Cebrale, Centro' },
]

/** O fio de ECG: uma linha só, desenhada uma vez. */
function Pulse({ className }: { className?: string }) {
  return (
    <svg className={`pulse ${className ?? ''}`} viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden>
      <path
        pathLength={1}
        d="M0 48 H520 l14 0 l10 -10 l10 10 l12 0 l8 14 l16 -58 l16 74 l10 -30 l12 0 l14 -8 l16 8 H1200"
      />
    </svg>
  )
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="stars" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <header className="nav">
        <div className="wrap nav__inner">
          <a href="#topo" className="brand" aria-label="Início">
            Dra. Thamyris Dahas Daher
          </a>
          <nav className="nav__links" aria-label="Seções">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#local">Endereço</a>
          </nav>
          <a className="btn btn--primary btn--sm" href={BOOK_URL} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="kicker reveal">Cardiologista · Balneário Camboriú</p>
              <h1 className="reveal" style={{ ['--d' as string]: '80ms' }}>
                Um coração bem cuidado começa com uma <em>boa conversa.</em>
              </h1>
              <p className="lead reveal" style={{ ['--d' as string]: '160ms' }}>
                Consultas sem pressa, explicações claras e um plano feito para você. Check up, hipertensão, risco cirúrgico e avaliação para esportes.
              </p>
              <div className="actions reveal" style={{ ['--d' as string]: '240ms' }}>
                <a className="btn btn--primary" href={BOOK_URL} target="_blank" rel="noreferrer">
                  Agendar consulta <ArrowRight size={20} />
                </a>
                <a className="link" href="#servicos">
                  Ver serviços
                </a>
              </div>
            </div>

            <figure className="hero__figure">
              <img src="/dra-thamyris.jpeg" alt="Dra. Thamyris Dahas Daher sorrindo, de jaleco branco" width={500} height={500} />
            </figure>

            <dl className="hero__facts reveal" style={{ ['--d' as string]: '320ms' }}>
              <div>
                <dt>Avaliação no Doctoralia</dt>
                <dd>
                  <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="fact-link">
                    <span className="fact-num">5,0</span> <Stars size={14} />
                  </a>
                  <span className="fact-sub">85 opiniões de pacientes</span>
                </dd>
              </div>
              <div>
                <dt>Registro</dt>
                <dd>
                  <span className="fact-num fact-num--sm">CRM SC 26991</span>
                  <span className="fact-sub">RQE 17108</span>
                </dd>
              </div>
              <div>
                <dt>Convênio</dt>
                <dd>
                  <span className="fact-num fact-num--sm">Unimed</span>
                  <span className="fact-sub">e particular</span>
                </dd>
              </div>
            </dl>
          </div>
          <Pulse className="hero__pulse" />
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section">
          <div className="wrap">
            <header className="sec-head reveal">
              <span className="sec-num">01</span>
              <h2>Serviços</h2>
              <p className="sec-sub">Do primeiro check up ao acompanhamento de longo prazo. Valores sob consulta.</p>
            </header>
            <div className="services">
              {serviceGroups.map((g) => (
                <div key={g.label} className="svc-group reveal">
                  <h3 className="svc-group__label">{g.label}</h3>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s.title} className="svc">
                        <span className="svc__title">{s.title}</span>
                        <span className="svc__text">{s.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CITAÇÃO */}
        <section className="quote-band" aria-label="Depoimento em destaque">
          <div className="wrap quote-band__inner reveal">
            <Stars size={20} />
            <blockquote>“{featured.text}”</blockquote>
            <p className="quote-band__by">
              {featured.name} <span>· {featured.service}, via Doctoralia</span>
            </p>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section">
          <div className="wrap about">
            <header className="sec-head reveal">
              <span className="sec-num">02</span>
              <h2>Sobre a médica</h2>
            </header>
            <div className="about__body reveal">
              <p className="about__lede">
                Formada em 2013, com residência em Clínica Médica em São Paulo e especialização em Cardiologia pela UNICAMP.
              </p>
              <p>
                Atende em Balneário Camboriú desde 2018, com foco em prevenção, hipertensão e dislipidemias, avaliação para atividade física, reabilitação cardiovascular e saúde metabólica. O cuidado é humanizado e baseado em evidências: cada decisão é explicada, sem pressa.
              </p>
            </div>
            <ol className="timeline reveal">
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

        {/* AGENDAMENTO */}
        <section className="booking">
          <div className="wrap booking__grid">
            <div className="booking__copy reveal">
              <span className="sec-num sec-num--light">03</span>
              <h2>Agendar é simples</h2>
              <ol className="steps">
                <li><span>1</span><div><strong>Escolha o serviço</strong><p>Consulta, check up ou avaliação.</p></div></li>
                <li><span>2</span><div><strong>Combine o horário</strong><p>O que couber na sua semana.</p></div></li>
                <li><span>3</span><div><strong>Receba a confirmação</strong><p>Direto no seu celular.</p></div></li>
              </ol>
              <a className="btn btn--light" href={BOOK_URL} target="_blank" rel="noreferrer">
                Ver horários disponíveis <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="booking__demo" id="demo">
              <BookingDemo />
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="section">
          <div className="wrap">
            <header className="sec-head sec-head--split reveal">
              <div className="sec-head__title">
                <span className="sec-num">04</span>
                <h2>Pacientes</h2>
              </div>
              <a className="score" href={REVIEWS_URL} target="_blank" rel="noreferrer">
                <span className="score__num">5,0</span>
                <span className="score__meta">
                  <Stars />
                  <span>85 opiniões no Doctoralia <ArrowUpRight size={14} /></span>
                </span>
              </a>
            </header>
            <div className="reviews">
              {reviews.map((r) => (
                <figure key={r.name} className="review reveal">
                  <blockquote>“{r.text}”</blockquote>
                  <figcaption>
                    <strong>{r.name}</strong>
                    <span>{r.service} · {r.date}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL */}
        <section id="local" className="section section--last">
          <div className="wrap place">
            <div className="place__copy reveal">
              <span className="sec-num">05</span>
              <h2>Onde atende</h2>
              <address>
                <strong>Cebrale</strong>
                Avenida do Estado Dalmo Vieira, 871
                <br />
                Centro, Balneário Camboriú · SC
                <br />
                CEP 88331-490
              </address>
              <dl className="place__meta">
                <div><dt>Convênio</dt><dd>Unimed e particular</dd></div>
                <div><dt>Pagamento</dt><dd>PIX e dinheiro</dd></div>
              </dl>
              <div className="actions">
                <a className="btn btn--primary" href={BOOK_URL} target="_blank" rel="noreferrer">
                  Agendar consulta <ArrowRight size={20} />
                </a>
                <a className="link" href={MAPS_URL} target="_blank" rel="noreferrer">
                  Como chegar
                </a>
              </div>
            </div>
            <div className="place__map reveal">
              <iframe
                title="Mapa: Avenida do Estado Dalmo Vieira, 871, Balneário Camboriú"
                loading="lazy"
                src={'https://www.google.com/maps?q=' + encodeURIComponent('Avenida do Estado Dalmo Vieira, 871, Balneário Camboriú') + '&output=embed'}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Pulse className="footer__pulse" />
        <div className="wrap footer__inner">
          <p className="footer__name">Dra. Thamyris Dahas Daher</p>
          <p>Cardiologista · CRM SC 26991 · RQE 17108</p>
          <p className="footer__note">Prévia de site. Informações do perfil público no Doctoralia.</p>
        </div>
      </footer>
    </>
  )
}
