// Animación de Fichajes: el flujo del nuevo sistema en 5 etapas, en el celular.
// La etapa "Cuenta" destaca en celeste los datos extra que pide cada liga.
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

const Text = ({ children, size = 9, weight = 700, fill = BRUMA, spacing = 1.5, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

function Button({ x = 30, y = 182, w = 100, label, filled = true, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <rect x={x} y={y} width={w} height="15" fill={filled ? CELESTE : 'none'} stroke={filled ? 'none' : BRUMA} strokeWidth="1.5" />
      <Text x={x + w / 2} y={y + 10.5} size={6.5} weight={800} fill={filled ? MARINO : BRUMA} spacing={1} textAnchor="middle">
        {label}
      </Text>
    </g>
  )
}

function Check({ x, y, r = 4, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <circle cx={x} cy={y} r={r} fill={CELESTE} />
      <path d={`M${x - r * 0.5} ${y}l${r * 0.35} ${r * 0.35} ${r * 0.65}-${r * 0.7}`} stroke={MARINO} strokeWidth="1.3" />
    </g>
  )
}

function Title({ children }) {
  return (
    <Text className="pop" x="80" y="54" size={7} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">
      {children}
    </Text>
  )
}

// Pantalla del celular: x de 30 a 130, y de 44 a 204

// 1. Inicio: bienvenida y consentimientos
function InicioScreen() {
  return (
    <>
      <Title>¡BIENVENIDO/A!</Title>
      <Text className="pop" style={delay(150)} x="80" y="66" size={5.5} fill={BRUMA} spacing={0.6} textAnchor="middle">
        TE INVITARON AL PLANTEL DE
      </Text>
      <path className="draw" pathLength="1" style={delay(250)} d="M70 74l10-4 10 4v8c0 6-4 10-10 12-6-2-10-6-10-12z" stroke={CELESTE} strokeWidth="1.8" />
      <Text className="pop" style={delay(400)} x="80" y="106" size={7} weight={800} fill={BLANCO} spacing={1} textAnchor="middle">
        EQUIPO
      </Text>
      {/* Consentimientos */}
      {[0, 1].map((i) => {
        const y = 118 + i * 28
        return (
          <g key={i}>
            <rect className="draw" pathLength="1" style={delay(500 + i * 150)} x="30" y={y} width="100" height="22" stroke={LINE} strokeWidth="1.5" />
            <rect x="36" y={y + 6.5} width="9" height="9" stroke={BRUMA} strokeWidth="1.3" />
            <g className="pop" style={delay(1000 + i * 400)}>
              <rect x="36" y={y + 6.5} width="9" height="9" fill={CELESTE} />
              <path d={`M38 ${y + 11}l2 2 3.5-4`} stroke={MARINO} strokeWidth="1.3" />
            </g>
            <line className="draw" pathLength="1" style={delay(650 + i * 150)} x1="51" y1={y + 8} x2="122" y2={y + 8} stroke={BRUMA} strokeOpacity="0.7" strokeWidth="2" />
            <line className="draw" pathLength="1" style={delay(700 + i * 150)} x1="51" y1={y + 15} x2="104" y2={y + 15} stroke={BRUMA} strokeOpacity="0.7" strokeWidth="2" />
          </g>
        )
      })}
      <Button label="COMENZAR" delayMs={1700} />
    </>
  )
}

// 2. Documentación: DNI, selfie y revisión de datos
function DocumentacionScreen() {
  return (
    <>
      <Title>TU DOCUMENTACIÓN</Title>
      {/* DNI frente y dorso */}
      {[0, 1].map((i) => {
        const x = 32 + i * 50
        return (
          <g key={i}>
            <rect className="draw" pathLength="1" style={delay(100 + i * 150)} x={x} y="62" width="46" height="30" stroke={LINE} strokeWidth="1.5" strokeDasharray="1" />
            <g className="pop" style={delay(300 + i * 150)}>
              <rect x={x + 12} y="69" width="22" height="15" stroke={BRUMA} strokeWidth="1.3" />
              <circle cx={x + 18} cy="75" r="2.2" fill={BRUMA} />
              <path d={`M${x + 23} 73h8M${x + 23} 77h8M${x + 23} 81h5`} stroke={BRUMA} strokeWidth="1.1" />
            </g>
            <Check x={x + 42} y={65} r={4} delayMs={600 + i * 250} />
          </g>
        )
      })}
      {/* Selfie */}
      <circle className="draw" pathLength="1" style={delay(900)} cx="80" cy="120" r="20" stroke={LINE} strokeWidth="1.8" />
      <g className="pop" style={delay(1100)}>
        <circle cx="80" cy="115" r="6.5" fill={BRUMA} />
        <path d="M68 134a12 10 0 0 1 24 0" fill={BRUMA} />
      </g>
      <circle className="pop flash" style={delay(1300)} cx="80" cy="120" r="20" fill={BLANCO} />
      <Check x={96} y={104} r={5} delayMs={1500} />
      {/* Revisión */}
      {[64, 48].map((len, i) => (
        <g key={i}>
          <line className="draw" pathLength="1" style={delay(1600 + i * 120)} x1="34" y1={152 + i * 10} x2={34 + len} y2={152 + i * 10} stroke={BLANCO} strokeWidth="2.5" />
        </g>
      ))}
      <Check x={124} y={156} r={4.5} delayMs={1900} />
      <Button label="CONTINUAR" delayMs={2000} />
    </>
  )
}

// 3. Cuenta: WhatsApp, mail y los datos extra de la liga (destacados en celeste)
function CuentaScreen() {
  const extras = [
    { label: 'TALLE DE ZAPATILLAS', value: '42' },
    { label: 'TALLE DE REMERA', value: 'M' },
    { label: 'DIRECCIÓN', value: '' },
  ]
  return (
    <>
      <Title>TU CUENTA</Title>
      {/* WhatsApp */}
      <g className="pop" style={delay(100)}>
        <rect x="30" y="62" width="11" height="11" stroke={BRUMA} strokeWidth="1.3" />
        <path d="M33 70l1-2a3.5 3.5 0 1 1 1.3 1.3z" fill={BRUMA} />
      </g>
      <Text className="pop" style={delay(100)} x="46" y="66" size={5.5} fill={BRUMA} spacing={0.8}>WHATSAPP</Text>
      <line className="draw" pathLength="1" style={delay(200)} x1="46" y1="72" x2="104" y2="72" stroke={BLANCO} strokeWidth="2.5" />
      {/* Mail */}
      <g className="pop" style={delay(350)}>
        <rect x="30" y="81" width="11" height="9" stroke={BRUMA} strokeWidth="1.3" />
        <path d="M30 81l5.5 4.5 5.5-4.5" stroke={BRUMA} strokeWidth="1.2" />
      </g>
      <Text className="pop" style={delay(350)} x="46" y="85" size={5.5} fill={BRUMA} spacing={0.8}>MAIL</Text>
      <line className="draw" pathLength="1" style={delay(450)} x1="46" y1="91" x2="118" y2="91" stroke={BLANCO} strokeWidth="2.5" />
      {/* Más datos: bloque celeste lleno */}
      <g className="format-enter" style={{ animationDelay: '800ms' }}>
        <rect x="28" y="100" width="104" height="76" fill={CELESTE} />
        <Text x="34" y="112" size={6} weight={800} fill={MARINO} spacing={1.2}>MÁS DATOS DE TU LIGA</Text>
      </g>
      {extras.map((e, i) => {
        const y = 126 + i * 17
        return (
          <g key={e.label} className="pop" style={delay(1200 + i * 350)}>
            <rect x="34" y={y - 6} width="8" height="8" fill={MARINO} />
            <path d={`M38 ${y - 4.5}v5M35.5 ${y - 2}h5`} stroke={CELESTE} strokeWidth="1.3" />
            <Text x="46" y={y + 1} size={5.5} weight={800} fill={MARINO} spacing={0.6}>{e.label}</Text>
            {e.value ? (
              <Text x="126" y={y + 1.5} size={7} weight={800} fill={MARINO} spacing={0} textAnchor="end">{e.value}</Text>
            ) : (
              <line x1="104" y1={y - 1} x2="126" y2={y - 1} stroke={MARINO} strokeWidth="2.5" />
            )}
            <line x1="34" y1={y + 6} x2="126" y2={y + 6} stroke={MARINO} strokeOpacity="0.35" strokeWidth="1" />
          </g>
        )
      })}
      <Button label="CONTINUAR" delayMs={2500} />
    </>
  )
}

// 4. Pago: revisión, seguro y medio de pago
function PagoScreen() {
  return (
    <>
      <Title>PAGO DEL FICHAJE</Title>
      {/* Resumen */}
      <Text className="pop" style={delay(100)} x="30" y="68" size={5.5} fill={BRUMA} spacing={0.8}>RESUMEN</Text>
      <line className="draw" pathLength="1" style={delay(200)} x1="30" y1="76" x2="96" y2="76" stroke={BLANCO} strokeWidth="2.5" />
      <line className="draw" pathLength="1" style={delay(300)} x1="30" y1="84" x2="80" y2="84" stroke={BLANCO} strokeWidth="2.5" />
      {/* Seguro */}
      <rect className="draw" pathLength="1" style={delay(400)} x="30" y="94" width="100" height="24" stroke={LINE} strokeWidth="1.5" />
      <path className="draw" pathLength="1" style={delay(500)} d="M38 100l6-2.5 6 2.5v4.5c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7z" stroke={CELESTE} strokeWidth="1.5" />
      <Text className="pop" style={delay(600)} x="56" y="109" size={6} weight={800} fill={BLANCO} spacing={1}>SEGURO</Text>
      {/* Interruptor que se prende */}
      <rect x="104" y="101" width="20" height="10" rx="5" stroke={LINE} strokeWidth="1.3" />
      <g className="pop" style={delay(1000)}>
        <rect x="104" y="101" width="20" height="10" rx="5" fill={CELESTE} />
        <circle cx="119" cy="106" r="3.5" fill={MARINO} />
      </g>
      {/* Medio de pago */}
      <Text className="pop" style={delay(1100)} x="30" y="132" size={5.5} fill={BRUMA} spacing={0.8}>MEDIO DE PAGO</Text>
      <g className="format-enter" style={{ animationDelay: '1300ms' }}>
        <rect x="30" y="138" width="70" height="38" fill={MARINO_CLARO} stroke={CELESTE} strokeWidth="1.5" />
        <rect x="36" y="146" width="11" height="8" fill={CELESTE} />
        <line x1="36" y1="164" x2="78" y2="164" stroke={BRUMA} strokeWidth="2.5" />
        <line x1="36" y1="170" x2="58" y2="170" stroke={BRUMA} strokeWidth="2" />
      </g>
      <Check x={112} y={157} r={6} delayMs={1800} />
      <Button label="PAGAR" delayMs={2000} />
    </>
  )
}

// 5. Fin: fichaje completado y credencial lista
function FinScreen() {
  return (
    <>
      <g className="pop">
        <circle cx="80" cy="64" r="15" fill={CELESTE} />
        <path d="M73 64l5 5 9-10" stroke={MARINO} strokeWidth="2.5" />
      </g>
      <Text className="pop" style={delay(200)} x="80" y="94" size={7} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">
        ¡FICHAJE COMPLETADO!
      </Text>
      <g className="format-enter" style={{ animationDelay: '500ms' }}>
        <rect x="28" y="104" width="104" height="70" fill={MARINO_CLARO} stroke={CELESTE} strokeWidth="1.5" />
        <Text x="35" y="115" size={5.5} weight={800} fill={CELESTE} spacing={1.2}>CREDENCIAL DIGITAL</Text>
        <rect x="35" y="121" width="24" height="31" fill={LINE} />
        <circle cx="47" cy="132" r="5" fill={BRUMA} />
        <path d="M38 152a9 8 0 0 1 18 0" fill={BRUMA} />
        <line x1="65" y1="126" x2="118" y2="126" stroke={BLANCO} strokeWidth="2.5" />
        <line x1="65" y1="134" x2="104" y2="134" stroke={BLANCO} strokeWidth="2.5" />
        <Text x="65" y="146" size={4.5} fill={BRUMA} spacing={0.6}>VÁLIDO HASTA</Text>
        <line x1="65" y1="151" x2="92" y2="151" stroke={BRUMA} strokeWidth="2" />
        <circle cx="122" cy="164" r="6" fill={BLANCO} />
        <Text x="122" y="166.5" size={5.5} weight={800} fill={MARINO} spacing={0} textAnchor="middle">We</Text>
        <path d="M35 163h40" stroke={LINE} strokeWidth="2" />
      </g>
      <Button label="FINALIZAR" delayMs={1100} />
    </>
  )
}

const stages = [
  { title: 'INICIO', subs: ['Bienvenida', 'Consentimientos'], Screen: InicioScreen, ms: 3000 },
  { title: 'DOCUMENTACIÓN', subs: ['DNI', 'Selfie', 'Revisión'], Screen: DocumentacionScreen, ms: 3200 },
  { title: 'CUENTA', subs: ['WhatsApp', 'Mail', 'Más datos'], highlight: 'Más datos', Screen: CuentaScreen, ms: 4200 },
  { title: 'PAGO', subs: ['Revisión', 'Seguro', 'Medio de pago'], Screen: PagoScreen, ms: 3200 },
  { title: 'FIN', subs: ['¡Fichaje completado!'], Screen: FinScreen, ms: 3000 },
]
const STEP_GAP = 72 / (stages.length - 1)

// Etiquetas de los sub-pasos al costado del celular
function Subs({ stage }) {
  let x = 160
  let y = 132
  return stage.subs.map((s) => {
    const w = s.length * 5.2 + 12
    if (x + w > 300) {
      x = 160
      y += 18
    }
    const hl = s === stage.highlight
    const el = (
      <g key={s}>
        <rect x={x} y={y} width={w} height="14" fill={hl ? CELESTE : 'none'} stroke={hl ? 'none' : LINE} strokeWidth="1.3" />
        <Text x={x + w / 2} y={y + 9.8} size={7.5} weight={hl ? 800 : 700} fill={hl ? MARINO : BRUMA} spacing={0} textAnchor="middle">
          {s}
        </Text>
      </g>
    )
    x += w + 5
    return el
  })
}

function Stage({ index, play }) {
  const on = usePlay(play)
  const stage = stages[index]
  const { Screen } = stage
  return (
    <svg viewBox="0 0 300 220" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {/* Celular */}
      <rect x="20" y="6" width="120" height="208" rx="16" stroke={LINE} strokeWidth="2.5" />
      <line x1="66" y1="16" x2="94" y2="16" stroke={LINE} strokeWidth="2.5" />
      {/* Indicador de etapas */}
      <line x1="44" y1="32" x2="116" y2="32" stroke={LINE} strokeWidth="1.5" />
      <line x1="44" y1="32" x2={44 + index * STEP_GAP} y2="32" stroke={CELESTE} strokeWidth="1.5" />
      {stages.map((_, i) => (
        <circle key={i} cx={44 + i * STEP_GAP} cy="32" r="3.5" fill={i <= index ? CELESTE : MARINO_CLARO} stroke={i <= index ? 'none' : LINE} strokeWidth="1.5" />
      ))}
      <Screen />
      {/* Etapa al costado */}
      <g className="format-enter">
        <Text x="160" y="90" size={24} weight={800} fill={CELESTE} spacing={0}>{`0${index + 1}`}</Text>
        <Text x="160" y="114" size={12} weight={800} fill={BLANCO} spacing={1}>{stage.title}</Text>
        <Subs stage={stage} />
      </g>
    </svg>
  )
}

export function FichajesVisual() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(reduced ? 2 : 0)
  const [round, setRound] = useState(0)

  // Cada etapa dura lo suyo; "Cuenta" un poco más para que se lean los datos extra
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
      className="w-full max-w-md"
      role="img"
      aria-label="El fichaje desde el celular en 5 etapas: inicio, documentación, cuenta con los datos extra de la liga, pago y fin con la credencial digital"
    >
      <Stage key={round} index={index} play={inView} />
    </div>
  )
}
