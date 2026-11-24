import { WHATSAPP_LABEL, whatsappLink } from '../links.js'
import { Reveal } from './motion.jsx'
import { Link } from './ui.jsx'

const opciones = [
  { label: 'Quiero probarlo con mi liga', message: 'Hola Weball, quiero probar organizar mi liga con mi IA.' },
  { label: 'Ya uso Weball y quiero conectar mi IA', message: 'Hola Weball, ya uso Weball y quiero conectarlo con mi IA.' },
  { label: 'Tengo una federación con varias ligas', message: 'Hola Weball, tengo una federación con varias ligas y quiero conocer Weball con IA.' },
]

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-12 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-6 sm:py-32">
        <Reveal as="h2" className="mx-auto max-w-4xl text-[2.8rem] leading-[1.03] font-bold tracking-[-0.035em] text-balance sm:text-7xl">
          Menos horas de gestión. <span className="texto-ia">Más liga.</span>
        </Reveal>
        <Reveal as="p" delay={100} className="mx-auto mt-6 max-w-2xl text-[1.2rem] leading-relaxed font-medium text-gris sm:text-[1.35rem]">
          Te mostramos tu liga funcionando con tu IA, con tus equipos y tu formato.
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-col items-center gap-3">
          <a
            href={whatsappLink(opciones[0].message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-celeste px-8 py-4 text-lg font-semibold text-marino transition hover:bg-celeste-claro"
          >
            Escribinos por WhatsApp
          </a>
          <p className="text-sm text-gris">{WHATSAPP_LABEL}</p>
        </Reveal>

        <Reveal delay={300} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {opciones.slice(1).map((o) => (
            <Link key={o.label} href={whatsappLink(o.message)} target="_blank" rel="noopener noreferrer">
              {o.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
