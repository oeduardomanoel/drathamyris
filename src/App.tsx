import { CalendarCheck, HeartPulse, Activity, Stethoscope, ClipboardCheck, Dumbbell, Scissors, RotateCcw, Gauge, MapPin, Star, GraduationCap, ShieldCheck, Wallet, ArrowRight } from 'lucide-react'
import BookingDemo from './BookingDemo'

const BOOK_URL = 'https://www.doctoralia.com.br/perfil/thamyris-dahas-daher#profile-pricing'
const REVIEWS_URL = 'https://www.doctoralia.com.br/perfil/thamyris-dahas-daher#profile-reviews'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Avenida do Estado Dalmo Vieira, 871, Centro, Balneário Camboriú, SC, 88331-490')

const services = [
  { icon: Stethoscope, title: 'Consulta cardiológica', text: 'Avaliação completa do coração, da história clínica aos exames.' },
  { icon: Activity, title: 'ECG (eletrocardiograma)', text: 'Registro da atividade elétrica do coração, feito no consultório.' },
  { icon: Scissors, title: 'Avaliação do risco cirúrgico', text: 'Segurança cardiovascular antes de qualquer procedimento.' },
  { icon: ClipboardCheck, title: 'Avaliação pré-operatória', text: 'Laudo e orientações para você chegar preparado à cirurgia.' },
  { icon: Dumbbell, title: 'Avaliação para esportes', text: 'Liberação para atividade física com acompanhamento seguro.' },
  { icon: HeartPulse, title: 'Check up', text: 'Panorama da sua saúde cardiovascular e metabólica.' },
  { icon: ShieldCheck, title: 'Prevenção cardiovascular', text: 'Controle de fatores de risco antes que virem doença.' },
  { icon: Gauge, title: 'Tratamento para hipertensão', text: 'Pressão sob controle, com plano individual e acompanhamento.' },
  { icon: RotateCcw, title: 'Retorno de consultas', text: 'Revisão de exames e ajuste do tratamento.' },
]

const reviews = [
  { name: 'Thatiane Thieme', service: 'Consulta Cardiologia', date: 'jul. 2025', text: 'Dra. Thamyres é uma excelente profissional! Muito atenciosa, detalhista nas explicações e clara nas orientações.' },
  { name: 'Rodrigo', service: 'Check up', date: 'set. 2025', text: 'Muito educada, atenciosa e humana. Tirou todas as minhas dúvidas.' },
  { name: 'Maria Elair Garcia', service: 'Consulta Cardiologia', date: 'jul. 2025', text: 'Dra Thamyris, é uma excelente profissional, superindico, atendimento excelente, explica tudo com detalhes, adorei!' },
  { name: 'Jéssica L.', service: 'Avaliação do risco cirúrgico', date: 'ago. 2025', text: 'Ótimo atendimento objetivo, confortável, explicativo. Muito grata por toda atenção da Dra. Thamyris.' },
  { name: 'Grasi Gris', service: 'Consulta Cardiologia', date: 'jul. 2025', text: 'Fiquei impressionada com a atenção e carinho, me surpreendeu!' },
  { name: 'Andrea', service: 'Avaliação do risco cirúrgico', date: 'jul. 2025', text: 'Consulta objetiva, médica atenciosa em vários aspectos.' },
]

const education = [
  { year: '2013', title: 'Medicina', place: 'Universidade de Cuiabá (UNIC)' },
  { year: '', title: 'Residência em Clínica Médica', place: 'Secretaria Municipal de Saúde de São Paulo' },
  { year: '', title: 'Especialização em Cardiologia', place: 'Universidade Estadual de Campinas (UNICAMP)' },
  { year: '2018', title: 'Atuação em Balneário Camboriú', place: 'Atendimento na região desde 2018' },
]

