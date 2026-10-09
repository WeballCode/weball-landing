// Animaciones de los módulos de Tecnología Weball, en la misma línea que Torneos a Medida:
// trazos finos, toques celestes, y cada escena se dibuja, se queda un momento y vuelve a empezar.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useCycle, useInView, usePlay } from './motion.jsx'

const LINE = '#365a70'
const CELESTE = '#3fb6ff'
const MARINO = '#032639'
const BRUMA = '#b9cbd6'
const BLANCO = '#fbfbf8'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

// Marco común: detecta cuándo se ve y repite la escena cada `loop` milisegundos
function Scene({ loop, label, viewBox = '0 0 300 200', children }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const cycle = useCycle(inView, loop)
  return (
    <div ref={ref} className="w-full max-w-xs" role="img" aria-label={label}>
      <Replay key={cycle} play={inView} viewBox={viewBox}>
        {children}
      </Replay>
    </div>
  )
}

function Replay({ play, viewBox, children }) {
  const on = usePlay(play)
  return (
    <svg viewBox={viewBox} className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {typeof children === 'function' ? children(on) : children}
    </svg>
  )
}

// Va contando pasos en los tiempos indicados (se reinicia en cada vuelta)
function useSteps(on, times) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!on) return
    const timers = times.map((t, i) => setTimeout(() => setStep(i + 1), t))
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on])
  return step
}

