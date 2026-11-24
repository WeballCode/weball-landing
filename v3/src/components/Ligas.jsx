import { escudos } from '../tareas.js'
import { CountUp, Reveal } from './motion.jsx'
import { Etiqueta, Lead, Section, Title } from './ui.jsx'

// Cifras de las ligas clientes: las mismas de la V2 (v2/src/ligas.js), datos de Weball al 11 de noviembre de 2026.
// Manual de marca: cada cifra con fuente y fecha, y revisada contra el sistema antes de publicar.
const totales = [
  { value: '+67.000', label: 'Jugadores fichados' },
  { value: '+1.200', label: 'Clubes' },
  { value: '+90.000', label: 'Partidos jugados' },
]

function Cinta({ oculta }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={oculta || undefined}>
      {escudos.map((e) => (
        <li key={e} className="h-20 w-20 shrink-0 overflow-hidden bg-white p-2 sm:h-24 sm:w-24">
          <img src={`./clubes/${e}.png`} alt="" loading="lazy" className="h-full w-full object-contain" />
        </li>
      ))}
    </ul>
  )
}

export default function Ligas() {
  return (
    <Section id="ligas" className="overflow-hidden">
      <Etiqueta>Ligas que ya juegan con Weball</Etiqueta>
      <Title>Llevá tu liga a otro nivel.</Title>
      <Lead>Futsala y sus filiales, y BAFI, organizan sus torneos en Weball.</Lead>

      <Reveal delay={150} className="mt-10 flex items-center gap-10 sm:gap-14">
        <img src="./ligas/futsala-blanco.png" alt="Futsala" className="h-8 w-auto sm:h-10" />
        <img src="./ligas/bafi.png" alt="BAFI" className="h-16 w-auto sm:h-20" />
      </Reveal>

      <dl className="mt-14 grid gap-5 sm:grid-cols-3">
        {totales.map((n, i) => (
          <Reveal key={n.label} delay={i * 120} className="flex flex-col-reverse border-t-4 border-celeste bg-marino-claro p-7">
            <dt className="mt-1 text-sm font-medium tracking-[0.15em] text-bruma uppercase">{n.label}</dt>
            <dd className="text-5xl font-extrabold tabular-nums sm:text-6xl">
              <CountUp value={n.value} />
            </dd>
          </Reveal>
        ))}
      </dl>
      <p className="mt-4 text-xs text-bruma">Datos de Weball al 11 de noviembre de 2026, ligas clientes.</p>

      {/* Escudos de clubes que juegan en ligas con Weball (sin clubes de primera) */}
      <div className="relative mt-16 -mx-5 overflow-hidden sm:-mx-6">
        <div className="marquee flex w-max">
          <Cinta />
          <Cinta oculta />
        </div>
      </div>
    </Section>
  )
}
