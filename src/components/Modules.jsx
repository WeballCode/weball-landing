import { Icon, Label, Section, Title } from './ui.jsx'

const modules = [
  {
    icon: 'credencial',
    name: 'Fichajes',
    kicker: 'Dinámico y personalizado',
    text: 'Además de los datos básicos, pedí lo que vos necesites.',
  },
  {
    icon: 'competicion',
    name: 'Torneos a Medida',
    kicker: 'Módulo de competición',
    text: 'Organizá por temporada, divisiones y categorías para darle estructura a largo plazo a tu liga. Todos los formatos: liga, copa y 100% personalizados, a medida y en minutos.',
  },
  {
    icon: 'app',
    name: 'Planilla digital',
    kicker: 'Desde el celular',
    text: 'Carga de resultados vía celular para los árbitros y la mesa de control.',
  },
  {
    icon: 'tribunal',
    name: 'Tribunal IA',
    kicker: 'Tu agente de disciplina',
    text: 'Cargá tus reglamentos y dejá que nuestro agente se ocupe de sancionar. Podés ajustarlo y regular sus permisos. Generación automática de boletines, como las mejores ligas del mundo.',
    featured: true,
  },
  {
    icon: 'comunidad',
    name: 'Comunicación',
    kicker: 'Vos decidís',
    text: 'Configurá qué se comunica, cómo, cuándo y a quién: notificaciones, información visible y acceso de los usuarios.',
  },
]

export default function Modules() {
  return (
    <Section id="modulos">
      <Label>Tecnología Weball</Label>
      <Title>
        Tecnología de punta <span className="text-celeste">para el deporte amateur</span>
      </Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bruma">
        No somos cualquier startup. Estos son los módulos que hacen la diferencia en cada producto Weball.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {modules.map((m, i) => (
          <div
            key={m.name}
            className={`flex min-h-72 flex-col gap-4 border-t-[6px] p-7 sm:p-8 ${
              i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
            } ${m.featured ? 'border-marino bg-celeste text-marino' : 'border-celeste bg-marino-claro'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={`text-3xl font-extrabold ${m.featured ? 'text-marino' : 'text-celeste'}`}>0{i + 1}</span>
              <Icon name={m.icon} className="h-9 w-9 shrink-0" />
            </div>
            <p className={`text-xs font-medium uppercase tracking-[0.2em] ${m.featured ? 'text-marino' : 'text-celeste'}`}>
              {m.kicker}
            </p>
            <h3 className="text-3xl font-extrabold uppercase leading-none">{m.name}</h3>
            <p className={`leading-relaxed ${m.featured ? 'text-marino' : 'text-bruma'}`}>{m.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