const Text = ({ children, size = 9, weight = 700, fill = BRUMA, spacing = 1.5, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

// ---------- Fichajes: el flujo real del jugador en el celular, de los datos a la credencial ----------
// Pantalla del celular: x de 30 a 130, y de 44 a 204
const fichajeSteps = [
  {
    title: 'BIENVENIDA',
    lines: ['El jugador recibe la', 'invitación de su club.'],
    Screen: BienvenidaScreen,
  },
  {
    title: 'CONSENTIMIENTOS',
    lines: ['Acepta el uso de sus', 'datos e imágenes.'],
    Screen: ConsentimientosScreen,
  },
  {
    title: 'DOCUMENTO',
    lines: ['Escanea el frente y el', 'dorso de su documento.'],
    Screen: DocumentoScreen,
  },
  {
    title: 'SELFIE',
    lines: ['Se toma la foto para', 'su credencial.'],
    Screen: SelfieScreen,
  },
  {
    title: 'REVISIÓN',
    lines: ['Confirma sus datos y', 'los que pide tu liga.'],
    Screen: RevisionScreen,
  },
  {
    title: 'CREDENCIAL DIGITAL',
    lines: ['Fichaje completado: la', 'credencial queda lista.'],
    Screen: CredencialScreen,
  },
]
const FICHAJE_STEP_MS = 2400
const STEP_GAP = 72 / (fichajeSteps.length - 1)

function Button({ x, y, w, label, filled = true, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <rect x={x} y={y} width={w} height="15" fill={filled ? CELESTE : 'none'} stroke={filled ? 'none' : BRUMA} strokeWidth="1.5" />
      <Text x={x + w / 2} y={y + 10.5} size={6.5} weight={800} fill={filled ? MARINO : BRUMA} spacing={1} textAnchor="middle">
        {label}
      </Text>
    </g>
  )
}

// Check celeste chico
function Check({ x, y, r = 4, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <circle cx={x} cy={y} r={r} fill={CELESTE} />
      <path d={`M${x - r * 0.5} ${y}l${r * 0.35} ${r * 0.35} ${r * 0.65}-${r * 0.7}`} stroke={MARINO} strokeWidth="1.3" />
    </g>
  )
}

function BienvenidaScreen() {
  return (
    <>
      <Text className="pop" x="80" y="54" size={8} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">¡BIENVENIDO/A!</Text>
      <Text className="pop" style={delay(150)} x="80" y="66" size={5.5} fill={BRUMA} spacing={0.6} textAnchor="middle">TE INVITARON AL PLANTEL DE</Text>
      {/* Escudo del equipo */}
      <path className="draw" pathLength="1" style={delay(300)} d="M70 74l10-4 10 4v8c0 6-4 10-10 12-6-2-10-6-10-12z" stroke={CELESTE} strokeWidth="1.8" />
      <Text className="pop" style={delay(500)} x="80" y="106" size={7} weight={800} fill={BLANCO} spacing={1} textAnchor="middle">EQUIPO</Text>
      {/* Lo que va a pasar */}
      {[60, 72, 52].map((len, i) => (
        <g key={i}>
          <Check x={36} y={124 + i * 15} delayMs={700 + i * 200} />
          <line className="draw" pathLength="1" style={delay(750 + i * 200)} x1="45" y1={124 + i * 15} x2={45 + len} y2={124 + i * 15} stroke={BRUMA} strokeWidth="2" />
        </g>
      ))}
      <Button x={30} y={182} w={100} label="COMENZAR" delayMs={1400} />
    </>
  )
}

function ConsentimientosScreen() {
  return (
    <>
      <Text className="pop" x="80" y="54" size={7} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">ANTES DE CONTINUAR</Text>
      {[0, 1].map((i) => {
        const y = 66 + i * 52
        return (
          <g key={i}>
            <rect className="draw" pathLength="1" style={delay(150 + i * 200)} x="30" y={y} width="100" height="44" stroke={LINE} strokeWidth="1.5" />
            <rect x="37" y={y + 8} width="9" height="9" stroke={BRUMA} strokeWidth="1.3" />
            <g className="pop" style={delay(800 + i * 450)}>
              <rect x="37" y={y + 8} width="9" height="9" fill={CELESTE} />
              <path d={`M39 ${y + 12.5}l2 2 3.5-4`} stroke={MARINO} strokeWidth="1.3" />
            </g>
            {[72, 60, 66].map((len, j) => (
              <line key={j} className="draw" pathLength="1" style={delay(300 + i * 200 + j * 80)} x1="52" y1={y + 11 + j * 10} x2={52 + len * 0.9} y2={y + 11 + j * 10} stroke={BRUMA} strokeOpacity="0.7" strokeWidth="2" />
            ))}
          </g>
        )
      })}
      <Button x={30} y={182} w={100} label="CONTINUAR" delayMs={1700} />
    </>
  )
}

function DocumentoScreen() {
  return (
    <>
      <Text className="pop" x="80" y="54" size={7} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">TU DOCUMENTO</Text>
      {['FRENTE', 'DORSO'].map((side, i) => {
        const y = 62 + i * 58
        return (
          <g key={side}>
            <Text className="pop" style={delay(100 + i * 150)} x="80" y={y + 4} size={5.5} weight={800} fill={BRUMA} spacing={1} textAnchor="middle">{side}</Text>
            <rect className="draw" pathLength="1" style={delay(200 + i * 150)} x="34" y={y + 9} width="92" height="40" stroke={LINE} strokeWidth="1.5" strokeDasharray="1" />
            {/* Ícono de documento */}
            <g className="pop" style={delay(400 + i * 150)}>
              <rect x="68" y={y + 18} width="24" height="17" stroke={BRUMA} strokeWidth="1.5" />
              <circle cx="75" cy={y + 25} r="2.5" fill={BRUMA} />
              <path d={`M71 ${y + 32}a4 3 0 0 1 8 0M82 ${y + 23}h7M82 ${y + 27}h7M82 ${y + 31}h5`} stroke={BRUMA} strokeWidth="1.2" />
            </g>
            <Check x={118} y={y + 16} r={5} delayMs={900 + i * 500} />
          </g>
        )
      })}
      <Button x={30} y={182} w={100} label="VALIDAR DOCUMENTO" delayMs={1800} />
    </>
  )
}

function SelfieScreen() {
  return (
    <>
      <Text className="pop" x="80" y="56" size={6.5} fill={BRUMA} spacing={1} textAnchor="middle">TOMATE UNA SELFIE</Text>
      <circle className="draw" pathLength="1" style={delay(100)} cx="80" cy="110" r="34" stroke={LINE} strokeWidth="2" strokeDasharray="1" />
      {/* Persona */}
      <g className="pop" style={delay(500)}>
        <circle cx="80" cy="101" r="11" fill={BRUMA} />
        <path d="M60 134a20 18 0 0 1 40 0" fill={BRUMA} />
      </g>
      {/* Flash de la foto */}
      <circle className="pop flash" style={delay(1200)} cx="80" cy="110" r="34" fill={BLANCO} />
      <g className="pop" style={delay(1500)}>
        <circle cx="106" cy="86" r="9" fill={CELESTE} />
        <path d="M102 86l3 3 5-6" stroke={MARINO} strokeWidth="1.8" />
      </g>
      <Button x={30} y={182} w={100} label="TOMAR SELFIE" delayMs={300} />
    </>
  )
}

function RevisionScreen() {
  const rows = [
    { label: 'NOMBRE Y APELLIDO', len: 80 },
    { label: 'CATEGORÍA', len: 36 },
    { label: 'DOCUMENTO', len: 50 },
    { label: '+ TALLE DE CAMISETA', len: 16, custom: true },
  ]
  return (
    <>
      <rect className="draw" pathLength="1" x="30" y="46" width="100" height="124" stroke={LINE} strokeWidth="1.5" />
      <Text className="pop" style={delay(200)} x="38" y="60" size={6.5} weight={800} fill={CELESTE} spacing={1}>DATOS PERSONALES</Text>
      {rows.map((r, i) => {
        const y = 78 + i * 22
        return (
          <g key={r.label}>
            <Text className="pop" style={delay(300 + i * 150)} x="38" y={y} size={5.5} fill={r.custom ? CELESTE : BRUMA} spacing={0.8}>
              {r.label}
            </Text>
            <line className="draw" pathLength="1" style={delay(400 + i * 150)} x1="38" y1={y + 8} x2={38 + r.len} y2={y + 8} stroke={r.custom ? CELESTE : BLANCO} strokeWidth="2.5" />
          </g>
        )
      })}
      <Button x={30} y={182} w={44} label="EDITAR" filled={false} delayMs={1000} />
      <Button x={80} y={182} w={50} label="CONFIRMAR" delayMs={1100} />
    </>
  )
}

function CredencialScreen() {
  return (
    <>
      <g className="pop">
        <circle cx="80" cy="64" r="15" fill={CELESTE} />
        <path d="M73 64l5 5 9-10" stroke={MARINO} strokeWidth="2.5" />
      </g>
      <Text className="pop" style={delay(200)} x="80" y="94" size={7} weight={800} fill={CELESTE} spacing={1} textAnchor="middle">
        ¡FICHAJE COMPLETADO!
      </Text>
      {/* Credencial digital */}
      <g className="format-enter" style={{ animationDelay: '500ms' }}>
        <rect x="28" y="104" width="104" height="70" fill="#0f3143" stroke={CELESTE} strokeWidth="1.5" />
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
      <Button x={30} y={182} w={100} label="FINALIZAR" delayMs={1100} />
    </>
  )
}

function FichajeStep({ index, play }) {
  const on = usePlay(play)
  const step = fichajeSteps[index]
  const { Screen } = step
  return (
    <svg viewBox="0 0 300 220" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {/* Celular */}
      <rect x="20" y="6" width="120" height="208" rx="16" stroke={LINE} strokeWidth="2.5" />
      <line x1="66" y1="16" x2="94" y2="16" stroke={LINE} strokeWidth="2.5" />
      {/* Indicador de pasos */}
      <line x1="44" y1="32" x2="116" y2="32" stroke={LINE} strokeWidth="1.5" />
      <line x1="44" y1="32" x2={44 + index * STEP_GAP} y2="32" stroke={CELESTE} strokeWidth="1.5" />
      {fichajeSteps.map((_, i) => (
        <circle key={i} cx={44 + i * STEP_GAP} cy="32" r="3.5" fill={i <= index ? CELESTE : '#0f3143'} stroke={i <= index ? 'none' : LINE} strokeWidth="1.5" />
      ))}
      <Screen />
      {/* Texto del paso */}
      <g className="format-enter">
        <Text x="160" y="96" size={24} weight={800} fill={CELESTE} spacing={0}>{`0${index + 1}`}</Text>
        <Text x="160" y="118" size={11} weight={800} fill={BLANCO} spacing={1}>{step.title}</Text>
        {step.lines.map((l, i) => (
          <Text key={l} x="160" y={136 + i * 13} size={9} weight={400} fill={BRUMA} spacing={0}>
            {l}
          </Text>
        ))}
      </g>
    </svg>
  )
}

export function FichajesVisual() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const cycle = useCycle(inView, FICHAJE_STEP_MS)
  const reduced = prefersReducedMotion()
  const index = reduced ? fichajeSteps.length - 1 : cycle % fichajeSteps.length

  return (
    <div
      ref={ref}
      className="w-full max-w-md"
      role="img"
      aria-label="El fichaje desde el celular: datos personales, selfie, revisión y credencial digital"
    >
      <FichajeStep key={cycle} index={index} play={inView} />
    </div>
  )
}

// ---------- Planilla digital: el marcador en el celular, gol a gol ----------
const events = [
  { min: "12'", team: 'local' },
  { min: "34'", team: 'visita' },
  { min: "67'", team: 'local' },
]

function PlanillaScene({ on }) {
  const step = useSteps(on, [900, 1700, 2500, 3300])
  const shown = events.slice(0, Math.min(step, events.length))
  const local = shown.filter((e) => e.team === 'local').length
  const visita = shown.filter((e) => e.team === 'visita').length

  return (
    <>
      {/* Celular */}
      <rect className="draw" pathLength="1" x="80" y="4" width="140" height="192" rx="16" stroke={LINE} strokeWidth="2.5" />
      <line className="draw" pathLength="1" style={delay(200)} x1="134" y1="16" x2="166" y2="16" stroke={LINE} strokeWidth="2.5" />
      <Text className="pop" style={delay(300)} x="150" y="38" textAnchor="middle" fill={CELESTE} size={8} spacing={2.5}>
        PLANILLA DEL PARTIDO
      </Text>
      {/* Marcador */}
      <g className="pop" style={delay(400)}>
        <Text x="108" y="58" size={8} fill={BRUMA} spacing={1.5}>LOCAL</Text>
        <Text x="192" y="58" size={8} fill={BRUMA} spacing={1.5} textAnchor="end">VISITA</Text>
        <Text x="118" y="88" size={28} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">{local}</Text>
        <Text x="150" y="85" size={16} weight={800} fill={LINE} spacing={0} textAnchor="middle">-</Text>
        <Text x="182" y="88" size={28} weight={800} fill={BLANCO} spacing={0} textAnchor="middle">{visita}</Text>
      </g>
      <line className="draw" pathLength="1" style={delay(500)} x1="94" y1="100" x2="206" y2="100" stroke={LINE} strokeWidth="2" />
      {/* Goles con su minuto */}
      {shown.map((e, i) => {
        const y = 118 + i * 20
        const isLocal = e.team === 'local'
        return (
          <g key={i} className="format-enter">
            <Text x="96" y={y + 3} size={9} weight={800} fill={CELESTE} spacing={0}>{e.min}</Text>
            <circle cx="120" cy={y} r="4" fill={BLANCO} />
            <line x1="130" y1={y} x2={isLocal ? 170 : 196} y2={y} stroke={isLocal ? BRUMA : LINE} strokeWidth="3" />
          </g>
        )
      })}
      {/* Enviada */}
      {step >= 4 && (
        <g className="format-enter">
          <rect x="104" y="174" width="92" height="16" fill={CELESTE} />
          <Text x="150" y="185.5" size={8} weight={800} fill={MARINO} spacing={2} textAnchor="middle">ENVIADA ✓</Text>
        </g>
      )}
    </>
  )
}

export function PlanillaVisual() {
  return (
    <Scene loop={6500} label="Un celular con la planilla del partido: los goles se cargan con su minuto y el marcador se actualiza">
      {(on) => <PlanillaScene on={on} />}
    </Scene>
  )
}

// ---------- Tribunal IA: del reglamento a la sanción y el boletín ----------
// Va sobre la tarjeta celeste, por eso los trazos son marino
export function TribunalVisual() {
  return (
    <Scene loop={7000} label="El agente de IA lee el reglamento y propone la sanción, que sale en el boletín">
      {() => (
        <>
          {/* Reglamento */}
          <rect className="draw" pathLength="1" x="2" y="14" width="96" height="172" stroke={MARINO} strokeWidth="2.5" />
          <Text className="pop" x="12" y="34" size={8} weight={800} fill={MARINO} spacing={1.5}>REGLAMENTO</Text>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={i}
              className="draw"
              pathLength="1"
              style={delay(200 + i * 70)}
              x1="12"
              y1={52 + i * 18}
              x2={[78, 64, 82, 56, 74, 68, 50][i]}
              y2={52 + i * 18}
              stroke={MARINO}
              strokeOpacity="0.45"
              strokeWidth="3"
            />
          ))}
          {/* Barra que escanea */}
          <rect className="scan" x="4" y="40" width="92" height="10" fill={MARINO} fillOpacity="0.18" />
          {/* Flecha al agente */}
          <path className="draw" pathLength="1" style={delay(1300)} d="M104 100h26" stroke={MARINO} strokeWidth="2.5" />
          <g className="pop" style={delay(1600)}>
            <circle cx="152" cy="100" r="22" fill={MARINO} />
            <Text x="152" y="105.5" size={15} weight={800} fill={CELESTE} spacing={0} textAnchor="middle">IA</Text>
          </g>
          <path className="draw" pathLength="1" style={delay(2000)} d="M178 100h20" stroke={MARINO} strokeWidth="2.5" />
          {/* Sanción */}
          <g className="pop" style={delay(2300)}>
            <rect x="202" y="62" width="96" height="50" fill={MARINO} />
            <Text x="212" y="80" size={8} weight={700} fill={CELESTE} spacing={2}>SANCIÓN</Text>
            <Text x="212" y="102" size={16} weight={800} fill={BLANCO} spacing={0}>2 FECHAS</Text>
          </g>
          {/* Boletín */}
          <Text className="pop" style={delay(2800)} x="202" y="132" size={8} weight={800} fill={MARINO} spacing={2}>BOLETÍN</Text>
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              className="draw"
              pathLength="1"
              style={delay(2900 + i * 150)}
              x1="202"
              y1={144 + i * 14}
              x2={[290, 270, 282][i]}
              y2={144 + i * 14}
              stroke={MARINO}
              strokeOpacity="0.45"
              strokeWidth="3"
            />
          ))}
        </>
      )}
    </Scene>
  )
}

