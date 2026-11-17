// "Contratá sólo lo que te falta": la liga marca qué procesos ya resuelve con otro sistema
// y ve cómo queda la cadena: Weball en los que faltan, conectado con lo que ya usa.
import { useState } from 'react'
import { procesos, procesoHref, nn } from '../procesos.js'
import { whatsappLink } from '../links.js'
import { Icon, Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'

// Cómo nos conectamos con lo que la liga ya usa. Cambiá los textos acá.
// Todo lo de esta lista existe hoy (noviembre de 2026). No sumes formas que el sistema todavía no tiene.
export const formasDeConectar = [
  {
    title: 'Cargamos tus datos',
    text: 'Clubes, jugadores, fixture e historial desde tu plataforma o tus planillas: nuestro equipo los ordena y los deja listos.',
  },
  {
    title: 'Nos integramos con tu sistema',
    text: 'Si tu liga tiene su propio sistema, lo conectamos. Con FUTSALA, Weball le envía las inscripciones de clubes y los usuarios al suyo.',
  },
  {
    title: 'Tus planillas de Google, al día',
    text: 'La programación, las designaciones de árbitros y el reporte de fichajes se copian solos a tus planillas de Google.',
  },
  {
    title: 'Todo sale en Excel',
    text: 'Fichajes, personas, fixture, sanciones y boletines se exportan en Excel; el boletín, también en PDF y Word.',
  },
  {
    title: 'Tu web lee nuestros datos',
    text: 'Una API pública de lectura, documentada, entrega fixture, tablas, resultados, clubes y planteles a tu web o tu sistema.',
  },
  {
    title: 'Árbitros de otra organización',
    text: 'Un colegio de árbitros externo trabaja en tus partidos con su propio acceso. FUTSALA y BAFI comparten uno de más de 400 árbitros.',
  },
]

function Node({ p, i, external, onToggle }) {
  return (
    <li className="flex items-stretch gap-3">
      <div className="flex w-6 flex-col items-center">
        <span className={`mt-4 h-3 w-3 shrink-0 rounded-full ${external ? 'border-2 border-bruma' : 'bg-celeste'}`} />
        {i < procesos.length - 1 && <span className="w-0.5 flex-1 bg-linea" />}
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={external}
        className={`mb-2 flex flex-1 items-center gap-3 border-2 px-4 py-3 text-left transition ${
          external ? 'border-dashed border-linea text-bruma hover:border-bruma' : 'border-celeste bg-celeste text-marino hover:bg-celeste-claro'
        }`}
      >
        <span className="text-sm font-extrabold tabular-nums">{nn(i)}</span>
        <Icon name={p.icon} className="h-5 w-5 shrink-0" />
        <span className="flex-1 font-extrabold uppercase leading-tight">{p.short}</span>
        <span className="text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap">
          {external ? 'Tu sistema' : 'Weball'}
        </span>
      </button>
    </li>
  )
}

export default function Modular({ id = 'modular', tone = 'darker' }) {
  // Procesos que la liga ya resuelve con otro sistema
  const [external, setExternal] = useState(() => new Set())
  const toggle = (slug) =>
    setExternal((prev) => {
      const next = new Set(prev)
      next.has(slug) ? next.delete(slug) : next.add(slug)
      return next
    })

  const weball = procesos.filter((p) => !external.has(p.slug))
  const theirs = procesos.filter((p) => external.has(p.slug))
  // "fichajes, fixture y tribunal"
  const lista = (ps) => {
    const names = ps.map((p) => p.short.toLowerCase())
    return names.length < 2 ? names.join('') : `${names.slice(0, -1).join(', ')} y ${names.at(-1)}`
  }
  const message =
    theirs.length === 0
      ? 'Hola Weball, quiero Weball completo para mi liga.'
      : `Hola Weball, ya resuelvo ${lista(theirs)} con otro sistema. Quiero Weball para ${
          weball.length ? lista(weball) : 'conectarlo todo'
        }.`

  return (
    <Section id={id} tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <Label icon="conectar">Contratá sólo lo que te falta</Label>
          <Title>Weball se adapta a tus procesos</Title>
          <Lead>
            Cada proceso se contrata por separado. Si ya resolvés alguno con otro sistema, Weball se conecta con él y se encarga del
            resto.
          </Lead>

          <ul className="mt-8 flex flex-col">
            {formasDeConectar.map((f, i) => (
              <Reveal as="li" key={f.title} delay={200 + i * 100} className={`border-celeste py-4 ${i === 0 ? 'border-t-4' : 'border-t-2 border-linea'}`}>
                <p className="font-extrabold uppercase">{f.title}</p>
                <p className="mt-1 leading-relaxed text-bruma">{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={200} className="self-start border-t-[6px] border-celeste bg-marino p-5 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-celeste">Probalo con tu liga</p>
          <p className="mt-2 leading-relaxed text-bruma">Tocá los procesos que ya resolvés con otro sistema.</p>

          <ol className="mt-5">
            {procesos.map((p, i) => (
              <Node key={p.slug} p={p} i={i} external={external.has(p.slug)} onToggle={() => toggle(p.slug)} />
            ))}
          </ol>

          <div className="mt-4 border-t-2 border-linea pt-5" aria-live="polite">
            <p className="text-2xl font-extrabold uppercase leading-tight">
              {theirs.length === 0
                ? 'Weball completo: los 8 procesos en un solo sistema.'
                : weball.length === 0
                  ? 'Ya tenés todo: Weball te conecta las piezas y te da la app de tu liga.'
                  : `Weball se encarga de ${weball.length} ${weball.length === 1 ? 'proceso' : 'procesos'} y se conecta con tu sistema en ${theirs.length}.`}
            </p>
            {theirs.length > 0 && weball.length > 0 && (
              <p className="mt-2 text-bruma">
                {`Contratás: ${weball.map((p) => p.short).join(' · ')}`}
              </p>
            )}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-celeste px-6 py-3.5 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
              >
                Consultar por esta combinación
              </a>
              {theirs.length > 0 && (
                <button type="button" onClick={() => setExternal(new Set())} className="text-sm font-bold uppercase tracking-wide text-bruma hover:text-blanco">
                  Empezar de nuevo
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Acceso a cada proceso */}
      <Reveal delay={300} className="-mx-4 mt-10 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <ul className="flex gap-2 sm:flex-wrap">
          {procesos.map((p) => (
            <li key={p.slug} className="shrink-0">
              <a
                href={procesoHref(p.slug)}
                className="flex items-center gap-2 border-2 border-linea px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:border-celeste hover:bg-celeste hover:text-marino"
              >
                <Icon name={p.icon} className="h-5 w-5" />
                <span className="whitespace-nowrap">{p.short}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
