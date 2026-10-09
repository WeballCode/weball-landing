import { Label, Section, Title } from './ui.jsx'

const placements = [
  { section: 'Tablas de posiciones', tag: 'Presentada por' },
  { section: 'Partidos', tag: 'Auspicia el partido' },
  { section: 'Perfiles de clubes', tag: 'Sponsors oficiales' },
]

const commercial = [
  { name: 'Productos', text: 'La marca muestra sus productos y deriva a su tienda.' },
  { name: 'Servicios', text: 'Contratación directa por WhatsApp o por el sitio de la marca.' },
  { name: 'Beneficios', text: 'Promociones exclusivas para jugadores y la comunidad.' },
  { name: 'Campañas', text: 'Promociones segmentadas dentro de la liga.' },
]

const metrics = [
  { name: 'Cuántas veces apareció', text: 'Impresiones totales del sponsor.' },
  { name: 'En dónde', text: 'Detalle por sección de la app.' },
  { name: 'Cuánta gente hizo clic', text: 'Interacción real con la marca.' },
]

export default function Sponsors() {
  return (
    <Section id="sponsors" light>
      <Label dark={false}>Tus sponsors</Label>
      <Title>
        No solo visibilidad: <span className="text-celeste-profundo">actividad comercial</span>
      </Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        Las marcas forman parte de la experiencia de la app, venden dentro de la liga y ven sus resultados.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {placements.map((p) => (
          <div key={p.section} className="flex min-h-44 flex-col justify-between gap-6 border-t-[6px] border-marino bg-blanco p-7">
            <h3 className="text-2xl font-extrabold uppercase leading-none">{p.section}</h3>
            <div className="flex flex-col gap-1 border-2 border-dashed border-celeste-profundo px-4 py-3">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-acero">{p.tag}</span>
              <span className="font-bold text-celeste-profundo">+ Sponsor</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-3xl font-extrabold uppercase leading-none sm:text-4xl">El perfil de la marca</h3>
          <ul className="mt-8">
            {commercial.map((c, i) => (
              <li
                key={c.name}
                className={`flex flex-col gap-1 border-marino py-4 sm:flex-row sm:gap-6 ${i === 0 ? 'border-t-4' : 'border-t-2'}`}
              >
                <p className="text-xl font-extrabold uppercase sm:w-40 sm:shrink-0">{c.name}</p>
                <p className="leading-relaxed text-pizarra">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col border-t-[6px] border-celeste bg-marino p-7 text-blanco sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-celeste">Panel del sponsor</p>
          <p className="mt-4 text-2xl font-extrabold uppercase leading-tight">Cada marca ve sus propias métricas</p>
          <ul className="mt-8">
            {metrics.map((m, i) => (
              <li key={m.name} className={`py-4 ${i === 0 ? 'border-t-4 border-celeste' : 'border-t-2 border-linea'}`}>
                <p className="font-extrabold uppercase">{m.name}</p>
                <p className="mt-1 text-bruma">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
