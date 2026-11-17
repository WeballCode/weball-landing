// Planilla digital: arriba un celular que muestra cada paso, abajo el recuadro celeste con el paso actual.
// 1. Recibo el partido · 2. Cargo la planilla y el informe · 3. Liga confirma y se publican los resultados
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

const LINE = '#365a70'
const CELESTE = '#3fb6ff'
const MARINO = '#032639'
const MARINO_CLARO = '#0f3143'
const BRUMA = '#b9cbd6'
const BLANCO = '#fbfbf8'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

const Text = ({ children, size = 7, weight = 700, fill = BRUMA, spacing = 1, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

// Celular de 160 x 290 (proporción de teléfono real). Pantalla: x de 22 a 138, y de 30 a 270.
const BUTTON_Y = 252

function Button({ label, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <rect x="22" y={BUTTON_Y} width="116" height="18" fill={CELESTE} />
      <Text x="80" y={BUTTON_Y + 12} size={7} weight={800} fill={MARINO} textAnchor="middle">{label}</Text>
    </g>
  )
}

function Shield({ x, y, fill, s = 1 }) {
  return (
    <path
      d={`M${x - 9 * s} ${y - 9 * s}l${9 * s}-${3.5 * s} ${9 * s} ${3.5 * s}v${7 * s}c0 ${5.5 * s}-${4 * s} ${9 * s}-${9 * s} ${10.5 * s}-${5 * s}-${1.5 * s}-${9 * s}-${5 * s}-${9 * s}-${10.5 * s}z`}
      fill={fill}
    />
  )
}

// 1. Recibo el partido
function RecibirScreen() {
  return (
    <>
      {/* Aviso */}
      <g className="pop">
        <rect x="22" y="34" width="116" height="22" fill={CELESTE} />
        <path d="M32 50h10M34 50v-5a3 3 0 0 1 6 0v5M36 52h2" stroke={MARINO} strokeWidth="1.4" />
        <Text x="48" y="48" size={7} weight={800} fill={MARINO}>NUEVO PARTIDO</Text>
      </g>
      {/* Partido */}
      <rect className="draw" pathLength="1" style={delay(300)} x="22" y="70" width="116" height="164" stroke={LINE} strokeWidth="1.5" />
      <Text className="pop" style={delay(450)} x="80" y="90" size={6.5} fill={CELESTE} spacing={2} textAnchor="middle">FECHA 7 · PRIMERA</Text>
      <g className="pop" style={delay(600)}>
        <Shield x={48} y={120} fill={BRUMA} s={1.2} />
        <Text x="48" y="148" size={6.5} weight={800} fill={BLANCO} textAnchor="middle">LOCAL</Text>
      </g>
      <Text className="pop" style={delay(700)} x="80" y="127" size={12} weight={800} fill={LINE} spacing={0} textAnchor="middle">VS</Text>
      <g className="pop" style={delay(800)}>
        <Shield x={112} y={120} fill={BRUMA} s={1.2} />
        <Text x="112" y="148" size={6.5} weight={800} fill={BLANCO} textAnchor="middle">VISITA</Text>
      </g>
      <line className="draw" pathLength="1" style={delay(900)} x1="30" y1="166" x2="130" y2="166" stroke={LINE} strokeWidth="1" />
      {/* Horario y cancha */}
      <g className="pop" style={delay(1000)}>
        <circle cx="37" cy="186" r="5" stroke={BRUMA} strokeWidth="1.2" />
        <path d="M37 183v3l2 1.4" stroke={BRUMA} strokeWidth="1.1" />
        <Text x="48" y="189" size={7} weight={800} fill={BLANCO} spacing={0.5}>SÁBADO 16:00</Text>
      </g>
      <g className="pop" style={delay(1150)}>
        <rect x="32" y="202" width="10" height="8" stroke={BRUMA} strokeWidth="1.2" />
        <path d="M37 202v8" stroke={BRUMA} strokeWidth="1" />
        <Text x="48" y="209" size={7} weight={800} fill={BLANCO} spacing={0.5}>CANCHA 2</Text>
      </g>
      <Button label="ABRIR PLANILLA" delayMs={1400} />
    </>
  )
}

// 2. Cargo la planilla y el informe
const goals = [
  { min: "12'", team: 'local' },
  { min: "34'", team: 'visita' },
  { min: "67'", team: 'local' },
]

function CargarScreen({ on }) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!on) return
    const timers = [700, 1300, 1900].map((t, i) => setTimeout(() => setStep(i + 1), t))
    return () => timers.forEach(clearTimeout)
  }, [on])
  const shown = goals.slice(0, step)
  const local = shown.filter((g) => g.team === 'local').length
  const visita = shown.filter((g) => g.team === 'visita').length

  return (
    <>
      <Text className="pop" x="80" y="44" size={7} weight={800} fill={CELESTE} spacing={2} textAnchor="middle">PLANILLA DEL PARTIDO</Text>
      {/* Marcador */}
      <g className="pop" style={delay(150)}>
        <Text x="36" y="66" size={6.5} fill={BRUMA}>LOCAL</Text>
        <Text x="124" y="66" size={6.5} fill={BRUMA} textAnchor="end">VISITA</Text>
        <Text x="50" y="98" size={28} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">{local}</Text>
        <Text x="80" y="94" size={16} weight={800} fill={LINE} spacing={0} textAnchor="middle">-</Text>
        <Text x="110" y="98" size={28} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">{visita}</Text>
      </g>
      <line className="draw" pathLength="1" style={delay(250)} x1="26" y1="112" x2="134" y2="112" stroke={LINE} strokeWidth="1.5" />
      {/* Goles con su minuto */}
      {shown.map((g, i) => {
        const y = 130 + i * 18
        return (
          <g key={i} className="format-enter">
            <Text x="28" y={y + 3} size={8} weight={800} fill={CELESTE} spacing={0}>{g.min}</Text>
            <circle cx="50" cy={y} r="4" fill={BLANCO} />
            <line x1="60" y1={y} x2={g.team === 'local' ? 100 : 124} y2={y} stroke={g.team === 'local' ? BRUMA : LINE} strokeWidth="3" />
          </g>
        )
      })}
      {/* Informe del árbitro */}
      <Text className="pop" style={delay(2200)} x="26" y="198" size={6.5} weight={800} fill={CELESTE} spacing={1.5}>INFORME DEL ÁRBITRO</Text>
      {[104, 92, 70].map((len, i) => (
        <line key={i} className="draw" pathLength="1" style={delay(2350 + i * 350)} x1="26" y1={210 + i * 10} x2={26 + len} y2={210 + i * 10} stroke={BRUMA} strokeOpacity="0.7" strokeWidth="2.5" />
      ))}
      <Button label="ENVIAR A LA LIGA" delayMs={3200} />
    </>
  )
}

