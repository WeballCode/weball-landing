import { WHATSAPP_LABEL, whatsappLink } from '../links.js'
import { Reveal } from './motion.jsx'

const opciones = [
  { label: 'Quiero probarlo con mi liga', message: 'Hola Weball, quiero probar organizar mi liga con mi IA.' },
  { label: 'Ya uso Weball y quiero conectar mi IA', message: 'Hola Weball, ya uso Weball y quiero conectarlo con mi IA.' },
  { label: 'Tengo una federación con varias ligas', message: 'Hola Weball, tengo una federación con varias ligas y quiero conocer Weball con IA.' },
]

// Cierre: el bloque celeste destacado de la página. Sobre celeste, todo el texto va en marino.
export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-celeste text-marino">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <div>
          <Reveal as="p" className="text-sm font-medium tracking-[0.2em] uppercase">
            Contacto
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 text-[2.6rem] leading-[0.98] font-extrabold uppercase text-balance sm:text-6xl">
            Te mostramos tu liga funcionando.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 max-w-xl text-[1.2rem] leading-relaxed">
            Con tu IA, tus equipos y tu formato. Escribinos al{' '}
            <a href={whatsappLink('Hola Weball, quiero más información.')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">
              {WHATSAPP_LABEL}
            </a>
            .
          </Reveal>
        </div>

        <ul className="flex flex-col">
          {opciones.map((o, i) => (
            <Reveal as="li" key={o.label} delay={150 + i * 100}>
              <a
                href={whatsappLink(o.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 border-marino py-5 text-lg font-extrabold uppercase transition hover:pl-3 ${i === 0 ? 'border-t-4' : 'border-t-2'}`}
              >
                {o.label}
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
