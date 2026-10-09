import { CourtLines } from './Illustrations.jsx'
import { CountUp, Reveal } from './motion.jsx'

// Números vigentes del manual de marca (informe de junio 2026 y confirmación de octubre 2026)
const numbers = [
  { value: '+35.000', label: 'Jugadores' },
  { value: '+400', label: 'Clubes' },
  { value: '+300', label: 'Árbitros' },
  { value: '+1.000', label: 'Partidos por semana' },
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-marino pt-16">
      <div className="relative overflow-hidden">
        <CourtLines className="pointer-events-none absolute top-1/2 -right-28 h-[115%] -translate-y-1/2 opacity-30 sm:-right-16 lg:right-[max(1.5rem,calc((100vw-72rem)/2))] lg:h-[88%] lg:opacity-100" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-20">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-[0.2em] text-celeste">
            Potenciamos el deporte amateur
          </Reveal>

          <h1 className="mt-6 max-w-4xl text-[2.75rem] font-extrabold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
            <Reveal as="span" delay={150} className="block">
              Llevá tu liga al
            </Reveal>
            <Reveal as="span" delay={300} className="block text-celeste">
              próximo nivel.
            </Reveal>
          </h1>

          <Reveal as="p" delay={450} className="mt-8 max-w-2xl text-lg leading-relaxed text-bruma sm:text-xl">
            Organizá, mostrá y hacé crecer tu liga. Todo en un solo lugar.
          </Reveal>

          <Reveal delay={600} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="bg-celeste px-8 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
            >
              Quiero Weball en mi liga
            </a>
            <a
              href="#productos"
              className="border-2 border-blanco/70 px-8 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-blanco hover:text-marino"
            >
              Conocé los productos
            </a>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-linea">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-linea lg:grid-cols-4">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 100} className="flex flex-col-reverse bg-marino px-4 py-8 sm:px-6">
              <dt className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-bruma">{n.label}</dt>
              <dd className="text-4xl font-extrabold tabular-nums sm:text-5xl">
                <CountUp value={n.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
