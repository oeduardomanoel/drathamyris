import { useEffect } from 'react'

/** Marca .reveal como visível ao entrar na tela. Sem JS ou com movimento reduzido, tudo já aparece. */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('js-reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
