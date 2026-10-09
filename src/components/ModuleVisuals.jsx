// Animaciones de los módulos de Tecnología Weball (Comunicación):
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
