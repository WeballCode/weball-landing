// Armador de combinaciones: la liga toca los procesos que ya resuelve con otro sistema
// y ve qué haría Weball. El botón abre WhatsApp con la combinación ya escrita.
import { useState } from 'react'
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'
import { whatsappLink } from '../links.js'

const processes = ['Fichajes', 'Fixture', 'Programación', 'Planillas', 'Árbitros', 'Resultados', 'Tribunal', 'Comunicación']

const list = (items) => items.join(', ').replace(/, ([^,]*)$/, ' y $1')

export default function Configurator() {
  // true = lo hace Weball; false = la liga ya lo tiene con otro sistema
  const [weball, setWeball] = useState(processes.map(() => true))
  const toggle = (i) => setWeball((w) => w.map((v, j) => (j === i ? !v : v)))

  const mine = processes.filter((_, i) => weball[i])
  const theirs = processes.filter((_, i) => !weball[i])
  const complete = theirs.length === 0

  const summary = complete
    ? 'Weball completo: los 8 procesos en un solo sistema.'
    : mine.length === 0
      ? 'Elegí al menos un proceso para Weball.'
      : `Weball se encarga de ${list(mine).toLowerCase()}, y se conecta con tu sistema para ${list(theirs).toLowerCase()}.`

  const message = complete
    ? 'Hola Weball, quiero consultar por Weball completo para mi liga.'
    : `Hola Weball, quiero consultar por estos procesos: ${list(mine)}. Ya tenemos sistema para: ${list(theirs)}.`

  return (
    <Section id="armador" light>
      <Label tone="light">Probalo con tu liga</Label>
      <Title>Armá tu combinación</Title>
      <Lead tone="light">Tocá los procesos que ya resolvés con otro sistema.</Lead>

      <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {processes.map((p, i) => (
          <li key={p}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={!weball[i]}
              className={`flex w-full cursor-pointer flex-col items-start gap-1 border-2 p-4 text-left transition ${
                weball[i] ? 'border-marino bg-marino text-blanco' : 'border-marino bg-transparent text-marino'
              }`}
            >
              <span className={`text-sm font-extrabold tabular-nums ${weball[i] ? 'text-celeste' : ''}`}>{`0${i + 1}`}</span>
              <span className="text-lg font-extrabold uppercase leading-tight">{p}</span>
              <span className="text-xs font-bold uppercase tracking-[0.15em]">{weball[i] ? 'Weball' : 'Ya lo tengo'}</span>
            </button>
          </li>
        ))}
      </ul>

      <Reveal delay={200} className="mt-6 flex flex-col gap-5 border-t-4 border-marino pt-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-xl font-extrabold leading-snug" aria-live="polite">
          {summary}
        </p>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={mine.length === 0 || undefined}
          className={`shrink-0 bg-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro ${
            mine.length === 0 ? 'pointer-events-none opacity-40' : ''
          }`}
        >
          Consultar por esta combinación
        </a>
      </Reveal>
    </Section>
  )
}
