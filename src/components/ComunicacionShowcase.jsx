// Comunicación: un panel de la liga que rota entre Notificaciones, Información visible y Usuarios.
// Los interruptores se van prendiendo solos; abajo, el recuadro celeste con la parte que se está viendo.
import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView } from './motion.jsx'

const sections = [
  {
    name: 'Notificaciones',
    text: 'Qué se envía y cuándo.',
    rows: [
      { label: 'Resultado final del partido', on: true },
      { label: 'Cambio de horario o cancha', on: true },
      { label: 'Recordatorio 24 h antes', on: false },
      { label: 'Sanciones del tribunal', on: true },
    ],
  },
  {
    name: 'Información visible',
    text: 'Qué se muestra en la app.',
    rows: [
      { label: 'Resultados y tablas', on: true },
      { label: 'Estadísticas de jugadores', on: true },
      { label: 'Fotos y videos', on: true },
      { label: 'Datos personales', on: false },
    ],
  },
  {
    name: 'Usuarios',
    text: 'Control de accesos y permisos.',
    rows: [
      { label: 'Administradores', access: 'Todo' },
      { label: 'Delegados de clubes', access: 'Su club' },
      { label: 'Árbitros', access: 'Sus partidos' },
      { label: 'Jugadores', access: 'Su perfil' },
    ],
  },
]
const STEP_MS = 3800
const ROW_MS = 450

function Toggle({ on }) {
  return (
    <span
      className={`relative inline-block h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${on ? 'bg-marino' : 'bg-bruma'}`}
      aria-hidden="true"
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full transition-all duration-300 ${
          on ? 'left-[1.125rem] bg-celeste' : 'left-0.5 bg-blanco'
        }`}
      />
    </span>
  )
}

function Panel({ section, active }) {
  // Cuántas filas ya se "activaron" (interruptor prendido o acceso asignado)
  const [done, setDone] = useState(active ? 0 : section.rows.length)
  useEffect(() => {
    if (!active) return
    const timers = section.rows.map((_, i) => setTimeout(() => setDone(i + 1), 500 + i * ROW_MS))
    return () => timers.forEach(clearTimeout)
  }, [active, section])

  return (
    <div className="border-2 border-marino bg-blanco text-marino">
      <div className="flex items-center justify-between gap-3 bg-marino px-4 py-3">
        <p className="text-sm font-extrabold uppercase tracking-wide text-blanco">{section.name}</p>
        <p className="text-xs font-medium text-celeste">Panel de la liga</p>
      </div>
      <ul>
        {section.rows.map((r, i) => (
          <li
            key={r.label}
            className={`chip-in flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-bold ${i > 0 ? 'border-t border-niebla' : ''}`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {r.label}
            {r.access ? (
              <span
                className={`shrink-0 px-2 py-0.5 text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${
                  i < done ? 'bg-celeste text-marino' : 'bg-niebla text-niebla'
                }`}
              >
                {r.access}
              </span>
            ) : (
              <Toggle on={r.on && i < done} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ComunicacionShowcase() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % sections.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  const current = sections[index]

  return (
    <div ref={ref} className="flex flex-col gap-8">
      <div key={`p-${round}`} className="format-enter w-full max-w-sm" aria-label={`Panel de la liga: ${current.name}`}>
        <Panel section={current} active={inView && !reduced} />
      </div>

      <div className="bg-celeste p-4 text-marino">
        <div key={`t-${round}`} className="format-enter flex items-center gap-4">
          <span className="text-5xl font-extrabold leading-none text-blanco">{`0${index + 1}`}</span>
          <div>
            <p className="text-lg font-extrabold uppercase leading-tight">{current.name}</p>
            <p className="text-sm font-medium leading-snug">{current.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
