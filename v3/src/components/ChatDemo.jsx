import { useEffect, useState } from 'react'
import { tareas } from '../tareas.js'
import { prefersReducedMotion, useInView } from './motion.jsx'

// Chat de la portada: la liga le pide algo a su IA, la IA confirma y Weball lo hace.
// Pasa solo por las 4 tareas; tocando las pestañas se elige una.
// Los textos salen de src/tareas.js.

const DURACION = 12500 // ms que dura cada escena
const T = { enviado: 2300, confirma: 3000, si: 4300, paso: 5000, pasoCada: 800, respuesta: 7600 }

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-verde" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Spinner() {
  return <span className="spin block h-3.5 w-3.5 shrink-0 rounded-full border-2 border-celeste/30 border-t-celeste" aria-hidden="true" />
}

function BurbujaVos({ children }) {
  return (
    <div className="msg-in ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-celeste px-4 py-2.5 text-[0.9rem] leading-snug font-medium text-marino">
      {children}
    </div>
  )
}

function BurbujaIA({ children }) {
  return (
    <div className="msg-in flex max-w-[92%] gap-2.5">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blanco/10 text-xs font-bold text-celeste" aria-hidden="true">
        IA
      </span>
      <div className="min-w-0 flex-1 text-[0.9rem] leading-snug text-blanco">{children}</div>
    </div>
  )
}

