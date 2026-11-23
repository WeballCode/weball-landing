import { escudos } from '../tareas.js'
import { CountUp, Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Cifras de las ligas clientes (mismas que la V2: v2/src/ligas.js, noviembre de 2026)
const totales = [
  { value: '+67.000', label: 'jugadores fichados' },
  { value: '+1.200', label: 'clubes' },
  { value: '+90.000', label: 'partidos jugados' },
]

function Cinta({ oculta }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={oculta || undefined}>
      {escudos.map((e) => (
        <li key={e} className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-2 sm:h-24 sm:w-24">
          <img src={`./clubes/${e}.png`} alt="" loading="lazy" className="h-full w-full object-contain" />
        </li>
      ))}
    </ul>
  )
}

export default function Ligas() {
  return (
    <Section id="ligas" tone="negro" className="overflow-hidden">
      <Title>Las ligas grandes ya juegan con Weball.</Title>
      <Lead tone="negro">FUTSALA y BAFI organizan sus torneos en Weball, con clubes de toda la región.</Lead>

      <Reveal delay={150} className="mt-12 flex items-center justify-center gap-10 sm:gap-14">
        <img src="./ligas/futsala-blanco.png" alt="FUTSALA" className="h-8 w-auto sm:h-10" />
        <img src="./ligas/bafi.png" alt="BAFI" className="h-16 w-auto sm:h-20" />
      </Reveal>

      <dl className="mt-16 grid gap-10 text-center sm:grid-cols-3">
        {totales.map((n, i) => (
          <Reveal key={n.label} delay={i * 120} className="flex flex-col-reverse">
            <dt className="mt-1 text-[#a1a1a6]">{n.label}</dt>
            <dd className="text-5xl font-bold tracking-tight tabular-nums sm:text-6xl">
              <CountUp value={n.value} />
            </dd>
          </Reveal>
        ))}
      </dl>

      {/* Escudos de clubes que juegan en ligas con Weball */}
      <div className="relative mt-20 -mx-5 overflow-hidden sm:-mx-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee flex w-max">
          <Cinta />
          <Cinta oculta />
        </div>
      </div>
    </Section>
  )
}
