import { useEffect, useState } from 'react'
import Showcase from './Showcase.jsx'
import { prefersReducedMotion, Reveal } from './motion.jsx'
import { abrirAgenda, agendaLink, contactoLink } from '../links.js'
import { Boton } from './ui.jsx'

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
    <span className="relative inline-grid text-left align-baseline" aria-label={`${IAS.join(', ')}.`}>
      {IAS.map((ia, n) => (
        <span
          key={ia}
          aria-hidden="true"
          className="texto-ia col-start-1 row-start-1 pb-[0.12em] whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
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
    <section id="inicio" className="overflow-hidden bg-white pt-12">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 text-center sm:px-6 sm:pt-24 sm:pb-32">
        <Reveal as="p" className="texto-ia text-[1.1rem] font-semibold sm:text-xl">
          Weball + IA
        </Reveal>

        <h1 className="mx-auto mt-3 max-w-5xl text-[2.9rem] leading-[1.02] font-bold tracking-[-0.035em] sm:text-7xl lg:text-[5.5rem]">
          <Reveal as="span" delay={100} className="block">
            Organizá tu liga
          </Reveal>
          <Reveal as="span" delay={200} className="block">
            con <PalabraQueCambia />
          </Reveal>
        </h1>

        <Reveal as="p" delay={320} className="mx-auto mt-6 max-w-2xl text-[1.2rem] leading-relaxed font-medium text-gris text-pretty sm:text-[1.4rem]">
          Inscripciones. Fixtures. Programaciones de partidos. Carga de resultados. Pedile todo a tu IA y Weball lo hace.
        </Reveal>

        <Reveal delay={440} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Boton href={agendaLink} onClick={abrirAgenda} target="_blank" rel="noopener noreferrer">Probar con mi liga</Boton>
          <Boton href={contactoLink} target="_blank" rel="noopener noreferrer" claro>Contactar</Boton>
        </Reveal>

        <Reveal delay={300} className="mt-16 sm:mt-24">
          <Showcase />
        </Reveal>
      </div>
    </section>
  )
}
