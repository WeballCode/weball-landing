import FeatureSection from './FeatureSection.jsx'

function Visual() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
      <div className="flex items-center justify-between">
        <p className="font-display font-semibold">Expediente #0412</p>
        <span className="rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-brand">Analizado por IA</span>
      </div>

      <div className="mt-5 rounded-2xl bg-white/[0.04] p-4 text-sm">
        <p className="text-xs uppercase tracking-wider text-slate-500">Informe arbitral</p>
        <p className="mt-1.5 text-slate-300">
          “Min. 67: el jugador N° 5 empuja al árbitro asistente tras un fallo de offside.”
        </p>
      </div>

      <div className="mt-3 space-y-2 text-sm">
        {[
          ['Antecedentes del jugador', '1 amonestación en la temporada'],
          ['Artículo aplicable', 'Reglamento, art. 34 inc. b'],
          ['Casos similares', '6 resoluciones previas'],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 rounded-xl px-4 py-2.5 ring-1 ring-white/5">
            <span className="text-slate-500">{k}</span>
            <span className="text-right text-slate-200">{v}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand/25 to-accent/10 p-4">
        <p className="text-xs uppercase tracking-wider text-slate-300">Sanción sugerida</p>
        <p className="mt-1 font-display text-2xl font-bold">3 fechas de suspensión</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-ink">Aprobar</span>
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold">Modificar</span>
        </div>
      </div>
    </div>
  )
}

export default function Tribunal() {
  return (
    <FeatureSection
      id="tribunal"
      reverse
      tag="Tribunal de disciplina con IA"
      title="Sanciones justas, rápidas y coherentes."
      text="La inteligencia artificial lee el informe del árbitro, revisa el reglamento de tu liga, los antecedentes del jugador y los casos parecidos, y le propone al tribunal una resolución fundamentada. El tribunal siempre tiene la última palabra."
      bullets={[
        'Lo que antes llevaba semanas, se resuelve antes de la próxima fecha.',
        'Mismo hecho, misma sanción: criterio parejo para todos los clubes.',
        'Cada resolución queda registrada y la sanción se aplica sola a la credencial.',
      ]}
      visual={<Visual />}
    />
  )
}
