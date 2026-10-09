// Patrón fijo para dibujar un QR de ejemplo
const qr = [
  '1111111010111111',
  '1000001001100001',
  '1011101110101101',
  '1011101001001101',
  '1000001101100001',
  '1111111010111111',
  '0000000110000000',
  '1101011011010110',
  '0110100101101011',
  '1011011010110100',
  '0000000101011010',
  '1111111011010101',
  '1000001010101110',
  '1011101101011011',
  '1000001011010101',
  '1111111010101011',
]

export default function CredentialCard() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#1a1530] via-[#11101c] to-[#0b0b12] p-6 shadow-2xl shadow-brand/20">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold tracking-wide text-slate-300">CREDENCIAL DIGITAL</span>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
          Habilitado
        </span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-accent font-display text-xl font-bold text-ink">
          MG
        </div>
        <div>
          <p className="font-display text-xl font-bold">Martina Gómez</p>
          <p className="text-sm text-slate-400">Club Atlético Unión · Primera</p>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[
          ['Nº', '10'],
          ['Categoría', 'Mayores'],
          ['Apto médico', 'Al día'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/5 py-2">
            <dt className="text-[10px] uppercase tracking-wider text-slate-500">{k}</dt>
            <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex items-end justify-between">
        <div className="text-xs text-slate-500">
          <p>Liga Regional</p>
          <p>Temporada 2026</p>
        </div>
        <div className="rounded-lg bg-white p-1.5" aria-hidden="true">
          <div className="grid grid-cols-16 gap-0" style={{ gridTemplateColumns: 'repeat(16, 4px)' }}>
            {qr.join('').split('').map((c, i) => (
              <span key={i} className={`h-1 w-1 ${c === '1' ? 'bg-ink' : 'bg-white'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
