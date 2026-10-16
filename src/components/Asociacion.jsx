// Weball Asociación: a la izquierda lo que hace cada liga (avanza solo, como en Ligas);
// a la derecha, la asociación con sus ligas y clubes conectada a su propia app, que cambia en cada paso.
import { useEffect, useState } from 'react'
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal, prefersReducedMotion, useInView, usePlay } from './motion.jsx'

const MARINO = '#032639'
const CELESTE = '#3fb6ff'
const CLARO = '#bfe6ff'
const PROFUNDO = '#0b6fcc'
const ACERO = '#51606b'
const SUAVE = '#b9cbd6'
const LINEA = '#365a70'
const BLANCO = '#fbfbf8'
const FONT = 'Roboto, Arial, sans-serif'
const delay = (ms) => ({ transitionDelay: `${ms}ms` })

const Text = ({ children, size = 8, weight = 800, fill = MARINO, spacing = 0.6, ...rest }) => (
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

const steps = [
  { title: 'Organiza a sus equipos', text: 'Cada liga maneja sus clubes, planteles y fichajes.' },
  { title: 'Arma sus propios torneos', text: 'Fixtures, tablas y resultados de cada liga.' },
  { title: 'Suma sponsors', text: 'Las marcas aparecen en la app y la liga genera ingresos.' },
  { title: 'Tiene su comunidad', text: 'Jugadores y familias siguen todo en la app oficial de la asociación.' },
]
const STEP_MS = 4500

const teams = [
  { name: 'Atl. Unión', fill: MARINO },
  { name: 'Dep. Norte', fill: PROFUNDO },
  { name: 'San Martín', fill: CELESTE },
  { name: 'El Ceibo', fill: ACERO },
  { name: 'Los Andes', fill: SUAVE },
]

// Lo que muestra la app en cada paso (zona de contenido: x 318 a 442, y 96 a 296)
function EquiposScreen() {
  return (
    <>
      <Text x="324" y="108" size={7} fill={PROFUNDO} spacing={1.2}>EQUIPOS · LIGA 1</Text>
      {teams.map((t, i) => {
        const y = 128 + i * 32
        return (
          <g key={t.name} className="pop" style={delay(200 + i * 150)}>
            <rect x="320" y={y - 13} width="120" height="26" fill={BLANCO} stroke={SUAVE} />
            <Shield x={334} y={y} s={0.75} fill={t.fill} />
            <Text x="346" y={y + 3} size={8} weight={700}>{t.name}</Text>
            <Text x="434" y={y + 3} size={6.5} weight={500} fill={ACERO} textAnchor="end">{`${18 + i * 2} jug.`}</Text>
          </g>
        )
      })}
    </>
  )
}

function TorneosScreen() {
  const pts = [15, 13, 10, 8, 4]
  return (
    <>
      <Text x="324" y="108" size={7} fill={PROFUNDO} spacing={1.2}>TABLA · FECHA 6</Text>
      <line x1="320" y1="116" x2="440" y2="116" stroke={MARINO} strokeWidth="2" />
      <Text x="434" y="112" size={6} fill={ACERO} textAnchor="end">PTS</Text>
      {teams.map((t, i) => {
        const y = 134 + i * 28
        return (
          <g key={t.name} className="pop" style={delay(200 + i * 140)}>
            {i === 0 && <rect x="320" y={y - 13} width="120" height="24" fill={CLARO} />}
            <Text x="326" y={y + 3} size={8} fill={i === 0 ? PROFUNDO : ACERO}>{i + 1}</Text>
            <Shield x={344} y={y} s={0.65} fill={t.fill} />
            <Text x="356" y={y + 3} size={8} weight={700}>{t.name}</Text>
            <Text x="434" y={y + 3} size={9} textAnchor="end">{pts[i]}</Text>
            <line x1="320" y1={y + 12} x2="440" y2={y + 12} stroke={SUAVE} />
          </g>
        )
      })}
      <g className="pop" style={delay(1100)}>
        <rect x="320" y="272" width="120" height="18" fill={MARINO} />
        <Text x="380" y="284" size={6.5} fill={CELESTE} textAnchor="middle" spacing={1}>VER FIXTURE</Text>
      </g>
    </>
  )
}

function SponsorsScreen() {
  return (
    <>
      <g className="pop" style={delay(150)}>
        <rect x="320" y="100" width="120" height="50" fill={CELESTE} />
        <Text x="380" y="122" size={10} textAnchor="middle" spacing={1}>TU MARCA</Text>
        <Text x="380" y="138" size={6.5} weight={700} textAnchor="middle" spacing={1}>AUSPICIA LA TABLA</Text>
      </g>
      <g className="pop" style={delay(550)}>
        <rect x="320" y="160" width="120" height="58" fill={BLANCO} stroke={SUAVE} />
        <Text x="328" y="173" size={6} fill={ACERO} spacing={1}>FECHA 6 · FINAL</Text>
        <Shield x={340} y={196} s={1} fill={MARINO} />
        <Text x="380" y="200" size={13} textAnchor="middle">2 - 1</Text>
        <Shield x={420} y={196} s={1} fill={PROFUNDO} />
        <Text x="380" y="213" size={5.5} weight={500} fill={ACERO} textAnchor="middle">PRESENTADO POR TU MARCA</Text>
      </g>
      <g className="pop" style={delay(1000)}>
        <rect x="320" y="228" width="120" height="34" fill={MARINO} />
        <Text x="330" y="249" size={8} fill={CELESTE}>+ INGRESOS</Text>
        <path d="M402 254l10-8 8 4 12-12" fill="none" stroke={CELESTE} strokeWidth="2" />
      </g>
    </>
  )
}

function ComunidadScreen() {
  return (
    <>
      <g className="pop" style={delay(150)}>
        <rect x="320" y="100" width="120" height="40" fill={MARINO} />
        <circle cx="334" cy="120" r="7" fill={CELESTE} />
        <path d="M331 122h6M332 122v-3a2 2 0 0 1 4 0v3" stroke={MARINO} strokeWidth="1.3" fill="none" />
        <Text x="346" y="117" size={7.5} fill={CELESTE}>¡GOL!</Text>
        <Text x="346" y="129" size={6.5} weight={500} fill={BLANCO}>Atl. Unión 2 - 1</Text>
      </g>
      <g className="pop" style={delay(600)}>
        <Text x="380" y="180" size={22} textAnchor="middle" spacing={0}>+12.480</Text>
        <Text x="380" y="194" size={6.5} fill={ACERO} textAnchor="middle" spacing={1.5}>SEGUIDORES</Text>
      </g>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} className="pop" style={delay(900 + i * 120)}>
          <circle cx={340 + i * 20} cy="222" r="9" fill={i % 2 ? CLARO : SUAVE} stroke={BLANCO} strokeWidth="2" />
          <circle cx={340 + i * 20} cy="219" r="3" fill={i % 2 ? PROFUNDO : ACERO} />
        </g>
      ))}
      <g className="pop" style={delay(1500)}>
        <rect x="320" y="246" width="120" height="30" fill={BLANCO} stroke={SUAVE} />
        <Text x="328" y="264" size={6.5} weight={700}>Jugadores · Familias · Público</Text>
      </g>
    </>
  )
}

