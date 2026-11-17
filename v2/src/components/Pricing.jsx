// Página de precios: el precio por jugador, cómo se paga, una calculadora por tamaño de liga,
// qué incluye y las dudas más comunes.
import { useState } from 'react'
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'
import PriceCard from './PriceCard.jsx'
import { PRICE_MONTH, PRICE_YEAR, usd } from './pricing.js'

const steps = [
  { title: 'Tu liga se suma a Weball', text: 'Te dejamos el sistema y la app listos con el formato de tu liga.' },
  { title: 'Cada jugador activa su credencial', text: `Se ficha desde el celular y paga USD ${usd(PRICE_YEAR)} por el año.` },
  { title: 'A jugar toda la temporada', text: 'Con su credencial digital, resultados en vivo y la app de la liga.' },
]

// Los 8 procesos de Weball completo
const includes = [
  'Fichajes y credencial digital',
  'Fixture y tablas',
  'Programación de partidos',
  'Planillas impresas y digitales',
  'Asignación de árbitros',
  'Carga de resultados',
  'Tribunal IA',
  'App, web y avisos de tu liga',
]

const faqs = [
  {
    q: '¿Quién paga?',
    a: 'Cada jugador, cuando activa su credencial digital de juego desde el celular. Si la liga prefiere, lo puede pagar ella por sus jugadores.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: `USD ${usd(PRICE_YEAR)} por jugador al año, que equivale a USD ${usd(PRICE_MONTH, 2)} por mes.`,
  },
  {
    q: '¿Qué incluye?',
    a: 'Weball completo incluye los 8 procesos: fichajes, fixture, programación, planillas, árbitros, resultados, Tribunal IA y comunicación, con la app y la web de tu liga. No hay extras.',
  },
  {
    q: '¿Puedo contratar sólo algunos procesos?',
    a: 'Sí. Cada proceso se contrata por separado y se conecta con el sistema que ya usás. Escribinos y te cotizamos los que necesites.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'El precio es en dólares. En Argentina se paga por Mercado Pago.',
  },
  {
    q: '¿Por qué depende del tamaño de la liga?',
    a: 'Porque el precio es por jugador: una liga con más jugadores suma más credenciales activas.',
  },
]

// Calculadora: según los jugadores de la liga, cuánto suman las credenciales al año y al mes
function Calculator() {
  const [players, setPlayers] = useState(1500)
  return (
    <div className="border-t-[6px] border-marino bg-blanco p-6 sm:p-8">
      <label htmlFor="jugadores" className="text-xs font-bold uppercase tracking-[0.2em] text-celeste-profundo">
        ¿Cuántos jugadores tiene tu liga?
      </label>
      <p className="mt-3 text-5xl font-extrabold tabular-nums">{usd(players)}</p>
      <input
        id="jugadores"
        type="range"
        min="50"
        max="5000"
        step="50"
        value={players}
        onChange={(e) => setPlayers(Number(e.target.value))}
        className="mt-5 w-full cursor-pointer accent-celeste-profundo"
      />
      <div className="flex justify-between text-xs font-medium text-acero">
        <span>50</span>
        <span>5.000</span>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 border-t-2 border-niebla pt-5">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.15em] text-acero">Al año</dt>
          <dd className="mt-1 text-3xl font-extrabold tabular-nums">{`USD ${usd(players * PRICE_YEAR)}`}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.15em] text-acero">Por mes</dt>
          <dd className="mt-1 text-3xl font-extrabold tabular-nums">{`USD ${usd(players * PRICE_MONTH)}`}</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-pizarra">
        {`Es lo que suman las credenciales de tus ${usd(players)} jugadores, a USD ${usd(PRICE_YEAR)} cada una por año.`}
      </p>
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      {/* El precio */}
      <Section id="precio">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Label icon="credencial">Precios</Label>
            <Title as="h1">Un precio simple, que crece con tu liga</Title>
            <Lead>
              Depende del tamaño de tu liga: se paga por jugador. Lo paga cada jugador al activar su credencial digital
              de juego, o la liga, si prefiere hacerse cargo.
            </Lead>
          </div>
          <Reveal delay={200}>
            <PriceCard tone="darker" />
          </Reveal>
        </div>
      </Section>

      {/* Cómo se paga */}
      <Section id="como-funciona" tone="darker">
        <Label>Cómo funciona</Label>
        <Title>En tres pasos</Title>
        <ol className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="border-t-4 border-celeste bg-marino p-6">
              <span className="text-4xl font-extrabold text-celeste">{`0${i + 1}`}</span>
              <h3 className="mt-3 text-xl font-extrabold uppercase leading-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-bruma">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Calculadora y qué incluye */}
      <Section id="calculadora" light>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Label tone="light">Calculadora</Label>
            <Title>¿Cuánto es para tu liga?</Title>
            <Lead tone="light">Mové la barra con la cantidad de jugadores de tu liga.</Lead>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-celeste-profundo">Weball completo: los 8 procesos</p>
            <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
              {includes.map((t) => (
                <li key={t} className="flex items-center gap-2 border-t-2 border-blanco py-3 font-bold">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-celeste-profundo" aria-hidden="true">
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={200}>
            <Calculator />
          </Reveal>
        </div>
      </Section>

      {/* Dudas de precios */}
      <Section id="dudas-precios">
        <Label>Dudas</Label>
        <Title>Sobre el precio</Title>
        <dl className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 100} className="border-t-4 border-linea pt-5">
              <dt className="text-lg font-extrabold">{f.q}</dt>
              <dd className="mt-2 leading-relaxed text-bruma">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>
    </>
  )
}
