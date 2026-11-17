// Weball Sponsors: un dibujo por cada uno de los 3 puntos (fondo oscuro).
// La sección (Sponsors.jsx) decide qué punto se muestra y lo resalta en la lista.
import { useEffect, useState } from 'react'
import { usePlay } from './motion.jsx'

const LINE = '#365a70'
const CELESTE = '#3fb6ff'
const MARINO = '#032639'
const MARINO_CLARO = '#0f3143'
const BRUMA = '#b9cbd6'
const BLANCO = '#fbfbf8'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

const Text = ({ children, size = 8, weight = 800, fill = BLANCO, spacing = 1, ...rest }) => (
  <text fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} letterSpacing={spacing} {...rest}>
    {children}
  </text>
)

// Etiqueta "TU MARCA" que aparece en cada lugar auspiciado
function Brand({ x, y, w = 74, delayMs = 0 }) {
  return (
    <g className="pop" style={delay(delayMs)}>
      <rect x={x} y={y} width={w} height="18" fill={CELESTE} />
      <circle cx={x + 10} cy={y + 9} r="4.5" fill={MARINO} />
      <Text x={x + 19} y={y + 12.5} size={7} fill={MARINO} spacing={0.8}>TU MARCA</Text>
    </g>
  )
}

// 1. Auspicio de secciones: tablas, partidos y perfiles
function AuspicioScene() {
  return (
    <>
      {/* Tabla presentada por */}
      <rect className="draw" pathLength="1" x="10" y="10" width="136" height="110" stroke={LINE} strokeWidth="2" />
      <Text className="pop" x="18" y="26" size={7} fill={CELESTE} spacing={1.2}>TABLA DE POSICIONES</Text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className="pop" style={delay(150 + i * 80)}>
          <rect x="18" y={34 + i * 15} width="120" height="11" fill={i === 0 ? CELESTE : MARINO_CLARO} />
          <line x1="26" y1={39.5 + i * 15} x2={70 - i * 6} y2={39.5 + i * 15} stroke={i === 0 ? MARINO : BRUMA} strokeWidth="2.5" />
          <Text x="132" y={42.5 + i * 15} size={7} fill={i === 0 ? MARINO : BLANCO} spacing={0} textAnchor="end">{[31, 28, 24, 21][i]}</Text>
        </g>
      ))}
      <Text className="pop" style={delay(500)} x="18" y="110" size={5.5} fill={BRUMA} spacing={0.6}>PRESENTADA POR</Text>
      <Brand x={76} y={98} w={62} delayMs={900} />

      {/* Partido que auspicia */}
      <rect className="draw" pathLength="1" style={delay(200)} x="156" y="10" width="136" height="72" stroke={LINE} strokeWidth="2" />
      <g className="pop" style={delay(400)}>
        <Text x="224" y="38" size={14} fill={BLANCO} spacing={0} textAnchor="middle">2 - 1</Text>
        <circle cx="180" cy="33" r="8" fill={BRUMA} />
        <circle cx="268" cy="33" r="8" fill={BRUMA} />
      </g>
      <Text className="pop" style={delay(550)} x="164" y="71" size={6} fill={BRUMA} spacing={1}>AUSPICIA</Text>
      <Brand x={208} y={60} w={76} delayMs={1300} />

      {/* Perfil del club con sponsors oficiales */}
      <rect className="draw" pathLength="1" style={delay(400)} x="156" y="92" width="136" height="98" stroke={LINE} strokeWidth="2" />
      <g className="pop" style={delay(600)}>
        <path d="M176 104l10-4 10 4v8c0 6-4 10-10 12-6-2-10-6-10-12z" fill={BRUMA} />
        <line x1="204" y1="110" x2="270" y2="110" stroke={BLANCO} strokeWidth="3" />
        <line x1="204" y1="118" x2="244" y2="118" stroke={BRUMA} strokeWidth="2.5" />
      </g>
      <Text className="pop" style={delay(700)} x="164" y="148" size={6} fill={BRUMA} spacing={1}>SPONSORS OFICIALES</Text>
      <Brand x={164} y={156} w={76} delayMs={1700} />
      <g className="pop" style={delay(1900)}>
        <rect x="246" y="156" width="38" height="18" stroke={BRUMA} strokeWidth="1.5" strokeDasharray="3 3" />
        <Text x="265" y="168" size={9} fill={BRUMA} spacing={0} textAnchor="middle">+</Text>
      </g>
    </>
  )
}

