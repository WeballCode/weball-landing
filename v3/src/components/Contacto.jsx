import { WHATSAPP_LABEL, whatsappLink } from '../links.js'
import { Reveal } from './motion.jsx'

const opciones = [
  { label: 'Quiero probarlo con mi liga', message: 'Hola Weball, quiero probar organizar mi liga con mi IA.' },
  { label: 'Ya uso Weball y quiero conectar mi IA', message: 'Hola Weball, ya uso Weball y quiero conectarlo con mi IA.' },
  { label: 'Tengo una federación con varias ligas', message: 'Hola Weball, tengo una federación con varias ligas y quiero conocer Weball con IA.' },
]

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-celeste text-marino">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Reveal as="p" className="text-xs font-bold uppercase tracking-[0.2em]">
            Empezá hoy
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-4 text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl">
            Menos horas de gestión. Más liga.
          </Reveal>
          <Reveal as="p" delay={200} className="mt-5 max-w-xl text-lg leading-relaxed text-marino/80">
            Te mostramos tu liga funcionando con tu IA, con tus equipos y tu formato. Escribinos y lo vemos juntos.
          </Reveal>
          <Reveal as="p" delay={300} className="mt-5">
            WhatsApp:{' '}
            <a href={whatsappLink('Hola Weball, quiero más información.')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">
              {WHATSAPP_LABEL}
            </a>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-3">
          {opciones.map((o, i) => (
            <Reveal as="li" key={o.label} delay={150 + i * 100}>
              <a
                href={whatsappLink(o.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl bg-marino px-6 py-5 text-lg font-bold text-blanco transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(3,38,57,0.35)]"
              >
                {o.label}
                <span aria-hidden="true" className="text-celeste transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
