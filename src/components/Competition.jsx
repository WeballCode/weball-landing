const formats = ['Liga todos contra todos', 'Zonas + playoffs', 'Copa eliminatoria', 'Ida y vuelta', 'Apertura / Clausura', 'Múltiples categorías', 'Reglas de desempate propias', 'Fútbol 11, 7 y 5']

const table = [
  ['Atl. Unión', 7, 17],
  ['Dep. Norte', 7, 15],
  ['San Martín', 7, 12],
  ['Los Andes', 7, 10],
]

export default function Competition() {
  return (
    <section id="competicion" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#14112a] to-ink p-6 sm:p-12">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Módulo de competición</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Si lo podés imaginar, lo podés jugar.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Cada liga es distinta, y Weball se adapta a la tuya, no al revés. Configurás el formato, las
                categorías y las reglas, y la plataforma arma el fixture, carga resultados y actualiza tablas y
                goleadores al instante.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {formats.map((f) => (
                  <li key={f} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-ink/80 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="font-display font-semibold">Primera · Zona A</p>
                <span className="flex items-center gap-1.5 text-xs text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  En vivo
                </span>
              </div>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
                    <th className="pb-2 font-medium">#</th>
                    <th className="pb-2 font-medium">Equipo</th>
                    <th className="pb-2 text-right font-medium">PJ</th>
                    <th className="pb-2 text-right font-medium">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(([team, pj, pts], i) => (
                    <tr key={team} className="border-t border-white/5">
                      <td className="py-2.5 text-slate-500">{i + 1}</td>
                      <td className="py-2.5 font-medium">{team}</td>
                      <td className="py-2.5 text-right text-slate-400">{pj}</td>
                      <td className={`py-2.5 text-right font-semibold ${i < 2 ? 'text-accent' : ''}`}>{pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-slate-500">Los 2 primeros clasifican a playoffs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