const screens = [EquiposScreen, TorneosScreen, SponsorsScreen, ComunidadScreen]
const ligas = [48, 145, 242]

function AsociacionDrawing({ index, round, play, viewBox = '0 0 460 320', className = '' }) {
  const on = usePlay(play)
  const Screen = screens[index]
  return (
    <svg viewBox={viewBox} className={`h-auto w-full ${className} ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      {/* Conexiones: asociación → ligas → clubes, y asociación → su app */}
      <g stroke={LINEA} strokeWidth="2">
        <path className="draw" pathLength="1" style={delay(300)} d="M145 94v26M48 120h194M48 120v22M145 120v22M242 120v22" />
        {ligas.map((x) => (
          <path key={x} className="draw" pathLength="1" style={delay(900)} d={`M${x} 182v16M${x - 26} 198h52M${x - 26} 198v14M${x} 198v14M${x + 26} 198v14`} />
        ))}
        <path className="draw" pathLength="1" style={delay(600)} d="M220 72h90" strokeDasharray="4 4" />
      </g>

      {/* Datos que suben de los clubes a la asociación y pasan a la app */}
      {on && !prefersReducedMotion() && (
        <g fill={CELESTE}>
          {ligas.map((x, i) => (
            <circle key={x} r="3.5">
              <animateMotion dur="2.4s" begin={`${1.6 + i * 0.8}s`} repeatCount="indefinite" path={`M${x} 212V120H145V94`} />
            </circle>
          ))}
          <circle r="3.5">
            <animateMotion dur="1.2s" begin="2s" repeatCount="indefinite" path="M220 72H310" />
          </circle>
        </g>
      )}

      {/* Asociación */}
      <g className="pop">
        <rect x="70" y="50" width="150" height="44" fill={CELESTE} />
        <Text x="145" y="77" size={12} textAnchor="middle" spacing={1.5}>ASOCIACIÓN</Text>
      </g>

      {/* Ligas y clubes */}
      {ligas.map((x, i) => (
        <g key={x}>
          <g className="pop" style={delay(700 + i * 150)}>
            <rect x={x - 40} y="142" width="80" height="40" fill={MARINO} />
            <rect x={x - 40} y="142" width="80" height="4" fill={CELESTE} />
            <Text x={x} y="167" size={10} fill={BLANCO} textAnchor="middle" spacing={1}>{`LIGA ${i + 1}`}</Text>
          </g>
          {[-26, 0, 26].map((dx, j) => (
            <circle
              key={dx}
              className="pop"
              style={delay(1200 + i * 150 + j * 70)}
              cx={x + dx}
              cy="222"
              r="10"
              fill={index === 0 ? CLARO : 'none'}
              stroke={ACERO}
              strokeWidth="2"
            />
          ))}
        </g>
      ))}
      <Text x="145" y="254" size={7} weight={500} fill={ACERO} textAnchor="middle" spacing={2.5}>CLUBES</Text>

      {/* La app oficial de la asociación, con su marca */}
      <g className="pop" style={delay(400)}>
        <rect x="310" y="8" width="140" height="304" rx="18" fill={BLANCO} stroke={MARINO} strokeWidth="3" />
        <rect x="360" y="16" width="40" height="5" rx="2.5" fill={MARINO} />
        <rect x="318" y="30" width="124" height="38" fill={MARINO} />
        <Shield x={333} y={50} s={1} fill={CELESTE} />
        <Text x="347" y="47" size={8} fill={BLANCO} spacing={0.8}>TU ASOCIACIÓN</Text>
        <Text x="347" y="59" size={6} fill={CELESTE} spacing={1.2}>APP OFICIAL</Text>
        {['LIGA 1', 'LIGA 2', 'LIGA 3'].map((l, i) => (
          <g key={l}>
            <Text x={339 + i * 41} y="83" size={6.5} fill={i === 0 ? MARINO : ACERO} textAnchor="middle">{l}</Text>
            {i === 0 && <rect x="322" y="87" width="34" height="2" fill={CELESTE} />}
          </g>
        ))}
        <line x1="318" y1="90" x2="442" y2="90" stroke={SUAVE} />
      </g>
      <g key={round} className="format-enter">
        <Screen />
      </g>
    </svg>
  )
}

export default function Asociacion() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza solo mientras la sección se ve; tocar un paso lo muestra y reinicia el tiempo
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % steps.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index, round])

  const go = (i) => {
    setIndex(i)
    setRound((r) => r + 1)
  }

  return (
    <Section id="asociacion" light>
      <div ref={ref} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="flex flex-col">
          <Label tone="light" icon="gestion">
            Weball Asociación
          </Label>
          <Title>Federaciones</Title>
          <Lead tone="light">Sistema y app con marca propia, con todas sus ligas adentro.</Lead>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-celeste-profundo">Cada liga de la asociación</p>
          <ol className="mt-3 flex flex-col">
            {steps.map((s, i) => {
              const on = i === index
              return (
                <li key={s.title} className={i === 0 ? 'border-t-4 border-marino' : 'border-t-2 border-niebla'}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-expanded={on}
                    className={`flex w-full items-baseline gap-4 py-2.5 text-left transition ${on ? '' : 'hover:text-celeste-profundo'}`}
                  >
                    <span className={`text-2xl font-extrabold tabular-nums ${on ? 'text-celeste-profundo' : 'text-acero'}`}>
                      {`0${i + 1}`}
                    </span>
                    <span className={`text-lg font-extrabold uppercase leading-tight ${on ? 'text-marino' : 'text-pizarra'}`}>
                      {s.title}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden pl-12">
                      <p className="pb-3 leading-relaxed text-pizarra">{s.text}</p>
                      {on && !reduced && (
                        <span className="mb-3 block h-1 bg-blanco">
                          <span
                            key={round}
                            className="step-progress block h-full bg-celeste"
                            style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: inView ? 'running' : 'paused' }}
                          />
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          <Reveal delay={300} className="mt-5 flex flex-col sm:items-start">
            <a
              href="#contacto"
              className="bg-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
            >
              Quiero Weball en mi asociación
            </a>
          </Reveal>
        </div>

        {/* La asociación, sus ligas y su propia app */}
        <Reveal
          delay={200}
          className="flex flex-col border-t-[6px] border-marino bg-blanco p-5 sm:p-7"
          role="img"
          aria-label={`La asociación con sus ligas y su app oficial: ${steps[index].title}`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-celeste-profundo">
            Todos bajo el sistema oficial de la asociación
          </p>
          <div className="flex flex-1 items-center pt-4">
            {/* En el celu se ve solo la app, más grande; en pantallas más anchas, la asociación completa */}
            <AsociacionDrawing index={index} round={round} play={inView} className="hidden sm:block" />
            <AsociacionDrawing index={index} round={round} play={inView} viewBox="306 0 150 320" className="mx-auto max-w-[15rem] sm:hidden" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
