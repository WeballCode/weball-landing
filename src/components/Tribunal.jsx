import { Icon } from './ui.jsx'
import TribunalShowcase from './TribunalShowcase.jsx'
import { Reveal } from './motion.jsx'

// Tribunal IA con sección propia, en celeste para que se destaque
export default function Tribunal() {
  return (
    <section id="tribunal" className="scroll-mt-16 bg-celeste text-marino">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:py-16">
        <div>
          <Reveal className="flex items-center gap-3">
            <Icon name="tribunal" className="h-8 w-8" />
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Tecnología Weball</p>
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 text-5xl font-extrabold uppercase leading-none sm:text-6xl">
            Tribunal IA
          </Reveal>
          <Reveal as="p" delay={200} className="mt-5 max-w-md text-2xl font-bold leading-snug">
            Cargá tus reglamentos y dejá que nuestro agente se ocupe de sancionar.
          </Reveal>
        </div>
        <Reveal delay={200} className="min-w-0">
          <TribunalShowcase />
        </Reveal>
      </div>
    </section>
  )
}
