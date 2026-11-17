// Contratá sólo lo que te falta: Weball se conecta con lo que la liga ya usa.
// Versión corta para la principal; el detalle y el armador de combinaciones están en Soluciones.
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

export const integrations = [
  {
    title: 'Cargamos tus datos',
    text: 'Clubes, jugadores, fixture e historial desde tu plataforma o tus planillas: nuestro equipo los ordena y los deja listos.',
  },
  {
    title: 'Nos integramos con tu sistema',
    text: 'Si tu liga tiene su propio sistema, lo conectamos. Con FUTSALA, Weball le envía las inscripciones y los usuarios al suyo.',
  },
  {
    title: 'Tus planillas de Google, al día',
    text: 'La programación, las designaciones y el reporte de fichajes se copian solos a tus planillas de Google.',
  },
  {
    title: 'Todo sale en Excel',
    text: 'Fichajes, personas, fixture, sanciones y boletines se exportan en Excel; el boletín, también en PDF y Word.',
  },
  {
    title: 'Tu web lee nuestros datos',
    text: 'Una conexión pública y documentada entrega fixture, tablas, resultados, clubes y planteles a tu web o tu sistema.',
  },
  {
    title: 'Árbitros de otra organización',
    text: 'Un colegio de árbitros externo trabaja en tus partidos con su propio acceso. FUTSALA y BAFI comparten uno de +400 árbitros.',
  },
]

export default function Modular() {
  return (
    <Section id="integraciones">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Label>Contratá sólo lo que te falta</Label>
          <Title>Weball se adapta a tus procesos</Title>
          <Lead>
            Cada proceso se contrata por separado. Si ya resolvés alguno con otro sistema, Weball se conecta con él y se encarga
            del resto.
          </Lead>
        </div>
        <Reveal delay={300}>
          <a
            href="./soluciones.html#armador"
            className="inline-block bg-celeste px-7 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
          >
            Armá tu combinación
          </a>
        </Reveal>
      </div>

      <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 80} className="border-t-4 border-celeste py-5">
            <h3 className="text-lg font-extrabold uppercase leading-tight">{it.title}</h3>
            <p className="mt-2 leading-relaxed text-bruma">{it.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
