// Torneos a Medida: recuadro celeste "Todos los formatos" con un gráfico que va rotando
// entre copa, liga y grupos. Cada formato se dibuja y da paso al siguiente.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

// Tinta para dibujar sobre celeste
const LINE = '#1d6e9a'
const MARINO = '#032639'
const CELESTE = '#3fb6ff'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

// Trofeo chico sobre un cuadrado marino
function Cup({ x, y }) {
  return (
    <>
      <rect x={x} y={y - 14} width="40" height="28" fill={MARINO} />
      <path d={`M${x + 12} ${y - 6}h16v5a8 8 0 0 1-16 0zM${x + 20} ${y + 7}v3`} stroke={CELESTE} strokeWidth="2.2" />
    </>
  )
}

// Copa: cuadro de eliminatorias de 8 equipos a un campeón
function CupFormat({ on }) {
  const slots = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => 12 + i * 26)
  const r2 = [0, 1, 2, 3].map((i) => (slots[i * 2] + slots[i * 2 + 1]) / 2)
  const r3 = [0, 1].map((i) => (r2[i * 2] + r2[i * 2 + 1]) / 2)
  const final = (r3[0] + r3[1]) / 2
  const join = (a, b, x1, x2) => `M${x1} ${a}h14V${b}h-14M${x1 + 14} ${(a + b) / 2}H${x2}`

  return (
    <svg viewBox="0 0 300 220" className={`h-full w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <g stroke={LINE} strokeWidth="2.5">
        {slots.map((y) => <line key={y} className="draw" pathLength="1" x1="0" y1={y} x2="56" y2={y} />)}
        {[0, 1, 2, 3].map((i) => <path key={i} className="draw" pathLength="1" style={delay(200)} d={join(slots[i * 2], slots[i * 2 + 1], 56, 96)} />)}
        {r2.map((y) => <line key={y} className="draw" pathLength="1" style={delay(400)} x1="96" y1={y} x2="140" y2={y} />)}
        {[0, 1].map((i) => <path key={i} className="draw" pathLength="1" style={delay(600)} d={join(r2[i * 2], r2[i * 2 + 1], 140, 180)} />)}
        {r3.map((y) => <line key={y} className="draw" pathLength="1" style={delay(800)} x1="180" y1={y} x2="214" y2={y} />)}
      </g>
      <path className="draw" pathLength="1" style={delay(1000)} d={join(r3[0], r3[1], 214, 254)} stroke={MARINO} strokeWidth="3" />
      <g className="pop" style={delay(1300)}>
        <Cup x={254} y={final} />
      </g>
    </svg>
  )
}

// Liga: tabla de posiciones con el puntero resaltado
function LeagueFormat({ on }) {
  const rows = [
    { len: 120, pts: 31 },
    { len: 96, pts: 28 },
    { len: 132, pts: 24 },
    { len: 84, pts: 21 },
    { len: 110, pts: 17 },
    { len: 72, pts: 12 },
  ]
  const top = 14
  const h = 33

  return (
    <svg viewBox="0 0 300 220" className={`h-full w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {rows.map((r, i) => {
        const y = top + i * h
        const leader = i === 0
        return (
          <g key={i}>
            <g className="pop" style={delay(80 + i * 100)}>
              <rect x="0" y={y} width="26" height="26" fill={leader ? MARINO : 'none'} stroke={leader ? 'none' : LINE} strokeWidth="2" />
              <text x="13" y={y + 18} textAnchor="middle" fill={leader ? CELESTE : MARINO} fontFamily={FONT} fontSize="13" fontWeight="800">
                {i + 1}
              </text>
            </g>
            <line className="draw" pathLength="1" style={delay(150 + i * 100)} x1="40" y1={y + 13} x2={40 + r.len} y2={y + 13} stroke={leader ? MARINO : LINE} strokeWidth={leader ? 4 : 3} />
            <text className="pop" style={delay(300 + i * 100)} x="214" y={y + 18} textAnchor="end" fill={MARINO} fontFamily={FONT} fontSize="14" fontWeight="800">
              {r.pts}
            </text>
          </g>
        )
      })}
      <g className="pop" style={delay(1000)}>
        <Cup x={254} y={top + 13} />
      </g>
    </svg>
  )
}

// Grupos: cuatro grupos de cuatro; los dos primeros de cada uno clasifican
function GroupsFormat({ on }) {
  const groups = [
    { name: 'A', x: 0, y: 0 },
    { name: 'B', x: 154, y: 0 },
    { name: 'C', x: 0, y: 112 },
    { name: 'D', x: 154, y: 112 },
  ]
  const lens = [[78, 60, 90, 52], [66, 88, 58, 74], [92, 54, 70, 62], [60, 80, 50, 86]]

  return (
    <svg viewBox="0 0 300 220" className={`h-full w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {groups.map((g, gi) => (
        <g key={g.name}>
          <rect className="draw" pathLength="1" style={delay(gi * 100)} x={g.x + 1} y={g.y + 1} width="144" height="106" stroke={LINE} strokeWidth="2" />
          <text className="pop" style={delay(200 + gi * 100)} x={g.x + 12} y={g.y + 22} fill={MARINO} fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="2">
            {`GRUPO ${g.name}`}
          </text>
          {lens[gi].map((len, ti) => {
            const y = g.y + 40 + ti * 18
            const qualifies = ti < 2
            return (
              <g key={ti}>
                <circle className="pop" style={delay(400 + gi * 100 + ti * 60)} cx={g.x + 16} cy={y} r="4" fill={qualifies ? MARINO : 'none'} stroke={qualifies ? 'none' : LINE} strokeWidth="1.5" />
                <line className="draw" pathLength="1" style={delay(450 + gi * 100 + ti * 60)} x1={g.x + 28} y1={y} x2={g.x + 28 + len} y2={y} stroke={qualifies ? MARINO : LINE} strokeWidth="2.5" />
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

const formats = [
  { name: 'Copa', Component: CupFormat },
  { name: 'Liga', Component: LeagueFormat },
  { name: 'Grupos', Component: GroupsFormat },
]
const CYCLE_MS = 3200

function Format({ index, play }) {
  const on = usePlay(play)
  const { Component } = formats[index]
  return <Component on={on} />
}

export default function FormatShowcase() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % formats.length), CYCLE_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  return (
    <div ref={ref} className="w-full bg-celeste p-4 text-marino">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-extrabold uppercase leading-tight">Todos los formatos</p>
          <p className="mt-1 text-sm font-medium leading-snug">Liga, copa y 100% personalizados, a medida y en minutos.</p>
        </div>
        {/* Nombre del formato que se está viendo */}
        <span key={index} className="format-enter shrink-0 bg-marino px-2.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-celeste">
          {formats[index].name}
        </span>
      </div>
      <div
        className="format-enter mt-4 aspect-[300/220] w-full max-w-xs"
        key={index}
        role="img"
        aria-label={`Ejemplo de torneo en formato ${formats[index].name.toLowerCase()}`}
      >
        <Format index={index} play={inView} />
      </div>
    </div>
  )
}
