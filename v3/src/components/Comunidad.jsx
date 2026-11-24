import { useEffect, useState } from 'react'
import { COMUNIDAD_URL } from '../links.js'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// COMUNIDAD: los partidos de hoy de verdad, sacados de We Are Weball (we-are-weball.com).
// Usa el mismo servicio que esa web (api.weball.me), que acepta pedidos desde esta landing.
// Si una liga nueva se suma a We Are Weball, agregá su código acá (están en we-are-weball.com/scores-static/v1/sidebar.json).
const LIGAS = [
  'ef6b9e1b-01cc-4ac2-8034-bf7c1b8edf1c',
  '2d260df1-7986-49fd-95a2-fcb046e7a4fb',
  '249a0dbe-2937-462f-80f1-6dbcf429d40d',
  'd1898077-1ccb-406c-af3e-4f971b69a7af',
  '9259ba9c-0d6a-44d7-b1d8-82ff3089fb67',
  'bc0ab945-c74b-4b2f-bd0e-a4b4fd8caf93',
  '245b2daf-4e44-4945-9eec-f0d6b301c700',
  '4a0dd4b9-8bef-4288-a69c-63602230e6c2',
  '8a5f70b3-3e22-49f4-8d14-5d36479e91b3',
]
const MOSTRAR = 4
const ZONA = 'America/Argentina/Buenos_Aires'

const hoy = () => new Intl.DateTimeFormat('en-CA', { timeZone: ZONA }).format(new Date()) // AAAA-MM-DD
const hora = (iso) => new Intl.DateTimeFormat('es-AR', { timeZone: ZONA, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date(iso))

// "VILLA RITA" → "Villa Rita" (las siglas cortas como "CSDP" quedan igual)
const MINUSCULAS = ['de', 'del', 'la', 'las', 'los', 'el', 'y']
const nombre = (n = '') =>
  n !== n.toUpperCase()
    ? n
    : n
        .split(' ')
        .map((w, k) => {
          if ((w.length <= 4 && !/[AEIOUÁÉÍÓÚ]/.test(w)) || /^[IVX]+$/.test(w)) return w
          const p = w.toLowerCase()
          return k > 0 && MINUSCULAS.includes(p) ? p : p.charAt(0).toUpperCase() + p.slice(1)
        })
        .join(' ')

// Primero los que se están jugando, después los próximos y al final los terminados
function ordenar(partidos) {
  const ahora = Date.now()
  const peso = (m) => {
    const fin = m.customStatus?.finalized || m.status === 'finished'
    const enJuego = !fin && (m.status === 'live' || m.status === 'in_progress' || (m.homeScore != null && new Date(m.startTime) <= ahora))
    return enJuego ? 0 : fin ? 2 : 1
  }
  return [...partidos].sort((a, b) => peso(a) - peso(b) || new Date(a.startTime) - new Date(b.startTime))
}

function Equipo({ t, goles }) {
  return (
    <div className="flex items-center gap-3">
      {t.logo ? (
        <img src={t.logo} alt="" loading="lazy" className="h-7 w-7 shrink-0 rounded-md object-contain" />
      ) : (
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-fondo text-[10px] font-bold text-gris">{t.shortName}</span>
      )}
      <span className="min-w-0 flex-1 truncate font-semibold">{nombre(t.name)}</span>
      {goles != null && <span className="text-lg font-bold tabular-nums">{goles}</span>}
    </div>
  )
}

function Partido({ m }) {
  const estado = m.customStatus
  return (
    <a
      href={`https://we-are-weball.com/match/${m.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-[1.4rem] border border-marino/10 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(3,38,57,0.35)]"
    >
      <div className="flex items-center justify-between gap-3 text-[12px]">
        <span className="min-w-0 truncate text-gris">
          {m.liga} · {nombre(m.tournament?.category?.name)}
        </span>
        <span className="shrink-0 rounded-full px-2.5 py-0.5 font-semibold text-white" style={{ background: estado?.color || '#1e83bd' }}>
          {m.homeScore == null ? hora(m.startTime) : estado?.label}
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 text-[15px] text-tinta">
        <Equipo t={m.homeTeam} goles={m.homeScore} />
        <Equipo t={m.awayTeam} goles={m.awayScore} />
      </div>
    </a>
  )
}

export default function Comunidad() {
  const [partidos, setPartidos] = useState(null) // null = cargando
  const [error, setError] = useState(false)

  useEffect(() => {
    const url = `https://api.weball.me/scores/matches?date=${hoy()}&instanceUUIDs=${encodeURIComponent(JSON.stringify(LIGAS))}`
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) =>
        setPartidos(
          (d.groups || []).flatMap((g) => (g.matches || []).map((m) => ({ ...m, liga: g.instance?.shortName || g.instance?.name || g.competition?.name }))),
        ),
      )
      .catch(() => setError(true))
  }, [])

  const lista = partidos ? ordenar(partidos).slice(0, MOSTRAR) : []
  const total = partidos?.length || 0

  return (
    <Section id="comunidad">
      <Reveal as="p" className="texto-ia mx-auto w-fit text-sm font-bold tracking-[0.2em] uppercase">
        Comunidad
      </Reveal>
      <Title className="mt-3">Hoy se juega en Weball.</Title>
      <Lead>Jugadores, clubes y familias siguen los partidos, los resultados y las tablas de todas las ligas en We Are Weball.</Lead>

      <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
        {!partidos && !error &&
          Array.from({ length: MOSTRAR }, (_, i) => <div key={i} className="h-[136px] animate-pulse rounded-[1.4rem] bg-fondo" />)}
        {lista.map((m) => (
          <Partido key={m.id} m={m} />
        ))}
      </div>

      {(error || (partidos && total === 0)) && (
        <p className="mx-auto mt-2 max-w-md text-center text-gris">Hoy no hay partidos programados. Mirá los últimos resultados y las tablas en We Are Weball.</p>
      )}

      <Reveal className="mt-10 text-center">
        <a
          href={total > 0 ? `${COMUNIDAD_URL}/partidos` : COMUNIDAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-celeste px-7 py-3.5 text-[1.05rem] font-semibold text-marino transition hover:bg-celeste-claro"
        >
          {total > MOSTRAR ? `Ver los ${total} partidos de hoy` : total > 0 ? 'Ver más partidos de hoy' : 'Ir a We Are Weball'} <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </Section>
  )
}
