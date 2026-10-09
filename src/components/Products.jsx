import { Icon, Label, Section, Title } from './ui.jsx'

const products = [
  {
    n: '01',
    icon: 'gestion',
    kicker: 'Tu sistema',
    name: 'Weball Gestión',
    text: 'Con lo que la liga administra fichajes, clubes, torneos, árbitros, partidos y tribunal. Es el orden.',
  },
  {
    n: '02',
    icon: 'app',
    kicker: 'Tu app',
    name: 'La app oficial de tu liga',
    text: 'Con el nombre y la marca de tu liga: torneos, jugadores, resultados y estadísticas a la vista de todos. Es la visibilidad.',
    featured: true,
  },
  {
    n: '03',
    icon: 'comunidad',
    kicker: 'Tu comunidad',
    name: 'We Are Weball',
    text: 'El lugar público donde se siguen todas las ligas: partidos, tablas y perfiles de jugadores.',
  },
]

export default function Products() {
  return (
    <Section id="producto">
      <Label>Qué es Weball</Label>
      <Title>
        Tu sistema, tu app, <span className="text-celeste">tu comunidad</span>
      </Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bruma">
        A cada liga, con marca propia o no, le damos el salto de calidad de la misma manera. Y las marcas forman
        parte de la experiencia: los sponsors financian el producto.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.n}
            className={`flex min-h-80 flex-col gap-4 border-t-[6px] p-8 ${
              p.featured ? 'border-marino bg-celeste text-marino' : 'border-celeste bg-marino-claro'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-3xl font-extrabold ${p.featured ? 'text-marino' : 'text-celeste'}`}>{p.n}</span>
              <Icon name={p.icon} />
            </div>
            <p className={`mt-4 text-sm font-medium uppercase tracking-[0.2em] ${p.featured ? 'text-marino' : 'text-celeste'}`}>
              {p.kicker}
            </p>
            <h3 className="text-3xl font-extrabold uppercase leading-none">{p.name}</h3>
            <p className={`leading-relaxed ${p.featured ? 'text-marino' : 'text-bruma'}`}>{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
