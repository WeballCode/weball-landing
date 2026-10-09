import { useEffect, useState } from 'react'
import { LigaDrawing, ligaScenes } from './LigaVisual.jsx'
import { Icon, Label, Section, Title } from './ui.jsx'
import { Reveal, prefersReducedMotion, useInView } from './motion.jsx'

// Los 6 pasos de Weball Liga, en el mismo orden que la animación
const steps = [
  { icon: 'club', text: 'Cargá e inscribí a los clubes.' },
  { icon: 'credencial', text: 'Fichá a los jugadores desde el celular.' },
  { icon: 'liga', text: 'Creá los torneos y fixtures.' },
  { icon: 'programar', text: 'Programá los partidos.' },
  { icon: 'envivo', text: 'Cargá los resultados en vivo.' },
  { icon: 'mundo', text: 'Resultados publicados al instante.' },
]
const STEP_MS = 3600

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="hidden h-5 w-5 shrink-0 self-center text-celeste-profundo lg:block" aria-hidden="true">
      <path d="M4 12h12M12 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

export default function Liga() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza de paso solo mientras la sección se ve; la animación y las tarjetas van juntas
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % ligaScenes.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  return (
    <Section id="liga" light>
      {/* Encabezado: producto y título */}
      <Label tone="light" icon="liga">
        Weball Liga
      </Label>
      <Title>Ligas</Title>

      {/* Recuadro blanco: título, animación, pasos y cierre */}
      <Reveal delay={200} className="mt-6 border-t-[6px] border-marino bg-blanco p-6">
        <h3 className="text-2xl font-extrabold uppercase leading-none sm:text-3xl">Organizá tu liga en minutos</h3>

        <div
          ref={ref}
          className="mx-auto mt-4 w-full max-w-[17rem]"
          role="img"
          aria-label={`Weball Liga, paso ${index + 1}: ${steps[index].text}`}
        >
          <div key={round} className="format-enter">
            <LigaDrawing index={index} play={inView} />
          </div>
        </div>

        {/* Los 6 pasos en una fila (en pantallas chicas, en grilla) */}
        <ol className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:items-stretch lg:gap-2">
          {steps.map((s, i) => {
            const on = !reduced && i === index
            return (
              <li key={s.text} className="contents">
                <div
                  className={`flex flex-col items-center gap-2 px-2 py-3 text-center transition-colors duration-500 lg:flex-1 ${
                    on ? 'bg-celeste-claro' : 'bg-niebla'
                  }`}
                >
                  <Icon name={s.icon} className={`h-7 w-7 ${on ? 'text-marino' : 'text-celeste-profundo'}`} />
                  <p className="text-sm font-bold leading-snug">{s.text}</p>
                </div>
                {i < steps.length - 1 && <Arrow />}
              </li>
            )
          })}
        </ol>

        <p className="mt-4 border-t-4 border-marino pt-3 text-lg font-extrabold uppercase leading-tight">
          Todo en un mismo lugar
        </p>
      </Reveal>

      {/* Botón al final, debajo del recuadro */}
      <Reveal delay={300} className="mt-5 flex flex-col sm:items-start">
        <a
          href="#contacto"
          className="bg-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
        >
          Quiero Weball en mi liga
        </a>
      </Reveal>
    </Section>
  )
}
