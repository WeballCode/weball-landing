import { useEffect, useState } from 'react'
import { tareas } from '../tareas.js'
import { prefersReducedMotion, Reveal, useInView } from './motion.jsx'
import { Etiqueta, Lead, Section, Title } from './ui.jsx'

// Sección marino con la barra de la IA: los pedidos de ejemplo se escriben solos.
const pedidos = tareas.map((t) => t.ejemplo)

const columnas = [
  { titulo: 'Con tus palabras', texto: 'Sin menús ni formularios. Le escribís como a alguien de tu equipo.' },
  { titulo: 'Con tus datos', texto: 'Trabaja sobre los clubes, jugadores y torneos de tu liga en Weball.' },
  { titulo: 'En un solo lugar', texto: 'Lo que llevaba una tarde de planillas queda hecho en una conversación.' },
]

function BarraIA() {
  const [ref, inView] = useInView()
  const [n, setN] = useState(0)
  const [largo, setLargo] = useState(prefersReducedMotion() ? 999 : 0)

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return
    const texto = pedidos[n]
    if (largo < texto.length) {
      const id = setTimeout(() => setLargo(largo + 1), 38)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setLargo(0)
      setN((n + 1) % pedidos.length)
    }, 2200)
    return () => clearTimeout(id)
  }, [inView, n, largo])

  return (
    <div ref={ref} className="borde-ia mt-14 flex max-w-3xl items-center gap-3 rounded-md bg-marino-claro px-5 py-4 sm:px-7 sm:py-5">
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-celeste" fill="currentColor" aria-hidden="true">
        <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z" />
      </svg>
      <span className="min-h-[1.5em] flex-1 text-[1rem] text-blanco sm:text-xl">
        {pedidos[n].slice(0, largo)}
        <span className="caret ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] bg-celeste" />
      </span>
    </div>
  )
}

export default function Escribis() {
  return (
    <Section>
      <Etiqueta>Cómo se usa</Etiqueta>
      <Title>
        Escribís. <span className="texto-ia">Weball lo hace.</span>
      </Title>
      <Lead>Conectás Weball a tu IA una vez, y desde ahí la gestión de tu liga es una conversación.</Lead>

      <BarraIA />

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {columnas.map((c, i) => (
          <Reveal key={c.titulo} delay={i * 120} className="border-t-4 border-celeste pt-5">
            <h3 className="text-xl font-extrabold uppercase">{c.titulo}</h3>
            <p className="mt-2 leading-relaxed text-bruma">{c.texto}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
