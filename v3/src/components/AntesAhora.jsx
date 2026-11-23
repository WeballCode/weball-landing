import { Reveal } from './motion.jsx'
import { Label, Section, Title } from './ui.jsx'

// El antes (planillas, WhatsApp, horas) y el ahora (una conversación)
const filas = [
  ['Copiar inscripciones del formulario a mano, equipo por equipo', 'Le pasás el formulario y los equipos quedan inscriptos'],
  ['Armar el fixture en una planilla y revisar que no haya errores', 'Le decís el formato y el fixture sale completo'],
  ['Cruzar canchas, horarios y equipos hasta que todo cierre', 'Le contás qué canchas tenés y la fecha queda programada'],
  ['Juntar resultados por WhatsApp y actualizar la tabla de noche', 'Le pasás los resultados y se publican al instante'],
]

export default function AntesAhora() {
  return (
    <Section id="antes-ahora" tone="blanco">
      <Label tone="blanco">Gestionar una liga no debería ser un segundo trabajo</Label>
      <Title>Lo que te llevaba la semana, ahora es una conversación.</Title>

      <div className="mt-12 overflow-hidden rounded-2xl border border-marino/10">
        <div className="hidden grid-cols-2 bg-niebla text-xs font-bold uppercase tracking-[0.18em] sm:grid">
          <p className="px-6 py-3.5 text-acero">Antes</p>
          <p className="border-l border-marino/10 px-6 py-3.5 text-celeste-profundo">Con Weball y tu IA</p>
        </div>
        <ul>
          {filas.map(([antes, ahora], i) => (
            <Reveal as="li" key={antes} delay={i * 100} className="grid border-t border-marino/10 first:border-t-0 sm:grid-cols-2 sm:first:border-t">
              <p className="px-6 pt-5 pb-2 text-acero sm:py-6">
                <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.18em] sm:hidden">Antes</span>
                <span className="strike">{antes}</span>
              </p>
              <p className="flex items-start gap-3 px-6 pt-2 pb-6 font-bold text-marino sm:border-l sm:border-marino/10 sm:py-6">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-celeste text-marino" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {ahora}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
