import { useState } from 'react'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Calculadora simple: la liga pone cuántos equipos tiene y cuánto vale una hora de quien organiza.
// Para cada una de las 4 tareas mostramos cuántas horas lleva hoy, a mano, y cuántas con Weball + IA.
// Supuestos (estimaciones, ajustalos acá): 2 torneos por año, 30 fechas por año, 15 jugadores por equipo,
// un partido por cada dos equipos en cada fecha.
const FECHAS = 30
const TORNEOS = 2

function calcular(equipos) {
  const partidos = equipos / 2 // por fecha
  return [
    // Hoy: ~40 min por equipo (inscripción + 15 fichas). Con IA: ~2 min por equipo para revisar.
    { tarea: 'Inscripciones y fichajes', hoy: (equipos * 40) / 60, ia: (equipos * 2) / 60 },
    // Hoy: 8 h por torneo + 5 min por equipo. Con IA: 15 min por torneo.
    { tarea: 'Fixtures', hoy: TORNEOS * (8 + (equipos * 5) / 60), ia: TORNEOS * 0.25 },
    // Hoy: 3 min por partido cada fecha. Con IA: 15 min por fecha.
    { tarea: 'Programaciones', hoy: (FECHAS * partidos * 3) / 60, ia: FECHAS * 0.25 },
    // Hoy: 3 min por partido (cargar y publicar). Con IA: 20 min por fecha.
    { tarea: 'Resultados', hoy: (FECHAS * partidos * 3) / 60, ia: (FECHAS * 20) / 60 },
  ]
}

const fmt = (n) => Math.round(n).toLocaleString('es-AR')

function Control({ label, valor, children }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-medium">{label}</span>
        <span className="text-lg font-semibold tabular-nums">{valor}</span>
      </span>
      {children}
    </label>
  )
}

export default function Ahorro() {
  const [equipos, setEquipos] = useState(40)
  const [valorHora, setValorHora] = useState(8000)

  const filas = calcular(equipos)
  const hoy = filas.reduce((s, f) => s + f.hoy, 0)
  const ia = filas.reduce((s, f) => s + f.ia, 0)
  const horas = hoy - ia
  const maximo = Math.max(...filas.map((f) => f.hoy))

  return (
    <Section id="ahorro">
      <Title>Ahorrás tiempo. Ahorrás plata.</Title>
      <Lead>Poné los números de tu liga y fijate cuánto ahorrás con nosotros.</Lead>

      <Reveal delay={150} className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[1.75rem] bg-fondo">
        <div className="grid gap-8 p-7 sm:grid-cols-2 sm:gap-10 sm:p-10">
          <Control label="Equipos en tu liga" valor={equipos}>
            <input type="range" min="8" max="200" step="2" value={equipos} onChange={(e) => setEquipos(+e.target.value)} className="mt-3 w-full" />
          </Control>
          <Control label="Lo que pagás por hora de gestión" valor={`$ ${fmt(valorHora)}`}>
            <input type="range" min="2000" max="30000" step="500" value={valorHora} onChange={(e) => setValorHora(+e.target.value)} className="mt-3 w-full" />
          </Control>
        </div>

        <div className="bg-white p-7 sm:m-2 sm:rounded-[1.4rem] sm:p-10">
          {/* Comparación tarea por tarea: barra gris = hoy, barra celeste = con Weball */}
          <div className="flex items-center gap-5 text-xs font-medium text-gris">
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-marino/20" />Hoy, a mano</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-celeste" />Con Weball + IA</span>
          </div>
          <ul className="mt-6 flex flex-col gap-5">
            {filas.map((f) => (
              <li key={f.tarea}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold">{f.tarea}</span>
                  <span className="text-sm text-gris tabular-nums">
                    {fmt(f.hoy)} h → <b className="text-tinta">{fmt(Math.max(f.ia, 1))} h</b>
                  </span>
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  <span className="block h-2 rounded-full bg-marino/15 transition-all duration-500" style={{ width: `${(f.hoy / maximo) * 100}%` }} />
                  <span className="block h-2 min-w-2 rounded-full bg-celeste transition-all duration-500" style={{ width: `${(f.ia / maximo) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 border-t border-marino/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-gris">Horas que ahorrás por año</p>
              <p className="mt-1 text-[2.1rem] leading-tight font-bold tracking-tight tabular-nums sm:text-6xl">{fmt(horas)} h</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gris">Plata que ahorrás por año</p>
              <p className="texto-ia mt-1 text-[2.1rem] leading-tight font-bold tracking-tight tabular-nums sm:text-6xl">$ {fmt(horas * valorHora)}</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-gris-claro">
            Estimación con {TORNEOS} torneos y {FECHAS} fechas por año, y 15 jugadores por equipo. De {fmt(hoy)} horas de gestión pasás a {fmt(ia)}.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
