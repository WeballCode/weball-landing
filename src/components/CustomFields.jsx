// Pieza destacada de Fichajes: un campo donde se tipean solos los datos extra que pide la liga
// y cada uno se suma como etiqueta. Cierra con "Lo que vos quieras" y vuelve a empezar.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView } from './motion.jsx'

const fields = ['Talle de remera', 'Talle de zapatillas', 'Obra social']
const TYPE_MS = 55
const PAUSE_MS = 450
const HOLD_MS = 2800

export default function CustomFields() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = prefersReducedMotion()
  const [added, setAdded] = useState(reduced ? fields.length : 0)
  const [typed, setTyped] = useState(0)
  const [pressing, setPressing] = useState(false)

  const done = added >= fields.length
  const current = fields[added] || ''

  useEffect(() => {
    if (!inView || reduced) return
    let timer
    if (done) {
      // Se queda un rato con todo armado y vuelve a empezar
      timer = setTimeout(() => {
        setAdded(0)
        setTyped(0)
      }, HOLD_MS)
    } else if (typed < current.length) {
      timer = setTimeout(() => setTyped((t) => t + 1), TYPE_MS)
    } else {
      timer = setTimeout(() => {
        setPressing(true)
        setTimeout(() => {
          setPressing(false)
          setAdded((a) => a + 1)
          setTyped(0)
        }, 180)
      }, PAUSE_MS)
    }
    return () => clearTimeout(timer)
  }, [inView, reduced, done, typed, current.length])

  return (
    <div ref={ref} className="w-full max-w-lg bg-celeste p-5 text-marino">
      <p className="text-lg font-extrabold uppercase leading-tight">Sumá los datos que vos quieras</p>

      {/* Campo donde se tipea */}
      <div className="mt-4 flex items-stretch gap-2" aria-hidden="true">
        <div className="flex min-w-0 flex-1 items-center border-2 border-marino bg-blanco px-3 py-2 text-base font-bold">
          <span className="truncate">{done ? 'Lo que vos quieras' : current.slice(0, typed)}</span>
          {!done && !reduced && <span className="caret ml-0.5 inline-block h-5 w-0.5 bg-marino" />}
        </div>
        <span
          className={`flex items-center bg-marino px-4 text-sm font-bold uppercase tracking-wide text-celeste transition ${
            pressing ? 'scale-95' : ''
          }`}
        >
          Agregar
        </span>
      </div>

      {/* Datos sumados */}
      <ul className="mt-4 flex min-h-[4.5rem] flex-wrap content-start gap-2" aria-label="Datos que la liga puede pedir">
        {fields.slice(0, added).map((f) => (
          <li key={f} className="chip-in flex items-center gap-1.5 bg-marino px-3 py-1.5 text-sm font-bold text-blanco">
            <span className="text-celeste" aria-hidden="true">+</span>
            {f}
          </li>
        ))}
        {done && (
          <li className="chip-in flex items-center gap-1.5 border-2 border-marino px-3 py-1 text-sm font-extrabold uppercase">
            + Lo que vos quieras
          </li>
        )}
      </ul>
    </div>
  )
}
