import { Icon, Label, Section, Title } from './ui.jsx'

const fullPieces = [
  { n: '01', name: 'Tu sistema', text: 'Para que tu liga organice toda la actividad deportiva.' },
  { n: '02', name: 'Tu app', text: 'Ligas, torneos, jugadores, resultados y estadísticas a la vista de todos.' },
  { n: '03', name: 'Tus sponsors', text: 'Las marcas forman parte de la experiencia.' },
]

const sources = ['La plataforma que usás hoy', 'Planillas de Excel', 'Lo que uses']

export default function Products() {
  return (
    <Section id="producto">
      <Label>Qué es Weball</Label>
      <Title>
        Dos formas de <span className="text-celeste">sumarte</span>
      </Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bruma">
        A cada liga, con marca propia o no, le damos el salto de calidad de la misma manera. Elegí si querés la
        plataforma completa o solo resolver la comunicación.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col border-t-[6px] border-marino bg-celeste p-7 text-marino sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em]">La plataforma oficial de tu liga</p>
            <Icon name="gestion" className="h-9 w-9 shrink-0" />
          </div>
          <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none sm:text-4xl">
            Weball Gestión + Comunicación
          </h3>
          <p className="mt-4 leading-relaxed">
            El sistema de gestión y la app oficial de tu liga, juntos. Todo lo que tu liga necesita, en un solo lugar.
          </p>
          <ul className="mt-8">
            {fullPieces.map((p, i) => (
              <li key={p.n} className={`flex gap-5 border-marino py-4 ${i === 0 ? 'border-t-4' : 'border-t-2'}`}>
                <span className="text-xl font-extrabold">{p.n}</span>
                <div>
                  <p className="text-xl font-extrabold uppercase">{p.name}</p>
                  <p className="mt-1 leading-relaxed">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col border-t-[6px] border-celeste bg-marino-claro p-7 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-celeste">¿Ya usás otra plataforma?</p>
            <Icon name="app" className="h-9 w-9 shrink-0 text-celeste" />
          </div>
          <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none sm:text-4xl">Weball Comunicación</h3>
          <p className="mt-4 leading-relaxed text-bruma">
            La comunicación de tu liga, resuelta. Nos conectamos con lo que ya usás y tu liga tiene su propia app.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <div className="border-t-4 border-celeste pt-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-bruma">Tus datos hoy</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {sources.map((s) => (
                  <li key={s} className="border-2 border-linea px-3 py-1.5 text-sm font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-linea pt-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-bruma">Ingeniería Weball</p>
              <p className="mt-2 font-bold">Integramos y ordenamos jugadores, equipos, fixture, resultados y tablas.</p>
            </div>
            <div className="border-t-2 border-linea pt-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-celeste">Resultado</p>
              <p className="mt-2 text-xl font-extrabold uppercase">Tu app completa</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-3xl leading-relaxed text-bruma">
        <span className="font-bold text-blanco">Y todas las ligas, en un mismo lugar:</span> We Are Weball es la
        comunidad pública donde se siguen los partidos, las tablas y los perfiles de cada liga.
      </p>
    </Section>
  )
}
