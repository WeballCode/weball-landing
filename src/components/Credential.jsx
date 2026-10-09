import FeatureSection from './FeatureSection.jsx'

function Visual() {
  const rows = [
    { name: 'Lucas Fernández', club: 'Dep. Norte', ok: true },
    { name: 'Tomás Rivas', club: 'Dep. Norte', ok: true },
    { name: 'Joaquín Pérez', club: 'Dep. Norte', ok: false, why: 'Suspendido · 1 fecha' },
    { name: 'Bruno Sosa', club: 'Dep. Norte', ok: true },
  ]
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-display font-semibold">Ingreso a cancha</p>
        <span className="text-xs text-slate-500">Fecha 7 · Cancha 2</span>
      </div>
      <ul className="mt-5 space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
            <div>
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-slate-500">{r.ok ? r.club : r.why}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                r.ok ? 'bg-accent/15 text-accent' : 'bg-red-500/15 text-red-400'
              }`}
            >
              {r.ok ? 'Habilitado' : 'No puede jugar'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Credential() {
  return (
    <div id="producto">
      <FeatureSection
        id="credencial"
        tag="Credencial digital"
        title="Quién juega, sin discusiones."
        text="Cada jugador tiene su credencial en el celular, con foto, club, categoría y estado actualizado en tiempo real. El árbitro o el veedor escanea el QR y sabe al instante si está habilitado."
        bullets={[
          'Chau carnets de papel, fotocopias y fichas que se pierden.',
          'Valida en el momento: apto médico, suspensiones y fichaje vigente.',
          'Se terminan los "jugadores truchos" y las protestas después del partido.',
        ]}
        visual={<Visual />}
      />
    </div>
  )
}
