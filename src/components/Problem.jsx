// El problema a escala: lo que en una liga chica se resuelve a mano, en una grande no alcanza.
// Lo de "antes" se tacha solo cuando aparece en pantalla.
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

const rows = [
  {
    before: 'Miles de fichajes en dos semanas, con fotocopias y fila en la sede',
    after: 'Cada jugador se ficha desde el celular con DNI y selfie',
  },
  {
    before: 'Un Excel de fixture por categoría que sólo una persona entiende',
    after: 'Todas las divisiones y categorías en un lugar, con la tabla calculada sola',
  },
  {
    before: 'Cientos de partidos por fin de semana coordinados por WhatsApp',
    after: 'Los clubes proponen, la liga aprueba y todos reciben día, hora y cancha',
  },
  {
    before: 'Designaciones que cambian el sábado a la mañana',
    after: 'Cada árbitro recibe su partido en el celular, sin pisarse con otro',
  },
  {
    before: 'Decenas de informes arbitrales por fecha leídos a mano',
    after: 'Tribunal IA propone cada sanción con su artículo y arma el boletín',
  },
  {
    before: 'Un sistema para cada cosa, y ninguno habla con el otro',
    after: 'Los 8 procesos conectados, o sólo los que te faltan',
  },
]

export default function Problem() {
  return (
    <Section id="escala" tone="darker">
      <Label>El problema a escala</Label>
      <Title>
        Con más de 1.000 jugadores, <span className="text-celeste">el WhatsApp no alcanza</span>
      </Title>
      <Lead>Lo que en una liga chica se resuelve a mano, en una grande se vuelve un trabajo de tiempo completo.</Lead>

      <div className="mt-8">
        <div className="hidden gap-x-10 lg:grid lg:grid-cols-2">
          <p className="pb-3 text-xs font-bold uppercase tracking-[0.2em] text-bruma">Así se organiza hoy</p>
          <p className="pb-3 text-xs font-bold uppercase tracking-[0.2em] text-celeste">Así, con Weball</p>
        </div>
        {rows.map((r, i) => (
          <Reveal key={r.before} delay={i * 120} className="grid gap-x-10 lg:grid-cols-2">
            {/* Antes: en gris, y una línea lo tacha */}
            <div className="flex items-center gap-3 border-t-2 border-linea py-3 text-bruma">
              <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center border-2 border-linea text-sm font-bold">
                ×
              </span>
              <span className="strike" style={{ transitionDelay: `${500 + i * 120}ms` }}>
                {r.before}
              </span>
            </div>
            {/* Después: en blanco con su tilde celeste */}
            <div className="mb-4 flex items-center gap-3 border-t-2 border-celeste py-3 lg:mb-0">
              <svg viewBox="0 0 16 16" className="h-6 w-6 shrink-0 text-celeste" aria-hidden="true">
                <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold">{r.after}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
