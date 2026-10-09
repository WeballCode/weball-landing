import { Icon, Label, Section, Title } from './ui.jsx'

// Sección de una función destacada: texto a la izquierda, bloque alto con los puntos a la derecha
export default function FeatureSection({ id, light = false, icon, tag, title, text, phrase, points }) {
  return (
    <Section id={id} light={light}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Label dark={!light}>{tag}</Label>
          <Title>{title}</Title>
          <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-pizarra' : 'text-bruma'}`}>{text}</p>
        </div>

        <div
          className={`flex flex-col border-t-[6px] p-7 sm:p-10 ${
            light ? 'border-celeste bg-marino text-blanco' : 'border-marino bg-celeste text-marino'
          }`}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">{phrase}</p>
            <Icon name={icon} className="h-10 w-10 shrink-0" />
          </div>
          <ul className="mt-10">
            {points.map((p, i) => (
              <li
                key={p}
                className={`py-4 leading-relaxed ${i === 0 ? 'border-t-4' : 'border-t-2'} ${
                  light ? 'border-linea text-bruma first:border-celeste' : 'border-marino text-marino'
                }`}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
