// Cinta celeste "Hecho para…": a quién va dirigido Weball, pasando en loop
const words = [
  'Federaciones',
  'Asociaciones',
  'Ligas',
  'Clubes',
  'Árbitros',
  'Delegados',
  'Jugadores',
  'Familias',
  'Marcas',
]

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center whitespace-nowrap">
          <span className="px-6 text-lg font-extrabold uppercase tracking-wide sm:text-xl">{w}</span>
          <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  )
}

export default function Ticker() {
  return (
    <div className="flex items-stretch bg-celeste text-marino">
      {/* Rótulo fijo a la izquierda; los destinatarios pasan detrás */}
      <p className="relative z-10 flex shrink-0 items-center bg-marino px-4 text-sm font-bold uppercase tracking-[0.2em] text-celeste sm:px-6">
        Hecho para
      </p>
      <div className="min-w-0 flex-1 overflow-hidden py-4">
        <div className="marquee flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
