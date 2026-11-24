import { clubes, fecha1, grupoA, grupoB } from '../tareas.js'
import { iconos } from './Panel.jsx'

// El panel de Weball dentro de la notebook de la portada, copiado del panel real (pantallas de un torneo).
// Se dibuja a 1280 × 800. `slug` dice qué tarea se está mostrando y `d` cuántos milisegundos pasaron desde que
// la IA terminó (negativo = todavía no terminó). Cada escena:
//  - inscripcion: Configuración › Equipos vacío → se llena con los equipos.
//  - torneo: Configuración › Fixture sin fases → aparecen las fases → Clasificación por fase (grupo A y playoffs).
//  - programacion: Partidos de la fecha 1 "Pendiente" sin día ni hora → pasan a "Programado".
//  - resultados: los mismos partidos "Programado" → "Finalizado" con resultado → Clasificación actualizada.

// Momentos (en ms desde que la IA terminó) en que se cambia de pantalla
export const CAMBIOS = { torneoTabla: 3500, torneoPlayoffs: 6500, resultadosTabla: 3800 }

const AZUL = '#1b74b8'
const TINTA = '#1f2433'
const GRIS = '#8a90a2'
const LINEA = '#e9ebf2'

function Escudo({ id, size = 24 }) {
  return <img src={`./clubes/${clubes[id].escudo}.png`} alt="" className="shrink-0 object-contain" style={{ width: size, height: size }} />
}

function Boton({ children, claro }) {
  return (
    <span
      className={`rounded-md px-3.5 py-2 text-[13px] font-semibold ${claro ? 'border bg-white' : 'text-white'}`}
      style={claro ? { borderColor: LINEA, color: TINTA } : { background: AZUL }}
    >
      {children}
    </span>
  )
}

// Botones tipo "Apertura | Clausura | Playoffs" o "Equipos | Fixture | …"
function Opciones({ items, activo, gris }) {
  return (
    <div className={`flex gap-2 ${gris ? 'w-fit rounded-lg bg-[#e6e9f0] p-1' : ''}`}>
      {items.map((x) => {
        const on = x === activo
        if (gris)
          return (
            <span key={x} className={`rounded-md px-4 py-1.5 text-[13px] font-semibold ${on ? 'bg-white shadow-sm' : ''}`} style={{ color: on ? TINTA : '#5b6275' }}>
              {x}
            </span>
          )
        return (
          <span
            key={x}
            className="rounded-md border px-4 py-2 text-[13px] font-semibold transition-colors duration-300"
            style={on ? { background: AZUL, borderColor: AZUL, color: 'white' } : { background: 'white', borderColor: LINEA, color: TINTA }}
          >
            {x}
          </span>
        )
      })}
    </div>
  )
}

