import { useState } from 'react'
import { Reveal } from './motion.jsx'
import { Section, Title } from './ui.jsx'

const faqs = [
  {
    q: '¿Qué IA necesito?',
    a: 'La que ya uses: Gemini, ChatGPT o Claude, para arrancar. Te ayudamos a dejar Weball conectado a la tuya.',
  },
  {
    q: '¿Tengo que saber de tecnología?',
    a: 'No. Si sabés mandar un mensaje, sabés usarlo. Le pedís las cosas con tus palabras y la IA se encarga del resto.',
  },
  {
    q: '¿Es seguro? ¿La IA puede romper algo?',
    a: 'Tu IA entra con tu usuario y sólo puede hacer lo que tus permisos le permiten. Antes de crear, cambiar o borrar algo te pregunta, y no hace nada sin tu confirmación.',
  },
  {
    q: '¿Y si se equivoca?',
    a: 'Todo lo que hace queda cargado en Weball, a la vista. Lo revisás y lo corregís desde el panel, o le pedís a la IA que lo arregle.',
  },
  {
    q: '¿Puedo seguir usando el panel de Weball?',
    a: 'Sí. La IA es otra forma de usar Weball, no la única. Podés combinar las dos como más te sirva.',
  },
  {
    q: '¿Sirve para mi deporte y mi formato?',
    a: 'Weball lo usan ligas de futsal y de handball, con zonas, ruedas, playoffs y categorías. Contanos tu formato y te mostramos cómo queda.',
  },
  {
    q: '¿Cómo arrancamos?',
    a: 'Escribinos. Te mostramos Weball funcionando con tu IA y con el formato de tu liga, y te dejamos todo listo para empezar.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(-1)
  return (
    <Section id="preguntas" tone="fondo">
      <Title>Preguntas frecuentes.</Title>
      <ul className="mx-auto mt-14 max-w-3xl">
        {faqs.map((f, i) => (
          <Reveal as="li" key={f.q} delay={i * 50} className="border-b border-borde">
            <button
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-xl font-semibold tracking-tight sm:text-2xl"
            >
              {f.q}
              <span className={`text-3xl font-light text-gris transition duration-300 ${open === i ? 'rotate-45' : ''}`} aria-hidden="true">
                +
              </span>
            </button>
            {open === i && <p className="msg-in pb-7 text-[1.1rem] leading-relaxed text-gris">{f.a}</p>}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
