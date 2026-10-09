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
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 sm:px-6 sm:pt-12 sm:pb-12">
          <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.2em] text-celeste">
            Potenciamos al deporte amateur
          </Reveal>

          <h1 className="mt-5 max-w-4xl text-[2.75rem] font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            <Reveal as="span" delay={150} className="block">
              Llevá tu liga al
            </Reveal>
            <Reveal as="span" delay={300} className="block text-celeste">
              próximo nivel.
            </Reveal>
          </h1>

          {/* El producto real: el sistema de gestión en la compu y la app en el celular */}
          <Reveal delay={400} className="relative mt-7 w-full max-w-md pr-[11%]">
            <img
              src="./mockups/sistema.webp"
              alt="El sistema de gestión de Weball en una computadora"
              width="1100"
              height="665"
              className="block h-auto w-full"
            />
            <img
              src="./mockups/app.webp"
              alt="La app de resultados de Weball en un celular"
              width="420"
              height="872"
              className="absolute right-0 bottom-0 h-auto w-[19%] drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
            />
          </Reveal>

          <Reveal as="p" delay={450} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-bruma sm:text-xl">
            El sistema de gestión y la aplicación que tu liga necesita para dar el salto de calidad.
          </Reveal>

          <Reveal delay={600} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="bg-celeste px-7 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
            >
              Quiero Weball en mi liga
            </a>
            <a
              href="#productos"
              className="border-2 border-blanco/70 px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-blanco hover:text-marino"
            >
              Conocé los productos
            </a>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-linea">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-linea lg:grid-cols-4">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 100} className="flex flex-col-reverse bg-marino px-4 py-6 sm:px-6">
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