function Stars() {
  return (
    <span className="stars" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <a href="#topo" className="brand">
            <span className="brand__name">Dra. Thamyris Dahas Daher</span>
            <span className="brand__role">Cardiologista</span>
          </a>
          <nav className="nav__links" aria-label="Seções">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#local">Local</a>
          </nav>
          <a className="btn btn--sm btn--primary" href={BOOK_URL} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Cardiologia · Balneário Camboriú</p>
              <h1>Cuidado do coração com escuta, tempo e evidência.</h1>
              <p className="lead">
                Consultas de cardiologia, check up, avaliação de risco cirúrgico e acompanhamento de hipertensão, com atendimento humanizado e baseado em evidências.
              </p>
              <div className="hero__actions">
                <a className="btn btn--lg btn--primary" href={BOOK_URL} target="_blank" rel="noreferrer">
                  <CalendarCheck size={20} /> Agendar consulta
                </a>
                <a className="btn btn--lg btn--ghost" href="#servicos">
                  Ver serviços
                </a>
              </div>
              <a className="rating" href={REVIEWS_URL} target="_blank" rel="noreferrer">
                <Stars />
                <span>
                  <strong>5,0</strong> · 85 avaliações no Doctoralia
                </span>
              </a>
            </div>
            <figure className="hero__photo">
              <img src="/dra-thamyris.jpeg" alt="Dra. Thamyris Dahas Daher, cardiologista" width={500} height={500} />
              <figcaption className="credential">
                <span className="credential__label">Registro</span>
                <span className="credential__value">CRM SC 26991 · RQE 17108</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Serviços</p>
              <h2>Do check up ao pré-operatório</h2>
              <p className="section__sub">Valores sob consulta. Atende Unimed e particular.</p>
            </div>
            <div className="services">
              {services.map(({ icon: I, title, text }) => (
                <article key={title} className="card service">
                  <span className="service__icon">
                    <I size={20} />
                  </span>
                  <div className="stack-8">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split">
            <div className="split__copy">
              <p className="eyebrow">Agendamento</p>
              <h2>Marcar uma consulta é rápido</h2>
              <p className="section__sub">Escolha o serviço, o horário que cabe na sua semana e receba a confirmação no celular.</p>
              <ol className="steps">
                <li><span>1</span>Escolha o serviço</li>
                <li><span>2</span>Combine o melhor horário</li>
                <li><span>3</span>Receba a confirmação</li>
              </ol>
              <a className="btn btn--lg btn--primary" href={BOOK_URL} target="_blank" rel="noreferrer">
                Agendar agora <ArrowRight size={20} />
              </a>
            </div>
            <div className="split__demo" id="demo">
              <BookingDemo />
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container split split--top">
            <div className="split__copy">
              <p className="eyebrow">Sobre</p>
              <h2>Medicina feita com atenção aos detalhes</h2>
              <p className="section__sub">
                Médica formada em 2013, com residência em Clínica Médica e especialização em Cardiologia. Atua em Balneário Camboriú desde 2018, com foco em prevenção, hipertensão e dislipidemias, avaliação para atividade física, reabilitação cardiovascular e saúde metabólica.
              </p>
            </div>
            <ol className="timeline">
              {education.map((e) => (
                <li key={e.title}>
                  <span className="timeline__dot"><GraduationCap size={16} /></span>
                  <div className="stack-4">
                    {e.year && <span className="timeline__year">{e.year}</span>}
                    <strong>{e.title}</strong>
                    <span className="muted">{e.place}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="avaliacoes" className="section section--tint">
          <div className="container">
            <div className="section__head section__head--row">
              <div className="stack-8">
                <p className="eyebrow">Avaliações</p>
                <h2>O que dizem os pacientes</h2>
              </div>
              <a className="score" href={REVIEWS_URL} target="_blank" rel="noreferrer">
                <span className="score__num">5,0</span>
                <span className="stack-4">
                  <Stars />
                  <span className="muted">85 opiniões no Doctoralia</span>
                </span>
              </a>
            </div>
            <div className="reviews">
              {reviews.map((r) => (
                <figure key={r.name} className="card review">
                  <Stars />
                  <blockquote>“{r.text}”</blockquote>
                  <figcaption>
                    <strong>{r.name}</strong>
                    <span className="muted">{r.service} · {r.date}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="local" className="section">
          <div className="container split split--top">
            <div className="split__copy">
              <p className="eyebrow">Onde atende</p>
              <h2>Centro de Balneário Camboriú</h2>
              <ul className="facts">
                <li><MapPin size={20} /><span><strong>Cebrale</strong><br />Avenida do Estado Dalmo Vieira, 871, Centro<br />Balneário Camboriú · SC · 88331-490</span></li>
                <li><ShieldCheck size={20} /><span><strong>Convênio</strong><br />Unimed e particular</span></li>
                <li><Wallet size={20} /><span><strong>Pagamento</strong><br />PIX e dinheiro</span></li>
              </ul>
              <div className="hero__actions">
                <a className="btn btn--lg btn--primary" href={BOOK_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
                <a className="btn btn--lg btn--ghost" href={MAPS_URL} target="_blank" rel="noreferrer">Abrir no mapa</a>
              </div>
            </div>
            <div className="map card">
              <iframe
                title="Mapa do consultório"
                loading="lazy"
                src={'https://www.google.com/maps?q=' + encodeURIComponent('Avenida do Estado Dalmo Vieira, 871, Balneário Camboriú') + '&output=embed'}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="stack-4">
            <strong>Dra. Thamyris Dahas Daher</strong>
            <span>Cardiologista · CRM SC 26991 · RQE 17108</span>
          </div>
          <span>Prévia de site · Balneário Camboriú, SC</span>
        </div>
      </footer>
    </>
  )
}
