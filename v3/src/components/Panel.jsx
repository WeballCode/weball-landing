import { clubes } from '../tareas.js'

// Réplica del panel real de Weball (barra lateral azul, encabezado del torneo, pestañas y tabla).
// Se dibuja a 1280 × 800 y se achica para entrar en la notebook.
// `listo`: cuando la IA termina, las filas entran una por una resaltadas.

const iconos = [
  'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z', // inicio
  'M4 20c0-3 3-5 6-5s6 2 6 5M10 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM17 11h4M19 9v4', // fichajes
  'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z', // clubes
  'M7 4h10v4a5 5 0 0 1-10 0zM5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3M12 13v4M8 21h8M9 17h6', // torneos
  'M4 6h16v14H4zM4 10h16M9 3v4M15 3v4', // programación
  'M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0zM12 8v4l3 2', // partidos
  'M4 20l6-6M14 4l6 6-8 8-6-6z', // tribunal
  'M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4zM18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z', // IA
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18', // web
]
const ACTIVO = 3

function Escudo({ id, size = 26 }) {
  const c = clubes[id]
  return <img src={`./clubes/${c.escudo}.png`} alt="" width={size} height={size} className="shrink-0 rounded-md object-contain" style={{ width: size, height: size }} />
}

function Fila({ listo, i, children, className = '' }) {
  return (
    <div
      className={`grid items-center border-b border-panel-linea px-5 text-[14px] text-[#1f2433] ${listo ? 'fila-nueva' : 'opacity-0'} ${className}`}
      style={{ height: 56, animationDelay: listo ? `${i * 110}ms` : undefined }}
    >
      {children}
    </div>
  )
}

function Encabezado({ cols, children }) {
  return (
    <div className={`grid items-center border-b border-panel-linea px-5 text-[12px] font-bold text-[#1f2433] ${cols}`} style={{ height: 44 }}>
      {children}
    </div>
  )
}

function Vacio({ texto }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-24 flex flex-col items-center gap-3 text-[14px] text-[#8a90a2]">
      <span className="h-8 w-8 rounded-full border-[3px] border-[#e1e4ee] border-t-[#9aa3c0] spin" />
      {texto}
    </div>
  )
}

