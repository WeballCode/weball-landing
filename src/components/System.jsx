import { Label, Section, Title } from './ui.jsx'

const modules = [
  { name: 'Equipos', text: 'Carga e inscripción de clubes y equipos.' },
  { name: 'Fichajes', text: 'Fichaje de jugadores y armado de planteles desde el celular.' },
  { name: 'Competiciones', text: 'Torneos a medida, con el formato y las reglas de tu liga.' },
  { name: 'Programaciones', text: 'Fecha, hora y sede de cada partido, y designación de árbitros.' },
  { name: 'Estadísticas', text: 'Carga y publicación de resultados al instante.' },
  { name: 'Tribunal IA', text: 'Sanciones aplicadas por reglamento, con ayuda de inteligencia artificial.', featured: true },
]

const space = [
  { name: 'Su gestión', text: 'Cada filial administra su propia actividad.' },
  { name: 'Su identidad', text: 'Sus clubes, sus torneos y sus equipos.' },
  { name: 'Sus sponsors', text: 'Su espacio propio para sus marcas.' },
]

export default function System() {
  return (
    <Section id="sistema" light>
      <Label dark={false}>Weball Gestión · Tu sistema</Label>
      <Title>Todo lo que tu liga necesita para funcionar</Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pizarra">
        Organizá tu liga de punta a punta: desde la inscripción de los equipos hasta las sanciones.
      </p>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <li
            key={m.name}
            className={`flex min-h-48 flex-col gap-3 border-t-[6px] border-marino p-7 ${
              m.featured ? 'bg-celeste text-marino' : 'bg-blanco'
            }`}
          >
            <span className={`text-2xl font-extrabold ${m.featured ? 'text-marino' : 'text-celeste-profundo'}`}>
              {i + 1}.
            </span>
            <h3 className="text-2xl font-extrabold uppercase leading-none">{m.name}</h3>
            <p className={`leading-relaxed ${m.featured ? 'text-marino' : 'text-pizarra'}`}>{m.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 bg-marino p-7 text-blanco sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-celeste">Para federaciones y asociaciones</p>
          <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none sm:text-4xl">
            Cada liga tiene su propio espacio
          </h3>
          <p className="mt-4 leading-relaxed text-bruma">
            Todas las ligas asociadas trabajan dentro del mismo sistema, y cada una maneja lo suyo.
          </p>
        </div>
        <ul>
          {space.map((s, i) => (
            <li
              key={s.name}
              className={`flex flex-col gap-1 py-4 sm:flex-row sm:gap-6 ${
                i === 0 ? 'border-t-4 border-celeste' : 'border-t-2 border-linea'
              }`}
            >
              <p className="text-xl font-extrabold uppercase sm:w-44 sm:shrink-0">{s.name}</p>
              <p className="leading-relaxed text-bruma">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
