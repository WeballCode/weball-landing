// Plantilla de la página de cada proceso. El contenido sale de src/procesos/<slug>.js:
// promesa y cifras → el problema a escala → cómo lo resolvemos → un caso real → cómo se conecta.
import { procesos, procesoHref, nn } from '../procesos.js'
import { whatsappLink } from '../links.js'
import { ProcessStrip } from './ProcessChain.jsx'
import { Icon, Label, Lead, Section, Title } from './ui.jsx'
import { CountUp, Reveal } from './motion.jsx'

const Tick = ({ className = 'text-celeste' }) => (
  <svg viewBox="0 0 16 16" className={`mt-1 h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Quién hace cada cosa: liga, club, jugador, árbitro...
function Who({ who = [], tone = 'dark' }) {
  if (!who.length) return null
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {who.map((w) => (
        <li
          key={w}
          className={`border px-2 py-0.5 text-xs font-bold uppercase tracking-[0.15em] ${
            tone === 'light' ? 'border-acero/40 text-acero' : 'border-linea text-bruma'
          }`}
        >
          {w}
        </li>
      ))}
    </ul>
  )
}

function Hero({ index, proceso, content, visual }) {
  return (
    <Section id="inicio" className="border-b border-linea">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <Label icon={proceso.icon}>{`Proceso ${nn(index)} de 08 · ${content.kicker}`}</Label>
          <Title as="h1">{proceso.name}</Title>
          <Lead>{content.promise}</Lead>

          {content.stats && (
            <dl className="mt-8 grid max-w-lg grid-cols-2 gap-x-8 gap-y-2">
              {content.stats.map((s, i) => (
                <Reveal key={s.label} delay={250 + i * 100} className="flex flex-col-reverse border-t-4 border-celeste py-3">
                  <dt className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-bruma">{s.label}</dt>
                  <dd className="text-3xl font-extrabold tabular-nums xl:text-4xl">
                    {s.count === false ? s.value : <CountUp value={s.value} />}
                  </dd>
                </Reveal>
              ))}
            </dl>
          )}
          {content.statsNote && (
            <Reveal as="p" delay={500} className="mt-2 text-xs text-bruma">
              {content.statsNote}
            </Reveal>
          )}

          <Reveal delay={500} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(`Hola Weball, quiero conocer cómo resuelven ${proceso.name.toLowerCase()} para mi liga.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-celeste px-7 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
            >
              Quiero verlo en mi liga
            </a>
            <a
              href="#como"
              className="border-2 border-blanco/70 px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-blanco hover:text-marino"
            >
              Cómo lo resolvemos
            </a>
          </Reveal>
        </div>
        {visual && (
          <Reveal delay={200} className="min-w-0">
            {visual}
          </Reveal>
        )}
      </div>
    </Section>
  )
}

