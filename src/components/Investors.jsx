import { Label, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

const points = [
  {
    title: 'Un mercado enorme',
    text: 'Millones de personas juegan deporte amateur todas las semanas, y la mayoría de las ligas todavía se organiza con papel, planillas y grupos de WhatsApp.',
  },
  {
    title: 'Crece desde adentro',
    text: 'Cada asociación suma a sus ligas, cada liga a sus clubes, y cada club a sus jugadores y sus familias.',
  },
  {
    title: 'Las marcas lo financian',
    text: 'Con Weball Sponsors, las marcas auspician, venden en la comunidad y miden sus resultados.',
  },
  {
    title: 'Ya funciona',
    text: 'Futsala y sus filiales y Handball Baires ya organizan su actividad con Weball.',
  },
]

export default function Investors() {
  return (
    <Section id="inversores" light>
      <Label dark={false}>Para inversores</Label>
      <Title>
        De aficionados a <span className="text-celeste-profundo">protagonistas</span>
      </Title>
      <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        El deporte profesional tiene toda la tecnología. El amateur, donde juega la enorme mayoría, casi nada.
        Weball es la plataforma que le faltaba.
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120} className="flex">
            <div className="flex min-h-52 w-full flex-col gap-3 border-t-[6px] border-marino bg-blanco p-8 transition duration-300 hover:-translate-y-2">
              <span className="text-3xl font-extrabold text-celeste-profundo">0{i + 1}</span>
              <h3 className="text-2xl font-extrabold uppercase leading-none">{p.title}</h3>
              <p className="leading-relaxed text-pizarra">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-sm text-acero">
        Jugadores y árbitros: informe de junio de 2026. Clubes: octubre de 2026.
      </p>
    </Section>
  )
}
