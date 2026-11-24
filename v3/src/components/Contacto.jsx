import { WHATSAPP_LABEL, agendaLink, contactoLink, whatsappLink } from '../links.js'
import { Reveal } from './motion.jsx'
import { Boton, Link } from './ui.jsx'

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
          Weball funciona con ChatGPT, Claude, Gemini o la IA que ya usás. Te mostramos tu liga funcionando, con tus equipos y tu formato.
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Boton href={agendaLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg">Probar con mi liga</Boton>
            <Boton href={contactoLink} target="_blank" rel="noopener noreferrer" claro className="px-8 py-4 text-lg">Contactar</Boton>
          </div>
          <p className="text-sm text-gris">WhatsApp {WHATSAPP_LABEL}</p>
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
