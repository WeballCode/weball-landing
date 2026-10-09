import { Icon, Section } from './ui.jsx'
import { CountUp, Reveal } from './motion.jsx'

// Sección de un producto Weball: nombre, promesa y lista numerada de lo que incluye
export default function ProductSection({ id, light = false, icon, name, audience, title, items, closing, cta, visual, stats, footer }) {
  const muted = light ? 'text-pizarra' : 'text-bruma'
  const accent = light ? 'text-celeste-profundo' : 'text-celeste'

  return (
    <Section id={id} light={light}>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="flex flex-col">
          <Reveal className={`flex items-center gap-3 ${accent}`}>
            <Icon name={icon} className="h-8 w-8" />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">{audience}</p>
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-6 text-5xl font-extrabold uppercase leading-none sm:text-7xl">
            {name}
          </Reveal>
          <Reveal as="p" delay={200} className={`mt-6 text-2xl font-bold leading-snug ${light ? 'text-marino' : 'text-blanco'}`}>
            {title}
          </Reveal>

          {stats && (
            <dl className="mt-10 grid grid-cols-2 gap-x-6">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={250 + i * 100}
                  className={`flex flex-col-reverse py-4 ${i < 2 ? 'border-t-4' : 'border-t-2'} ${
                    light ? 'border-marino' : 'border-celeste'
                  }`}
                >
                  <dt className={`mt-1 text-sm font-medium uppercase tracking-[0.15em] ${muted}`}>{s.label}</dt>
                  <dd className="text-4xl font-extrabold tabular-nums sm:text-5xl">
                    <CountUp value={s.value} />
                  </dd>
                </Reveal>
              ))}
            </dl>
          )}

          {visual && <div className="mt-12 lg:mt-auto lg:pt-12">{visual}</div>}
        </div>

        <div className="flex flex-col">
          <Reveal
            delay={150}
            className={`flex flex-col border-t-[6px] p-7 sm:p-10 ${
              light ? 'border-marino bg-blanco' : 'border-celeste bg-marino-claro'
            }`}
          >
            <ol>
              {items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.name}
                  delay={300 + i * 120}
                  className={`flex gap-5 py-5 ${
                    i === 0 ? '' : light ? 'border-t-2 border-niebla' : 'border-t-2 border-linea'
                  }`}
                >
                  <span className={`text-2xl font-extrabold leading-none ${accent}`}>{i + 1}</span>
                  <div>
                    <p className="text-xl font-extrabold uppercase leading-tight">{item.name}</p>
                    {item.text && <p className={`mt-1.5 leading-relaxed ${muted}`}>{item.text}</p>}
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal
              as="p"
              delay={300 + items.length * 120}
              className={`mt-4 border-t-4 pt-5 text-lg font-extrabold uppercase leading-tight ${
                light ? 'border-marino' : 'border-celeste text-celeste'
              }`}
            >
              {closing}
            </Reveal>
          </Reveal>

          {/* El botón va debajo de los pasos */}
          {cta && (
            <Reveal delay={400 + items.length * 120} className="mt-6 flex flex-col sm:items-start">
              <a
                href={cta.href}
                target={cta.external ? '_blank' : undefined}
                rel={cta.external ? 'noopener noreferrer' : undefined}
                className={`px-7 py-4 text-center font-bold uppercase tracking-wide transition hover:-translate-y-0.5 ${
                  light
                    ? 'bg-marino text-blanco hover:bg-marino-claro'
                    : 'bg-celeste text-marino hover:bg-celeste-claro'
                }`}
              >
                {cta.label}
              </a>
            </Reveal>
          )}
        </div>
      </div>

      {footer && <div className="mt-16">{footer}</div>}
    </Section>
  )
}
