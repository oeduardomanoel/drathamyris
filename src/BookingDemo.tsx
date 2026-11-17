import { Stage, Phone, Thread, Bubble, Stamp, Receipt, Avatar, type Act } from './kit'
import './booking-demo.css'

// Agendamento pelo celular: a paciente digita o pedido, envia, o consultório
// responde com o horário e a confirmação fica na tela como resultado.

type S = { draft: string; sent: boolean; delivered: boolean; read: boolean; typing: boolean; reply: boolean; typing2: boolean; confirm: boolean }
const initial: S = { draft: '', sent: false, delivered: false, read: false, typing: false, reply: false, typing2: false, confirm: false }
const poster: S = { ...initial, sent: true, delivered: true, read: true, reply: true, confirm: true }
const MINE = 'Pode ser quinta às 14h?'

async function script(a: Act<S>) {
  await a.wait(700)
  await a.click('compose')
  await a.type('draft', MINE, { interval: 60 })
  await a.wait(400)
  await a.click('send')
  await a.set({ sent: true, draft: '' })
  await a.wait(600)
  await a.set({ delivered: true })
  await a.wait(800)
  await a.set({ read: true })
  await a.wait(600)
  await a.set({ typing: true })
  await a.wait(1400)
  await a.set({ typing: false, reply: true })
  await a.wait(700)
  await a.set({ typing2: true })
  await a.wait(1200)
  await a.set({ typing2: false, confirm: true })
  await a.wait(3000)
}

function ArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M8 13V3.5M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function BookingDemo() {
  return (
    <Stage
      width={420}
      height={400}
      compact={{ below: 420, width: 358, height: 400 }}
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: 'compose', style: 'touch' }}
      className="bk"
    >
      {(s) => (
        <Phone width={340} className="bk-phone">
          <div className="bk-head">
            <Avatar name="Consultório Thamyris" tone="ios" size={48} className="bk-avatar" />
            <span className="bk-name">Consultório Dra. Thamyris</span>
          </div>
          <Thread className="bk-thread">
            <Stamp>Hoje 9:32</Stamp>
            <Bubble from="me">Bom dia! Gostaria de agendar uma consulta com a Dra. Thamyris.</Bubble>
            <Stamp>Hoje 9:38</Stamp>
            <Bubble from="them">Bom dia! Temos horários nesta semana.</Bubble>
            <Bubble from="them">Qual dia fica melhor para você?</Bubble>
            {s.sent && (
              <Bubble from="me" source="draft">
                {MINE}
              </Bubble>
            )}
            <Receipt show={s.delivered && !s.reply}>{s.read ? 'Lida 9:41' : 'Entregue'}</Receipt>
            {(s.typing || s.reply) && (
              <Bubble from="them" typing={s.typing}>
                Pode sim! Quinta, 14h, na Av. do Estado, 871.
              </Bubble>
            )}
            {(s.typing2 || s.confirm) && (
              <Bubble from="them" typing={s.typing2}>
                Consulta confirmada ✓
              </Bubble>
            )}
          </Thread>
          <div className="bk-compose">
            <span className="bk-plus" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 2.5v11M2.5 8h11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="bk-field" data-target="compose">
              <span className="bk-field__text" data-target="draft">
                {s.draft}
                {s.draft && <i className="bk-caret" data-snap />}
              </span>
              <span className="bk-field__ph" data-hide={s.draft ? '' : undefined}>
                Mensagem
              </span>
              <span className="bk-send" data-target="send" data-show={s.draft ? '' : undefined}>
                <ArrowUp />
              </span>
            </span>
          </div>
        </Phone>
      )}
    </Stage>
  )
}
