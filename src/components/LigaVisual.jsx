// Weball Liga: un dibujo por cada uno de los 5 pasos, en fondo claro.
// La sección (Liga.jsx) decide qué paso se muestra y resalta el mismo paso en la lista.
import { useEffect, useState } from 'react'
import { usePlay } from './motion.jsx'

const MARINO = '#032639'
const CELESTE = '#3fb6ff'
const PROFUNDO = '#0b6fcc'
const ACERO = '#51606b'
const SUAVE = '#b9cbd6'
const BLANCO = '#fbfbf8'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

const Text = ({ children, size = 8, weight = 800, fill = MARINO, spacing = 1, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

function Shield({ x, y, s = 1, fill = MARINO }) {
  return (
    <path
      d={`M${x - 9 * s} ${y - 9 * s}l${9 * s}-${3.5 * s} ${9 * s} ${3.5 * s}v${7 * s}c0 ${5.5 * s}-${4 * s} ${9 * s}-${9 * s} ${10.5 * s}-${5 * s}-${1.5 * s}-${9 * s}-${5 * s}-${9 * s}-${10.5 * s}z`}
      fill={fill}
    />
  )
}

function Check({ x, y, r = 6, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <circle cx={x} cy={y} r={r} fill={CELESTE} />
      <path d={`M${x - r * 0.45} ${y}l${r * 0.32} ${r * 0.32} ${r * 0.6}-${r * 0.65}`} stroke={MARINO} strokeWidth="1.6" />
    </g>
  )
}

// 1. Inscribí a tus equipos y clubes con un link
function InscripcionScene() {
  const shields = [0, 1, 2, 3, 4, 5]
  return (
    <>
      <g className="pop">
        <rect x="20" y="16" width="260" height="30" fill={BLANCO} stroke={MARINO} strokeWidth="2" />
        <path d="M34 31a5 5 0 0 1 5-5h5M44 36h-5a5 5 0 0 1-5-5M40 31h8" stroke={PROFUNDO} strokeWidth="1.8" />
        <Text x="56" y="35" size={10} weight={700} fill={MARINO} spacing={0.3}>weball.app/tu-liga/inscripcion</Text>
      </g>
      <g className="pop" style={delay(500)}>
        <rect x="228" y="20" width="48" height="22" fill={CELESTE} />
        <Text x="252" y="35" size={8} fill={MARINO} textAnchor="middle">COPIAR</Text>
      </g>
      <path className="draw" pathLength="1" style={delay(800)} d="M150 52v18" stroke={ACERO} strokeWidth="2" strokeDasharray="1" />
      {shields.map((i) => {
        const x = 45 + (i % 3) * 105
        const y = 100 + Math.floor(i / 3) * 52
        return (
          <g key={i}>
            <g className="pop" style={delay(1000 + i * 220)}>
              <rect x={x - 32} y={y - 20} width="64" height="40" fill={BLANCO} stroke={SUAVE} strokeWidth="1.5" />
              <Shield x={x - 12} y={y} s={1} fill={[MARINO, PROFUNDO, ACERO][i % 3]} />
              <line x1={x + 2} y1={y - 3} x2={x + 22} y2={y - 3} stroke={MARINO} strokeWidth="2.5" />
              <line x1={x + 2} y1={y + 5} x2={x + 16} y2={y + 5} stroke={SUAVE} strokeWidth="2.5" />
            </g>
            <Check x={x + 30} y={y - 18} r={5.5} delayMs={1200 + i * 220} />
          </g>
        )
      })}
      <Text className="pop" style={delay(2500)} x="150" y="196" size={9} fill={PROFUNDO} spacing={1.5} textAnchor="middle">6 EQUIPOS INSCRIPTOS</Text>
    </>
  )
}

// 2. Fichá a los jugadores y armá los planteles
function PlantelesScene() {
  const teams = [
    { x: 20, color: MARINO, name: 'PLANTEL · ATL. UNIÓN' },
    { x: 156, color: PROFUNDO, name: 'PLANTEL · DEP. NORTE' },
  ]
  return (
    <>
      {teams.map((t, ti) => (
        <g key={t.x}>
          <rect className="draw" pathLength="1" style={delay(ti * 150)} x={t.x} y="12" width="124" height="176" stroke={MARINO} strokeWidth="2" />
          <g className="pop" style={delay(200 + ti * 150)}>
            <rect x={t.x} y="12" width="124" height="26" fill={t.color} />
            <Text x={t.x + 8} y="29" size={7} fill={BLANCO} spacing={0.8}>{t.name}</Text>
          </g>
          {[0, 1, 2, 3, 4].map((p) => {
            const y = 56 + p * 26
            return (
              <g key={p} className="pop" style={delay(500 + p * 300 + ti * 120)}>
                <circle cx={t.x + 16} cy={y} r="7" fill={SUAVE} />
                <circle cx={t.x + 16} cy={y - 2} r="2.6" fill={BLANCO} />
                <line x1={t.x + 30} y1={y - 3} x2={t.x + 30 + [64, 52, 70, 46, 58][p]} y2={y - 3} stroke={MARINO} strokeWidth="2.5" />
                <line x1={t.x + 30} y1={y + 4} x2={t.x + 30 + 28} y2={y + 4} stroke={SUAVE} strokeWidth="2" />
                <Text x={t.x + 116} y={y + 3} size={8} fill={PROFUNDO} spacing={0} textAnchor="end">{[1, 4, 7, 9, 10][p]}</Text>
              </g>
            )
          })}
        </g>
      ))}
    </>
  )
}

// 3. Armá los torneos a medida: el fixture fecha por fecha
function FixtureScene() {
  const rounds = ['FECHA 1', 'FECHA 2', 'FECHA 3']
  const colors = [MARINO, PROFUNDO, ACERO, CELESTE, '#0f3143', SUAVE]
  const pairs = [
    [[0, 1], [2, 3], [4, 5]],
    [[0, 2], [1, 4], [3, 5]],
    [[0, 3], [1, 5], [2, 4]],
  ]
  return rounds.map((r, ri) => {
    const x = 10 + ri * 98
    return (
      <g key={r}>
        <g className="pop" style={delay(ri * 400)}>
          <rect x={x} y="12" width="88" height="22" fill={MARINO} />
          <Text x={x + 44} y="27" size={8} fill={CELESTE} spacing={1.5} textAnchor="middle">{r}</Text>
        </g>
        {pairs[ri].map(([a, b], mi) => {
          const y = 62 + mi * 46
          return (
            <g key={mi} className="pop" style={delay(250 + ri * 400 + mi * 150)}>
              <rect x={x} y={y - 18} width="88" height="36" fill={BLANCO} stroke={SUAVE} strokeWidth="1.5" />
              <Shield x={x + 22} y={y} s={0.9} fill={colors[a]} />
              <Text x={x + 44} y={y + 3.5} size={8} fill={ACERO} spacing={0} textAnchor="middle">VS</Text>
              <Shield x={x + 66} y={y} s={0.9} fill={colors[b]} />
            </g>
          )
        })}
      </g>
    )
  })
}

// 4. Programá los partidos y designá a los árbitros
function ProgramacionScene() {
  const matches = [
    { day: 'SÁB', hour: '15:00', court: 'CANCHA 1' },
    { day: 'SÁB', hour: '17:00', court: 'CANCHA 2' },
    { day: 'DOM', hour: '10:00', court: 'CANCHA 1' },
    { day: 'DOM', hour: '12:00', court: 'CANCHA 3' },
  ]
  return (
    <>
      <Text className="pop" x="20" y="22" size={8} fill={PROFUNDO} spacing={1.5}>PROGRAMACIÓN · FECHA 1</Text>
      {matches.map((m, i) => {
        const y = 34 + i * 40
        return (
          <g key={i}>
            <g className="pop" style={delay(200 + i * 200)}>
              <rect x="20" y={y} width="260" height="32" fill={BLANCO} stroke={SUAVE} strokeWidth="1.5" />
              <rect x="20" y={y} width="44" height="32" fill={MARINO} />
              <Text x="42" y={y + 13} size={7} fill={CELESTE} spacing={1} textAnchor="middle">{m.day}</Text>
              <Text x="42" y={y + 25} size={9} fill={BLANCO} spacing={0} textAnchor="middle">{m.hour}</Text>
              <Shield x={84} y={y + 16} s={0.75} fill={[MARINO, PROFUNDO, ACERO, MARINO][i]} />
              <Text x="97" y={y + 19.5} size={7} fill={ACERO} spacing={0}>VS</Text>
              <Shield x={120} y={y + 16} s={0.75} fill={[PROFUNDO, ACERO, MARINO, PROFUNDO][i]} />
              <Text x="138" y={y + 19.5} size={7} fill={MARINO} spacing={0.8}>{m.court}</Text>
            </g>
            {/* Árbitro designado */}
            <g className="pop" style={delay(1200 + i * 350)}>
              <rect x="208" y={y + 6} width="66" height="20" fill={CELESTE} />
              <circle cx="219" cy={y + 16} r="4.5" stroke={MARINO} strokeWidth="1.6" />
              <path d={`M223 ${y + 13}h8v5h-8`} stroke={MARINO} strokeWidth="1.6" />
              <Text x="236" y={y + 19.5} size={6.5} fill={MARINO} spacing={0.5}>ÁRBITRO</Text>
            </g>
          </g>
        )
      })}
    </>
  )
}

// 5. Cargá y publicá los resultados al instante: la tabla se reordena sola
const teamsTable = [
  { name: 'ATL. UNIÓN', pts: 9, after: 9 },
  { name: 'DEP. NORTE', pts: 7, after: 10 },
  { name: 'SAN MARTÍN', pts: 6, after: 6 },
  { name: 'LOS ANDES', pts: 4, after: 4 },
]

function ResultadosScene({ on }) {
  const [updated, setUpdated] = useState(false)
  useEffect(() => {
    if (!on) return
    const t = setTimeout(() => setUpdated(true), 1300)
    return () => clearTimeout(t)
  }, [on])

  // Orden de la tabla antes y después del resultado
  const order = updated
    ? [...teamsTable].sort((a, b) => b.after - a.after)
    : teamsTable

  return (
    <>
      {/* Resultado que entra */}
      <g className="pop">
        <rect x="20" y="10" width="260" height="34" fill={MARINO} />
        <Shield x={46} y={27} s={0.85} fill={PROFUNDO} />
        <Text x="60" y="31" size={8} fill={BLANCO} spacing={0.5}>DEP. NORTE</Text>
        <Text x="150" y="33" size={14} fill={CELESTE} spacing={0} textAnchor="middle">3 - 1</Text>
        <Text x="240" y="31" size={8} fill={BLANCO} spacing={0.5} textAnchor="end">LOS ANDES</Text>
        <Shield x={256} y={27} s={0.85} fill={ACERO} />
      </g>
      <g className="pop" style={delay(900)}>
        <rect x="204" y="48" width="76" height="16" fill={CELESTE} />
        <Text x="242" y="59.5" size={7} fill={MARINO} spacing={1.2} textAnchor="middle">PUBLICADO</Text>
      </g>
      {/* Tabla */}
      <Text className="pop" style={delay(300)} x="20" y="80" size={7.5} fill={PROFUNDO} spacing={1.5}>TABLA DE POSICIONES</Text>
      {teamsTable.map((t) => {
        const pos = order.indexOf(t)
        const leader = pos === 0
        const pts = updated ? t.after : t.pts
        return (
          <g
            key={t.name}
            style={{ transform: `translateY(${pos * 28}px)`, transition: 'transform 0.7s cubic-bezier(0.3, 1.2, 0.5, 1)' }}
          >
            <g className="pop" style={delay(400 + teamsTable.indexOf(t) * 120)}>
              <rect x="20" y="88" width="260" height="24" fill={leader ? CELESTE : BLANCO} stroke={leader ? 'none' : SUAVE} strokeWidth="1.5" />
              <Text x="34" y="104" size={9} fill={MARINO} spacing={0} textAnchor="middle">{pos + 1}</Text>
              <Text x="50" y="104" size={8.5} fill={MARINO} spacing={0.5}>{t.name}</Text>
              <Text x="268" y="104" size={10} fill={MARINO} spacing={0} textAnchor="end">{pts}</Text>
            </g>
          </g>
        )
      })}
    </>
  )
}

export const ligaScenes = [InscripcionScene, PlantelesScene, FixtureScene, ProgramacionScene, ResultadosScene]

export function LigaDrawing({ index, play }) {
  const on = usePlay(play)
  const Scene = ligaScenes[index]
  return (
    <svg viewBox="0 0 300 200" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <Scene on={on} />
    </svg>
  )
}
