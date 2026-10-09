import { Icon, Label, Section, Title } from './ui.jsx'

const audiences = [
  {
    icon: 'liga',
    title: 'Ligas',
    text: 'Organizá tu liga de punta a punta: fichajes, torneos, árbitros, partidos y sanciones, con tu propia app oficial.',
    featured: true,
  },
  {
    icon: 'club',
    title: 'Clubes',
    text: 'Fichá a tus jugadores desde el celular, armá tus planteles y seguí cada partido. El club se organiza, la liga controla.',
  },
  {
    icon: 'jugador',
    title: 'Jugadores y familias',
    text: 'Tu credencial en el celular, tus partidos, tus estadísticas y los resultados de toda la liga en un solo lugar.',
  },
  {
    icon: 'inversor',
    title: 'Inversores y marcas',
    text: 'Una comunidad que crece todas las semanas, y un lugar para las marcas dentro de la experiencia.',
    href: '#inversores',
  },
]

export default function Audiences() {
  return (
    <Section id="para-quien" light>
      <Label dark={false}>Para quién es</Label>
      <Title>Una plataforma, todo el deporte amateur</Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        Seas de una liga, de un club, juegues o quieras sumarte al proyecto, Weball tiene algo para vos.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a) => {
          const Tag = a.href ? 'a' : 'div'
          return (
            <Tag
              key={a.title}
              href={a.href}
              className={`flex min-h-64 flex-col gap-4 border-t-[6px] p-7 transition ${
                a.featured
                  ? 'border-marino bg-celeste text-marino'
                  : 'border-marino bg-blanco text-marino hover:bg-white'
              }`}
            >
              <Icon name={a.icon} className="h-8 w-8" />
              <h3 className="text-2xl font-extrabold uppercase leading-none">{a.title}</h3>
              <p className={`leading-relaxed ${a.featured ? 'text-marino' : 'text-pizarra'}`}>{a.text}</p>
            </Tag>
          )
        })}
      </div>
    </Section>
  )
}
