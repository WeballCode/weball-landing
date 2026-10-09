import { useEffect, useState } from 'react'
import ProductSection from './ProductSection.jsx'
import { LigaDrawing, ligaScenes } from './LigaVisual.jsx'
import { Icon } from './ui.jsx'
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

function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 shrink-0 text-celeste-profundo ${className}`} aria-hidden="true">
      <path d="M4 12h12M12 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

// Flujo de pasos: dos filas de tres tarjetas unidas por flechas; el paso activo se resalta
function StepsFlow({ active }) {
  const rows = [steps.slice(0, 3), steps.slice(3)]
  return (
    <div className="border-t-[6px] border-marino bg-blanco p-6 sm:p-8">
      <p className="border-b-4 border-marino pb-4 text-sm font-medium uppercase tracking-[0.2em] text-celeste-profundo">
        Todo en un solo lugar
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {rows.map((row, r) => (
          <div key={r} className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {row.map((s, j) => {
              const i = r * 3 + j
              const on = i === active
              return (
                <div key={s.text} className="contents">
                  <Reveal
                    delay={200 + i * 100}
                    className={`flex flex-col items-center gap-3 px-3 py-4 text-center transition-colors duration-500 ${
                      on ? 'bg-celeste-claro' : 'bg-niebla'
                    }`}
                  >
                    <Icon name={s.icon} className={`h-8 w-8 ${on ? 'text-marino' : 'text-celeste-profundo'}`} />
                    <p className="text-sm font-bold leading-snug">{s.text}</p>
                  </Reveal>
                  {j < 2 && <Arrow className="hidden self-center sm:block" />}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Liga() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza de paso solo mientras la sección se ve; el dibujo y las tarjetas van juntos
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % ligaScenes.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  return (
    <ProductSection
      id="liga"
      light
      icon="liga"
      audience="Weball Liga"
      name="Ligas"
      title="Organizá tu liga en minutos."
      aside={<StepsFlow active={reduced ? -1 : index} />}
      cta={{ label: 'Quiero Weball en mi liga', href: '#contacto' }}
      visual={
        <div ref={ref} className="w-full max-w-md" role="img" aria-label={`Weball Liga, paso ${index + 1}: ${steps[index].text}`}>
          <div key={round} className="format-enter">
            <LigaDrawing index={index} play={inView} />
          </div>
        </div>
      }
    />
  )
}
