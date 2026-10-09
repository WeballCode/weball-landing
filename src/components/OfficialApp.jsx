import { Label, Section, Title } from './ui.jsx'

const shows = ['Jugadores', 'Partidos', 'Resultados', 'Tablas', 'Info de la liga', 'Fotos y videos', 'Estadísticas']

const content = [
  { name: 'Fotos y videos', text: 'Sumá contenido generado por la comunidad.' },
  { name: 'Placas para redes', text: 'Resultados, tablas y material gráfico de la liga.' },
  { name: 'Links del partido', text: 'Acceso directo al streaming desde la app.' },
]

export default function OfficialApp() {
  return (
    <Section id="app" light>
      <Label dark={false}>Weball Comunicación · Tu app</Label>
      <Title>
        La app oficial de <span className="text-celeste-profundo">tu liga</span>
      </Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        Una app con el nombre y la identidad de tu liga, para jugadores, familias y público.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col border-t-[6px] border-marino bg-blanco p-7 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-acero">Lo que muestra</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {shows.map((s) => (
              <li key={s} className="border-2 border-marino px-3.5 py-2 font-bold">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col border-t-[6px] border-marino bg-celeste p-7 text-marino sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Registro completo de jugadores</p>
          <p className="mt-4 text-2xl font-extrabold uppercase leading-tight">
            Pedí los datos que tu liga necesite
          </p>
          <p className="mt-3 leading-relaxed">
            Además de los datos básicos: dirección, talle de zapatillas, de camiseta y más.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-extrabold uppercase leading-none sm:text-4xl">Cada partido genera contenido</h3>
        <p className="mt-3 text-pizarra">Un servicio para que los equipos tengan qué publicar todas las semanas.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {content.map((c, i) => (
            <div key={c.name} className="flex min-h-44 flex-col gap-3 border-t-[6px] border-marino bg-blanco p-7">
              <span className="text-2xl font-extrabold text-celeste-profundo">0{i + 1}</span>
              <h4 className="text-2xl font-extrabold uppercase leading-none">{c.name}</h4>
              <p className="leading-relaxed text-pizarra">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
