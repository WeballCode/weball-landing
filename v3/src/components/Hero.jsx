import { useEffect, useState } from 'react'
import Showcase from './Showcase.jsx'
import { prefersReducedMotion, Reveal } from './motion.jsx'
import { Boton, Link } from './ui.jsx'

// Las IAs que van pasando en el título. Para sumar otra, agregala a la lista.
const IAS = ['Gemini', 'ChatGPT', 'Claude']

// "con Gemini." → "con ChatGPT." → "con Claude." en loop. Todas ocupan el lugar de la más larga, así el título no salta.
function PalabraQueCambia() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % IAS.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-grid overflow-hidden text-left align-bottom" aria-label={`${IAS.join(', ')}.`}>
      {IAS.map((ia, n) => (
        <span
          key={ia}
          aria-hidden="true"
          className="texto-ia col-start-1 row-start-1 pb-[0.1em] whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
          style={{
            opacity: n === i ? 1 : 0,
            transform: n === i ? 'none' : `translateY(${n === (i + IAS.length - 1) % IAS.length ? '-0.6em' : '0.6em'})`,
          }}
        >
          {ia}.
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    // La portada es tapa: va centrada y sobre marino, el fondo por defecto de la marca
    <section id="inicio" className="overflow-hidden bg-marino pt-16 text-blanco">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 text-center sm:px-6 sm:pt-24 sm:pb-32">
        <Reveal as="p" className="text-sm font-medium tracking-[0.2em] text-celeste uppercase">
          Weball + IA
        </Reveal>

        <h1 className="mx-auto mt-3 max-w-5xl text-[1.95rem] leading-[0.95] font-extrabold uppercase sm:text-7xl lg:text-[5.4rem]">
          <Reveal as="span" delay={100} className="block">
            Organizá tu liga
          </Reveal>
          <Reveal as="span" delay={200} className="block">
            con <PalabraQueCambia />
          </Reveal>
        </h1>

        <Reveal as="p" delay={320} className="mx-auto mt-6 max-w-2xl text-[1.2rem] leading-relaxed text-bruma text-pretty sm:text-[1.4rem]">
          Inscripciones, fixture, programación y resultados. Pedíselo a tu IA con tus palabras, y Weball lo hace.
        </Reveal>

        <Reveal delay={440} className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
          <Boton href="#contacto">Probalo con tu liga</Boton>
          <Link href="#como-funciona">Mirá cómo funciona</Link>
        </Reveal>

        <Reveal delay={300} className="mt-16 sm:mt-24">
          <Showcase />
        </Reveal>
      </div>
    </section>
  )
}
