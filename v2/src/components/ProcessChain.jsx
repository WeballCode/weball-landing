// Tira compacta con los 8 procesos, arriba de cada página de proceso, con el actual resaltado.
// (La flecha grande de la principal está en ProcessFlow.jsx.)
import { useEffect, useRef } from 'react'
import { procesos, procesoHref, nn } from '../procesos.js'

export function ProcessStrip({ current }) {
  const listRef = useRef(null)

  // En pantallas angostas la tira se desliza: si el proceso actual no entra, arranca mostrándolo
  useEffect(() => {
    const list = listRef.current
    const el = list?.querySelector('[aria-current="page"]')
    if (el && el.offsetLeft + el.offsetWidth > list.clientWidth) list.scrollLeft = el.offsetLeft - 16
  }, [])

  return (
    <nav aria-label="Los 8 procesos" className="border-b border-linea bg-marino-claro">
      <ol ref={listRef} className="relative mx-auto flex max-w-6xl gap-0.5 overflow-x-auto px-4 py-3 sm:px-6 lg:justify-between">
        {procesos.map((p, i) => {
          const on = p.slug === current
          return (
            <li key={p.slug} className="flex shrink-0 items-center gap-1">
              {i > 0 && (
                <span aria-hidden="true" className="text-xs text-linea">
                  ⟷
                </span>
              )}
              <a
                href={procesoHref(p.slug)}
                aria-current={on ? 'page' : undefined}
                className={`flex items-center gap-1.5 px-2 py-2 text-sm font-bold uppercase whitespace-nowrap transition ${
                  on ? 'bg-celeste text-marino' : 'text-bruma hover:text-blanco'
                }`}
              >
                <span className="tabular-nums">{nn(i)}</span>
                {p.short}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
