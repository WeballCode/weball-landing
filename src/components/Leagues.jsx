// Ligas que usan Weball: FUTSALA destacada con sus cifras, y las demás en tarjetas.
// Abajo, los escudos de clubes que juegan en ligas con Weball.
import { Label, Lead, Section, Title } from './ui.jsx'
import { CountUp, Reveal } from './motion.jsx'
import { ClubWall } from './Scores.jsx'

const futsala = [
  { value: '+46.000', label: 'Jugadores' },
  { value: '+450', label: 'Clubes' },
  { value: '+76.000', label: 'Partidos jugados' },
  { value: '+35.000', label: 'Fichajes desde el celular' },
]

const others = [
  {
    sport: 'Futsal',
    name: 'BAFI',
    text: 'Liga de futsal con su propio tribunal y su reglamento. Es la primera liga con Tribunal IA en su tribunal real.',
    data: '+9.200 jugadores · +170 clubes · +9.100 partidos',
  },
  {
    sport: 'Handball',
    name: 'Superliga Handball',
    text: 'El torneo KEMPA de la Liga Handball Baires, con Mayores y Másters. Weball funciona con las reglas del handball.',
    data: '+680 jugadores · +40 clubes · +350 partidos',
  },
  {
    sport: 'Futsal · Canadá',
    name: 'Edmonton Futsal League',
    text: 'La temporada 2025-26 de la liga de futsal de Edmonton se jugó en Weball, en inglés y con la hora de Canadá.',
    data: '+580 jugadores · 28 clubes · +220 partidos',
  },
]

export default function Leagues() {
  return (
    <>
    <Section id="ligas" tone="darker">
      <Label>Ligas que usan Weball</Label>
      <Title>
        De Buenos Aires <span className="text-celeste">a Bogotá</span>
      </Title>
      <Lead>FUTSALA y sus filiales en cuatro países, BAFI, la Superliga de Handball y una temporada en Canadá.</Lead>

      {/* FUTSALA, la más grande */}
      <Reveal delay={150} className="mt-6 grid gap-6 border-t-[6px] border-celeste bg-marino p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-celeste">Futsal</p>
          <h3 className="mt-2 text-4xl font-extrabold uppercase leading-none">FUTSALA</h3>
          <p className="mt-3 leading-relaxed text-bruma">
            Futsal en Buenos Aires y filiales en Argentina, Colombia, Uruguay y Chile. Cada filial con su sistema, su web y su
            zona horaria, bajo la misma organización.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
          {futsala.map((n) => (
            <div key={n.label} className="flex flex-col-reverse border-t-2 border-linea pt-3">
              <dt className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-bruma">{n.label}</dt>
              <dd className="text-3xl font-extrabold tabular-nums">
                <CountUp value={n.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Las demás ligas */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {others.map((l, i) => (
          <Reveal key={l.name} delay={250 + i * 100} className="flex flex-col border-t-4 border-linea bg-marino p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-celeste">{l.sport}</p>
            <h3 className="mt-2 text-2xl font-extrabold uppercase leading-tight">{l.name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-bruma">{l.text}</p>
            <p className="mt-4 text-sm font-bold">{l.data}</p>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Los escudos van en su propia franja, debajo de las ligas */}
    <div className="bg-marino">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ClubWall />
      </div>
    </div>
    </>
  )
}
