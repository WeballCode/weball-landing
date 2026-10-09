// Animaciones de los módulos de Tecnología Weball, en la misma línea que Torneos a Medida:
// trazos finos, toques celestes, y cada escena se dibuja, se queda un momento y vuelve a empezar.
import { useEffect, useState } from 'react'
import { useCycle, useInView, usePlay } from './motion.jsx'

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

// ---------- Fichajes: un formulario que se arma solo, con campos a medida ----------
const fields = [
  { label: 'NOMBRE Y APELLIDO', len: 150 },
  { label: 'DNI', len: 96 },
  { label: 'FECHA DE NACIMIENTO', len: 80 },
  { label: 'TALLE DE CAMISETA', len: 40, custom: true },
  { label: 'DIRECCIÓN', len: 124, custom: true },
]

export function FichajesVisual() {
  return (
    <Scene loop={6500} label="Un formulario de fichaje con datos básicos y campos a medida de la liga">
      {() => (
        <>
          {fields.map((f, i) => {
            const y = 8 + i * 36
            const base = i * 280
            return (
              <g key={f.label}>
                {f.custom && (
                  <g className="pop" style={delay(base)}>
                    <rect x="0" y={y - 1} width="11" height="11" fill={CELESTE} />
                    <path d={`M5.5 ${y + 1.5}v6M2.5 ${y + 4.5}h6`} stroke={MARINO} strokeWidth="1.6" />
                  </g>
                )}
                <Text className="pop" style={delay(base)} x={f.custom ? 17 : 0} y={y + 8} fill={f.custom ? CELESTE : BRUMA}>
                  {f.label}
                </Text>
                <line className="draw" pathLength="1" style={delay(base + 80)} x1="0" y1={y + 22} x2="190" y2={y + 22} stroke={LINE} strokeWidth="2" />
                <line className="draw" pathLength="1" style={delay(base + 250)} x1="0" y1={y + 17} x2={f.len} y2={y + 17} stroke={f.custom ? CELESTE : BRUMA} strokeWidth="3" />
              </g>
            )
          })}
          <g className="pop" style={delay(1900)}>
            <rect x="206" y="78" width="94" height="34" fill={CELESTE} />
            <path d="M216 95l5 5 9-10" stroke={MARINO} strokeWidth="2.5" />
            <Text x="236" y="99" size={11} weight={800} fill={MARINO} spacing={1}>
              FICHADO
            </Text>
          </g>
        </>
      )}
    </Scene>
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
