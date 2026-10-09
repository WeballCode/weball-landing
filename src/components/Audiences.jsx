const audiences = [
  {
    icon: '🏆',
    title: 'Ligas y federaciones',
    text: 'Armá torneos de cualquier formato, controlá quién juega y resolvé sanciones con criterio y en tiempo récord.',
  },
  {
    icon: '🛡️',
    title: 'Clubes',
    text: 'Plantel, fichajes, documentación y comunicación con tus jugadores, todo desde una app pensada para dirigentes.',
  },
  {
    icon: '⚽',
    title: 'Jugadores',
    text: 'Tu credencial en el celular, tus partidos, tus estadísticas y tu historial. Sin carnets de papel ni trámites.',
  },
  {
    icon: '📈',
    title: 'Inversores y aliados',
    text: 'Un mercado enorme y desatendido, listo para digitalizarse. Te contamos la oportunidad.',
    href: '#inversores',
  },
]

export default function Audiences() {
  return (
    <section id="para-quien" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Para quién es</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
        Una plataforma, todos los protagonistas.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-slate-400">
        Seas quien seas dentro del fútbol, Weball te resuelve algo hoy.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a) => {
          const Tag = a.href ? 'a' : 'div'
          return (
            <Tag
              key={a.title}
              href={a.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/50 hover:bg-white/[0.06]"
            >
              <span className="text-3xl" aria-hidden="true">{a.icon}</span>
              <h3 className="mt-5 font-display text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.text}</p>
            </Tag>
          )
        })}
      </div>
    </section>
  )
}
