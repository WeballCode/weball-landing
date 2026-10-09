import { Icon, Label, Section, Title } from './ui.jsx'

const profiles = [
  { icon: 'club', name: 'Delegados de clubes', text: 'Fichajes y planteles. Programaciones y planillas de juego.' },
  { icon: 'tribunal', name: 'Árbitros', text: 'Designaciones, carga de resultados e informes.' },
  { icon: 'jugador', name: 'Jugadores y cuerpo técnico', text: 'Calendario de partidos, sanciones y estadísticas personales.' },
]

const notifications = ['Resultado final del partido', 'Cambio de horario o cancha', 'Recordatorio 24 h antes']

const settings = [
  { name: 'Notificaciones', text: 'Qué se envía y cuándo.' },
  { name: 'Información visible', text: 'Qué se muestra en la app.' },
  { name: 'Usuarios', text: 'Control de accesos y permisos.' },
]

export default function Profiles() {
  return (
    <Section id="perfiles">
      <Label>Perfiles profesionales</Label>
      <Title>
        Cada uno, <span className="text-celeste">con su acceso</span>
      </Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bruma">
        Dentro de la app, cada persona ve y hace lo que le toca. El club se organiza, la liga controla.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {profiles.map((p) => (
          <div key={p.name} className="flex min-h-52 flex-col gap-4 border-t-[6px] border-celeste bg-marino-claro p-7">
            <Icon name={p.icon} className="h-8 w-8 text-celeste" />
            <h3 className="text-2xl font-extrabold uppercase leading-none">{p.name}</h3>
            <p className="leading-relaxed text-bruma">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-celeste">Dashboard</p>
          <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none sm:text-4xl">
            Vos configurás toda la comunicación
          </h3>
          <ul className="mt-8">
            {settings.map((s, i) => (
              <li
                key={s.name}
                className={`flex flex-col gap-1 py-4 sm:flex-row sm:gap-6 ${
                  i === 0 ? 'border-t-4 border-celeste' : 'border-t-2 border-linea'
                }`}
              >
                <p className="text-xl font-extrabold uppercase sm:w-56 sm:shrink-0">{s.name}</p>
                <p className="leading-relaxed text-bruma">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col border-t-[6px] border-marino bg-celeste p-7 text-marino sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Notificaciones automáticas</p>
          <p className="mt-4 text-2xl font-extrabold uppercase leading-tight">
            Tu liga avisa sola, en el momento justo
          </p>
          <ul className="mt-8">
            {notifications.map((n, i) => (
              <li key={n} className={`border-marino py-4 font-bold ${i === 0 ? 'border-t-4' : 'border-t-2'}`}>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