// 2. Perfil de la marca en la comunidad, con tienda integrada
function TiendaScene() {
  const px = 102
  const products = [
    { name: 'Botines', price: '$ 89.990' },
    { name: 'Camiseta', price: '$ 34.500' },
    { name: 'Pelota', price: '$ 27.900' },
    { name: 'Medias', price: '$ 8.990' },
  ]
  return (
    <>
      <rect x={px} y="4" width="96" height="192" rx="14" fill={MARINO_CLARO} stroke={LINE} strokeWidth="2.5" />
      <line x1={px + 36} y1="14" x2={px + 60} y2="14" stroke={LINE} strokeWidth="2.5" />
      {/* Encabezado del perfil */}
      <g className="pop">
        <rect x={px + 8} y="24" width="80" height="40" fill={CELESTE} />
        <circle cx={px + 22} cy="44" r="9" fill={MARINO} />
        <Text x={px + 36} y="42" size={7.5} fill={MARINO} spacing={0.6}>TU MARCA</Text>
        <Text x={px + 36} y="53" size={4.8} weight={700} fill={MARINO} spacing={0.2}>SPONSOR OFICIAL</Text>
      </g>
      <Text className="pop" style={delay(250)} x={px + 8} y="78" size={6} fill={CELESTE} spacing={1.2}>TIENDA</Text>
      {/* Productos */}
      {products.map((p, i) => {
        const x = px + 8 + (i % 2) * 41
        const y = 84 + Math.floor(i / 2) * 44
        return (
          <g key={p.name} className="pop" style={delay(450 + i * 220)}>
            <rect x={x} y={y} width="38" height="40" fill={MARINO} />
            <rect x={x + 9} y={y + 5} width="20" height="14" fill={LINE} />
            <Text x={x + 4} y={y + 28} size={5.5} weight={700} fill={BRUMA} spacing={0.2}>{p.name}</Text>
            <Text x={x + 4} y={y + 36} size={6} fill={CELESTE} spacing={0}>{p.price}</Text>
          </g>
        )
      })}
      <g className="pop" style={delay(1500)}>
        <rect x={px + 8} y="174" width="80" height="16" fill={CELESTE} />
        <Text x={px + 48} y="185" size={6.5} fill={MARINO} spacing={0.8} textAnchor="middle">COMPRAR</Text>
      </g>
      {/* A los costados: otros canales */}
      <g className="pop" style={delay(1800)}>
        <rect x="16" y="86" width="72" height="22" stroke={CELESTE} strokeWidth="1.5" />
        <Text x="52" y="100.5" size={7} fill={CELESTE} spacing={0.6} textAnchor="middle">WHATSAPP</Text>
      </g>
      <path className="draw" pathLength="1" style={delay(1800)} d="M88 97h12" stroke={CELESTE} strokeWidth="2" />
      <g className="pop" style={delay(2100)}>
        <rect x="212" y="86" width="72" height="22" stroke={CELESTE} strokeWidth="1.5" />
        <Text x="248" y="100.5" size={7} fill={CELESTE} spacing={0.6} textAnchor="middle">SITIO WEB</Text>
      </g>
      <path className="draw" pathLength="1" style={delay(2100)} d="M200 97h12" stroke={CELESTE} strokeWidth="2" />
    </>
  )
}

// 3. Métricas del sponsor (datos de ejemplo)
const bars = [
  { label: 'TABLAS', value: 42 },
  { label: 'PARTIDOS', value: 31 },
  { label: 'PERFILES DE JUGADORES', value: 18 },
  { label: 'PERFILES DE CLUBES', value: 9 },
]

function Count({ to, on, start = 0, format = (n) => n.toLocaleString('es-AR') }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!on) return
    let frame
    const t0 = performance.now() + start
    const tick = (now) => {
      const t = Math.max(0, Math.min((now - t0) / 1200, 1))
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [on, to, start])
  return format(n)
}

function MetricasScene({ on }) {
  return (
    <>
      <Text className="pop" x="10" y="20" size={7} fill={CELESTE} spacing={1.5}>PANEL DEL SPONSOR</Text>
      <Text className="pop" x="290" y="20" size={6} weight={700} fill={BRUMA} spacing={1} textAnchor="end">DATOS DE EJEMPLO</Text>
      {/* Números principales */}
      {[
        { label: 'APARICIONES', to: 48320, x: 10 },
        { label: 'CLICS', to: 1284, x: 106 },
        { label: 'TASA DE CLIC', to: 27, x: 202, pct: true },
      ].map((m, i) => (
        <g key={m.label} className="pop" style={delay(100 + i * 150)}>
          <rect x={m.x} y="28" width="88" height="50" fill={i === 0 ? CELESTE : MARINO_CLARO} />
          <Text x={m.x + 8} y="58" size={16} fill={i === 0 ? MARINO : BLANCO} spacing={0}>
            {m.pct ? (
              <Count to={m.to} on={on} start={300} format={(n) => `${Math.floor(n / 10)},${n % 10}%`} />
            ) : (
              <Count to={m.to} on={on} start={300} />
            )}
          </Text>
          <Text x={m.x + 8} y="71" size={6} weight={700} fill={i === 0 ? MARINO : BRUMA} spacing={1}>{m.label}</Text>
        </g>
      ))}
      {/* Dónde apareció */}
      <Text className="pop" style={delay(500)} x="10" y="100" size={6.5} fill={BRUMA} spacing={1.2}>DÓNDE APARECIÓ</Text>
      {bars.map((b, i) => {
        const y = 110 + i * 22
        const w = (b.value / 42) * 200
        return (
          <g key={b.label}>
            <Text className="pop" style={delay(600 + i * 120)} x="10" y={y + 8} size={6} weight={700} fill={BLANCO} spacing={0.6}>{b.label}</Text>
            <rect x="10" y={y + 11} width="200" height="6" fill={MARINO_CLARO} />
            <rect
              x="10"
              y={y + 11}
              width={w}
              height="6"
              fill={i === 0 ? CELESTE : BRUMA}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'left',
                transform: on ? 'scaleX(1)' : 'scaleX(0)',
                transition: `transform 1s cubic-bezier(0.2, 0.7, 0.2, 1) ${700 + i * 150}ms`,
              }}
            />
            <Text className="pop" style={delay(1200 + i * 150)} x="290" y={y + 17} size={9} fill={i === 0 ? CELESTE : BLANCO} spacing={0} textAnchor="end">{`${b.value}%`}</Text>
          </g>
        )
      })}
    </>
  )
}

export const sponsorScenes = [AuspicioScene, TiendaScene, MetricasScene]

export function SponsorsDrawing({ index, play }) {
  const on = usePlay(play)
  const Scene = sponsorScenes[index]
  return (
    <svg viewBox="0 0 300 200" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <Scene on={on} />
    </svg>
  )
}
