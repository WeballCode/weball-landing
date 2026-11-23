import { useState } from 'react'
import { Reveal } from './motion.jsx'
import { Label, Lead, Section, Title } from './ui.jsx'

// Calculadora: cada liga pone sus propios números. No prometemos un porcentaje:
// la persona elige cuánto de su gestión le pasaría a la IA.

const fmt = (n) => Math.round(n).toLocaleString('es-AR')

function Control({ label, valor, children }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-bold">{label}</span>
        <span className="font-mono text-lg text-celeste-profundo">{valor}</span>
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
    <Section id="ahorro" tone="blanco">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <Label tone="blanco">Tiempo es plata</Label>
          <Title>¿Cuánto le cuesta a tu liga gestionar a mano?</Title>
          <Lead tone="blanco">
            Poné tus números: las horas que tu equipo le dedica cada semana a inscripciones, fixture, programación y resultados, y cuánto
            vale cada hora. Mirá lo que recuperás pasándole parte de ese trabajo a tu IA.
          </Lead>
        </div>

        <Reveal delay={150} className="rounded-2xl border border-marino/10 bg-niebla p-6 sm:p-8">
          <div className="flex flex-col gap-7">
            <Control label="Horas de gestión por semana" valor={`${horas} h`}>
              <input type="range" min="2" max="80" step="1" value={horas} onChange={(e) => setHoras(+e.target.value)} className="mt-3 w-full" />
            </Control>
            <Control label="Costo de cada hora (USD)" valor={`USD ${costo}`}>
              <input type="range" min="2" max="40" step="1" value={costo} onChange={(e) => setCosto(+e.target.value)} className="mt-3 w-full" />
            </Control>
            <div>
              <p className="font-bold">¿Cuánto de ese trabajo le pasarías a tu IA?</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[25, 50, 75].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setDelegas(p)}
                    aria-pressed={delegas === p}
                    className={`rounded-lg border-2 py-2.5 font-bold transition ${
                      delegas === p ? 'border-marino bg-marino text-blanco' : 'border-marino/15 text-marino hover:border-marino/40'
                    }`}
                  >
                    {p}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-marino/10">
            <div className="bg-marino px-5 py-5 text-blanco">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-bruma">Horas por año</p>
              <p className="mt-1 text-3xl font-extrabold tabular-nums sm:text-4xl">{fmt(recuperadas)}</p>
              <p className="mt-1 text-sm text-bruma">que vuelven a tu equipo</p>
            </div>
            <div className="bg-celeste px-5 py-5 text-marino">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-marino/70">Ahorro por año</p>
              <p className="mt-1 text-3xl font-extrabold tabular-nums sm:text-4xl">USD {fmt(plata)}</p>
              <p className="mt-1 text-sm text-marino/70">en horas de gestión</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-acero">Estimación con tus números: {fmt(horasAnio)} horas de gestión al año.</p>
        </Reveal>
      </div>
    </Section>
  )
}
