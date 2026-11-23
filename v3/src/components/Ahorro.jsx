import { useState } from 'react'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Calculadora: cada liga pone sus propios números. No prometemos un porcentaje:
// la persona elige cuánto de su gestión le pasaría a la IA.

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
  const [horas, setHoras] = useState(20)
  const [costo, setCosto] = useState(10)
  const [delegas, setDelegas] = useState(50)

  const horasAnio = horas * 52
  const recuperadas = (horasAnio * delegas) / 100
  const plata = recuperadas * costo

  return (
    <Section id="ahorro">
      <Title>Tiempo que vuelve. Plata que queda.</Title>
      <Lead>Poné los números de tu liga y mirá cuánto recuperás pasándole parte del trabajo a tu IA.</Lead>

      <Reveal delay={150} className="mx-auto mt-16 grid max-w-5xl overflow-hidden rounded-[1.75rem] bg-fondo lg:grid-cols-2">
        <div className="flex flex-col gap-8 p-8 sm:p-10">
          <Control label="Horas de gestión por semana" valor={`${horas} h`}>
            <input type="range" min="2" max="80" step="1" value={horas} onChange={(e) => setHoras(+e.target.value)} className="mt-3 w-full" />
          </Control>
          <Control label="Costo de cada hora" valor={`USD ${costo}`}>
            <input type="range" min="2" max="40" step="1" value={costo} onChange={(e) => setCosto(+e.target.value)} className="mt-3 w-full" />
          </Control>
          <div>
            <p className="font-medium">¿Cuánto le pasarías a tu IA?</p>
            <div className="mt-3 grid grid-cols-3 gap-1 rounded-full bg-black/[0.06] p-1">
              {[25, 50, 75].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setDelegas(p)}
                  aria-pressed={delegas === p}
                  className={`rounded-full py-2 text-sm font-medium transition ${delegas === p ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)]' : 'text-gris hover:text-tinta'}`}
                >
                  {p}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 bg-white p-8 sm:p-10 lg:m-2 lg:rounded-[1.4rem]">
          <div>
            <p className="text-sm font-medium text-gris">Horas que vuelven a tu equipo, por año</p>
            <p className="mt-1 text-6xl font-bold tracking-tight tabular-nums">{fmt(recuperadas)}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gris">Ahorro por año</p>
            <p className="texto-ia mt-1 text-6xl font-bold tracking-tight tabular-nums">USD {fmt(plata)}</p>
          </div>
          <p className="text-xs text-gris-claro">Estimación con tus números, sobre {fmt(horasAnio)} horas de gestión al año.</p>
        </div>
      </Reveal>
    </Section>
  )
}
