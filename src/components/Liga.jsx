import { useEffect, useState } from 'react'
import { LigaDrawing, ligaScenes } from './LigaVisual.jsx'
import { Icon, Label, Lead, Section, Title } from './ui.jsx'
import { Reveal, prefersReducedMotion, useInView } from './motion.jsx'

// Paso a paso de Weball Liga: cada paso tiene su etapa, su título, una frase y dos puntos.
// Van en el mismo orden que las escenas de la animación.
const steps = [
  {
    stage: 'Antes de la temporada',
    title: 'Inscribí a los clubes',
    text: 'Cada club se suma con un link y queda todo ordenado.',
    points: ['Inscripción por link', 'Equipos y categorías en orden'],
  },
  {
    stage: 'Fichajes',
    title: 'Fichá desde el celular',
    text: 'El club arma su plantel y cada jugador se ficha solo.',
    points: ['Planteles por categoría', 'Credencial digital al instante'],
  },
  {
    stage: 'Competición',
    title: 'Creá torneos y fixtures',
    text: 'Elegí el formato y armá el fixture de toda la temporada.',
    points: ['Liga, copa, grupos o a medida', 'Fixture listo en minutos'],
  },
  {
    stage: 'Programación',
    title: 'Programá los partidos',
    text: 'Día, hora y cancha de cada partido, con su árbitro.',
    points: ['Calendario de la fecha', 'Árbitros designados'],
  },
  {
    stage: 'En el partido',
    title: 'Cargá los resultados en vivo',
    text: 'El árbitro carga el partido desde el celular, gol a gol.',
    points: ['Marcador en vivo', 'Goles con su minuto'],
  },
  {
    stage: 'Después del partido',
    title: 'Resultados publicados al instante',
    text: 'La tabla se actualiza sola y todos lo ven en la app.',
    points: ['Tabla de posiciones al día', 'En la app y en la web'],
  },
]
const STEP_MS = 4500

export default function Liga() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza solo mientras la sección se ve; tocar un paso lo muestra y reinicia el tiempo
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % ligaScenes.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index, round])

  const go = (i) => {
    setIndex(i)
    setRound((r) => r + 1)
  }

  return (
    <Section id="liga" light>
      <Label tone="light" icon="liga">
        Weball Liga
      </Label>
      <Title>Ligas</Title>
      <Lead tone="light">Organizá tu liga en minutos. Todo en un mismo lugar.</Lead>

      <div ref={ref} className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Paso a paso, con el botón al final */}
        <div>
        <ol className="flex flex-col">
          {steps.map((s, i) => {
            const on = i === index
            return (
              <li key={s.title} className={`border-marino ${i === 0 ? 'border-t-4' : 'border-t-2 border-niebla'}`}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-expanded={on}
                  className={`flex w-full items-baseline gap-4 py-2.5 text-left transition ${on ? '' : 'hover:text-celeste-profundo'}`}
                >
                  <span className={`text-2xl font-extrabold tabular-nums ${on ? 'text-celeste-profundo' : 'text-acero'}`}>
                    {`0${i + 1}`}
                  </span>
                  <span className="min-w-0">
                    {/* La etapa se muestra solo en el paso abierto, para que la lista sea corta */}
                    {on && <span className="block text-xs font-medium uppercase tracking-[0.2em] text-acero">{s.stage}</span>}
                    <span className={`block text-lg font-extrabold uppercase leading-tight ${on ? 'text-marino' : 'text-pizarra'}`}>
                      {s.title}
                    </span>
                  </span>
                </button>

                {/* El paso activo se abre con su frase, sus puntos y una barrita de tiempo */}
                <div className={`grid transition-all duration-500 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden pl-12">
                    <p className="leading-relaxed text-pizarra">{s.text}</p>
                    <ul className="mt-2 flex flex-col gap-1 pb-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm font-bold">
                          <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-celeste-profundo" aria-hidden="true">
                            <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                    {on && !reduced && (
                      <span className="mb-3 block h-1 bg-blanco">
                        <span
                          key={round}
                          className="step-progress block h-full bg-celeste"
                          style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: inView ? 'running' : 'paused' }}
                        />
                      </span>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <Reveal delay={300} className="mt-5 flex flex-col sm:items-start">
          <a
            href="#contacto"
            className="bg-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
          >
            Quiero Weball en mi liga
          </a>
        </Reveal>
        </div>

        {/* La animación del paso, grande */}
        <Reveal
          delay={200}
          className="order-first flex flex-col border-t-[6px] border-marino bg-blanco p-5 sm:p-7 lg:order-none"
          role="img"
          aria-label={`Weball Liga, paso ${index + 1}: ${steps[index].title}`}
        >
          <div className="mb-3 flex items-center gap-3 text-celeste-profundo">
            <Icon name="liga" className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              {`Paso 0${index + 1} · ${steps[index].stage}`}
            </span>
          </div>
          <div key={round} className="format-enter flex flex-1 items-center">
            <LigaDrawing index={index} play={inView} />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
