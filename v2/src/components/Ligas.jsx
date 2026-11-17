// Página "Ligas": FUTSALA y sus filiales, BAFI, el handball y Edmonton, con cómo se adaptó Weball a cada una.
// Los datos están en src/ligas.js.
import { futsala, otras, totales, totalesNota } from '../ligas.js'
import { Label, Lead, Section, Title } from './ui.jsx'
import { CountUp, Reveal } from './motion.jsx'

function Stats({ stats, cols = 'grid-cols-2 lg:grid-cols-4', tone = 'dark' }) {
  return (
    <dl className={`mt-8 grid gap-x-8 gap-y-2 ${cols}`}>
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={200 + i * 100}
          className={`flex flex-col-reverse border-t-4 py-3 ${tone === 'light' ? 'border-marino' : 'border-celeste'}`}
        >
          <dt className={`mt-1 text-xs font-medium uppercase tracking-[0.15em] ${tone === 'light' ? 'text-pizarra' : 'text-bruma'}`}>
            {s.label}
          </dt>
          <dd className="text-3xl font-extrabold tabular-nums xl:text-4xl">{s.count === false ? s.value : <CountUp value={s.value} />}</dd>
        </Reveal>
      ))}
    </dl>
  )
}

function Intro() {
  return (
    <Section id="inicio" className="border-b border-linea">
      <Label icon="mundo">Ligas que usan Weball</Label>
      <Title as="h1">
        Grandes ligas, <span className="text-celeste">cada una a su manera</span>
      </Title>
      <Lead>
        FUTSALA y sus filiales en Argentina, Colombia, Uruguay y Chile, BAFI, la Superliga de Handball y la Edmonton Futsal League en
        Canadá. Cada una con su formato, su reglamento y sus datos.
      </Lead>
      <Stats stats={totales} />
      <Reveal as="p" delay={600} className="mt-2 text-xs text-bruma">
        {totalesNota}
      </Reveal>
    </Section>
  )
}

function Futsala() {
  return (
    <>
      <Section id="futsala" tone="darker">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Label icon="liga">{futsala.sport}</Label>
            <Reveal delay={100} className="mt-5">
              <img src="./ligas/futsala-blanco.png" alt="FUTSALA" width="1101" height="201" className="h-auto w-full max-w-sm" />
            </Reveal>
            <Lead>{futsala.text}</Lead>
            <Stats stats={futsala.stats} cols="grid-cols-2" />
          </div>

          {/* Filiales: una fila por filial con sus jugadores y sus partidos */}
          <Reveal delay={200} className="border-t-[6px] border-celeste bg-marino p-5 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-celeste">Filiales en Weball</p>
            <table className="mt-4 w-full text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.15em] text-bruma">
                  <th scope="col" className="pb-2 font-medium">Filial</th>
                  <th scope="col" className="pb-2 text-right font-medium">Jugadores</th>
                  <th scope="col" className="pb-2 text-right font-medium">Partidos</th>
                </tr>
              </thead>
              <tbody>
                {futsala.filiales.map((f) => (
                  <tr key={f.name} className="border-t border-linea">
                    <th scope="row" className="py-2.5 pr-2 font-bold">
                      <span className="mr-2 inline-block w-7 text-xs font-extrabold text-celeste">{f.country}</span>
                      {f.name}
                      {f.web && <span className="block pl-9 text-xs font-medium text-bruma">{f.web}</span>}
                    </th>
                    <td className="py-2.5 text-right font-extrabold tabular-nums">{f.players}</td>
                    <td className="py-2.5 text-right tabular-nums text-bruma">{f.matches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-bruma">Jugadores fichados y partidos jugados, noviembre de 2026.</p>
          </Reveal>
        </div>
      </Section>

      <Section id="futsala-adaptacion" light>
        <Label tone="light" icon="conectar">
          Cómo nos adaptamos a FUTSALA
        </Label>
        <Title>Su forma de trabajar, sus datos</Title>
        <Lead tone="light">Weball se acomodó a cómo FUTSALA ya funcionaba, no al revés.</Lead>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futsala.adaptaciones.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 3) * 100} className="border-t-4 border-marino bg-blanco p-6">
              <h3 className="text-lg font-extrabold uppercase leading-tight">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-pizarra">{a.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  )
}

function Liga({ liga, i }) {
  const tone = i % 2 === 0 ? 'dark' : 'darker'
  return (
    <Section id={liga.id} tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <Label>{liga.sport}</Label>
          <div className="mt-4 flex items-center gap-5">
            {liga.id === 'bafi' && (
              <Reveal delay={100}>
                <img src="./ligas/bafi.png" alt="" width="291" height="295" className="h-20 w-20 shrink-0 object-contain" />
              </Reveal>
            )}
            <Title className="mt-0!">{liga.name}</Title>
          </div>
          <Lead>{liga.text}</Lead>
          <Stats stats={liga.stats} cols="grid-cols-3" />
        </div>
        <ul className="flex flex-col self-start">
          {liga.points.map((p, j) => (
            <Reveal as="li" key={p.title} delay={150 + j * 100} className={`border-celeste py-5 ${j === 0 ? 'border-t-4' : 'border-t-2 border-linea'}`}>
              <p className="text-lg font-extrabold uppercase leading-tight">{p.title}</p>
              <p className="mt-1.5 leading-relaxed text-bruma">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function Cierre() {
  return (
    <Section id="tu-liga" tone="darker">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Label icon="escala">¿Tu liga es la próxima?</Label>
          <Title>Más de 1.000 jugadores, un solo sistema</Title>
          <Lead>Te mostramos cómo quedaría tu liga en Weball, con tu formato y tus procesos.</Lead>
        </div>
        <Reveal delay={300} className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="bg-celeste px-7 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-celeste-claro"
          >
            Quiero ver mi liga
          </a>
          <a
            href="./soluciones.html"
            className="border-2 border-blanco/70 px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-blanco hover:text-marino"
          >
            Ver los 8 procesos
          </a>
        </Reveal>
      </div>
    </Section>
  )
}

export default function Ligas() {
  return (
    <>
      <Intro />
      <Futsala />
      {otras.map((l, i) => (
        <Liga key={l.id} liga={l} i={i} />
      ))}
      <Cierre />
    </>
  )
}
