import { clubes, tareas } from '../tareas.js'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// "Toda tu liga, en una conversación": todo lo que le podés pedir a tu IA, una tarjeta por área (área, un pedido y cómo queda).
// Las 4 primeras usan los mismos pedidos que la animación de la portada (tareas.js); el resto sale de la campaña de Instagram.

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

const [inscripcion, torneo, programacion, resultados] = tareas

const areas = [
  {
    titulo: 'Equipos y fichajes',
    pedido: inscripcion.ejemplo,
    visual: (
      <>
        <Chip>20 equipos inscriptos</Chip>
        <Chip>268 fichados</Chip>
      </>
    ),
  },
  {
    titulo: 'Torneos y fixtures',
    pedido: torneo.ejemplo,
    visual: (
      <span className="flex flex-wrap items-center gap-1.5 text-[13px] font-semibold text-gris">
        <Chip color="azul">Grupos A y B</Chip>›<Chip color="azul">Cuartos</Chip>›<Chip color="azul">Final</Chip>
      </span>
    ),
  },
  {
    titulo: 'Programaciones',
    pedido: programacion.ejemplo,
    visual: (
      <>
        <Chip color="azul">Sáb 09:00 · Cancha 1</Chip>
        <Chip>Sin choques</Chip>
      </>
    ),
  },
  {
    titulo: 'Resultados y tablas',
    pedido: resultados.ejemplo,
    visual: (
      <>
        <Escudo id="boca" />
        <span className="rounded-lg bg-marino px-3 py-1 text-[15px] font-bold tracking-widest text-white tabular-nums">3 : 1</span>
        <Escudo id="river" />
        <Chip>Publicado</Chip>
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
      <Lead>Lo que más tiempo le lleva a tu liga, resolvelo con un mensaje.</Lead>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((a, i) => (
          <Reveal key={a.titulo} delay={(i % 4) * 100} className="flex flex-col rounded-[1.5rem] border border-marino/10 bg-white p-7">
            <h3 className="text-[1.35rem] font-bold tracking-tight">{a.titulo}</h3>
            <p className="mt-1.5 text-[1.02rem] leading-snug text-gris">“{a.pedido}”</p>
            <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">{a.visual}</div>
          </Reveal>
        ))}
        <Reveal delay={300} className="grid place-items-center rounded-[1.5rem] bg-celeste p-7">
          <span className="text-[1.6rem] font-bold tracking-tight text-marino">…y mucho más</span>
        </Reveal>
      </div>
    </Section>
  )
}
