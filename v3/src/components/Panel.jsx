import { clubes } from '../tareas.js'

// Tablas del panel de Weball para las tarjetas de "Armá tu liga en 4 pedidos" (Tareas.jsx).
// La animación de la portada está en PanelVivo.jsx (y usa estos íconos).

export const iconos = [
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

