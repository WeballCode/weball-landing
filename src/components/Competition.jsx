import { Icon, Label, Section, Title } from './ui.jsx'

const formats = [
  'Todos contra todos',
  'Zonas',
  'Playoffs',
  'Ida y vuelta',
  'Varias categorías',
  'Reglas propias de tu liga',
]

const steps = [
  { title: 'Configurás', text: 'Elegís el formato, las categorías y las reglas de tu torneo.' },
  { title: 'Programás', text: 'Fecha, hora y sede de cada partido, y designación de árbitros.' },
  { title: 'Se juega', text: 'Árbitros y clubes cargan los resultados.' },
  { title: 'Todos lo ven', text: 'Tablas y estadísticas se actualizan en la app de tu liga.' },
]

export default function Competition() {
  return (
    <Section id="competiciones">
      <div className="flex items-start justify-between gap-6">
        <div>
          <Label>Competiciones</Label>
          <Title>
            Tu torneo, <span className="text-celeste">como lo juega tu liga</span>
          </Title>
        </div>
        <Icon name="competicion" className="hidden h-14 w-14 shrink-0 text-celeste sm:block" />
      </div>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bruma">
        Cada liga se organiza a su manera, y Weball se adapta. Armá tus torneos con el formato y las reglas que
        ya usás, sin cambiar cómo juega tu liga.
      </p>

      <ul className="mt-10 flex flex-wrap gap-2">
        {formats.map((f) => (
          <li key={f} className="border-2 border-linea px-4 py-2 font-medium text-blanco">
            {f}
          </li>
        ))}
      </ul>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={`flex min-h-56 flex-col gap-3 border-t-[6px] p-7 ${
              i === 3 ? 'border-marino bg-celeste text-marino' : 'border-celeste bg-marino-claro'
            }`}
          >
            <span className={`text-3xl font-extrabold ${i === 3 ? 'text-marino' : 'text-celeste'}`}>0{i + 1}</span>
            <h3 className="text-2xl font-extrabold uppercase leading-none">{s.title}</h3>
            <p className={`leading-relaxed ${i === 3 ? 'text-marino' : 'text-bruma'}`}>{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