function Tarjeta({ children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border bg-white ${className}`} style={{ borderColor: LINEA }}>
      {children}
    </div>
  )
}

function Vacio({ titulo, texto }) {
  return (
    <div className="flex flex-col items-center gap-2 py-16 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eef3f9]">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke={AZUL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
      </span>
      <p className="mt-1 text-[15px] font-semibold" style={{ color: TINTA }}>{titulo}</p>
      <p className="text-[13px]" style={{ color: GRIS }}>{texto}</p>
    </div>
  )
}

// ---------- Escena 1: Configuración › Equipos ----------
const inscriptos = [...grupoA, ...grupoB]
const jugadores = [15, 14, 15, 13, 14, 12, 16, 15, 14, 13, 15, 12]

function Equipos({ d }) {
  const filas = d < 0 ? 0 : Math.min(inscriptos.length, Math.floor(d / 140) + 1)
  return (
    <>
      <Opciones items={['Equipos', 'Fixture', 'Reglamento', 'General']} activo="Equipos" gris />
      <Tarjeta className="mt-4">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-[15px] font-bold" style={{ color: TINTA }}>Equipos ({d < 0 ? 0 : 20})</p>
            <p className="text-[12px]" style={{ color: GRIS }}>Los que van a disputar el torneo.</p>
          </div>
          <Boton>+ Agregar equipo</Boton>
        </div>
        {filas === 0 ? (
          <Vacio titulo="Todavía no hay equipos inscriptos" texto="Agregalos acá o pedíselo a tu IA." />
        ) : (
          <>
            <div className="grid grid-cols-[1fr_120px_50px] border-y px-5 py-2.5 text-[12px] font-bold" style={{ borderColor: LINEA, color: TINTA }}>
              <span>Equipo</span><span className="text-right">Jugadores</span><span />
            </div>
            {inscriptos.slice(0, Math.min(filas, 9)).map((id, i) => (
              <div key={id} className="fila-nueva grid grid-cols-[1fr_120px_50px] items-center border-b px-5" style={{ height: 50, borderColor: LINEA }}>
                <span className="flex items-center gap-3">
                  <Escudo id={id} size={26} />
                  <span>
                    <span className="block text-[13px] font-semibold" style={{ color: TINTA }}>{clubes[id].nombre}</span>
                    <span className="block text-[11px]" style={{ color: GRIS }}>Inscripción 01/03/2027 – 30/11/2027</span>
                  </span>
                </span>
                <span className="text-right text-[13px]" style={{ color: AZUL }}>{jugadores[i % jugadores.length]} de 25</span>
                <span className="flex justify-end"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#d33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg></span>
              </div>
            ))}
          </>
        )}
      </Tarjeta>
    </>
  )
}

// ---------- Escena 2: Configuración › Fixture, y después Clasificación por fase ----------
const fases = [
  { nombre: 'Grupo A', formato: 'Formato liga · 10 equipos · 9 fechas' },
  { nombre: 'Grupo B', formato: 'Formato liga · 10 equipos · 9 fechas' },
  { nombre: 'Playoffs', formato: 'Eliminación directa · desde cuartos de final' },
]

function Fixture({ d }) {
  const hay = d >= 0
  return (
    <>
      <Opciones items={['Equipos', 'Fixture', 'Reglamento', 'General']} activo="Fixture" gris />
      <div className="mt-4 flex items-center gap-3">
        <span className="text-[13px] font-bold" style={{ color: TINTA }}>Fases</span>
        <span className="flex w-[220px] items-center justify-between rounded-md border bg-white px-3 py-2 text-[13px]" style={{ borderColor: LINEA, color: hay ? TINTA : GRIS }}>
          {hay ? 'Grupo A' : 'Sin fases'} <span>▾</span>
        </span>
        <Boton>+ Nueva fase</Boton>
      </div>
      <Tarjeta className="mt-4">
        {!hay ? (
          <Vacio titulo="Todavía no hay fases" texto="Creá la primera fase o pedíselo a tu IA." />
        ) : (
          <div className="grid grid-cols-[1fr_1fr] gap-6 p-5">
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-bold" style={{ color: GRIS }}>FASES DEL TORNEO</p>
              {fases.map((f, i) => (
                <div key={f.nombre} className="fila-nueva flex items-center gap-3 rounded-lg border p-3" style={{ borderColor: LINEA, animationDelay: `${i * 200}ms` }}>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#eef3f9] text-[13px] font-bold" style={{ color: AZUL }}>{i + 1}</span>
                  <span>
                    <span className="block text-[14px] font-semibold" style={{ color: TINTA }}>{f.nombre}</span>
                    <span className="block text-[12px]" style={{ color: GRIS }}>{f.formato}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-[#e7f7ec] px-2.5 py-1 text-[11px] font-semibold text-[#1f8a3e]">Lista</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[12px] font-bold" style={{ color: GRIS }}>GRUPO A · JORNADAS</p>
              <div className="mt-3 flex flex-col">
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} className="fila-nueva flex items-center justify-between border-b py-2.5 text-[13px]" style={{ borderColor: LINEA, color: TINTA, animationDelay: `${600 + i * 120}ms` }}>
                    <span>› Fecha {i + 1}</span>
                    <span style={{ color: GRIS }}>5 partidos</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Tarjeta>
    </>
  )
}

// Tabla de posiciones (con o sin los resultados de la fecha 1)
function calcularTabla(conResultados) {
  const filas = Object.fromEntries(grupoA.map((id) => [id, { id, pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0 }]))
  if (conResultados)
    for (const m of fecha1) {
      const a = filas[m.a], b = filas[m.b]
      a.pj++; b.pj++; a.gf += m.ga; a.gc += m.gb; b.gf += m.gb; b.gc += m.ga
      if (m.ga > m.gb) { a.g++; a.pts += 3; b.p++ } else if (m.ga < m.gb) { b.g++; b.pts += 3; a.p++ } else { a.e++; b.e++; a.pts++; b.pts++ }
    }
  const lista = Object.values(filas)
  if (conResultados) lista.sort((x, y) => y.pts - x.pts || y.gf - y.gc - (x.gf - x.gc) || y.gf - x.gf)
  return lista
}

function TablaPosiciones({ conResultados, animar }) {
  const cols = 'grid-cols-[40px_1fr_repeat(8,58px)]'
  return (
    <Tarjeta>
      <div className="px-5 pt-4 pb-3 text-[15px] font-bold" style={{ color: TINTA }}>Grupo A · Primera</div>
      <div className={`grid ${cols} border-y px-5 py-2.5 text-[12px] font-bold`} style={{ borderColor: LINEA, color: TINTA }}>
        <span>#</span><span>Equipo</span>
        {['Pts', 'PJ', 'G', 'E', 'P', 'GF', 'GC', 'Dif'].map((h) => <span key={h} className="text-center">{h}</span>)}
      </div>
      {calcularTabla(conResultados).slice(0, 8).map((f, i) => (
        <div
          key={f.id}
          className={`grid ${cols} items-center border-b px-5 text-[13px] ${animar ? 'fila-nueva' : ''}`}
          style={{ height: 42, borderColor: LINEA, color: TINTA, animationDelay: animar ? `${i * 90}ms` : undefined }}
        >
          <span style={{ color: GRIS }}>{i + 1}</span>
          <span className="flex items-center gap-3"><Escudo id={f.id} size={22} />{clubes[f.id].nombre}</span>
          <span className="text-center font-bold">{f.pts}</span>
          {[f.pj, f.g, f.e, f.p, f.gf, f.gc].map((v, k) => <span key={k} className="text-center">{v}</span>)}
          <span className="text-center">{f.gf - f.gc > 0 ? `+${f.gf - f.gc}` : f.gf - f.gc}</span>
        </div>
      ))}
    </Tarjeta>
  )
}

function Llave({ a, b, delay }) {
  return (
    <div className="fila-nueva w-[200px] rounded-lg border bg-white px-3 py-2 text-[13px]" style={{ borderColor: LINEA, color: TINTA, animationDelay: `${delay}ms` }}>
      <p>{a}</p>
      <p className="mt-1 border-t pt-1" style={{ borderColor: LINEA }}>{b}</p>
    </div>
  )
}

function Playoffs() {
  const cuartos = [['1º Grupo A', '4º Grupo B'], ['2º Grupo B', '3º Grupo A'], ['1º Grupo B', '4º Grupo A'], ['2º Grupo A', '3º Grupo B']]
  return (
    <Tarjeta>
      <div className="px-5 pt-4 pb-3 text-[15px] font-bold" style={{ color: TINTA }}>Playoffs · Primera</div>
      <div className="flex gap-10 border-t px-5 py-5" style={{ borderColor: LINEA }}>
        {[
          ['Cuartos de final', cuartos],
          ['Semifinales', [['Ganador C1', 'Ganador C2'], ['Ganador C3', 'Ganador C4']]],
          ['Final', [['Ganador S1', 'Ganador S2']]],
        ].map(([titulo, llaves], c) => (
          <div key={titulo} className="flex flex-col">
            <p className="text-[12px] font-bold" style={{ color: GRIS }}>{titulo.toUpperCase()}</p>
            <div className="mt-3 flex flex-1 flex-col justify-around gap-3" style={{ minHeight: 330 }}>
              {llaves.map(([a, b], i) => <Llave key={a} a={a} b={b} delay={c * 300 + i * 100} />)}
            </div>
          </div>
        ))}
      </div>
    </Tarjeta>
  )
}

// ---------- Escenas 3 y 4: Partidos de la fecha 1 ----------
const estados = {
  Pendiente: { fondo: '#eef0f4', texto: '#6b7280' },
  Programado: { fondo: '#dcedfb', texto: AZUL },
  Finalizado: { fondo: '#1e7b34', texto: '#ffffff' },
}

function Partidos({ estadoFila }) {
  const cols = 'grid-cols-[150px_1fr_60px_120px_150px]'
  return (
    <>
      <Opciones items={['Grupo A', 'Grupo B', 'Playoffs']} activo="Grupo A" />
      <Tarjeta className="mt-4">
        <div className="flex items-center gap-3 px-5 py-4">
          <span className="h-4 w-4 rounded border" style={{ borderColor: '#c5cad6' }} />
          <span className="text-[15px] font-bold" style={{ color: TINTA }}>Fecha 1</span>
          <span className="text-[12px]" style={{ color: GRIS }}>Grupo A · 5 partidos</span>
        </div>
        <div className={`grid ${cols} border-y px-5 py-2.5 text-[12px] font-bold`} style={{ borderColor: LINEA, color: TINTA }}>
          <span>Partido</span><span /><span /><span>Categoría</span><span>Sede</span>
        </div>
        {fecha1.map((m, i) => {
          const estado = estadoFila(i)
          const e = estados[estado]
          const conDia = estado !== 'Pendiente'
          const fin = estado === 'Finalizado'
          return (
            <div key={`${m.a}-${estado}`} className={`grid ${cols} items-center border-b px-5 ${estado !== 'Pendiente' ? 'fila-cambia' : ''}`} style={{ height: 64, borderColor: LINEA, color: TINTA }}>
              <span>
                <span className="inline-block rounded px-2.5 py-1 text-[11px] font-bold" style={{ background: e.fondo, color: e.texto }}>{estado}</span>
                <span className="mt-1 block text-[11px]" style={{ color: GRIS }}>{conDia ? `Sáb 14/03 · ${m.hora}` : 'Sin día ni hora'}</span>
              </span>
              <span className="flex flex-col gap-1 text-[13px] font-semibold">
                <span className="flex items-center gap-2"><Escudo id={m.a} size={20} />{clubes[m.a].nombre}</span>
                <span className="flex items-center gap-2"><Escudo id={m.b} size={20} />{clubes[m.b].nombre}</span>
              </span>
              <span className="flex flex-col gap-1 text-[13px] font-bold">
                <span>{fin ? m.ga : '–'}</span>
                <span>{fin ? m.gb : '–'}</span>
              </span>
              <span className="text-[13px]">Primera</span>
              <span className="text-[13px]" style={{ color: conDia ? TINTA : GRIS }}>{conDia ? m.cancha : '—'}</span>
            </div>
          )
        })}
      </Tarjeta>
    </>
  )
}

// ---------- El marco del panel ----------
export default function PanelVivo({ slug, d }) {
  let pestaña = 'Configuración'
  let contenido = null

  if (slug === 'inscripcion') contenido = <Equipos d={d} />
  else if (slug === 'torneo') {
    if (d < CAMBIOS.torneoTabla) contenido = <Fixture d={d} />
    else {
      pestaña = 'Clasificación'
      const playoffs = d >= CAMBIOS.torneoPlayoffs
      contenido = (
        <>
          <Opciones items={['Grupo A', 'Grupo B', 'Playoffs']} activo={playoffs ? 'Playoffs' : 'Grupo A'} />
          <div className="mt-4" key={playoffs ? 'p' : 'a'}>{playoffs ? <Playoffs /> : <TablaPosiciones animar />}</div>
        </>
      )
    }
  } else if (slug === 'programacion') {
    pestaña = 'Partidos'
    contenido = <Partidos estadoFila={(i) => (d >= i * 260 ? 'Programado' : 'Pendiente')} />
  } else {
    if (d < CAMBIOS.resultadosTabla) {
      pestaña = 'Partidos'
      contenido = <Partidos estadoFila={(i) => (d >= i * 260 ? 'Finalizado' : 'Programado')} />
    } else {
      pestaña = 'Clasificación'
      contenido = (
        <>
          <Opciones items={['Grupo A', 'Grupo B', 'Playoffs']} activo="Grupo A" />
          <div className="mt-4"><TablaPosiciones conResultados animar /></div>
        </>
      )
    }
  }

  return (
    <div className="flex bg-[#f3f5f9] text-left font-[Inter,Roboto,Arial,sans-serif]" style={{ height: 800 }}>
      {/* Barra lateral azul */}
      <aside className="flex w-[64px] shrink-0 flex-col items-center gap-1.5 py-4" style={{ background: AZUL }}>
        <span className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-white">
          <img src="./isotipo.png" alt="" className="h-9 w-9" />
        </span>
        {iconos.map((dd, i) => (
          <span key={i} className={`grid h-10 w-10 place-items-center rounded-full ${i === 3 ? 'bg-white/20' : ''}`}>
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill={i === 3 ? 'white' : 'none'} stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={dd} />
            </svg>
          </span>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra superior */}
        <div className="flex h-[56px] items-center gap-3 border-b bg-white px-5" style={{ borderColor: LINEA }}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[#eef3f9] text-[13px] font-bold" style={{ color: AZUL }}>L</span>
          <span className="text-[17px] font-bold" style={{ color: TINTA }}>Tu liga</span>
          <span className="ml-2 rounded-md border px-3 py-1.5 text-[12px] font-semibold" style={{ borderColor: LINEA, color: TINTA }}>Temporada 2027 ▾</span>
          <span className="ml-auto flex w-[240px] items-center gap-2 rounded-md border px-3 py-1.5 text-[13px]" style={{ borderColor: LINEA, color: '#9aa1b4' }}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            Buscar
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef6ff] px-3 py-1.5 text-[12px] font-semibold" style={{ color: AZUL }}>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z" /></svg>
            IA conectada
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#dcedfb] text-[13px] font-bold" style={{ color: AZUL }}>J</span>
        </div>

        <div className="flex-1 overflow-hidden px-5 pt-3">
          <p className="text-[12px]" style={{ color: '#5b6275' }}>Torneo Apertura / 2027 / Masculino / Primera</p>

          {/* Encabezado del torneo con sus pestañas */}
          <Tarjeta className="mt-3">
            <div className="flex items-center gap-4 px-5 pt-4">
              <span className="grid h-14 w-14 place-items-center rounded-full border-2 bg-white" style={{ borderColor: AZUL }}>
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={AZUL} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={iconos[3]} /></svg>
              </span>
              <div>
                <p className="text-[11px] font-semibold" style={{ color: AZUL }}>Torneo Apertura 2027</p>
                <p className="text-[19px] font-bold" style={{ color: TINTA }}>Primera</p>
                <p className="text-[11px]" style={{ color: GRIS }}>Futsal · Masculino</p>
              </div>
              <span className="ml-auto text-[12px]" style={{ color: '#5b6275' }}>
                Temporada <span className="ml-1 rounded-md border px-2.5 py-1.5 font-semibold" style={{ borderColor: LINEA, color: TINTA }}>2027 ▾</span>
              </span>
            </div>
            <div className="mt-3 flex gap-8 px-6 text-[13px]">
              {['Partidos', 'Clasificación', 'Estadísticas', 'Configuración'].map((p) => (
                <span key={p} className="border-b-2 pb-2.5 transition-colors duration-300" style={p === pestaña ? { borderColor: AZUL, color: TINTA, fontWeight: 700 } : { borderColor: 'transparent', color: '#5b6275' }}>
                  {p}
                </span>
              ))}
            </div>
          </Tarjeta>

          <div className="mt-4">{contenido}</div>
        </div>
      </div>
    </div>
  )
}
