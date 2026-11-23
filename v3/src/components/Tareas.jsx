import { tareas } from '../tareas.js'
import { Reveal } from './motion.jsx'
import { Label, Lead, Section, Title } from './ui.jsx'

// Íconos de línea, uno por tarea
const iconos = {
  inscripcion: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M18 8v6M15 11h6" />
    </>
  ),
  torneo: (
    <>
      <path d="M4 5h5v4H4zM4 15h5v4H4zM15 10h5v4h-5z" />
      <path d="M9 7h3v10H9M12 12h3" />
    </>
  ),
  programacion: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2" />
    </>
  ),
  resultados: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
}

export default function Tareas() {
  return (
    <Section id="tareas">
      <Label>Qué le podés pedir</Label>
      <Title>Toda la gestión de tu liga, en 4 pedidos.</Title>
      <Lead>
        Escribile a tu IA como le escribirías a alguien de tu equipo. Weball hace el trabajo, con los datos de tu liga, y queda todo
        cargado en el sistema.
      </Lead>

      <ol className="mt-14 grid gap-5 md:grid-cols-2">
        {tareas.map((t, i) => (
          <Reveal
            as="li"
            key={t.slug}
            delay={(i % 2) * 120}
            className="group flex flex-col rounded-2xl border border-linea bg-marino-claro p-6 transition hover:border-celeste/60 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-celeste/10 text-celeste">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {iconos[t.slug]}
                </svg>
              </span>
              <span className="font-mono text-4xl font-medium text-blanco/10 transition group-hover:text-celeste/40">0{i + 1}</span>
            </div>
            <h3 className="mt-6 text-2xl font-extrabold leading-tight">{t.titulo}</h3>
            <p className="mt-3 leading-relaxed text-bruma">{t.texto}</p>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-celeste">Por ejemplo</p>
            <ul className="mt-3 flex flex-col gap-2">
              {t.ejemplos.map((e) => (
                <li key={e} className="rounded-xl rounded-bl-sm border border-linea bg-marino px-4 py-2.5 text-[0.95rem] leading-snug">
                  “{e}”
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
