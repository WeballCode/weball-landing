import { useState } from 'react'
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

// Preguntas frecuentes de las ligas grandes (versión de Gui, noviembre 2026)
const faqs = [
  {
    q: '¿Para qué tamaño de liga está pensado?',
    a: 'Para ligas, asociaciones y federaciones de más de 1.000 jugadores: muchas categorías, cientos de partidos por fecha, árbitros propios y tribunal de disciplina. FUTSALA, la liga más grande en Weball, tiene más de 46.000 jugadores.',
  },
  {
    q: '¿Puedo contratar sólo algunos procesos?',
    a: 'Sí. Cada uno de los 8 procesos se contrata por separado. Si ya resolvés alguno con otro sistema, Weball se conecta con él y se encarga del resto.',
  },
  {
    q: '¿Puedo traer los datos que ya tengo?',
    a: 'Sí. Nuestro equipo trae tus clubes, jugadores, fixture e historial desde la plataforma o las planillas que uses hoy, y los deja ordenados.',
  },
  {
    q: '¿Funciona fuera de Argentina?',
    a: 'Sí. Hay ligas en Argentina, Colombia, Uruguay y Chile, y una temporada jugada en Canadá. Cada liga tiene su zona horaria, y la web está en español, inglés y portugués.',
  },
  {
    q: '¿Para qué deportes sirve?',
    a: 'Hoy lo usan ligas de futsal y de handball, cada una con su planilla, sus eventos y sus reglas de tarjetas.',
  },
  {
    q: '¿Cómo se fichan los jugadores?',
    a: 'Cada jugador se ficha desde el celular con un link del club: carga su DNI, se saca una selfie y queda con su credencial digital. El sistema compara la cara del documento con la selfie y la liga revisa sólo los casos dudosos.',
  },
  {
    q: '¿El tribunal lo decide una IA?',
    a: 'No. Tribunal IA propone cada sanción con el artículo de tu reglamento y el tribunal la aprueba, la corrige o la rechaza. La liga elige cuánto se automatiza.',
  },
  {
    q: '¿Mi liga puede tener su propia app y su web?',
    a: 'Sí. Tu liga tiene su app con su nombre y sus colores, y su web con dominio propio, donde jugadores, familias y público siguen partidos, tablas y sanciones.',
  },
  {
    q: '¿Quién ve qué dentro del sistema?',
    a: 'Cada uno tiene su acceso: la liga administra todo con permisos por persona, los delegados manejan su club, los árbitros sus partidos y cada jugador su perfil.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Weball completo cuesta USD 6 por jugador al año (USD 0,50 por mes), con todo incluido. Lo paga cada jugador al activar su credencial digital, o la liga, si prefiere. En Argentina se paga por Mercado Pago. Si sólo necesitás algunos procesos, te cotizamos esos.',
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
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-lg font-extrabold leading-snug transition hover:text-celeste"
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
    <Section id="preguntas" tone="darker">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <Label>Dudas</Label>
          <Title>Preguntas frecuentes</Title>
          <Lead>Lo que más nos preguntan las ligas grandes antes de empezar.</Lead>
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
