// Asignación de árbitros: dos escenas en fondo claro (300 x 200) para SceneLoop.
// 1. Designación de la fecha: cada partido recibe su árbitro; el que está de licencia no se puede elegir.
// 2. Un colegio de árbitros externo trabaja para varias ligas.
const MARINO = '#032639'
const CELESTE = '#3fb6ff'
const PROFUNDO = '#0b6fcc'
const ACERO = '#51606b'
const SUAVE = '#b9cbd6'
const NIEBLA = '#f1f4f6'
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

function Whistle({ x, y, color = MARINO }) {
  return (
    <g>
      <circle cx={x} cy={y} r="4.5" stroke={color} strokeWidth="1.6" />
      <path d={`M${x + 4} ${y - 3}h7v5h-7`} stroke={color} strokeWidth="1.6" />
    </g>
  )
}

const partidos = [
  { hour: '15:00', court: 'NORTE · C1', ref: 'A. LÓPEZ' },
  { hour: '16:30', court: 'NORTE · C2', ref: 'M. DÍAZ' },
  { hour: '18:00', court: 'SUR · C1', ref: 'R. SOSA' },
  { hour: '19:30', court: 'SUR · C2', ref: 'L. PAZ' },
]
const pool = [
  { name: 'A. LÓPEZ', match: 0 },
  { name: 'J. RÍOS', off: true },
  { name: 'M. DÍAZ', match: 1 },
  { name: 'R. SOSA', match: 2 },
  { name: 'L. PAZ', match: 3 },
]

export function DesignacionScene() {
  return (
    <>
      <Text className="pop" x="14" y="16" size={7.5} fill={PROFUNDO} spacing={1.4}>DESIGNACIONES · FECHA 7</Text>
      <Text className="pop" x="206" y="16" size={7} fill={ACERO} spacing={1}>ÁRBITROS</Text>

      {partidos.map((m, i) => {
        const y = 26 + i * 38
        return (
          <g key={m.hour}>
            <g className="pop" style={delay(150 + i * 150)}>
              <rect x="14" y={y} width="180" height="30" fill={BLANCO} stroke={SUAVE} strokeWidth="1.5" />
              <rect x="14" y={y} width="36" height="30" fill={MARINO} />
              <Text x="32" y={y + 19} size={8} fill={BLANCO} spacing={0} textAnchor="middle">{m.hour}</Text>
              <Text x="56" y={y + 13} size={6} fill={ACERO} spacing={0.6}>{m.court}</Text>
              <Shield x={63} y={y + 21} s={0.5} fill={PROFUNDO} />
              <Text x="70" y={y + 23.5} size={5.5} fill={ACERO} spacing={0}>VS</Text>
              <Shield x={84} y={y + 21} s={0.5} fill={ACERO} />
              <rect x="112" y={y + 5} width="76" height="20" fill="none" stroke={SUAVE} strokeWidth="1.2" strokeDasharray="3 3" />
            </g>
            {/* El árbitro designado cae en su partido */}
            <g className="pop" style={delay(1300 + i * 380)}>
              <rect x="111" y={y + 4} width="78" height="22" fill={CELESTE} />
              <Whistle x={121} y={y + 15} />
              <Text x="136" y={y + 18.5} size={6.5} fill={MARINO} spacing={0.4}>{m.ref}</Text>
            </g>
          </g>
        )
      })}

      {pool.map((r, i) => {
        const y = 26 + i * 30
        const matchDelay = r.match !== undefined ? 1300 + r.match * 380 : 0
        return (
          <g key={r.name}>
            <g className="pop" style={delay(300 + i * 120)}>
              <rect x="204" y={y} width="84" height="24" fill={r.off ? NIEBLA : BLANCO} stroke={SUAVE} strokeWidth="1.2" />
              <circle cx="216" cy={y + 12} r="6" fill={r.off ? SUAVE : MARINO} />
              <circle cx="216" cy={y + 10.5} r="2.2" fill={BLANCO} />
              <Text x="227" y={y + 15} size={6.5} fill={r.off ? ACERO : MARINO} spacing={0.3}>{r.name}</Text>
            </g>
            {r.off && (
              <g className="pop" style={delay(900)}>
                <rect x="250" y={y + 15} width="36" height="10" fill={ACERO} />
                <Text x="268" y={y + 22.5} size={5.5} fill={BLANCO} spacing={0.6} textAnchor="middle">LICENCIA</Text>
              </g>
            )}
            {r.match !== undefined && (
              <g className="pop" style={delay(matchDelay)}>
                <circle cx="281" cy={y + 12} r="5" fill={CELESTE} />
                <path d={`M278.8 ${y + 12}l1.6 1.6 3-3.2`} stroke={MARINO} strokeWidth="1.4" />
              </g>
            )}
          </g>
        )
      })}

      <g className="pop" style={delay(3000)}>
        <rect x="14" y="180" width="274" height="16" fill={MARINO} />
        <Text x="151" y="191" size={6.5} fill={CELESTE} spacing={1} textAnchor="middle">CADA ÁRBITRO RECIBE SU DESIGNACIÓN EN EL CELULAR</Text>
      </g>
    </>
  )
}

export function ColegioScene() {
  const ligas = [
    { x: 50, label: 'LIGA NORTE', fill: MARINO },
    { x: 150, label: 'LIGA SUR', fill: PROFUNDO },
    { x: 250, label: 'LIGA OESTE', fill: ACERO },
  ]
  return (
    <>
      <g className="pop">
        <rect x="80" y="12" width="140" height="44" fill={MARINO} />
        <Whistle x={100} y={34} color={CELESTE} />
        <Text x="116" y="31" size={7} fill={BLANCO} spacing={0.8}>COLEGIO DE</Text>
        <Text x="116" y="42" size={7} fill={BLANCO} spacing={0.8}>ÁRBITROS</Text>
      </g>
      {ligas.map((l, i) => (
        <g key={l.label}>
          <path
            className="draw"
            pathLength="1"
            style={delay(400 + i * 250)}
            d={`M150 56C150 80 ${l.x} 80 ${l.x} 104`}
            stroke={CELESTE}
            strokeWidth="2.5"
          />
          <g className="pop" style={delay(900 + i * 250)}>
            <rect x={l.x - 44} y="104" width="88" height="56" fill={BLANCO} stroke={SUAVE} strokeWidth="1.5" />
            <Shield x={l.x} y={124} s={1.1} fill={l.fill} />
            <Text x={l.x} y="150" size={7} fill={MARINO} spacing={0.8} textAnchor="middle">{l.label}</Text>
          </g>
        </g>
      ))}
      <Text className="pop" style={delay(1900)} x="150" y="184" size={7.5} fill={PROFUNDO} spacing={1} textAnchor="middle">
        UN COLEGIO, VARIAS LIGAS · CADA UNA VE SÓLO LO SUYO
      </Text>
    </>
  )
}

export const arbitroScenes = [
  { label: 'Designá a los árbitros de la fecha', Scene: DesignacionScene },
  { label: 'Un colegio de árbitros, varias ligas', Scene: ColegioScene },
]
