import { useEffect, useState } from 'react'
import { LigaDrawing, processScenes } from './LigaVisual.jsx'
import { Icon, Label, Lead, Section, TapHint, Title, ToggleMark } from './ui.jsx'
import { Reveal, prefersReducedMotion, useInView } from './motion.jsx'

// Los 8 procesos de una liga, en orden: cada uno toma lo que deja el anterior.
// `out` es lo que el proceso le entrega al siguiente. Van en el mismo orden que los dibujos.
const steps = [
  {
    title: 'Fichajes y clubes',
    text: 'Clubes y jugadores con su identidad validada: DNI y selfie desde el celular.',
    out: 'Clubes y equipos',
  },
  {
    title: 'Fixture',
    text: 'Un fixture para todas las divisiones y categorías, con la tabla calculada sola.',
    out: 'Los cruces de cada fecha',
  },
  {
    title: 'Programación',
    text: 'Los clubes proponen día, hora y sede; la liga aprueba.',
    out: 'Día, hora y sede',
  },
  {
    title: 'Planillas',
    text: 'Con la lista de buena fe y los suspendidos tachados solos.',
    out: 'La planilla del partido',
  },
  {
    title: 'Árbitros',
    text: 'Designaciones sin choques, confirmadas por WhatsApp.',
    out: 'El árbitro designado',
  },
  {
    title: 'Resultados',
    text: 'El árbitro carga el partido en vivo; tablas y goleadores al instante.',
    out: 'Goles, tarjetas e informes',
  },
  {
    title: 'Tribunal de disciplina',
    text: 'La IA propone la sanción con el artículo de tu reglamento; el tribunal decide.',
    out: 'Sanciones y boletín',
  },
  {
    title: 'Comunicación',
    text: 'App, web, avisos y sponsors: jugadores, clubes y familias se enteran al instante.',
    out: 'Todos informados',
  },
]
const STEP_MS = 4500

export default function Liga() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza solo mientras la sección se ve; tocar un proceso lo muestra y reinicia el tiempo
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % steps.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index, round])

  const go = (i) => {
    setIndex(i)
    setRound((r) => r + 1)
  }

  return (
    <Section id="procesos" light>
      <Label tone="light" icon="liga">
        Los 8 procesos de una liga
      </Label>
      <Title>Del fichaje a la comunicación</Title>
      <Lead tone="light">
        Cada uno toma lo que deja el anterior. Contratalos juntos o sólo los que te faltan.
      </Lead>

      <div ref={ref} className="mt-3 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Los procesos, con el botón al final */}
        <div>
          <TapHint>Tocá cada proceso para verlo</TapHint>
          <ol className="mt-1 flex flex-col">
            {steps.map((s, i) => {
              const on = i === index
              return (
                <li key={s.title} className={`border-marino ${i === 0 ? 'border-t-4' : 'border-t-2 border-niebla'}`}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-expanded={on}
                    className={`group flex w-full cursor-pointer items-baseline gap-4 py-1 text-left transition ${on ? '' : 'hover:text-celeste-profundo'}`}
                  >
                    <span className={`text-xl font-extrabold tabular-nums ${on ? 'text-celeste-profundo' : 'text-acero'}`}>
                      {`0${i + 1}`}
                    </span>
                    <span className={`text-lg font-extrabold uppercase leading-tight ${on ? 'text-marino' : 'text-pizarra'}`}>
                      {s.title}
                    </span>
                    <ToggleMark open={on} />
                  </button>

                  {/* El proceso activo se abre con su frase, lo que entrega y una barrita de tiempo */}
                  <div className={`grid transition-all duration-500 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden pl-12">
                      <p className="pb-3 leading-relaxed text-pizarra">{s.text}</p>
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

          <Reveal delay={300} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#contacto"
              className="bg-marino px-6 py-4 text-center font-bold uppercase tracking-wide whitespace-nowrap text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
            >
              Quiero ver mi liga funcionando
            </a>
            {/* Cada proceso en detalle, en su propia página */}
            <a href="./soluciones.html" className="text-center text-sm font-bold uppercase tracking-wide whitespace-nowrap text-celeste-profundo transition hover:text-marino">
              En detalle →
            </a>
          </Reveal>
        </div>

        {/* La animación del proceso, grande */}
        <Reveal
          delay={200}
          className="order-first flex flex-col border-t-[6px] border-marino bg-blanco p-5 sm:p-7 lg:order-none"
          role="img"
          aria-label={`Proceso ${index + 1}: ${steps[index].title}`}
        >
          <div className="mb-3 flex items-center gap-3 text-celeste-profundo">
            <Icon name="liga" className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              {`Proceso 0${index + 1} · ${steps[index].title}`}
            </span>
          </div>
          <div key={round} className="format-enter flex flex-1 items-center">
            <LigaDrawing index={index} play={inView} scenes={processScenes} />
          </div>
          {/* Lo que este proceso le deja al siguiente */}
          <p className="mt-3 border-t-2 border-niebla pt-3 text-sm font-bold uppercase tracking-wide text-celeste-profundo">
            {`↓ Le entrega al siguiente: ${steps[index].out}`}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