function Resultado({ r }) {
  const caja = 'mt-2.5 overflow-hidden rounded-lg border border-linea bg-marino text-[0.8rem]'
  if (r.tipo === 'partidos') {
    return (
      <ul className={caja}>
        {r.filas.map(([a, b]) => (
          <li key={a} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-linea/60 px-3 py-1.5 last:border-0">
            <span className="truncate text-right">{a}</span>
            <span className="font-mono text-[0.7rem] text-bruma">vs</span>
            <span className="truncate">{b}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (r.tipo === 'horarios') {
    return (
      <ul className={caja}>
        {r.filas.map(([h, c, p]) => (
          <li key={h + c} className="flex items-center gap-3 border-b border-linea/60 px-3 py-1.5 last:border-0">
            <span className="font-mono text-celeste">{h}</span>
            <span className="shrink-0 text-bruma">{c}</span>
            <span className="truncate">{p}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (r.tipo === 'tabla') {
    return (
      <ul className={caja}>
        {r.filas.map(([pos, eq, pts]) => (
          <li key={eq} className="flex items-center gap-3 border-b border-linea/60 px-3 py-1.5 last:border-0">
            <span className="w-4 font-mono text-bruma">{pos}</span>
            <span className="flex-1 truncate">{eq}</span>
            <span className="font-mono font-bold text-celeste">{pts} pts</span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <>
      <ul className={caja}>
        {r.filas.map(([eq, n]) => (
          <li key={eq} className="flex items-center justify-between gap-3 border-b border-linea/60 px-3 py-1.5 last:border-0">
            <span className={n ? '' : 'text-bruma'}>{eq}</span>
            <span className="text-bruma">{n}</span>
          </li>
        ))}
      </ul>
      {r.nota && <p className="mt-2 text-[0.8rem] text-bruma">{r.nota}</p>}
    </>
  )
}

export default function ChatDemo() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const quieto = prefersReducedMotion()
  const [escena, setEscena] = useState(0)
  const [t, setT] = useState(quieto ? 99999 : 0)
  const [vuelta, setVuelta] = useState(0) // cambia cada vez que se toca una pestaña, para arrancar de cero

  // Reloj de la escena: avanza mientras el chat está en pantalla
  useEffect(() => {
    if (!inView || quieto) return
    const start = performance.now() - t
    const id = setInterval(() => {
      const now = performance.now() - start
      if (now >= DURACION) {
        setEscena((e) => (e + 1) % tareas.length)
        setT(0)
        clearInterval(id)
      } else {
        setT(now)
      }
    }, 50)
    return () => clearInterval(id)
    // Se reinicia al cambiar de escena
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, escena, vuelta, quieto])

  const elegir = (i) => {
    setEscena(i)
    setT(quieto ? 99999 : 0)
    setVuelta((v) => v + 1)
  }

  const c = tareas[escena].chat
  const escrito = c.pedido.slice(0, Math.floor((Math.min(t, T.enviado - 200) / (T.enviado - 200)) * c.pedido.length))
  const enviado = t >= T.enviado

  return (
    <div ref={ref} className="relative">
      {/* Brillo celeste detrás */}
      <div className="glow pointer-events-none absolute -inset-6 rounded-[2rem] bg-celeste/20 blur-3xl" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-2xl border border-linea bg-marino-claro shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        {/* Barra de arriba */}
        <div className="flex items-center justify-between border-b border-linea px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blanco/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-blanco/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-blanco/15" />
            <span className="ml-2 text-sm font-medium text-bruma">Tu IA</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-verde/10 px-2.5 py-1 text-xs font-medium text-verde">
            <span className="h-1.5 w-1.5 rounded-full bg-verde" />
            Conectada a Weball
          </span>
        </div>

        {/* Conversación: lo último queda siempre abajo, a la vista */}
        <div
          key={`${escena}-${vuelta}`}
          className="flex h-[25rem] flex-col justify-end gap-3 overflow-hidden px-4 pt-4 pb-3 sm:h-[27rem]"
          aria-live="polite"
        >
          {enviado && <BurbujaVos>{c.pedido}</BurbujaVos>}
          {t >= T.confirma && <BurbujaIA>{c.confirma}</BurbujaIA>}
          {t >= T.si && <BurbujaVos>Sí, dale.</BurbujaVos>}
          {t >= T.paso && (
            <BurbujaIA>
              <ul className="msg-in flex flex-col gap-1.5 rounded-lg border border-linea/70 bg-marino-hondo/60 px-3 py-2.5 text-[0.8rem]">
                {c.pasos.map((p, i) => {
                  const desde = T.paso + i * T.pasoCada
                  if (t < desde) return null
                  const listo = t >= desde + T.pasoCada
                  return (
                    <li key={p} className="msg-in flex items-center gap-2">
                      {listo ? <Check /> : <Spinner />}
                      <span className={listo ? 'text-bruma' : 'text-blanco'}>{p}</span>
                    </li>
                  )
                })}
              </ul>
            </BurbujaIA>
          )}
          {t >= T.respuesta && (
            <BurbujaIA>
              <p>{c.respuesta}</p>
              <Resultado r={c.resultado} />
            </BurbujaIA>
          )}
        </div>

        {/* Caja para escribir */}
        <div className="border-t border-linea p-3">
          <div className="flex min-h-12 items-center gap-2 rounded-xl border border-linea bg-marino px-3.5 py-2.5 text-[0.9rem]">
            <span className="flex-1 leading-snug text-blanco">
              {enviado ? <span className="text-bruma/60">Pedile algo a tu IA…</span> : escrito}
              {!enviado && <span className="caret ml-px inline-block h-4 w-0.5 translate-y-0.5 bg-celeste" />}
            </span>
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${escrito && !enviado ? 'bg-celeste text-marino' : 'bg-blanco/10 text-bruma'}`} aria-hidden="true">
              <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Pestañas: las 4 tareas */}
      <div className="relative mt-4 grid grid-cols-4 gap-1.5" role="tablist" aria-label="Qué le pedís a tu IA">
        {tareas.map((x, i) => (
          <button
            key={x.slug}
            type="button"
            role="tab"
            aria-selected={i === escena}
            onClick={() => elegir(i)}
            className={`relative overflow-hidden rounded-lg border px-1 pt-2 pb-2.5 text-center text-[0.7rem] font-bold uppercase leading-tight tracking-wide transition sm:text-xs ${
              i === escena ? 'border-celeste text-blanco' : 'border-linea text-bruma hover:text-blanco'
            }`}
          >
            <span className="block font-mono text-celeste">0{i + 1}</span>
            {x.corto}
            {i === escena && !quieto && (
              <span
                key={`${escena}-${vuelta}`}
                className="step-progress absolute bottom-0 left-0 h-0.5 bg-celeste"
                style={{ animationDuration: `${DURACION}ms`, animationPlayState: inView ? 'running' : 'paused' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
