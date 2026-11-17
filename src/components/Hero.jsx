import { CourtLines } from './Illustrations.jsx'
import { CountUp, Reveal } from './motion.jsx'
import { totales } from '../ligas.js'

// Las cifras salen de src/ligas.js (ligas clientes, noviembre de 2026)
const trust = ['FUTSALA y sus filiales, en cuatro países', 'Tribunal IA con el reglamento de tu liga', 'Se conecta con lo que ya usás']

export default function Hero() {
  return (
    <section id="inicio" className="bg-marino pt-16">
      <div className="relative overflow-hidden">
        <CourtLines className="pointer-events-none absolute top-1/2 -right-28 h-[115%] -translate-y-1/2 opacity-30 sm:-right-16 lg:right-[max(1.5rem,calc((100vw-72rem)/2))] lg:h-[88%] lg:opacity-100" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 sm:px-6 sm:pt-12 sm:pb-12">
          <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.2em] text-celeste">
            Para ligas de más de 1.000 jugadores
          </Reveal>

          <h1 className="mt-5 max-w-4xl text-[2.3rem] font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            <Reveal as="span" delay={150} className="block">
              El sistema de las
            </Reveal>{' '}
            <Reveal as="span" delay={300} className="block text-celeste">
              grandes ligas.
            </Reveal>
          </h1>

          {/* El producto real: el sistema de gestión en la compu y la app en el celular */}
          <Reveal delay={400} className="mt-6 w-full max-w-md">
            <img
              src="./mockups/plataforma.webp"
              alt="El sistema de gestión de Weball en una compu y la app en un celular"
              width="2000"
              height="1125"
              className="block h-auto w-full"
            />
          </Reveal>

          <Reveal as="p" delay={450} className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-bruma sm:text-xl">
            Fichajes, fixture, programación, planillas, árbitros, resultados, tribunal y comunicación para ligas con miles de jugadores.
            Contratá Weball completo o sólo los procesos que te faltan.
          </Reveal>

          <Reveal delay={600} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="bg-celeste px-7 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
            >
              Quiero ver mi liga funcionando
            </a>
            <a
              href="#procesos"
              className="border-2 border-blanco/70 px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-blanco hover:text-marino"
            >
              Ver los 8 procesos
            </a>
          </Reveal>

          {/* Frases de confianza, con un tilde cada una */}
          <Reveal as="ul" delay={750} className="mt-6 flex flex-col gap-2 text-sm text-bruma sm:flex-row sm:flex-wrap sm:gap-x-6">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-celeste" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="border-t border-linea">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-linea lg:grid-cols-4">
          {totales.map((n, i) => (
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
