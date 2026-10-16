import { useState } from 'react'
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

// Preguntas frecuentes. Las respuestas salen de lo que ya cuenta la página y los decks de Weball.
const faqs = [
  {
    q: '¿Para qué deportes sirve?',
    a: 'Para cualquier deporte amateur que se organice en ligas y torneos. Hoy lo usan ligas de futsal y de handball.',
  },
  {
    q: '¿Mi liga puede tener su propia app?',
    a: 'Sí. Tu liga tiene su app oficial, con su nombre y su identidad, donde jugadores, familias y público siguen partidos, tablas y estadísticas.',
  },
  {
    q: '¿Puedo traer los datos que ya tengo?',
    a: 'Sí. Nos conectamos con la plataforma o las planillas que uses hoy y ordenamos jugadores, equipos, fixture y resultados.',
  },
  {
    q: '¿Cómo se fichan los jugadores?',
    a: 'Cada jugador se ficha solo desde el celular: carga su documento, se saca una selfie, completa los datos que pida tu liga y queda con su credencial digital.',
  },
  {
    q: '¿Quién ve qué dentro del sistema?',
    a: 'Cada uno tiene su acceso: la liga administra todo, los delegados manejan su club, los árbitros sus partidos y cada jugador su perfil.',
  },
  {
    q: '¿Cómo ayuda a que la liga sume ingresos?',
    a: 'Las marcas auspician tablas, partidos y perfiles dentro de la app, venden en la comunidad y miden sus resultados.',
  },
  {
    q: '¿Cómo arrancamos?',
    a: 'Escribinos, te mostramos Weball funcionando con el formato de tu liga y te dejamos todo listo para empezar.',
  },
]

function Item({ f, open, onToggle, i }) {
  return (
    <Reveal as="li" delay={i * 60} className={`${i === 0 ? 'border-t-4' : 'border-t-2'} border-linea`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-extrabold leading-snug transition hover:text-celeste"
      >
        {f.q}
        <span
          aria-hidden="true"
          className={`grid h-7 w-7 shrink-0 place-items-center border-2 text-lg leading-none transition ${
            open ? 'border-celeste bg-celeste text-marino' : 'border-linea text-celeste'
          }`}
        >
          <span className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
        </span>
      </button>
      {/* La respuesta se despliega con una transición suave */}
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden leading-relaxed text-bruma">{f.a}</p>
      </div>
    </Reveal>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="preguntas">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <Label>Dudas</Label>
          <Title>Preguntas frecuentes</Title>
          <Lead>Lo que más nos preguntan las ligas antes de empezar.</Lead>
        </div>
        <ul>
          {faqs.map((f, i) => (
            <Item key={f.q} f={f} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
