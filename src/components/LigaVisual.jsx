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

// Celular de 96 x 188, con la pantalla de x+8 a x+88
function Phone({ x, y = 6 }) {
  return (
    <>
      <rect x={x} y={y} width="96" height="188" rx="14" fill={BLANCO} stroke={MARINO} strokeWidth="2.5" />
      <line x1={x + 36} y1={y + 10} x2={x + 60} y2={y + 10} stroke={MARINO} strokeWidth="2.5" />
    </>
  )
}

// Rótulo al costado del celular: quién lo usa
function Who({ x, y, icon, lines }) {
  return (
    <g className="pop">
      {icon}
      {lines.map((l, i) => (
        <Text key={l} x={x} y={y + i * 12} size={8} fill={MARINO} spacing={1}>{l}</Text>
      ))}
    </g>
  )
}

// 2. Fichá a los jugadores y armá los planteles: el club lo hace desde el celular
function PlantelesScene() {
  const px = 168
  return (
    <>
      <Who
        x={24}
        y={112}
        icon={<Shield x={44} y={80} s={1.6} fill={MARINO} />}
        lines={['EL CLUB ARMA', 'SU PLANTEL', 'DESDE EL CELULAR']}
      />
      <path className="draw" pathLength="1" style={delay(300)} d="M128 100h28M148 92l8 8-8 8" stroke={MARINO} strokeWidth="2.5" />
      <Phone x={px} />
      <g className="pop" style={delay(200)}>
        <rect x={px + 8} y="26" width="80" height="20" fill={MARINO} />
        <Text x={px + 14} y="39.5" size={6.5} fill={BLANCO} spacing={0.6}>PLANTEL · PRIMERA</Text>
      </g>
      {[0, 1, 2, 3, 4].map((p) => {
        const y = 60 + p * 21
        return (
          <g key={p} className="pop" style={delay(500 + p * 320)}>
            <circle cx={px + 17} cy={y} r="6" fill={SUAVE} />
            <circle cx={px + 17} cy={y - 1.5} r="2.2" fill={BLANCO} />
            <line x1={px + 28} y1={y - 2} x2={px + 28 + [42, 34, 46, 30, 38][p]} y2={y - 2} stroke={MARINO} strokeWidth="2.5" />
            <line x1={px + 28} y1={y + 4} x2={px + 46} y2={y + 4} stroke={SUAVE} strokeWidth="2" />
            <Text x={px + 86} y={y + 3} size={7.5} fill={PROFUNDO} spacing={0} textAnchor="end">{[1, 4, 7, 9, 10][p]}</Text>
          </g>
        )
      })}
      <g className="pop" style={delay(2300)}>
        <rect x={px + 8} y="166" width="80" height="18" fill={CELESTE} />
        <Text x={px + 48} y="178" size={6.5} fill={MARINO} spacing={0.8} textAnchor="middle">+ FICHAR JUGADOR</Text>
      </g>
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
            {/* El club propone y la liga aprueba */}
            <g className="pop" style={delay(1200 + i * 350)}>
              <rect x="208" y={y + 6} width="66" height="20" fill={CELESTE} />
              <path d={`M215 ${y + 16}l3 3 6-6`} stroke={MARINO} strokeWidth="1.8" />
              <Text x="229" y={y + 19.5} size={6.5} fill={MARINO} spacing={0.5}>APROBADO</Text>
            </g>
          </g>
        )
      })}
    </>
  )
}

// 5. Cargá los resultados en vivo: el árbitro suma los goles desde el celular
const liveGoals = [
  { min: "12'", team: 0 },
  { min: "34'", team: 1 },
  { min: "58'", team: 0 },
  { min: "81'", team: 0 },
]

