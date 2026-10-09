import FeatureSection from './FeatureSection.jsx'

function Visual() {
  const tiles = [
    { label: 'Plantel', value: 'Todas las categorías', icon: '👥' },
    { label: 'Fichajes', value: 'Online, sin papeles', icon: '📝' },
    { label: 'Documentación', value: 'Aptos y DNI al día', icon: '📂' },
    { label: 'Avisos', value: 'Directo al celular', icon: '🔔' },
  ]
  return (
    <div className="mx-auto max-w-xs rounded-[2.5rem] border border-white/15 bg-[#0e0d17] p-3 shadow-2xl shadow-brand/10">
      <div className="rounded-[2rem] bg-gradient-to-b from-[#16142a] to-[#0e0d17] p-5">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-white/10" />
        <p className="text-xs text-slate-500">Hola, Comisión Directiva</p>
        <p className="font-display text-lg font-bold">Club Atlético Unión</p>

        <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand to-brand-dark p-4">
          <p className="text-xs text-white/70">Próximo partido</p>
          <p className="mt-1 font-semibold">Primera vs. Dep. Norte</p>
          <p className="text-xs text-white/70">Sábado · 16:00 · Cancha 2</p>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-2xl bg-white/[0.05] p-3">
              <span className="text-lg" aria-hidden="true">{t.icon}</span>
              <p className="mt-1.5 text-sm font-semibold">{t.label}</p>
              <p className="text-[11px] leading-tight text-slate-500">{t.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Clubs() {
  return (
    <FeatureSection
      id="clubes"
      tag="App para clubes"
      title="El club entero, en el bolsillo del dirigente."
      text="Los clubes gestionan su plantel, hacen los fichajes, mantienen la documentación al día y se comunican con jugadores y familias desde una app simple, pensada para gente que no tiene tiempo que perder."
      bullets={[
        'Fichajes y pases online, conectados directo con la liga.',
        'Avisos de vencimientos: aptos médicos, documentos, sanciones.',
        'Toda la información del club ordenada y siempre disponible.',
      ]}
      visual={<Visual />}
    />
  )
}
