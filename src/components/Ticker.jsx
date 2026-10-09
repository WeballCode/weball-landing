// Cinta celeste con los módulos de Weball pasando en loop
const words = ['Fichaje online', 'Planilla digital', 'Tribunal IA', 'App de resultados', 'Sponsors', 'Comunidad']

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
    <div className="overflow-hidden bg-celeste py-4 text-marino">
      <div className="marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
