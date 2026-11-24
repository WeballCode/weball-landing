import { clubes } from '../tareas.js'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// "Toda tu liga, en una conversación": además de las 4 tareas, todo lo demás que le podés pedir a tu IA
// (sale de la campaña de Instagram: tribunal, árbitros, administración…). Cada tarjeta: área, un pedido y cómo queda.

function Chip({ children, color = 'verde' }) {
  const estilos = {
    verde: 'bg-[#e7f7ec] text-[#1f8a3e]',
    rojo: 'bg-[#fdecec] text-[#c0392b] ring-1 ring-[#f5c6c6]',
    ambar: 'bg-[#fff4d6] text-[#8a5a00]',
    azul: 'bg-celeste-claro/60 text-celeste-profundo',
  }
  return <span className={`rounded-full px-3 py-1 text-[13px] font-semibold ${estilos[color]}`}>{children}</span>
}

function Escudo({ id }) {
  return <img src={`./clubes/${clubes[id].escudo}.png`} alt={clubes[id].nombre} className="h-8 w-8 object-contain" />
}

const areas = [
  {
    titulo: 'Fichajes',
    pedido: 'Fichá a Lucía Pérez en Platense.',
    visual: (
      <>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-marino/[0.07]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-gris" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
        </span>
        <Chip>Fichaje aprobado</Chip>
      </>
    ),
  },
  {
    titulo: 'Torneos',
    pedido: 'Armá la Copa con eliminación directa.',
    visual: (
      <span className="flex items-center gap-1.5 text-[13px] font-semibold text-gris">
        <Chip color="azul">Octavos</Chip>›<Chip color="azul">Cuartos</Chip>›<Chip color="azul">Final</Chip>
      </span>
    ),
  },
  {
    titulo: 'Resultados',
    pedido: 'Cargá el resultado del partido de las 21.',
    visual: (
      <>
        <Escudo id="racing" />
        <span className="rounded-lg bg-marino px-3 py-1 text-[15px] font-bold tracking-widest text-white tabular-nums">2 : 1</span>
        <Escudo id="independiente" />
      </>
    ),
  },
  {
    titulo: 'Tribunal de disciplina',
    pedido: 'Revisá los informes del sábado y proponé sanciones.',
    visual: (
      <div className="w-full rounded-xl bg-fondo p-3.5">
        <p className="text-[11px] font-bold tracking-wide text-celeste-profundo uppercase">✦ Propuesta de la IA</p>
        <p className="mt-1 text-[14px] leading-snug font-semibold">2 fechas de suspensión por expulsión (n.º 7, Deportivo Morón)</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-marino px-3.5 py-1 text-[13px] font-semibold text-white">Aprobar</span>
          <span className="rounded-full bg-white px-3.5 py-1 text-[13px] font-semibold ring-1 ring-marino/10">Editar</span>
        </div>
      </div>
    ),
  },
  {
    titulo: 'Asignación de árbitros',
    pedido: 'Asigná árbitros a los partidos del sábado.',
    visual: (
      <>
        <span className="flex -space-x-2">
          {[['JG', 'bg-marino'], ['ML', 'bg-celeste-profundo'], ['RP', 'bg-celeste']].map(([n, c]) => (
            <span key={n} className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-bold text-white ring-2 ring-white ${c}`}>{n}</span>
          ))}
        </span>
        <Chip>Todos asignados</Chip>
      </>
    ),
  },
  {
    titulo: 'Administración',
    pedido: '¿Qué equipos tienen la inscripción pendiente?',
    visual: (
      <>
        <Chip color="ambar">3 pendientes</Chip>
        <Chip>17 pagados</Chip>
      </>
    ),
  },
]

export default function Conversacion() {
  return (
    <Section id="toda-tu-liga">
      <Title>
        Toda tu liga, <span className="texto-ia">en una conversación.</span>
      </Title>
      <Lead>Además de armar el torneo, tu IA te ayuda con todo lo que pasa en la liga cada semana.</Lead>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => (
          <Reveal key={a.titulo} delay={(i % 3) * 100} className="flex flex-col rounded-[1.5rem] border border-marino/10 bg-white p-7">
            <h3 className="text-[1.35rem] font-bold tracking-tight">{a.titulo}</h3>
            <p className="mt-1.5 text-[1.02rem] leading-snug text-gris">“{a.pedido}”</p>
            <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">{a.visual}</div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <span className="inline-block rounded-full bg-celeste px-6 py-3 text-lg font-bold text-marino">…y mucho más</span>
      </Reveal>
    </Section>
  )
}
