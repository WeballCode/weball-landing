// La flecha de los 8 procesos: cruza la pantalla de punta a punta, del fichaje a la comunicación.
// Va sobre fondo blanco para que corte con las secciones oscuras y llame la atención.
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

// Sombras en azul de la marca
const CARD_SHADOW = 'shadow-[0_10px_30px_-14px_rgba(3,38,57,0.35)]'
const CARD_SHADOW_ON = 'shadow-[0_22px_50px_-16px_rgba(11,111,204,0.55)]'

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
          ? 'scale-125 border-marino bg-marino text-celeste shadow-[0_0_0_8px_rgba(63,182,255,0.35)]'
          : lit
            ? 'border-celeste-profundo bg-celeste-profundo text-blanco'
            : 'border-celeste-profundo bg-blanco text-celeste-profundo'
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
        <Icon name={p.icon} className={`h-7 w-7 transition ${current ? 'text-celeste-profundo' : 'text-acero'}`} />
        <span aria-hidden="true" className={`text-lg font-bold transition ${current ? 'translate-x-1 text-celeste-profundo' : 'text-bruma'}`}>
          →
        </span>
      </span>
      <span className="mt-2 block text-base font-extrabold uppercase leading-tight text-marino">{p.name}</span>
      <span className="mt-1.5 block text-sm leading-snug text-pizarra">{p.tag}</span>
    </>
  )
}

// Pantallas grandes: flecha horizontal de borde a borde
function Horizontal({ on, step, hover, setHover }) {
  const reveal = (i) => (on && step < 0 ? `${300 + i * 160}ms` : '0ms')
  const dotLeft = step < 0 ? 0 : step >= N ? 100 : ((step + 0.5) / N) * 100

  return (
    <div className="relative hidden h-[37rem] xl:block">
      {/* La flecha: una franja que se dibuja de izquierda a derecha, de celeste a azul, y termina en punta */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center">
        <span
          className={`h-4 flex-1 origin-left bg-linear-to-r from-celeste-claro via-celeste to-celeste-profundo transition-transform ease-out ${
            on ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transitionDuration: `${DRAW_MS}ms` }}
        />
        <svg
          viewBox="0 0 48 68"
          className={`-ml-px h-[4.25rem] w-12 shrink-0 text-celeste-profundo transition-opacity duration-300 ${on ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: on ? `${DRAW_MS - 200}ms` : '0ms' }}
        >
          <path d="M0 0L48 34L0 68z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative mx-auto h-full max-w-[100rem] px-12">
        <div className="relative h-full">
          {/* El punto que recorre la flecha (pasa por debajo de los números) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 z-[5] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-blanco bg-marino shadow-[0_0_0_6px_rgba(63,182,255,0.45),0_0_30px_10px_rgba(63,182,255,0.55)]"
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
                    className="absolute top-1/2 left-1/2 z-10 h-[3.25rem] w-[3.25rem] -translate-x-1/2 -translate-y-1/2 text-base"
                  />

                  {/* Palito entre el punto de la flecha y la tarjeta */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 h-8 w-0.5 -translate-x-1/2 transition-colors duration-500 ${
                      up ? 'bottom-[calc(50%+1.625rem)]' : 'top-[calc(50%+1.625rem)]'
                    } ${current ? 'bg-celeste-profundo' : 'bg-bruma'}`}
                  />

                  <a
                    href={procesoHref(p.slug)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    className={`absolute block w-[15rem] border-t-[6px] bg-white p-4 transition duration-500 ${place} ${
                      up ? 'bottom-[calc(50%+3.625rem)]' : 'top-[calc(50%+3.625rem)]'
                    } ${
                      current
                        ? `border-celeste-profundo ${CARD_SHADOW_ON} ${up ? '-translate-y-1.5' : 'translate-y-1.5'}`
                        : `${lit ? 'border-celeste' : 'border-marino'} ${CARD_SHADOW}`
                    } ${on ? 'opacity-100' : `opacity-0 ${up ? 'translate-y-3' : '-translate-y-3'}`}`}
                    style={{ transitionDelay: reveal(i) }}
                  >
                    <CardBody p={p} current={current} />
                  </a>

                  {/* Lo que pasa al proceso siguiente, montado sobre la flecha */}
                  {p.pasa && (
                    <span
                      className={`absolute top-1/2 left-full z-10 w-24 -translate-x-1/2 -translate-y-1/2 border-2 px-1.5 py-1 text-center text-[10px] font-extrabold uppercase leading-tight tracking-wide transition duration-500 ${
                        step > i && step <= N ? 'border-marino bg-marino text-blanco' : 'border-celeste-profundo bg-white text-celeste-profundo'
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
          className={`absolute top-2 bottom-10 left-[1.5rem] w-2 -translate-x-1/2 origin-top bg-linear-to-b from-celeste-claro via-celeste to-celeste-profundo transition-transform ease-out ${
            on ? 'scale-y-100' : 'scale-y-0'
          }`}
          style={{ transitionDuration: `${DRAW_MS}ms` }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 40 44"
          className={`absolute bottom-0 left-[1.5rem] h-11 w-10 -translate-x-1/2 text-celeste-profundo transition-opacity ${on ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: on ? `${DRAW_MS - 200}ms` : '0ms' }}
        >
          <path d="M0 0h40L20 44z" fill="currentColor" />
        </svg>

        {procesos.map((p, i) => {
          const { current, lit } = stateOf(i, step, hover)
          return (
            <li key={p.slug} className="relative pb-5 pl-16 last:pb-16" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <Node i={i} current={current} lit={lit} on={on} delay="0ms" className="absolute top-3 left-0 z-10 h-12 w-12 text-sm" />
              <a
                href={procesoHref(p.slug)}
                className={`block border-l-[6px] bg-white p-4 transition duration-500 ${
                  current ? `border-celeste-profundo ${CARD_SHADOW_ON}` : `${lit ? 'border-celeste' : 'border-marino'} ${CARD_SHADOW}`
                }`}
              >
                <CardBody p={p} current={current} />
              </a>
              {p.pasa && (
                <p
                  className={`mt-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wide transition ${
                    step > i && step <= N ? 'text-celeste-profundo' : 'text-acero'
                  }`}
                >
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
