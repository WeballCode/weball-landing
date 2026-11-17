// La flecha de los 8 procesos: cruza la pantalla de punta a punta, del fichaje a la comunicación.
// - Pantallas grandes: flecha horizontal, con las tarjetas alternando arriba y abajo.
// - Celular y tablet: flecha vertical, con las tarjetas al costado.
// Sobre la flecha va lo que cada proceso le pasa al siguiente (`pasa` en src/procesos.js),
// y un punto la recorre encendiendo cada proceso. Pasar el mouse por un proceso lo resalta.
import { useEffect, useState } from 'react'
import { procesos, procesoHref, nn } from '../procesos.js'
import { Icon } from './ui.jsx'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

const N = procesos.length
const STEP_MS = 1300 // tiempo en cada proceso
const DRAW_MS = 1600 // lo que tarda en dibujarse la flecha

// Recorrido del punto: -1 = todavía no arrancó, 0..N-1 = en cada proceso, N = en la punta de la flecha
function useTour(play, paused) {
  const [step, setStep] = useState(-1)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (!play) return
    if (reduced) {
      setStep(N)
      return
    }
    const t = setTimeout(() => setStep(0), DRAW_MS + 200)
    return () => clearTimeout(t)
  }, [play, reduced])

  useEffect(() => {
    if (step < 0 || paused || reduced) return
    const t = setTimeout(() => setStep((s) => (s + 1) % (N + 1)), step === N ? 1800 : STEP_MS)
    return () => clearTimeout(t)
  }, [step, paused, reduced])

  return step
}

// Estado de cada proceso según por dónde va el punto
function stateOf(i, step, hover) {
  const current = hover ?? step
  return {
    current: i === current,
    lit: step >= N || i <= step, // los que el punto ya recorrió quedan encendidos
  }
}

