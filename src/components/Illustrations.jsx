// Ilustraciones planas en los colores de la marca (sin degradados ni sombras).
// Las líneas con la clase "draw" se dibujan solas cuando el gráfico entra en pantalla.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

// Recorrido de la pelota entre jugadores (pases), en la cancha de la portada
const passes = [
  [200, 320],
  [118, 222],
  [276, 168],
  [200, 96],
  [300, 262],
  [112, 430],
  [262, 486],
  [200, 320],
]

// Cancha vista desde arriba, en líneas finas. Se usa de fondo en la portada.
export function CourtLines({ className = '' }) {
  const [ref, inView] = useInView({ threshold: 0 })
  const animate = !prefersReducedMotion()
  const passPath = 'M' + passes.map((p) => p.join(' ')).join(' L')

  return (
    <svg ref={ref} viewBox="0 0 400 640" className={`${inView ? 'is-visible' : ''} ${className}`} fill="none" aria-hidden="true">
      <g stroke="#365a70" strokeWidth="2.5">
        <rect className="draw" pathLength="1" x="20" y="20" width="360" height="600" />
        <line className="draw" pathLength="1" x1="20" y1="320" x2="380" y2="320" />
        {/* Áreas */}
        <path className="draw" pathLength="1" d="M110 20v40a90 90 0 0 0 180 0V20" />
        <path className="draw" pathLength="1" d="M110 620v-40a90 90 0 0 1 180 0v40" />
        {/* Arcos */}
        <rect className="draw" pathLength="1" x="170" y="6" width="60" height="14" />
        <rect className="draw" pathLength="1" x="170" y="620" width="60" height="14" />
        {/* Esquinas */}
        <path className="draw" pathLength="1" d="M20 34a14 14 0 0 0 14-14M366 20a14 14 0 0 0 14 14M20 606a14 14 0 0 1 14 14M366 620a14 14 0 0 1 14-14" />
      </g>
      <g className="pulse-ring">
        <circle className="draw" pathLength="1" cx="200" cy="320" r="62" stroke="#3fb6ff" strokeWidth="3" />
      </g>

      {/* Jugadores */}
      {passes.slice(1, -1).map(([x, y], i) => (
        <circle
          key={i}
          className="pop"
          style={{ transitionDelay: `${1200 + i * 120}ms` }}
          cx={x}
          cy={y}
          r="9"
          fill="#0f3143"
          stroke="#b9cbd6"
          strokeWidth="2"
        />
      ))}

      {/* Pelota pasándose entre jugadores */}
      {animate && inView && (
        <g>
          <path d={passPath} stroke="#3fb6ff" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.5" />
          <circle r="7" fill="#3fb6ff">
            <animateMotion dur="10s" repeatCount="indefinite" begin="1.8s" path={passPath} />
          </circle>
        </g>
      )}
    </svg>
  )
}

