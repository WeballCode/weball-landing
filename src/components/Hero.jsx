import { Label } from './ui.jsx'
import { CourtLines } from './Illustrations.jsx'

// Números vigentes del manual de marca (informe de junio 2026 y confirmación de octubre 2026)
const numbers = [
  { value: '+35.000', label: 'Jugadores' },
  { value: '+400', label: 'Clubes' },
  { value: '+300', label: 'Árbitros' },
  { value: '+15.000', label: 'Partidos por semestre' },
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-marino pt-16">
      <div className="relative overflow-hidden">
      <CourtLines className="pointer-events-none absolute top-1/2 -right-28 h-[115%] -translate-y-1/2 opacity-30 sm:-right-16 lg:right-[max(1.5rem,calc((100vw-72rem)/2))] lg:h-[88%] lg:opacity-100" />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-20">
        <Label>Organizamos y conectamos al deporte amateur</Label>

        <h1 className="mt-6 max-w-4xl text-[2.75rem] font-extrabold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
          Llevá tu liga a <span className="text-celeste">otro nivel.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bruma sm:text-xl">
          Weball le da al deporte amateur el orden y la visibilidad que merece. Organizamos ligas y asociaciones,
          conectamos a jugadores, clubes y público, y sumamos a las marcas a la experiencia.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="bg-celeste px-8 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:bg-celeste-claro"
          >
            Quiero Weball en mi liga
          </a>
          <a
            href="#productos"
            className="border-2 border-blanco/70 px-8 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:bg-blanco hover:text-marino"
          >
            Conocé los productos
          </a>
        </div>
      </div>
      </div>

      <div className="border-t border-linea">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-linea lg:grid-cols-4">
          {numbers.map((n) => (
            <div key={n.label} className="flex flex-col-reverse bg-marino px-4 py-8 sm:px-6">
              <dt className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-bruma">{n.label}</dt>
              <dd className="text-4xl font-extrabold tabular-nums sm:text-5xl">{n.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
