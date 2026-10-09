import { Icon, Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

const products = [
  {
    href: '#liga',
    icon: 'liga',
    audience: 'Para ligas',
    name: 'Weball Liga',
    text: 'Organizá tu liga en minutos.',
    featured: true,
  },
  {
    href: '#scores',
    icon: 'comunidad',
    audience: 'Para jugadores, clubes y público',
    name: 'Weball Scores',
    text: 'Unimos a todas nuestras ligas, clubes y deportistas.',
  },
  {
    href: '#asociacion',
    icon: 'gestion',
    audience: 'Para asociaciones y federaciones',
    name: 'Weball Asociación',
    text: 'Sistema y app con marca propia, con todas sus ligas adentro.',
  },
  {
    href: '#sponsors',
    icon: 'inversor',
    audience: 'Para marcas',
    name: 'Weball Sponsors',
    text: 'Formá parte de la experiencia popular amateur.',
  },
]

export default function Products() {
  return (
    <Section id="productos" light>
      <Label tone="light">Weball</Label>
      <Title>Una plataforma completa</Title>
      <Lead tone="light">Seas de una liga o una asociación, juegues o tengas una marca, Weball tiene algo para vos.</Lead>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 120} className="flex">
          <a
            href={p.href}
            className={`group flex min-h-80 w-full flex-col gap-4 border-t-[6px] border-marino p-7 transition duration-300 hover:-translate-y-2 ${
              p.featured ? 'bg-celeste' : 'bg-blanco hover:bg-white'
            }`}
          >
            <Icon name={p.icon} className="h-8 w-8" />
            <p className={`text-xs font-medium uppercase tracking-[0.2em] ${p.featured ? 'text-marino' : 'text-acero'}`}>
              {p.audience}
            </p>
            <h3 className="text-2xl font-extrabold uppercase leading-none">{p.name}</h3>
            <p className={`leading-relaxed ${p.featured ? 'text-marino' : 'text-pizarra'}`}>{p.text}</p>
            <span className="mt-auto font-bold uppercase tracking-wide">
              Conocé más <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span>
            </span>
          </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
