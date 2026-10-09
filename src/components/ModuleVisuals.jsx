// Animaciones de los módulos de Tecnología Weball (Tribunal IA y Comunicación):
// trazos finos, toques celestes, y cada escena se dibuja, se queda un momento y vuelve a empezar.
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

const Text = ({ children, size = 9, weight = 700, fill = BRUMA, spacing = 1.5, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

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
