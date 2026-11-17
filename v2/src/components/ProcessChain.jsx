// Los 8 procesos encadenados. Dos formas:
// - ProcessGrid: tarjetas con el detalle (principal y página de procesos)
// - ProcessStrip: tira compacta arriba de cada página de proceso, con el actual resaltado
import { useEffect, useRef } from 'react'
import { procesos, procesoHref, nn } from '../procesos.js'
import { Icon } from './ui.jsx'
import { Reveal } from './motion.jsx'

export function ProcessGrid({ tone = 'dark' }) {
  const light = tone === 'light'
  return (
    <ol className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: light ? '#d9e2e8' : '#365a70' }}>
      {procesos.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={(i % 4) * 90} className={light ? 'bg-niebla' : 'bg-marino'}>
          <a
            href={procesoHref(p.slug)}
            className={`group flex h-full flex-col p-6 transition ${light ? 'hover:bg-blanco' : 'hover:bg-marino-claro'}`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-4xl font-extrabold tabular-nums ${light ? 'text-celeste-profundo' : 'text-celeste'}`}>{nn(i)}</span>
              <Icon name={p.icon} className={`h-7 w-7 ${light ? 'text-marino' : 'text-bruma'}`} />
            </div>
            <h3 className="mt-4 text-xl font-extrabold uppercase leading-tight">{p.name}</h3>
            <p className={`mt-2 flex-1 leading-relaxed ${light ? 'text-pizarra' : 'text-bruma'}`}>{p.line}</p>
            <span
              className={`mt-5 text-sm font-bold uppercase tracking-wide transition group-hover:translate-x-1 ${
                light ? 'text-celeste-profundo' : 'text-celeste'
              }`}
            >
              Ver el proceso →
            </span>
          </a>
        </Reveal>
      ))}
    </ol>
  )
}

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