function Pains({ content }) {
  return (
    <Section id="problema" light>
      <Label tone="light" icon="escala">
        El problema a escala
      </Label>
      <Title>{content.painsTitle}</Title>
      {content.painsLead && <Lead tone="light">{content.painsLead}</Lead>}
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {content.pains.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 120} className="border-t-4 border-marino bg-blanco p-6">
            <h3 className="text-lg font-extrabold uppercase leading-tight">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-pizarra">{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function Features({ content }) {
  return (
    <Section id="como" tone="darker">
      <Label icon="rayo">Cómo lo resolvemos</Label>
      <Title>{content.featuresTitle}</Title>
      {content.featuresLead && <Lead>{content.featuresLead}</Lead>}
      <div className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2">
        {content.features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 2) * 100} className="border-t-2 border-linea py-6">
            <h3 className="text-xl font-extrabold uppercase leading-tight">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-bruma">{f.text}</p>
            {f.points && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {f.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm font-medium">
                    <Tick />
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            <Who who={f.who} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Caso({ caso }) {
  if (!caso) return null
  return (
    <Section id="caso" tone="celeste">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <Label tone="celeste">{caso.kicker}</Label>
          <Title>{caso.title}</Title>
          <Lead tone="celeste">{caso.text}</Lead>
          <Reveal delay={300} className="mt-8">
            <a
              href="./ligas.html"
              className="inline-block bg-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
            >
              Ver las ligas que usan Weball
            </a>
          </Reveal>
        </div>
        <ul className="flex flex-col">
          {caso.points.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={150 + i * 100}
              className={`border-marino py-5 ${i === 0 ? 'border-t-4' : 'border-t-2'}`}
            >
              <p className="text-lg font-extrabold uppercase leading-tight">{p.title}</p>
              <p className="mt-1.5 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}

// Con qué procesos se conecta y qué pasa si la liga ya usa otro sistema para el resto
function Connections({ content }) {
  const bySlug = Object.fromEntries(procesos.map((p, i) => [p.slug, { ...p, i }]))
  const Column = ({ title, items }) => (
    <Reveal className="border-t-4 border-celeste bg-marino-claro p-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-celeste">{title}</p>
      <ul className="mt-4 flex flex-col gap-4">
        {items.map((it) => {
          const p = bySlug[it.slug]
          return (
            <li key={it.slug + it.text}>
              <a href={procesoHref(it.slug)} className="font-extrabold uppercase transition hover:text-celeste">
                {`${nn(p.i)} · ${p.short} →`}
              </a>
              <p className="mt-1 leading-relaxed text-bruma">{it.text}</p>
            </li>
          )
        })}
      </ul>
    </Reveal>
  )
  return (
    <Section id="conecta">
      <Label icon="conectar">Contratalo solo o con el resto</Label>
      <Title>Se conecta con lo que ya usás</Title>
      <Lead>{content.connections.lead}</Lead>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Column title="Toma de" items={content.connections.from} />
        <Column title="Le pasa a" items={content.connections.to} />
        <Reveal delay={200} className="border-t-4 border-blanco bg-blanco p-6 text-marino">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-celeste-profundo">Si ya usás otro sistema</p>
          <ul className="mt-4 flex flex-col gap-3">
            {content.connections.external.map((t) => (
              <li key={t} className="flex gap-2 leading-relaxed">
                <Tick className="text-celeste-profundo" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

function PrevNext({ index }) {
  const prev = procesos[index - 1]
  const next = procesos[index + 1]
  return (
    <nav aria-label="Proceso anterior y siguiente" className="border-t border-linea bg-marino">
      <div className="mx-auto grid max-w-6xl gap-px px-4 sm:grid-cols-2 sm:px-6">
        {prev ? (
          <a href={procesoHref(prev.slug)} className="group py-8 transition hover:text-celeste">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-bruma">← Proceso anterior</span>
            <span className="mt-2 flex items-center gap-3 text-xl font-extrabold uppercase">
              <Icon name={prev.icon} className="h-6 w-6" />
              {`${nn(index - 1)} · ${prev.name}`}
            </span>
          </a>
        ) : (
          <a href="./soluciones.html" className="py-8 transition hover:text-celeste">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-bruma">← Todos</span>
            <span className="mt-2 block text-xl font-extrabold uppercase">Los 8 procesos</span>
          </a>
        )}
        {next ? (
          <a href={procesoHref(next.slug)} className="py-8 transition hover:text-celeste sm:text-right">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-bruma">Proceso siguiente →</span>
            <span className="mt-2 flex items-center gap-3 text-xl font-extrabold uppercase sm:justify-end">
              {`${nn(index + 1)} · ${next.name}`}
              <Icon name={next.icon} className="h-6 w-6" />
            </span>
          </a>
        ) : (
          <a href="./soluciones.html" className="py-8 transition hover:text-celeste sm:text-right">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-bruma">Todos →</span>
            <span className="mt-2 block text-xl font-extrabold uppercase">Los 8 procesos</span>
          </a>
        )}
      </div>
    </nav>
  )
}

export default function ProcessPage({ slug, content, visual }) {
  const index = procesos.findIndex((p) => p.slug === slug)
  const proceso = procesos[index]
  return (
    <>
      <ProcessStrip current={slug} />
      <Hero index={index} proceso={proceso} content={content} visual={visual} />
      <Pains content={content} />
      <Features content={content} />
      <Caso caso={content.caso} />
      <Connections content={content} />
      <PrevNext index={index} />
    </>
  )
}