function EnVivoScene({ on }) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!on) return
    const timers = liveGoals.map((_, i) => setTimeout(() => setStep(i + 1), 600 + i * 650))
    return () => timers.forEach(clearTimeout)
  }, [on])
  const shown = liveGoals.slice(0, step)
  const home = shown.filter((g) => g.team === 0).length
  const away = shown.filter((g) => g.team === 1).length
  const px = 168

  return (
    <>
      <Who
        x={24}
        y={112}
        icon={
          <g>
            <circle cx="40" cy="80" r="12" stroke={MARINO} strokeWidth="2.5" />
            <path d="M52 74h18v11H52" stroke={MARINO} strokeWidth="2.5" />
            <circle cx="40" cy="80" r="3.5" fill={MARINO} />
          </g>
        }
        lines={['EL ÁRBITRO', 'CARGA EL PARTIDO', 'EN VIVO']}
      />
      <path className="draw" pathLength="1" style={delay(300)} d="M128 100h28M148 92l8 8-8 8" stroke={MARINO} strokeWidth="2.5" />
      <Phone x={px} />
      <g className="pop" style={delay(150)}>
        <rect x={px + 8} y="26" width="34" height="14" fill={CELESTE} />
        <circle cx={px + 15} cy="33" r="2.5" fill={MARINO} className="pulse-ring" />
        <Text x={px + 20} y="36" size={6} fill={MARINO} spacing={0.6}>VIVO</Text>
      </g>
      <g className="pop" style={delay(250)}>
        <Shield x={px + 26} y={62} s={0.9} fill={PROFUNDO} />
        <Shield x={px + 70} y={62} s={0.9} fill={ACERO} />
        <Text x={px + 26} y="98" size={22} fill={MARINO} spacing={0} textAnchor="middle">{home}</Text>
        <Text x={px + 48} y="94" size={12} fill={ACERO} spacing={0} textAnchor="middle">-</Text>
        <Text x={px + 70} y="98" size={22} fill={MARINO} spacing={0} textAnchor="middle">{away}</Text>
      </g>
      <line x1={px + 12} y1="108" x2={px + 84} y2="108" stroke={SUAVE} strokeWidth="1.5" />
      {shown.map((g, i) => {
        const y = 122 + i * 15
        return (
          <g key={i} className="format-enter">
            <Text x={px + 14} y={y + 3} size={7} fill={PROFUNDO} spacing={0}>{g.min}</Text>
            <circle cx={px + 34} cy={y} r="3.5" fill={MARINO} />
            <line x1={px + 42} y1={y} x2={g.team === 0 ? px + 70 : px + 82} y2={y} stroke={g.team === 0 ? MARINO : SUAVE} strokeWidth="2.5" />
          </g>
        )
      })}
    </>
  )
}

// 6. Resultados publicados al instante: sale el resultado y la tabla se reordena sola
const teamsTable = [
  { name: 'ATL. UNIÓN', pts: 9, after: 9 },
  { name: 'DEP. NORTE', pts: 7, after: 10 },
  { name: 'SAN MARTÍN', pts: 6, after: 6 },
  { name: 'LOS ANDES', pts: 4, after: 4 },
]

