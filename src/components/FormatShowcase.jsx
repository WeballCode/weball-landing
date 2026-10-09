// Tu torneo a medida: arriba un dibujo que va rotando entre copa, liga, grupos y personalizado (bombos),
// y abajo un recuadro celeste con el número, el nombre y la descripción del formato que se está viendo.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

const LINE = '#365a70'
const CELESTE = '#3fb6ff'
const MARINO = '#032639'
const MARINO_CLARO = '#0f3143'
const BRUMA = '#b9cbd6'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

// Trofeo chico sobre un cuadrado celeste
function Cup({ x, y }) {
  return (
    <>
      <rect x={x} y={y - 14} width="40" height="28" fill={CELESTE} />
      <path d={`M${x + 12} ${y - 6}h16v5a8 8 0 0 1-16 0zM${x + 20} ${y + 7}v3`} stroke={MARINO} strokeWidth="2.2" />
    </>
  )
}

// Copa: cuadro de eliminatorias de 8 equipos a un campeón
function CupFormat() {
  const slots = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => 12 + i * 26)
  const r2 = [0, 1, 2, 3].map((i) => (slots[i * 2] + slots[i * 2 + 1]) / 2)
  const r3 = [0, 1].map((i) => (r2[i * 2] + r2[i * 2 + 1]) / 2)
  const final = (r3[0] + r3[1]) / 2
  const join = (a, b, x1, x2) => `M${x1} ${a}h14V${b}h-14M${x1 + 14} ${(a + b) / 2}H${x2}`

  return (
    <>
      <g stroke={LINE} strokeWidth="2.5">
        {slots.map((y) => <line key={y} className="draw" pathLength="1" x1="0" y1={y} x2="56" y2={y} />)}
        {[0, 1, 2, 3].map((i) => <path key={i} className="draw" pathLength="1" style={delay(200)} d={join(slots[i * 2], slots[i * 2 + 1], 56, 96)} />)}
        {r2.map((y) => <line key={y} className="draw" pathLength="1" style={delay(400)} x1="96" y1={y} x2="140" y2={y} />)}
        {[0, 1].map((i) => <path key={i} className="draw" pathLength="1" style={delay(600)} d={join(r2[i * 2], r2[i * 2 + 1], 140, 180)} />)}
        {r3.map((y) => <line key={y} className="draw" pathLength="1" style={delay(800)} x1="180" y1={y} x2="214" y2={y} />)}
      </g>
      <path className="draw" pathLength="1" style={delay(1000)} d={join(r3[0], r3[1], 214, 254)} stroke={CELESTE} strokeWidth="3" />
      <g className="pop" style={delay(1300)}>
        <Cup x={254} y={final} />
      </g>
    </>
  )
}

// Liga: tabla de posiciones con el puntero resaltado
function LeagueFormat() {
  const rows = [120, 96, 132, 84, 110, 72]
  const pts = [31, 28, 24, 21, 17, 12]
  const top = 14
  const h = 33

  return (
    <>
      {rows.map((len, i) => {
        const y = top + i * h
        const leader = i === 0
        return (
          <g key={i}>
            <g className="pop" style={delay(80 + i * 100)}>
              <rect x="0" y={y} width="26" height="26" fill={leader ? CELESTE : MARINO_CLARO} stroke={leader ? 'none' : LINE} strokeWidth="2" />
              <text x="13" y={y + 18} textAnchor="middle" fill={leader ? MARINO : BRUMA} fontFamily={FONT} fontSize="13" fontWeight="800">
                {i + 1}
              </text>
            </g>
            <line className="draw" pathLength="1" style={delay(150 + i * 100)} x1="40" y1={y + 13} x2={40 + len} y2={y + 13} stroke={leader ? CELESTE : LINE} strokeWidth={leader ? 4 : 3} />
            <text className="pop" style={delay(300 + i * 100)} x="214" y={y + 18} textAnchor="end" fill={leader ? CELESTE : BRUMA} fontFamily={FONT} fontSize="14" fontWeight="800">
              {pts[i]}
            </text>
          </g>
        )
      })}
      <g className="pop" style={delay(1000)}>
        <Cup x={254} y={top + 13} />
      </g>
    </>
  )
}

// Grupos: cuatro grupos de cuatro; los dos primeros de cada uno clasifican
function GroupsFormat() {
  const groups = [
    { name: 'A', x: 0, y: 0 },
    { name: 'B', x: 154, y: 0 },
    { name: 'C', x: 0, y: 112 },
    { name: 'D', x: 154, y: 112 },
  ]
  const lens = [[78, 60, 90, 52], [66, 88, 58, 74], [92, 54, 70, 62], [60, 80, 50, 86]]

  return groups.map((g, gi) => (
    <g key={g.name}>
      <rect className="draw" pathLength="1" style={delay(gi * 100)} x={g.x + 1} y={g.y + 1} width="144" height="106" stroke={LINE} strokeWidth="2" />
      <text className="pop" style={delay(200 + gi * 100)} x={g.x + 12} y={g.y + 22} fill={CELESTE} fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="2">
        {`GRUPO ${g.name}`}
      </text>
      {lens[gi].map((len, ti) => {
        const y = g.y + 40 + ti * 18
        const qualifies = ti < 2
        return (
          <g key={ti}>
            <circle className="pop" style={delay(400 + gi * 100 + ti * 60)} cx={g.x + 16} cy={y} r="4" fill={qualifies ? CELESTE : 'none'} stroke={qualifies ? 'none' : LINE} strokeWidth="1.5" />
            <line className="draw" pathLength="1" style={delay(450 + gi * 100 + ti * 60)} x1={g.x + 28} y1={y} x2={g.x + 28 + len} y2={y} stroke={qualifies ? BRUMA : LINE} strokeWidth="2.5" />
          </g>
        )
      })}
    </g>
  ))
}

