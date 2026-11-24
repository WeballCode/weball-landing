import { useEffect, useState } from 'react'
import { tareas } from '../tareas.js'
import { Celular, Notebook } from './Dispositivos.jsx'
import Panel from './Panel.jsx'
import { prefersReducedMotion, useInView } from './motion.jsx'

// La escena de la portada: en el celular le pedís algo a tu IA; en la notebook, el panel de Weball se completa solo.
// Pasa por las 4 tareas en loop; con los botones de abajo se elige una.

const DURACION = 12500
const T = { enviado: 2100, pensando: 2300, confirma: 3100, si: 4300, paso: 4900, pasoCada: 700, respuesta: 7300 }
const LISTO = T.paso + 3 * T.pasoCada

function Burbuja({ yo, children }) {
  return (
    <div
      className={`msg-in max-w-[80%] px-3.5 py-2 text-[15px] leading-[1.3] ${
        yo ? 'ml-auto rounded-[20px] rounded-br-[6px] bg-celeste-profundo text-white' : 'rounded-[20px] rounded-bl-[6px] bg-niebla text-marino'
      }`}
    >
      {children}
    </div>
  )
}

function Chat({ c, t }) {
  const escrito = c.pedido.slice(0, Math.floor((Math.min(t, T.enviado - 150) / (T.enviado - 150)) * c.pedido.length))
  const enviado = t >= T.enviado

  return (
    <div className="flex flex-col bg-white font-[Inter,system-ui,sans-serif]" style={{ height: 720 }}>
      {/* Barra de estado e isla */}
      <div className="relative flex h-12 items-center justify-between px-7 pt-1 text-[14px] font-semibold text-marino">
        <span>9:30</span>
        <span className="absolute top-2.5 left-1/2 h-[30px] w-[100px] -translate-x-1/2 rounded-full bg-marino" />
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 18 12" className="h-3 w-4" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2" width="3" height="10" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
          <span className="h-3 w-6 rounded-[4px] border border-marino/40 p-[1.5px]"><span className="block h-full w-4/5 rounded-[2px] bg-marino" /></span>
        </span>
      </div>

      {/* Encabezado del chat */}
      <div className="flex flex-col items-center gap-1 border-b border-black/5 pt-2 pb-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[conic-gradient(from_180deg,#3fb6ff,#0b6fcc,#032639,#bfe6ff,#3fb6ff)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z" /></svg>
        </span>
        <span className="text-[13px] font-semibold text-marino">Tu IA</span>
        <span className="flex items-center gap-1 text-[11px] text-celeste-profundo">
          <span className="h-1.5 w-1.5 rounded-full bg-celeste" /> Conectada a Weball
        </span>
      </div>

      {/* Mensajes */}
      <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden px-3.5 pb-3">
        {enviado && <Burbuja yo>{c.pedido}</Burbuja>}
        {t >= T.pensando && t < T.confirma && (
          <div className="msg-in flex w-16 gap-1 rounded-[20px] bg-niebla px-4 py-3.5">
            {[0, 1, 2].map((k) => <span key={k} className="dot h-2 w-2 rounded-full bg-acero" style={{ animationDelay: `${k * 150}ms` }} />)}
          </div>
        )}
        {t >= T.confirma && <Burbuja>{c.confirma}</Burbuja>}
        {t >= T.si && <Burbuja yo>Sí, dale.</Burbuja>}
        {t >= T.paso && (
          <div className="msg-in w-[86%] rounded-2xl border border-marino/10 bg-niebla px-3.5 py-3 text-[13px]">
            <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-acero">
              <img src="./isotipo.png" alt="" className="h-4 w-4" /> Weball
            </p>
            <ul className="flex flex-col gap-1.5">
              {c.pasos.map((p, i) => {
                const desde = T.paso + i * T.pasoCada
                if (t < desde) return null
                const listo = t >= desde + T.pasoCada
                return (
                  <li key={p} className="msg-in flex items-center gap-2">
                    {listo ? (
                      <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-celeste-profundo"><circle cx="8" cy="8" r="8" fill="currentColor" /><path d="M4.5 8.2l2.2 2.2 4.6-4.7" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ) : (
                      <span className="spin h-4 w-4 shrink-0 rounded-full border-2 border-celeste-profundo/25 border-t-celeste-profundo" />
                    )}
                    <span className={listo ? 'text-acero' : 'text-marino'}>{p}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {t >= T.respuesta && <Burbuja>{c.respuesta}</Burbuja>}
      </div>

      {/* Caja para escribir */}
      <div className="flex items-center gap-2 px-3 pb-7">
        <div className="flex min-h-10 flex-1 items-center rounded-[20px] border border-black/15 px-3.5 py-2 text-[15px] leading-snug">
          {enviado || !escrito ? <span className="text-bruma">Mensaje</span> : <span className="text-marino">{escrito}</span>}
          {!enviado && <span className="caret ml-px inline-block h-4 w-[2px] bg-celeste-profundo" />}
        </div>
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${escrito && !enviado ? 'bg-celeste-profundo' : 'bg-bruma'}`}>
          <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
    </div>
  )
}

export default function Showcase() {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const quieto = prefersReducedMotion()
  const [escena, setEscena] = useState(0)
  const [vuelta, setVuelta] = useState(0)
  const [t, setT] = useState(quieto ? 99999 : 0)

  useEffect(() => {
    if (!inView || quieto) return
    const start = performance.now() - t
    const id = setInterval(() => {
      const now = performance.now() - start
      if (now >= DURACION) {
        clearInterval(id)
        setT(0)
        setEscena((e) => (e + 1) % tareas.length)
      } else setT(now)
    }, 50)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, escena, vuelta, quieto])

  const elegir = (i) => {
    setEscena(i)
    setT(quieto ? 99999 : 0)
    setVuelta((v) => v + 1)
  }

  const tarea = tareas[escena]
  const k = `${escena}-${vuelta}`

  return (
    <div ref={ref}>
      <div className="relative mx-auto max-w-5xl">
        {/* Notebook con el panel real */}
        <Notebook className="mx-[4%] sm:mr-[18%] sm:ml-[3%]">
          <Panel key={k} panel={tarea.panel} listo={t >= LISTO} />
        </Notebook>

        {/* Celular con la IA, adelante a la derecha */}
        <div className="relative z-10 mx-auto -mt-16 w-[66%] max-w-[300px] sm:absolute sm:right-0 sm:bottom-[-6%] sm:mt-0 sm:w-[27%] sm:max-w-none">
          <Celular>
            <Chat key={k} c={tarea.chat} t={t} />
          </Celular>
        </div>
      </div>

      {/* Selector de tareas, estilo control segmentado */}
      <div className="mt-10 flex justify-center sm:mt-20">
        <div className="inline-flex rounded-full bg-fondo p-1" role="tablist" aria-label="Qué le pedís a tu IA">
          {tareas.map((x, i) => (
            <button
              key={x.slug}
              type="button"
              role="tab"
              aria-selected={i === escena}
              onClick={() => elegir(i)}
              className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition sm:px-5 sm:text-sm ${
                i === escena ? 'bg-white text-tinta shadow-[0_1px_4px_rgba(0,0,0,0.12)]' : 'text-gris hover:text-tinta'
              }`}
            >
              {x.corto}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
