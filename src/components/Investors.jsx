import { Label, Lead, Section, Title } from './ui.jsx'
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
    text: 'Ya se organizan +100 torneos y +35.000 partidos al año en Weball.',
  },
]

export default function Investors() {
  return (
    <Section id="inversores" light>
      <Label tone="light">Inversores</Label>
      <Title>
        De aficionados a <span className="text-celeste-profundo">protagonistas</span>
      </Title>
      <Lead tone="light">
        El deporte profesional tiene toda la tecnología. El amateur, donde juega la enorme mayoría, casi nada. Weball es la
        plataforma que le faltaba.
      </Lead>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="flex">
            <div className="flex w-full flex-col gap-3 border-t-[6px] border-marino bg-blanco p-6 transition duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-extrabold uppercase leading-none">{p.title}</h3>
              <p className="leading-relaxed text-pizarra">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-sm text-acero">Cifras de la plataforma Weball, 2026.</p>
    </Section>
  )
}
