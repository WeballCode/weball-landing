// Las ligas que usan Weball, en corto: FUTSALA grande y las otras al lado. El detalle está en ligas.html.
import { futsala, otras } from '../ligas.js'
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

export default function Clientes() {
  return (
    <Section id="ligas" light>
      <Label tone="light" icon="mundo">
        Ligas que usan Weball
      </Label>
      <Title>De Buenos Aires a Bogotá</Title>
      <Lead tone="light">FUTSALA y sus filiales en cuatro países, BAFI, la Superliga de Handball y una temporada en Canadá.</Lead>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {/* FUTSALA, la más grande, ocupa más lugar */}
        <Reveal className="flex flex-col bg-marino p-6 text-blanco sm:p-8 lg:row-span-2">
          <img src="./ligas/futsala-blanco.png" alt="FUTSALA" width="1101" height="201" className="h-auto w-56" />
          <p className="mt-5 leading-relaxed text-bruma">{futsala.text}</p>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {futsala.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-t-4 border-celeste pt-2">
                <dt className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-bruma">{s.label}</dt>
                <dd className="text-2xl font-extrabold tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-celeste">
            {futsala.filiales.map((f) => f.name.replace(' (ACFA)', '')).join(' · ')}
          </p>
        </Reveal>

        {otras.map((l, i) => (
          <Reveal key={l.id} delay={100 + i * 100} className="flex flex-col border-t-4 border-marino bg-blanco p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-celeste-profundo">{l.sport}</p>
            <h3 className="mt-2 text-2xl font-extrabold uppercase leading-tight">{l.name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-pizarra">{l.text}</p>
            <p className="mt-4 text-sm font-bold">{l.stats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(' · ')}</p>
          </Reveal>
        ))}

        <Reveal delay={400} className="flex flex-col justify-between gap-4 bg-celeste p-6">
          <p className="text-xl font-extrabold uppercase leading-tight">Cómo se adapta Weball a cada liga y a sus datos</p>
          <a
            href="./ligas.html"
            className="self-start bg-marino px-6 py-3.5 font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
          >
            Ver las ligas →
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