// ---------- Comunicación: la liga avisa y cada uno recibe ----------
const targets = [
  { label: 'JUGADORES', y: 34 },
  { label: 'CLUBES', y: 100 },
  { label: 'ÁRBITROS', y: 166 },
]

export function ComunicacionVisual() {
  const from = { x: 92, y: 100 }
  const tx = 196
  return (
    <Scene loop={60000} label="La liga envía avisos que llegan a jugadores, clubes y árbitros">
      {() => (
        <>
          {targets.map((t, i) => (
            <path
              key={t.label}
              className="draw"
              pathLength="1"
              style={delay(300 + i * 150)}
              d={`M${from.x} ${from.y}L${tx - 20} ${t.y}`}
              stroke={LINE}
              strokeWidth="2"
            />
          ))}
          {/* Liga */}
          <g className="pop">
            <rect x="12" y="78" width="80" height="44" fill={CELESTE} />
            <Text x="52" y="105" size={12} weight={800} fill={MARINO} spacing={2} textAnchor="middle">LIGA</Text>
          </g>
          {/* Destinatarios */}
          {targets.map((t, i) => (
            <g key={t.label}>
              <circle className="pop" style={delay(800 + i * 150)} cx={tx} cy={t.y} r="16" stroke={BRUMA} strokeWidth="2.5" />
              <circle
                className="ping"
                style={{ animationDelay: `${1500 + i * 600}ms` }}
                cx={tx}
                cy={t.y}
                r="16"
                fill={CELESTE}
              />
              <Text className="pop" style={delay(900 + i * 150)} x={tx + 24} y={t.y + 4} size={9} weight={800} fill={BRUMA} spacing={1.5}>
                {t.label}
              </Text>
            </g>
          ))}
          {/* Avisos que viajan */}
          {targets.map((t, i) => (
            <circle
              key={t.label}
              className="travel"
              style={{
                '--dx': `${tx - from.x - 20}px`,
                '--dy': `${t.y - from.y}px`,
                animationDelay: `${1500 + i * 600}ms`,
              }}
              cx={from.x}
              cy={from.y}
              r="5"
              fill={CELESTE}
            />
          ))}
        </>
      )}
    </Scene>
  )
}
