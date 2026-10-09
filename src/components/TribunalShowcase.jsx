// Tribunal IA: arriba un dibujo por paso (en marino, porque la tarjeta es celeste),
// abajo un recuadro marino con el paso actual.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

const MARINO = '#032639'
const CELESTE = '#3fb6ff'
const BLANCO = '#fbfbf8'
const SOFT = '#1d6e9a' // marino suavizado sobre celeste
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

const Text = ({ children, size = 8, weight = 800, fill = MARINO, spacing = 1.2, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

function Check({ x, y, r = 6, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <circle cx={x} cy={y} r={r} fill={MARINO} />
      <path d={`M${x - r * 0.45} ${y}l${r * 0.32} ${r * 0.32} ${r * 0.6}-${r * 0.65}`} stroke={CELESTE} strokeWidth="1.6" />
    </g>
  )
}

// Documento con líneas de texto
function Doc({ x, y, w = 70, h = 92, title, delayMs = 0, lines = 5 }) {
  return (
    <>
      <rect className="draw" pathLength="1" style={delay(delayMs)} x={x} y={y} width={w} height={h} stroke={MARINO} strokeWidth="2.5" />
      <Text className="pop" style={delay(delayMs + 150)} x={x + 8} y={y + 16} size={7}>{title}</Text>
      {Array.from({ length: lines }, (_, i) => (
        <line
          key={i}
          className="draw"
          pathLength="1"
          style={delay(delayMs + 250 + i * 70)}
          x1={x + 8}
          y1={y + 30 + i * 12}
          x2={x + 8 + (w - 16) * [1, 0.8, 0.95, 0.7, 0.85, 0.6][i % 6]}
          y2={y + 30 + i * 12}
          stroke={SOFT}
          strokeWidth="3"
        />
      ))}
    </>
  )
}

// 1. Se carga el reglamento de los torneos
function CargaScreen() {
  const articles = ['ART. 12 · CONDUCTA', 'ART. 34 · AGRESIONES', 'ART. 41 · INCIDENTES']
  return (
    <>
      <Doc x={10} y={40} title="REGLAMENTO" delayMs={0} lines={5} />
      {/* Flecha de carga */}
      <path className="draw" pathLength="1" style={delay(700)} d="M92 86h34M118 78l8 8-8 8" stroke={MARINO} strokeWidth="2.5" />
      {/* Sistema */}
      <g className="pop" style={delay(900)}>
        <rect x="136" y="30" width="156" height="112" fill={MARINO} />
        <Text x="146" y="48" size={7} fill={CELESTE} spacing={1.5}>TRIBUNAL · TEMPORADA 2026</Text>
      </g>
      {articles.map((a, i) => (
        <g key={a} className="pop" style={delay(1200 + i * 250)}>
          <rect x="146" y={60 + i * 25} width="136" height="19" fill="#0f3143" />
          <Text x="154" y={73 + i * 25} size={7} fill={BLANCO} spacing={0.6}>{a}</Text>
        </g>
      ))}
      <Check x={282} y={30} r={9} delayMs={2100} />
      <Text className="pop" style={delay(2200)} x="214" y="164" size={8} textAnchor="middle" spacing={1.5}>REGLAMENTO CARGADO</Text>
    </>
  )
}

// 2. Llegan los informes arbitrales
const reports = [
  { title: 'INFORME · FECHA 7', faul: 'ROJA DIRECTA', min: "67'" },
  { title: 'INFORME · FECHA 7', faul: 'AGRESIÓN', min: "81'" },
  { title: 'INFORME · FECHA 7', faul: 'DOBLE AMARILLA', min: "52'" },
]

function InformesScreen() {
  return (
    <>
      {/* Silbato del árbitro */}
      <g className="pop">
        <circle cx="30" cy="46" r="14" stroke={MARINO} strokeWidth="2.5" />
        <path d="M44 40h20v10H44" stroke={MARINO} strokeWidth="2.5" />
        <circle cx="30" cy="46" r="4" fill={MARINO} />
      </g>
      <Text className="pop" style={delay(150)} x="10" y="80" size={7} spacing={1.5}>ÁRBITROS</Text>
      {/* Informes que llegan */}
      {reports.map((r, i) => {
        const x = 96 + i * 8
        const y = 24 + i * 46
        return (
          <g key={i} className="slide-in" style={{ animationDelay: `${300 + i * 500}ms` }}>
            <rect x={x} y={y} width="190" height="38" fill={MARINO} />
            <rect x={x} y={y} width="6" height="38" fill={i === 1 ? '#c81e1e' : CELESTE} />
            <Text x={x + 14} y={y + 14} size={6.5} fill={CELESTE} spacing={1.2}>{r.title}</Text>
            <Text x={x + 14} y={y + 29} size={9} fill={BLANCO} spacing={0.6}>{r.faul}</Text>
            <Text x={x + 180} y={y + 29} size={9} fill={BLANCO} spacing={0} textAnchor="end">{r.min}</Text>
          </g>
        )
      })}
      <Text className="pop" style={delay(1900)} x="191" y="180" size={8} textAnchor="middle" spacing={1.5}>3 INFORMES NUEVOS</Text>
    </>
  )
}

// 3. El agente los analiza y aplica las sanciones
const sanctions = [
  { name: 'J. PÉREZ', value: '2 FECHAS' },
  { name: 'M. GÓMEZ', value: '3 FECHAS' },
  { name: 'C. RUIZ', value: '1 FECHA' },
]

function AgenteScreen() {
  return (
    <>
      {/* Informes que entran al agente */}
      {[0, 1, 2].map((i) => (
        <rect key={i} className="pop" style={delay(i * 100)} x={10 + i * 5} y={50 + i * 10} width="56" height="40" fill={MARINO} fillOpacity={0.35 + i * 0.3} />
      ))}
      <path className="draw" pathLength="1" style={delay(400)} d="M80 84h22" stroke={MARINO} strokeWidth="2.5" />
      {/* Agente IA */}
      <g className="pop" style={delay(600)}>
        <circle cx="128" cy="84" r="24" fill={MARINO} />
        <Text x="128" y="90" size={16} fill={CELESTE} spacing={0} textAnchor="middle">IA</Text>
      </g>
      <circle className="ping" style={{ animationDelay: '900ms' }} cx="128" cy="84" r="24" fill={MARINO} />
      <path className="draw" pathLength="1" style={delay(1000)} d="M154 84h14" stroke={MARINO} strokeWidth="2.5" />
      {/* Sanciones aplicadas */}
      <Text className="pop" style={delay(1100)} x="176" y="34" size={7} spacing={1.5}>SANCIONES</Text>
      {sanctions.map((s, i) => (
        <g key={s.name} className="pop" style={delay(1300 + i * 300)}>
          <rect x="176" y={42 + i * 26} width="116" height="21" fill={MARINO} />
          <Text x="184" y={56 + i * 26} size={7} fill={BLANCO} spacing={0.5}>{s.name}</Text>
          <Text x="286" y={56 + i * 26} size={7} fill={CELESTE} spacing={0.5} textAnchor="end">{s.value}</Text>
        </g>
      ))}
      {/* Boletín */}
      <g className="pop" style={delay(2400)}>
        <rect x="176" y="128" width="116" height="24" stroke={MARINO} strokeWidth="2" />
        <Text x="234" y="144" size={8} textAnchor="middle" spacing={1.5}>BOLETÍN PUBLICADO</Text>
      </g>
    </>
  )
}

const steps = [
  { name: 'Se carga el reglamento de los torneos', Screen: CargaScreen, ms: 3800 },
  { name: 'Llegan los informes arbitrales', Screen: InformesScreen, ms: 3600 },
  { name: 'El agente los analiza y aplica las sanciones', Screen: AgenteScreen, ms: 4200 },
]

function Drawing({ index, play }) {
  const on = usePlay(play)
  const { Screen } = steps[index]
  return (
    <svg viewBox="0 0 300 190" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <Screen />
    </svg>
  )
}

export default function TribunalShowcase() {
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
        key={`d-${round}`}
        className="format-enter w-full max-w-sm"
        role="img"
        aria-label={`Tribunal IA, paso ${index + 1}: ${current.name}`}
      >
        <Drawing index={index} play={inView} />
      </div>

      {/* La tarjeta es celeste, así que el recuadro va en marino */}
      <div className="bg-marino p-4 text-blanco">
        <div key={`t-${round}`} className="format-enter flex items-center gap-4">
          <span className="text-5xl font-extrabold leading-none text-celeste">{`0${index + 1}`}</span>
          <p className="text-lg font-extrabold uppercase leading-tight">{current.name}</p>
        </div>
      </div>
    </div>
  )
}
