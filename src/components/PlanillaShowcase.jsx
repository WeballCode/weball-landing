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

// Pantalla del celular: x de 22 a 138, y de 28 a 206
function Button({ label, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <rect x="22" y="188" width="116" height="16" fill={CELESTE} />
      <Text x="80" y="199" size={6.5} weight={800} fill={MARINO} textAnchor="middle">{label}</Text>
    </g>
  )
}

function Shield({ x, y, fill }) {
  return <path d={`M${x - 8} ${y - 8}l8-3 8 3v6c0 5-3.5 8-8 9.5-4.5-1.5-8-4.5-8-9.5z`} fill={fill} />
}

// 1. Recibo el partido
function RecibirScreen() {
  return (
    <>
      {/* Aviso */}
      <g className="pop">
        <rect x="22" y="32" width="116" height="20" fill={CELESTE} />
        <path d="M31 47h10M33 47v-5a3 3 0 0 1 6 0v5M35 49h2" stroke={MARINO} strokeWidth="1.4" />
        <Text x="46" y="45" size={6.5} weight={800} fill={MARINO}>NUEVO PARTIDO</Text>
      </g>
      {/* Partido */}
      <rect className="draw" pathLength="1" style={delay(300)} x="22" y="62" width="116" height="110" stroke={LINE} strokeWidth="1.5" />
      <Text className="pop" style={delay(450)} x="80" y="78" size={6} fill={CELESTE} spacing={2} textAnchor="middle">FECHA 7 · PRIMERA</Text>
      <g className="pop" style={delay(600)}>
        <Shield x={48} y={102} fill={BRUMA} />
        <Text x="48" y="124" size={6} weight={800} fill={BLANCO} textAnchor="middle">LOCAL</Text>
      </g>
      <Text className="pop" style={delay(700)} x="80" y="108" size={11} weight={800} fill={LINE} spacing={0} textAnchor="middle">VS</Text>
      <g className="pop" style={delay(800)}>
        <Shield x={112} y={102} fill={BRUMA} />
        <Text x="112" y="124" size={6} weight={800} fill={BLANCO} textAnchor="middle">VISITA</Text>
      </g>
      <line className="draw" pathLength="1" style={delay(900)} x1="30" y1="136" x2="130" y2="136" stroke={LINE} strokeWidth="1" />
      {/* Horario y cancha */}
      <g className="pop" style={delay(1000)}>
        <circle cx="36" cy="150" r="4.5" stroke={BRUMA} strokeWidth="1.2" />
        <path d="M36 147.5v2.5l1.8 1.2" stroke={BRUMA} strokeWidth="1.1" />
        <Text x="45" y="152.5" size={6.5} weight={800} fill={BLANCO} spacing={0.5}>SÁBADO 16:00</Text>
      </g>
      <g className="pop" style={delay(1150)}>
        <rect x="31.5" y="158.5" width="9" height="7" stroke={BRUMA} strokeWidth="1.2" />
        <path d="M36 158.5v7" stroke={BRUMA} strokeWidth="1" />
        <Text x="45" y="165" size={6.5} weight={800} fill={BLANCO} spacing={0.5}>CANCHA 2</Text>
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
      <Text className="pop" x="80" y="40" size={6.5} weight={800} fill={CELESTE} spacing={2} textAnchor="middle">PLANILLA DEL PARTIDO</Text>
      <g className="pop" style={delay(150)}>
        <Text x="36" y="56" size={6} fill={BRUMA}>LOCAL</Text>
        <Text x="124" y="56" size={6} fill={BRUMA} textAnchor="end">VISITA</Text>
        <Text x="50" y="82" size={24} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">{local}</Text>
        <Text x="80" y="79" size={14} weight={800} fill={LINE} spacing={0} textAnchor="middle">-</Text>
        <Text x="110" y="82" size={24} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">{visita}</Text>
      </g>
      <line className="draw" pathLength="1" style={delay(250)} x1="26" y1="92" x2="134" y2="92" stroke={LINE} strokeWidth="1.5" />
      {shown.map((g, i) => {
        const y = 104 + i * 13
        return (
          <g key={i} className="format-enter">
            <Text x="28" y={y + 2.5} size={7} weight={800} fill={CELESTE} spacing={0}>{g.min}</Text>
            <circle cx="48" cy={y} r="3.5" fill={BLANCO} />
            <line x1="56" y1={y} x2={g.team === 'local' ? 96 : 120} y2={y} stroke={g.team === 'local' ? BRUMA : LINE} strokeWidth="2.5" />
          </g>
        )
      })}
      {/* Informe del árbitro */}
      <Text className="pop" style={delay(2200)} x="26" y="150" size={6} weight={800} fill={CELESTE} spacing={1.5}>INFORME DEL ÁRBITRO</Text>
      {[104, 92, 70].map((len, i) => (
        <line key={i} className="draw" pathLength="1" style={delay(2350 + i * 350)} x1="26" y1={160 + i * 8} x2={26 + len} y2={160 + i * 8} stroke={BRUMA} strokeOpacity="0.7" strokeWidth="2" />
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
        <circle cx="80" cy="48" r="13" fill={CELESTE} />
        <path d="M74 48l4.5 4.5 8-9" stroke={MARINO} strokeWidth="2.3" />
      </g>
      <Text className="pop" style={delay(200)} x="80" y="74" size={7} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">CONFIRMADO POR LA LIGA</Text>
      {/* Resultado publicado */}
      <g className="format-enter" style={{ animationDelay: '500ms' }}>
        <rect x="22" y="84" width="116" height="62" fill={MARINO_CLARO} stroke={CELESTE} strokeWidth="1.5" />
        <Text x="30" y="96" size={5.5} weight={800} fill={CELESTE} spacing={1.5}>RESULTADO FINAL</Text>
        <Shield x={40} y={118} fill={BRUMA} />
        <Text x="66" y="124" size={16} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">2</Text>
        <Text x="80" y="122" size={10} weight={800} fill={LINE} spacing={0} textAnchor="middle">-</Text>
        <Text x="94" y="124" size={16} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">1</Text>
        <Shield x={120} y={118} fill={BRUMA} />
      </g>
      {/* Publicado: ondas que salen */}
      <g className="pop" style={delay(1100)}>
        <rect x="50" y="154" width="60" height="16" fill={CELESTE} />
        <Text x="80" y="165" size={6.5} weight={800} fill={MARINO} spacing={1.5} textAnchor="middle">PUBLICADO</Text>
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path className="draw" pathLength="1" style={delay(1300 + i * 200)} d={`M${44 - i * 6} ${150 - i * 3}a${18 + i * 6} ${18 + i * 6} 0 0 0 0 ${24 + i * 6}`} stroke={CELESTE} strokeWidth="1.5" strokeOpacity={1 - i * 0.3} />
          <path className="draw" pathLength="1" style={delay(1300 + i * 200)} d={`M${116 + i * 6} ${150 - i * 3}a${18 + i * 6} ${18 + i * 6} 0 0 1 0 ${24 + i * 6}`} stroke={CELESTE} strokeWidth="1.5" strokeOpacity={1 - i * 0.3} />
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
    <svg viewBox="0 0 160 220" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <rect x="10" y="4" width="140" height="212" rx="16" stroke={LINE} strokeWidth="2.5" />
      <line x1="66" y1="14" x2="94" y2="14" stroke={LINE} strokeWidth="2.5" />
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
    <div ref={ref} className="flex flex-col gap-8">
      <div
        key={`p-${round}`}
        className="format-enter mx-auto w-full max-w-[220px]"
        role="img"
        aria-label={`Planilla digital, paso ${index + 1}: ${current.name}`}
      >
        <Phone index={index} play={inView} />
      </div>

      <div className="bg-celeste p-4 text-marino">
        <div key={`t-${round}`} className="format-enter flex items-center gap-4">
          <span className="text-5xl font-extrabold leading-none text-blanco">{`0${index + 1}`}</span>
          <p className="text-lg font-extrabold uppercase leading-tight">{current.name}</p>
        </div>
      </div>
    </div>
  )
}