function PublicadoScene({ on }) {
  const [updated, setUpdated] = useState(false)
  useEffect(() => {
    if (!on) return
    const t = setTimeout(() => setUpdated(true), 1300)
    return () => clearTimeout(t)
  }, [on])
  const order = updated ? [...teamsTable].sort((a, b) => b.after - a.after) : teamsTable

  return (
    <>
      {/* Resultado final publicado */}
      <g className="pop">
        <rect x="20" y="10" width="260" height="34" fill={MARINO} />
        <Shield x={46} y={27} s={0.85} fill={PROFUNDO} />
        <Text x="60" y="31" size={8} fill={BLANCO} spacing={0.5}>DEP. NORTE</Text>
        <Text x="150" y="33" size={14} fill={CELESTE} spacing={0} textAnchor="middle">3 - 1</Text>
        <Text x="240" y="31" size={8} fill={BLANCO} spacing={0.5} textAnchor="end">LOS ANDES</Text>
        <Shield x={256} y={27} s={0.85} fill={ACERO} />
      </g>
      <g className="pop" style={delay(700)}>
        <circle cx="34" cy="62" r="8" stroke={PROFUNDO} strokeWidth="1.8" />
        <path d="M26 62h16M34 54c3 2.5 3 13.5 0 16M34 54c-3 2.5-3 13.5 0 16" stroke={PROFUNDO} strokeWidth="1.4" />
        <Text x="48" y="65.5" size={7.5} fill={PROFUNDO} spacing={1.2}>PUBLICADO EN LA APP Y LA WEB</Text>
      </g>
      {/* Tabla */}
      {teamsTable.map((t) => {
        const pos = order.indexOf(t)
        const leader = pos === 0
        const pts = updated ? t.after : t.pts
        return (
          <g
            key={t.name}
            style={{ transform: `translateY(${pos * 28}px)`, transition: 'transform 0.7s cubic-bezier(0.3, 1.2, 0.5, 1)' }}
          >
            <g className="pop" style={delay(300 + teamsTable.indexOf(t) * 120)}>
              <rect x="20" y="80" width="260" height="24" fill={leader ? CELESTE : BLANCO} stroke={leader ? 'none' : SUAVE} strokeWidth="1.5" />
              <Text x="34" y="96" size={9} fill={MARINO} spacing={0} textAnchor="middle">{pos + 1}</Text>
              <Text x="50" y="96" size={8.5} fill={MARINO} spacing={0.5}>{t.name}</Text>
              <Text x="268" y="96" size={10} fill={MARINO} spacing={0} textAnchor="end">{pts}</Text>
            </g>
          </g>
        )
      })}
    </>
  )
}
// Planillas: la lista de buena fe, con el suspendido tachado
function PlanillaScene() {
  const players = [
    { n: 1, w: 46 },
    { n: 4, w: 38 },
    { n: 7, w: 50, out: true },
    { n: 9, w: 34 },
    { n: 10, w: 42 },
  ]
  return (
    <>
      <g className="pop">
        <rect x="40" y="8" width="220" height="186" fill={BLANCO} stroke={MARINO} strokeWidth="2" />
        <rect x="40" y="8" width="220" height="28" fill={MARINO} />
        <Text x="52" y="26" size={8} fill={BLANCO} spacing={1}>PLANILLA · FECHA 7</Text>
        <Shield x={232} y={22} s={0.7} fill={CELESTE} />
        <Text x="52" y="52" size={6.5} fill={PROFUNDO} spacing={1.2}>LISTA DE BUENA FE</Text>
      </g>
      {players.map((p, i) => {
        const y = 70 + i * 22
        return (
          <g key={p.n} className="pop" style={delay(250 + i * 180)}>
            <Text x="58" y={y + 3} size={8} fill={p.out ? ACERO : PROFUNDO} spacing={0} textAnchor="middle">{p.n}</Text>
            <line x1="72" y1={y} x2={72 + p.w * 2} y2={y} stroke={p.out ? SUAVE : MARINO} strokeWidth="3" />
            <line x1="72" y1={y + 9} x2="244" y2={y + 9} stroke={SUAVE} strokeWidth="1" />
          </g>
        )
      })}
      {/* El suspendido aparece tachado solo */}
      <path className="draw" pathLength="1" style={delay(1400)} d="M52 114h120" stroke="#c81e1e" strokeWidth="2.5" />
      <g className="pop" style={delay(1700)}>
        <rect x="182" y="105" width="66" height="18" fill="#c81e1e" />
        <Text x="215" y="117" size={6.5} fill={BLANCO} spacing={0.8} textAnchor="middle">SUSPENDIDO</Text>
      </g>
    </>
  )
}