// Personalizado: cuatro bombos; de cada uno sale una bolilla por grupo, como en un sorteo
function CustomFormat() {
  const pots = [38, 113, 188, 263]
  const potY = 40
  const groups = [
    { name: 'A', x: 8 },
    { name: 'B', x: 156 },
  ]
  const slotY = (i) => 158 + i * 14
  // Orden del sorteo: primero se completa el grupo A, después el B
  const draws = groups.flatMap((g, gi) => pots.map((px, pi) => ({ gi, pi, px, x: g.x + 36, y: slotY(pi) })))

  return (
    <>
      {/* Bombos */}
      {pots.map((x, i) => (
        <g key={x}>
          <path
            className="draw"
            pathLength="1"
            style={delay(i * 100)}
            d={`M${x - 8} ${potY - 30}h16M${x - 5} ${potY - 30}v6a24 24 0 1 0 10 0v-6`}
            stroke={LINE}
            strokeWidth="2.5"
          />
          {[[-9, 6], [8, 10], [-2, 16], [6, -2], [-10, -4]].map(([dx, dy], b) => (
            <circle key={b} className="pop" style={delay(250 + i * 100 + b * 40)} cx={x + dx} cy={potY + dy} r="4.5" fill={b === 0 ? CELESTE : BRUMA} fillOpacity={b === 0 ? 1 : 0.55} />
          ))}
          <text className="pop" style={delay(300 + i * 100)} x={x} y={potY + 42} textAnchor="middle" fill={BRUMA} fontFamily={FONT} fontSize="9" fontWeight="800" letterSpacing="1.5">
            {`BOMBO ${i + 1}`}
          </text>
        </g>
      ))}
      {/* Grupos que se llenan con el sorteo */}
      {groups.map((g) => (
        <g key={g.name}>
          <rect className="draw" pathLength="1" style={delay(400)} x={g.x} y="122" width="136" height="96" stroke={LINE} strokeWidth="2" />
          <text className="pop" style={delay(500)} x={g.x + 10} y="141" fill={CELESTE} fontFamily={FONT} fontSize="10" fontWeight="800" letterSpacing="2">
            {`GRUPO ${g.name}`}
          </text>
          {pots.map((_, i) => (
            <line key={i} x1={g.x + 48} y1={slotY(i)} x2={g.x + 120} y2={slotY(i)} stroke={LINE} strokeWidth="1.5" strokeDasharray="3 4" />
          ))}
        </g>
      ))}
      {/* Bolillas que salen de cada bombo y caen en su lugar */}
      {draws.map((d, k) => {
        const start = 900 + k * 260
        return (
          <g key={k}>
            <circle
              className="drop"
              style={{ '--dx': `${d.x - d.px}px`, '--dy': `${d.y - (potY + 6)}px`, animationDelay: `${start}ms` }}
              cx={d.px}
              cy={potY + 6}
              r="5"
              fill={CELESTE}
            />
            <line className="draw" pathLength="1" style={delay(start + 550)} x1={d.x + 12} y1={d.y} x2={d.x + 12 + [64, 48, 72, 40][(k + d.gi) % 4]} y2={d.y} stroke={BRUMA} strokeWidth="2.5" />
          </g>
        )
      })}
    </>
  )
}

const formats = [
  { name: 'Copa', text: 'Eliminación directa, de la primera ronda a la final.', Component: CupFormat, ms: 3200 },
  { name: 'Liga', text: 'Todos contra todos, con la tabla al instante.', Component: LeagueFormat, ms: 3200 },
  { name: 'Grupos', text: 'Zonas que clasifican a la siguiente fase.', Component: GroupsFormat, ms: 3200 },
  { name: 'Personalizado', text: 'Armá los bombos y sorteá los grupos a tu manera.', Component: CustomFormat, ms: 5200 },
]

function Drawing({ index, play }) {
  const on = usePlay(play)
  const { Component } = formats[index]
  return (
    <svg viewBox="0 0 300 220" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <Component />
    </svg>
  )
}

export default function FormatShowcase() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % formats.length)
      setRound((r) => r + 1)
    }, formats[index].ms)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  const current = formats[index]

  return (
    <div ref={ref} className="flex flex-col gap-8">
      {/* Arriba: el dibujo del formato */}
      <div
        key={`d-${round}`}
        className="format-enter w-full max-w-sm"
        role="img"
        aria-label={`Ejemplo de torneo en formato ${current.name.toLowerCase()}: ${current.text}`}
      >
        <Drawing index={index} play={inView} />
      </div>

      {/* Abajo: recuadro celeste con el formato que se está viendo */}
      <div className="bg-celeste p-4 text-marino">
        <div key={`t-${round}`} className="format-enter flex items-center gap-4">
          <span className="text-5xl font-extrabold leading-none text-blanco">{`0${index + 1}`}</span>
          <div>
            <p className="text-lg font-extrabold uppercase leading-tight">{current.name}</p>
            <p className="text-sm font-medium leading-snug">{current.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