function Contenido({ panel, listo }) {
  const { vista, filas } = panel
  if (vista === 'equipos') {
    const cols = 'grid-cols-[40px_1fr_140px_140px]'
    return (
      <>
        <Encabezado cols={cols}>
          <span>#</span><span>Equipo</span><span>Jugadores</span><span>Estado</span>
        </Encabezado>
        {filas.map(([id, n], i) => (
          <Fila key={id} listo={listo} i={i} className={cols}>
            <span className="text-[#8a90a2]">{i + 1}</span>
            <span className="flex items-center gap-3"><Escudo id={id} />{clubes[id].nombre}</span>
            <span>{n} fichados</span>
            <span><span className="rounded-full bg-[#e7f7ec] px-2.5 py-1 text-[12px] font-semibold text-[#1f8a3e]">Inscripto</span></span>
          </Fila>
        ))}
      </>
    )
  }
  if (vista === 'partidos') {
    const cols = 'grid-cols-[90px_1fr_60px_1fr]'
    return (
      <>
        <Encabezado cols={cols}>
          <span>Fecha 1</span><span className="text-right">Local</span><span /><span>Visitante</span>
        </Encabezado>
        {filas.map(([a, b], i) => (
          <Fila key={a} listo={listo} i={i} className={cols}>
            <span className="text-[#8a90a2]">Grupo A</span>
            <span className="flex items-center justify-end gap-3">{clubes[a].nombre}<Escudo id={a} /></span>
            <span className="text-center text-[12px] font-bold text-[#8a90a2]">VS</span>
            <span className="flex items-center gap-3"><Escudo id={b} />{clubes[b].nombre}</span>
          </Fila>
        ))}
      </>
    )
  }
  if (vista === 'fases') {
    // Cuadro del torneo: fase 1 con los dos grupos y fase 2 con los playoffs desde cuartos
    const { grupos, cuartos } = panel
    const aparece = (i) => (listo ? { className: 'fila-nueva', style: { animationDelay: i * 110 + "ms" } } : { className: 'opacity-0' })
    const Cruce = ({ a, b, i }) => (
      <div {...aparece(i)}>
        <div className="w-[140px] rounded-lg border border-panel-linea bg-[#f7f8fb] px-3 py-2 text-[14px] leading-tight text-[#1f2433]">
          <p>{a}</p>
          <p className="mt-0.5">{b}</p>
        </div>
      </div>
    )
    return (
      <>
        <Encabezado cols="grid-cols-[250px_1fr]">
          <span>Fase 1 · Grupos</span><span className="pl-6">Fase 2 · Playoffs</span>
        </Encabezado>
        <div className="grid grid-cols-[250px_1fr] px-5 py-5">
          <div className="flex flex-col gap-3">
            {grupos.map((g, i) => (
              <div key={g.nombre} {...aparece(i)}>
                <div className="rounded-xl border border-panel-linea p-3">
                  <p className="flex items-baseline justify-between text-[16px] font-semibold text-[#1f2433]">
                    {g.nombre}<span className="text-[12px] font-normal text-[#8a90a2]">10 equipos · 9 fechas</span>
                  </p>
                  <div className="mt-2.5 flex items-center gap-1">
                    {g.clubes.map((id) => <Escudo key={id} id={id} size={30} />)}
                    <span className="ml-1 text-[14px] font-semibold text-[#8a90a2]">+5</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[14px] text-[#8a90a2]">Pasan los 4 primeros de cada grupo</p>
          </div>
          <div className="flex items-stretch gap-3 pl-6 text-[13px] font-semibold text-[#8a90a2]">
            <div className="flex flex-col">
              <p>Cuartos</p>
              <div className="mt-2 flex flex-1 flex-col justify-between gap-2">
                {cuartos.map(([a, b], i) => <Cruce key={a} a={a} b={b} i={2 + i} />)}
              </div>
            </div>
            <div className="flex flex-col">
              <p>Semis</p>
              <div className="mt-2 flex flex-1 flex-col justify-around">
                <Cruce a="Ganador C1" b="Ganador C2" i={6} />
                <Cruce a="Ganador C3" b="Ganador C4" i={7} />
              </div>
            </div>
            <div className="flex flex-col">
              <p>Final</p>
              <div className="mt-2 flex flex-1 flex-col justify-center">
                <Cruce a="Ganador S1" b="Ganador S2" i={8} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  if (vista === 'programacion') {
    const cols = 'grid-cols-[110px_80px_110px_1fr]'
    return (
      <>
        <Encabezado cols={cols}>
          <span>Día</span><span>Hora</span><span>Cancha</span><span>Partido</span>
        </Encabezado>
        {filas.map(([h, c, a, b], i) => (
          <Fila key={a} listo={listo} i={i} className={cols}>
            <span>Sáb 14/3</span>
            <span className="font-semibold">{h}</span>
            <span className="text-[#5b6275]">{c}</span>
            <span className="flex items-center gap-2.5"><Escudo id={a} size={22} />{clubes[a].nombre}<span className="px-1 text-[#8a90a2]">vs</span><Escudo id={b} size={22} />{clubes[b].nombre}</span>
          </Fila>
        ))}
      </>
    )
  }
  const cols = 'grid-cols-[40px_1fr_repeat(8,60px)]'
  return (
    <>
      <Encabezado cols={cols}>
        <span>#</span><span>Pos</span>
        {['Pts', 'PJ', 'G', 'E', 'P', 'GF', 'GC', 'Dif'].map((h) => <span key={h} className="text-center">{h}</span>)}
      </Encabezado>
      {filas.map(([id, pts, pj, g, e, p, gf, gc], i) => (
        <Fila key={id} listo={listo} i={i} className={cols}>
          <span className="text-center">{i + 1}</span>
          <span className="flex items-center gap-3"><Escudo id={id} />{clubes[id].nombre}</span>
          <span className="text-center font-bold">{pts}</span>
          {[pj, g, e, p, gf, gc, gf - gc].map((v, k) => <span key={k} className="text-center">{v}</span>)}
        </Fila>
      ))}
    </>
  )
}

// Sólo la tabla del panel (para las tarjetas de "Armá tu liga en 4 pedidos")
export function TablaPanel({ panel }) {
  return (
    <div className="overflow-hidden rounded-xl border border-panel-linea bg-white text-left font-[Inter,Roboto,Arial,sans-serif]" style={{ width: 760 }}>
      <Contenido panel={panel} listo />
    </div>
  )
}

export default function Panel({ panel, listo = true }) {
  const pestañas = ['Equipos', 'Partidos', 'Clasificación', 'Estadísticas', 'Configuración']
  const vacio = { equipos: 'Inscribiendo equipos…', partidos: 'Generando el fixture…', fases: 'Armando las fases…', programacion: 'Programando la fecha…', tabla: 'Cargando resultados…' }
  return (
    <div className="flex bg-white text-left font-[Inter,Roboto,Arial,sans-serif]" style={{ height: 800 }}>
      {/* Barra lateral */}
      <aside className="flex w-[68px] shrink-0 flex-col items-center gap-2 bg-panel py-4">
        <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-white">
          <img src="./isotipo.png" alt="" className="h-10 w-10" />
        </span>
        {iconos.map((d, i) => (
          <span key={i} className={`grid h-10 w-10 place-items-center rounded-full ${i === ACTIVO ? 'bg-white/15' : ''}`}>
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill={i === ACTIVO ? 'white' : 'none'} stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={d} />
            </svg>
          </span>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra superior */}
        <div className="flex h-[66px] items-center gap-4 border-b border-panel-linea px-6">
          <img src="./isotipo.png" alt="" className="h-8 w-8" />
          <span className="text-[18px] font-bold text-[#1f2433]">Tu liga</span>
          <span className="ml-2 flex items-center gap-2 rounded-md border border-panel-linea px-3 py-2 text-[12px] text-[#5b6275]">
            Temporada <b className="text-[#1f2433]">2027</b> ▾
          </span>
          <span className="ml-auto flex w-[230px] items-center gap-2 rounded-md border border-panel-linea px-3 py-2 text-[13px] text-[#9aa1b4]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            Buscar <span className="ml-auto text-[11px]">Ctrl+K</span>
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef6ff] px-3 py-1.5 text-[12px] font-semibold text-[#0b6fcc]">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z" /></svg>
            IA conectada
          </span>
        </div>

        <div className="flex-1 bg-panel-claro">
          {/* Encabezado del torneo */}
          <div className="border-b border-panel-linea bg-white px-6 pt-4">
            <p className="text-[11px] text-[#8a90a2]">Apertura 2027 / 2027 / <b className="text-[#1f2433]">Primera</b></p>
            <div className="mt-3 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-xl border border-panel-linea bg-white">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-panel" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={iconos[ACTIVO]} /></svg>
              </span>
              <div>
                <p className="text-[13px] font-semibold text-[#1f2433]">Torneo Apertura 2027</p>
                <p className="text-[19px] font-bold text-[#1f2433]">Primera</p>
                <p className="text-[11px] text-[#8a90a2]">Futsal</p>
              </div>
            </div>
            <div className="mt-4 flex gap-7 text-[13px]">
              {pestañas.map((p) => (
                <span key={p} className={`pb-3 ${p === panel.pestaña ? 'border-b-2 border-panel font-bold text-[#1f2433]' : 'text-[#5b6275]'}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="px-6 pt-5">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-panel px-4 py-2 text-[13px] font-semibold text-white">Grupo A</span>
              <span className="rounded-md border border-panel-linea bg-white px-4 py-2 text-[13px] text-[#1f2433]">Grupo B</span>
              <span className="rounded-md border border-panel-linea bg-white px-4 py-2 text-[13px] text-[#1f2433]">Playoffs</span>
              <span className="ml-auto rounded-md bg-panel px-4 py-2 text-[13px] font-semibold text-white">+ Nuevo</span>
            </div>
            <div className="relative mt-4 overflow-hidden rounded-xl border border-panel-linea bg-white" style={{ minHeight: 44 + 56 * 6 + 2 }}>
              <Contenido panel={panel} listo={listo} />
              {!listo && <Vacio texto={vacio[panel.vista]} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
