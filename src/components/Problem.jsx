// El antes y el después: cómo se organiza hoy una liga amateur y cómo queda con Weball.
// Lo de "antes" se tacha solo cuando aparece en pantalla.
import { Label, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

const rows = [
  { before: 'Fichajes con fotocopias y carpetas', after: 'Cada jugador se ficha desde el celular, con credencial digital' },
  { before: 'Fixtures en Excel que cambian todas las semanas', after: 'El fixture de toda la temporada, armado en minutos' },
  { before: 'Planillas en papel que se pierden', after: 'El árbitro carga el partido en vivo desde el celular' },
  { before: 'Resultados y sanciones por grupos de WhatsApp', after: 'Todo publicado al instante en la app de tu liga' },
]

export default function Problem() {
  return (
    <Section id="antes" tone="darker">
      <Label>El problema</Label>
      <Title>
        Del papel y el WhatsApp <span className="text-celeste">a Weball</span>
      </Title>

      <div className="mt-10">
        <div className="hidden gap-x-10 lg:grid lg:grid-cols-2">
          <p className="pb-3 text-xs font-bold uppercase tracking-[0.2em] text-bruma">Así se organiza hoy</p>
          <p className="pb-3 text-xs font-bold uppercase tracking-[0.2em] text-celeste">Así, con Weball</p>
        </div>
        {rows.map((r, i) => (
          <Reveal key={r.before} delay={i * 150} className="grid gap-x-10 lg:grid-cols-2">
            {/* Antes: en gris, y una línea lo tacha */}
            <div className="flex items-center gap-3 border-t-2 border-linea py-4 text-bruma">
              <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center border-2 border-linea text-sm font-bold">
                ×
              </span>
              <span className="strike text-lg" style={{ transitionDelay: `${500 + i * 150}ms` }}>
                {r.before}
              </span>
            </div>
            {/* Después: en blanco con su tilde celeste */}
            <div className="mb-4 flex items-center gap-3 border-t-2 border-celeste py-4 lg:mb-0">
              <svg viewBox="0 0 16 16" className="h-6 w-6 shrink-0 text-celeste" aria-hidden="true">
                <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-lg font-bold">{r.after}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
