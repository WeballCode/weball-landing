import ChatDemo from './ChatDemo.jsx'
import { Reveal } from './motion.jsx'
import { Check } from './ui.jsx'

const confianza = ['Sin aprender otro sistema', 'Vos confirmás cada cambio', 'Se publica en la app y la web de tu liga']

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-marino pt-16">
      {/* Grilla suave de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(#3fb6ff 1px, transparent 1px), linear-gradient(90deg, #3fb6ff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-20 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-28">
        <div>
          <Reveal as="p" className="inline-flex items-center gap-2 rounded-full border border-celeste/40 bg-celeste/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-celeste">
            <span className="h-1.5 w-1.5 rounded-full bg-celeste" />
            Nuevo · Primera en su tipo
          </Reveal>

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <Reveal as="span" delay={120} className="block">
              Organizá tu liga
            </Reveal>
            <Reveal as="span" delay={240} className="block text-celeste">
              con tu IA favorita.
            </Reveal>
          </h1>

          <Reveal as="p" delay={380} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-bruma sm:text-xl">
            Weball es la primera plataforma de ligas que se conecta a tu IA. Pedile en palabras lo que necesitás —inscribir equipos, armar el
            fixture, programar la fecha, publicar resultados— y queda hecho en minutos.
          </Reveal>

          <Reveal delay={500} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-lg bg-celeste px-7 py-4 text-center font-bold text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
            >
              Quiero probarlo con mi liga
            </a>
            <a
              href="#como-funciona"
              className="rounded-lg border border-blanco/40 px-7 py-4 text-center font-bold text-blanco transition hover:-translate-y-0.5 hover:border-blanco hover:bg-blanco/5"
            >
              Ver cómo funciona
            </a>
          </Reveal>

          <Reveal as="ul" delay={620} className="mt-7 flex flex-col gap-2 text-sm text-bruma sm:flex-row sm:flex-wrap sm:gap-x-6">
            {confianza.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check />
                {t}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={300}>
          <ChatDemo />
        </Reveal>
      </div>
    </section>
  )
}
