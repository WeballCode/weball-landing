// Weball Scores: tarjeta "Partidos todos los días" con un feed de resultados que van entrando en vivo.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView } from './motion.jsx'
import { COMMUNITY_URL } from '../links.js'

// Resultados de ejemplo de distintas ligas y categorías
const matches = [
  { league: 'Futsal · Primera', home: 'Atl. Unión', away: 'Dep. Norte', score: '3 - 1' },
  { league: 'Handball · Mayores', home: 'San Martín', away: 'Los Andes', score: '27 - 24' },
  { league: 'Futsal · Femenino', home: 'Villa Luro', away: 'Pacífico', score: '2 - 2' },
  { league: 'Liga Sur · Sub 17', home: 'El Ceibo', away: 'La Paternal', score: '1 - 0' },
  { league: 'Futsal · Reserva', home: 'Dep. Norte', away: 'San Martín', score: '4 - 3' },
  { league: 'Handball · Femenino', home: 'Los Andes', away: 'Atl. Unión', score: '22 - 25' },
  { league: 'Liga Norte · Veteranos', home: 'Pacífico', away: 'El Ceibo', score: '0 - 2' },
]
const VISIBLE = 4
const EVERY_MS = 1800

export default function ScoresFeed() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  // Cuántos resultados ya entraron (el más nuevo va arriba)
  const [count, setCount] = useState(VISIBLE)

  useEffect(() => {
    if (!inView || reduced) return
    const timer = setInterval(() => setCount((c) => c + 1), EVERY_MS)
    return () => clearInterval(timer)
  }, [inView, reduced])

  const feed = Array.from({ length: VISIBLE }, (_, i) => {
    const n = count - 1 - i
    return { ...matches[n % matches.length], key: n }
  })

  return (
    <div ref={ref} className="flex flex-col border-t-[6px] border-celeste bg-marino-claro p-7 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <p className="text-3xl font-extrabold uppercase leading-none">Partidos todos los días</p>
        <span className="flex shrink-0 items-center gap-1.5 bg-celeste px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-marino">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-marino" />
          En vivo
        </span>
      </div>

      <ul className="mt-8 flex flex-col gap-2" aria-label="Últimos resultados de la comunidad">
        {feed.map((m, i) => (
          <li
            key={m.key}
            className={`flex items-center justify-between gap-3 px-4 py-3 ${i === 0 ? 'chip-in bg-celeste text-marino' : 'bg-marino text-blanco'}`}
          >
            <div className="min-w-0">
              <p className={`text-xs font-bold uppercase tracking-[0.15em] ${i === 0 ? 'text-marino' : 'text-celeste'}`}>{m.league}</p>
              <p className="truncate font-bold">
                {m.home} <span className={i === 0 ? 'text-marino' : 'text-bruma'}>vs</span> {m.away}
              </p>
            </div>
            <span className="shrink-0 text-xl font-extrabold tabular-nums">{m.score}</span>
          </li>
        ))}
      </ul>

      {COMMUNITY_URL && (
        <a
          href={COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 self-start border-2 border-celeste px-6 py-3 font-bold uppercase tracking-wide text-celeste transition hover:bg-celeste hover:text-marino"
        >
          Ver todos los partidos
        </a>
      )}
    </div>
  )
}
