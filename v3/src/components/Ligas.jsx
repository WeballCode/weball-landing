import { COMMUNITY_URL } from '../links.js'
import { escudos } from '../tareas.js'
import { CountUp, Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Cifras de las ligas clientes (las pasó el socio en noviembre de 2026)
const totales = [
  { value: '+40.000', label: 'jugadores fichados' },
  { value: '+3.500', label: 'entrenadores' },
  { value: '+400', label: 'árbitros' },
  { value: '+500', label: 'clubes' },
  { value: '+150', label: 'torneos' },
  { value: '+1.500', label: 'partidos por semana' },
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
      <Title>Ligas grandes ya juegan con Weball.</Title>
      <Lead tone="negro">Se organizan con nuestra tecnología.</Lead>

      <Reveal delay={150} className="mt-12 flex items-center justify-center gap-10 sm:gap-14">
        <img src="./ligas/futsala-blanco.png" alt="FUTSALA" className="h-8 w-auto sm:h-10" />
        <img src="./ligas/bafi-blanco.png" alt="BAFI" className="h-14 w-auto sm:h-16" />
      </Reveal>

      <dl className="mt-16 mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-3">
        {totales.map((n, i) => (
          <Reveal key={n.label} delay={i * 100} className="flex flex-col-reverse">
            <dt className="mt-1 text-bruma">{n.label}</dt>
            <dd className="text-[2.6rem] font-bold tracking-tight tabular-nums sm:text-5xl">
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

      {/* Comunidad: We Are Weball, donde se ve la actividad de todas las ligas */}
      <Reveal className="mx-auto mt-20 max-w-4xl rounded-[1.75rem] bg-marino-claro p-8 text-center sm:p-12">
        <p className="texto-ia text-sm font-semibold tracking-wide uppercase">We Are Weball</p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">Una comunidad que juega todas las semanas.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-[1.1rem] leading-relaxed text-bruma text-pretty">
          Jugadores, clubes y familias siguen los partidos, los resultados y las tablas de todas las ligas en un solo lugar.
        </p>
        <a
          href={COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-celeste px-6 py-3 text-[1.05rem] font-semibold text-marino transition hover:bg-celeste-claro"
        >
          Mirá la actividad en We Are Weball
        </a>
      </Reveal>
    </Section>
  )
}
