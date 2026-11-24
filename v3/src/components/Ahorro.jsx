import { useState } from 'react'
import { Reveal } from './motion.jsx'
import { Etiqueta, Lead, Section, Title } from './ui.jsx'

// Calculadora: cada liga pone sus propios números. No prometemos un porcentaje:
// la persona elige cuánto de su gestión le pasaría a la IA.

const fmt = (n) => Math.round(n).toLocaleString('es-AR')

function Control({ label, valor, children }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-medium">{label}</span>
        <span className="text-lg font-bold tabular-nums">{valor}</span>
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
    <Section id="ahorro" tone="niebla">
      <Etiqueta tone="niebla">Cuánto ahorrás</Etiqueta>
      <Title>Tiempo que vuelve. Plata que queda.</Title>
      <Lead tone="niebla">Poné los números de tu liga y mirá cuánto recuperás pasándole parte del trabajo a tu IA.</Lead>

      <Reveal delay={150} className="mt-14 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-8 border-t-4 border-marino bg-blanco p-8 sm:p-10">
          <Control label="Horas de gestión por semana" valor={`${horas} h`}>
            <input type="range" min="2" max="80" step="1" value={horas} onChange={(e) => setHoras(+e.target.value)} className="mt-3 w-full" />
          </Control>
          <Control label="Costo de cada hora" valor={`USD ${costo}`}>
            <input type="range" min="2" max="40" step="1" value={costo} onChange={(e) => setCosto(+e.target.value)} className="mt-3 w-full" />
          </Control>
          <div>
            <p className="font-medium">¿Cuánto le pasarías a tu IA?</p>
            {/* Filtro que se prende y apaga: el único lugar donde va la píldora */}
            <div className="mt-3 grid grid-cols-3 gap-1 rounded-full bg-niebla p-1">
              {[25, 50, 75].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setDelegas(p)}
                  aria-pressed={delegas === p}
                  className={`rounded-full py-2 text-sm font-medium transition ${delegas === p ? 'bg-marino text-blanco' : 'text-pizarra hover:text-marino'}`}
                >
                  {p}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="flex flex-col justify-end border-t-4 border-celeste bg-marino p-8 text-blanco sm:p-10">
            <p className="text-sm font-medium tracking-[0.15em] text-bruma uppercase">Horas que vuelven a tu equipo, por año</p>
            <p className="mt-2 text-[2.6rem] leading-tight font-extrabold tabular-nums sm:text-6xl">{fmt(recuperadas)}</p>
          </div>
          {/* El bloque celeste es el destacado: uno solo por sección, con texto marino */}
          <div className="flex flex-col justify-end border-t-4 border-marino bg-celeste p-8 text-marino sm:p-10">
            <p className="text-sm font-medium tracking-[0.15em] uppercase">Ahorro por año</p>
            <p className="mt-2 text-[2.6rem] leading-tight font-extrabold tabular-nums sm:text-6xl">USD {fmt(plata)}</p>
            <p className="mt-2 text-sm">Estimación con tus números, sobre {fmt(horasAnio)} horas de gestión al año.</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