function Node({ i, current, lit, on, delay, className = '' }) {
  return (
    <span
      className={`grid place-items-center rounded-full border-[3px] font-extrabold tabular-nums transition duration-500 ${
        current
          ? 'scale-125 border-blanco bg-celeste text-marino shadow-[0_0_0_8px_rgba(63,182,255,0.25)]'
          : lit
            ? 'border-celeste bg-celeste text-marino'
            : 'border-celeste bg-marino text-celeste'
      } ${on ? 'opacity-100' : 'scale-50 opacity-0'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {nn(i)}
    </span>
  )
}

function CardBody({ p, current }) {
  return (
    <>
      <span className="flex items-center justify-between">
        <Icon name={p.icon} className={`h-6 w-6 transition ${current ? 'text-celeste' : 'text-bruma'}`} />
        <span aria-hidden="true" className={`font-bold transition ${current ? 'translate-x-1 text-celeste' : 'text-linea'}`}>
          →
        </span>
      </span>
      <span className="mt-2 block text-base font-extrabold uppercase leading-tight">{p.name}</span>
      <span className="mt-1.5 block text-sm leading-snug text-bruma">{p.tag}</span>
    </>
  )
}

// Pantallas grandes: flecha horizontal de borde a borde
function Horizontal({ on, step, hover, setHover }) {
  const reveal = (i) => (on && step < 0 ? `${300 + i * 160}ms` : '0ms')
  const dotLeft = step < 0 ? 0 : step >= N ? 100 : ((step + 0.5) / N) * 100

  return (
    <div className="relative hidden h-[36rem] xl:block">
      {/* La flecha: una franja celeste que se dibuja de izquierda a derecha y termina en punta */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center">
        <span
          className={`h-3 flex-1 origin-left bg-linear-to-r from-celeste/20 via-celeste to-celeste transition-transform ease-out ${
            on ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transitionDuration: `${DRAW_MS}ms` }}
        />
        <svg
          viewBox="0 0 40 56"
          className={`-ml-px h-14 w-10 shrink-0 text-celeste transition-opacity duration-300 ${on ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: on ? `${DRAW_MS - 200}ms` : '0ms' }}
        >
          <path d="M0 0L40 28L0 56z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative mx-auto h-full max-w-[100rem] px-12">
        <div className="relative h-full">
          {/* El punto que recorre la flecha */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 z-[5] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blanco shadow-[0_0_0_6px_rgba(63,182,255,0.35),0_0_28px_8px_rgba(63,182,255,0.55)]"
            style={{
              left: `${dotLeft}%`,
              opacity: step < 0 || step >= N ? 0 : 1,
              transition: step === 0 ? 'opacity 400ms' : `left ${STEP_MS - 200}ms ease-in-out, opacity ${STEP_MS}ms`,
            }}
          />

          <ol className="grid h-full grid-cols-8">
            {procesos.map((p, i) => {
              const { current, lit } = stateOf(i, step, hover)
              const up = i % 2 === 0
              const place = i === 0 ? 'left-0' : i === N - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'
              return (
                <li key={p.slug} className="relative" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                  <Node
                    i={i}
                    current={current}
                    lit={lit}
                    on={on}
                    delay={reveal(i)}
                    className="absolute top-1/2 left-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-sm"
                  />

                  {/* Palito entre el punto de la flecha y la tarjeta */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 h-8 w-0.5 -translate-x-1/2 transition-colors duration-500 ${
                      up ? 'bottom-[calc(50%+1.5rem)]' : 'top-[calc(50%+1.5rem)]'
                    } ${current ? 'bg-celeste' : 'bg-linea'}`}
                  />

                  <a
                    href={procesoHref(p.slug)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    className={`absolute block w-[15rem] border-t-4 bg-marino-claro p-4 transition duration-500 ${place} ${
                      up ? 'bottom-[calc(50%+3.5rem)]' : 'top-[calc(50%+3.5rem)]'
                    } ${current ? 'border-celeste shadow-[0_10px_40px_-10px_rgba(63,182,255,0.45)]' : lit ? 'border-celeste/60' : 'border-linea'} ${
                      on ? 'opacity-100' : `opacity-0 ${up ? 'translate-y-3' : '-translate-y-3'}`
                    }`}
                    style={{ transitionDelay: reveal(i) }}
                  >
                    <CardBody p={p} current={current} />
                  </a>

                  {/* Lo que pasa al proceso siguiente, montado sobre la flecha */}
                  {p.pasa && (
                    <span
                      className={`absolute top-1/2 left-full z-10 w-24 -translate-x-1/2 -translate-y-1/2 border px-1.5 py-1 text-center text-[10px] font-bold uppercase leading-tight tracking-wide transition duration-500 ${
                        step > i && step <= N ? 'border-celeste bg-celeste text-marino' : 'border-celeste/50 bg-marino text-celeste'
                      } ${on ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: reveal(i + 0.5) }}
                    >
                      {p.pasa}
                    </span>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

// Celular y tablet: la flecha baja por la izquierda
function Vertical({ on, step, hover, setHover }) {
  return (
    <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 xl:hidden">
      <ol className="relative">
        <span
          aria-hidden="true"
          className={`absolute top-2 bottom-9 left-[1.375rem] w-1.5 -translate-x-1/2 origin-top bg-celeste transition-transform ease-out ${
            on ? 'scale-y-100' : 'scale-y-0'
          }`}
          style={{ transitionDuration: `${DRAW_MS}ms` }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 36 40"
          className={`absolute bottom-0 left-[1.375rem] h-10 w-9 -translate-x-1/2 text-celeste transition-opacity ${on ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: on ? `${DRAW_MS - 200}ms` : '0ms' }}
        >
          <path d="M0 0h36L18 40z" fill="currentColor" />
        </svg>

        {procesos.map((p, i) => {
          const { current, lit } = stateOf(i, step, hover)
          return (
            <li key={p.slug} className="relative pb-5 pl-16 last:pb-14" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <Node i={i} current={current} lit={lit} on={on} delay="0ms" className="absolute top-3 left-0 z-10 h-11 w-11 text-sm" />
              <a
                href={procesoHref(p.slug)}
                className={`block border-l-4 bg-marino-claro p-4 transition duration-500 ${current ? 'border-celeste' : lit ? 'border-celeste/60' : 'border-linea'}`}
              >
                <CardBody p={p} current={current} />
              </a>
              {p.pasa && (
                <p className={`mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide transition ${step > i && step <= N ? 'text-celeste' : 'text-bruma'}`}>
                  <span aria-hidden="true">↓</span>
                  {p.pasa}
                </p>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function ProcessFlow() {
  const [ref, inView] = useInView({ threshold: 0.25 })
  const on = usePlay(inView)
  const [hover, setHover] = useState(null)
  const step = useTour(on, hover !== null)
  const props = { on, step, hover, setHover }

  return (
    <div ref={ref}>
      <Horizontal {...props} />
      <Vertical {...props} />
    </div>
  )
}
