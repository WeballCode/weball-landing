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

  // Cuatro lugares fijos: se ven punteados y se van llenando, así no queda espacio vacío
  const slots = [...fields, 'Lo que vos quieras']

  return (
    <div ref={ref} className="w-full max-w-lg border-t-4 border-celeste bg-marino p-5">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-celeste">Sumá los datos que vos quieras</p>

      {/* Campo donde se tipea */}
      <div className="mt-3 flex items-stretch gap-2" aria-hidden="true">
        <div className="flex min-w-0 flex-1 items-center bg-blanco px-3 py-2 text-base font-bold text-marino">
          <span className="truncate">{done ? 'Lo que vos quieras' : current.slice(0, typed)}</span>
          {!done && !reduced && <span className="caret ml-0.5 inline-block h-5 w-0.5 bg-marino" />}
        </div>
        <span
          className={`flex items-center bg-celeste px-4 text-sm font-bold uppercase tracking-wide text-marino transition ${
            pressing ? 'scale-95' : ''
          }`}
        >
          Agregar
        </span>
      </div>

      {/* Datos sumados */}
      <ul className="mt-3 grid grid-cols-2 gap-2" aria-label="Datos que la liga puede pedir">
        {slots.map((f, i) => {
          const last = i === slots.length - 1
          const filled = last ? done : i < added
          return (
            <li
              key={f}
              className={`flex h-10 min-w-0 items-center gap-1.5 px-3 text-sm font-bold ${
                !filled
                  ? 'border-2 border-dashed border-linea'
                  : last
                    ? 'chip-in border-2 border-celeste uppercase text-celeste'
                    : 'chip-in bg-celeste-claro text-marino'
              }`}
            >
              {filled && (
                <>
                  <span className={last ? '' : 'text-celeste-profundo'} aria-hidden="true">+</span>
                  <span className="truncate">{f}</span>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
