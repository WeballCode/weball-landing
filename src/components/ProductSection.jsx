import { Icon, Section } from './ui.jsx'
import { CountUp, Reveal } from './motion.jsx'

// Sección de un producto Weball: nombre, promesa y lista numerada de lo que incluye
// `aside` reemplaza la lista de la derecha por otra pieza; `ctaLeft` pone el botón a la izquierda, debajo de las cifras.
export default function ProductSection({
  id,
  light = false,
  icon,
  name,
  audience,
  title,
  items = [],
  itemsTitle,
  closing,
  cta,
  visual,
  stats,
  footer,
  activeIndex,
  aside,
  ctaLeft = false,
}) {
  const highlights = activeIndex !== undefined
  const muted = light ? 'text-pizarra' : 'text-bruma'
  const accent = light ? 'text-celeste-profundo' : 'text-celeste'

  const button = cta && (
    <a
      href={cta.href}
      target={cta.external ? '_blank' : undefined}
      rel={cta.external ? 'noopener noreferrer' : undefined}
      className={`px-7 py-4 text-center font-bold uppercase tracking-wide transition hover:-translate-y-0.5 ${
        light ? 'bg-marino text-blanco hover:bg-marino-claro' : 'bg-celeste text-marino hover:bg-celeste-claro'
      }`}
    >
      {cta.label}
    </a>
  )

  return (
    <Section id={id} light={light}>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="flex flex-col">
          <Reveal className={`flex items-center gap-3 ${accent}`}>
            <Icon name={icon} className="h-8 w-8" />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">{audience}</p>
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 text-5xl font-extrabold uppercase leading-none sm:text-6xl">
            {name}
          </Reveal>
          <Reveal as="p" delay={200} className={`mt-5 text-2xl font-bold leading-snug ${light ? 'text-marino' : 'text-blanco'}`}>
            {title}
          </Reveal>

          {stats && (
            <dl className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-4 sm:gap-x-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={250 + i * 100}
                  className={`flex flex-col-reverse border-t-4 py-3 ${light ? 'border-marino' : 'border-celeste'}`}
                >
                  <dt className={`mt-1 text-xs font-medium uppercase tracking-[0.15em] ${muted}`}>{s.label}</dt>
                  <dd className="text-3xl font-extrabold tabular-nums xl:text-4xl">
                    <CountUp value={s.value} />
                  </dd>
                </Reveal>
              ))}
            </dl>
          )}

          {ctaLeft && button && (
            <Reveal delay={500} className="mt-8 flex flex-col sm:items-start">
              {button}
            </Reveal>
          )}

          {visual && <div className="mt-8 lg:mt-auto lg:pt-8">{visual}</div>}
        </div>

        <div className="flex flex-col">
          {aside ? (
            <Reveal delay={150}>{aside}</Reveal>
          ) : (
          <Reveal
            delay={150}
            className={`flex flex-col border-t-[6px] p-6 sm:p-8 ${
              light ? 'border-marino bg-blanco' : 'border-celeste bg-marino-claro'
            }`}
          >
            {itemsTitle && (
              <Reveal
                as="p"
                delay={250}
                className={`border-b-4 pb-4 text-sm font-bold uppercase tracking-[0.2em] ${
                  light ? 'border-marino text-celeste-profundo' : 'border-celeste text-celeste'
                }`}
              >
                {itemsTitle}
              </Reveal>
            )}
            <ol>
              {items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.name}
                  delay={300 + i * 120}
                  className={`${highlights ? 'py-1' : 'py-4'} ${
                    i === 0 ? '' : light ? 'border-t-2 border-niebla' : 'border-t-2 border-linea'
                  }`}
                >
                  {/* Si la sección marca un paso activo, ese paso se resalta en celeste */}
                  <div
                    className={`flex gap-5 transition-colors duration-500 ${highlights ? '-mx-3 px-3 py-2.5' : ''} ${
                      highlights && i === activeIndex ? (light ? 'bg-celeste-claro' : 'bg-celeste text-marino') : ''
                    }`}
                  >
                    {/* Sobre fondo oscuro, el paso activo va en celeste con texto marino */}
                    <span
                      className={`text-2xl font-extrabold leading-none ${
                        !light && highlights && i === activeIndex ? 'text-marino' : accent
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-lg font-extrabold uppercase leading-tight">{item.name}</p>
                      {item.text && (
                        <p
                          className={`mt-1.5 leading-relaxed ${
                            !light && highlights && i === activeIndex ? 'text-marino' : muted
                          }`}
                        >
                          {item.text}
                        </p>
                      )}
                    </div>
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
          )}

          {/* El botón va debajo de los pasos */}
          {!ctaLeft && button && (
            <Reveal delay={400 + items.length * 120} className="mt-6 flex flex-col sm:items-start">
              {button}
            </Reveal>
          )}
        </div>
      </div>

      {footer && <div className="mt-10">{footer}</div>}
    </Section>
  )
}