// Esquema de una asociación con sus ligas y los clubes de cada liga. Se arma de a pasos.
export function AssociationDiagram({ className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const ligas = [70, 240, 410]
  const font = 'Roboto, Arial, sans-serif'

  return (
    <svg
      ref={ref}
      viewBox="0 0 480 300"
      className={`${inView ? 'is-visible' : ''} ${className}`}
      role="img"
      aria-label="Una asociación con tres ligas, y cada liga con sus clubes"
    >
      {/* Conexiones */}
      <g stroke="#365a70" strokeWidth="2.5" fill="none">
        <path className="draw" pathLength="1" style={{ transitionDelay: '400ms' }} d="M240 78v34M70 112h340M70 112v28M240 112v28M410 112v28" />
        {ligas.map((x) => (
          <path
            key={x}
            className="draw"
            pathLength="1"
            style={{ transitionDelay: '1200ms' }}
            d={`M${x} 196v22M${x - 44} 218h88M${x - 44} 218v18M${x} 218v18M${x + 44} 218v18`}
          />
        ))}
      </g>
      {/* Asociación */}
      <g className="pop">
        <rect x="150" y="18" width="180" height="60" fill="#3fb6ff" />
        <text x="240" y="54" textAnchor="middle" fill="#032639" fontFamily={font} fontSize="17" fontWeight="800" letterSpacing="1.5">
          ASOCIACIÓN
        </text>
      </g>
      {/* Ligas */}
      {ligas.map((x, i) => (
        <g key={x}>
          <g className="pop" style={{ transitionDelay: `${900 + i * 150}ms` }}>
            <rect x={x - 62} y="140" width="124" height="56" fill="#0f3143" />
            <rect x={x - 62} y="140" width="124" height="5" fill="#3fb6ff" />
            <text x={x} y="175" textAnchor="middle" fill="#fbfbf8" fontFamily={font} fontSize="15" fontWeight="800" letterSpacing="1">
              {`LIGA ${i + 1}`}
            </text>
          </g>
          {/* Clubes */}
          {[-44, 0, 44].map((dx, j) => (
            <circle
              key={dx}
              className="pop"
              style={{ transitionDelay: `${1700 + i * 150 + j * 80}ms` }}
              cx={x + dx}
              cy="256"
              r="16"
              fill="none"
              stroke="#b9cbd6"
              strokeWidth="2.5"
            />
          ))}
        </g>
      ))}
      <text x="240" y="296" textAnchor="middle" fill="#b9cbd6" fontFamily={font} fontSize="12" fontWeight="500" letterSpacing="3">
        CLUBES
      </text>
    </svg>
  )
}

// ---------- Formatos de torneo ----------
// Cada formato se dibuja al aparecer. Al cambiar de formato se vuelve a montar y la animación arranca de nuevo.

const LINE = '#365a70'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

// Trofeo chico sobre un cuadrado celeste
function Cup({ x, y }) {
  return (
    <>
      <rect x={x} y={y - 14} width="40" height="28" fill="#3fb6ff" />
      <path d={`M${x + 12} ${y - 6}h16v5a8 8 0 0 1-16 0zM${x + 20} ${y + 7}v3`} stroke="#032639" strokeWidth="2.2" />
    </>
  )
}

// Copa: cuadro de eliminatorias de 8 equipos a un campeón, ronda por ronda
function CupFormat({ play }) {
  const on = usePlay(play)
  const slots = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => 12 + i * 26)
  const r2 = [0, 1, 2, 3].map((i) => (slots[i * 2] + slots[i * 2 + 1]) / 2)
  const r3 = [0, 1].map((i) => (r2[i * 2] + r2[i * 2 + 1]) / 2)
  const final = (r3[0] + r3[1]) / 2
  const join = (a, b, x1, x2) => `M${x1} ${a}h14V${b}h-14M${x1 + 14} ${(a + b) / 2}H${x2}`

  return (
    <svg viewBox="0 0 300 220" className={`h-full w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <g stroke={LINE} strokeWidth="2.5">
        {slots.map((y) => <line key={y} className="draw" pathLength="1" x1="0" y1={y} x2="56" y2={y} />)}
        {[0, 1, 2, 3].map((i) => <path key={i} className="draw" pathLength="1" style={delay(300)} d={join(slots[i * 2], slots[i * 2 + 1], 56, 96)} />)}
        {r2.map((y) => <line key={y} className="draw" pathLength="1" style={delay(600)} x1="96" y1={y} x2="140" y2={y} />)}
        {[0, 1].map((i) => <path key={i} className="draw" pathLength="1" style={delay(900)} d={join(r2[i * 2], r2[i * 2 + 1], 140, 180)} />)}
        {r3.map((y) => <line key={y} className="draw" pathLength="1" style={delay(1200)} x1="180" y1={y} x2="214" y2={y} />)}
      </g>
      <path className="draw" pathLength="1" style={delay(1500)} d={join(r3[0], r3[1], 214, 254)} stroke="#3fb6ff" strokeWidth="3" />
      <g className="pop" style={delay(2000)}>
        <Cup x={254} y={final} />
      </g>
    </svg>
  )
}

// Liga: tabla de posiciones, un equipo abajo del otro, con el puntero resaltado
function LeagueFormat({ play }) {
  const on = usePlay(play)
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
            <g className="pop" style={delay(150 + i * 150)}>
              <rect x="0" y={y} width="26" height="26" fill={leader ? '#3fb6ff' : '#0f3143'} stroke={leader ? 'none' : LINE} strokeWidth="2" />
              <text x="13" y={y + 18} textAnchor="middle" fill={leader ? '#032639' : '#b9cbd6'} fontFamily={FONT} fontSize="13" fontWeight="800">
                {i + 1}
              </text>
            </g>
            <line className="draw" pathLength="1" style={delay(250 + i * 150)} x1="40" y1={y + 13} x2={40 + r.len} y2={y + 13} stroke={leader ? '#3fb6ff' : LINE} strokeWidth={leader ? 4 : 3} />
            <text className="pop" style={delay(450 + i * 150)} x="214" y={y + 18} textAnchor="end" fill={leader ? '#3fb6ff' : '#b9cbd6'} fontFamily={FONT} fontSize="14" fontWeight="800">
              {r.pts}
            </text>
          </g>
        )
      })}
      <g className="pop" style={delay(1500)}>
        <Cup x={254} y={top + 13} />
      </g>
    </svg>
  )
}

// Grupos: cuatro grupos de cuatro equipos; los dos primeros de cada uno clasifican
function GroupsFormat({ play }) {
  const on = usePlay(play)
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
          <rect className="draw" pathLength="1" style={delay(gi * 150)} x={g.x + 1} y={g.y + 1} width="144" height="106" stroke={LINE} strokeWidth="2" />
          <text className="pop" style={delay(300 + gi * 150)} x={g.x + 12} y={g.y + 22} fill="#3fb6ff" fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="2">
            {`GRUPO ${g.name}`}
          </text>
          {lens[gi].map((len, ti) => {
            const y = g.y + 40 + ti * 18
            const qualifies = ti < 2
            return (
              <g key={ti}>
                <circle className="pop" style={delay(600 + gi * 150 + ti * 80)} cx={g.x + 16} cy={y} r="4" fill={qualifies ? '#3fb6ff' : 'none'} stroke={qualifies ? 'none' : LINE} strokeWidth="1.5" />
                <line className="draw" pathLength="1" style={delay(650 + gi * 150 + ti * 80)} x1={g.x + 28} y1={y} x2={g.x + 28 + len} y2={y} stroke={qualifies ? '#b9cbd6' : LINE} strokeWidth="2.5" />
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
const CYCLE_MS = 5000

// Va rotando entre copa, liga y grupos. Las pestañas también se pueden tocar.
export function FormatShowcase({ className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const auto = inView && !paused && !prefersReducedMotion()

  useEffect(() => {
    if (!auto) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % formats.length), CYCLE_MS)
    return () => clearTimeout(timer)
  }, [auto, index])

  const { Component } = formats[index]

  return (
    <div ref={ref} className={className} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex gap-5" role="tablist" aria-label="Formatos de torneo">
        {formats.map((f, i) => (
          <button
            key={f.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={`relative pb-2 text-sm font-bold uppercase tracking-[0.2em] transition ${
              i === index ? 'text-celeste' : 'text-bruma hover:text-blanco'
            }`}
          >
            {f.name}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linea" />
            {i === index && (
              <span
                key={`${index}-${auto}`}
                className={`absolute bottom-0 left-0 h-0.5 bg-celeste ${auto ? 'format-progress' : 'w-full'}`}
                style={auto ? { animationDuration: `${CYCLE_MS}ms` } : undefined}
              />
            )}
          </button>
        ))}
      </div>
      <div className="format-enter mt-6 aspect-[300/220] w-full max-w-xs" key={index}>
        <Component play={inView} />
      </div>
    </div>
  )
}
