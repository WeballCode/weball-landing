const points = [
  {
    title: 'Un mercado gigante y analógico',
    text: 'Millones de personas juegan fútbol amateur todas las semanas, y la gran mayoría de las ligas todavía se gestiona con papel, planillas y WhatsApp.',
  },
  {
    title: 'Efecto red',
    text: 'Cada liga que entra trae a sus clubes, y cada club trae a sus jugadores. La plataforma crece sola desde adentro.',
  },
  {
    title: 'Datos únicos',
    text: 'Partidos, jugadores, sanciones y estadísticas de un mundo que hoy no está digitalizado. Una base para nuevos servicios.',
  },
  {
    title: 'IA aplicada a un problema real',
    text: 'No es IA por moda: resuelve uno de los dolores más grandes de cualquier liga, la disciplina.',
  },
]

export default function Investors() {
  return (
    <section id="inversores" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Para inversores</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          El fútbol amateur está listo para <span className="text-gradient">digitalizarse.</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">
          El fútbol profesional tiene toda la tecnología. El amateur, donde está la enorme mayoría de los que
          juegan, casi nada. Weball es la infraestructura que le faltaba.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {points.map((p, i) => (
          <div key={p.title} className="bg-ink p-6 sm:p-8">
            <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-400">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
