// Animación de Fichajes: el flujo en 5 etapas, en un celular grande y con pocas cosas por pantalla
// para que se lea bien. Al costado, el número y el nombre de la etapa.
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

const Text = ({ children, size = 10, weight = 800, fill = BLANCO, spacing = 1, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

// Celular: x de 14 a 166, y de 6 a 274. Pantalla útil: x de 26 a 154, y de 50 a 262.
const CX = 90

function Button({ label, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <rect x="26" y="236" width="128" height="24" fill={CELESTE} />
      <Text x={CX} y="252" size={10} fill={MARINO} textAnchor="middle">
        {label}
      </Text>
    </g>
  )
}

function Check({ x, y, r = 10, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <circle cx={x} cy={y} r={r} fill={CELESTE} />
      <path d={`M${x - r * 0.45} ${y}l${r * 0.32} ${r * 0.32} ${r * 0.6}-${r * 0.65}`} stroke={MARINO} strokeWidth="2.4" />
    </g>
  )
}

// 1. Inicio: la invitación del club
function InicioScreen() {
  return (
    <>
      <Text className="pop" x={CX} y="78" size={14} fill={CELESTE} textAnchor="middle">
        ¡BIENVENIDO/A!
      </Text>
      <path className="draw" pathLength="1" style={delay(200)} d="M70 102l20-8 20 8v16c0 12-8 20-20 24-12-4-20-12-20-24z" stroke={CELESTE} strokeWidth="3" />
      <Text className="pop" style={delay(500)} x={CX} y="168" size={11} weight={700} fill={BRUMA} spacing={0.5} textAnchor="middle">
        Te invitaron al
      </Text>
      <Text className="pop" style={delay(600)} x={CX} y="186" size={13} textAnchor="middle">
        PLANTEL DEL CLUB
      </Text>
      <Button label="COMENZAR" delayMs={1000} />
    </>
  )
}

// 2. Documentación: DNI y selfie
function DocumentacionScreen() {
  return (
    <>
      <Text className="pop" x={CX} y="74" size={11} fill={CELESTE} spacing={1.5} textAnchor="middle">
        TU DOCUMENTO
      </Text>
      <g className="pop" style={delay(200)}>
        <rect x="46" y="86" width="88" height="56" stroke={BRUMA} strokeWidth="2.5" />
        <circle cx="66" cy="110" r="8" fill={BRUMA} />
        <path d="M56 128a10 8 0 0 1 20 0M86 104h36M86 114h36M86 124h24" stroke={BRUMA} strokeWidth="2.5" />
      </g>
      <Check x={134} y={88} delayMs={700} />
      <Text className="pop" style={delay(900)} x={CX} y="170" size={11} fill={CELESTE} spacing={1.5} textAnchor="middle">
        TU SELFIE
      </Text>
      <g className="pop" style={delay(1100)}>
        <circle cx={CX} cy="200" r="20" fill={MARINO_CLARO} stroke={BRUMA} strokeWidth="2.5" />
        <circle cx={CX} cy="194" r="7" fill={BRUMA} />
        <path d={`M${CX - 12} 214a12 9 0 0 1 24 0`} fill={BRUMA} />
      </g>
      <Check x={112} y={184} delayMs={1500} />
      <Button label="CONTINUAR" delayMs={1700} />
    </>
  )
}

// 3. Cuenta: los datos extra que pide la liga, en celeste
function CuentaScreen() {
  const extras = [
    { label: 'REMERA', value: 'M' },
    { label: 'ZAPATILLAS', value: '42' },
  ]
  return (
    <>
      <Text className="pop" x={CX} y="74" size={11} fill={CELESTE} spacing={1.5} textAnchor="middle">
        TU CUENTA
      </Text>
      <Text className="pop" style={delay(150)} x="30" y="98" size={9} weight={700} fill={BRUMA} spacing={0.8}>
        WHATSAPP
      </Text>
      <line className="draw" pathLength="1" style={delay(250)} x1="30" y1="108" x2="140" y2="108" stroke={BLANCO} strokeWidth="3" />
      <g className="format-enter" style={{ animationDelay: '600ms' }}>
        <rect x="26" y="124" width="128" height="100" fill={CELESTE} />
        <Text x="34" y="142" size={9} fill={MARINO} spacing={1}>
          MÁS DATOS DE TU LIGA
        </Text>
      </g>
      {extras.map((e, i) => {
        const y = 168 + i * 30
        return (
          <g key={e.label} className="pop" style={delay(1000 + i * 400)}>
            <Text x="34" y={y} size={10} fill={MARINO} spacing={0.6}>
              + {e.label}
            </Text>
            <Text x="146" y={y + 1} size={13} fill={MARINO} spacing={0} textAnchor="end">
              {e.value}
            </Text>
            <line x1="34" y1={y + 9} x2="146" y2={y + 9} stroke={MARINO} strokeOpacity="0.35" strokeWidth="1.2" />
          </g>
        )
      })}
      <Button label="CONTINUAR" delayMs={1900} />
    </>
  )
}

// 4. Pago: medio de pago y aprobación
function PagoScreen() {
  return (
    <>
      <Text className="pop" x={CX} y="74" size={11} fill={CELESTE} spacing={1.5} textAnchor="middle">
        PAGO DEL FICHAJE
      </Text>
      <g className="format-enter" style={{ animationDelay: '300ms' }}>
        <rect x="34" y="92" width="112" height="70" fill={MARINO_CLARO} stroke={CELESTE} strokeWidth="2" />
        <rect x="44" y="104" width="18" height="13" fill={CELESTE} />
        <line x1="44" y1="138" x2="120" y2="138" stroke={BRUMA} strokeWidth="3" />
        <line x1="44" y1="148" x2="84" y2="148" stroke={BRUMA} strokeWidth="2.5" />
      </g>
      <Check x={CX} y={192} r={13} delayMs={1100} />
      <Text className="pop" style={delay(1300)} x={CX} y="222" size={11} fill={CELESTE} textAnchor="middle">
        PAGO APROBADO
      </Text>
      <Button label="CONTINUAR" delayMs={1600} />
    </>
  )
}

// 5. Fin: la credencial digital
function FinScreen() {
  return (
    <>
      <Check x={CX} y={78} r={14} />
      <Text className="pop" style={delay(200)} x={CX} y="112" size={11} fill={CELESTE} textAnchor="middle">
        ¡FICHAJE COMPLETADO!
      </Text>
      <g className="format-enter" style={{ animationDelay: '500ms' }}>
        <rect x="26" y="126" width="128" height="96" fill={MARINO_CLARO} stroke={CELESTE} strokeWidth="2" />
        <Text x="34" y="142" size={8} fill={CELESTE} spacing={1.2}>
          CREDENCIAL DIGITAL
        </Text>
        <rect x="34" y="152" width="34" height="44" fill={LINE} />
        <circle cx="51" cy="167" r="7" fill={BRUMA} />
        <path d="M39 196a12 10 0 0 1 24 0" fill={BRUMA} />
        <line x1="76" y1="160" x2="144" y2="160" stroke={BLANCO} strokeWidth="3.5" />
        <line x1="76" y1="172" x2="126" y2="172" stroke={BLANCO} strokeWidth="3.5" />
        <line x1="76" y1="186" x2="110" y2="186" stroke={BRUMA} strokeWidth="2.5" />
        <circle cx="140" cy="208" r="8" fill={BLANCO} />
        <Text x="140" y="211.5" size={7} fill={MARINO} spacing={0} textAnchor="middle">
          We
        </Text>
      </g>
      <Button label="FINALIZAR" delayMs={1100} />
    </>
  )
}

const stages = [
  { title: 'INICIO', lines: ['La invitación', 'del club.'], Screen: InicioScreen, ms: 3000 },
  { title: 'DOCUMENTACIÓN', lines: ['DNI y selfie.'], Screen: DocumentacionScreen, ms: 3400 },
  { title: 'CUENTA', lines: ['Y los datos que', 'pida tu liga.'], Screen: CuentaScreen, ms: 4000 },
  { title: 'PAGO', lines: ['Del fichaje', 'y el seguro.'], Screen: PagoScreen, ms: 3200 },
  { title: 'FIN', lines: ['Credencial', 'digital lista.'], Screen: FinScreen, ms: 3200 },
]
const STEP_GAP = 88 / (stages.length - 1)

function Stage({ index, play }) {
  const on = usePlay(play)
  const stage = stages[index]
  const { Screen } = stage
  return (
    <svg viewBox="0 0 330 280" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {/* Celular */}
      <rect x="14" y="6" width="152" height="268" rx="18" stroke={LINE} strokeWidth="3" />
      <line x1="72" y1="18" x2="108" y2="18" stroke={LINE} strokeWidth="3" />
      {/* Indicador de etapas */}
      <line x1="46" y1="38" x2="134" y2="38" stroke={LINE} strokeWidth="2" />
      <line x1="46" y1="38" x2={46 + index * STEP_GAP} y2="38" stroke={CELESTE} strokeWidth="2" />
      {stages.map((_, i) => (
        <circle key={i} cx={46 + i * STEP_GAP} cy="38" r="4.5" fill={i <= index ? CELESTE : MARINO_CLARO} stroke={i <= index ? 'none' : LINE} strokeWidth="2" />
      ))}
      <Screen />
      {/* Etapa al costado: número, nombre y una línea */}
      <g className="format-enter">
        <Text x="186" y="128" size={34} fill={CELESTE} spacing={0}>{`0${index + 1}`}</Text>
        <Text x="186" y="154" size={15} fill={BLANCO} spacing={1}>{stage.title}</Text>
        {stage.lines.map((l, i) => (
          <Text key={l} x="186" y={176 + i * 15} size={11.5} weight={400} fill={BRUMA} spacing={0}>
            {l}
          </Text>
        ))}
      </g>
    </svg>
  )
}

export function FichajesVisual() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(reduced ? 2 : 0)
  const [round, setRound] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % stages.length)
      setRound((r) => r + 1)
    }, stages[index].ms)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  return (
    <div
      ref={ref}
      className="w-full max-w-lg"
      role="img"
      aria-label="El fichaje desde el celular en 5 etapas: inicio, documentación, cuenta con los datos extra de la liga, pago y credencial digital"
    >
      <Stage key={round} index={index} play={inView} />
    </div>
  )
}
