import { Label, Section, Title } from './ui.jsx'

const points = [
  {
    title: 'Un mercado enorme',
    text: 'Millones de personas juegan deporte amateur todas las semanas, y la mayoría de las ligas todavía se organiza con papel, planillas y grupos de WhatsApp.',
  },
  {
    title: 'Crece desde adentro',
    text: 'Cada liga que entra suma a sus clubes, y cada club suma a sus jugadores y sus familias.',
  },
  {
    title: 'Las marcas lo financian',
    text: 'Los sponsors forman parte de la experiencia de la app y financian el producto.',
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
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        El deporte profesional tiene toda la tecnología. El amateur, donde juega la enorme mayoría, casi nada.
        Weball es la plataforma que le faltaba.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {points.map((p, i) => (
          <div key={p.title} className="flex min-h-52 flex-col gap-3 border-t-[6px] border-marino bg-blanco p-8">
            <span className="text-3xl font-extrabold text-celeste-profundo">0{i + 1}</span>
            <h3 className="text-2xl font-extrabold uppercase leading-none">{p.title}</h3>
            <p className="leading-relaxed text-pizarra">{p.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-acero">
        Jugadores y árbitros: informe de junio de 2026. Clubes: octubre de 2026.
      </p>
    </Section>
  )
}