// 3. Liga confirma y se publican los resultados
function PublicarScreen() {
  return (
    <>
      {/* Confirmación de la liga */}
      <g className="pop">
        <circle cx="80" cy="56" r="16" fill={CELESTE} />
        <path d="M73 56l5 5 10-11" stroke={MARINO} strokeWidth="2.5" />
      </g>
      <Text className="pop" style={delay(200)} x="80" y="92" size={7.5} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">CONFIRMADO POR LA LIGA</Text>
      {/* Resultado publicado */}
      <g className="format-enter" style={{ animationDelay: '500ms' }}>
        <rect x="22" y="106" width="116" height="74" fill={MARINO_CLARO} stroke={CELESTE} strokeWidth="1.5" />
        <Text x="30" y="121" size={6} weight={800} fill={CELESTE} spacing={1.5}>RESULTADO FINAL</Text>
        <Shield x={40} y={150} fill={BRUMA} s={1.1} />
        <Text x="66" y="158" size={20} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">2</Text>
        <Text x="80" y="155" size={12} weight={800} fill={LINE} spacing={0} textAnchor="middle">-</Text>
        <Text x="94" y="158" size={20} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">1</Text>
        <Shield x={120} y={150} fill={BRUMA} s={1.1} />
      </g>
      {/* Publicado: ondas que salen */}
      <g className="pop" style={delay(1100)}>
        <rect x="48" y="204" width="64" height="18" fill={CELESTE} />
        <Text x="80" y="216" size={7} weight={800} fill={MARINO} spacing={1.5} textAnchor="middle">PUBLICADO</Text>
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path className="draw" pathLength="1" style={delay(1300 + i * 200)} d={`M${42 - i * 6} ${200 - i * 3}a${18 + i * 6} ${18 + i * 6} 0 0 0 0 ${26 + i * 6}`} stroke={CELESTE} strokeWidth="1.5" strokeOpacity={1 - i * 0.3} />
          <path className="draw" pathLength="1" style={delay(1300 + i * 200)} d={`M${118 + i * 6} ${200 - i * 3}a${18 + i * 6} ${18 + i * 6} 0 0 1 0 ${26 + i * 6}`} stroke={CELESTE} strokeWidth="1.5" strokeOpacity={1 - i * 0.3} />
        </g>
      ))}
      <Button label="VER LA TABLA" delayMs={1700} />
    </>
  )
}

const steps = [
  { name: 'Recibo el partido', Screen: RecibirScreen, ms: 3200 },
  { name: 'Cargo la planilla y el informe', Screen: CargarScreen, ms: 4600 },
  { name: 'Liga confirma y se publican los resultados', Screen: PublicarScreen, ms: 3600 },
]

function Phone({ index, play }) {
  const on = usePlay(play)
  const { Screen } = steps[index]
  return (
    <svg viewBox="0 0 160 290" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <rect x="10" y="4" width="140" height="282" rx="18" stroke={LINE} strokeWidth="2.5" />
      <line x1="66" y1="16" x2="94" y2="16" stroke={LINE} strokeWidth="2.5" />
      <Screen on={on} />
    </svg>
  )
}

export default function PlanillaShowcase() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(reduced ? 2 : 0)
  const [round, setRound] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % steps.length)
      setRound((r) => r + 1)
    }, steps[index].ms)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  const current = steps[index]

  return (
    // En pantallas medianas para arriba, el recuadro del paso va al costado del celular (ocupa menos alto)
    <div ref={ref} className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-6">
      <div
        key={`p-${round}`}
        className="format-enter mx-auto w-full max-w-[200px] shrink-0 sm:mx-0"
        role="img"
        aria-label={`Planilla digital, paso ${index + 1}: ${current.name}`}
      >
        <Phone index={index} play={inView} />
      </div>

      <div className="bg-celeste p-4 text-marino sm:flex-1">
        <div key={`t-${round}`} className="format-enter flex items-center gap-4">
          <span className="text-5xl font-extrabold leading-none text-blanco">{`0${index + 1}`}</span>
          <p className="text-lg font-extrabold uppercase leading-tight">{current.name}</p>
        </div>
      </div>
    </div>
  )
}