// Árbitros: cada partido con su árbitro, sin choques, confirmado por WhatsApp
function ArbitrosScene() {
  const rows = [
    { hour: '15:00', court: 'CANCHA 1', ref: 'J. PÉREZ' },
    { hour: '17:00', court: 'CANCHA 2', ref: 'M. GÓMEZ' },
    { hour: '19:00', court: 'CANCHA 1', ref: 'L. DÍAZ' },
    { hour: '21:00', court: 'CANCHA 3', ref: 'J. PÉREZ' },
  ]
  return (
    <>
      <Text className="pop" x="20" y="22" size={8} fill={PROFUNDO} spacing={1.5}>DESIGNACIONES · SÁBADO</Text>
      {rows.map((r, i) => {
        const y = 34 + i * 40
        return (
          <g key={i}>
            <g className="pop" style={delay(200 + i * 200)}>
              <rect x="20" y={y} width="260" height="32" fill={BLANCO} stroke={SUAVE} strokeWidth="1.5" />
              <rect x="20" y={y} width="44" height="32" fill={MARINO} />
              <Text x="42" y={y + 20} size={9} fill={BLANCO} spacing={0} textAnchor="middle">{r.hour}</Text>
              <Text x="74" y={y + 14} size={6.5} fill={ACERO} spacing={0.8}>{r.court}</Text>
              <circle cx="80" cy={y + 22} r="4" stroke={MARINO} strokeWidth="1.6" />
              <Text x="90" y={y + 25} size={7.5} fill={MARINO} spacing={0.4}>{r.ref}</Text>
            </g>
            {/* Confirmado por WhatsApp */}
            <g className="pop" style={delay(1200 + i * 350)}>
              <rect x="190" y={y + 6} width="84" height="20" fill={CELESTE} />
              <path d={`M197 ${y + 16}l3 3 6-6`} stroke={MARINO} strokeWidth="1.8" />
              <Text x="211" y={y + 19.5} size={6.5} fill={MARINO} spacing={0.5}>CONFIRMADO</Text>
            </g>
          </g>
        )
      })}
    </>
  )
}

// Tribunal: la IA lee el informe y propone la sanción con su artículo; el tribunal la aprueba
function TribunalScene() {
  return (
    <>
      <g className="pop">
        <rect x="16" y="20" width="110" height="150" fill={BLANCO} stroke={MARINO} strokeWidth="2" />
        <Text x="26" y="40" size={7} fill={PROFUNDO} spacing={1.2}>INFORME ARBITRAL</Text>
        {[54, 66, 78, 90, 102, 114].map((y, i) => (
          <line key={y} x1="26" y1={y} x2={[110, 96, 112, 88, 104, 70][i]} y2={y} stroke={SUAVE} strokeWidth="2.5" />
        ))}
        <rect x="26" y="128" width="90" height="30" fill="#ffd60a" />
        <Text x="71" y="147" size={7} fill={MARINO} spacing={0.6} textAnchor="middle">EXPULSIÓN · 7</Text>
      </g>
      <path className="draw" pathLength="1" style={delay(400)} d="M134 96h26M152 88l8 8-8 8" stroke={MARINO} strokeWidth="2.5" />
      <g className="pop" style={delay(700)}>
        <rect x="168" y="44" width="116" height="104" fill={MARINO} />
        <Text x="178" y="62" size={6.5} fill={CELESTE} spacing={1.2}>LA IA PROPONE</Text>
        <Text x="178" y="84" size={10} fill={BLANCO} spacing={0.4}>ART. 34</Text>
        <Text x="178" y="104" size={12} fill={BLANCO} spacing={0}>2 FECHAS</Text>
        <line x1="178" y1="116" x2="274" y2="116" stroke="#365a70" strokeWidth="1.5" />
        <Text x="178" y="134" size={6.5} fill="#b9cbd6" spacing={0.6}>SEGÚN TU REGLAMENTO</Text>
      </g>
      <g className="pop" style={delay(1600)}>
        <rect x="168" y="156" width="116" height="24" fill={CELESTE} />
        <path d="M178 168l3 3 6-6" stroke={MARINO} strokeWidth="1.8" />
        <Text x="193" y="171.5" size={7} fill={MARINO} spacing={0.6}>EL TRIBUNAL APRUEBA</Text>
      </g>
    </>
  )
}

export const ligaScenes = [InscripcionScene, PlantelesScene, FixtureScene, ProgramacionScene, EnVivoScene, PublicadoScene]

// Los 8 procesos de una liga, en el mismo orden que la lista de la página principal
export const processScenes = [
  PlantelesScene,
  FixtureScene,
  ProgramacionScene,
  PlanillaScene,
  ArbitrosScene,
  EnVivoScene,
  TribunalScene,
  PublicadoScene,
]

// `scenes` elige el juego de dibujos: los 6 pasos de Ligas (por defecto) o los 8 procesos
export function LigaDrawing({ index, play, scenes = ligaScenes }) {
  const on = usePlay(play)
  const Scene = scenes[index]
  return (
    <svg viewBox="0 0 300 200" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <Scene on={on} />
    </svg>
  )
}
