import { useEffect, useRef, useState } from 'react'
import { cargarCalendly, urlCalendly } from '../links.js'

// Ventana de "Probar con mi liga", en pasos como lazo.us y sin salir de la web:
//  1) Tus datos  →  2) Elegí horario (Calendly adentro de la ventana, con los datos ya cargados)  →  3) ¡Listo!
// Se abre desde cualquier botón con abrirAgenda() (links.js), que avisa con el evento "abrir-agenda".

function Campo({ label, opcional, ...props }) {
  return (
    <label className="block">
      <span className="text-[14px] font-semibold text-tinta">
        {label} {opcional ? <span className="font-normal text-gris-claro">(opcional)</span> : <span className="text-celeste-profundo">*</span>}
      </span>
      <input
        {...props}
        required={!opcional}
        className="mt-1.5 block w-full rounded-xl border border-marino/15 bg-white px-4 py-3 text-[16px] text-tinta outline-none transition focus:border-celeste-profundo focus:ring-4 focus:ring-celeste/25"
      />
    </label>
  )
}

// Indicador de pasos: "1 Tus datos ─── 2 Elegí horario"
function Pasos({ paso }) {
  const pasos = ['Tus datos', 'Elegí horario']
  return (
    <ol className="flex items-center justify-center gap-3 pr-10 sm:pr-0">
      {pasos.map((p, i) => {
        const hecho = paso > i + 1
        const actual = paso === i + 1
        return (
          <li key={p} className="flex items-center gap-3">
            {i > 0 && <span className={`h-px w-8 sm:w-16 ${paso > 1 ? 'bg-celeste-profundo' : 'bg-marino/15'}`} />}
            <span className="flex items-center gap-2">
              <span
                className={`grid h-7 w-7 place-items-center rounded-full text-[13px] font-bold ${
                  hecho ? 'bg-celeste-profundo text-white' : actual ? 'border-2 border-celeste-profundo text-celeste-profundo' : 'border-2 border-marino/15 text-gris-claro'
                }`}
              >
                {hecho ? '✓' : i + 1}
              </span>
              <span className={`text-[13px] font-semibold tracking-wide uppercase ${actual || hecho ? 'text-tinta' : 'text-gris-claro'}`}>{p}</span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

export default function AgendaModal() {
  const [abierta, setAbierta] = useState(false)
  const [paso, setPaso] = useState(1)
  const [datos, setDatos] = useState({ nombre: '', apellido: '', email: '', liga: '' })
  const primero = useRef(null)
  const agenda = useRef(null)

  useEffect(() => {
    const abrir = () => {
      setPaso(1)
      setAbierta(true)
      cargarCalendly().catch(() => {}) // se va descargando mientras completan los datos
    }
    window.addEventListener('abrir-agenda', abrir)
    return () => window.removeEventListener('abrir-agenda', abrir)
  }, [])

  // Con la ventana abierta: la página de atrás no se mueve, el cursor va al primer campo y Esc cierra
  useEffect(() => {
    if (!abierta) return
    const antes = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    primero.current?.focus()
    const tecla = (e) => e.key === 'Escape' && setAbierta(false)
    window.addEventListener('keydown', tecla)
    return () => {
      document.body.style.overflow = antes
      window.removeEventListener('keydown', tecla)
    }
  }, [abierta])

  // Paso 2: Calendly adentro de la ventana. Cuando la persona confirma el horario, pasamos al paso 3.
  useEffect(() => {
    if (!abierta || paso !== 2) return
    const url = urlCalendly(datos)
    cargarCalendly()
      .then((Calendly) => {
        if (agenda.current) Calendly.initInlineWidget({ url, parentElement: agenda.current })
      })
      .catch(() => window.open(url, '_blank', 'noopener'))
    const aviso = (e) => {
      if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.event_scheduled') setPaso(3)
    }
    window.addEventListener('message', aviso)
    return () => window.removeEventListener('message', aviso)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierta, paso])

  if (!abierta) return null

  const cambiar = (campo) => (e) => setDatos({ ...datos, [campo]: e.target.value })
  const seguir = (e) => {
    e.preventDefault()
    setPaso(2)
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-marino/55 p-0 backdrop-blur-md sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && setAbierta(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Probar Weball con mi liga"
        className={`msg-in relative w-full bg-white text-left shadow-[0_40px_100px_-20px_rgba(3,38,57,0.5)] transition-[max-width] duration-300 sm:rounded-[1.75rem] ${
          paso === 2 ? 'min-h-full max-w-[1000px] sm:min-h-0' : 'min-h-full max-w-[540px] sm:min-h-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setAbierta(false)}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-fondo text-tinta transition hover:bg-niebla"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="border-b border-marino/10 px-5 py-5">
          {paso < 3 ? <Pasos paso={paso} /> : <p className="text-center text-[13px] font-semibold tracking-wide text-celeste-profundo uppercase">Reunión agendada</p>}
        </div>

        {paso === 1 && (
          <form onSubmit={seguir} className="p-7 sm:p-10">
            <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight">Probá Weball con tu liga.</h2>
            <p className="mt-2 text-[1.02rem] leading-snug text-gris">Dejanos tus datos y elegí día y horario. Son 30 minutos por videollamada.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <Campo label="Nombre" ref={primero} value={datos.nombre} onChange={cambiar('nombre')} autoComplete="given-name" />
              <Campo label="Apellido" value={datos.apellido} onChange={cambiar('apellido')} autoComplete="family-name" />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <Campo label="Email" type="email" value={datos.email} onChange={cambiar('email')} autoComplete="email" />
              <Campo label="Tu liga" opcional value={datos.liga} onChange={cambiar('liga')} placeholder="Ej.: Liga de Futsal del Oeste" />
            </div>
            <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-celeste px-6 py-4 text-[1.05rem] font-semibold text-marino transition hover:bg-celeste-claro">
              Elegir día y horario <span aria-hidden="true">→</span>
            </button>
          </form>
        )}

        {paso === 2 && (
          <div>
            <div className="flex items-center justify-between gap-3 px-5 pt-4 sm:px-8">
              <button type="button" onClick={() => setPaso(1)} className="text-[14px] font-medium text-accion hover:underline">
                ‹ Cambiar mis datos
              </button>
              <p className="truncate text-[13px] text-gris">{datos.email}</p>
            </div>
            {/* Acá adentro se dibuja Calendly */}
            <div ref={agenda} className="h-[calc(100dvh-140px)] min-w-[280px] sm:h-[680px]" />
          </div>
        )}

        {paso === 3 && (
          <div className="p-7 text-center sm:p-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-celeste-claro/60 text-3xl text-celeste-profundo">✓</span>
            <h2 className="mt-5 text-[1.9rem] leading-tight font-bold tracking-tight">¡Listo, {datos.nombre}!</h2>
            <p className="mx-auto mt-2 max-w-sm text-[1.05rem] leading-snug text-gris">
              Te mandamos la invitación a {datos.email}. Nos vemos en la videollamada para mostrarte tu liga funcionando con tu IA.
            </p>
            <button type="button" onClick={() => setAbierta(false)} className="mt-7 rounded-full bg-celeste px-8 py-3.5 font-semibold text-marino transition hover:bg-celeste-claro">
              Volver a la web
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
