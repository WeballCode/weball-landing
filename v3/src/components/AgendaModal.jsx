import { useEffect, useRef, useState } from 'react'
import { abrirCalendly } from '../links.js'

// Ventana de "Probar con mi liga" (como lazo.us): primero pide los datos y después abre Calendly
// con nombre y email ya cargados, para que la persona sólo elija día y horario.
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

export default function AgendaModal() {
  const [abierta, setAbierta] = useState(false)
  const [datos, setDatos] = useState({ nombre: '', apellido: '', email: '', liga: '' })
  const primero = useRef(null)

  useEffect(() => {
    const abrir = () => setAbierta(true)
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

  if (!abierta) return null

  const cambiar = (campo) => (e) => setDatos({ ...datos, [campo]: e.target.value })
  const enviar = (e) => {
    e.preventDefault()
    setAbierta(false)
    abrirCalendly(datos)
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-marino/55 p-4 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && setAbierta(false)}>
      <form
        onSubmit={enviar}
        role="dialog"
        aria-modal="true"
        aria-labelledby="agenda-titulo"
        className="msg-in relative w-full max-w-[520px] rounded-[1.75rem] bg-white p-7 text-left shadow-[0_40px_100px_-20px_rgba(3,38,57,0.5)] sm:p-10"
      >
        <button
          type="button"
          onClick={() => setAbierta(false)}
          aria-label="Cerrar"
          className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-fondo text-tinta transition hover:bg-niebla"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <h2 id="agenda-titulo" className="pr-10 text-[1.9rem] leading-tight font-bold tracking-tight">Probá Weball con tu liga.</h2>
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
    </div>
  )
}
