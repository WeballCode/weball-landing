import { Icon, Section } from './ui.jsx'

// Sección de un producto Weball: nombre, promesa y lista numerada de lo que incluye
export default function ProductSection({ id, light = false, icon, name, audience, title, items, closing, cta }) {
  const muted = light ? 'text-pizarra' : 'text-bruma'
  const accent = light ? 'text-celeste-profundo' : 'text-celeste'

  return (
    <Section id={id} light={light}>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="flex flex-col">
          <div className={`flex items-center gap-3 ${accent}`}>
            <Icon name={icon} className="h-8 w-8" />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">{audience}</p>
          </div>
          <h2 className="mt-6 text-5xl font-extrabold uppercase leading-none sm:text-7xl">{name}</h2>
          <p className={`mt-6 text-2xl font-bold leading-snug ${light ? 'text-marino' : 'text-blanco'}`}>{title}</p>

          {cta && (
            <a
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noopener noreferrer' : undefined}
              className={`mt-10 self-start px-7 py-4 font-bold uppercase tracking-wide transition ${
                light
                  ? 'bg-marino text-blanco hover:bg-marino-claro'
                  : 'bg-celeste text-marino hover:bg-celeste-claro'
              }`}
            >
              {cta.label}
            </a>
          )}
        </div>

        <div
          className={`flex flex-col border-t-[6px] p-7 sm:p-10 ${
            light ? 'border-marino bg-blanco' : 'border-celeste bg-marino-claro'
          }`}
        >
          <ol>
            {items.map((item, i) => (
              <li
                key={item.name}
                className={`flex gap-5 py-5 ${
                  i === 0 ? '' : light ? 'border-t-2 border-niebla' : 'border-t-2 border-linea'
                }`}
              >
                <span className={`text-2xl font-extrabold leading-none ${accent}`}>{i + 1}</span>
                <div>
                  <p className="text-xl font-extrabold uppercase leading-tight">{item.name}</p>
                  {item.text && <p className={`mt-1.5 leading-relaxed ${muted}`}>{item.text}</p>}
                </div>
              </li>
            ))}
          </ol>
          <p
            className={`mt-4 border-t-4 pt-5 text-lg font-extrabold uppercase leading-tight ${
              light ? 'border-marino' : 'border-celeste text-celeste'
            }`}
          >
            {closing}
          </p>
        </div>
      </div>
    </Section>
  )
}
