// Tarjeta del precio: USD 0,50 por jugador al mes, que paga el jugador al activar su credencial
import { PRICE_MONTH, PRICE_YEAR, usd } from './pricing.js'

// `tone="darker"` cuando va sobre fondo marino, para que se despegue
export default function PriceCard({ tone = 'dark', children }) {
  return (
    <div className={`border-t-[6px] border-celeste p-6 text-blanco sm:p-8 ${tone === 'darker' ? 'bg-marino-claro' : 'bg-marino'}`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-celeste">Por jugador</p>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-extrabold text-bruma">USD</span>
        <span className="text-7xl font-extrabold leading-none tabular-nums sm:text-8xl">{usd(PRICE_MONTH, 2)}</span>
        <span className="text-lg font-bold text-bruma">/ mes</span>
      </p>
      <p className="mt-3 text-lg font-bold">{`USD ${usd(PRICE_YEAR)} al año por jugador`}</p>

      {/* Quién paga: el punto clave del modelo */}
      <div className="mt-6 flex items-start gap-3 border-t-2 border-linea pt-5">
        <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-celeste" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 5h18v14H3zM7 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M14 9h4M14 13h4" />
        </svg>
        <p className="leading-relaxed text-bruma">
          Lo paga <strong className="text-blanco">cada jugador</strong> cuando activa su credencial digital de juego.
        </p>
      </div>
      {children}
    </div>
  )
}
