import { Icon, Label, Section, Title } from './ui.jsx'

const products = [
  {
    href: '#liga',
    icon: 'liga',
    audience: 'Para ligas',
    name: 'Weball Liga',
    text: 'Organizá tu liga en minutos. Todo lo que tu liga necesita para funcionar.',
    featured: true,
  },
  {
    href: '#scores',
    icon: 'comunidad',
    audience: 'Para jugadores, clubes y público',
    name: 'Weball Scores',
    text: 'Nuestra comunidad de ligas, clubes y deportistas. La visibilidad que tu torneo merece.',
  },
  {
    href: '#asociacion',
    icon: 'gestion',
    audience: 'Para asociaciones y federaciones',
    name: 'Weball Asociación',
    text: 'Tu propio sistema y tu app, con todas tus ligas adentro.',
  },
  {
    href: '#sponsors',
    icon: 'inversor',
    audience: 'Para marcas',
    name: 'Weball Sponsors',
    text: 'Formá parte de la experiencia popular amateur y medí los resultados.',
  },
]

export default function Products() {
  return (
    <Section id="productos" light>
      <Label dark={false}>Productos Weball</Label>
      <Title>Una plataforma, todo el deporte amateur</Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        Seas de una liga, de una asociación, juegues o tengas una marca, Weball tiene un producto para vos.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className={`group flex min-h-80 flex-col gap-4 border-t-[6px] border-marino p-7 transition ${
              p.featured ? 'bg-celeste' : 'bg-blanco hover:bg-white'
            }`}
          >
            <Icon name={p.icon} className="h-8 w-8" />
            <p className={`text-xs font-medium uppercase tracking-[0.2em] ${p.featured ? 'text-marino' : 'text-acero'}`}>
              {p.audience}
            </p>
            <h3 className="text-3xl font-extrabold uppercase leading-none">{p.name}</h3>
            <p className={`leading-relaxed ${p.featured ? 'text-marino' : 'text-pizarra'}`}>{p.text}</p>
            <span className="mt-auto font-bold uppercase tracking-wide">
              Conocé más <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}
